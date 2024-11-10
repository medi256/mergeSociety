import { Project } from "../NextBlogButton";

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
    <div className="lesson-container">
      <div className="container">
        <header className="hero">
          <h1>About MergeSociety</h1>
          <p>
            Empowering web developers through my personal expertise and passion
            for teaching web development.
          </p>
        </header>

        <section className="section">
          <h2>My Mission</h2>
          <p>
            I'm a passionate web developer and educator with a goal to make web
            development accessible to everyone. Through MergeSociety, I provide
            comprehensive tutorials on HTML, CSS, JavaScript, and React, helping
            aspiring developers learn at their own pace.
          </p>
        </section>

        <section className="section">
          <h2>What I Offer</h2>
          <p>
            As a solo creator, I build all the tutorials, blog posts, and
            projects on MergeSociety. My content is designed to give you
            practical knowledge and hands-on experience, no matter your skill
            level.
          </p>
        </section>

        <section className="section">
          <h2>About Me</h2>
          <p>
            I'm the sole creator and developer behind MergeSociety. With years
            of experience in web development, I understand the challenges
            beginners face, and I'm here to guide you through your learning
            journey.
          </p>
        </section>

        <section className="section">
          <h2>My Values</h2>
          <ul>
            <li>Accessibility: Free and open education for all</li>
            <li>Quality: Expert-led tutorials and up-to-date content</li>
            <li>Community: Helping learners grow and succeed</li>
          </ul>
        </section>
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default AboutPage;
