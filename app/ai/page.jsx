import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | AI Trends",
  description:
    "Stay updated with the latest trends in AI, including latest models, startups, and innovations in the tech industry.",
  keywords: [
    "AI News",
    "AI Acquisitions",
    "AI Startups",
    "AI Technology",
    "AI Trends",
    "AI Innovations",
    "AI Research",
    "AI Applications",
    "AI Solutions",
    "AI Insights",
    "AI Analysis",
    "AI Growth",
    "AI Strategies",
    "AI Investments",
    "AI Partnerships",
    "AI Industry News",
    "Artificial Intelligence News",
    "chatgpt",
    "gpt-4",
    "gpt-3",
    "gpt-2",
    "gpt-1",
    "gpt",
    "openai",
    "google",
    "microsoft",
    "ai acquisitions",
    "ai startups",
    "generative ai",
    "gemini",
    "bard",
    "llm",
    "large language model",
    "ai technology",
    "cloud 3.5",
    "image generation",
    "text generation",
    "text to image",
    "text to video",
    "openai  news",
    "google news",
    "microsoft news",
    "ai news",
  ],

  authors: [{ name: "Merge Society", url: "https://www.mergesociety.com/ai" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/ai",
  },
  openGraph: {
    title: "Merge Society | AI Trends",
    description:
      "Stay updated with the latest trends in AI, including latest models, startups, and innovations in the tech industry.",
    url: "https://www.mergesociety.com/ai",
    siteName: "Merge Society",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
        width: 1200,
        height: 630,
        alt: "Merge Society preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Society | AI Trends",
    description:
      "Stay updated with the latest trends in AI, including latest models, startups, and innovations in the tech industry.",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  category: "Technology",
};

const Section2 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural Nets to Nobel Prizes and the Uncharted Future of Artificial Intelligence",
      image:
        "/mergesociety/Geoffrey_E._Hinton__2024_Nobel_Prize_Laureate_in_Physics__cropped1_ztgfvh_potwn5.jpg",
      alt: "Geoffrey Hinton: The “Godfather of AI” Sounds the Alarm: From Neural Nets to Nobel Prizes and the Uncharted Future of Artificial Intelligence",
      date: "April 27, 2025",
      articleRoute: "god-father-of-ai",
    },

    {
      id: 2,
      title:
        "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
      image:
        "/mergesociety/ai-mcp_sseuxt_ajwoxg.jpg",
      alt: "The Rise of Model Context Protocol (MCP): Why Every Developer Is Talking About It",
      date: "April 25, 2025",
      articleRoute: "ai-mcp",
    },
    {
      id: 3,
      title:
        "Inside the Magic of Large Language Models: How AI Autocompletes Human Thought",
      image:
        "/mergesociety/ai-again_frbb7o_etkpee.jpg",
      alt: "Inside the Magic of Large Language Models: How AI Autocompletes Human Thought",
      date: "April 26, 2025",
      articleRoute: "llms",
    },
    {
      id: 4,
      title:
        "The Evolution of Artificial Intelligence: From Rules to Cosmic Consciousness",
      image:
        "/mergesociety/rise_of_ai_raoqb3_fmmfwu.jpg",
      alt: "Visual representation of AI evolution from rule-based systems to cosmic intelligence",
      date: "April 26, 2025",
      articleRoute: "rise-of-ai",
    },
    {
      id: 5,
      title:
        "A Hands-On Review of Google’s AI Essentials Course: 5 Key Lessons, Honest Pros & Cons, and Is the Certificate Worth It?",
      image:
        "/mergesociety/google-ai_x9a2fc_zsjzlz.jpg",
      alt: "A Hands-On Review of Google’s AI Essentials Course: 5 Key Lessons, Honest Pros & Cons, and Is the Certificate Worth It?",
      date: "April 26, 2025",
      articleRoute: "google-ais",
    },
    {
      id: 6,
      title: "Why Human Connection Still Beats Technology—Even in the AI Era",
      image:
        "/mergesociety/motivation_dimnjq_kbo00z.jpg",
      alt: "Why Human Connection Still Beats Technology—Even in the AI Era",
      date: "April 26, 2025",
      articleRoute: "ai-with-jobs",
    },
    {
      id: 7,
      title:
        "The Future of Jobs: Which Careers Will Survive the AI Revolution?",
      image:
        "/mergesociety/jobs-servive-ai_lywum0_oag3ma.jpg",
      alt: "The Future of Jobs: Which Careers Will Survive the AI Revolution?",
      date: "April 26, 2025",
      articleRoute: "future-of-jobs",
    },
    {
      id: 8,
      title:
        "The Truth Behind Those Handcrafted Leather Bags and Watches: How AI, Actors, and Cheap Goods Are Fooling Shoppers Online",
      image:
        "/mergesociety/fooling-online_w6akez_naqb3m.jpg",
      alt: "The Truth Behind Those 'Handcrafted' Leather Bags and Watches",
      date: "April 26, 2025",
      articleRoute: "online-shopping",
    },
    {
      id: 9,
      title:
        "Will AI Replace Programmers? A Veteran Engineer on the Future of Software Jobs",
      image:
        "/mergesociety/programming-jobs_xlchqy_x6fx4p.jpg",
      alt: "Will AI Replace Programmers? A Veteran Engineer on the Future of Software Jobs",
      date: "April 26, 2025",
      articleRoute: "will-programmers-vanish",
    },
    {
      id: 10,
      title:
        "Inside the Secret World of Technical Interview Cheating: Tactics, Temptations, and Terrible Consequences",
      image:
        "/mergesociety/cheating_b3duti_irxoxq.jpg",
      alt: "A split screen showing a programmer in a remote interview with hidden cheating methods illustrated",
      date: "April 26, 2025",
      articleRoute: "cheating",
    },
    {
      id: 11,
      title:
        "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      image:
        "/mergesociety/MCP_tyhw2b_umtclp.jpg",
      alt: " AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      date: "April 25, 2025",
      articleRoute: "ai-agents",
    },
    {
      id: 12,
      title:
        "Is AI Making Us Dumber? Navigating the Cognitive Costs of Automation in the Knowledge Age",
      image:
        "/mergesociety/steve-johnson-ZPOoDQc8yMw-unsplash_tdzgss_gshrpi.jpg",
      alt: "Is AI Making Us Dumber? Navigating the Cognitive Costs of Automation in the Knowledge Age",
      date: "April 29, 2025",
      articleRoute: "is-ai-making-us-dumb",
    },
    {
      id: 13,
      title:
        "The Death of Coding: Why Chasing Tech Jobs Might Keep You Broke in the Age of AI and Bitcoin",
      image:
        "/mergesociety/hennie-stander-U7N4fMhJpEg-unsplash_kvvwut_c0gs7v.jpg",
      alt: "The Death of Coding: Why Chasing Tech Jobs Might Keep You Broke in the Age of AI and Bitcoin",
      date: "April 29, 2025",
      articleRoute: "ai-vs-jobs",
    },
    {
      id: 14,
      title:
        "Beyond the Nobel: Demis Hassabis, DeepMind, and the Race Toward Superhuman AI",
      image:
        "/mergesociety/Demis_Hassabis_qjtfky_s4xyfx.webp",
      alt: "Beyond the Nobel: Demis Hassabis, DeepMind, and the Race Toward Superhuman AI",
      date: "April 29, 2025",
      articleRoute: "whats-next",
    },
    {
      id: 15,
      title: "The moment we stopped understanding AI [AlexNet]",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770146/zuzana-ruttkay-1kslaBtXBk8-unsplash_ebqdgh_hxecir.jpg",
      alt: "The moment we stopped understanding AI [AlexNet]",
      date: "May 1, 2025",
      articleRoute: "we-stopped-understanding-ai",
    },
    {
      id: 16,
      title:
        "Microsoft’s Majorana One Chip: The Topological Quantum Leap That Could Change the Future of Computing",
      image:
        "/mergesociety/boliviainteligente-frbBBb2l2SI-unsplash_pbavn7_uuey4f.jpg",
      alt: "Microsoft’s Majorana One Chip: The Topological Quantum Leap That Could Change the Future of Computing",
      date: "May 1, 2025",
      articleRoute: "majorana",
    },
    {
      id: 17,
      title: "All Machine Learning algorithms explained",
      image:
        "/mergesociety/steve-johnson-_0iV9LmPDn0-unsplash_aczb7n_dw4g3c.jpg",
      alt: "All Machine Learning algorithms explained",
      date: "May 1, 2025",
      articleRoute: "all-ai-algorithms",
    },
    {
      id: 18,
      title:
        "Best ai girlfriend: How Sesame AI and Manus Herald a New Era of Machine Intelligence",
      image:
        "/mergesociety/AI_Companion_and_Human_Connection_nwhjvx_h5m5yb.png",
      alt: "Best ai girlfriend",
      date: "May 5, 2025",
      articleRoute: "best-ai-girlfriend",
    },
    {
      id: 19,
      title: "Best AI Apps for College Student",
      image:
        "/mergesociety/ChatGPT_Image_May_6_2025_12_26_44_AM_iuptqr_j0i7vz.png",
      alt: "Best AI Apps for College Student",
      date: "May 6, 2025",
      articleRoute: "best-ai-apps",
    },
    {
      id: 21,
      title: "Top 5 Free AI Apps For iPhone & Android in 2025",
      image:
        "/mergesociety/ChatGPT_Image_May_6_2025_12_03_40_PM_b3z4ej_t8cja3.png",
      alt: "Best free AI apps for mobile devices",
      date: "May 6, 2025",
      articleRoute: "best-ai-app-for-iphone",
    },
    {
      id: 22,
      title: "Best AI Tools for Research",
      image:
        "/mergesociety/solen-feyissa-hWSNT_Pp4x4-unsplash_hogopw_cm1nso.jpg",
      alt: "illustration Best AI Tools for Research",
      date: "May 6, 2025",
      articleRoute: "best-ai-tools-for-research",
    },
    {
      id: 23,
      title:
        "AI, Machine Learning, Deep Learning & Generative AI: What’s the Real Difference?",
      image:
        "/mergesociety/possessed-photography-g29arbbvPjo-unsplash_ug6art_vv5kxg.jpg",
      alt: "Visual comparison of AI, machine learning, deep learning, and generative AI technologies with examples of each",
      date: "May 6, 2025",
      articleRoute: "ai-ml-dp",
    },
    {
      id: 24,
      title: "What are AI Agents?",
      image:
        "/mergesociety/julien-tromeur-6UDansS-rPI-unsplash_ugchfx_yomdgo.jpg",
      alt: "Visualization of AI agents orchestrating tools and systems autonomously",
      date: "May 6, 2025",
      articleRoute: "what-is-agents",
    },
    {
      id: 25,
      title:
        "AI Trends for 2025: Expert Predictions on Agentic AI, Model Sizes, and the Next Wave of Intelligence",
      image:
        "/mergesociety/pexels-tara-winstead-8849295_hlz6r3_qri1oi.jpg",
      alt: "AI Trends for 2025",
      date: "May 11, 2025",
      articleRoute: "ai-trends-2025",
    },
    {
      id: 26,
      title:
        "Torvalds Speaks: Impact of Artificial Intelligence on Programming",
      image:
        "/mergesociety/Linus-Torvalds_kcaenk_ekh2rc.webp",
      alt: "Torvalds Speaks",
      date: "May 11, 2025",
      articleRoute: "tovard-on-ai",
    },
    {
      id: 27,
      title:
        "Grok 4 AI: Elon Musk’s Game-Changing Chatbot Shocks the World (and Sparks Outrage)",
      image:
        "/mergesociety/grok_4_jv3jmy_o1gw76.png",
      alt: "Grok 4 AI interface showing controversial chatbot responses",
      date: "July 12, 2025",
      articleRoute: "grok4",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <>
      <div className="h-ai">
        <h1>AI</h1>
      </div>

      <div className="bg-grid">
        {latestPosts.map((project) => (
          <Link key={project.id} href={`/ai/${project.articleRoute}`} passHref>
            <div className="bg-image">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                priority
                className="bg-image"
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

export default Section2;
