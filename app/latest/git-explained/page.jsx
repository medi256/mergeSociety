import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title: "Git For Beginners: A Complete Step-by-Step Guide to Version Control ",
  description:
    "Master Git version control with our comprehensive beginner's guide. Learn installation, essential commands, and version tracking concepts that make collaboration seamless. Updated for 2025 with practical examples.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "git for beginners",
    "git tutorial 2025",
    "how to use git",
    "version control basics",
    "git vs github",
    "git installation guide",
    "git commit commands",
    "git repository setup",
    "git branch tutorial",
    "git for non-programmers",
    "learn git step by step",
    "git basics tutorial",
    "git configuration guide",
    "git commands for beginners",
    "git terminal commands",
    "git init tutorial",
    "git add and commit explained",
    "version control for developers",
    "git installation windows mac",
    "modern git practices 2025",
  ],

  category: "Developer Tools",

  openGraph: {
    title:
      "Git For Beginners: Master Version Control in 10 Minutes [Complete Guide 2025]",
    description:
      "Stop losing track of file versions! Our step-by-step Git tutorial teaches complete beginners how to install, configure, and use Git for seamless version control. Updated with 2025 best practices.",
    url: "https://www.mergesociety.com/latest/git-explained",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747472691/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx.jpg",
        width: 1200,
        height: 630,
        alt: "Git for Beginners Tutorial - Version Control Simplified",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-17T09:00:00Z",
    modifiedTime: "2025-05-17T09:00:00Z",
    section: "Developer Tools",
    tags: [
      "Git Tutorial",
      "Version Control",
      "Developer Tools",
      "Git Commands",
      "GitHub",
      "Programming Basics",
      "Code Management",
      "Software Development",
      "Git Repository",
      "Git Workflow",
    ],
  },

  authors: [
    {
      name: "Medi",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society Learning Platform",

  alternates: {
    canonical: "https://www.mergesociety.com/latest/git-explained",
    languages: {
      "en-US": "https://www.mergesociety.com/latest/git-explained",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Git For Beginners: Complete Guide to Version Control ",
    description:
      "Master Git in minutes! Our beginner-friendly tutorial covers installation, core commands, and version tracking concepts with easy examples.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747472691/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx.jpg",
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
    readingTime: "10 minutes",
    contentType: "Tutorial",
    publishDate: "May 17, 2025",
    category: "Developer Tools",
    subcategory: "Version Control",
    featured: true,
    series: "Developer Essentials",
    complexity: "Beginner",
    relatedArticles: [
      "GitHub for Beginners: The Ultimate Guide",
      "10 Git Commands Every Developer Should Know",
      "How to Recover from Common Git Mistakes",
      "Branching and Merging Strategies for Teams",
      "Git for Writers and Non-Technical Users",
    ],
    visualAid: true,
    authorCredentials: "Senior Developer & Technical Educator",
    keyTakeaways: [
      "Understanding Git's essential version control concepts",
      "Step-by-step Git installation on Windows and macOS",
      "Configuring Git for first-time use",
      "Mastering basic Git commands and workflows",
      "Understanding the difference between Git and GitHub",
      "Troubleshooting common Git issues for beginners",
    ],
  },

  // Schema.org structured data for rich results
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Git For Beginners: A Complete Step-by-Step Guide to Version Control",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747472691/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx.jpg",
    datePublished: "2025-05-17T09:00:00Z",
    dateModified: "2025-05-17T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Medi",
      url: "https://www.mergesociety.com/about",
      jobTitle: "Senior Developer & Technical Educator",
      description:
        "Experienced developer specializing in teaching version control and software development practices",
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
      "Master Git version control with our comprehensive beginner's guide. Learn installation, essential commands, and version tracking concepts that make collaboration seamless. Updated for 2025.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/latest/git-explained",
    },
    keywords:
      "git, version control, beginner tutorial, git commands, repository, commit, branch, git installation",
    about: [
      {
        "@type": "Thing",
        name: "Git",
      },
      {
        "@type": "Thing",
        name: "Version Control",
      },
      {
        "@type": "Thing",
        name: "Software Development",
      },
    ],
    isAccessibleForFree: "True",
    educationalUse: "instruction",
    proficiencyLevel: "Beginner",
    articleSection: "Developer Tools Tutorial",
    wordCount: 2500,
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
      "git basics",
      "version control system",
      "git installation",
      "git commands",
      "git repository",
      "git workflow",
      "git configuration",
      "git vs github",
      "file tracking",
      "code collaboration",
    ],
    primaryTopic: "Git Version Control for Beginners",
    conceptualDifficulty: "Beginner",
    targetAudience: [
      "coding beginners",
      "bootcamp students",
      "self-taught developers",
      "technical writers",
      "project managers",
      "computer science students",
      "junior developers",
      "tech adjacent roles",
      "designers working with developers",
      "documentation specialists",
    ],
    visualContent: true,
    comprehensiveness: "complete beginner to basic practical usage",
    freshness: "updated May 2025 with current Git practices",
    evergreen: {
      value: true,
      updateSchedule: "annual review",
    },
    depthLevel: "comprehensive with practical application",
    contentFormat: "step-by-step tutorial with examples",
  },

  // Analytics and content metrics
  analytics: {
    eventCategory: "Developer Tools Education",
    pageType: "Comprehensive Tutorial",
    contentPillar: "Version Control Systems",
    contentCluster: "Git Fundamentals",
    expectedReadTime: 600, // in seconds
    wordCount: 2500,
    technicalLevel: 1, // on a scale of 1-5
    visualAids: true,
    engagementMetrics: {
      estimatedCompletionRate: 0.85,
      expectedDiscussionTrigger: 0.7,
      socialSharePotential: "medium",
      conceptualComplexity: "low",
      practicalApplicability: "very high",
    },
  },

  // User intent and search optimization
  userIntent: {
    primary: [
      "how to use git for beginners",
      "git tutorial step by step",
      "learn git basics",
      "how to install git",
      "git commands for beginners",
    ],
    secondary: [
      "what is version control",
      "difference between git and github",
      "how to create git repository",
      "git config tutorial",
      "how to commit in git",
    ],
    painPoints: [
      "confusion about git terminology",
      "difficulty setting up git first time",
      "trouble understanding git workflow",
      "fear of making mistakes in repositories",
      "overwhelm from complex git documentation",
      "uncertainty about when to use git commands",
    ],
    searchQueries: [
      "git for beginners tutorial",
      "how to start using git",
      "git step by step guide",
      "install git on windows",
      "install git on mac",
      "basic git commands explained",
      "what is git repository simple explanation",
      "git config setup guide",
      "git vs github difference",
      "how to use git terminal commands",
    ],
  },

  // Content quality evaluation
  contentEvaluation: {
    uniqueValueProposition:
      "Plain-English explanations with real-world examples for complete beginners",
    expertiseLevel: "professional developer insights translated for beginners",
    actionableInsights:
      "immediate practical usability with step-by-step commands",
    biasAwareness:
      "platform-neutral coverage of Windows and macOS environments",
    comprehensiveToSuccinct:
      "detailed but accessible instructions with clear progression",
  },

  // Business alignment
  businessAlignment: {
    conversionGoal:
      "advanced git course enrollments and newsletter subscriptions",
    audienceSegment: "beginning developers and tech-adjacent professionals",
    customerJourneyStage: "awareness and education",
    contentROIMetrics: [
      "tutorial completion rate",
      "advanced course signups",
      "newsletter subscriptions",
      "github guide downloads",
      "social shares",
    ],
    competitivePositioning:
      "beginner-friendly approach vs technically overwhelming alternatives",
  },

  // Content distribution strategy
  contentDistribution: {
    primaryChannels: [
      "organic search",
      "developer forums",
      "coding bootcamps",
      "reddit programming communities",
      "developer newsletters",
      "twitter developer community",
      "linkedin tech groups",
    ],
    promotionStrategy:
      "highlight beginner accessibility and practical application",
    syndicationPartners: [
      "coding bootcamps",
      "tech learning platforms",
      "developer blogs",
      "programming communities",
    ],
    emailCampaignSegment: "new developers and technical skill learners",
  },

  // User engagement strategy
  userEngagement: {
    commentStrategy: "encourage sharing of first git experiences and questions",
    conversationStarters: [
      "What was your biggest challenge when first learning Git?",
      "Which Git command confused you the most initially?",
      "Are you using Git for personal projects or team collaboration?",
      "Did you try the terminal commands in this tutorial successfully?",
    ],
    communityContribution:
      "inviting readers to share their own tips for git beginners",
    expertFollowup: "weekly Q&A sessions for git beginners",
  },

  // Conversion optimization
  conversionOptimization: {
    primaryCTA: "Download Our Git Command Cheat Sheet",
    secondaryCTA: "Join Our Free Git Basics Webinar",
    contentUpgrades: [
      "Printable Git workflow diagram",
      "Common Git errors and solutions guide",
      "Git terminology glossary for beginners",
      "Git vs. GitHub comparison chart",
    ],
    leadMagnetOffering: "7-Day Git Mastery Email Course",
  },

  // Content componentization
  contentComponentization: {
    modularity: "structured by learning phases with clear beginner progression",
    snippetOptimization: {
      basicCommands: true,
      installationSteps: true,
      configurationExamples: true,
      workflowDiagrams: true,
      faqs: true,
    },
    voiceSearchOptimized: {
      naturalLanguageQueries: [
        "how do I start using git",
        "what are the basic git commands",
        "how to install git on windows",
        "what's the difference between git and github",
        "explain how git version control works",
      ],
    },
    multiDevicePresentation:
      "mobile-optimized with copy-pastable command examples",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Git For Beginners: A Complete Step-by-Step Guide to Version Control
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747472691/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx.jpg"
          }
          alt="Git For Beginners: A Complete Step-by-Step Guide to Version Control"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-05-17">
            | May 17, 2025
          </time>
        </h2>
        <p>
          Are you new to Git and version control? Do terms like "repository,"
          "commit," or "branch" sound like tech jargon? You're not alone! In
          this Complete Git for Beginners guide, we'll break down everything you
          need to know to get started from installing Git on your machine to
          mastering essential commands. Whether you're a coding novice, a
          developer brushing up your skills, or just someone who's tired of
          losing track of document versions, this guide is for you!
        </p>

        <section>
          <h2>What Is Git and Why Do You Need It?</h2>
          <p>
            <strong>Git</strong> is the world’s most widely used version control
            system. But why is it so popular, and what exactly does "version
            control" mean?
          </p>
          <p>
            Imagine you're working on your resume. Over time, you make updates
            maybe you add a new job, reword a bullet point, or change the font.
            Before you know it, you've got{" "}
            <span style={{ fontStyle: "italic" }}>resume.docx</span>,{" "}
            <span style={{ fontStyle: "italic" }}>resume_v2.docx</span>,{" "}
            <span style={{ fontStyle: "italic" }}>resume_final.docx</span>, and
            possibly even a{" "}
            <span style={{ fontStyle: "italic" }}>
              resume_v3_FINAL_THIS_TIME.docx
            </span>
            . It’s confusing, right?
          </p>
          <p>
            <strong>Version control systems</strong> like Git solve this chaos.
            They track changes so you have a complete history of every
            alteration – without keeping new copies for each revision. With Git,
            you can view previous versions, see what changed, and even restore
            older versions at any time, all within a single file structure. No
            more cluttered folders!
          </p>
        </section>

        <section>
          <h2>Essential Git Concepts You Must Understand</h2>
          <p>
            Mastering Git begins with a solid understanding of its core building
            blocks. Let’s break these down in plain English:
          </p>
          <ul>
            <li>
              <strong>Working Directory:</strong> Think of this as your active
              workspace – the local folder on your machine where you make file
              changes. Until you "save" changes using Git commands, they exist
              only here, untracked.
            </li>
            <li>
              <strong>Staging Area (Index):</strong> This is the "draft"
              section. Before adding new changes to your project's history, you
              place them in the staging area, where you can review and adjust
              your edits.
            </li>
            <li>
              <strong>Local Repository:</strong> After confirming your changes,
              Git saves them in your local repository an organized timeline of
              changes unique to your computer.
            </li>
            <li>
              <strong>Remote Repository:</strong> This is a shared, online
              version of your project, hosted on services like GitHub. Teams can
              collaborate by uploading ("pushing") or downloading ("pulling")
              code from this central spot.
            </li>
            <li>
              <strong>Branches:</strong> Working on a new feature? Use{" "}
              <u>branches</u>, which are like parallel universes of your
              project. Experiment safely without affecting the "main" branch,
              then merge your work later.
            </li>
            <li>
              <strong>Pull Request:</strong> When you want to add your new
              feature branch to the main project, you open a pull request
              officially asking teammates to review and approve your changes
              before merging.
            </li>
            <li>
              <strong>Merging:</strong> The process of combining one branch into
              another, creating a unified history. It’s the grand finale for all
              your hard work in that parallel universe!
            </li>
          </ul>
        </section>

        <section>
          <h2>How to Install Git on Your Computer</h2>
          <h3>Installing Git on macOS</h3>
          <ol>
            <li>
              <strong>Check if Git is already installed:</strong> Open your
              terminal and type <code>git --version</code>. If a version number
              shows up, you have Git already, but it's best to install the
              latest!
            </li>
            <li>
              <strong>Install Homebrew:</strong> Homebrew makes installing
              software on Mac easy. Copy the provided Homebrew command from{" "}
              <a
                href="https://brew.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                brew.sh
              </a>
              . Open your Terminal, paste, and press Enter. Homebrew will take a
              minute or two to finish.
            </li>
            <li>
              <strong>Install Git via Homebrew:</strong> Return to the Homebrew
              site, copy the Git installation command:{" "}
              <code>brew install git</code>. Paste it into your terminal and hit
              Enter.
            </li>
            <li>
              <strong>Verify Installation:</strong> Once it finishes, type{" "}
              <code>git</code> in your terminal. You should see a full list of
              available Git commands congrats, you’re ready!
            </li>
          </ol>

          <h3>Installing Git on Windows</h3>
          <ol>
            <li>
              Navigate to the{" "}
              <a
                href="https://git-scm.com/download/win"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git for Windows download page
              </a>
              .
            </li>
            <li>
              Click on the Windows icon, and then the highlighted download link.
              Save the installer to your computer.
            </li>
            <li>
              Double click the installer. You’ll be greeted by an installation
              wizard follow along:
              <ul>
                <li>Click ‘Next’ to accept terms and conditions.</li>
                <li>‘Next’ to confirm installation location.</li>
                <li>‘Next’ to keep default settings.</li>
                <li>
                  When prompted, set the default branch name to{" "}
                  <code>main</code> (the modern convention).
                </li>
                <li>Click ‘Next’ for all other recommended options.</li>
                <li>Click ‘Install’ then ‘Finish’ when it’s done.</li>
              </ul>
            </li>
            <li>
              Open your <strong>Command Prompt</strong> or the dedicated "Git
              Bash" terminal. Once again, type <code>git</code> to confirm your
              installation.
            </li>
          </ol>
        </section>

        <section>
          <h2>Configuring Git for the First Time</h2>
          <p>
            Freshly installed Git? Time to personalize it. Open your terminal
            and run the following commands (replace{" "}
            <span style={{ fontStyle: "italic" }}>Your Name</span> and{" "}
            <span style={{ fontStyle: "italic" }}>your@email.com</span>):
          </p>
          <pre>
            <code>git config --global user.name "Your Name"</code>
          </pre>
          <pre>
            <code>git config --global user.email "your@email.com"</code>
          </pre>
          <p>
            These commands tell Git who you are, so every change you commit is
            credited to you especially crucial for collaborative projects.
          </p>
          <p>To double check your settings, type:</p>
          <pre>
            <code>git config --list</code>
          </pre>
          <p>
            A list of all configuration options will pop up. Press the{" "}
            <kbd>Q</kbd> key to exit this screen in your terminal.
          </p>
        </section>

        <section>
          <h2>Core Terminal and Git Commands for Beginners</h2>
          <ul>
            <li>
              <strong>Create a Project Directory:</strong>
              <pre>
                <code>mkdir git-practice</code>
              </pre>
              <span>
                This command creates a new folder named "git-practice" for your
                test project.
              </span>
            </li>
            <li>
              <strong>Navigate into Your Folder:</strong>
              <pre>
                <code>cd git-practice</code>
              </pre>
            </li>
            <li>
              <strong>Create a New File:</strong>
              <pre>
                <code>touch hello.md</code>
              </pre>
              <span>
                This makes a blank markdown file called <code>hello.md</code>{" "}
                inside your project folder.
              </span>
            </li>
            <li>
              <strong>Check Project Git Status:</strong>
              <pre>
                <code>git status</code>
              </pre>
              <span>
                If Git isn’t yet initialized, this will return an error. You
                need to start Git tracking:
              </span>
            </li>
            <li>
              <strong>Initialize a New Git Repository:</strong>
              <pre>
                <code>git init</code>
              </pre>
              <span>
                This creates a hidden <code>.git</code> folder that lets Git
                track all changes inside your project.
              </span>
            </li>
            <li>
              <strong>Add Files to Staging:</strong>
              <pre>
                <code>git add .</code>
              </pre>
              <span>
                Moves <strong>all</strong> file changes from your working
                directory into the staging area for review.
              </span>
            </li>
            <li>
              <strong>Commit Your Changes:</strong>
              <pre>
                <code>git commit -m "Initial commit"</code>
              </pre>
              <span>
                This "saves" your staged changes, and the message describes what
                was changed.
              </span>
            </li>
            <li>
              <strong>Practice Status, Add, and Commit Regularly!</strong>
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> Color coding in your terminal often indicates
            whether files are unstaged (red), staged (green), or committed
            (white/gray) in many common configurations.
          </p>
          <p>
            Create, modify, and explore don’t worry about making mistakes at
            this stage. If you’re curious about other commands, try running{" "}
            <code>git</code> in your terminal or check out the{" "}
            <a
              href="https://git-scm.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              official Git command reference
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Git vs GitHub: What’s the Real Difference?</h2>
          <p>
            It's a common misconception to mix up <strong>Git</strong> and{" "}
            <strong>GitHub</strong>. Here’s the distinction:
          </p>
          <ul>
            <li>
              <strong>Git</strong> is the tool that tracks and manages version
              history on <u>your</u> computer.
            </li>
            <li>
              <strong>GitHub</strong> is a cloud based service for storing
              repositories and collaborating with others online.
            </li>
          </ul>
          <p>
            In short:{" "}
            <em>
              Git does the tracking, GitHub makes sharing and collaboration
              super easy.
            </em>
          </p>
          <p>
            Working together, these tools are foundational to software
            development, open source contributions, and even managing your own
            projects for backup, scaling, and security.
          </p>
        </section>

        <section>
          <h2>Summary: Start Your Journey as a Git Pro</h2>
          <p>
            You’ve just covered the absolute essentials for getting started with
            Git:
          </p>
          <ul>
            <li>Understanding version control concepts</li>
            <li>Installing Git on Windows or macOS</li>
            <li>Configuring your identity</li>
            <li>Practicing with basic terminal and Git commands</li>
            <li>Learning the difference between Git and GitHub</li>
          </ul>
          <p>
            With these basics, you’re ready to start tracking, saving, and
            collaborating on your projects the smart way. Don't forget to
            experiment Git is best learned through hands-on practice!
          </p>
          <p>
            If you found this guide helpful, subscribe to stay updated with more
            in-depth tutorials. <strong>Happy coding!</strong>
          </p>
        </section>

        {/* FAQ Section with semantic structure */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <h3>What is version control and why is Git important?</h3>
          <p>
            Version control is a system that tracks changes to files over time,
            allowing you to view and restore previous versions. Git is the most
            widely used version control system, making it crucial for modern
            development and collaborative work.
          </p>

          <h3>Do I need to know programming to use Git?</h3>
          <p>
            No! Git is useful for anyone who wants to track file changes, from
            writers managing document drafts to developers handling code. No
            programming skills are required to get started with basic Git
            commands.
          </p>

          <h3>How do I update Git to the latest version?</h3>
          <p>
            On macOS, use <code>brew upgrade git</code> if you installed Git via
            Homebrew. On Windows, download the latest installer from{" "}
            <a
              href="https://git-scm.com/download/win"
              target="_blank"
              rel="noopener noreferrer"
            >
              git-scm.com
            </a>{" "}
            and run it.
          </p>

          <h3>What is the difference between git add and git commit?</h3>
          <p>
            <code>git add</code> moves changes from your working directory to
            the staging area, preparing them for commit. <code>git commit</code>{" "}
            records these staged changes into your project’s history with a
            message.
          </p>

          <h3>Can I use Git without GitHub?</h3>
          <p>
            Absolutely! Git works entirely on your computer and doesn’t require
            GitHub or any remote repositories. You can later add GitHub for
            cloud collaboration and backup if desired.
          </p>

          <h3>How do I check the list of previous changes in my repository?</h3>
          <p>
            Use the command <code>git log</code> in your project directory. This
            displays a chronological history of commits made in your repository,
            including commit messages and authors.
          </p>

          <h3>What if I make a mistake can I undo a change in Git?</h3>
          <p>
            Yes! Git's powerful history tracking allows you to undo unstaged
            changes with <code>git checkout -- file</code> or undo the last
            commit with <code>git reset --soft HEAD~1</code>. Practice on test
            files to gain confidence!
          </p>

          <h3>People Also Ask: How do I set up Git for the first time?</h3>
          <p>
            1. Download and install Git for your operating system.
            <br />
            2. Configure your username and email using{" "}
            <code>git config --global</code>.<br />
            3. Create a project folder, initialize it with <code>git init</code>
            , and start tracking changes!
          </p>
        </section>

        <aside>
          <h2>More Topics You Should Explore</h2>
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
      id: 17,
      title: `Best Programming Language for AI and Machine Learning`,
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1747398547/pexels-markus-winkler-1430818-18512795_vozwoe.jpg",
      alt: "Best Programming Language for AI and Machine Learning",
      date: "May 16, 2025",
      articleRoute: "top-languages-for-ai-2025",
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
