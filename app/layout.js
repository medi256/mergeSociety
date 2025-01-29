import { Montserrat, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "./NavBar";
import InstallPrompt from "./InstallBanner";

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
    "web development, HTML, CSS, JavaScript, React, coding tutorials, web dev blog, web development courses, learn HTML5, learn CSS, JavaScript tutorials, React tutorials, MergeSociety",
  openGraph: {
    title: "MergeSociety - Learn Web Development",
    description:
      "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
    locale: "en_US",
    url: "https://www.mergesociety.com",
    type: "website",
    siteName: "MergeSociety",
  },
  authors: [{ name: "MergeSociety" }],
  tags: [
    "web development",
    "coding",
    "tutorials",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
  publisher: "MergeSociety",
  copyright: `© ${new Date().getFullYear()} MergeSociety. All rights reserved.`,

  alternates: {
    canonical: "https://www.mergesociety.com",
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3498db" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EVC3DTG6XZ"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVC3DTG6XZ');
          `}
        </Script>

        <Script
          async
          data-id="101458649"
          src="//static.getclicky.com/js"
          strategy="afterInteractive"
        />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.mergesociety.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tutorials",
                  "item": "https://www.mergesociety.com/projects"
                }
              ]
            }
          `}
        </Script>
        <Script id="grow-me" strategy="afterInteractive">
          {`
            !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();
          `}
        </Script>

        {/* Add the Journey monetization script 
        <Script
          src="//scripts.scriptwrapper.com/tags/cf5f27a3-d540-40ea-b0a8-f30418314d5d.js"
          async
          data-noptimize="1"
          data-cfasync="false"
          strategy="afterInteractive"
        />
        */}
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <NavBar />
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
