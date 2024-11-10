import Link from "next/link";
import ScrollToTop from "@/app/ScrollToTop";

export const metadata = {
  title: "JavaScript Projects | Beginner to Advanced Challenges",
  description:
    "Explore an exciting range of JavaScript projects for all skill levels. From interactive web apps to advanced algorithms, these projects will help you hone your JavaScript skills.",
  keywords:
    "JavaScript, JS projects, beginner JS, advanced JavaScript, coding challenges, interactive web apps",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP",
  },

  openGraph: {
    title: "JavaScript Projects | Beginner to Advanced Challenges",
    description:
      "Explore an exciting range of JavaScript projects for all skill levels. From interactive web apps to advanced algorithms, these projects will help you hone your JavaScript skills.",
  },
};

const JSProjects = () => {
  const projects = [
    {
      id: "1js",
      title: "To-Do List App",
      difficulty: "Beginner",
      description:
        "Create a simple to-do list app where users can add, edit, and remove tasks. Learn the basics of DOM manipulation and event handling in JavaScript.",
      tags: ["JavaScript", "DOM Manipulation", "Event Handling"],
    },
    {
      id: "2js",
      title: "Random Quote Generator",
      difficulty: "Beginner",
      description:
        "Build a random quote generator that displays a new quote every time the user clicks a button. Use JavaScript to fetch random quotes and update the UI dynamically.",
      tags: ["JavaScript", "API Integration", "UI Updates"],
    },
    {
      id: "3js",
      title: "JavaScript Quiz Game",
      difficulty: "Beginner",
      description:
        "Develop a fun quiz game where users answer multiple-choice questions. Use arrays and functions to manage questions, track scores, and display results.",
      tags: ["JavaScript", "Functions", "Quiz Logic"],
    },
    {
      id: "4js",
      title: "Weather App with API",
      difficulty: "Advanced",
      description:
        "Create a weather app that fetches real-time weather data from an API. Learn how to work with APIs, handle async functions, and display the data on your webpage.",
      tags: ["JavaScript", "API", "Async Functions", "Weather Data"],
    },
    {
      id: "5js",
      title: "JavaScript Calculator",
      difficulty: "Advanced",
      description:
        "Build a fully functional calculator with advanced operations. Practice working with event listeners, complex logic, and DOM manipulation for a real-world challenge.",
      tags: ["JavaScript", "Event Listeners", "Logic", "DOM Manipulation"],
    },
    {
      id: "6js",
      title: "Sorting Algorithm Visualizer",
      difficulty: "Advanced",
      description:
        "Develop a sorting algorithm visualizer that demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort. This project will help you understand complex algorithms and visualize how they work.",
      tags: ["JavaScript", "Algorithms", "Sorting", "Visualization"],
    },
  ];

  return (
    <div className="blog-posts-container">
      <ScrollToTop />
      <h1 className="blog-title">JavaScript Projects</h1>
      <div className="posts-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/javascriptP/${project.id}`}
            passHref
          >
            <article className="post-card">
              <h2 className="post-title">{project.title}</h2>
              <p className="post-category">{project.difficulty}</p>
              <p className="post-content">{project.description}</p>
              <div className="post-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="post-tag">
                    {tag}
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

export default JSProjects;
