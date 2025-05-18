import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "Linux vs Windows vs Mac: Why Linux is Better for Computer Freedom in 2025",
  description:
    "Discover why Linux offers superior computer freedom compared to Windows and Mac in 2025. Explore privacy benefits, customization options, security advantages, and why more users are switching to open-source.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "linux vs windows vs mac",
    "linux better than windows",
    "linux privacy advantages",
    "open source operating system",
    "linux security benefits",
    "linux customization options",
    "linux distros 2025",
    "linux for beginners",
    "linux vs macos privacy",
    "windows alternatives",
    "linux performance advantages",
    "bloatware free os",
    "linux hardware compatibility",
    "live boot linux",
    "linux vs windows security",
    "lightweight linux distros",
    "linux vs windows gaming",
    "linux freedom",
    "best linux distribution 2025",
    "revive old computers with linux",
  ],

  category: "Operating Systems",

  openGraph: {
    title:
      "Linux vs Windows vs Mac: The Ultimate Computer Freedom Guide for 2025",
    description:
      "Why Linux delivers superior freedom, privacy, and customization compared to Windows and Mac in 2025. Discover how to escape data collection, avoid bloatware, and take full control of your computing experience.",
    url: "https://www.mergesociety.com/latest/Linux-vs-Windows-vs-Mac",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747560830/theregisti-6km3qNqc8fk-unsplash_cjxbvw.jpg",
        width: 1200,
        height: 630,
        alt: "Linux vs Windows vs Mac: Computer Freedom Comparison 2025",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-18T09:00:00Z",
    modifiedTime: "2025-05-18T09:00:00Z",
    section: "Operating Systems",
    tags: [
      "Linux",
      "Windows",
      "macOS",
      "Open Source",
      "Privacy",
      "Security",
      "Customization",
      "Linux Distributions",
      "Operating Systems",
      "Data Privacy",
      "Computer Freedom",
      "Technical Guide",
      "Software Comparison",
      "Bloatware",
      "Live Booting",
    ],
  },

  authors: [
    {
      name: "Sam Davis",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society Learning Platform",

  alternates: {
    canonical: "https://www.mergesociety.com/latest/Linux-vs-Windows-vs-Mac",
    languages: {
      "en-US": "https://www.mergesociety.com/latest/Linux-vs-Windows-vs-Mac",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Linux vs Windows vs Mac: The Freedom Comparison for 2025",
    description:
      "Discover why Linux offers superior privacy, security, and customization compared to Windows and Mac in 2025. Learn about Linux distributions, live booting, and how to take control of your computing experience.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747560830/theregisti-6km3qNqc8fk-unsplash_cjxbvw.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 500,
    },
  },

  other: {
    readingTime: "8 minutes",
    contentType: "Comparison Guide",
    publishDate: "May 18, 2025",
    category: "Operating Systems",
    subcategory: "Open Source",
    featured: true,
    series: "Modern Operating Systems",
    complexity: "Beginner to Intermediate",
    relatedArticles: [
      "How to Install Linux for Complete Beginners",
      "Top 10 Linux Distributions for 2025",
      "Linux vs Windows Gaming Performance in 2025",
      "Privacy Comparison: Linux, Windows 11, and macOS Yosemite",
      "Reviving Old Hardware: Linux Distributions for Aging Computers",
    ],
    visualAid: true,
    authorCredentials: "Open Source Advocate & Systems Administrator",
    keyTakeaways: [
      "Understanding Linux's superior approach to user freedom and privacy",
      "How Linux avoids bloatware and unwanted AI features",
      "Linux's improved security posture compared to Windows and Mac",
      "Exploring Linux customization and distribution options",
      "Using live boot to safely test Linux without installation",
      "Linux hardware compatibility considerations",
      "Benefits of open source ecosystem and community",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Linux vs Windows vs Mac: Why Linux is Better for Computer Freedom in 2025",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747560830/theregisti-6km3qNqc8fk-unsplash_cjxbvw.jpg",
    datePublished: "2025-05-18T09:00:00Z",
    dateModified: "2025-05-18T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Sam Davis",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Open Source Advocate & Systems Administrator",
      description:
        "Experienced systems administrator specializing in open source solutions and cross-platform integration",
    },
    publisher: {
      "@type": "Organization",
      name: "Merge Society",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Discover why Linux offers superior computer freedom compared to Windows and Mac in 2025. Explore privacy benefits, customization options, security advantages, and why more users are switching to open-source.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/latest/Linux-vs-Windows-vs-Mac",
    },
    keywords:
      "linux vs windows vs mac, linux privacy, operating system comparison, open source OS, linux customization, linux security, bloat-free computing",
    about: [
      {
        "@type": "Thing",
        name: "Linux Operating System",
      },
      {
        "@type": "Thing",
        name: "Operating System Comparison",
      },
      {
        "@type": "Thing",
        name: "Computer Privacy",
      },
    ],
    isAccessibleForFree: "True",
    educationalUse: "instruction",
    proficiencyLevel: "Beginner to Intermediate",
    articleSection: "Operating System Comparison",
    wordCount: 1800,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        isAccessibleForFree: "True",
        cssSelector: ".faq-section",
      },
    ],
  },

  // Enhanced semantic metadata
  semantic: {
    contentTags: [
      "linux privacy advantages",
      "operating system freedom comparison",
      "open source vs proprietary",
      "linux customization options",
      "linux distro selection guide",
      "linux security benefits",
      "bloatware-free computing",
      "windows vs linux vs mac",
      "linux terminal power",
      "live boot linux guide",
    ],
    primaryTopic: "Linux Operating System Advantages",
    conceptualDifficulty: "Beginner to Intermediate",
    targetAudience: [
      "privacy-conscious users",
      "tech enthusiasts",
      "windows power users",
      "mac users considering alternatives",
      "programmers and developers",
      "system administrators",
      "security-focused individuals",
      "older hardware owners",
      "customization enthusiasts",
      "computer science students",
    ],
    visualContent: true,
    comprehensiveness: "complete introduction to operating system comparison",
    freshness: "updated May 2025 with current OS ecosystem practices",
    evergreen: {
      value: true,
      updateSchedule: "quarterly review",
    },
    depthLevel: "balanced overview with practical implications",
    contentFormat: "educational comparison with practical considerations",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Operating System Education",
    pageType: "Comparison Guide",
    contentPillar: "Open Source Computing",
    contentCluster: "Operating System Alternatives",
    expectedReadTime: 480, // in seconds
    wordCount: 1800,
    technicalLevel: 2, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.88,
      expectedDiscussionTrigger: 0.85,
      socialSharePotential: "high",
      conceptualComplexity: "medium",
      practicalApplicability: "high",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "linux vs windows vs mac which is better",
      "why choose linux over windows",
      "is linux safer than windows and mac",
      "best operating system for privacy 2025",
      "linux beginner guide",
    ],
    secondary: [
      "how to try linux without installing",
      "does linux work with my hardware",
      "linux vs windows for gaming 2025",
      "best linux distro for beginners",
      "can linux replace windows completely",
    ],
    painPoints: [
      "concern about windows privacy issues",
      "frustration with operating system bloat",
      "uncertainty about linux hardware compatibility",
      "worries about linux learning curve",
      "confusion about choosing the right linux distro",
      "concerns about software availability on linux",
    ],
    searchQueries: [
      "linux vs windows vs mac comparison",
      "why linux is better than windows",
      "linux privacy advantages over windows",
      "best linux distro for beginners 2025",
      "how to install linux dual boot",
      "linux vs windows gaming performance",
      "can linux run windows programs",
      "linux on old laptop guide",
      "linux vs macos security comparison",
      "how to escape microsoft data collection",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "Honest comparison with humor while providing practical guidance for beginners",
    expertiseLevel: "accessible explanations of complex OS differences",
    actionableInsights:
      "clear next steps for trying Linux with minimal commitment",
    biasAwareness:
      "acknowledges Linux quirks while presenting a balanced view of strengths",
    comprehensiveToSuccinct:
      "covers key differences while maintaining engaging tone",
  },

  // Business alignment
  businessAlignment: {
    conversionGoal:
      "linux fundamentals course enrollments and community membership sign-ups",
    audienceSegment: "privacy-conscious users and tech enthusiasts",
    customerJourneyStage: "awareness and consideration",
    contentROIMetrics: [
      "linux guide downloads",
      "distro recommendation tool usage",
      "operating system newsletter subscriptions",
      "linux course enrollments",
      "affiliate links to compatible hardware",
    ],
    competitivePositioning:
      "more approachable and humorous take on Linux benefits versus competition",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "organic search",
      "linux community forums",
      "tech subreddits",
      "privacy-focused communities",
      "hackernews",
      "tech newsletters",
      "github discussions",
      "discord tech servers",
    ],
    promotionStrategy:
      "emphasize growing privacy concerns and Linux's continued improvement in 2025",
    syndicationPartners: [
      "tech education platforms",
      "privacy advocacy websites",
      "open source newsletters",
      "tech comparison blogs",
    ],
    emailCampaignSegment:
      "users interested in alternatives to Windows and macOS",
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy:
      "encourage sharing of positive Linux experiences and distro recommendations",
    conversationStarters: [
      "What made you consider alternatives to Windows or Mac?",
      "Which Linux distribution did you try first?",
      "What was your biggest surprise when switching to Linux?",
      "What Windows/Mac feature do you miss most on Linux?",
    ],
    communityContribution:
      "inviting readers to share their favorite Linux customizations",
    expertFollowup:
      "weekly live Q&A sessions addressing Linux transition questions",
  },

  // Conversion optimization
  conversionOptimization: {
    primaryCTA: "Download Our Linux Distribution Selector Tool",
    secondaryCTA: "Join Our Free Linux Essentials Workshop",
    contentUpgrades: [
      "Printable Linux command cheat sheet",
      "Linux vs. Windows vs. Mac feature comparison chart",
      "Beginner-friendly Linux installation guide",
      "Compatible hardware database access",
    ],
    leadMagnetOffering: "7-Day Linux Migration Email Course",
  },

  // Content componentization
  contentComponentization: {
    modularity: "structured by key decision factors for OS selection",
    snippetOptimization: {
      osComparisons: true,
      privacyAnalysis: true,
      distroRecommendations: true,
      liveBootInstructions: true,
      faqs: true,
    },
    voiceSearchOptimized: {
      naturalLanguageQueries: [
        "is linux better than windows",
        "what are the advantages of linux",
        "how do i try linux without installing it",
        "which linux is best for beginners",
        "can linux run on old computers",
      ],
    },
    multiDevicePresentation:
      "mobile-optimized with clear callouts for key comparison points",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Linux vs Windows vs Mac: Why Linux is Simply Better for Your Computer
          Freedom
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747560830/theregisti-6km3qNqc8fk-unsplash_cjxbvw.jpg"
          }
          alt="Linux vs Windows vs Mac"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-18">
            | May 18, 2025
          </time>
        </h2>
        <p>
          Choosing an operating system in today’s tech overrun world feels
          downright daunting especially with the ever increasing concerns over
          privacy, security, and user freedom. If you’re tired of Windows
          preloading spyware and calling it a “feature,” or side eyeing Apple as
          it safeguards your privacy until surprise! your data gets sent
          straight to ChatGPT, you’re probably wondering if there’s a better
          alternative. Enter Linux, the champion of open-source, freedom,
          customization, and digital independence. But what really makes Linux a
          superior OS in the battle of <strong>Linux vs Windows vs Mac</strong>?
          Buckle up for a plunge into the world where freedom reigns, bloatware
          is banished, and your choices are limited only by your imagination
          (and, let’s be honest, sometimes by available drivers).
        </p>

        <section>
          <h2>Freedom First: Your Data, Your Rules with Linux</h2>
          <p>
            Imagine powering on your computer and taking a deep, calming breath,
            relieved that your personal data isn't being vacuumed into some
            distant Microsoft data center or locked behind Apple’s polished
            walls. In the land of <strong>Linux</strong>, you yes, YOU are in
            control. Unlike macOS, where you’re side hugged by “Grandpa Tim” (as
            Sam puts it think Tim Cook, but squintier and even less computer
            savvy), Linux is designed with the user in mind; not the CEO’s
            quarterly bonus.
          </p>
          <p>
            Linux stands as a beacon for those who value privacy and want to
            escape the ever watchful eyes of Big Tech. No more hidden telemetry,
            no more surprise updates that reset your settings, and (best of all)
            no feature hiding, profit driven nonsense. It’s just you and your
            machine, making magic or, at the very least, tinkering to your
            heart’s content.
          </p>
        </section>

        <section>
          <h2>
            Responsibility and Power: Linux Throws Away the Training Wheels
          </h2>
          <p>
            Of course, with great freedom comes great responsibility (just ask
            any Spider Man). Where Windows and macOS wrap their users in a
            bubble of guardrails and popup warnings, <strong>Linux</strong>{" "}
            isn’t afraid to drop you headfirst into the deep end and then close
            the pool for good measure. New users quickly meet their new
            best/worst friend: the terminal.
          </p>
          <p>
            Instead of prim, glossy buttons to click, Linux users communicate
            with the all powerful “Sudo,” issuing commands in a unique blend of
            Newspeak and Klingon. Want to install something? It might feel like
            making a wish to your computer’s direct overlord. Sure, it can be
            intimidating (“sudo apt get install,” anyone?), but it offers
            hands-on power you simply won’t find in other systems.
          </p>
        </section>

        <section>
          <h2>Security and Speed: Bloat Free, Virus Resistant Computing</h2>
          <h3>Why Hackers Ignore Linux (And That’s Awesome)</h3>
          <p>
            One hidden perk of Linux’s relatively low (~5% desktop) market share
            is that hackers rarely bother targeting it creating a playground
            that’s significantly less littered with viruses. In fact, if
            security is everything, you might even consider FreeBSD, which has
            practically disappeared from the mainstream market (hello, 0% market
            share), making it an unintended vault against malware.
          </p>
          <h3>Bloatware Begone: The Beauty of Lean Linux</h3>
          <p>
            Tired of booting up your Windows machine only to find it slogging
            under the weight of preinstalled “helper” apps, shopping assistants,
            and other digital barnacles? Linux delights in minimalism. Most
            distros ship with little or no superfluous software. In fact, some,
            like minimal Linux distributions are so barebones they boot straight
            into a text interface, leaving you with a pristine canvas.
          </p>
          <ul>
            <li>
              <strong>Bloatware Free Experience:</strong> Linux distros
              typically bundle just the essentials, allowing you to add only
              what you need.
            </li>
            <li>
              <strong>Low Virus Risk:</strong> Fewer attack vectors mean safer
              day to day computing.
            </li>
          </ul>
        </section>

        <section>
          <h2>Hardware Compatibility and The Myth of the Walled Garden</h2>
          <h3>Escape Apple's Walled Garden (Literally)</h3>
          <p>
            Did you know Apple’s headquarters is literally a walled garden? The
            metaphor couldn’t be more perfect: buy an (expensive) Mac, and
            you’re forever stuck playing by Apple’s rules. MacOS is technically
            “free,” but only once you’ve handed over a small fortune for a slab
            of shiny metal.
          </p>
          <h3>Linux: Build and Customize Your Perfect Computer</h3>
          <p>
            On Linux, you’re not stuck with a single device or locked ecosystem.
            Want to assemble a dream machine with the exact components you need?
            Done. Just check for hardware compatibility first sometimes, even
            the best audio drivers need a nudge (and, let’s be real, sometimes a
            prayer). The Linux world is not without its quirks: occasionally,
            adapters and drivers need creative encouragement, and even then, you
            may need to refer to configuration guides or check community forums.
            But for tinkerers and customizers, this is half the fun.
          </p>
        </section>

        <section>
          <h2>
            Infinite Choice: Experimenting with Linux Distros and Live Booting
          </h2>
          <p>
            Perhaps Linux’s most thrilling feature is its sheer variety. There’s
            a distro for every need:
          </p>
          <ul>
            <li>
              <strong>Lightweight Distros:</strong> Perfect for reviving old
              laptops. Examples include Lubuntu, Puppy Linux, or installing
              Ubuntu on old hardware .
            </li>
            <li>
              <strong>Gaming Distros:</strong> Unleash the power of your
              high-end rig with a SteamOS or Pop!_OS.
            </li>
            <li>
              <strong>Specialty Distros:</strong> For the faithful: TempleOS.
              For the, er, pop culture inclined: Miley Cyrus OS. (Yes, they’re
              both real one safer to Google at work than the other.)
            </li>
          </ul>
          <p>
            And here’s a trick few beginners know: <strong>live booting</strong>
            . Download the distro image, put it on a USB stick, and boot
            directly from USB to test drive your chosen OS no installation (or
            risk) required. Try two, three, or ten different flavors before
            picking your favorite, all without touching your main hard drive.
          </p>
        </section>

        <section>
          <h2>Avoiding Unwanted AI and Useless Features</h2>
          <p>
            While Microsoft and Apple race to integrate AI “assistants” into
            their systems, Linux quietly skips the fanfare. Is it because Linux
            devs can’t figure out AI, or because AI can’t figure out Linux? Hard
            to say, but at least your Linux install won’t suddenly start
            summarizing your emails or creepily suggesting what to have for
            dinner.
          </p>
        </section>

        <section>
          <h2>Linux, Windows, and Mac: The Comparison Continues</h2>
          <p>
            Ready to dive in, or still on the fence? As always, the tech world
            is full of strong opinions. Don’t take Sam’s word alone
            <strong>Linux</strong> fans are famous for their passionate (and
            lengthy) explanations, so scroll through community forums and
            comment sections for a true crash course in operating system fan
            bases. And if you want a counterpoint: Windows users argue that
            their OS “just works” with the latest games, top tier productivity
            software, and yes even the newest viruses.
          </p>
          <p>
            Ultimately, it comes down to what matters most to <em>you</em>:
            freedom and customization, security, gaming, or plug and play ease.
            No matter your choice, understanding the pros and cons of each
            ecosystem is the first step to computing on your own terms.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <h3>What makes Linux better than Windows or Mac?</h3>
          <p>
            <strong>Linux</strong> gives you freedom over your system: no
            pre-installed spyware, less bloatware, and fewer viruses target
            Linux. It's highly customizable, offers a wide variety of
            distributions ("distros"), and is completely free to use on almost
            any hardware.
          </p>

          <h3>Is Linux really safer from viruses?</h3>
          <p>
            Yes. Linux has a smaller desktop market share, making it a less
            attractive target for malware developers. Additionally, its
            open-source nature allows quick patching of security holes, and
            users have more control over system permissions.
          </p>

          <h3>Can I run all my apps and games on Linux?</h3>
          <p>
            Many popular applications now support Linux, and tools like Wine and
            Proton enable compatibility with Windows software and games.
            However, Linux may still lack out-of-the-box support for some
            commercial apps (like Adobe Creative Suite) or the newest AAA games
            without extra configuration.
          </p>

          <h3>How do I choose the right Linux distro?</h3>
          <p>
            Consider your hardware, intended use (e.g., gaming, browsing,
            development), and comfort level with technology. Lightweight distros
            (like Lubuntu) suit older machines, while distros like Ubuntu or
            Fedora are great for beginners. You can live boot several distros to
            try them without installing.
          </p>

          <h3>Can Linux really revive old computers?</h3>
          <p>
            Absolutely! Lightweight Linux distributions are designed for minimal
            resource use, breathing new life into hardware that struggles with
            modern Windows or MacOS versions.
          </p>

          <h3>Will Linux work with my hardware?</h3>
          <p>
            Most common hardware is supported, but always check compatibility
            lists and community forums for your specific components. Some
            hardware (especially WiFi or graphics cards) may need extra drivers
            or configuration.
          </p>

          <h3>Why doesn’t Linux come with more pre-installed software?</h3>
          <p>
            To avoid bloat and give users more control. You install only what
            you want, keeping your system lean and responsive.
          </p>

          <h3>What is live booting and why is it useful?</h3>
          <p>
            Live booting lets you run Linux directly from a USB stick—no
            installation required—so you can test different distros and features
            safely and easily. It’s perfect for first-time explorers or
            troubleshooting existing systems.
          </p>
        </section>

        <aside>
          <h2>More Topics to explore</h2>
          <GridNews />
        </aside>
        <CommentSection />
      </article>
    </div>
  );
}

const GridNews = () => {
  const blogPosts = [
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
  ];

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
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
