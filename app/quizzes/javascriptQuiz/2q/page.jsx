import QuizClient from "./QuizClient";

export const metadata = {
  title: "JavaScript Intermediate Quiz - Test Your JS Skills",
  description:
    "Free intermediate JavaScript quiz covering closures, promises, async/await, and ES6. Instant answers and scoring.",
  keywords: [
    "JavaScript intermediate quiz",
    "intermediate JS quiz",
    "advanced JavaScript quiz",
    "JavaScript ES6 quiz",
    "JavaScript promises quiz",
    "JavaScript closures quiz",
    "test JavaScript skills",
    "JavaScript practice test",
    "JS quiz online",
    "JavaScript interview questions",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "JavaScript Quiz",
  category: "Education",

  openGraph: {
    title: "JavaScript Intermediate Quiz - Test Your JS Skills",
    description:
      "Free intermediate JavaScript quiz covering closures, promises, async/await, and ES6. Instant answers and scoring.",
    url: "https://mergesociety.com/quizzes/javascriptQuiz/2q",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JavaScript Intermediate Quiz - Test Your JS Skills",
    description:
      "Free intermediate JavaScript quiz covering closures, promises, async/await, and ES6.",
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
    canonical: "https://mergesociety.com/quizzes/javascriptQuiz/2q",
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
        JavaScript Intermediate Quiz - Test Your JS Skills
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Free intermediate JavaScript quiz covering closures, promises,
        async/await, and ES6.
      </p>
      <QuizClient />
    </div>
  );
}
