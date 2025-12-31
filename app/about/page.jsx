import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About MergeSociety | Tech Platform by Developer Massa Medi",
  description:
    "Founded by Massa Medi, a self-taught developer from Uganda serving a global community of 3,000+ developers. Daily programming tutorials, tech news, coding insights across all languages and frameworks.",
  keywords: [
    "Massa Medi developer",
    "MergeSociety",
    "programming tutorials",
    "tech news platform",
    "coding education",
    "developer blog",
    "software development tutorials",
    "tech journalism",
    "global developer community",
    "learn programming online",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/about",
  },
  author: "Massa Medi",
  url: "https://www.mergesociety.com/about",
  type: "website",
  locale: "en_US",
  openGraph: {
    title: "About MergeSociety - Tech Platform by Massa Medi",
    description:
      "Daily programming tutorials and tech coverage serving 3,000+ developers worldwide. From Uganda to the world.",
    type: "website",
    url: "https://www.mergesociety.com/about",
  },
};

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section className="about-hero">
          <h1>About MergeSociety</h1>
          <p>
            A tech platform publishing daily content on programming, software
            development, and the tech industry. Built by Massa Medi, a
            self-taught developer from Kampala, Uganda, serving a global
            community of developers and tech enthusiasts.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Cover</h2>
          <p>
            MergeSociety publishes tutorials, analysis, and stories across the
            entire spectrum of programming and technology. From beginner coding
            lessons to advanced development techniques, from AI breakthroughs to
            startup launches, from developer tools to industry trends - if it's
            happening in tech, we're covering it.
          </p>
          <p>
            We release new content every single day. Our approach is simple:
            explain things clearly, show real examples, and give readers the
            context they need to understand not just how something works, but
            why it matters.
          </p>
        </section>

        <section className="about-section">
          <h2>What You'll Find Here</h2>
          <ul>
            <li>
              <strong>
                {" "}
                <Link href="/">Programming Tutorials</Link>:
              </strong>{" "}
              Step-by-step guides across multiple languages and frameworks -
              HTML, CSS, JavaScript, React, Python, and more. From fundamentals
              to advanced concepts.
            </li>
            <li>
              <strong>Real Projects:</strong> Hands-on builds you can follow
              along with and add to your portfolio. Check our{" "}
              <Link href="/projects">Projects section</Link> to see what people
              are creating.
            </li>
            <li>
              <strong>
                {" "}
                <Link href="/tech">Tech Industry Coverage</Link>:
              </strong>{" "}
              Analysis of AI developments, new app launches, startup funding
              rounds, developer tools, and where the industry is heading.
            </li>
            <li>
              <strong>
                <Link href="/code-report">Coding Insights</Link>:
              </strong>{" "}
              Deep dives into development practices, architecture decisions,
              problem-solving approaches, and the craft of writing software.
            </li>
            <li>
              <strong>Developer Stories:</strong> Interviews and profiles of
              founders, engineers, and makers building products that matter.
            </li>
            <li>
              <strong>
                <Link href="/">Daily Publishing</Link>:
              </strong>{" "}
              New articles every day, covering whatever is most relevant,
              interesting, or useful in tech right now.
            </li>
            <li>
              <strong>
                <Link href="/quizzes">Quiz</Link>:
              </strong>{" "}
              Test your knowledge with our weekly coding quizzes and challenges.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Global Community</h2>
          <p>
            MergeSociety has grown into a community of over 3,000 developers and
            tech enthusiasts from around the world. Our readers span from San
            Francisco to Singapore, from Lagos to London, united by a shared
            interest in learning and staying informed about technology.
          </p>
          <ul>
            <li>
              <strong>Instagram:</strong>{" "}
              <Link
                href="https://www.instagram.com/mergesociety_"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mergesociety_
              </Link>{" "}
              - 3,000+ developers worldwide getting daily coding tips, tech
              news, and development insights
            </li>
            <li>
              <strong>YouTube:</strong>{" "}
              <Link
                href="https://www.youtube.com/channel/UCBdiANU6Cvlnihd50dkxK-Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Codak_3
              </Link>{" "}
              - Video tutorials and tech coverage averaging 1,000+ views,
              reaching developers across continents
            </li>
            <li>
              <strong>Website:</strong> Thousands of daily readers from every
              corner of the internet, coming for tutorials and staying for the
              tech coverage
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Who This Serves</h2>
          <p>
            <strong>Developers at any level</strong> - whether you're writing
            your first line of code or architecting systems at scale. If you're
            learning a new language, exploring a framework, or trying to
            understand a concept, you'll find clear explanations here.
          </p>
          <p>
            <strong>Tech professionals staying current</strong> - engineers,
            product managers, designers, and anyone who needs to understand
            what's happening in the industry, which tools are emerging, and
            where technology is heading.
          </p>
          <p>
            <strong>Curious minds exploring tech</strong> - people interested in
            understanding how software works, what developers do, and why
            certain technologies matter. No prior experience required.
          </p>
        </section>

        <section className="about-section">
          <h2>The Origin Story</h2>
          <p>
            MergeSociety started as a solution to a problem I faced as a
            self-taught developer in Uganda. Good programming education was
            either locked behind expensive courses or scattered across
            low-quality tutorials that skipped crucial steps or assumed too much
            prior knowledge.
          </p>
          <p>
            I started documenting what I learned as I learned it - first HTML
            and CSS basics, then JavaScript, then frameworks and libraries as I
            expanded my skills. Each article was me figuring something out and
            explaining it clearly enough that someone starting from zero could
            follow along.
          </p>
          <p>
            But coding skills alone aren't enough. You also need to understand
            the broader tech landscape - what's being built, why it matters,
            which technologies are worth learning, and where the industry is
            going. That's why the platform evolved to include tech journalism
            alongside tutorials.
          </p>
          <p>
            What began as personal documentation has grown into a daily
            publishing platform serving thousands of readers worldwide. From
            Kampala to the world - that's the journey.
          </p>
        </section>

        <section className="about-section">
          <h2>Meet the Founder</h2>
          <div className="founder-details">
            <div className="founder-info">
              <h3>Massa Medi</h3>
              <p>
                I'm a 22-year-old developer and founder of MergeSociety, based
                in Kampala, Uganda. I'm entirely self-taught - everything I know
                about programming, I learned through documentation, tutorials,
                projects, and plenty of debugging sessions.
              </p>
              <p>
                I built MergeSociety to create the resource I wish existed when
                I was starting out. Clear tutorials that don't skip steps. Tech
                coverage that provides context, not just headlines. Real
                projects that build actual skills. And a community where asking
                questions isn't treated as weakness.
              </p>
              <p>
                I write every article on this platform. I test every code
                example. I choose what to cover based on what I think will
                genuinely help people, not what's trending for clicks. When I
                cover tech news, I research deeply. When I interview someone, I
                ask real questions. When I teach a concept, I've used it in
                practice.
              </p>
              <p>
                My goal is simple: make programming knowledge and tech context
                accessible to anyone, anywhere, who's willing to learn. Location
                shouldn't determine access to quality education. That's what
                MergeSociety is about.
              </p>
              <p>
                <strong>Connect with me:</strong> Follow along on{" "}
                <Link
                  href="https://www.instagram.com/mergesociety_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>{" "}
                for daily updates, or{" "}
                <Link
                  href="https://www.youtube.com/channel/UCBdiANU6Cvlnihd50dkxK-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </Link>{" "}
                for video tutorials and tech discussions.
              </p>
              <p>
                {" "}
                <Link
                  href="mailto:managersebowa4525@gmail.com"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope"></i>Via my Email
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>How We Work</h2>
          <p>
            Every tutorial on MergeSociety comes from direct experience. If I'm
            teaching a programming concept, it's because I've used it in real
            projects. If I'm covering a tech development, I've researched it
            thoroughly and understand the implications. If I'm interviewing
            someone, I'm asking questions I genuinely want answered.
          </p>
          <p>
            Code examples are complete and tested - they actually run. Technical
            explanations are written to be accurate while remaining accessible.
            Tech coverage provides analysis, not just aggregated headlines.
            Everything is written in plain language without unnecessary jargon.
          </p>
          <p>
            We publish daily because consistency matters. Developers check in
            regularly, and there's always something new to learn or cover. Some
            days it's a tutorial. Some days it's tech news analysis. Some days
            it's a deep dive into a particular technology or trend. But there's
            always something new.
          </p>
        </section>

        <section className="about-cta">
          <h2>Start Exploring</h2>
          <p>
            Whether you're here for tutorials, tech news, or both - dive in. New
            content every day. A global community learning together. Everything
            you need to level up your skills and stay informed.
          </p>
          <Link href="/" className="cta-button">
            Explore Content
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
