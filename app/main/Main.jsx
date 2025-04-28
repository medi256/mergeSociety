"use client";
import { useRef } from "react";
import Link from "next/link"; // ← you missed this import!
import "./main.css";

const news = [
  {
    id: 1,
    title:
      "AI Agents Demystified: The Step-by-Step Guide for Non-Techies Using Real Life Examples",
    articleRoute: "/ai/ai-agents",
  },
  {
    id: 2,
    title:
      "Inside Big Tech’s Billion-Dollar Shopping Sprees: Microsoft, Apple, and the Art of Mega Acquisitions",
    articleRoute: "/acquisitions/big-tech",
  },
  {
    id: 3,
    title: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
    articleRoute: "/apps/free-apps",
  },
  {
    id: 4,
    title:
      "The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
    articleRoute: "/code-report/best-framework",
  },
  {
    id: 5,
    title:
      "How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)",
    articleRoute: "/latest/ai-is-officially-here",
  },
  {
    id: 6,
    title:
      "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many Behind—Despite Record Profits",
    articleRoute: "/startup-stories/hiring",
  },
  {
    id: 7,
    title:
      "Google’s Antitrust Battles, AI Shenanigans, Stretchy Computers & More: Your Wild, Weird Week in Tech",
    articleRoute: "/tech/chrome",
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
