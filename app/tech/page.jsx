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
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762772047/chrome-isdone_dorn2u_g9ilh4.jpg",
      alt: "Google’s Antitrust Battles, AI Shenanigans",
      date: "April 26, 2025",
      articleRoute: "chrome",
    },
    {
      id: 3,
      title:
        "The Ultimate Guide to Major Operating Systems: From Windows to Unix and Beyond",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762772017/operating-sytems_x0xwsi_ns3v5y.jpg",
      alt: "Collage of major operating system interfaces including Windows, macOS, Linux, Android, and iOS with their respective logos",
      date: "April 26, 2025",
      articleRoute: "operating-systems",
    },
    {
      id: 4,
      title:
        "Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771990/palantir_vii89x_zvzatj.jpg",
      alt: " Palantir: How a Silicon Valley Unicorn Rewrote the Rules on Tech, Data, and Defense",
      date: "April 26, 2025",
      articleRoute: "palantir",
    },
    {
      id: 5,
      title:
        "The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762771963/wifi_ao8skn_orx8zn.jpg",
      alt: " The Secret Magic of Wi-Fi: How Invisible Waves Power Your Internet Obsession",
      date: "April 26, 2025",
      articleRoute: "wifi",
    },
    {
      id: 6,
      title:
        "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770882/mariia-shalabaieva-NuvM8XxweIw-unsplash_n07w3o_zyagac.jpg",
      alt: "Palantir: The Shadow Tech Giant Redefining Power, Privacy, and America’s Future",
      date: "April 29, 2025",
      articleRoute: "palantir2",
    },
    {
      id: 7,
      title:
        "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770727/alex-kotliarskyi-ourQHRTE2IM-unsplash_pxmyun_iha0bn.jpg",
      alt: "Inside Tech’s Wild Subcultures: From Devfluencers to Codepreneurs—A Candid Exposé",
      date: "April 29, 2025",
      articleRoute: "dev-fluencer",
    },
    {
      id: 8,
      title:
        "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770676/linux_hffokn_okg892.jpg",
      alt: "The Life Cycle of a Linux User: From Awareness to Enlightenment (and Everything in Between)",
      date: "April 29, 2025",
      articleRoute: "linux",
    },
    {
      id: 9,
      title: "How to apply for a job at Google",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770609/pawel-czerwinski-fpZZEV0uQwA-unsplash_h4wqot_uva1qb.jpg",
      alt: "How to apply for a job at Google",
      date: "April 30, 2025",
      articleRoute: "get-job-at-google",
    },
    {
      id: 10,
      title: "40 Programming Projects That Will Make You a Better Developer",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770592/van-tay-media--S2-AKdWQoQ-unsplash_cmx2em_mdjbmx.jpg",
      alt: "40 Programming Projects That Will Make You a Better Developer",
      date: "April 30, 2025",
      articleRoute: "40-projects",
    },
    {
      id: 11,
      title:
        "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770500/mehdi-sepehri-cX0Yxw38cx8-unsplash_szmfpc_iw22ix.jpg",
      alt: "Bird Flu’s Shocking Spread: How H5N1 Is Upending America’s Farms—and the World Isn’t Ready",
      date: "April 30, 2025",
      articleRoute: "bird-flu",
    },
    {
      id: 12,
      title:
        "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770477/shutter-speed-PSCxb6qpiFg-unsplash_pt3fii_jprd9j.jpg",
      alt: "AI-Powered Bots Offend Reddit, Infiltrate Communities, and Power High-Tech Scams: What You Need To Know in 2025",
      date: "April 30, 2025",
      articleRoute: "reddit",
    },
    {
      id: 13,
      title:
        "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770408/hitesh-choudhary-u7r-VFdvQk8-unsplash_onsg9b_pm0oea.jpg",
      alt: "Tech Jobs in 2025: Will the U.S. Tech Job Market Bounce Back as AI Takes Hold?",
      date: "May 1, 2025",
      articleRoute: "will-tech-jobs-bounce-back",
    },
    {
      id: 14,
      title:
        "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770366/david-schultz-zIq30tCncWk-unsplash_gwiqzy_xfniyr.jpg",
      alt: "Tech Jobs in Freefall: Why Top Companies Are Slashing Job Postings Despite Record Profits",
      date: "May 1, 2025",
      articleRoute: "tech-jobs-in-freefall",
    },
    {
      id: 15,
      title: "The Greatest Hack in History",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770306/nahel-abdul-hadi-flha0KwRrRc-unsplash_fdg6bt_ij6hpk.jpg",
      alt: "The Greatest Hack in History",
      date: "May 1, 2025",
      articleRoute: "greatest-hack",
    },
    {
      id: 16,
      title: "But what is quantum computing? (Grover's Algorithm)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770285/markus-winkler-FUQWePRf0Qc-unsplash_hywmpd_rvjclg.jpg",
      alt: "But what is quantum computing? (Grover's Algorithm)",
      date: "May 1, 2025",
      articleRoute: "what-is-quantam",
    },
    {
      id: 17,
      title: "But what is a neural network? | Deep learning",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762770257/jona-UopUfxghnWo-unsplash_qxft28_pxbksd.jpg",
      alt: "But what is a neural network? | Deep learning",
      date: "May 1, 2025",
      articleRoute: "neural-network",
    },
    {
      id: 18,
      title:
        "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769790/roy-lee_w0dumx_d1rshx.webp",
      alt: "The Rise and Fall of Roy Lee: What His Story Means for Tech Recruiting (And Why Whiteboard Interviews Aren’t the Real Problem)",
      date: "May 3, 2025",
      articleRoute: "roy-lee",
    },
    {
      id: 19,
      title:
        "What It's Really Like to Study Computer Science: Reality of CS Majors",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769767/marvin-meyer-SYTO3xs06fU-unsplash_lgdfmi_shgkqc.jpg",
      alt: "What It's Really Like to Study Computer Science: Reality of CS Majors",
      date: "May 3, 2025",
      articleRoute: "reality-of-cs",
    },
    {
      id: 20,
      title:
        "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769722/aws_lg2upw_ilakce.webp",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "50-top-aws",
    },
    {
      id: 21,
      title:
        "AWS Services Explained: What They Do and How They Power the Cloud",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769697/growtika-Am6pBe2FpJw-unsplash_iwabef_uk33m4.jpg",
      alt: "Top 50+ AWS Services Explained: What They Do and How They Power the Cloud",
      date: "May 3, 2025",
      articleRoute: "cloud-service",
    },
    {
      id: 22,
      title: "Docker 101: Mastering Modern Software Delivery with Containers",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769669/rubaitul-azad-HSACbYjZsqQ-unsplash_okwrat_zbyg5i.jpg",
      alt: "Docker 101: Mastering Modern Software Delivery with Containers",
      date: "May 3, 2025",
      articleRoute: "docker-explained",
    },
    {
      id: 23,
      title:
        "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769609/freestocks-I_pOqP6kCOI-unsplash_ysz7vg_yogske.jpg",
      alt: "Should You Study Computer Science? A Realistic Look At The Modern Tech Job Market (With Sloth Level Humor and Honesty)",
      date: "May 3, 2025",
      articleRoute: "cs-major",
    },
    {
      id: 24,
      title:
        "Programming Myths That Waste Your Time: Debunking the Productivity Traps Every Coder Falls For",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769227/70194fc0-4637-43a8-93f1-eb0f152408e5_sbtjsi_syrmga.jpg",
      alt: "Illustration showing a developer surrounded by programming myths and productivity traps",
      date: "May 8, 2025",
      articleRoute: "programming-myth",
    },
    {
      id: 25,
      title:
        "God-Tier Developer Roadmap: From Scratch to the Limits of Human Knowledge",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769209/pexels-realtoughcandy-11035473_lzepvy_gn1gjr.jpg",
      alt: "Programming language roadmap showing the progression from beginner to expert languages",
      date: "May 8, 2025",
      articleRoute: "developer-roadmaps",
    },
    {
      id: 26,
      title:
        "Google Gemini 2.5 Pro Surges to #1: The Future of Coding AI, OpenAI’s Strategic Shakeups, and What Every Developer Needs to Know",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762769001/solen-feyissa-_XtH7BBRPtA-unsplash_izx1le_j0ert1.jpg",
      alt: "Google Gemini 2.5 Pro AI coding model visualization with code samples and benchmark results",
      date: "May 8, 2025",
      articleRoute: "google-coding-ai",
    },
    {
      id: 27,
      title:
        "Vibe Coding: Why Everyone Is Wrong About AI-Generated Code (And How to Beat the 2025 Mind Virus)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768955/pexels-shkrabaanthony-5475784_zkjf9p_jewfey.jpg",
      alt: "Visualization of Vibe Coding concept with AI assistance and exponential thinking in programming",
      date: "May 9, 2025",
      articleRoute: "vibe-coding",
    },
    {
      id: 28,
      title:
        "The Ruby on Rails Explained: How This MVC Framework Powered the World’s Hottest Startups",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768931/pexels-digitalbuggu-374559_yqicxw_hck973.jpg",
      alt: "Ruby on Rails framework diagram showing MVC architecture with code examples",
      date: "May 9, 2025",
      articleRoute: "ruby-explained",
    },
    {
      id: 29,
      title:
        "Chrome DevTools: 21+ Insane Browser Developer Tools Tricks Every Web Developer Needs (Most Pros Miss #13)",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768908/971_dx26ro_qm5n0m.jpg",
      alt: "Chrome DevTools interface showing console and performance panels with visual debugging aids",
      date: "May 9, 2025",
      articleRoute: "21-devTools",
    },
    {
      id: 30,
      title:
        "15 Game Changing JavaScript Framework Features Every Developer Must Know in 2025",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762768867/7040859_sp09q7_oelsvn.jpg",
      alt: "JavaScript frameworks innovation landscape 2025 showing React, Next.js, Vue, and other modern frameworks",
      date: "May 9, 2025",
      articleRoute: "javascript-features",
    },
    {
      id: 31,
      title:
        "What is malware in simple words?: How Malware Spreads - Inside a Crypto Mining Botnet Targeting Gamers",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767914/michael-geiger-JJPqavJBy_k-unsplash_lhsizr_sb3kcm.jpg",
      alt: "illustration of malware",
      date: "May 11, 2025",
      articleRoute: "malware-explained",
    },
    {
      id: 32,
      title:
        "Why Linux Matters: The Beginner’s Guide to Mastering the World’s Most Powerful Operating System",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767879/pexels-realtoughcandy-11035358_sdhzhm_citefi.jpg",
      alt: "illustration of linux",
      date: "May 11, 2025",
      articleRoute: "why-linux",
    },
    {
      id: 33,
      title:
        "The TRUTH about C++: Should You Actually Learn It? The Truth Behind Its Power, Pitfalls, and Controversy",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767860/pexels-punttim-52608_oxusa4_ee0udj.jpg",
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
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767743/cs_moponk_kbfqj2.jpg",
      alt: "Should I Get a CS Degree in 2025",
      date: "May 13, 2025",
      articleRoute: "should-you",
    },
    {
      id: 36,
      title: "SEO Wins: 8 Fastest Ways to Rank Higher on Google Instantly",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767718/merakist-l5if0iQfV4c-unsplash_tybhcd_gdx6av.jpg",
      alt: "SEO Strategies for 2025",
      date: "May 14, 2025",
      articleRoute: "seo-wins",
    },
    {
      id: 37,
      title: "Neovim: The Ultimate Guide to Modern Code Editing with Neovim",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767630/Screen_Shot_2025-05-14_at_3.03.06_PM_amsw1l_oihhlt.png",
      alt: "Neovim Modern Guide",
      date: "May 14, 2025",
      articleRoute: "neovim-explained",
    },
    {
      id: 38,
      title:
        "PC Component Overview: The Complete Beginner’s Guide to Every Main Computer Part",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767547/pexels-sharad-7199194_w5uzmv_so4cgb.jpg",
      alt: "PC Components Overview Guide",
      date: "May 14, 2025",
      articleRoute: "pc-overview",
    },
    {
      id: 39,
      title:
        "PC Gaming Components: The Ultimate Guide to Building Your Perfect Gaming PC",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767391/pexels-alscre-3977908_xkhe5a_spuqwt.jpg",
      alt: "PC Gaming Components Guide",
      date: "May 14, 2025",
      articleRoute: "pc-gaming-parts",
    },
    {
      id: 40,
      title:
        "How to Build a PC in 2025: PC Parts Explained, Ste-b-Step Guide & Best CPU/GPU Combos",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762767339/pexels-athena-2582930_afjwie_vw9mro.jpg",
      alt: "PC Gaming Components Guide 2025",
      date: "May 14, 2025",
      articleRoute: "recommended-gaming-pc-builds",
    },
    {
      id: 41,
      title: "UC Berkeley Computer Science Admission Requirements 2025",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762766415/uc_barkly_ilppxp_v9rjgu.png",
      alt: "UC Berkeley Admissions CS students",
      date: "June 4, 2025",
      articleRoute: "uc-berkeley-computer-science-admission-requirements-2025",
    },
    {
      id: 42,
      title: "Why Learn to Code with this AI Bubble",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762766070/audio_1755679142551_7b4jhp_a2iclj_tsoxuc.webp",
      alt: "Why Learn to Code",
      date: "August 20, 2025",
      articleRoute: "learn-to-code",
    },
    {
      id: 43,
      title:
        "Shadow Brokers - how the NSA Equation Group got hacked, EternalBlue escaped, and WannaCry set the world on fire",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765936/audio_1756372888157_az7uvs_jzyqqe_pd7poj.webp",
      alt: "How the NSA Equation Group got hacked",
      date: "August 29, 2025",
      articleRoute: "gretest-hack-of-all-time",
    },
    {
      id: 44,
      title:
        "Growth Mindset for Programmers - you do not need to be a genius to code",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/f_auto,q_auto,w_800/v1756715326/audio_1756629337986_121o9s_clovvx.webp",
      alt: "Growth Mindset for Programmers - you do not need to be a genius to code",
      date: "September  1, 2025",
      articleRoute: "growth-mindset-for-programmers",
    },
    {
      id: 45,
      title:
        "How Chatbots Actually Work: Predicting the Next Word, At Scale, With Transformers, Attention, and Human Feedback",
      image:
        "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765498/audio_1759512892275_pttyh_uh3gns_xtzvrn.webp",
      alt: "How Chatbots Actually Work: Predicting the Next Word, At Scale, With Transformers, Attention, and Human Feedback",
      date: "October  3, 2025",
      articleRoute: "ai-explained",
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
