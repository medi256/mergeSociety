import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./nav/NavBar";
import Script from "next/script";
import Head from "next/head";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code Report | AI, Tech, Interviews, and Startup Stories",
  description:
    "Merge Society is an  online platform focusing on AI, tech, interviews, and startup stories. We provide insights into the latest trends in technology, interviews with industry leaders, and inspiring startup stories.",
  keywords: [
    "AI",
    "Tech",
    "Interviews",
    "Startup Stories",
    "Technology Trends",
    "Industry Insights",
    "Latest Trends in Technology",
    "Inspiring Startup Stories",
    "Tech Interviews",
    "AI Innovations",
    "Tech News",
    "Startup Culture",
    "Entrepreneurship",
    "Business Insights",
    "Tech Careers",
    "Future of Technology",
    "Tech Innovations",
    "AI Applications",
    "Tech Startups",
    "Tech Industry",
    "Tech Community",
    "Tech Events",
    "Tech Conferences",
    "Tech Networking",
    "Tech Resources",
    "Tech Blogs",
    "Tech Articles",
    "Code Report",
    "programming",
    "web development",
    "software development",
    "coding",
    "technology",
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Angular",
    "Vue.js",
    "Django",
    "Flask",
    "Ruby on Rails",
    "PHP",
    "Swift",
    "Kotlin",
    "Go",
    "Rust",
    "TypeScript",
    "SQL",
    "NoSQL",
    "machine learning",
    "artificial intelligence",
    "deep learning",
    "data science",
    "big data",
    "data analysis",
    "data visualization",
    "data engineering",
    "data mining",
    "data warehousing",
    "Robots",
    "robotics",
    "robotic process automation",
    "robotic process automation",
    "robotic process automation tools",
    "robotic process automation software",
    "robotic process automation solutions",
    "robotic process automation platforms",
    "robotic process automation frameworks",
    "robotic process automation best practices",
    "robotic process automation use cases",
    "robotic process automation case studies",
    "interviews",
    "interview preparation",
    "interview questions",
    "interview tips",
    "interview techniques",
    "interview strategies",
    "interview skills",
    "interview process",
    "interview techniques",
    "interview questions and answers",
    "interview preparation tips",
    "interview preparation strategies",
    "interview preparation techniques",
    "interview preparation resources",
    "interview preparation books",
    "acquisitions",
    "acquisition strategy",
    "acquisition process",
    "acquisition planning",
    "acquisition integration",
    "acquisition due diligence",
    "acquisition financing",
    "acquisition valuation",
    "acquisition negotiation",
    "acquisition management",
    "acquisition analysis",
    "acquisition research",
    "acquisition trends",
    "acquisition news",
    "acquisition case studies",
    "acquisition best practices",
    "acquisition success stories",
    "acquisition challenges",
  ],
  authors: [{ name: "Merge Society", url: "https://www.mergesociety.com" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com",
  },

  verification: {
    google:
      "google-site-verification=JlxC9N5oHsGriWNjRtWihmn3C0eCXD9ei1rcdihpZL4",
    bing: "6eb2ef8d3996f66caeecf3d7cef9b4ae",
    other: {
      me: ["mailto:managersebowa4525@gmail.com"],
    },
  },

  openGraph: {
    title: "Merge Society | AI, Tech, Interviews, and Startup Stories",
    description:
      "Merge Society is an online platform focusing on AI, tech, interviews, and startup stories. We provide insights into the latest trends in technology, interviews with industry leaders, and inspiring startup stories.",
    url: "https://www.mergesociety.com",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
        width: 1200,
        height: 630,
        alt: "Merge Society preview image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      {/* yandex   script  */}

      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t),
      a=e.getElementsByTagName(t)[0],
      k.async=1,
      k.src=r,
      a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(101457689, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
    });
  `}
      </Script>

      <Head>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101457689"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Head>

      <Script id="grow-me" strategy="afterInteractive">
        {`
            !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();
          `}
      </Script>
      {/* 
      <Script
        src="//scripts.scriptwrapper.com/tags/cf5f27a3-d540-40ea-b0a8-f30418314d5d.js"
        async
        data-noptimize="1"
        data-cfasync="false"
        strategy="afterInteractive"
      /> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
