import React from "react";
import Link from "next/link";
// import Image from "next/image";
import CommentSection from "@/app/commentSection";

export const metadata = {
  title:
    "Tencent: How a Quiet Founder Built the Chinese Super App Empire by Breaking Every Silicon Valley Rule",
  description:
    "Discover how Ma Huateng (Pony Ma) quietly built Tencent into a $450B+ empire that controls how a billion people communicate, shop, and live - while Silicon Valley wasn't watching.",
  keywords: [
    "Tencent empire",
    "Pony Ma story",
    "Chinese super app",
    "WeChat revolution",
    "QQ origins",
    "digital empire building",
    "virtual goods monetization",
    "Chinese tech innovation",
    "Ma Huateng biography",
    "super app business model",
    "gaming industry dominance",
    "digital payments revolution",
    "tech regulation survival",
    "global tech investments",
    "Silicon Valley disruption",
  ],
  category: "Technology Leadership",

  openGraph: {
    title: "Tencent: How a Quiet Founder Built the Chinese Super App Empire",
    description:
      "The untold story of how Ma Huateng quietly outmaneuvered Silicon Valley to build a digital empire bigger than Facebook - and why the West is now copying his playbook.",
    url: "https://www.mergesociety.com/startup-stories/pony-ma",
    siteName: "TechHistory Archives",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745747700/Ma-Huateng_uii6rl.jpg",
        width: 1200,
        height: 630,
        alt: "Ma Huateng (Pony Ma) - The quiet founder who built Tencent's digital empire and revolutionized the tech industry",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T10:15:00Z",
    modifiedTime: "2025-07-01T14:30:00Z", // Updated to current date
    section: "Tech Leadership",
    authors: ["TechHistory Archives"],
    tags: [
      "Tencent Empire",
      "Pony Ma",
      "Chinese Tech Revolution",
      "Super App Strategy",
      "WeChat Innovation",
      "Digital Economy",
      "Gaming Dominance",
      "Tech Leadership",
      "Silicon Valley Disruption",
    ],
  },

  authors: [
    {
      name: "Merge Society Archives",
      url: "https://www.mergesociety.com/about",
    },
  ],

  creator: "TechHistory Archives",
  publisher: "TechHistory Archives",

  alternates: {
    canonical: "https://www.mergesociety.com/startup-stories/pony-ma",
    languages: {
      "en-US": "https://www.mergesociety.com/startup-stories/pony-ma",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "How Pony Ma Quietly Built a Digital Empire Bigger Than Facebook",
    description:
      "The untold story of Tencent's rise: How a shy engineer from Shenzhen broke every Silicon Valley rule to build China's most powerful tech empire.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745747700/Ma-Huateng_uii6rl.jpg",
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
      "max-snippet": 300,
      "max-video-preview": -1,
    },
  },

  // Enhanced for 2025 SEO and Google Discover
  other: {
    // Core content metrics
    "article:modified_time": "2025-07-01T14:30:00Z",
    "article:published_time": "2025-04-27T10:15:00Z",
    "article:section": "Technology Leadership",
    "reading-time": "14 minutes",
    "word-count": "4200",

    // Content freshness signals
    "content-freshness": "updated",
    "last-substantial-update": "2025-07-01",
    "update-frequency": "quarterly",

    // Google Discover optimization
    "news-keywords":
      "Tencent, Chinese tech giants, super app revolution, digital empire, WeChat innovation",
    "content-tier": "premium",
    "expertise-level": "expert",
    "story-angle": "business biography",

    // Engagement signals
    "expected-engagement": "high",
    "content-depth": "comprehensive",
    "visual-content": "enhanced",
    "interaction-elements": "FAQ, quotes, insights",

    // Topic authority
    "primary-entity": "Tencent Corporation",
    "secondary-entities": "Ma Huateng, WeChat, QQ, Chinese tech industry",
    "industry-focus": "Technology, Digital Economy, Gaming",
    "geographic-relevance": "Global, China-focused",

    // Competition and uniqueness
    "content-angle": "untold story",
    "unique-insights": "behind-scenes strategy, regulatory navigation",
    "competitive-advantage": "exclusive analysis",

    // Related content clusters
    "content-cluster": "Tech Empire Builders",
    "related-series": "Digital Pioneers",
    "content-pillar": "Technology Leadership",
  },

  // Enhanced JSON-LD for rich snippets
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.mergesociety.com/startup-stories/pony-ma",

    headline:
      "Tencent: How a Quiet Founder Built the Chinese Super App Empire by Breaking Every Silicon Valley Rule",
    alternativeHeadline:
      "The Untold Story of How Pony Ma Built a Digital Empire Bigger Than Facebook",

    image: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745747700/Ma-Huateng_uii6rl.jpg",
      width: 1200,
      height: 630,
      caption:
        "Ma Huateng (Pony Ma), founder of Tencent and architect of China's super app revolution",
    },

    author: {
      "@type": "Organization",
      name: "TechHistory Archives",
      url: "https://www.mergesociety.com/about",
      sameAs: ["https://twitter.com/manager70191"],
    },

    publisher: {
      "@type": "Organization",
      name: "TechHistory Archives",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
        width: 300,
        height: 60,
      },
    },

    datePublished: "2025-04-27T10:15:00Z",
    dateModified: "2025-07-01T14:30:00Z",

    description:
      "Discover how Ma Huateng (Pony Ma) quietly built Tencent into a $450B+ empire that controls how a billion people communicate, shop, and live - while Silicon Valley wasn't watching.",

    articleSection: "Technology Leadership",
    wordCount: 4200,

    about: [
      {
        "@type": "Person",
        name: "Ma Huateng",
        alternateName: "Pony Ma",
        jobTitle: "CEO and Founder of Tencent",
        description: "Chinese business magnate and founder of Tencent",
      },
      {
        "@type": "Organization",
        name: "Tencent",
        alternateName: "Tencent Holdings Limited",
        description: "Chinese multinational technology conglomerate",
        foundingDate: "1998",
        founder: "Ma Huateng",
      },
    ],

    mentions: [
      {
        "@type": "SoftwareApplication",
        name: "WeChat",
        applicationCategory: "Social Media",
      },
      {
        "@type": "SoftwareApplication",
        name: "QQ",
        applicationCategory: "Communication",
      },
    ],

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/startup-stories/pony-ma",
    },

    isAccessibleForFree: true,

    // Enhanced for Google Discover
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".key-insight", "blockquote"],
    },

    // FAQ Schema for rich snippets
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the difference between QQ and WeChat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "QQ is Tencent's early desktop chat platform, massive in China before smartphones, while WeChat is their all-in-one mobile super app for messaging, payments, social media, and commerce.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tencent bigger than Facebook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—by many metrics (user count, reach in China, and gaming dominance), Tencent has surpassed Facebook and continues to innovate well beyond social media.",
        },
      },
    ],
  },

  // 2025 AI and semantic SEO
  semanticData: {
    primaryTopic: "Technology Leadership",
    contentType: "Business Biography",
    narrativeStyle: "Investigative Profile",
    expertiseLevel: "Expert Analysis",

    // Entity relationships
    primaryEntity: "Tencent Corporation",
    keyPersonality: "Ma Huateng",
    industryContext: "Chinese Technology Sector",
    globalRelevance: "International Tech Competition",

    // Content themes
    themes: [
      "entrepreneurial journey",
      "disruptive innovation",
      "cultural adaptation",
      "regulatory navigation",
      "global expansion",
    ],

    // Semantic keywords for AI discovery
    conceptualKeywords: [
      "digital ecosystem building",
      "super app monetization",
      "cross-platform integration",
      "virtual economy creation",
      "regulatory compliance strategy",
    ],
  },

  // Performance and engagement tracking
  analytics: {
    contentPillar: "Technology Leadership",
    contentCluster: "Digital Empire Builders",
    expectedEngagement: "high",
    targetAudience: [
      "tech entrepreneurs",
      "business strategists",
      "innovation researchers",
    ],
    contentGoals: ["thought leadership", "SEO ranking", "social sharing"],

    // Update tracking
    updateType: "substantial revision",
    updateReason: "content enhancement and SEO optimization",
    previousVersion: "2025-04-27",
    changeSignificance: "major",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Tencent: How a Quiet Founder Built the Chinese Super App Empire by
          Breaking Every Silicon Valley Rule
        </h1>

        <figure className="blog-image">
          <img
            src="https://res.cloudinary.com/dhgjhspsp/image/upload/f_auto,q_auto,w_800/v1745747700/Ma-Huateng_uii6rl.jpg"
            alt="How Tencent quietly built a tech empire — The untold story of Pony Ma and China's digital dominance"
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption>
            The rise of Tencent: How Ma Huateng, also known as Pony Ma, built
            one of the world’s largest tech empires from China.
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
              dateTime="2025-04-27"
              itemProp="datePublished"
            >
              | April 27, 2025
            </time>
          </h2>
        </section>

        <p>
          What if the most powerful tech mogul you've never heard of secretly
          controls how a billion people talk, shop, and live? While the world
          obsessed over Silicon Valley's celebrities, Ma Huateng quietly rewrote
          the tech playbook from a tiny office in Shenzhen—then built a digital
          empire bigger than Facebook. Think you know how tech giants are made?
          Get ready to question everything.
        </p>

        <section>
          <h2 id="tencent-founder-story">
            The Unlikely Origin of China’s Most Important Tech Company
          </h2>
          <p>
            In 1998, Bill Gates was everywhere. Google was just a scrappy search
            engine with big dreams. Meanwhile, in a bustling, chaotic corner of
            Shenzhen, a shy engineer named Ma Huateng (you might know him as
            Pony Ma) was quietly launching a simple chat app called OICQ. Nobody
            outside mainland China cared. The <b>real story</b>? That tiny app
            grew into Tencent—a company worth <b>more than Facebook</b> and the{" "}
            <b>platform</b> the entire Chinese internet depends on.
          </p>
          <p>
            Every tech billionaire story starts somewhere. Steve Jobs had
            Silicon Valley garages. Mark Zuckerberg had Harvard dorms. But Ma’s
            journey began on the edges of China, in 1978, in the coastal city of
            Shantou. There were no computers. No networks. Just a curious boy
            who learned to watch, analyze, and quietly outmaneuver everyone
            else. His father worked at a port, providing just enough stability
            for Ma to feed his obsession—understanding how things worked.
          </p>
          <p>
            When the family relocated to Shenzhen in the 1980s, Ma found himself
            in the cockpit of China’s wild economic rocketship. Still, he wasn’t
            flashy, brazen, or even "ambitious" in the way Western founders
            brag. He studied computer science quietly at Shenzhen University,
            while Silicon Valley trained its CEOs to be showmen. His classmates
            remember him as the type who listened, not talked. Hint: this
            matters later.
          </p>
        </section>

        <section>
          <h2 id="qq-birth">QQ: From Copycat to Cult Phenomenon</h2>
          <p>
            Here’s what nobody talks about: Every billion-dollar company has its
            "almost dead" moment. Tencent was barely born when it almost ran out
            of cash and was threatened with a lawsuit from AOL. OICQ, their
            first chat app, was a clever take on Israel’s ICQ—but built for
            China’s unique language and culture. It exploded to millions of
            users overnight.
          </p>
          <ul>
            <li>Servers crashed under the weight of demand.</li>
            <li>
              AOL threatened to sue — the company dodged bankruptcy by renaming
              OICQ to QQ.
            </li>
            <li>
              Tencent had millions of loyal users… and{" "}
              <i>no idea how to make money</i>.
            </li>
          </ul>
          <p>
            By 2000, disaster loomed. Even though QQ dominated, Ma Huateng kept
            panic behind closed doors. While American internet companies chased
            ads, Ma looked deeper: What did Chinese users actually care about?
          </p>
          <blockquote>
            "Success isn’t about working harder—it's about working on what
            everyone else ignores."
          </blockquote>
        </section>

        <section>
          <h2 id="monetizing-qq">
            The QQ Gold Mine: Inventing Virtual Goods (While the West Laughed)
          </h2>
          <p>
            Most people screw this up: They chase what works for others, instead
            of what works for <b>their</b> people. Here’s exactly what Pony Ma
            noticed: Chinese youth weren’t just chatting; QQ was their badge of
            identity. Want to stand out? You customized your penguin avatar.
          </p>
          <p>
            In 2002, while Silicon Valley mocked China's "copycat" apps, Tencent
            let users buy <b>digital clothes</b> for their penguins. Boom:{" "}
            <b>profit margins above 90% overnight</b>. Kids spent real money for
            virtual outfits to flex on their friends. It didn’t stop there—soon,
            they were selling virtual flowers, chocolates, and tokens of love.
            You know what’s crazy? A student literally blew her monthly stipend
            on a rare digital costume. This wasn’t about software—this was about{" "}
            <b>social currency</b>.
          </p>
          <blockquote>
            "If you’re still reading this, you’re already ahead of 90% of
            people—because you now know social status is the real engine of the
            digital economy."
          </blockquote>
          <p>
            Unlike American users, Chinese teens practically <i>lived</i> in QQ;
            digital status meant everything.
          </p>
          <ul>
            <li>
              Memberships and virtual gifts brought in millions in recurring
              revenue.
            </li>
            <li>
              Western tech missed the virtual goods boom almost entirely for
              another decade.
            </li>
            <li>
              Tencent became as much a fashion marketplace as a tech company.
            </li>
          </ul>
        </section>

        <section>
          <h2 id="pivot-gaming">
            Why Tencent Bet the Company on Video Games—And CRUSHED The Market
          </h2>
          <p>
            Here’s the part of the story Western media get wrong: Tencent was
            never afraid to pivot—just quietly, and on their own terms. By 2003,
            QQ dominated chat. But Ma’s team realized one product wasn’t enough.
            Instead of building games from scratch (and risking epic failure),
            they smartly <b>licensed hit games from South Korean developers</b>.
          </p>
          <p>
            Critics screamed "copycat!" But Ma cared more about making money
            than making headlines. What happened next blew my mind...
          </p>
          <ul>
            <li>
              QQ users became instant gamers, no downloads required—marketing
              costs dropped to near zero.
            </li>
            <li>
              Games brought addictive engagement — people stayed hours longer
              inside the ecosystem.
            </li>
            <li>
              Gaming revenue soared, creating a twin engine with the virtual
              goods money-printer.
            </li>
          </ul>
          <blockquote>
            "Stop trying to be perfect. Start trying to be remarkable."
          </blockquote>
          <p>
            Tencent’s hybrid of social platform + integrated games became an
            unbeatable moat. Eventually, Tencent built their in-house team,
            crowned by hits like Dungeon & Fighter and, later, a $400M
            acquisition of <b>Riot Games</b> (League of Legends). That one deal
            alone outplayed every American web giant on gaming turf.
          </p>
        </section>

        <section>
          <h2 id="we-chat-birth">
            WeChat: The App That Became an Operating System
          </h2>
          <p>
            What most people get wrong about Chinese tech: It’s not about
            copying—it’s about adapting faster. In 2011, seeing the smartphone
            revolution, a small, rebellious team at Tencent (led by Alan Zhang)
            built an entirely new app from scratch: WeChat. It wasn’t just QQ on
            a phone—it was a fresh start.
          </p>
          <p>
            The killer feature? Voice messaging—solving the pain of typing
            Chinese characters on tiny screens. Adoption exploded. WeChat
            reached <b>100 million users in a single year</b>. But the next
            genius move would change the meaning of a "super app" forever.
          </p>
          <p>
            During Lunar New Year 2013, WeChat launched digital{" "}
            <b>red envelopes</b>—turning a traditional cash-gifting ritual into
            viral peer-to-peer payments. Suddenly, 8 million people sent 400
            million digital cash gifts. Within a year,{" "}
            <b>China leapfrogged to a cashless society</b>.
          </p>
          <ul>
            <li>
              WeChat expanded: bills, food, taxis, doctor visits, investing—one
              app to rule them all.
            </li>
            <li>
              It became the OS of Chinese daily life, not just a social app—not
              even Silicon Valley has an equivalent.
            </li>
            <li>
              Your "main app" = your identity, your wallet, your city pass. Try
              living in China without it.
            </li>
          </ul>
          <blockquote>
            "Most experts won’t admit this, but: China’s tech platforms
            integrated faster—and deeper—than anything the West ever attempted."
          </blockquote>
        </section>

        <section>
          <h2 id="survival-innovation">
            Surviving and Thriving Under Government Fire
          </h2>
          <p>
            Want to know the real secret to Tencent’s longevity?{" "}
            <b>Adaptation before regulation</b>. In 2017, state media slammed
            Tencent for "addicting" games. The company lost $14B in a day. What
            did Ma do? He imposed restrictions <i>before</i> the government
            forced his hand: kids capped at one hour of play, age-verified
            logins, and preemptive content screening.
          </p>
          <p>
            When Beijing froze all new game licenses in 2018, Tencent bled $200B
            in value—yet survived where competitors died. They pivoted to
            compliance, made peace with authorities, and realigned their
            narrative: "We serve society, not disrupt it."{" "}
            <i>Compliance became competitive advantage</i>.
          </p>
          <ul>
            <li>
              Tencent spent billions on social welfare, winning favor with
              regulators.
            </li>
            <li>
              10,000+ content monitors and in-house AI filter offensive or
              "problematic" material before anyone complains.
            </li>
            <li>
              Other tech moguls fell (remember Jack Ma?), while Pony Ma thrived
              via strategic silence and precision focus.
            </li>
          </ul>
          <blockquote>
            "The difference between winners and losers? Winners do what losers
            won’t."
          </blockquote>
        </section>

        <section>
          <h2 id="innovation-flip">
            From Copycat to Global Innovator: How the Tables Turned
          </h2>
          <p>
            Here’s what blew my mind the most: The world once mocked Tencent for
            copying. Guess who’s copying now?
          </p>
          <ul>
            <li>
              Facebook, Snapchat, and even Apple now mirror WeChat’s
              everything-in-one "super app" design.
            </li>
            <li>
              WeChat Stories dropped before Snapchat; Apple’s app clips and
              Google’s instant apps follow WeChat’s mini-programs.
            </li>
            <li>
              Tencent now owns stakes in <b>over 800 companies globally</b>—Epic
              Games, Spotify, Tesla, Snap—building an unbeatable radar for
              what’s next.
            </li>
          </ul>
          <blockquote>
            "The flow of innovation now runs east to west. Ignore this at your
            own risk."
          </blockquote>
          <p>
            True innovation isn’t about being first—it’s about building
            something that scales for your culture, then owning the playbook.
          </p>
        </section>

        <section>
          <h2 id="ai-cloud-smartcity">
            Inside Tencent’s Next-Gen Tech: AI, Cloud, and Smart Cities
          </h2>
          <p>
            Think Tencent is just social and games? Think again. Their AI labs
            crank out state-of-the-art breakthroughs in face recognition (99.8%
            accuracy), translation, speech, and machine learning. They own over
            70 global cloud data zones, and in Asia they’re{" "}
            <b>catching up to AWS</b> faster than anyone predicted.
          </p>
          <p>
            Here’s where it gets wild: Their mini-program ecosystem has over{" "}
            <b>400 million daily users</b> and 3.8 million apps—so influential
            that Apple and Google now chase the same model. On the enterprise
            side, their smart city platforms manage traffic, pollution, and
            public safety in cities stretching from the Pearl River Delta to
            Nairobi.
          </p>
          <ul>
            <li>
              Tencent files more AI patents than most U.S. competitors (and
              sells their tech to governments globally).
            </li>
            <li>
              City-level infrastructure is now something you associate with
              Tencent, not IBM or Oracle.
            </li>
          </ul>
          <blockquote>
            "While everyone else is fighting over scraps, you’ll be watching
            where real innovation happens."
          </blockquote>
        </section>

        <section className="faq-section">
          <h2>People Also Ask: Tencent & WeChat Super App FAQ</h2>
          <h3>What’s the difference between QQ and WeChat?</h3>
          <p>
            QQ is Tencent’s early desktop chat platform, massive in China before
            smartphones, while WeChat is their all-in-one mobile super app for
            messaging, payments, social media, and commerce.
          </p>

          <h3>Is Tencent bigger than Facebook?</h3>
          <p>
            Yes—by many metrics (user count, reach in China, and gaming
            dominance), Tencent has surpassed Facebook and continues to innovate
            well beyond social media.
          </p>

          <h3>How does WeChat make money?</h3>
          <p>
            Through payments, virtual goods, in-app games, subscription
            services, official business accounts, mini-apps, and digital
            advertising—all in one integrated ecosystem.
          </p>

          <h3>Why doesn't the West have "super apps" like WeChat?</h3>
          <p>
            Regulation differences, earlier payment infrastructure, and
            fragmented markets slowed Western super app adoption. The
            "all-in-one" model is only now being copied by Western giants like
            Meta and Apple.
          </p>
          <h3>What are Tencent’s biggest global investments?</h3>
          <p>
            Tencent owns large stakes in Epic Games, Riot Games, Supercell,
            Spotify, Tesla, and Snap, plus hundreds of smaller startups
            worldwide.
          </p>
        </section>

        <section>
          <h2 id="future">
            Tencent’s Next Move: Why You Need To Pay Attention Now
          </h2>
          <p>
            Here’s the bottom line: While the rest of the world keeps repeating
            the same tired startup stories, Tencent already built the blueprint
            for the <b>platforms of the future</b>—where digital life is tightly
            woven into payment, entertainment, and even city infrastructure.
          </p>
          <p>
            The window for seeing—and stealing—what works is closing fast. By
            the time regulators and Western giants finish catching up, Tencent
            will have moved, once again, where no one else sees opportunity.
          </p>
          <blockquote>
            "What I’ve shared here is powerful, but it’s only scratching the
            surface of the world’s most relentless tech empire."
          </blockquote>
          <p>
            If you’re reading this, you now know why the most important tech
            innovations are happening outside the places everyone expects.
            Winners adapt, observe, copy, and—when the time is right—build
            something better for billions.
          </p>
          <p>
            Will you be one of the few who implements what you’ve learned, or
            will you wonder what happened after the next digital empire rises in
            the East?
          </p>
        </section>

        {/* Internal linking opportunities */}
        <aside>
          <h3>Related Topics You’ll Want to Explore Next</h3>
          <ul>
            <li>
              <Link href="/startup-stories/fake-it">
                The Fine Line Between Faking It and Fraud: How Fake It Till You
                Make It Shapes Success, Scandal, and Everything In Between
              </Link>
            </li>
            <li>
              <Link href="/startup-stories/snap-chat">
                How Snapchat Became a Social Media Giant—Yet Still Struggles to
                Make Money
              </Link>
            </li>
            <li>
              <Link href="/startup-stories/satya">
                Satya Nadella on the Future Beyond SaaS: How AI Agents Are
                Reshaping Business, Science, and Opportunit
              </Link>
            </li>
            <li>
              <Link href="/startup-stories/invidia">
                Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s
                Most Valuable—and What Could Take It Down
              </Link>
            </li>
          </ul>
        </aside>
        <CommentSection />
      </article>
    </div>
  );
}
