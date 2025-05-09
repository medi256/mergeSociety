import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Vibe Coding: The 2025 AI Revolution Changing How We Program",
  description:
    "Discover how the Vibe Coding Mind Virus is transforming programming in 2025. Learn about the breakthrough approach pioneered by Andrej Karpathy, its million-dollar successes, potential pitfalls, and how to make it work for your projects.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "vibe coding 2025",
    "AI programming revolution",
    "Andrej Karpathy vibe coding",
    "Peter Levels flight simulator",
    "AI coding techniques",
    "vibe coding mind virus",
    "exponential thinking programming",
    "next generation AI IDEs",
    "Cursor Windsurf coding",
    "coding vs programming",
    "AI generated software",
    "future of programming 2025",
    "LLM coding techniques",
    "programming without coding",
    "successful vibe coding rules",
    "AI prompt engineering",
    "tech stack for AI coding",
    "version control for AI code",
    "product management for AI",
    "billion dollar vibe coding",
  ],

  category: "Software Development & AI",

  openGraph: {
    title: "Vibe Coding: The 2025 AI Revolution That's Breaking the Internet",
    description:
      "The Vibe Coding Mind Virus is changing everything about programming. Learn how developers are making millions, why some fail spectacularly, and the three critical rules for mastering this AI-powered approach in 2025.",
    url: "https://www.mergesociety.com/tech/vibe-coding",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg",
        width: 1200,
        height: 630,
        alt: "Visualization of Vibe Coding concept with AI assistance and exponential thinking in programming",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-09T09:00:00Z",
    modifiedTime: "2025-05-09T09:00:00Z",
    section: "Programming Trends",
    tags: [
      "Vibe Coding",
      "AI Programming",
      "Andrej Karpathy",
      "Peter Levels",
      "Programming Revolution",
      "LLM Coding",
      "Future of Development",
      "AI Tools",
      "Cursor IDE",
      "Windsurf IDE",
    ],
  },

  authors: [
    {
      name: "Taylor West",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society Tech Insights",

  alternates: {
    canonical: "https://www.mergesociety.com/tech/vibe-coding",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/vibe-coding",
      "es-ES": "https://www.mergesociety.com/tech/vibe-coding",
      "de-DE": "https://www.mergesociety.com/tech/vibe-coding",
      "fr-FR": "https://www.mergesociety.com/tech/vibe-coding",
      "ja-JP": "https://www.mergesociety.com/tech/vibe-coding",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding: The AI Mind Virus Transforming Programming in 2025",
    description:
      "Learn how 'coding on vibes' is making developers millions, why others fail spectacularly, and the 3 critical rules to master this new AI-powered approach.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg",
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
    contentType: "Analysis & Practical Guide",
    publishDate: "May 9, 2025",
    category: "Programming Trends",
    subcategory: "AI-Assisted Development",
    featured: true,
    series: "Future of Code 2025",
    complexity: "Intermediate",
    relatedArticles: [
      "Andrej Karpathy's Vision: Beyond Traditional Programming",
      "Million-Dollar AI Projects: How Indie Devs Are Striking Gold",
      "The Best AI IDEs of 2025: Cursor, Windsurf, and Beyond",
      "How 8-Year-Olds Are Coding Better Than Veterans",
      "The Anthropic CEO's Bold Prediction: AI Will Replace Programmers by 2026",
    ],
    visualAid: true,
    authorCredentials: "Senior Developer & AI Programming Consultant",
    keyTakeaways: [
      "Vibe Coding is revolutionizing development by prioritizing exponential thinking over syntax",
      "Indie developer Peter Levels made a fortune with a JS flight simulator built on 'vibes'",
      "The distinction between 'coding' (syntax) and 'programming' (judgment) is more critical than ever",
      "Three essential rules for successful Vibe Coding: tech stack selection, version control, and product management",
      "Anthropic's CEO predicts AI will orchestrate nearly all programming within a year",
      "Even with AI assistance, deep programming expertise remains crucial for complex projects",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Vibe Coding: The 2025 AI Revolution Changing How We Program",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg",
    datePublished: "2025-05-09T09:00:00Z",
    dateModified: "2025-05-09T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Taylor West",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Developer & AI Programming Consultant",
      description:
        "Specializing in AI-assisted development techniques and programming paradigm shifts",
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
      "Discover how the Vibe Coding Mind Virus is transforming programming in 2025. Learn about this breakthrough approach pioneered by Andrej Karpathy, its million-dollar successes, potential pitfalls, and how to make it work for your projects.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/vibe-coding",
    },
    keywords:
      "vibe coding, AI programming, Andrej Karpathy, Peter Levels, programming revolution, LLM coding",
    about: [
      {
        "@type": "Thing",
        name: "Vibe Coding",
      },
      {
        "@type": "Thing",
        name: "AI Programming",
      },
      {
        "@type": "Thing",
        name: "Software Development",
      },
    ],
    isAccessibleForFree: "True",
    educationalUse: "Professional Development",
    proficiencyLevel: "Intermediate",
    articleSection: "Programming Trends",
    wordCount: 1300,
  },

  // Enhanced semantic metadata
  semantic: {
    contentTags: [
      "vibe coding methodology",
      "AI coding limitations",
      "exponential thinking approach",
      "coding vs programming distinction",
      "AI prompt engineering skills",
      "version control importance",
      "tech stack selection",
      "product manager mindset",
      "Andrej Karpathy innovations",
      "indie developer success stories",
    ],
    primaryTopic: "AI-Assisted Programming Techniques",
    conceptualDifficulty: "Accessible with Technical Depth",
    targetAudience: [
      "software developers",
      "indie hackers",
      "programming students",
      "tech entrepreneurs",
      "AI enthusiasts",
      "javascript developers",
      "tech managers",
      "computer science educators",
      "AI researchers",
      "coding bootcamp students",
    ],
    visualContent: true,
    comprehensiveness:
      "covers concept, real-world examples, limitations, and best practices",
    freshness: "new programming paradigm of 2025",
    evergreen: {
      value: false,
      updateSchedule: "monthly industry monitoring",
    },
    depthLevel: "practical guide with cautionary analysis",
    contentFormat: "trend analysis with actionable advice",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Programming Trends",
    pageType: "Technology Analysis",
    contentPillar: "AI-Assisted Development",
    contentCluster: "Future Programming Methods",
    expectedReadTime: 480, // in seconds
    wordCount: 1300,
    technicalLevel: 3, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.85,
      expectedDiscussionTrigger: 0.92,
      socialSharePotential: "extremely high",
      conceptualComplexity: "medium-high",
      practicalApplicability: "immediate",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "understanding vibe coding concept",
      "learning AI programming techniques",
      "exploring modern development methods",
      "following programming trends",
      "improving AI-assisted development workflow",
    ],
    secondary: [
      "evaluating AI coding risks",
      "learning from successful AI projects",
      "comparing AI programming tools",
      "understanding LLM coding capabilities",
      "future-proofing development skills",
    ],
    painPoints: [
      "fear of AI replacing programmers",
      "confusion about AI coding limitations",
      "struggles with AI prompt engineering",
      "security concerns with AI-generated code",
      "uncertainty about required skills for future",
      "balancing speed vs. quality in development",
    ],
    searchQueries: [
      "what is vibe coding Andrej Karpathy",
      "can AI replace programmers 2025",
      "vibe coding examples success stories",
      "Peter Levels flight simulator JavaScript",
      "best tech stack for AI coding",
      "how to use AI for programming effectively",
      "vibe coding mind virus explained",
      "AI coding security risks",
      "coding vs programming difference",
      "will AI replace developers by 2026",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "insider analysis of the vibe coding phenomenon with practical rules for success",
    expertiseLevel:
      "developer with hands-on experience in AI-assisted programming methods",
    actionableInsights:
      "concrete rules and strategies for effective AI-assisted development",
    biasAwareness:
      "balanced perspective on both opportunities and significant risks",
    comprehensiveToSuccinct:
      "covers emerging trend, real examples, best practices, and future outlook",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "organic search",
      "developer subreddits",
      "programming discord servers",
      "hacker news",
      "indie hacker communities",
    ],
    promotionStrategy: "early analysis of trending programming phenomenon",
    syndicationPartners: [
      "coding newsletters",
      "developer education platforms",
      "startup incubators",
      "AI research blogs",
    ],
    emailCampaignSegment: "developers and tech entrepreneurs",
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy:
      "asking readers to share their vibe coding experiments and outcomes",
    conversationStarters: [
      "Have you tried vibe coding yet? Share your experiences below!",
      "What tech stack do you find works best with AI coding assistants?",
      "Do you think most programming will be AI-assisted by 2026?",
      "What's your best tip for working effectively with AI coding tools?",
    ],
    communityContribution:
      "encouraging shared code examples and project outcomes",
    expertFollowup: "weekly updates on vibe coding techniques and tools",
  },

  // Expert credibility signals
  expertCredibility: {
    authorExpertise: {
      background: "professional development and AI tool integration",
      experience: "early adopter of LLM-assisted coding methods",
      projects:
        "successfully built production applications using AI assistance",
      specializations:
        "JavaScript ecosystems, prompt engineering, AI workflow optimization",
    },
    researchMethodology: "firsthand testing and industry case study analysis",
    dataBackedClaims: true,
    transparentLimitations:
      "clearly identifies where AI-assisted methods fall short",
  },

  // Technology trend alignment
  trendAlignment: {
    emergingTechnologies: {
      aiCodingAssistants: "comprehensive coverage",
      promptEngineering: "practical applications explained",
      nextGenIDEs: "Cursor and Windsurf highlighted",
      llmIntegration: "workflow integration described",
      toolingEvolution: "current and future state analyzed",
    },
    industryShifts: {
      developerRoleEvolution:
        "changing focus from syntax to problem decomposition",
      skillsetTransformation: "product management skills becoming essential",
      workflowRevolution: "AI-first development processes",
      productivityParadigms: "exponential output potential and limitations",
    },
    futureOutlook:
      "analysis of likely billion-dollar outcomes and potential pitfalls",
  },

  // Content componentization
  contentComponentization: {
    modularity:
      "divided into concept, cautionary tale, core principles, and practical rules",
    snippetOptimization: {
      explanations: true,
      stories: true,
      rules: true,
      comparisons: true,
      predictions: true,
      examples: true,
    },
    voiceSearchOptimized: {
      naturalLanguageQueries: [
        "what is vibe coding and how does it work",
        "who invented vibe coding programming technique",
        "how to succeed with AI programming tools",
        "will artificial intelligence replace human programmers",
        "what's the difference between coding and programming",
      ],
    },
    multiDevicePresentation:
      "scannable content structure with highlighted key points",
  },

  // Accessibility and readability
  accessibility: {
    readingLevel:
      "accessible to coding enthusiasts with various experience levels",
    jargonExplanation: "technical concepts explained in context",
    alternativeFormats: [
      "rules and principles lists",
      "real-world example stories",
      "conceptual explanations",
      "cautionary tales",
      "practical recommendations",
    ],
    languageClarity:
      "balances technical accuracy with engaging, approachable language",
  },

  // Modern discovery features
  discovery: {
    aiSearchOptimization: true,
    entityMapping: {
      people: ["Andrej Karpathy", "Peter Levels", "Anthropic CEO"],
      concepts: [
        "vibe coding",
        "exponential thinking",
        "coding vs programming",
        "AI-assisted development",
        "prompt engineering",
      ],
      products: ["Cursor IDE", "Windsurf IDE", "V0", "Bolt", "Claude Code"],
      technologies: [
        "large language models",
        "React",
        "Express",
        "Tailwind",
        "Redis",
        "Deno",
        "Svelte",
        "Vue.js",
        "Nuxt",
      ],
    },
    semanticRelations: [
      {
        entity: "Andrej Karpathy",
        relation: "invented",
        target: "Vibe Coding Mind Virus",
      },
      {
        entity: "Peter Levels",
        relation: "created",
        target: "JavaScript flight simulator",
      },
      {
        entity: "Vibe Coding",
        relation: "requires",
        target: "version control discipline",
      },
      {
        entity: "Anthropic CEO",
        relation: "predicted",
        target: "AI will orchestrate all programming",
      },
    ],
    queryUnderstanding: {
      synonyms: {
        "Vibe Coding": [
          "AI programming",
          "exponential coding",
          "intuitive development",
          "mindless coding",
        ],
        "AI coding tools": [
          "LLM coding assistants",
          "AI programming assistants",
          "code generation tools",
        ],
        "programming revolution": [
          "development paradigm shift",
          "coding transformation",
          "software engineering evolution",
        ],
        "version control": [
          "git workflows",
          "code versioning",
          "change management",
        ],
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
          Vibe Coding: The AI Revolution That's Changing Programming (and
          Breaking the Internet)
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg"
          }
          alt="Visualization of Vibe Coding concept with AI assistance and exponential thinking in programming"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-9">
            | May 9, 2025
          </time>
        </h2>

        <p>
          In March 2025, the world of programming was upended by a phenomenon
          known only as the <strong>Vibe Coding Mind Virus</strong>. If you
          haven’t heard of it yet, consider this your primer before you, too,
          are swept away in the digital whirlwind. Invented (or, perhaps more
          accurately, unleashed) by former OpenAI maestro Andrej Karpathy, the
          notion of Vibe coding is simple: surrender yourself fully to the{" "}
          <em>vibes</em>, embrace exponential thinking, and let the very idea of
          the underlying code dissolve from your conscious awareness.
        </p>

        <p>
          This almost zen approach to development has ignited a frenzy online.
          Influencers, indie hackers, and every self respecting JavaScript
          jockey on the planet are now marching in the well worn footsteps of
          legendary indie developer <strong>Peter Levels</strong>. Levels, in a
          feat of both inspiration and reckless abandon, Vibe coded a “crappy
          real time flight simulator MMO” entirely in JavaScript. Not content
          with just launching a buggy but ambitious game, he cleverly leveraged
          his massive Twitter following to sell in game advertising and,
          naturally, made a fortune. Say what you will about the tech bro
          archetype, but sometimes the pure audacity just demands respect.
        </p>

        <p>
          The catch? Suddenly, the internet is overflowing with hastily Vibe
          coded games and an ever growing mountain of AI generated digital slop.
          According to the CEO of Anthropic, this tidal wave is just the
          beginning. He predicts that, within a single year, nearly all
          programming will be orchestrated by artificial intelligence. Are we
          doomed to a future of low effort clones and software bloat? Or can we
          ride the Vibe wave to true innovation?
        </p>

        <section>
          <h2>When Vibe Coding Goes Wrong: A Cautionary Tale</h2>
          <p>
            Let’s take a look at the dangers of Vibe coding without a safety
            net. One brave soul on the web managed to Vibe code an entire SaaS
            product, even achieving that mythical milestone: paying customers.
            For any indie developer, this is akin to slaying the dragon.
            However, in true internet fashion, this success brought unwanted
            attention. Trolls descended in droves, exploiting every security
            flaw. They maxed out API keys, bypassed subscription gates, and
            littered the database with nonsense chaos in digital form.
          </p>
          <p>
            The developer, in a desperate postmortem, confessed: “Random things
            are happening. Maxed out usage on API keys. People bypassing the
            subscription. Creating random stuff in db. This is taking me longer
            than usual to figure out.” The relentless barrage ultimately forced
            their app offline, leaving them to “beg for their job back at
            Popeyes.” A hard lesson in the dangers of coding on vibes alone.
          </p>
        </section>

        <section>
          <h2>The Art and Science of (Real) Programming</h2>
          <p>
            This raises a central distinction:{" "}
            <strong>Coding is not Programming.</strong> Coding is the technical
            skill of writing instructions that a computer can execute. For
            decades, the best coders were those who could rattle off perfect C
            or JavaScript at blistering speeds, their hands a blur in VIM, their
            minds packed with arcane syntax.
          </p>
          <p>
            But with the rise of large language models (LLMs), the game is
            changing. An eight year old with a knack for AI prompting can now
            “write” code faster than a grizzled veteran. Is coding dead? Not
            quite. But the true art of programming the domain of ingenuity,
            imagination, and seasoned judgment remains as vital as ever.
          </p>
          <p>
            The best programmers often spend most of their time{" "}
            <em>removing</em> code, not adding it. They understand that building
            robust software is about restraint, clarity, and deep understanding.
            If you don’t grok the code you’re “vibing” out, you won’t get very
            far. This is programming as a creative discipline, a blend of
            sculpture and science. Trust us: even the Vibiest coder can’t fake
            their way past this reality.
          </p>
        </section>

        <section>
          <h2>Can Vibe Coding Actually Work? The Billion Dollar Question</h2>
          <p>
            When done properly, Vibe coding can win big. It’s only a matter of
            time before we see a billion dollar enterprise running purely on
            vibes, powered by lightning fast tools like V0 or Bolt, and next
            generation AI powered IDEs like Cursor and Windsurf. But how can you
            maximize your Vibe while minimizing disasters?
          </p>
          <h3>The Three Immutable Rules of Successful Vibe Coding</h3>
          <ol>
            <li>
              <strong>Choose a Popular, Simple Tech Stack.</strong> For web
              development, React, Express, Tailwind, Redis, and Deno are tried
              and true combinations. LLMs excel at replicating solutions already
              documented on GitHub and Stack Overflow. Even if you’re tired of
              React, resist the urge to get experimental with every new
              framework unless you’re willing for your Vibes to get crushed.
              (Okay, full disclosure: the author prefers Svelte and has found
              surprising harmony with Vue.js and Nuxt. In other words, this rule
              is bendable for those willing to experiment.)
            </li>
            <li>
              <strong>Master Version Control GIT or Bust!</strong> When AI
              steers your codebase, it can (and will) overwrite or delete your
              working code in an instant. If you haven’t practiced diligent
              version control, trying to resurrect your lost progress from
              memory or magic prompts is a fool’s errand. Utilizing git is the
              lifeline of the professional coder. Even better, pair it with
              tools like Claude Code to automate your “Vibe commits,” or, if
              you’re old school, take the author’s full git course to master it
              by hand.
            </li>
            <li>
              <strong>Become a Product Manager for Your AI.</strong> You are no
              longer <em>just</em> a coder. Your new job is to break down
              complex problems into bite sized, clearly defined requirements.
              Provide all the context documentation, UI images, detailed specs
              to ensure your AI operates with precision. You want determinism,
              not creativity; leave the artsy stuff for human brains. Not to
              sound like a Vibe killer, but sloppiness here is the short path to
              chaos.
            </li>
          </ol>
        </section>

        <section>
          <h2>The Limitations of Vibes Alone (And the Secret Ingredient)</h2>
          <p>
            Even with all this automation, letting Vibes steer your project
            uncritically is a recipe for disaster. Consider the Levels Flight
            Simulator: it may have gone viral, but it was riddled with problems.
            Its survival was only possible because of the developer’s deep well
            of experience and problem solving chops. The lesson? Even the best
            tools and the wildest vibes need a foundation of real skill and
            critical thinking.
          </p>
        </section>

        <footer>
          <p>
            This has been <strong>The Code Report</strong>. Thanks for reading
            and remember, whether you're coding on vibes or building something
            bulletproof, the future is here, and it's weirdly wonderful. See you
            in the next one!
          </p>
          <h2>Recommended Articles</h2>
          <Section3 />
        </footer>
      </article>
    </div>
  );
}

const Section3 = () => {
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
      id: 19,
      title:
        "What It's Really Like to Study Computer Science: Reality of CS Majors",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg",
      alt: "What It's Really Like to Study Computer Science: Reality of CS Majors",
      date: "May 3, 2025",
      articleRoute: "reality-of-cs",
    },
    {
      id: 20,
      title:
        "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746266414/aws_lg2upw.webp",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "50-top-aws",
    },
    {
      id: 21,
      title:
        "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746267358/growtika-Am6pBe2FpJw-unsplash_iwabef.jpg",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "cloud-service",
    },
    {
      id: 22,
      title: "Docker 101: Mastering Modern Software Delivery with Containers",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746270617/rubaitul-azad-HSACbYjZsqQ-unsplash_okwrat.jpg",
      alt: "Docker 101: Mastering Modern Software Delivery with Containers",
      date: "May 3, 2025",
      articleRoute: "docker-explained",
    },
    {
      id: 23,
      title:
        "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746276011/freestocks-I_pOqP6kCOI-unsplash_ysz7vg.jpg",
      alt: "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      date: "May 3, 2025",
      articleRoute: "cs-major",
    },
    {
      id: 24,
      title:
        "Programming Myths That Waste Your Time: Debunking the Productivity Traps Every Coder Falls For",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg",
      alt: "Illustration showing a developer surrounded by programming myths and productivity traps",
      date: "May 8, 2025",
      articleRoute: "programming-myth",
    },
    {
      id: 25,
      title:
        "God-Tier Developer Roadmap: From Scratch to the Limits of Human Knowledge",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746694983/pexels-realtoughcandy-11035473_lzepvy.jpg",
      alt: "Programming language roadmap showing the progression from beginner to expert languages",
      date: "May 8, 2025",
      articleRoute: "developer-roadmaps",
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
    {
      id: 28,
      title:
        "The Ruby on Rails Explained: How This MVC Framework Powered the World’s Hottest Startups",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746772728/pexels-digitalbuggu-374559_yqicxw.jpg",
      alt: "Ruby on Rails framework diagram showing MVC architecture with code examples",
      date: "May 9, 2025",
      articleRoute: "ruby-explained",
    },
    {
      id: 29,
      title:
        "21 Powerful Chrome DevTools Tips Every Web Developer Should Be Using in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746774652/971_dx26ro.jpg",
      alt: "Chrome DevTools interface showing console and performance panels with visual debugging aids",
      date: "May 9, 2025",
      articleRoute: "21-devTools",
    },
    {
      id: 30,
      title:
        "15 Game Changing JavaScript Framework Features Every Developer Must Know in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746776022/7040859_sp09q7.jpg",
      alt: "JavaScript frameworks innovation landscape 2025 showing React, Next.js, Vue, and other modern frameworks",
      date: "May 9, 2025",
      articleRoute: "javascript-features",
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
