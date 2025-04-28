import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section9 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "How to Transform $100,000 into $50 Million: An Advanced Business Acquisition Playbook",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745822936/stock-birken-9S3JMbqI5ng-unsplash_bkgrtz.jpg",
      alt: "How to Transform $100,000 into $50 Million: An Advanced Business Acquisition Playbook",
      date: " April 28, 2025",
      articleRoute: "turning",
    },
    {
      id: 2,
      title:
        "Inside Big Tech’s Billion-Dollar Shopping Sprees: Microsoft, Apple, and the Art of Mega Acquisitions",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745826004/stock-birken-J36Z5hLlnvk-unsplash_rzbfjk.jpg",
      alt: "Inside Big Tech’s Billion-Dollar Shopping Sprees: Microsoft, Apple, and the Art of Mega Acquisitions",
      date: " April 28, 2025",
      articleRoute: "big-tech",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h2>Acquisitions</h2>
      </div>

      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/acquisitions/${project.articleRoute}`}
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

export default Section9;
