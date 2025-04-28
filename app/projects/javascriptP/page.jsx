import Link from "next/link";
import "../project.css";
import Image from "next/image";

export const metadata = {
  title: "JavaScript Projects | Beginner to Advanced Challenges",
  description:
    "Explore an exciting range of JavaScript projects for all skill levels. From interactive web apps to advanced algorithms, these projects will help you hone your JavaScript skills.",
  keywords: [
    "javascript projects",
    "beginner javascript projects",
    "learn javascript  though projects",
    "master javascript with projects",
    "build javascript projects from scratch",
    "build a to-do list project in with javscript",
    "build a  weather app with javascript",
    "build a  weather app with javascript from scratch",
    "build an a  random  quote  generator  with javascript",
    "build a javascript project  with an  API",
    "API  javascript project",
    "to-do list javascript  object",
    "weather  app with  javascript",
    "random quote generator javascript project",
    "javascript  projects for  beginners",
    "beginners javascript projects",
    "start a javascript project",
    "merge society",
    "mergesociety",
    "build a javascript project",
    "javascript quiz game project",
    "quiz game  javascript project",
    "javascript calculator project",
    "build a calculator in javascript",
    "Sorting Algorithm Visualizer project",
    "beginner  Sorting Algorithm Visualizer with javascript",
  ],

  authors: [
    {
      name: "Merge Society",
      url: "https://www.mergesociety.com/projects/javascriptP",
    },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP",
  },
  openGraph: {
    title: "JavaScript Projects | Beginner to Advanced Challenges",
    description:
      "Explore an exciting range of JavaScript projects for all skill levels. From interactive web apps to advanced algorithms, these projects will help you hone your JavaScript skills.",
    url: "https://www.mergesociety.com/projects/javascriptP",
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
    title: "JavaScript Projects | Beginner to Advanced Challenges",
    description:
      "Explore an exciting range of JavaScript projects for all skill levels. From interactive web apps to advanced algorithms, these projects will help you hone your JavaScript skills.",
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

const JSProjects = () => {
  const projects = [
    {
      id: "1js",
      title: "To-Do List App",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584631/todo-list_bcl3hp.png",
      alt: "To-Do List App in javascript",
      date: "January 4, 2025",
      description:
        "Create a simple to-do list app where users can add, edit, and remove tasks. Learn the basics of DOM manipulation and event handling in JavaScript.",
    },
    {
      id: "2js",
      title: "Random Quote Generator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584814/javascript_randomquote_el9bfx.jpg",
      alt: "Random Quote Generator javascript project",
      date: "January 7, 2025",
      description:
        "Build a random quote generator that displays a new quote every time the user clicks a button. Use JavaScript to fetch random quotes and update the UI dynamically.",
    },
    {
      id: "3js",
      title: "JavaScript Quiz Game",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584905/Quiz-App-01_zwez9e.png",
      alt: "JavaScript Quiz Game javascript project",
      date: "January 15, 2025",
      description:
        "Develop a fun quiz game where users answer multiple-choice questions. Use arrays and functions to manage questions, track scores, and display results.",
    },
    {
      id: "4js",
      title: "Weather App with API",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585719/weather-app_nynylh.jpg",
      alt: "Weather App with API javascript project",
      date: "January 9, 2025",
      description:
        "Create a weather app that fetches real-time weather data from an API. Learn how to work with APIs, handle async functions, and display the data on your webpage.",
    },
    {
      id: "5js",
      title: "JavaScript Calculator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "JavaScript Calculator javascript project",
      date: "January 17, 2025",
      description:
        "Build a fully functional calculator with advanced operations. Practice working with event listeners, complex logic, and DOM manipulation for a real-world challenge.",
    },
    {
      id: "6js",
      title: "Sorting Algorithm Visualizer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736587158/js_hjlvsn.jpg",
      alt: "Sorting Algorithm Visualizer javascript project",
      date: "January 7, 2025",
      description:
        "Develop a sorting algorithm visualizer that demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort. This project will help you understand complex algorithms and visualize how they work.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">JavaScript Projects</h1>

      <div className="posts-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/javascriptP/${project.id}`}
            passHref
          >
            <section className="post-card">
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
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JSProjects;
