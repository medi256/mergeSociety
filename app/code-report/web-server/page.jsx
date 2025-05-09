import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "What Is a Web Server? A Beginner's Guide With Clear Examples",
  description:
    "Learn what a web server really is in simple terms. Discover how servers handle requests, HTTP protocols, routing, and more with clear examples for beginners and developers alike.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "web server explained",
    "what is a web server",
    "web server for beginners",
    "http protocol explained",
    "server requests and responses",
    "web server routing",
    "static vs dynamic routing",
    "localhost web server",
    "network ports explained",
    "how web servers work",
    "web server basics 2025",
    "http request anatomy",
    "server response structure",
    "web server listening ports",
    "tcp transport layer",
    "web development fundamentals",
    "beginner web server guide",
    "server technology explained",
    "what does a web server do",
    "simple web server explanation",
    "web server practical examples",
    "browser server communication",
    "server response codes",
    "web technology basics",
    "web infrastructure explained",
  ],

  category: "Web Development",

  openGraph: {
    title: "What Is a Web Server? The Definitive Beginner's Guide for 2025",
    description:
      "Demystify web servers with our beginner-friendly guide. Learn how servers handle requests, what HTTP actually looks like, and how routing works with practical, real-world examples.",
    url: "https://www.mergesociety.com/code-report/web-server",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746793502/pexels-cookiecutter-17489152_hulqbn.jpg",
        width: 1200,
        height: 630,
        alt: "Visual diagram explaining web server architecture showing HTTP requests, responses, and how web servers handle traffic",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-09T10:00:00Z",
    modifiedTime: "2025-05-09T10:00:00Z",
    section: "Web Development",
    tags: [
      "Web Server",
      "HTTP",
      "TCP",
      "Web Development",
      "Routing",
      "Server Technology",
      "Network Protocols",
      "Programming Basics",
      "Backend Development",
      "Web Infrastructure",
    ],
  },

  authors: [
    {
      name: "Web Development Expert",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society Web Development Platform",

  alternates: {
    canonical: "https://www.mergesociety.com/code-report/web-server",
  },

  twitter: {
    card: "summary_large_image",
    title: "What Is a Web Server? Explained Simply for 2025",
    description:
      "Demystify web servers with our beginner-friendly guide. Learn how HTTP works, what ports do, and see real examples of requests and responses.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746793502/pexels-cookiecutter-17489152_hulqbn.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 500,
    },
  },

  other: {
    readingTime: "8 minutes",
    contentType: "Educational Guide with Practical Examples",
    publishDate: "May 9, 2025",
    category: "Web Development",
    subcategory: "Web Infrastructure",
    featured: true,
    series: "Web Technology Fundamentals",
    complexity: "Beginner",
    relatedArticles: [
      "HTTP vs HTTPS: Understanding Web Protocol Security",
      "What is DNS? How Domain Names Work",
      "Server-Side vs Client-Side Rendering Explained",
      "Introduction to API Development for Beginners",
      "Setting Up Your First Local Development Environment",
    ],
    visualAid: true,
    authorCredentials: "Senior Web Developer & Technical Educator",
    keyTakeaways: [
      "Understanding the core functions of a web server",
      "Learning the structure of HTTP requests and responses",
      "Seeing how ports enable multiple services on one machine",
      "Differentiating between static and dynamic routing",
      "Recognizing how transport protocols support web communication",
      "Implementing basic server functionality on your own machine",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "What Is a Web Server? A Beginner's Guide With Clear Examples",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746793502/pexels-cookiecutter-17489152_hulqbn.jpg",
    datePublished: "2025-05-09T10:00:00Z",
    dateModified: "2025-05-09T10:00:00Z",
    author: {
      "@type": "Person",
      name: "Web Development Expert",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Web Developer",
      description:
        "10+ years teaching web infrastructure concepts to beginners",
    },
    publisher: {
      "@type": "Organization",
      name: "Merge Society",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Learn what a web server really is in simple terms. Discover how servers handle requests, HTTP protocols, routing, and more with clear examples for beginners and developers alike.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/code-report/web-server",
    },
    keywords:
      "web server, http, tcp, routing, network ports, localhost, static routing, dynamic routing",
    about: [
      {
        "@type": "Thing",
        name: "Web Server",
      },
      {
        "@type": "Thing",
        name: "HTTP Protocol",
      },
      {
        "@type": "Thing",
        name: "Web Infrastructure",
      },
    ],
    isAccessibleForFree: "True",
    educationalUse: "Self Study",
    proficiencyLevel: "Beginner",
    articleSection: "Web Development",
    wordCount: 2200,
  },

  // Enhanced semantic metadata
  semantic: {
    contentTags: [
      "web server fundamentals",
      "http request structure",
      "server response anatomy",
      "network port explanation",
      "tcp transport layer",
      "static file hosting",
      "dynamic content generation",
      "server routing basics",
      "web infrastructure concepts",
      "beginner web development",
    ],
    primaryTopic: "Web Server Technology Explanation",
    conceptualDifficulty: "Beginner-Friendly with Progressive Complexity",
    targetAudience: [
      "programming beginners",
      "web development students",
      "junior developers",
      "self-taught coders",
      "tech-curious professionals",
      "bootcamp students",
      "computer science students",
      "it professionals transitioning to development",
      "technical writers",
      "technology instructors",
    ],
    visualContent: true,
    comprehensiveness: "complete beginner overview with practical examples",
    freshness: "updated with latest web server practices (May 2025)",
    evergreen: {
      value: true,
      updateSchedule: "annual review",
    },
    depthLevel: "foundational concepts with practical implementation",
    contentFormat: "explanatory article with analogies and code examples",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Web Development",
    pageType: "Educational Guide",
    contentPillar: "Web Infrastructure Basics",
    contentCluster: "Server Technology Fundamentals",
    expectedReadTime: 480, // in seconds
    wordCount: 2200,
    technicalLevel: 1, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.9,
      expectedDiscussionTrigger: 0.6,
      socialSharePotential: "high",
      conceptualComplexity: "low to medium",
      practicalApplicability: "very high",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "understanding what web servers do",
      "learning web development fundamentals",
      "exploring how websites work",
      "starting server-side development",
      "learning about web infrastructure",
    ],
    secondary: [
      "troubleshooting localhost issues",
      "understanding http status codes",
      "setting up a development environment",
      "learning about network ports",
      "exploring backend technologies",
    ],
    painPoints: [
      "confusion about what servers actually do",
      "uncertainty about web infrastructure terminology",
      "intimidation by technical server concepts",
      "difficulty understanding http requests and responses",
      "confusion about routing concepts",
      "overwhelmed by technical jargon",
    ],
    searchQueries: [
      "what is a web server simple explanation",
      "how do web servers work for beginners",
      "web server vs application server",
      "what does http request look like",
      "how to understand localhost and ports",
      "web server explained simply",
      "what is static vs dynamic routing",
      "http request and response examples",
      "what happens when browser sends request",
      "how to run a basic web server",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "Real-world analogies that make complex concepts accessible",
    expertiseLevel: "expert knowledge presented in beginner-friendly terms",
    actionableInsights:
      "immediately applicable knowledge with practical examples",
    biasAwareness:
      "technology-agnostic explanations covering fundamental concepts",
    comprehensiveToSuccinct:
      "progressive information density suitable for beginners",
  },

  // Business alignment
  businessAlignment: {
    conversionGoal:
      "web development course enrollment and tutorial subscriptions",
    audienceSegment: "early-career developers and programming students",
    customerJourneyStage: "awareness and education",
    contentROIMetrics: [
      "tutorial subscription signups",
      "web development guide downloads",
      "beginner course registrations",
      "newsletter subscriptions",
    ],
    competitivePositioning: "practical explanations vs theoretical discussions",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "organic search",
      "programming communities",
      "coding bootcamps",
      "developer newsletters",
      "programming subreddits",
    ],
    promotionStrategy: "explanatory diagrams and visual aids sharing",
    syndicationPartners: [
      "coding education platforms",
      "web development newsletters",
      "programming learning sites",
      "technical tutorial platforms",
    ],
    emailCampaignSegment: "web development beginners and students",
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy: "encouraging questions about specific confusing concepts",
    conversationStarters: [
      "What part of web servers confused you the most before reading this?",
      "Have you tried running a local server on your own machine?",
      "What other web infrastructure topics would you like explained?",
      "Did any of the analogies particularly help you understand web servers?",
    ],
    communityContribution:
      "encouraging readers to share their first server setup experiences",
    expertFollowup: "weekly beginner web development Q&A sessions",
  },

  // Conversion optimization
  conversionOptimization: {
    primaryCTA: "Download our Web Development Starter Kit",
    secondaryCTA: "Join our Free Web Development Basics Workshop",
    contentUpgrades: [
      "HTTP cheat sheet with common status codes",
      "Local development environment setup guide",
      "Web server configuration examples",
      "Step-by-step first server project tutorial",
    ],
    leadMagnetOffering: "Complete Web Server Implementation Guide",
  },

  // Expert credibility signals
  expertCredibility: {
    authorExpertise: {
      certifications: [
        "Full Stack Web Developer",
        "Web Technologies Instructor",
        "Technical Writer",
        "Cloud Infrastructure Specialist",
      ],
      industryExperience: "10+ years",
      projectScales: "beginner education to enterprise",
      specializations:
        "technical education, web infrastructure, developer onboarding",
    },
    researchMethodology: "based on teaching 5000+ beginning developers",
    dataBackedClaims: true,
    transparentLimitations:
      "acknowledges conceptual simplifications for clarity",
  },

  // Technology trend alignment
  trendAlignment: {
    emergingTechnologies: {
      cloudNative: "server implementation considerations included",
      serverless: "mentioned as modern evolution",
      staticSiteGeneration: "covered in static routing section",
      apiFirst: "explained through HTTP request examples",
      containerization: "briefly referenced in modern context",
    },
    industryShifts: {
      jamstack: "static hosting explanations",
      webAssembly: "mentioned in future server technologies",
      progressiveWebApps: "dynamic routing relevance",
      edgeComputing: "evolution of traditional servers",
    },
    futureOutlook:
      "web server evolution trends with practical adoption guidance",
  },

  // Content componentization
  contentComponentization: {
    modularity:
      "structured for progressive learning from basics to implementation",
    snippetOptimization: {
      definitions: true,
      analogies: true,
      diagrams: true,
      codeExamples: true,
      faqs: true,
      requestExamples: true,
    },
    voiceSearchOptimized: {
      naturalLanguageQueries: [
        "what exactly is a web server",
        "how do web servers respond to requests",
        "what is http protocol in simple terms",
        "explain how localhost works",
        "what are network ports in web servers",
      ],
    },
    multiDevicePresentation:
      "responsive with code examples optimized for mobile",
  },

  // Accessibility and readability
  accessibility: {
    readingLevel: "accessible to readers with no technical background",
    jargonExplanation: "all technical terms explained with analogies",
    alternativeFormats: [
      "visual diagrams",
      "request/response examples",
      "analogy illustrations",
      "code snippets",
      "step-by-step explanations",
    ],
    languageClarity: "concrete examples with relatable analogies",
  },

  // Modern discovery features
  discovery: {
    aiSearchOptimization: true,
    entityMapping: {
      concepts: [
        "web servers",
        "http protocol",
        "network ports",
        "routing",
        "localhost",
        "requests and responses",
      ],
      tools: [
        "web browser",
        "local development server",
        "HTTP client",
        "localhost",
        "port configuration",
      ],
      technologies: [
        "HTTP",
        "TCP",
        "status codes",
        "static file serving",
        "dynamic content generation",
        "server-side programming",
      ],
      architectures: [
        "client-server model",
        "request-response pattern",
        "static hosting",
        "dynamic applications",
        "web infrastructure",
        "basic server setup",
      ],
    },
    semanticRelations: [
      {
        entity: "Web Server",
        relation: "processes",
        target: "HTTP requests",
      },
      {
        entity: "HTTP",
        relation: "enables",
        target: "client-server communication",
      },
      {
        entity: "Routing",
        relation: "connects",
        target: "URLs to resources",
      },
      {
        entity: "Network Ports",
        relation: "allow",
        target: "multiple services on one machine",
      },
    ],
    queryUnderstanding: {
      synonyms: {
        "web server": ["http server", "website server", "web host"],
        localhost: ["127.0.0.1", "local server", "development server"],
        "http request": ["web request", "browser request", "client request"],
      },
    },
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          What is a web server in simple terms? This Is the Clearest, Easiest
          Explanation You'll Ever Find Online
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746793502/pexels-cookiecutter-17489152_hulqbn.jpg"
          }
          alt="Visual diagram explaining web server architecture showing HTTP requests, responses, and how web servers handle traffic"
          width={600}
          height={400}
          priority
        />
        <p>
          If you're venturing into the world of programming, you've likely
          wondered: <strong>What exactly is a web server?</strong> What kind of
          computers power the apps and sites we use every day? Do they run some
          secret operating system? Are their parts radically different from the
          gaming PC you painstakingly built at home? The mystique is real at
          first, servers can feel like a black box.
        </p>
        <p>
          The surprising truth?{" "}
          <strong>
            Pretty much any device with a network connection can be a web
            server!
          </strong>{" "}
          Your laptop, a Raspberry Pi, even your smartphone can technically play
          the part. Ever set up a smart device at home and had to connect your
          phone to it over Wi-Fi? That little Internet of Things gadget is
          running a web server you’re accessing it when you type in its local
          address and see that quirky “setup” page.
        </p>
        <p>
          <strong>Hint: it’s not about hardware!</strong> Sure, enterprise
          servers in big data centers are more robust and powerful, but the core
          truth endures: a <em>web server</em> is fundamentally{" "}
          <strong>software</strong> that serves web content. But what does
          “serving web content” really mean? Let’s dig in and unravel the six
          core things a web server does following the common flow of a typical
          web request.
        </p>
        <h2>Step 1: Listening for Requests Waiting Like Jim at His Desk</h2>
        <p>
          Let’s use a relatable analogy: imagine a customer service rep named
          Jim, sitting at a call center. He’s reachable at 1-270-000001 and
          spends his day waiting, ears perked for an incoming call. He never
          dials out, he just listens.
        </p>
        <p>
          <strong>
            Similarly, when a web server starts up, it idly waits for requests.
          </strong>{" "}
          No requests? No action. To bring it back to reality, suppose you’re
          running a web server on your computer right now with the special
          “loopback” IP address: <code>127.0.0.1</code> also known as{" "}
          <strong>localhost</strong>. If you type that into a web browser,
          you’ll see a message. Imagine it says, “Hey, it’s Jim. How can I help
          you?”
        </p>
        <h2>The Web Server’s Main Line: Ports Explained</h2>
        <p>
          But what is the web server actually “listening” to? The answer: a{" "}
          <strong>network port</strong> supplied by the operating system whether
          that’s Windows, macOS, or Linux.
        </p>
        <p>
          Network protocols provide <strong>65,535 ports</strong> to choose
          from. Each is like an extension in a huge call center. You might think
          of dialing the call center’s main number but to reach Jim’s desk, you
          need his “extension.” In tech terms, if Jim listens on port 8000, only
          calls (requests) sent to extension (port) 8000 get to him.
        </p>
        <p>
          For another practical example: when you type <code>127.0.0.1</code>{" "}
          into your browser, you don’t add a port. Why not? Browsers default to
          port 80 (<code>http://</code>) or port 443 (<code>https://</code>). If
          your web server is running on port 80 (default for unencrypted
          traffic), it just works.
        </p>
        <p>
          But restart your web server to listen on, say, port 8000. Now, if you
          refresh <code>127.0.0.1</code>, you’ll see “site can’t be reached” an
          error. Why? No one is answering at port 80! You must explicitly go to{" "}
          <code>127.0.0.1:8000</code> and voilà, “Hey, it’s Jim!” appears again.
        </p>
        <h2>Multiple Servers, Multiple Ports: Meet Jane!</h2>
        <p>
          Think a single machine can only run one server at a time? Not so! Back
          in our call center, Jim’s colleague Jane listens at extension 8001.
          Dialing her extension gets her, not Jim. Likewise, you can run
          multiple web servers (or other network services) on one computer, each
          on a different port.
        </p>
        <p>
          In code or in practice: navigate to port 8001 and see Jane’s unique
          greeting. Switch to port 8000 and you’re back with Jim.{" "}
          <em>It’s all about targeting the right port!</em>
        </p>
        <h2>Step 2: Sending a Request The Language of HTTP</h2>
        <p>
          When you “send a request” to a server, your browser (Chrome, Firefox,
          etc.) and the web server communicate with a shared language:{" "}
          <strong>HTTP</strong> (HyperText Transfer Protocol). But what does
          HTTP actually look like?
        </p>
        <p>
          Here’s a secret:{" "}
          <strong>HTTP is just human readable plain text</strong> (at least in
          version 1.x). When your browser queries a website, it sends a
          structured text message.
        </p>
        <h3>What Is an HTTP Request? Anatomy of a Request</h3>
        <p>
          Open up an example HTTP request text file. It would look something
          like this (simplified):
        </p>
        <pre>
          <code>
            {`GET /orders/123 HTTP/1.1
  Host: 127.0.0.1:8000
  User-Agent: Mozilla/5.0
  
  `}
          </code>
        </pre>
        <p>Let’s break it down:</p>
        <ul>
          <li>
            <strong>Start Line:</strong> Specifies the <code>GET</code> method
            (we’re requesting a resource), the “target” (
            <code>/orders/123</code>
            ), and the HTTP version (<code>1.1</code>).
          </li>
          <li>
            <strong>Headers:</strong> Key-value pairs that describe the request.
            For example, <code>Host</code> says where you’re headed, and{" "}
            <code>User-Agent</code> tells servers what kind of browser is making
            the request. Handy for serving mobile specific pages.
          </li>
          <li>
            <strong>Body (Optional):</strong> Often empty for GET requests, but
            for POST or PUT, here’s where you’d include, say, form data. For
            example:
          </li>
        </ul>
        <pre>
          <code>
            {`POST /orders HTTP/1.1
  Host: 127.0.0.1:8000
  Content-Type: application/x-www-form-urlencoded
  Content-Length: 8
  
  orderID=123`}
          </code>
        </pre>
        <p>
          In this variant, the body contains form data (<code>orderID=123</code>
          ), and new headers specify the content type and length.
        </p>
        <p>
          Here’s the real “ah ha” moment:{" "}
          <strong>
            HTTP requests are themselves a protocol built on text files, sent
            over the wire
          </strong>
          .
        </p>
        <p>
          When you type a URL into your browser, it is literally building and
          sending one of these requests sometimes with additional headers
          directly to the server’s address and port.
        </p>
        <h2>Step 3: Protocols Within Protocols HTTP and the Transport Layer</h2>
        <p>
          But how is the HTTP request itself delivered to the server? Enter the{" "}
          <strong>transport layer protocol</strong>.
        </p>
        <p>
          Both HTTP and FTP (File Transfer Protocol) are{" "}
          <strong>application layer protocols</strong>: they define “the
          language” for exchange, but something has to carry those messages,
          just as a telephone line carries a conversation.
        </p>
        <p>
          For web servers, the underlying transporter is usually{" "}
          <strong>TCP (Transmission Control Protocol)</strong>. Think of Jim and
          Jane at their desks (speaking, say, French and German) the phone line
          is TCP, carrying whatever language over the wire.
        </p>
        <p>
          (Technically: TCP splits data into packets, confirms delivery, and
          orders them correctly on arrival. That’s deeper than most web
          developers ever need for day to day work but it’s useful to know!)
        </p>
        <h2>Step 4: Servers Respond Anatomy of an HTTP Response</h2>
        <p>
          Web servers respond with their own HTTP messages still just structured
          text! Here’s a typical response:
        </p>
        <pre>
          <code>
            {`HTTP/1.1 200 OK
  Content-Type: text/html
  
  <html>
    <body>
      <h1>Hello world</h1>
    </body>
  </html>`}
          </code>
        </pre>
        <p>Let’s break that down:</p>
        <ul>
          <li>
            <strong>Status Line:</strong> The HTTP version and a{" "}
            <code>status code</code> (like <code>200 OK</code> for success).
          </li>
          <li>
            <strong>Headers:</strong> Such as <code>Content-Type</code> in this
            case, <code>text/html</code> tells your browser to expect an HTML
            web page.
          </li>
          <li>
            <strong>Body:</strong> The actual page (or image data, or JSON, or
            PDF…) you were after.
          </li>
        </ul>
        <p>
          If it was an API call returning JSON?{" "}
          <code>Content-Type: application/json</code> would be set, and the body
          would be valid JSON. Request an image?{" "}
          <code>Content-Type: image/jpeg</code> and the body would be binary
          image data.
        </p>
        <h3>Takeaway:</h3>
        <p>
          A web server can serve not just HTML web pages, but{" "}
          <strong>anything you can request on the web</strong>: JavaScript
          files, PDFs, images, APIs, even video like the one you’re watching
          right now, streamed piece by piece by YouTube's servers to your
          browser.
        </p>
        <h2>Step 5: How Servers Decide What to Serve Routing 101</h2>
        <p>
          But how does a server know <em>what</em> to send based on your
          request? This is known as <strong>routing</strong>: connecting a
          specific request to actual content (a file, or data generated on the
          fly).
        </p>
        <h3>Static Routing</h3>
        <p>
          In <strong>static routing</strong>, the server serves files directly
          from a folder. Imagine a folder with these files:
        </p>
        <ul>
          <li>
            <code>cat.jpg</code> – an image of a cat
          </li>
          <li>
            <code>index.html</code> and <code>hello.html</code> two simple web
            pages with “Index HTML” and “Hello HTML” as headings
          </li>
        </ul>
        Point the server at this folder, run it on port 8000, and:
        <ul>
          <li>
            Visit <code>127.0.0.1/cat.jpg</code> – and see the cat image
          </li>
          <li>
            Visit <code>127.0.0.1/</code> – see the index page
          </li>
          <li>
            Visit <code>127.0.0.1/hello.html</code> get the hello page
          </li>
          <li>
            Visit a nonexistent file – get a <strong>404 Not Found</strong>
          </li>
        </ul>
        <p>
          This style is fast and ultra cheap to host (think: GitHub Pages,
          Amazon S3, or countless static hosting services). You can host even
          viral traffic for pennies a month!
        </p>
        <h3>Dynamic Routing</h3>
        <p>
          Some content can’t be handled by static files imagine a “My Profile”
          or “Order Status” page that’s different for every user. It wouldn’t be
          practical to pre-generate a file for every possible state.
        </p>
        <p>
          This is where <strong>dynamic routing</strong> comes in:
        </p>
        <ul>
          <li>
            The server’s configured to route all requests to a single
            application file or endpoint (e.g., <code>index.php</code>,{" "}
            <code>app.js</code>).
          </li>
          <li>
            The code (“web application”) inspects the request and dynamically
            queries a database or performs logic to generate the correct
            content.
          </li>
        </ul>
        <p>
          For instance, suppose you visit <code>/orders/1</code>:
        </p>
        <ul>
          <li>
            The server maps “<code>/orders/1</code>” to a script.
          </li>
          <li>
            The script extracts “1” as the order ID, fetches info from a
            database, and builds an HTML page with the status and tracking
            number.
          </li>
        </ul>
        <p>
          If the order exists, you get its status. If not, you get a 404 page.
        </p>
        <p>
          <strong>Sample PHP Implementation:</strong> The example shown uses a
          vanilla PHP script (no frameworks or libraries) about 45 lines long,
          connected to a tiny SQLite database. The script:
        </p>
        <ul>
          <li>
            Uses regex to parse and extract order IDs from URLs (like{" "}
            <code>/orders/1</code>)
          </li>
          <li>
            Queries the database for the order’s status and tracking number
          </li>
          <li>If not found, sends a 404 header and response</li>
          <li>If found, prints a tiny HTML page with the order info</li>
        </ul>
        <p>
          So, a request for order 1 might receive “Order 1 has been delivered
          with tracking #XYZ.” Requesting order 5 (which doesn’t exist) receives
          a “404 Not Found.”
        </p>
        <h2>Summary</h2>
        <p>
          <strong>A web server, at its core, does six things:</strong>
        </p>
        <ol>
          <li>Listens on a port for incoming requests</li>
          <li>Receives text based requests (usually HTTP) from clients</li>
          <li>Uses a transport protocol (like TCP) to move those requests</li>
          <li>
            Understands the requested resource and maps it to a file or dynamic
            logic
          </li>
          <li>
            Builds and sends back a structured HTTP response (status, headers,
            and content)
          </li>
          <li>
            Can serve not just web pages, but{" "}
            <strong>images, data, files, even videos and apps</strong>
          </li>
        </ol>
        <p>
          If you’re just starting out, don’t get intimidated run a simple server
          on your machine, play with ports, and inspect HTTP requests and
          responses. You’re already peeling back the black box!
        </p>
        <p>
          If this deep dive helped demystify web servers for you, consider
          subscribing for more developer friendly explanations and real-world
          examples.
        </p>
        <footer>
          <p>
            Written by a fellow developer who remembers the first time a “web
            server” seemed like magic. Keep exploring every programmer Googles
            their way to clarity eventually!
          </p>
          <h2>Recommended Articles</h2>
          <Section6 />
        </footer>
      </article>
    </div>
  );
}

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
  ];

  return (
    <section>
      <div className="h-ai">
        <h2>Code Report</h2>
      </div>

      <div className="bg-grid">
        {blogPosts.map((project) => (
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
