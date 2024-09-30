// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EVC3DTG6XZ"
          />
          <script
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
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760"
            crossOrigin="anonymous"
          />

          {/* Clicky Analytics */}
          <script async data-id="101458649" src="//static.getclicky.com/js" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
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

          {/* Grow.me Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !(function(){
                  window.growMe || ((window.growMe = function(e){
                    window.growMe._.push(e);
                  }), (window.growMe._ = []));
                  var e = document.createElement("script");
                  e.type = "text/javascript";
                  e.src = "https://faves.grow.me/main.js";
                  e.defer = !0;
                  e.setAttribute("data-grow-faves-site-id", "U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");
                  var t = document.getElementsByTagName("script")[0];
                  t.parentNode.insertBefore(e, t);
                })();
              `,
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
}

export default MyDocument;
