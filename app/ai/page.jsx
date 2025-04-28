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
      id: 11,
      title:
        "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745598233/MCP_tyhw2b.jpg",
      alt: " AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
      date: "April 25, 2025",
      articleRoute: "ai-agents",
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

export default Section2;
