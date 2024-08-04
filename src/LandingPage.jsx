import { PolicyView } from "./Policy";
import ScrollToTop from "./ScrollToTop";

// import './Article.css'
import Article1 from './Tempariticle/Article1';
import Article2 from './Tempariticle/Article2';
import Article3 from "./Tempariticle/Article3";
import Article4 from "./Tempariticle/Article4";
import Article5 from "./Tempariticle/Article5";

const LandingPage = () => {


  return (
    <div>
      <div className="landing-page">
        <ScrollToTop />
        <div>
          <header>
            <h2>Welcome to Merge Socity, your gateway to web development!</h2>
            <p className="tagline">
              Learn to build websites with ease, and unlock your full potential.
            </p>
          </header>
          <p>
            Are you interested in building websites, but {`don't`} know where to
            start? 🤔 Do you dream of creating a website that showcases your
            ideas, skills, or passion? 🎨{" "}
            {`We're here to help you achieve that goal! With our
          comprehensive courses, you'll`}{" "}
            learn the fundamentals of web development, from HTML to React, and
            everything in between. Our tutorials are designed to be easy to
            follow, so you can start building your website today!
          </p>
          <button
            onClick={() => (window.location.href = "/HTMLcourse/IntroductionH")}
          >
            Get Started
          </button>
          <p>
            For those already familiar with web development, feel free to
            navigate to our courses and start learning at your own pace.
          </p>
        </div>
      </div>
      <PolicyView />
      {/* yeah article remove karna ha bad me  */}
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />










    </div>
  );
};

export default LandingPage;
