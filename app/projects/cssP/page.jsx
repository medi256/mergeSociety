import Link from "next/link";
import ScrollToTop from "@/app/ScrollToTop";
import Image from "next/image";

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
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP",
  },

  openGraph: {
    title: "CSS Projects | Step-by-Step Guide for Beginners and Advanced Users",
    description:
      "Step-by-step CSS projects for learning web design and styling using only CSS.",
  },
};

const CssProjects = () => {
  const cssOnlyProjectTitles = [
    {
      id: "1c",
      title: "Build a Simple Personal Portfolio Layout",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736527272/cssstyling_ouoarm.jpg",
      alt: "Build a Simple Personal Portfolio Layout",
      date: "January 15, 2025",
      description:
        "Learn how to style a personal portfolio using basic CSS properties like background colors, fonts, and spacing. Focus on layout fundamentals such as margins, padding, and text alignment.",
    },
    {
      id: "2c",
      title: "Style a Blog Post with CSS",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577431/cssblog_stuovd.jpg",
      alt: "Style a Blog Post with CSS",
      date: "January 11, 2025",
      description:
        "Style a simple blog post using CSS. Learn how to apply font families, text colors, and adjust line height and spacing to enhance readability.",
    },
    {
      id: "3c",
      title: "Create a Responsive Navigation Menu",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577561/cssresume_n7bzyu.jpg",
      alt: "Create a Responsive Navigation Menu",
      date: "January 17, 2025",
      description:
        "Build a responsive navigation menu that works across devices using media queries. This project focuses on layout design and adapting styles for smaller screens.",
    },
    {
      id: "4c",
      title: "Design an Advanced Pricing Table",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577692/restaurantcss_taihjr.jpg",
      alt: "Design an Advanced Pricing Table",
      date: "January 20, 2025",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
    },
    {
      id: "5c",
      title: "Build a Parallax Scrolling Effect",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577912/csstype_prlpwm.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 25, 2025",
      description:
        "Learn how to create a parallax scrolling effect using CSS. This project covers how to manipulate background images and layers for a visually engaging web experience.",
    },
    {
      id: "6c",
      title: "Create a CSS Animation for Button Hover Effects",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736578044/lastCSS_wjgdhm.jpg",
      alt: "Create a CSS Animation for Button Hover Effects",
      date: "January 15, 2025",
      description:
        "Explore the power of CSS animations by designing interactive button hover effects. This project focuses on keyframes, transitions, and animation timing functions.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <ScrollToTop />
      <h1 className="blog-title">CSS-Only Projects</h1>

      <div className="posts-grid">
        {cssOnlyProjectTitles.map((project) => (
          <Link key={project.id} href={`/projects/cssP/${project.id}`} passHref>
            <article className="post-card">
              <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <div className="post-button ct-button">Start Tutorial</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CssProjects;
