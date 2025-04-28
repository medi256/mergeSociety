import Image from "next/image";
import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About MergeSociety | Empowering Web Developers",
  description:
    "Learn about MergeSociety's mission to make web development accessible to all through expert-led tutorials on HTML, CSS, JavaScript, and React. Join our community and start your web development journey today.",
  keywords: [
    "web development",
    "HTML tutorials",
    "CSS tutorials",
    "JavaScript tutorials",
    "React tutorials",
    "MergeSociety",
    "learn web development",
    "web development for beginners",
    "accessible coding education",
    "free coding resources",
    "Massa Medi",
    "tech journalism",
    "developer community",
    "tech news",
    "startup stories",
    "coding projects",
    "real-world coding",
    "tech interviews",
    "developer interviews",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/about",
  },
  author: "MergeSociety",
  url: "https://www.mergesociety.com/about",
  type: "website",
  locale: "en_US",
  openGraph: {
    title: "About MergeSociety",
    description:
      "MergeSociety empowers web developers with accessible, high-quality tutorials in HTML, CSS, JavaScript, and React. Join our community and start learning today.",
    type: "website",
    url: "https://www.mergesociety.com/about",
  },
};

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About MergeSociety</h1>
          <p>
            Welcome to MergeSociety — a modern space where technology, coding,
            and stories about the future come together. We're more than just a
            learning platform. We're a tech media space for curious developers,
            dreamers, and creators.
          </p>
        </section>

        {/* What is MergeSociety? */}
        <section className="about-section">
          <h2>What is MergeSociety?</h2>
          <p>
            MergeSociety started as a platform to teach HTML, CSS, JavaScript,
            and React.js in a simple and beginner-friendly way. But now, we've
            grown into something more — a place where coding tutorials meet tech
            journalism.
          </p>
          <p>
            From hands-on projects and quizzes to startup stories and code
            reports — MergeSociety blends learning and inspiration into one
            engaging platform.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Beginner-Friendly Tutorials:</strong> Learn the web
              development basics step by step.
            </li>
            <li>
              <strong>Real Projects:</strong> Build things that look and feel
              real. Check our <Link href="/projects">Projects section</Link>.
            </li>
            <li>
              <strong>Tech News & Analysis:</strong> Stay updated with articles
              about AI, Tech, Startups, Apps, and more.
            </li>
            <li>
              <strong>Interviews & Stories:</strong> Meet developers, startup
              founders, and people shaping the web.
            </li>
            <li>
              <strong>Community Support:</strong> Get feedback and connect with
              others through our social media and groups.
            </li>
          </ul>
        </section>

        {/* Who is it for? */}
        <section className="about-section">
          <h2>Who is MergeSociety For?</h2>
          <p>
            Whether you're a beginner just learning to code, a developer looking
            for fresh insights, or a tech enthusiast curious about what’s next —
            MergeSociety is your home.
          </p>
        </section>

        {/* Our Story */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            MergeSociety was born from the challenges of being a self-taught
            developer. Finding beginner-friendly, real-world-focused content
            wasn’t easy. That’s why we created this platform — to simplify
            learning and amplify voices in tech.
          </p>
          <p>
            What started as tutorials is now a growing tech ecosystem — for
            learners, readers, and builders.
          </p>
        </section>

        {/* Meet the Founder */}
        <section className="about-section">
          <h2>Meet the Founder</h2>
          <div className="founder-details">
            <div className="founder-info">
              <h3>Massa Medi</h3>
              <p>
                I'm Massa Medi, a 22-year-old frontend developer and the founder
                of MergeSociety. I created this platform to help developers like
                me — to make learning simpler and storytelling smarter.
              </p>
              <p>
                I've built{" "}
                <Link href="https://www.devgallary.com">DevGallery</Link> and{" "}
                <Link href="/">MergeSociety</Link>, and I'm on a mission to
                create value for the global developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <h2>Join the MergeSociety Movement</h2>
          <p>
            Explore tutorials. Read real stories. Build your future with us.
          </p>
          <Link href="/" className="cta-button">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
