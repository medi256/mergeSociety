import Link from "next/link";
import ScrollToTop from "../ScrollToTop";
import { Project } from "../NextBlogButton";

export const metadata = {
  title: "Explore Coding Projects | HTML, CSS, JavaScript",
  description:
    "Explore a wide range of coding projects to enhance your HTML, CSS, and JavaScript skills. Dive into different challenges and start building.",
  keywords:
    "HTML, CSS, JavaScript, projects, coding challenges, beginner projects, advanced projects, web development projects,HTML projects, CSS projects,JavaScript projects, beginner HTML, CSS animations, JavaScript applications, coding practice, project categories",

  author: "MergeSociety",
  url: "https://www.mergesociety.com/projects",
  alternates: {
    canonical: "https://www.mergesociety.com/projects",
  },

  type: "website",
  openGraph: {
    title: "Explore Coding Projects | HTML, CSS, JavaScript",
    description:
      "Explore a wide range of coding projects to enhance your HTML, CSS, and JavaScript skills. Dive into different challenges and start building.",
    author: "MergeSociety",
    url: "https://www.mergesociety.com/projects",
    type: "website",
  },
};

const ProjectCategories = () => {
  return (
    <div className="categories-container">
      <ScrollToTop />
      <h1 className="categories-title">
        Explore HTML, CSS and javascript Projects for beginners
      </h1>
      <div className="categories-links">
        <Link href="/projects/htmlP" passHref>
          <div className="category-card">
            <h2>HTML Projects</h2>
            <p>
              Start building web pages with beginner and advanced HTML projects.
            </p>
          </div>
        </Link>
        <Link href="/projects/cssP" passHref>
          <div className="category-card">
            <h2>CSS Projects</h2>
            <p>
              Improve your design skills with CSS projects from layouts to
              animations.
            </p>
          </div>
        </Link>
        <Link href="/projects/javascriptP" passHref>
          <div className="category-card">
            <h2>JavaScript Projects</h2>
            <p>Challenge yourself with JavaScript projects for all levels.</p>
          </div>
        </Link>
      </div>
      <Project />
    </div>
  );
};

export default ProjectCategories;
