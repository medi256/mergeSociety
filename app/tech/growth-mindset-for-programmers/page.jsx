import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title:
    "Growth Mindset for Programmers - You Don't Need to Be a Genius to Code",
  description:
    "Learn why programming success isn't about intelligence but perseverance. Discover how to develop a growth mindset, overcome imposter syndrome, and build coding skills through deliberate practice and resilience.",

  keywords: [
    "growth mindset programming",
    "learn to code",
    "programming for beginners",
    "coding mindset",
    "developer imposter syndrome",
    "programming tutorial",
    "coding confidence",
    "beginner programmer",
    "programming skills",
    "software development mindset",
    "coding persistence",
    "programming motivation",
    "do you need to  be smart to  learn to code",
  ],

  authors: [{ name: "Massa Medi", url: "https://www.instagram.com/medi45.of" }],
  creator: "Massa Medi",
  publisher: "Sloth Bytes",

  category: "Programming Education",

  openGraph: {
    title:
      "Growth Mindset for Programmers - You Don't Need to Be a Genius to Code",
    description:
      "Programming success isn't about intelligence - it's about perseverance. Learn how to develop the right mindset for coding success.",
    type: "article",
    publishedTime: "2025-09-01T00:00:00.000Z",
    authors: ["Massa Medi"],
    tags: [
      "programming",
      "growth mindset",
      "coding",
      "beginners",
      "software development",
      "learning",
      "motivation",
    ],
    images: [
      {
        url: "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765851/audio_1756629337986_121o9s_clovvx_situ67.webp",
        width: 1200,
        height: 630,
        alt: "Growth Mindset for Programmers - You do not need to be a genius to code",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Growth Mindset for Programmers - You Don't Need to Be a Genius",
    description:
      "Programming success isn't about intelligence - it's about perseverance. Learn the mindset that actually matters for coding.",
    images: [
      "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765851/audio_1756629337986_121o9s_clovvx_situ67.webp",
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
    canonical:
      "https://www.mergesociety.com/tech/growth-mindset-for-programmers",
  },

  other: {
    "article:author": "Massa Medi",
    "article:published_time": "2025-09-01T00:00:00.000Z",
    "article:section": "Programming Education",
    "article:tag": "programming, growth mindset, coding, beginners",
    "reading-time": "12 min read",
  },

  locale: "en_US",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Growth Mindset for Programmers - You Don't Need to Be a Genius to Code",
  description:
    "Learn why programming success isn't about intelligence but perseverance. Discover how to develop a growth mindset, overcome imposter syndrome, and build coding skills through deliberate practice and resilience.",
  image:
    "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765851/audio_1756629337986_121o9s_clovvx_situ67.webp",
  author: {
    "@type": "Person",
    name: "Massa Medi",
    url: "https://www.instagram.com/medi45.of",
  },
  publisher: {
    "@type": "Organization",
    name: "Sloth Bytes",
  },
  datePublished: "2025-09-01T00:00:00.000Z",
  dateModified: "2025-09-01T00:00:00.000Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mergesociety.com/tech/growth-mindset-for-programmers",
  },
  articleSection: "Programming Education",
  keywords:
    "growth mindset programming, learn to code, programming for beginners, coding mindset, developer imposter syndrome",
  wordCount: 3500,
  timeRequired: "PT12M",
  audience: {
    "@type": "Audience",
    audienceType: "Beginner Programmers",
  },
};

const GrowthMindset = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Growth Mindset for Programmers - you do not need to be a genius to
          code
        </h1>

        <figure className="article-figure">
          <Image
            src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762765851/audio_1756629337986_121o9s_clovvx_situ67.webp"
            alt="Growth Mindset for Programmers - you do not need to be a genius to code"
            width={800}
            height={400}
            priority
          />
          <figcaption>
            Growth Mindset for Programmers - you do not need to be a genius to
            code
          </figcaption>
        </figure>
        <aside aria-label="Page meta">
          <h2 className="project-info">
            <span className="project-title">
              <Link href={"https://www.instagram.com/medi45.of"}>
                Written by Massa Medi
              </Link>
            </span>
            <time className="project-date" dateTime="2025-09-1">
              | September 1, 2025
            </time>
          </h2>
        </aside>

        <p>
          If you ever felt like you needed a 160 IQ, three monitors, and a
          glowing keyboard to even touch a text editor, welcome to the club I
          used to be in. Pull up a chair. I brought snacks and stories.
        </p>

        <section>
          <h2>When YouTube convinced me I had to be a child genius to code</h2>
          <p>
            When I was a fetus and first started coding, I honestly thought I
            had to be a genius. Like, child-prodigy-on-a-documentary level
            smart. I blame YouTube for that. Their algorithm baptized me with a
            video called something like 14 year old genius programmer. I
            remember the thumbnail too. It had the classic prodigy energy - a
            kid sitting at a Mac, code on screen, that confident half-smile that
            says I know 19 programming languages and also how to do taxes.
          </p>
          <p>
            The video was about <strong>Santiago Gonzalez</strong>. If you have
            not seen it, picture a super young teen calmly explaining code in a
            way that makes you question your life choices. He is talking about
            languages, building apps, and his eyes have that curious spark you
            see in people who are just wired to tinker. The camera cuts between
            him typing, showing snippets of projects, and narrating his thought
            process like it is the most natural thing. No fluff. Just a kid who
            is clearly having fun with a very grown up skill. That video stuck
            in my brain for years. It felt like proof that unless you were born
            built different, you were just late to the party.
          </p>
          <p>
            One day I thought, hey, what is Santiago up to now. So I Googled
            him. Found his site. Turns out he is out there actually doing the
            thing - building, researching, shipping, and learning. He is got the
            academic chops, the engineering title, the whole path people imagine
            when they say I want to go far in tech. Which made me say out loud:
            he is 23 and already has a PhD. What the fuck. Meanwhile I am over
            here arguing with my coffee machine like it is a state machine that
            forgot a transition.
          </p>
          <p>
            Here is the point. You do not need to be Santiago to be a successful
            programmer. Santiago is an exception. He is the real-life version of
            young Sheldon when it comes to learning how to code. And bless him
            for it - the world needs people like that. But most of us are not
            that. I am definitely not that. I am living proof that an idiot like
            me can learn to code. Which means it is not about being a genius. It
            is about something way less sexy and way more useful in the long
            run.
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
              src="https://www.youtube-nocookie.com/embed/cvK0__7wmtM?si=uCgW3UgP-1ixar1v"
              title="Growth Mindset for Programmers - you do not need to be a genius to code"
              loading="lazy"
              fetchPriority="high"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2>
            It is not smarts - it is tolerance for being trash for a while
          </h2>
          <p>
            Here is my actual thesis, tattoo it on your forehead if you need:
            coding is a tolerance game. How long can you tolerate being bad at
            something without quitting. That is it. That is the whole game. This
            is why I keep seeing the same trait in so many good programmers,
            from juniors to staff engineers. It is obvious. It is simple. And it
            is powerful.
          </p>
          <p>They have a growth mindset.</p>
          <p>
            Let me explain without sounding like a motivational poster printed
            on a beach background.
          </p>
        </section>

        <section>
          <h2>Fixed mindset vs growth mindset for developers</h2>
          <h3>What a fixed mindset looks like in code</h3>
          <p>
            A fixed mindset is believing your abilities are stuck. You are
            either good at math or you are not. You are either a natural at code
            or you are not. People who think like this tend to say things like:
          </p>
          <ul>
            <li>I am just not good at math.</li>
            <li>I will never understand programming.</li>
            <li>I was not born for this.</li>
            <li>Debugging is something other people just know how to do.</li>
            <li>
              Algorithms are for geniuses who drink black coffee and speak in
              Greek letters.
            </li>
          </ul>
          <p>
            And once you believe that, you stop trying. You avoid hard problems.
            You treat errors like personal insults. You study less because you
            think it will not change anything anyway. Then your results get
            worse and your belief gets stronger. It is a self-own in slow
            motion.
          </p>

          <h3>What a growth mindset looks like in code</h3>
          <p>
            A growth mindset says your skills are trainable. Not instantly. Not
            painlessly. But trainable. You can get better through time, effort,
            and smarter practice. People who think like this will say things
            like:
          </p>
          <ul>
            <li>This is hard, but not impossible.</li>
            <li>I do not get this yet.</li>
            <li>If I keep at it, it will click.</li>
            <li>Let me try another approach and see what breaks.</li>
            <li>
              Feedback sucks to hear but it is a shortcut to getting better.
            </li>
          </ul>
          <p>
            They see challenges as reps. Errors are clues. Feedback is fuel. And
            they care less about looking smart today and more about being
            skilled six months from now. That shift sounds small, but it changes
            how you study, how you handle bugs, and whether you even show up
            when it gets tough.
          </p>
        </section>

        <section>
          <h2>Two beginners walk into a CS class: MrBeast vs Queso</h2>
          <p>
            Let us run a simple story. We got two beginner programmers in
            school. We will call them MrBeast and Queso. No, not the real
            MrBeast. Just a guy named Mr. Beast who is allergic to effort. And
            Queso, who I will describe exactly how he describes himself: the 500
            ton paycheck to paycheck low income Twitch streamer Queso. The lore
            is deep, the wallet is not.
          </p>

          <h3>MrBeast - fixed mindset edition</h3>
          <p>
            MrBeast hits a hard problem and instantly thinks I must not be smart
            enough. Maybe programming is not for me. He spirals. He stops doing
            homework the second it challenges him. He crams just enough to pass
            or sometimes not even that. His grades dip. That dip becomes proof
            he was right about himself. He quits earlier and earlier. Now he has
            no reps, no momentum, and a growing conviction that coding is a gate
            kept world.
          </p>

          <h3>Queso - growth mindset edition</h3>
          <p>
            Queso faces the same problem and goes, yikes, this is tough. But not
            impossible. He opens the textbook. He Googles. He watches a video at
            1.25x. He asks a friend. He asks a random in a Discord. He keeps
            poking until the error message changes, which is how you know
            something did something. Over time, Queso's skills compound. He
            starts to recognize patterns. He becomes easier to teach because he
            listens to feedback instead of defending his ego. He actually reads
            comments on his code like they are tiny free coaching sessions. His
            grades improve because his process improved.
          </p>

          <h3>Also, Queso reads Sloth Bytes because he is smart like that</h3>
          <p>
            He also happens to read my favorite newsletter, Sloth Bytes. What is
            Sloth Bytes. It is one of the greatest newsletters ever for
            programming because I made it. I am biased. But it is actually
            useful. Sloth Bytes is a weekly newsletter where I share bite-sized
            programming lessons to help you get better and think clearer. It is
            free. It already passed 1,500 subscribers and my goal is to make it
            one of the top newsletters for programming. So join Queso and
            subscribe to Sloth Bytes so you can become a better programmer. I am
            sorry, did you just say no. I do not take that for an answer. You
            better subscribe right now. Do it. Do it anyway.
          </p>
        </section>

        <section>
          <h2>
            The two big benefits of a growth mindset: learning and resilience
          </h2>

          <h3>1) Learning - how I went from overwhelmed to okay, I got this</h3>
          <p>
            When I first started coding, it was during college. It was not cute.
            The assignments were heavy and I felt outmatched. I remember staring
            at pseudocode like it was an ancient riddle. There were weeks where
            I thought I am not cut out for this. The math felt like a foreign
            language. The algorithms felt like magic tricks I was too slow to
            learn. Imposter syndrome was basically my roommate. And I was
            impatient because I wanted results fast without earning the
            foundation first.
          </p>
          <p>
            The worst part was watching other students cruise while I flailed.
            They raised their hands with clean answers while I was still trying
            to align my curly braces. It sucked. But eventually I realized that
            beating myself up was not helping. It was actually making it harder
            to focus. So I tried a new script: I cannot do this right now, but
            it will click if I keep at it. And little by little, it did. Not
            overnight. Not in a montage. But in tiny wins that added up over
            months.
          </p>
          <p>
            I started seeing assignments as practice reps, not grading traps. I
            did the required solution and then tried a second approach just to
            see how it felt. Was that required. No. Did it make me better.
            Absolutely. I took free online courses. I read docs. I worked on
            tiny side projects where I could apply the thing I just learned
            before I forgot it. I let myself be a beginner for real, which is
            strangely hard for adults because our pride hates being new at
            stuff.
          </p>
          <p>
            Once I stopped pretending I should be good already, my brain chilled
            out enough to learn. That switch helped me adapt to new concepts way
            faster. I stayed flexible. I stopped panicking every time a concept
            did not land right away. And eventually the scary stuff became
            normal. The algorithms started to make sense. The math was not a
            monster anymore. Turns out repetition works. Who knew.
          </p>

          <h3>
            2) Resilience - turning bugs, bad grades, and rejections into fuel
          </h3>
          <p>
            Programming is trial and error on purpose. You build stuff. You
            break stuff. You rebuild it. You get stuck on a bug that makes you
            question your identity and then it turns out you forgot a comma. Ask
            me how I know. I have made a spectacular amount of errors. But each
            time I hit one I tried to treat it like a mystery to solve instead
            of a personal failure.
          </p>
          <p>
            I would ask: why did this happen. Where in the chain did the state
            go sideways. What assumption lied to me here. Is this code ugly
            because I rushed it or because I never learned the cleaner pattern.
            Questions like that helped me improve faster than pretending the
            mess did not exist. I wrote little postmortems for myself. I saved
            snippets of gotchas. I kept a bug diary for a while, which sounds
            nerdy but is insanely useful. Every entry was a free lesson I did
            not want to pay for twice.
          </p>
          <p>
            Doing this in school was harder because grades feel like the end of
            the world. A bad test hurts. But even there I tried to treat each
            mistake as data. What did I miss. Did I misread the question. Did I
            forget a definition or did I never understand it in the first place.
            That same approach saved me in interviews too. I bombed more than a
            few. Instead of sulking for a week, I wrote down exactly what threw
            me, what topic I needed to study, and how I would practice it. That
            turned rejections into a feedback loop. Each one pointed at a gap I
            could close. Over time, the gaps got smaller and my confidence got
            real because it was earned.
          </p>
        </section>

        <section>
          <h2>
            How to build a growth mindset when your brain is stuck on fixed
          </h2>
          <p>
            If you are currently stuck thinking you are just not a math person
            or you were not born for this, cool, thanks for telling me. Now let
            us change it. Four practical things.
          </p>

          <h3>1) Embrace challenges - get comfortable being uncomfortable</h3>
          <p>
            Shout out to Big Box for phrasing this perfectly. Get comfortable
            being uncomfortable. That feeling you hate when a problem is a size
            too big for you. That is the feeling you actually want. It means
            growth is about to happen if you stay with it. When you hit a scary
            task, do not bounce. Thug it out. Break it down like this:
          </p>
          <ul>
            <li>
              Write the problem in your own words. If you cannot explain it
              simply, you do not understand it yet.
            </li>
            <li>
              List the inputs, outputs, and constraints. Clarity makes problems
              smaller.
            </li>
            <li>Sketch a tiny example by hand. No code. Just logic.</li>
            <li>
              Split the task into subproblems. Solve one tiny piece at a time.
            </li>
            <li>
              Test early and often. Get feedback quickly so you do not drift.
            </li>
          </ul>
          <p>
            Do it scared. Do it unsure. The second time you face a similar
            problem, you will be shocked how much easier it feels.
          </p>

          <h3>2) Learn from feedback - free coaching if you can take it</h3>
          <p>
            Feedback is spicy. It stings. You will survive. Ask for it from
            friends, mentors, or even random people who seem helpful. If you
            have nowhere to go, hop into my Discord. We will gladly give you
            feedback on anything. The key is to listen for the idea, not the
            tone. You do not have to accept every suggestion. But you should try
            to understand the reason behind it.
          </p>
          <ul>
            <li>
              When someone comments on your code, ask what pattern they would
              use instead and why.
            </li>
            <li>
              When you get a PR review, identify the most common issue and
              practice just that for a week.
            </li>
            <li>
              When you hear something you do not like, sit on it for a day, then
              revisit with a calmer brain.
            </li>
            <li>
              Keep a change log of fixes you adopted. Watch how your style
              improves over time.
            </li>
          </ul>
          <p>
            Feedback highlights blind spots. It saves you from repeating the
            same mistake on three different projects. That is time travel for
            developers.
          </p>

          <h3>3) Persistence - treat setbacks as temporary, not permanent</h3>
          <p>
            Persistence is not endless grinding with no brain. It is strategic
            stubbornness. When you hit a wall, do not assume the wall is
            forever. Try another angle, another resource, another day. My go-to
            routine when stuck looks like this:
          </p>
          <ul>
            <li>
              20 more minutes of focused effort with a timer. No distractions.
            </li>
            <li>
              Rubber duck the problem out loud. Yes, to an actual duck if you
              have one.
            </li>
            <li>
              Search one precise error message and read the top 2 or 3
              discussions all the way through.
            </li>
            <li>
              Take a 10 minute break. Hydrate. Walk. Touch grass. Come back with
              fresh eyes.
            </li>
            <li>
              Ask a specific question in a forum or chat with exact error output
              and what you already tried.
            </li>
          </ul>
          <p>
            This rhythm builds resilience. You will learn to trust that stuck is
            temporary. The more you see yourself get through it, the less scary
            it becomes.
          </p>

          <h3>4) Practice deliberately - not just more, but better</h3>
          <p>
            Deliberate practice is focused practice. You pick a target, you
            define the reps, you get feedback, you repeat. Do not just flail at
            random tutorials. Here is a simple weekly plan you can try:
          </p>
          <ul>
            <li>
              Pick one topic for the week - for example, object oriented basics,
              arrays and hash maps, recursion, or layout in CSS.
            </li>
            <li>
              Set a clear outcome - I can implement a simple LRU cache, or I can
              explain closure with my own example.
            </li>
            <li>
              Block 3 sessions of 45 to 60 minutes. Phone away. Tabs closed.
            </li>
            <li>
              Do 2 small exercises from scratch without copy paste. Struggle on
              purpose. Then review the model solution.
            </li>
            <li>
              End the week with one tiny project that uses the idea in a new
              context.
            </li>
            <li>
              Write a 5 bullet recap of what you learned, what confused you, and
              what you will practice next.
            </li>
          </ul>
          <p>
            That kind of practice compounds. It is boring in the coolest way
            because the results sneak up on you.
          </p>
        </section>

        <section>
          <h2>Extra real talk for beginners</h2>

          <h3>What if I am starting late</h3>
          <p>
            You are not late. You are on your timeline. Tech is full of people
            who pivoted from music, teaching, retail, you name it. The age you
            start is less important than whether you keep showing up. A two year
            streak of consistent practice beats a decade of wishful thinking.
            Stop asking if it is too late and start asking what you are going to
            ship by Friday.
          </p>

          <h3>Do I need to be good at math</h3>
          <p>
            You need enough math to understand the problems you want to solve.
            If you are building websites, you do not need to re-derive calculus
            proofs in your kitchen. If you are doing graphics, ML, or crypto,
            you will need more. Either way, you can learn it as you go. Math
            fear is mostly leftover school trauma. You are older now. You can
            learn at your pace with resources that do not make you feel dumb.
          </p>

          <h3>What if I hate failing</h3>
          <p>
            Me too. Everyone does. Here is the cheat code: reframe failing as
            sampling. Every error teaches you something you would not have
            learned by guessing correctly. Sampling more errors is how you map
            the terrain faster. The point is not to crave failure. The point is
            to stop making it mean you are doomed.
          </p>

          <h3>How do I track progress so I do not feel stuck</h3>
          <ul>
            <li>
              Keep a tiny win log with 3 bullets per day. What problem did you
              solve. What concept got clearer. What question did you ask.
            </li>
            <li>
              Save diff snapshots of your code from month 1, month 3, month 6.
              Read them later and laugh at your old self with kindness.
            </li>
            <li>
              Set skill checkpoints like I can build CRUD without Googling every
              line, or I can explain big O of my solution.
            </li>
            <li>
              Ship something visible every month - a script, a page, a tiny app,
              an automation for your life.
            </li>
          </ul>
        </section>

        <section>
          <h2>My honest origin story - messy, slow, and worth it</h2>
          <p>
            Let me circle back to the early days. I started college thinking I
            should already be good. That belief wrecked my focus. When I finally
            accepted that slow is still progress, everything improved. I started
            to treat assignments like a gym - not a report card machine. I
            experimented even after I had a working answer. Sometimes the
            experiment made the code worse. Good. I learned why the original was
            better. Sometimes the experiment unlocked a cleaner path I would
            have missed. Also good.
          </p>
          <p>
            I took free courses when I needed a new angle. I built side projects
            that were embarrassingly small so I could finish them and get reps.
            I asked annoying questions to people who were kind enough to answer.
            I learned to take a breath when feedback felt like an attack. The
            slow grind worked. My skills improved. Concepts clicked that I once
            called impossible. I could finally follow the reasoning behind
            algorithms that used to look like spells. I got less fragile and
            more curious. And when interviews rejected me, I learned to extract
            the lesson and keep moving.
          </p>
        </section>

        <section>
          <h2>The 5 minute debugging habit that changed everything</h2>
          <p>
            Here is a tiny tactic that saved me countless hours. Any time you
            hit a bug, spend exactly 5 minutes writing a quick plan before
            thrashing:
          </p>
          <ul>
            <li>What did I expect to happen. Be specific.</li>
            <li>What happened instead. Copy the exact message or symptom.</li>
            <li>What changed recently. Code, config, data, environment.</li>
            <li>
              What is the smallest repro I can make. Aim for 10 lines if
              possible.
            </li>
            <li>What is one assumption I can test right now. Then test it.</li>
          </ul>
          <p>
            That habit turns chaos into structure. It is the difference between
            blindly poking your app and performing a little science experiment.
            Also, if you ask for help with those notes, the internet will
            actually want to help you because you did the work.
          </p>
        </section>

        <section>
          <h2>Your next steps - small, clear, and today</h2>
          <ul>
            <li>
              Pick one hard thing you have been avoiding. Commit 30 minutes to
              it today. Break it into 3 mini steps and do step 1.
            </li>
            <li>
              Ask for feedback on one piece of code. Thank the person. Apply one
              suggestion. Ship the change.
            </li>
            <li>
              Set up a 3 day practice streak. Same time each day. Phone in
              another room.
            </li>
            <li>
              Write a tiny win log for a week. See how your mood changes when
              you notice progress.
            </li>
            <li>Grab an interactive lesson that fits your gap.</li>
          </ul>
        </section>

        <section>
          <h2>The core reminder I wish someone tattooed on my brain</h2>
          <p>
            If there is one thing you remember from this article, it is this:
            success in programming is not about intelligence. It is about
            perseverance. Your tolerance for being bad at something while you
            get better is the biggest predictor of whether you stick around long
            enough to be good. The mind shift is simple to describe and not easy
            to do. But once you change it, it upgrades almost everything you
            try. You will become a better learner. A tougher problem solver. And
            honestly, a more chill human.
          </p>
          <p>
            You do not need to be a genius to code. Embrace challenges. Seek
            feedback. Stay persistent. Practice deliberately. That is the whole
            playbook. I will see you in the next one.
          </p>
        </section>

        <section aria-label="Call to action">
          <nav aria-label="More on this">
            <ul>
              <li>
                <Link href="/tech/learn-to-code">
                  Why Learn to Code with this AI Bubble
                </Link>
              </li>
              <li>
                <Link href="/tech/10x-developers">
                  The Most Legendary Programmers Of All Time: The Best
                  Programmers in History
                </Link>
              </li>
              <li>
                <Link href="/tech/21-devTools">
                  Chrome DevTools: 21+ Insane Browser Developer Tools Tricks
                  Every Web Developer Needs (Most Pros Miss #13)
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <p>Keep building. Keep breaking. Keep coming back.</p>
      </article>
    </div>
  );
};

export default GrowthMindset;
