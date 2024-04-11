import LazyIframe from "./LazyIframe";
import "./Video.css";

const LearnByWatchingVideos = () => {
  return (
    <div>
      <div className="welcome-header">
        <h1>Explore Web Development with Fun Video Lessons</h1>
        <p>
          {`
          Welcome to our web development learning platform! Dive into the world
          of web development with easy-to-follow video tutorials. Whether you're
          a beginner or looking to enhance your skills, our step-by-step guides
          will help you grasp web development concepts effortlessly. Just press
          play and start your coding journey!`}
        </p>

        <h2>HTML videos</h2>

        <div className="container">
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/GzCm-kVOjwo?si=RDkiWyK-XVbjrbwQ"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/qz0aGYrrlhU?si=aLQJUkRkY1B5Ptbc"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/kUMe1FH4CHE?si=-lKu41UeA99oUEO3"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/FQdaUv95mR8?si=9r6dFrqsW4bzz22A"
              title="YouTube video player"
            />
          </div>
        </div>
        <h2>CSS videos</h2>
        <div className="container">
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/OXGznpKZ_sA?si=eY6Jr8pc4_XSyDlA"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/wRNinF7YQqQ?si=kGdviv-qFaaGP5Ic"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/J5KxiOnIrKg?si=NM7ciCZX4ObaM5xF"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/Icf5D3fEKbM?si=RNDcTN_zhzIpG-MJ"
              title="YouTube video player"
            />
          </div>
        </div>
        <h2>Javascript videos</h2>
        <div className="container">
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/8dWL3wF_OMw?si=cb18oo_yL_T5L0-t"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/PkZNo7MFNFg?si=4aYJEikCuqDF0C9r"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/XIOLqoPHCJ4?si=hbmAJDPe9llqm59_"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/xc3a_CJhjCc?si=bg09RPwTjxIMwpyt"
              title="YouTube video player"
            />
          </div>
        </div>
        <h2>React.js videos</h2>
        <div className="container">
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/cd3P3yXyx30?si=4WRMxvFSV5O0gs_Q"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/2-crBg6wpp0?si=mcW8G-H-NIyc3EIq"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/LDB4uaJ87e0?si=QdqcS_UPuQWQgzbX"
              title="YouTube video player"
            />
          </div>
          <div>
            <LazyIframe
              src="https://www.youtube.com/embed/4DqAvWonPAg?si=i45zGcqDw-cPvdcJ"
              title="YouTube video player"
            />
          </div>
        </div>
      </div>
      <footer>
        <h2>Feedback</h2>
        <p>Help me enhance this website by providing your valuable feedback.</p>
        <p>
          {`
          Feel free to reach out on my social media platforms to share your
          thoughts. Additionally, if you have any questions about something you
          don't understand, message me, and I'll do my best to make it clearer
          for you.`}
        </p>
        <p>
          {`
          If you're interested in investing or collaborating with me in this website development, send me a message on my social media platforms or via
          email.`}
        </p>
        <p>
          Simply click on the social media icons below to connect with me. Your
          input and engagement are greatly appreciated!
        </p>
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
      </footer>
    </div>
  );
};

export default LearnByWatchingVideos;
