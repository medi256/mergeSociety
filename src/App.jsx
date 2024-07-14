import CourseNavLinks from "./CourseNavLinks";

const App = () => (
  <div>
    <header className="header">
      <div className="containers">
        <div className="logo">
          <span className="icon">
            <i className="fa-solid fa-globe"></i>
          </span>
          <h1 id="merge-society" title="Learn to Code with Merge Society">
            MergeSociety
          </h1>
        </div>
        <div className="social-links">
          <div>
            <div>
              <a
                href="https://www.instagram.com/medi45.of?utm_source=qr&igsh=YnR4bnd4bHFzZWNo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.twitter.com/@manager70191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100088699977603"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@merge.corp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@Codak_3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div>
              <a href="mailto:managersebowa4525@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <CourseNavLinks />
    </header>
  </div>
);

export default App;
