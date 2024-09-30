// import { useEffect, useRef } from "react";

// const AdUnit = () => {
//   const adLoaded = useRef(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760";
//     script.async = true;
//     script.crossOrigin = "anonymous";
//     document.body.appendChild(script);

//     if (!adLoaded.current) {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//       adLoaded.current = true;
//     }

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <ins
//       className="adsbygoogle"
//       style={{ display: "block" }}
//       data-ad-client="ca-pub-6271278895910760"
//       data-ad-slot="8956915466"
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     ></ins>
//   );
// };

// export default AdUnit;

"use client";

import React, { useEffect, useRef } from "react";

const AdUnit = () => {
  const adRef = useRef(null);
  const adInitialized = useRef(false);

  useEffect(() => {
    if (adInitialized.current) return;

    const loadAdScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (adRef.current) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (err) {
            console.error("AdSense error:", err);
          }
        }
      };
      document.head.appendChild(script);
    };

    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      loadAdScript();
    } else if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }

    adInitialized.current = true;

    return () => {
      adInitialized.current = false;
    };
  }, []);

  return (
    <div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6271278895910760"
        data-ad-slot="8956915466"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <br />
    </div>
  );
};

export default AdUnit;
