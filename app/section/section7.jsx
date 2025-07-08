import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section8 = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Full Stack JavaScript Developer Roadmap 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751958054/javascript-developer-roadmap_lukifl.png",
      alt: "Full Stack JavaScript Developer Roadmap 2025 - Complete Guide",
      date: "July 8, 2025",
      articleRoute: "javascript-roadmap",
    },
    {
      id: 2,
      title: "HTML Roadmap: Complete Roadmap to HTML",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751966620/html-roadmap_cug0c3.png",
      alt: "HTML Roadmap 2025 - Complete Step-by-Step Guide to HTML Mastery",
      date: "July 8, 2025",
      articleRoute: "html-roadmap",
    },
    {
      id: 3,
      title:
        "CSS Roadmap: Your Ultimate Step-By-Step Guide to Becoming a CSS Pro",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751968411/css-raodmap_vhknyz.png",
      alt: "CSS Roadmap 2025 - Complete Guide to Mastering CSS",
      date: "July 8, 2025",
      articleRoute: "css-roadmap",
    },
    {
      id: 4,
      title: "How To Master React In 2025 (Complete Roadmap)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751970408/react-roadmap_qrfwdg.png",
      alt: "React Roadmap 2025 - Complete Guide to Mastering React",
      date: "July 8, 2025",
      articleRoute: "react-roadmap",
    },
    {
      id: 5,
      title: "How To Master Next.js Roadmap In 2025 (Complete Roadmap)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751974465/next_js_developer_roadmap_qsulle.png",
      alt: "Next.js Roadmap 2025 - Complete Guide to Mastering Next.js",
      date: "July 8, 2025",
      articleRoute: "nextjs-roadmap",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <section>
      <div className="h-ai">
        <h2>Programming language Roadmap</h2>
      </div>

      <div className="bg-grid-4">
        {latestPosts.map((project) => (
          <Link
            key={project.id}
            href={`/programming-roadmap/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image-4">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image-4"
                priority
              />
            </div>
            <div className="bg-content-4">
              <h2 className="bg-title-4">{project.title}</h2>
              <time
                className="bg-date-4"
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

export default Section8;
