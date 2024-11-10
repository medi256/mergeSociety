import Link from "next/link";
import ScrollToTop from "@/app/ScrollToTop";

export const metadata = {
  title: "HTML Projects | Step-by-Step Guide for Beginners and Advanced Users",
  description:
    "Explore step-by-step HTML projects designed to help beginners and advanced users. Build exciting web pages using only HTML.",
  keywords:
    "HTML projects, beginner HTML, advanced HTML, web development, HTML tutorials",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP",
  },

  openGraph: {
    title:
      "HTML Projects | Step-by-Step Guide for Beginners and Advanced Users",
    description:
      "Step-by-step HTML projects for learning web development using only HTML.",
  },
};

const HtmlProjects = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "1p",
      title: "Create a Personal Profile Page",
      difficulty: "Beginner",
      description:
        "Build a simple personal profile page using only HTML elements like headings, paragraphs, lists, and links.",
      keywords: [
        "HTML",
        "profile page",
        "beginner HTML",
        "personal",
        "webpage",
      ],
    },
    {
      id: "2p",
      title: "Build a Basic Resume with HTML",
      difficulty: "Beginner",
      description:
        "Design a structured resume using tables, lists, and semantic HTML tags to represent work experience, skills, and education.",
      keywords: [
        "HTML resume",
        "beginner HTML",
        "web development",
        "resume project",
      ],
    },
    {
      id: "3p",
      title: "Create an HTML Table for a Weekly Schedule",
      difficulty: "Beginner",
      description:
        "Use HTML tables to create a basic weekly schedule, showcasing how table rows and columns work together.",
      keywords: ["HTML table", "schedule", "beginner HTML", "table project"],
    },
    {
      id: "4p",
      title: "Design a Basic Restaurant Menu",
      difficulty: "Advanced",
      description:
        "Use semantic HTML elements like sections, articles, and lists to create a restaurant menu with categorized items.",
      keywords: ["restaurant menu", "advanced HTML", "semantic HTML", "menu"],
    },
    {
      id: "5p",
      title: "Build a Simple Photo Gallery with Captions",
      difficulty: "Advanced",
      description:
        "Create a static photo gallery using HTML image tags with captions, leveraging alt attributes for accessibility.",
      keywords: ["photo gallery", "HTML images", "captions", "HTML project"],
    },
    {
      id: "6p",
      title: "Create an Event Invitation Page",
      difficulty: "Advanced",
      description:
        "Design an event invitation page using only HTML, including headings, paragraphs, lists, and hyperlinks for details.",
      keywords: [
        "HTML invitation",
        "event page",
        "advanced HTML",
        "hyperlinks",
      ],
    },
  ];

  return (
    <div className="blog-posts-container">
      <ScrollToTop />
      <h1 className="blog-title">HTML-Only Projects</h1>
      <div className="posts-grid">
        {htmlOnlyProjectTitles.map((project) => (
          <Link
            key={project.id}
            href={`/projects/htmlP/${project.id}`}
            passHref
          >
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

export default HtmlProjects;
