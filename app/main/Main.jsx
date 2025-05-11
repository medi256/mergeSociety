"use client";
import { useRef } from "react";
import Link from "next/link"; // ← you missed this import!
import "./main.css";

const news = [
  {
    id: 1,
    title: "What are AI Agents?",
    articleRoute: "/ai/what-is-agents",
  },
  {
    id: 2,
    title:
      "AI, Machine Learning, Deep Learning & Generative AI: What’s the Real Difference?",
    articleRoute: "/ai/ai-ml-dp",
  },
  {
    id: 3,
    title: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
    articleRoute: "/apps/free-apps",
  },
  {
    id: 4,
    title: "Best AI Tools for Research",
    articleRoute: "/ai/best-ai-tools-for-research",
  },
  {
    id: 5,
    title:
      "WebSockets in 100 Seconds: An In Depth Guide to WebSockets, Socket.IO, and the Future of Real Time Communication",
    articleRoute: "/code-report/websocets-explained",
  },
  {
    id: 6,
    title: "HTTP 1 Vs HTTP 2 Vs HTTP 3!",
    articleRoute: "/code-report/http1-http2-http3",
  },
  {
    id: 7,
    title:
      "WebSockets vs. Polling vs. Long Polling: How Web Sockets work | System Design Interview Basics",
    articleRoute: "/code-report/websocket-polling",
  },
  {
    id: 8,
    title:
      "APIs vs SDKs Explained: How They Turbocharge Modern Cloud App Development",
    articleRoute: "/code-report/sdk-vs-api",
  },
  {
    id: 9,
    title:
      "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many Behind—Despite Record Profits",
    articleRoute: "/startup-stories/hiring",
  },
  {
    id: 10,
    title:
      "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
    articleRoute: "/startup-stories/invidia",
  },
  {
    id: 11,
    title:
      "15 Game Changing JavaScript Framework Features Every Developer Must Know in 2025",
    articleRoute: "/tech/javascript-features",
  },
  {
    id: 12,
    title:
      "21 Powerful Chrome DevTools Tips Every Web Developer Should Be Using in 2025",
    articleRoute: "/tech/21-devTools",
  },
  {
    id: 13,
    title:
      "The Ruby on Rails Explained: How This MVC Framework Powered the World’s Hottest Startups",
    articleRoute: "/tech/ruby-explained",
  },
  {
    id: 14,
    title:
      "Vibe Coding: The AI Revolution That's Changing Programming (and Breaking the Internet)",
    articleRoute: "/tech/vibe-coding",
  },
  {
    id: 15,
    title:
      "Google Gemini 2.5 Pro Surges to #1: The Future of Coding AI, OpenAI’s Strategic Shakeups, and What Every Developer Needs to Know",
    articleRoute: "/tech/google-coding-ai",
  },
  {
    id: 16,
    title:
      "God-Tier Developer Roadmap: From Scratch to the Limits of Human Knowledge",
    articleRoute: "/tech/developer-roadmaps",
  },
];

export default function NewsTicker() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 200;
    else current.scrollLeft += 200;
  };

  return (
    <div className="wrapper">
      <button
        className="arrow"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        ◀
      </button>

      <div className="ticker" ref={scrollRef}>
        {news.map((item) => (
          <Link key={item.id} href={item.articleRoute} passHref>
            <div className="newsItem">{item.title}</div>
          </Link>
        ))}
      </div>

      <button
        className="arrow"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        ▶
      </button>
    </div>
  );
}
