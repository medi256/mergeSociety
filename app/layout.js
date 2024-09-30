import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Script from "next/script";

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

export const metadata = {
  title: "MergeSociety - Learn Web Development",
  description:
    "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
  keywords:
    "web development, HTML, CSS, JavaScript, React, coding tutorials, web dev blog, web development courses, learn HTML5, learn CSS, JavaScript tutorials, React tutorials",
  openGraph: {
    title: "MergeSociety - Learn Web Development",
    description:
      "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_MERGESOCIETY_URL,
    type: "website",
    siteName: "MergeSociety",
  },
  authors: [{ name: "MergeSociety" }],
  category: "Advanced Web Development Tutorial",
  schema: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "MergeSociety - Learn Web Development",
    description:
      "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
    audience: {
      "@type": "Audience",
      audienceType: "web development learners",
    },
    educationalLevel: "Intermediate to Advanced",
    learningResourceType: "Lesson",
    educationalUse: "learning",
    inLanguage: "en",
    isAccessibleForFree: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MERGESOCIETY_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#3498db",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <NavBar />
        {children}

        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EVC3DTG6XZ"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EVC3DTG6XZ');`}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6271278895910760"
          crossOrigin="anonymous"
        />

        {/* Clicky Analytics */}
        <Script async data-id="101458649" src="//static.getclicky.com/js" />

        {/* Structured Data */}
        <Script
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

        {/* GrowMe Faves */}
        <Script data-grow-initializer="" strategy="lazyOnload">
          {`!(function(){
            window.growMe || (
              (window.growMe = function(e){window.growMe._.push(e);}),
              (window.growMe._ = [])
            );
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = "https://faves.grow.me/main.js";
            e.defer = !0;
            e.setAttribute("data-grow-faves-site-id", "U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
          })();`}
        </Script>
      </body>
    </html>
  );
}
