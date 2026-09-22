import QuizClient from "./QuizClient";

export const metadata = {
  title: "Advanced JavaScript Quiz - Test Your Deep JS Skills",
  description:
    "Hard JavaScript quiz on closures, prototypes, design patterns, workers, and performance APIs. Instant answers and scoring.",
  keywords: [
    "advanced JavaScript quiz",
    "JavaScript advanced quiz",
    "hard JavaScript questions",
    "JavaScript design patterns quiz",
    "JavaScript prototypes quiz",
    "JavaScript closures quiz",
    "JavaScript performance quiz",
    "test JavaScript skills",
    "JavaScript interview questions",
    "senior JavaScript quiz",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "JavaScript Quiz",
  category: "Education",

  openGraph: {
    title: "Advanced JavaScript Quiz - Test Your Deep JS Skills",
    description:
      "Hard JavaScript quiz on closures, prototypes, design patterns, workers, and performance APIs. Instant answers and scoring.",
    url: "https://mergesociety.com/quizzes/javascriptQuiz/3q",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced JavaScript Quiz - Test Your Deep JS Skills",
    description:
      "Hard JavaScript quiz on closures, prototypes, design patterns, workers, and performance APIs.",
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
    canonical: "https://mergesociety.com/quizzes/javascriptQuiz/3q",
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
        Advanced JavaScript Quiz - Test Your Deep JS Skills
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Hard JavaScript quiz on closures, prototypes, design patterns, workers,
        and performance APIs.
      </p>
      <QuizClient />
    </div>
  );
}
