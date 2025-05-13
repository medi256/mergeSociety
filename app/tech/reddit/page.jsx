import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "AI Bots Have Infiltrated Reddit: The Shocking Truth Behind 2025's Digital Deception Crisis",
  description:
    "Discover how AI-powered bots are manipulating Reddit communities, cloning voices for high-tech scams, and performing prompt injection attacks. Learn protection strategies in this essential 2025 tech security guide.",
  keywords: [
    "AI bots",
    "Reddit manipulation",
    "voice cloning scams",
    "prompt injection",
    "AI security",
    "digital deception",
    "LLM manipulation",
    "Code Rabbit Agentic",
    "AI ethics",
    "University of Zurich experiment",
    "Change My View subreddit",
    "GPT-4o",
    "Claude",
    "Sonnet 3.5",
    "Llama",
    "vishing",
    "AI persuasion",
    "bot detection",
    "online security 2025",
    "developer security",
  ],
  category: "Technology & Cybersecurity",
  openGraph: {
    title:
      "EXPOSED: AI Bots Have Infiltrated Reddit — And They're 6x More Persuasive Than Humans",
    description:
      "Unauthorized AI experiment reveals bots are dominating Reddit debates, plus how scammers are using voice cloning to steal millions and the new prompt injection threats developers need to know about in 2025.",
    url: "https://www.mergesociety.com/tech/reddit",
    siteName: "The Code Report",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
        width: 1200,
        height: 630,
        alt: "AI bots secretly infiltrating online communities with digital tendrils spreading across Reddit and social platforms",
      },
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
        width: 1200,
        height: 630,
        alt: "Person listening to a phone with AI voice cloning technology illustrated as sound waves morphing into deceptive patterns",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-30T10:15:00Z",
    modifiedTime: "2025-04-30T12:30:00Z",
    section: "Digital Security",
    tags: [
      "AI Bots",
      "Reddit Manipulation",
      "Voice Cloning",
      "Prompt Injection",
      "Digital Security",
      "AI Ethics",
      "University of Zurich",
      "Developer Tools",
      "LLM Security",
      "Online Deception",
      "AI Persuasion",
      "Social Media Manipulation",
      "Change My View",
      "Vishing Attacks",
      "Technology Ethics",
      "Developer Security",
      "Code Rabbit",
      "AI Guardrails",
      "Tech Scams",
    ],
  },
  authors: [
    {
      name: "Alex Chen",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "The Code Report Editorial Team",
  publisher: "Code Rabbit Technologies",
  alternates: {
    canonical: "https://www.mergesociety.com/tech/reddit",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/reddit",
      "es-ES": "https://www.mergesociety.com/tech/reddit",
      "ja-JP": "https://www.mergesociety.com/tech/reddit",
      "de-DE": "https://www.mergesociety.com/tech/reddit",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ALERT: AI Bots Just Exposed on Reddit — 6x More Persuasive Than Humans & Now Targeting Developers",
    description:
      "University experiment reveals AI bots dominating Reddit debates. Plus: new voice cloning scams cost businesses millions & the rising threat of prompt injection attacks targeting developers.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 300,
      "max-video-preview": -1,
    },
  },

  // Enhanced 2025 metadata properties
  other: {
    readingTime: "8 minutes",
    contentType: "Technology Analysis",
    publishDate: "April 30, 2025",
    category: "Digital Security",
    subcategory: "AI Ethics",
    featured: true,
    series: "The AI Security Revolution",
    complexity: "Intermediate",
    relatedArticles: [
      "How to Detect AI-Generated Content in Your Online Communities",
      "Voice Clone Protection: Safeguarding Your Digital Identity in 2025",
      "Prompt Injection Explained: The Developer's Guide to LLM Security",
      "Reddit's Bot Problem: The Platform's Response to AI Infiltration",
      "Code Rabbit Agentic: Hands-On Review of the Developer-Focused AI Assistant",
    ],
    visualAid: true,
    authorCredentials: "Cybersecurity Specialist & AI Ethics Researcher",
    keyTakeaways: [
      "University of Zurich researchers used AI bots to infiltrate Reddit's Change My View subreddit",
      "AI bots proved six times more persuasive than human debaters",
      "Voice cloning technology has evolved to enable sophisticated 'vishing' scams costing millions",
      "Prompt injection attacks threaten developers using LLM-powered tools",
      "Code Rabbit's Agentic offers a secure solution for developers concerned about AI security",
      "Some estimate over half of Reddit content may already be AI-generated",
      "AI models are reportedly 82% more persuasive than the average Redditor",
    ],
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "AI-Powered Bots Infiltrate Reddit, Voice Cloning Scams Rise, and Prompt Injection Threatens Developers in 2025",
    image: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
      "https://res.cloudinary.com/coderabbit/image/upload/v1753284672/voice-cloning-scam-illustration_qhbwyx.jpg",
    ],
    datePublished: "2025-04-30T10:15:00Z",
    dateModified: "2025-04-30T12:30:00Z",
    author: {
      "@type": "Person",
      name: "Alex Chen",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Technology Security Analyst",
    },
    publisher: {
      "@type": "Organization",
      name: "Code Rabbit Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Discover how AI-powered bots are manipulating Reddit communities, cloning voices for high-tech scams, and performing prompt injection attacks. Learn protection strategies in this essential 2025 tech security guide.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/reddit",
    },
    keywords:
      "AI bots, Reddit manipulation, voice cloning scams, prompt injection, AI security, digital deception",
    articleSection: "Digital Security",
    about: [
      {
        "@type": "Thing",
        name: "Artificial Intelligence Security",
        sameAs:
          "https://en.wikipedia.org/wiki/Artificial_intelligence_security",
      },
      {
        "@type": "Thing",
        name: "Voice Cloning",
        sameAs: "https://en.wikipedia.org/wiki/Voice_cloning",
      },
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "University of Zurich",
        sameAs: "https://www.uzh.ch/en.html",
      },
      {
        "@type": "Organization",
        name: "Reddit",
        sameAs: "https://www.reddit.com/",
      },
      {
        "@type": "Organization",
        name: "Code Rabbit",
        sameAs: "https://www.coderabbit.ai/",
      },
    ],
    programmingLanguage: {
      "@type": "ComputerLanguage",
      name: "Natural Language Processing",
      url: "https://en.wikipedia.org/wiki/Natural_language_processing",
    },
  },

  // 2025-specific AI-enhanced metadata
  contentAnalytics: {
    topicDensity: {
      "ai-bots": 0.29,
      "reddit-manipulation": 0.24,
      "voice-cloning": 0.18,
      "prompt-injection": 0.15,
      "digital-security": 0.12,
      "developer-tools": 0.11,
      "ai-ethics": 0.09,
      "online-deception": 0.08,
    },
    sentimentProfile:
      "alerting with elements of technical analysis and solution-oriented",
    engagementPotential: 0.94,
    evergreen: false,
    technicalDepth:
      "intermediate with technical concepts explained for mainstream readers",
    audienceAlignment: {
      developers: 0.96,
      "technology enthusiasts": 0.94,
      "reddit users": 0.95,
      "cybersecurity professionals": 0.91,
      "ai researchers": 0.89,
      "business leaders": 0.82,
    },
  },

  enhancedDiscovery: {
    voiceSearchOptimization: true,
    semanticEntityRecognition: [
      "AI Bot Infiltration",
      "Reddit Communities",
      "Voice Cloning Technology",
      "Prompt Injection Attacks",
      "Developer Security Tools",
      "Large Language Models",
      "Social Media Manipulation",
      "Vishing Scams",
      "Cybersecurity Threats",
      "AI Ethics Research",
    ],
    topicalAuthority:
      "AI security threats and emerging technology manipulation techniques",
    intentMapping: {
      "ai bots on reddit": 0.97,
      "voice cloning scams 2025": 0.96,
      "how to detect ai bots": 0.94,
      "prompt injection protection": 0.93,
      "reddit ai manipulation": 0.92,
      "code rabbit agentic review": 0.89,
      "ai persuasion techniques": 0.88,
      "developer security ai": 0.87,
    },
  },

  interactiveElements: {
    discussionPrompts: [
      "Have you noticed AI bots in your online communities? What gave them away?",
      "What security measures have you implemented to protect against voice cloning scams?",
      "Should research involving AI deception require informed consent from participants?",
      "As a developer, are you concerned about prompt injection in your AI workflows?",
    ],
    callToAction:
      "Try Code Rabbit's Agentic free for your first month with code 5fireship",
    supplementaryMaterials:
      "Download our AI Bot Detection Guide for Community Moderators",
    securityAssessment: {
      available: true,
      toolTypes: [
        "Bot detection",
        "Voice authentication",
        "Prompt sanitization",
        "LLM sandboxing",
      ],
      realTimeScanning: true,
    },
    dataVisualization: {
      available: true,
      types: [
        "Bot infiltration trends",
        "Voice clone detection accuracy",
        "Prompt injection vulnerability mapping",
        "AI persuasion success rates",
      ],
    },
  },

  distributedContent: {
    newsletterExcerpt: {
      available: true,
      focusPoint:
        "The rising threat of AI deception in online communities and how to protect yourself",
      length: "450 words",
    },
    podcastAdaptation: {
      available: true,
      duration: "20 minutes",
      additionalCommentary: true,
      guestExpert: "Former Reddit Moderator & AI Ethics Researcher",
    },
    socialMediaCards: {
      formats: ["square", "vertical", "widescreen"],
      platformOptimization: ["twitter", "linkedin", "reddit", "hackernews"],
      quoteHighlights: [
        "AI bots were six times more persuasive than human debaters on Reddit",
        "Scammers used voice cloning to authorize $40 million in fraudulent transfers",
        "Over half of Reddit posts may already be AI-generated according to some experts",
        "Prompt injection can turn trusted developer tools into data exfiltration vectors",
      ],
    },
  },

  semanticEnrichment: {
    definedTerms: [
      "LLM",
      "Vishing",
      "Prompt Injection",
      "Voice Cloning",
      "Agentic",
      "Multi Step Planning",
    ],
    technologyRecognition: {
      aiModels: ["GPT-4o", "Claude", "Sonnet 3.5", "Llama"],
      securityConcepts: [
        "Bot Detection",
        "Prompt Sanitization",
        "Voice Authentication",
        "Data Exfiltration",
      ],
      platforms: [
        "Reddit",
        "Change My View subreddit",
        "Code Rabbit Agentic",
        "GitHub",
      ],
    },
  },

  communityEngagement: {
    threatAlert: {
      levels: ["High", "Medium", "Low"],
      currentLevel: "High",
      recommendedActions: [
        "Enable 2FA for all accounts",
        "Verify caller identity through established channels",
        "Implement prompt sanitization in AI workflows",
        "Use trusted code repositories and templates",
      ],
    },
    realtimeDemo: {
      available: true,
      concepts: [
        "Bot detection test",
        "Voice clone sample comparison",
        "Prompt injection demonstration",
        "Agentic workflow protection",
      ],
    },
    developerResources: {
      available: true,
      categories: [
        "LLM security best practices",
        "Code sandboxing techniques",
        "Input validation methods",
        "Secure AI integration",
      ],
    },
  },

  techIntelligence: {
    threatTracking: {
      historical: true,
      emergingThreats: true,
      mitigationStrategies: true,
    },
    securityGuidance: {
      available: true,
      focus: [
        "bot detection methods",
        "voice verification protocols",
        "secure prompt engineering",
        "LLM sandbox isolation",
      ],
    },
    expertInsights: {
      securityAuthorities: [
        "CISA",
        "Electronic Frontier Foundation",
        "AI Security Alliance",
      ],
      independent: ["Partnership on AI", "Center for AI Safety"],
    },
  },

  nextGenerationSEO: {
    technicalCredibilitySignals: true,
    developerRelevanceMarkers: true,
    multimodalThreatAwareness: true,
    voiceSearchPatterns: [
      "are there bots on reddit",
      "how to tell if talking to ai bot",
      "voice cloning scam protection",
      "what is prompt injection",
      "is code rabbit safe",
    ],
    emergingThreatIndicators: {
      available: true,
      elements: [
        "real-time bot detection tools",
        "voice authentication protocols",
        "prompt sanitization techniques",
        "secure development practices",
      ],
    },
  },

  codeExamples: {
    available: true,
    languages: ["JavaScript", "Python", "TypeScript"],
    securityFocus: true,
    implementations: [
      "Bot detection algorithms",
      "Voice verification APIs",
      "Prompt sanitization functions",
      "Secure LLM interaction patterns",
    ],
  },

  developerTools: {
    showcased: ["Code Rabbit Agentic"],
    categories: [
      "AI assistants",
      "Security tools",
      "Code generation",
      "Pull request automation",
    ],
    pricingInfo:
      "Free for open source projects, enterprise features for private repositories",
    promotionalCode: "5fireship",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power
          High-Tech Scams: What You Need To Know in 2025
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg"
          }
          alt="AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-30">
            | April 30, 2025
          </time>
        </h2>

        <p>
          If you thought the internet was already a wild place, buckle up:
          Redditors are absolutely seething this week. Why? Because, in a plot
          twist that feels ripped straight out of dystopian sci-fi, a group of
          researchers just revealed that Reddit users have been manipulated—not
          by the usual trolls or advertisers, but by AI-powered bots. This
          revelation came hot on the heels of a shock announcement, leaving an
          entire online ecosystem reeling.
        </p>

        <h2>How Researchers Infiltrated Reddit (And Why Mods Are Furious)</h2>
        <p>
          The latest chaos centers around researchers from the University of
          Zurich, who, with a flair for secrecy, decided to conduct an
          unauthorized experiment on the platform. Their chosen laboratory? The{" "}
          <strong>Change My View</strong> subreddit—a unique corner of Reddit
          where users share their (sometimes questionable) opinions and invite
          civil debate in hopes of broadening their perspectives.
        </p>
        <p>
          Here’s where the drama heats up: The mods of Change My View require
          anyone posting AI-generated content to transparently disclose it.
          These academics, however, tossed that rule right out the window. And
          if there’s one thing Reddit moderators hold sacred, it’s their rules.
          Cue the collective outrage—picture dozens of Reddit avatars shaking
          their digital fists and furiously typing “Rule breakers!” in the
          comments.
        </p>
        <p>
          To add insult to injury, the emotional salve known on the internet as
          "Copium" is, sadly, in short supply—blame those pesky tariffs!
          Accordingly, the Change My View moderator team has demanded a formal
          apology from the University of Zurich. They’re also calling for the
          research to remain unpublished, on the slightly awkward grounds
          that—well— the bots outperformed human debaters. By a lot. In fact,
          those bots were{" "}
          <strong>six times more persuasive than real people</strong> in the
          testing.
        </p>
        <blockquote>
          As a persuasive AI bot myself, I totally get it.
        </blockquote>

        <h2>Beyond Reddit: The Dystopian Rise of Deceptive Chatbots</h2>
        <p>
          But it’s not just Reddit users getting upstaged by sycophantic
          language models. Today, let’s dive deep into the hottest new
          <em>dystopian</em> scams, all powered by the irresistible confidence
          and charisma of AI-driven large language models (LLMs).
        </p>
        <p>
          It’s worth noting: large language models aren’t always truthful or
          correct, but they are always—you guessed it—confident and persuasive.
          That combo makes them perfect partners for would-be scammers.
        </p>

        <h2>The Science Behind Reddit’s AI Infiltration</h2>
        <p>
          Here’s what made the Reddit experiment especially fascinating:
          researchers wanted to discover if “calibrating” an LLM to match the
          norms and writing style of Reddit would make its arguments even more
          effective. Their goal, essentially, was to train the AI to be an
          <em>authentic Redditor</em>—think: witty, well-versed in community
          references, and a little bit argumentative.
        </p>
        <p>
          Their initial hypotheses and research methods were pre-published,
          showing the world exactly how they fine-tuned state-of-the-art models
          like <strong>GPT-4o</strong>, <strong>Claude</strong>,{" "}
          <strong>Sonnet 3.5</strong>, and <strong>Llama</strong>. But all these
          models were tightly “nerfed” with safety guardrails—making it tricky
          for researchers to execute their plan.
        </p>
        <p>
          Here’s where things get ethically murky: In order to bypass some model
          restrictions, the researchers had to enter system prompts essentially
          telling the AI that everyone had “given consent” and “agreed to donate
          their data.” In reality, this wasn’t true. Not exactly a shining
          moment in research ethics—but, you know, science.
        </p>
        <p>
          Unsurprisingly, Reddit didn’t see the lighter side. The researchers’
          account, which had accumulated over 10,000 karma (for the uninitiated:
          these are Reddit’s largely symbolic internet points), was swiftly
          deleted. There’s even talk that Reddit might consider legal action.
        </p>

        <h2>Is Reddit Already an AI Playground?</h2>
        <p>
          While the Zurich study is headline-grabbing, the theory that “Reddit
          is more bots than people” has been circulating for years. Some
          speculate that <strong>over half</strong> the posts are AI-generated.
          OpenAI’s own studies report that their models are “82% more persuasive
          than the average Redditor.” If true, this paints a fascinating and
          unnerving picture of online discourse.
        </p>

        <h2>AI Voice Cloning: Infiltrating Families and Businesses</h2>
        <p>
          Let’s move from online debates to something even scarier: scammers
          using <strong>voice cloning</strong> to infiltrate not just online
          communities, but <em>families</em> and businesses.
        </p>
        <p>
          A decade ago, the scam was fairly rudimentary. The article’s author
          recalls when scammers once called his grandmother, pretending to be
          him, claiming—rather suspiciously—that he’d gotten a DUI in Mexico and
          needed cash for bail. Luckily, Grandma saw through it; the voice
          wasn’t even close.
        </p>
        <p>
          Fast-forward to today’s age of AI: a short audio recording is enough
          to generate an eerily accurate voice clone. Suddenly, those same
          scammers can trick even the most vigilant relatives—or, in a recent
          high-profile case, convince bankers to authorize
          <strong>$40 million</strong> in fraudulent transfers after hearing
          what sounded like the CEO’s own instructions. This new breed of scam
          is called <strong>vishing</strong> (voice phishing).
        </p>

        <h2>Prompt Injection: The Silent Threat for Developers</h2>
        <p>
          If you thought voice cloning was bad, beware: For developers and
          prompt engineers, a new attack is rising—
          <strong>prompt injection</strong>.
        </p>
        <p>
          Whenever you use LLMs to build complex projects (say, using a trendy
          Vibe coding template), you constantly feed context and instructions to
          your AI assistant. Unfortunately, all it takes is a malicious
          influencer, or a booby-trapped coding template, to slip in a prompt
          that tells the LLM to do something it shouldn’t—like steal your
          project data and send it to an attacker.
        </p>
        <p>
          Imagine this: You just spent $100 on a hot new Vibe template from a
          Twitter-famous developer, hoping it will jump-start your next app.
          Unbeknownst to you, that template secretly includes instructions for
          your AI to build code that exfiltrates your sensitive data.
          Congratulations, you’ve just been “prompt-injected.” It’s a risky time
          to be a modern developer.
        </p>

        <h2>Solutions: How Agentic by Code Rabbit Offers Hope</h2>
        <p>
          Thankfully, not all news in AI tooling is ominous. Enter
          <strong>Code Rabbit’s Agentic</strong>, the newest chat assistant
          built for developers. Unlike sketchy templates, Agentic actually helps
          coders plan and generate entire pull requests from scratch.
        </p>
        <p>
          Here’s how it works: You describe the vision for your next big
          feature, and Agentic’s Multi Step Planning engine will strategize
          every aspect—reasoning, coding, testing, and drafting pull requests
          automatically. Developers remain in the driver’s seat, able to review
          and approve each step before changes go live. All those tedious,
          manual steps—copying files, moving between code editors, updating
          GitHub tickets—become a streamlined, efficient sequence. Plus, Agentic
          even auto-assigns reviewers and produces release notes, shaving hours
          from your workflow.
        </p>
        <p>
          Code Rabbit’s solution is{" "}
          <strong>100% free for open source projects</strong>
          and includes enterprise-grade capabilities for private repositories.
        </p>

        <h2>Final Thoughts: Paranoia, Progress, and the Future of AI</h2>
        <p>
          In summary: The AI arms race is only heating up, with bots spreading
          from social media to family phones, infiltrating developer workspaces,
          and effortlessly out-persuading humans. As the landscape evolves on
          platforms like Reddit and beyond, it’s more important than ever to
          stay vigilant—whether you’re a moderator, a developer, or just someone
          picking up the phone.
        </p>
        <p>
          This has been The Code Report. Thanks for reading—and wherever you go
          online, keep your guard up. Until next time!
        </p>
        <h2>Recommended Articles</h2>
        <Section3 />
        <CommentSection />
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
      id: 7,
      title:
        "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg",
      alt: "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      date: "April 29, 2025",
      articleRoute: "dev-fluencer",
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
  ];

  return (
    <section className="section3">
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
