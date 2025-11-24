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
