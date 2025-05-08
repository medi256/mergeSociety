import NewsTicker from "./main/Main";
import MoreArticles from "./moreButton";
import GridNews from "./section/Section";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
import Section4 from "./section/section4";
import Section5 from "./section/section5";
import Section6 from "./section/section6";
// import Section7 from "./section/section7";
import Section8 from "./section/section8";
import Section9 from "./section/section9";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NewsTicker />
      <GridNews />
      <section>
        <Section2 />

        <MoreArticles route={"/ai"} />
        <Section5 />
        <MoreArticles route={"/startup-stories"} />

        <Section3 />
        <MoreArticles route={"/tech"} />
      </section>
      <Section4 />
      <MoreArticles route={"/apps"} />
      <Section6 />

      <MoreArticles route={"/code-report"} />
      {/* <Section7 /> */}
      <Section8 />

      <MoreArticles route={"/interviews"} />
      <Section9 />
      <MoreArticles route={"/acquisitions"} />

      <footer className="homepage-footer">
        <div className="footer-container">
          <div className="footer-social">
            <h6 className="footer-heading">Follow Us</h6>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.instagram.com/medi45.of?utm_source=qr&igsh=YnR4bnd4bHFzZWNo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/@manager70191"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100088699977603"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@merge.corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <i className="fa-brands fa-tiktok"></i> TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Codak_3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a href="mailto:managersebowa4525@gmail.com" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i> Email
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-quick-links">
            <h6 className="footer-heading">Quick Links</h6>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/html">HTML</Link>
              </li>
              <li>
                <Link href="/css">CSS</Link>
              </li>
              <li>
                <Link href="/javascript">JavaScript</Link>
              </li>
              <li>
                <Link href="/react">React</Link>
              </li>
            </ul>
          </div>

          <div className="footer-legal">
            <h6 className="footer-heading">Legal</h6>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} MergeSociety. All rights
              reserved.
            </p>
            <div className="footer-links">
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
