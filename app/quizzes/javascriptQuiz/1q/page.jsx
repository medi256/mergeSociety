import QuizClient from "./QuizClient";

export const metadata = {
  title: "JavaScript Quiz - Test Your JS Basics Online",
  description:
    "Free JavaScript quiz to test your basics. Interactive questions with instant answers, scoring, and no signup needed.",
  keywords: [
    "JavaScript quiz",
    "JS quiz",
    "JavaScript test",
    "JavaScript basics quiz",
    "test JavaScript skills",
    "JavaScript practice",
    "JavaScript questions",
    "free JavaScript quiz",
    "learn JavaScript",
    "JS practice test",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "JavaScript Quiz",
  category: "Education",

  openGraph: {
    title: "JavaScript Quiz - Test Your JS Basics Online",
    description:
      "Free interactive JavaScript quiz with instant answers and scoring. See how well you really know JS basics.",
    url: "https://mergesociety.com/quizzes/javascriptQuiz/1q",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JavaScript Quiz - Test Your JS Basics Online",
    description:
      "Free interactive JavaScript quiz with instant answers and scoring.",
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
    canonical: "https://mergesociety.com/quizzes/javascriptQuiz/1q",
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
        JavaScript Quiz - Test Your JS Basics Online
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Free interactive JavaScript quiz with instant answers and scoring. See
        how well you really know JS basics. No signup needed.
      </p>
      <QuizClient />
    </div>
  );
}
