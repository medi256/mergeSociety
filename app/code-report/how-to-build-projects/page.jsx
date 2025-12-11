import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "How To Start Programming Projects The Lazy Way | Massa Medi",
  description:
    "Learn how to start programming projects without overthinking. Break through tutorial hell with practical strategies for beginners: MVP approach, project ideas, and lazy-but-smart techniques that actually work.",
  keywords: [
    "programming projects for beginners",
    "how to start coding projects",
    "tutorial hell",
    "MVP development",
    "beginner programming ideas",
    "coding project ideas",
    "learn to code",
    "software development for beginners",
    "resume projects",
    "web development projects",
    "JavaScript projects",
    "React projects",
    "Next.js projects",
    "project planning",
    "coding motivation",
    "escape tutorial hell",
    "programming tips",
    "beginner developer",
    "portfolio projects",
    "coding productivity",
  ],
  authors: [{ name: "Massa Medi", url: "https://www.instagram.com/mergesociety_/" }],
  creator: "Massa Medi",
  publisher: "Massa Medi",
  openGraph: {
    title:
      "How To Start Programming Projects The Lazy Way (Without Overthinking)",
    description:
      "Stop getting stuck before you start. Learn the lazy-but-smart method to pick ideas, break down projects, escape tutorial hell, and actually ship your first programming projects as a beginner.",
    url: "https://www.mergesociety.com/code-report/how-to-build-projects",
    siteName: "Merge Society",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-10-05T00:00:00.000Z",
    authors: ["Massa Medi"],
    images: [
      {
        url: "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp",
        width: 1200,
        height: 675,
        alt: "How To Start Programming Projects The Lazy Way",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How To Start Programming Projects The Lazy Way",
    description:
      "Break through tutorial hell and start coding real projects. Practical strategies for beginners: MVP approach, unique twists, and lazy-smart techniques that work.",
    images: [
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp",
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
    canonical: "https://www.mergesociety.com/code-report/how-to-build-projects",
  },
  category: "Programming",
  classification: "Software Development Education",
  other: {
    "article:section": "Programming & Web Development",
    "article:tag":
      "Beginner Programming, Tutorial Hell, Project Ideas, MVP, Web Development, JavaScript, React, Next.js",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Start Programming Projects The Lazy Way",
  description:
    "A practical guide for beginner programmers on how to start coding projects without overthinking. Covers project selection, MVP development, escaping tutorial hell, and actionable strategies to ship your first projects.",
  image:
    "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp",
  datePublished: "2025-10-05T00:00:00.000Z",
  dateModified: "2025-10-05T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Massa Medi",
    url: "https://www.instagram.com/mergesociety_/",
  },
  publisher: {
    "@type": "Person",
    name: "Massa Medi",
    url: "https://www.mergesociety.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mergesociety.com/code-report/how-to-build-projects",
  },
  keywords:
    "programming projects, beginner coding, tutorial hell, MVP, project ideas, web development, JavaScript, React, Next.js, coding tips",
  articleSection: "Programming & Web Development",
  wordCount: 4200,
  inLanguage: "en-US",
  about: [
    {
      "@type": "Thing",
      name: "Software Development",
    },
    {
      "@type": "Thing",
      name: "Programming Education",
    },
    {
      "@type": "Thing",
      name: "Web Development",
    },
  ],
  mentions: [
    {
      "@type": "Thing",
      name: "Minimum Viable Product (MVP)",
    },
    {
      "@type": "Thing",
      name: "Tutorial Hell",
    },
    {
      "@type": "Thing",
      name: "Next.js",
    },
    {
      "@type": "Thing",
      name: "React",
    },
    {
      "@type": "Thing",
      name: "JavaScript",
    },
  ],
  video: {
    "@type": "VideoObject",
    name: "How To Start Programming Projects The Lazy Way",
    description:
      "Video walkthrough of how to start programming projects as a beginner",
    thumbnailUrl:
      "https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp",
    uploadDate: "2025-10-05T00:00:00.000Z",
    embedUrl: "https://www.youtube-nocookie.com/embed/HdNypiphMRg",
  },
  howTo: {
    "@type": "HowTo",
    name: "How to Start Your First Programming Project",
    description:
      "Step-by-step guide for beginners to start and complete their first coding projects",
    step: [
      {
        "@type": "HowToStep",
        name: "Define Your Goal",
        text: "Decide if you want to learn, build a resume project, or create a business",
      },
      {
        "@type": "HowToStep",
        name: "Choose a Project Idea",
        text: "Pick an idea that matches your goal and interests, like a calculator, blog, or to-do app",
      },
      {
        "@type": "HowToStep",
        name: "Add a Unique Twist",
        text: "Make your project stand out with one unique feature or target audience",
      },
      {
        "@type": "HowToStep",
        name: "Break It Down",
        text: "Divide the project into tiny, manageable tasks",
      },
      {
        "@type": "HowToStep",
        name: "Build an MVP",
        text: "Focus on core features first before adding extras",
      },
      {
        "@type": "HowToStep",
        name: "Take Breaks",
        text: "Step away regularly to maintain productivity and solve problems better",
      },
    ],
  },
};

const HowToBuildProjects = () => {
  return (
    <div className="lesson-wrapper">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <header>
          <h1>How To Start Programming Projects The Lazy Way</h1>
          <Image
            src="/mergesociety/audio_1759676146278_odcup_iywxi3_pnjxjr.webp"
            alt="How To Start Programming Projects The Lazy Way"
            width={600}
            height={400}
            priority
          />

          <h2 className="project-info">
            <span className="project-title">
              <Link href={"https://www.instagram.com/mergesociety_/"}>
                Written by Massa Medi
              </Link>
            </span>
            <time className="project-date" dateTime="2025-10-5">
              | October 5, 2025
            </time>
          </h2>

          <p>
            So you want to start programming a project. Cool. I am proud of you.
            And also, yeah, you might not know how to start. That feeling where
            your brain freezes and you instantly invent 20 new chores so you do
            not have to open your editor - that one. Sounds like a good case of
            skill-ish. A lot of you have been asking me how to start a new
            programming project, so let me help you out without fluff, without
            fake hustle, and with the exact lazy method I actually use.
          </p>
        </header>

        <section aria-labelledby="why-starting-is-hard">
          <h2 id="why-starting-is-hard">Why You Do Not Start The Project</h2>
          <p>
            The problem is you do not know how to start the project. Why? You
            cannot talk to me in real time, right, so I am going to assume a few
            things based on how beginners usually get stuck. I have seen these
            play out countless times in my own DMs, comments, and in my own head
            when I first started. If you recognize yourself in any of these, do
            not be embarrassed. I was just like you, and honestly, most
            developers go through this stage.
          </p>

          <section>
            <p className="mt-6 text-sm sm:text-base">
              Prefer watching instead of reading? You can watch the full
              walkthrough below, or keep scrolling to read the complete article.
            </p>

            <div
              className="relative mt-3 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/HdNypiphMRg?si=6enNnyLA2xbpomho"
                title="How To Start Programming Projects The Lazy Way"
                loading="lazy"
                fetchPriority="high"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>

          <ul>
            <li>
              <h3>1. You are overthinking the project</h3>
              <p>
                Overthinking is like putting a brick on your own accelerator and
                wondering why the car screeches. You picture the final product,
                compare it to the best apps on the planet, and instantly decide
                your version will be trash. You then spend 3 hours researching
                frameworks you will never use and 0 minutes writing code. The
                truth is the first version is supposed to be ugly and
                half-baked. Your only job is to start, not to finish an
                award-winning build on day one. The brain loves to chase perfect
                and avoid progress, so we are going to cut that loop.
              </p>
            </li>
            <li>
              <h3>2. You do not know how to plan and execute</h3>
              <p>
                Planning feels mysterious when you have not done it much. You
                think planning means writing a 20-page spec and building a Gantt
                chart like you are running a space mission. It does not.
                Planning for an individual project is simply deciding the
                smallest next step and writing it down so you do not have to
                re-decide it every day. Execution then becomes checking off tiny
                steps. Divide and conquer is the whole vibe, not make a movie
                trailer in your head and then ghost your codebase.
              </p>
            </li>
            <li>
              <h3>3. You do not know how to program</h3>
              <p>
                This one is real. If you literally do not know the language, the
                syntax, or how to run a file, then of course starting feels like
                a wall. It is not a moral failure, it is just missing knowledge.
                When you try to build while learning the alphabet, you get
                frustrated and call yourself dumb. You are not dumb. You just
                need a few basics first so the project does not feel like a
                foreign planet. We will talk about how to handle this without
                doom-scrolling tutorial videos forever.
              </p>
            </li>
            <li>
              <h3>4. You do not have a project idea</h3>
              <p>
                Blank pages are terrifying. You open a new repo, name it
                something hopeful, and then stare at it like it owes you money.
                Without an idea, the first commit is just vibes. Picking an idea
                is a skill by itself, and the good news is it gets easier when
                you stop trying to invent the next billion dollar company on day
                one. We will fix this by finding ideas that match your goal,
                your interests, and your current level so you actually start and
                stay consistent.
              </p>
            </li>
            <li>
              <h3>
                5. You have skill issues and you are stuck in tutorial hell
              </h3>
              <p>
                Yeah, I said it. You watch a tutorial, feel smart, close it,
                forget everything, and then start another tutorial. That loop
                feels productive because you are absorbing information, but you
                are not building anything. This creates fake confidence and real
                paralysis. The only way out is to build something without
                pausing every 2 minutes to watch someone else type. It is
                uncomfortable for a week or two, then it clicks, and you never
                want to go back.
              </p>
            </li>
          </ul>

          <p>
            I am going to assume 80 percent of you are the last three reasons.
            Again, do not be embarrassed. I had issues starting projects too.
            These days I have the opposite problem - finishing them. When you
            have more experience, you will have those problems too, and that is
            a better problem to have. When I first started programming, I
            definitely felt the most overwhelmed at the start. Once I had
            something, anything, it got easier. It is just starting the project
            that feels like pushing a car uphill.
          </p>
        </section>

        <section aria-labelledby="start-with-idea">
          <h2 id="start-with-idea">
            We Start With The Idea - But Not The Unicorn Kind
          </h2>
          <p>
            We cannot start a project without an idea, right? Luckily for you, I
            have a video on project ideas if you are interested. Or you can
            check the greatest newsletter of all time, Sloth Bites. I hate. Yes,
            that is me both hyping it and roasting myself at the same time.
            Sloth Bites is where I drop ideas, frameworks, and spicy takes that
            help you get unstuck fast. If you like snack-sized prompts,
            job-ready tech stacks, and memes that roast over-engineering, that
            is the vibe.
          </p>

          <p>
            Finding a project idea can be as simple as solving a tiny problem
            you hit every day, or as complex as trying to create the next
            billion dollar company. The trap is a lot of beginners aim for the
            billion dollar company when they do not even know how to program
            yet. That is like trying to run a marathon in dress shoes because
            you saw someone on YouTube do it. Before we even start thinking of
            project ideas, answer this first: what is your goal for this
            project?
          </p>

          <div>
            <h3>Pick Your Goal First</h3>
            <ul>
              <li>
                <strong>Do you want to get better at programming?</strong>
                <p>
                  If yes, your project should force you to practice fundamentals
                  on repeat. That means lots of input-output, problem solving,
                  and feedback loops. You will aim for quick wins and short
                  builds. You will reuse patterns and avoid shiny frameworks
                  that hide the basics from you.
                </p>
              </li>
              <li>
                <strong>Do you want to put this project on your resume?</strong>
                <p>
                  Then the tech stack matters. The features matter. The repo
                  quality matters. You will pick tools that show up in real job
                  postings and make sure your project demonstrates the exact
                  skills those jobs hire for. Pretty simple logic: match the
                  job, increase odds.
                </p>
              </li>
              <li>
                <strong>
                  Do you want to turn this project into a business?
                </strong>
                <p>
                  Then you need something people actually want, plus a tiny
                  audience who will try it. You will focus on solving a painful
                  problem and shipping an MVP people can use in a week, not a
                  year. You will care about feedback, pricing, and iteration,
                  not 20 features no one asked for.
                </p>
              </li>
            </ul>
            <p>
              Your goal decides your project. The wrong goal with the wrong idea
              is why people stall for months. Align them and momentum shows up.
            </p>
          </div>

          <div>
            <h3>Match Your Interests So You Actually Finish</h3>
            <p>
              What do you like? Do you like making games? Cool, then build
              little game mechanics, not an entire MMORPG. Do you like AI?
              Great, then add one targeted AI feature to a simple app. What type
              of websites do you like using? E-commerce, dashboards, community
              sites, blogs, landing pages - whatever you actually enjoy clicking
              is what you will enjoy building. When your interest matches your
              build, you do not have to drag yourself back to the keyboard. You
              show up because you want to see it work.
            </p>
          </div>

          <div>
            <h3>If You Are Aiming For A Resume Project</h3>
            <p>
              Before you write a single line, look at real jobs. Not one job.
              Multiple jobs. Read the descriptions and write down the
              technologies they want. Circle the ones that show up the most
              across postings.
            </p>
            <ul>
              <li>
                Front-end roles might repeat React, TypeScript, Next.js, testing
                tools, and CSS frameworks.
              </li>
              <li>
                Back-end roles might repeat Node, Express, PostgreSQL, ORMs,
                Docker, and cloud basics.
              </li>
              <li>
                Data roles might repeat Python, pandas, SQL, visualization
                tools, and basic stats.
              </li>
            </ul>
            <p>
              Use those technologies in your project. If your project uses the
              stuff they ask for, you are more likely to get picked. Pretty
              simple. It is not about flexing the rarest tool. It is about
              aligning with what companies actually use.
            </p>
          </div>

          <div>
            <h3>If You Do Not Know Any Programming Yet</h3>
            <p>
              If you do not know a single thing about programming, focus on
              learning the language basics before forcing a project. That is not
              gatekeeping, that is pacing. Get comfortable with variables,
              functions, loops, conditionals, and data structures. Learn how to
              run code locally, print debug info, and read error messages
              without panicking. Give yourself 1 to 2 weeks of language reps,
              then pick a tiny project to lock it in.
            </p>
          </div>

          <p>
            Since you cannot talk back to me - thankfully - I am going to assume
            most of you want to get better at programming. So enough yap. Here
            is how I actually find and pick ideas you can start today.
          </p>
        </section>

        <section aria-labelledby="strategy-steal">
          <h2 id="strategy-steal">
            Strategy 1: Steal - I Mean, Take Inspiration
          </h2>
          <p>
            I need you to understand your project does not have to be
            groundbreaking. The goal of your project is to apply your skills in
            a practical way, not to change the world. You are here to learn how
            to code, to practice, and to ship. So look at projects that are
            commonly recommended to beginners on YouTube, in books, on learning
            platforms, and try to make them. Preferably without relying on the
            tutorial step-by-step. Because if you copy every keystroke, you will
            not learn to drive, you will just learn to watch someone else drive.
          </p>

          <div>
            <h3>Classic Starter Projects That Actually Teach You Things</h3>
            <ul>
              <li>
                <strong>Calculator</strong>
                <p>
                  It looks simple, but it forces you to handle user input,
                  state, and edge cases. You will write functions, parse
                  operations, and manage UI updates. Suddenly order of
                  operations matters, decimals matter, and you get a fun
                  debugging session for free. This is great JavaScript practice
                  and a perfect way to fight tutorial hell because the logic is
                  yours.
                </p>
              </li>
              <li>
                <strong>Simple Blog</strong>
                <p>
                  A blog gives you CRUD without the scary label. You will create
                  posts, read them, update them, and delete them. You will deal
                  with routing, forms, and maybe a database if you are ready.
                  You will learn how to structure a project and how to make
                  content flow. It is a classic for a reason.
                </p>
              </li>
              <li>
                <strong>To-do list</strong>
                <p>
                  Every web developer has made this at least once. It is
                  predictable in a good way. You will build a list, toggle
                  completion, filter tasks, and maybe persist them. That is
                  state management 101. You also get to practice layout,
                  components, and tiny UX touches like keyboard shortcuts and
                  validation.
                </p>
              </li>
            </ul>
            <p>
              Even though these projects are common, you will still learn a lot.
              But I get it - some of you want resume-worthy projects, and a
              plain to-do might not be enough. So let us make it stand out
              without reinventing the universe.
            </p>
          </div>
        </section>

        <section aria-labelledby="make-it-unique">
          <h2 id="make-it-unique">Make Your Project Unique With One Twist</h2>
          <p>
            Recruiters see thousands of applications. They see the same projects
            again and again. To stand out, you do not need 50 features. You just
            need one unique twist. We can take notes from real businesses. Most
            of them are similar to other businesses. The difference is one
            unique angle, one feature, one niche, or one audience that changes
            how people use it.
          </p>

          <div>
            <h3>Example: The To-do App With A Twist</h3>
            <p>
              Base version: a to-do app. Super basic. Nothing crazy. Every web
              dev has made it. How can we make it unique?
            </p>
            <ul>
              <li>
                <strong>Twist 1: AI to-do app</strong>
                <p>
                  It is a little less common, but it is getting more popular.
                  Add natural language input so a user can type, "Plan my week
                  with 4 workouts, 3 coding sessions, and 2 grocery runs," and
                  your app explodes that into tasks with dates. That alone
                  teaches you parsing, prompt design, and task generation.
                </p>
              </li>
              <li>
                <strong>Twist 2: AI to-do app for programmers</strong>
                <p>
                  This is a unique project. Same to-do core, but the audience is
                  engineers. Now your app can parse GitHub issues into tasks,
                  ingest commit messages to auto-complete the next steps, or tag
                  tasks by repo. You might integrate lint warnings as tasks or
                  auto-schedule time after each PR merge. Even though it is
                  still a to-do app, it stands out and you learn way more than a
                  tutorial clone.
                </p>
              </li>
            </ul>
            <p>
              Notice something: we kept the base app familiar and added one
              twist. One. That is all you need. Your twist can be the audience,
              the input method, the data source, or a small AI assist. Pick one,
              ship it, and you already look different.
            </p>
          </div>
        </section>

        <section aria-labelledby="lazy-start">
          <h2 id="lazy-start">
            How I Actually Start - The Lazy Way That Works
          </h2>
          <p>
            If you watch my past videos and my upload schedule, you know I am a
            pretty lazy person. So obviously I have a lazy way to start
            projects. But let me explain what I mean by lazy. When I say lazy, I
            do not mean brain rot or doing things sloppy. Most times when I say
            lazy, I am talking about working smarter, not harder. We here at
            Sloth Corporation encourage laziness as long as it saves time,
            reduces stress, and increases productivity. Lazy is a strategy, not
            an excuse.
          </p>

          <div>
            <h3>Step 1: Break It Down Into Tiny, Obvious Tasks</h3>
            <p>
              Like most things in programming, we break the work into small
              manageable tasks. That is problem solving. Divide and conquer.
              When you start a project, break it down based on what you already
              know. Use familiar ground to remove unknowns, then expand.
            </p>

            <div>
              <h4>Example: Starting The To-do App With Next.js</h4>
              <p>
                If I wanted to start this project, what do I know? Well, I
                unfortunately know JavaScript. I also know a little bit of
                Next.js, and the goal of this project is for me to learn Next.js
                better. So I start there. How about I start at the Next.js docs.
                Oh, I am so smart. Would you look at that - a get started guide.
              </p>
              <p>
                By thinking about what I know, I just reduced a lot of unknown
                variables. Now I am one step closer to starting. My first micro
                tasks might look like this:
              </p>
              <ul>
                <li>
                  Read the Next.js get started page for 10 minutes, no rabbit
                  holes.
                </li>
                <li>Run create-next-app to spin up a project.</li>
                <li>
                  Start the dev server and confirm the boilerplate renders.
                </li>
                <li>Create a tasks page and a TaskItem component.</li>
                <li>Add basic state for an array of tasks, hardcoded first.</li>
              </ul>
              <p>
                Five tiny steps and you are already coding. No need to design
                your logo or architect your database for 3 hours. Get the core
                screen up. Then iterate.
              </p>
            </div>
          </div>

          <div>
            <h3>Step 2: Use Templates Or Boilerplates - Yes, Seriously</h3>
            <p>
              Use templates or boilerplates. You heard me right - use
              boilerplate code. However, if you are completely new to a concept,
              do not use the boilerplate until you understand what it is doing.
              If you do understand the concepts, then feel free to use
              templates. They speed up everything and let you focus on the
              differentiators.
            </p>
            <blockquote>
              <p>
                Templates is cheating. My day we built everything from scratch.
              </p>
            </blockquote>
            <p>
              Shut up. Some people have problems with templates or boilerplate
              code. Are templates bad? No, definitely not. Why do you think we
              make them in the first place? A lot of developers like to be lazy
              and I am one of them. That is why we love templates. They speed up
              everything. Once again, this all depends on your project goals and
              experience.
            </p>
            <ul>
              <li>
                If your goal is to learn or you do not have much experience with
                this stack, a template might hide the things you need to learn.
                Build a basic version first.
              </li>
              <li>
                If your goal is a resume project or you already have experience
                with this stack, use a template. It will speed everything up so
                you can invest time in your unique twist.
              </li>
            </ul>
            <p>
              It is not going to kill you. As long as you understand most of the
              code, you will be fine.
            </p>
          </div>

          <div>
            <h3>Step 3: Aim For An MVP, Not A Masterpiece</h3>
            <p>
              A nice goal you should try to reach is an MVP. MVP stands for
              minimum viable product. What is an MVP, Sloth? It is the most
              basic version of your project. You are just focusing on the core
              essentials and nothing more. No feature creep. No procrastinating
              on random features. Hopefully just the essential stuff your
              project needs to work.
            </p>
            <p>For a to-do app, MVP is simple:</p>
            <ul>
              <li>Add a task</li>
              <li>Toggle a task complete</li>
              <li>Delete a task</li>
              <li>Persist tasks locally or in a simple DB</li>
            </ul>
            <p>
              Once you finish that, now you can work on other stuff. Filters,
              due dates, AI assist, user auth - whatever. MVP first, spice
              later.
            </p>
          </div>

          <div>
            <h3>Step 4: Take Regular Breaks - Touch Grass</h3>
            <p>
              My most important tip for any lazy person: take regular breaks.
              Yes, taking a break and touching grass will help you. I am not
              lying. If you take a short break, you are going to develop some
              brain cells, and when you go back to programming, it is going to
              feel easier. Walk, water, stretch, look far away, then come back
              and bulldoze the bug that was bullying you.
            </p>
          </div>
        </section>

        <section aria-labelledby="wrap-up">
          <h2 id="wrap-up">Wrap Up</h2>
          <p>
            So that is how you start: pick a goal, pick an idea that matches it,
            take inspiration without cloning, add one twist to stand out, start
            lazy by breaking it down, use templates when it fits your goal, hit
            MVP, and actually take breaks. Do that and you will stop circling
            the runway and finally take off. Keep the vibe simple. Keep the
            steps tiny. Keep shipping. Good luck with your projects, and I hope
            they fail.
          </p>

          <h3>Keep learning</h3>
          <ul>
            <li>
              <Link href="/projects">
                Here are some projects that you can build if your a beginner
              </Link>
            </li>
            <li>
              <Link href="/projects/htmlP">
                Here are some HTML Projects that you can Build
              </Link>
            </li>
            <li>
              <Link href="/projects/cssP">
                Here are some CSS Projects that you can Build
              </Link>
            </li>
            <li>
              <Link href="/projects/javascriptP">
                Here are some CSS Projects that you can Build{" "}
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default HowToBuildProjects;
