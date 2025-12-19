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
        url: "https://img.mergesociety.com/mergesociety/ML_1_fqv1iq_nmzdcu.png",
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
      "https://img.mergesociety.com/mergesociety/ML_1_fqv1iq_nmzdcu.png",
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
      image: "/mergesociety/airfocus-x8bEZVZnG_o-unsplash_zjo2s6_dwitnt.jpg",
      alt: " From SaaS Panic to Open Source Paradise: The Ultimate Guide to  Escaping Subscription Hell",
      date: "April 27, 2025",
      articleRoute: "saas",
    },
    {
      id: 2,
      title:
        "The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      image:
        "/mergesociety/pankaj-patel-_SgRNwAVNKw-unsplash_o1ddom_txvio6.jpg",
      alt: " The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      date: "April 27, 2025",
      articleRoute: "best-framework",
    },
    {
      id: 3,
      title:
        " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      image: "/mergesociety/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f_sd3lk9.jpg",
      alt: " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      date: "April 27, 2025",
      articleRoute: "tech-stack",
    },
    {
      id: 4,
      title:
        "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      image: "/mergesociety/alex-knight-2EJCSULRwC8-unsplash_cpovif_u5j7ff.jpg",
      alt: "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      date: "April 27, 2025",
      articleRoute: "labing",
    },
    {
      id: 5,
      title:
        "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      image:
        "/mergesociety/markus-spiske-iar-afB0QQw-unsplash_eifg9s_od6qtp.jpg",
      alt: "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      date: "April 27, 2025",
      articleRoute: "algorithms",
    },
    {
      id: 6,
      title: "Every Python Library and Frameworks Explained",
      image: "/mergesociety/top-python-libraries.webp",
      alt: "Every Python Library and Frameworks Explained",
      date: "May 2, 2025",
      articleRoute: "python-libraries",
    },
    {
      id: 7,
      title: "Every React Concept Explained",
      image:
        "/mergesociety/lautaro-andreani-xkBaqlcqeb4-unsplash_jfhsu0_qwkgef.jpg",
      alt: "Every React Concept Explained",
      date: "May 2, 2025",
      articleRoute: "all-react-concepts",
    },
    {
      id: 8,
      title: "All The JavaScript You Need To Know For React",
      image:
        "/mergesociety/rahul-mishra-JpF58ANavoc-unsplash_eb19pv_uwmjkp.jpg",
      alt: "All The JavaScript You Need To Know For React",
      date: "May 2, 2025",
      articleRoute: "react-you-need",
    },
    {
      id: 9,
      title: "How to Learn JavaScript FAST in 2025",
      image: "/mergesociety/growtika-qaedPly-Uro-unsplash_g2ehcr_edngle.jpg",
      alt: "How to Learn JavaScript FAST in 2025",
      date: "May 2, 2025",
      articleRoute: "how-to-learn-javascript",
    },
    {
      id: 10,
      title:
        "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      image:
        "/mergesociety/rahul-mishra-XXMA-8fBB-g-unsplash_iz6p3n_cbpptu.jpg",
      alt: "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      date: "May 2, 2025",
      articleRoute: "react-hooks",
    },
    {
      id: 11,
      title:
        "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      image:
        "/mergesociety/fotis-fotopoulos-DuHKoV44prg-unsplash_c7aebv_hr7bb2.jpg",
      alt: "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      date: "May 2, 2025",
      articleRoute: "fullstack-roadmap",
    },
    {
      id: 12,
      title: "APIs Explained (in 4 Minutes)",
      image: "/mergesociety/api_cbneaq_bfxrcg.jpg",
      alt: "Visual representation of API communication between applications",
      date: "May 7, 2025",
      articleRoute: "apis-explained",
    },
    {
      id: 13,
      title:
        "MongoDB: The Powerful, Flexible NoSQL Database Revolutionizing Modern Development",
      image: "/mergesociety/MongoDB_Logo.jpg",
      alt: "MongoDB database architecture visualization",
      date: "May 7, 2025",
      articleRoute: "mongodb-explained",
    },
    {
      id: 14,
      title:
        "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      image: "/mergesociety/6554783_amd2ad_suixhe.jpg",
      alt: "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      date: "May 9, 2025",
      articleRoute: "databases",
    },
    {
      id: 15,
      title:
        "Apache vs. NGINX: A Complete Guide to Modern Web Server and Proxy Architecture",
      image: "/mergesociety/pexels-realtoughcandy-11035538_iptnmq_x76qgy.jpg",
      alt: "Apache vs NGINX architecture diagram showing reverse proxy implementation, load balancing, and performance characteristics",
      date: "May 9, 2025",
      articleRoute: "ApachevsNGINX",
    },
    {
      id: 16,
      title:
        "What is a web server in simple terms? This Is the Clearest, Easiest Explanation You'll Ever Find Online",
      image:
        "/mergesociety/miguel-angel-padrinan-alba-rX15QZv2Tng-unsplash_qbwgmy_bobdji.jpg",
      alt: "Visual diagram explaining web server architecture showing HTTP requests, responses, and how web servers handle traffic",
      date: "May 9, 2025",
      articleRoute: "web-server",
    },
    {
      id: 17,
      title: "Define Domain Name System (DNS)",
      image: "/mergesociety/gkhjkg_hkj_kgn74b_bcf5ss.webp",
      alt: "DNS explanation diagram showing how domains resolve to IP addresses",
      date: "May 9, 2025",
      articleRoute: "what-is-dns",
    },
    {
      id: 18,
      title:
        "DNS Records Explained With Examples: Understanding, Using, and Securing Your Domain's Backbone",
      image: "/mergesociety/4084_qpacfm_z9pvmi.jpg",
      alt: "DNS Records Infographic showing how domain names connect to IP addresses",
      date: "May 9, 2025",
      articleRoute: "dns-records",
    },
    {
      id: 19,
      title: "Easy Definition of VPN",
      image: "/mergesociety/pexels-cookiecutter-17489152_hulqbn_mqucvv.jpg",
      alt: "Visual explanation of how a VPN protects your internet connection",
      date: "May 9, 2025",
      articleRoute: "vpn-explained",
    },
    {
      id: 20,
      title:
        "Let's Learn Something! Algorithms Explained in 5 Levels – From Peanut Butter Sandwiches to Artificial Intelligence",
      image:
        "/mergesociety/woman-using-calculator-near-plan-equipments_ndb3yp_rmnqda.jpg",
      alt: "Visual representation of algorithms from simple tasks to AI neural networks",
      date: "May 10, 2025",
      articleRoute: "algorithms-explained",
    },
    {
      id: 21,
      title:
        "REST API Meaning: The Backbone of Modern Cloud Application Development",
      image: "/mergesociety/7015995_iwu9fs_to6s06.jpg",
      alt: "REST API Meaning: The Backbone of Modern Cloud Application Development",
      date: "May 10, 2025",
      articleRoute: "rest-api",
    },
    {
      id: 22,
      title:
        "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      image:
        "/mergesociety/SDK-vs-API_-Differences-Explained-in-this-Blog-1280x720_axa4cf_zv6mkx.jpg",
      alt: "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      date: "May 10, 2025",
      articleRoute: "sdk-vs-api",
    },
    {
      id: 23,
      title: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      image: "/mergesociety/pexels-padrinan-1591059_tc0afv_h9h3kh.jpg",
      alt: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      date: "May 10, 2025",
      articleRoute: "http1-http2-http3",
    },
    {
      id: 24,
      title:
        "WebSockets vs. Polling vs. Long Polling: How Web Sockets work | System Design Interview Basics",
      image:
        "/mergesociety/miguel-angel-padrinan-alba-rX15QZv2Tng-unsplash_qbwgmy_bobdji.jpg",
      alt: "Visual comparison of WebSockets, Long Polling and Regular Polling communication patterns",
      date: "May 10, 2025",
      articleRoute: "websocket-polling",
    },
    {
      id: 25,
      title:
        "WebSockets in 100 Seconds: An In Depth Guide to WebSockets, Socket.IO, and the Future of Real Time Communication",
      image:
        "/mergesociety/pexels-danny-meneses-340146-943096_na23qm_k8pj8z.jpg",
      alt: "WebSockets real-time communication architecture diagram showing client-server bidirectional data flow",
      date: "May 16, 2025",
      articleRoute: "websocets-explained",
    },
    {
      id: 26,
      title:
        "Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career",
      image:
        "/mergesociety/pexels-danny-meneses-340146-943096_na23qm_k8pj8z.jpg",
      alt: "real world coding career advice",
      date: "June 28, 2025",
      articleRoute: "real-world-coding-career-advice",
    },
    {
      id: 27,
      title: "AI Coding Tools",
      image:
        "/mergesociety/ChatGPT_Image_Jul_4_2025_11_38_55_AM_vakgfx_bxniq4.png",
      alt: "AI Coding Tools",
      date: "July 4, 2025",
      articleRoute: "best-ai-tool-for-coding",
    },
    {
      id: 28,
      title:
        "Computer Science vs Software Engineering: Your Ultimate Guide to Differences, Courses, and Careers",
      image: "/mergesociety/softwareVScomputerscience_zuymum_qccq5q.webp",
      alt: "Computer Science vs Software Engineering comparison infographic showing courses, careers, and salary differences",
      date: "July 18, 2025",
      articleRoute: "computer-science-vs-software-engineering",
    },
    {
      id: 29,
      title:
        "APIs explained - what is an API, why it exists, and real examples you already use every day",
      image: "/mergesociety/audio_1756110851790_hdqj7r_c3wqmm_ky0rmc.webp",
      alt: "What  is an  API?",
      date: "August 25, 2025",
      articleRoute: "apis-explained-to-a-kid",
    },
    {
      id: 30,
      title:
        "Pointers in C/C++ - what a pointer is, how pointer syntax works, and why programmers care",
      image: "/mergesociety/audio_1756133645586_ybfdxp_m0ss09_katcfd.webp",
      alt: "Pointers in C and C++",
      date: "August 25, 2025",
      articleRoute: "pointers-in-c-and-cpp",
    },
    {
      id: 31,
      title:
        "Math for Programmers - 10 Essential Concepts explained with memes, code, and real talk",
      image: "/mergesociety/audio_1756224766523_5ki8jf_rtels1_ndc1jd.webp",
      alt: "Math for Programmers",
      date: "August 26, 2025",
      articleRoute: "math-for-programmers",
    },
    {
      id: 32,
      title:
        "Tutorial Hell - How to Escape Tutorial Hell and Actually Learn to Code",
      image: "/mergesociety/audio_1756289795525_wcylsp_rs9hya_m0balx.webp",
      alt: "Tutorial Hell",
      date: "August 27, 2025",
      articleRoute: "tutorial-hell",
    },
    {
      id: 33,
      title:
        "SQL - What Is Data, What Is a Database, and How DBMS Makes It All Work",
      image: "/mergesociety/audio_1756482278183_bx5as9_sleoep_yqfy13.jpg",
      alt: "SQL - What Is Data, What Is a Database, and How DBMS Makes It All Work",
      date: "August 29, 2025",
      articleRoute: "what-is-a-database",
    },
    {
      id: 34,
      title:
        "Why We Need a Translator in Programming and What a Compiler Really Is",
      image: "/mergesociety/audio_1758351295832_fnxuwq_apk5yu_ue3k3d.jpg",
      alt: "Why We Need a Translator in Programming and What a Compiler Really Is",
      date: "September 21, 2025",
      articleRoute: "what-is-a-compiler",
    },
    {
      id: 35,
      title: "So How Is Linux Developed To Achieve All Of This?",
      image: "/mergesociety/audio_1759326035386_cek358_cdskna_nvd9o5.webp",
      alt: "So How Is Linux Developed To Achieve All Of This?",
      date: "October 1, 2025",
      articleRoute: "how-linux-is-created",
    },
    {
      id: 36,
      title: "How To Start Programming Projects The Lazy Way",
      image: "/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp",
      alt: "How To Start Programming Projects The Lazy Way",
      date: "October 5, 2025",
      articleRoute: "how-to-build-projects",
    },
    {
      id: 37,
      title: "Is Coding Worth Learning in 2026?",
      image: "/mergesociety/is_coding_worth_it_in_2025.webp",
      alt: "Is Coding Worth Learning in 2026?",
      date: "November 30, 2025",
      articleRoute: "is-it-still-worth-learning-to-code",
    },
    {
      id: 38,
      title: "Best Programming Books for Beginners",
      image: "/mergesociety/Books_to_learn_Programming.webp",
      alt: "Best Programming Books for Beginners",
      date: "December 1, 2025",
      articleRoute: "best_books_to_learn_programming",
    },
    {
      id: 39,
      title: "Git Basic Commands Step-By-Step Guide",
      image: "/mergesociety/git%20%20basic%20commands.webp",
      alt: "Git Basic Commands Step-By-Step Guide",
      date: "December 3, 2025",
      articleRoute: "basic-git-commands",
    },
    {
      id: 40,
      title: "HTTP, Secure HTTP, SSL, and TLS - what they are, how they work",
      image: "/mergesociety/https_and_https.webp",
      alt: "HTTP, Secure HTTP, SSL, and TLS - what they are, how they work",
      date: "December 4, 2025",
      articleRoute: "https_and_https",
    },
    {
      id: 41,
      title: "Types of Programming Languages",
      image: "/mergesociety/Types%20of%20%20Programming%20Languages.webp",
      alt: "Types of Programming Languages",
      date: "December 5, 2025",
      articleRoute: "types-of-programming-languages",
    },
    {
      id: 42,
      title:
        "CRUD Operations Complete Guide - Database to REST API Implementation",
      image: "/mergesociety/crud_explained.webp",
      alt: "CRUD Operations Complete Guide - Database to REST API Implementation",
      date: "December 9, 2025",
      articleRoute: "crud-explained",
    },
    {
      id: 43,
      title: "Top 5 Websites To Practice Coding Daily And Actually Get Better",
      image: "/mergesociety/top_free_websites_to_practice_coding.webp",
      alt: "Top 5 Websites To Practice Coding Daily And Actually Get Better",
      date: "December 11, 2025",
      articleRoute: "websites-to-practice-coding",
    },
    {
      id: 44,
      title:
        "Top 5 Programming Languages To Learn In 2026: Python, TypeScript, C/C++, Java, Rust",
      image: "/mergesociety/which_programming_language_to_learn_in_2026.webp",
      alt: "Top 5 Programming Languages To Learn In 2026: Python, TypeScript, C/C++, Java, Rust",
      date: "December 13, 2025",
      articleRoute: "top-programming-languages-to-learn",
    },
    {
      id: 45,
      title: "The Best VS Code Extensions I Actually Use Every Day",
      image: "/mergesociety/vscode_extensions.webp",
      alt: "The Best VS Code Extensions I Actually Use Every Day",
      date: "December 15, 2025",
      articleRoute: "vscode-extension",
    },
    {
      id: 46,
      title: "How to Code Programming Projects Step by Step",
      image: "/mergesociety/how_to_code_programming_projects.png",
      alt: "How to Code Programming Projects Step by Step",
      date: "December 19, 2025",
      articleRoute: "how-to-code-a-projects",
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
