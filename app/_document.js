// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760"
            crossOrigin="anonymous"
          ></script>

          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EVC3DTG6XZ"
          ></script>
          <script id="gtag-init">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVC3DTG6XZ');`}
          </script>

          {/* Clicky Analytics */}
          <script
            async
            data-id="101458649"
            src="//static.getclicky.com/js"
          ></script>

          {/* Structured Data */}
          <script
            id="structured-data"
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
        </Head>
        <body className={`${montserrat.variable} ${roboto.variable}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
