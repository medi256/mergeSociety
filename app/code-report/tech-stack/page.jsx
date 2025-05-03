import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "The Definitive Beginner's Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
  description:
    "Navigate the overwhelming world of technology choices with this practical guide to selecting the right tech stack for your project, whether it's web, mobile, desktop, games, or AI applications.",
  keywords: [
    "Tech Stack",
    "Web Development",
    "Mobile Development",
    "Desktop Applications",
    "Game Development",
    "AI Development",
    "Beginner Guide",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Next.js",
    "Django",
    "Flask",
    "Swift",
    "Kotlin",
    "React Native",
    "Flutter",
    "Unity",
    "Unreal Engine",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Overengineering",
  ],
  category: "Software Development",
  openGraph: {
    title: "The Definitive Beginner's Guide to Picking Your Tech Stack in 2025",
    description:
      "Stop overengineering and start building! Learn which technologies you actually need for web, mobile, desktop, game, and AI development with this practical, no-nonsense guide.",
    url: "https://www.mergesociety.com/code-report/tech-stack",
    siteName: "Tech Journeys",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg",
        width: 1200,
        height: 630,
        alt: "A developer standing at a crossroads with different tech stack paths",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T08:00:00Z",
    modifiedTime: "2025-04-27T08:00:00Z",
    section: "Development Guides",
    tags: [
      "Tech Stack Selection",
      "Web Development",
      "Mobile Development",
      "Desktop Development",
      "Game Development",
      "AI Development",
      "Beginner Tutorial",
      "Technology Choice",
      "Developer Roadmap",
      "Software Engineering",
      "Programming Languages",
    ],
  },
  authors: [
    {
      name: "Jamie Chen",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Tech Journeys",
  publisher: "Tech Journeys Media",
  alternates: {
    canonical: "https://www.mergesociety.com/code-report/tech-stack",
    languages: {
      "en-US": "https://www.mergesociety.com/code-report/tech-stack",
      "es-ES": "https://www.mergesociety.com/code-report/tech-stack",
      "fr-FR": "https://www.mergesociety.com/code-report/tech-stack",
      "de-DE": "https://www.mergesociety.com/code-report/tech-stack",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Beginner's Guide to Choosing Your Tech Stack in 2025",
    description:
      "Discover which technologies you actually need for your web, mobile, desktop, game, or AI project—without the overwhelming complexity.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg",
    ],
  },
  metadataBase: new URL("https://www.mergesociety.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 300,
    },
  },
  other: {
    readingTime: "8 minutes",
    contentType: "Educational Guide",
    publishDate: "April 27, 2025",
    category: "Software Development",
    subcategory: "Technology Selection",
    featured: true,
    series: "Developer Foundations",
    relatedArticles: [
      "The Minimal Viable Tech Stack: How to Start Building Today",
      "10 Signs You're Overengineering Your Project (And How to Stop)",
      "From Junior to Senior: When to Introduce New Technologies",
      "The Psychology of Tool Selection: Why We Choose Complex Over Simple",
    ],
    audienceLevel: "Beginner to Intermediate",
    impactIndustries: [
      "Software Development",
      "Web Design",
      "Game Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "Startups",
      "Indie Developers",
    ],
    keyQuotes: {
      overengineering:
        "You do not need a truckload of advanced tools to build your idea. That rabbit hole is called overengineering, and it traps more developers than any complex algorithm ever could.",
      webDev:
        "Every website—no exceptions—relies on HTML and CSS for structure and style. If you're building beyond a static blog, you'll also need JavaScript for interactivity. These three form the holy trinity of web development.",
      mobileChoice:
        "When you set out to build a mobile app, you face a big choice: develop natively or take the cross-platform route.",
      aiClarification:
        "If you simply want to build a chat GPT wrapper—an app that sends user queries to OpenAI's API and gets responses back—this is just a web app consuming an API. You don't need any heavy ML tools for that!",
      finalAdvice:
        "Start with the basics and build as you grow. You'll learn new tools as real needs—not hypothetical ones—emerge on your path.",
    },
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "The Definitive Beginner's Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg",
    datePublished: "2025-04-27T08:00:00Z",
    dateModified: "2025-04-27T08:00:00Z",
    author: {
      "@type": "Person",
      name: "Jamie Chen",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Journeys Media",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Navigate the overwhelming world of technology choices with this practical guide to selecting the right tech stack for your project, whether it's web, mobile, desktop, games, or AI applications.",
    keywords:
      "Tech Stack, Web Development, Mobile Development, Desktop Applications, Game Development, AI Development",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/code-report/tech-stack",
    },
    about: [
      {
        "@type": "Thing",
        name: "Software Development",
      },
      {
        "@type": "Thing",
        name: "Technology Stack Selection",
      },
    ],
    mentions: [
      {
        "@type": "SoftwareApplication",
        name: "React",
        applicationCategory: "Web Framework",
      },
      {
        "@type": "SoftwareApplication",
        name: "Unity",
        applicationCategory: "Game Engine",
      },
      {
        "@type": "SoftwareApplication",
        name: "Flutter",
        applicationCategory: "Mobile Development Framework",
      },
      {
        "@type": "SoftwareApplication",
        name: "PyTorch",
        applicationCategory: "Machine Learning Framework",
      },
    ],
    isAccessibleForFree: true,
    educationalLevel: "Beginner",
    audience: {
      "@type": "Audience",
      audienceType: "Software Developers",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "technology selection",
      "beginner developer",
      "tech stack guide",
      "development fundamentals",
      "software engineering basics",
      "project planning",
      "programming choices",
      "tool selection",
      "practical coding",
      "anti-overengineering",
    ],
    primaryTopic: "Technology Stack Selection",
    conceptualDifficulty: "Beginner",
    targetAudience: [
      "new developers",
      "coding students",
      "bootcamp graduates",
      "self-taught programmers",
      "hobbyist developers",
      "career switchers",
      "startup founders",
      "technical entrepreneurs",
      "no-code transitioning developers",
    ],
    visualContent: false,
    comprehensiveness: "focused guide",
    freshness: "current for 2025",
    perspectiveType: "practical advice",
    subjectRelevance: "high",
  },
  analytics: {
    eventCategory: "Development Guide",
    pageType: "Educational Content",
    contentPillar: "Developer Fundamentals",
    contentCluster: "Technology Selection",
    expectedReadTime: 480, // in seconds
    wordCount: 1200,
    subjectMatter: "Tech Stack Selection",
    expertiseLevel: "beginner",
    industryImpact: "high",
    futureOrientation: "medium",
    sponsoredContent: false,
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This comprehensive guide helps beginners select appropriate technology stacks for different development domains: web, mobile, desktop, gaming, and AI. It focuses on simplicity, avoiding overengineering, and choosing technologies based on actual needs rather than trends or complexity.",
    entityMentions: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "Next.js",
      "Django",
      "Flask",
      "ASP.NET",
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Java",
      "JavaFX",
      "Swing",
      "Unreal Engine",
      "Unity",
      "Python",
      "NumPy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "R",
    ],
    contentStructure: "sectioned guide with headings",
    visualElements: ["none"],
    technicalDepth: "entry-level",
    aiSearchTerms: [
      "how to choose tech stack for first project",
      "beginner friendly programming languages",
      "best technology for web development 2025",
      "mobile app development frameworks comparison",
      "game development engines for beginners",
      "AI development tools without machine learning background",
      "avoid overengineering software projects",
      "simplest tech stack for startups",
    ],
    businessConcepts: [
      "technology selection",
      "efficient development",
      "resource optimization",
      "skill acquisition strategy",
      "startup technology planning",
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "general",
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyTechnologyInsights: [
      "Minimalist Technology Selection",
      "Progressive Stack Building",
      "Domain-Specific Choices",
      "Simplicity vs Complexity Analysis",
      "Need-Driven Tool Adoption",
    ],
    practicalValue: "very high",
    impactScope: "individual developer to small team",
    learningPathway: "structured",
    futureOutlook: "pragmatic",
  },
  // Trust signals
  trustSignals: {
    industryExperience: true,
    authorExpertise: "senior developer with teaching experience",
    lastUpdatedDate: "2025-04-27",
    sourcesVerified: true,
    advertiserDisclosure: {
      sponsoredContent: false,
      affiliateLinks: false,
    },
    expertStatus: "active developer and technical mentor",
    conflictOfInterestDisclosure:
      "Author has used all mentioned technologies in production",
    correctionHistory: [],
  },
  // Content classification specifics
  contentClassification: {
    contentType: "educational guide",
    narrativeStyle: "conversational instructional",
    perspectiveBalance: "practical experience-based",
    historicalContext: "minimal",
    technicalAnalysis: "accessible",
    practicalApplication: "very high",
    fundamentalFocus: "central theme",
    timeScope: "present with forward relevance",
  },
  // Enhanced 2025 metrics
  technicalInsights: {
    complexityAssessment: "beginner-friendly",
    learningCurve: "considered in recommendations",
    ecosystemHealth: "evaluated",
    communitySupport: "highlighted",
    futureProofing: "addressed",
    interoperability: "noted",
    scalabilityPotential: "mentioned",
  },
  practicalImplementation: {
    beginnerGuidance: "primary focus",
    realWorldExamples: "included",
    commonPitfallsWarnings: "explicit",
    progressionPathways: "outlined",
    resourceRequirements: "realistic",
    supportOptions: "mentioned",
    learningResources: "suggested",
  },
  articleSpecifics: {
    format: "structured domain guide",
    topicCoverage: "practical decision-making",
    authorTone: "encouraging but realistic",
    persuasionLevel: "gentle guidance",
    humorContent: "light",
    callToAction: "start building with confidence",
    articleFlow: "problem to domain-specific solutions",
    audienceContext: "beginner developers facing decision paralysis",
  },
  // New for 2025: Educational progression metrics
  educationalProgression: {
    prerequisiteKnowledge: "basic programming concepts",
    learningObjectives: [
      "Select appropriate technologies for specific domains",
      "Avoid overengineering projects",
      "Understand when to expand tech stack",
      "Make domain-specific technology decisions",
      "Balance simplicity with capability",
    ],
    knowledgeApplication: "immediate",
    followUpResources: true,
    skillDevelopmentPath: "clear",
    conceptualFramework: "provided",
  },
  // New for 2025: Developer experience metrics
  developerExperience: {
    implementationComplexity: "addressed",
    onboardingFriction: "considered",
    timeToProductivity: "emphasized",
    toolingEcosystem: "evaluated",
    documentationQuality: "mentioned",
    communityResourcefulness: "highlighted",
    developmentVelocity: "prioritized",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          The Definitive Beginner’s Guide to Picking Your Tech Stack for Web,
          Mobile, Desktop, Games, and AI
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg"
          }
          alt="The Definitive Beginner’s Guide to Picking Your Tech Stack for Web,  Mobile, Desktop, Games, and AI"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-27">
            | April 27, 2025
          </time>
        </h2>

        <p>
          Whether your dream project is a dazzling website, a mobile app on
          everyone’s phones, a polished desktop application, an addictive video
          game, or even the next breakthrough in artificial intelligence—there
          comes a moment of truth:{" "}
          <strong>What technologies will you use to actually build it?</strong>
        </p>

        <p>
          Standing before this mountain of options can feel overwhelming. With{" "}
          <em>hundreds</em> of tools, frameworks, and languages available, the
          tech world is a wild jungle. You might spend countless hours mastering
          a coding language, learning the quirks of a framework, and just as you
          bask in newfound knowledge, you’re hit by a wave of doubt. “How will I
          ever build this project with so many more tools to master?” you
          wonder.
        </p>

        <p>
          Here’s the honest truth:{" "}
          <strong>
            You <em>do not</em> need a truckload of advanced tools to build your
            idea.
          </strong>
          That rabbit hole is called <strong>overengineering</strong>, and it
          traps more developers than any complex algorithm ever could. The
          secret? Start simple. As your project grows, introduce new
          technologies <em>only when you truly need them</em>.
        </p>

        <p>
          Let’s break down the five most common domains aspiring developers like
          yourself dream about: <strong>Web, Mobile, Desktop, Games,</strong>{" "}
          and <strong>AI</strong>. For each, you’ll get a clear, actionable
          answer on exactly which technologies to use as a beginner—no fluff,
          pure practicality.
        </p>

        <h2>1. Web Development: The Universal Starting Point</h2>

        <p>
          Every website—no exceptions—relies on <strong>HTML</strong> and{" "}
          <strong>CSS</strong> for structure and style. If you’re building
          beyond a static blog (think interactive dashboards, forms, or any site
          where users do more than just read), you’ll also need{" "}
          <strong>JavaScript</strong> for interactivity. These three form the
          holy trinity of web development; your starter tech stack is right
          there.
        </p>

        <p>
          Now, of course, you want to be productive. Ask yourself:{" "}
          <em>What programming language am I already most comfortable with?</em>{" "}
          The great news is that a web framework exists for almost every popular
          language out there. Like Python? Try <strong>Django</strong> or{" "}
          <strong>Flask</strong>. Prefer JavaScript? You get{" "}
          <strong>React</strong>, <strong>Vue</strong>, or{" "}
          <strong>Next.js</strong>. C# fan? There's <strong>ASP.NET</strong>.
          Just use what fits you best. <strong>Boom!</strong> That’s your web
          app tech stack.
        </p>

        <h2>2. Mobile Apps: iOS, Android, or Both?</h2>

        <p>
          Smartphones are everywhere, but behind the scenes, there are two major
          operating systems: <strong>iOS</strong> (Apple) and{" "}
          <strong>Android</strong> (Google). When you set out to build a mobile
          app, you face a big choice: develop <strong>natively</strong> or take
          the <strong>cross-platform</strong> route.
        </p>

        <ul>
          <li>
            <strong>Native Development:</strong> This means you use a different
            coding language for each platform—<strong>Swift</strong> for iOS and{" "}
            <strong>Kotlin</strong> for Android. Native apps usually offer
            better performance and deeper integration with device features.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Prefer to write your code once and
            deploy everywhere? You can do that using{" "}
            <strong>React Native</strong> (JavaScript-based, great if you
            already learned JS building for the web) or <strong>Flutter</strong>{" "}
            (powered by Google's Dart language, focusing on beautiful UI and
            speed).
          </li>
        </ul>

        <p>
          <strong>Boom!</strong> That’s your decision tree for a mobile app tech
          stack.
        </p>

        <h2>
          3. Desktop Applications: Think Inside the (Operating System) Box
        </h2>

        <p>
          Desktop apps bring you face-to-face with the world of operating
          systems: <strong>macOS</strong>, <strong>Windows</strong>, and{" "}
          <strong>Linux</strong>. You have a similar set of choices as you did
          with mobile development.
        </p>

        <ul>
          <li>
            <strong>Native Desktop Apps:</strong>
            <ul>
              <li>
                For <strong>macOS</strong>, use <strong>Swift</strong> (the same
                as for native iOS apps!).
              </li>
              <li>
                For <strong>Windows</strong> (and also Linux), use{" "}
                <strong>C</strong>—it’s low-level and powerful for direct system
                access.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cross-Platform Desktop Apps:</strong> Want a single code
            base to rule them all? Use <strong>Java</strong> and add a GUI
            toolkit like <strong>JavaFX</strong> or <strong>Swing</strong>. You
            can write one app that runs anywhere a Java virtual machine exists.
          </li>
        </ul>

        <p>
          <strong>Boom!</strong> You have your desktop app tech stack ready to
          go.
        </p>

        <h2>4. Video Games: Pick Your Engine, Start Your Adventure</h2>

        <p>
          Game development? Now we’re talking fun! Here, the decision is pretty
          direct and straightforward:
        </p>

        <ul>
          <li>
            Need <strong>high-end graphics</strong> and bleeding-edge{" "}
            <strong>performance</strong>? Choose <strong>Unreal Engine</strong>{" "}
            (driven by C++, perfect for AAA games).
          </li>
          <li>
            Want <strong>simplicity</strong>—or you just want to make something
            great without worrying about every technical detail? Choose{" "}
            <strong>Unity</strong> (uses C#, beloved by indie developers and
            pros alike).
          </li>
        </ul>

        <p>
          <strong>Boom!</strong> Time to start building your dream game.
        </p>

        <h2>5. AI and Machine Learning: The Future is Now</h2>

        <p>
          Artificial Intelligence (AI) and Machine Learning (ML) are all the
          rage. But let’s clarify first: if you simply want to build a{" "}
          <strong>chat GPT wrapper</strong>—an app that sends user queries to
          OpenAI’s API and gets responses back—this is just a web app consuming
          an API. You don’t need any heavy ML tools for that!
        </p>

        <p>
          If you plan to <em>create</em> machine learning models yourself,
          you’ll live almost exclusively in two programming languages:
        </p>
        <ul>
          <li>
            <strong>Python:</strong> The go-to language for almost every AI/ML
            project. Every project will use the essential data libraries{" "}
            <strong>NumPy</strong> (for fast math and arrays) and{" "}
            <strong>Pandas</strong> (for data wrangling and analysis). For
            classic machine learning algorithms, <strong>scikit-learn</strong>{" "}
            is your friend. For deep learning, you’ll pick either{" "}
            <strong>PyTorch</strong> (popular among researchers and academics)
            or <strong>TensorFlow</strong> (widely adopted in industry).
          </li>
          <li>
            <strong>R:</strong> While less common for end-to-end ML products, R
            is fantastic for statistical analysis and in-depth data
            visualization—perfect if you crave great graphs and statistical
            insight.
          </li>
        </ul>

        <p>
          <strong>AI/ML</strong> is a vast topic—one that can’t be fully
          explored in a single guide. If you’re curious (and you should be!),
          keep an eye out for upcoming articles diving deeper into AI concepts.
        </p>

        <h2>Final Thoughts: Build, Don’t Overthink!</h2>

        <p>
          Wherever you are on your software journey, remember:{" "}
          <strong>Start with the basics and build as you grow.</strong> You’ll
          learn new tools as real needs—not hypothetical ones—emerge on your
          path.
        </p>

        <p>
          Found this article helpful? Don’t forget to subscribe (if only this
          page had a bell to ring!). Want personalized advice, resume reviews,
          or to chat with fellow builders? Join the community Discord server;
          the link is waiting down below. Got an idea for a new topic? Leave
          your suggestion!
        </p>

        <p>Thanks for reading, and see you next time—happy building!</p>

        <h2>Recommended Articles</h2>
        <Section6 />
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
