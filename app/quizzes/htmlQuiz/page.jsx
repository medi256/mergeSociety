import Link from "next/link";

export const metadata = {
  title: "HTML Quizzes | Test Your HTML Skills with Interactive Challenges",
  description:
    "Test your HTML knowledge with interactive quizzes designed for beginners and advanced learners. Challenge yourself with a variety of HTML questions and improve your web development skills.",
  keywords:
    "HTML quizzes, HTML challenges, HTML knowledge test, beginner HTML quiz, advanced HTML quiz, web development quizzes",
  alternates: {
    canonical: "https://www.mergesociety.com/quizzes/htmlQuiz",
  },

  openGraph: {
    title: "HTML Quizzes | Test Your HTML Skills with Interactive Challenges",
    description:
      "Challenge your HTML knowledge with interactive quizzes for beginners and advanced learners. Improve your web development skills with hands-on HTML questions.",
  },
};

const HtmlQuizzes = () => {
  const htmlQuizzes = [
    {
      id: "1q",
      title: "HTML Quiz One",
      difficulty: "Beginner",
      description:
        "A beginner-friendly quiz designed to test your basic HTML knowledge and understanding of common HTML elements.",
      keywords: [
        "HTML quiz",
        "beginner HTML",
        "web development quiz",
        "HTML knowledge",
      ],
    },
    {
      id: "2q",
      title: "HTML Quiz Two",
      difficulty: "Intermediate",
      description:
        "This quiz focuses on HTML features for intermediate learners, challenging your understanding of HTML.",
      keywords: [
        "HTML quiz",
        "intermediate HTML",
        "HTML forms",
        "web development quiz",
      ],
    },
    {
      id: "3q",
      title: "HTML Quiz Three",
      difficulty: "Advanced",
      description:
        "An advanced quiz that tests your expertise in HTML and your understanding of best practices for structuring web pages.",
      keywords: [
        "HTML quiz",
        "advanced HTML",
        "HTML best practices",
        "web development quiz",
      ],
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">HTML Quizzes</h1>
      <div className="posts-grid">
        {htmlQuizzes.map((quiz) => (
          <Link key={quiz.id} href={`/quizzes/htmlQuiz/${quiz.id}`} passHref>
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

export default HtmlQuizzes;
