import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="homepage-footer">
        <div className="footer-container">
          <div className="footer-social">
            <h6 className="footer-heading">Follow Us</h6>
            <ul className="social-links">
              <li>
                <Link
                  href="https://www.instagram.com/mergesociety_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/mergesociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FaceBook"
                >
                  <i className="fa-brands fa-facebook"></i> FaceBook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@Codak_3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i> YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:managersebowa4525@gmail.com"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope"></i> Email
                </Link>
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
};

export default Footer;
