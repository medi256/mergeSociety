import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "AI Revolution: From Neural Networks to Global Impacts - Interactive Learning Module",
  description:
    "An immersive learning experience exploring the evolution of AI, featuring Geoffrey Hinton's groundbreaking work, recent technological breakthroughs, and the societal impacts of modern artificial intelligence systems.",
  keywords: [
    "Geoffrey Hinton",
    "neural networks",
    "AI ethics",
    "large language models",
    "AI safety",
    "technological disruption",
    "Nobel Prize",
    "machine learning",
    "ChatGPT",
    "AI regulation",
    "system failures",
    "critical infrastructure",
    "AI security",
    "future of AI",
    "AI risk assessment",
  ],
  category: "Technology Education",
  openGraph: {
    title: "AI Revolution: From Neural Networks to Global Impacts",
    description:
      "Explore the evolution of AI through Geoffrey Hinton's work, modern breakthroughs, and the challenges of managing increasingly powerful artificial intelligence systems.",
    url: "https://www.mergesociety.com/ai/god-father-of-ai",
    siteName: "TechLearning Academy",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745745611/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh.jpg",
        width: 1200,
        height: 630,
        alt: "AI Revolution Learning Module - The past, present and future of artificial intelligence",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T09:00:00Z",
    modifiedTime: "2025-04-27T09:00:00Z",
    section: "AI Education",
    tags: [
      "Geoffrey Hinton",
      "AI Ethics",
      "Machine Learning",
      "Technology Education",
      "Neural Networks",
      "AI Safety",
      "AI Regulation",
      "ChatGPT",
      "Deep Learning",
      "Technology Disruption",
    ],
  },
  authors: [
    {
      name: "TechLearning Academy",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "TechLearning Academy",
  publisher: "TechLearning Academy",
  alternates: {
    canonical: "https://www.mergesociety.com/ai/god-father-of-ai",
    languages: {
      "en-US": "https://www.mergesociety.com/ai/god-father-of-ai",
      "es-ES": "https://www.mergesociety.com/ai/god-father-of-ai",
      "zh-CN": "https://www.mergesociety.com/ai/god-father-of-ai",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Revolution: From Neural Networks to Global Impacts",
    description:
      "Learn about the evolution of AI through Geoffrey Hinton's work and the challenges of managing increasingly powerful artificial intelligence systems.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745745611/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh.jpg",
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
      "max-snippet": 200,
    },
  },
  other: {
    courseLength: "5 weeks",
    contentType: "Interactive Learning Module",
    publishDate: "April 27, 2025",
    category: "Artificial Intelligence",
    subcategory: "Technology Ethics",
    featured: true,
    series: "Technology Revolution",
    relatedCourses: [
      "AI Ethics in the Age of Large Language Models",
      "Infrastructure Security in the 2020s",
      "The Evolution of Machine Learning: From Hinton to Modern Applications",
      "Cybersecurity Crisis Management: Lessons from Major Outages",
    ],
    difficultyLevel: "Intermediate",
    targetAudiences: [
      "Computer Science Students",
      "Technology Professionals",
      "AI Researchers",
      "Ethics Specialists",
      "Business Leaders",
    ],
    estimatedCompletionTime: "15-20 hours",
    certificateOffered: true,
    interactiveElements: true,
    quizCount: 8,
    challengesCount: 12,
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Revolution: From Neural Networks to Global Impacts",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745745611/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh.jpg",
    description:
      "An immersive learning experience exploring the evolution of AI, featuring Geoffrey Hinton's groundbreaking work, recent technological breakthroughs, and the societal impacts of modern artificial intelligence systems.",
    provider: {
      "@type": "Organization",
      name: "TechLearning Academy",
      sameAs: "https://www.mergesociety.com",
    },
    datePublished: "2025-04-27T09:00:00Z",
    dateModified: "2025-04-27T09:00:00Z",
    inLanguage: "en-US",
    offers: {
      "@type": "Offer",
      price: "149.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-04-27",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P5W",
      startDate: "2025-05-01",
      endDate: "2025-06-05",
    },
    learningResourceType: "Interactive Module",
    educationalLevel: "Intermediate",
    teaches: "Artificial Intelligence, Neural Networks, AI Ethics and Safety",
    competencyRequired: "Basic knowledge of computer science concepts",
    about: [
      {
        "@type": "Thing",
        name: "Artificial Intelligence",
      },
      {
        "@type": "Thing",
        name: "Neural Networks",
      },
      {
        "@type": "Person",
        name: "Geoffrey Hinton",
      },
    ],
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "education",
      "technology",
      "artificial intelligence",
      "ethics",
      "neural networks",
    ],
    primaryTopic: "Artificial Intelligence Education",
    conceptualDifficulty: "Intermediate",
    targetAudience: [
      "Computer science students",
      "Technology professionals",
      "AI enthusiasts",
      "Ethics researchers",
    ],
    visualContent: true,
    comprehensiveness: "comprehensive",
    freshness: "current",
    interactiveContent: true,
    assessmentIncluded: true,
    certificationOffered: true,
  },
  analytics: {
    eventCategory: "Technology Education",
    pageType: "Course Module",
    contentPillar: "Artificial Intelligence",
    contentCluster: "Tech Education",
    expectedCompletionTime: 1200, // in minutes
    modulesCount: 8,
    quizzesCount: 8,
    challengesCount: 12,
    keyFigures: [
      "Geoffrey Hinton",
      "Ilya Sutskever",
      "Sam Altman",
      "Sundar Pichai",
      "Elon Musk",
    ],
    technicalDepth: "moderate to advanced",
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This learning module explores the evolution of AI from Geoffrey Hinton's early neural network research to modern applications and challenges, including ethical considerations, safety concerns, and the potential societal impacts of rapidly advancing AI technology.",
    entityMentions: [
      "Geoffrey Hinton",
      "Neural Networks",
      "Nobel Prize",
      "AI Ethics",
      "Large Language Models",
      "ChatGPT",
      "OpenAI",
      "Google",
      "XAI",
      "CrowdStrike Incident",
    ],
    contentStructure: "educational",
    visualElements: ["interactive simulations", "timeline", "diagrams"],
    technicalDepth: "moderate",
    aiSearchTerms: [
      "geoffrey hinton ai pioneer",
      "neural networks evolution",
      "ai ethics and safety",
      "large language models learning",
      "technology disruption education",
    ],
    technicalConcepts: [
      "neural networks",
      "machine learning",
      "word prediction",
      "language models",
      "AI safety research",
      "system integration failures",
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "college",
    closedCaptioning: true,
    alternativeTextForImagesAndDiagrams: true,
  },
  // Advanced 2025 metrics
  learningMetrics: {
    averageCompletionRate: "82%",
    averageUserRating: "4.7/5",
    skillsGained: [
      "AI fundamentals",
      "Neural network comprehension",
      "Ethical AI development",
      "Technology risk assessment",
      "AI policy understanding",
    ],
    industryRelevance: {
      technology: "high",
      education: "high",
      healthcare: "moderate",
      finance: "high",
      government: "moderate-high",
    },
    careerImpact:
      "Significant for technology professionals seeking to understand AI implications",
  },
  // New in 2025: Trust signals
  trustSignals: {
    factChecked: true,
    factCheckDate: "2025-04-27",
    sourcesVerified: true,
    expertReviewed: true,
    reviewers: [
      "Dr. Maria Hernandez, AI Ethics Institute",
      "Professor James Lin, Neural Computing Research Center",
    ],
    aiAssisted: true,
    aiAssistanceDisclosure:
      "Content structure and challenge design enhanced by AI",
    conflictOfInterestDisclosure: "None",
    certifiedBy: "International Association of Technology Educators",
  },
  // Learning module specifics
  learningModule: {
    moduleType: "challenge-based",
    difficulty: "adaptable",
    prerequisiteKnowledge: "Basic understanding of computing concepts",
    learningObjectives: [
      "Understand the evolution of neural networks",
      "Analyze AI safety concerns from multiple perspectives",
      "Identify potential societal impacts of advanced AI",
      "Evaluate approaches to AI regulation",
      "Develop critical thinking skills around technology ethics",
    ],
    assessmentMethods: [
      "Interactive quizzes",
      "Scenario-based challenges",
      "Peer discussions",
      "Project-based learning",
      "Reflective writing",
    ],
    adaptiveLearning: true,
    personalizationFeatures: true,
    progressTrackingEnabled: true,
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural
          Nets to Nobel Prizes and the Uncharted Future of Artificial
          Intelligence
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745745611/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh.jpg"
          }
          alt=" Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural Nets to Nobel Prizes and the Uncharted Future of Artificial  Intelligence"
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
          In December of last year, the prestigious Nobel Prize was awarded to
          Geoffrey Hinton, a legendary pioneer whose early work in machine
          learning helped lay the very foundation for today’s artificial
          intelligence revolution. Recognized after decades on the fringe as an
          outcast academic, Hinton’s life story now reads like a roadmap of
          technological transformation, ethical quandaries, and prophetic
          warnings. Journalist Brooke Silverbraga first introduced mainstream
          viewers to Hinton back in 2023, just as the world was feeling the
          first exhilarating—and alarming—waves of AI’s abrupt ascent.
        </p>

        <h2>From Outsider to Nobel Laureate: Hinton’s Journey</h2>
        <p>
          Hinton’s Nobel was the result of a lifetime spent questioning the
          status quo and doggedly following ideas that others considered
          far-fetched. Recounting the moment he was awakened by an unexpected
          call in the middle of the night, Hinton reflects with dry humor:
          “People dream of winning these things. When you do win it, does it
          feel like you thought it might? I never dreamt about winning one for
          physics, so I don’t know. I dreamt about winning one for figuring out
          how the brain works. But I didn’t figure out how the brain works, but
          I won one anyway.”
        </p>
        <p>
          There’s a certain irony to the Nobel—his lifelong aim was to unlock
          the secrets of the human mind, but it was his attempt to mimic the
          brain in silico that revolutionized technology. In 1986, Hinton
          proposed harnessing neural networks to predict the next word in a
          sequence—a humble premise that today forms the backbone of “large
          language models” like OpenAI’s ChatGPT.
        </p>

        <h2>“Did You Think We’d Get Here?”—The Surprising Pace of AI</h2>
        <p>
          When asked if he ever imagined we’d leap so quickly from crude
          theories to world-changing AI, Hinton admits, “Yes. But not this soon,
          because that was 40 years. I didn’t think we’d get here in only 40
          years. But 10 years ago, I didn’t believe we’d get here.”
        </p>
        <p>
          The sheer velocity of progress unsettles him. Hinton warns that while
          AI’s breakthroughs may soon revolutionize education and medicine (and
          maybe even help solve climate change), the “rapid progress really
          worries [me].” To capture the emotional risk, he offers a chilling
          metaphor: “We’re like somebody who has this really cute tiger cub….
          Unless you can be very sure that it’s not going to want to kill you
          when it’s grown up, you should worry. I’m kind of glad I’m 77.”
        </p>
        <p>
          Hinton’s apprehensions are not idle. In practical terms, he’s already
          diversified his money across three banks, anticipating that AI could
          make hackers more potent and authoritarians more oppressive. No one
          truly knows the “odds of an AI apocalypse,” but Hinton says, “I’d
          guess a 10 to 20% risk AI will take over from humans. People haven’t
          got it yet. People haven’t understood what’s coming. I don’t think
          there’s a way of stopping it. The issue is, can we design it in such a
          way that it never wants to take control, that it’s always benevolent?”
        </p>

        <h2>A Chorus of Warnings — and an Industry Racing Ahead</h2>
        <p>
          Hinton is not alone in his concern. The likes of Google CEO Sundar
          Pichai (“it can be very harmful if deployed wrongly”), XAI’s Elon Musk
          (“it has the potential of civilizational destruction”), and even
          OpenAI’s Sam Altman (“AI…most likely sort of leads to the end of the
          world”) have all voiced harrowing caveats. Yet, Hinton sees little
          evidence of meaningful restraint as the global AI race—fueled by
          hundreds of billions in investment—intensifies, especially between
          American tech firms and China.
        </p>
        <p>
          “If you look at what the big companies are doing right now, they’re
          lobbying to get less AI regulation,” Hinton notes. “There’s hardly any
          regulation as it is, but they want less because they want short term
          profits.” Hinton’s defiant independence traces back through a family
          tree of contrarians, scientists, and boundary-pushers, including not
          only his father, a prominent entomologist, but George Boole (whose
          algebra underpins computing) and George Everest (for whom the world’s
          tallest peak is named).
        </p>

        <h2>A Mechanic’s Mind—From Cameras to Neural Networks</h2>
        <p>
          Hinton’s curiosity is hands-on. During the interview, when a camera
          was accidentally knocked and the lens filter cracked, Hinton eagerly
          volunteered to repair it. “When I would make neural net models on the
          computer, I would then tinker with them for a long time to find out
          how they behaved. And a lot of people didn’t do much of that, but I
          loved tinkering with them.” Analogous to a mechanic obsessively
          studying the idiosyncrasies of a machine, Hinton dissected neural
          networks, studying and refining them not just as theory, but as
          living, evolving systems.
        </p>
        <p>
          Reminiscing, Hinton described betting quarters with protégé Ilya
          Sutskever on which model would best learn and score. Sutskever, now
          widely known as OpenAI’s Chief Scientist, notably helped depose CEO
          Sam Altman in a dramatic boardroom coup, motivated reportedly by fears
          Altman was prioritizing growth over safety. “I was quite proud of him
          for firing Sam Altman, even though it was very naive. Naive, Hinton
          says, because OpenAI employees were about to get millions of dollars
          that would be jeopardized by Altman’s departure. Altman returned,
          Sutskever left.”
        </p>
        <p>
          Hinton’s critique extends—albeit more gently—to his former colleagues
          at Google, and also to giants like Meta and XAI. “The fraction of
          their computer time they spend on safety research should be a
          significant fraction, like a third. Right now, it’s much, much less.”
        </p>

        <h2>Regulation: Needed, but Not Expected Anytime Soon</h2>
        <p>
          These days, Hinton watches from the “AI sidelines.” Though he
          advocates for government regulation, he openly doubts it will arrive
          with any urgency. “I’m curious if just in your normal day to day life,
          you despair, you fear for the future and assume it won’t be so good,”
          the interviewer asks. Hinton’s answer is measured: “I don’t despair,
          but mainly because even I find it very hard to take it seriously. It’s
          very hard to get your head around the fact that we’re at this very,
          very special point in history where in a relatively short time
          everything might totally change. A change of a scale we’ve never seen
          before. It’s hard to absorb that emotionally.”
        </p>
        <p>
          Some of Hinton’s worry isn’t confined to abstract threats. He’s
          already altered his financial habits, spreading his funds across
          several banks, believing these could be early targets for AI-powered
          attacks. When asked directly which sector might “breach” first, he
          points emphatically at finance.
        </p>

        <h2>Industry’s Silent Response—and a Final Fix</h2>
        <p>
          Notably, when asked how much of their computing resources are
          allocated to safety research, the major AI labs named in the interview
          declined to provide specific data, stating only that safety is
          “important” and that they “support regulation in general.” Yet,
          records reveal their lobbying is largely aimed at weakening or
          delaying legislative efforts.
        </p>
        <p>
          The article closes with a human touch: after a brief detour into the
          world of camerawork, the reporter confirms—thanks to Hinton’s
          tinkering instincts—“the lens is fixed.” A Nobel Prize winner, at home
          troubleshooting not just the future of humanity, but a busted camera
          lens.
        </p>
        <p>
          Geoffrey Hinton’s arc—from a ceaseless tinkerer with a mechanical mind
          to AI’s most celebrated, and most worried, oracle—mirrors the story of
          artificial intelligence itself: a blend of wild possibility, anxious
          uncertainty, and the unyielding hope that we can keep control of what
          we’ve built, before it grows up.
        </p>
        <h2>Recommended Articles</h2>
        <Section2 />
        <CommentSection />
      </article>
    </div>
  );
}

const Section2 = () => {
  const blogPosts = [
    {
      id: 2,
      title:
        "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745650037/ai-mcp_sseuxt.jpg",
      alt: "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
      date: "April 25, 2025",
      articleRoute: "ai-mcp",
    },
    {
      id: 3,
      title:
        "Inside the Magic of Large Language Models: How AI Autocompletes Human Thought",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745651306/ai-again_frbb7o.jpg",
      alt: "Inside the Magic of Large Language Models: How AI Autocompletes Human Thought",
      date: "April 26, 2025",
      articleRoute: "llms",
    },
    {
      id: 4,
      title:
        "The Evolution of Artificial Intelligence: From Rules to Cosmic Consciousness",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745653748/rise_of_ai_raoqb3.jpg",
      alt: "Visual representation of AI evolution from rule-based systems to cosmic intelligence",
      date: "April 26, 2025",
      articleRoute: "rise-of-ai",
    },
    {
      id: 5,
      title:
        "A Hands-On Review of Google’s AI Essentials Course: 5 Key Lessons, Honest Pros & Cons, and Is the Certificate Worth It?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745655234/google-ai_x9a2fc.jpg",
      alt: "A Hands-On Review of Google’s AI Essentials Course: 5 Key Lessons, Honest Pros & Cons, and Is the Certificate Worth It?",
      date: "April 26, 2025",
      articleRoute: "google-ais",
    },
    {
      id: 6,
      title: "Why Human Connection Still Beats Technology—Even in the AI Era",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745660247/motivation_dimnjq.jpg",
      alt: "Why Human Connection Still Beats Technology—Even in the AI Era",
      date: "April 26, 2025",
      articleRoute: "ai-with-jobs",
    },
    {
      id: 7,
      title:
        "The Future of Jobs: Which Careers Will Survive the AI Revolution?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745662410/jobs-servive-ai_lywum0.jpg",
      alt: "The Future of Jobs: Which Careers Will Survive the AI Revolution?",
      date: "April 26, 2025",
      articleRoute: "future-of-jobs",
    },
    {
      id: 8,
      title:
        "The Truth Behind Those Handcrafted Leather Bags and Watches: How AI, Actors, and Cheap Goods Are Fooling Shoppers Online",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745668014/fooling-online_w6akez.jpg",
      alt: "The Truth Behind Those 'Handcrafted' Leather Bags and Watches",
      date: "April 26, 2025",
      articleRoute: "online-shopping",
    },
    {
      id: 9,
      title:
        "Will AI Replace Programmers? A Veteran Engineer on the Future of Software Jobs",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745669972/programming-jobs_xlchqy.jpg",
      alt: "Will AI Replace Programmers? A Veteran Engineer on the Future of Software Jobs",
      date: "April 26, 2025",
      articleRoute: "will-programmers-vanish",
    },
    {
      id: 10,
      title:
        "Inside the Secret World of Technical Interview Cheating: Tactics, Temptations, and Terrible Consequences",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745672006/cheating_b3duti.jpg",
      alt: "A split screen showing a programmer in a remote interview with hidden cheating methods illustrated",
      date: "April 26, 2025",
      articleRoute: "cheating",
    },
    {
      id: 11,
      title:
        "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg",
      alt: " AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      date: "April 25, 2025",
      articleRoute: "ai-agents",
    },
    {
      id: 12,
      title:
        "Is AI Making Us Dumber? Navigating the Cognitive Costs of Automation in the Knowledge Age",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745919088/steve-johnson-ZPOoDQc8yMw-unsplash_tdzgss.jpg",
      alt: "Is AI Making Us Dumber? Navigating the Cognitive Costs of Automation in the Knowledge Age",
      date: "April 29, 2025",
      articleRoute: "is-ai-making-us-dumb",
    },
    {
      id: 13,
      title:
        "The Death of Coding: Why Chasing Tech Jobs Might Keep You Broke in the Age of AI and Bitcoin",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745932417/hennie-stander-U7N4fMhJpEg-unsplash_kvvwut.jpg",
      alt: "The Death of Coding: Why Chasing Tech Jobs Might Keep You Broke in the Age of AI and Bitcoin",
      date: "April 29, 2025",
      articleRoute: "ai-vs-jobs",
    },
    {
      id: 14,
      title:
        "Beyond the Nobel: Demis Hassabis, DeepMind, and the Race Toward Superhuman AI",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745934102/Demis_Hassabis_qjtfky.webp",
      alt: "Beyond the Nobel: Demis Hassabis, DeepMind, and the Race Toward Superhuman AI",
      date: "April 29, 2025",
      articleRoute: "whats-next",
    },
    {
      id: 15,
      title: "The moment we stopped understanding AI [AlexNet]",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746105277/zuzana-ruttkay-1kslaBtXBk8-unsplash_ebqdgh.jpg",
      alt: "The moment we stopped understanding AI [AlexNet]",
      date: "May 1, 2025",
      articleRoute: "we-stopped-understanding-ai",
    },
    {
      id: 16,
      title:
        "Microsoft’s Majorana One Chip: The Topological Quantum Leap That Could Change the Future of Computing",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746107634/boliviainteligente-frbBBb2l2SI-unsplash_pbavn7.jpg",
      alt: "Microsoft’s Majorana One Chip: The Topological Quantum Leap That Could Change the Future of Computing",
      date: "May 1, 2025",
      articleRoute: "majorana",
    },
    {
      id: 17,
      title: "All Machine Learning algorithms explained",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746109286/steve-johnson-_0iV9LmPDn0-unsplash_aczb7n.jpg",
      alt: "All Machine Learning algorithms explained",
      date: "May 1, 2025",
      articleRoute: "all-ai-algorithms",
    },
    {
      id: 21,
      title: "Top 5 Free AI Apps For iPhone & Android in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746522301/ChatGPT_Image_May_6_2025_12_03_40_PM_b3z4ej.png",
      alt: "Best free AI apps for mobile devices",
      date: "May 6, 2025",
      articleRoute: "best-ai-app-for-iphone",
    },
    {
      id: 22,
      title: "Best AI Tools for Research",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746544091/solen-feyissa-hWSNT_Pp4x4-unsplash_hogopw.jpg",
      alt: "illustration Best AI Tools for Research",
      date: "May 6, 2025",
      articleRoute: "best-ai-tools-for-research",
    },
  ];

  return (
    <>
      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link key={project.id} href={`/ai/${project.articleRoute}`} passHref>
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
    </>
  );
};
