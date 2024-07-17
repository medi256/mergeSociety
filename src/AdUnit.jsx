// const AdUnit = () => {
//   return (
//     <div className="display-ad">
//       <script
//         async
//         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760"
//         crossorigin="anonymous"
//       ></script>
//       <ins
//         className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client="ca-pub-6271278895910760"
//         data-ad-slot="8956915466"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//       <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
//     </div>
//   );
// };

// export default AdUnit;

import React, { useEffect } from "react";

const AdUnit = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="display-ad">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6271278895910760"
        data-ad-slot="8956915466"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;
