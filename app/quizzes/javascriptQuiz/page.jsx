import Link from "next/link";

export const metadata = {
  title: "JavaScript Quizzes | Test Your JS Skills with Interactive Challenges",
  description:
    "Test your JavaScript knowledge with interactive quizzes designed for beginners and advanced learners. Challenge yourself with a variety of JS questions and improve your programming skills.",
  keywords:
    "JavaScript quizzes, JS challenges, JavaScript knowledge test, beginner JavaScript quiz, advanced JavaScript quiz, programming quizzes",
  alternates: {
    canonical: "https://www.mergesociety.com/quizzes/javascriptQuiz",
  },
  openGraph: {
    title:
      "JavaScript Quizzes | Test Your JS Skills with Interactive Challenges",
    description:
      "Challenge your JavaScript knowledge with interactive quizzes for beginners and advanced learners. Improve your programming skills with hands-on JS questions.",
  },
};

const JavaScriptQuizzes = () => {
  const jsQuizzes = [
    {
      id: "1q",
      title: "JavaScript Quiz One",
      difficulty: "Beginner",
      description:
        "A beginner-friendly quiz covering JavaScript basics including variables, data types, operators, and basic functions.",
      keywords: [
        "JavaScript basics",
        "beginner JS",
        "programming quiz",
        "JavaScript fundamentals",
      ],
    },
    {
      id: "2q",
      title: "JavaScript Quiz Two",
      difficulty: "Intermediate",
      description:
        "Test your knowledge of arrays, objects, ES6 features, promises, and asynchronous programming in JavaScript.",
      keywords: [
        "JavaScript arrays",
        "intermediate JS",
        "ES6 features",
        "async JavaScript",
      ],
    },
    {
      id: "3q",
      title: "JavaScript Quiz Three",
      difficulty: "Advanced",
      description:
        "Challenge yourself with advanced JavaScript concepts including closures, prototypes, design patterns, and performance optimization.",
      keywords: [
        "Advanced JavaScript",
        "JS patterns",
        "JavaScript optimization",
        "JS architecture",
      ],
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">JavaScript Quizzes</h1>
      <div className="posts-grid">
        {jsQuizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quizzes/javascriptQuiz/${quiz.id}`}
            passHref
          >
            <article className="post-card">
              <h2 className="post-title">{quiz.title}</h2>
              <p className="post-category">Difficulty: {quiz.difficulty}</p>
              <p className="post-content">{quiz.description}</p>
              <div className="post-tags">
                {quiz.keywords.map((keyword, index) => (
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

export default JavaScriptQuizzes;
