import CourseNavLinks from "./CourseNavLinks";

const App = () => (
  <div>
    <header className="header">
      <div className="containers">
        <div className="logo">
          <span className="icon">
            <i className="fa-solid fa-globe"></i>
          </span>
          <h2>mergeSociety</h2>
        </div>
        {/* <div className="toggle-icon">
          <span className="icon" id="background-toggle">
            <i className="fa-solid fa-palette"></i>
          </span>
        </div> */}
        <div className="social-links">
          <div>
            <div>
              <a href="https://www.instagram.com/medi45.of?utm_source=qr&igsh=YnR4bnd4bHFzZWNo">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com/@manager70191">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/profile.php?id=61556002944543&mibextid=ZbWKwL">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@merge.corp">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@Codak_3" target="_blank">
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
