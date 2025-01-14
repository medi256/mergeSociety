import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/app/ScrollToTop";

export const metadata = {
  title:
    "HTML Projects | Step-by-Step Tutorials for Beginners and Advanced Users",
  description:
    "Explore step-by-step HTML projects designed to help beginners and advanced users. Build exciting web pages using only HTML. Perfect for learning web development!",
  keywords: [
    "HTML projects",
    "beginner HTML projects",
    "advanced HTML projects",
    "web development projects",
    "HTML tutorials for beginners",
    "HTML examples for beginners",
    "learn HTML",
    "HTML projects for practice",
    "HTML projects for students",
    "HTML projects for beginners",
    "HTML projects for beginners with code",
    "HTML projects for beginners step by step",
    "HTML projects for beginners with source code",
    "HTML projects for beginners with instructions",
    "HTML projects for beginners free",
    "HTML projects for beginners download",
    "HTML projects for beginners online",
    "HTML projects for beginners with output",
    "HTML projects for beginners with explanation",
    "HTML projects for beginners with tutorial",
    "HTML projects for beginners with explanation",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP",
  },
  openGraph: {
    title:
      "HTML Projects | Step-by-Step Tutorials for Beginners and Advanced Users",
    description:
      "Explore step-by-step HTML projects designed to help beginners and advanced users. Build exciting web pages using only HTML. Perfect for learning web development!",
  },
};

const HtmlProjects = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "1p",
      title: "Create a Personal Profile Page Using HTML",
      description:
        "Learn how to build a simple personal profile page using only HTML. This project covers essential HTML elements like headings, paragraphs, lists, and links. Perfect for beginners who want to practice structuring web pages.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736496972/resume_l9lnxg.jpg",
      alt: "Personal Profile Page Example",
      date: "January 15, 2025",
    },
    {
      id: "2p",
      title: "Build a Professional Resume with HTML",
      description:
        "Design a structured and professional resume using HTML. This project teaches you how to use tables, lists, and semantic HTML tags to represent work experience, skills, and education. Great for showcasing your HTML skills!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497289/portfolio_zv717y.jpg",
      alt: "HTML Resume Example",
      date: "January 20, 2025",
    },
    {
      id: "3p",
      title: "Create a Weekly Schedule with HTML Tables",
      description:
        "Master HTML tables by creating a weekly schedule. This project demonstrates how to use table rows, columns, and headers to organize information effectively. Ideal for beginners learning HTML structure.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497470/skedule_le1iyh.jpg",
      alt: "Weekly Schedule Example",
      date: "January 25, 2025",
    },
    {
      id: "4p",
      title: "Design a Restaurant Menu Using Semantic HTML",
      description:
        "Create a restaurant menu using semantic HTML elements like sections, articles, and lists. This project focuses on organizing content with proper HTML structure and accessibility. Perfect for advanced learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497900/restuarat_p5vq9d.jpg",
      alt: "Restaurant Menu Example",
      date: "February 1, 2025",
    },
    {
      id: "5p",
      title: "Build a Photo Gallery with HTML",
      description:
        "Learn how to create a static photo gallery using HTML image tags and captions. This project emphasizes the use of alt attributes for accessibility and proper image embedding. Great for practicing HTML media elements!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "Photo Gallery Example",
      date: "February 5, 2025",
    },
    {
      id: "6p",
      title: "Create an Event Invitation Page with HTML",
      description:
        "Design an event invitation page using only HTML. This project covers headings, paragraphs, lists, and hyperlinks to create a visually appealing and functional page. Perfect for advanced HTML learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498445/event_iu3yfu.jpg",
      alt: "Event Invitation Example",
      date: "February 10, 2025",
    },
  ];

  return (
    <div className="blog-posts-container">
      <ScrollToTop />
      <h1 className="blog-title">HTML Projects</h1>
      <p className="blog-description">
        Explore step-by-step HTML projects designed for beginners and advanced
        users. Build exciting web pages using only HTML and enhance your web
        development skills.
      </p>
      <div className="posts-grid">
        {htmlOnlyProjectTitles.map((project) => (
          <Link
            key={project.id}
            href={`/projects/htmlP/${project.id}`}
            passHref
          >
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

export default HtmlProjects;
