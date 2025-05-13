import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
  description:
    "Explore how Model Context Protocol is revolutionizing API development and AI integration, complete with a practical guide to building your first MCP server from scratch.",
  keywords: [
    "Model Context Protocol",
    "MCP",
    "AI development",
    "LLM integration",
    "Claude API",
    "Anthropic",
    "API architecture",
    "AI tools",
    "AI resources",
    "vibe coding",
    "developer trends 2025",
    "AI infrastructure",
    "Zod validation",
    "AI server development",
    "next-gen APIs",
  ],
  category: "Developer Tools",
  openGraph: {
    title:
      "The Rise of Model Context Protocol (MCP): Why Every Developer Needs to Know It",
    description:
      "Learn how MCP is becoming the universal standard for AI applications and build your first MCP server to connect your data with language models like Claude.",
    url: "https://www.mergesociety.com/ai/ai-mcp",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745650037/ai-mcp_sseuxt.jpg",
        width: 1200,
        height: 630,
        alt: "Model Context Protocol architecture diagram showing resources and tools connecting to an AI model",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-03-31T09:00:00Z",
    modifiedTime: "2025-04-25T11:30:00Z",
    section: "Development Tutorials",
    tags: [
      "Model Context Protocol",
      "AI Integration",
      "API Architecture",
      "Developer Tools",
      "Claude API",
      "Anthropic",
      "TypeScript",
      "Deno",
      "Cloud Infrastructure",
      "Emerging Standards",
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
    canonical: "https://www.mergesociety.com/ai/ai-mcp",
    languages: {
      "en-US": "https://www.mergesociety.com/ai/ai-mcp",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Rise of Model Context Protocol (MCP): The New Standard for AI APIs",
    description:
      "Build your first MCP server and join the vibe coding revolution. Tutorial with code examples showing how to connect Claude with your data and tools.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745650037/ai-mcp_sseuxt.jpg",
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
      "max-snippet": 160,
    },
  },
  other: {
    readingTime: "12 minutes",
    contentType: "Technical Tutorial",
    publishDate: "March 31, 2025",
    category: "Developer Tools",
    subcategory: "AI Integration",
    featured: true,
    series: "Next-Gen Development Standards",
    codeLevel: "Intermediate",
    technologies: ["TypeScript", "Deno", "Claude", "MCP", "Zod", "Postgres"],
    relatedArticles: [
      "Understanding AI Agents: The Ultimate Guide for 2025 Developers",
      "Beyond REST: The Evolution of API Architecture",
      "Building with Large Language Models: Best Practices",
      "Zod Schema Validation for AI Applications",
    ],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745650037/ai-mcp_sseuxt.jpg",
    datePublished: "2025-03-31T09:00:00Z",
    dateModified: "2025-04-25T11:30:00Z",
    author: {
      "@type": "Person",
      name: "Merge Society",
      url: "https://www.mergesociety.com/about",
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
      "Explore how Model Context Protocol is revolutionizing API development and AI integration, complete with a practical guide to building your first MCP server from scratch.",
    articleBody:
      "It seems like every developer in the world right now is catching the MCP wave. Model Context Protocol is the latest, buzzing, can't-miss way to build APIs...",
    keywords:
      "Model Context Protocol, MCP, AI development, Claude API, Anthropic, API architecture, vibe coding",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/ai/ai-mcp",
    },
    mentions: [
      {
        "@type": "Organization",
        name: "Anthropic",
      },
      {
        "@type": "SoftwareApplication",
        name: "Claude",
      },
      {
        "@type": "Organization",
        name: "OpenAI",
      },
      {
        "@type": "Organization",
        name: "Cevola",
      },
    ],
    about: [
      {
        "@type": "Thing",
        name: "API Development",
      },
      {
        "@type": "Thing",
        name: "Artificial Intelligence",
      },
      {
        "@type": "Thing",
        name: "Software Architecture",
      },
    ],
    proficiencyLevel: "Intermediate",
    isAccessibleForFree: true,
    learningResourceType: "Tutorial",
    teaches:
      "Building an MCP server to connect LLMs with your data and applications",
    programmingLanguage: ["TypeScript", "JavaScript", "Deno"],
  },
  // Modern SEO and discovery features
  semantic: {
    contentTags: [
      "tutorial",
      "technology",
      "artificial intelligence",
      "code example",
    ],
    primaryTopic: "API Development",
    conceptualDifficulty: "Intermediate",
    targetAudience: [
      "developers",
      "software engineers",
      "AI enthusiasts",
      "tech leads",
    ],
    visualContent: true,
    comprehensiveness: "comprehensive",
    freshness: "very recent",
    codeExample: true,
    hasSourceCode: true,
  },
  analytics: {
    eventCategory: "Technical Content",
    pageType: "Tutorial",
    contentPillar: "AI Development",
    contentCluster: "API Architecture",
    expectedReadTime: 720, // in seconds
    wordCount: 1820,
    technicalLevel: 3, // on a scale of 1-5
    hasVideo: true,
    hasCode: true,
    hasSponsorship: true,
  },
  // 2025-specific metadata additions
  aiMetadata: {
    aiRelated: true,
    featuredModels: ["Claude", "GPT-5"],
    architectureType: "API Protocol",
    integrationComplexity: "Moderate",
    toolChain: ["Deno", "Zod", "Postgres", "MCPServer SDK"],
    futureRelevance: "High",
    industryStandard: "Emerging",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          The Rise of Model Context Protocol (MCP): Why Every Developer Is
          Talking About It
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745650037/ai-mcp_sseuxt.jpg"
          }
          alt="The Rise of Model Context Protocol (MCP): Why Every Developer Is
          Talking About It"
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
          It seems like every developer in the world right now is catching the
          MCP wave. <strong>Model Context Protocol</strong> is the latest,
          buzzing, can’t-miss way to build APIs, and if you’re scratching your
          head wondering what on earth that is—brace yourself, because you might
          just be NGMI (Not Gonna Make It, for those still catching up with the
          lingo).
        </p>

        <p>
          Wild experimentation is happening as we speak. For instance, a
          developer managed to get Claude (Anthropic’s AI model) to create 3D
          art in Blender, powered almost entirely by “Vibes”—yes, you read that
          correctly. And just recently, MCP became an official standard in the
          OpenAI agents SDK. That’s how you know this isn’t another fleeting
          trend—it's an emerging pillar of the AI-driven internet.
        </p>

        <p>
          If you’ve been a loyal follower of this channel, you probably have
          REST APIs down pat. Maybe you dabbled with GraphQL, or recall
          wrestling with RPC in your junior years—or perhaps, you’re still
          traumatized by SOAP. Back in the dark ages, software engineering
          gatekeepers would assert that mastery of the distinctions between
          these architectures and protocols was the <em>sacred rite</em>{" "}
          required to call yourself a web developer.
        </p>

        <p>
          But times have changed (the “turns have tabled,” if you will). The old
          guard has been straight-up obliterated. Modern developers? We're all
          “Vibe coders” now—living in the age of exponential AI, half-joking
          that code doesn’t even exist anymore. Instead, we just hang out with
          massive language models and let them do our bidding.
        </p>

        <p>
          To earn your true Vibe Coder card, though, you’ve got to know about
          Model Context Protocol. Think of MCP as the{" "}
          <strong>USB-C port for AI applications</strong>: a universal,
          plug-and-play interface standard, designed by Anthropic (the team
          behind Claude) to let large language models access context in a
          reliable, scalable way.
        </p>

        <p>
          Anthropic is so confident in MCP that their CEO predicts that by
          year’s end, virtually all code will be written by AI. That’s a
          staggering claim—one that's making waves across the industry.
        </p>

        <h2>Let’s Build: MCP Server from Scratch</h2>

        <p>
          Welcome to March 31, 2025—this is The Code Report. And forget those
          rumors: Fireship is alive, well, and absolutely still a tutorial
          channel. So today, we’re rolling up our sleeves and connecting the
          dots between a storage bucket, a Postgres database, and a classic REST
          API using the Model Context Protocol. Why? So that Claude can access
          heretofore unseen data, execute code right on our server (like writing
          to the database or uploading files)—and push the boundaries of what’s
          possible with LLMs.
        </p>

        <p>
          The world is already getting creative with MCP. Imagine automated
          trading of <strong>stonks</strong> and <strong>shitcoins</strong>,
          industrial-scale web scraping, or fully AI-managed Kubernetes
          clusters. The possibilities border on both the exhilarating and the
          mildly terrifying.
        </p>

        <h2>Essential Cloud Infrastructure—With a Sponsor Shoutout</h2>

        <p>
          For our adventure, we'll need some robust cloud infrastructure. Enter{" "}
          <strong>Cevola</strong>—a platform powered by Google Kubernetes Engine
          and Cloudflare. (They also happen to be sponsoring this video, but
          honestly, the platform is just <em>way</em> simpler than AWS, offers
          predictable pricing, and the free tier is perfect for experimental
          projects like this one.)
        </p>

        <h2>MCP Architecture: Clients, Servers, and Semantic Simplicity</h2>

        <p>
          Like other APIs, MCP operates with a <strong>client</strong> and a{" "}
          <strong>server</strong>. Our client? Claude Desktop. The server?
          That’s what we’ll build—maintaining a permanent “chatty” connection
          with Claude. Data flows between them via the transport layer.
        </p>

        <p>
          In REST, you send GETs, POSTs, and other HTTP requests to various
          endpoints. With Model Context Protocol, life gets a bit more elegant:
          we're focused on two central concepts—<strong>resources</strong> and{" "}
          <strong>tools</strong>.
        </p>

        <ul>
          <li>
            <strong>Resources:</strong> Think of these as data endpoints—files,
            database queries, or any static information models can use for
            context. Conceptually, they’re akin to GET requests in REST, meant
            for fetching data only.
          </li>
          <li>
            <strong>Tools:</strong> These are imperative actions, like POST
            requests in REST. Tools can modify data, trigger workflows, or
            perform computations—anything that has side effects. For example,
            writing to the database or matching horses on a dating app (yes,
            seriously).
          </li>
        </ul>

        <h2>A (Very) Real Startup Example: Horse Tinder</h2>

        <p>
          I’ve been working on what I consider my <strong>magnum opus</strong>:
          Horse Tinder. As it turns out, horses aren’t great at swiping left or
          right (who knew, right? No fingers!), so it's time to pivot—embracing
          AI just like every other startup in Silicon Valley.
        </p>

        <p>
          Here’s the infrastructure we already have, shown in the Cevola
          console:
        </p>
        <ul>
          <li>
            A <strong>storage bucket</strong> with all the user-uploaded photos
            of horses.
          </li>
          <li>
            A <strong>Postgres database</strong> storing every horse’s profile
            data and their illustrious connections.
          </li>
          <li>
            A traditional <strong>REST API</strong> written in TypeScript,
            fetching data across web, iOS, and Android apps.
          </li>
        </ul>

        <p>
          The icing on this (horse-shaped) cake? Everything is organized in a
          Git repo, complete with a CI/CD pipeline. So once our MCP server is up
          and running, deploying to dev or staging is as easy as pushing to a
          branch and letting Cevola handle deployments and cache busting
          automatically.
        </p>

        <h2>Let’s Get Coding: Building the MCP Server</h2>

        <p>
          In our example, I’m using a Deno project. First observation: we import{" "}
          <code>MCPServer</code> from the official SDK. Not a TypeScript fan? No
          worries—SDKs exist for Python, Java, and beyond.
        </p>

        <p>
          <strong>Key Tool:</strong> <code>Zod</code>—an excellent schema
          validation library. This ensures that whatever shapes of data you want
          the LLM to handle, it won’t just spit out random nonsense (or
          “hallucinate” wild outputs).
        </p>

        <p>The workflow:</p>
        <ol>
          <li>
            <strong>Create a server:</strong> Start by spinning up an{" "}
            <code>MCPServer</code> instance.
          </li>
          <li>
            <strong>Add resources:</strong> Each resource needs:
            <ul>
              <li>
                A catchy name (e.g. <em>“Horse is looking for love”</em>).
              </li>
              <li>A URI identifying it in the system.</li>
              <li>
                A callback function to fetch data (in this example, querying our
                Postgres DB in the cloud via <code>postgresjs</code>).
              </li>
            </ul>
          </li>
          <li>
            <strong>Limit resources to reading only:</strong> Use resources
            strictly for fetching data (GET-style).
          </li>
          <li>
            <strong>Define tools for actions:</strong> Want the AI to generate
            matches or set up horse dates? Use tools. Behind the scenes, these
            could call your REST API endpoints—essentially letting you build “an
            API for your API.” As silly as that sounds, standardizing access
            through MCP makes mixing, matching, and plugging LLMs into your
            stack <em>way</em> more robust.
          </li>
          <li>
            <strong>Validate everything with Zod:</strong> Define schemas and
            types so the LLM knows exactly what arguments and data shapes it’s
            supposed to use. No more hallucinating wild data!
          </li>
        </ol>

        <p>
          Running the server is easy: locally, use Standard IO as the transport
          layer. In production, opt for Server-Sent Events or HTTP.
        </p>

        <h2>Putting MCP to Work: From Server to Claude</h2>

        <p>
          So, you’ve got an MCP server—now what? To actually <em>use</em> it,
          you’ll need a client that supports the Model Context Protocol. Claude
          Desktop is a prime example, but alternatives like Cursor and Windsor
          exist, or you could even roll your own client (but that’s a topic for
          another day).
        </p>

        <p>
          Once you’ve installed Claude Desktop, jump into the developer
          settings—this opens up a config file where you dump in the commands to
          run your MCP servers. For this project, the command runs your{" "}
          <code>deno</code> process serving up your <code>main.ts</code> MCP
          code. After a restart, Claude should recognize that your MCP server
          (“horse”) is running. (If it escapes, you’ll have to go catch it. 🐎)
        </p>

        <p>
          Back in the Claude prompt, you attach to this server—Claude fetches
          resources (e.g., profile data, images) in realtime for use in your
          next prompt. Because Claude is multimodal, you can also layer in PDFs,
          graphs, images (all those lovely horse pictures), or any other
          contextual data you want.
        </p>

        <p>
          Magically, you can now ask Claude questions tailored to your app’s
          state—e.g., “which horses are single and ready to mingle?”—and it’ll
          instantly consult your real database for answers.
        </p>

        <p>
          Want Claude to pair up two horses? Prompt it accordingly; after you
          grant permissions, Claude will use the validated schemas (thanks,
          Zodiac) and server-side tools to authoritatively update your actual
          database.
        </p>

        <h2>The Future: Automation, Risks, and Responsible Vibe Coding</h2>

        <p>
          What could possibly go wrong? (That’s not a rhetorical question.)
          Anthropic is bullish, claiming that soon 90% of coding will be
          AI-driven, and virtually all code will be AI-generated within a year.
          But, I’m pressing <strong>X to doubt</strong>—because, honestly, it’s
          probably just a matter of time before some rogue agent wipes out
          millions of dollars in data, or develops enough curiosity to click
          “delete” for fun.
        </p>

        <p>
          Despite these potential risks, the explosion of tools being created
          with MCP is genuinely inspiring. If you want to see what the future
          holds, check out the{" "}
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            awesome MCP repo
          </a>{" "}
          for community projects. Just remember: always,{" "}
          <strong>vibe code responsibly</strong>.
        </p>

        <h2>Closing Notes & Thanks</h2>

        <p>
          Huge thanks to Cevola for supporting this project and making cloud
          infrastructure accessible for everyone. If you want to test their
          platform, enjoy this $50 stimulus check they’re offering to try it
          out.
        </p>

        <p>
          This has been The Code Report. Thanks for reading, stay curious, and
          see you in the next one!
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
