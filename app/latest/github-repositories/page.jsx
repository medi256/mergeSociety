import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "GitHub Repositories: 17 Must-See Open Source Projects That Will Level Up Your Coding",
  description:
    "Discover 17 essential GitHub repositories for developers. Learn algorithms, build projects, find free resources, and level up your programming skills with these hand-picked open source gems.",
  keywords: [
    "GitHub repositories",
    "open source projects",
    "programming tutorials",
    "coding resources",
    "software development",
    "algorithms",
    "free programming books",
    "developer tools",
    "system design",
    "machine learning",
    "web development",
    "coding practice",
    "developer career",
    "programming skills",
    "code learning",
  ],
  authors: [{ name: "Massa Medi", url: "https://www.instagram.com/mergesociety_/" }],
  creator: "Massa Medi",
  publisher: "Massa Medi",
  category: "Programming",
  classification: "Technology",
  openGraph: {
    title:
      "GitHub Repositories: 17 Must-See Open Source Projects That Will Level Up Your Coding",
    description:
      "Discover 17 essential GitHub repositories for developers. Learn algorithms, build projects, find free resources, and level up your programming skills.",
    url: "https://www.mergesociety.com/latest/github-repositories",
    siteName: "Merge Society",
    images: [
      {
        url: "https://img.mergesociety.com/mergesociety/audio_1755527219890_ndn0m6_qmhpsb_fcljoo.webp",
        width: 600,
        height: 400,
        alt: "A chill sloth mascot wearing headphones and coding - GitHub repositories guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GitHub Repositories: 17 Must-See Open Source Projects That Will Level Up Your Coding",
    description:
      "Discover 17 essential GitHub repositories for developers. Learn algorithms, build projects, find free resources, and level up your programming skills.",
    images: [
      "https://img.mergesociety.com/mergesociety/audio_1755527219890_ndn0m6_qmhpsb_fcljoo.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mergesociety.com/latest/github-repositories",
  },
  other: {
    "article:author": "Merge Society",
    "article:published_time": new Date().toISOString(),
    "article:modified_time": new Date().toISOString(),
    "article:section": "Programming",
    "article:tag": "GitHub, Open Source, Programming, Development, Coding",
  },
};

export default function GitHubRepositoriesArticle() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article data-slug="github-repositories" className="lesson-container">
        <h1>
          GitHub Repositories: 17 must-see open source projects that will level
          up your coding
        </h1>
        <p className="lede">
          Boo. Did I scare you? Good. Now that your heart rate is up, let me
          show you why GitHub is basically my favorite place on the internet and
          how a handful of killer repos can raise your skill ceiling, beef up
          your portfolio, and make your inner nerd ridiculously happy.
        </p>

        <section>
          <figure>
            <Image
              src="/mergesociety/audio_1755527219890_ndn0m6_qmhpsb_fcljoo.webp"
              alt="A chill sloth mascot wearing headphones and peeking from behind a laptop with GitHub stickers"
              width={600}
              height={400}
              priority
            />
            <figcaption>
              Visual vibe check - a cozy sloth mascot with more personality than
              your average toaster. Imagine it nodding like, yep, we code here.
            </figcaption>
          </figure>
          <p>
            If you’re brand new, here’s the cleanest way to think about it:
            GitHub is Google Drive for code - except it tracks every change you
            make, lets you rewind time, invites your teammates to poke at your
            work, and turns your personal project into something the entire
            world can learn from. It looks simple, but under the hood it’s magic
            for building software and careers.
          </p>
          <p>
            The scale is wild. Over 150 million developers hang out here. More
            than 420 million repositories live here. That’s 420 million
            codebases you can open, read, learn from, borrow ideas from, and
            sometimes even contribute to. Not just random hobby stuff either.
            Google, Microsoft, Meta, Netflix - the names you see on your phone
            every day - all have public code on GitHub. You can pop open a repo
            and peek at how massive teams solve real problems.
          </p>
          <p>
            The catch? Licenses. Most open source projects say exactly what you
            can and can’t do. Some let you remix freely. Some say you can use it
            for personal work but not sell it. Always check the LICENSE file in
            the repo before you copy code into your own project. Read it like
            your future self’s lawyer is looking over your shoulder.
          </p>
          <blockquote>
            Crazy I was crazy once, they locked me in a room - a rubber room
            with rats - and rats make me crazy. Anyway, back to GitHub.
          </blockquote>
          <p>
            Today we’re going repo hunting. You’re about to get a list of GitHub
            repositories that can teach you data structures, take you deep into
            system design, hand you real project ideas, and straight up save you
            money on your next app. I’m going to explain what each one is, why
            it’s worth your time, and exactly how to use it so you leave this
            page ready to build.
          </p>
        </section>

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
              src="https://www.youtube-nocookie.com/embed/cgOPg5cCr2g?si=JSCm923a0R-QdTzZ"
              title="GitHub Repositories: 17 Must-See Open Source Projects That Will Level Up Your Coding"
              loading="lazy"
              fetchPriority="high"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2>Why GitHub is a goldmine for developers</h2>
          <p>
            Think about what you need to grow as a developer: working examples,
            clean patterns, chances to practice, feedback on your code, and a
            way to show proof that you know your stuff. GitHub gives you all of
            that in one place.
          </p>
          <ul>
            <li>
              Learn from the best by reading code from real teams - filter by
              stars, open issues, and commit history to find active, healthy
              projects.
            </li>
            <li>
              Track your progress with commits and pull requests - your history
              becomes your resume.
            </li>
            <li>
              Collaborate without chaos - branches, reviews, and issues keep
              things sane even when you’re shipping fast.
            </li>
            <li>
              Grow your reputation - even tiny contributions to known projects
              teach you a ton and show up on your profile.
            </li>
          </ul>
          <p>
            When a video says look at this, what you’d see on screen is someone
            clicking a repo, opening the README, scrolling through examples, and
            then diving into the source folder to read the logic. In text form,
            think: README first, code second, issues for context, pull requests
            for history. That’s your navigation pattern.
          </p>
        </section>

        <section>
          <h2>Awesome Lists - your curated gateway to any tech topic</h2>
          <p>
            Awesome Lists aren’t one repo - they’re a style of repo. Search
            GitHub for awesome plus a topic and you’ll find a human-curated list
            of resources that someone already vetted. Example searches: awesome
            python, awesome computer science, awesome machine learning. Inside
            each one you’ll see categories like tutorials, tools, sample
            projects, books, videos, and newsletters. Someone else did the
            digging so you can start with the good stuff.
          </p>
          <p>
            Why this matters: when you’re starting something new, you don’t know
            what you don’t know. Awesome Lists give you a map. You can pick one
            resource from each category to get quick wins without drowning. It’s
            like having a senior engineer hand you a starter pack.
          </p>
          <p>
            Story time: I once needed to wire up vector search for a demo in 48
            hours with zero prep. I searched awesome vector databases, skimmed
            the list, picked two guides and one small sample repo, and had a
            working prototype by the next morning. No rabbit hole, no chaos.
            Just a clean path.
          </p>
          <aside aria-label="Link note">
            <p>
              Tip: Start at the general Awesome meta-list - it links out to
              hundreds of topic-specific awesome lists so you can bounce between
              subjects without losing your place.
            </p>
          </aside>
        </section>

        <section>
          <h2>
            The Algorithms - every classic algorithm coded in many languages
          </h2>
          <p>
            If you’re learning data structures and algorithms or prepping for
            interviews, The Algorithms is a jackpot. It collects tons of
            algorithms coded in popular languages like Python, Java, C, C++, Go,
            JavaScript, and more. You’ll find classics like binary search and
            BFS, but also ciphers, computer vision tricks, compression methods,
            and even electronics-related logic.
          </p>
          <p>
            The best part is how many files include clear comments. You can read
            line by line and see why each step exists. If recursion still feels
            like wizardry, watching the call stack play out in code is the
            fastest way to make it click.
          </p>
          <p>How to use it:</p>
          <ul>
            <li>
              Pick an algorithm you want to learn - say, Dijkstra’s shortest
              path.
            </li>
            <li>
              Read the code in a language you know, then rewrite it in a
              language you are learning. Force your brain to translate the
              logic.
            </li>
            <li>
              Add print statements for small inputs and trace what happens. Then
              remove them and try a bigger input.
            </li>
            <li>
              Last step - close the tab and code it from memory. Even if it’s
              messy, you’ll seal the knowledge in.
            </li>
          </ul>
          <p>
            Story: Before a systems interview, I rebuilt BFS in Go from their
            Python file. My first version was chaotic - I forgot to mark visited
            nodes early and looped forever. After comparing side by side, I
            fixed it and then wrote a tiny test with a toy graph. On interview
            day, BFS was a calm 5-minute warmup instead of a panic moment.
          </p>
        </section>

        <aside aria-label="Sponsor - Code Rabbit">
          <h2>
            Code Rabbit - AI code reviews that actually help you ship faster
          </h2>
          <p>
            Code reviews can be slow. You wait days for feedback on small
            changes while your teammate tries to read your spaghetti. Code
            Rabbit cuts that dead time. It reviews your pull requests using AI
            that reads your whole codebase context and flags bugs, security
            problems, and anti-patterns. You get comments, suggestions, and even
            one-click fixes.
          </p>
          <p>
            Don’t love a suggestion? Chat with it to ask for a different
            approach or open an issue directly. You can also set your own
            project rules so it follows your style guide. It works with GitHub,
            GitLab, Bitbucket, and Azure DevOps. Setup is basically two clicks.
          </p>
          <ul>
            <li>Teams ship PRs around 4x faster with fewer bugs.</li>
            <li>
              Over 10 million pull requests reviewed across 1 million repos.
            </li>
            <li>
              Trusted by 5,000+ companies. Even the Linux Foundation uses it.
            </li>
            <li>Free for open source projects.</li>
          </ul>
          <p>Quick start:</p>
          <ol>
            <li>Install Code Rabbit from the marketplace for your repo.</li>
            <li>
              Trigger a pull request - watch it add review comments in seconds.
            </li>
            <li>Use one-click fixes or ask it to try a different change.</li>
          </ol>
          <p>
            Want to try it on your project or an open source repo you maintain?
            Hit the link in the description and go ship something great.
          </p>
        </aside>

        <section>
          <h2>Build Your Own X - learn by building the tools we all use</h2>
          <p>
            This repo is a gem because it gives you real projects with real
            depth. The idea is simple: want to become a better programmer? Build
            smaller versions of the tools you use every day. You get guides for
            making a Git-like system, a tiny database, an operating system, a
            programming language, a blockchain, even an emulator or virtual
            machine. Yes, the emulator one is as cool as it sounds.
          </p>
          <p>
            These aren’t hello world tutorials. These guides take you under the
            hood. You’ll learn why Git’s data model uses trees and hashes, how
            databases handle writes without corrupting data, how a VM schedules
            instructions, and why a language’s parser gets picky about
            whitespace. This is the path from copying code to understanding it.
          </p>
          <p>A simple learning arc you can follow:</p>
          <ul>
            <li>
              Start with Build a Git in your language of choice - learn hashing,
              commits, branches, and diffs by coding a tiny version.
            </li>
            <li>
              Move to a toy database - code a log-structured store, add
              indexing, then write a small query engine.
            </li>
            <li>
              Tackle a programming language - write a lexer, parser, and
              interpreter. Type checking is a bonus round.
            </li>
            <li>
              Take on an emulator or VM - draw pixels to a buffer and watch your
              code boot a simple ROM. Brain fireworks.
            </li>
          </ul>
          <p>
            Story: A friend followed the database guide and built a tiny
            key-value store in Rust, then added a write-ahead log to avoid data
            loss. That one side project turned into three interviews where they
            talked through tradeoffs in storage engines. Offers followed.
          </p>
          <aside aria-label="Extra resource note">
            <p>
              The folks behind this repo also built CodeCrafters - a guided
              platform with hands-on tracks for building these systems end to
              end. Not sponsored here, but if you want a structured path with
              tests and milestones, it’s a solid way to hold yourself
              accountable.
            </p>
          </aside>
        </section>

        <section>
          <h2>Free For Dev - save serious money on your next project</h2>
          <p>
            Free For Dev is a living list of platforms and services that are
            free or have generous free tiers. We’re talking databases, auth,
            hosting, monitoring, analytics, email, storage, and more. If you’re
            building a side project, a demo for your portfolio, or a startup
            MVP, this repo can keep your costs at zero while you figure things
            out.
          </p>
          <p>How to use it:</p>
          <ul>
            <li>
              Pick your app’s shape - static site, server backend, or both.
            </li>
            <li>
              Choose one provider per category - hosting, data layer, auth, and
              monitoring.
            </li>
            <li>
              Note rate limits and free tier caps so you don’t get surprise
              bills.
            </li>
            <li>Set reminders to review usage monthly as you grow.</li>
          </ul>
          <p>
            Story: I shipped a small app using a free Postgres tier, an email
            service with 1000 free sends per month, and a static host with CDN
            baked in. Zero dollars until user 1,000. That cash saved bought time
            to improve the product instead of worrying about invoices.
          </p>
          <p>
            Warning: some free tiers ask for a card. Read the terms, set usage
            limits where possible, and keep a lightweight budget doc. Future you
            will thank you.
          </p>
        </section>

        <section>
          <h2>
            Free Programming Books - books, cheat sheets, and courses in many
            languages
          </h2>
          <p>
            This repo is exactly what it sounds like - tons of programming books
            organized by language and subject. It also covers human languages,
            so whether you’re reading in English, Spanish, Russian, or beyond,
            there’s likely something for you. Plus, it includes cheat sheets,
            free online courses, interactive coding sites, problem sets, and
            even podcasts.
          </p>
          <p>How to get value fast:</p>
          <ul>
            <li>Pick one book for depth and one cheat sheet for quick wins.</li>
            <li>
              Skim the table of contents and set tiny goals like one chapter per
              week.
            </li>
            <li>
              Pair reading with a GitHub repo where you code the exercises.
              Commit your progress. It sticks better.
            </li>
            <li>
              Swap in an interactive course when your brain gets tired -
              momentum over perfection.
            </li>
          </ul>
          <p>
            Story: A junior dev I mentored worked through Eloquent JavaScript
            while building a tiny game in a repo. By chapter 5, they refactored
            their code using higher-order functions and cut hundreds of lines.
            Hiring manager saw the commit history and said yes on the spot.
          </p>
        </section>

        <section>
          <h2>
            Rapid-fire picks - more GitHub repositories that punch above their
            weight
          </h2>
          <p>
            You asked for quick hits. I’ll explain each in a few words, then
            slip in how to actually use them so this list turns into action, not
            just bookmarks.
          </p>

          <section>
            <h3>roadmap.sh - career and tech roadmaps</h3>
            <p>
              What it is: Step-by-step roadmaps for front end, back end, DevOps,
              AI, and a bunch of other tracks. Clear diagrams with topics and
              links.
            </p>
            <p>
              How to use: Print or save the path for your goal role, then turn
              each node into a small GitHub issue in your learning repo. Close
              issues as you learn. It feels good and keeps you moving.
            </p>
            <p>
              Story: Following the backend roadmap, a student set weekly tasks
              like build a REST API, add caching, then learn queues. In 8 weeks,
              they had a portfolio app that looked like real work.
            </p>
          </section>

          <section>
            <h3>Computer Science - a full CS education for free</h3>
            <p>
              What it is: A path that mirrors a university CS program using free
              resources. You’ll cover math, algorithms, systems, networking, and
              more.
            </p>
            <p>
              How to use: Treat it like semesters. Pick 3 subjects at a time,
              set study hours, and build a tiny project for each unit so you
              apply what you learn immediately.
            </p>
            <p>
              Story: One self-taught dev followed this plan, then built a toy
              compiler as their capstone. They landed a job on a tools team
              without a degree.
            </p>
          </section>

          <section>
            <h3>Engineering Blogs - learn from teams in the trenches</h3>
            <p>
              What it is: A curated list of company engineering blogs. You get
              real-world lessons on scaling, incidents, patterns, and tradeoffs.
            </p>
            <p>
              How to use: Pick one blog per week. Summarize one article in your
              notes and add a code demo that applies the idea. When you
              interview, you’ll have proof you can turn ideas into code.
            </p>
            <p>
              Story: After reading a post about idempotency keys, a developer
              added them to their checkout service and stopped duplicate
              charges. Friday went from firefight to chill.
            </p>
          </section>

          <section>
            <h3>System Design Primer - systems thinking for developers</h3>
            <p>
              What it is: A friendly intro to system design concepts like
              sharding, load balancing, caching, consistency, and queues, plus
              practice questions.
            </p>
            <p>
              How to use: Pick a common design prompt - design a URL shortener -
              and walk through each section. Then code a tiny version with a
              database, cache, and background worker.
            </p>
            <p>
              Story: One candidate sketched a rate limiter from memory after
              reading the primer and landed an offer because they explained
              tradeoffs clearly.
            </p>
          </section>

          <section>
            <h3>Public APIs - plug-and-play data for your next build</h3>
            <p>
              What it is: A list of public APIs organized by category - weather,
              finance, games, health, and more.
            </p>
            <p>
              How to use: Pick one API, read rate limits, and build a small app
              in a weekend. Pro tip: add caching and a retry policy so your app
              feels snappy even when the API blinks.
            </p>
            <p>
              Story: A student built a travel planner using flight and weather
              APIs, then wrote a short blog post. Recruiters loved that it mixed
              data sources with clean UX.
            </p>
          </section>

          <section>
            <h3>Open Source Alternatives - swap pricey SaaS for open tools</h3>
            <p>
              What it is: A directory of open source tools that replace common
              SaaS products - analytics, project management, CMS, and more.
            </p>
            <p>
              How to use: For each tool you consider, check the license, star
              count, and release history. Run a quick local demo before you
              commit. Know your migration path if you outgrow it.
            </p>
            <p>
              Story: A small startup replaced a $300 per month analytics bill
              with an open source stack and put the savings into user research.
              Conversion went up.
            </p>
          </section>

          <section>
            <h3>Papers We Love - read CS papers without getting lost</h3>
            <p>
              What it is: A community list of computer science papers plus
              guidance on how to read them and where to find more.
            </p>
            <p>
              How to use: Start with a classic like The Google File System or
              Raft. Read with a buddy, pause after each figure, and rewrite the
              idea in plain language. Then code a tiny experiment that shows the
              core idea.
            </p>
            <p>
              Story: Reading the Raft paper and coding a toy leader election
              made distributed systems feel less like sorcery and more like
              steps you can follow.
            </p>
          </section>

          <section>
            <h3>
              Best Websites a Programmer Should Visit - handpicked bookmarks
            </h3>
            <p>
              What it is: A list of sites worth visiting for learning, practice,
              and inspiration.
            </p>
            <p>
              How to use: Pick three - one for daily practice, one for reading,
              one for tools. Add them to a bookmarks folder called Daily Fuel.
              Treat it like a gym plan for your brain.
            </p>
            <p>
              Story: Doing 15 minutes a day on a practice site led to a weekly
              habit that kept one developer sharp between projects.
            </p>
          </section>

          <section>
            <h3>LLMs From Scratch - build your own tiny ChatGPT</h3>
            <p>
              What it is: A step-by-step tutorial repo for coding a small
              large-language-model from the ground up. You learn tokenization,
              attention, training loops, and more by coding each part yourself.
            </p>
            <p>
              How to use: Work through one chapter at a time and write down what
              each tensor shape means. Train on a small dataset first so you can
              iterate fast. Then scale up after it works.
            </p>
            <p>
              Story: After coding a tiny transformer, a dev finally understood
              why context windows matter and stopped treating model prompts like
              black magic.
            </p>
          </section>

          <section>
            <h3>ML From Scratch - core machine learning, coded by you</h3>
            <p>
              What it is: A repo where you code classic ML models like linear
              regression, k-means, and small neural nets from square one.
            </p>
            <p>
              How to use: For each model, draw the math on paper, then code the
              training loop. Plot loss over time so you see learning happen. Add
              regularization and watch it fix overfitting.
            </p>
            <p>
              Story: Writing backprop by hand is painful and beautiful. After
              you do it once, every framework you use makes more sense.
            </p>
          </section>

          <section>
            <h3>Made With ML - shipping ML like real software</h3>
            <p>
              What it is: A set of resources that teach you how to mix machine
              learning with software engineering practices. Think experiments,
              testing, deployment, and monitoring for models.
            </p>
            <p>
              How to use: Pick one project idea and follow their guidance to
              move from notebook to service. Add tests for data drift. Log
              predictions. Set up a feedback loop.
            </p>
            <p>
              Story: A team followed this approach and cut their model outage
              time in half because they finally treated models like production
              code, not science experiments.
            </p>
          </section>
        </section>

        <aside aria-label="Newsletter">
          <h2>Merge Society - your weekly programming fuel</h2>
          <p>
            Quick plug while the sloth nods approvingly. Merge Society is my
            free weekly newsletter packed with practical programming tips, tiny
            code snippets, and real talk about learning faster. It’s free. Toss
            in your email, get smarter on Saturdays. No spam, just snacks for
            your brain.
          </p>
        </aside>

        <section>
          <h2>How to get the most out of these GitHub repositories</h2>
          <p>
            Reading is nice. Building is better. Here’s a simple routine to turn
            repos into skills:
          </p>
          <ul>
            <li>
              Pick one repo and one goal per week. Keep the scope small so you
              win early.
            </li>
            <li>
              Fork it or create a fresh repo for your notes and experiments.
            </li>
            <li>
              Open issues for tasks like read chapter 1, rewrite Dijkstra in Go,
              or deploy the sample app.
            </li>
            <li>
              Share a tiny write-up in your README for each milestone. You’ll
              thank yourself later.
            </li>
            <li>
              Ask questions in the repo’s discussions or issues. Be polite, show
              what you tried, and you’ll often get gold back.
            </li>
          </ul>
          <p>
            And remember the open source rule: licenses matter. If you plan to
            copy or ship code, read the LICENSE file. When in doubt, ask or link
            back.
          </p>
        </section>

        <section>
          <h2>Visual cues you would have seen in the video</h2>
          <ul>
            <li>
              A quick search bar demo on GitHub for awesome python - on screen
              you’d see the main Awesome list with a giant table of contents,
              each entry linking to deep resources.
            </li>
            <li>
              A repo page for The Algorithms - folders by language, then folders
              by topic like sorting or graphs, with code files and comments.
            </li>
            <li>
              Code Rabbit review comments on a pull request - the UI shows
              inline comments, suggested changes, and a button to apply the fix.
            </li>
            <li>
              Build Your Own X README - a long index of build guides like
              database, Git, OS, VM, each linking to articles and tutorials.
            </li>
            <li>
              Free For Dev table - categories on the left, service names on the
              right, with little notes on limits and features.
            </li>
          </ul>
        </section>

        <section>
          <h2>Final words - go touch code</h2>
          <p>
            I could keep going - GitHub is a universe. But this list is enough
            to level you up if you pick even two and stick with them for a
            month. You’ll learn faster than you expect, and you’ll have a trail
            of commits to prove it.
          </p>
          <p>
            If you already knew half of these, congrats. I didn’t ask, but I’m
            still proud. Drop your favorite repos in the comments so we can all
            steal your good ideas. If you want a separate deep dive on open
            source alternatives to paid tools, say the word - there are so many
            good ones that deserve a spotlight.
          </p>
          <p>Now go star a repo, open a tab, and build something. Boom.</p>
        </section>

        <aside aria-label="Internal linking ideas">
          <h3>Related topics to link next</h3>
          <ul>
            <li>
              <Link href="/latest/git-explained">Learn the basics of Git</Link>
            </li>
            <li>
              <Link href="/latest/full-stack-developer-roadmap">
                Full Stack Developer Roadmap 2025
              </Link>
            </li>
            <li>
              <Link href="/latest/learn-web-development-2025">
                How to Learn Web Development in 2025
              </Link>
            </li>
            <li>
              <Link href="/latest/c-vs-cpp-vs-csharp">C vs C++ vs C#</Link>
            </li>
          </ul>
        </aside>

        <p>
          Written with equal parts caffeine, curiosity, and sloth energy. See
          you in the repos.
        </p>
      </article>
    </div>
  );
}
