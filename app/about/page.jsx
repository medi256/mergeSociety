import Image from "next/image";
import Link from "next/link";

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
            Welcome to MergeSociety, your go-to platform for mastering web
            development fundamentals, including HTML, CSS, JavaScript, and
            React.js. Whether you're a beginner or an experienced developer,
            we're here to help you learn, grow, and build amazing things.
          </p>
        </section>

        {/* What is MergeSociety? */}
        <section className="about-section">
          <h2>What is MergeSociety?</h2>
          <p>
            MergeSociety is an online platform designed to make web development
            accessible to everyone. We provide step-by-step tutorials, hands-on
            projects, and expert-led guides to help you master HTML, CSS,
            JavaScript, React, and more. Additionally, our blog covers trending
            topics in tech to keep you updated.
          </p>
          <p>
            Our mission is to empower developers of all levels to build
            real-world skills and create impactful projects. Whether you're
            learning the basics or diving into advanced topics, MergeSociety has
            something for you.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-section">
          <h2>What We Offer</h2>
          <p>
            MergeSociety is more than just a tutorial site—it's a community of
            developers who share a passion for learning and building. Here's
            what you'll find on our platform:
          </p>
          <ul>
            <li>
              <strong>Beginner-Friendly Tutorials:</strong> Learn the basics of
              HTML, CSS, JavaScript, and React.js with easy-to-follow guides.
            </li>
            <li>
              <strong>Hands-On Projects:</strong> Apply what you've learned by
              building real-world projects. Check out some of our projects:{" "}
              <Link href="/projects">
                HTML, CSS, and JavaScript Projects with Step-by-Step Tutorials
              </Link>
              .
            </li>
            <li>
              <strong>Expert Insights:</strong> Get tips and best practices from
              experienced developers. You can reach out to me via my{" "}
              <Link href="/contact">Contact Me</Link> page or through my social
              media links in the footer.
            </li>
            <li>
              <strong>Community Support:</strong> Connect with other developers,
              share your work, and get feedback through our social media
              profiles or Facebook groups like <strong>MergeSociety</strong>.
            </li>
          </ul>
        </section>

        {/* Who is MergeSociety For? */}
        <section className="about-section">
          <h2>Who is MergeSociety For?</h2>
          <p>
            MergeSociety is for anyone passionate about web development and
            exploring topics like HTML, CSS, JavaScript, and React.js. Whether
            you're:
          </p>
          <ul>
            <li>A beginner looking to learn the basics of coding.</li>
            <li>An experienced developer seeking to expand your skill set.</li>
            <li>A hobbyist who wants to build fun and creative projects.</li>
            <li>
              A professional aiming to stay up-to-date with the latest
              technologies.
            </li>
          </ul>
          <p>
            If you're curious about web development or want to take your skills
            to the next level, MergeSociety is for you.
          </p>
        </section>

        {/* Our Story */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            MergeSociety was born out of a passion for teaching and a desire to
            make coding education more accessible. As a self-taught developer, I
            know how challenging it can be to find reliable, beginner-friendly
            resources. That's why I created MergeSociety—to provide a platform
            where anyone can learn web development, including HTML, CSS,
            JavaScript, and React.js, no matter their background or experience
            level.
          </p>
          <p>
            What started as a small blog has grown into a thriving community of
            developers who share a common goal: to learn, grow, and build
            amazing things together.
          </p>
        </section>

        {/* Meet the Founder */}
        <section className="about-section">
          <h2>Meet the Founder</h2>
          <div className="founder-details">
            <Image
              src="https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
              alt="Massa Medi"
              width={200}
              height={200}
              className="founder-image"
              priority
            />
            <div className="founder-info">
              <h3>Massa Medi</h3>
              <p>
                Hi, I'm Massa Medi, the founder of MergeSociety. I'm a
                22-year-old frontend developer with a passion for teaching and
                building startups. My goal is to create a platform where
                developers can learn, grow, and connect with others who share
                their passion for coding.
              </p>
              <p>
                So far, I've built two websites:{" "}
                <Link href="https://www.devgallary.com">DevGallery</Link> and{" "}
                <Link href="/">MergeSociety</Link>. I'm excited to continue
                growing and creating valuable resources for the developer
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="about-cta">
          <h2>Join the MergeSociety Community</h2>
          <p>
            Ready to start your web development journey? Explore our tutorials,
            join our community, and start building your skills today.
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
