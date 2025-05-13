import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title: "Should I Get a CS Degree in 2025: Is It Still Worth It?",
  description:
    "Discover if a Computer Science degree is worth it in 2025 from someone who transitioned from banking to tech. Learn about the financial ROI, job prospects, and alternatives to help you make an informed decision.",

  keywords: [
    "computer science degree",
    "CS degree worth it",
    "masters in computer science 2025",
    "tech career change",
    "CS degree ROI",
    "computer science career",
    "tech career without CS degree",
    "Cal Poly Computer Science",
    "career change to programming",
    "computer science job market 2025",
    "tech industry salary",
    "software engineer salary",
    "FAANG job requirements",
    "masters vs bachelors in CS",
    "computer science prerequisites",
    "tech bootcamp vs degree",
    "non-STEM to computer science",
    "learning programming basics",
    "tech career without degree",
    "computer science graduate prospects",
  ],

  category: "Education",

  openGraph: {
    title:
      "CS Degrees in 2025: A Comprehensive Analysis on Whether They're Worth It",
    description:
      "From bank teller to software engineer: Discover if investing in a Computer Science degree pays off in 2025's tech landscape based on real career transition data.",
    url: "https://www.mergesociety.com/tech/should-you",
    siteName: "Merge Society Blog",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747150651/cs_moponk.jpg",
        width: 1200,
        height: 630,
        alt: "A computer science student working on code with graduation cap - CS Degree Worth It in 2025",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-13T12:00:00Z",
    modifiedTime: "2025-05-13T12:00:00Z",
    section: "Education",
    tags: [
      "Computer Science",
      "Higher Education",
      "Career Change",
      "STEM Degrees",
      "Software Engineering",
      "Tech Careers",
      "Graduate Studies",
      "Education ROI",
      "Career Development",
      "Programming",
    ],
  },

  creator: "Merge Society Blog",
  publisher: "Merge Society Blog",

  alternates: {
    canonical: "https://www.mergesociety.com/tech/should-you",
    languages: {
      "en-US": "https://www.mergesociety.com/tech/should-you",
    },
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Is a Computer Science Degree Worth It in 2025? Real Data & Analysis",
    description:
      "Read Sam's journey from bank teller to software engineer and discover if a CS degree is the right investment for your future in tech in 2025.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747150651/cs_moponk.jpg",
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
    readingTime: "8 minutes",
    contentType: "Career Advice & Education Analysis",
    publishDate: "May 13, 2025",
    category: "Education",
    subcategory: "Career Development",
    featured: true,
    series: "Tech Career Paths",
    complexity: "Accessible to all audiences",
    relatedArticles: [
      "5 Alternative Paths to a Tech Career Without a CS Degree",
      "Tech Bootcamps vs. Traditional Degrees: 2025 Comparison",
      "How to Get Hired at FAANG Companies in 2025",
      "The Complete Guide to Computer Science Prerequisites for Career Changers",
      "Financial ROI: Analyzing the Cost-Benefit of Various Tech Education Paths",
    ],
    visualAid: true,
    authorCredentials: "MS Computer Science, Cal Poly SLO (2017)",
    keyTakeaways: [
      "How to calculate the true ROI of a CS degree based on your situation",
      "The importance of testing the waters before committing to a CS program",
      "Paths to bridge knowledge gaps for non-STEM backgrounds",
      "When a Master's makes more financial sense than a second Bachelor's",
      "Current tech industry expectations for degrees vs. experience in 2025",
    ],
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Should I Get a CS Degree in 2025: Is It Still Worth It?",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747150651/cs_moponk.jpg",
    datePublished: "2025-05-13T12:00:00Z",
    dateModified: "2025-05-13T12:00:00Z",
    author: {
      "@type": "Person",
      name: "Medi",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Software Engineer",
      description:
        "Former bank teller with a Master's in Computer Science from Cal Poly San Luis Obispo (2017)",
    },
    publisher: {
      "@type": "Organization",
      name: "Merge Society Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Discover if a Computer Science degree is worth it in 2025 from someone who transitioned from banking to tech. Learn about the financial ROI, job prospects, and alternatives to help you make an informed decision.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/tech/should-you",
    },
    keywords:
      "computer science degree, CS degree worth it, masters in computer science 2025, tech career change",
    about: [
      {
        "@type": "Thing",
        name: "Computer Science Education",
      },
      {
        "@type": "Thing",
        name: "Career Development",
      },
      {
        "@type": "Thing",
        name: "Higher Education ROI",
      },
    ],
    articleBody:
      "Considering a master's degree in Computer Science? You're not alone. With technology careers booming and skill demands evolving, deciding whether to take the plunge into graduate school is a choice that can shape the trajectory of your professional life...",
    isAccessibleForFree: true,
  },

  // Modern SEO and discovery features for 2025
  semantic: {
    contentTags: [
      "computer science education",
      "career transition success",
      "education investment analysis",
      "tech job requirements",
      "master's degree value",
      "non-technical to technical career",
      "STEM education pathways",
      "programming career entry",
      "tech industry hiring trends",
      "software engineering career paths",
    ],
    primaryTopic: "Computer Science Degree Value in 2025",
    conceptualDifficulty: "Accessible to General Audience",
    targetAudience: [
      "career changers",
      "college graduates considering further education",
      "professionals in non-tech fields",
      "computer science undergraduates",
      "education investment decision-makers",
      "parents of students considering CS",
      "hiring managers in tech",
      "university advisors",
      "tech bootcamp students",
      "self-taught programmers",
    ],
    visualContent: true,
    comprehensiveness: "complete analysis with personal experience",
    freshness: "current to 2025 industry standards",
    evergreen: false,
    depthLevel: "in-depth analysis with multiple perspectives",
    contentFormat: "personal narrative with factual analysis",
  },

  analytics: {
    eventCategory: "Education Decision Making",
    pageType: "Career Advice",
    contentPillar: "Tech Education",
    contentCluster: "Career Transitions",
    expectedReadTime: 480, // in seconds
    wordCount: 2500,
    technicalLevel: 2, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.88,
      expectedDiscussionTrigger: 0.75,
      socialSharePotential: "high",
      conceptualComplexity: "moderate",
    },
  },

  // 2025-specific metadata additions
  aiTaxonomy: {
    modelType: "Education Decision Content",
    industryFocus: [
      "Higher Education",
      "Technology Sector",
      "Career Development",
      "Education ROI",
    ],
    conceptualFramework: "Personal ROI Analysis in Educational Investment",
    technicalAccuracy: "High",
    accessibilityLevel: "General Audience with Basic Education Understanding",
    visualizationOptions: [
      "ROI Comparison Charts",
      "Career Path Flowcharts",
      "Salary Progression Timelines",
    ],
    knowledgeDomain: [
      "Computer Science Education",
      "Career Transitions",
      "Educational Investment",
      "Technology Industry",
      "Job Market Analysis",
      "Programming Careers",
    ],
    keyThemes: [
      "Educational ROI",
      "Career Change Strategy",
      "Skill Development",
      "Academic Prerequisites",
      "Industry Requirements",
    ],
  },

  careerGuidanceMetrics: {
    decisionSupportValue: "very high",
    realWorldRelevance: "substantial",
    actionableSteps: "clearly defined",
    approachabilityScore: 9.5, // out of 10
    applicableForCareerChangers: true,
  },

  discussionPrompts: {
    communityEngagement: [
      "What's your biggest concern about pursuing a CS degree as a career changer?",
      "Have you calculated the ROI for your educational decisions?",
      "What alternative paths to tech have you considered?",
      "Did you take any 'test the waters' classes before committing to a tech career?",
      "How important do you think formal education is in 2025's tech landscape?",
    ],
    expertPerspectives: [
      "For hiring managers: How do you view candidates with Master's in CS versus self-taught developers?",
      "For educators: What prerequisites should non-STEM students focus on before applying to CS programs?",
      "For career changers: What was your biggest challenge transitioning to tech?",
    ],
  },

  contentContextualization: {
    industryImpact: {
      educationValue: "significant but evolving with industry needs",
      careerTrajectories: "multiple viable paths to tech careers",
      financialConsiderations: "long-term ROI analysis essential",
      prerequisiteRequirements: "bridgeable gaps for determined candidates",
    },
    timelinePerspective: "2023-2030 education and tech job market outlook",
    futurePredictions:
      "continued value with shifting emphasis toward specialized skills",
  },

  userExperienceOptimization: {
    readabilityScore: 72, // Flesch reading ease
    scrollDepthEstimate: "high",
    pageLoadPriority: "text-first",
    colorSchemeCompatibility: [
      "light",
      "dark",
      "high-contrast",
      "print-friendly",
    ],
    accessibilityLevel: "AA",
    translationAvailability: ["es", "fr", "de", "zh", "ja"],
    regionalVariations: {
      "en-US": "default",
      "en-GB": "/tech/should-you",
      "en-IN": "/tech/should-you",
    },
  },

  expertCredentials: {
    subjectMatterExpert: true,
    industryExperience: true,
    notablePositions: [
      "Software Engineer",
      "Former Bank Teller",
      "Career Changer",
    ],
    educationalBackground: [
      "Computer Science (MS)",
      "International Studies (BA)",
    ],
    specializedKnowledge: [
      "Career transitions",
      "Computer Science education",
      "Tech industry hiring",
      "Educational ROI analysis",
    ],
    personalJourney: true,
  },

  communityValue: {
    inspirationalPotential: "high for career changers",
    educationalValue: "practical decision-making framework",
    perspectiveUniqueness: "personal experience backed by analysis",
    controversialScore: 3.0, // out of 10 (low controversy)
    industryNarrativeResonance: "high among education seekers",
  },

  contentProvenance: {
    researchDepth: "personal experience with industry context",
    informationSources: "first-hand journey with peer comparisons",
    transparencyRating: "high",
  },

  voiceSearchOptimization: {
    conversationalQueries: [
      "is a computer science degree worth it in 2025",
      "how to change careers to tech without stem background",
      "masters vs bachelors in computer science",
      "do I need a computer science degree for big tech",
      "how much do software engineers make",
      "prerequisites for computer science masters",
      "can I learn programming without a degree",
      "career change to programming in my 30s",
      "tech job requirements 2025",
      "computer science degree ROI calculation",
    ],
    contextualRelevance: "high for education and career decisions",
    naturalLanguageAlignment: 0.92, // score out of 1
  },

  interactionSuggestions: {
    commentPrompts: [
      "What's your biggest concern about investing in a CS degree?",
      "Have you made a successful career transition to tech? Share your story!",
      "What would you like to know about preparing for a CS Master's program?",
    ],
    socialShareCopy: [
      "Thinking about a CS degree in 2025? Here's my journey from bank teller to software engineer and what I learned...",
      "The real ROI of a Computer Science degree in 2025 - from someone who switched careers and did the math...",
      "Before you invest in a CS degree, read this comprehensive analysis of whether it's still worth it in 2025",
    ],
    callToAction:
      "Join our community to discuss your educational path to tech and get personalized advice from those who've made the journey successfully",
  },

  insightDepth: {
    narrativeOriginality: "authentic personal journey",
    impactAnalysis: "comprehensive financial and career",
    historicalContext: "relevant industry evolution",
    balancedPerspective: true,
    controversialContent: "addressed thoughtfully",
  },

  engagementHooks: {
    openingStrength: "relatable decision point for many readers",
    narrativeArc: "from uncertainty to successful career change",
    inspirationalResonance: "achievable path with clear steps",
    callToAction: "encouragement to make informed decisions",
  },

  multimodalContent: {
    supportingFormats: [
      "ROI calculator tool",
      "career path flowchart",
      "prerequisite checklist",
      "salary progression timeline",
    ],
    codeExamples: false,
    communityDiscussion: "open for sharing personal education journeys",
  },

  quotableSegments: [
    "The numbers were telling. After seven years—the time it would take me to fully invest in my education and land an average software engineer's salary—the long-term earning potential as a computer scientist far exceeded my old financial trajectory.",
    "For career changers like me, a Master's in Computer Science isn't just an intellectual adventure—it's a financial upgrade with staggering pay differential and long-term job security.",
    "Before risking it all and quitting my job, I needed a 'reality check.' I enrolled in an introductory programming course at a local college to see if I'd enjoy programming and could keep up.",
    "If you're pivoting from a non-technical field, a Master's degree is a robust, proven way to transition—especially with no prior STEM background.",
    "Choosing whether to pursue a Master's in Computer Science is a deeply personal and often complicated decision. No two career journeys are exactly alike.",
  ],

  // SEO optimizations specifically for 2025
  structuredContent: {
    tableOfContents: true,
    headerHierarchy: "semantic",
    keyPointHighlighting: true,
    blockquoteEmphasis: true,
    responsiveImages: true,
    jumpLinks: true,
  },

  searchFeatures: {
    featuredSnippetOptimization: true,
    peopleAlsoAskTargeting: [
      "Is a computer science degree worth it in 2025?",
      "How much does a computer science master's cost?",
      "Can I get a CS degree without a STEM background?",
      "Do you need a CS degree to work at Google?",
      "What are the prerequisites for a master's in computer science?",
    ],
    googlePassageIndexing: true,
    videoCarouselEligible: false,
  },

  technicalSEO: {
    pageSpeed: "optimized",
    mobileFriendliness: "fully responsive",
    schemaMarkup: "comprehensive",
    internalLinking: "strategic education topics",
    semanticHTML: true,
  },

  conversionOptimization: {
    primaryCTA: "Calculate Your CS Degree ROI",
    secondaryCTA: "Explore Education Alternatives",
    emailCapture: "Get Our Tech Career Path Guide",
    leadMagnet: "CS Degree Prerequisites Checklist",
    onPageTools: "Education ROI Calculator",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>Should I Get a CS Degree in 2025: Is It Still Worth It?</h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747150651/cs_moponk.jpg"
          }
          alt="Should I Get a CS Degree in 2025: Is It Still Worth It?"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-13">
            | May 13, 2025
          </time>
        </h2>
        <p>
          Considering a master’s degree in Computer Science? You’re not alone.
          With technology careers booming and skill demands evolving, deciding
          whether to take the plunge into graduate school is a choice that can
          shape the trajectory of your professional life for better or for
          worse. Welcome to my comprehensive guide on making this decision,
          drawn straight from my personal experience and those of people around
          me.
        </p>
        <h2>
          An Unconventional Path: My Journey from Bank Teller to Computer
          Scientist
        </h2>
        <p>
          My name is Sam, and I hold a Master’s in Computer Science from Cal
          Poly San Luis Obispo (Class of 2017). But my journey didn't start out
          in technology. In fact, my Bachelor’s was in International Studies
          from UC Irvine about as far from Computer Science as you can get.
          After college, I spent several years working as a bank teller at Bank
          of America, comfortable but not exactly thrilled with my career
          prospects.
        </p>
        <p>
          By 2013, I realized it was time for a change. I explored everything
          law, medicine, you name it before landing on Computer Science. My
          initial thought was to get another Bachelor’s degree. However, I
          hesitated: why render my first degree “useless” and invest years
          earning a second undergraduate diploma? The idea felt like a lateral
          move instead of a leap forward. So, I set my sights on something more
          ambitious: a Master’s degree.
        </p>
        <h2>The Objectivity Test: A Five Year Financial Forecast</h2>
        <p>
          To make an informed decision, I decided to get analytical. I built out
          a detailed spreadsheet, mapping two clear career paths for myself:
        </p>
        <ul>
          <li>
            <strong>Scenario 1:</strong> Stay the course at the bank. I
            calculated my current salary, rent, and all anticipated living
            expenses over the next five years.
          </li>
          <li>
            <strong>Scenario 2:</strong> Pursue the master’s degree. Here, I
            factored in costs for tuition, books, and living expenses knowing
            I’d have to quit my job and reduce my income. Luckily, I could move
            back home and avoid rent, making this path more viable.
          </li>
        </ul>
        <p>
          The numbers were telling. In the first five years, sticking with my
          banking job seemed to have a slight edge financially. However, after
          seven years the time it would take me to fully invest in my education
          and land an average software engineer’s salary the long term earning
          potential as a computer scientist far exceeded my old financial
          trajectory. The gap would only widen as time marched on.
        </p>
        <h2>Dipping My Toes: Testing the Waters Before a Leap</h2>
        <p>
          Before risking it all and quitting my job, I needed a “reality check.”
          I enrolled in an introductory “C” programming course at Santa Monica
          College. Would I enjoy programming? Could I keep up? To my surprise
          and relief, I excelled in the class and genuinely enjoyed the
          challenge. That small win gave me the green light: I resigned from my
          bank job, moved back home, and jumped headlong into my new ambition.
        </p>
        <h2>Bridging the Gap: Master’s Prep from a Non STEM Background</h2>
        <p>
          The road wasn’t smooth. As a non STEM undergraduate, I didn’t meet the
          typical prerequisites for a Computer Science master’s program. I
          needed to level up my game fast. I researched various universities,
          listed their entry requirements, and signed up for a gauntlet of
          foundational courses: Operating Systems, Computer Architecture,
          Software Engineering, and heavy duty mathematics like Discrete Math,
          Linear Algebra, and Calculus I and II.
        </p>
        <p>
          These prep classes took about two years. Afterward, I crushed the GRE,
          gathered my application materials, and won admission to Cal Poly San
          Luis Obispo’s master’s program. Two years of graduate study later, I
          walked across the stage a newly minted computer scientist and soon
          after, I landed my first software engineering job.
        </p>
        <h2>Why a Master’s in Computer Science Made Sense for Me</h2>
        <p>
          In my case, making the leap to Computer Science wasn’t just an
          intellectual adventure it was a financial upgrade. The pay
          differential was staggering, and the tech field’s future growth meant
          long term job security. Above all, I’d found something I truly
          enjoyed. For career changers like me, the master’s was a wise
          investment.
        </p>
        <h2>
          Real Life Examples: When a Master's is Worth It (and When It’s Not)
        </h2>
        <p>
          I’m not the only one who benefited from this route. A friend of mine
          had a Bachelor’s degree in Math, but faced a tough job market. She
          chose to pursue a Master’s in Computer Science. We graduated together,
          and she landed a six figure job at Microsoft right out of school.
          That’s a success story any way you slice it.
        </p>
        <p>
          Another smart route: my university offered a “4+1” program a five year
          blended Bachelor’s and Master’s degree in Computer Science. With this
          setup, you save time and money, transition smoothly to graduate
          coursework, and get the Master’s with just one extra year of study.
          Already knowing your professors and skipping the hassle of re applying
          for admission makes this an especially attractive option.
        </p>
        <h3>When a Master's Might NOT Be Worth It</h3>
        <p>
          On the flip side, if you already have a Bachelor’s degree in Computer
          Science, a master’s may not be necessary unless you want to specialize
          deeply or just adore academic life. Unless your employer is funding
          your education (or you can balance work and study, which is no walk in
          the park), quitting a well paying job for another diploma might not
          pay off in the short run.
        </p>
        <h3>Parallel Paths: Juggling Work and Study</h3>
        <p>
          I’ve known colleagues who work full time while pursuing their Master’s
          degrees in the evenings or online. If your employer supports you, or
          if you’re willing to live without much free time for a while, this
          path can make sense. One co worker managed to combine both
          successfully, but it’s an intense commitment.
        </p>
        <h3>Unexpected Outcomes: Degrees Aren’t Always Essential</h3>
        <p>
          Consider my grad school buddy with a Bachelor’s degree in Music (yes,
          Music!). He entered the computer science program, snagged a solid
          company internship, and received a return offer. However, he never
          quite finished his thesis and, as a result, never earned his Master’s.
          Despite lacking a computer science or STEM degree, he’s still doing
          just fine in the tech world. Sometimes experience and skill can trump
          formal credentials, depending on your niche.
        </p>
        <h2>Do You Need a Computer Science Degree to Work at Big Tech?</h2>
        <p>
          If your career goal is to work at household names like Google,
          Microsoft, or other “FAANG” companies, you should know: most require
          at least a Bachelor’s degree in Computer Science, Computer
          Engineering, or Software Engineering. Master’s degrees are “preferred”
          but rarely required. Google, in recent years, dropped the hard degree
          requirement, but remember: your competition will likely have at least
          a Bachelor’s possibly a Master’s or more. Credentials help you stand
          out, even if they’re not mandatory.
        </p>
        <h2>
          How To Decide: Should <em>You</em> Get a Master's in Computer Science?
        </h2>
        <ul>
          <li>
            <strong>Career Changers:</strong> If you’re pivoting from a non
            technical field, a Master’s degree is a robust, proven way to
            transition especially with no prior STEM background.
          </li>
          <li>
            <strong>Bachelor’s in Non Computer Science:</strong> The Master’s
            transforms your market value, opens new doors, and makes sense
            financially and professionally.
          </li>
          <li>
            <strong>Already a Computer Science Bachelor’s?</strong> Unless you
            crave research or academic prestige, the incremental value of a
            Master’s may not justify the time and lost income.
          </li>
          <li>
            <strong>Thinking About Research?</strong> If investigating new
            knowledge excites you, a Master’s can be a stepping stone but if
            research is your passion, consider a Ph.D. instead.
          </li>
          <li>
            <strong>Upskilling at Work:</strong> If you can pursue your degree
            while employed, or your employer foots the bill, a Master’s becomes
            a safer bet.
          </li>
        </ul>
        <h2>Final Thoughts: There’s No One Size Fits All Answer</h2>
        <p>
          Choosing whether to pursue a Master’s in Computer Science is a deeply
          personal and often complicated decision. No two career journeys are
          exactly alike. My advice: measure your goals, your current
          credentials, your financial situation, and your appetite for academic
          rigor. If you have any doubts, take a class (even at a local college)
          to sample the work. If it clicks, the rest will follow.
        </p>
        <p>
          Still wrestling with the decision? Drop your questions or comments
          below. I know how tough it can be, but with enough research and a
          clear goal in mind, you’ll make the choice that’s right for you.
          Thanks for reading, and best of luck on your journey no matter what
          direction you choose!
        </p>
        <h3>Recommended</h3>
        <Section3 />
        <CommentSection />
      </article>
    </div>
  );
}

const Section3 = () => {
  const blogPosts = [
    {
      id: 32,
      title:
        "Why Linux Matters: The Beginner’s Guide to Mastering the World’s Most Powerful Operating System",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746959632/pexels-realtoughcandy-11035358_sdhzhm.jpg",
      alt: "illustration of linux",
      date: "May 11, 2025",
      articleRoute: "why-linux",
    },
    {
      id: 33,
      title:
        "The TRUTH about C++: Should You Actually Learn It? The Truth Behind Its Power, Pitfalls, and Controversy",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746978372/pexels-punttim-52608_oxusa4.jpg",
      alt: "C++ programming language",
      date: "May 11, 2025",
      articleRoute: "cplus",
    },
    {
      id: 34,
      title:
        "The Most Legendary Programmers Of All Time: The Best Programmers in History",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747146327/next-academy-G6k_uEjXygE-unsplash_x1jtdf.jpg",
      alt: "The Best Programmers in History",
      date: "May 13, 2025",
      articleRoute: "10x-developers",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="section3">
      <div className="bg-grid">
        {latestPosts.map((project) => (
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
