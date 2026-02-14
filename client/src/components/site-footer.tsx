import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              &copy; {new Date().getFullYear()} MYO Systems. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1" data-testid="text-footer-tagline">
              Modernize Your Operations
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-footer-privacy">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors" data-testid="link-footer-terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}