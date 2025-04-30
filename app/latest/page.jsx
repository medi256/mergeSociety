import Image from "next/image";
import Link from "next/link";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Latest in Tech",
  description:
    "Insight into the latest tech trends, Programming, AI, Robotics, and many  more  at your fingertips.",
  keywords: [
    "Latest Tech",
    "Tech News",
    "Tech Trends",
    "Programming",
    "AI",
    "Robotics",
    "Tech Innovations",
    "Tech Insights",
    "Tech Analysis",
    "Tech Updates",
    "Technology News",
    "Latest in Technology",
    "Emerging Technologies",
    "Tech Industry News",
    "Tech Developments",
    "Tech Reviews",
    "Tech Articles",
    "Tech Blogs",
    "Tech Research",
    "Tech Opinions",
    "Tech Features",
    "Tech Interviews",
    "Tech Events",
  ],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/latest" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/latest",
  },
  openGraph: {
    title: "Merge Society | Latest in Tech",
    description:
      "Insight into the latest tech trends, Programming, AI, Robotics, and many  more  at your fingertips.",

    url: "https://www.mergesociety.com/latest",
    siteName: "Merge Society",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
        width: 1200,
        height: 630,
        alt: "Merge Society preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Society | Latest in Tech",
    description:
      "Insight into the latest tech trends, Programming, AI, Robotics, and many  more  at your fingertips.",

    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745310224/ML_1_fqv1iq.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  category: "Technology",
};

const GridNews = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Google Internship & Entry-Level Applications: Myths, Truths, and How to Actually Get Hired",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746014182/growtika-183Yxo3vsGY-unsplash_bqlqeh.jpg",
      alt: "Google Internship & Entry-Level Applications: Myths, Truths, and How to Actually Get Hired",
      date: " April 30, 2025",
      articleRoute: "internship-at-google",
    },
    {
      id: 2,
      title:
        "How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745577861/ai-is-here_ny0xf8.jpg",
      alt: "How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)",
      date: " April 27, 2025",
      articleRoute: "ai-is-officially-here",
    },
    {
      id: 3,
      title:
        "The Unsung Friendship That Saved Google—and Invented the Modern Internet",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745576048/two_google_employes_ciaxcf.jpg",
      alt: "The Unsung Friendship That Saved Google—and Invented the Modern Internet",
      date: " April 27, 2025",
      articleRoute: "friendship-that-saved-google",
    },
    {
      id: 4,
      title:
        "The Wild West of the 1990s Internet: From Nick.com to the Dot-Com Bubble",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745575607/1990s_Internet_blg5oq.jpg",
      alt: "The Wild West of the 1990s Internet: From Nick.com to the Dot-Com Bubble",
      date: " April 27, 2025",
      articleRoute: "1990s-Internet",
    },
    {
      id: 5,
      title:
        "Why My Side Hustle Is Failing: Brutally Honest Lessons from Building in Public",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745589711/why-my-side-hustle-failed_gez4na.jpg",
      alt: "Why My Side Hustle Is Failing: Brutally Honest Lessons from Building in Public",
      date: " April 27, 2025",
      articleRoute: "why-my-side-hustle-failed",
    },
    {
      id: 6,
      title:
        "From Redstone to RAM: How Minecraft’s In-Game Logic Lets You Build a Real Computer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745586078/mincraft_kmdjhr.jpg",
      alt: "From Redstone to RAM: How Minecraft’s In-Game Logic Lets You Build a Real Computer",
      date: " April 27, 2025",
      articleRoute: "mincraft",
    },
    {
      id: 7,
      title:
        "Inside the Mind of Modern GPUs: How Graphics Cards Power Your Games, AI, and the Future of Computing",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745588163/gpus_bmtfwz.jpg",
      alt: "Inside the Mind of Modern GPUs: How Graphics Cards Power Your Games, AI, and the Future of Computing",
      date: " April 27, 2025",
      articleRoute: "how-graphics-cards-work",
    },
    {
      id: 8,
      title:
        "LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform Is So Weird—and Here to Stay",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745593266/link-in_vsxalr.jpg",
      alt: "LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform Is So Weird—and Here to Stay",
      date: " April 27, 2025",
      articleRoute: "link-in",
    },
  ];

  return (
    <>
      <div className="h-ai">
        <h2>Latest</h2>
      </div>

      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/latest/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image-4">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image-4"
                priority
              />
            </div>
            <div className="bg-content-4">
              <h2 className="bg-title-4">{project.title}</h2>
              <time
                className="bg-date-4"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GridNews;
