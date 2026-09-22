import QuizClient from "./QuizClient";

export const metadata = {
  title: "CSS Quiz - Test Your CSS Skills Online",
  description:
    "Take this free CSS quiz to test your skills. Interactive questions with instant answers and a final score. No signup required.",
  keywords: [
    "CSS quiz",
    "CSS test",
    "CSS practice",
    "test CSS skills",
    "CSS questions",
    "CSS quiz online",
    "free CSS quiz",
    "CSS knowledge test",
  ],
  authors: [{ name: "Merge Society" }],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "CSS Quiz",
  category: "Education",

  openGraph: {
    title: "CSS Quiz - Test Your CSS Skills Online",
    description:
      "Free interactive CSS quiz with instant answers and scoring. See how well you really know CSS.",
    url: "https://mergesociety.com/quizzes/cssQuiz/2q",
    siteName: "Merge Society",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CSS Quiz - Test Your CSS Skills Online",
    description: "Free interactive CSS quiz with instant answers and scoring.",
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
        CSS Quiz - Test Your CSS Skills Online
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 20px",
          color: "#7ab1ff",
        }}
      >
        Take this free CSS quiz to test your skills.
      </p>
      <QuizClient />
    </div>
  );
}
