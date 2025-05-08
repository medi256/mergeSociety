import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Programming Myths That Waste Your Time: Debunking Productivity Traps",
  description:
    "Discover 9 programming myths that secretly waste your time and harm productivity. Learn which practices actually matter and which trendy tech you can safely ignore.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "programming myths 2025",
    "software development best practices",
    "coding productivity tips",
    "technology FOMO for developers",
    "clean code myths",
    "test coverage myths",
    "programmer productivity traps",
    "developer time wasters",
    "software engineering productivity",
    "coding best practices debunked",
    "programming career advice",
    "tech stack selection tips",
    "classic technologies vs new frameworks",
    "AI coding tools effectiveness",
    "problem solving in programming",
    "overengineering pitfalls",
    "functional vs OOP programming",
    "performance optimization myths",
    "programming skills that matter",
    "developer career longevity",
  ],

  category: "Software Development",

  openGraph: {
    title:
      "Programming Myths That Waste Your Time: 9 Productivity Traps Every Developer Falls For",
    description:
      "Stop wasting time on shiny new frameworks, perfect test coverage, and premature optimization. Learn which programming practices actually matter for career success.",
    url: "https://www.mergesociety.com/tech/programming-myth",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg",
        width: 1200,
        height: 630,
        alt: "Illustration showing a developer surrounded by programming myths and productivity traps",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-08T09:00:00Z",
    modifiedTime: "2025-05-08T09:00:00Z",
    section: "Development Insights",
    tags: [
      "Programming",
      "Software Development",
      "Productivity",
      "Career Advice",
      "Code Quality",
      "Technology Trends",
      "Developer Tools",
      "Best Practices",
      "Clean Code",
      "Tech Stack",
    ],
  },

  authors: [
    {
      name: "Medi",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society Blog",

  alternates: {
    canonical: "https://www.mergesociety.com/tech/programming-myth",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/programming-myth",
      "es-ES": "https://www.mergesociety.com/tech/programming-myth",
      "de-DE": "https://www.mergesociety.com/tech/programming-myth",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "9 Programming Myths That Secretly Kill Your Productivity",
    description:
      "Stop chasing the latest frameworks and obsessing over perfect code. Learn which development practices actually matter for shipping great software.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg",
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
    readingTime: "10 minutes",
    contentType: "Thought Leadership Article",
    publishDate: "May 8, 2025",
    category: "Software Development",
    subcategory: "Developer Productivity",
    featured: true,
    series: "Developer Career Insights",
    complexity: "All Levels",
    relatedArticles: [
      "Why Most Side Projects Fail and How to Succeed",
      "The Experienced Developer's Guide to Learning New Technologies",
      "Balancing Code Quality and Delivery Speed",
      "Career Longevity in Software Engineering",
      "Practical Problem Solving for Software Developers",
    ],
    visualAid: true,
    authorCredentials: "Senior Software Engineer with 15+ years experience",
    keyTakeaways: [
      "Focus on timeless coding principles over trendy frameworks",
      "Avoid over-engineering and premature abstraction",
      "Test strategically rather than chasing coverage metrics",
      "Use AI coding tools responsibly to augment your skills",
      "Master fundamental computer science concepts for long-term success",
      "Prioritize building working software over perfect infrastructure",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Programming Myths That Waste Your Time: Debunking the Productivity Traps Every Coder Falls For",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg",
    datePublished: "2025-05-08T09:00:00Z",
    dateModified: "2025-05-08T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Medi",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Software Engineer",
      description:
        "Experienced developer focused on practical software engineering and developer productivity",
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
      "Discover 9 programming myths that secretly waste your time and harm productivity. Learn which practices actually matter and which trendy tech you can safely ignore.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/programming-myth",
    },
    keywords:
      "programming myths, software development, productivity, clean code, test coverage, performance optimization",
    about: [
      {
        "@type": "Thing",
        name: "Software Development",
      },
      {
        "@type": "Thing",
        name: "Programming Best Practices",
      },
      {
        "@type": "Thing",
        name: "Developer Productivity",
      },
    ],
    isAccessibleForFree: "True",
    educationalUse: "Professional Development",
    proficiencyLevel: "All Levels",
    articleSection: "Software Development",
    wordCount: 1500,
  },

  // Enhanced semantic metadata
  semantic: {
    contentTags: [
      "programming career advice",
      "software engineering best practices",
      "tech stack selection",
      "clean code principles",
      "test driven development",
      "functional vs OOP programming",
      "overengineering risks",
      "AI coding tools",
      "developer productivity tips",
      "practical problem solving",
    ],
    primaryTopic: "Developer Productivity and Career Success",
    conceptualDifficulty: "Accessible to all developer experience levels",
    targetAudience: [
      "software developers",
      "web developers",
      "programming students",
      "tech leads",
      "engineering managers",
      "career switchers",
      "self-taught programmers",
      "bootcamp graduates",
      "computer science students",
      "technical recruiters",
    ],
    visualContent: true,
    comprehensiveness:
      "covers common productivity myths and practical alternatives",
    freshness:
      "includes latest references to AI coding tools and current framework trends (May 2025)",
    evergreen: {
      value: true,
      updateSchedule: "annual review",
    },
    depthLevel: "balanced practical and conceptual insights",
    contentFormat:
      "myth-busting format with real-world examples and actionable advice",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Developer Career Articles",
    pageType: "Thought Leadership",
    contentPillar: "Developer Productivity",
    contentCluster: "Programming Career Advice",
    expectedReadTime: 600, // in seconds
    wordCount: 1500,
    technicalLevel: 2, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.88,
      expectedDiscussionTrigger: 0.8,
      socialSharePotential: "high",
      conceptualComplexity: "medium",
      practicalApplicability: "very high",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "improving coding productivity",
      "avoiding wasted development time",
      "focusing on effective programming practices",
      "understanding what matters in programming careers",
      "separating hype from value in tech",
    ],
    secondary: [
      "evaluating clean code practices",
      "testing strategies beyond coverage",
      "choosing technology stacks wisely",
      "using AI coding tools effectively",
      "building fundamentals vs learning frameworks",
    ],
    painPoints: [
      "technology FOMO (fear of missing out)",
      "wasted time on unproductive practices",
      "analysis paralysis when choosing tech",
      "career uncertainty in rapidly changing field",
      "over-engineering leading to project delays",
      "balancing code quality with delivery speed",
    ],
    searchQueries: [
      "programming practices that waste time",
      "do I need to learn the latest framework",
      "is clean code always worth it",
      "when is test coverage too much",
      "will AI replace programmers",
      "best programming skills for long career",
      "avoid overengineering in software development",
      "programming skills that matter most",
      "is functional programming better than OOP",
      "how to stay relevant as a programmer",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "Honest, experience-based assessment of productivity myths that challenge conventional wisdom",
    expertiseLevel:
      "senior developer with hands-on experience across multiple domains",
    actionableInsights:
      "practical alternatives to common time-wasting practices",
    biasAwareness:
      "balanced view acknowledging both traditional and modern approaches",
    comprehensiveToSuccinct:
      "clear myth-based structure with practical takeaways",
  },

  // Business alignment
  businessAlignment: {
    conversionGoal: "newsletter signups and consulting inquiries",
    audienceSegment: "practicing developers and technical decision makers",
    customerJourneyStage: "awareness and consideration",
    contentROIMetrics: [
      "developer newsletter signups",
      "social media shares",
      "backlinks from tech publications",
      "consultation requests",
    ],
    competitivePositioning: "contrarian perspective challenging industry dogma",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "organic search",
      "developer communities",
      "programming forums",
      "tech newsletters",
      "programming subreddits",
    ],
    promotionStrategy: "provocative headline with shareable key insights",
    syndicationPartners: [
      "developer blogs",
      "programming newsletters",
      "tech podcasts",
      "coding bootcamps",
    ],
    emailCampaignSegment: "developers across all experience levels",
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy: "asking readers to share their own productivity traps",
    conversationStarters: [
      "What programming 'best practice' have you found to be overrated?",
      "Which productivity myth cost you the most time in your career?",
      "How do you balance clean code with shipping features?",
      "What classic technology skills have served you best over time?",
    ],
    communityContribution:
      "encouraging readers to share their own myth-busting experiences",
    expertFollowup: "author responses to thought-provoking comments",
  },

  // Conversion optimization
  conversionOptimization: {
    primaryCTA: "Subscribe to our Developer Insights Newsletter",
    secondaryCTA: "Download our Developer Productivity Checklist",
    contentUpgrades: [
      "Programming Career Longevity Guide",
      "Technology Evaluation Framework",
      "Strategic Testing Approach Template",
      "Problem-Solving Skills Assessment",
    ],
    leadMagnetOffering: "Developer Career Planning Toolkit",
  },

  // Expert credibility signals
  expertCredibility: {
    authorExpertise: {
      yearsExperience: "15+",
      domainsWorked: "web, mobile, enterprise, startups",
      specializations: "developer productivity, tech leadership, mentoring",
    },
    researchMethodology:
      "based on experience across multiple tech stacks and team sizes",
    dataBackedClaims: true,
    transparentLimitations:
      "acknowledges context-dependent exceptions to each myth",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Programming Myths That Waste Your Time: Debunking the Productivity
          Traps Every Coder Falls For
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg"
          }
          alt="Illustration showing a developer surrounded by programming myths and productivity traps"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-8">
            | May 8, 2025
          </time>
        </h2>
        <p>
          <strong>Have you ever had a midlife crisis?</strong> Well, recently I
          had a rather programming specific one. As I stared into the abyss of
          my GitHub repositories, a sinking realization dawned on me: most of my
          adult life has been spent writing code, and{" "}
          <strong>most of that code is, well… garbage.</strong> We're talking
          code that never saw the light of a production server. Code that was
          abandoned, refactored, or left to haunt the graveyard of side projects
          long since forgotten.
        </p>
        <p>
          As I reflected, a cold, hard truth emerged: many of the so called
          “best practices,” shiny new frameworks, and pixel perfect folder
          structures those things we obsess over as developers
          <strong>don’t even matter to the end user</strong>. Countless hours
          have been lost to chasing productivity dragons mythical beasts
          promising velocity and relevance, but in truth, leading nowhere.
        </p>
        <h2>9 Programming Myths You Should Stop Believing</h2>
        <p>
          In this article, we're going to debunk{" "}
          <strong>
            nine “smart ideas” that waste your time as a programmer
          </strong>
          . For each myth, we’ll dive into how it seduces you, why it’s a clever
          trap, and most importantly how to avoid repeating my painful mistakes.
        </p>
        <p>
          While this platform is all about keeping you up to date with the
          latest technology, here’s the surprising truth:{" "}
          <strong>
            you don’t always need the newest tech to be relevant or successful.
          </strong>
        </p>

        <h2>Myth 1: “You MUST Master the Latest Tech To Stay Hirable”</h2>
        <p>
          In reality, you might actually{" "}
          <strong>increase your employability</strong> by mastering so called
          “dinosaur” tech! Did you know WordPress and PHP still run most of the
          web? Java powers a lion’s share of the enterprise world, the majority
          of databases are SQL based, and low level systems run on good old C.
          These technologies are anything but obsolete.
        </p>
        <ul>
          <li>
            <strong>Classic Technologies:</strong> WordPress, PHP, Java, SQL, C
          </li>
          <li>
            <strong>“Shiny” Alternatives:</strong> Next.js, Kotlin, NoSQL
            databases, Rust
          </li>
        </ul>
        <p>
          The fear of missing out (FOMO) on bleeding edge tech can be
          overwhelming. But here’s the reality:{" "}
          <strong>
            most real world jobs aren’t rushing to migrate their robust systems
            to the latest JavaScript flavor of the month.
          </strong>{" "}
          Critical banking infrastructure still runs on COBOL and Java. Let that
          sink in these stacks aren’t going anywhere soon.
        </p>
        <h3>A Real World Cautionary Tale: The Fauna Database Fiasco</h3>
        <p>
          Remember when Twitter engineers hyped up a revolutionary new database
          called Fauna? It turned heads. I even made a video about it. Fauna was
          slick, fast, and the catch proprietary and VC funded. Like so many
          startups, it <strong>eventually shut down</strong>. And if you jumped
          on board early, you probably wish you had stuck with a boring but
          stable SQL database.
        </p>
        <p>
          <em>Lesson learned:</em>{" "}
          <strong>
            Adopting tech too early puts you at risk especially when the tech
            isn’t proven or open source. Let the dust settle before you overhaul
            your stack.
          </strong>
        </p>

        <h2>Myth 2: “There Is One ‘Right’ Way To Write Code”</h2>
        <p>
          Programming is an art as much as it is a science. But you wouldn’t
          know it from the <strong>Programming Cults</strong>: the Object
          Oriented Purists versus Functional Programming Extremists.
          (Confession: I’ve campaigned on both sides.) Each cult claims ONE TRUE
          WAY to structure code, and anything else is heresy.
        </p>
        <p>
          Here’s the thing: languages like JavaScript are{" "}
          <strong>multi paradigm</strong>. You can use functional patterns,
          object oriented styles, or any blend in between. For a while,
          especially around 2018, functional programming enjoyed a renaissance.
          Back then, if you used a “class” keyword, you risked being
          excommunicated from the web dev community. No mutable state! Higher
          order functions everywhere!
        </p>
        <p>
          Eventually, I realized moderation was key.{" "}
          <strong>
            Classes, for example, are incredibly useful in many scenarios.
          </strong>{" "}
          These days my code is a patchwork of patterns from both camps a rich
          tapestry, not a monolith.
        </p>

        <h2>Myth 3: “Perfect Clean Code Is All That Matters”</h2>
        <p>
          Clean Code, enshrined by Uncle Bob Martin’s legendary book, offers
          sage advice: Use meaningful names, keep functions small, enforce
          consistent formatting. But there’s a slippery slope overzealous
          pursuit of cleanliness often means bloated layers of abstractions,
          endless wrappers, and analysis paralysis.
        </p>
        <figure>
          <figcaption>
            <em>Paralysis by Analysis:</em> Instead of delivering features,
            you’re stuck endlessly moving code around, hunting for the “perfect”
            level of abstraction. Users don’t care how elegant your services are
            if they never ship.
          </figcaption>
        </figure>
        <h3>When DRY Becomes a Trap</h3>
        <p>
          The DRY principle (Don’t Repeat Yourself) sounds great, but taken too
          far, it leads to premature abstraction.{" "}
          <strong>It’s okay to repeat yourself a little.</strong> My advice:
          follow “RUG” <strong>Repeat Until Good</strong>. At first, duplicate
          code. Only refactor once the pain is real and recurring.
        </p>

        <h2>Myth 4: “100% Test Coverage Means Quality”</h2>
        <p>
          Test driven development, when used well, is powerful. But{" "}
          <strong>100% test coverage is a vanity metric</strong> that often
          misleads. High coverage can be achieved by writing pointless tests
          that only touch lines, not actual bugs.
        </p>
        <ul>
          <li>
            <strong>False Security:</strong> Coverage tools can mislead
            management into a false sense of safety.
          </li>
          <li>
            <strong>Hidden Costs:</strong> Writing and maintaining tests for
            every single trivial line slows down builds (and increases cloud CI
            costs).
          </li>
        </ul>
        <p>
          <strong>
            It’s the test quality, not quantity, that guards you from
            regressions.
          </strong>
        </p>

        <h2>Myth 5: “Performance Optimization Should Be Top Priority”</h2>
        <p>
          We all dream of code that runs at lightspeed. But{" "}
          <strong>
            focusing on performance before correctness is pointless
          </strong>
          . Unless you’re at the scale of Facebook or Google, benchmarking and
          optimizing every function is probably not worth your time.
        </p>
        <ul>
          <li>
            <strong>Build First, Optimize When Needed:</strong> Ensure code
            correctness. Only tune for speed when your production metrics make
            it painfully obvious.
          </li>
        </ul>

        <h2>Myth 6: “You Need Complex Infrastructure To Be Successful”</h2>
        <p>
          Back in the day, I believed my tiny web app needed a serverless,
          globally distributed microservice architecture complete with edge
          caching and global sharding. In reality?{" "}
          <strong>
            One moderately sized VPS server was more than enough for my five
            users
          </strong>
          .
        </p>
        <p>
          Don’t over engineer. Start simple, then scale when you actually have
          users demanding it.
        </p>

        <h2>Myth 7: “AI Will Replace All Developers Any Day Now”</h2>
        <p>
          AI powered tools like Claude Sonnet 3.7 and others are, frankly,
          astonishingly good at writing code. But there’s a dark side:{" "}
          <strong>over reliance on AI can make you less effective.</strong>{" "}
          These models tend to produce verbose, over complicated code. If you
          rely on them blindly, approving whatever they conjure, you might lose
          sight of the underlying logic or worse, forget how to code for
          yourself.
        </p>
        <p>
          Used wisely, AI is the greatest productivity booster of my career.
          Abused, it’s a spectacular time waster.
        </p>

        <h2>The Key: Build Strong Problem Solving Foundations</h2>
        <p>
          <strong>
            Code is useless if you don’t understand the underlying math and
            computer science.
          </strong>{" "}
          Want to truly future proof your career? Master the timeless
          principles: logic, data structures, algorithms, and computational
          thinking. Hands on, interactive learning (not just passively watching
          tutorials), will make all the difference.
        </p>
        <hr />
        <p>
          <strong>Thanks for reading!</strong> Take these myths with a grain of
          salt, keep building, and remember: don’t sweat perfect code or the
          latest tools. Build, learn, and evolve on your own terms. I wish you
          happy coding, fewer distractions, and absolutely no midlife
          programming crises.
        </p>
        <h2>Recommended Articles</h2>
        <Section3 />
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
      id: 25,
      title:
        "God-Tier Developer Roadmap: From Scratch to the Limits of Human Knowledge",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746694983/pexels-realtoughcandy-11035473_lzepvy.jpg",
      alt: "Programming language roadmap showing the progression from beginner to expert languages",
      date: "May 8, 2025",
      articleRoute: "developer-roadmaps",
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
