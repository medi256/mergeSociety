import QuizClient from "./QuizClient";

export const metadata = {
  metadataBase: new URL("https://mergesociety.com"),
  title: "HTML Quiz: Questions to Test Your HTML Knowledge",
  description:
    "Test your HTML knowledge with interactive multiple-choice questions covering HTML elements, attributes, forms, media, text formatting, and more. Get instant feedback and see your final score.",
  alternates: { canonical: "https://mergesociety.com/quizzes/htmlQuiz/2q" },

  openGraph: {
    type: "website",
    url: "https://mergesociety.com/quizzes/htmlQuiz/2q",
    title: "HTML Quiz: Questions to Test Your HTML Knowledge",
    description:
      "Test your HTML knowledge with interactive multiple-choice questions covering HTML elements, attributes, forms, media, and more.",
    siteName: "Merge Society",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Quiz: Questions to Test Your HTML Knowledge",
    description:
      "Test your HTML knowledge with interactive multiple-choice questions and get your score instantly.",
  },
  authors: [{ name: "Merge Society", url: "https://mergesociety.com" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  category: "Education",
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
        HTML Quiz 2: Intermediate HTML Concepts Quiz
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Test your understanding of intermediate HTML concepts with these
        interactive questions. Get instant feedback on every answer and see your
        final score at the end.
      </p>
      <QuizClient />
    </div>
  );
}
