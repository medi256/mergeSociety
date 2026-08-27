import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./nav/NavBar";
import Script from "next/script";
// import Head from "next/head";
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
  metadataBase: new URL("https://mergesociety.com"),
  title: "Code Report | AI, Tech, Interviews, and Startup Stories",
  description:
    "Merge Society | Reporting on the business of technology, startups, venture capital funding, AI, programming languages and Silicon Valley",
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
  ],
  authors: [{ name: "Merge Society", url: "https://mergesociety.com" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://mergesociety.com",
  },

  verification: {
    google: "JlxC9N5oHsGriWNjRtWihmn3C0eCXD9ei1rcdihpZL4",
    bing: "6eb2ef8d3996f66caeecf3d7cef9b4ae",
  },
  openGraph: {
    title: "Merge Society | AI, Tech, Interviews, and Startup Stories",
    description:
      "Merge Society | Reporting on the business of technology, startups, venture capital funding, AI, programming languages and Silicon Valley",
    url: "https://mergesociety.com",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://img.mergesociety.com/cdn-cgi/image/width=1200,quality=75,format=auto/mergesociety/ML_1_fqv1iq_nmzdcu.png",
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

      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": "https://mergesociety.com",
                name: "Home",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": "https://mergesociety.com/code-report",
                name: "Code Report",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": "https://mergesociety.com/code-report/mongodb-explained",
                name: "MongoDB : The Evolution of NoSQL Databases",
              },
            },
          ],
        })}
      </Script>

      <Script id="grow-me" strategy="lazyOnload">
        {`
            !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpjZjVmMjdhMy1kNTQwLTQwZWEtYjBhOC1mMzA0MTgzMTRkNWQ=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();
          `}
      </Script>

      <Script
        src="//scripts.scriptwrapper.com/tags/cf5f27a3-d540-40ea-b0a8-f30418314d5d.js"
        async
        data-noptimize="1"
        data-cfasync="false"
        strategy="lazyOnload"
      />

      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://img.mergesociety.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//img.mergesociety.com" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
