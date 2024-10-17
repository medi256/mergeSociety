import Link from "next/link";
import ScrollToTop from "@/app/ScrollToTop";

export const metadata = {
  title: "CSS Projects | Step-by-Step Guide for Beginners and Advanced Users",
  description:
    "Explore step-by-step CSS projects designed for both beginners and advanced users. Learn how to style web pages with CSS.",
  keywords:
    "CSS projects, beginner CSS, advanced CSS, web design, CSS tutorials",
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
      difficulty: "Beginner",
      description:
        "Learn how to style a personal portfolio using basic CSS properties like background colors, fonts, and spacing. Focus on layout fundamentals such as margins, padding, and text alignment.",
      keywords: ["CSS", "portfolio", "beginner CSS", "layout", "web design"],
    },
    {
      id: "2c",
      title: "Style a Blog Post with CSS",
      difficulty: "Beginner",
      description:
        "Style a simple blog post using CSS. Learn how to apply font families, text colors, and adjust line height and spacing to enhance readability.",
      keywords: ["CSS", "blog post", "typography", "text styling", "beginner"],
    },
    {
      id: "3c",
      title: "Create a Responsive Navigation Menu",
      difficulty: "Beginner",
      description:
        "Build a responsive navigation menu that works across devices using media queries. This project focuses on layout design and adapting styles for smaller screens.",
      keywords: [
        "CSS",
        "navigation menu",
        "responsive design",
        "media queries",
      ],
    },
    {
      id: "4c",
      title: "Design an Advanced Pricing Table",
      difficulty: "Advanced",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
      keywords: ["CSS grid", "pricing table", "advanced CSS", "responsive"],
    },
    {
      id: "5c",
      title: "Build a Parallax Scrolling Effect",
      difficulty: "Advanced",
      description:
        "Learn how to create a parallax scrolling effect using CSS. This project covers how to manipulate background images and layers for a visually engaging web experience.",
      keywords: ["parallax effect", "CSS", "advanced", "web design"],
    },
    {
      id: "6c",
      title: "Create a CSS Animation for Button Hover Effects",
      difficulty: "Advanced",
      description:
        "Explore the power of CSS animations by designing interactive button hover effects. This project focuses on keyframes, transitions, and animation timing functions.",
      keywords: [
        "CSS animations",
        "hover effects",
        "keyframes",
        "advanced CSS",
      ],
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
              <h2 className="post-title">{project.title}</h2>
              <p className="post-category">Difficulty: {project.difficulty}</p>
              <p className="post-content">{project.description}</p>
              <div className="post-tags">
                {project.keywords.map((keyword, index) => (
                  <span key={index} className="post-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CssProjects;
