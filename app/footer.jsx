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
                  aria-label="Follow us on Instagram"
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/mergesociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <i className="fa-brands fa-facebook"></i> Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCBdiANU6Cvlnihd50dkxK-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on YouTube"
                >
                  <i className="fa-brands fa-youtube"></i> YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/medi256"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on GitHub"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:managersebowa4525@gmail.com"
                  aria-label="Email us"
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
                <Link href="/" aria-label="Browse Home Page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" aria-label="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" aria-label="Browse Projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" aria-label="Contact Us">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/html" aria-label="Browse HTML Articles">
                  HTML
                </Link>
              </li>
              <li>
                <Link href="/css" aria-label="Browse CSS Articles">
                  CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/javascript"
                  aria-label="Browse JavaScript Articles"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/react" aria-label="Browse React Articles">
                  React
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-legal">
            <h6 className="footer-heading">Legal</h6>
            <ul>
              <li>
                <Link href="/privacy" aria-label="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" aria-label="Terms of Service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} MergeSociety. All rights
              reserved.
            </p>
            <div className="footer-links">
              <Link href="/sitemap.xml" aria-label="Sitemap">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
