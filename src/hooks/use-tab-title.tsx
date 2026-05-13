import { useEffect } from "react";

/**
 * Swap the document title when the tab loses visibility,
 * restore it when the user returns.
 */
export function useTabTitle(awayTitle: string) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.title;

    const handle = () => {
      if (document.hidden) {
        document.title = awayTitle;
      } else {
        document.title = original;
      }
    };

    document.addEventListener("visibilitychange", handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
      document.title = original;
    };
  }, [awayTitle]);
}
