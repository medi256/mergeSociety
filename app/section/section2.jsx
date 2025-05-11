import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";
const Section2 = () => {
  const blogPosts = [
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
    {
      id: 23,
      title:
        "AI, Machine Learning, Deep Learning & Generative AI: What’s the Real Difference?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746551037/possessed-photography-g29arbbvPjo-unsplash_ug6art.jpg",
      alt: "Visual comparison of AI, machine learning, deep learning, and generative AI technologies with examples of each",
      date: "May 6, 2025",
      articleRoute: "ai-ml-dp",
    },
    {
      id: 24,
      title: "What are AI Agents?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746601327/julien-tromeur-6UDansS-rPI-unsplash_ugchfx.jpg",
      alt: "Visualization of AI agents orchestrating tools and systems autonomously",
      date: "May 6, 2025",
      articleRoute: "what-is-agents",
    },
    {
      id: 25,
      title:
        "AI Trends for 2025: Expert Predictions on Agentic AI, Model Sizes, and the Next Wave of Intelligence",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746953738/pexels-tara-winstead-8849295_hlz6r3.jpg",
      alt: "AI Trends for 2025",
      date: "May 11, 2025",
      articleRoute: "ai-trends-2025",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <>
      <div className="h-ai">
        <h2>AI</h2>
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
