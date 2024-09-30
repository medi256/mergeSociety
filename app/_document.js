// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EVC3DTG6XZ"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EVC3DTG6XZ');
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760"
          crossOrigin="anonymous"
        />

        {/* Clicky Analytics */}
        <Script
          async
          strategy="beforeInteractive"
          data-id="101458649"
          src="//static.getclicky.com/js"
        />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mergesociety.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tutorials",
                  item: "https://www.mergesociety.com/tutorials",
                },
              ],
            }),
          }}
        />

        {/* Grow Me Script */}
        <Script
          id="grow-me"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!(function(){window.growMe||(window.growMe=function(e){window.growMe._.push(e);},window.growMe._=[]);var e=document.createElement("script");e.type="text/javascript",e.src="https://faves.grow.me/main.js",e.defer=!0,e.setAttribute("data-grow-faves-site-id","U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
