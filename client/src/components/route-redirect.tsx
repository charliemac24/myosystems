import { useEffect } from "react";
import { useLocation } from "wouter";

type RouteRedirectProps = {
  to: string;
};

export function RouteRedirect({ to }: RouteRedirectProps) {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
}
