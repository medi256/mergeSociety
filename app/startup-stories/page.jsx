import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Startup Stories",
  description:
    "Discover real startup journeys, challenges, and success stories to inspire your own path and learn what it really takes to build something great.",
  keywords: [
    "Startup Stories",
    "Tech Stories",
    "real startup journeys",
    "startup challenges",
    "startup success stories",
    "inspiring startup stories",
    "startup experiences",
    "entrepreneurial journeys",
    "startup lessons",
    "startup inspiration",
    "startup growth",
    "startup challenges and solutions",
    "startup success",
    "startup community",
    "startup culture",
    "startup innovation",
    "startup ecosystem",
    "startup advice",
    "startup tips",
    "startup resources",
    "startup mentorship",
    "startup networking",
    "startup funding",
    "startup investment",
    "startup marketing",
    "startup branding",
    "startup product development",
    "startup technology",
    "startup strategy",
    "startup leadership",
    "startup management",
    "how startups succeed",
    "how to build a startup",
    "how to grow a startup",
    "how to scale a startup",
    "how to fund a startup",
    "how to market a startup",
    "how to manage a startup",
    "how to lead a startup",
    "how to innovate in a startup",
    "how to build a startup team",
    "how to create a startup culture",
    "how to build a startup brand",
    "startup founders",
    "early-stage startup lessons",
    "founder interviews",
    "startup case studies",
    "building a startup from scratch",
    "entrepreneurship insights",
  ],

  authors: [
    {
      name: "Merge Society",
      url: "https://www.mergesociety.com/startup-stories",
    },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories",
  },
  openGraph: {
    title: "Merge Society | Startup Stories",
    description:
      "Discover real startup journeys, challenges, and success stories to inspire your own path and learn what it really takes to build something great.",

    url: "https://www.mergesociety.com/startup-stories",
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
    title: "Merge Society | Startup Stories",
    description:
      "Discover real startup journeys, challenges, and success stories to inspire your own path and learn what it really takes to build something great.",

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

const Section5 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745747700/Ma-Huateng_uii6rl.jpg",
      alt: "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      date: " April 27, 2025",
      articleRoute: "pony-ma",
    },
    {
      id: 2,
      title:
        "The Fine Line Between Faking It and Fraud: How Fake It Till You Make It Shapes Success, Scandal, and Everything In Between",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751197/fakeit-800x445_zlq56h.jpg",
      alt: "The Fine Line Between Faking It and Fraud: How Fake It Till You Make It Shapes Success, Scandal, and Everything In Between",
      date: " April 27, 2025",
      articleRoute: "fake-it",
    },
    {
      id: 3,
      title:
        " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751859/alexander-shatov-fRjjnN_8njo-unsplash_xaf8e8.jpg",
      alt: " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      date: " April 27, 2025",
      articleRoute: "snap-chat",
    },
    {
      id: 4,
      title:
        "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many Behind—Despite Record Profits",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745752778/clem-onojeghuo-fY8Jr4iuPQM-unsplash_io8ddi.jpg",
      alt: "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many  Behind—Despite Record Profits",
      date: " April 27, 2025",
      articleRoute: "hiring",
    },
    {
      id: 5,
      title:
        "Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping Business, Science, and Opportunit",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745753955/MS-Exec-Nadella-Satya-2017-08-31-22__cropped_hwaupv.jpg",
      alt: " Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping   Business, Science, and Opportunit",
      date: " April 27, 2025",
      articleRoute: "satya",
    },
    {
      id: 6,
      title:
        "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746025578/boliviainteligente--ZS3S9a3jEQ-unsplash_syfnrb.jpg",
      alt: "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      date: " April 30, 2025",
      articleRoute: "invidia",
    },
    {
      id: 7,
      title:
        "Do People Actually Know What Cluely Does? I Took It To The Streets of San Francisco To Find Out",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761554951/audio_1761485673309_yjd82_ciildh.jpg",
      alt: "What is Cluely, really?",
      date: "October 27, 2025",
      articleRoute: "cluely-ai",
    },
    {
      id: 8,
      title: "Growing Super X to $10,000 a Month While Traveling the World",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761560597/audio_1761559288875_xtxud_zqk8xg.jpg",
      alt: "Growing Super X to $10,000 a Month While Traveling the World",
      date: "October 27, 2025",
      articleRoute: "rob-hallam",
    },
    {
      id: 9,
      title:
        "From Idea to First Dollar in 5 Days: How I Built and Launched a Couples App, Went Viral on Twitter, and Planned the Path to 100K Downloads",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761649847/audio_1761649599232_00l2m_ubr7mm.jpg",
      alt: "How I Built and Launched a Couples App, Went Viral on Twitter, and Planned the Path to 100K Downloads",
      date: "October 28, 2025",
      articleRoute: "jack-friks",
    },
    {
      id: 10,
      title:
        "How I Built Multiple Income Streams as a Developer ($300k in Revenue)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761663113/audio_1761661372552_svbqkj_g2owgg.webp",
      alt: "How I Built Multiple Income Streams as a Developer",
      date: "October 28, 2025",
      articleRoute: "florin-pop",
    },
    {
      id: 11,
      title:
        "The Tool That’s Killing LeetCode: How People Are Now Cheating Live Coding Interviews into FAANG",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761728423/Interview_xzyj97.png",
      alt: "The Tool That’s Killing LeetCode: How People Are Now Cheating Live Coding Interviews into FAANG",
      date: "October 29, 2025",
      articleRoute: "interview-coder",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <>
      <div className="h-ai">
        <h1>Startup Stories</h1>
      </div>

      <div className="bg-grid-4">
        {latestPosts.map((project) => (
          <Link
            key={project.id}
            href={`/startup-stories/${project.articleRoute}`}
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

export default Section5;
