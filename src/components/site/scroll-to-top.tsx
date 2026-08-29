"use client";

import { useEffect } from "react";

export function ScrollToTopOnReload() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable default browser scroll restoration so refresh doesn't jump mid-page
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Force scroll to top on reload/mount
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
