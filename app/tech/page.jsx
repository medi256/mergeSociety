import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../section/section.css";

export const metadata = {
  title: "Merge Society | Tech Industry",
  description:
    "Explore the latest trends, innovations, and updates in the tech industry to stay informed, inspired, and ahead of the curve in a fast-changing world.",
  keywords: [
    "Tech Industry",
    "Technology News",
    "Tech Trends",
    "Tech Innovations",
    "Tech Startups",
    "Tech Companies",
    "Tech Analysis",
    "Tech Insights",
    "AI in Tech",
    "Web Development",
    "Software Development",
    "Programming Languages",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Blockchain Technology",
    "Internet of Things (IoT)",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
    "Tech Careers",
    "Tech Education",
    "Tech Conferences",
    "Tech Events",
    "Tech Podcasts",
    "Tech Blogs",
    "Tech Communities",
    "Tech Networking",
    "Explore the latest tech trends",
    "Stay informed about tech innovations",
    "Discover new tech startups",
    "Learn about emerging technologies",
    "Understand the impact of technology on society",
    "Explore the future of technology",
    "Stay updated on tech news",
    "Discover the latest tech products",
    "Learn about tech entrepreneurship",
    "Explore tech career opportunities",
    "Innovations and updates in tech",
    "breaking tech developments",
    "AI and machine learning updates",
    "software development trends",
    "technology trends 2025",
  ],

  authors: [
    { name: "Merge Society", url: "https://www.mergesociety.com/about" },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  applicationName: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/tech",
  },
  openGraph: {
    title: "Merge Society | Tech Industry",
    description:
      "Explore the latest trends, innovations, and updates in the tech industry to stay informed, inspired, and ahead of the curve in a fast-changing world.",

    url: "https://www.mergesociety.com/tech",
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
    title: "Merge Society | Tech Industry",
    description:
      "Explore the latest trends, innovations, and updates in the tech industry to stay informed, inspired, and ahead of the curve in a fast-changing world.",

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

const Section3 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Essential Guide to Computer Components: Understanding the Heart and Brain of Your PC",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745674201/computer-compopnents_spj8rl.jpg",
      alt: "The Essential Guide to Computer Components",
      date: "April 26, 2025",
      articleRoute: "computer-components",
    },
    {
      id: 2,
      title:
        "Google’s Antitrust Battles, AI Shenanigans, Stretchy Computers & More: Your Wild, Weird Week in Tech",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745675333/chrome-isdone_dorn2u.jpg",
      alt: "Google’s Antitrust Battles, AI Shenanigans",
      date: "April 26, 2025",
      articleRoute: "chrome",
    },
    {
      id: 3,
      title:
        "The Ultimate Guide to Major Operating Systems: From Windows to Unix and Beyond",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745676706/operating-sytems_x0xwsi.jpg",
      alt: "Collage of major operating system interfaces including Windows, macOS, Linux, Android, and iOS with their respective logos",
      date: "April 26, 2025",
      articleRoute: "operating-systems",
    },
    {
      id: 4,
      title:
        "Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745681628/palantir_vii89x.jpg",
      alt: " Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      date: "April 26, 2025",
      articleRoute: "palantir",
    },
    {
      id: 5,
      title:
        "The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745683592/wifi_ao8skn.jpg",
      alt: " The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      date: "April 26, 2025",
      articleRoute: "wifi",
    },
    {
      id: 6,
      title:
        "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745927099/mariia-shalabaieva-NuvM8XxweIw-unsplash_n07w3o.jpg",
      alt: "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      date: "April 29, 2025",
      articleRoute: "palantir2",
    },
    {
      id: 7,
      title:
        "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745940889/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun.jpg",
      alt: "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      date: "April 29, 2025",
      articleRoute: "dev-fluencer",
    },
    {
      id: 8,
      title:
        "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745941798/linux_hffokn.jpg",
      alt: "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      date: "April 29, 2025",
      articleRoute: "linux",
    },
    {
      id: 9,
      title: "How to apply for a job at Google",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745999004/pawel-czerwinski-fpZZEV0uQwA-unsplash_h4wqot.jpg",
      alt: "How to apply for a job at Google",
      date: "April 30, 2025",
      articleRoute: "get-job-at-google",
    },
    {
      id: 10,
      title: "40 Programming Projects That Will Make You a Better Developer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746001867/van-tay-media--S2-AKdWQoQ-unsplash_cmx2em.jpg",
      alt: "40 Programming Projects That Will Make You a Better Developer",
      date: "April 30, 2025",
      articleRoute: "40-projects",
    },
    {
      id: 11,
      title:
        "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746027826/mehdi-sepehri-cX0Yxw38cx8-unsplash_szmfpc.jpg",
      alt: "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      date: "April 30, 2025",
      articleRoute: "bird-flu",
    },
    {
      id: 12,
      title:
        "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746028914/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii.jpg",
      alt: "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      date: "April 30, 2025",
      articleRoute: "reddit",
    },
    {
      id: 13,
      title:
        "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746087085/hitesh-choudhary-u7r-VFdvQk8-unsplash_onsg9b.jpg",
      alt: "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      date: "May 1, 2025",
      articleRoute: "will-tech-jobs-bounce-back",
    },
    {
      id: 14,
      title:
        "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746091887/david-schultz-zIq30tCncWk-unsplash_gwiqzy.jpg",
      alt: "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      date: "May 1, 2025",
      articleRoute: "tech-jobs-in-freefall",
    },
    {
      id: 15,
      title: "The Greatest Hack in History",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746098778/nahel-abdul-hadi-flha0KwRrRc-unsplash_fdg6bt.jpg",
      alt: "The Greatest Hack in History",
      date: "May 1, 2025",
      articleRoute: "greatest-hack",
    },
    {
      id: 16,
      title: "But what is quantum computing? (Grover's Algorithm)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746101784/markus-winkler-FUQWePRf0Qc-unsplash_hywmpd.jpg",
      alt: "But what is quantum computing? (Grover's Algorithm)",
      date: "May 1, 2025",
      articleRoute: "what-is-quantam",
    },
    {
      id: 17,
      title: "But what is a neural network? | Deep learning",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746103424/jona-UopUfxghnWo-unsplash_qxft28.jpg",
      alt: "But what is a neural network? | Deep learning",
      date: "May 1, 2025",
      articleRoute: "neural-network",
    },
    {
      id: 18,
      title:
        "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746251130/roy-lee_w0dumx.webp",
      alt: "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      date: "May 3, 2025",
      articleRoute: "roy-lee",
    },
    {
      id: 19,
      title:
        "What It's Really Like to Study Computer Science: Reality of CS Majors",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746264565/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi.jpg",
      alt: "What It's Really Like to Study Computer Science: Reality of CS Majors",
      date: "May 3, 2025",
      articleRoute: "reality-of-cs",
    },
    {
      id: 20,
      title:
        "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746266414/aws_lg2upw.webp",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "50-top-aws",
    },
    {
      id: 21,
      title:
        "AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746267358/growtika-Am6pBe2FpJw-unsplash_iwabef.jpg",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "cloud-service",
    },
    {
      id: 22,
      title: "Docker 101: Mastering Modern Software Delivery with Containers",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746270617/rubaitul-azad-HSACbYjZsqQ-unsplash_okwrat.jpg",
      alt: "Docker 101: Mastering Modern Software Delivery with Containers",
      date: "May 3, 2025",
      articleRoute: "docker-explained",
    },
    {
      id: 23,
      title:
        "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746276011/freestocks-I_pOqP6kCOI-unsplash_ysz7vg.jpg",
      alt: "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      date: "May 3, 2025",
      articleRoute: "cs-major",
    },
    {
      id: 24,
      title:
        "Programming Myths That Waste Your Time: Debunking the Productivity Traps Every Coder Falls For",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746691589/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi.jpg",
      alt: "Illustration showing a developer surrounded by programming myths and productivity traps",
      date: "May 8, 2025",
      articleRoute: "programming-myth",
    },
    {
      id: 25,
      title:
        "God-Tier Developer Roadmap: From Scratch to the Limits of Human Knowledge",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746694983/pexels-realtoughcandy-11035473_lzepvy.jpg",
      alt: "Programming language roadmap showing the progression from beginner to expert languages",
      date: "May 8, 2025",
      articleRoute: "developer-roadmaps",
    },
    {
      id: 26,
      title:
        "Google Gemini 2.5 Pro Surges to #1: The Future of Coding AI, OpenAI’s Strategic Shakeups, and What Every Developer Needs to Know",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746714642/solen-feyissa-_XtH7BBRPtA-unsplash_izx1le.jpg",
      alt: "Google Gemini 2.5 Pro AI coding model visualization with code samples and benchmark results",
      date: "May 8, 2025",
      articleRoute: "google-coding-ai",
    },
    {
      id: 27,
      title:
        "Vibe Coding: Why Everyone Is Wrong About AI-Generated Code (And How to Beat the 2025 Mind Virus)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg",
      alt: "Visualization of Vibe Coding concept with AI assistance and exponential thinking in programming",
      date: "May 9, 2025",
      articleRoute: "vibe-coding",
    },
    {
      id: 28,
      title:
        "The Ruby on Rails Explained: How This MVC Framework Powered the World’s Hottest Startups",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746772728/pexels-digitalbuggu-374559_yqicxw.jpg",
      alt: "Ruby on Rails framework diagram showing MVC architecture with code examples",
      date: "May 9, 2025",
      articleRoute: "ruby-explained",
    },
    {
      id: 29,
      title:
        "Chrome DevTools: 21+ Insane Browser Developer Tools Tricks Every Web Developer Needs (Most Pros Miss #13)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746774652/971_dx26ro.jpg",
      alt: "Chrome DevTools interface showing console and performance panels with visual debugging aids",
      date: "May 9, 2025",
      articleRoute: "21-devTools",
    },
    {
      id: 30,
      title:
        "15 Game Changing JavaScript Framework Features Every Developer Must Know in 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746776022/7040859_sp09q7.jpg",
      alt: "JavaScript frameworks innovation landscape 2025 showing React, Next.js, Vue, and other modern frameworks",
      date: "May 9, 2025",
      articleRoute: "javascript-features",
    },
    {
      id: 31,
      title:
        "What is malware in simple words?: How Malware Spreads - Inside a Crypto Mining Botnet Targeting Gamers",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746957800/michael-geiger-JJPqavJBy_k-unsplash_lhsizr.jpg",
      alt: "illustration of malware",
      date: "May 11, 2025",
      articleRoute: "malware-explained",
    },
    {
      id: 32,
      title:
        "Why Linux Matters: The Beginner’s Guide to Mastering the World’s Most Powerful Operating System",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746959632/pexels-realtoughcandy-11035358_sdhzhm.jpg",
      alt: "illustration of linux",
      date: "May 11, 2025",
      articleRoute: "why-linux",
    },
    {
      id: 33,
      title:
        "The TRUTH about C++: Should You Actually Learn It? The Truth Behind Its Power, Pitfalls, and Controversy",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746978372/pexels-punttim-52608_oxusa4.jpg",
      alt: "C++ programming language",
      date: "May 11, 2025",
      articleRoute: "cplus",
    },
    {
      id: 34,
      title:
        "The Most Legendary Programmers Of All Time: The Best Programmers in History",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747146327/next-academy-G6k_uEjXygE-unsplash_x1jtdf.jpg",
      alt: "The Best Programmers in History",
      date: "May 13, 2025",
      articleRoute: "10x-developers",
    },
    {
      id: 35,
      title: "Should I Get a CS Degree in 2025: Is It Still Worth It?",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747150651/cs_moponk.jpg",
      alt: "Should I Get a CS Degree in 2025",
      date: "May 13, 2025",
      articleRoute: "should-you",
    },
    {
      id: 36,
      title: "SEO Wins: 8 Fastest Ways to Rank Higher on Google Instantly",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747218727/merakist-l5if0iQfV4c-unsplash_tybhcd.jpg",
      alt: "SEO Strategies for 2025",
      date: "May 14, 2025",
      articleRoute: "seo-wins",
    },
    {
      id: 37,
      title: "Neovim: The Ultimate Guide to Modern Code Editing with Neovim",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747224208/Screen_Shot_2025-05-14_at_3.03.06_PM_amsw1l.png",
      alt: "Neovim Modern Guide",
      date: "May 14, 2025",
      articleRoute: "neovim-explained",
    },
    {
      id: 38,
      title:
        "PC Component Overview: The Complete Beginner’s Guide to Every Main Computer Part",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747230241/pexels-sharad-7199194_w5uzmv.jpg",
      alt: "PC Components Overview Guide",
      date: "May 14, 2025",
      articleRoute: "pc-overview",
    },
    {
      id: 39,
      title:
        "PC Gaming Components: The Ultimate Guide to Building Your Perfect Gaming PC",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747235108/pexels-alscre-3977908_xkhe5a.jpg",
      alt: "PC Gaming Components Guide",
      date: "May 14, 2025",
      articleRoute: "pc-gaming-parts",
    },
    {
      id: 40,
      title:
        "How to Build a PC in 2025: PC Parts Explained, Ste-b-Step Guide & Best CPU/GPU Combos",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747238168/pexels-athena-2582930_afjwie.jpg",
      alt: "PC Gaming Components Guide 2025",
      date: "May 14, 2025",
      articleRoute: "recommended-gaming-pc-builds",
    },
    {
      id: 41,
      title: "UC Berkeley Computer Science Admission Requirements 2025",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1751611626/uc_barkly_ilppxp.png",
      alt: "UC Berkeley Admissions CS students",
      date: "June 4, 2025",
      articleRoute: "uc-berkeley-computer-science-admission-requirements-2025",
    },
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="section3">
      <div className="h-ai">
        <h1>Tech</h1>
      </div>

      <div className="bg-grid">
        {latestPosts.map((project) => (
          <Link
            key={project.id}
            href={`/tech/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image"
                priority
              />
            </div>
            <div className="bg-content">
              <h2 className="bg-title">{project.title}</h2>
              <time
                className="bg-date"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section3;
