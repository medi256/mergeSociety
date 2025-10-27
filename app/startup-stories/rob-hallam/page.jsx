import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Day 1: Growing Super X to $10,000/Month While Traveling the World | Building in Public from Medellin",
  description:
    "I quit my UK job 5 months ago to build Super X, an AI-powered X/Twitter growth tool. Currently at $1,000 MRR in Medellin, Colombia, targeting $10K/month. Day 1 of building in public: just shipped AI Shield to detect AI-generated content, got 100K+ views, and we're still in private beta. Real founder journey, real numbers, real hustle. Follow along as I grow a SaaS startup while traveling Latin America.",
  keywords: [
    "Super X",
    "building in public",
    "SaaS startup journey",
    "Twitter growth tool",
    "X growth tool",
    "AI content detection",
    "AI Shield feature",
    "digital nomad founder",
    "Medellin startup scene",
    "growing to $10k MRR",
    "X engagement tool",
    "Twitter scheduling software",
    "content idea generator",
    "AI slop detection",
    "Twitter automation",
    "X automation tool",
    "solopreneur journey",
    "indie hacker",
    "SaaS from Latin America",
    "quit job build startup",
    "Twitter content quality",
    "AI generated content filter",
    "X community engagement",
    "Twitter marketing tool",
    "content scheduling app",
    "building while traveling",
    "founder diary",
    "startup growth metrics",
    "MRR growth strategy",
    "private beta launch",
    "viral product launch",
    "AI writing assistant",
    "Twitter creator tools",
    "X creator economy",
    "social media management",
    "Rob Hallam founder",
    "UK to Latin America",
    "Colombia tech scene",
    "remote work lifestyle",
  ],
  authors: [
    {
      name: "Massa Medi",
      url: "https://www.instagram.com/medi45.of",
    },
  ],
  creator: "Massa Medi",
  publisher: "Merge Society",
  category: "Technology",
  classification: "Startup Journey, SaaS, Social Media Tools",
  openGraph: {
    title:
      "Day 1: Growing Super X to $10K/Month | Building a Twitter Tool While Traveling",
    description:
      "Quit my UK job to build Super X from Latin America. Currently at $1K MRR in Medellin, targeting $10K/month. Just shipped AI Shield (AI content detector), got 100K+ views in private beta. This is day 1 of building in public - tracking the full journey from idea to revenue while traveling the world. Real metrics, real lessons, zero BS.",
    url: "https://www.mergesociety.com/startup-stories/rob-hallam",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761560597/audio_1761559288875_xtxud_zqk8xg.jpg",
        width: 800,
        height: 400,
        alt: "Rob Hallam building Super X startup in Medellin Colombia - Day 1 of growing to $10,000 monthly recurring revenue",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-10-27T00:00:00.000Z",
    authors: ["Massa Medi"],
    section: "Startup Journey",
    tags: [
      "Building in Public",
      "SaaS Growth",
      "Twitter Tools",
      "X Growth",
      "Digital Nomad",
      "Medellin",
      "Colombia",
      "AI Detection",
      "MRR Growth",
      "Indie Hacker",
      "Solopreneur",
      "Product Launch",
      "Private Beta",
      "Content Quality",
      "Social Media Automation",
      "Startup Metrics",
      "Latin America Tech",
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@manager70191",
    title: "Day 1: $1K → $10K MRR | Building Super X in Public",
    description:
      "Quit my UK job to build a Twitter growth tool. Now at $1K MRR in Medellin. Just shipped AI Shield, hit 100K views in beta. This is day 1 of the full journey to $10K/month. Real numbers, real struggles, real wins.",
    images: {
      url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761560597/audio_1761559288875_xtxud_zqk8xg.jpg",
      alt: "Building Super X startup from Medellin - Day 1 growth journey",
    },
  },
  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories/rob-hallam",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "article:author": "Rob Hallam",
    "article:published_time": "2025-10-27T00:00:00.000Z",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Day 1: Growing Super X to $10,000 a Month While Traveling the World",
  description:
    "Founder Rob Hallam documents day 1 of building Super X from $1,000 to $10,000 monthly recurring revenue while traveling through Latin America. Just launched AI Shield feature, hit 100K+ views in private beta.",
  image:
    "https://res.cloudinary.com/dhgjhspsp/image/upload/v1761560597/audio_1761559288875_xtxud_zqk8xg.jpg",
  datePublished: "2025-10-27T00:00:00.000Z",
  dateModified: "2025-10-27T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Massa Medi",
    jobTitle: "Founder & Developer",
    worksFor: {
      "@type": "Organization",
      name: "Merge Society",
    },
    description: "UK founder building SaaS in Latin America",
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
    "@id": "https://www.mergesociety.com/startup-stories/rob-hallam",
  },
  articleSection: "Startup Journey",
  keywords:
    "building in public, SaaS growth, Twitter tools, X growth, digital nomad, MRR growth, AI detection, content quality, indie hacker, startup metrics, Medellin, Colombia",
  wordCount: 3425,
  inLanguage: "en-US",
  about: [
    {
      "@type": "SoftwareApplication",
      name: "Merge Society",
      applicationCategory: "SocialMediaApplication",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1000",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      description:
        "AI-powered tool for growing on X/Twitter with content generation, scheduling, and engagement features",
    },
    {
      "@type": "Thing",
      name: "Building in Public",
    },
    {
      "@type": "Place",
      name: "Medellin",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.2476",
        longitude: "-75.5658",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellin",
        addressCountry: "Colombia",
      },
    },
  ],
  mentions: [
    {
      "@type": "Product",
      name: "AI Shield",
      description: "Feature that detects AI-generated content on X/Twitter",
      brand: {
        "@type": "Brand",
        name: "Super X",
      },
    },
  ],
  backstory:
    "Founder left UK job to build SaaS startup while traveling Latin America, documenting the journey from $1K to $10K monthly recurring revenue",
  funding: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "1000",
    description: "Current monthly recurring revenue",
  },
};

const RobHallam = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Day 1: Growing Super X to $10,000 a Month While Traveling the World
        </h1>

        <figure className="article-figure">
          <Image
            src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1761560597/audio_1761559288875_xtxud_zqk8xg.jpg"
            alt="Growing Super X to $10,000 a Month While Traveling the World"
            width={800}
            height={400}
            priority
          />
          <figcaption>
            Growing Super X to $10,000 a Month While Traveling the World
          </figcaption>
        </figure>
        <aside aria-label="Page meta">
          <h2 className="project-info">
            <span className="project-title">
              <Link href={"https://www.instagram.com/medi45.of"}>
                Written by Massa Medi
              </Link>
            </span>
            <time className="project-date" dateTime="2025-10-27">
              | October 27, 2025
            </time>
          </h2>
        </aside>

        <p>
          Today is day one of growing my startup, Super X, to $10,000 a month
          while traveling the world. For those of you that don't know me, I'm
          Rob.
        </p>

        <section aria-label="Introduction">
          <p>
            I am kicking off a very public, very real journey. Five months ago,
            I quit my job, left my home in the UK and flew to Latin America to
            chase my dream of growing this startup, Super X, to $10,000 a month.
            I wanted a life where I build meaningful software, learn fast, and
            see the world while doing it. Right now I am in Medellin, Colombia,
            and we are at just over $1,000 a month. This is the starting line.
          </p>
          <p>
            That number is both humbling and energizing. It means the product is
            real, people are paying, and there is momentum. It also means there
            is a long way to go. I am sharing the day-by-day because I want to
            show the full thing as it happens. The wins, misses, pivots, and
            everything in between.
          </p>
        </section>

        <section aria-label="Who I Am and Why This Journey">
          <h2>Who I Am and Why I Packed My Life Into a Backpack</h2>
          <p>
            For those of you that don't know me, I'm Rob. I am a builder. I
            write code, ship product, and talk to users. Five months back, I
            looked at my comfortable job in the UK and realized I was learning
            slowly. I wanted to go faster. I wanted to bet on myself and see
            what would happen if I put all my focus into one thing that I
            believed in.
          </p>
          <p>
            Leaving the UK was not a dramatic movie scene. It was a string of
            practical choices. Selling things I did not need. Saying goodbye to
            friends and family with a mix of nerves and excitement. Booking a
            one-way flight to Latin America because I had heard from other
            founders that the time zones are workable, the communities are
            strong, and the cost of living gives you longer runway. I wanted an
            environment that would push me to be scrappy and creative every
            single day.
          </p>
          <p>
            Landing in Latin America felt like stepping into a new chapter.
            Everything is new when you arrive somewhere with a suitcase and a
            plan. I set up a tiny workstation, found a routine, and promised
            myself I would build in public. That is why you are reading this.
            This is my open notebook.
          </p>
        </section>

        <section aria-label="Where I Am Now">
          <h2>Medellin, Colombia - Building From a City With Energy</h2>
          <p>
            Right now I'm in Medellin, Colombia, and we are at just over $1,000
            a month. Medellin has this buzz that is hard to describe until you
            feel it. The city is surrounded by green hills, the weather sits at
            spring-like temperatures, and there is a steady hum of scooters,
            cafes, and people on the move. It is the kind of place that makes
            you want to get things done.
          </p>
          <p>
            In the mornings, cafes fill up with people building, studying, or
            meeting. You hear Spanish, English, Portuguese, and a dozen accents
            in one room. That mix helps. It reminds you that what you are
            building can reach far beyond your street. I walk to a coffee shop,
            open the laptop, and it is game on. The goal is clear: get Super X
            to $10,000 a month.
          </p>
        </section>

        <section aria-label="What Super X Is">
          <h2>What Super X Actually Does</h2>
          <p>
            For those of you that don't know, Super X is a tool that helps you
            grow faster on X, helping you generate content ideas, schedule
            content and engage with your community. I built it for people who
            want a clean, focused workflow that takes them from idea to post to
            conversation without bouncing between five tabs. If you are a
            creator, a founder, a marketer, or just someone who wants to be
            consistent on X, this is for you.
          </p>
          <h3>The Core Workflow</h3>
          <ul>
            <li>
              Idea generation: spark angles, prompts, and content hooks so you
              never open a blank editor and freeze.
            </li>
            <li>
              Scheduling: write when you are in the zone, then line up posts so
              they go out when your audience is awake and active.
            </li>
            <li>
              Engagement: surface replies, mentions, and conversations that
              actually matter so you can build relationships, not just
              impressions.
            </li>
          </ul>
          <p>
            In practice, this looks like opening Super X, dropping in a rough
            thought, and getting a set of variations and supporting examples you
            can shape into your voice. It looks like batching a week's worth of
            posts in one sitting, then letting the scheduler do its thing while
            you work, sleep, or move through airports. It looks like a simple
            daily list of people you want to engage with so you can answer,
            thank, debate, and learn in public.
          </p>
          <p>
            I care about speed and clarity. No fluff. No heavy dashboards that
            make you feel like you need a certification to use the product. The
            goal is to help you show up on X with consistency and quality, then
            keep the conversation going.
          </p>
          <p>
            You can try it out here :{" "}
            <Link href="https://superx.so/">Super X</Link>
          </p>
        </section>

        <section aria-label="The New AI Shield Feature">
          <h2>Yesterday Was Wild: I Shipped AI Shield</h2>
          <p>
            Yesterday was a crazy day because I just released a new feature
            called the AI Shield, which detects AI generated content. This came
            from something I kept hearing and feeling myself. A lot of people on
            X are sick of AI generated content flooding their feeds. You scroll
            and you can almost smell the sameness. It reads like a blender of
            tips and threads that never touched a real human experience.
          </p>
          <p>
            AI Shield looks at a post and tells you if it is likely AI
            generated. That is useful for anyone trying to filter the noise, but
            it is also useful for creators who want to keep themselves honest.
            If you write something and the tool screams that it looks like it
            was churned out by a bot, that is a prompt to add a story, a detail,
            or a point of view. It nudges you toward real.
          </p>
          <p>
            Here is the irony. We are building into Super X also AI generation
            features to help you write content using AI. That sounds like a
            conflict until you zoom in on how I think about it. The perspective
            I'm coming at it with Super X is AI can be a really good tool to
            help you take good content and good ideas and turn it into great
            content. It is like an editor sitting next to you saying try this
            phrasing, add this example, tighten this line. Used that way, it is
            a multiplier.
          </p>
          <p>
            But the problem right now is people are taking really bad content
            and bad ideas and trying to turn it into good content using AI. This
            doesn't work and ends up creating AI slop that people hate. You can
            feel it. Posts that stack cliches, dodge specifics, and smooth
            everything until there is no edge left. AI Shield is not about
            policing creativity. It is about raising a hand when something
            smells like mass-produced paste and saying add a human layer here.
          </p>
          <h3>How I Expect People To Use It</h3>
          <ul>
            <li>
              As a reader: quickly sense check if a post feels machine-made so
              you can focus on real conversations.
            </li>
            <li>
              As a creator: draft with AI if you want, then run the post through
              AI Shield and tweak until it reflects your voice and experience.
            </li>
            <li>
              As a team: keep brand feeds from turning into a stream of
              lookalike posts that erode trust with your audience.
            </li>
          </ul>
          <p>
            Imagine two versions of the same idea. Version one is a vague post
            about productivity with six overused tips and no story. Version two
            opens with a quick slice of your morning, the exact moment you
            almost bailed on your plan, and the one tweak that got you back on
            track. AI can help punch up version two. It cannot save version one.
            That is the line I care about.
          </p>
        </section>

        <section aria-label="The Vibe on X Right Now">
          <h2>Why People Are Tired Of AI Slop</h2>
          <p>
            There is a real mood shift on X. At first, everyone was excited by
            the novelty. You could spin up threads on anything in seconds. Then
            the feed started to feel like a grey fog. Same structures, same
            claims, same five takeaways dressed in slightly different words.
            When every post reads like it was assembled from a kit, you stop
            trusting. You stop engaging. You scroll past.
          </p>
          <p>
            People are sick of AI generated content flooding their feeds because
            it wastes attention. It feels like a hallway full of people saying
            the same thing all at once. What we want is texture. We want a
            voice, a specific frame, a lived example. That is why I shipped AI
            Shield. It is one tool in a bigger push toward quality and realness.
            I want Super X to reward the folks who do the work, not just the
            ones who run the loudest template.
          </p>
        </section>

        <section aria-label="Launch Reaction and Momentum">
          <h2>The Launch Went Kinda Viral</h2>
          <p>
            Since I released this new AI Shield feature, we've gotten over
            100,000 views on X. It went kind of viral and in fact, we're still
            in private beta. Seeing that many eyeballs in a day is wild. Your
            phone lights up. Mentions stack. DMs show up from power users,
            skeptics, and curious lurkers. Some people cheer because they want
            cleaner feeds. Some push back because they worry about false
            positives. That mix is healthy. It means the thing matters.
          </p>
          <p>
            Numbers are not the whole story, but they are a signal. 100,000
            views tells me the problem resonates. The replies tell me where the
            edges are. I save the sharpest comments, run tests, and adjust.
            Going viral once is nice. Turning attention into a product people
            stick with is the real job.
          </p>
        </section>

        <section aria-label="Private Beta and Next Steps">
          <h2>Still Private Beta - Lots To Tighten Up</h2>
          <p>
            We are still in private beta. That means I am shaping the product
            with a smaller group before opening the gates. It lets me ship
            quickly, fix things the same day, and keep a close loop with people
            who are using it for real work. The goal is stability, clarity, and
            a smooth path from first login to first win.
          </p>
          <h3>What I Need To Do Before Going Live</h3>
          <ul>
            <li>
              Polish the AI Shield interface so it explains itself in plain
              language and gives clear next steps.
            </li>
            <li>
              Dial in detection thresholds so the alerts are useful, not noisy.
              Less false alarm, more signal.
            </li>
            <li>
              Improve onboarding with examples, short walkthroughs, and a simple
              first project so new users get a quick win.
            </li>
            <li>
              Stress test scheduling and engagement flows to make sure they hold
              up when people post at scale.
            </li>
            <li>
              Write docs that feel human. Short, specific, and loaded with
              screenshots and real scenarios.
            </li>
          </ul>
          <p>
            I have a lot of work to do before getting it live and marketing like
            crazy. Marketing like crazy does not mean spray and pray. It means
            showing the product in action, telling real stories, and meeting
            users where they are. Live demos. Tiny case studies. Clear before
            and afters. If I do that well, the right people will find it and
            stick around.
          </p>
        </section>

        <section aria-label="Principles Guiding The Build">
          <h2>My Rule For Using AI In Content</h2>
          <p>
            The perspective I'm coming at it with Super X is simple. AI can be a
            really good tool to help you take good content and good ideas and
            turn it into great content. It is not a fix for weak thinking. Start
            with a truth, a story, or a sharp point of view. Then use AI like a
            craft knife. Trim, iterate, and refine until the post hits cleanly.
          </p>
          <p>Here is a quick contrast I use in my head:</p>
          <ul>
            <li>
              Good to great: you wrote a personal lesson about shipping a
              feature under pressure. AI helps tighten sentences, propose a
              hook, and suggest a stronger close. The result still sounds like
              you, just sharper.
            </li>
            <li>
              Bad to good: you feed in a vague prompt like write a thread about
              productivity tips. AI spits out a list you have seen 100 times.
              You post it anyway. That is how AI slop happens.
            </li>
          </ul>
          <p>
            Super X will give you both sides of the coin. Generation to help you
            move fast when you have something to say. Detection to keep quality
            high and your voice intact. That balance is the point.
          </p>
        </section>

        <section aria-label="Daily Log">
          <h2>Day One In The Books</h2>
          <p>
            Day one is me planting a flag. We are at just over $1,000 a month.
            The target is $10,000 a month. I am in Medellin with a laptop, a
            small backpack, and a focused plan. Yesterday was a crazy day with
            the AI Shield launch. Today is about channeling that energy into
            fixes, follow ups, and a steady rhythm of building and talking to
            users.
          </p>
          <aside>
            <p>
              Since I released this new AI Shield feature, we've gotten over
              100,000 views on X. It went kind of viral and in fact, we're still
              in private beta. That is the fuel. Now it is time to drive.
            </p>
          </aside>
        </section>

        <section aria-label="Conclusion">
          <h2>What To Expect Next</h2>
          <p>
            The roadmap is clear. Keep shaping Super X so it helps you generate
            better ideas, schedule smarter, and engage deeper. Keep AI honest
            with AI Shield so we cut through the fog and elevate real voices.
            Keep shipping daily, learning publicly, and steering this thing
            toward $10,000 a month while I keep moving through places that give
            me energy to build.
          </p>
          <p>
            If you have been following along, thank you. If you are new here,
            welcome. I am keeping this raw and real. See you tomorrow for day
            two.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RobHallam;
