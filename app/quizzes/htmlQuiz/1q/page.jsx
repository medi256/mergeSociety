import QuizClient from "./QuizClient";

export const metadata = {
  title: "HTML Quiz 1 (Beginner) | Test Your HTML Basics",
  description:
    "Take our beginner HTML quiz — questions covering tags, forms, semantic elements, and core HTML basics. Free, instant results.",
  keywords:
    "HTML quiz, beginner HTML quiz, HTML basics test, HTML tags quiz, web development quiz",
  alternates: {
    canonical: "https://mergesociety.com/quizzes/htmlQuiz/1q",
  },
  openGraph: {
    title: "HTML Quiz 1 (Beginner) | Test Your HTML Basics",
    description:
      "Take our beginner HTML quiz — questions covering tags, forms, semantic elements, and core HTML basics. Free, instant results.",
    url: "https://mergesociety.com/quizzes/htmlQuiz/1q",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          margin: "50px 0 0",
          padding: "50px 20px 10px",
        }}
      >
        HTML Quiz 1: Beginner-Friendly HTML Basics Quiz
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Test your understanding of core HTML - tags, forms, semantic elements,
        and structure - with this 40-question beginner quiz. Get instant
        feedback on every answer and see your final score at the end.
      </p>
      <QuizClient />
    </div>
  );
}
