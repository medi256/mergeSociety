import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Git Basic Commands Step-By-Step Guide - Complete Breakdown With Real Commands",
  description:
    "Master Git with this comprehensive step-by-step guide. Learn git init, git add, git commit, git status, git diff, and git log with real command outputs. Perfect for beginners learning version control.",

  keywords: [
    "git commands",
    "git tutorial",
    "git basics",
    "git init",
    "git add",
    "git commit",
    "git status",
    "git diff",
    "git log",
    "version control",
    "git for beginners",
    "learn git",
    "git workflow",
    "git staging area",
    "git repository",
    "source control tutorial",
    "git step by step",
  ],

  authors: [{ name: "Massa Medi", url: "https://www.mergesociety.com/about" }],
  creator: "Massa Medi",
  publisher: "Massa Medi",

  publishedTime: "2025-12-03T00:00:00.000Z",
  modifiedTime: "2025-12-03T00:00:00.000Z",

  openGraph: {
    type: "article",
    title:
      "Git Basic Commands Step-By-Step Guide - Complete Breakdown With Real Commands",
    description:
      "Master Git with this comprehensive step-by-step guide. Learn git init, add, commit, status, diff, and log with real command outputs. Perfect for beginners.",
    url: "https://www.mergesociety.com/code-report/basic-git-commands",
    siteName: "Merge Society",
    locale: "en_US",
    publishedTime: "2025-12-03T00:00:00.000Z",
    modifiedTime: "2025-12-03T00:00:00.000Z",
    authors: ["Massa Medi"],
    images: [
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/git%20%20basic%20commands.webp",
        width: 1200,
        height: 630,
        alt: "Git Basic Commands Step-By-Step Guide Tutorial",
        type: "image/webp",
      },
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/git%20%20basic%20commands.webp",
        width: 800,
        height: 400,
        alt: "Git Basic Commands Tutorial",
        type: "image/webp",
      },
    ],
    tags: [
      "Git",
      "Version Control",
      "Tutorial",
      "Programming",
      "Development",
      "Beginner Guide",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Git Basic Commands Step-By-Step Guide - Complete Breakdown",
    description:
      "Master Git with this step-by-step guide. Learn git init, add, commit, status, diff, and log with real examples. Perfect for beginners.",
    creator: "@manager70191",
    images: [
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/git%20%20basic%20commands.webp",
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

  alternates: {
    canonical: "https://www.mergesociety.com/code-report/basic-git-commands",
    languages: {
      "en-US": "https://www.mergesociety.com/code-report/basic-git-commands",
    },
  },

  category: "Technology",

  other: {
    "article:author": "Massa Medi",
    "article:published_time": "2025-12-03T00:00:00.000Z",
    "article:modified_time": "2025-12-03T00:00:00.000Z",
    "article:section": "Programming Tutorials",
    "article:tag": "Git, Version Control, Tutorial, Programming",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Git Basic Commands Step-By-Step Guide - A Complete Breakdown With Real Commands and Output",
  description:
    "Master Git with this comprehensive step-by-step guide covering git init, git add, git commit, git status, git diff, and git log with real command outputs and explanations.",
  image:
    "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/git%20%20basic%20commands.webp",
  datePublished: "2025-12-03T00:00:00.000Z",
  dateModified: "2025-12-03T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Massa Medi",
    url: "https://www.mergesociety.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Merge Society",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mergesociety.com/MS.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mergesociety.com/code-report/basic-git-commands",
  },
  articleSection: "Programming Tutorials",
  keywords:
    "git commands, git tutorial, version control, git basics, git init, git add, git commit, git status, git diff, git log",
  inLanguage: "en-US",
  proficiencyLevel: "Beginner",
  dependencies: "Git installation",
  educationalUse: "Learning version control",
  learningResourceType: "Tutorial",
  teaches: "Git basic commands and workflow",
  about: {
    "@type": "Thing",
    name: "Git version control system",
    description:
      "Distributed version control system for tracking changes in source code",
  },
  tutorial: {
    "@type": "HowTo",
    name: "How to Use Git Basic Commands",
    step: [
      {
        "@type": "HowToStep",
        name: "Configure Git",
        text: "Set up your Git identity with git config --global user.name and user.email",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Initialize Repository",
        text: "Create a new Git repository using git init command",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Create and Track Files",
        text: "Create files and track them with git add command",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Commit Changes",
        text: "Save snapshots of your work with git commit",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Review History",
        text: "Check your commit history with git log and git status",
        position: 5,
      },
    ],
  },
};

const GitCommands = () => {
  return (
    <div className="lesson-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Git Basic Commands Step-By-Step Guide - A Complete Breakdown With Real
          Commands and Output
        </h1>
        <Image
          src="/mergesociety/git%20%20basic%20commands.webp"
          alt="Git Basic Commands Step-By-Step Guide"
          width={800}
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
              <Link href="/about" itemProp="url">
                <span itemProp="name">Written by Massa Medi</span>
              </Link>
            </span>
            <time
              className="project-date"
              dateTime="2025-12-03"
              itemProp="datePublished"
            >
              | December 3, 2025
            </time>
          </h2>
        </section>

        <p>
          In this walkthrough, I am going to show you the most basic Git
          commands that you need to know. I am assuming you already have Git
          installed on your system. If you do not, I have installation videos
          for both Mac and Windows - go check those out first. Otherwise, let us
          go ahead and get right on into it.
        </p>

        <section aria-labelledby="intro">
          <h2 id="intro">What We Are Doing Right Now</h2>
          <p>
            I am on a Mac and I am going to open up a Terminal window. If you
            are on Windows, you can open up Command Prompt or PowerShell - both
            will work for what we are doing. The plan is simple and very real
            world. I am going to go to my Desktop, create a brand new folder
            called fruit, and we are going to store our code in there while we
            learn Git.
          </p>
          <p>
            I am going to cd into that fruit directory. I am also going to open
            it up in a Finder window so we can keep an eye on what we are doing
            visually. When I say I am keeping an eye on it, imagine Finder
            sitting next to Terminal, and every time I create or change a file,
            you will see it appear or change in Finder. That way you can connect
            what Git is saying in the terminal with what is actually happening
            on your file system.
          </p>
        </section>

        <aside aria-label="Windows tip">
          <h3>Windows quick tip</h3>
          <p>
            On Windows, open File Explorer to the folder you are working in so
            you can watch files appear as you create them. Use Command Prompt or
            PowerShell to run the same commands shown here. The commands are
            identical unless you are doing something very shell specific, which
            we are not.
          </p>
        </aside>

        <section aria-labelledby="git-config">
          <h2 id="git-config">The Overlooked Setup Step - git config</h2>
          <p>
            One of the most often overlooked setup steps in Git is the Git
            config file. Basically, when you make commits to a Git repository,
            we want to know who made that commit - that it is you and not
            somebody else. Git records the author on each commit, and if you do
            not tell Git who you are, it will ask, or worse, you will end up
            with commits with missing or incorrect identity.
          </p>
          <p>
            The easiest way to do this is to tell Git your name and your email
            address. This is a once and done setup type of thing. You do it one
            time and you will never have to worry about it again unless you
            change your name - but you are probably not going to do that. Your
            email can be any email you want associated with your code history.
            If you are pairing this with GitHub later, you can use the same
            email you use on GitHub so commits line up with your account.
          </p>

          <h3>Commands to set your identity</h3>
          <pre>
            <code>
              git config --global user.name "tony teaches tech" git config
              --global user.email "Tony teaches tech"
            </code>
          </pre>
          <p>
            All this really does is create or update a hidden file in your home
            directory called .gitconfig with that same exact information. If you
            were to open it, you would see a [user] section with name and email
            values. You do not need to manage that file by hand. We are done
            with that and we do not have to worry about it again.
          </p>
        </section>

        <section aria-labelledby="init-or-clone">
          <h2 id="init-or-clone">
            Two Ways To Start Working With Git - init or clone
          </h2>
          <p>
            There are basically two different ways you can interact with a Git
            repository:
          </p>
          <ul>
            <li>
              Create a brand new Git repository in a folder with git init.
            </li>
            <li>
              Clone an existing repository from somewhere like GitHub with git
              clone.
            </li>
          </ul>
          <p>
            In this session, we are going to use git init because we are working
            locally and learning core commands. We will do the GitHub side of
            things - clone, push, pull - in another video. This one is just
            local Git commands, local repo, no remotes yet.
          </p>

          <h3>Initialize a repository</h3>
          <pre>
            <code>cd ~/Desktop mkdir fruit cd fruit git init</code>
          </pre>
          <p>
            Git tells you it initialized a Git repository in the fruit
            directory. Inside fruit, there is now a hidden folder named .git.
            You do not see anything happen in Finder because this is a hidden
            folder. On macOS and Linux, files or folders that start with a dot
            are hidden by default.
          </p>

          <h3>Show hidden files to confirm .git is there</h3>
          <pre>
            <code>ls -la</code>
          </pre>
          <p>
            You will see the .git folder listed. If you peek inside it, you will
            see a whole bunch of stuff - HEAD, refs, objects, config - that we
            do not need to concern ourselves with for now. That is where all
            your branches are tracked, your commits are stored, and all the guts
            of Git live. I just want you to know that this exists so you are not
            surprised by the hidden folder. That is all we are going to look at
            in there.
          </p>
        </section>

        <section aria-labelledby="first-file">
          <h2 id="first-file">
            Start Working With Files - Create Orange py and Make Your First
            Commit
          </h2>
          <p>
            Let us start working with files. You can write any type of code you
            want. I am going to make a Python file called Orange py and I am
            going to use the Vim text editor. You can use Nano or any other
            editor you are more comfortable with. For the sake of this
            demonstration, I am just going to edit my files with Vim.
          </p>

          <h3>Create the file and add simple content</h3>
          <pre>
            <code>vim Orange.py</code>
          </pre>
          <p>
            Inside that file, I am going to write a super simple Python program:
          </p>
          <pre>
            <code>print("I like Orange")</code>
          </pre>
          <p>
            I will save that file. If you are watching in Finder, that file has
            now been created and appears in the fruit folder. This is the visual
            confirmation that the file exists on disk.
          </p>

          <h3>Ask Git what it thinks - git status</h3>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Git says we are on the main branch, we do not have any commits yet,
            and there is one untracked file. Git is really helpful here - it
            even tells you what to do next. It says: use git add followed by the
            name of the file to include it in what will be committed.
          </p>

          <h3>Understand the three stages in the Git workflow</h3>
          <p>
            Think about it this way. There are basically three stages to the
            workflow when you are adding files to a Git repository:
          </p>
          <ul>
            <li>
              Files on your file system - that is just normal files like Orange
              py sitting in your folder.
            </li>
            <li>
              The staging area - also called the index - where you prepare which
              changes you want included in the next commit. You put files here
              with git add.
            </li>
            <li>
              The commit - a permanent snapshot in the repository history that
              you create with git commit when you are ready.
            </li>
          </ul>
          <p>
            We are going to do that exact workflow a couple times in this
            session so it sticks.
          </p>

          <h3>Stage the new file</h3>
          <pre>
            <code>git add Orange.py</code>
          </pre>
          <p>Check status again to see what changed:</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Now Git shows changes to be committed, including a new file called
            Orange py. This means the file is in the index - the staging area.
            If you want to revert out of that and unstage it, Git gives you a
            very helpful hint. It will say something like: use git rm --cached
            followed by the file name to unstage. That is how you move a change
            out of the staging area without deleting your working file.
          </p>
          <p>
            The area we are in now is called the staging area or the index. I am
            calling out both names so you recognize them in documentation and
            help messages in the future.
          </p>

          <h3>Commit the staged change</h3>
          <p>
            We are ready. We are happy with our code change, our new file here.
            Let us commit it.
          </p>
          <pre>
            <code>git commit</code>
          </pre>
          <p>
            Your default text editor - in my case Vim - is going to pop up when
            you run git commit. You can set which editor Git uses with a git
            config command, but we will not go over that here. All you have to
            do in the editor is type a commit message that describes what you
            did.
          </p>
          <p>What did we do here? I am going to say:</p>
          <pre>
            <code>I added a new file about oranges.</code>
          </pre>
          <p>
            Because I am using Vim, I will type Escape, then :wq, and hit Enter
            to save that message and exit. Git responds by telling you one file
            was changed and it created this Orange.py file in the repository
            history.
          </p>

          <h3>Confirm with status and log</h3>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            We are on the main branch, and there is nothing to commit. The
            working tree is clean. That phrase means your working directory
            matches the most recent commit and there are no staged or unstaged
            changes.
          </p>
          <pre>
            <code>git log</code>
          </pre>
          <p>
            Git prints the history of commits. Right now there is one commit.
            You will see a long commit hash, the author information, the date
            and time, and the commit message: I added a new file about oranges.
            That is the complete paper trail for what we just did.
          </p>
          <p>
            So we just went through the whole flow - from a file on our file
            system to the staging index area to committing the file into our
            repository.
          </p>
        </section>

        <section aria-labelledby="modify-and-diff">
          <h2 id="modify-and-diff">
            Take It A Step Further - Modify The File and Use git diff
          </h2>
          <p>
            Let us take it a step further. Let us modify that file. I am going
            to open up the Orange py file and change the sentence just a bit.
          </p>
          <pre>
            <code>vim Orange.py</code>
          </pre>
          <p>
            Instead of saying I like Orange, I will make it plural and add some
            feeling. I will say:
          </p>
          <pre>
            <code>print("I like oranges!")</code>
          </pre>
          <p>I will save that file. Now run status again.</p>
          <pre>
            <code>git status</code>
          </pre>
          <p>
            Git shows that the file has been modified. Git is smart enough to
            know the file changed compared to what was previously committed. It
            compares your working copy to the last snapshot and tags the file as
            modified.
          </p>

          <h3>See exactly what changed with git diff</h3>
          <pre>
            <code>git diff</code>
          </pre>
          <p>
            The output shows the old content in red and the new content in
            green. The old content of the file was I like Orange. The new
            content is I like oranges! This is super helpful when you are trying
            to review what you did before deciding if you want to commit it.
          </p>
        </section>

        <section aria-labelledby="add-apple">
          <h2 id="add-apple">
            Add Another File - Apple PI Then Stage Files Individually and All At
            Once
          </h2>
          <p>
            We are not ready to commit the change yet. Let us say we want to add
            another file to our repository at the same time. I am going to make
            a new file called apple.PI. Same idea - a simple Python file that
            prints something.
          </p>
          <pre>
            <code>vim apple.py</code>
          </pre>
          <p>Inside apple.PI I will write:</p>
          <pre>
            <code>
              fruit = "apple" print("I also like to eat {0}".format(fruit))
            </code>
          </pre>
          <p>
            If we were to run this code, it would print to the console: I also
            like to eat apple. That just proves the string formatting works and
            the variable is wired up. I will save that. In Finder, you can see
            the apple file appear next to the orange file in the fruit folder.
          </p>

          <h3>Check the state of both files</h3>
          <pre>
            <code>git status</code>
          </pre>
          <p>Now we have two different things going on at once:</p>
          <ul>
            <li>
              A file on our file system that is untracked - Git does not know
              anything about apple.PI yet.
            </li>
            <li>
              A file that has been committed before but is now modified - Orange
              py is changed and not staged.
            </li>
          </ul>

          <h3>Stage one file at a time</h3>
          <p>
            Let us actually add one of those at a time so you can see how the
            staging area works in practice.
          </p>
          <pre>
            <code>git add Orange.py git status</code>
          </pre>
          <p>
            Now you can clearly see those two separate stages in the output.
            Orange py is in the staging area - ready to be committed. Apple.PI
            is still untracked - not staged, not committed.
          </p>

          <h3>Stage everything with a shortcut</h3>
          <p>
            Let us add them both at the same time. If you do not want to specify
            a file by name, and you want to add everything in the working
            directory, use a dot. That tells Git to add all new and changed
            files from the current folder down.
          </p>
          <pre>
            <code>git add . git status</code>
          </pre>
          <p>
            Now the changes to be committed show both files. Both of those files
            are in the index - the staging area. They are queued up for the next
            commit.
          </p>

          <h3>Commit with an inline message</h3>
          <p>
            Let us do a different type of commit now. Instead of opening an
            editor, we will provide the message inline using -m for message.
            This is shorthand and is great for quick, clear commits.
          </p>
          <pre>
            <code>git commit -m "update it Orange add it Apple"</code>
          </pre>
          <p>
            Git responds: two files changed, three insertions, one deletion.
            That line by line summary means it added three lines and removed one
            when comparing the new commit to the previous one.
          </p>
        </section>

        <section aria-labelledby="review-log">
          <h2 id="review-log">Review Your History With git log</h2>
          <pre>
            <code>git log</code>
          </pre>
          <p>
            Now we have two commits in our Git repository. The log shows the
            first one where we added the new file about oranges. The second one
            is where we updated the Orange file and added the Apple file. You
            can scroll the log to see details like hashes, author, dates, and
            messages. This is the running history of your project.
          </p>
          <p>
            We can keep doing this indefinitely - write code, stage changes,
            commit snapshots. Along the way you just learned and used the
            essentials that matter every day:
          </p>
          <ul>
            <li>git add - put changes in the staging area.</li>
            <li>git commit - create a snapshot with a message.</li>
            <li>git diff - see exactly what changed before you commit.</li>
            <li>git log - review your commit history.</li>
            <li>git status - your real time dashboard of what is happening.</li>
          </ul>
          <p>
            These are all local commands that only interact with your local
            repository. No servers, no remotes, no network - just you and your
            code on your machine.
          </p>
        </section>

        <aside aria-label="Helpful notes">
          <h3>Helpful notes</h3>
          <ul>
            <li>
              If your default branch is called master instead of main, that is
              just a naming difference based on your Git version or config. The
              commands work the same.
            </li>
            <li>
              If you accidentally stage something, use git rm --cached filename
              to unstage without deleting your working file.
            </li>
            <li>
              If Vim pops up and you are not comfortable with it, you can set
              your editor globally. For example, to use Nano: git config
              --global core.editor "nano". We did not change this here, but it
              is good to know.
            </li>
          </ul>
        </aside>

        <section aria-labelledby="wrap-up">
          <h2 id="wrap-up">What Is Next</h2>
          <p>
            In the next video, I am going to show you how to add this Git
            repository to GitHub. We are going to be working with commands like
            git clone, git push, and git pull. That is where you start
            collaborating and syncing your work online. Subscribe if you liked
            this video, and I will see you over there.
          </p>
        </section>

        <p>
          Bottom line: you just watched the full flow in order - initialize a
          repo, create files, check status, stage changes, commit with a clear
          message, review diffs, and read your log. Keep practicing these and
          they will become second nature.
        </p>
      </article>
    </div>
  );
};

export default GitCommands;
