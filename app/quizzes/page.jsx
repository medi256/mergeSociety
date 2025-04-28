import Link from "next/link";

import "./quiz.css";
// import { Project } from "../NextBlogButton";

export const metadata = {
  title: "Test Your Skills with Quizzes | HTML, CSS, JavaScript",
  description:
    "Challenge your knowledge of HTML, CSS, and JavaScript with our interactive quizzes. Perfect for beginners and advanced learners to practice coding concepts.",
  keywords:
    "HTML quizzes, CSS quizzes, JavaScript quizzes, coding quizzes, interactive quizzes, beginner coding challenges, test coding knowledge, coding skill tests, HTML basics quiz, CSS animations quiz, JavaScript logic quiz, web development practice quizzes, quiz categories",
  author: "MergeSociety",
  url: "https://www.mergesociety.com/quizzes",
  alternates: {
    canonical: "https://www.mergesociety.com/quizzes",
  },
  type: "website",
  openGraph: {
    title: "Test Your Skills with Quizzes | HTML, CSS, JavaScript",
    description:
      "Challenge your knowledge of HTML, CSS, and JavaScript with our interactive quizzes. Perfect for beginners and advanced learners to practice coding concepts.",
    author: "MergeSociety",
    url: "https://www.mergesociety.com/quizzes",
    type: "website",
  },
};

const QuizCategories = () => {
  return (
    <div className="categories-containers-q">
      <h1 className="categories-titles-q">
        HTML, CSS, and JavaScript Quizzes to Test Your Skills
      </h1>
      <p className="categories-descriptions-q">
        Explore our quizzes to challenge your coding knowledge and improve your
        web development skills.
      </p>
      <div className="categories-link-q">
        <Link href="/quizzes/htmlQuiz" passHref>
          <div className="category-cards-q">
            <h2>HTML Quizzes</h2>
            <p>
              Test your understanding of HTML basics, tags, forms, and semantic
              elements.
            </p>
          </div>
        </Link>
        <Link href="/quizzes/cssQuiz" passHref>
          <div className="category-cards-q">
            <h2>CSS Quizzes</h2>
            <p>
              Improve your CSS skills with quizzes on selectors, layouts,
              animations, and more.
            </p>
          </div>
        </Link>
        <Link href="/quizzes/javascriptQuiz" passHref>
          <div className="category-cards-q">
            <h2>JavaScript Quizzes</h2>
            <p>
              Challenge your logic and coding skills with JavaScript quizzes for
              all levels.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuizCategories;
