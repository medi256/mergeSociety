import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "I Built a Product in 24 Hours: 7pm to 5am Sprint (Next.js, Supabase, Stripe)",
  description:
    "Real-time log of building and shipping a product from scratch in one day. Pizza at 9pm, F1 at 11pm, coffee at midnight, first sale by morning. No fluff - just the raw process, mistakes, and what it feels like to sprint from zero to live with Next.js, Supabase, and Stripe.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "build product in 24 hours",
    "ship startup one day",
    "nextjs rapid development",
    "indie hacker sprint",
    "supabase stripe integration",
    "solo founder build log",
    "ship fast tutorial",
    "overnight product launch",
    "followsnapshot build story",
    "indie dev process",
    "24 hour challenge startup",
    "nextjs 15 supabase",
    "stripe setup guide",
    "rapid product development",
    "solo developer workflow",
    "build in public",
    "ship fast mindset",
    "late night coding",
    "first sale story",
    "indie maker productivity",
    "vercel deployment speed",
    "DPs templates",
    "cursor AI coding",
    "speed over perfection",
    "indie hacker lifestyle",
  ],

  category: "Indie Development & Build Logs",

  openGraph: {
    title: "24-Hour Product Sprint: Pizza, F1, Coffee & Shipping at 5am",
    description:
      "Blow-by-blow of building a real product in one night. Started 7pm, shipped 5am, first sale by morning. Next.js + Supabase + Stripe. No BS, just the raw grind.",
    url: "https://www.mergesociety.com/startup-stories/indie-dev",
    siteName: "Merge Society",
    images: [
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1762106886174_qhxevr_qae0d7_qpckrv.jpg",
        width: 1200,
        height: 630,
        alt: "24-hour indie dev sprint building and shipping a product from 7pm to 5am with Next.js, Supabase, and Stripe",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-11-02T00:00:00Z",
    modifiedTime: "2025-11-02T00:00:00Z",
    section: "Indie Development Stories",
    tags: [
      "Indie Development",
      "Build Log",
      "24 Hour Challenge",
      "Next.js",
      "Supabase",
      "Stripe",
      "Rapid Shipping",
      "Solo Founder",
      "Build in Public",
      "First Sale",
      "Indie Hacker",
      "Product Sprint",
      "Speed Shipping",
      "Developer Lifestyle",
      "Startup Journey",
    ],
  },

  authors: [
    {
      name: "Massa Medi",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Massa Medi - Indie Developer",
  publisher: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories/indie-dev",
    languages: {
      "en-US": "https://www.mergesociety.com/startup-stories/indie-dev",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "⚡ Built & Shipped a Product in 24 Hours: The Raw Truth",
    description:
      "7pm: Started. 9pm: Pizza. 11pm: F1. Midnight: Coffee. 3am: Stripe hell. 5am: Live. Morning: First sale. The unfiltered build log.",
    creator: "@manager70191",
    images: [
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1762106886174_qhxevr_qae0d7_qpckrv.jpg",
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
    readingTime: "12 minutes",
    contentType: "Build Log / Real-Time Narrative",
    publishDate: "November 2, 2025",
    category: "Indie Development",
    subcategory: "Build Logs",
    featured: true,
    buildInPublic: true,
    realTime: true,
    unfiltered: true,
    complexity: "All Levels",
    inspirational: true,
    relatable: true,
    productLaunched: "followsnapshot.art",
    relatedArticles: [
      "The Indie Hacker's Tech Stack: What to Use to Ship Fast in 2025",
      "From Idea to First Sale: A Complete Launch Playbook",
      "Building in Public: What Works and What Doesn't",
      "Why Speed Matters More Than Perfection for Indie Devs",
      "The Psychology of Shipping: How to Stop Overthinking and Start Building",
    ],
    visualAid: true,
    videoOrigin: true,
    authorCredentials: "Indie Developer & Founder",
    buildTime: "10 hours (7pm - 5am)",
    stack: "Next.js 15.5, Supabase, Stripe",
    tools: "Cursor AI, DPs Templates, Vercel",
    firstSale: "next morning",
    pricing: "$4 one-time",
    keyTakeaways: [
      "Shipped complete product (Next.js + Supabase + Stripe) in 10 hours overnight",
      "Used component library (DPs Templates) to avoid reinventing basics",
      "Dealt with Next.js 16 breaking changes, rolled back to 15.5 for stability",
      "Pizza at 9pm, F1 qualifying at 11pm, coffee at midnight - developer fuel",
      "Hit Stripe integration pain at 3am (always does), pulled from previous projects",
      "Bought wrong domain at 3:40am (followsnapshot vs followersnapshot) - kept going",
      "Shipped to Vercel at 4:15am with minor OG image bug (fixed morning)",
      "First sale came in by 1:41pm next day after 4 hours sleep",
      "Speed over perfection: 'Shrink your deadline and you'll be surprised'",
      "The indie dev lifestyle: building while others club, watching money come in while you sleep",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Building and Shipping a Real Product in One Day - 24 Hour Sprint",
    image:
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1762106886174_qhxevr_qae0d7_qpckrv.jpg",
    datePublished: "2025-11-02T00:00:00Z",
    dateModified: "2025-11-02T00:00:00Z",
    author: {
      "@type": "Person",
      name: "Massa Medi",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Indie Developer & Founder",
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
      "Hour-by-hour build log of creating and shipping a complete product from 7pm to 5am using Next.js, Supabase, and Stripe. First sale by morning.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/startup-stories/indie-dev",
    },
    keywords:
      "indie development, 24 hour challenge, Next.js, Supabase, Stripe, rapid shipping, build log",
    about: [
      {
        "@type": "Thing",
        name: "Indie Development",
      },
      {
        "@type": "Thing",
        name: "Rapid Product Development",
      },
      {
        "@type": "Thing",
        name: "Build in Public",
      },
    ],
    isAccessibleForFree: "True",
    articleSection: "Developer Stories",
    wordCount: 4200,
    articleBody:
      "Real-time narrative of building a product from scratch in one night, including setup, blockers, workflow, late-night decisions, and first sale.",
  },

  // Enhanced semantic metadata
  semantic: {
    contentTags: [
      "24 hour product sprint",
      "indie dev build log",
      "rapid shipping process",
      "nextjs supabase stripe",
      "late night coding session",
      "build in public story",
      "first sale celebration",
      "solo founder journey",
      "speed over perfection",
      "indie hacker lifestyle",
    ],
    primaryTopic: "Real-Time 24-Hour Product Build Log",
    secondaryTopics: [
      "Rapid Development Process",
      "Tech Stack Setup",
      "Solo Founder Mindset",
      "Shipping Speed",
      "Build in Public",
    ],
    narrativeStyle: "real-time chronological with raw unfiltered voice",
    toneProfile: "energetic, honest, relatable, unpolished, inspiring",
    emotionalArc:
      "excitement → grind → exhaustion → satisfaction → validation (first sale)",
    chronicleFormat: "hour-by-hour with timestamps and context",
    authenticityLevel:
      "maximum - includes mistakes, wrong domain purchase, exhaustion",
    conceptualDifficulty:
      "accessible to all - more about mindset than complex tech",
    targetAudience: [
      "indie developers",
      "aspiring founders",
      "solo builders",
      "side project creators",
      "indie hackers",
      "technical builders",
      "speed shippers",
      "build in public community",
      "solopreneurs",
      "maker community",
    ],
    visualContent: true,
    videoOrigin: true,
    comprehensiveness: "complete timeline from 7pm to first sale",
    freshness: "November 2025 build",
    evergreen: {
      value: true,
      reason: "rapid shipping mindset and indie dev process remain relevant",
      relevanceWindow: "2+ years",
    },
    depthLevel: "blow-by-blow chronicle with practical details",
    contentFormat: "real-time build diary with technical and personal details",
    emotionalResonance: [
      "inspiration (you can do this too)",
      "relatability (pizza, F1, coffee)",
      "validation (first sale proves it works)",
      "urgency (deadlines force action)",
      "pride (ship something real)",
    ],
    lifestyleCapture:
      "indie dev life - building while others club, making money while sleeping",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Indie Development Stories",
    pageType: "Build Log / Real-Time Narrative",
    contentPillar: "Indie Development Journey",
    contentCluster: "Rapid Shipping",
    expectedReadTime: 720, // in seconds
    wordCount: 4200,
    practicalValue: 4, // on a scale of 1-5
    inspirationValue: 5,
    relatability: 5,
    authenticityScore: 5,
    visualAids: true,
    videoOrigin: true,
    buildTimeline: "10 hours",
    engagementMetrics: {
      estimatedCompletionRate: 0.85,
      expectedSocialShare: 0.4,
      socialSharePotential: "extremely high in indie dev community",
      inspirationLevel: "very high",
      emotionalImpact: "strong - validates indie dev lifestyle",
      bookmarkProbability: "high",
      communityResonance: "very high",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "learning how to ship fast",
      "seeing real indie dev process",
      "finding inspiration to start building",
      "understanding rapid development workflow",
      "connecting with indie dev lifestyle",
    ],
    secondary: [
      "learning Next.js + Supabase + Stripe stack",
      "understanding build in public",
      "exploring solo founder mindset",
      "discovering tools for speed",
      "validating own indie journey",
    ],
    painPoints: [
      "perfectionism preventing shipping",
      "fear of building in public",
      "uncertainty about tech stack choices",
      "feeling alone in indie journey",
      "not knowing how to start",
      "overthinking product decisions",
    ],
    searchQueries: [
      "how to build product in 24 hours",
      "indie dev build log",
      "ship startup one day",
      "nextjs supabase stripe tutorial",
      "rapid product development",
      "solo founder build process",
      "overnight product launch",
      "indie hacker productivity",
      "build in public story",
      "first sale indie product",
      "speed shipping mindset",
      "late night coding session",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "unfiltered hour-by-hour chronicle with timestamps, mistakes, and real human moments",
    expertiseLevel: "indie developer with multiple shipped projects",
    actionableInsights: "specific tools, stack choices, and mindset shifts",
    authenticityScore:
      "maximum - includes wrong domain purchase, exhaustion, F1 breaks",
    relatabilityFactor:
      "very high - pizza, coffee, late nights resonate universally",
    inspirationalImpact: "shows it's actually doable in one night",
    practicalApplicability: "clear tech stack and workflow",
    vulnerabilityLevel: "high - admits brain fog, mistakes, uncertainty",
  },

  // Chronological timeline structure
  chronologicalTimeline: {
    "7:00pm_kickoff": {
      action: "project setup, naming, npm i starter",
      blocker: "Next.js 16 breaking changes",
      solution: "rolled back to 15.5",
      timeLost: "1 hour",
      mood: "determined",
    },
    "8:00pm_hour1": {
      action: "hero section, UI structure, Discord chat",
      progress: "landing page bones in place",
      handsOnTime: "40 minutes",
      mood: "momentum building",
    },
    "9:00pm_sprint": {
      action: "base logic, mobile UI redesign, naming thoughts",
      fuel: "pizza arrived",
      plan: "finish UI, F1 at 11pm, coffee midnight, Stripe after",
      mood: "energized",
    },
    "10:00pm_postPizza": {
      action: "input flow, follower compilation logic, mobile quirks",
      demo: "tested values, layout holds",
      upcoming: "F1 in 10 minutes",
      mood: "confident",
    },
    "11:00pm_f1Break": {
      action: "watching F1 qualifying",
      context: "Verstappen in fifth, Leclerc and Norris fighting",
      fuel: "Coca Cola",
      philosophy: "this is fun, I'm grinding, others are clubbing",
      mood: "privileged",
    },
    "12:00am_midnightShift": {
      action: "made coffee, back to keyboard",
      energy: "tired but pushing",
      mood: "focused",
    },
    "1:30am_boring": {
      action: "wiring Supabase and Stripe",
      context: "boring but essential",
      plan: "1-2 hours to finish",
      optimism: "third time doing this, should be easier",
      mood: "positive but realistic",
    },
    "2:00am_checklist": {
      action: "wrote 10-item missing checklist",
      items:
        "favicon, Supabase, login, Stripe, pricing, session, metadata, domain, OG, analytics",
      guess: "finish by 4:30am",
      mood: "organized",
    },
    "3:00am_loginDone": {
      action: "login working, starting Stripe",
      context: "Stripe is always a pain in the ass",
      tools: "using Cursor AI to help",
      plan: "domain purchase soon",
      mood: "tired but hopeful",
    },
    "3:40am_domainOops": {
      action: "bought followsnapshot.art instead of followersnapshot.art",
      mistake: "missing syllable",
      decision: "keep going, don't break rhythm",
      mood: "laugh and ship",
    },
    "4:15am_doneCoding": {
      action: "finished coding, screen recording, pushing to Vercel",
      status: "ready to publish",
      mood: "satisfied",
    },
    "5:10am_shipped": {
      action: "domain live, analytics done, product shipped",
      buildTime: "10 hours (7pm - 5:20am)",
      status: "website live at followsnapshot.art",
      bug: "OG image not showing in previews (fix tomorrow)",
      mood: "proud, happy, eyes hurting",
    },
    "10:30am_nextDay": {
      action: "woke up, 4 hours sleep",
      fixes: "login and payment issues",
      milestone: "FIRST SALE",
      validation: "made internet money",
      mood: "energized, validated",
    },
  },

  // Business alignment
  businessAlignment: {
    conversionGoal:
      "inspiration to build, community connection, followsnapshot.art traffic",
    audienceSegment: "indie developers and aspiring builders",
    customerJourneyStage: "inspiration and validation",
    contentROIMetrics: [
      "social shares in indie community",
      "followsnapshot.art traffic",
      "comment engagement about own builds",
      "bookmark for motivation",
      "YouTube video views",
    ],
    competitivePositioning: "most authentic unfiltered build log",
    communityBuilding: "connects with build-in-public movement",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "Twitter/X (indie dev community)",
      "Reddit (r/Entrepreneur, r/SideProject, r/webdev)",
      "Hacker News (build stories)",
      "Indie Hackers (community resonance)",
      "LinkedIn (founder inspiration angle)",
      "Dev.to (developer community)",
    ],
    promotionStrategy: "authentic build story that inspires action",
    optimalPostingTimes: [
      "Monday morning 8-10am EST (motivation start to week)",
      "Saturday evening 7-9pm EST (when builders are grinding)",
      "Sunday afternoon 2-4pm EST (side project time)",
    ],
    hashtagStrategy: [
      "#IndieDev",
      "#BuildInPublic",
      "#24HourChallenge",
      "#IndieHacker",
      "#ShipFast",
      "#SoloFounder",
      "#RapidShipping",
      "#MakerStory",
      "#FirstSale",
    ],
    syndicationPartners: [
      "indie hacker newsletters",
      "maker community platforms",
      "dev story publications",
      "build-in-public aggregators",
      "founder journey blogs",
    ],
    influencerOutreach: [
      "indie dev YouTubers",
      "maker community leaders",
      "build-in-public advocates",
      "rapid shipping evangelists",
      "solo founder influencers",
    ],
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy: "asking about readers' own build stories and challenges",
    conversationStarters: [
      "What's the fastest you've ever shipped something?",
      "What stops you from starting your own 24-hour sprint?",
      "Pizza, coffee, or energy drinks - what's your coding fuel?",
      "Have you ever bought the wrong domain at 3am?",
      "What's your biggest shipping blocker right now?",
    ],
    communityContribution:
      "encouraging sharing of build stories and first sales",
    vulnerabilityPrompt: "share your shipping mistakes - we all have them",
    callToAction: "Start your own 24-hour sprint this weekend",
    productLink: "Try followsnapshot.art",
  },

  // Virality optimization
  viralityOptimization: {
    emotionalTriggers: [
      "inspiration (I can do this too)",
      "relatability (pizza, F1, coffee = me)",
      "validation (first sale proves it works)",
      "pride (shipping something real)",
      "urgency (deadlines force action)",
      "community (indie devs unite)",
    ],
    shareableMoments: [
      "7pm to 5am timeline",
      "Pizza at 9pm, F1 at 11pm, coffee at midnight",
      "Bought wrong domain at 3:40am",
      "Stripe is always a pain in the ass",
      "First sale by morning",
      "'Hate me wherever you want, I'm grinding'",
      "'You can just do things'",
      "4 hours sleep, fixed bugs, made money",
    ],
    relatabilityHooks: [
      "late night coding sessions everyone knows",
      "mistakes everyone makes (wrong domain)",
      "developer fuel (pizza, coffee)",
      "F1 in background",
      "brain fog at 5am",
    ],
    indieDevCommunityAppeal: "maximum - captures the lifestyle authentically",
    inspirationalAngle: "shows it's actually possible in one night",
  },

  // SEO technical optimization
  seoTechnical: {
    focusKeyword: "build product 24 hours",
    secondaryKeywords: [
      "indie dev build log",
      "nextjs supabase stripe",
      "ship product one day",
      "rapid development process",
    ],
    keywordDensity: "natural integration throughout chronological narrative",
    internalLinking: [
      "Next.js tutorials",
      "Supabase guides",
      "Stripe integration articles",
      "indie dev resources",
      "build-in-public content",
    ],
    externalLinking: [
      "followsnapshot.art",
      "DPs Templates mention",
      "Cursor AI mention",
      "Vercel deployment",
    ],
    imageOptimization: {
      altText: "comprehensive and descriptive",
      fileNaming: "keyword-rich",
      compression: "optimized for speed",
    },
    mobileFriendly: true,
    pageSpeed: "optimized",
    coreWebVitals: "passing",
    schemaMarkup: "BlogPosting with detailed narrative",
  },

  // Expert credibility signals
  expertCredibility: {
    authorExpertise: {
      background: "indie developer with multiple shipped projects",
      credibility: "built DPs Templates (component library)",
      experience: "third time setting up Supabase + Stripe",
      authenticity: "shows mistakes and vulnerabilities",
    },
    productProof: "followsnapshot.art live and generating revenue",
    firstSaleValidation: "made money within 24 hours of launch",
    technicalKnowledge: "knows when to roll back (Next.js 16 to 15.5)",
    processMaturity: "reuses components, pulls from previous projects",
    honestAssessment: "admits when things are hard (Stripe setup)",
  },

  // Lifestyle and philosophy
  lifestylePhilosophy: {
    coreBeliefs: [
      "you can just do things",
      "speed over perfection",
      "shrink your deadline, do more",
      "shipping beats planning",
      "build while others club",
    ],
    developerLifestyle: {
      saturday: "building not clubbing",
      fuel: "pizza, Coca Cola, coffee",
      entertainment: "F1 qualifying in background",
      reward: "making money while sleeping",
      identity: "indie grinder",
    },
    productionPhilosophy: {
      perfectionism: "enemy of shipping",
      deadlines: "compress to accelerate",
      mistakes: "buy wrong domain, keep going",
      validation: "first sale changes everything",
      confidence: "'I feel it' - trust the hunch",
    },
    quoteableLines: [
      "Hate me wherever you want, I'm grinding. You're not. I'll see you on the top.",
      "You can just do things. Start acting right now. Just do.",
      "This is fun because I'm going to get money.",
      "Speed matters in this business.",
      "While some people were out on Saturday, I was glued to the screen.",
    ],
  },

  // Tech stack and tools
  techStackTools: {
    coreStack: {
      framework: "Next.js 15.5",
      backend: "Supabase (auth + DB)",
      payments: "Stripe",
      hosting: "Vercel",
    },
    devTools: {
      ai: "Cursor (AI-powered editor)",
      components: "DPs Templates (own library)",
      domain: "followsnapshot.art",
    },
    workflow: {
      setup: "npm i starter (custom combo installer)",
      reuse: "pull components from DPs Templates",
      reference: "lift code from previous projects",
      debugging: "Cursor AI for method names and paths",
    },
    learnings: {
      rollback: "Next.js 16 broke things, went back to 15.5",
      stability: "proven stack over latest versions when sprinting",
      speed: "familiar tools save hours",
    },
  },

  // Trend alignment
  trendAlignment: {
    currentTrends: {
      buildInPublic: "peak of movement in 2025",
      rapidShipping: "speed over perfection gaining traction",
      soloFounders: "rise of indie dev lifestyle",
      realTimeContent: "authentic unfiltered narratives valued",
      firstSaleCelebration: "maker community milestones",
    },
    timingRelevance: "captures current indie dev zeitgeist",
    industryConversation: "contributes to ship-fast movement",
    futureImplications: "normalizes rapid iteration and imperfect launches",
    culturalMoment: "captures 2025 indie dev lifestyle authentically",
  },

  // Content refresh strategy
  contentRefresh: {
    updateTriggers: [
      "followsnapshot.art traction milestones",
      "next 24-hour build",
      "stack updates (Next.js, Supabase)",
      "community feedback on process",
      "revenue milestones",
    ],
    monitoringMetrics: [
      "followsnapshot.art growth",
      "indie dev tool landscape",
      "rapid shipping trends",
      "community engagement",
    ],
    refreshSchedule: "update with followup builds or major milestones",
  },

  // Call-to-action optimization
  ctaOptimization: {
    primaryCTA: "Start your own 24-hour sprint this weekend",
    secondaryCTA: "Try followsnapshot.art",
    tertiaryCTA: "Share your build story in comments",
    ctaPlacement: [
      "after timeline reveals",
      "after first sale moment",
      "after lessons learned",
      "in conclusion",
    ],
    urgency: "this weekend - specific timeframe",
    frictionReduction: "just start, pick a deadline",
    valueReinforcement: "first sale validates the approach",
    communityInvitation: "join the grinders",
  },

  // Emotional journey map
  emotionalJourneyMap: {
    beginning: {
      emotion: "determined, excited",
      context: "clear challenge, tight deadline",
      energy: "high",
    },
    earlyProgress: {
      emotion: "momentum, confidence",
      context: "UI coming together, feeling it",
      energy: "sustained",
    },
    midnightShift: {
      emotion: "focused, slightly tired",
      context: "F1 break done, coffee in hand",
      energy: "pushing through",
    },
    lateNightGrind: {
      emotion: "exhausted but committed",
      context: "Stripe pain, wrong domain, but shipping",
      energy: "willpower",
    },
    shipMoment: {
      emotion: "satisfied, proud, depleted",
      context: "5am, eyes hurting, but it's live",
      energy: "running on fumes",
    },
    firstSale: {
      emotion: "validated, energized, grateful",
      context: "4 hours sleep, made money",
      energy: "renewed by validation",
    },
  },
};

const IndieDev = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Building and Shipping a Real Product in One Day - My Late-Night Sprint
          With Next.js, Supabase, Stripe, pizza, F1, coffee, and a lot of
          stubbornness
        </h1>

        <Image
          src={"/mergesociety/audio_1762106886174_qhxevr_qae0d7_qpckrv.jpg"}
          alt="Building and Shipping a Real Product in One Day"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-11-2">
            | November 2, 2025
          </time>
        </h2>

        <p>
          I gave myself a challenge: build a fully functioning product in less
          than 24 hours. I wanted it out, working, and live before the next
          morning. No excuses. I had plans tomorrow, something new and
          important, so it had to happen tonight. I decided to document
          everything - the setup, the small wins, the annoying blockers, my
          thoughts in the moment, the workflow, and the tiny details that
          usually get lost. This read is the blow-by-blow of what I did, exactly
          in the order I did it, plus the raw truth of how it feels to sprint
          through a build like this.
        </p>
        <p>
          This piece is a little different from my usual posts. I’m writing it
          like I talk, with screenshots described in words and every step
          included so you can follow how the project evolved in real time. No
          fluff. Just a real day in the life of spinning up a product from zero
          to live.
        </p>

        <section>
          <h2>
            Kickoff - Setting the timer, picking a name, booting the stack
          </h2>
          <p>
            First move: create the path for a new project. I called it Cool
            Follow Account. The name sums up what the product is about - it
            revolves around follower counts, snapshots, and making them look
            clean. Names can change later. The point is to start. The working
            title gave me a mental picture and a direction to code toward.
          </p>
          <p>
            Then I went straight for the stack. I ran the command I use to pull
            my favorite combo together: npm i starter. This is my quick way to
            wire up Next.js with Supabase and Stripe in one go. Next.js gives me
            server-side rendering and fast routing out of the box. Supabase
            covers auth and a backend I don’t have to babysit. Stripe handles
            payments so I can actually charge money on day one. Installing them
            together saves 1 or 2 hours of boilerplate. When you are racing a
            clock, these hours matter.
          </p>
          <p>
            I hit Enter, got a coffee, and watched the dependencies roll in.
            Then, plot twist. Yes, I changed the hoodie, but I also burned a
            whole hour on package problems. Next.js 16 had just dropped and the
            freshness broke parts of the stack. I did not need that. I rolled
            back to 15.5 because I wanted stability and I did not want to
            explore changes mid sprint. There is a time for curiosity and a time
            for shipping. Tonight was shipping.
          </p>
          <p>
            With that fixed, I could finally start working on the actual product
            instead of wrestling versions. So yeah, from here on, it is game on.
          </p>
        </section>

        <section>
          <h2>
            Hour 1 - First UI passes, Discord call, and the flow shaping up
          </h2>
          <p>
            One hour in I took a quick brightness bump on the screen and looked
            at the progress. I had set up the hero section. It still had
            placeholder text that did not match the product context, but the
            structure was on the page. This early screenshot would make sense
            soon, I just needed to drop in the right copy.
          </p>
          <p>
            While that was coming together, I was on Discord chatting with a
            friend. We caught up a bit, so my hands-on time was around 40
            minutes, but the UI was already taking shape. This is where being
            efficient with templates saves your brain for the logic. The visual
            first pass was in, the bones were right, and I knew what to fix
            next.
          </p>
          <p>
            I still needed to implement login, the Stripe payment flow, the
            middleware to guard routes, and the overall app flow from landing to
            purchase to download. That is the heart of the app. On the UI side,
            though, we were in a good place.
          </p>
          <div>
            <h3>Landing page structure and reused components</h3>
            <p>
              The landing page started with a hero that I pulled from DPs
              Templates, which is my other app. That app is a library of
              ready-to-go sections and blocks. I built it for myself, and now I
              rely on it a lot because it lets me stop reinventing headers and
              focus on the actual product. I knew I would need to change the
              text, maybe adjust spacing and tone, but the layout was clean and
              familiar. That speed boost matters.
            </p>
            <p>
              Below the hero I added the Create section. This is where the magic
              happens. You see a count input, and the idea is simple: you enter
              your follower count, and the system compiles the right snapshot
              layout for you automatically. Think of it as a clean generator
              that gives you a share-ready image. In the early state, it looked
              the same as the screenshot in my head. It just was not wired up
              yet. It was close. It was about to click.
            </p>
          </div>
        </section>

        <section>
          <h2>9:00 pm - Logic, mobile polish, naming, and pizza</h2>
          <p>
            By 9:00 pm we hit a good point. I had made the base logic to push
            the UI beyond just looks. I also redesigned parts of the mobile UI
            because if it does not work on a phone, it does not work. That
            included spacing, button sizes, and making sure the interactive
            parts were thumb friendly.
          </p>
          <p>
            I needed a domain and a logo. I wanted to keep it simple and not get
            lost in a rabbit hole. I thought about firing up ChatGPT to toss
            some names around for this kind of website. Nothing fancy. Just
            something that says what it does and is easy to remember. I would
            decide soon.
          </p>
          <p>
            Pizza was about to arrive. The plan was clear: eat, finish UI, then
            at 11 pm watch F1 qualifying, grab a coffee right after, and then
            wire Stripe. I thought I would end around 3 am or 4 am. I hoped so.
            I like pushing late when the energy is right.
          </p>
          <aside>
            <p>Pizza arrived. Short break. Then straight back to the editor.</p>
          </aside>
        </section>

        <section>
          <h2>Post-pizza sprint - the input flow and the little arrow</h2>
          <p>
            Pizza gone, I got back to it. I touched UI behaviors and stitched
            more of the logic behind the scenes. Then I tested a simple flow:
            the main input.
          </p>
          <div>
            <h3>How the follower input compiles your snapshot</h3>
            <p>
              You see an input field. You type, say, 500. Then you tap this
              little arrow. The arrow is a submit shortcut so you do not have to
              reach for Enter or click a giant button. When you click it, the
              form compiles the follower count for you into the final format. If
              you put 1,000, the form compiles that with a hundred plus style,
              which formats the count clean and aligned with the template
              standards I am using. If you punch in 5,000, the increments go by
              five hundred. That way the layout looks neat and the spacing
              holds. And so on for bigger ranges. It reacts to the thresholds on
              purpose so the final image never looks weird.
            </p>
            <p>
              I ran through a few values and watched it fill the right slots. It
              felt good to see it move. The demo was solid.
            </p>
          </div>
          <div>
            <h3>Mobile quirks and the download format</h3>
            <p>
              On mobile, the text could get too big and the phone screen is just
              small. That means typography can invade the edges and the image
              crop can feel cramped. I needed a better download experience on
              smaller screens. I debated making a different download format for
              mobile, but I think I will keep it the same across desktop and
              mobile because this layout is the best format for this image
              style. I would tune the sizes, not the format.
            </p>
          </div>
          <p>
            Meanwhile, it was almost 11 pm. In 10 minutes F1 qualifying was
            about to start. I planned to watch until midnight - noon would be
            wrong since noon is morning - then make a coffee. This is my version
            of a Saturday night. Pizza, a cold Coca Cola, later a coffee, and a
            brand new project I want live in one day.
          </p>
          <p>
            Other people go clubbing. I build. This is fun. And why is it fun?
            Because I am going to get money. How do I know? I do not know. I
            just feel it. Sometimes you have to trust the pull. I call it a
            privilege - building a startup while watching F1, drinking Coke,
            then switching to coffee. This little project would be done by
            tomorrow morning. That was my promise to myself.
          </p>
          <blockquote>
            <p>
              Hate me wherever you want, however you want, how much you want.
              I’m grinding. You’re not. I’ll see you on the top.
            </p>
          </blockquote>
        </section>

        <section>
          <h2>Midnight shift - F1, coffee, and back to the keyboard</h2>
          <p>
            There was a lot going on in qualifying. Verstappen was sitting in
            fifth, but a clerk and I’m second and third - wild mix on the board.
            I was rooting for a twist. I wish Verstappen gets the fifth. Jesus.
            He needs to. He needs that for the sport. Tomorrow we would see the
            real grid shake out.
          </p>
          <p>
            I could feel I was getting tired. It was a long day already, so I
            got up to make a coffee. Then I sat back down and went straight back
            to work.
          </p>
        </section>

        <section>
          <h2>
            1:30 am - The boring part that makes the money: Supabase and Stripe
          </h2>
          <p>
            We were at a good point. Result view working. Now the boring part:
            wiring Supabase and Stripe. It was 1:30 am, so I gave myself one to
            two hours to finish. I had code I could lift from other projects,
            but you still need to remember the setup steps or you waste time.
            Things like generating and storing the GitHub token for deploy
            flows, setting the Supabase API keys, connecting webhooks, and
            making sure environment variables are right. These are not
            glamorous, but they are what make a project real.
          </p>
          <p>
            I stayed positive because I had done this twice before. Third time
            should be easier. At least that is what I told myself.
          </p>
          <div>
            <h3>What was still missing - the checklist I wrote at 2 am</h3>
            <p>
              I wrote everything still missing on the site. It was 10 items, and
              they were not in order. Getting them out of my head cleared space
              to code faster. Here is the list exactly as I wrote it in the
              moment, with the same little typos and all, plus some context so
              it makes sense if you are following along:
            </p>
            <ul>
              <li>
                Favicon - already did. I still wanted to compress the image a
                bit for the favicon to keep it crisp on high DPI.
              </li>
              <li>
                Compress the image to do the Favicon - this was a reminder to
                run it through an optimizer.
              </li>
              <li>
                Supervis integration - meaning Supabase integration, auth plus
                any DB if I needed it later. Login is a must.
              </li>
              <li>
                Login - the session had to persist correctly across routes.
              </li>
              <li>
                Stripe - product setup, pricing, checkout, webhook, and the
                public key swap to live.
              </li>
              <li>
                Pricing section check - make sure the $4 one time reads clearly
                and the value is obvious.
              </li>
              <li>
                User session for the load - session check on load so the app
                knows if you already paid.
              </li>
              <li>
                Metadata, body - fix the HTML metadata, title, description, and
                the body class stuff.
              </li>
              <li>Domain - buy it, connect to Vercel, and switch to live.</li>
              <li>
                OG image and analytics - set the Open Graph image and hook
                analytics to track what matters.
              </li>
            </ul>
            <p>
              Time check: 2 am. Would I finish by 4 or 5 am? I did not know. If
              you are reading this, pause and guess the time you think I
              finished. I guessed 4:30 am. Let’s update that in a second.
            </p>
          </div>
        </section>

        <section>
          <h2>3:00 am - Login done, Stripe pain ahead, and tools that help</h2>
          <p>
            3:00 am hit and the login worked. That felt good. Now Stripe. Stripe
            is always a bit of a pain in the ass to set up. Not because it is
            bad, but because payments are exact and you cannot fake them. Every
            little setting matters, and you cannot hand-wave an endpoint.
          </p>
          <p>
            Luckily I have two projects with the 1:10pm stripe setup -
            basically, I have working examples to pull from, the same product
            pattern and checkout flow I trust. I also used Cursor to help move
            fast. Cursor is an AI-powered editor that can nudge you when you
            forget a method name or a path, and at 3 am those nudges are gold.
          </p>
          <p>
            I hoped that by 4 I would have almost everything done. I still
            needed to buy the domain. I had found one, but I had not paid yet.
            It was 3 euros or 3 dollars. I did not even remember. I also wanted
            to polish the metadata for sale - then I corrected myself - SEO. You
            know what I meant. I would see you in half an hour. Or an hour. Or
            whenever Stripe stopped fighting me.
          </p>
        </section>

        <section>
          <h2>
            Finishing the See Results button, live keys, and the deploy plan
          </h2>
          <p>
            I wired the See results button so that when a person wants to view
            the output of the product, they get the final image. At that exact
            moment I put the logo there just for testing, so you would not see
            the real image yet. That was temporary. Once the output pipeline was
            stable I would switch the source to the actual generated snapshot.
          </p>
          <p>
            Next step was setting the Stripe account to the public one - live
            mode, not test. After that I would push to Vercel. That is the
            moment a project turns into a link you can share.
          </p>
          <p>
            Then it was 3:40 am and I realized I did a dumb thing. I bought
            followsnapshot.art instead of followersnapshot.art. You read that
            right. I missed a syllable when I checked out. Classic 3 am move.
            Should I buy another domain or not? Probably not tonight. The end
            was close and I did not want to break the rhythm.
          </p>
        </section>

        <section>
          <h2>4:15 am - Done coding, time to record, and shipping to Vercel</h2>
          <p>
            4:15 am. Done. I recorded the screen so I could show what I had
            built instead of just telling you about it. Then I went to publish
            on Vercel. I would leave the link down in the description so you
            could try it yourself.
          </p>
          <div>
            <h3>What the live site looks like</h3>
            <p>
              Landing page first - the hero section up top explains what you
              get. Right below, there is a clean visual that previews the exact
              result you will download. No mystery. Just a clear snapshot of the
              final image so you know what you are paying for.
            </p>
            <p>
              Pricing is simple: $4 one time. Unlimited devices, unlimited
              images, lifetime access. No subscriptions. I like one-time deals
              for small utilities because they remove friction. People decide
              once and they are in.
            </p>
            <p>
              Then the Create page. To download the image, you pay those $4 and
              then you are basically in forever. From there, you can pick
              whatever you want. For example, I had just reached 1,400 followers
              on X. I typed that in and downloaded the image. That was the
              result. Clean, ready to share, and on brand.
            </p>
          </div>
        </section>

        <section>
          <h2>5:10 am - Brain fog, checkboxes, and a live domain</h2>
          <p>
            At 5:10 am I no longer knew my name, but I was satisfied. I built a
            product from scratch, from 0, from 7 pm to 5 am. I am not even sure
            how many hours that is. Less than 12. Maybe 10 or so. Time blurs
            when you are deep in it.
          </p>
          <p>
            I checked the last checkbox on the whiteboard. Analytics were done.
            Domain was public. The website was live at this address:
            followsnapshot.art. It was 5:00 am. Then 5:20 am. Product done.
            Built in one day. From 7 pm to 5:20 am. The link worked.
          </p>
          <p>
            I would publish everything tomorrow. I had recorded the whole day,
            so tomorrow you would be able to see the full process and the story
            of the build on YouTube. Right then I needed to go to bed. The light
            was hurting my eyes. Still, I was proud and happy.
          </p>
          <div>
            <h3>A tiny bug I left for morning</h3>
            <p>
              The only thing bugging me was the OG image. The Open Graph image
              did not show at share time. If you put the direct path, it showed,
              but it did not auto-populate in previews. That is one of those
              tiny config gremlins where a path or cache is wrong. Not a blocker
              for sleep. Just a note for tomorrow me.
            </p>
          </div>
          <p>
            Thank you for watching - that is what I said to the camera. Then I
            shut almost everything down.
          </p>
        </section>

        <section>
          <h2>
            Considerations at sunrise - speed, deadlines, and doing the thing
          </h2>
          <p>
            Here is the thought of the day as I closed the laptop: you can just
            do things. I did this because I am a bit crazy and I like to push
            stuff to the extreme. I could have waited. I could have stretched
            this out across three or four days. But I heard Elon Musk say
            something that stuck with me: shrink your deadline and you will be
            surprised by how many things you can do.
          </p>
          <p>
            Speed matters in this business. Today I decided it was time to push.
            I am happy I did. I am happy I am still alive. It was a grateful
            experience, a nice experience, and if this comes with some money, I
            will be even happier.
          </p>
          <p>
            You can try the website - the link is down in the description. Right
            now I just need to switch everything off and close my eyes. I am not
            sleepy, but I am tired mentally, and my eyes are praying for help.
            Oh my, this was a good one. You can just do things. Start acting
            right now. Just do. Just do it, as I said.
          </p>
          <p>
            It has been a pleasure. I hope this video was liked by you. I do not
            even know if you say it like that. I have lost the capability to
            think. Thank you for watching and I will see you in the next video.
          </p>
        </section>

        <section>
          <h2>
            Fast forward to the next day - 1:41 pm, a fix, and the first sale
          </h2>
          <p>
            Fast forward. It is 1:41 pm. I just finished eating. I woke up at
            10:30. So 4 hours and a half asleep. 4 hours sleep, actually,
            because I needed to fix some issues with login and payment. Now
            everything works.
          </p>
          <p>
            And we woke up with a sale. Look at this. We made our first internet
            money with this product. I thought about ending the video last
            night, but this had to be in. First sale changes the whole mood. It
            proves the hunch was not just a hunch.
          </p>
          <p>
            I cannot wait to scale this up. I think it has potential, maybe to
            10 users, maybe 50. I do not know. We will see. For now, thank you
            for watching. I will see you in the next video.
          </p>
        </section>

        <section>
          <h2>What I learned from this one-day product sprint</h2>
          <p>
            If you read this far, here is the bottom line in my voice, the same
            one that was speaking at 3 am with a Coca Cola on the desk. Shipping
            fast works if you commit. You do not need to overthink names, logos,
            or the perfect headline. You need a clear promise, a working path
            from landing page to payment to value, and a reason to care. Coffee
            helps. A lot.
          </p>
          <ul>
            <li>
              Pick a stack you trust - I used Next.js, Supabase, and Stripe
              because they let me move without fighting basics.
            </li>
            <li>
              Reuse components - I pulled a hero from my own DPs Templates so I
              could focus on logic.
            </li>
            <li>
              Decide pricing fast - $4 one time, unlimited everything. Clean
              choice. No second guessing.
            </li>
            <li>
              Keep the list of missing items - writing the checklist at 2 am
              stopped my brain from looping.
            </li>
            <li>
              Deploy when it is good enough - push to Vercel, point the domain,
              fix the OG image tomorrow.
            </li>
          </ul>
          <p>
            And yes, sometimes you will buy the wrong domain at 3:40 am. You
            laugh, keep going, and still ship.
          </p>
        </section>

        <h2>Closing note</h2>
        <p>
          I built and shipped this in one day - from 7 pm to a little past 5 am
          - recorded the day, woke up, fixed the last bits, and the first sale
          came in. That is the kind of loop that reminds me why this is fun.
          While some people were out on Saturday, I was glued to the screen with
          F1 in the background, pizza and Coke on the desk, and a coffee in
          hand. This is fun because I get to create something that might make
          money while I sleep. I do not know how far it will go, but I feel it.
          And for now, that is enough to keep building the next one.
        </p>
      </article>
    </div>
  );
};

export default IndieDev;
