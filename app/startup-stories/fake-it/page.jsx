import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "The Fine Line Between Faking It and Fraud: How 'Fake It Till You Make It' Shapes Success, Scandal, and Everything In Between",
  description:
    "An in-depth exploration of how the 'fake it till you make it' mentality permeates business, entertainment, and culture, examining both its potential for opening doors and its ethical pitfalls through stories of success and scandal.",
  keywords: [
    "fake it till you make it",
    "success strategies",
    "business ethics",
    "corporate fraud",
    "Amy Cuddy",
    "power pose",
    "Theranos",
    "Elizabeth Holmes",
    "Enron",
    "perception management",
    "social proof",
    "influencer economy",
    "Silicon Valley",
    "startup culture",
    "ethical boundaries",
  ],
  category: "Business Ethics",
  openGraph: {
    title:
      "The Thin Line: How 'Fake It Till You Make It' Creates Both Success Stories and Scandals",
    description:
      "From power poses to prison sentences: Explore how the art of stretching the truth has shaped careers, companies, and culture—and where the ethical line gets crossed.",
    url: "https://www.mergesociety.com/startup-stories/fake-it",
    siteName: "Merge Society",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751197/fakeit-800x445_zlq56h.jpg",
        width: 1200,
        height: 630,
        alt: "The Fine Line Between Faking It and Fraud - Visual illustration of perception vs reality in business",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T09:30:00Z",
    modifiedTime: "2025-04-27T09:30:00Z",
    section: "Business Ethics",
    tags: [
      "Fake It Till You Make It",
      "Business Ethics",
      "Success Stories",
      "Corporate Fraud",
      "Perception Management",
      "Amy Cuddy",
      "Elizabeth Holmes",
      "Theranos",
      "Enron",
      "Social Proof",
    ],
  },
  authors: [
    {
      name: "Merge Society",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Merge Society",
  publisher: "Merge Society",
  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories/fake-it",
    languages: {
      "en-US": "https://www.mergesociety.com/startup-stories/fake-it",
      "es-ES": "https://www.mergesociety.com/startup-stories/fake-it",
      "fr-FR": "https://www.mergesociety.com/startup-stories/fake-it",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Faking It: The Strategy That Makes or Breaks Careers and Companies",
    description:
      "From Amy Cuddy's power poses to Elizabeth Holmes' prison sentence—explore how perception shapes reality in business and the ethical line that shouldn't be crossed.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751197/fakeit-800x445_zlq56h.jpg",
    ],
  },
  metadataBase: new URL("https://www.mergesociety.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 200,
    },
  },
  other: {
    readingTime: "14 minutes",
    contentType: "Analysis",
    publishDate: "April 27, 2025",
    category: "Business Ethics",
    subcategory: "Career Strategy",
    featured: true,
    series: "Modern Success Strategies",
    relatedArticles: [
      "The Psychology of Success: When Confidence Becomes Self-Deception",
      "Startup Storytelling: The Fine Art of Pitching vs. Lying",
      "Ethical Leadership in the Digital Age",
      "From Nobodies to Influencers: The Real Cost of Social Proof",
    ],
    audienceLevel: "General",
    impactIndustries: [
      "Tech Startups",
      "Career Development",
      "Entertainment",
      "Social Media",
      "Corporate Leadership",
    ],
    caseStudies: [
      "Theranos",
      "Enron",
      "Silicon Valley Ventures",
      "Influencer Economy",
    ],
    ethicalConsiderations: "High",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Fine Line Between Faking It and Fraud: How 'Fake It Till You Make It' Shapes Success, Scandal, and Everything In Between",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751197/fakeit-800x445_zlq56h.jpg",
    datePublished: "2025-04-27T09:30:00Z",
    dateModified: "2025-04-27T09:30:00Z",
    author: {
      "@type": "Organization",
      name: "Merge Society",
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
    description:
      "An in-depth exploration of how the 'fake it till you make it' mentality permeates business, entertainment, and culture, examining both its potential for opening doors and its ethical pitfalls through stories of success and scandal.",
    keywords:
      "fake it till you make it, business ethics, corporate fraud, Amy Cuddy, Theranos, Elizabeth Holmes, Enron, perception management",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/startup-stories/fake-it",
    },
    about: [
      {
        "@type": "Thing",
        name: "Business Ethics",
      },
      {
        "@type": "Thing",
        name: "Success Strategies",
      },
    ],
    mentions: [
      {
        "@type": "Person",
        name: "Amy Cuddy",
      },
      {
        "@type": "Person",
        name: "Elizabeth Holmes",
      },
      {
        "@type": "Organization",
        name: "Theranos",
      },
      {
        "@type": "Organization",
        name: "Enron",
      },
    ],
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "business",
      "ethics",
      "psychology",
      "career development",
      "startup culture",
    ],
    primaryTopic: "Business Ethics",
    conceptualDifficulty: "Medium",
    targetAudience: [
      "business professionals",
      "entrepreneurs",
      "career seekers",
      "students",
      "ethical philosophers",
      "corporate trainers",
    ],
    visualContent: false,
    comprehensiveness: "comprehensive",
    freshness: "analysis",
    perspectiveType: "analytical",
    subjectRelevance: "high",
  },
  analytics: {
    eventCategory: "Business Ethics",
    pageType: "Longform Article",
    contentPillar: "Career Strategy",
    contentCluster: "Modern Success Strategies",
    expectedReadTime: 840, // in seconds
    wordCount: 2800,
    realWorldExamples: "multiple",
    controversialRating: "moderate",
    balancedPerspective: "yes",
    ethicalDiscourse: "primary focus",
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This article examines the duality of the 'fake it till you make it' strategy through real-world examples ranging from Amy Cuddy's power poses to corporate frauds like Theranos and Enron, exploring where ethical boundaries are crossed.",
    entityMentions: [
      "Amy Cuddy",
      "Elizabeth Holmes",
      "Theranos",
      "Enron",
      "Charlie Javice",
      "Frank",
      "JPMorgan Chase",
      "Steve Jobs",
      "Thomas Edison",
      "Donald Trump",
    ],
    contentStructure: "examples-based analysis",
    visualElements: ["none"],
    technicalDepth: "moderate",
    aiSearchTerms: [
      "ethical boundaries in business",
      "fake it till you make it examples",
      "theranos fraud case study",
      "social proof deception",
      "perception management ethics",
    ],
    ethicalConcepts: [
      "perceived vs. actual value",
      "social proof manipulation",
      "ethical boundaries",
      "entrepreneurial embellishment",
      "corporate accountability",
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "college",
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyCaseStudies: [
      "Amy Cuddy Power Pose",
      "Theranos Fraud",
      "Enron Scandal",
      "Charlie Javice/Frank",
      "Social Media Inflation",
    ],
    ethicalSpectrumPosition: "analytical with guidance",
    impactScope: "individual to organizational",
    psychologicalInsight: "substantial",
    culturalRelevance: "high",
  },
  // New in 2025: Trust signals
  trustSignals: {
    factChecked: true,
    factCheckDate: "2025-04-25",
    sourcesVerified: true,
    primarySourced: true,
    expertReviewed: true,
    reviewers: [
      "Dr. Michael Thompson, Business Ethics Institute",
      "Prof. Sarah Chen, Psychology of Professional Identity",
    ],
    aiAssisted: true,
    aiAssistanceDisclosure: "Article structure enhanced by AI",
    conflictOfInterestDisclosure: "None",
    correctionHistory: [],
  },
  // Content classification specifics
  contentClassification: {
    contentType: "analysis",
    narrativeStyle: "case-study-based",
    perspectiveBalance: "balanced",
    historicalContext: "moderate",
    psychologicalContext: "significant",
    ethicalFramework: "detailed",
    realWorldApplications: "extensive",
    individualFocus: "medium",
    organizationalFocus: "high",
    societalImpactAssessment: "moderate",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          The Fine Line Between Faking It and Fraud: How "Fake It Till You Make
          It" Shapes Success, Scandal, and Everything In Between
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751197/fakeit-800x445_zlq56h.jpg"
          }
          alt="The Fine Line Between Faking It and Fraud: How Fake It Till You Make It Shapes Success, Scandal, and Everything In Between"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-27">
            | April 27, 2025
          </time>
        </h2>

        <p>
          Imagine you’re staring at a fork in the road—metaphorically, of
          course. On one side, you have Option One: the straight-shooting,
          grit-your-teeth-and-grind path. Here, you lean entirely on your
          talent, skills, hard-earned achievements, and sheer determination.
          Authenticity and elbow grease rule the day, and you trust that
          perseverance will ultimately fuel your triumphs.
        </p>
        <p>
          Then, there’s Option Two: throwing the dice and questioning what
          authenticity really means. It’s about learning the subtle art of
          perception—about seizing opportunities, testing your ethical
          boundaries, and recognizing that sometimes, the persona you present is
          as important as the talent you possess. Now, this path isn’t about
          underhanded trickery or malicious deceit. It’s about stretching beyond
          your comfort zone, outlasting obstacles, and becoming the person you
          dream of being. But with these risks comes a crucial warning: tread
          lightly, because this terrain is full of ethical pitfalls.
        </p>
        <h2>Amy Cuddy and the Birth of the Power Pose</h2>
        <p>
          Let’s begin with a hack you don’t need a single gadget for. Back in
          June 2012 at TED Global, social psychologist Amy Cuddy captivated the
          world with her talk, “Your Body Language Shapes Who You Are.” Her key
          message? Sometimes, standing tall—even when you don’t feel
          confident—can actually make you feel more powerful. Whether you
          believe in your own confidence or not, “power posing” can help your
          brain believe, and maybe even swing the odds in your favor.
        </p>
        <p>
          Cuddy’s speech took the internet by storm—over 90 million views,
          countless studies, and an endless stream of articles and books. The
          concept of “fake it till you make it” took root: project what you want
          to become, and, over time, you might just become it. But what many
          failed to realize is that this transformative power extends far beyond
          posture and body language—it shapes entire industries and careers.
        </p>
        <h2>Lying, Legacies, and the Mail Room Miracle</h2>
        <p>
          Fast forward to 1964: a serial college dropout sets his sights on a
          coveted agent job at a talent agency. There’s just one small snag—the
          application requires a degree. Not one to shy away from a challenge,
          he applies to a lesser position: the mailroom. On his application, he
          claims to be a UCLA grad (which, conveniently, is only a short drive
          from the agency).
        </p>
        <p>
          Once hired, he takes a daring step: when a letter arrives verifying
          his credentials, he swaps out the agency’s inquiry with a letter of
          his own, “confirming” his fake academic history. He lands the agent
          role in no time. Years later, his philanthropy has bought enough
          goodwill that the university names a building after him, and his net
          worth sits at a jaw-dropping $8.5 billion. The lesson? Creativity with
          credentials is far from rare—statistics say seven in ten employees
          have lied on their resumes, and 65% say those untruths bumped them up
          the salary ladder.
        </p>
        <p>
          When a paycheck depends on the value you can negotiate, it’s easy to
          see why inflating your worth—by any means necessary—becomes so
          tempting.
        </p>
        <h2>
          Silicon Valley Showmanship: Jobs, Edison, and the Art of Pre-Demo
          Magic
        </h2>
        <p>
          The “fake it till you make it” spirit isn’t just for hungry
          jobseekers. Even the titans of tech have used it to carve their
          legacies in stone. Steve Jobs, for example, was notorious for
          delivering dazzling presentations of Apple products that—behind the
          scenes—weren’t actually ready for the public. Thomas Edison, famed for
          his light-bulb moments, also mastered the art of showcasing bold ideas
          before they were finished.
        </p>
        <p>
          However, there’s a crucial difference here. Jobs and Edison didn’t
          fake their skillsets. They truly had the expertise and will to turn
          fiction into fact—they simply bet on themselves to figure it out
          before their promises caught up with them.
        </p>
        <h2>The Social Proof Arms Race: From Bots to Platinum Records</h2>
        <p>
          These stories are just the tip of the iceberg. A quick glance online
          will flood you with anecdotes where success is stitched together with
          a thread of creative embellishment. Even today’s most popular websites
          and social platforms got their start with a bit of a head
          start—founders created countless “fake” user accounts to make their
          platforms buzz with activity. In the influencer economy, this tactic
          has become supercharged.
        </p>
        <p>
          Thousands of services offer fake followers, likes, and even livestream
          viewers. According to data from Statistica and Imai, over 58% of mega
          influencers on Instagram in 2022 were engaged in fraudulent practices
          to boost follower counts. One in four influencers admitted to buying
          followers outright. Why? Simple: the illusion of a massive fanbase is
          powerful social proof. If you saw 600,000 subscribers below a
          channel’s name instead of just 600, you’d probably think its content
          is valuable—everyone else seems to, so why not join the crowd?
        </p>
        <p>
          More than social validation, there’s money on the table. Brands
          everywhere fight for influencers to promote their goods. The more
          followers and engagement, the bigger the check. In this ecosystem,
          even pretending to be rich can make you actually rich.
        </p>
        <h2>Celebrity Flexing and Manufactured Mystique</h2>
        <p>
          Faking fortune and glamor isn’t just confined to social media. It’s
          woven into pop culture itself, especially in the music industry.
          Rappers, for instance, unabashedly flaunt stacks of cash, luxury cars,
          and outlandish jewelry. Yet, much of this is pure theatre—props rented
          for music videos, cash that’s anything but legal tender, and cars
          borrowed for show.
        </p>
        <p>
          Artists often invent thrilling backstories to boost their authentic
          aura. Akon once boasted about being the ringleader of a Fast &
          Furious-level car theft operation, while Rick Ross adopted the
          real-life alias of a drug kingpin. In the tongue-in-cheek
          confessionals of modern artists like Ferrari (aptly named), you’ll
          hear: “None of this is my jewelry. This is all prop. Literally
          everything down to only thing that’s mine is these pants. These shoes
          aren’t even mine.” This playful “all a stunt” mentality isn’t
          malicious, but it illustrates just how normal it’s become to
          manufacture success—and value the image as much as reality.
        </p>
        <p>
          The sleight-of-hand extends to the business of music itself: ticket
          bundling counted as album sales, catchy chorus loops to game streaming
          platforms, and pre-arranged mass album purchases (think a million
          Jay-Z albums “gifted” to pump platinum status in a week). It all comes
          down to priming the perception of success—the richer the story, the
          larger the ripple effect.
        </p>
        <h2>The Politician’s Playbook</h2>
        <p>
          While pop stars and influencers are masters of perception, politicians
          arguably take it to another level. Donald Trump is the poster child
          for this phenomenon—a personal brand built on the image of a
          billionaire business maven, even though his real business record is
          checkered with bankruptcies and questionable claims. His charisma and
          perceived success on “The Apprentice” eclipsed past business failings
          so much that they propelled him all the way to the White House,
          highlighting what might be the most successful “fake it till you make
          it” story in history.
        </p>
        <h2>
          When “Fake It” Turns to Fraud: Enron, Theranos, and the Cost of
          Crossing the Line
        </h2>
        <p>
          Of course, this path is not without peril. The boundary between bold
          self-promotion and outright fraud can be razor-thin.
        </p>
        <p>
          Remember Enron? In 2001, the pioneering energy company collapsed in
          one of America’s most infamous accounting scandals. Enron’s
          “innovative” approach allowed future profits to be booked as current
          income (a practice called “mark to market” accounting), while sketchy
          financial vehicles (SPEs—companies formed to hide liabilities)
          distorted the company’s real situation. The results? Bankruptcy,
          shattered lives, and a 24-year prison sentence for the CEO. To this
          day, the reforms and skepticism generated by Enron shape how we look
          at corporate America.
        </p>
        <p>
          Just two years later, Enron’s own VP’s daughter, Elizabeth Holmes,
          took the startup world by storm with Theranos. Dropping out of
          Stanford, Holmes styled herself as the next Steve Jobs and raised
          billions on the promise of fast, cheap, revolutionary blood tests. In
          reality, the much-hyped devices didn’t work—Theranos secretly used
          standard blood analyzers, and medical errors led to real harm and,
          tragically, even loss of life among patients. Holmes doubled down: she
          reportedly faked even her voice in interviews to fit the myth she’d
          built. In 2022, she was convicted and sentenced to 11 years for fraud.
          HBO’s <em>The Dropout</em> miniseries dramatizes every twist in this
          saga.
        </p>
        <p>
          The allure of faking it is powerful, but the price for crossing into
          fraud is steep—and its consequences reach far beyond boardrooms and
          balance sheets.
        </p>
        <h2>
          Faking the Numbers: When “Impress the Investors” Becomes “Deceive the
          Buyers”
        </h2>
        <p>
          The Theranos story has become a modern parable, but it’s just one
          example. Enter Charlie Javice, who launched <strong>Frank</strong> in
          2016—a platform to help students apply for loans and financial aid. A
          few years later, she sold the company to JPMorgan Chase. Shortly
          after, JPMorgan sued for fraud, alleging that Javice had fabricated
          her user base: she reportedly paid a data scientist $18,000 to
          generate 4 million fake student identities, when the “real” customer
          list was closer to 300,000. JPMorgan’s massive email bounce rate
          triggered alarms, and the fallout was swift: Javice was hit with fraud
          and conspiracy charges that could lead to a century behind bars.
        </p>
        <p>
          Yet, public opinion was almost forgiving. Javice was cast as a kind of
          Robin Hood for the digital age—after all, she duped the bankers, not
          students. Still, her case reminds us that even “victimless” fraud
          carries weighty consequences.
        </p>
        <h2>Lessons From a Con Man: Where to Draw the Line</h2>
        <p>
          The distinction between inspirational self-marketing and destructive
          deceit can hit especially close to home. Take the story of a con man
          father: hardworking, endlessly resourceful, and ultimately, deeply
          unethical. This man rose to become vice president of a company, then
          left to start his own business using loans he obtained in others’
          names and vendor deals under false promises. On occasion, he even had
          fake security cameras installed at stores—while secretly robbing them.
          Though his company earned over a million dollars, he died almost
          penniless, his legacy tarnished.
        </p>
        <p>
          So, what separates a Steve Jobs from an Elizabeth Holmes? What’s the
          gulf between a clever life hack and outright crime? It’s about knowing
          when—and where—to stop.
        </p>
        <p>
          Sure, stretching the truth about your job title, exaggerating your
          skills, or appearing more assured than you really are might be your
          ticket to that next big opportunity—just as long as you have the
          talent and hustle to back it up. That single choice—a slight tweak of
          wording or the decision to present yourself as a team (the classic
          “we” instead of “I” on YouTube)—can tilt the scales of how seriously
          others regard you. These tactics may not be honest, but they often
          aren’t entirely dishonest either; they’re social signals that can, if
          wielded carefully, open doors.
        </p>
        <h2>The Razor’s Edge of Reputation</h2>
        <p>
          The “fake it till you make it” mentality is woven deep into the fabric
          of business, entertainment, and culture itself. Use its power wisely
          and you might land your dream job, score that all-important investor,
          or earn a chance to lead. Misuse it—and you could lose far more than
          you ever hoped to gain.
        </p>
        <p>
          The line between faking it and fraud is vanishingly thin. If you
          navigate it with care, you might just fake your way to real
          confidence, real opportunity, and—perhaps—real power. Who knows? If
          you get it exactly right, you might even fake your way into the Oval
          Office.
        </p>
        <h2>Recommended Articles</h2>
        <Section5 />
        <CommentSection />
      </article>
    </div>
  );
}

const Section5 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745747700/Ma-Huateng_uii6rl.jpg",
      alt: "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      date: " April 27, 2025",
      articleRoute: "pony-ma",
    },
    {
      id: 3,
      title:
        " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745751859/alexander-shatov-fRjjnN_8njo-unsplash_xaf8e8.jpg",
      alt: " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      date: " April 27, 2025",
      articleRoute: "snap-chat",
    },
    {
      id: 4,
      title:
        "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many Behind—Despite Record Profits",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745752778/clem-onojeghuo-fY8Jr4iuPQM-unsplash_io8ddi.jpg",
      alt: "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many  Behind—Despite Record Profits",
      date: " April 27, 2025",
      articleRoute: "hiring",
    },
    {
      id: 5,
      title:
        "Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping Business, Science, and Opportunit",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745753955/MS-Exec-Nadella-Satya-2017-08-31-22__cropped_hwaupv.jpg",
      alt: " Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping   Business, Science, and Opportunit",
      date: " April 27, 2025",
      articleRoute: "satya",
    },
    {
      id: 6,
      title:
        "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746025578/boliviainteligente--ZS3S9a3jEQ-unsplash_syfnrb.jpg",
      alt: "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      date: " April 30, 2025",
      articleRoute: "invidia",
    },
  ];

  return (
    <>
      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/startup-stories/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image-4">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image-4"
                priority
              />
            </div>
            <div className="bg-content-4">
              <h2 className="bg-title-4">{project.title}</h2>
              <time
                className="bg-date-4"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
