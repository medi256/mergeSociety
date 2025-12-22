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
        url: "https://img.mergesociety.com/mergesociety/ML_1_fqv1iq_nmzdcu.png",
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
      "https://img.mergesociety.com/mergesociety/ML_1_fqv1iq_nmzdcu.png",
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
      image: "/mergesociety/growtika-183Yxo3vsGY-unsplash_bqlqeh_g5m3qx.jpg",
      alt: "Google Internship & Entry-Level Applications: Myths, Truths, and How to Actually Get Hired",
      date: " April 30, 2025",
      articleRoute: "internship-at-google",
    },
    {
      id: 2,
      title:
        "How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)",
      image:
        "/mergesociety/igor-omilaev-gVQLAbGVB6Q-unsplash_brxyob_lhw15u.jpg",
      alt: "How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)",
      date: " April 27, 2025",
      articleRoute: "ai-is-officially-here",
    },
    {
      id: 3,
      title:
        "The Unsung Friendship That Saved Google—and Invented the Modern Internet",
      image: "/mergesociety/Sanjay%20Ghemawat%20and%20Jeff%20Dean.webp",
      alt: "The Unsung Friendship That Saved Google—and Invented the Modern Internet",
      date: " April 27, 2025",
      articleRoute: "friendship-that-saved-google",
    },
    {
      id: 4,
      title:
        "The Wild West of the 1990s Internet: From Nick.com to the Dot-Com Bubble",
      image: "/mergesociety/1990s_Internet_blg5oq_pgx9vk.jpg",
      alt: "The Wild West of the 1990s Internet: From Nick.com to the Dot-Com Bubble",
      date: " April 27, 2025",
      articleRoute: "1990s-Internet",
    },
    {
      id: 5,
      title:
        "Why My Side Hustle Is Failing: Brutally Honest Lessons from Building in Public",
      image: "/mergesociety/why-my-side-hustle-failed_gez4na_imjequ.jpg",
      alt: "Why My Side Hustle Is Failing: Brutally Honest Lessons from Building in Public",
      date: " April 27, 2025",
      articleRoute: "why-my-side-hustle-failed",
    },
    {
      id: 6,
      title:
        "From Redstone to RAM: How Minecraft’s In-Game Logic Lets You Build a Real Computer",
      image: "/mergesociety/mincraft_kmdjhr_zrylau.jpg",
      alt: "From Redstone to RAM: How Minecraft’s In-Game Logic Lets You Build a Real Computer",
      date: " April 27, 2025",
      articleRoute: "mincraft",
    },
    {
      id: 7,
      title:
        "Inside the Mind of Modern GPUs: How Graphics Cards Power Your Games, AI, and the Future of Computing",
      image: "/mergesociety/gpus_bmtfwz_kpcedg.jpg",
      alt: "Inside the Mind of Modern GPUs: How Graphics Cards Power Your Games, AI, and the Future of Computing",
      date: " April 27, 2025",
      articleRoute: "how-graphics-cards-work",
    },
    {
      id: 8,
      title:
        "LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform Is So Weird—and Here to Stay",
      image: "/mergesociety/link-in_vsxalr_skvenq.jpg",
      alt: "LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform Is So Weird—and Here to Stay",
      date: " April 27, 2025",
      articleRoute: "link-in",
    },
    {
      id: 9,
      title: `Why America Became Obsessed with "Learn to Code"—And Where That Strategy Went Wrong`,
      image: "/mergesociety/mr-bochelly-IBKyH0V3rew-unsplash_dvk4ha_aihef9.jpg",
      alt: "Why America Became Obsessed with Learn to Code—And Where That Strategy Went Wrong",
      date: "May 1, 2025",
      articleRoute: "learn-to-code",
    },
    {
      id: 10,
      title: `Binary Explained: How Computers Use Ones and Zeros to Power the Digital World`,
      image: "/mergesociety/pexels-ron-lach-9783346_n9rpik_ejaef0.jpg",
      alt: "Binary Explained: How Computers Use Ones and Zeros to Power the Digital World",
      date: "May 15, 2025",
      articleRoute: "binary-explained",
    },
    {
      id: 11,
      title: `Computer Science Basics: A Beginner’s Guide to 101 Essential Terms and Concepts`,
      image:
        "/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg",
      alt: "Computer Science Basics: A Beginner’s Guide to 101 Essential Terms and Concepts",
      date: "May 15, 2025",
      articleRoute: "computer-science-basics",
    },
    {
      id: 15,
      title: `Best Programming Language for Each Tech Career Job in 2025: A Comprehensive Beginner’s Guide`,
      image: "/mergesociety/pexels-mart-production-7709168_oee7dw_sbe2pc.jpg",
      alt: "Best Programming Language for Each Tech Career Job in 2025",
      date: "May 16, 2025",
      articleRoute: "best-programming-language-for-each-job",
    },
    {
      id: 16,
      title: `Best Programming Languages to Learn for High Paying Tech Jobs in 2025`,
      image: "/mergesociety/kobu-agency-67L18R4tW_w-unsplash_pnwolr_t9of9c.jpg",
      alt: " Best Programming Languages to Learn for High Paying Tech Jobs in 2025",
      date: "May 16, 2025",
      articleRoute: "best-programming-languages-high-paying-tech-jobs",
    },
    {
      id: 17,
      title: `Best Programming Language for AI and Machine Learning`,
      image:
        "/mergesociety/pexels-markus-winkler-1430818-18512795_vozwoe_wqokvh.jpg",
      alt: "Best Programming Language for AI and Machine Learning",
      date: "May 16, 2025",
      articleRoute: "top-languages-for-ai-2025",
    },
    {
      id: 18,
      title: `Git For Beginners: A Complete Step-by-Step Guide to Version Control`,
      image:
        "/mergesociety/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx_u3xr8t.jpg",
      alt: "Git For Beginners: A Complete Step-by-Step Guide to Version Control",
      date: "May 17, 2025",
      articleRoute: "git-explained",
    },
    {
      id: 19,
      title: `AWS: The Ultimate Guide to Cloud Computing’s Wild Rollercoaster`,
      image:
        "/mergesociety/mehmet-ali-peker-hfiym43qBpk-unsplash_1_fszj7j_j8pqdc.jpg",
      alt: "AWS: The Ultimate Guide to Cloud Computing’s Wild Rollercoaster",
      date: "May 17, 2025",
      articleRoute: "aws-explained",
    },
    {
      id: 20,
      title: `Full Stack Developer Roadmap 2025: The Ultimate Beginner’s Guide to FullStack Web Development`,
      image: "/mergesociety/Sanjay%20Ghemawat%20and%20Jeff%20Dean.webp",
      alt: "Full Stack Developer Roadmap 2025",
      date: "May 18, 2025",
      articleRoute: "full-stack-developer-roadmap",
    },
    {
      id: 21,
      title: `Rust Programming Language: Memory Safety and Performance Explained`,
      image: "/mergesociety/rust_q0urkm_g4ly43.webp",
      alt: "Rust Programming Language: Memory Safety and Performance Explained",
      date: "May 18, 2025",
      articleRoute: "rust-programming-language",
    },
    {
      id: 22,
      title: `Linux vs Windows vs Mac: Why Linux is Simply Better for Your Computer Freedom`,
      image: "/mergesociety/audio_1756543123095_8a4545_u0bzv2_mkuiue.webp",
      alt: "Linux vs Windows vs Mac",
      date: "May 18, 2025",
      articleRoute: "Linux-vs-Windows-vs-Mac",
    },
    {
      id: 23,
      title: `Mixing Programming Languages in One Executable: How Compilers, Linkers, and ABIs Make It Work`,
      image: "/mergesociety/audio_1755156447127_jxw889_dpoz18_ciba1b.webp",
      alt: "Mixing Programming Languages in One Executable",
      date: "August 14 , 2025",
      articleRoute: "mixing-programming-languages-in-one-executable",
    },
    {
      id: 24,
      title: `DevOps Explained: Lifecycle, Phases, Tools, and Real-World Stories`,
      image: "/mergesociety/Sanjay%20Ghemawat%20and%20Jeff%20Dean.webp",
      alt: "DevOps Explained",
      date: "August 15, 2025",
      articleRoute: "devops-lifecycle",
    },
    {
      id: 25,
      title: `Computer Science Career Path`,
      image: "/mergesociety/audio_1755334719154_bdxdsx_gkoqmw_g0izlh.webp",
      alt: "Computer Science Career Path",
      date: "August 16, 2025",
      articleRoute: "computer-science-career",
    },
    {
      id: 26,
      title: `C vs C++ vs C#`,
      image: "/mergesociety/audio_1755435512328_9gyci_tujfgy_pn1l4g.webp",
      alt: "C vs C++ vs C#",
      date: "August 17, 2025",
      articleRoute: "c-vs-cpp-vs-csharp",
    },
    {
      id: 27,
      title: `How to Learn Web Development in 2025`,
      image: "/mergesociety/audio_1755493130168_mnninx_bbda8r_hyq10u.webp",
      alt: "How to Learn Web Development in 2025",
      date: "August 18, 2025",
      articleRoute: "learn-web-development-2025",
    },
    {
      id: 28,
      title: `GitHub Repositories: 17 must-see open source projects that will level up your coding`,
      image: "/mergesociety/audio_1755527219890_ndn0m6_qmhpsb_fcljoo.webp",
      alt: "GitHub Repositories: 17 must-see open source projects that will level up your coding",
      date: "August 18, 2025",
      articleRoute: "github-repositories",
    },
    {
      id: 29,
      title: `Computer Science Degree Worth It? The Real Answer With Careers, Salaries, AI, and Satisfaction`,
      image: "/mergesociety/audio_1755594314864_2a5zr_yiegud_iau83z.webp",
      alt: "Computer Science Degree Worth It?",
      date: "August 19, 2025",
      articleRoute: "computer-science-degree-worth-it",
    },
    {
      id: 30,
      title: `10 Best Websites To Learn How To Code For Free`,
      image: "/mergesociety/top_ten_websites_to_learn_coding_for_free.webp",
      alt: "10 Best Websites To Learn How To Code For Free",
      date: "December 6, 2025",
      articleRoute: "top-free-websites-to-learn-programming",
    },
    {
      id: 31,
      title: `40 Free APIs You Can Use In Your Next Programming Project`,
      image: "/mergesociety/free_apis.webp",
      alt: "40 Free APIs You Can Use In Your Next Programming Project",
      date: "December 16, 2025",
      articleRoute: "list-of-free-apis",
    },
    {
      id: 32,
      title: `Data Structures and Big O For Coding Interviews - Data Structures Explained`,
      image: "/mergesociety/data_structures_explained.webp",
      alt: "Data Structures and Big O For Coding Interviews - Data Structures Explained",
      date: "December 17, 2025",
      articleRoute: "data-structures-explained",
    },
    {
      id: 33,
      title: `Mindset Changes That Transformed My Learning To Code`,
      image: "/mergesociety/programmer_mindset.webp",
      alt: "Mindset Changes That Transformed My Learning To Code",
      date: "December 18, 2025",
      articleRoute: "programming_mindset",
    },
    {
      id: 34,
      title: `What Is Git, And How Is It Different From GitHub Or GitLab? Git vs. GitHub`,
      image: "/mergesociety/git_vs_github.webp",
      alt: "What Is Git, And How Is It Different From GitHub Or GitLab? Git vs. GitHub",
      date: "December 22, 2025",
      articleRoute: "git-vs-github",
    },
    {
      id: 35,
      title: `React Server Components RCE Proof Of Concept: Next.js & React vulnerability will break the internet`,
      image: "/mergesociety/Next.js_React.webp",
      alt: "React Server Components RCE Proof Of Concept: Next.js & React vulnerability will break the internet",
      date: "December 22, 2025",
      articleRoute: "react-nextjs-vulnerability",
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
