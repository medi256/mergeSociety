// components/ScrollToTop.js
"use client"; // Ensure the component is client-side only

import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0); // Scroll to top when the component is mounted
    };

    // Trigger scroll to top on mount (initial load)
    handleScrollToTop();

    // Optional: Add more logic if needed to listen to route changes
    return () => {
      // Clean up if needed
    };
  }, []);

  return null; // No UI needed
};

export default ScrollToTop;
