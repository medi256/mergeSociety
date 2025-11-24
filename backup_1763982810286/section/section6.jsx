import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section6 = () => {
  const blogPosts = [
    {
      id: 6,
      title: "Every Python Library and Frameworks Explained",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770021/rubaitul-azad-ZIPFteu-R8k-unsplash_li7rer_qnxifp.jpg",
      alt: "Every Python Library and Frameworks Explained",
      date: "May 2, 2025",
      articleRoute: "python-libraries",
    },
    {
      id: 7,
      title: "Every React Concept Explained",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769995/lautaro-andreani-xkBaqlcqeb4-unsplash_jfhsu0_qwkgef.jpg",
      alt: "Every React Concept Explained",
      date: "May 2, 2025",
      articleRoute: "all-react-concepts",
    },
    {
      id: 8,
      title: "All The JavaScript You Need To Know For React",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769969/rahul-mishra-JpF58ANavoc-unsplash_eb19pv_uwmjkp.jpg",
      alt: "All The JavaScript You Need To Know For React",
      date: "May 2, 2025",
      articleRoute: "react-you-need",
    },
    {
      id: 9,
      title: "How to Learn JavaScript FAST in 2025",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769941/growtika-qaedPly-Uro-unsplash_g2ehcr_edngle.jpg",
      alt: "How to Learn JavaScript FAST in 2025",
      date: "May 2, 2025",
      articleRoute: "how-to-learn-javascript",
    },
    {
      id: 10,
      title:
        "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769889/rahul-mishra-XXMA-8fBB-g-unsplash_iz6p3n_cbpptu.jpg",
      alt: "ALL React Hooks Explained: When, Why, and How to Use Every Hook in Your React Toolkit",
      date: "May 2, 2025",
      articleRoute: "react-hooks",
    },
    {
      id: 11,
      title:
        "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769812/fotis-fotopoulos-DuHKoV44prg-unsplash_c7aebv_hr7bb2.jpg",
      alt: "The No-BS, AI-Era Roadmap to Becoming a Full Stack Developer: Practical Steps from a Senior Engineer",
      date: "May 2, 2025",
      articleRoute: "fullstack-roadmap",
    },
    {
      id: 12,
      title: "APIs Explained (in 4 Minutes)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769272/api_cbneaq_bfxrcg.jpg",
      alt: "Visual representation of API communication between applications",
      date: "May 7, 2025",
      articleRoute: "apis-explained",
    },
    {
      id: 13,
      title:
        "MongoDB: The Powerful, Flexible NoSQL Database Revolutionizing Modern Development",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769249/rubaitul-azad-cijiWIwsMB8-unsplash_fbusr1_auqweh.jpg",
      alt: "MongoDB database architecture visualization",
      date: "May 7, 2025",
      articleRoute: "mongodb-explained",
    },
    {
      id: 14,
      title:
        "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768822/6554783_amd2ad_suixhe.jpg",
      alt: "PostgreSQL vs. MySQL: Which Relational Database Should You Choose?",
      date: "May 9, 2025",
      articleRoute: "databases",
    },
    {
      id: 15,
      title:
        "Apache vs. NGINX: A Complete Guide to Modern Web Server and Proxy Architecture",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768794/pexels-realtoughcandy-11035538_iptnmq_x76qgy.jpg",
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
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768689/gkhjkg_hkj_kgn74b_bcf5ss.webp",
      alt: "DNS explanation diagram showing how domains resolve to IP addresses",
      date: "May 9, 2025",
      articleRoute: "what-is-dns",
    },
    {
      id: 18,
      title:
        "DNS Records Explained With Examples: Understanding, Using, and Securing Your Domain's Backbone",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768669/4084_qpacfm_z9pvmi.jpg",
      alt: "DNS Records Infographic showing how domain names connect to IP addresses",
      date: "May 9, 2025",
      articleRoute: "dns-records",
    },
    {
      id: 19,
      title: "Easy Definition of VPN",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768621/petter-lagson-NEtFkKuo7VY-unsplash_hjouju_lwjo8n.jpg",
      alt: "Visual explanation of how a VPN protects your internet connection",
      date: "May 9, 2025",
      articleRoute: "vpn-explained",
    },
    {
      id: 20,
      title:
        "Let's Learn Something! Algorithms Explained in 5 Levels – From Peanut Butter Sandwiches to Artificial Intelligence",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768558/woman-using-calculator-near-plan-equipments_ndb3yp_rmnqda.jpg",
      alt: "Visual representation of algorithms from simple tasks to AI neural networks",
      date: "May 10, 2025",
      articleRoute: "algorithms-explained",
    },
    {
      id: 21,
      title:
        "REST API Meaning: The Backbone of Modern Cloud Application Development",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768543/7015995_iwu9fs_to6s06.jpg",
      alt: "REST API Meaning: The Backbone of Modern Cloud Application Development",
      date: "May 10, 2025",
      articleRoute: "rest-api",
    },
    {
      id: 22,
      title:
        "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768517/SDK-vs-API_-Differences-Explained-in-this-Blog-1280x720_axa4cf_zv6mkx.jpg",
      alt: "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
      date: "May 10, 2025",
      articleRoute: "sdk-vs-api",
    },
    {
      id: 23,
      title: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768490/pexels-padrinan-1591059_tc0afv_h9h3kh.jpg",
      alt: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
      date: "May 10, 2025",
      articleRoute: "http1-http2-http3",
    },
    {
      id: 24,
      title:
        "WebSockets vs. Polling vs. Long Polling: How Web Sockets work | System Design Interview Basics",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768448/miguel-angel-padrinan-alba-rX15QZv2Tng-unsplash_qbwgmy_bobdji.jpg",
      alt: "Visual comparison of WebSockets, Long Polling and Regular Polling communication patterns",
      date: "May 10, 2025",
      articleRoute: "websocket-polling",
    },
    {
      id: 25,
      title:
        "WebSockets in 100 Seconds: An In Depth Guide to WebSockets, Socket.IO, and the Future of Real Time Communication",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1763018556/pexels-danny-meneses-340146-943096_na23qm_k8pj8z.jpg",
      alt: "WebSockets real-time communication architecture diagram showing client-server bidirectional data flow",
      date: "May 10, 2025",
      articleRoute: "websocets-explained",
    },
    {
      id: 30,
      title:
        "Pointers in C/C++ - what a pointer is, how pointer syntax works, and why programmers care",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765999/audio_1756133645586_ybfdxp_m0ss09_katcfd.webp",
      alt: "Pointers in C and C++",
      date: "August 25, 2025",
      articleRoute: "pointers-in-c-and-cpp",
    },
    {
      id: 31,
      title:
        "Math for Programmers - 10 Essential Concepts explained with memes, code, and real talk",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765975/audio_1756224766523_5ki8jf_rtels1_ndc1jd.webp",
      alt: "Math for Programmers",
      date: "August 26, 2025",
      articleRoute: "math-for-programmers",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section>
      <div className="h-ai">
        <h2>Code Report</h2>
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
