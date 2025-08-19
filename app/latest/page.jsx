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
    {
      id: 9,
      title: `Why America Became Obsessed with "Learn to Code"—And Where That Strategy Went Wrong`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746094162/mr-bochelly-IBKyH0V3rew-unsplash_dvk4ha.jpg",
      alt: "Why America Became Obsessed with Learn to Code—And Where That Strategy Went Wrong",
      date: "May 1, 2025",
      articleRoute: "learn-to-code",
    },
    {
      id: 10,
      title: `Binary Explained: How Computers Use Ones and Zeros to Power the Digital World`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747327529/pexels-ron-lach-9783346_n9rpik.jpg",
      alt: "Binary Explained: How Computers Use Ones and Zeros to Power the Digital World",
      date: "May 15, 2025",
      articleRoute: "binary-explained",
    },
    {
      id: 11,
      title: `Computer Science Basics: A Beginner’s Guide to 101 Essential Terms and Concepts`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747330186/pexels-energepic-com-27411-313690_uzkvfv.jpg",
      alt: "Computer Science Basics: A Beginner’s Guide to 101 Essential Terms and Concepts",
      date: "May 15, 2025",
      articleRoute: "computer-science-basics",
    },
    {
      id: 15,
      title: `Best Programming Language for Each Tech Career Job in 2025: A Comprehensive Beginner’s Guide`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747387243/pexels-mart-production-7709168_oee7dw.jpg",
      alt: "Best Programming Language for Each Tech Career Job in 2025",
      date: "May 16, 2025",
      articleRoute: "best-programming-language-for-each-job",
    },
    {
      id: 16,
      title: `Best Programming Languages to Learn for High Paying Tech Jobs in 2025`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747385355/kobu-agency-67L18R4tW_w-unsplash_pnwolr.jpg",
      alt: " Best Programming Languages to Learn for High Paying Tech Jobs in 2025",
      date: "May 16, 2025",
      articleRoute: "best-programming-languages-high-paying-tech-jobs",
    },
    {
      id: 17,
      title: `Best Programming Language for AI and Machine Learning`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747398547/pexels-markus-winkler-1430818-18512795_vozwoe.jpg",
      alt: "Best Programming Language for AI and Machine Learning",
      date: "May 16, 2025",
      articleRoute: "top-languages-for-ai-2025",
    },
    {
      id: 18,
      title: `Git For Beginners: A Complete Step-by-Step Guide to Version Control`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747472691/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx.jpg",
      alt: "Git For Beginners: A Complete Step-by-Step Guide to Version Control",
      date: "May 17, 2025",
      articleRoute: "git-explained",
    },
    {
      id: 19,
      title: `AWS: The Ultimate Guide to Cloud Computing’s Wild Rollercoaster`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747483676/mehmet-ali-peker-hfiym43qBpk-unsplash_1_fszj7j.jpg",
      alt: "AWS: The Ultimate Guide to Cloud Computing’s Wild Rollercoaster",
      date: "May 17, 2025",
      articleRoute: "aws-explained",
    },
    {
      id: 20,
      title: `Full Stack Developer Roadmap 2025: The Ultimate Beginner’s Guide to FullStack Web Development`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747557411/fullstack_sioshn.png",
      alt: "Full Stack Developer Roadmap 2025",
      date: "May 18, 2025",
      articleRoute: "full-stack-developer-roadmap",
    },
    {
      id: 21,
      title: `Rust Programming Language: Memory Safety and Performance Explained`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747559679/rust_q0urkm.webp",
      alt: "Rust Programming Language: Memory Safety and Performance Explained",
      date: "May 18, 2025",
      articleRoute: "rust-programming-language",
    },
    {
      id: 22,
      title: `Linux vs Windows vs Mac: Why Linux is Simply Better for Your Computer Freedom`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747560830/theregisti-6km3qNqc8fk-unsplash_cjxbvw.jpg",
      alt: "Linux vs Windows vs Mac",
      date: "May 18, 2025",
      articleRoute: "Linux-vs-Windows-vs-Mac",
    },
    {
      id: 23,
      title: `Mixing Programming Languages in One Executable: How Compilers, Linkers, and ABIs Make It Work`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755183273/audio_1755156447127_jxw889_dpoz18.webp",
      alt: "Mixing Programming Languages in One Executable",
      date: "August 14 , 2025",
      articleRoute: "mixing-programming-languages-in-one-executable",
    },
    {
      id: 24,
      title: `DevOps Explained: Lifecycle, Phases, Tools, and Real-World Stories`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755252483/audio_1755245920448_lnxdm9_exsuiw.webp",
      alt: "DevOps Explained",
      date: "August 15, 2025",
      articleRoute: "devops-lifecycle",
    },
    {
      id: 25,
      title: `Computer Science Career Path`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755336713/audio_1755334719154_bdxdsx_gkoqmw.webp",
      alt: "Computer Science Career Path",
      date: "August 16, 2025",
      articleRoute: "computer-science-career",
    },
    {
      id: 26,
      title: `C vs C++ vs C#`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755439142/audio_1755435512328_9gyci_tujfgy.webp",
      alt: "C vs C++ vs C#",
      date: "August 17, 2025",
      articleRoute: "c-vs-cpp-vs-csharp",
    },
    {
      id: 27,
      title: `How to Learn Web Development in 2025`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755498401/audio_1755493130168_mnninx_bbda8r.webp",
      alt: "How to Learn Web Development in 2025",
      date: "August 18, 2025",
      articleRoute: "learn-web-development-2025",
    },
    {
      id: 28,
      title: `GitHub Repositories: 17 must-see open source projects that will level up your coding`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755527715/audio_1755527219890_ndn0m6_qmhpsb.webp",
      alt: "GitHub Repositories: 17 must-see open source projects that will level up your coding",
      date: "August 18, 2025",
      articleRoute: "github-repositories",
    },
    {
      id: 29,
      title: `Computer Science Degree Worth It? The Real Answer With Careers, Salaries, AI, and Satisfaction`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1755613615/audio_1755594314864_2a5zr_yiegud.webp",
      alt: "Computer Science Degree Worth It?",
      date: "August 19, 2025",
      articleRoute: "computer-science-degree-worth-it",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <div className="h-ai">
        <h1>Latest</h1>
      </div>

      <div className="bg-grid-4">
        {latestPosts.map((project) => (
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
