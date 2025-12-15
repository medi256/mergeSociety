import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Essential Git Commands for Beginners - Complete GitHub Workflow Guide",
  description:
    "Master the most used Git commands: git config, init, add, commit, push, pull, clone, branch. Learn GitHub Flow step-by-step with real examples and VS Code integration.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "git commands for beginners",
    "most used git commands",
    "git tutorial 2026",
    "github workflow guide",
    "git add commit push",
    "git clone repository",
    "git branch commands",
    "git config setup",
    "learn git basics",
    "git pull request tutorial",
    "git status explained",
    "git staging area",
    "git switch branch",
    "github flow explained",
    "git for developers",
    "version control basics",
    "git commit messages",
    "git push origin",
    "git pull vs fetch",
    "git show command",
    "git branch delete",
    "vscode git integration",
    "git collaboration workflow",
    "everyday git commands",
    "git best practices 2026",
  ],

  category: "Version Control & Developer Tools",

  openGraph: {
    title:
      "Essential Git Commands Every Developer Uses Daily - GitHub Workflow Guide",
    description:
      "Complete Git guide from setup to collaboration. Learn config, staging, commits, branches, push/pull, and the GitHub Flow with practical VS Code examples.",
    url: "https://www.mergesociety.com/latest/most-used-git-commands",
    siteName: "Merge Society",
    images: [
      {
        url: "https://img.mergesociety.com/mergesociety/most%20used%20git%20commands.webp",
        width: 600,
        height: 400,
        alt: "Most Used Git Commands for Beginners - GitHub workflow from init to pull request",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-12-08T00:00:00Z",
    modifiedTime: new Date().toISOString(),
    section: "Developer Tools",
    tags: [
      "Git Commands",
      "GitHub",
      "Version Control",
      "Git Tutorial",
      "Developer Workflow",
      "Git Basics",
      "Branch Management",
      "Collaboration Tools",
      "VS Code",
      "Software Development",
    ],
  },

  authors: [
    {
      name: "Massa Medi",
      url: "https://www.instagram.com/mergesociety_/",
    },
  ],

  creator: "Merge Society",
  publisher: "Merge Society",

  alternates: {
    canonical: "https://www.mergesociety.com/latest/most-used-git-commands",
  },

  twitter: {
    card: "summary_large_image",
    title: "Master Git Commands - Complete Beginner to GitHub Flow",
    description:
      "Learn the git commands you'll actually use every day. From git config to pull requests, with real VS Code examples and best practices.",
    creator: "@manager70191",
    images: [
      "https://img.mergesociety.com/mergesociety/most%20used%20git%20commands.webp",
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
    "article:published_time": "2025-12-08T00:00:00Z",
    "article:modified_time": new Date().toISOString(),
    "og:updated_time": new Date().toISOString(),

    // Content metrics
    readingTime: "16 minutes",
    wordCount: "4200",
    contentType: "Step-by-Step Tutorial",
    difficulty: "Beginner to Intermediate",
    format: "Hands-On Walkthrough",

    // Google Discover optimization
    featured: "true",
    evergreen: "true",
    practical: "true",
    actionable: "true",
    comprehensive: "true",

    // Trust and authority signals
    authorCredentials: "Developer & Git Workflow Educator",
    reviewStatus: "Tested Commands and Workflows",
    factChecked: "true",
    originalContent: "true",
    practicalTesting: "true",
    realWorldExamples: "true",

    // User engagement features
    interactiveElements: "true",
    codeExamples: "true",
    commandExamples: "true",
    visualWorkflow: "true",
    proTips: "true",
    stepByStep: "true",

    // Topic structure
    primaryTopic: "Git Command Fundamentals and GitHub Workflow",
    secondaryTopics:
      "Version Control, Branch Management, Pull Requests, Git Configuration, Team Collaboration",
    relatedConcepts:
      "GitHub Flow, Staging Area, Remote Repositories, Merge Conflicts, Code Review",
    learningPath:
      "Git Setup → Local Commands → Branching → Collaboration → GitHub Flow",

    // E-E-A-T optimization
    experienceLevel: "Real-world workflow demonstrated with actual commands",
    expertiseArea: "Version control and collaborative development workflows",
    trustworthySource: "Practical tutorial with tested command sequences",
    authoritySignals:
      "Complete workflow coverage from beginner to collaboration",

    // AI search optimization - comprehensive summary
    aiSummary:
      "Complete Git tutorial covering essential daily commands in workflow order. Starts with git config for identity setup and aliases, then git init to start tracking, git status to monitor changes, git add for staging files, and git commit to save versions. Covers collaboration with git clone for remote repos, git checkout -b and git switch for branch management, git push to upload changes, pull requests for code review, git pull to sync updates, and git show to inspect commits. Includes GitHub Flow explanation, VS Code integration, branch cleanup, and best practices for commit messages. Real examples walk through creating projects, staging selective files, branching for features, opening PRs, and maintaining clean repositories.",

    keyTakeaways:
      "git config sets identity; git init starts tracking; git status shows changes; git add stages files; git commit saves versions; git clone copies repos; branches protect main; git switch changes branches; git push uploads to GitHub; pull requests enable review; git pull syncs local; git show inspects commits; delete merged branches; use clear commit messages; follow GitHub Flow for collaboration",

    targetAudience:
      "git beginners, new developers, coding bootcamp students, junior developers, self-taught programmers, team collaboration learners",

    problemSolved:
      "Understanding which git commands to use when, building confidence with version control, mastering GitHub collaboration workflow",

    uniqueValue:
      "Real-world command sequence in order of daily use, VS Code integration, GitHub Flow walkthrough, practical examples with explanations",

    // Command reference structure
    commandCategories: [
      "Setup Commands (config)",
      "Local Repository Commands (init, status, add, commit)",
      "Remote Commands (clone, push, pull)",
      "Branch Commands (checkout, switch, branch)",
      "Inspection Commands (status, show)",
      "Collaboration Workflow (GitHub Flow)",
    ],

    // Workflow stages covered
    workflowStages: {
      setup: "git config for identity and aliases",
      initialization: "git init for new projects",
      tracking: "git status and staging area concepts",
      versioning: "git add and git commit workflow",
      collaboration: "git clone, branches, push, pull requests",
      synchronization: "git pull and git show for staying current",
      maintenance: "branch cleanup and repository hygiene",
    },

    // Learning framework
    prerequisites:
      "Git installed on your machine, basic terminal/command line familiarity",

    learningOutcomes:
      "Configure Git identity, initialize repositories, stage and commit changes, create and switch branches, collaborate via GitHub, open pull requests, sync with remote repositories, maintain clean git history",

    skillLevel: "Beginner friendly with progression to team workflows",

    practicalApplication:
      "Daily development workflow, team collaboration, open source contribution",

    // Tool integration
    toolsIntegrated: ["VS Code", "GitHub", "Terminal/Command Line"],

    vscodeFeatures: "Live preview, file editing, git integration demonstrated",

    // Best practices emphasized
    bestPractices: [
      "Set git config before first commit",
      "Use branches instead of committing to main",
      "Write clear commit messages",
      "Stage changes thoughtfully with git add",
      "Pull before starting new work",
      "Delete branches after merging",
      "Use aliases to speed up workflow",
    ],

    // Common pitfalls addressed
    commonMistakes: [
      "Forgetting to stage changes after editing",
      "Working directly on main branch",
      "Not pulling latest changes before starting",
      "Leaving merged branches cluttering repo",
      "Unclear commit messages",
    ],

    // Comparison value
    comparedConcepts:
      "git add vs git commit, git checkout vs git switch, git pull vs git fetch, local vs remote branches, staging vs committing",
  },

  // Rich structured data for maximum search visibility
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": "https://www.mergesociety.com/latest/most-used-git-commands",
      headline:
        "Essential Git Commands for Beginners - Complete GitHub Workflow Guide",
      alternativeHeadline:
        "Master Git: From Config to Pull Requests with Real Examples",
      image: {
        "@type": "ImageObject",
        url: "https://img.mergesociety.com/mergesociety/most%20used%20git%20commands.webp",
        width: 600,
        height: 400,
        caption: "Most used git commands workflow diagram",
      },
      datePublished: "2025-12-08T00:00:00Z",
      dateModified: new Date().toISOString(),
      author: {
        "@type": "Person",
        name: "Massa Medi",
        url: "https://www.instagram.com/mergesociety_/",
        jobTitle: "Developer Educator",
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
        "Complete hands-on guide to essential git commands used daily by developers. Covers setup, local workflow, branching, collaboration, and GitHub Flow with real command examples.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.mergesociety.com/latest/most-used-git-commands",
      },
      keywords:
        "git commands, github workflow, version control, git tutorial, git for beginners, github flow, git branch, git commit",
      articleSection: "Developer Tools",
      articleBody:
        "Step-by-step tutorial covering git configuration, repository initialization, staging area, commits, branching, remote collaboration, pull requests, and synchronization",
      about: [
        {
          "@type": "Thing",
          name: "Git Version Control",
          description:
            "Distributed version control system for tracking code changes",
        },
        {
          "@type": "Thing",
          name: "GitHub Workflow",
          description:
            "Collaborative development workflow using Git and GitHub",
        },
      ],
      mentions: [
        {
          "@type": "SoftwareApplication",
          name: "Git",
          applicationCategory: "Version Control System",
        },
        {
          "@type": "SoftwareApplication",
          name: "GitHub",
          applicationCategory: "Code Hosting Platform",
        },
        {
          "@type": "SoftwareApplication",
          name: "VS Code",
          applicationCategory: "Code Editor",
        },
      ],
      teaches: [
        "Setting up git configuration with user identity",
        "Initializing git repositories",
        "Understanding the staging area concept",
        "Making meaningful commits with clear messages",
        "Cloning remote repositories",
        "Creating and managing branches",
        "Pushing changes to remote repositories",
        "Opening and merging pull requests",
        "Synchronizing local and remote repositories",
        "Following GitHub Flow for team collaboration",
      ],
      educationalLevel: "beginner to intermediate",
      proficiencyLevel: "Basic terminal knowledge helpful",
      timeRequired: "PT16M",
      wordCount: 4200,
      isAccessibleForFree: true,
      inLanguage: "en-US",
      audience: {
        "@type": "Audience",
        audienceType:
          "developers, programmers, coding students, software engineers",
      },
      learningResourceType: "Tutorial",
      interactivityType: "expositive",
      educationalUse: "Learning git version control and GitHub collaboration",
      typicalAgeRange: "16-99",
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Use Git Commands for Daily Development Workflow",
      description:
        "Complete workflow from setup to collaboration using essential git commands",
      step: [
        {
          "@type": "HowToStep",
          name: "Configure Git Identity",
          text: "Set your username and email with git config --global user.name and git config --global user.email so commits are attributed to you",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Initialize Repository",
          text: "Create a project folder and run git init to start tracking changes in that directory",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Check Status and Stage Files",
          text: "Use git status to see changes, then git add to stage specific files or git add . for all files",
          position: 3,
        },
        {
          "@type": "HowToStep",
          name: "Commit Your Changes",
          text: "Save staged changes with git commit -m 'clear message' describing what changed and why",
          position: 4,
        },
        {
          "@type": "HowToStep",
          name: "Clone Remote Repository",
          text: "Copy a GitHub repository to your machine with git clone followed by the repository URL",
          position: 5,
        },
        {
          "@type": "HowToStep",
          name: "Create Feature Branch",
          text: "Use git checkout -b branch-name or git switch -c branch-name to create and switch to a new branch for your work",
          position: 6,
        },
        {
          "@type": "HowToStep",
          name: "Push Changes to GitHub",
          text: "Upload your branch commits with git push origin branch-name to make them available on GitHub",
          position: 7,
        },
        {
          "@type": "HowToStep",
          name: "Open Pull Request",
          text: "Create a PR on GitHub to propose merging your branch into main, enabling code review",
          position: 8,
        },
        {
          "@type": "HowToStep",
          name: "Sync Local Repository",
          text: "After merging, switch to main and run git pull to download the latest changes to your local copy",
          position: 9,
        },
        {
          "@type": "HowToStep",
          name: "Clean Up Branches",
          text: "Delete merged branches locally with git branch -d and remotely with git push --delete origin branch-name",
          position: 10,
        },
      ],
      totalTime: "PT16M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Git",
        },
        {
          "@type": "HowToTool",
          name: "Terminal or Command Line",
        },
        {
          "@type": "HowToTool",
          name: "GitHub Account",
        },
        {
          "@type": "HowToTool",
          name: "VS Code (optional)",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the most important git commands for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The essential git commands beginners need are: git config (set identity), git init (start tracking), git status (see changes), git add (stage files), git commit (save versions), git clone (copy repos), git checkout -b or git switch (manage branches), git push (upload to GitHub), git pull (download updates), and git show (inspect commits). These form the core daily workflow.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between git add and git commit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "git add stages files to prepare them for the next commit - it's like placing items in a basket before checkout. git commit saves those staged changes as a permanent snapshot in Git history with a descriptive message. You can stage multiple times before committing, and you must stage changes before they can be committed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I set up git config for the first time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After installing Git, run two commands: 'git config --global user.name \"Your Name\"' and 'git config --global user.email \"your@email.com\"'. This identifies you so your commits are attributed correctly. Use --global to apply across all repositories, or --local inside a specific repo for project-specific settings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the staging area in git?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The staging area is where you prepare files before committing them. When you run git add, files move to staging - they're marked for inclusion in the next commit. This lets you carefully choose which changes to commit together. Files can be in three states: untracked (Git doesn't watch them), staged (ready for commit), or committed (saved in history).",
          },
        },
        {
          "@type": "Question",
          name: "How do I create and switch to a new branch in git?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use 'git checkout -b branch-name' to create and switch in one command (traditional method), or 'git switch -c branch-name' (newer method). To switch between existing branches, use 'git switch branch-name'. Creating branches lets you work on features without affecting the main branch, following best practices for team collaboration.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between git pull and git fetch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "git pull downloads changes from the remote repository and automatically merges them into your current branch - it's fetch + merge in one step. git fetch only downloads the changes but doesn't merge them, giving you a chance to review before integrating. For everyday workflow, git pull on your main or feature branch keeps you in sync.",
          },
        },
        {
          "@type": "Question",
          name: "How do I push my local branch to GitHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use 'git push origin branch-name' where 'origin' is the default name for your remote repository and 'branch-name' is your current branch. This uploads your local commits to GitHub, making them visible to your team. After pushing, you can open a pull request to merge your changes into the main branch.",
          },
        },
        {
          "@type": "Question",
          name: "What is GitHub Flow and how do I follow it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GitHub Flow is a branch-based workflow: 1) Clone or pull latest from main, 2) Create a feature branch, 3) Make changes and commit them, 4) Push the branch to GitHub, 5) Open a pull request for review, 6) Merge after approval, 7) Pull the updated main locally, 8) Delete the merged branch. This keeps main stable while enabling safe collaboration.",
          },
        },
        {
          "@type": "Question",
          name: "How do I write good git commit messages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keep commit messages short and clear, describing what changed and why. Good examples: 'fix typo in README', 'add error handling to login', 'update app title to git going'. Use present tense, be specific, and if you need more detail, add it on a second line after a blank line. Future you and your teammates will appreciate the clarity.",
          },
        },
        {
          "@type": "Question",
          name: "How do I delete a git branch after merging?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Delete locally with 'git branch -d branch-name' and remotely with 'git push --delete origin branch-name'. The -d flag only deletes if the branch is fully merged, protecting you from losing work. This cleanup keeps your repository tidy and makes it easier to navigate available branches.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: "Git Commands Reference Guide",
      educationalLevel: "Beginner",
      learningResourceType: "Command Reference",
      about: {
        "@type": "Thing",
        name: "Git Version Control Commands",
      },
      teaches: "Essential git commands for daily development workflow",
      timeRequired: "PT16M",
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
          name: "Tech",
          item: "https://www.mergesociety.com/latest",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Essential Git Commands",
          item: "https://www.mergesociety.com/latest/most-used-git-commands",
        },
      ],
    },
  ],
};

const GitCommands = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>

      <article className="lesson-container">
        <h1>
          Top Git Commands I Use Every Day - Most Used Git Commands for
          Beginners
        </h1>
        <Image
          src="/mergesociety/most%20used%20git%20commands.webp"
          alt="Most Used Git Commands for Beginners"
          width={600}
          height={400}
          priority
        />

        <section
          className="blog-meta"
          itemScope
          itemType="https://schema.org/Article"
        >
          <h2 className="project-info">
            <span
              className="project-title"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Link
                href="https://www.instagram.com/mergesociety_/"
                itemProp="url"
              >
                <span itemProp="name">Written by Massa Medi</span>
              </Link>
            </span>
            <time
              className="project-date"
              dateTime="2025-12-08"
              itemProp="datePublished"
            >
              | December 8, 2025
            </time>
          </h2>
        </section>

        <p>
          If you're new to git commands and want a friendly, real-world
          walkthrough you can follow step by step, you're in the right place
          with me.
        </p>
        <p>
          <strong>
            Here's what I discovered: the everyday git commands you need to feel
            confident are simple once you see them in action - start with git
            config, then use git init, git status, git add, and git commit to
            track your work. From there, clone remote projects with git clone,
            keep your work safe on branches with git checkout -b or git switch,
            and sync your changes with git push and pull requests. Finally, stay
            up to date with git pull and peek at what changed using git show. Do
            these in order and you'll feel like a pro on GitHub without guessing
            what to run next.
          </strong>
        </p>
        <p>
          I’m Kadesha, and I’m so happy you’re here. I’ll walk you through
          exactly what I run, why I run it, and how it all fits together in a
          normal day of coding with GitHub.
        </p>

        <section>
          <h2>What Is git config and Why It Comes First</h2>
          <p>
            Let’s start right at the beginning. After you install Git on your
            machine, the first thing I do is tell Git who I am.
          </p>
          <p>
            The git config command lets you set configuration values so Git
            knows your identity and can personalize your workflow. That way,
            anytime you make a commit, your name and email are attached to it
            and you actually get credit for your work.
          </p>
          <p>Here’s what I type to set my username and email:</p>
          <pre>
            <code>
              git config --global user.name "Lady Kerr" git config --global
              user.email "ladycurmail.com"
            </code>
          </pre>
          <p>
            Those two lines connect your work with your identity. If you ever
            wonder what you’ve set so far, run:
          </p>
          <pre>
            <code>git config --list</code>
          </pre>
          <p>
            That prints out all your current Git configuration values so you can
            verify everything is correct.
          </p>
          <p>
            Now let’s go a little further. I like creating aliases - little
            shortcuts - for commands I use a lot. It saves keystrokes and time.
          </p>
          <p>
            For example, if I want a shorthand for git init, I can set an alias
            named i like this:
          </p>
          <pre>
            <code>git config --global alias.i init</code>
          </pre>
          <p>
            Now every time I type <code>git i</code>, Git runs{" "}
            <code>git init</code> for me. It feels tiny, but honestly, these
            small wins add up when you’re moving fast.
          </p>
          <aside>
            {/* highlight: Great spot to visually emphasize the identity setup and alias trick */}
            <p>
              <strong>Pro Tip:</strong> Use <code>--global</code> to apply a
              config across your whole machine. Use <code>--local</code> inside
              a repository if you want settings that only affect that one
              project.
            </p>
          </aside>
        </section>

        <section>
          <h2>Starting Fresh: git init, git status, and Your First Files</h2>
          <p>
            Imagine you just created a new folder for a project. Right now it’s
            just a normal folder - not a Git repository yet.
          </p>
          <p>I’ll create one and step inside it:</p>
          <pre>
            <code>mkdir project1 cd project1</code>
          </pre>
          <p>
            At this moment, <code>project1</code> isn’t tracked by Git. To turn
            on Git inside this folder, I run my alias for init:
          </p>
          <pre>
            <code>git i</code>
          </pre>
          <p>
            That’s the same as <code>git init</code>. Think of git init like
            flipping on a switch - you’re telling this folder, hey, we’re
            tracking changes now.
          </p>
          <p>Curious what’s going on at any time? Run:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Right now Git says there’s nothing to commit - because we haven’t
            added any files yet. So let’s create a file:
          </p>
          <pre>
            <code>touch hello.md</code>
          </pre>
          <p>
            Run <code>git status</code> again and you’ll see{" "}
            <code>hello.md</code> listed as an untracked file. That word
            matters. Untracked means Git sees the file, but it’s not being
            watched yet.
          </p>
          <p>
            To get a file into the Git pipeline, you add it to the staging area.
            That’s your “set these aside for the next snapshot” zone. We’ll talk
            about that next.
          </p>
        </section>

        <section>
          <h2>
            The Staging Area Explained: git add For Single Files and All Changes
          </h2>
          <p>
            When you add files to the staging area, you’re basically telling
            Git: please keep this version safe for the next commit. It’s like
            placing items in a basket before you check out.
          </p>
          <p>
            There are a few ways to add files. You can add everything at once:
          </p>
          <pre>
            <code>git add .</code>
          </pre>
          <p>Or you can be precise and add a specific file:</p>
          <pre>
            <code>git add hello.md</code>
          </pre>
          <p>Let’s make this realistic with a few files:</p>
          <pre>
            <code>touch learning.py touch waiting.py</code>
          </pre>
          <p>Now I’ll stage only one of them:</p>
          <pre>
            <code>git add learning.py</code>
          </pre>
          <p>
            If I run <code>git status</code> now, I’ll see that{" "}
            <code>learning.py</code> is staged, while <code>waiting.py</code> is
            still untracked in the working directory. That’s your quick snapshot
            of what’s prepared and what isn’t.
          </p>
          <p>
            Here’s the part people miss. If you edit a file after you’ve staged
            it, those new edits are not automatically included. You have to add
            it again to stage the newer changes.
          </p>
          <p>
            I’ll add some code to make this clear. In <code>learning.py</code> I
            type:
          </p>
          <pre>
            <code>print("I'm learning git")</code>
          </pre>
          <p>
            Then I run <code>git status</code>. Git now tells me that{" "}
            <code>learning.py</code> has been modified and has changes not
            staged for commit. To capture that new line of code, I run:
          </p>
          <pre>
            <code>git add learning.py</code>
          </pre>
          <p>
            In a normal day, you work inside your file until you’re happy, then
            use <code>git add</code> to set those changes aside. When everything
            in your basket looks right, you commit it. That’s the next step.
          </p>
          <aside>
            {/* highlight: Perfect to reinforce the mental model of staging as a basket */}
            <p>
              <strong>Pro Tip:</strong> Use <code>git add -p</code> when you
              want to choose specific hunks of a file to stage. It gives you
              finer control when you’re mid-experiment but want to commit only
              the clean parts.
            </p>
          </aside>
        </section>

        <section>
          <h2>
            Commit With Confidence: git commit, Messages, and Tracking Versions
          </h2>
          <p>
            Committing is how you store a version of your project in Git
            history. It’s like saving a restore point with a short note to your
            future self.
          </p>
          <p>
            Right now, <code>learning.py</code> and <code>hello.md</code> are
            staged, while <code>waiting.py</code> is untracked. I’ll commit
            what’s staged using a message:
          </p>
          <pre>
            <code>git commit -m "initial commit"</code>
          </pre>
          <p>
            When I run <code>git status</code> after this, Git tells me two
            files changed with one insertion. That makes sense. We added two
            files, and one of them has one line of code. It also reminds me that{" "}
            <code>waiting.py</code> is still untracked because we never staged
            it.
          </p>
          <p>
            If I add more code to <code>learning.py</code>, and I’m ready to
            include everything - including <code>waiting.py</code> - I can stage
            all changes at once and commit with a clear message:
          </p>
          <pre>
            <code>
              git add . git commit -m "add waiting file and new function"
            </code>
          </pre>
          <p>
            That’s the rhythm you’ll use over and over: code, add, commit. It’s
            simple and powerful. Your history grows as a series of thoughtful
            snapshots - each one with a short message explaining the why.
          </p>
          <p>
            When you write your commit message, aim for quick and clear. Think:
            what did I change and why does it matter? Future you - or your
            teammate - will thank you.
          </p>
          <aside>
            {/* highlight: Use this for a small visual on good commit messages */}
            <p>
              <strong>Pro Tip:</strong> Keep messages short but meaningful: “fix
              typo in README”, “update app title”, “add error handling to
              login”. If you need more detail, write it on a second line after a
              blank line.
            </p>
          </aside>
        </section>

        <section>
          <h2>
            Collaborating The Right Way: git clone, Branches, git switch, and
            Live Edits in VS Code
          </h2>
          <p>
            Now let’s talk teamwork. If you’re handed a link to a remote
            repository and you need it on your laptop, you clone it. Cloning is
            just making a local copy of a remote repo.
          </p>
          <p>
            On GitHub, go to the repository, click the green Code button, choose
            HTTPS, and click the copy icon to grab the URL. Then in your
            terminal:
          </p>
          <pre>
            <code>git clone &lt;paste-the-repo-url&gt;</code>
          </pre>
          <p>
            Once you see “done”, you’ve got a complete local copy you can work
            in. Change into the folder:
          </p>
          <pre>
            <code>cd &lt;repo-folder&gt;</code>
          </pre>
          <p>
            When working with a team, don’t commit directly to the main branch.
            Make a branch. It’s like making a copy of a document so you don’t
            mess up the original while you experiment.
          </p>
          <p>Create and switch to a new branch in one step:</p>
          <pre>
            <code>git checkout -b update-name</code>
          </pre>
          <p>Want to see what branches exist?</p>
          <pre>
            <code>git branch</code>
          </pre>
          <p>
            Git shows something like: <code>main</code>, a branch named{" "}
            <code>init</code>, and your new <code>update-name</code> branch. If
            the output is long, press <code>q</code> to exit the view.
          </p>
          <p>
            Need to go back to main? Use <code>git switch</code>:
          </p>
          <pre>
            <code>git switch main</code>
          </pre>
          <p>And to return to your branch:</p>
          <pre>
            <code>git switch update-name</code>
          </pre>
          <p>
            Now let’s open the project in VS Code and make a change you can
            actually see. Inside VS Code, open <code>index.html</code>. Right
            click on the file and choose Open Preview to see a live side-by-side
            preview of your edits.
          </p>
          <p>
            Say your task is to change the app title to “git going”. Update the
            title in the HTML. Then in your terminal, check what changed:
          </p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Git shows the file as modified. Perfect. Stage and commit those
            changes:
          </p>
          <pre>
            <code>git add . git commit -m "update App name"</code>
          </pre>
          <p>
            You just captured that update on your branch without touching main.
            Clean and safe.
          </p>
          <aside>
            {/* highlight: Good moment to call out branching discipline */}
            <p>
              <strong>Pro Tip:</strong> Branch names that explain the work help
              a ton: <code>feat/update-title</code>, <code>fix/login-bug</code>,{" "}
              <code>docs/readme-links</code>. Keep them short and clear.
            </p>
          </aside>
        </section>

        <section>
          <h2>
            Ship It and Stay In Sync: git push, Pull Requests, git pull, git
            show, and Cleaning Up Branches
          </h2>
          <p>
            You’ve got local commits and you’re ready to share. To upload your
            commits from your laptop to GitHub, you push them.
          </p>
          <p>
            Here’s how I think about <code>git push</code>: thanks, Git, for
            tracking my changes locally - now please send these commits to the
            main project on GitHub so others can see them.
          </p>
          <p>Use this format:</p>
          <pre>
            <code>git push &lt;remote&gt; &lt;branch&gt;</code>
          </pre>
          <p>
            For most repos, the remote is called <code>origin</code>, so on my{" "}
            <code>update-name</code> branch I run:
          </p>
          <pre>
            <code>git push origin update-name</code>
          </pre>
          <p>
            Head back to GitHub in the browser and you’ll see a new branch
            available. That’s why we call it push - you pushed your branch up.
          </p>
          <p>
            Now open a pull request. A pull request is a proposal to merge your
            set of changes from one branch into another. In our case, merge{" "}
            <code>update-name</code> into <code>main</code>.
          </p>
          <p>
            Click the green button to open a PR, add a short description of what
            you changed, and then click the merge button when it’s approved. In
            a real team, a coworker would review your work before you merge. For
            this walkthrough, we’ll go ahead and merge.
          </p>
          <p>
            So now main is updated on the remote repository. But what about your
            local main?
          </p>
          <p>
            Switch to your local main branch and open the same file in VS Code.
            You might notice the app title still says “todo”. Wait - what?
          </p>
          <p>
            Here’s why. You updated the remote main branch, but your local main
            hasn’t been updated to match the remote version yet. Each branch has
            its own history in each place - local and remote. They aren’t
            automatically synced.
          </p>
          <p>To bring your local main up to date with the remote main, run:</p>
          <pre>
            <code>git pull</code>
          </pre>
          <p>
            On your main branch, this fetches new commits from the remote and
            merges them into your local copy. You’ll see output like “1 file
            changed, 1 insertion, 1 deletion” which lines up with your title
            change.
          </p>
          <p>
            At this point, you might want to quickly see exactly what changed in
            the last commit. My favorite command for that is{" "}
            <code>git show</code>. It prints details about the commit you’re on
            - author, date, commit ID (the SHA), the message, and the diff of
            the changes.
          </p>
          <pre>
            <code>git show</code>
          </pre>
          <p>
            This is a fast way to review history right in your terminal without
            clicking around. When I’m double checking what shipped, I run{" "}
            <code>git show</code> as a quick sanity check.
          </p>
          <aside>
            {/* highlight: Reinforce the mental model of local vs remote states */}
            <p>
              <strong>Pro Tip:</strong> Make a habit of running{" "}
              <code>git pull</code> on the branch you’re about to work on. It
              keeps your local copy fresh and avoids annoying conflicts later.
            </p>
          </aside>
          <h3>The GitHub Flow - Start to Finish</h3>
          <p>
            Everything we just did is what we call the GitHub Flow. It’s a
            branch based workflow for everyone, and you go through it anytime
            you work in a repository.
          </p>
          <p>Here’s what we did, step by step:</p>
          <ul>
            <li>Cloned the repository to get a local copy.</li>
            <li>Created a new branch to safely make changes.</li>
            <li>Made changes on that branch and committed them.</li>
            <li>Pushed the branch to GitHub.</li>
            <li>Opened a pull request to merge into main.</li>
            <li>Reviewed and merged the PR.</li>
            <li>Pulled the latest changes into local main to stay in sync.</li>
          </ul>
          <p>
            There’s one last clean up step. After you merge the PR, delete the
            branch so the repo stays tidy.
          </p>
          <p>Delete the branch locally with:</p>
          <pre>
            <code>git branch -d update-name</code>
          </pre>
          <p>And delete it remotely with:</p>
          <pre>
            <code>git push --delete origin update-name</code>
          </pre>
          <p>
            That’s the finish line for this round of work. Clean, clear, and
            ready for the next task.
          </p>
        </section>

        <section>
          <h2>Putting It All Together: Your Everyday Git Commands, In Order</h2>
          <p>
            Let’s stitch the flow together so it becomes muscle memory. This is
            exactly how I work, from a fresh machine to collaborating with a
            team.
          </p>
          <h3>Set yourself up once</h3>
          <ul>
            <li>Identify yourself so you get credit for your work:</li>
          </ul>
          <pre>
            <code>
              git config --global user.name "Lady Kerr" git config --global
              user.email "ladycurmail.com" git config --global alias.i init
            </code>
          </pre>
          <h3>Start a brand new project</h3>
          <ul>
            <li>Create a folder, initialize Git, and check your status:</li>
          </ul>
          <pre>
            <code>mkdir project1 cd project1 git i git status</code>
          </pre>
          <h3>Add files and stage your work</h3>
          <ul>
            <li>Create files and decide what to stage now vs later:</li>
          </ul>
          <pre>
            <code>
              touch hello.md touch learning.py touch waiting.py git add
              learning.py git status
            </code>
          </pre>
          <p>
            Edit <code>learning.py</code>, then stage the new edits:
          </p>
          <pre>
            <code>
              # inside learning.py print("I'm learning git") git add learning.py
            </code>
          </pre>
          <h3>Commit clearly</h3>
          <ul>
            <li>Commit what’s staged with a simple, helpful message:</li>
          </ul>
          <pre>
            <code>
              git commit -m "initial commit" git add . git commit -m "add
              waiting file and new function"
            </code>
          </pre>
          <h3>Clone and branch when collaborating</h3>
          <ul>
            <li>Copy a remote repo and work on a branch, not main:</li>
          </ul>
          <pre>
            <code>
              git clone &lt;repo-url&gt; cd &lt;repo-folder&gt; git checkout -b
              update-name git branch # press q to exit if needed git switch main
              git switch update-name
            </code>
          </pre>
          <p>
            Open the project in VS Code, preview <code>index.html</code>, and
            update the title to “git going”.
          </p>
          <pre>
            <code>git status git add . git commit -m "update App name"</code>
          </pre>
          <h3>Sync your work</h3>
          <ul>
            <li>Push your branch, open a PR, merge when approved:</li>
          </ul>
          <pre>
            <code>git push origin update-name</code>
          </pre>
          <p>After merging on GitHub, update your local main to match:</p>
          <pre>
            <code>git switch main git pull git show</code>
          </pre>
          <h3>Clean up</h3>
          <ul>
            <li>Delete merged branches locally and remotely:</li>
          </ul>
          <pre>
            <code>
              git branch -d update-name git push --delete origin update-name
            </code>
          </pre>
          <p>
            That’s the everyday rhythm. The more you practice it, the faster and
            smoother it feels.
          </p>
        </section>

        <section>
          <h2>Final Takeaways You Can Use Right Now</h2>
          <p>
            Git isn’t about memorizing a hundred commands. It’s about learning
            the handful you’ll use every day and understanding how they fit
            together.
          </p>
          <p>
            Start by identifying yourself with <strong>git config</strong>.
            Initialize with <strong>git init</strong>. See what changed with{" "}
            <strong>git status</strong>. Stage work with{" "}
            <strong>git add</strong>. Lock it in with{" "}
            <strong>git commit</strong>. Collaborate using{" "}
            <strong>git clone</strong>, branches, and{" "}
            <strong>git switch</strong>. Share with <strong>git push</strong>,
            merge through pull requests, then stay synced with{" "}
            <strong>git pull</strong> and confirm with <strong>git show</strong>
            . When you’re done, clean up branches locally and on the remote.
          </p>
          <p>
            You just walked through the full GitHub Flow - cloning a repo,
            creating a branch, making changes, pushing, opening a pull request,
            merging, pulling updates, and deleting the branch.
          </p>
          <p>
            Practice these commands and you’ll feel fully equipped to work with
            Git like a professional. Happy coding.
          </p>
        </section>
      </article>
    </div>
  );
};

export default GitCommands;
