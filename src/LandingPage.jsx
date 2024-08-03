import { PolicyView } from "./Policy";
import ScrollToTop from "./ScrollToTop";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ScrollToTop />
      <main className="main-content">
        <h1 className="title">Unlock Your Web Development Potential</h1>
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
      <footer className="footer">
        <p>&copy; 2024 MergeSociety. All rights reserved.</p>
        <PolicyView />
      </footer>
    </div>
  );
};

export default LandingPage;
