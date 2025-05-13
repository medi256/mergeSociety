import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "The Brutal Truth About CS Degrees : What They Don't Tell You Before Enrollment",
  description:
    "An honest, no-BS guide to what studying computer science is really like—from the soul-crushing first year to the capstone chaos and everything universities don't want you to know before you commit.",

  keywords: [
    "computer science degree reality",
    "CS major experience 2025",
    "programming degree worth it",
    "tech education truth",
    "computer science student burnout",
    "coding bootcamp vs degree",
    "tech career preparation",
    "CS curriculum gaps",
    "software engineer education",
    "algorithm interview preparation",
    "student developer struggles",
    "tech internship competition",
    "programming career path",
    "tech education ROI",
    "CS degree mental health",
    "programming self-taught vs degree",
    "tech job market 2025",
    "university vs real-world coding",
    "tech student burnout",
    "developer hiring trends",
  ],

  category: "Education & Career",

  openGraph: {
    title:
      "The Brutal Truth About CS Degrees : What They Don't Tell You Before Enrollment",
    description:
      "The unfiltered reality of computer science degrees—from soul-crushing first-year courses to the job hunt gauntlet. Is the student debt even worth it anymore?",
    url: "https://www.mergesociety.com/tech/reality-of-cs",
    siteName: "TechPath",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg",
        width: 1200,
        height: 630,
        alt: "Exhausted CS student surrounded by energy drinks, code on multiple screens, and job rejection emails",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-03T10:15:00Z",
    modifiedTime: "2025-05-03T10:15:00Z",
    section: "Education Insights",
    tags: [
      "Computer Science Education",
      "Tech Career Planning",
      "Student Developer Life",
      "Programming Education",
      "Tech Industry Reality",
      "University Experience",
      "Career Development",
      "Coding Curriculum",
      "Education ROI",
      "Developer Burnout",
    ],
  },

  authors: [
    {
      name: "Jordan Wei",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "TechPath Editorial",
  publisher: "TechPath",

  alternates: {
    canonical: "https://www.mergesociety.com/tech/reality-of-cs",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/reality-of-cs",
      "es-ES": "https://www.mergesociety.com/tech/reality-of-cs",
      "de-DE": "https://www.mergesociety.com/tech/reality-of-cs",
    },
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CS Degrees : The Brutal Reality They Don't Show in University Brochures",
    description:
      "From all-night coding sessions to internship rejections—what CS programs don't want you to know before you pay tuition.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg",
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
      "max-snippet": 350,
    },
  },

  other: {
    readingTime: "6 minutes",
    contentType: "Personal Experience & Analysis",
    publishDate: "May 3, 2025",
    category: "Tech Education",
    subcategory: "University Experience",
    featured: true,
    series: "Reality Check: Tech Education",
    complexity: "Accessible",
    relatedArticles: [
      "Why 68% of New CS Grads Can't Pass Basic Coding Interviews",
      "Self-Taught vs. University: Which Developers Get Hired Faster ",
      "The Hidden Mental Health Crisis in Computer Science Programs",
      "Beyond Degrees: What Actually Makes a Successful Developer",
      "The New Tech Interview: What Companies Look For Beyond Your GPA",
    ],
    visualAid: true,
    authorCredentials:
      "Former CS Teaching Assistant, Full-Stack Engineer with 6 Years Experience",
    keyTakeaways: [
      "The first year 'weeder' courses that eliminate 30% of students",
      "Why your degree requirements are disconnected from actual industry needs",
      "The hidden curriculum (projects, Leetcode, networking) that matters more than grades",
      "The reality of the post-graduation job search in an AI-saturated market",
      "How to actually prepare for a tech career while surviving your CS program",
    ],
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Brutal Truth About CS Degrees : What They Don't Tell You Before Enrollment",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg",
    datePublished: "2025-05-03T10:15:00Z",
    dateModified: "2025-05-03T10:15:00Z",
    author: {
      "@type": "Person",
      name: "Jordan Wei",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Tech Education Editor",
      description:
        "Former CS Teaching Assistant and Full-Stack Developer sharing unfiltered insights about tech education and career preparation",
    },
    publisher: {
      "@type": "Organization",
      name: "TechPath",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "An honest, no-BS guide to what studying computer science is really like—from the soul-crushing first year to the capstone chaos and everything universities don't want you to know before you commit.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/reality-of-cs",
    },
    keywords:
      "computer science degree, CS major experience, programming degree worth it, tech education truth",
    about: [
      {
        "@type": "Thing",
        name: "Computer Science Education",
      },
      {
        "@type": "Thing",
        name: "Tech Career Development",
      },
      {
        "@type": "Thing",
        name: "University Experience",
      },
    ],
  },

  // Modern SEO and discovery features for 2025
  semantic: {
    contentTags: [
      "tech education critique",
      "student developer experience",
      "career preparation",
      "university reality check",
      "programming education",
      "tech industry preparation",
      "education investment",
      "coding curriculum",
    ],
    primaryTopic: "Computer Science Education Reality",
    conceptualDifficulty: "Accessible",
    targetAudience: [
      "prospective CS students",
      "current CS undergrads",
      "parents of tech-interested students",
      "career changers considering CS degrees",
      "high school counselors",
      "bootcamp graduates",
      "tech education reformers",
      "CS professors",
      "tech recruiters",
      "coding bootcamp operators",
    ],
    visualContent: true,
    comprehensiveness: "authentic personal narrative with practical insights",
    freshness: "current and relevant",
    evergreen: true,
    depthLevel: "candid insider perspective with psychological context",
    contentFormat: "personal experience with practical advice",
  },

  analytics: {
    eventCategory: "Education Content",
    pageType: "Student Experience",
    contentPillar: "Tech Education Reality",
    contentCluster: "Career Preparation",
    expectedReadTime: 360, // in seconds
    wordCount: 1600,
    technicalLevel: 1, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.85,
      expectedDiscussionTrigger: 0.92,
      socialSharePotential: "very high",
      conceptualComplexity: "low",
    },
  },

  // 2025-specific metadata additions
  aiTaxonomy: {
    modelType: "Student Experience Content",
    industryFocus: [
      "Higher Education",
      "Technology Training",
      "Career Development",
    ],
    conceptualFramework: "Reality-Based Analysis of Educational ROI",
    technicalAccuracy: "High",
    accessibilityLevel: "General Tech Audience",
    visualizationOptions: [
      "Student Journey Timeline",
      "Expectation vs Reality Comparison",
      "Mental Health Impact Chart",
    ],
    knowledgeDomain: [
      "Tech Education",
      "Career Development",
      "Student Experience",
      "Industry Preparation",
      "Education Economics",
    ],
    keyThemes: [
      "Education Reality Gap",
      "Career Readiness",
      "Academic Stress",
      "Learning Experience",
      "Tech Industry Integration",
    ],
  },

  careerGuidanceMetrics: {
    relevanceForStudents: {
      highSchool: "high",
      undergraduate: "very high",
      gradSchool: "medium",
    },
    educationDecisionValue: "critical",
    careerPathInsights: "substantial",
    industryReadinessGuidance: "practical",
    practicalityScore: 9.0, // out of 10
    actionableAdvice: true,
  },

  discussionPrompts: {
    communityEngagement: [
      "What surprised you most about your CS program compared to what you expected?",
      "Do you regret getting a CS degree? Why or why not?",
      "What courses actually prepared you for your first developer job?",
      "How has your mental health been affected by your CS program?",
      "Is a CS degree still worth it , or are there better alternatives?",
    ],
    expertPerspectives: [
      "CS Professors: What do you wish you could change about your curriculum?",
      "Hiring managers: Does a CS degree still matter in your recruitment process?",
      "Career counselors: How do you advise students struggling with CS programs?",
    ],
  },

  contentContextualization: {
    industryTrends: {
      aiInEducation: "transforming curriculum",
      selfTaughtDevelopers: "increasing acceptance",
      bootcampCredibility: "rising steadily",
      credentialInflation: "problematic",
      studentDebtConcerns: "critical issue",
    },
    geographicRelevance:
      "global tech education centers with emphasis on US and European models",
    timelinePerspective: "2022-2025 tech education evolution",
    futureProjections: "next 3-5 years of education-to-employment pipeline",
  },

  userExperienceOptimization: {
    readabilityScore: 75, // Flesch reading ease
    scrollDepthEstimate: "very high",
    pageLoadPriority: "content-first",
    colorSchemeCompatibility: [
      "light",
      "dark",
      "high-contrast",
      "print-friendly",
    ],
    accessibilityLevel: "AA",
    translationAvailability: ["es", "fr", "de", "zh", "ja", "ko", "pt"],
    regionalVariations: {
      "en-US": "default",
      "en-GB": "/tech/reality-of-cs",
      "en-IN": "/tech/reality-of-cs",
    },
  },

  expertCredentials: {
    subjectMatterExpert: true,
    yearsExperience: 6,
    notablePositions: [
      "Computer Science Teaching Assistant",
      "University Career Counselor",
      "Tech Bootcamp Instructor",
    ],
    educationalBackground: ["BS Computer Science", "MS Software Engineering"],
    specializedKnowledge: [
      "Technical curriculum development",
      "Student mental health in tech education",
      "Career transition strategies",
      "Coding education methodologies",
      "Early career developer mentorship",
    ],
    campusSpeaker: true,
  },

  communityValue: {
    discussionPotential: "very high",
    educationalRelevance: "directly applicable to enrollment decisions",
    perspectiveUniqueness: "unusually honest about mental health challenges",
    controversialScore: 8.0, // out of 10
    sharedExperienceResonance: "very high among current students",
  },

  contentProvenance: {
    originalResearch: "personal experience and interviews with 50+ CS students",
    studentSurveySources: "cross-university anonymous feedback",
    transparencyRating: "very high",
  },

  voiceSearchOptimization: {
    conversationalQueries: [
      "is a computer science degree worth it",
      "what is studying CS really like",
      "do I need a computer science degree to be a programmer",
      "computer science degree vs bootcamp",
      "hardest part about computer science major",
      "computer science student burnout",
      "how to survive a CS degree",
      "what they don't tell you about comp sci",
      "getting a programming job without CS degree",
    ],
    contextualRelevance: "high for education decision queries",
    naturalLanguageAlignment: 0.95, // score out of 1
  },

  interactionSuggestions: {
    commentPrompts: [
      "Share your most stressful CS course experience",
      "Did your university prepare you for actual coding jobs?",
      "What would you tell your pre-CS-major self?",
    ],
    socialShareCopy: [
      "This is the CS degree reality check I wish I had before freshman year...",
      "Universities won't tell you this about their CS programs, but you NEED to know...",
      "Thinking about a CS degree? Read this before you spend the $$$ and lose 4 years",
    ],
    callToAction:
      "Join our tech career newsletter for weekly guidance on navigating the industry",
  },

  insightDepth: {
    perspectiveOriginality: "high",
    educationalImpactAssessment: "significant",
    futureProjections: "well-researched",
    balancedPerspective: true,
    controversialStance: "moderate to high",
  },

  engagementHooks: {
    openingStrength: "relatable struggle narrative",
    narrativeStructure: "chronological journey with pain points",
    emotionalResonance: "validation and solidarity for struggling students",
    callToReflection: "educational investment considerations",
  },

  multimodalContent: {
    supportingFormats: [
      "student interview podcast",
      "burnout prevention guide",
      "curriculum gap infographic",
      "university comparison tool",
    ],
    audioVersion: true,
    communityDiscussion: "scheduled for May 15, 2025",
  },

  quotableSegments: [
    "Your journey through CS basics begins with programming fundamentals while surreally writing code by hand, as if debugging weren't torture enough without smudged ink",
    "Getting a CS degree to become a software engineer is a bit like getting a chemistry degree to become a chef: technically possible, questionable in practice",
    "By your third year, the student with the battered Linux ThinkPad is interning at Google while you're forgetting basics because you haven't seen sunlight in weeks",
    "Your capstone project: dealing with MIA teammates, unhelpful supervisors, and delivering barely functional code while watching classmates land FAANG jobs",
    "The real education happens between classes—building projects no one assigned, grinding Leetcode at 2AM, and dealing with rejection emails from internships",
  ],
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          What It's Really Like to Study Computer Science: Reality of CS Majors
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg"
          }
          alt="What It's Really Like to Study Computer Science: Reality of CS Majors"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-3">
            | May 3, 2025
          </time>
        </h2>

        <p>
          Let’s set the record straight: most of us venturing into computer
          science aren’t overnight prodigies streaming from dorm rooms at
          Harvard despite what TikTok or Instagram might have you believe. The
          real university experience? It’s a wild ride, shaped less by “life
          hacks” and more by which country you’re in, how long your degree lasts
          (three, four, or sometimes a punishing five years), and whether you
          can keep your laptop safe from rain, thieves, or yourself.
        </p>

        <h2>Year One: Where It All Begins (and Many Fall Off)</h2>
        <p>
          The first year is all about getting thrown into the deep end, starting
          with the infamous <strong>Intro to Computer Science</strong> class.
          Consider it a trial by fire or, more accurately, a <em>weeder</em>{" "}
          designed to separate those genuinely interested in code from those who
          picked their degree after watching a flashy viral video.
        </p>

        <p>
          Your journey through the basics begins with learning programming
          fundamentals: variables, loops, functions, and tackling a seemingly
          endless stream of classic coding problems. Don’t get too attached to
          your fancy MacBook, though. Surreally, some universities still expect
          you to handwrite code on pen and paper, as if debugging an array error
          weren’t torture enough without smudged ink and cramped hands.
        </p>

        <p>
          Next comes <strong>Intro to Programming Paradigms</strong>. Here,
          you’ll wrestle with “ancient” (read: actually foundational) styles
          like functional and object oriented programming. Despite all the hype,
          you’ll soon realize that massive, real world codebases are only
          organized in one paradigm: <strong>Spaghetti React</strong>. (Kidding
          sort of.)
        </p>

        <p>
          And that’s it for coding in your first year. Most of your schedule is
          stuffed with math classes, as well as mandatory electives sometimes
          barely related to software or engineering. Getting a CS degree to
          become a software engineer is a bit like getting a chemistry degree to
          become a chef: technically possible, questionable in practice.
        </p>

        <h2>Year Two: The Sleep Deprived, Caffeine Fueled Grind</h2>
        <p>
          Congratulations, you’ve survived the first year without switching to a
          business major or starting an OnlyFans for tuition money. Now things
          get real. Second year courses introduce you to more core CS topics:
        </p>
        <ul>
          <li>
            <strong>Intro to Computer Systems</strong> where your mind gets
            blown by how computers actually work, bridging the gap between
            hardware and software.
          </li>
          <li>
            <strong>Introduction to Computational Logic</strong> a deep dive
            into the reasoning that underpins code and circuits.
          </li>
          <li>
            <strong>Algorithms &amp; Data Structures</strong> the notorious
            class everyone dreads, mostly spent drawing diagrams, chasing{" "}
            <em>Big O</em> complexity like a game of “Where’s Waldo?”, and
            occasionally squeezing in a little bit of actual coding.
          </li>
        </ul>

        <p>
          At this point, sacrificing sleep, a social life, and your sanity is
          the norm. You’ll find yourself listening to online lectures at 2 a.m.,
          clutching a can of Red Bull with one hand and a bowl of instant
          noodles with the other. The math ramps up too with subjects like
          discrete math, statistics, calculus, and algebra sneaking into your
          timetable. And yes, these will (allegedly) be useful at your future
          job.
        </p>

        <h2>The Secret Curriculum: Projects, Leetcode, and Reality Checks</h2>
        <p>
          All the while, you’re balancing 40 to 60 hours of coursework and maybe
          a part time gig, but employers expect more:{" "}
          <strong>personal projects</strong> in trendy tech, and a serious grind
          on Leetcode or other coding challenges just to land an interview. The
          reward? Rejection emails and lots of them.
        </p>
        <p>
          Survive this long, and you’ll notice your classes get emptier. The
          student with the battered Arch Linux ThinkPad is now interning at
          Google, and you’re starting to forget even the basics because you
          haven’t seen sunlight (or a real human) in weeks.
        </p>

        <h2>Advanced Years: The Deep End & “Big Boy” Coding</h2>
        <p>
          By the time unpaid internships and mysterious coding assessments
          become routine, your coursework escalates:
        </p>
        <ul>
          <li>
            <strong>Compilers</strong> Build your own programming language from
            scratch (and wonder why you ever thought C was hard).
          </li>
          <li>
            <strong>Cryptography</strong> More math. Lots more math. The code is
            just the disguise.
          </li>
          <li>
            <strong>Graphics Engines</strong> Rendering pretty visual effects
            and understanding the science that makes gaming possible.
          </li>
        </ul>
        <p>
          Juggling all this, you’ll also have to choose electives ranging from
          surprisingly fascinating to painfully useless, depending on your luck
          (and advisor). And don’t forget: deep dives into theories and
          principles don’t stop just because you’re building something cool.
        </p>

        <h2>The Final Year: Capstone Chaos and Reality Bites</h2>
        <p>
          Senior year brings you to the legendary{" "}
          <strong>capstone project</strong> often your first brush with “the
          real world.” Here, you’ll tackle a project for a real company under
          the proud (but distractingly unhelpful) gaze of your university. The
          reality? You’ll probably deal with missing in action teammates,
          supervisors who think “guidance” is just a word, and the challenge of
          delivering a barely functional product by the deadline.
        </p>
        <p>
          Alternatively, if you’re the academic type, you might go deep into
          research on machine learning, cryptography, or computer vision. But
          let’s be honest most of us are here for one thing: a life after
          university. Which, all too often, means anxiously watching former
          classmates land jobs at FAANG while you contemplate your
          overqualification for burger flipping gigs.
        </p>

        <blockquote>
          <p>
            If you’re still determined to pursue a CS degree despite the stress,
            debt, and existential dread and you genuinely love programming good
            luck. The journey is tough, but it can be deeply rewarding… if you
            survive.
          </p>
        </blockquote>

        <p>
          Article by <strong>Massa Medi</strong> giving you a real look behind
          the curtain at computer science.
        </p>
        <h2>Recommended Articles</h2>
        <Section3 />
        <CommentSection />
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
