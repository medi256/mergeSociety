"use client";

// components/AdUnit.js

import { useEffect, useRef } from "react";

const AdUnit = () => {
  const adLoaded = useRef(false); // Ref to track if the ad has been loaded

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Push ad only if not already loaded
    if (!adLoaded.current) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.current = true; // Mark as loaded
    }

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6271278895910760"
      data-ad-slot="8956915466"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdUnit;
