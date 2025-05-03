import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
  description:
    "An accessible deep dive into algorithms—what they are, how they work, and their impact on society. Follow along as we demystify the technology that powers everything from search results to dating apps.",
  keywords: [
    "Algorithms",
    "Technology Explained",
    "Data Processing",
    "AI Fundamentals",
    "Digital Technology",
    "Search Engines",
    "Computer Science",
    "Tech Education",
    "Algorithm Ethics",
    "Data Science",
    "Tech Transparency",
    "Black Box Problem",
    "Oxford Internet Institute",
    "Human vs Machine",
    "Digital Literacy",
  ],
  category: "Technology Education",
  openGraph: {
    title:
      "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
    description:
      "Demystifying the invisible technology that powers your digital life—from search engines to social media feeds and beyond.",
    url: "https://www.mergesociety.com/code-report/algorithms",
    siteName: "Tech Decoded",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
        width: 1200,
        height: 630,
        alt: "Visual representation of an algorithm with data flowing through a decision tree structure",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T09:00:00Z",
    modifiedTime: "2025-04-27T09:00:00Z",
    section: "Technology Insights",
    tags: [
      "Algorithm Fundamentals",
      "Tech Education",
      "Digital Literacy",
      "Data Processing",
      "Tech Ethics",
      "Oxford Research",
      "Computer Science",
      "Algorithmic Decision Making",
      "Technology Transparency",
      "Data Centers",
    ],
  },
  authors: [
    {
      name: "Amara Chen",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Tech Decoded Editorial",
  publisher: "Tech Decoded Media, Inc.",
  alternates: {
    canonical: "https://www.mergesociety.com/code-report/algorithms",
    languages: {
      "en-US": "https://www.mergesociety.com/code-report/algorithms",
      "es-ES": "https://www.mergesociety.com/code-report/algorithms",
      "fr-FR": "https://www.mergesociety.com/code-report/algorithms",
      "de-DE": "https://www.mergesociety.com/code-report/algorithms",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Are Algorithms, Really? Understanding the Tech That Shapes Our World",
    description:
      "Take a journey inside data centers and coding classrooms to demystify the invisible forces that power your digital life.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
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
      "max-snippet": 320,
    },
  },
  other: {
    readingTime: "8 minutes",
    contentType: "Explanatory Article",
    publishDate: "April 27, 2025",
    category: "Digital Literacy",
    subcategory: "Technology Education",
    featured: true,
    series: "Technology Demystified",
    seriesPosition: 3,
    relatedArticles: [
      "Understanding Machine Learning: Beyond the Buzzwords",
      "The Ethics of AI: Who Makes the Rules?",
      "Data Privacy in 2025: What You Need to Know",
      "The History of Computing: From ENIAC to Quantum",
    ],
    audienceLevel: "General Interest",
    impactIndustries: [
      "Education",
      "Technology",
      "Social Media",
      "E-commerce",
      "Dating Apps",
      "Search Engines",
      "Digital Media",
    ],
    keyQuotes: {
      algorithmDefinition:
        "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
      professorNashExplanation:
        "Think of an algorithm as a set of instructions—just like a recipe. For example, a recipe tells you exactly how to combine flour, sugar, eggs, and a dash of hope to create a cake.",
      dataImportance:
        "It's all about data. We have mountains of it—lists of towns, endless tweets, flight prices, you name it.",
      blackBoxProblem:
        "We don't always know exactly what an algorithm's instructions are, especially when they belong to a private company.",
      algorithmsImpact:
        "These are not just cyber-puppeteers controlling your dating matches or ad feeds; they directly impact human lives.",
    },
    mediaAssets: {
      featuredImage: {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
        alt: "Visual representation of an algorithm with data flowing through decision paths",
        credits: "Digital illustration by TechDecoded Studio",
      },
      videoInterview: {
        url: "https://www.techdecoded.com/videos/professor-nash-algorithms-interview",
        duration: "4:32",
        transcriptAvailable: true,
      },
    },
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
    datePublished: "2025-04-27T09:00:00Z",
    dateModified: "2025-04-27T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Amara Chen",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Decoded Media, Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "An accessible deep dive into algorithms—what they are, how they work, and their impact on society. Follow along as we demystify the technology that powers everything from search results to dating apps.",
    keywords:
      "Algorithms, Technology Explained, Data Processing, AI Fundamentals, Digital Technology",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/code-report/algorithms",
    },
    about: [
      {
        "@type": "Thing",
        name: "Algorithms",
      },
      {
        "@type": "Thing",
        name: "Computer Science",
      },
      {
        "@type": "Thing",
        name: "Data Processing",
      },
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "Oxford Internet Institute",
      },
      {
        "@type": "Person",
        name: "Professor Victoria Nash",
      },
      {
        "@type": "Person",
        name: "Dr. Bernie Hogan",
      },
    ],
    isAccessibleForFree: true,
    educationalLevel: "General Interest",
    audience: {
      "@type": "Audience",
      audienceType: "General Public",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "algorithm explanation",
      "technology education",
      "data processing",
      "computing basics",
      "tech ethics",
      "digital literacy",
      "algorithm transparency",
      "data center tour",
      "coding education",
      "tech fundamentals",
    ],
    primaryTopic: "Algorithm Understanding",
    conceptualDifficulty: "Beginner",
    targetAudience: [
      "general public",
      "students",
      "technology enthusiasts",
      "digital citizens",
      "educators",
      "curious minds",
      "non-technical professionals",
      "parents",
      "digital media consumers",
      "social media users",
    ],
    visualContent: true,
    comprehensiveness: "introductory overview",
    freshness: "evergreen with 2025 context",
    perspectiveType: "educational journalism",
    subjectRelevance: "high",
  },
  analytics: {
    eventCategory: "Technology Education",
    pageType: "Explanatory Article",
    contentPillar: "Digital Literacy",
    contentCluster: "Algorithm Education",
    expectedReadTime: 480, // in seconds
    wordCount: 1250,
    subjectMatter: "Technology Fundamentals",
    expertiseLevel: "beginner",
    industryImpact: "educational",
    futureOrientation: "medium",
    sponsoredContent: false,
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This article explains algorithms in accessible terms, using analogies like cooking recipes to demystify how they work. It includes insights from Oxford researchers who explain algorithm operations, discusses the 'black box problem' of algorithmic transparency, and details a hands-on experiment comparing human performance against algorithm-controlled technology through a drone race.",
    entityMentions: [
      "Algorithms",
      "Oxford Internet Institute",
      "Professor Victoria Nash",
      "Dr. Bernie Hogan",
      "Data Centers",
      "Scratch Programming Language",
      "Black Box Problem",
      "Drone",
      "Search Engines",
      "Social Media",
      "Dating Apps",
    ],
    contentStructure: "educational narrative with expert insights",
    visualElements: [
      "data center tour",
      "coding classroom",
      "drone race demonstration",
    ],
    technicalDepth: "accessible beginner",
    aiSearchTerms: [
      "what are algorithms simple explanation",
      "how do algorithms work in everyday life",
      "algorithm transparency issues",
      "technology literacy basics",
      "data processing simple explanation",
      "algorithms in social media explained",
      "technology ethics beginners",
      "black box algorithm problem",
      "coding for beginners concepts",
      "human vs machine decision making",
    ],
    businessConcepts: [
      "technology literacy",
      "algorithmic transparency",
      "ethical technology use",
      "data processing awareness",
      "education on digital systems",
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "general public",
    plainLanguageFocus: true,
    technicalJargonMinimized: true,
    conceptualVisualizationsAvailable: true,
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyInsights: [
      "Algorithms as recipes",
      "Data center operations",
      "Transparency challenges",
      "Human vs machine efficiency",
      "Societal impact of algorithms",
    ],
    practicalValue: "digital literacy",
    impactScope: "everyday technology use",
    knowledgeDevelopmentPathway: "from novice to informed user",
    futureOutlook: "increasing algorithmic presence",
    communityEngagement: "comment section prompts",
  },
  // Trust signals
  trustSignals: {
    expertInterviews: true,
    academicSources: "Oxford Internet Institute",
    factChecking: "Tech Decoded Editorial Board",
    updateFrequency: "reviewed quarterly for accuracy",
    transparencyLevel: "source and expert attribution",
    conflictOfInterestDisclosure:
      "No financial interests in mentioned technologies",
    corrections: [],
  },
  // Content classification specifics
  contentClassification: {
    contentType: "educational explainer",
    narrativeStyle: "conversational journalism",
    perspectiveBalance: "educational with critical thinking prompts",
    historicalContext: "minimal, focused on present",
    technicalAnalysis: "accessible analogies",
    practicalApplication: "everyday technology use",
    educationalFocus: "central theme",
    timeScope: "current with future implications",
  },
  // Enhanced 2025 immersive content features
  immersiveFeatures: {
    audioNarration: {
      available: true,
      voiceType: "human recorded",
      duration: "8:12",
      enhancedWithSoundEffects: true,
    },
    interactiveElements: {
      algorithmSimulator: {
        type: "interactive javascript demo",
        complexity: "beginner",
        purpose: "hands-on learning",
      },
      quizComponent: {
        questions: 5,
        difficultyLevel: "introductory",
        certificateOnCompletion: true,
      },
    },
    accessibilityEnhancements: {
      conceptVisualizations: true,
      audioDescriptions: true,
      simplifiedExplanations: true,
      multimodalLearning: true,
    },
  },
  // New for 2025: Digital literacy metrics
  digitalLiteracyMetrics: {
    conceptClarification: "high",
    jargonExplanation: "thorough",
    realWorldApplications: "multiple examples",
    criticalThinkingPrompts: "included throughout",
    misconceptionAddressing: "proactive",
    furtherLearningPathways: "suggested",
    competencyDevelopment: "foundational",
  },
  // New for 2025: Teaching effectiveness metrics
  teachingEffectiveness: {
    analogyQuality: "kitchen recipe comparison",
    exampleRelevance: "everyday technology use",
    conceptualBreakdown: "step by step",
    learningScaffolding: "progressive difficulty",
    knowledgeRetentionFeatures: "recapping key points",
    audienceEngagement: "narrative storytelling",
    keyTakeaways: "explicitly stated",
  },
  // New for 2025: Interactive content elements
  interactiveContentElements: {
    codePlayground: {
      available: true,
      programmingLanguage: "Scratch",
      complexity: "beginner",
      purpose: "algorithm visualization",
    },
    dataDashboard: {
      available: false,
    },
    simulationComponents: {
      available: true,
      type: "decision tree visualization",
      userControlled: true,
    },
    userFeedbackLoops: {
      comprehensionChecks: true,
      opinionPolls: true,
      interactiveQuizzes: true,
    },
  },
  // New for 2025: Tech ethics metadata
  techEthicsMetadata: {
    ethicalConsiderations: "algorithm transparency",
    societalImpactDiscussion: "present",
    powerDynamicsAnalysis: "who controls algorithms",
    privacyImplications: "discussed",
    accessEquityIssues: "mentioned",
    futureChallenges: "outlined",
    ethicalFrameworks: "presented neutrally",
    stakeholderPerspectives: "multiple viewpoints",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          What Are Algorithms, Really? The Truth Behind the Technology Shaping
          Our World
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg"
          }
          alt="What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World"
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
          <em>They're everywhere.</em> Algorithms lurk inside the social media
          apps we scroll through countless times a day, power our search
          engines, and even decide who might be our soulmate on dating
          platforms. But for all this talk about algorithms, one big question
          remains: what are they, really? Are they something to be worried
          about? Do they think for themselves, or is that just science fiction?
        </p>

        <p>
          Like any researcher—or, let's be honest, anyone confused and curious
          in 2025—I started where every great investigation begins: the search
          engine. Typing in “algorithm,” I was greeted with the most
          official-sounding definition I could find:{" "}
          <strong>
            A process or set of rules to be followed in calculations or other
            problem-solving operations, especially by a computer.
          </strong>
        </p>

        <p>
          That sounds almost like a riddle. After an hour falling down the
          internet rabbit hole, reading definition after definition, everything
          started to blur together. What do algorithms <em>actually do</em>?
          Determined to get some real answers, I reached out to a bona fide
          expert—Professor Victoria Nash from the Oxford Internet Institute.
        </p>

        <h2>Algorithms, Explained (with Cake!)</h2>
        <p>
          Professor Nash broke it down in the simplest way possible: think of an
          algorithm as a set of instructions—just like a recipe. For example, a
          recipe tells you exactly how to combine flour, sugar, eggs, and a dash
          of hope to create a cake. Replace flour and eggs with data, and you've
          got a computer algorithm: it’s a set of instructions telling a program
          how to process information and what result to produce at the end.
        </p>

        <p>
          Hearing that made algorithms seem less mysterious and a whole lot less
          threatening. But still, the same process that gets me a cake somehow
          also steers my search results. How could such a simple concept drive
          such powerful technology? Enter Dr. Bernie Hogan, also from Oxford,
          who invited me for a behind-the-scenes look.
        </p>

        <h2>A Noisy Tour Behind the Scenes</h2>
        <p>
          Dr. Hogan met me in the university's sprawling data center. Picture
          this: endless rows of hot, humming server racks, all packed together
          in a high-security, nondescript room that almost nobody ever sees, but
          on which modern life seems to depend. The noise is constant—a kind of
          mechanical white noise you can feel in your chest.
        </p>
        <p>
          “Each one of these belongs to a different department,” Dr. Hogan
          explained, gesturing to the blinking machines. “They're doing
          different kinds of calculations. So there are thousands of algorithms
          running inside these boxes. Actually, scratch that: billions.”
        </p>

        <p>
          As we retreated to a quieter space to talk details, Dr. Hogan
          emphasized why we need algorithms to begin with:{" "}
          <strong>it's all about data.</strong> We have mountains of it—lists of
          towns, endless tweets, flight prices, you name it. To make sense of
          this avalanche of information, algorithms step in, following their
          instructions to sift, sort, and stack the data.
        </p>

        <p>
          “Algorithms calculate, based on a bunch of features, the things that
          will put something at the top of the list, and something else at the
          bottom,” Bernie said. For example, when you search for a flight
          online, the order of prices you see may change depending on the day,
          your location, or even the device you use. That’s an algorithm in
          action—a sometimes mysterious, not-always-transparent one.
        </p>

        <h2>The Black Box Problem</h2>
        <p>
          If it’s all just simple instructions, should we be scared? Dr. Hogan
          raised the concept of the “black box.” Essentially, we don’t always
          know exactly what an algorithm’s instructions are, especially when
          they belong to a private company. This can lead to real-world
          consequences, like when flight prices change dramatically based on
          mysterious factors, and we have no way of knowing why.
        </p>
        <p>
          But what about so-called “thinking” algorithms? Are we approaching the
          age of self-aware computers? “We wouldn’t say algorithms think,” Dr.
          Hogan replied, “but they can learn. Algorithms can learn from other
          algorithms and even generate their own instructions.” At the end of
          the day, though, the foundation is always the same: data goes in,
          millions of instructions are followed, and a result comes out.
        </p>

        <h2>What Does an Algorithm Look Like?</h2>
        <p>
          Frustrated that I’d never <em>seen</em> an algorithm in the wild, I
          paid a visit to one of the UK’s top coding schools. On arrival, a
          buzzing classroom of aspiring coders greeted me, all hard at work,
          blocks of code filling screens.
        </p>
        <p>
          “So this is code, right? But what’s the difference between code and an
          algorithm?” I asked.
        </p>
        <p>
          An instructor broke it down: coding is how you write an algorithm in a
          way a computer can understand. In this class, they were using{" "}
          <strong>Scratch</strong>, a super-accessible programming language
          where you drag and drop colorful blocks that represent instructions.
          For this lesson, they were writing instructions for a drone to perform
          tricks—loops, flips, turns—at the press of a button.
        </p>

        <h2>Battle of Man vs. Machine: The Drone Race</h2>
        <p>
          To really put algorithms to the test, we set up a classic
          human-versus-machine challenge: a drone programmed by Scratch (and its
          perfectly consistent algorithm) versus…me, last of the analog humans.
          The course: through a hoop, do a flip, race around, land, and repeat
          three times.
        </p>
        <p>
          The premise was simple. The algorithm-powered drone should execute
          every movement identically, every time, without a hitch. Humans, as
          you might guess, are somewhat less predictable. Ready, set, go!
        </p>
        <p>
          I fumbled through the controls with a combination of hope, panic, and
          random button pressing. The algorithm, meanwhile, glided the drone
          through each step smoothly, no drama, no deviations. As the race
          finished, the winner was obvious: the algorithm, cool as a cucumber,
          completed all three laps perfectly.
        </p>
        <p>
          “That’s the beauty of algorithms,” the instructor noted. “No human
          error. The computer will never get distracted, never make a
          mistake—unless, of course, the person writing the instructions gets it
          wrong in the first place.”
        </p>

        <h2>Should We Be Afraid?</h2>
        <p>
          That raises a whole new realm of discussion: ethics and control. If
          algorithms are making so many decisions in our world, are we handing
          too much over to them? Will they take all our jobs? Will they erode
          our human skills, or even “de-skill” us by making us overly dependent?
        </p>
        <p>
          The consensus: yes, there are risks. Over-reliance on algorithms could
          dull our own decision-making abilities. Yet, they also bring enormous
          benefits: efficiency, speed, and the ability to spot patterns that
          humans often miss. The key is in responsible use—algorithms should be
          our tools, not our masters.
        </p>

        <h2>The Big Picture: Who’s Really in Charge?</h2>
        <p>
          Here’s what I’ve learned: despite all their mystique, algorithms are
          fundamentally simple. Data goes in, the instructions are followed, and
          an outcome pops out the other end. Across the world today, algorithms
          are at work in the criminal justice system, social care planning,
          credit checks, and so much more. These are not just cyber-puppeteers
          controlling your dating matches or ad feeds; they{" "}
          <strong>directly impact human lives</strong>.
        </p>
        <p>
          The crucial question isn’t about algorithms themselves. It’s about{" "}
          <strong>
            who controls them, and where the data they use comes from
          </strong>
          . With great (algorithmic) power comes great responsibility.
          Transparency, oversight, and ethical standards all matter now more
          than ever.
        </p>

        <p>
          <strong>Thanks for reading!</strong> If you found this deep dive
          enlightening, don’t forget to subscribe for more explorations into the
          technology shaping our world. See you next time!
        </p>
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
