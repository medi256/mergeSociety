import { PolicyView } from "./Policy";
import ScrollToTop from "./ScrollToTop";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ScrollToTop />
      <main className="main-content">
        {/* <h2 className="title">Unlock Your Web Development Potential</h2> */}
        <h2 className="title">
          Join our community and master building your own website - for free
        </h2>

        <p className="subtitle">
          Learn HTML, CSS, and JavaScript to build amazing websites
        </p>
        <div className="cta-container">
          <button
            className="cta-button"
            onClick={() => (window.location.href = "/HTMLcourse/IntroductionH")}
          >
            Start Learning
          </button>
        </div>
      </main>
      <section className="features">
        <div className="feature">
          <i className="fas fa-code"></i>
          <h3>HTML Mastery</h3>
          <p>Build the structure of web pages with semantic HTML</p>
        </div>
        <div className="feature">
          <i className="fas fa-paint-brush"></i>
          <h3>CSS Wizardry</h3>
          <p>Style your websites with modern CSS techniques</p>
        </div>
        <div className="feature">
          <i className="fas fa-cogs"></i>
          <h3>JavaScript Power</h3>
          <p>Add interactivity and dynamic content to your sites</p>
        </div>
      </section>

      <section className="benefits">
        <h3>Why Choose MergeSociety?</h3>
        <ul>
          <li>Short, comprehensive lessons (5 minutes or less)</li>
          <li>Detailed explanatory videos for each topic</li>
          <li>Hands-on practice exercises to reinforce learning</li>
        </ul>
      </section>

      <section className="testimonials">
        <h3>What Our Learners Say</h3>
        <blockquote>
          "Just checked your website and I love it. I'm probably gonna use your
          website now to learn HTML. Good job!"
        </blockquote>
        <blockquote>
          "The website is easy to use and navigate. It's perfect for beginners
          like me."
        </blockquote>
      </section>

      <h3 className="ReadyMan">Ready to Start Your Web Development Journey?</h3>
      <div className="cta-container">
        <button
          className="cta-button"
          onClick={() => (window.location.href = "/HTMLcourse/IntroductionH")}
        >
          Begin Learning Now
        </button>
      </div>
      <br />
      <footer className="footer">
        <p>&copy; 2024 MergeSociety. All rights reserved.</p>
        <PolicyView />
      </footer>
    </div>
  );
};

export default LandingPage;
