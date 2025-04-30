import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section4 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Ultimate List: My 20 Favorite Android Apps of All Time—A Series Finale Celebration",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745735364/favorite-apps_nlfmwq.jpg",
      alt: "The Ultimate List: My 20 Favorite Android Apps of All Time",
      date: "April 27, 2025",
      articleRoute: "favorite-apps",
    },
    {
      id: 2,
      title:
        " The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745738744/best_apps_iraybe.jpg",
      alt: " The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      date: "April 27, 2025",
      articleRoute: "best-apps",
    },
    {
      id: 3,
      title: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745741454/best_gy0sdm.jpg",
      alt: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      date: "April 27, 2025",
      articleRoute: "free-apps",
    },
    {
      id: 4,
      title:
        "Global Windows Outage: How a CrowdStrike Update Brought the World to Its Knees",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745742482/error_ylvaka.jpg",
      alt: "Global Windows Outage: How a CrowdStrike Update Brought the World to  Its Knees",
      date: "April 27, 2025",
      articleRoute: "error",
    },
    {
      id: 5,
      title:
        "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer  Must Know",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745744668/crypto_l9kxvg.jpg",
      alt: "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer Must Know",
      date: "April 27, 2025",
      articleRoute: "crypto",
    },
    {
      id: 6,
      title:
        "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746030535/lxrcbsv-cOOUKEBpnIw-unsplash_zwdtmm.jpg",
      alt: "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      date: "April 30, 2025",
      articleRoute: "cool-tools",
    },
    {
      id: 7,
      title: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746033938/nandha-kumar-HToDV_gYh1A-unsplash_bhjuex.jpg",
      alt: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      date: "April 30, 2025",
      articleRoute: "another-tool",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h2>Apps</h2>
      </div>

      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/apps/${project.articleRoute}`}
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

export default Section4;
