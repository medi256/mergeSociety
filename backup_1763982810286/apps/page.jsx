import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Trending Apps",
  description:
    "Apps in the tech industry, including web apps, mobile apps, and software applications.",
  keywords: [
    "Apps",
    "Web Apps",
    "Mobile Apps",
    "Software Applications",
    "Tech Apps",
    "Tech Industry",
    "Tech Trends",
    "Tech Innovations",
    "Tech Software",
    "Tech Development",
    "Tech Solutions",
    "Tech Products",
    "Tech Services",
    "Tech Applications",
    "App Development",
    "App Design",
    "App Marketing",
    "App Monetization",
    "Trending Apps",
    "App Reviews",
    "App Launches",
    "App Updates",
    "App Features",
    "App Trends",
    "App Innovations",
    "App Technologies",
  ],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/apps" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/apps",
  },
  openGraph: {
    title: "Merge Society | Trending Apps",
    description:
      "Trending Apps in the tech industry, including web apps, mobile apps, and software applications.",
    url: "https://www.mergesociety.com/apps",
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
    title: "Merge Society | Trending Apps",
    description:
      "Trending Apps in the tech industry, including web apps, mobile apps, and software applications.",
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

const Section4 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Ultimate List: My 20 Favorite Android Apps of All Time—A Series Finale Celebration",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771946/favorite-apps_nlfmwq_ovuvrp.jpg",
      alt: "The Ultimate List: My 20 Favorite Android Apps of All Time",
      date: "April 27, 2025",
      articleRoute: "favorite-apps",
    },
    {
      id: 2,
      title:
        "The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771676/best_apps_iraybe_a7fwyd.jpg",
      alt: " The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      date: "April 27, 2025",
      articleRoute: "best-apps",
    },
    {
      id: 3,
      title: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771635/best_gy0sdm_llz9x7.jpg",
      alt: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      date: "April 27, 2025",
      articleRoute: "free-apps",
    },
    {
      id: 4,
      title:
        "Global Windows Outage: How a CrowdStrike Update Brought the World to Its Knees",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771620/error_ylvaka_dc6kc0.jpg",
      alt: "Global Windows Outage: How a CrowdStrike Update Brought the World to  Its Knees",
      date: "April 27, 2025",
      articleRoute: "error",
    },
    {
      id: 5,
      title:
        "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer  Must Know",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771542/crypto_l9kxvg_uu1awq.jpg",
      alt: "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer Must Know",
      date: "April 27, 2025",
      articleRoute: "crypto",
    },
    {
      id: 6,
      title:
        "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770454/lxrcbsv-cOOUKEBpnIw-unsplash_zwdtmm_yfuwdc.jpg",
      alt: "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      date: "April 30, 2025",
      articleRoute: "cool-tools",
    },
    {
      id: 7,
      title: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770431/nandha-kumar-HToDV_gYh1A-unsplash_bhjuex_dyvm1h.jpg",
      alt: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      date: "April 30, 2025",
      articleRoute: "another-tool",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <section>
      <div className="h-ai">
        <h1>Apps</h1>
      </div>

      <div className="bg-grid-4">
        {latestPosts.map((project) => (
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
