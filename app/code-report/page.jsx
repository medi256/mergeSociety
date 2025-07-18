import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Code Report",
  description:
    "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New Articles every week covering the topics every programmer should know. ",
  keywords: [
    "Code Report",
    "Code Tutorials",
    "Tech News",
    "Tech Trends",
    "Tech Companies",
    "JavaScript insights",
    "React tutorials",
    "Web Development",
    "CSS tips",
    "Java tutorials",
    "Python tutorials",
    "HTML tips",
    "c++",
    "next js",
    "typescript",
    "PHP",
    "Ruby",
    "Swift",
    "Programming Languages",
    "Software Development",
    "DSA",
    "Data Structures",
    "Algorithms",
    "Coding Challenges",
  ],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/code-report" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/code-report",
  },
  openGraph: {
    title: "Merge Society | Code Report",
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New Articles every week covering the topics every programmer should know. ",
    url: "https://www.mergesociety.com/code-report",
    siteName: "Merge Society",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
        width: 1200,
        height: 630,
        alt: "Merge Society preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New Articles every week covering the topics every programmer should know.",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
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

const Section6 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        " From SaaS Panic to Open Source Paradise: The Ultimate Guide to Escaping Subscription Hell",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745755138/airfocus-x8bEZVZnG_o-unsplash_zjo2s6.jpg",
      alt: " From SaaS Panic to Open Source Paradise: The Ultimate Guide to  Escaping Subscription Hell",
      date: "April 27, 2025",
      articleRoute: "saas",
    },
    {
      id: 2,
      title:
        "The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745759226/pankaj-patel-_SgRNwAVNKw-unsplash_o1ddom.jpg",
      alt: " The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      date: "April 27, 2025",
      articleRoute: "best-framework",
    },
    {
      id: 3,
      title:
        " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg",
      alt: " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      date: "April 27, 2025",
      articleRoute: "tech-stack",
    },
    {
      id: 4,
      title:
        "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg",
      alt: "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      date: "April 27, 2025",
      articleRoute: "labing",
    },
    {
      id: 5,
      title:
        "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
      alt: "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      date: "April 27, 2025",
      articleRoute: "algorithms",
    },
    {
      id: 6,
      title: "Every Python Library and Frameworks Explained",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746170967/rubaitul-azad-ZIPFteu-R8k-unsplash_li7rer.jpg",
      alt: "Every Python Library and Frameworks Explained",
      date: "May 2, 2025",
      articleRoute: "python-libraries",
    },
    {
      id: 7,
      title: "Every React Concept Explained",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746184397/lautaro-andreani-xkBaqlcqeb4-unsplash_jfhsu0.jpg",
      alt: "Every React Concept Explained",
      date: "May 2, 2025",
      articleRoute: "all-react-concepts",
    },
    {
      id: 8,
      title: "All The JavaScript You Need To Know For React",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746187246/rahul-mishra-JpF58ANavoc-unsplash_eb19pv.jpg",
      alt: "All The JavaScript You Need To Know For React",
      date: "May 2, 2025",
      articleRoute: "react-you-need",
    },
    {
      id: 9,
      title: "How to Learn JavaScript FAST in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746189496/growtika-qaedPly-Uro-unsplash_g2ehcr.jpg",
      alt: "How to Learn JavaScript FAST in 2025",
      date: "May 2, 2025",
      articleRoute: "how-to-learn-javascript",
    },
    {
      id: 10,
      title:
        "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746196556/rahul-mishra-XXMA-8fBB-g-unsplash_iz6p3n.jpg",
      alt: "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      date: "May 2, 2025",
      articleRoute: "react-hooks",
    },
    {
      id: 11,
      title:
        "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746200797/fotis-fotopoulos-DuHKoV44prg-unsplash_c7aebv.jpg",
      alt: "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      date: "May 2, 2025",
      articleRoute: "fullstack-roadmap",
    },
    {
      id: 12,
      title: "APIs Explained (in 4 Minutes)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746606559/api_cbneaq.jpg",
      alt: "Visual representation of API communication between applications",
      date: "May 7, 2025",
      articleRoute: "apis-explained",
    },
    {
      id: 13,
      title:
        "MongoDB: The Powerful, Flexible NoSQL Database Revolutionizing Modern Development",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746613572/rubaitul-azad-cijiWIwsMB8-unsplash_fbusr1.jpg",
      alt: "MongoDB database architecture visualization",
      date: "May 7, 2025",
      articleRoute: "mongodb-explained",
    },
    {
      id: 14,
      title:
        "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746780470/6554783_amd2ad.jpg",
      alt: "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      date: "May 9, 2025",
      articleRoute: "databases",
    },
    {
      id: 15,
      title:
        "Apache vs. NGINX: A Complete Guide to Modern Web Server and Proxy Architecture",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746784148/pexels-realtoughcandy-11035538_iptnmq.jpg",
      alt: "Apache vs NGINX architecture diagram showing reverse proxy implementation, load balancing, and performance characteristics",
      date: "May 9, 2025",
      articleRoute: "ApachevsNGINX",
    },
    {
      id: 16,
      title:
        "What is a web server in simple terms? This Is the Clearest, Easiest Explanation You'll Ever Find Online",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746793502/pexels-cookiecutter-17489152_hulqbn.jpg",
      alt: "Visual diagram explaining web server architecture showing HTTP requests, responses, and how web servers handle traffic",
      date: "May 9, 2025",
      articleRoute: "web-server",
    },
    {
      id: 17,
      title: "Define Domain Name System (DNS)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746795757/gkhjkg_hkj_kgn74b.webp",
      alt: "DNS explanation diagram showing how domains resolve to IP addresses",
      date: "May 9, 2025",
      articleRoute: "what-is-dns",
    },
    {
      id: 18,
      title:
        "DNS Records Explained With Examples: Understanding, Using, and Securing Your Domain's Backbone",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746797559/4084_qpacfm.jpg",
      alt: "DNS Records Infographic showing how domain names connect to IP addresses",
      date: "May 9, 2025",
      articleRoute: "dns-records",
    },
    {
      id: 19,
      title: "Easy Definition of VPN",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746806105/petter-lagson-NEtFkKuo7VY-unsplash_hjouju.jpg",
      alt: "Visual explanation of how a VPN protects your internet connection",
      date: "May 9, 2025",
      articleRoute: "vpn-explained",
    },
    {
      id: 20,
      title:
        "Let's Learn Something! Algorithms Explained in 5 Levels – From Peanut Butter Sandwiches to Artificial Intelligence",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746861077/woman-using-calculator-near-plan-equipments_ndb3yp.jpg",
      alt: "Visual representation of algorithms from simple tasks to AI neural networks",
      date: "May 10, 2025",
      articleRoute: "algorithms-explained",
    },
    {
      id: 21,
      title:
        "REST API Meaning: The Backbone of Modern Cloud Application Development",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746862287/7015995_iwu9fs.jpg",
      alt: "REST API Meaning: The Backbone of Modern Cloud Application Development",
      date: "May 10, 2025",
      articleRoute: "rest-api",
    },
    {
      id: 22,
      title:
        "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746863874/SDK-vs-API_-Differences-Explained-in-this-Blog-1280x720_axa4cf.jpg",
      alt: "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      date: "May 10, 2025",
      articleRoute: "sdk-vs-api",
    },
    {
      id: 23,
      title: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746865685/pexels-padrinan-1591059_tc0afv.jpg",
      alt: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      date: "May 10, 2025",
      articleRoute: "http1-http2-http3",
    },
    {
      id: 24,
      title:
        "WebSockets vs. Polling vs. Long Polling: How Web Sockets work | System Design Interview Basics",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746868335/miguel-angel-padrinan-alba-rX15QZv2Tng-unsplash_qbwgmy.jpg",
      alt: "Visual comparison of WebSockets, Long Polling and Regular Polling communication patterns",
      date: "May 10, 2025",
      articleRoute: "websocket-polling",
    },
    {
      id: 25,
      title:
        "WebSockets in 100 Seconds: An In Depth Guide to WebSockets, Socket.IO, and the Future of Real Time Communication",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746885298/pexels-danny-meneses-340146-943096_na23qm.jpg",
      alt: "WebSockets real-time communication architecture diagram showing client-server bidirectional data flow",
      date: "May 16, 2025",
      articleRoute: "websocets-explained",
    },
    {
      id: 26,
      title:
        "Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746885298/pexels-danny-meneses-340146-943096_na23qm.jpg",
      alt: "real world coding career advice",
      date: "June 28, 2025",
      articleRoute: "real-world-coding-career-advice",
    },
    {
      id: 27,
      title: "AI Coding Tools",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751618356/ChatGPT_Image_Jul_4_2025_11_38_55_AM_vakgfx.png",
      alt: "AI Coding Tools",
      date: "July 4, 2025",
      articleRoute: "best-ai-tool-for-coding",
    },
    {
      id: 28,
      title:
        "Computer Science vs Software Engineering: Your Ultimate Guide to Differences, Courses, and Careers",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1752850382/softwareVScomputerscience_zuymum.webp",
      alt: "Computer Science vs Software Engineering comparison infographic showing courses, careers, and salary differences",
      date: "July 18, 2025",
      articleRoute: "computer-science-vs-software-engineering",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section>
      <div className="h-ai">
        <h1>Code Report</h1>
      </div>

      <div className="bg-grid">
        {latestPosts.map((project) => (
          <Link
            key={project.id}
            href={`/code-report/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image"
                priority
              />
            </div>
            <div className="bg-content">
              <h2 className="bg-title">{project.title}</h2>
              <time
                className="bg-date"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section6;
