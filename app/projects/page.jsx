import Link from "next/link";
import { Project } from "../NextBlogButton";
import Image from "next/image";

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
      <section className="c-l">
        <h1 className="categories-title">
          Explore HTML, CSS and javascript Projects for beginners
        </h1>
        <Link href="/projects/htmlP" passHref>
          <article className="c-cd">
            <Image
              src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736332219/html-projects_1_udgnrz.jpg"
              alt="HTML Projects for Building Real-World Websites"
              className="project-image"
              width={300}
              height={200}
              priority
            />
            <h2>HTML Projects for Beginners: A Step-by-Step Guide</h2>
            <p>
              Master HTML with hands-on projects! Learn to build everything from
              simple web pages to advanced layouts. Perfect for beginners and
              those looking to enhance their skills.
            </p>
            <button className="ct-button">Explore HTML Projects</button>
          </article>
        </Link>

        <Link href="/projects/cssP" passHref>
          <article className="c-cd">
            <Image
              src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736348371/css-projects_ngdwjn.jpg"
              alt="CSS Projects to Elevate Your Web Design Skills"
              className="project-image"
              width={300}
              height={200}
              priority
            />
            <h2>CSS Projects to Improve and Elevate Your Web Design Skills</h2>
            <p>
              Learn CSS with practical projects! Explore responsive designs,
              animations, and modern layouts to enhance your web design skills.
              Start building stunning websites today.
            </p>

            <button className="ct-button">Explore CSS Projects</button>
          </article>
        </Link>

        <Link href="/projects/javascriptP" passHref>
          <article className="c-cd">
            <Image
              src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736350846/javascript-projects_uhalsm.jpg"
              alt="JavaScript Projects for Interactive Web Development"
              className="project-image"
              width={300}
              height={200}
              priority
            />
            <h2>JavaScript Projects to Master Interactive Web Development</h2>{" "}
            <p>
              Build dynamic and interactive websites with JavaScript projects
              designed for beginners to advanced developers. Take your coding
              skills to the next level today!
            </p>
            <button className="ct-button">Explore JavaScript Projects</button>
          </article>
        </Link>
      </section>

      <Project />
    </div>
  );
};

export default ProjectCategories;
