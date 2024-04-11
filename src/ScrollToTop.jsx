import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("your-section-id");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInSection(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [isInSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function throttle(func, limit) {
  let throttling = false;
  return function (...args) {
    if (!throttling) {
      func.apply(this, args);
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, limit);
    }
  };
}

export default ScrollToTop;
