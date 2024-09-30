"use client";

// import React, { useEffect } from "react";

// const withAds = (WrappedComponent, adClient, adSlot) => {
//   const AdComponent = (props) => {
//     useEffect(() => {
//       const script = document.createElement("script");
//       script.src =
//         "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
//       script.async = true;
//       script.crossOrigin = "anonymous";
//       document.head.appendChild(script);

//       script.onload = () => {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       };

//       return () => {
//         document.head.removeChild(script);
//       };
//     }, []);

//     return (
//       <div>
//         <WrappedComponent {...props} />
//         <ins
//           className="adsbygoogle"
//           style={{ display: "block" }}
//           data-ad-client={adClient}
//           data-ad-slot={adSlot}
//           data-ad-format="auto"
//           data-full-width-responsive="true"
//         />
//         <br />
//       </div>
//     );
//   };

//   return AdComponent;
// };

// export default withAds;

// components/AdUnit.js
import React, { useEffect } from "react";

const AdUnit = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins
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
