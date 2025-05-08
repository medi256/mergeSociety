import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
  description:
    "A straightforward explanation of AI agents for non-technical professionals, breaking down the journey from basic chatbots to complex AI workflows and autonomous agents through practical, real-world examples.",
  keywords: [
    "AI agents",
    "LLM workflows",
    "large language models",
    "artificial intelligence",
    "RAG",
    "AI automation",
    "ChatGPT",
    "Claude",
    "AI for beginners",
    "non-technical AI guide",
    "practical AI applications",
    "AI decision-making",
    "React framework AI",
    "autonomous AI systems",
    "AI tutorial",
  ],
  category: "Artificial Intelligence",
  openGraph: {
    title: "AI Agents Demystified: The Step-by-Step Guide for Non-Techies",
    description:
      "Learn how AI agents work through practical examples: from basic chatbots to automated workflows and autonomous decision-making systems explained in plain language.",
    url: "https://www.mergesociety.com/ai/ai-agents",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg",
        width: 1200,
        height: 630,
        alt: "Visual representation of AI agents with three levels: chatbots, workflows, and autonomous systems",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-25T08:00:00Z",
    modifiedTime: "2025-04-25T08:00:00Z",
    section: "Technology Guides",
    tags: [
      "AI Agents",
      "Machine Learning",
      "Artificial Intelligence",
      "Technology Guide",
      "LLMs",
      "RAG",
      "AI Automation",
      "Beginner Guide",
      "Technology Tutorial",
      "AI Workflows",
    ],
  },
  authors: [
    {
      name: "Merge Society",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  alternates: {
    canonical: "https://www.mergesociety.com/ai/ai-agents",
    languages: {
      "en-US": "https://www.mergesociety.com/ai/ai-agents",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents Demystified: Non-Technical Guide with Real Examples",
    description:
      "Understanding AI agents through a simple 3-level approach: from chatbots to workflows to autonomous systems, explained for everyday users.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg",
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
      "max-snippet": 170,
    },
  },
  other: {
    readingTime: "8 minutes",
    contentType: "Educational Article",
    publishDate: "April 25, 2025",
    category: "Artificial Intelligence",
    subcategory: "AI for Beginners",
    featured: true,
    series: "Technology Explained Simply",
    relatedArticles: [
      "Building Your First AI Workflow in Notion",
      "Understanding RAG: The Non-Technical Explanation",
      "How AI Models Actually Make Decisions",
      "5 Ways Non-Techies Can Leverage AI in 2025",
    ],
    difficulty: "Beginner",
    techLevel: "Non-Technical",
    aiTools: ["ChatGPT", "Claude", "Perplexity", "Google Gemini"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg",
    datePublished: "2025-04-25T08:00:00Z",
    dateModified: "2025-04-25T08:00:00Z",
    author: {
      "@type": "Person",
      name: "Massa Medi",
      url: "https://www.mergesociety.com",
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
      "A straightforward explanation of AI agents for non-technical professionals, breaking down the journey from basic chatbots to complex AI workflows and autonomous agents through practical, real-world examples.",
    articleBody:
      "AI, AI AI AI AI, AI. There's a lot of noise out there—'agentic this,' 'AI agent that,' and workflows that sound straight out of a sci-fi novel...",
    keywords:
      "AI agents, LLM workflows, RAG, AI automation, non-technical AI guide, practical AI applications",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/ai/ai-agents",
    },
    mentions: [
      {
        "@type": "Person",
        name: "Andrew Ng",
      },
      {
        "@type": "Person",
        name: "Helena Liu",
      },
    ],
    about: [
      {
        "@type": "Thing",
        name: "Artificial Intelligence",
      },
      {
        "@type": "Thing",
        name: "Language Models",
      },
      {
        "@type": "Thing",
        name: "AI Automation",
      },
    ],
    educationalLevel: "Beginner",
    proficiencyLevel: "Beginner",
    isAccessibleForFree: true,
    learningResourceType: "Tutorial",
    skillLevel: "Beginner",
    teaches: "Understanding of AI agents, workflows, and language models",
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "educational",
      "technology",
      "artificial intelligence",
      "tutorial",
    ],
    primaryTopic: "Artificial Intelligence",
    conceptualDifficulty: "Simple",
    targetAudience: [
      "non-technical professionals",
      "AI beginners",
      "business users",
    ],
    visualContent: true,
    comprehensiveness: "comprehensive",
    freshness: "very recent",
  },
  analytics: {
    eventCategory: "Educational Content",
    pageType: "Tutorial",
    contentPillar: "AI Fundamentals",
    contentCluster: "AI Agents",
    expectedReadTime: 480, // in seconds
    wordCount: 1350,
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using
          Real Life Examples
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg"
          }
          alt="AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using
          Real Life Examples"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-25">
            | April 25, 2025
          </time>
        </h2>

        <p>
          <strong>AI, AI AI AI AI, AI.</strong> There’s a lot of noise out
          there—“agentic this,” “AI agent that,” and workflows that sound
          straight out of a sci-fi novel. Most explanations seem to either
          deep-dive into technical jargon or skate along the surface so lightly
          that you end up more confused than you started.
        </p>
        <p>
          But what if you’re someone who has <em>zero</em> technical background,
          yet you’re using AI tools every day? Maybe you’re curious about AI
          agents, but don’t know where to begin. If that’s you, you’re in the
          right place. This article follows a simple, three-step journey: we’ll
          build on what you already know (think ChatGPT), then ramp up to AI
          workflows, and finally, crack open the world of AI agents. And don’t
          worry: we’ll use plenty of practical, real-world examples you’ll
          actually encounter.
        </p>
        <p>
          And, seriously, all those intimidating acronyms and words you see like
          “RAG” (not a cleaning cloth!) or “React” (not the JavaScript
          framework!) are way simpler than you think. Ready for a plain-speak
          rundown? Let’s go.
        </p>

        <h2>Level 1: Large Language Models—The Chatbots You Already Know</h2>
        <p>
          Let’s start at basecamp: Large Language Models, or LLMs. These are the
          backbone behind popular AI chatbots like <strong>ChatGPT</strong>,{" "}
          <strong>Google Gemini</strong>, and <strong>Claude</strong>. Their
          specialty? Generating and editing text.
        </p>
        <p>
          Imagine this: <br />
          <em>You</em> (the human) provide an input, and the LLM processes it,
          returning an output based on the extensive (but not infinite) data it
          was trained on.
        </p>
        <p>
          For example: If you tell ChatGPT, “Draft an email requesting a coffee
          chat,” your initial text (“prompt”) is the <em>input</em>. ChatGPT
          works its magic and produces an email that’s probably way more
          polished (and polite) than your typical quick DM. That result? The{" "}
          <em>output</em>.
        </p>
        <p>
          Simple, right? But what if you ask it, “When is my next coffee chat?”
          Without even waiting for a response, you and I both know ChatGPT will
          fail here. Why? Because it doesn’t have access to your personal
          calendar.
        </p>
        <p>
          <strong>This reveals two important traits of LLMs:</strong>
        </p>
        <ol>
          <li>
            <strong>
              They have limited knowledge about proprietary or personal info.
            </strong>{" "}
            No access to your private stuff or company data unless you
            specifically provide it.
          </li>
          <li>
            <strong>They’re passive.</strong> These models wait for your prompt
            and then respond. They don’t leap into action themselves.
          </li>
        </ol>
        <p>
          <em>Hold on to these two facts as we move onward.</em>
        </p>

        <h2>Level 2: AI Workflows—Moving From Q&amp;A to Automated Tasks</h2>
        <p>
          Let’s build up from our coffee chat scenario. What if we took things a
          step further: <br />
          Every time you ask your chatbot about a personal event, what if it
          automatically fetches data from your Google Calendar before answering?
        </p>
        <p>
          With this logic, next time you ask, “When’s my chat with Elon
          Hussler?” the chatbot can tap into your calendar, find the answer,
          and—voilà!—give you the info you need.
        </p>
        <p>
          <strong>But there’s a hitch.</strong> What if your very next question
          is: “What will the weather be like that day?” The workflow fails here,
          because our setup only tells the LLM to check your calendar—there’s no
          pathway to the weather report.
        </p>
        <p>
          <strong>
            AI workflows follow pre-defined paths, known as “control logic.”
          </strong>{" "}
          They only do what you program them to do. If you want more steps—like
          checking the weather or using a text-to-audio model to read the answer
          aloud—you need to add those steps yourself. No matter how many steps
          you create, as long as a human (that’s you) is making the decisions
          and programming the route, it remains just an AI workflow—
          <strong>not</strong> an agent.
        </p>
        <p>
          <strong>Pro Tip: What is RAG?</strong>
          <br />
          You’ll see “RAG” everywhere—it stands for Retrieval Augmented
          Generation. In plain English, this just means giving an AI model a way
          to “look things up” (e.g., fetching your calendar or the weather)
          before answering. RAG is simply an AI workflow that pulls in outside
          info as needed, not magic.
        </p>
        <p>
          Speaking of practical workflows, here’s a real-world example, inspired
          by an awesome Helena Liu tutorial:
        </p>
        <ol>
          <li>
            <strong>Compile news article links</strong> in a{" "}
            <strong>Google Sheet</strong>—think of it as your personal news
            database.
          </li>
          <li>
            Use <strong>Perplexity</strong> to summarize those news articles,
            turning them into bite-size insights.
          </li>
          <li>
            Employ <strong>Claude</strong> (an AI language model) with a custom
            prompt to draft LinkedIn and Instagram posts based on those
            summaries.
          </li>
          <li>
            <strong>Automate it:</strong> Set the workflow to run daily at 8am,
            so your posts are ready with your morning coffee.
          </li>
        </ol>
        <p>
          What you see here: each step is planned and programmed by a human. If
          you’re not happy with the output—say your latest LinkedIn post isn’t
          hilarious enough (and you know you’re naturally funny)—you have to
          manually go back and tweak the prompts, then test it all over again.
          In traditional workflows, <strong>iteration is human-driven</strong>.
        </p>

        <h2>Level 3: AI Agents—When AI Becomes the Decision-Maker</h2>
        <p>
          Let’s take that workflow and ask: What’s different if we want to
          upgrade to a genuine AI agent?
        </p>
        <p>So far, as a human, your roles were to:</p>
        <ol>
          <li>
            <strong>Reason about the best approach:</strong> Which articles
            should I pick? How to summarize them? How to write a catchy social
            post?
          </li>
          <li>
            <strong>Take action:</strong> Compile links, use summarization
            tools, draft posts, etc.
          </li>
        </ol>
        <p>
          Now—for an AI workflow to become an <strong>AI agent</strong>, you—the
          human decision-maker—must get replaced by the LLM. In short:
        </p>
        <blockquote>
          <strong>
            The single biggest change: The AI agent reasons and acts
            autonomously, using tools and decision-making steps, without relying
            on a human to drive the process.
          </strong>
        </blockquote>
        <p>
          Imagine the agent thinking, “What’s the most efficient way to gather
          news articles? Copy and paste them all into Word? Nah—let’s stick to
          compiling links in a spreadsheet and then fetch content as needed.” It
          will decide, “Should I use Excel or Google Sheets? Well, the user’s
          already connected Google to make.com, so Sheets it is.”
        </p>
        <p>
          <strong>Pro Tip: The 'React' Framework for AI Agents</strong>
          <br />
          Not to be confused with Facebook’s JavaScript UI library, the “React”
          in this context refers to the cycle of <strong>RE</strong>ason and{" "}
          <strong>ACT</strong>—the essential workflow for any AI agent. Every
          agent must independently reason (plan) <em>and</em> act (do stuff).
        </p>
        <p>
          There’s one more trick: <strong>iteration.</strong> Previously, if
          your LinkedIn post wasn’t funny enough, you’d adjust the prompt and
          rerun the workflow yourself. With an AI agent, it can critique{" "}
          <em>its own work</em>—drafting content, then having another LLM review
          it based on best practices, and automatically revising until the
          quality is high enough. That loop can happen, start to finish, without
          human involvement.
        </p>

        <h2>Real-World AI Agent In Action: The Andrew Ng Demo</h2>
        <p>
          To see an agent at work, look no further than a real-world demo by
          Andrew Ng, one of the big names in AI.
        </p>
        <p>
          On this demo website, you input a keyword—say, “skier.” The AI vision
          agent reasons, “What does a skier look like?” (It imagines: a person
          on skis, whizzing down a snowy mountain.) Then, it{" "}
          <strong>acts</strong> by sifting through clips in a video, analyzing
          footage, and picking out scenes it thinks match your criteria. It
          indexes those clips and serves them up to you.
        </p>
        <p>
          Here’s what’s special: this agent does it all automatically, no human
          needed to pre-tag footage or label scenes as “skier,” “mountain,” or
          “snow.” The tech under the hood is advanced, but from the user’s
          perspective, it’s seamless and simple—search, and results appear.
        </p>
        <p>
          And that’s the magic: making high-tech workflows accessible to
          everyday users who just want things to work.
        </p>
        <p>
          For those interested, I’m currently building a basic AI agent of my
          own using Nan. Drop a comment if you have an idea for what kind of AI
          agent you’d like a tutorial on!
        </p>

        <h2>The Three Levels of AI In a Nutshell</h2>
        <p>
          To wrap up, here’s a visual summary (described in words) of everything
          covered:
        </p>
        <ol>
          <li>
            <strong>Level 1: LLMs as Chatbots</strong> – You give an input, the
            LLM responds with an output. Direct and simple.
          </li>
          <li>
            <strong>Level 2: AI Workflows</strong> – You give an input, and a
            pre-determined set of steps unfolds. External info (calendars,
            weather, APIs) may get pulled in. But the human sets those steps and
            tweaks them as needed.
          </li>
          <li>
            <strong>Level 3: AI Agents</strong> – The LLM receives a broad goal,
            devises its own plan for how to achieve it, acts using tools,
            self-critiques and iterates, and returns a finished result—the agent
            is now the decision-maker.
          </li>
        </ol>

        <p>
          If you found this guide helpful and want your AI skills to level up
          further, check out my tutorial on building a prompts database in
          Notion. See you next time—and until then, happy automating!
        </p>
        <h2>Recommended Articles</h2>
        <Section2 />
      </article>
    </div>
  );
}

const Section2 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural Nets to Nobel Prizes and the Uncharted Future of Artificial Intelligence",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745745611/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh.jpg",
      alt: "Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural Nets to Nobel Prizes and the Uncharted Future of Artificial Intelligence",
      date: "April 27, 2025",
      articleRoute: "god-father-of-ai",
    },

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
      id: 18,
      title:
        "Best ai girlfriend: How Sesame AI and Manus Herald a New Era of Machine Intelligence",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746475087/AI_Companion_and_Human_Connection_nwhjvx.png",
      alt: "Best ai girlfriend",
      date: "May 5, 2025",
      articleRoute: "best-ai-girlfriend",
    },
    {
      id: 19,
      title: "Best AI Apps for College Student",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746480455/ChatGPT_Image_May_6_2025_12_26_44_AM_iuptqr.png",
      alt: "Best AI Apps for College Student",
      date: "May 6, 2025",
      articleRoute: "best-ai-apps",
    },
    {
      id: 20,
      title: "Best AI Stocks to buy now",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746481809/ChatGPT_Image_May_6_2025_12_49_26_AM_f1ainj.png",
      alt: "Best AI Stocks to buy now",
      date: "May 6, 2025",
      articleRoute: "best-ai-stock",
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
      <div className="h-ai">
        <h2>
          Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural
          Nets to Nobel Prizes and the Uncharted Future of Artificial
          Intelligence
        </h2>
        <h2>AI</h2>
      </div>

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
