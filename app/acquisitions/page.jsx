import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Acquisitions",
  description:
    "Acquisitions in the tech industry, including mergers and acquisitions, startup acquisitions, and tech company acquisitions.",
  keywords: [
    "Acquisitions",
    "Tech Acquisitions",
    "Tech News",
    "Tech Industry",
    "Tech Trends",
    "Tech Companies",
    "Tech Startups",
    "Tech Mergers",
    "Tech Investments",
    "Tech Partnerships",
    "Tech Innovations",
    "Tech Strategies",
    "Tech Growth",
    "Tech Analysis",
    "Tech Insights",
    "AI Acquisitions",
    "Acquisitions in Tech",
    "Tech Mergers and Acquisitions",
    "startup acquisitions",
    "mergers and acquisitions",
    "business acquisitions",
    "company acquisitions",
    "mergers and acquisitions news",
    "mergers and acquisitions trends",
    "mergers and acquisitions analysis",
  ],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/acquisitions" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/acquisitions",
  },
  openGraph: {
    title: "Merge Society | Acquisitions",
    description:
      "Acquisitions in the tech industry, including mergers and acquisitions, startup acquisitions, and tech company acquisitions.",
    url: "https://www.mergesociety.com/acquisitions",
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
    title: "Merge Society | Acquisitions",
    description:
      "Acquisitions in the tech industry, including mergers and acquisitions, startup acquisitions, and tech company acquisitions.",
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

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section>
      <div className="h-ai">
        <h1>
          Inside Big Tech’s Billion-Dollar Shopping Sprees: Microsoft, Apple,
          and the Art of Mega Acquisitions
        </h1>
        <h2>Acquisitions</h2>
      </div>

      <div className="bg-grid-4">
        {latestPosts.map((project) => (
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
