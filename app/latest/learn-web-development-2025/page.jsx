import React from "react";
import Link from "next/link";
import Image from "next/image";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Learn Web Development in 2025: The Complete No-Noise Roadmap",
  description:
    "Skip tutorial hell. Learn HTML, CSS, JavaScript, React, and backend basics with a project-based approach that gets you shipping real apps fast. Complete 2025 web dev roadmap.",
  keywords: [
    "web development 2025",
    "learn web development",
    "HTML CSS JavaScript tutorial",
    "React tutorial for beginners",
    "frontend developer roadmap",
    "web development projects",
    "JavaScript projects",
    "Next.js tutorial",
    "full stack development",
    "web developer career",
  ],
  authors: [{ name: "Massa Medi", url: "https://www.instagram.com/medi45.of" }],
  creator: "Massa Medi",
  publisher: "Massa Medi",

  openGraph: {
    type: "article",
    title: "Learn Web Development in 2025: The Complete No-Noise Roadmap",
    description:
      "Skip tutorial hell. Project-based learning path to become a web developer fast. HTML, CSS, JS, React, databases, and deployment.",
    url: "https://www.mergesociety.com/latest/learn-web-development-2025",
    siteName: "Merge Society",
    images: [
      {
        url: "/mergesociety/audio_1755493130168_mnninx_bbda8r_hyq10u.webp",
        width: 1200,
        height: 630,
        alt: "Learn Web Development in 2025 - Complete Roadmap",
      },
    ],
    publishedTime: "2025-08-18T00:00:00.000Z",
    modifiedTime: "2025-08-18T00:00:00.000Z",
    tags: ["web development", "programming", "tutorial", "JavaScript", "React"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn Web Development in 2025: Complete Roadmap",
    description:
      "Project-based learning path to become a web developer. Skip tutorial hell, build real projects.",
    images: [
      "/mergesociety/audio_1755493130168_mnninx_bbda8r_hyq10u.webp",
    ],
  },

  other: {
    "article:author": "Massa Medi",
    "article:published_time": "2025-08-18T00:00:00.000Z",
    "article:modified_time": "2025-08-18T00:00:00.000Z",
    "article:section": "Web Development",
    "article:tag": "web development, JavaScript, React, tutorial",
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
    canonical: "https://www.mergesociety.com/latest/learn-web-development-2025",
  },

  category: "Technology",
};

export default function LearnWebDevelopment2025Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="lesson-container"
      >
        <h1 itemProp="headline">
          Learn Web Development in 2025: The no-noise roadmap I wish I had on
          day one
        </h1>

        <Image
          src={
            "/mergesociety/audio_1755493130168_mnninx_bbda8r_hyq10u.webp"
          }
          alt="Learn Web Development in 2025 Article Image"
          width={600}
          height={400}
          priority
        />

        <aside aria-label="Page meta">
          <h2 className="project-info">
            <span className="project-title">
              <Link href={"https://www.instagram.com/medi45.of"}>
                Written by Massa Medi
              </Link>
            </span>
            <time className="project-date" dateTime="2025-08-18">
              | August 18, 2025
            </time>
          </h2>
        </aside>

        <p>
          If I had to start from zero in 2025, I would not touch a framework on
          day one. I would not binge 40 hours of tutorials without building
          anything. I would not copy paste random code from StackOverflow hoping
          it magically works. I would take a different route, one that actually
          gets you shipping projects fast and makes everything else click later.
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
              src="https://www.youtube-nocookie.com/embed/uRRKVif4D5c?si=PovrENtaDCqQ9ZbW"
              title="Learn Web Development in 2025 - Complete Roadmap"
              loading="lazy"
              fetchPriority="high"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="foundations">
          <h2 id="foundations">
            HTML, CSS, and JavaScript foundations - the unskippable core
          </h2>
          <p>
            Most beginners jump straight into Angular, React, or Next.js and get
            stuck because everything feels like black magic. The truth:
            frameworks are power tools, but they assume you already speak the
            language of the web. So the first move is to lock in your
            foundations. Not tutorial hell. Not code golf. Real, tiny projects
            that force your hands on the keyboard and your brain into
            problem-solving mode.
          </p>

          <h3>What this looks like in practice</h3>
          <ul>
            <li>
              Build a personal homepage with only HTML and CSS. No frameworks,
              no Tailwind, no CSS libraries. Just semantic tags, layout,
              typography, and a clean structure. Aim for a hero section, about
              section, projects grid, and a contact link.
            </li>
            <li>
              Build a simple to-do list in plain JavaScript. Add, toggle, and
              delete items. Save to localStorage so it persists on refresh.
              Bonus points for keyboard accessibility and a dark mode toggle.
            </li>
            <li>
              Create a single-page portfolio with anchor links that scroll to
              sections. Add a sticky nav. Make it responsive without any JS.
              Learn Flexbox and Grid by actually using them.
            </li>
          </ul>

          <h3>Why tiny projects work</h3>
          <p>
            Small projects are finishable. When you finish, you learn the entire
            cycle: planning, building, getting stuck, unsticking yourself, and
            polishing. That builds confidence and muscle memory. A homepage
            teaches semantic HTML and CSS layout. A to-do app teaches DOM
            events, state in memory, and data persistence. A portfolio teaches
            navigation, responsive design, and accessibility basics. Five
            minutes after shipping one small win, you want another. That
            momentum is how you learn fast.
          </p>

          <h3>Story: my first all-HTML homepage</h3>
          <p>
            Picture a blank page and a blinking cursor. I started with a single
            index.html file and wrote a headline: Hello, web. Then I added a
            short bio, some links, and a projects list. It looked ugly. So I
            added a CSS file and tried Flexbox. Things snapped into place. I
            swapped a div for a header, a section for a div, and a footer at the
            bottom. Suddenly the structure made sense. That one page taught me
            more about the web than a week of passive watching ever did.
          </p>

          <h3>Starter HTML and CSS you should type from scratch</h3>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>My 2025 Homepage</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Hi, I'm Alex</h1>
      <p>Frontend dev in training. Building something small every day.</p>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>

    <main>
      <section id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <ul class="grid">
          <li><a href="#">To-do in Vanilla JS</a></li>
          <li><a href="#">Weather App</a></li>
        </ul>
      </section>

      <section id="about" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>I build small apps and ship them live. One week at a time.</p>
      </section>
    </main>

    <footer>
      <small>© 2025 Alex Codehead</small>
    </footer>
    <script src="app.js" defer></script>
  </body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`/* styles.css */
:root {
  --bg: #0b0f14;
  --text: #e8eff8;
  --muted: #9fb3c8;
  --accent: #7cdaed;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--text);
  background: radial-gradient(1000px circle at 10% -20%, #12202d, var(--bg));
}
header, main, footer { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
nav a { margin-right: 1rem; color: var(--muted); text-decoration: none; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.grid li { padding: 1rem; border: 1px solid #1d2a38; border-radius: 12px; }`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            If this already looks familiar, great. If it feels new, even better.
            This is the bedrock. With it in place, everything you meet later in
            React or Next.js stops feeling like sorcery and starts feeling like
            a natural extension of what you already know.
          </p>
        </section>

        <section aria-labelledby="modern-js">
          <h2 id="modern-js">
            Modern JavaScript in 2025 - promises, async, and ES6 that actually
            make sense
          </h2>
          <p>
            Old school, we grabbed jQuery for everything. In 2025 you do not
            need it. Browser APIs are strong enough that vanilla JS is a
            superpower by itself. Your job is to really understand how promises
            work, why async and await feel so nice, and what ES6 features like
            let, const, arrow functions, template literals, destructuring, and
            modules actually do in the wild.
          </p>

          <h3>Example: fetch data and render to the DOM</h3>
          <p>
            Imagine a tiny weather widget at the top of your homepage. No
            library. Just fetch, async functions, and a pinch of DOM work. You
            ask an API for data, wait for the response, handle errors
            gracefully, and then paint the result in the page. That one skill
            unlocks dashboards, blogs, product lists, and anything that pulls
            data from an API.
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// app.js
const weatherEl = document.querySelector("#weather");

async function loadWeather(city = "Berlin") {
  try {
    weatherEl.textContent = "Loading...";
    const res = await fetch(\`https://api.example.com/weather?city=\${city}\`);
    if (!res.ok) throw new Error("Failed to load weather");
    const data = await res.json();
    weatherEl.innerHTML = \`
      <strong>\${data.city}</strong>: \${Math.round(data.temp)}°C
      <span style="color:#9fb3c8">(\${data.description})</span>
    \`;
  } catch (err) {
    weatherEl.textContent = "Could not load weather. Try again later.";
    console.error(err);
  }
}

loadWeather();`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            That is not just syntax. That is real app energy. Once you can fetch
            and render with confidence, you stop fearing APIs. You also start to
            see how state flows through your UI and how to keep your code tidy
            by splitting logic into small functions and modules.
          </p>

          <h3>Story: goodbye jQuery, hello native</h3>
          <p>
            I used to reach for jQuery like it was oxygen. In 2025, I reach for
            document.querySelector, fetch, classList, and IntersectionObserver.
            I built a small infinite scrolling list with zero libraries and it
            felt shocking at first. But it worked great, was small, and loaded
            fast. Native APIs have grown up. Learn them and watch your
            confidence go through the roof.
          </p>
        </section>

        <section aria-labelledby="frameworks">
          <h2 id="frameworks">
            Pick one frontend framework and ship a real project
          </h2>
          <p>
            React is still everywhere, but it is not the only game in town. Vue
            and Svelte are excellent too. The trick is to pick one and stick
            with it until you can ship something real. A blog with Next.js. A
            small ecommerce site. A dashboard for your own fitness data.
            Dabbling in five frameworks teaches you almost nothing. Going deep
            in one teaches you how all of them think, because the core ideas are
            shared: components, state, props, and routing.
          </p>

          <h3>Concrete plan: one framework to shipped in 4 weeks</h3>
          <ul>
            <li>
              Week 1 - Basics: create a project, understand file structure,
              build a few components, pass props, add state, and make a form.
            </li>
            <li>
              Week 2 - Data: fetch from a public API, load data on the page,
              handle loading and error states, add client-side routing.
            </li>
            <li>
              Week 3 - Features: add search, pagination, and a details page.
              Focus on moving data through components cleanly.
            </li>
            <li>
              Week 4 - Polish and ship: add SEO tags, a nice design, responsive
              tweaks, and deploy live with a custom domain.
            </li>
          </ul>

          <h3>Example: a tiny Next.js blog component</h3>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// components/PostCard.jsx
export function PostCard({ post }) {
  return (
    <article>
      <h3><a href={"/posts/" + post.slug}>{post.title}</a></h3>
      <p>{post.excerpt}</p>
      <small>{new Date(post.date).toLocaleDateString()}</small>
    </article>
  );
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            That is the vibe. Small, readable, and focused. When you understand
            components and how they compose, frameworks stop being scary and
            start being fun. After you ship one project with React or Vue or
            Svelte, picking up the others becomes much easier because the mental
            model carries over.
          </p>
        </section>

        <section aria-labelledby="backend-basics">
          <h2 id="backend-basics">
            Backend basics in 2025 - just enough Node.js to be dangerous
          </h2>
          <p>
            You do not need to become a backend wizard to get moving. I cast
            Fireball Fireball. But you should know enough to build and talk to
            APIs, save data, and handle authentication. That means some Node.js
            with Express or, even simpler if you are in Next.js, API routes.
          </p>

          <h3>Two ways to ship a tiny API</h3>
          <p>Option A - Express server with one endpoint:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// server.js
import express from "express";
const app = express();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json([{ id: 1, text: "Hello from Express" }]);
});

app.listen(3001, () => console.log("API on http://localhost:3001"));`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Option B - Next.js API route in pages/api/notes.js:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json([{ id: 1, text: "Hello from Next API" }]);
  }
  if (req.method === "POST") {
    // Save a note...
    return res.status(201).json({ ok: true });
  }
  return res.status(405).end();
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            The goal is not to architect the perfect system. The goal is to
            learn by building: a notes app where you log in, create notes, edit
            them, and save them. You will touch real concepts like HTTP methods,
            JSON payloads, validation, and auth flows without drowning in
            theory.
          </p>

          <h3>Auth without the headache</h3>
          <p>
            In 2025, you can add sign in fast using providers like NextAuth,
            Supabase Auth, or Firebase Auth. You get email and password,
            socials, session handling, and guards on routes with a few lines.
            That is enough to make your app feel real in front of an employer or
            a client.
          </p>
        </section>

        <section aria-labelledby="databases">
          <h2 id="databases">
            Databases in 2025 - Supabase, PlanetScale, or Firebase to move fast
          </h2>
          <p>
            Databases scare beginners. You picture terminals, cryptic commands,
            and a weekend lost to setting up MySQL locally. Good news: you can
            skip that pain at the start. Hosted tools like Supabase,
            PlanetScale, and Firebase let you spin up a database in minutes and
            connect it straight to your app. That is not cheating. That is how a
            lot of companies work now.
          </p>

          <h3>The ideas you must know</h3>
          <ul>
            <li>
              Tables are like spreadsheets. Each row is a record. Each column is
              a field.
            </li>
            <li>
              Relations connect tables. A user can have many notes. A note
              belongs to one user.
            </li>
            <li>
              Queries ask for data: select, insert, update, delete. Learn CRUD
              and you are 80 percent there.
            </li>
            <li>
              Migrations are version control for your database schema. Change
              with care and track it.
            </li>
          </ul>

          <h3>Story: the notes app that taught me everything</h3>
          <p>
            I built a simple notes app with Supabase. I created a users table
            and a notes table. In 30 minutes I had email sign in, row-level
            security so each user only saw their own notes, and a UI that let me
            add, edit, and delete. Shipping that one app taught me more about
            auth, SQL, and security than a pile of articles ever did.
          </p>

          <h3>Supabase example: select and insert</h3>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Read notes
export async function getNotes(userId) {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

// Add a note
export async function addNote(userId, text) {
  const { data, error } = await supabase
    .from("notes")
    .insert([{ user_id: userId, text }])
    .select()
    .single();
  if (error) throw error;
  return data;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            Once you understand tables, relations, and queries, you can decide
            to dig into SQL later. For now, get moving. Make your app save
            stuff. That single switch from local-only to persistent data makes
            your project feel real.
          </p>
        </section>

        <section aria-labelledby="projects">
          <h2 id="projects">
            Project-based learning - finish small things to learn big things
          </h2>
          <p>
            If I could redo my learning path, I would choose project-based
            learning from day one. Science backs this up. Active recall and
            hands-on practice beat passive consumption. When you build, your
            brain forms connections and you remember the material longer. When
            you watch, you feel like you are learning, but it fades.
          </p>

          <h3>Pick projects you can finish in days, not months</h3>
          <ul>
            <li>
              Weather app - lets you practice fetch, API keys, error states, and
              a small UI that updates based on data.
            </li>
            <li>
              Blog - gives you routing, markdown or a CMS, SEO basics, and a
              real website you can share with people.
            </li>
            <li>
              Basic chat app - a stretch goal with websockets or a real-time
              database like Firebase to teach live updates.
            </li>
            <li>
              Habit tracker - teaches forms, localStorage or a hosted DB,
              charts, and recurring tasks.
            </li>
            <li>
              Recipe finder - teaches search, filtering, pagination, and
              bookmarking.
            </li>
          </ul>

          <h3>How to make sure you actually finish</h3>
          <ul>
            <li>
              Define your MVP in 3 to 5 bullet points. Anything not on the list
              is later.
            </li>
            <li>
              Time-box to one week. If it spills over, the scope shrinks, not
              the timeline.
            </li>
            <li>
              Keep a tiny daily log. Write one sentence about what you shipped
              and one sentence about what blocked you.
            </li>
            <li>
              Push to GitHub every day. Even small commits build momentum and a
              public trail.
            </li>
          </ul>

          <h3>Story: the chat app that humbled me</h3>
          <p>
            I thought chat would be easy. It was not. But by cutting features to
            the bone, I shipped a tiny room where two users could talk in real
            time. I learned about events, rate limits, and how to keep the UI
            smooth when messages fly in. The best part was seeing two browsers
            talk to each other. Magic. Hard-earned magic.
          </p>
        </section>

        <section aria-labelledby="deployment">
          <h2 id="deployment">Deployment and DevOps basics - ship it early</h2>
          <p>
            Back when I started, deployment felt like wizardry. In 2025, you can
            push a repo to GitHub and deploy on Vercel or Netlify in seconds.
            You connect your repo, pick a project, and they handle builds,
            previews, and SSL. The first time you share a live URL with a friend
            and they can click it from their phone, you will grin like a kid.
          </p>

          <h3>What to learn right away</h3>
          <ul>
            <li>
              How to connect GitHub to Vercel or Netlify and trigger
              auto-deploys on push.
            </li>
            <li>
              How to set environment variables for API keys, DB URLs, and
              secrets.
            </li>
            <li>
              How to use preview deployments for pull requests to test features
              before merging.
            </li>
            <li>How to add a custom domain and get HTTPS without pain.</li>
            <li>
              How to read logs when something breaks in production and roll back
              fast.
            </li>
          </ul>

          <h3>Story: my first deploy</h3>
          <p>
            I hit deploy on a Friday night. Vercel built the project in 40
            seconds. The URL popped up. I opened it on my phone and saw my app
            load over 5G. It felt unreal. That moment pushed me to finish more
            features because my work was out there, not just on my laptop.
            Employers love seeing that skill. Taking an idea to a shipped
            product is the whole point.
          </p>
        </section>

        <section aria-labelledby="the-path">
          <h2 id="the-path">
            Your 2025 learning path - step by step to become dangerous fast
          </h2>
          <p>
            If I had to restart, here is the flow that cuts noise and builds
            skills in the right order. You will learn just enough of each layer
            to ship, then repeat with slightly bigger challenges.
          </p>

          <h3>1) Foundations first</h3>
          <ul>
            <li>Time budget: 2 to 3 weeks.</li>
            <li>
              Deliverables: homepage, to-do app, responsive portfolio page.
            </li>
            <li>
              Skills: semantic HTML, Flexbox, Grid, DOM events, localStorage,
              accessibility basics.
            </li>
          </ul>

          <h3>2) Modern JavaScript second</h3>
          <ul>
            <li>Time budget: 1 to 2 weeks.</li>
            <li>
              Deliverables: weather widget, infinite scroll list, search filter
              on a dataset.
            </li>
            <li>
              Skills: promises, async and await, fetch, modules, error handling,
              performance basics like debouncing.
            </li>
          </ul>

          <h3>3) One frontend framework</h3>
          <ul>
            <li>Time budget: 3 to 4 weeks.</li>
            <li>
              Deliverables: blog or small store, with routing and data fetching.
            </li>
            <li>
              Skills: components, state, props, routing, forms, SEO tags, and a
              clean folder structure.
            </li>
          </ul>

          <h3>4) Backend basics</h3>
          <ul>
            <li>Time budget: 1 to 2 weeks.</li>
            <li>
              Deliverables: a tiny API, one secure endpoint, and a form that
              saves to a data store.
            </li>
            <li>
              Skills: HTTP methods, JSON, validation, auth concepts, and simple
              rate limiting.
            </li>
          </ul>

          <h3>5) Databases with modern tools</h3>
          <ul>
            <li>Time budget: 1 to 2 weeks.</li>
            <li>
              Deliverables: a notes app with login, create, update, delete, plus
              row-level security.
            </li>
            <li>
              Skills: table design, relations, CRUD queries, and basic
              migrations.
            </li>
          </ul>

          <h3>6) Project-based learning every week</h3>
          <ul>
            <li>One small project per week, scope tiny and finishable.</li>
            <li>
              Rotate focus: one UI-heavy, one data-heavy, one real-time, one
              auth-heavy.
            </li>
            <li>
              Reflect in a blog post. Teach what you just built. Teaching locks
              it in.
            </li>
          </ul>

          <h3>7) Deployment early and often</h3>
          <ul>
            <li>
              Deploy every project. Custom domain for your portfolio site.
            </li>
            <li>Learn to set environment variables safely.</li>
            <li>Use preview builds to test before merging to main.</li>
          </ul>

          <p>
            That is the stack that makes you dangerous fast without wasting
            years on things that do not matter anymore.
          </p>
        </section>

        <section aria-labelledby="visuals">
          <h2 id="visuals">If you prefer visuals - imagine these screens</h2>
          <ul>
            <li>
              A clean homepage with a bold headline, a simple nav, and a grid of
              project cards. Each card shows a title, short description, and a
              View Live button that opens your deployed app.
            </li>
            <li>
              A to-do app with a text input at the top. You type a task, hit
              Enter, and it appears in a list with a checkbox. When you refresh,
              the items are still there thanks to localStorage.
            </li>
            <li>
              A small dashboard with a weather widget, a list of recent notes,
              and a quick add form that saves to your hosted database.
            </li>
            <li>
              A deployment dashboard with green checkmarks on your last build
              and a preview URL for your pull request. You click it and see your
              new feature live on a temp URL.
            </li>
          </ul>
        </section>

        <section aria-labelledby="portfolio">
          <h2 id="portfolio">Make your portfolio real, not just screenshots</h2>
          <p>
            Employers want to see that you can take an idea to production.
            Screenshots are fine, but live links are better. Add a short product
            write-up for each project: what problem it solves, the stack, the
            tricky bits, and a 30-second Loom video. Include a README that
            explains how to run it locally. Add a feature backlog and a
            changelog. These small touches show maturity and care.
          </p>
        </section>

        <aside aria-labelledby="related">
          <h2 id="related">Related topics you might link to next</h2>
          <ul>
            <li>
              <Link href="/javascript">Learn the basics of JavaScript</Link>
            </li>

            <li>
              <Link href="/html">Learn the basics of HTML</Link>
            </li>

            <li>
              <Link href="/css">Learn the basics of CSS</Link>
            </li>

            <li>
              <Link href="/css">Learn the basics of React</Link>
            </li>
          </ul>
        </aside>

        <section aria-labelledby="faq">
          <h2 id="faq">Quick answers to questions beginners ask in 2025</h2>
          <h3>Do I need jQuery?</h3>
          <p>
            No. Native browser APIs and modern JS cover the same ground and
            more.
          </p>

          <h3>React, Vue, or Svelte?</h3>
          <p>
            Any is fine. Pick the one your local jobs mention most or the one a
            mentor can help with. Stick to it until you ship a project.
          </p>

          <h3>Should I learn SQL now?</h3>
          <p>
            Learn enough to do CRUD and join tables. Hosted tools give you a
            fast start. You can go deeper later.
          </p>

          <h3>How many projects before applying to jobs?</h3>
          <p>
            Aim for 4 to 6 finished, deployed projects that each teach a
            different skill. Add one capstone that ties them together.
          </p>
        </section>

        <p>
          If this roadmap helped, share it with a friend and subscribe to my
          newsletter to become a fellow code head. Then close this tab and ship
          something small today. Learning happens when your code hits the
          internet.
        </p>
      </article>
    </div>
  );
}
