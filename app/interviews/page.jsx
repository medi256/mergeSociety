import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Tech Interviews",
  description:
    "We share practical insights, expert tips, and real experiences to help you prepare and succeed in your next tech interview.",
  keywords: [],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/interviws" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/interviws",
  },
  openGraph: {
    title: "Merge Society | Tech Interviews",
    description:
      "We share practical insights, expert tips, and real experiences to help you prepare and succeed in your next tech interview.",

    url: "https://www.mergesociety.com/interviws",
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
    title: "Merge Society | Tech Interviews",
    description:
      "We share practical insights, expert tips, and real experiences to help you prepare and succeed in your next tech interview.",

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

const Section8 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Cracking the Code: The Essential Framework to Ace Google’s Software Engineering Interviews",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745765759/marten-bjork-6dW3xyQvcYE-unsplash_eyhnv6.jpg",
      alt: "Cracking the Code: The Essential Framework to Ace Google’s Software Engineering Interviews",
      date: " April 27, 2025",
      articleRoute: "google-intern",
    },
    {
      id: 2,
      title:
        " The Secret Weapon That Gets You Hired: How Storytelling Transforms Job Interviews",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745767104/cytonn-photography-n95VMLxqM2I-unsplash_nrfxl3.jpg",
      alt: "The Secret Weapon That Gets You Hired: How Storytelling Transforms Job Interviews",
      date: " April 27, 2025",
      articleRoute: "get-hired",
    },
    {
      id: 3,
      title:
        "A Behind-the-Scenes Look at a Google Software Engineer Mock Interview: Strategies, Solutions, and Success Tips",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745817726/gilles-roux-DSuQmFV3SD0-unsplash_gqnqje.jpg",
      alt: "A Behind-the-Scenes Look at a Google Software Engineer Mock Interview: Strategies, Solutions, and Success Tips",
      date: " April 27, 2025",
      articleRoute: "google-inter",
    },
    {
      id: 4,
      title:
        "Mastering Tricky Interview Questions: Turning Curveballs Into Conversation Starters",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745819388/nick-fewings-2ykkF3oQb_c-unsplash_k9xd0v.jpg",
      alt: "Mastering Tricky Interview Questions: Turning Curveballs Into Conversation Starters",
      date: " April 28, 2025",
      articleRoute: "prepare",
    },
    {
      id: 5,
      title:
        "Top Tech Interview Secrets: Why You’re (Probably) Doing LeetCode Wrong  – Advice from a Google Engineer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745820633/tim-mossholder-GOMhuCj-O9w-unsplash_s8o46s.jpg",
      alt: "Top Tech Interview Secrets: Why You’re (Probably) Doing LeetCode Wrong  – Advice from a Google Engineer",
      date: " April 28, 2025",
      articleRoute: "the-truth",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h1>
          Cracking the Code: The Essential Framework to Ace Google’s Software
          Engineering Interviews
        </h1>
        <h2>Interviews</h2>
      </div>

      <div className="bg-grid">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/interviews/${project.articleRoute}`}
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

export default Section8;
