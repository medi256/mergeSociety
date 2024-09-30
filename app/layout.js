import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "MergeSociety - Learn Web Development",
  description:
    "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
  keywords:
    "web development, HTML, CSS, JavaScript, React, coding tutorials, web dev blog, web development courses, learn HTML5, learn CSS, JavaScript tutorials, React tutorials",
  openGraph: {
    title: "MergeSociety - Learn Web Development",
    description:
      "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_MERGESOCIETY_URL,
    type: "website",
    siteName: "MergeSociety",
  },
  authors: [{ name: "MergeSociety" }],
  category: "Advanced Web Development Tutorial",
  schema: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "MergeSociety - Learn Web Development",
    description:
      "Master web development with MergeSociety. Learn HTML, CSS, JavaScript, and React through interactive tutorials and stay updated with our web dev blog.",
    audience: {
      "@type": "Audience",
      audienceType: "web development learners",
    },
    educationalLevel: "Intermediate to Advanced",
    learningResourceType: "Lesson",
    educationalUse: "learning",
    inLanguage: "en",
    isAccessibleForFree: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MERGESOCIETY_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#3498db",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
