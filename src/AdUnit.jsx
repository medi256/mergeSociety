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
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6271278895910760"
      data-ad-slot="8956915466"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdUnit;

export const InArticleAdUnit = () => {
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
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6271278895910760"
        data-ad-slot="4958406847"
      />
      <br />
    </div>
  );
};
