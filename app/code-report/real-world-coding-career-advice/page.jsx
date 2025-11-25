import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career",
  description:
    "Stop coding in tutorial hell. Learn why building projects for real users is the secret to landing your first developer job. From deployment to user feedback - here's how to stand out from 95% of CS grads.",

  metadataBase: new URL("https://www.mergesociety.com"),

  keywords: [
    "computer science career advice",
    "software engineering projects",
    "real world coding experience",
    "CS student projects",
    "software developer career tips",
    "coding for real users",
    "deployment tutorial",
    "first programming job",
    "CS graduation tips",
    "software engineering internship",
    "coding portfolio projects",
    "developer resume tips",
    "programming career guide",
    "software development best practices",
    "CS student advice",
    "coding interview preparation",
    "software engineering fundamentals",
    "programming job search",
    "developer experience building",
    "coding project ideas",
  ],

  category: "Career Development & Programming",

  openGraph: {
    title:
      "Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career",
    description:
      "The brutal truth about CS education: localhost projects won't get you hired. Learn how building for real users accelerates your learning and makes you irresistible to recruiters.",
    url: "https://www.mergesociety.com/code-report/real-world-coding-career-advice",
    siteName: "Merge Society",
    images: [
      {
        url: "/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg",
        width: 1200,
        height: 630,
        alt: "Software engineering career advice: Building projects for real users vs localhost development",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-06-28T14:00:00Z",
    section: "Career Development",
    tags: [
      "Computer Science Career",
      "Software Engineering Advice",
      "Programming Projects",
      "CS Student Tips",
      "Developer Career Guide",
      "Coding Portfolio",
      "Programming Jobs",
      "Software Development",
      "Career Advice",
      "Programming Fundamentals",
    ],
  },

  authors: [
    {
      name: "Massa Medi",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "Massa Medi",
  publisher: "Merge Society",

  alternates: {
    canonical:
      "https://www.mergesociety.com/code-report/real-world-coding-career-advice",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real-World Coding: Why Building for Users Will 10x Your CS Career",
    description:
      "Stop coding on localhost. Start building for real users. Here's how to accelerate your learning and stand out from 95% of CS grads.",
    creator: "@manager70191",
    images: [
      "/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg",
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

  // Enhanced for Google Discover
  other: {
    "article:published_time": "2025-06-28T14:00:00Z",
    "article:author": "Massa Medi",
    "article:section": "Career Development",
    "article:tag":
      "Computer Science Career, Software Engineering, Programming Projects, CS Student Advice",

    // Google Discover optimization
    news_keywords:
      "computer science career, software engineering advice, programming projects, developer jobs, CS students",

    // Content freshness signals
    "last-modified": "2025-06-28T14:00:00Z",
    "content-freshness": "new",

    // Engagement signals
    "estimated-reading-time": "12 minutes",
    "content-type": "Career Guide & Programming Advice",
    "difficulty-level": "Beginner to Intermediate",

    // Career-focused signals
    "career-advice": "software engineering",
    "target-audience": "computer science students",
    "actionable-content": "true",
  },

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id":
        "https://www.mergesociety.com/code-report/real-world-coding-career-advice",
      headline:
        "Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career",
      alternativeHeadline:
        "From Tutorial Hell to Real Jobs: The CS Student's Guide to Building Career-Changing Projects",
      image: {
        "@type": "ImageObject",
        url: "/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg",
        width: 1200,
        height: 630,
        caption:
          "Computer science students learning to build projects for real users instead of localhost",
      },
      datePublished: "2025-06-28T14:00:00Z",
      author: {
        "@type": "Person",
        name: "Massa Medi",
        url: "https://www.mergesociety.com/about",
        sameAs: ["https://twitter.com/manager70191"],
      },
      publisher: {
        "@type": "Organization",
        name: "Merge Society",
        url: "https://www.mergesociety.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mergesociety.com/MS.png",
          width: 200,
          height: 200,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.mergesociety.com/code-report/real-world-coding-career-advice",
      },
      articleSection: "Career Development",
      articleBody:
        "Comprehensive guide for computer science students on building real-world projects that accelerate learning and career prospects...",
      wordCount: 3200,
      keywords:
        "computer science career, software engineering advice, programming projects, CS student tips, developer jobs",
      about: [
        {
          "@type": "Thing",
          name: "Software Engineering Career",
          description:
            "Professional development path for computer science students and new developers",
        },
        {
          "@type": "Thing",
          name: "Real-World Programming Projects",
          description:
            "Software development projects built for actual users rather than academic exercises",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Computer Science Students and New Developers",
        geographicArea: "Global",
      },
      isAccessibleForFree: true,
      genre: [
        "Career Development",
        "Programming Education",
        "Professional Advice",
      ],
      learningResourceType: "Career Guide",
      educationalLevel: "University Level",
      typicalAgeRange: "18-30",
      interactivityType: "expositive",
      educationalUse: "Career Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Build Real-World Programming Projects That Get You Hired",
      description:
        "Step-by-step guide for CS students to create projects for actual users and accelerate their software engineering career",
      image:
        "/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg",
      totalTime: "PT60M",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "0",
      },
      supply: [
        {
          "@type": "HowToSupply",
          name: "Programming knowledge (any language)",
        },
        {
          "@type": "HowToSupply",
          name: "Computer with internet access",
        },
        {
          "@type": "HowToSupply",
          name: "GitHub account for version control",
        },
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: "Code editor or IDE",
        },
        {
          "@type": "HowToTool",
          name: "Deployment platform (Vercel, Netlify, etc.)",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Identify a Real Problem",
          text: "Find a daily annoyance or workflow issue you or others face that can be solved with code.",
        },
        {
          "@type": "HowToStep",
          name: "Build the Minimum Viable Product",
          text: "Create a basic version that solves the core problem, ignoring perfect design initially.",
        },
        {
          "@type": "HowToStep",
          name: "Deploy for Real Users",
          text: "Put your project online where actual people can use it and provide feedback.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I make my computer science projects stand out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build for real users, not just for class. Deploy something—even if it's small—that people can actually use. Bonus points if you solve a problem YOU have (because odds are, hundreds more do too).",
          },
        },
        {
          "@type": "Question",
          name: "Does it matter if my project isn't perfect before I deploy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely not. Shipping fast, even if rough, teaches you 10x more than tinkering in private. You can always polish after launch—but you can't learn real deployment or user feedback on localhost.",
          },
        },
        {
          "@type": "Question",
          name: "What counts as 'experience' when applying for programming jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anything that involved real coding or problem-solving—even if unpaid, volunteer-based, or research assistant gigs. Stack those 'imperfect' roles and your resume builds real momentum.",
          },
        },
        {
          "@type": "Question",
          name: "What if I'm feeling burnt out or stuck with no progress in my job search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That's completely normal—and it's a phase every engineer hits. Create a progress journal to visualize what you've accomplished (it's more than you think). Push through The Void and keep grinding; your break will come.",
          },
        },
        {
          "@type": "Question",
          name: "How do I actually get good at coding (not just passing exams)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double down on fundamentals: logic, data structures, debugging. Practice building projects for others, not just yourself. Use platforms like Brilliant to force real problem solving, not just memorization.",
          },
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
          Real-World Coding: Why Building for ACTUAL Users Will 10x Your
          Software Engineering Career
        </h1>

        <figure className="blog-image">
          <Image
            src="/mergesociety/pexels-energepic-com-27411-313690_uzkvfv_jaacwm.jpg"
            alt="Real-World Coding: Why Building for ACTUAL Users Will 10x Your Software Engineering Career"
            width={600}
            height={400}
            priority
          />
          <figcaption>
            Real-world coding focus: Building for actual users accelerates
            growth in your software engineering career.
          </figcaption>
        </figure>

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
              dateTime="2025-06-28"
              itemProp="datePublished"
            >
              | June 28, 2025
            </time>
          </h2>
        </section>

        <p>
          Here’s the dirty secret no one tells computer science students: Nearly
          everything you build on localhost is easy mode. Think you’re crushing
          it because AI spat out code that compiles? Think again. The real
          learning - the kind that makes you dangerously employable - only
          starts when you put your project out there and REAL users break it in
          ways you never imagined. Ready to upgrade from coding in the vacuum?
          Don’t blink, because what you’re about to learn will put you ahead of
          95% of CS grads still stuck in tutorial hell.
        </p>

        <section>
          <h2>
            What Most Computer Science Students Get Completely Wrong About
            Coding Projects
          </h2>
          <p>
            If you think “getting good at coding” means racking up GitHub repos
            that only you (and maybe your cat) ever use, you’re playing the game
            on sandbox mode - and missing the whole point. Here’s what nobody
            admits: Building projects just for yourself is safe. Debugging in
            your own cozy environment means every weird bug is your fault, AI
            can bail you out, and you never face users who can’t tell a stack
            trace from a sandwich.
          </p>
          <p>
            The second you deploy something for other people - that’s when
            things get real. Users will break your project in ways no tutorial
            ever covered. You’ll hit errors that no Copilot can magically solve.
            Hosting, deployment, scalability, onboarding - suddenly, you’re not
            a student, you’re an actual developer shipping software. It’s the
            difference between watching YouTube videos of pro athletes… and
            getting punched in the face during your first real match.
          </p>
          <blockquote>
            “Success isn’t about working harder—it’s about working on what
            everyone else ignores.”
          </blockquote>
          <p>
            Want to separate yourself from the pack? Stop treating your projects
            like diary entries, and start solving real problems for real people.
          </p>
        </section>

        <section>
          <h2>
            How Building for REAL Users Skyrockets Your Learning (and Your
            Resume)
          </h2>
          <p>
            Picture this: Instead of just coding, you actually deploy a project
            for others. Suddenly you’re learning at warp speed. Hosting issues.
            Scaling headaches. Feedback from unpredictable humans. Sounds
            intimidating?
          </p>
          <p>
            Here’s the thing that blew my mind: Every pain in this process is a
            signal you’re developing the skills recruiters actually care about.
            When you launch something for the world (even if it’s just a weird
            Chrome extension, simple CLI tool, or tiny web app), you learn stuff
            no classroom or YouTube video can replicate. You’re forced to “make
            it work” for users that don’t think like you. And THAT is the real
            job.
          </p>
          <ul>
            <li>
              Your project solves a niche problem YOU have (and probably
              hundreds of others do too)
            </li>
            <li>
              Recruiters can check out an actual live product on your resume -
              not just screenshots
            </li>
            <li>
              You stand out instantly: Very few candidates show “scalability”
              and real-world impact
            </li>
            <li>
              Your learning explodes - every bug, every frustrated DM from a
              user, every tiny success
            </li>
          </ul>
          <blockquote>
            “Stop trying to be perfect. Start trying to be remarkable.”
          </blockquote>
          <p>
            The best part? You don’t need to build the next Facebook. The
            mindset shift is this: Even if you launch a tiny tool that just
            helps you and a few other nerds, you’re building career capital that
            the average code-grinder will never match.
          </p>
        </section>

        <section>
          <h2>
            Stop Getting Stuck on “Perfect”: Ship Fast, Ship Ugly, Ship Useful
          </h2>
          <p>
            You know what destroys more student projects than any bug?
            Perfectionism. Everyone obsesses over UI before real people even use
            the tool. But here’s what most experts won’t admit: No one cares if
            your project is ugly. They care if it works.
          </p>
          <p>
            Let me show you exactly what I mean: Ship a minimal version that
            solves the core problem. No fancy features. No pixel-perfect design.
            Once it’s live (even if a little clunky), THEN worry about making
            things pretty. The graveyard of CS projects is filled with “almost
            finished, never shipped” ideas that were supposed to be perfect.
          </p>
          <ul>
            <li>
              <strong>Wrong:</strong> Obsessing over design before anyone can
              use your project.
            </li>
            <li>
              <strong>Right:</strong> Launching early and getting feedback from
              actual users.
            </li>
          </ul>
          <p>
            The only way to learn deployment, feedback, and iteration is to put
            something - anything - out there. You’ll be shocked how it changes
            you as a coder.
          </p>
        </section>

        <section>
          <h2>Quick Wins: Micro-Projects That Actually Get You Noticed</h2>
          <p>
            Most people think you need a 6-month epic SaaS idea to dress up your
            resume. Not true. Want recruiters to drool? Deploy these, even at a
            small scale:
          </p>
          <ul>
            <li>Chrome extension that fixes a daily annoyance</li>
            <li>
              CLI tool to automate a boring task (bonus if it helps fellow
              students)
            </li>
            <li>A widget that streamlines your workflow - or someone else’s</li>
            <li>
              Simple mobile app or mini-site that does ONE thing flawlessly
            </li>
          </ul>
          <p>
            You don't need 100+ stars on GitHub. All you need is{" "}
            <strong>links</strong> recruiters can click, see, and use—even just
            for a minute. That's how you become memorable.
          </p>
        </section>

        <section>
          <h2>
            Why “Experience” is a Trap (and How Lowering Your Job Standards
            Opens Doors No One Talks About)
          </h2>
          <p>
            Let’s get brutally honest. Everyone says you need “relevant
            experience” to get your “first” job… but nobody is offering it to
            students. See the problem?
          </p>
          <blockquote>
            “The difference between winners and losers? Winners do what losers
            won’t.”
          </blockquote>
          <p>
            Here’s what I did when I hit this wall: I stopped chasing the
            unicorn, paid, full-stack software internship. Instead, I said YES
            to an unpaid, not-exactly-dev role that gave me web development
            work. It wasn’t glamorous. But it stacked my resume. Made
            connections. And unlocked opportunities that the “perfect position”
            never would have.
          </p>
          <ul>
            <li>
              If you need income, don’t work for free. But if you’re desperate
              for a starting point—take whatever you can get. You can always
              level up after.
            </li>
            <li>
              LinkedIn’s full of strange unpaid titles, weird volunteer gigs,
              early startup roles that sound niche. You’ll be shocked how many
              doors open when you stop looking for perfect.
            </li>
            <li>
              Treat it like research with a professor: Nobody cares if you’re
              paid. They care that you did the work.
            </li>
          </ul>
          <p>
            Most people won’t have the discipline for what I’m about to share:
            If you’re truly stuck, sign up for anything—tutoring, research
            assistant, volunteer dev. Everything counts. You collect experiences
            (and LinkedIn bullets) while everyone else sits on the sidelines
            complaining that there’s “nothing out there.”
          </p>
        </section>

        <section>
          <h2>
            What To Do When You’re Grinding and Still Nothing Is Happening (“The
            Void”)
          </h2>
          <p>
            You sending out apps, grinding LeetCode, shipping projects, DMing
            recruiters… and it’s radio silence. No calls. No replies. Not a
            single ping. Welcome to The Void.
          </p>
          <blockquote>
            “Keep going when everyone else stops. That’s where the breakthroughs
            happen.”
          </blockquote>
          <p>
            I need you to hear this: The Void is NORMAL. The only reason nobody
            talks about it is - let’s be real - it feels like failure. But
            everyone who’s made it through this industry has sat in that silence
            for longer than they care to admit.
          </p>
          <ul>
            <li>
              Your effort feels invisible? Good. You’re on the right track.
            </li>
            <li>
              This is the filter that weeds out everyone who quits too soon.
            </li>
            <li>
              Keep applying. Keep grinding. The silence WILL break if you stay
              in the game.
            </li>
          </ul>
          <p>
            While everyone else gives up at the first taste of discouragement,
            you stack silent progress—and one day, the breakthrough happens. You
            want proof? Every single top-tier dev I know grinded in the black
            hole before their first real break.
          </p>
          <blockquote>
            “Most people will ignore this and wonder why they’re stuck.”
          </blockquote>
        </section>

        <section>
          <h2>
            The Progress Notebook: The Sanity Hack No One Uses But Every Top
            Performer Swears By
          </h2>
          <p>
            Overwhelmed by a to-do list that never shrinks? Feel like you’re
            learning nothing? Here’s the quick win that’ll change your
            trajectory: Keep a simple progress notebook.
          </p>
          <ul>
            <li>
              Track daily/weekly goals for projects, interviews, and coding
              drills
            </li>
            <li>
              Log LeetCode problems and “aha!” moments for pattern recognition
            </li>
            <li>
              Write job search progress—interview tips, contacts, resume tweaks
            </li>
            <li>
              Zero “aesthetic” needed: Use Notion, Google Docs, Notes app or
              paperback
            </li>
          </ul>
          <blockquote>
            "If you’re still reading this, you’re already ahead of 90% of
            people…"
          </blockquote>
          <p>
            Why bother? Because when you actually SEE progress, burnout gets
            wrecked. You’ll realize that two months ago you didn’t even know
            dynamic programming—today you’ve solved 10 problems with it. Plus,
            you get to build career momentum by stacking wins, not just grinding
            endlessly.
          </p>
        </section>

        <section>
          <h2>
            Don’t Let Your CS Degree Fool You: Fundamentals Still Crush
            Everything (Here’s Why Employers Care About Real Skills)
          </h2>
          <blockquote>
            “Degrees are nice. Fundamentals are unstoppable.”
          </blockquote>
          <p>
            Newsflash: College grads are flooding the market who can't code
            without AI holding their hand. If you’re serious about standing out,
            double down on the real stuff—algorithms, data structures,
            debugging, logical thinking.{" "}
            <strong>Mastering fundamentals makes you bulletproof.</strong>
          </p>
          <p>
            In other words? The less you rely on shortcuts, the more valuable
            you become. Employers see through the AI-generated code. Real-world
            problem solving is what makes you un-ghostable.
          </p>
          <p>
            Want to build those skills fast (and actually enjoy it)? Consider{" "}
            <strong>Brilliant: https://brilliant.org</strong>- the interactive,
            ultra-practical way to actually “get” programming, math, science,
            and real problem-solving. Thousands of lessons from MIT, Google,
            Stanford pros. Everything built around hands-on problem cracking,
            not just passive video-watching.
          </p>
          <ul>
            <li>Daily challenges to re-wire your coding brain</li>
            <li>Fresh problem sets to flex your critical thinking muscles</li>
            <li>
              Build “real developer” intuition through debugging & design
              practice
            </li>
          </ul>
        </section>

        <section>
          <h2>FAQ: People Also Ask (and the Answers Nobody Gives)</h2>
          <div className="faq-section">
            <h3>How can I make my computer science projects stand out?</h3>
            <p>
              Build for real users, not just for class. Deploy something—even if
              it’s small—that people can actually use. Bonus points if you solve
              a problem YOU have (because odds are, hundreds more do too).
            </p>
            <h3>Does it matter if my project isn’t perfect before I deploy?</h3>
            <p>
              Absolutely not. Shipping fast, even if rough, teaches you 10x more
              than tinkering in private. You can always polish after launch—but
              you can’t learn real deployment or user feedback on localhost.
            </p>
            <h3>What counts as “experience” when applying for jobs?</h3>
            <p>
              Anything that involved real coding or problem-solving—even if
              unpaid, volunteer-based, or research assistant gigs. Stack those
              “imperfect” roles and your resume builds real momentum.
            </p>
            <h3>What if I’m feeling burnt out or stuck with no progress?</h3>
            <p>
              That’s completely normal—and it’s a phase every engineer hits.
              Create a progress journal to visualize what you’ve accomplished
              (it’s more than you think). Push through The Void and keep
              grinding; your break will come.
            </p>
            <h3>
              How do I actually get good at coding (not just passing exams)?
            </h3>
            <p>
              Double down on fundamentals: logic, data structures, debugging.
              Practice building projects for others, not just yourself. Use
              platforms like Brilliant to force real problem solving, not just
              memorization.
            </p>
          </div>
        </section>

        <section>
          <h2>Internal Links: Level Up Even More</h2>
          <ul>
            <li>
              <Link href="/code-report/tech-stack">
                The Definitive Beginner’s Guide to Picking Your Tech Stack for
                Web, Mobile, Desktop, Games, and AI
              </Link>
            </li>
            <li>
              <Link href="/code-report/python-libraries">
                Every Python Library and Frameworks Explained
              </Link>
            </li>
            <li>
              <Link href="/code-report/all-react-concepts">
                Every React Concept Explained
              </Link>
            </li>
            <li>
              <Link href="/code-report/react-you-need">
                All The JavaScript You Need To Know For React
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>The Bottom Line: Ship Projects, Build Momentum, Beat the Game</h2>
          <blockquote>
            “This is just the beginning of what’s possible… The people who
            master this are the ones who recruiters chase, not the ones who hope
            for a reply.”
          </blockquote>
          <p>
            Here’s the truth most people can’t handle: Your degree is just the
            entry fee. Coding for users, surviving The Void, stacking tangible
            experience — THAT’S what turns you into an outlier everyone wants to
            hire.
          </p>
          <p>
            If you do only one thing today, make it this:{" "}
            <strong>Ship something for real users.</strong> Let it be ugly. Let
            it be buggy. Let it teach you what no course or YouTube guru ever
            will. Because the devs who learn this way? They don’t wait for their
            break. They <em>make</em> it.
          </p>
          <p>
            You have a choice. Keep grinding alone, or launch that tiny project
            right now and watch your learning (and your career) go atomic.
            Bookmark this, share it, and when you need motivation, come back.
            This is where your edge begins.
          </p>
        </section>

        <aside>
          <h2>Tweetable Moments</h2>
          <ul>
            <li>
              “Working on localhost is easy. Building for users is where 95% of
              the learning happens.”
            </li>
            <li>
              “Your first ugly deployed project will teach you more than 20
              Udemy courses.”
            </li>
            <li>
              “Stop grinding for experience—create it, even if no one is paying
              you (yet).”
            </li>
            <li>
              “Stay in The Void. Silence is just the sound of you crossing the
              filter where most people quit.”
            </li>
            <li>
              “Don’t confuse being busy with building momentum. Track your
              progress or risk losing your sanity.”
            </li>
            <li>
              “Real learning starts the moment a user asks, ‘Why is your app
              broken?’”
            </li>
            <li>
              “Ship first, polish later. Careers are built on momentum, not
              perfection.”
            </li>
          </ul>
        </aside>
        <CommentSection />
      </article>
    </div>
  );
}
