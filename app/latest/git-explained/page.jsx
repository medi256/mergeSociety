import Link from "next/link";
import React from "react";
import Image from "next/image";
// import CommentSection from "@/app/commentSection";

export const metadata = {
  title: "Git For Beginners: Complete Step-by-Step Guide to Version Control",
  description:
    "Master Git version control from scratch. Learn installation (Windows/Mac), essential commands, repository setup, commits, and branches. Plain-English explanations for complete beginners.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "git for beginners",
    "git tutorial 2026",
    "how to use git",
    "version control basics",
    "git vs github",
    "git installation guide",
    "git commit commands",
    "git repository setup",
    "git branch tutorial",
    "learn git step by step",
    "git basics explained",
    "git configuration guide",
    "git commands beginners",
    "git init tutorial",
    "git add commit explained",
    "version control tutorial",
    "git installation windows mac",
    "git terminal commands",
    "git workflow beginners",
    "what is git simple explanation",
    "git for non-programmers",
    "first time git setup",
    "git repository creation",
    "understanding git basics",
    "modern git practices 2026",
  ],

  category: "Developer Tools & Version Control",

  openGraph: {
    title:
      "Git For Beginners: Master Version Control in 10 Minutes [2025 Guide]",
    description:
      "Stop losing track of file versions! Learn Git installation, configuration, essential commands, and workflows. Plain-English step-by-step tutorial for complete beginners.",
    url: "https://www.mergesociety.com/latest/git-explained",
    siteName: "Merge Society",
    images: [
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx_u3xr8t.jpg",
        width: 1200,
        height: 630,
        alt: "Git for Beginners Tutorial - Version Control Simplified with terminal commands and repository setup",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-05-17T09:00:00Z",
    modifiedTime: new Date().toISOString(),
    section: "Developer Tools",
    tags: [
      "Git Tutorial",
      "Version Control",
      "Git Commands",
      "Git Basics",
      "GitHub",
      "Developer Tools",
      "Code Management",
      "Git Repository",
      "Git Workflow",
      "Programming Fundamentals",
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
    title: "Git For Beginners: Complete Version Control Guide 2026",
    description:
      "Master Git in 10 minutes! Installation, commands, workflows explained in plain English. Perfect for coding beginners and bootcamp students.",
    creator: "@manager70191",
    images: [
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx_u3xr8t.jpg",
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
      "max-snippet": -1,
    },
  },

  other: {
    // Freshness signals
    "article:published_time": "2025-05-17T09:00:00Z",
    "article:modified_time": new Date().toISOString(),
    "og:updated_time": new Date().toISOString(),

    // Content metrics
    readingTime: "10 minutes",
    wordCount: "2500",
    contentType: "Step-by-Step Tutorial",
    difficulty: "Beginner",
    format: "Complete Practical Guide",

    publishDate: "May 17, 2025",
    category: "Developer Tools",
    subcategory: "Version Control",

    // Google Discover optimization
    featured: "true",
    series: "Developer Essentials",
    complexity: "Beginner",
    visualAid: "true",
    evergreen: "true",
    comprehensive: "true",

    // Trust and authority signals
    authorCredentials: "Senior Developer & Technical Educator",
    reviewStatus: "Technically Reviewed",
    factChecked: "true",
    originalContent: "true",
    practicalTesting: "true",
    beginnerFriendly: "true",

    // User engagement features
    stepByStepInstructions: "true",
    commandExamples: "true",
    installationGuides: "true",
    visualDiagrams: "true",
    troubleshootingSection: "true",
    copyPasteCommands: "true",

    // Topic structure
    primaryTopic: "Git Version Control for Complete Beginners",
    secondaryTopics:
      "Installation, Configuration, Basic Commands, Repository Management, Commit Workflow, Branch Basics",
    relatedConcepts:
      "Version Control Systems, File Tracking, Code Collaboration, GitHub, Repository Management, Terminal Commands",
    learningPath:
      "Installation → Configuration → Repository Setup → Basic Commands → Workflow Practice",

    // E-E-A-T optimization
    experienceLevel: "Professional developer insights translated for beginners",
    expertiseArea: "Version control systems and developer tooling education",
    trustworthySource: "Plain-English explanations with tested commands",
    authoritySignals:
      "Comprehensive coverage from installation to practical usage",

    // AI search optimization - ultra detailed
    aiSummary:
      "Complete beginner's guide to Git version control covering installation on Windows and macOS, initial configuration (user.name, user.email), understanding version control concepts, creating repositories with git init, staging files with git add, committing changes with git commit, checking status with git status, viewing history with git log, understanding Git vs GitHub difference, basic branching concepts, terminal command usage, and troubleshooting common beginner issues. Explains Git as distributed version control system that tracks file changes over time, enabling collaboration and providing safety net for code modifications. Emphasizes plain-English explanations, step-by-step instructions with copy-pastable commands, and practical examples for immediate application. Covers fundamental workflow: initialize repository, make changes, stage changes, commit with messages, repeat. Addresses common pain points like confusing terminology, setup difficulties, workflow uncertainty, and fear of mistakes.",

    keyTakeaways:
      "Git tracks file changes and versions over time; install from git-scm.com for Windows/Mac; configure with git config --global user.name and user.email; git init creates new repository; git add stages files for commit; git commit saves changes with message; git status shows current state; git log displays history; Git is version control, GitHub is hosting platform; branches allow parallel development; terminal commands are primary interface; version control prevents file loss; commits create restore points; staging area controls what gets committed; .git folder stores version history",

    targetAudience:
      "coding beginners, bootcamp students, self-taught developers, technical writers, project managers, computer science students, junior developers, designers working with code, documentation specialists, tech-adjacent professionals",

    problemSolved:
      "Understanding Git fundamentals, installing and configuring Git first time, learning essential commands, grasping version control concepts, overcoming Git terminology confusion, building confidence with version control",

    uniqueValue:
      "Plain-English explanations without jargon, platform-specific installation guides, copy-pastable commands, real-world workflow examples, beginner pain point addressing, immediate practical application",

    // Pain points addressed
    painPoints: [
      "Confusion about git terminology and concepts",
      "Difficulty setting up git for first time",
      "Trouble understanding git workflow",
      "Fear of making mistakes in repositories",
      "Overwhelm from complex documentation",
      "Uncertainty about when to use which commands",
      "Not understanding difference between Git and GitHub",
      "Terminal command intimidation",
    ],

    // Solutions provided
    solutionsProvided: [
      "Step-by-step installation for Windows and Mac",
      "Plain-English concept explanations",
      "Clear workflow progression",
      "Safe practice environment setup",
      "Beginner-focused command introduction",
      "Git vs GitHub clarification",
      "Copy-pastable terminal commands",
      "Visual workflow diagrams",
    ],

    // Key concepts explained
    conceptsCovered: [
      "What is version control",
      "Distributed vs centralized systems",
      "Repository structure",
      "Staging area purpose",
      "Commit history",
      "Working directory states",
      "Branch basics",
      "Git vs GitHub distinction",
      "Terminal command usage",
      "Configuration persistence",
    ],

    // Installation coverage
    installationPlatforms: ["Windows", "macOS", "Linux-compatible"],
    installationMethod: "git-scm.com official installer",
    configurationSteps: "user.name, user.email, default editor setup",

    // Command progression
    commandsCovered: {
      setup: "git config --global user.name/email",
      initialization: "git init",
      tracking: "git add, git status",
      versioning: "git commit -m",
      history: "git log",
      branching: "git branch, git checkout",
      help: "git --help",
    },

    // Workflow stages
    workflowStages: {
      stage1: "Install Git and verify installation",
      stage2: "Configure user identity globally",
      stage3: "Initialize or clone repository",
      stage4: "Make changes to files",
      stage5: "Stage changes with git add",
      stage6: "Commit changes with descriptive message",
      stage7: "Review history and status",
      stage8: "Repeat workflow for ongoing development",
    },

    // Learning framework
    prerequisites:
      "Basic computer literacy, comfort with file systems, willingness to use terminal/command line",

    learningOutcomes:
      "Install and configure Git, create repositories, understand version control concepts, use essential Git commands confidently, implement basic Git workflow, distinguish Git from GitHub, troubleshoot common issues, build foundation for advanced Git usage",

    skillLevel: "Complete beginner to functional basic usage",

    practicalApplication:
      "Personal projects, team collaboration, code backup, experimentation safety, professional development workflows",

    // Related content
    relatedArticles: [
      "GitHub for Beginners: The Ultimate Guide",
      "10 Git Commands Every Developer Should Know",
      "How to Recover from Common Git Mistakes",
      "Branching and Merging Strategies for Teams",
      "Git for Writers and Non-Technical Users",
    ],

    // Content upgrades
    contentUpgrades: [
      "Printable Git workflow diagram",
      "Git command cheat sheet",
      "Common Git errors and solutions guide",
      "Git terminology glossary for beginners",
      "Git vs GitHub comparison chart",
    ],

    // Voice search optimization
    voiceSearchQueries: [
      "how do I start using git",
      "what are the basic git commands",
      "how to install git on windows",
      "what's the difference between git and github",
      "explain how git version control works",
      "how do I create a git repository",
      "what is git used for",
      "how to configure git after installation",
    ],

    // Search intent keywords
    searchIntent: {
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
    },

    // User engagement strategy
    engagementStrategy:
      "Encourage sharing first Git experiences, answer common questions, provide supportive learning environment",

    conversionGoals:
      "advanced git course enrollments, newsletter subscriptions, cheat sheet downloads",

    // Best practices emphasized
    bestPractices: [
      "Always configure user.name and user.email first",
      "Write clear, descriptive commit messages",
      "Commit frequently with logical changes",
      "Check status before committing",
      "Use git log to review history",
      "Start with local repositories before GitHub",
      "Practice in test repository first",
      "Read terminal output carefully",
    ],

    // Common mistakes addressed
    commonMistakes: [
      "Skipping initial configuration",
      "Vague commit messages",
      "Committing too many changes at once",
      "Not checking status before committing",
      "Confusing Git with GitHub",
      "Fear of using terminal commands",
      "Not understanding staging area",
    ],
  },

  // Enhanced JSON-LD for rich results
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": "https://www.mergesociety.com/latest/git-explained",
      headline:
        "Git For Beginners: A Complete Step-by-Step Guide to Version Control",
      alternativeHeadline:
        "Learn Git from Scratch: Installation, Commands, and Workflow for Beginners",
      image: {
        "@type": "ImageObject",
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx_u3xr8t.jpg",
        width: 1200,
        height: 630,
        caption:
          "Git tutorial for beginners showing terminal commands and workflow",
      },
      datePublished: "2025-05-17T09:00:00Z",
      dateModified: new Date().toISOString(),
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
        url: "https://www.mergesociety.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mergesociety.com/MS.png",
          width: 300,
          height: 100,
        },
      },
      description:
        "Master Git version control with comprehensive beginner's guide covering installation, essential commands, and version tracking concepts. Plain-English explanations with practical examples.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mergesociety.com/latest/git-explained",
      },
      keywords:
        "git, version control, beginner tutorial, git commands, repository, commit, branch, git installation, git configuration",
      articleSection: "Developer Tools Tutorial",
      articleBody:
        "Complete beginner tutorial covering Git installation on Windows and macOS, initial configuration, repository creation, essential commands, commit workflow, and version control concepts",
      about: [
        {
          "@type": "Thing",
          name: "Git Version Control",
          description:
            "Distributed version control system for tracking code changes",
        },
        {
          "@type": "Thing",
          name: "Version Control Systems",
          description: "Software tools for managing file changes over time",
        },
        {
          "@type": "Thing",
          name: "Developer Tools",
          description: "Essential software for programming and collaboration",
        },
      ],
      mentions: [
        {
          "@type": "SoftwareApplication",
          name: "Git",
          applicationCategory: "Version Control System",
          operatingSystem: "Windows, macOS, Linux",
        },
        {
          "@type": "SoftwareApplication",
          name: "GitHub",
          applicationCategory: "Code Hosting Platform",
          description: "Web-based Git repository hosting service",
        },
      ],
      teaches: [
        "Understanding version control fundamentals",
        "Installing Git on Windows and macOS",
        "Configuring Git for first-time use",
        "Creating and initializing repositories",
        "Using essential Git commands (add, commit, status, log)",
        "Understanding the staging area concept",
        "Writing effective commit messages",
        "Distinguishing Git from GitHub",
        "Basic branching concepts",
        "Troubleshooting common Git issues",
      ],
      educationalLevel: "beginner",
      proficiencyLevel: "Complete beginner to basic functional usage",
      educationalUse: "instruction",
      timeRequired: "PT10M",
      wordCount: 2500,
      isAccessibleForFree: true,
      inLanguage: "en-US",
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType:
          "coding beginners, bootcamp students, self-taught developers, junior programmers",
      },
      learningResourceType: "Tutorial",
      interactivityType: "expositive",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Start Using Git: Complete Beginner's Workflow",
      description:
        "Step-by-step process for installing Git, configuring it, and using basic version control commands",
      step: [
        {
          "@type": "HowToStep",
          name: "Install Git",
          text: "Download Git from git-scm.com and run the installer for your operating system (Windows or macOS). Follow the installation wizard accepting default settings.",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Verify Installation",
          text: "Open terminal or command prompt and type 'git --version' to confirm Git is installed correctly and see which version you have.",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Configure User Identity",
          text: "Set your name with 'git config --global user.name \"Your Name\"' and email with 'git config --global user.email \"your@email.com\"'. This identifies your commits.",
          position: 3,
        },
        {
          "@type": "HowToStep",
          name: "Create or Navigate to Project Folder",
          text: "Use terminal to navigate to your project folder with 'cd path/to/project' or create a new folder with 'mkdir project-name' then navigate into it.",
          position: 4,
        },
        {
          "@type": "HowToStep",
          name: "Initialize Git Repository",
          text: "Run 'git init' in your project folder to initialize a new Git repository. This creates a hidden .git folder to track changes.",
          position: 5,
        },
        {
          "@type": "HowToStep",
          name: "Check Repository Status",
          text: "Use 'git status' to see which files are tracked, modified, or staged. This shows the current state of your working directory.",
          position: 6,
        },
        {
          "@type": "HowToStep",
          name: "Stage Files for Commit",
          text: "Add files to staging area with 'git add filename' for specific files or 'git add .' for all changes. Staging prepares files for commit.",
          position: 7,
        },
        {
          "@type": "HowToStep",
          name: "Commit Changes",
          text: "Save staged changes with 'git commit -m \"Descriptive message\"'. Write clear messages describing what changed and why.",
          position: 8,
        },
        {
          "@type": "HowToStep",
          name: "View Commit History",
          text: "Use 'git log' to see all commits with their messages, authors, dates, and unique identifiers. This shows your version history.",
          position: 9,
        },
        {
          "@type": "HowToStep",
          name: "Continue Development Cycle",
          text: "Repeat the workflow: make changes, check status, stage files, commit with messages. This creates a detailed history of your project's evolution.",
          position: 10,
        },
      ],
      totalTime: "PT10M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Terminal or Command Prompt",
        },
        {
          "@type": "HowToTool",
          name: "Git Software",
        },
        {
          "@type": "HowToTool",
          name: "Text Editor or IDE",
        },
      ],
      supply: [
        {
          "@type": "HowToSupply",
          name: "Computer with Windows, macOS, or Linux",
        },
        {
          "@type": "HowToSupply",
          name: "Internet connection for downloading Git",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Git and why do I need it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Git is a version control system that tracks changes to your files over time. You need it because it creates a complete history of your work, allows you to revert to previous versions if something breaks, enables collaboration with others without overwriting each other's work, and provides a safety net for experimenting with code. It's essential for professional development and team projects.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Git and GitHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Git is the version control software that runs on your computer and tracks file changes locally. GitHub is a web-based hosting service for Git repositories that stores your code online, enables collaboration, and provides additional features like pull requests and issue tracking. Think of Git as the tool and GitHub as one place to store and share your Git projects.",
          },
        },
        {
          "@type": "Question",
          name: "How do I install Git on my computer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Download Git from git-scm.com. On Windows, run the installer and follow the wizard accepting default settings. On macOS, you can use the installer, Homebrew (brew install git), or Xcode Command Line Tools. After installation, verify by opening terminal and typing 'git --version'. You should see the installed Git version number.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most important Git commands for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The essential commands are: 'git config' to set your identity, 'git init' to create a repository, 'git status' to check what's changed, 'git add' to stage files, 'git commit' to save changes with a message, and 'git log' to view history. Master these six commands first before moving to more advanced features like branching and remote repositories.",
          },
        },
        {
          "@type": "Question",
          name: "How do I configure Git after installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open terminal and run two commands: 'git config --global user.name \"Your Name\"' and 'git config --global user.email \"your@email.com\"'. Replace the placeholder text with your actual name and email. The --global flag applies these settings to all your Git repositories. You can verify your configuration with 'git config --list'.",
          },
        },
        {
          "@type": "Question",
          name: "What does git init do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "git init initializes a new Git repository in your current folder. It creates a hidden .git directory that stores all version control information, including commit history, branches, and configuration. After running git init, Git starts tracking changes in that folder. You only need to run this once per project.",
          },
        },
        {
          "@type": "Question",
          name: "What is the staging area in Git?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The staging area (also called the index) is where you prepare files before committing them. It's an intermediate step between your working directory and the Git repository. You use 'git add' to place files in staging, which lets you carefully choose which changes to include in each commit. This gives you precise control over your version history.",
          },
        },
        {
          "@type": "Question",
          name: "How do I write good commit messages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Write clear, concise messages that describe what changed and why. Start with a verb in present tense: 'Add user authentication', 'Fix navigation bug', 'Update README instructions'. Keep the first line under 50 characters. If you need more detail, add a blank line and then a longer description. Good messages help you and your team understand the project history.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Git without the command line?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, there are GUI applications like GitHub Desktop, Sourcetree, and GitKraken that provide visual interfaces for Git. However, learning the command line first is recommended because: (1) it works everywhere, (2) all documentation uses terminal commands, (3) it gives you complete control, and (4) GUI tools are easier to understand once you know the underlying commands.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I make a mistake in Git?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Don't panic - Git is designed to be safe. For uncommitted changes, use 'git checkout -- filename' to discard changes. To amend the last commit message, use 'git commit --amend'. To undo a commit but keep changes, use 'git reset HEAD~1'. Always check 'git status' first to understand your repository state. As a beginner, it's safe to practice in test repositories first.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mergesociety.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Latest",
          item: "https://www.mergesociety.com/latest",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Git For Beginners",
          item: "https://www.mergesociety.com/latest/git-explained",
        },
      ],
    },
  ],
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>

      <article className="lesson-container">
        <h1>
          Getting Started With Git and Version Control: A Friendly Walkthrough
          For Absolute Beginners
        </h1>
        <p>
          <strong>
            Git is a version control system that tracks changes to your files
            over time so you can review history, roll back safely, and
            collaborate without losing work. You install it on your computer,
            set your name and email, then follow a simple flow: edit in the
            working directory, stage what you want to keep, and commit with a
            clear message. Branches let you try ideas without touching main,
            pull requests open a space for review, and merging brings the work
            together. You can use Git solo for things like your resume or with a
            team syncing through a remote repository like GitHub.
          </strong>
        </p>

        <section>
          <Image
            src={
              "/mergesociety/roman-synkevych-wX2L8L-fGeA-unsplash_wglmjx_u3xr8t.jpg"
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
        </section>

        <section>
          <p>
            Hi, I'm Kanesha, and if you don't know the first thing about Git,
            version control, or the basic concepts you need to be successful
            with Git, this is for you.
          </p>
          <p>
            Today I'm going to teach you everything you need to get started with
            Git, from installation to your first commit, so you can feel
            confident using it on your own machine.
          </p>
          <p>
            If you're an absolute beginner, this will help you install,
            configure, and understand Git and version control without getting
            lost in jargon or steps that assume you already know a lot.
          </p>
          <p>
            And if you're new to the GitHub channel, go ahead and subscribe so
            you don't miss future uploads where we build on this foundation
            together.
          </p>
        </section>

        <section>
          <h2>What Is Git and Why You Need It In Real Life</h2>
          <p>
            Git is the most widely used version control system in the world, and
            that is not just a fun fact - it is the reason developers and teams
            can move fast without constantly breaking things.
          </p>
          <p>
            Version control is simply a system that tracks changes to files over
            a period of time, which means it gives you a timeline of edits and
            the power to rewind or compare any point in that timeline.
          </p>
          <p>To make that concrete, think about your resume for a second.</p>
          <p>
            Most of us have some version of this on our laptops: resume.docx,
            resume_v2.docx, resume_v3.docx, and then resume_FINAL.docx that is
            never actually final.
          </p>

          <p>
            Picture opening your Documents folder and seeing those four separate
            files - each a snapshot from a different stage of your career.
          </p>
          <p>
            You know one has your old address, one has an updated skills
            section, and one includes that new internship you want to highlight.
          </p>
          <p>
            But unless you open each one and scan line by line, you do not know
            which is which, and you definitely do not have an easy way to see
            the exact differences between them.
          </p>
          <p>
            That is where version control steps in and makes your life easier
            with one main file and a complete, searchable history.
          </p>

          <p>
            With Git tracking your resume, you keep a single file - literally
            one - and let Git record the changes when you save them as commits.
          </p>
          <p>
            You get a full history where you can see who changed what, when it
            changed, and why it changed based on the commit message you wrote at
            the time.
          </p>
          <p>
            You can jump back to a previous version without digging through
            copies, and you can compare versions side by side to see exactly
            what changed.
          </p>
          <p>
            That same power scales from a single resume to a large app with
            dozens of people contributing at the same time without stepping on
            each other's toes.
          </p>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> Even if you are working solo, start
              every new project in a Git repository. It gives you a history. It
              gives you safety. And it gives you the confidence to try things
              because you can always rewind.
            </p>
          </aside>
        </section>

        <section>
          <h2>Core Git Concepts You Must Know Before You Start</h2>
          <p>
            Before we type any commands, you need a mental model of how Git
            organizes your work.
          </p>
          <p>
            Imagine three boxes in a row: the working directory, the staging
            area, and the repository.
          </p>
          <p>
            Changes flow from left to right - edit in working, stage what you
            want, commit into history.
          </p>
          <p>
            On top of that, you have branches for parallel work, remotes for
            collaboration, pull requests for discussion, and merging to bring it
            all together.
          </p>

          <h3>Working Directory</h3>
          <p>
            The working directory is your everyday workspace where you actually
            make changes to files.
          </p>
          <p>
            It holds the current state of your project - maybe a new paragraph
            in a README, a line of code you just wrote, or a file you deleted
            but have not saved to history yet.
          </p>
          <p>
            Git is watching the working directory for changes, but it does not
            record those changes until you stage and commit them.
          </p>
          <p>
            Think of it like your desk - lots of ideas, sticky notes, sketches,
            and drafts live here until you decide what is worth filing.
          </p>

          <h3>Staging Area (Index)</h3>
          <p>
            The staging area, also called the index, is where you prepare
            changes for the next commit.
          </p>
          <p>
            It is a draft space where you review exactly which changes will be
            saved into history together.
          </p>
          <p>
            Maybe you edited three files but only want to commit one of them for
            now - staging lets you choose that one file and hold off on the
            others.
          </p>
          <p>
            This control is huge for clean history and clear commit messages
            that actually mean something when you read them later.
          </p>

          <h3>Local Repository</h3>
          <p>
            Your local repository is the project history stored on your
            computer.
          </p>
          <p>
            It includes all your commits, your branches, and the timeline of how
            the project evolved.
          </p>
          <p>
            Even if you are not connected to the internet, you can commit freely
            and move between branches because that history is right there on
            your machine.
          </p>
          <p>
            It is your personal record of the project, and it travels with the
            folder wherever it goes.
          </p>

          <h3>Remote Repository</h3>
          <p>
            A remote repository is a version of your project hosted on the
            internet or your internal network.
          </p>
          <p>
            GitHub is a popular place to host remotes because it adds
            collaboration on top of Git - comments, pull requests, discussions,
            and permissions.
          </p>
          <p>
            When you push, you send your commits to the remote so others can see
            them.
          </p>
          <p>
            When you pull, you bring down commits from the remote that other
            people have added.
          </p>

          <h3>Branches</h3>
          <p>
            Branches are parallel versions of your project that share history
            until they diverge for new work.
          </p>
          <p>
            You might create a feature branch to try an idea, fix a bug, or
            write a draft, all without touching the main branch that others
            depend on.
          </p>
          <p>
            Branches make experimentation safe because your work is isolated
            until you decide it is ready.
          </p>
          <p>
            When it is, you can merge it back into the main line of development.
          </p>

          <h3>Pull Requests</h3>
          <p>
            A pull request is a way to propose changes from one branch to
            another, usually on a platform like GitHub.
          </p>
          <p>
            It opens a space to review, ask questions, attach screenshots, and
            make improvements before anything merges.
          </p>
          <p>
            On teams, pull requests are where collaboration really happens - it
            is code plus conversation and context.
          </p>
          <p>
            Even solo developers use pull requests to keep a record of decisions
            and to document why a change was made.
          </p>

          <h3>Merging</h3>
          <p>
            Merging integrates changes from one branch into another and combines
            the histories.
          </p>
          <p>
            After review, merging creates a single unified timeline where your
            feature or fix becomes part of the main project.
          </p>
          <p>
            When there are overlapping edits to the same lines, Git asks you to
            resolve conflicts so both histories make sense together.
          </p>
          <p>
            Once merged, the project moves forward with the best of both
            branches.
          </p>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> Keep your commits focused. Stage and
              commit logical chunks of work with clear messages. Future you - or
              your teammates - will thank you when you are scanning history
              later.
            </p>
          </aside>
        </section>

        <section>
          <h2>Install Git On Your Machine The Easy Way</h2>
          <p>
            To use Git, you need it installed on your computer. macOS ships with
            an older version, and Windows needs a fresh install.
          </p>
          <p>
            Either way, you want the latest version so commands behave
            consistently and you have the newest features.
          </p>
          <p>
            Below are the exact steps for macOS and Windows so you can follow
            along without guessing.
          </p>

          <h3>macOS: Install With Homebrew</h3>
          <p>
            I am using a MacBook here. Even though macOS includes a system Git,
            we will install the latest version with Homebrew.
          </p>
          <p>
            Homebrew is a package manager that makes installing developer tools
            straightforward.
          </p>
          <p>
            Open your browser to the Homebrew website and copy the install
            command from the homepage.
          </p>
          <p>
            Then open the Terminal app and paste the command. Press Enter and
            let it run - it can take a few minutes.
          </p>

          <pre>
            <code>
              /bin/bash -c "$(curl -fsSL
              https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            </code>
          </pre>

          <p>
            When Homebrew finishes, return to the Git download page or simply
            install Git with this command:
          </p>
          <pre>
            <code>brew install git</code>
          </pre>
          <p>
            When the installer completes, verify Git is available by running:
          </p>
          <pre>
            <code>git --version</code>
          </pre>
          <p>You should also see a list of commands when you run:</p>
          <pre>
            <code>git</code>
          </pre>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> If your terminal says command not found
              for brew, close and reopen the terminal or follow the on-screen
              setup note that tells you to add Homebrew to your shell path.
            </p>
          </aside>

          <h3>Windows: Install With the Git for Windows Installer</h3>
          <p>
            On Windows, head to the Git downloads page and click the Windows
            icon.
          </p>
          <p>
            Click the link that says Click here to download - that gets you the
            most recent Git for Windows installer.
          </p>
          <p>
            When the file finishes downloading, double-click it and follow the
            setup wizard prompts you see on screen.
          </p>

          <ul>
            <li>Click Next to accept the license terms.</li>
            <li>Click Next to accept the default install location.</li>
            <li>Click Next to keep the default components checked.</li>
            <li>
              Set the default branch name to main - this is the new convention.
            </li>
            <li>Click Next to accept the recommended PATH integration.</li>
            <li>Click Next to use the bundled OpenSSH program.</li>
            <li>
              Click Next through the remaining defaults and then click Install.
            </li>
          </ul>

          <p>
            When the installer finishes, click Finish and open Command Prompt,
            PowerShell, or Git Bash.
          </p>
          <p>Verify your install by running:</p>
          <pre>
            <code>git --version</code>
          </pre>
          <p>Then run:</p>
          <pre>
            <code>git</code>
          </pre>
          <p>
            You should see a list of available commands. If you do, you are
            ready for configuration.
          </p>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> If Git commands are not recognized after
              install, reopen your terminal or restart your computer so the PATH
              changes take effect.
            </p>
          </aside>
        </section>

        <section>
          <h2>Configure Git So Your Commits Get Proper Credit</h2>
          <p>
            With Git installed, the very first configuration you should set is
            your name and email.
          </p>
          <p>
            Git stores this information with each commit so your work is
            attributed correctly in the history and on platforms like GitHub.
          </p>
          <p>
            Open your terminal and run these commands, replacing the example
            name and email with your own.
          </p>

          <pre>
            <code>git config --global user.name "Your Name"</code>
          </pre>
          <pre>
            <code>git config --global user.email "you@example.com"</code>
          </pre>

          <p>To see all current settings, you can print your config:</p>
          <pre>
            <code>git config --list</code>
          </pre>
          <p>That will open a pager view if there is a lot of output.</p>
          <p>
            Press the Q key on your keyboard to exit the screen and return to
            the prompt.
          </p>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> The --global flag saves these settings
              for your user account across all repos on your machine. If you
              need different details for a specific project, run the same
              commands without --global inside that repo.
            </p>
          </aside>
        </section>

        <section>
          <h2>Your First Git Workflow: From New Folder To First Commit</h2>
          <p>
            Now that Git knows who you are, let us create a tiny practice
            project and walk through the core commands you will use all the
            time.
          </p>
          <p>
            I want you to actually type these with me - seeing the output is how
            it clicks.
          </p>
          <p>
            We will make a folder, create a couple of files, initialize Git, add
            files, and commit our work with a message.
          </p>
          <p>
            Along the way, we will keep using git status to see exactly what
            changed.
          </p>

          <h3>Create a New Folder and Open It</h3>
          <p>Open your terminal and create a new folder named git-practice.</p>
          <pre>
            <code>mkdir git-practice</code>
          </pre>
          <p>Move into the folder you just created:</p>
          <pre>
            <code>cd git-practice</code>
          </pre>
          <p>
            Open the folder in your code editor of choice so you can see files
            as we add them.
          </p>

          <h3>Create Your First File</h3>
          <p>Create a new Markdown file called hello.md:</p>
          <pre>
            <code>touch hello.md</code>
          </pre>
          <p>
            Flip to your editor and you should see hello.md appear in the file
            explorer.
          </p>
          <p>
            It will be empty for now, which is fine - we will add content in a
            moment.
          </p>

          <h3>Check Status Before Initializing Git</h3>
          <p>Back in your terminal, try:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            If Git is not initialized yet, you will see an error that there is
            no Git repository here.
          </p>
          <p>
            That is your hint to run the very first command you use in any new
            project.
          </p>

          <h3>Initialize a New Git Repository</h3>
          <p>
            Initialize Git in this folder so it can start tracking your work:
          </p>
          <pre>
            <code>git init</code>
          </pre>
          <p>Now check the status again:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            You will see your branch name (often main) and a section showing
            untracked files - hello.md is listed because Git sees it but is not
            tracking it yet.
          </p>
          <p>
            Depending on your terminal theme, untracked files usually appear in
            red to signal they are not staged.
          </p>

          <h3>Stage Changes To The Index</h3>
          <p>Add everything in the working directory to the staging area:</p>
          <pre>
            <code>git add .</code>
          </pre>
          <p>Run status again:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Now hello.md should be listed as changes to be committed which means
            it is staged.
          </p>
          <p>
            In many themes, staged files appear in green to indicate they are
            ready to commit.
          </p>

          <h3>Edit a File, See the Difference</h3>
          <p>Open hello.md in your editor and type this line:</p>
          <pre>
            <code>I am learning to use Git!</code>
          </pre>
          <p>
            Save the file, then switch back to your terminal and check status
            again:
          </p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            You will see that hello.md has been modified in the working
            directory since you staged it earlier.
          </p>
          <p>Stage that change too:</p>
          <pre>
            <code>git add hello.md</code>
          </pre>

          <h3>Create a Second File To See Staged vs Unstaged</h3>
          <p>Create a new JavaScript file:</p>
          <pre>
            <code>touch new-file.js</code>
          </pre>
          <p>Run status again to see the contrast:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            You should see one file staged (hello.md) and one file unstaged
            (new-file.js).
          </p>
          <p>
            The different colors and sections on the screen make it very clear
            what will go into your next commit.
          </p>

          <h3>Commit Your Work With a Clear Message</h3>
          <p>
            Save your staged changes to the repository history with a message:
          </p>
          <pre>
            <code>git commit -m "Initial commit"</code>
          </pre>
          <p>
            That command stores a snapshot of the staged files along with your
            message explaining what changed.
          </p>
          <p>
            You will use this trio constantly: status to see what changed, add
            to stage, commit to save.
          </p>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> Get in the habit of running{" "}
              <code>git status</code> every few minutes. It is like a dashboard
              for your repo - it shows you exactly what is happening so there
              are no surprises when you commit.
            </p>
          </aside>

          <h3>Where To Find Commands and Help</h3>
          <p>If you ever forget a command or want to see more options, run:</p>
          <pre>
            <code>git</code>
          </pre>
          <p>That prints a list of common commands with short descriptions.</p>
          <p>
            You can also check the Git documentation website for a full list and
            examples whenever you want more detail.
          </p>
        </section>

        <section>
          <h2>
            Are Git and GitHub the Same? Quick Answer and Real Differences
          </h2>
          <p>
            This is one of the most common questions I get, and it is worth
            answering clearly so you know what tool you are using and why.
          </p>
          <p>They are related, but they are not the same thing.</p>
          <p>
            And knowing the difference actually makes you more confident when
            you move from your laptop to collaborating online.
          </p>

          <p>
            Git is the version control system - the engine that tracks your file
            changes, commits, branches, and merges locally on your machine.
          </p>
          <p>
            It works offline, it stores your history, and it gives you all the
            commands we have been running so far.
          </p>
          <p>
            GitHub is a platform that hosts Git repositories in the cloud so you
            can collaborate, back up your work, and use tools like pull requests
            and code review.
          </p>
          <p>
            They are designed to work together: Git runs on your computer, and
            GitHub is where you sync and collaborate with others.
          </p>

          <ul>
            <li>
              Use Git when you want to track your own changes, make commits, and
              manage branches locally.
            </li>
            <li>
              Use GitHub when you want to share your repo, invite teammates,
              open pull requests, and store your code safely in the cloud.
            </li>
            <li>
              Push and pull connect the two - push sends your local commits to
              GitHub, pull brings down updates from GitHub to your machine.
            </li>
          </ul>

          <aside aria-label="Pro Tip">
            {/* Highlight: Pro Tip callout */}
            <p>
              <strong>Pro Tip:</strong> Even if you are working alone, create a
              private repo on GitHub for your projects. You get off-site backup,
              an easy way to move between computers, and a clean place to
              practice pull requests on your own branches.
            </p>
          </aside>
        </section>

        <section>
          <h2>When To Use Which Command: A Beginner's Mental Checklist</h2>
          <p>
            As you practice, your brain will build a rhythm for Git, but a quick
            mental checklist helps a lot at the start.
          </p>
          <p>
            Think of it as a small loop you repeat while you work so your
            history stays clean and you never lose changes.
          </p>

          <h3>Your Everyday Loop</h3>
          <ul>
            <li>Edit files in the working directory.</li>
            <li>
              Run <code>git status</code> to see what changed.
            </li>
            <li>
              Stage what belongs together with <code>git add &lt;file&gt;</code>{" "}
              or <code>git add .</code>.
            </li>
            <li>
              Commit with a clear message using{" "}
              <code>git commit -m "message"</code>.
            </li>
            <li>Repeat as you make progress.</li>
          </ul>

          <h3>When You Want To Experiment</h3>
          <ul>
            <li>
              Create a branch with <code>git switch -c feature-name</code> or{" "}
              <code>git checkout -b feature-name</code>.
            </li>
            <li>Do your work and commit in small chunks.</li>
            <li>
              Open a pull request on GitHub when you are ready for review.
            </li>
            <li>
              Merge the branch back into main when it is approved and tested.
            </li>
          </ul>

          <p>
            Notice how everything builds on the basics you learned above -
            status, add, commit, and then branching when you need a separate
            lane.
          </p>
          <p>Keep it simple at first and you will pick up speed fast.</p>
        </section>

        <section>
          <h2>Common Visual Cues You Will See In Your Terminal</h2>
          <p>
            Since you cannot see my terminal right now, let me paint a quick
            picture so you can recognize what each state looks like on your
            screen.
          </p>
          <p>
            Different terminals and themes vary a bit, but the patterns are
            similar everywhere.
          </p>

          <ul>
            <li>
              Untracked files usually appear in red under a section labeled
              Untracked files. Git sees them but is not tracking them yet.
            </li>
            <li>
              Changes to be committed is the section for staged files, often
              shown in green, which will be included in your next commit.
            </li>
            <li>
              Changes not staged for commit lists files you have modified but
              not staged yet - this is your cue to run <code>git add</code>.
            </li>
            <li>
              The branch line near the top shows which branch you are on - main
              at the start, or a feature branch when you create one.
            </li>
          </ul>

          <p>
            Over time, just glancing at <code>git status</code> tells you the
            full story of where your work stands right now.
          </p>
          <p>
            That quick feedback loop is what makes Git feel like a trusted
            helper instead of a hurdle.
          </p>
        </section>

        <section>
          <h2>
            Wrap Up: You Installed Git, You Configured It, You Committed - You
            Are On Your Way
          </h2>
          <p>
            Let us zoom out for a second and look at what you just accomplished.
          </p>
          <p>
            You learned what Git and version control are with a real-world
            example, not theory you will forget in five minutes.
          </p>
          <p>
            You installed Git on macOS or Windows, configured your name and
            email, and ran the core commands that you will use every single day.
          </p>
          <p>
            You created a folder, initialized a repo, staged changes with
            intention, and wrote your first commit message like a pro.
          </p>

          <p>
            From here, the next steps flow naturally: create a GitHub account if
            you do not have one, make a new repo, and practice pushing your
            local commits to the cloud.
          </p>
          <p>
            Open a pull request from a feature branch into main to see that
            review workflow in action, even if it is just you leaving notes for
            future you.
          </p>
          <p>
            And keep that simple loop close: edit, status, add, commit. It is
            the heartbeat of every Git project, big or small.
          </p>
          <p>
            Thanks for learning with me. If this helped, like and subscribe on
            the GitHub channel so you do not miss future videos where we build
            on this foundation. Happy coding.
          </p>
        </section>

        <section aria-label="Entities and Scope">
          <p>
            <strong>Entities covered:</strong> Git, Version Control, GitHub,
            Homebrew, macOS, Windows, OpenSSH, Terminal, Command Prompt, Git
            Bash.
          </p>
          <p>
            <strong>Who this helps:</strong> Beginners setting up Git for the
            first time - students, new developers, career switchers, and anyone
            who wants a safe way to track files.
          </p>
          <p>
            <strong>Why it matters:</strong> Version control protects your work,
            speeds up collaboration, and gives you a clean history to learn from
            and share.
          </p>
          <p>
            <strong>Where it applies:</strong> Globally - the same commands and
            concepts work no matter where you are or what project you are
            building.
          </p>
        </section>
        <aside>
          <h2>More Topics You Should Explore</h2>
          <ul>
            <li>
              <Link href="/latest/aws-explained">What is AWS</Link>
            </li>
            <li>
              <Link href="/latest/friendship-that-saved-google">
                The Unsung Friendship That Saved Google—and Invented the Modern
                Internet
              </Link>
            </li>
            <li>
              <Link href="/latest/learn-to-code">
                Why America Became Obsessed with "Learn to Code"
              </Link>
            </li>
            <li>
              <Link href="/latest/binary-explained">What is Binary Code</Link>
            </li>
            <li>
              <Link href="/latest/computer-science-basics">
                Computer Science Basics
              </Link>
            </li>
            <li>
              <Link href="/latest/rust-programming-language">
                Rust Programming Language
              </Link>
            </li>
          </ul>
        </aside>
      </article>
    </div>
  );
}
