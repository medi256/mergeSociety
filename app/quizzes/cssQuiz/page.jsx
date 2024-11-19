import Link from "next/link";

export const metadata = {
  title:
    "Test Your CSS Skills with Interactive Quizzes | Selectors, Layouts, Animations",
  description:
    "Challenge your CSS knowledge with interactive quizzes. Perfect for beginners and advanced learners to practice CSS concepts like selectors, layouts, animations, and responsive design.",
  keywords:
    "CSS quizzes, interactive CSS challenges, CSS basics quiz, flexbox quiz, grid layout quiz, responsive design quiz, CSS animations quiz, advanced CSS quizzes, beginner CSS challenges, test CSS knowledge, CSS selectors quiz, web design practice quizzes, CSS positioning quiz, media queries quiz",
  author: "MergeSociety",
  url: "https://www.mergesociety.com/quizzes/cssQuiz",
  alternates: {
    canonical: "https://www.mergesociety.com/quizzes/cssQuiz",
  },
  type: "website",
  openGraph: {
    title:
      "Test Your CSS Skills with Interactive Quizzes | Selectors, Layouts, Animations",
    description:
      "Challenge your CSS knowledge with interactive quizzes. Perfect for beginners and advanced learners to practice CSS concepts like selectors, layouts, animations, and responsive design.",
    author: "MergeSociety",
    url: "https://www.mergesociety.com/quizzes/cssQuiz",
    type: "website",
  },
};

const CssQuizzes = () => {
  const cssQuizzes = [
    {
      id: "1q",
      title: "CSS Quiz One",
      difficulty: "Beginner",
      description:
        "A beginner-friendly quiz designed to test your basic CSS knowledge and understanding of common CSS properties and selectors.",
      keywords: [
        "CSS quiz",
        "beginner CSS",
        "web design quiz",
        "CSS knowledge",
      ],
    },
    {
      id: "2q",
      title: "CSS Quiz Two",
      difficulty: "Intermediate",
      description:
        "This quiz focuses on CSS features for intermediate learners, challenging your understanding of layout and styling techniques.",
      keywords: [
        "CSS quiz",
        "intermediate CSS",
        "CSS layout",
        "web design quiz",
      ],
    },
    {
      id: "3q",
      title: "CSS Quiz Three",
      difficulty: "Advanced",
      description:
        "An advanced quiz that tests your expertise in CSS and your understanding of best practices for responsive and dynamic web design.",
      keywords: [
        "CSS quiz",
        "advanced CSS",
        "CSS best practices",
        "web design quiz",
      ],
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">CSS Quizzes</h1>
      <div className="posts-grid">
        {cssQuizzes.map((quiz) => (
          <Link key={quiz.id} href={`/quizzes/cssQuiz/${quiz.id}`} passHref>
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

export default CssQuizzes;
