import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section6 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        " From SaaS Panic to Open Source Paradise: The Ultimate Guide to Escaping Subscription Hell",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745755138/airfocus-x8bEZVZnG_o-unsplash_zjo2s6.jpg",
      alt: " From SaaS Panic to Open Source Paradise: The Ultimate Guide to  Escaping Subscription Hell",
      date: " April 27, 2025",
      articleRoute: "saas",
    },
    {
      id: 2,
      title:
        " The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745759226/pankaj-patel-_SgRNwAVNKw-unsplash_o1ddom.jpg",
      alt: " The Best Frameworks for Solo SaaS Builders: Navigating Laravel, Next.js, and Beyond",
      date: " April 27, 2025",
      articleRoute: "best-framework",
    },
    {
      id: 3,
      title:
        " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745760892/ilya-pavlov-OqtafYT5kTw-unsplash_ar9e2f.jpg",
      alt: " The Definitive Beginner’s Guide to Picking Your Tech Stack for Web, Mobile, Desktop, Games, and AI",
      date: " April 27, 2025",
      articleRoute: "tech-stack",
    },
    {
      id: 4,
      title:
        "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg",
      alt: "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
      date: " April 27, 2025",
      articleRoute: "labing",
    },
    {
      id: 5,
      title:
        "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745763472/markus-spiske-iar-afB0QQw-unsplash_eifg9s.jpg",
      alt: "What Are Algorithms, Really? The Truth Behind the Technology Shaping Our World",
      date: " April 27, 2025",
      articleRoute: "algorithms",
    },
    {
      id: 6,
      title: "Every Python Library and Frameworks Explained",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746170967/rubaitul-azad-ZIPFteu-R8k-unsplash_li7rer.jpg",
      alt: "Every Python Library and Frameworks Explained",
      date: "May 2, 2025",
      articleRoute: "python-libraries",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h2>Code Report</h2>
      </div>

      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/code-report/${project.articleRoute}`}
            passHref
          >
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
    </section>
  );
};

export default Section6;
