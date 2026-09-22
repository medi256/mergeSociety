import QuizClient from "./QuizClient";

export const metadata = {
  title: "CSS Quiz — Prove You Actually Know CSS",
  description:
    "Quick CSS questions with instant answers. Find out if you're a CSS pro or still guessing.",
  keywords: [
    "CSS quiz",
    "CSS test",
    "learn CSS",
    "CSS practice",
    "CSS questions",
    "frontend quiz",
    "CSS interview questions",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society CSS Quiz",
  category: "Education",

  openGraph: {
    title: "CSS Quiz — Prove You Actually Know CSS",
    description:
      "Quick CSS questions with instant answers. Find out if you're a CSS pro or still guessing.",
    url: "https://mergesociety.com/quizzes/cssQuiz/1q",
    siteName: "Merge Society CSS Quiz",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CSS Quiz — Prove You Actually Know CSS",
    description:
      "Quick CSS questions with instant answers. Find out if you're a CSS pro.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://mergesociety.com/quizzes/cssQuiz/1q",
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
        CSS Quiz — Prove You Actually Know CSS
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Quick CSS questions with instant answers. Test your knowledge of CSS
        selectors, properties, and best practices with these questions.
      </p>
      <QuizClient />
    </div>
  );
}
