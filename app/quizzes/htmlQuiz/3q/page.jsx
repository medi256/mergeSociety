import QuizClient from "./QuizClient";

export const metadata = {
  title: "HTML Elements Quiz | Test Your HTML Knowledge",
  description:
    "Test your knowledge of HTML elements with interactive questions covering semantic tags, forms, tables, and more. Get instant feedback and your score.",
  keywords: [
    "HTML quiz",
    "HTML elements quiz",
    "learn HTML",
    "HTML practice test",
    "web development quiz",
    "HTML5 semantic elements",
    "frontend interview questions",
  ],

  alternates: {
    canonical: "https://mergesociety.com/quizzes/htmlQuiz/3q",
  },

  authors: [{ name: "Massa Medi", url: "https://mergesociety.com" }],
  creator: "Massa Medi",
  publisher: "Merge Society",

  category: "Education",
  classification: "Web Development Quiz",

  openGraph: {
    title: "HTML Elements Quiz | Test Your HTML Knowledge",
    description:
      "Interactive questions on HTML elements. Instant feedback, scoring, and progress tracking.",
    url: "https://mergesociety.com/quizzes/htmlQuiz/3q",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HTML Elements Quiz | Test Your HTML Knowledge",
    description:
      "Interactive questions on HTML elements. Instant feedback, scoring, and progress tracking.",
  },

  metadataBase: new URL("https://mergesociety.com"),
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
        HTML Quiz: Beginner-Friendly HTML Basics Quiz
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
        and structure - with this 40-question beginner quiz.
      </p>
      <QuizClient />
    </div>
  );
}
