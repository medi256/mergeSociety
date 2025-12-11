import Link from "next/link";
import "../project.css";
// import Image from "next/image";
import "../project.css";

export const metadata = {
  title: "CSS Projects | Step-by-Step Guide for Beginners and Advanced Users",
  description:
    "Explore step-by-step CSS projects designed for both beginners and advanced users. Learn how to style web pages with CSS.",
  keywords: [
    "css projects",
    "css tutorials",
    "CSS projects for beginners",
    "CSS projects for advanced users",
    "web design projects",
    "CSS styling projects",
    "CSS layout projects",
    "CSS animation projects",
    "CSS effects",
    "CSS hover effects",
    "CSS navigation menu",
    "CSS pricing table",
    "CSS parallax scrolling",
    "CSS responsive design",
    "CSS grid projects",
    "CSS flexbox projects",
    "CSS keyframes",
    "CSS transitions",
    "CSS media queries",
    "CSS beginner  projects",
    "CSS advanced projects",
    "CSS projects for practice",
  ],

  authors: [
    {
      name: "Merge Society",
      url: "https://www.mergesociety.com/projects/cssP",
    },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP",
  },
  openGraph: {
    title: "CSS Projects | Step-by-Step Guide for Beginners and Advanced Users",
    description:
      "Stay updated with the latest trends in AI, including latest models, startups, and innovations in the tech industry.",
    url: "https://www.mergesociety.com/projects/cssP",
    siteName: "Merge Society",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/javascript-projects_uhalsm_ilayp7.jpg",
        width: 1200,
        height: 630,
        alt: "Merge Society preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Projects | Step-by-Step Guide for Beginners and Advanced Users",
    description:
      "Explore step-by-step CSS projects designed for both beginners and advanced users. Learn how to style web pages with CSS.",
    images: [
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/javascript-projects_uhalsm_ilayp7.jpg",
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

const CssProjects = () => {
  const cssOnlyProjectTitles = [
    {
      id: "1c",
      title: "Build a Simple Personal Portfolio Layout",
      alt: "Build a Simple Personal Portfolio Layout",
      date: "January 15, 2025",
      description:
        "Learn how to style a personal portfolio using basic CSS properties like background colors, fonts, and spacing. Focus on layout fundamentals such as margins, padding, and text alignment.",
    },
    {
      id: "2c",
      title: "Style a Blog Post with CSS",
      alt: "Style a Blog Post with CSS",
      date: "January 5, 2025",
      description:
        "Style a simple blog post using CSS. Learn how to apply font families, text colors, and adjust line height and spacing to enhance readability.",
    },
    {
      id: "3c",
      title: "Create a Responsive Navigation Menu",

      alt: "Create a Responsive Navigation Menu",
      date: "January 17, 2025",
      description:
        "Build a responsive navigation menu that works across devices using media queries. This project focuses on layout design and adapting styles for smaller screens.",
    },
    {
      id: "4c",
      title: "Design an Advanced Pricing Table",

      alt: "Design an Advanced Pricing Table",
      date: "January 16, 2025",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
    },
    {
      id: "5c",
      title: "Build a Parallax Scrolling Effect",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 3, 2025",
      description:
        "Learn how to create a parallax scrolling effect using CSS. This project covers how to manipulate background images and layers for a visually engaging web experience.",
    },
    {
      id: "6c",
      title: "Create a CSS Animation for Button Hover Effects",
      alt: "Create a CSS Animation for Button Hover Effects",
      date: "January 15, 2025",
      description:
        "Explore the power of CSS animations by designing interactive button hover effects. This project focuses on keyframes, transitions, and animation timing functions.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">CSS-Only Projects</h1>

      <div className="posts-grid">
        {cssOnlyProjectTitles.map((project) => (
          <Link key={project.id} href={`/projects/cssP/${project.id}`} passHref>
            <section className="post-card">
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <div className="post-button ct-button">Start Tutorial</div>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CssProjects;
