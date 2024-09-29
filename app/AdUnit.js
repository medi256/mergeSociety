"use client";

import Script from "next/script";

const AdUnit = () => {
  return (
    <div>
      {/* Load the AdSense script */}
      <Script
        id="adsense"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        onLoad={() => {
          // Push the ad unit after the script has loaded
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }}
        crossOrigin="anonymous"
      />

      {/* Ad Unit */}
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
