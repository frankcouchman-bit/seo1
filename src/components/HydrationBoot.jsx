import { useEffect } from "react";

/** Minimal React island to satisfy islands architecture without touching your SPA DOM. */
export default function HydrationBoot() {
  useEffect(() => {
    // console.debug("React island hydrated");
  }, []);
  return null;
}
