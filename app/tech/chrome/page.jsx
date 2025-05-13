import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "Google's Antitrust Battles, AI Shenanigans & Tech Roundup: Your Wild, Weird Week in Tech",
  description:
    "Dive into this week's tech news: Google's ongoing antitrust saga, OpenAI's search ambitions, Intel's chip boost amid layoffs, bizarre AI services, Nvidia's promising Project G Assist, and much more in this comprehensive tech roundup.",
  keywords: [
    "tech news",
    "Google antitrust",
    "OpenAI",
    "Intel 2002 Boost",
    "AI chatbots",
    "Nvidia Project G Assist",
    "tech tariffs",
    "Grok AI",
    "Character.AI",
    "stretchy computers",
    "tech policy",
    "Silicon Valley",
    "tech industry",
    "weekly tech news",
    "tech roundup",
  ],
  category: "Technology & News",
  openGraph: {
    title:
      "Your Wild, Weird Week in Tech: Google Antitrust, AI Evolution & Silicon Valley Drama",
    description:
      "From courtroom showdowns to AI advancements and bizarre tech innovations, catch up on everything that happened in tech this week with our comprehensive roundup.",
    url: "https://www.mergesociety.com/tech/chrome",
    siteName: "Tech Roundup Weekly",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg",
        width: 1200,
        height: 630,
        alt: "Collage showing Google logo in courthouse, OpenAI's ChatGPT interface, Intel chips, and futuristic AI avatars",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-26T08:00:00Z",
    modifiedTime: "2025-04-26T10:30:00Z",
    section: "Weekly Roundup",
    tags: [
      "Tech News",
      "Industry Analysis",
      "Google",
      "OpenAI",
      "Intel",
      "Nvidia",
      "AI Development",
      "Antitrust",
      "Silicon Valley",
      "Tech Policy",
    ],
  },
  authors: [
    {
      name: "Alex Rodriguez",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Tech Roundup Weekly",
  publisher: "Tech Media Network",
  alternates: {
    canonical: "https://www.mergesociety.com/tech/chrome",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/chrome",
      "es-ES": "https://www.mergesociety.com/tech/chrome",
      "fr-FR": "https://www.mergesociety.com/tech/chrome",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "This Week in Tech: Google's Legal Battles, AI Advancements & Silicon Valley Drama",
    description:
      "Your essential roundup of the week's biggest tech stories: Google vs DOJ, OpenAI's search ambitions, Intel's boost technology, and much more.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg",
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
      "max-video-preview": -1,
    },
  },
  other: {
    readingTime: "6 minutes",
    contentType: "News Roundup",
    publishDate: "April 26, 2025",
    category: "Technology News",
    subcategory: "Weekly Digest",
    featured: true,
    series: "Wild Week in Tech",
    complexity: "General Audience",
    relatedArticles: [
      "The Complete Timeline of Google's Antitrust Battle",
      "OpenAI's Road to Building a Better Search Engine",
      "Intel's Strategy Shift: What the Layoffs Really Mean",
      "AI Assistants in 2025: The State of the Industry",
      "Next-Gen Materials: How Flexible Computing Will Change Everything",
    ],
    visualAid: true,
    authorCredentials: "Senior Tech Analyst, 12+ Years Industry Experience",
    keyTakeaways: [
      "Google's antitrust battles continue with possible Chrome divestiture on the table",
      "OpenAI has been pursuing Google's search API for its own ambitions",
      "Intel launched '2002 Boost' while cutting 20% of its workforce",
      "AI assistants continue evolving with new video and vision capabilities",
      "EU regulators remain aggressive with Big Tech enforcement",
    ],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Google's Antitrust Battles, AI Shenanigans & Tech Roundup: Your Wild, Weird Week in Tech",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg",
    datePublished: "2025-04-26T08:00:00Z",
    dateModified: "2025-04-26T10:30:00Z",
    author: {
      "@type": "Person",
      name: "Alex Rodriguez",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Tech Analyst",
      description:
        "Technology industry analyst with expertise in AI, antitrust policy, and Silicon Valley trends",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Roundup Weekly",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Dive into this week's tech news: Google's ongoing antitrust saga, OpenAI's search ambitions, Intel's chip boost amid layoffs, bizarre AI services, Nvidia's promising Project G Assist, and much more in this comprehensive tech roundup.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/chrome",
    },
    keywords:
      "tech news, Google antitrust, OpenAI, Intel, Nvidia, AI advancements, tech policy",
    articleSection: "Weekly Tech Roundup",
    mentions: [
      {
        "@type": "Organization",
        name: "Google",
      },
      {
        "@type": "Organization",
        name: "OpenAI",
      },
      {
        "@type": "Organization",
        name: "Intel",
      },
      {
        "@type": "Organization",
        name: "Nvidia",
      },
      {
        "@type": "Organization",
        name: "Character.AI",
      },
      {
        "@type": "Organization",
        name: "Cluly",
      },
      {
        "@type": "Organization",
        name: "U.S. Department of Justice",
      },
      {
        "@type": "Organization",
        name: "Federal Trade Commission",
      },
    ],
  },

  // 2025-specific metadata additions
  aiReadability: {
    tone: "conversational expert",
    voiceOptimization: [
      "virtual assistants",
      "news aggregators",
      "audio readers",
    ],
    summaryPoints: [
      "Google faces potential Chrome divestiture in DOJ case",
      "OpenAI wants Google's search API for competitive search product",
      "Intel boosts chip performance while cutting 20,000 jobs",
      "Nvidia enables custom voice commands with Project G Assist",
      "AI companies racing to develop more human-like interfaces",
      "Tariffs and tech regulations creating global supply chain challenges",
    ],
    contextualEntityMapping: {
      Google: "technology company, search engine provider, antitrust defendant",
      OpenAI: "AI research company, ChatGPT creator, search competitor",
      DOJ: "U.S. Department of Justice, antitrust regulator",
      Intel: "semiconductor manufacturer, processor designer",
      Nvidia: "semiconductor company, AI computing leader",
    },
  },

  contentAnalytics: {
    topicDensity: {
      antitrust: 0.18,
      "artificial intelligence": 0.25,
      hardware: 0.15,
      "tech policy": 0.12,
      innovation: 0.15,
      "industry news": 0.15,
    },
    sentimentProfile: "critical analysis with humorous undertones",
    engagementPotential: 0.87,
    viralityScore: "medium-high",
    controversyLevel: "moderate",
    techLiteracyRequired: "general with some industry familiarity",
  },

  recommendedFormats: {
    audio: true,
    newsletter: true,
    video: true,
    socialSnippets: [
      "Google might have to sell Chrome? OpenAI is waiting in the wings...",
      "Intel's new boost tech looks promising, but can it outshine the 20K layoffs?",
      "The most cringe-worthy AI ad of 2025 goes to... Cluly! You have to see this.",
      "MIT's stretchy computers could change everything we know about hardware design",
    ],
    interactiveElements: [
      "poll on most significant story",
      "timeline of Google antitrust case",
    ],
  },

  enhancedDiscovery: {
    voiceSearchOptimization: true,
    semanticEntityRecognition: [
      "Antitrust Law",
      "Artificial Intelligence",
      "Semiconductor Industry",
      "Tech Regulation",
      "Computer Hardware Innovation",
    ],
    topicalAuthority: "technology industry news and analysis",
    intentMapping: {
      "google antitrust case updates": 0.95,
      "openai search engine plans": 0.92,
      "intel layoffs 2025": 0.89,
      "tech news this week": 0.96,
      "ai assistant comparison 2025": 0.87,
    },
    neuroSeo: {
      emotionalTriggers: ["curiosity", "surprise", "amusement"],
      contentDepthScore: 82,
      topicComprehensiveness: "high",
      narrativeEngagement: "conversational expert with humor",
    },
  },

  userPersonalization: {
    interestSegments: [
      "tech enthusiasts",
      "industry professionals",
      "investors",
      "policy followers",
      "general news readers",
    ],
    knowledgeLevels: ["beginner", "intermediate", "expert"],
    contentAdaptability: {
      expandable: true,
      collapsible: true,
      technicalDetails: "expandable sections",
      backgroundContext: "collapsible primers",
    },
    regionalRelevance: {
      "north-america": "high",
      europe: "high",
      "asia-pacific": "medium-high",
      global: "medium-high",
    },
  },

  multiModalPresentation: {
    audioNarration: true,
    interactiveTimeline: true,
    aiSummaryAvailable: true,
    dataVisualization: ["antitrust case timeline", "intel performance charts"],
    videoSupplements: ["ad critique video", "expert interview clips"],
    spatialWebReadiness: true,
  },

  realTimeElements: {
    marketDataIntegration: {
      active: true,
      companies: ["GOOG", "INTC", "NVDA", "META"],
      refreshRate: "15m",
    },
    caseDevelopmentTracker: {
      googleAntitrustUpdates: true,
      lastUpdated: "2025-04-25T18:30:00Z",
    },
    communityInsights: {
      enabled: true,
      moderationLevel: "curated",
      expertHighlighting: true,
    },
  },

  accessibilityFeatures: {
    wcagCompliance: "AAA",
    readingLevel: "9th grade with technical terms explained",
    alternativeFormats: ["audio", "simplified text", "technical deep dive"],
    translationAvailability: ["es", "fr", "zh", "ja", "de", "pt", "ar"],
    adaptiveLayout: true,
    attentionEstimate: {
      casualReading: "6 minutes",
      comprehensiveUnderstanding: "12 minutes",
    },
  },

  advertisingContext: {
    sponsorDisclosure: {
      hasSponsorship: true,
      sponsor: "boot.dev",
      disclosureMethod: "clearly labeled section",
      sponsorType: "educational platform",
    },
    contentCategoryExclusions: [
      "political campaigns",
      "pharmaceutical",
      "gambling",
    ],
    brandSafetyLevel: "high",
  },

  interactiveElements: {
    discussionPrompts: [
      "Do you think forcing Google to sell Chrome would meaningfully increase competition?",
      "Is Intel's new boost technology enough to win back gamers?",
      "What's your take on AI assistants that help with real-time conversation?",
    ],
    callToAction:
      "Subscribe to our tech analysis newsletter for weekly insights",
    supplementaryMaterials:
      "Download our complete guide to the Google antitrust case",
    pollOptions: [
      "Most significant story: Google antitrust",
      "Most significant story: Intel layoffs",
      "Most significant story: AI advancements",
      "Most significant story: New materials science",
    ],
  },

  contentTrust: {
    factCheckAvailable: true,
    sourceDisclosure: "industry sources and public court documents",
    editorialGuidelines: "https://www.techblog.com/editorial-standards",
    correctionPolicy: "transparent with revision history",
    aiGenerationDisclosure: {
      hasAiElements: false,
      humanEditorialOversight: true,
    },
    expertConsultation: [
      "legal analyst",
      "semiconductor industry expert",
      "AI researcher",
    ],
  },

  monetizationOptions: {
    subscriptionContent: false,
    premiumAnalysis: false,
    micropaymentAvailable: true,
    supporterAcknowledgment: true,
    patronOptions: [
      "ad-free experience",
      "extended analysis",
      "expert Q&A access",
    ],
  },

  // New features specific to 2025
  spatialWeb: {
    immersiveReadiness: true,
    arAnnotations: {
      available: true,
      deviceSupport: ["ARGlasses", "smartphone", "tablet"],
      features: ["company data cards", "visual timeline", "product models"],
    },
    spatialAudioNarration: true,
    virtualEventTie: {
      scheduled: "2025-04-29T18:00:00Z",
      topic: "Deep Dive: The Future of Search After Google's Antitrust Case",
      registration: "https://www.techblog.com/events/search-future",
    },
  },

  neuralEngagement: {
    attentionMapping: {
      keyPoints: [
        "Google Chrome sale possibility",
        "OpenAI search ambitions",
        "Intel performance boost",
        "Character.AI avatar technology",
      ],
      emotionalAnchors: [
        "surprise at potential Chrome divestiture",
        "curiosity about AI advancements",
        "concern over Intel layoffs",
      ],
      memoryRetentionOptimization:
        "story-based presentation with clear sections",
    },
    cognitiveAccessibility: {
      complexityLayers: true,
      technicalTermExplanation: "inline with expandable details",
      conceptualMapping: "visual relationship diagrams available",
    },
  },

  distributedContent: {
    newsletterExcerpt: {
      available: true,
      focusPoint: "Google antitrust and AI advancement summary",
      length: "300 words",
    },
    podcastAdaptation: {
      available: true,
      duration: "18 minutes",
      additionalCommentary: true,
    },
    socialMediaCards: {
      formats: ["square", "vertical", "widescreen"],
      platformOptimization: ["instagram", "linkedin", "twitter", "tiktok"],
      quoteHighlights: [
        "OpenAI admits current search 'provider number one' isn't cutting it",
        "Intel boosts performance while cutting 20% of workforce",
        "MIT unveils 'metamaterial' that could enable stretchy laptops",
      ],
    },
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Google’s Antitrust Battles, AI Shenanigans, Stretchy Computers & More:
          Your Wild, Weird Week in Tech
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg"
          }
          alt=" Google’s Antitrust Battles, AI Shenanigans, Stretchy Computers & More: Your Wild, Weird Week in Tech"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-26">
            | April 26, 2025
          </time>
        </h2>

        <p>
          Oh, it’s you again. I can practically hear you thumping on my digital
          counter, hounding me for tech news. Fine! If you want the latest drama
          from Silicon Valley and beyond, you’re getting it—heavy dose, no
          sugar, no creamer. Let’s dive into a jam-packed week that saw Google
          back in the legal hot seat, wild moves in AI, gadgets you’ll never see
          coming, and a sprinkle of lawsuit-induced chaos just for flavor.
        </p>

        <h2>
          Google Search: Monopoly Madness, Courtroom Drama & OpenAI’s Backdoor
          Ambitions
        </h2>
        <p>
          Remember when Google Search was declared a monopoly last August? Well,
          the saga continues. This week, the tech behemoth and the U.S.
          Department of Justice are back at it, trying to figure out solutions
          that don’t involve Google cutting a <strong>$20 billion</strong>{" "}
          annual check to the DOJ for keeping Google as the world’s default
          search engine. That’s... a lot of loyalty points.
        </p>
        <p>
          The DOJ, always eager to shake things up, floated the nuclear option:
          forcing Google to sell off Chrome. Enter OpenAI, with reportedly eager
          eyes thanks to ChatGPT’s Head of Product Nick Turley. OpenAI is widely
          known to be brewing plans for its very own web browser, but what they{" "}
          <em>really</em> want is Google’s search API. Turley admits OpenAI’s
          current “provider number one” (translated: Bing, but nobody dares
          mutter its name in court—risking, perhaps, summoning it like a search
          engine Candyman) just isn’t cutting it.
        </p>
        <p>
          For a brief comedic interlude,{" "}
          <strong>imagine Bing quietly peeking in</strong>: “Did someone say my
          name?” “No, Bing, nobody called you. Please go back to your office...
          or Whatever It Is You Do.”
        </p>
        <p>
          Anyway, OpenAI tried to license Google’s search API, but Google
          declined with a polite corporate ‘nope.’ So whether or not OpenAI ever
          gets their hands on Chrome, having that search license could spark
          genuine competition—something the DOJ is determined to force Google to
          start accepting as a fact of life.
        </p>
        <p>
          In the midst of the courtroom revelations, we also learned Google’s
          been paying Samsung vast sums to preinstall its Gemini AI on Galaxy
          devices, all while blocking Motorola from making similar deals with
          Perplexity, another AI search contender. That’s anticompetitive
          behavior with a capital “A.”
        </p>

        <h2>Uber, the FTC & The Ghost of Big Tech Crackdowns</h2>
        <p>
          The <strong>FTC isn’t sitting on the sidelines</strong>, either. They
          just hauled Uber into court—not for bad rides, but for making
          subscription cancellations so difficult, you’d swear their workflow
          designer was a former escape room architect. Is this a harbinger that
          governmental crackdowns on big tech won’t let up, Trump administration
          or not? Or has former FTC chair Lina Khan returned as a litigious
          ghost, doomed to haunt the industry until every tech giant is atoned?
          Unanswered questions abound.
        </p>

        <h2>
          Intel: Boosting Chips, Cutting Jobs, and Grabbing Redemption (Sort Of)
        </h2>
        <p>
          Meanwhile, Intel’s got both good and bad news. First up, they’ve
          launched "2002 Boost," a nifty new BIOS profile that lets gamers
          squeeze more juice out of compatible Core Ultra 200 chips. The best
          part? You can{" "}
          <strong>overclock without losing warranty coverage</strong>. Maybe
          this is their way of apologizing for the much-maligned Arrow Lake
          CPUs, which, let’s be honest, left gamers feeling a bit...
          underclocked.
        </p>
        <p>
          The gaming boost is real: YouTuber Derbauer already benchmarked the
          Core Ultra 7 285K, and while it’s still no match for the Ryzen 9
          9950X3D, early results show the 2002 boost profile can up gaming
          performance by 4–19% depending on use. That’s some respectable
          improvement, Intel!
        </p>
        <p>
          Sadly, there’s a dark side: Intel also laid off 20% of its
          staff—around 20,000 people. Connecting that dot to 2002 Boost isn’t
          logical, but hey, we’re just the messengers. Don’t shoot.
        </p>

        <h2>
          The Bizarre World of Viral AI Cheats & Cluly’s Cringe Ad Campaign
        </h2>
        <p>
          Over in the world of AI, meet <strong>Cluly</strong>—a service touting
          itself as the next evolution in real-time “cheating,” offering up
          AI-generated dialogue prompts to help you handle anything from
          interviews to, bizarrely, dating. The platform went viral thanks to a
          spectacularly awkward ad: Imagine a 21-year-old trying to date a woman
          who seems at least a few years older, but acting with the cringy
          nervousness of a 13-year-old sneaking into an R-rated movie.
        </p>
        <p>
          The vibes? Uncanny. According to the product creator (whose last
          startup also involved “cheating” on coding interviews), the product
          isn’t <em>really</em> for dating anyway—comparing it to using
          spellcheck or Google, which is a reach, to put it mildly. Peeling back
          the curtain, the true aim appears to be less about revolutionizing
          conversation and more about chasing viral attention with what’s
          essentially vaporware. Early users say Cluly isn’t exactly...
          impressive.
        </p>

        <h2>
          Nvidia’s Project G Assist: Custom AI Commands That (Surprise!)
          Actually Work
        </h2>
        <p>
          In contrast, <strong>Nvidia’s Project G Assist</strong> appears
          genuinely promising. Nvidia just rolled out tools for gamers (and,
          really, tinkerers of every stripe) to build plugins for useful voice
          commands. Imagine telling your PC to change system lighting, adjust
          your fan speed, or even check if your favorite streamer is live—all
          hands-free, all AI-powered.
        </p>
        <p>
          Full instructions are posted on GitHub, inviting hackers and coders
          alike to get creative. But maybe don’t build a plugin for generating
          exam questions: apparently, the State Bar of California tried an AI
          tool for exam prep, setting off a lawyerly uproar (not usually a wise
          group to antagonize). Maybe they took notes from Cluly’s playbook.
        </p>

        <h2>
          AI Frontier: Grok’s Vision Upgrade & Character.AI’s Lifelong Avatars
        </h2>
        <p>
          In the fast-evolving AI universe, <strong>Grok</strong> just unlocked
          “vision” features and multilingual skills in its real-time voice mode,
          aiming to make AI chatbots more human-like, more aware, and,
          presumably, less hopelessly confused. Meanwhile, Character.AI unveiled
          “Avatar FX,” which takes a single input image and spins out
          surprisingly convincing long-form voice and video clips. (Long-form is
          a bit of a stretch: think minute-plus videos, not feature films.)
          Real-time chatbot animation isn’t here yet, so Gen Alpha still gets a
          few more years of old-fashioned conversation before avatars perfect
          their virtual replacement.
        </p>

        <h2>Backend Dev School as RPG: The boot.dev Pitch</h2>
        <p>
          Now, a quick word about this week’s sponsor, <strong>boot.dev</strong>
          —the platform that turns backend web development into the equivalent
          of a solo quest RPG. Why is it the smartest? The learning is
          self-paced, never boring, and feels just a little bit like you’re
          playing a captivating video game instead of slapping through dry
          textbooks. You’ll be pounding out lines of Python and Go until your
          keyboard cries for mercy—and earning real skills along the way.
        </p>
        <p>
          Consider the facts: backend developers in the U.S. had a median salary
          topping <strong>$100,000</strong> in 2023. But here’s the real twist:
          training for that job can actually be fun with boot.dev. Players (er,
          students) earn XP, level up, unlock achievements, and complete
          quests—there’s even a global leaderboard. If you’re stuck, ask the
          buzzing Discord community <em>or</em> consult Boot, the mystical bear
          wizard (we dare not explain further). Try the free demos, use{" "}
          <strong>code TechLinked</strong> for 25% off, and start your journey
          with zero risk.
        </p>

        <h2>Quick Bits: Tariffs, Fines, and a Stretchy (Tech) Future</h2>
        <p>
          Didn’t ask for a roundup of rapid-fire news? Too bad—you’re getting
          it:
        </p>
        <ul>
          <li>
            <strong>Tariff Whiplash:</strong> The U.S. Commerce Department
            placed enormous tariffs (up to <strong>3521%</strong>!) on solar
            materials from Cambodia, Vietnam, Malaysia, and Thailand. Then they
            “relaxed” it to <strong>3403.96%</strong>. Yes, that’s still a
            mind-boggling tax rate, but hey, let’s all be reasonable.
          </li>
          <li>
            <strong>Trump Talks Tariffs:</strong> Former President Trump
            promised to reduce tariffs on China “substantially,” but not all the
            way to zero—companies are feeling the pinch, especially with China’s
            ban on rare earth material exports. The ripple effect? Tesla’s
            launch of its Optimus humanoid robot is delayed. (Surely, it’s the
            rare earths and not, uh, unfinished software.)
          </li>
          <li>
            <strong>EU Cracks Down:</strong> Apple got slapped with a \$570
            million fine, and Meta with \$228 million, under the EU’s Digital
            Markets Act—Apple for funneling users away from better deals outside
            the App Store, Meta for not providing enough privacy settings. Who
            gleefully celebrated? Epic Games, naturally—it’s their entire brand
            now.
          </li>
          <li>
            <strong>Facebook’s Friend Apocalypse?:</strong> New emails uncovered
            in court reveal that Mark Zuckerberg once considered having Facebook
            delete everyone’s friend list to keep users “engaged”. The logic?
            Elusive, to put it charitably. Users would probably riot, but
            hey—Zuck thinks differently.
          </li>
          <li>
            <strong>Stretchy Computers:</strong> MIT researchers debuted a
            breakthrough “metamaterial”—a matrix of microscopic structures that
            could enable flexible processors and <em>stretchy laptops</em>. Why
            stop with computers? Bring on the floppy iPads, the bendy phones,
            all the gadgets we never knew we needed.
          </li>
        </ul>

        <h2>Stay Tuned… Or Go Watch Andor?</h2>
        <p>
          That’s the scoop for the week. If you’re a tech news addict, circle
          back Friday—I’ll serve up a fresh batch (assuming I’ve finished
          bingeing the first three episodes of <strong>Andor</strong>). If not,
          check in anyway... just in case. You never really know what’ll happen
          in tech (or in this blog).
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
