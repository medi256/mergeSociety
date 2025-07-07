import React from "react";
import Image from "next/image";
import img from "/public/MS.png";
import Link from "next/link";
import MobileSidebar from "./Mobile";

const NavBar = () => {
  return (
    <>
      <header className="main-header">
        <nav className="nav-container">
          {/* Logo */}
          <Link href="/" aria-label="Home" title="Home">
            <div className="logo-section">
              <Image src={img} alt="merge society logo" className="logo-img" />
              <span className="logo-text">MergeSociety</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link href="/latest">Latest</Link>
            </li>
            <li>
              <Link href="/ai">AI</Link>
            </li>
            <li>
              <Link href="/tech">Tech</Link>
            </li>
            <li>
              <Link href="/apps">Apps</Link>
            </li>
            <li>
              <Link href="/startup-stories">Startup Stories</Link>
            </li>
            <li>
              <Link href="/code-report">Code Report</Link>
            </li>
            {/* <li>
              <Link href="/interviews">Interviews</Link>
            </li>
            <li>
              <Link href="/acquisitions">Acquisitions</Link>
            </li> */}
          </ul>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Learn
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
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
              <li>
                <Link href="/projects">Build Projects</Link>
              </li>
              <li>
                <Link href="/quizzes">Quizzes</Link>
              </li>
            </ul>
          </div>
          <MobileSidebar />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
