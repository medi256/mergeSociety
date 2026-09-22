import QuizClient from "./QuizClient";

export const metadata = {
  title: "The Tougher CSS Quiz — Think You Can Handle It?",
  description:
    "So you passed the basics. Now prove it. Advanced CSS questions with instant answers.",
  keywords: [
    "advanced CSS quiz",
    "CSS quiz part 2",
    "hard CSS questions",
    "CSS test",
    "frontend quiz",
    "CSS interview questions",
    "learn CSS",
    "CSS practice",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society CSS Quiz",
  category: "Education",

  openGraph: {
    title: "The Tougher CSS Quiz — Think You Can Handle It?",
    description:
      "So you passed the basics. Now prove it. Advanced CSS questions with instant answers.",
    url: "https://mergesociety.com/quizzes/cssQuiz/2q",
    siteName: "Merge Society CSS Quiz",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Tougher CSS Quiz — Think You Can Handle It?",
    description:
      "So you passed the basics. Now prove it. Advanced CSS questions with instant answers.",
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
    canonical: "https://mergesociety.com/quizzes/cssQuiz/2q",
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
        The Tougher CSS Quiz — Think You Can Handle It?
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        So you passed the basics. Now prove it. Advanced CSS questions with
        instant answers.
      </p>
      <QuizClient />
    </div>
  );
}
