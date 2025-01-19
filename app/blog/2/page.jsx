import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Link from "next/link";
import Image from "next/image";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Progressive Web Apps: A Comprehensive Step-by-Step Guide",
  description:
    "Learn how to build Progressive Web Apps (PWAs) with this detailed guide. Explore PWA technology, core features, and real-world case studies.",

  category: "Web Development Tutorial",
  keywords: [
    "Progressive Web Apps",
    "PWA",
    "Web Development",
    "Service Workers",
    "Web App Manifest",
    "Lighthouse",
    "Push Notifications",
    "App Shell Architecture",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/blog/2",
  },

  openGraph: {
    title: "Progressive Web Apps: The Ultimate Guide",
    description:
      "A comprehensive tutorial on building PWAs, with real-world examples and best practices.",
    url: "https://www.mergesociety.com/blog/2",
    type: "article",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Progressive Web Apps: A Comprehensive Step-by-Step Guide",
    description:
      "A detailed guide to building Progressive Web Apps, covering service workers, web app manifest, testing, and real-world case studies.",
    author: {
      "@type": "Person",
      name: "MergeSociety",
    },

    keywords: "PWA, Web Development, Service Workers, Web App Manifest",
    articleSection: "Web Development Tutorials",
    wordCount: 3000,
  },
};

const Blog2 = () => {
  return (
    <article
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
      className="lesson-container"
    >
      <h1>Progressive Web Apps: A Comprehensive Step-by-Step Guide</h1>

      <Image
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736669823/Progressive_Web_Apps_Logo.svg_utovcn.png"
        width={500}
        height={300}
        layout="responsive"
        alt="Diagram of the Internet's Structure"
      />

      <h2 className="project-info">
        <Image
          src={
            "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="founders-image"
          priority
        />
        <span className="project-title">
          <Link href={"/about"}>Written by Massa Medi</Link>
        </span>
        <span className="project-date">| January 14, 2025</span>
      </h2>
      <p>
        In the ever-evolving landscape of web development, Progressive Web Apps
        (PWAs) have emerged as a game-changing technology. They combine the best
        of web and mobile apps, offering a seamless, app-like experience to
        users directly through their web browsers. In this comprehensive guide,
        we'll dive deep into the world of PWAs, exploring what they are, why
        they matter, and how to build them step by step.
      </p>

      <h2>Table of Contents</h2>
      <nav>
        <ol>
          <li>
            <a href="#what-are-pwas">What Are Progressive Web Apps?</a>
          </li>
          <li>
            <a href="#why-pwas-matter">Why PWAs Matter</a>
          </li>
          <li>
            <a href="#core-technologies">Core Technologies Behind PWAs</a>
          </li>
          <li>
            <a href="#building-pwa">
              Building a Progressive Web App: Step-by-Step Guide
            </a>
          </li>
          <li>
            <a href="#testing-pwa">Testing and Debugging Your PWA</a>
          </li>
          <li>
            <a href="#deploying-pwa">Deploying Your PWA</a>
          </li>
          <li>
            <a href="#case-studies">PWA Success Stories: Case Studies</a>
          </li>
          <li>
            <a href="#future-of-pwas">The Future of PWAs</a>
          </li>
        </ol>
      </nav>

      <section id="what-are-pwas">
        <h2>1. What Are Progressive Web Apps?</h2>

        <p>
          Progressive Web Apps are web applications that use modern web
          capabilities to deliver an app-like experience to users. They are:
        </p>

        <ul>
          <li>
            <strong>Progressive:</strong> Work for every user, regardless of
            browser choice, using progressive enhancement principles.
          </li>
          <li>
            <strong>Responsive:</strong> Fit any form factor: desktop, mobile,
            tablet, or whatever is next.
          </li>
          <li>
            <strong>Connectivity independent:</strong> Enhanced with service
            workers to work offline or on low-quality networks.
          </li>
          <li>
            <strong>App-like:</strong> Use the app shell model to provide
            app-style navigations and interactions.
          </li>
          <li>
            <strong>Fresh:</strong> Always up-to-date thanks to the service
            worker update process.
          </li>
          <li>
            <strong>Safe:</strong> Served via HTTPS to prevent snooping and
            ensure content hasn't been tampered with.
          </li>
          <li>
            <strong>Discoverable:</strong> Are identifiable as "applications"
            thanks to W3C manifests and service worker registration scope
            allowing search engines to find them.
          </li>
          <li>
            <strong>Re-engageable:</strong> Make re-engagement easy through
            features like push notifications.
          </li>
          <li>
            <strong>Installable:</strong> Allow users to "keep" apps they find
            most useful on their home screen without the hassle of an app store.
          </li>
          <li>
            <strong>Linkable:</strong> Easily shared via URL and do not require
            complex installation.
          </li>
        </ul>
      </section>

      <section id="why-pwas-matter">
        <h2>2. Why PWAs Matter</h2>

        <p>
          Progressive Web Apps are revolutionizing the way we think about web
          and mobile app development. Here's why they matter:
        </p>

        <h3>2.1 Enhanced User Experience</h3>
        <p>
          PWAs provide a fast, reliable, and engaging user experience that
          rivals native apps. They load instantly, respond quickly to user
          interactions, and work seamlessly even in uncertain network
          conditions.
        </p>

        <h3>2.2 Increased Engagement and Conversion</h3>
        <p>
          Studies have shown that PWAs lead to increased user engagement, longer
          session times, and higher conversion rates. For example, Twitter saw a
          65% increase in pages per session after launching their PWA.
        </p>

        <h3>2.3 Reduced Development and Maintenance Costs</h3>
        <p>
          Instead of developing separate apps for web and mobile platforms,
          companies can create a single PWA that works across all devices,
          significantly reducing development and maintenance costs.
        </p>

        <h3>2.4 Improved Discoverability</h3>
        <p>
          Unlike native apps, PWAs are discoverable through search engines,
          making it easier for users to find and access your application.
        </p>

        <h3>2.5 No App Store Approval Process</h3>
        <p>
          PWAs bypass the often lengthy and complex app store approval
          processes, allowing developers to update their apps instantly and as
          frequently as needed.
        </p>
      </section>

      <section id="core-technologies">
        <h2>3. Core Technologies Behind PWAs</h2>

        <p>
          Progressive Web Apps rely on several key technologies to deliver their
          app-like experience:
        </p>

        <h3>3.1 Service Workers</h3>
        <p>
          Service workers are JavaScript files that run separately from the main
          browser thread, intercepting network requests, caching or retrieving
          resources from the cache, and delivering push messages. They're the
          key to providing offline functionality and fast load times.
        </p>

        <h3>3.2 Web App Manifest</h3>
        <p>
          The Web App Manifest is a JSON file that provides information about a
          web application (such as its name, author, icon, and description) in a
          text file. It tells the browser how your application should behave
          when 'installed' on the user's desktop or mobile device.
        </p>

        <h3>3.3 HTTPS</h3>
        <p>
          PWAs must be served over HTTPS to ensure security. This protects your
          users by preventing content tampering and ensuring that the PWA is not
          compromised.
        </p>

        <h3>3.4 Application Shell Architecture</h3>
        <p>
          The app shell architecture is a way to build a Progressive Web App
          that reliably and instantly loads on your users' screens, similar to
          what you see in native applications. It's the minimal HTML, CSS, and
          JavaScript needed to power the user interface.
        </p>
      </section>

      <section id="building-pwa">
        <h2>4. Building a Progressive Web App: Step-by-Step Guide</h2>

        <p>
          Now, let's walk through the process of building a Progressive Web App:
        </p>

        <h3>4.1 Start with a Responsive Web Design</h3>
        <p>
          Your PWA should work on any device or screen size. Use responsive web
          design principles to ensure your app looks and functions well on
          desktop, mobile, and tablet devices.
        </p>

        <h3>4.2 Create the Web App Manifest</h3>
        <p>
          Create a file named <code>manifest.json</code> in your project root
          and include details about your app:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
  `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Link to this manifest in your HTML:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              &lt;link rel="manifest" href="/manifest.json"&gt;
            </SyntaxHighlighter>
          </code>
        </pre>

        <h3>4.3 Implement a Service Worker</h3>
        <p>
          Create a file named <code>service-worker.js</code> in your project
          root. Here's a basic example that caches your app shell:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
     `}
            </SyntaxHighlighter>{" "}
          </code>
        </pre>
        <p>Register the service worker in your main JavaScript file:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
     `}
            </SyntaxHighlighter>{" "}
          </code>
        </pre>

        <h3>4.4 Implement Offline Functionality</h3>
        <p>
          Use the service worker to cache important resources and provide a
          custom offline page when the user is disconnected.
        </p>

        <h3>4.5 Add Push Notifications</h3>
        <p>
          Implement push notifications to re-engage users. This involves setting
          up a push service and handling push events in your service worker.
        </p>

        <h3>4.6 Enhance Your App Shell</h3>
        <p>
          Optimize your app's loading performance by implementing an app shell
          architecture. This involves separating the core application
          infrastructure from the content.
        </p>
      </section>

      <section id="testing-pwa">
        <h2>5. Testing and Debugging Your PWA</h2>

        <p>
          Testing is crucial to ensure your PWA functions correctly across
          different devices and network conditions:
        </p>

        <h3>5.1 Use Lighthouse</h3>
        <p>
          Google's Lighthouse is an open-source tool for improving the quality
          of your PWA. It audits performance, accessibility, and more.
        </p>

        <h3>5.2 Test Offline Functionality</h3>
        <p>
          Use Chrome DevTools to simulate offline conditions and ensure your app
          works without a network connection.
        </p>

        <h3>5.3 Test on Real Devices</h3>
        <p>
          While emulators are useful, testing on real devices is essential to
          ensure a smooth user experience.
        </p>

        <h3>5.4 Debug Service Workers</h3>
        <p>
          Use the Application tab in Chrome DevTools to inspect and debug your
          service worker.
        </p>
      </section>

      <section id="deploying-pwa">
        <h2>6. Deploying Your PWA</h2>

        <p>When you're ready to deploy your PWA:</p>

        <h3>6.1 Ensure HTTPS</h3>
        <p>
          Your PWA must be served over HTTPS. Use services like Let's Encrypt
          for free SSL certificates.
        </p>

        <h3>6.2 Configure Server</h3>
        <p>
          Ensure your server is configured to serve the correct MIME types and
          handle URL rewrites for single-page applications if necessary.
        </p>

        <h3>6.3 Submit to App Stores</h3>
        <p>
          While not necessary, you can submit your PWA to app stores like Google
          Play Store for increased visibility.
        </p>
      </section>

      <section id="case-studies">
        <h2>7. PWA Success Stories: Case Studies</h2>

        <h3>7.1 Twitter Lite</h3>
        <p>
          Twitter's PWA led to a 65% increase in pages per session, 75% increase
          in Tweets sent, and 20% decrease in bounce rate.
        </p>

        <h3>7.2 Pinterest</h3>
        <p>
          Pinterest rebuilt their mobile web experience as a PWA and saw
          significant improvements: time spent is up by 40% compared to the
          previous mobile web experience, user-generated ad revenue is up 44%,
          and core engagements are up 60%.
        </p>

        <h3>7.3 Uber</h3>
        <p>
          Uber's PWA is only 50kB, takes less than 3 seconds to load on 2G
          networks, and provides the core booking experience in less than 3
          seconds.
        </p>
      </section>

      <section id="future-of-pwas">
        <h2>8. The Future of PWAs</h2>

        <p>
          Progressive Web Apps are continually evolving, with new capabilities
          being added regularly:
        </p>

        <ul>
          <li>
            <strong>Improved iOS support:</strong> While initially more limited,
            PWA support on iOS is improving with each release.
          </li>
          <li>
            <strong>Web Assembly:</strong> This technology allows for
            near-native performance in web apps, opening up new possibilities
            for PWAs.
          </li>
          <li>
            <strong>AR and VR:</strong> As browsers gain support for augmented
            and virtual reality, PWAs will be able to offer immersive
            experiences without requiring a native app.
          </li>
          <li>
            <strong>5G:</strong> The rollout of 5G networks will enable PWAs to
            offer even faster, more responsive experiences.
          </li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>

        <p>
          Progressive Web Apps represent a significant leap forward in web
          development, offering the best of both web and native apps. By
          following the steps outlined in this guide, you can create fast,
          reliable, and engaging web applications that work for all your users,
          regardless of their device or network conditions.
        </p>

        <p>
          As PWA technologies continue to evolve and browser support improves,
          we can expect to see even more powerful and feature-rich web
          applications in the future. Whether you're a seasoned developer or
          just starting out, now is the perfect time to dive into the world of
          Progressive Web Apps and start building the next generation of web
          experiences.
        </p>
        <h3>Recommended</h3>
        <BlogPostsss />
      </section>
    </article>
  );
};

export default Blog2;

export const BlogPostsss = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding How the Internet Works",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1729264510/internet_rsw2y5.jpg",
      alt: "Understanding How the Internet Works",
      date: "January 13, 2025",
      description:
        "Learn how the internet functions, from the basics of networking to protocols like HTTP. Understand key concepts like IP addresses, DNS, and data packet routing.",
    },
    {
      id: 3,
      title: "Mastering SEO and Content Marketing Strategies",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1729325661/search-engine-optimization-4111000_1920_wsec3v.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 10, 2025",
      description:
        "Unlock the secrets of search engine optimization (SEO) and content marketing. Understand how Google indexes pages and learn to create valuable content that attracts and engages your target audience.",
    },
    {
      id: 4,
      title: "Web Analytics: Tracking User Behavior for Better UX",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736670226/Web_Analytics_jzmlyv.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 8, 2025",
      description:
        "Harness the power of web analytics to improve your website's user experience. Learn how to set up Google Analytics, interpret user behavior data, and use tools like Hotjar and Crazy Egg to optimize your site's performance and conversion rates.",
    },
    {
      id: 5,
      title: "Cybersecurity Essentials for Web Developers",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736670828/security_uewdhv.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 4, 2025",
      description:
        "Protect your website and users with essential cybersecurity practices. Explore the importance of HTTPS, SSL certificates, and learn about common vulnerabilities like XSS and CSRF.",
    },
    {
      id: 6,
      title: "Monetization Strategies for Tech Professionals",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736671474/monetize_rtrmoz.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 1, 2025",
      description:
        "Explore various ways to monetize your tech skills. From freelancing on platforms like Upwork and Fiverr to creating and selling digital products.",
    },
    {
      id: 7,
      title: "AI Tools for Developers: Boosting Productivity and Creativity",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736672489/ai_vcys9q.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 12, 2025",
      description:
        "Leverage the power of AI to enhance your development workflow. Discover how tools like ChatGPT and GitHub Copilot can assist in coding, content creation, and problem-solving.",
    },
    {
      id: 8,
      title: "The Rise of No-Code and Low-Code Platforms",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736673928/no-code_zdelwk.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 14, 2025",
      description:
        "Explore the growing trend of no-code and low-code platforms. Understand how these tools are changing the landscape of web development and enabling non-technical users to create sophisticated applications.",
    },
    {
      id: 9,
      title: "Blockchain and Web3: The Future of the Internet",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736674404/Blockchain_and_Web3_mvq7fv.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 3, 2025",
      description:
        "Dive into the world of blockchain technology and Web3. Understand the fundamentals of decentralized applications (dApps), smart contracts, and cryptocurrencies.",
    },
    {
      id: 10,
      title: "Why Learn React in 2025?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406497/react.js_l1cyl8.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 13, 2025",
      description:
        "Explore the reasons behind React's enduring popularity in 2024. Learn about its efficiency, component-based architecture, and the vibrant ecosystem of libraries that support modern web development.",
    },
    {
      id: 11,
      title: "Understanding JavaScript Closures",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406718/javascript_dnoltz.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 6, 2025",
      description:
        "Dive deep into the concept of closures in JavaScript. Learn how closures work, why they are useful, and how they can help you manage scope and data encapsulation in your applications.",
    },
    {
      id: 12,
      title: "CSS Grid vs. Flexbox: Which to Choose?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406947/flex-grid_hviaoa.webp",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 2, 2025",
      description:
        "Understand the differences between CSS Grid and Flexbox, two powerful layout systems in modern web design. This post will help you decide which tool to use based on your project's needs.",
    },
    {
      id: 13,
      title: "React Hooks: A Comprehensive Guide",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736407136/react_hooks_alcajf.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 7, 2025",
      description:
        "Get a thorough understanding of React Hooks and how they revolutionize state management in functional components. Explore hooks like useState, useEffect, and custom hooks.",
    },
    {
      id: 14,
      title: "The Ultimate Guide to Google Search Console in 2024",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736675067/search_vvfykc.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 7, 2025",
      description:
        "Navigate the features and functionalities of Google Search Console to enhance your website's SEO performance. This guide covers setting up your account and using insights to improve your content strategy.",
    },
    {
      id: 15,
      title: "Domain Names: What They Are and How to Choose One",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736675363/Domain_Names_brtmr0.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 12, 2025",
      description:
        "Learn about domain names, their structure, and the importance of choosing the right one for your online presence. This post covers best practices for selecting domain names that enhance branding and SEO.",
    },
    {
      id: 16,
      title: "Web Hosting: A Simple Guide to Choosing the Right Provider",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736751796/searchengine_d6udik.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 2, 2025",
      description:
        "This guide provides an overview of different types of web hosting services, including shared, VPS, dedicated, cloud, managed, and colocation hosting. It offers practical examples of providers, tips for avoiding scams, and guidance on choosing the right service for your needs. Additionally, it highlights free hosting options like GitHub Pages, Netlify, and Vercel, along with steps for hosting a website that uses HTML, CSS, and JavaScript.",
    },
    {
      id: 17,
      title:
        "Online Courses and Starting a Tech YouTube Channel: Sharing Your Knowledge and Impacting Lives",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736751949/youtube_xpusrz.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 1, 2025",
      description:
        "Learn how to create and sell online courses to share your expertise, and explore the steps to start a tech YouTube channel that can reach and engage a global audience. This blog covers the benefits of online courses, planning content, and strategies to grow a successful YouTube channel.",
    },
    {
      id: 18,
      title:
        "Unleashing the Power of SSL Certificates: Why SSL Matters for Your Website",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736752078/ssl_c9885c.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 10, 2025",
      description:
        "Learn about SSL certificates and their importance in protecting websites. Understand data encryption, authentication, and the types of SSL certificates available, including Domain Validation, Organization Validation, and Extended Validation SSL. Discover how SSL boosts user trust and search engine rankings while ensuring legal compliance.",
    },
    {
      id: 19,
      title: "The Importance of Version Control in Software Development",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736752173/git_nh2nai.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 9, 2025",
      description:
        "Explore the critical role of version control systems like Git in software development. Understand how version control helps manage changes, collaborate with teams, and maintain project history.",
    },
    {
      id: 20,
      title:
        "Building Networks as Developers: A Comprehensive Guide to Professional Connections",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736752303/developergroup_qw6v5p.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 4, 2025",
      description:
        "Learn how to build a strong network as a developer and maximize your online presence.",
    },
    {
      id: 21,
      title:
        "The Internet of Things (IoT): Revolutionizing Our Connected World",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1729496867/internetThings_eshl2l.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 5, 2025",
      description:
        "The Internet of Things (IoT) is transforming the way we live and work by connecting everyday devices to the internet, allowing them to exchange data. This article explores IoT, its history, architecture, real-world applications, and its future impact on industries like healthcare, agriculture, and smart cities. It also discusses the role of AI in IoT, security challenges, and ethical implications.",
    },
  ];

  return (
    <div className="bg-container">
      <h1 className="bg-title">Explore More Recent Blog Posts</h1>
      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link key={project.id} href={`/blog/${project.id}`} passHref>
            <div className="bg-card">
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
                <p className="bg-date">{project.date}</p>
                <p className="bg-description">{project.description}</p>
                <div className="bg-button ct-button">Read More</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
