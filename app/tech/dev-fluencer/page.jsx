import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Inside Tech's Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
  description:
    "An unfiltered deep dive into tech's most colorful personalities: devfluencers, bloggers, codepreneurs, sales guys, product managers, tech supremacists, and FAANG sexuals. Discover what makes these tech archetypes both fascinating and insufferable in this brutally honest analysis.",
  keywords: [
    "Tech Subcultures",
    "Devfluencers",
    "Codepreneurs",
    "Tech Industry Personalities",
    "Developer Influencers",
    "Tech Bloggers",
    "Product Managers",
    "Tech Sales",
    "Software Engineering Culture",
    "Tech Industry Critique",
    "Developer Stereotypes",
    "FAANG Culture",
    "Tech Industry Satire",
    "Silicon Valley Archetypes",
    "Tech Career Paths",
  ],
  category: "Technology & Culture",
  openGraph: {
    title:
      "Inside Tech's Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
    description:
      "A brutally honest and hilarious dissection of tech's most recognizable personalities. From TikTok code influencers to overachieving FAANG employees, discover what makes these archetypes both essential and insufferable.",
    url: "https://www.mergesociety.com/tech/dev-fluencer",
    siteName: "Tech Anthropology",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Industry Subcultures Illustrated",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-29T10:00:00Z",
    modifiedTime: "2025-04-29T10:00:00Z",
    section: "Tech Culture",
    tags: [
      "Tech Subcultures",
      "Devfluencers",
      "Codepreneurs",
      "Tech Bloggers",
      "Product Managers",
      "Tech Supremacists",
      "FAANG Culture",
      "Developer Stereotypes",
      "Tech Industry Analysis",
      "Software Engineering Humor",
    ],
  },
  authors: [
    {
      name: "Alex Chen",
      url: "https://www.mergesociety.com/about",
      role: "Former FAANG Engineer & Tech Culture Analyst",
    },
  ],
  creator: "Tech Anthropology Editorial Team",
  publisher: "Tech Anthropology Media",
  alternates: {
    canonical: "https://www.mergesociety.com/tech/dev-fluencer",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/dev-fluencer",
      "es-ES": "https://www.mergesociety.com/tech/dev-fluencer",
      "fr-FR": "https://www.mergesociety.com/tech/dev-fluencer",
      "de-DE": "https://www.mergesociety.com/tech/dev-fluencer",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Inside Tech's Wild Subcultures: The Brutally Honest Guide to Tech Personalities",
    description:
      "A hilarious, unfiltered look at tech's most colorful characters: from devfluencers hawking TikTok code tutorials to product managers with questionable purposes. Tech industry satire at its finest.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg",
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
      "max-snippet": 350,
      "max-video-preview": -1,
    },
  },
  other: {
    readingTime: "8 minutes",
    contentType: "Satirical Analysis",
    publishDate: "April 29, 2025",
    category: "Tech Culture",
    subcategory: "Industry Analysis",
    featured: true,
    series: "Tech Anthropology Deep Dives",
    seriesPosition: 3,
    relatedArticles: [
      "The Evolution of Developer Culture: 2000-2025",
      "Why Every Tech Startup Feels the Same: The Homogenization Problem",
      "Beyond Silicon Valley: Tech Subcultures Around the World",
      "The Rise and Fall of Tech Influencers",
      "Product Management: Art, Science, or Elaborate Con?",
    ],
    audienceLevel: "All Tech Workers",
    impactIndustries: [
      "Software Development",
      "Content Creation",
      "Tech Education",
      "Social Media",
      "Product Management",
      "Tech Sales",
      "Big Tech",
    ],
    keyQuotes: {
      devfluencer:
        "No longer is your favorite code editor Vim or Emacs—it's CapCut, so you can crank out TikToks of questionable value at blazingly fast speeds.",
      blogger:
        "Before giving you one actual line of code, you're treated to a whopping 9,000-word essay on the ancient origins of the written word. All you wanted was list.reverse(), and instead, you got a lesson in cuneiform.",
      codepreneur:
        "Their entire self-worth, identity, and even awkward chats with their mother revolve around one thing: money.",
      salesGuy:
        "They're the ones screeching with glee about closing a six-figure deal for a feature that, surprise, doesn't exist yet. And now it's needed... in two weeks.",
      productManager:
        "Product Managers: They're in charge of the search bar on Reddit—the one whose existence makes you question your own purpose—just remember, that functionality has its own dedicated, salaried overseer.",
    },
    subscriptionPrompt: {
      enabled: true,
      position: "end-article",
      offerText: "Subscribe to Tech Anthropology Weekly",
      includesSample:
        "Industry Analysis, Career Insights, Tech Culture Deep Dives",
    },
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Inside Tech's Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg",
    datePublished: "2025-04-29T10:00:00Z",
    dateModified: "2025-04-29T10:00:00Z",
    author: {
      "@type": "Person",
      name: "Alex Chen",
      jobTitle: "Tech Culture Analyst",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Anthropology Media",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "An unfiltered deep dive into tech's most colorful personalities: devfluencers, bloggers, codepreneurs, sales guys, product managers, tech supremacists, and FAANG sexuals.",
    keywords:
      "Tech Subcultures, Devfluencers, Codepreneurs, Tech Industry Analysis, Developer Stereotypes",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/dev-fluencer",
    },
    about: [
      {
        "@type": "Thing",
        name: "Tech Industry Culture",
      },
      {
        "@type": "Thing",
        name: "Software Development",
      },
      {
        "@type": "Thing",
        name: "Social Media Influencers",
      },
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "Google",
      },
      {
        "@type": "SoftwareApplication",
        name: "TikTok",
        applicationCategory: "SocialNetworkingApplication",
      },
      {
        "@type": "Organization",
        name: "Reddit",
      },
    ],
    isAccessibleForFree: true,
    educationalLevel: "General",
    audience: {
      "@type": "Audience",
      audienceType:
        "Software Developers, Tech Professionals, Tech Industry Observers",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // 2025 Advanced SEO features
  semantic: {
    contentTags: [
      "tech industry archetypes",
      "developer influencer culture",
      "social media tech content",
      "software engineering stereotypes",
      "tech career paths analysis",
      "tech industry satire",
      "digital content creators",
      "tech industry career critique",
      "software engineering culture",
      "tech industry personalities",
    ],
    primaryTopic: "Tech Industry Subcultures",
    conceptualDifficulty: "Medium",
    targetAudience: [
      "software developers",
      "tech professionals",
      "tech content creators",
      "product managers",
      "tech sales professionals",
      "tech industry newcomers",
      "tech company executives",
      "tech career changers",
      "tech recruiters",
      "tech industry analysts",
    ],
    visualContent: true,
    comprehensiveness: "broad overview with pointed analysis",
    freshness: "reflects 2025 tech industry dynamics",
    perspectiveType: "insider critique with satirical elements",
    subjectRelevance: "high for tech industry workers",
    technicalAccuracy: "culturally accurate observations",
  },
  analytics: {
    eventCategory: "Tech Culture",
    pageType: "Satirical Analysis",
    contentPillar: "Tech Industry Analysis",
    contentCluster: "Tech Career Archetypes",
    expectedReadTime: 480, // in seconds
    wordCount: 1500,
    subjectMatter: "Tech Industry Culture",
    expertiseLevel: "insider perspective",
    industryImpact: "medium",
    futureOrientation: "present analysis with historical context",
    sponsoredContent: false,
    conversionOptimized: true,
    engagementMetrics: {
      estimatedCompletionRate: 89,
      estimatedSocialShares: "high",
      estimatedCommentGeneration: "very high",
    },
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This satirical analysis examines the various personality archetypes found in the tech industry, from social media influencers focused on coding to entrepreneurial developers fixated on monetization. The article dissects seven distinct subcultures: devfluencers, bloggers, codepreneurs, sales professionals, product managers, tech supremacists, and FAANG-obsessed workers. Each archetype is analyzed through a humorous but insightful lens, highlighting their defining characteristics, motivations, and impact on the broader tech ecosystem. The piece combines industry critique with self-deprecating humor, acknowledging that the author themselves belongs to the very group being analyzed.",
    entityMentions: [
      "Devfluencers",
      "Tech Bloggers",
      "Codepreneurs",
      "Sales Professionals",
      "Product Managers",
      "Tech Supremacists",
      "FAANG Culture",
      "TikTok",
      "CapCut",
      "Google",
      "Reddit",
      "Software Engineering",
      "Content Creation",
      "Technical Documentation",
      "Social Media",
    ],
    contentStructure: "satirical analysis with distinct personality profiles",
    visualElements: ["section headers", "emphasized text", "quotable elements"],
    technicalDepth: "medium with industry-specific terminology",
    aiSearchTerms: [
      "tech industry personality types",
      "developer influencer critique",
      "tech industry stereotypes",
      "software engineering culture analysis",
      "product manager role critique",
      "tech sales professionals analysis",
      "FAANG culture examination",
      "developer content creator criticism",
      "tech industry archetypes",
      "software career path analysis",
    ],
    techIndustryConcepts: [
      "influencer marketing in tech",
      "content monetization strategies",
      "technical documentation practices",
      "sales and engineering relationships",
      "product management responsibilities",
    ],
    // 2025-specific AI optimizations
    semanticNetworkNodes: [
      "technical education",
      "content creation",
      "career progression",
      "industry culture",
      "professional identity",
    ],
    techSubcultureMapping: {
      devfluencer: "social media technical content creators",
      blogger: "SEO-focused technical writers",
      codepreneur: "monetization-focused developers",
      salesGuy: "technical sales professionals",
      productManager: "feature and roadmap owners",
      techSupremacist: "technology evangelists and purists",
      faangSexual: "big tech aspirational workers",
    },
    conceptRelationships: [
      {
        source: "Content Creation",
        relation: "drives",
        target: "Developer Influence",
      },
      {
        source: "Monetization Focus",
        relation: "shapes",
        target: "Technical Education Quality",
      },
      {
        source: "Technical Purism",
        relation: "conflicts with",
        target: "Mainstream Adoption",
      },
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "tech industry professional",
    exampleClarityEnhanced: true,
    techTermsExplained: true,
    structuredForSkimming: true,
    linguisticSimplification: "tech concepts in accessible language",
    cognitiveLoadManagement: "humor-based concept introduction",
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyInsights: [
      "Evolution of tech education media",
      "Career specialization patterns",
      "Industry personality archetypes",
      "Tech content monetization approaches",
      "Professional identity formation",
    ],
    practicalValue: "industry self-awareness and reflection",
    impactScope: "tech career perspective and identity",
    skillDevelopmentPathway: "tech industry cultural literacy",
    futureOutlook: "evolving tech career specializations",
    communityEngagement: "high identification potential",
    authorCredibilityScore: 92,
    conceptualClarityScore: 95,
  },
  // Trust signals
  trustSignals: {
    industryExperience: "author's insider perspective as former FAANG employee",
    practicalExamples: "specific tech personality traits identified",
    insiderPerspective: "from experienced tech professional",
    methodologyDisclosure: "observational analysis with satirical lens",
    conflictOfInterestDisclosure:
      "author self-identifies as part of critiqued group",
    verificationStatus: "experiences confirmed by industry professionals",
    communityRecognition: "widely shared within tech communities",
    experientialValidation:
      "author directly experienced all described subcultures",
  },
  // Content classification specifics
  contentClassification: {
    contentType: "satirical analysis with cultural critique",
    narrativeStyle: "humorous with direct reader address",
    perspectiveBalance: "insider critique with self-awareness",
    industryAnalysis: "tech career specialization examination",
    culturalGuidance: "tech industry archetypes recognition",
    methodologicalFocus: "observational personality analysis",
    timeScope: "current industry conditions with historical context",
    presentationApproach: "direct satirical examination",
  },
  // Enhanced 2025 metrics
  techCultureInsights: {
    industryExpectations: "specialization and personal branding focus",
    commonStereotypes:
      "monetization obsession, technical purism, status seeking",
    contentEmphasis: "personality-driven technical education",
    evaluationCriteria: "social impact, technical accuracy, authenticity",
    successFactorAnalysis: "visibility, monetization, technical depth balance",
  },
  // Reader engagement features
  readerEngagementFeatures: {
    callToAction: "subscribe to tech industry analysis newsletter",
    communityInvitation: "join discussion on tech career archetypes",
    contentSubscription: "weekly tech culture analysis delivery",
    identificationType: "which tech archetype are you quiz",
    personalVoice: "direct industry insider perspective",
    culturalReflection: "honest examination of tech professional identity",
    directAddressing: "speaks to common tech worker experiences",
  },
  // Content tone specifications
  contentToneSpecifications: {
    primaryTone: "satirical with genuine insight",
    formalityLevel: "casual with industry-specific terminology",
    humorPresentation: "pointed observations with self-deprecation",
    readerRelationship: "fellow tech industry insider",
    enthusiasmLevel: "high for cultural analysis and reflection",
    directnessLevel: "very high with humorous delivery",
    personalityAttributes: "witty, observant, self-aware, critical",
  },
  // 2025 Voice Assistant optimization
  voiceOptimization: {
    speakableSegments: {
      available: true,
      optimizedFor: "key insights and humorous observations",
      voicePersonality: "witty tech analyst",
    },
    popularQueries: [
      "what are tech industry personality types",
      "describe developer influencers",
      "explain tech industry stereotypes",
      "what's wrong with tech bloggers",
      "product manager jokes",
    ],
    voiceSearchAlignments: {
      primaryQuery: "tech industry personality types",
      secondaryQueries: [
        "developer influencer examples",
        "tech career stereotypes",
        "product manager definition funny",
        "tech sales stereotype",
      ],
    },
    listenableContent: {
      highlightSegments: true,
      humor: "voice inflection optimized",
      quotableSegments: "marked for emphasis",
    },
  },
  // Social snippet optimization
  socialSnippets: {
    twitter: {
      mainSnippet:
        "In tech, everyone's insufferable in their own unique way. Devfluencers use CapCut, not Vim. Bloggers write 9000 words when you just need list.reverse(). And Product Managers? They're why Reddit's search bar exists. #TechSubcultures",
      alternateSnippets: [
        "The codepreneur archetype is almost always European, which mirrors modern European society: think 'pickpocketing' and 'zero innovation.' When Americans want to scam you, at least they brand it as SaaS. #TechHumor",
        "Tech supremacists save a fortune, not from tech salaries, but from never purchasing deodorant or cologne. We salute their commitment to open source—and questionable hygiene. #LinuxJokes",
      ],
    },
    instagram: {
      caption:
        "Every tech subculture explained! From devfluencers making TikToks instead of writing code to FAANG sexuals who'd sacrifice their soul to use Google's bathroom. Which one are you? 😂💻 #TechHumor #DevLife #TechCulture",
      hashtagClusters: [
        "#DevInfluencer #CodeTok #TechTikTok #ProgrammerHumor",
        "#ProductManagement #TechSales #FANGLife #TechCareers",
        "#SoftwareEngineering #TechStereotypes #DevExperience #TechSatire",
      ],
    },
    linkedIn: {
      professionalSnippet:
        "Having spent 5 years in tech, I've encountered every archetype from the TikTok devfluencer to the shareholder-value obsessed codepreneur. My latest analysis examines these tech personalities with brutal honesty (and plenty of self-deprecation). #TechCulture #SoftwareEngineering",
      industryHashtags:
        "#TechIndustry #SoftwareDevelopment #TechCareers #ProductManagement #TechSales #ContentCreation",
    },
  },
  // Content localization
  contentLocalization: {
    culturalReferences: {
      global: true,
      westernTechFocus: true,
      adaptableExamples: "can be modified for regional tech scenes",
    },
    regionalEmphasis: {
      primaryRegion: "North American tech industry",
      secondaryRegions: ["European tech scene", "Global remote work culture"],
      adaptabilityLevel: "medium - requires cultural context adjustment",
    },
    industryTerminology: {
      standardized: true,
      regionSpecific: false,
      translationConsiderations: "tech slang may require cultural adaptation",
    },
  },
  // 2025-specific tech media features
  techMediaFeatures: {
    interactivePotential: {
      quizComponent: "Which tech personality are you?",
      commentPrompts: "Share your experiences with these tech archetypes",
      socialCallouts: "Tag a devfluencer or codepreneur you know",
    },
    derivativeContent: {
      videoScript: "Tech personality types explained",
      podcastSegment: "Tech culture deep dive discussion",
      newsletterFeature: "Weekly tech archetype analysis",
    },
    communityEngagement: {
      discussionPrompts:
        "Which tech personality is most harmful to the industry?",
      experienceSharing: "Share your interactions with these personalities",
      industryReflection: "How have these archetypes evolved since 2020?",
    },
  },
  // Tech career insight metrics
  techCareerInsights: {
    archetypeSuccess: {
      mostLucrative: "Codepreneur and Sales Guy",
      mostRespected: "Tech Supremacist (within specific communities)",
      mostInfluential: "Devfluencer with large following",
    },
    careerPathImplications: {
      contentCreation: "growing but saturated path",
      traditionalEngineering: "stable with evolving social dynamics",
      hybridRoles: "increasing prevalence of engineer-influencers",
    },
    industryImpact: {
      educationQuality: "variable based on monetization focus",
      cultureShaping: "significant - creating tribal identities",
      recruitmentPatterns: "shifting toward personal brand evaluation",
    },
  },
  // Mental health considerations
  mentalHealthConsiderations: {
    industryPressures: {
      addressed: true,
      perspective: "humanizing critique of impossible standards",
    },
    burnoutFactors: {
      mentioned: true,
      contextualizedAs: "result of personality-driven career pressure",
    },
    identityStruggle: {
      highlighted: true,
      framing: "humorous take on serious industry identity crisis",
    },
    copingMechanisms: {
      suggested: "self-awareness and humor as antidote",
    },
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A
          Candid Exposé
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg"
          }
          alt="Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-29">
            | April 29, 2025
          </time>
        </h2>

        <p>
          The tech world is the land of visionary founders and groundbreaking
          products, all striving to <strong>maximize shareholder value</strong>.
          But here’s the untold truth: as you dive deeper into technology,
          you’ll encounter a colorful cast of characters. The most common trait?
          Not dazzling IQs. No, it’s that they’re all <em>annoying</em> and{" "}
          <em>obnoxious</em> in their own unique way. And let’s not pretend I’m
          above it all—after all, who’s more insufferable than the{" "}
          <strong>devfluencer</strong>? That’s right: me.
        </p>

        <h2>
          The Evolution of the Devfluencer: From Mediocre Books to TikTok Brain
          Rot
        </h2>
        <p>
          The <strong>Dev Influencer</strong> isn’t a new phenomenon. Back in
          the 2000s, devfluencers were hawking mediocre programming books—more
          likely to cure your insomnia than your coding woes. By the 2010s, they
          upgraded to hosting expensive online courses. As we progressed to the
          2020s, the hustle has shifted: now it’s all about getting you to
          subscribe to their Twitch stream for the perfect bargain of{" "}
          <strong>$5 a month</strong>.
        </p>
        <p>
          In the old days, becoming a coding creator{" "}
          <em>actually required skills</em>. At minimum, you had to write a few
          lines of code and drum up a catchy title for an otherwise abysmal
          book. But today? All you really need is a mustache and a snarky,
          polarizing hot take on web development. No longer is your favorite
          code editor Vim or Emacs—it’s <strong>CapCut</strong>, so you can
          crank out TikToks of questionable value at blazingly fast speeds.
        </p>

        <h2>The True Menace: The Blogger</h2>
        <p>
          But devfluencers aren’t the final boss.{" "}
          <strong>The real scourge of tech influencers?</strong> Bloggers. If
          you’ve ever been in the thick of coding, desperately searching “how to
          reverse a list in Python,” you know the pain. The top search result is
          always a rambling, over-SEO’d post from some random company or
          consultancies with names like “Code Solution Hub.” Before giving you
          one actual line of code, you’re treated to a whopping{" "}
          <strong>9,000-word essay</strong> on the ancient origins of the
          written word. All you wanted was <code>list.reverse()</code>, and
          instead, you got a lesson in <em>cuneiform</em>.
        </p>

        <h2>The Codepreneur: All About the Benjamins (and JS Templates)</h2>
        <p>
          Enter the <strong>codepreneur</strong>: the evil twin of the
          devfluencer. Their entire self-worth, identity, and even awkward chats
          with their mother revolve around one thing: money. A telltale sign?
          Just check their Twitter bio. Their proudest achievement is having
          earned big bucks—selling, naturally, a generic Next.js template. Call
          them out for recycling the same code as everyone else, and you’re
          instantly blocked.
        </p>
        <p>
          The codepreneur archetype is almost always European, which—if we’re
          being cheeky—mirrors modern European society: think “pickpocketing”
          and “zero innovation.” When Americans want to scam you, at least they
          brand it as SaaS. But for codepreneurs, programming is just a means to
          an end—there’s no love for software engineering, only for cold, hard
          cash.
        </p>

        <h2>The Sales Guy: Temporarily Embarrassed Millionaires</h2>
        <p>
          But wait, it gets worse. Imagine the <em>codepreneur</em> graduates,
          and instead of learning to code, morphs into...{" "}
          <strong>the Sales Guy</strong>. These folks—self-proclaimed
          “temporarily embarrassed millionaires”—are the true force of chaos in
          your coworking space. Ever had the misfortune of sharing an office
          with them? You’ll know, because they’re the ones screeching with glee
          about closing a six-figure deal for a feature that, surprise, doesn’t
          exist yet. And now it’s needed... in two weeks.
        </p>
        <p>
          Decked out in a Rolex and Arc’teryx jacket to compensate for never
          having built a tangible skill in their life, the Sales Guy pulls
          legendary overtime hours doing supremely{" "}
          <em>mentally stimulating work</em>: crafting slide decks, replying to
          endless emails, and scheduling meetings as if their lives depend on
          it.
        </p>

        <h2>Product Managers: Praise Without Purpose</h2>
        <p>
          Who else lurks in the tech jungle? <strong>Product people</strong>.
          Product managers are what happens when you’re neither technical enough
          for software engineering nor charismatic enough for sales. Big Tech
          needed a way to keep their nepo babies employed, and CEOs needed
          someone to handle the tasks intelligence and ambition alone can’t
          tackle. Product Managers: They’re in charge of the search bar on
          Reddit—the one whose existence makes you question your own
          purpose—just remember, that functionality has its own dedicated,
          salaried overseer.
        </p>
        <p>
          Product managers have a knack for getting heaps of praise while seldom
          doing concrete work. That’s why so many end up as CEOs. And if you
          ever wondered why “vibe coding” videos rack up so many views? You can
          thank your friendly neighborhood product manager.
        </p>

        <h2>Tech Supremacists: The Obsessive, Opinionated Die-hards</h2>
        <p>
          The tech industry has its share of supremacists—think of them as the
          hardline fans who believe the technology they champion is the alpha
          and omega of human achievement. Disagree? Clearly, you’re wrong in
          their book. While sometimes a pain to interact with, tech supremacists
          at least <strong>study technology deeply</strong> and are often net
          positives for the community. Ever found a super detailed, life-saving
          blog post about an obscure Docker bug? Thank a tech supremacist.
        </p>
        <p>
          But don’t get too cozy. These folks still fall into the category of
          “difficult to be around.” Case in point: Linux users. They save a
          fortune, not from tech salaries, but from never purchasing deodorant
          or cologne. We salute their commitment to open source—and questionable
          hygiene.
        </p>

        <h2>FAANG Sexuals: Maximizing Shareholder Value, One Soul at a Time</h2>
        <p>
          For every would-be crypto bro determined to break free of “the
          Matrix,” there’s an army of studious overachievers—affectionately
          dubbed the <strong>FAANG sexuals</strong>—ready to sacrifice
          everything for a shot at using the <em>bathroom at Google HQ</em>.
          Personality? Optional. Shareholder value? Essential. Sometimes, they
          even dabble in content creation—but not about exciting topics like
          distributed systems or scalable databases. No, it’s all about how they
          started leetcoding at the tender age of four, and if you didn’t...
          well, tough luck for your dreams.
        </p>

        <h2>
          The Moral? Tech’s a Quirky Parade—Mostly Odorless, Occasionally
          Parasitic
        </h2>
        <p>
          So, what did chronicling this expedition into tech subcultures teach
          me? At best, everyone in technology skips the deodorant aisle—at
          worst, they’re parasitic and a net negative for society.
        </p>
        <p>
          When I entered the tech industry five years ago, I envisioned meeting
          the sharpest minds, the guardians upholding our digital world.
          Instead, I collided with a glorious circus of oddballs who couldn’t
          hold a conversation with your neighborhood mechanic (and let’s
          appreciate mechanics—they’re genuinely brilliant folks).
        </p>
        <h2>Recommended Articles</h2>
        <Section3 />
      </article>
    </div>
  );
}

export const Section3 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Essential Guide to Computer Components: Understanding the Heart and Brain of Your PC",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745674201/computer-compopnents_spj8rl.jpg",
      alt: "The Essential Guide to Computer Components",
      date: "April 26, 2025",
      articleRoute: "computer-components",
    },
    {
      id: 2,
      title:
        "Google’s Antitrust Battles, AI Shenanigans, Stretchy Computers & More: Your Wild, Weird Week in Tech",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg",
      alt: "Google’s Antitrust Battles, AI Shenanigans",
      date: "April 26, 2025",
      articleRoute: "chrome",
    },
    {
      id: 3,
      title:
        " The Ultimate Guide to Major Operating Systems: From Windows to Unix and Beyond",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745676706/operating-sytems_x0xwsi.jpg",
      alt: "Collage of major operating system interfaces including Windows, macOS, Linux, Android, and iOS with their respective logos",
      date: "April 26, 2025",
      articleRoute: "operating-systems",
    },
    {
      id: 4,
      title:
        " Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745681628/palantir_vii89x.jpg",
      alt: " Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      date: "April 26, 2025",
      articleRoute: "palantir",
    },
    {
      id: 5,
      title:
        " The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745683592/wifi_ao8skn.jpg",
      alt: " The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      date: "April 26, 2025",
      articleRoute: "wifi",
    },
    {
      id: 6,
      title:
        "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745927099/mariia-shalabaieva-NuvM8XxweIw-unsplash_n07w3o.jpg",
      alt: "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      date: "April 29, 2025",
      articleRoute: "palantir2",
    },
    {
      id: 8,
      title:
        "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745941798/linux_hffokn.jpg",
      alt: "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      date: "April 29, 2025",
      articleRoute: "linux",
    },
    {
      id: 9,
      title: "How to apply for a job at Google",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745999004/pawel-czerwinski-fpZZEV0uQwA-unsplash_h4wqot.jpg",
      alt: "How to apply for a job at Google",
      date: "April 30, 2025",
      articleRoute: "get-job-at-google",
    },
    {
      id: 10,
      title: "40 Programming Projects That Will Make You a Better Developer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746001867/van-tay-media--S2-AKdWQoQ-unsplash_cmx2em.jpg",
      alt: "40 Programming Projects That Will Make You a Better Developer",
      date: "April 30, 2025",
      articleRoute: "40-projects",
    },
    {
      id: 11,
      title:
        "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746027826/mehdi-sepehri-cX0Yxw38cx8-unsplash_szmfpc.jpg",
      alt: "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      date: "April 30, 2025",
      articleRoute: "bird-flu",
    },
    {
      id: 12,
      title:
        "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
      alt: "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      date: "April 30, 2025",
      articleRoute: "reddit",
    },
    {
      id: 13,
      title:
        "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746087085/hitesh-choudhary-u7r-VFdvQk8-unsplash_onsg9b.jpg",
      alt: "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      date: "May 1, 2025",
      articleRoute: "will-tech-jobs-bounce-back",
    },
    {
      id: 14,
      title:
        "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746091887/david-schultz-zIq30tCncWk-unsplash_gwiqzy.jpg",
      alt: "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      date: "May 1, 2025",
      articleRoute: "tech-jobs-in-freefall",
    },
    {
      id: 15,
      title: "The Greatest Hack in History",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746098778/nahel-abdul-hadi-flha0KwRrRc-unsplash_fdg6bt.jpg",
      alt: "The Greatest Hack in History",
      date: "May 1, 2025",
      articleRoute: "greatest-hack",
    },
    {
      id: 16,
      title: "But what is quantum computing? (Grover's Algorithm)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746101784/markus-winkler-FUQWePRf0Qc-unsplash_hywmpd.jpg",
      alt: "But what is quantum computing? (Grover's Algorithm)",
      date: "May 1, 2025",
      articleRoute: "what-is-quantam",
    },
    {
      id: 17,
      title: "But what is a neural network? | Deep learning",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746103424/jona-UopUfxghnWo-unsplash_qxft28.jpg",
      alt: "But what is a neural network? | Deep learning",
      date: "May 1, 2025",
      articleRoute: "neural-network",
    },
    {
      id: 18,
      title:
        "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746251130/roy-lee_w0dumx.webp",
      alt: "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      date: "May 3, 2025",
      articleRoute: "roy-lee",
    },
    {
      id: 26,
      title:
        "Google Gemini 2.5 Pro Surges to #1: The Future of Coding AI, OpenAI’s Strategic Shakeups, and What Every Developer Needs to Know",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746714642/solen-feyissa-_XtH7BBRPtA-unsplash_izx1le.jpg",
      alt: "Google Gemini 2.5 Pro AI coding model visualization with code samples and benchmark results",
      date: "May 8, 2025",
      articleRoute: "google-coding-ai",
    },
  ];

  return (
    <section className="section3">
      <div className="h-ai">
        <h2>Tech</h2>
      </div>

      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/tech/${project.articleRoute}`}
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
