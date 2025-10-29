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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tech",
          "item": "https://www.mergesociety.com/tech"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Chrome DevTools Guide",
          "item": "https://www.mergesociety.com/tech/21-devTools"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Vibe Coding Guide",
          "item": "https://www.mergesociety.com/tech/vibe-coding"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Real World Coding Career Advice",
          "item": "https://www.mergesociety.com/code-report/real-world-coding-career-advice"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Tech Insights",
          "item": "https://www.mergesociety.com/code-report"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "AI Insights",
          "item": "https://www.mergesociety.com/ai"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "What is AI Agent",
          "item": "https://www.mergesociety.com/ai/what-is-agents"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Artificial Intelligence vs Machine Learning vs Deep Learning",
          "item": "https://www.mergesociety.com/ai/ai-ml-dp"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "WebSockets vs Socket.IO",
          "item": "https://www.mergesociety.com/code-report/websockets-explained"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "WebSocket vs Polling",
          "item": "https://www.mergesociety.com/code-report/websocket-polling"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "HTTP 1.1 vs HTTP 2 vs HTTP 3",
          "item": "https://www.mergesociety.com/code-report/http1-http2-http3"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "AI Trends 2025",
          "item": "https://www.mergesociety.com/ai/ai-trends-2025"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "AI Tools for Research",
          "item": "https://www.mergesociety.com/ai/ai-tools-research-2025"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "AI Coding Tools",
          "item": "https://www.mergesociety.com/code-report/best-ai-tool-for-coding"
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
