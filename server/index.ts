import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  // In local development macOS often occupies 5000 (Control Center). If PORT is
  // not manually set, try the next few ports instead of crashing.
  const tryListen = async (startPort: number) => {
    let attemptPort = startPort;

    for (let i = 0; i < 5; i++) {
      try {
        await new Promise<void>((resolve, reject) => {
          const onError = (err: any) => {
            httpServer.off("error", onError);
            reject(err);
          };

          httpServer.once("error", onError);
          httpServer.listen(
            {
              port: attemptPort,
              host: "0.0.0.0",
              // reusePort triggers ENOTSUP on macOS; leave off unless explicitly enabled
              reusePort: process.env.REUSE_PORT === "true",
            },
            () => {
              httpServer.off("error", onError);
              resolve();
            },
          );
        });

        log(`serving on port ${attemptPort}`);
        return;
      } catch (err: any) {
        if (err.code !== "EADDRINUSE" || process.env.PORT) {
          throw err;
        }

        log(`port ${attemptPort} in use, trying ${attemptPort + 1}`);
        attemptPort += 1;
      }
    }

    throw new Error(
      `Could not bind to ports ${startPort}-${startPort + 4}. Set PORT to a free port.`,
    );
  };

  await tryListen(port);
})();
