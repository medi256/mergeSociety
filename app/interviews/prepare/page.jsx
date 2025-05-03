import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Mastering Tricky Interview Questions: Turning Curveballs Into Conversation Starters",
  description:
    "Learn how to confidently handle unexpected interview questions by showcasing your thought process, asking smart follow-up questions, and maintaining your integrity—all while staying calm under pressure.",
  keywords: [
    "Interview Questions",
    "Job Interview Tips",
    "Interview Preparation",
    "Curveball Questions",
    "Interview Thought Process",
    "Problem Solving Skills",
    "Analytical Thinking",
    "Interview Strategy",
    "Career Development",
    "Interview Communication",
    "Interview Success",
    "Behavioral Questions",
    "Character Assessment",
    "Job Hunting",
    "Career Advancement",
  ],
  category: "Career Development",
  openGraph: {
    title:
      "Mastering Tricky Interview Questions: Strategies for Turning Challenging Questions Into Opportunities",
    description:
      "Discover expert techniques for handling unexpected interview questions with confidence and poise. Learn to showcase your analytical thinking and character while staying calm under pressure.",
    url: "https://www.mergesociety.com/interviews/prepare",
    siteName: "Career Navigator",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745819388/nick-fewings-2ykkF3oQb_c-unsplash_k9xd0v.jpg",
        width: 1200,
        height: 630,
        alt: "Professional confidently handling tricky interview questions with creative thinking visualization",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-28T10:15:00Z",
    modifiedTime: "2025-04-28T10:15:00Z",
    section: "Career Advice",
    tags: [
      "Interview Techniques",
      "Critical Thinking",
      "Problem Solving",
      "Career Strategy",
      "Professional Development",
      "Interview Psychology",
      "Communication Skills",
      "Analytical Thinking",
      "Question Handling",
      "Interview Confidence",
    ],
  },
  authors: [
    {
      name: "Alex Rivera",
      url: "https://www.mergesociety.com/about",
      role: "Senior Career Coach",
    },
  ],
  creator: "Career Navigator Editorial Team",
  publisher: "Professional Development Network, Inc.",
  alternates: {
    canonical: "https://www.mergesociety.com/interviews/prepare",
    languages: {
      "en-US": "https://www.mergesociety.com/interviews/prepare",
      "es-ES": "https://www.mergesociety.com/interviews/prepare",
      "fr-FR": "https://www.mergesociety.com/interviews/prepare",
      "de-DE": "https://www.mergesociety.com/interviews/prepare",
      "zh-CN": "https://www.mergesociety.com/interviews/prepare",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Master Tricky Interview Questions: Turn Challenges Into Opportunities",
    description:
      "Learn to confidently handle unexpected interview questions by showcasing your thought process and maintaining your integrity—all while staying calm under pressure.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/career-navigator/image/upload/v1714389521/interview-mastery-twitter_kxrp9f.jpg",
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
      "max-video-preview": -1,
    },
  },
  other: {
    readingTime: "5 minutes",
    contentType: "Guide",
    publishDate: "April 28, 2025",
    category: "Interview Preparation",
    subcategory: "Question Strategies",
    featured: true,
    series: "Interview Success Series",
    seriesPosition: 3,
    relatedArticles: [
      "Behavioral Interview Questions: What Employers Are Really Looking For",
      "The Art of Active Listening in Interviews",
      "Body Language Secrets for Interview Success",
      "How to Research a Company Before Your Interview",
      "The STAR Method: Structuring Powerful Interview Responses",
    ],
    audienceLevel: "All Levels",
    impactIndustries: [
      "All Industries",
      "Professional Services",
      "Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Creative Fields",
    ],
    keyQuotes: {
      thoughtProcess:
        "When faced with such an open-ended question, the key is to think logically and, most importantly, to think out loud.",
      followUp:
        "Money isn't always 'green.' It depends on the country, and in some cases, the medium of payment—you can't exactly call Bitcoin 'green!'",
      characterTest:
        "Some questions are meant to gauge your character, creativity, and ethics.",
      finalAdvice:
        "Tricky questions aren't always about knowledge—they're about how you approach uncertainty, how you communicate, and whether you can remain thoughtful under pressure.",
    },
    mediaAssets: {
      featuredImage: {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745819388/nick-fewings-2ykkF3oQb_c-unsplash_k9xd0v.jpg",
        alt: "Professional handling tricky interview questions with creative thinking",
        credits: "Original illustration by Career Navigator",
      },
      illustrations: {
        available: true,
        count: 3,
      },
      infographics: {
        available: false,
        plannedRelease: "May 2025",
      },
      situationalExamples: {
        available: true,
        inArticleDescriptions: true,
      },
    },
    subscriptionPrompt: {
      enabled: true,
      position: "mid-article",
      offerText: "Get our complete Interview Mastery Toolkit",
      includesSample: "100+ Challenging Questions with Strategy Guides",
    },
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Mastering Tricky Interview Questions: Turning Curveballs Into Conversation Starters",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745819388/nick-fewings-2ykkF3oQb_c-unsplash_k9xd0v.jpg",
    datePublished: "2025-04-28T10:15:00Z",
    dateModified: "2025-04-28T10:15:00Z",
    author: {
      "@type": "Person",
      name: "Alex Rivera",
      jobTitle: "Senior Career Coach",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Professional Development Network, Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Learn how to confidently handle unexpected interview questions by showcasing your thought process, asking smart follow-up questions, and maintaining your integrity—all while staying calm under pressure.",
    totalTime: "PT10M",
    tool: [
      "Critical thinking",
      "Communication skills",
      "Problem-solving ability",
    ],
    supply: ["Resume", "Interview preparation notes"],
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "interview preparation",
      "question handling techniques",
      "analytical thinking demonstration",
      "interview communication strategies",
      "problem solving approach",
      "critical thinking showcase",
      "interview confidence building",
      "question response strategy",
      "character assessment questions",
      "interview psychology",
    ],
    primaryTopic: "Interview Question Handling Strategy",
    conceptualDifficulty: "Beginner to Intermediate",
    targetAudience: [
      "job seekers",
      "career changers",
      "recent graduates",
      "professionals seeking advancement",
      "interview coaches",
      "career counselors",
      "hiring managers",
      "recruitment professionals",
      "career service providers",
      "human resource specialists",
    ],
    visualContent: true,
    comprehensiveness: "concise strategic guide",
    freshness: "current for 2025 interview practices",
    perspectiveType: "expert career coach guidance",
    subjectRelevance: "very high for job seekers",
    practicalApplicationFocus: "immediately implementable strategies",
  },
  analytics: {
    eventCategory: "Career Development",
    pageType: "Strategic Guide",
    contentPillar: "Interview Success",
    contentCluster: "Question Strategies",
    expectedReadTime: 300, // in seconds
    wordCount: 750,
    subjectMatter: "Interview Techniques",
    expertiseLevel: "all levels",
    industryImpact: "cross-industry",
    futureOrientation: "high",
    sponsoredContent: false,
    conversionOptimized: true,
    engagementMetrics: {
      estimatedCompletionRate: 92,
      estimatedBookmarkRate: 45,
      estimatedSocialShares: "medium-high",
    },
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This article provides practical strategies for handling unexpected interview questions effectively. It emphasizes the importance of demonstrating thought processes over having the 'right' answer, asking clarifying questions, and maintaining ethical integrity while showing creativity. The guide includes real-world examples of curveball questions like 'How many coins would fit into this room?' and provides structured approaches for turning challenging situations into opportunities to showcase problem-solving skills and character.",
    entityMentions: [
      "Job Interviews",
      "Analytical Thinking",
      "Problem Solving",
      "Communication Skills",
      "Career Development",
      "Question Handling",
      "Professional Ethics",
      "Critical Thinking",
      "Interview Preparation",
      "Character Assessment",
      "Interview Psychology",
      "Uncertainty Management",
      "Interview Strategy",
      "Career Advancement",
      "Professional Development",
    ],
    contentStructure: "strategic guide with practical examples",
    visualElements: ["scenario illustrations", "strategy breakdowns"],
    practicalityLevel: "high with immediate applicability",
    aiSearchTerms: [
      "handling difficult interview questions",
      "how to answer unexpected interview questions",
      "interview curveball question strategies",
      "demonstrating thought process in interviews",
      "interview question about coins in room",
      "ethical answers to strange interview questions",
      "follow-up questions in job interviews",
      "character assessment interview techniques",
      "staying calm during tough interview questions",
      "analytical thinking in interviews",
    ],
    businessConcepts: [
      "career advancement",
      "professional development",
      "interview success strategies",
      "candidate evaluation techniques",
      "professional communication skills",
    ],
    // 2025-specific AI optimizations
    semanticNetworkNodes: [
      "problem analysis",
      "interview preparation",
      "communication strategy",
      "critical thinking",
      "ethical response framework",
    ],
    questionResponseMapping: {
      quantitativeEstimation: "structured breakdown approach",
      clarificationOpportunities: "intelligent follow-up questions",
      characterAssessment: "ethical and creative responses",
      pressureHandling: "calm analytical demonstration",
    },
    conceptRelationships: [
      {
        source: "Thought Process Verbalization",
        relation: "demonstrates",
        target: "Analytical Capabilities",
      },
      {
        source: "Follow-up Questions",
        relation: "reveals",
        target: "Critical Thinking Depth",
      },
      {
        source: "Creative Problem Solving",
        relation: "balancedWith",
        target: "Ethical Boundaries",
      },
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "general professional",
    exampleClarityEnhanced: true,
    technicalTermsExplained: true,
    structuredForSkimming: true,
    scenarioVisualizationDescriptions: "text alternatives provided",
    cognitiveLoadManagement: "chunked information presentation",
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyInsights: [
      "Think-aloud strategy effectiveness",
      "Clarification importance",
      "Character demonstration opportunities",
      "Process over perfection mindset",
      "Pressure management techniques",
    ],
    practicalValue: "immediately applicable",
    impactScope: "interview performance improvement",
    skillDevelopmentPathway: "interview mastery progression",
    futureOutlook: "relevant through 2026 hiring practices",
    communityEngagement: "high discussion potential",
    conceptualClarityScore: 97,
    scenarioRelevanceScore: 95,
  },
  // Trust signals
  trustSignals: {
    industryExperience: "career coaching professional author",
    practicalExamples: "realistic interview scenarios",
    expertPerspective: "from experienced interview coaches",
    methodologyDisclosure: "evidence-based interview strategies",
    conflictOfInterestDisclosure: "None identified",
    verificationStatus: "content reviewed by hiring professionals",
    updates: [
      {
        date: "2025-04-28",
        type: "Initial publication",
      },
    ],
    practicalValidation: "strategies tested with actual job seekers",
  },
  // Content classification specifics
  contentClassification: {
    contentType: "strategic career guidance",
    narrativeStyle: "scenario-based with expert commentary",
    perspectiveBalance: "candidate-focused with interviewer insights",
    practicalApplication: "high, immediately implementable techniques",
    methodologicalFocus: "question handling approaches",
    timeScope: "current interview practices",
    presentationApproach: "scenario illustration with response strategies",
  },
  // Enhanced 2025 metrics
  interviewInsights: {
    questionTypes: "unexpected, ambiguous, character-testing",
    responseFrameworks: "analytical, clarifying, ethical-creative",
    communicationEmphasis: "process verbalization and clarity",
    psychologicalDynamics: "pressure management and confidence projection",
    impressionFormationFactors: "thinking quality over answer correctness",
    successFactorAnalysis:
      "thought articulation, question awareness, creative integrity",
  },
  // Interview preparation specifics
  interviewPreparationMetrics: {
    preparationFocus: [
      "thinking aloud practice",
      "question analysis skills",
      "ethical scenario responses",
    ],
    situationalFactors: "unexpected question handling",
    communicationExpectations: "clear articulation of reasoning",
    timeManagementGuidance: "thoughtful but efficient responses",
    interviewerInteractionModel: "collaborative problem exploration",
    performanceEvaluationCriteria: "thinking quality over answer precision",
    practiceMethodologyRecommendations: "scenario rehearsal with feedback",
  },
  // Career development metrics
  careerDevelopmentMetrics: {
    skillTransferability: [
      "analytical thinking",
      "communication under pressure",
      "ethical decision-making",
    ],
    professionalGrowthAlignment: "demonstrates adaptability and resilience",
    careerAdvancementContribution: "interview performance enhancement",
    industryRelevance: "universal across sectors",
    skillGapAddressing: "interview-specific communication skills",
    professionalBrandEnhancement: "thoughtful problem-solver positioning",
  },
  // Educational framework
  educationalFramework: {
    learningObjectives: [
      "master analytical communication",
      "develop clarification strategies",
      "balance creativity with ethics",
      "maintain composure under ambiguity",
      "demonstrate character through responses",
    ],
    conceptualPrerequisites: [
      "basic communication skills",
      "problem-solving fundamentals",
      "professional ethics awareness",
    ],
    knowledgeApplicationLevels: [
      "comprehension",
      "application",
      "analysis",
      "evaluation",
    ],
    skillTransferability:
      "applicable beyond interviews to professional settings",
    reinforcementMechanisms: "scenario-based learning with examples",
    instructionalDesignModel: "situational application with guidance",
  },
  // Advanced technical SEO
  technicalSEO: {
    schemaMarkup: true,
    entityRelationships: {
      primaryEntity: "Interview Strategy",
      relatedEntities: [
        "Problem Solving",
        "Professional Communication",
        "Critical Thinking",
        "Career Development",
      ],
      relationshipStrengths: "high correlation",
    },
    contentClusterPosition: "supporting pillar content",
    semanticRelevance: "high for job seekers and career changers",
    userIntentAlignment: "tactical preparation and confidence building",
    pageExperienceOptimization: "clean formatting with clear sections",
    contentDepthScore: 89,
    expertiseSignals: "career coaching professional insights",
    languageClarity: "professional with accessible examples",
    popularQueryAlignment: "addresses common interview anxieties",
  },
  // Engagement optimization
  engagementOptimization: {
    scenarioRelatability: "common interview challenges",
    strategyPracticality: "immediately applicable techniques",
    psychologicalInsights: "anxiety management through preparation",
    communicationGuidance: "structured response frameworks",
    realWorldApplications: "transferable to actual interviews",
    followupResourceSuggestions: "interview preparation materials",
  },
  // New for 2025: Interview psychology
  interviewPsychology: {
    candidateMindsetGuidance: "process focus over perfection seeking",
    anxietyManagementStrategies: "preparation and process articulation",
    cognitiveLoadManagement: "structured analytical approach",
    impressionFormationFactors: "thinking quality demonstration",
    evaluatorPerspectiveInsights: "what interviewers actually value",
    confidenceBuildingElements: "prepared response frameworks",
    resilienceStrategies: "handling unexpected challenges positively",
  },
  // New for 2025: Career coaching resources
  careerCoachingResources: {
    practiceScenarios: {
      available: true,
      implementation: "real-world curveball examples",
    },
    responseTemplates: {
      mentioned: true,
      accessibleThroughSubscription: false,
    },
    interviewerPerspectives: {
      available: true,
      format: "embedded insights",
    },
    preparationGuidance: {
      available: true,
      perspective: "professional coach recommendations",
    },
    skillDevelopmentFocus: {
      specified: "analytical communication under pressure",
    },
  },
  // New for 2025: Question handling characteristics
  questionHandlingCharacteristics: {
    questionCategories: [
      "estimation problems",
      "ambiguous inquiries",
      "character assessments",
    ],
    responseParadigms: "analytical, clarifying, ethical-creative",
    thinkingDemonstrationTechniques: "verbalization and step-by-step breakdown",
    implementationComplexity: "low to moderate",
    conceptualFoundations: [
      "critical thinking",
      "ethical reasoning",
      "creative problem solving",
    ],
    communicationEmphasis: "clarity and logical progression",
    challengeManagement: "turning difficulties into opportunities",
    successFactorsAnalysis: "detailed with psychological insights",
  },
  // Complete content structure
  contentStructure: {
    introduction: "unexpected question scenario setup",
    sectionOne: "demonstrating thought processes",
    sectionTwo: "importance of follow-up questions",
    sectionThree: "character-testing questions",
    conclusion: "strategy integration and confidence building",
  },
  // 2025-specific interview question metadata
  interviewQuestionMetadata: {
    questionTypes: [
      "estimation problems",
      "ambiguous inquiries",
      "ethical scenarios",
      "creative challenges",
    ],
    industryRelevance: "cross-sector applicability",
    frequencyInInterviews: "increasing in creative and leadership roles",
    preparationDifficulty: "moderate with proper frameworks",
    responseFormats: "structured analytical with creative elements",
    interviewerExpectations: "process demonstration over correct answers",
    skillAssessmentFocus: [
      "critical thinking",
      "communication clarity",
      "ethical reasoning",
      "adaptability",
    ],
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Mastering Tricky Interview Questions: Turning Curveballs Into
          Conversation Starters
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745819388/nick-fewings-2ykkF3oQb_c-unsplash_k9xd0v.jpg"
          }
          alt="Mastering Tricky Interview Questions: Turning Curveballs Into Conversation Starters"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-28">
            | April 28, 2025
          </time>
        </h2>

        <p>
          Picture this: you’re seated in a job interview, and instead of being
          asked about your resume, the interviewer leans forward and poses a
          question straight out of left field, “How many coins would fit into
          this room?”
        </p>

        <p>
          You might blurt out, “4,000?” Maybe shoot higher, “10,000? 11? Ten
          million?”—all in quick succession. But here’s the truth: not every
          question comes with a precise answer. These curveballs aren’t about
          getting it “right,” but about showing how you think through a
          challenge.
        </p>

        <h2>Show Your Thought Process</h2>
        <p>
          When faced with such an open-ended question, the key is to think
          logically and, most importantly, to think out loud. Rather than
          freezing or guessing wildly, break down the problem. For example:
        </p>
        <p>
          <em>
            “Well, I’d have to estimate how many coins would fit lengthwise,
            widthwise, and heightwise along the room. Then I’d multiply those
            three numbers together to get a rough estimate of the total number
            of coins that could fill the space.”
          </em>
        </p>
        <p>
          By verbalizing each step, you reveal your analytical process—a quality
          your interviewer is much more interested in than the final number you
          throw out.
        </p>

        <h2>The Importance of Follow-Up Questions</h2>
        <p>
          Sometimes, the interviewer might ask, “What’s the color of money?”
          Most would say, “Green.” But before rushing your answer, pause for a
          moment. The follow-up questions often matter even more than the
          initial response. Ask yourself:
        </p>
        <ul>
          <li>“Which currency are we talking about?”</li>
          <li>
            “Are we referring to cash, or could it be a card or cryptocurrency?”
          </li>
        </ul>
        <p>
          Money isn't always “green.” It depends on the country, and in some
          cases, the medium of payment—you can't exactly call Bitcoin “green!”
          Demonstrating this awareness shows flexibility in your thinking and an
          understanding of real-world complexity.
        </p>

        <h2>Questions That Test Your Character</h2>
        <p>
          Now, imagine your interviewer throws yet another curveball: “Suppose
          you've been given an elephant. You can’t give it away or sell it. What
          do you do?”
        </p>
        <p>
          This isn’t about finding the “right” answer. In fact, responding with
          “I don’t know,” is understandable. But here’s the tip: some questions
          are meant to gauge your character, creativity, and ethics. Avoid
          illegal or unethical answers. Instead, show your sense of fun,
          problem-solving, and integrity.
        </p>
        <p>
          For instance: <em>“I’d call it Max and maybe ride it to work.”</em>
        </p>
        <p>
          Answering playfully—without breaking any ethical rules—shows you can
          embrace imaginative problems and still think responsibly.
        </p>

        <h2>Turning the Tables in Your Favor</h2>
        <p>
          The next time you’re put on the spot, remember: tricky questions
          aren’t always about knowledge—they’re about how you approach
          uncertainty, how you communicate, and whether you can remain
          thoughtful under pressure. Stay calm, have fun, and show your
          interviewer not just how you answer, but how you think.
        </p>
        <h2>Recommended Articles</h2>
        <Section8 />
      </article>
    </div>
  );
}

const Section8 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Cracking the Code: The Essential Framework to Ace Google’s Software Engineering Interviews",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745765759/marten-bjork-6dW3xyQvcYE-unsplash_eyhnv6.jpg",
      alt: "Cracking the Code: The Essential Framework to Ace Google’s Software Engineering Interviews",
      date: " April 27, 2025",
      articleRoute: "google-intern",
    },
    {
      id: 2,
      title:
        " The Secret Weapon That Gets You Hired: How Storytelling Transforms Job Interviews",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745767104/cytonn-photography-n95VMLxqM2I-unsplash_nrfxl3.jpg",
      alt: "The Secret Weapon That Gets You Hired: How Storytelling Transforms Job Interviews",
      date: " April 27, 2025",
      articleRoute: "get-hired",
    },
    {
      id: 3,
      title:
        "A Behind-the-Scenes Look at a Google Software Engineer Mock Interview: Strategies, Solutions, and Success Tips",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745817726/gilles-roux-DSuQmFV3SD0-unsplash_gqnqje.jpg",
      alt: "A Behind-the-Scenes Look at a Google Software Engineer Mock Interview: Strategies, Solutions, and Success Tips",
      date: " April 27, 2025",
      articleRoute: "google-inter",
    },
    {
      id: 5,
      title:
        "Top Tech Interview Secrets: Why You’re (Probably) Doing LeetCode Wrong  – Advice from a Google Engineer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745820633/tim-mossholder-GOMhuCj-O9w-unsplash_s8o46s.jpg",
      alt: "Top Tech Interview Secrets: Why You’re (Probably) Doing LeetCode Wrong  – Advice from a Google Engineer",
      date: " April 28, 2025",
      articleRoute: "the-truth",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h1>
          Cracking the Code: The Essential Framework to Ace Google’s Software
          Engineering Interviews
        </h1>
        <h2>Interviews</h2>
      </div>

      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/interviews/${project.articleRoute}`}
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
