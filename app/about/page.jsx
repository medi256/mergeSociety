"use client";

import { useRouter } from "next/navigation";

const AboutPage = () => {
  let router = useRouter();
  return (
    <div>
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
        <button onClick={() => router.back()}>Back</button>
      </div>
    </div>
  );
};

export default AboutPage;
