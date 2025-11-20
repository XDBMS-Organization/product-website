import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    // Only track on your production domain
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      (location.hostname === "xdbms.io" || location.hostname === "www.xdbms.io")
    ) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
