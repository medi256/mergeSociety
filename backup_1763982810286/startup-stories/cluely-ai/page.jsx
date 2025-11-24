import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Do People Actually Know What Cluely Does? I Took It To The Streets of San Francisco To Find Out | Cluely Blog",
  description:
    'As CMO of Cluely, I hit the streets of San Francisco with a camera and dollar bills to ask strangers: what does Cluely actually do? After generating 2 billion views across TikTok, Instagram, X, and YouTube, I needed to know if our message was landing. Real people, real answers about our AI copilot that gives you answers during meetings and interviews, takes notes automatically, and writes follow-up emails. From "cheating tool" to "invisible copilot" - here\'s what the streets taught me about product messaging.',
  keywords: [
    "Cluely AI",
    "AI meeting assistant",
    "real-time AI copilot",
    "AI note taker",
    "meeting notes automation",
    "interview preparation tool",
    "automatic meeting summaries",
    "AI follow-up emails",
    "productivity AI tools",
    "meeting intelligence software",
    "AI interview helper",
    "screen overlay AI",
    "LeetCode interview prep",
    "AI plugin for meetings",
    "post-call features",
    "AI cheating tool",
    "San Francisco startup",
    "AI productivity copilot",
    "meeting context assistant",
    "real-time answers AI",
    "Massa Medi Cluely",
    "Cluely CMO",
    "startup street marketing",
    "AI for job interviews",
    "meeting follow-up automation",
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
  openGraph: {
    title:
      "Do People Actually Know What Cluely Does? I Took It To The Streets of San Francisco",
    description:
      'After 2 billion views, Cluely\'s CMO hits San Francisco streets with cash and a camera to test if strangers actually know what we build. The results? From "AI note taker" to "cheating tool" to "invisible copilot" - real people share what they think about our real-time AI meeting assistant. Street interviews, honest feedback, and what 2B views really means for brand awareness.',
    url: "https://www.mergesociety.com/startup-stories/cluely-ai",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765460/audio_1761485673309_yjd82_ciildh_uvzkik.jpg",
        width: 800,
        height: 400,
        alt: "Massa Medi conducting street interviews in San Francisco asking people what Cluely does - AI copilot and meeting assistant",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-10-27T00:00:00.000Z",
    authors: ["Massa Medi"],
    section: "Product Marketing",
    tags: [
      "AI Copilot",
      "Meeting Assistant",
      "Product Marketing",
      "Street Interviews",
      "Brand Awareness",
      "Startup Growth",
      "San Francisco Tech",
      "AI Productivity",
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@manager70191",
    title: "Do People Know What Cluely Does? SF Street Test Results",
    description:
      'Gave out $ on SF streets testing if anyone knows what our 2B-view AI startup does. Answers ranged from "note taker" to "cheating tool" to "invisible copilot." Real interviews, real feedback on our AI meeting assistant.',
    images: {
      url: "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765460/audio_1761485673309_yjd82_ciildh_uvzkik.jpg",
      alt: "Street interviews in San Francisco about Cluely AI meeting copilot",
    },
  },
  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories/cluely-ai",
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
    "article:author": "Massa Medi",
    "article:published_time": "2025-10-27T00:00:00.000Z",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Do People Actually Know What Cluely Does? I Took It To The Streets of San Francisco To Find Out",
  description:
    "Cluely CMO Massa Medi conducts street interviews in San Francisco to test brand awareness after 2 billion views. Real people explain what they think Cluely's AI meeting copilot does.",
  image:
    "https://res.cloudinary.com/dgyofctwi/image/upload/v1762765460/audio_1761485673309_yjd82_ciildh_uvzkik.jpg",
  datePublished: "2025-10-27T00:00:00.000Z",
  dateModified: "2025-10-27T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "Massa Medi",
    url: "https://www.instagram.com/medi45.of",
    jobTitle: "Chief Marketing Officer",
    worksFor: {
      "@type": "Organization",
      name: "Cluely",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Cluely",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mergesociety.com/MS.png", // Add your logo URL
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mergesociety.com/startup-stories/cluely-ai",
  },
  articleSection: "Product Marketing",
  keywords:
    "AI copilot, meeting assistant, note taker, street interviews, brand awareness, San Francisco, startup marketing, real-time AI, automatic summaries",
  wordCount: 5847,
  articleBody: "Full article text here or excerpt...",
  about: [
    {
      "@type": "Thing",
      name: "Artificial Intelligence",
    },
    {
      "@type": "Thing",
      name: "Meeting Software",
    },
    {
      "@type": "Thing",
      name: "Productivity Tools",
    },
  ],
  mentions: [
    {
      "@type": "SoftwareApplication",
      name: "Cluely",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

const Cluely = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Do People Actually Know What Cluely Does? I Took It To The Streets of
          San Francisco To Find Out
        </h1>

        <figure className="article-figure">
          <Image
            src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762765460/audio_1761485673309_yjd82_ciildh_uvzkik.jpg"
            alt="What is Cluely, really?"
            width={800}
            height={400}
            priority
          />
          <figcaption>What is Cluely, really?</figcaption>
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
          Cluely - yes, that AI startup that racked up over 2 billion views
          across platforms - still gets hit with the same question: what does
          Cluely even do? As the CMO, hearing that stings a little. So I did
          what any slightly-annoyed, very-curious marketer would do. I grabbed a
          stack of dollar bills, hit the mean streets of San Francisco, and
          started asking strangers if they know what Cluely is - and what we
          actually build.
        </p>

        <section>
          <h2>Why I Went Outside With A Camera And A Dollar Bill</h2>
          <p>
            Cluely has generated over 2 billion views. That’s a mind-blowing
            number. Those views came from viral product demos, tutorial threads,
            launch clips, and a stream of content across TikTok, Instagram, X,
            YouTube, and everywhere people scroll. But internet fame can be
            weird. You can be everywhere and still be misunderstood.
          </p>
          <p>
            People love to take shots and say, what does Cluely even do? And
            honestly, as a CMO, that made me a little angry. Not full meltdown
            angry - more like, if we are getting the attention, then the message
            needs to land type of angry. So instead of armchair marketing, I
            decided to test the message live. On foot. In real life.
          </p>
          <p>
            Picture me walking down Market Street, wind doing whatever it wants
            with my hair - which I swear looked chopped today - holding a
            handheld mic and a crumpled sheet that says: Here are the list of
            acceptable answers. I’m poking strangers with one question: have you
            heard of Cluely? If yes, then for a dollar, what does Cluely do?
          </p>
        </section>

        <section>
          <h2>The Ground Rules And The Acceptable Answers I Had In My Head</h2>
          <p>
            Before I started, I told the camera: Here are the list of acceptable
            answers. I did not read them on camera, so let me spell out what I
            would count as a win if someone said it back to me on the street.
          </p>
          <ul>
            <li>
              A real-time AI copilot that lives on your screen during meetings
              and interviews and gives you answers on the fly.
            </li>
            <li>
              An AI note taker - something that builds notes and meeting context
              automatically.
            </li>
            <li>
              An overlay that shows you relevant answers while someone asks you
              a question in a call or interview.
            </li>
            <li>
              It helps you not ask or answer dumb questions by surfacing the
              right info in the moment.
            </li>
            <li>
              Post-call features like automatic meeting summaries and automatic
              follow-up emails.
            </li>
          </ul>
          <p>
            If anyone hit any of those, boom - dollar time. If someone nailed
            the post-call features specifically, I upped the bounty to 10
            dollars later. Stakes were low, but hey, a dollar is a dollar. Or
            seven dollars, as you’ll see.
          </p>
        </section>

        <section>
          <h2>Let The Street Interviews Begin</h2>
          <h3>First Encounters: A Lot Of No’s, A Lot Of Polite Smiles</h3>
          <p>
            I start with the classic opener: Do you know what Cluely does? I
            walk up to a man standing near a crosswalk. He looks at me, a little
            surprised, and says, Sorry? I repeat: Have you heard of Cluely
            before? He hasn’t. I thank him and move on. Nothing dramatic, just
            the quiet sting of a clean no.
          </p>
          <p>
            I laugh it off to the camera: Man, those 2 billion views are not
            turning into anything and my hair is chopped. If you’ve ever tried
            street interviews, you know the vibe. Most people are in a hurry.
            Most people haven’t seen your product demo even if the algorithm
            swore they did. You keep going.
          </p>
          <p>
            I try again. Excuse me, have you ever heard of Cluely before?
            Another no. Okay, no worries. I keep it upbeat. The goal is data and
            vibes, not pressure.
          </p>
        </section>

        <section>
          <h2>The First Win: The Note Taker Guy Who Was Almost There</h2>
          <p>
            Next, I approach someone who actually lights up when I ask: have you
            ever heard of Cluely before? Yeah, I have heard of. That tiny spark
            of recognition is gold. I snap right into game mode: okay, wait, for
            a dollar, what is Cluely’s product?
          </p>
          <p>
            He goes: An AI to help maybe correct meetings or something. Not bad.
            He’s circling the right idea. I nudge him forward: keep going, keep
            going, what else? He adds: Helping building notes. Yes, yes, yes,
            yes. Then I try to get him to say it: What do we call that? He
            blurts out: The app. I laugh. Yes, but what do we call something
            that helps you take notes?
          </p>
          <p>
            He tries: Like a tool? The Cluely tool. Which, honestly, I love.
            Then he lands it: A note taker. Then he grins and, with the
            mischievous honesty of the internet era, asks: Is it like a cheating
            tool? Yeah, yeah, yeah. There you go. He basically connected the two
            big ideas: it helps you with notes and it helps you in the moment.
          </p>
          <p>
            I offer the dollar. He waves it off. No, that’s fine. I insist. Oh,
            you don’t even want a dollar? Then I ask if he’s a student or
            something. He laughs: Yes, I’m an intern. Oh, okay, so you’re making
            too much money for this dollar. Respect. He walks off. The camera
            catches a quick smile. If you know, you know.
          </p>
        </section>

        <section>
          <h2>More No’s: The Street Keeps You Humble</h2>
          <p>
            I keep moving. Have you ever heard of Cluely before? No. Have you
            ever heard of Cluey before? No. Okay, no worries. The wrong answers
            teach you just as much as the right ones. And honestly, the
            repetition helps. You start hearing which words people latch onto.
            You start hearing how unfamiliar names land by sound alone.
          </p>
        </section>

        <section>
          <h2>The Overlay Answer: You Can Basically Cheat On Anything</h2>
          <p>
            I approach a small group, and one person actually gets animated. Do
            you know what Cluely’s product is? He fires off: You can basically
            cheat on anything. O descriptive. I raise my eyebrows. He continues:
            You can have an overlay of the answers if someone’s asking a
            question. I ask: in what? He clarifies: On your screen, on your
            computer, during what situation? He goes for it: During an interview
            or something like that. Yes, yes. This guy gets it. He got it.
          </p>
          <p>
            We start laughing, because he boxed the concept perfectly into a
            real-life moment. In an interview, someone asks you a hard question.
            You freeze. Cluely sees the context on your screen and feeds you
            useful info so you can answer. He nailed the gist in under twenty
            seconds.
          </p>
          <p>
            Then I switch into full street-host mode and jokingly ask him: How
            much money do you make a year? He shrugs: I don’t know. I tease: You
            definitely make a mil a year. How much do you make? He plays along:
            At least a mil. Yeah. We are both in on the bit. I wave the dollar.
            Yo, this guy. You do not need this dollar. We laugh. He hands back
            the clout and keeps the swagger.
          </p>
        </section>

        <section>
          <h2>The On-The-Fly Answers Guy</h2>
          <p>
            I pivot to another passerby. Excuse me, have you ever heard of
            Cluely before? For a dollar, what is Cluely’s product? He thinks for
            a beat: Oh, note taking. I push: what else, what else? He adds:
            It’ll give you, like, the answers on the fly. Yes. Yes. What else?
            He pauses. I try to pull more: What else? He shrugs: I don’t know.
            That’s it? That’s all you know? That’s all I know. He closes strong
            though: It gives you the answers on the fly for, like, any
            conversation you’re trying. Okay. Yes, that’s correct. Correct. Hey,
            let’s go. I hand him a dollar. He leaves with a smile like he just
            won a tiny game show.
          </p>
        </section>

        <section>
          <h2>Sounds Familiar - But No Idea</h2>
          <p>
            Next person. Have you ever heard of Cluely before? He squints like
            he’s seen it scroll past somewhere. Yeah, sounds familiar. Why? For
            a dollar, do you know what Cluely’s product is? He shakes his head.
            No idea. It happens. Brand familiarity without message clarity is a
            thing. It tells me the top-of-funnel is doing laps, but the landing
            might be lost. We dap it up and keep walking.
          </p>
        </section>

        <section>
          <h2>The Consultant Who Tried To Look It Up</h2>
          <p>
            I spot someone with consultant energy. You know the look - focused,
            quick step, backpack that says laptop life. I ask: Do you know what
            Cluely is? He nods: I do know. For a dollar, what is Cluely’s
            product? He starts strong: They sell like... He pauses, then
            recalibrates: They’re like an AI plug in, in a way, or plugin,
            whatever, that allows you to basically, like, cheat on what? He
            answers himself: Either interviews or, like, if you’re doing, like,
            LeetCode or whatever. I think. I think so.
          </p>
          <p>
            That’s one of it. Name one more, I say. It helps you do something
            else. That’s what most people use it for. But what else is there? He
            reflexively reaches for his phone. No, you can’t look it up. You
            can’t look it up. Your consultant. I... You can figure this out.
            I... This guy can figure it out, too. It turns into a mini pep talk.
            He takes a second, then connects the dots: They help you do
            something else than cheat on LeetCode. What else could you do? Oh,
            you can probably just use it for anything if you’re, like, having a
            conversation with someone over... In what? I prompt. In a meeting.
            Meeting. Yes. Yes. He lands it. Here’s the dollar.
          </p>
        </section>

        <section>
          <h2>Another No, Then The Pitch In The Wild</h2>
          <p>
            I turn to two friends walking together. Excuse me, have you ever
            heard of Cluely before? No, we have not. That one is clean. I try
            again with a passerby in a jacket. Excuse me, sir. Have you ever
            heard of Cluely before? Of what? Of Cluely. No. Okay. It’s my
            startup. I catch myself mid-brain and give him the condensed pitch
            on the sidewalk.
          </p>
          <p>
            He asks the only question that matters: What’s it do? I deliver the
            crisp version: It’s an AI real-time media intelligence that answers
            questions for you during your meetings. You can hear in my voice
            that I’ve said this sentence a thousand times, but this time it has
            to feel alive. He nods: Oh, interesting. Would you like to learn
            more about it? I’m ready to pull out a QR code and a product demo on
            the spot, but he glances at his watch. I gotta get walking. All
            right. Okay. That’s street life. If you make the on-the-go moment
            count, they will come back later. Or they won’t. Either way, the
            pitch got cleaner.
          </p>
        </section>

        <section>
          <h2>The Crowd That Had Never Heard Of It - And The Pre-Med Twist</h2>
          <p>
            I step into a small plaza and project: Has anyone here heard of
            Cluely before? Anyone heard of Cluely? No. No one’s heard of it? No
            one? No one? No one? No one? No one? No? No one? No one? No. It
            becomes a rhythm, like a call and response to the algorithm gods. I
            grin and keep asking questions because I am not leaving without a
            mini story.
          </p>
          <p>
            I ask one of them: What do you do? Work. Nothing. You’re unemployed?
            Unemployed? Yes. Okay. The marketer part of my brain lights up. You
            can use our tool to get a job. I say it with no irony. Because
            legit, if you are prepping for interviews, trying to sound concise,
            hunting for talking points, or tracking what to say after a call,
            this thing can help. He looks up. I can? Yes, yes, yes.
          </p>
          <p>
            I ask: How much money do you want to be making postgrad? He hedges.
            I don’t know. Probably go to medical school. Medical? Oh, you’re
            going to med school? Yeah. Okay. I don’t know if it’ll help you
            cheat on that. We all laugh because that line writes itself. He
            smiles, we dap, and I move on. The city keeps flowing around us like
            we’re not filming anything at all.
          </p>
        </section>

        <section>
          <h2>The Invisible Copilot Answer</h2>
          <p>
            Next person says: I have. Have you ever heard of Cluely before? I
            perk up. Okay, for a dollar, what is Cluely’s product? He goes right
            to the metaphor: So it’s a copilot or it’s like an invisible
            copilot. Yes. Where it sees what you’re doing and then it gives you
            real time, I guess, feedback to answer questions or whatever.
          </p>
          <p>
            That phrasing hits. Invisible copilot. It captures the feeling of it
            running quietly, watching your screen context, and giving you the
            info you need so you can look smooth under pressure. I ask: Have you
            ever used it? The moment breaks as the sidewalk choreography bumps
            us to the next exchange. The dollar is in play, but we get
            interrupted. You can hear me start a sentence: Okay, are you a
            dol... Then it segues right into the next person like the city
            edited the scene for us.
          </p>
        </section>

        <section>
          <h2>The Billboard Memory: No Dumb Questions</h2>
          <p>
            I ask someone else: Do you know what Cluely is? He says, Yes, I do.
            Yo, you do? You do? I light up. He explains how: I saw the ad on the
            freaking thing or whatever. The one thing. Dumb. No dumb questions.
            Clue or something. Oh, you saw the billboard? I saw the random
            billboard. That’s it.
          </p>
          <p>
            We had a billboard that played with the idea of asking dumb
            questions and not wanting to be the person who freezes when the
            obvious thing slips your mind. It clearly stuck with him as a
            tagline, even if the product details didn’t load in. I test it
            anyway: Okay, for a dollar, what is Cluely’s product? He riffs: So
            you don’t answer dumb questions or ask dumb questions. That it? It
            is not the full answer, but it is part of the vibe. Even that sliver
            tells me the campaign anchored to something memorable.
          </p>
        </section>

        <section>
          <h2>We Had Given Away $7 - Time For A $10 Question</h2>
          <p>
            I look into the camera and call it: We have just given away $7 and
            we’re gonna give $10 to anyone who knows about Cluely’s post call
            features. So let’s go. Bigger prize, more specific question. If
            someone knows this, they didn’t just see us in passing - they saw a
            demo, a thread, or a product page.
          </p>
        </section>

        <section>
          <h2>The $10 Winner: Post-Call Summaries And Follow-Up Emails</h2>
          <p>
            I find a guy who seems like he’s in builder mode - headphones around
            the neck, eyes bright, a little amused that I’m pushing cash for
            knowledge. Excuse me, sir. For $10, what are Cluely’s post call
            features? He smiles like he has the cheat codes. Oh, that’s actually
            really easy. There’s actually two main features.
          </p>
          <p>
            He ticks them off cleanly, like he rehearsed. The first feature is a
            post call meeting summary. So after your call, Cluely will
            automatically generate a list of all the main points of the call and
            it could even separate into different categories. Wow. Okay. And
            what’s the second feature? He fakes me out with an I don’t know.
            Then he locks it in: Oh, the second feature is the automatic follow
            up email. So after my call, Cluely will automatically draft up a
            follow up email for me to easily send.
          </p>
          <p>
            I am genuinely impressed, and I ask what everyone wants to know:
            Wow. How did you know all that? He grins and stays perfectly on
            brand: Give me my money. I hand him the ten. He walks away a little
            richer and deeply validated.
          </p>
        </section>

        <section>
          <h2>What The Day Told Me</h2>
          <p>
            By the end of the loop, here is what the sidewalk taught me. A good
            amount of people actually do know what Cluely’s product is. The
            phrases that stuck were note taker, cheating tool, answers on the
            fly, overlay, and invisible copilot. When people try to name it
            fast, they default to the scenario: interviews, meetings, LeetCode
            practice, conversations where you want to sound sharp.
          </p>
          <p>
            When I pitched it, I called it an AI real-time media intelligence
            that answers questions for you during your meetings. When others
            pitched it back, they called it a plugin that lets you cheat or a
            tool that helps you not ask dumb questions. The truth sits in the
            middle. It is a real-time AI copilot that sits quietly on your
            screen, sees context, and surfaces the exact info you need, plus it
            captures the conversation, builds structured notes, and then after
            you hang up it summarizes the call and drafts the follow-up so you
            do not drop the ball.
          </p>
          <p>
            Also, the name gets said a hundred different ways: Cluely, Cluly,
            Clulee, Cluey, Clue. I will answer to all of them if it means you
            know what the product does. And yes, 2 billion views do not
            magically convert into 2 billion explanations. You still have to
            walk outside and ask. You still have to catch people between coffee
            and a crosswalk and earn the sentence you want them to say.
          </p>
        </section>

        <section>
          <h2>Everything People Said, Collected And Clarified</h2>
          <h3>Real-Time Copilot During Live Conversations</h3>
          <ul>
            <li>
              It gives you answers on the fly while you are talking in a meeting
              or interview.
            </li>
            <li>
              It shows an overlay with relevant information as someone asks you
              a question.
            </li>
            <li>
              It acts like an invisible copilot that sees what you are doing and
              feeds you helpful context.
            </li>
          </ul>
          <h3>AI Note Taking And Context Building</h3>
          <ul>
            <li>
              Helps with building notes automatically so you do not scramble
              afterward.
            </li>
            <li>Captures the main points, decisions, and action items.</li>
          </ul>
          <h3>Cheating Tool - The Spicy Street Version</h3>
          <ul>
            <li>
              People called it a cheating tool because it helps you sound
              prepared in the moment.
            </li>
            <li>
              They named interviews, meetings, and even LeetCode as scenarios.
            </li>
            <li>
              Translation: it reduces blank-mind panic by surfacing answers
              fast.
            </li>
          </ul>
          <h3>Post-Call Magic</h3>
          <ul>
            <li>Automatic post-call meeting summaries, neatly categorized.</li>
            <li>Automatic follow-up emails drafted and ready to send.</li>
          </ul>
        </section>

        <section>
          <h2>Street-Level Moments You Did Not See But Definitely Felt</h2>
          <p>
            Every time I asked someone, I was reading micro-expressions. The
            tiny forehead crease when the name rings a bell. The half-smile when
            someone realizes they do know it and can win a dollar. The quick
            withdraw when I say AI and they assume this is a pitch. Street
            interviews are 10 percent question, 90 percent permission. And yes,
            my hair was catching wind in the worst way. Chopped. We move anyway.
          </p>
          <p>
            When people said no, it was never hostile. It was the normal no of a
            city on the move. When they said yes, it was often with a spark -
            the internal I think I saw this on my For You Page. When someone
            tried to look it up, I blocked the search with love. No Google,
            trust your brain. When I teased someone about a million-dollar
            salary, it was just joy. When I told an unemployed student he could
            use our tool to get a job, I meant it. Even if he is going to med
            school and I cannot help him cheat on the MCAT.
          </p>
        </section>

        <section>
          <h2>If You Only Remember One Line</h2>
          <p>
            Cluely is a real-time AI copilot for your screen that gives you
            answers during meetings and interviews, takes notes for you, and
            after the call it writes the summary and drafts the follow-up email.
            Or in street language: it helps you not ask or answer dumb questions
            when it matters.
          </p>
        </section>

        <section>
          <h2>Final Tally, Next Steps, And A Simple Ask</h2>
          <p>
            We gave away $7 for the quick hits and $10 to the post-call features
            legend. More important, we got proof that the message is landing.
            Not perfectly. Not universally. But enough that strangers could say
            note taker, on-the-fly answers, overlay, invisible copilot, and yes
            - the spicy word - cheating.
          </p>
          <p>
            I am going to keep doing this. More street interviews. More product
            videos. More ways to make the invisible part of the product feel
            obvious. If you want to follow along, subscribe, like the channel,
            and keep an eye out for the next episode.
          </p>
          <p>
            Also subscribe to Daniel Mintz, which is my personal channel. Make
            sure to stay super pumped and I will see you guys next time.
            Alright, peace. Cluely out.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Cluely;
