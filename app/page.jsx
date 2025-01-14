import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <main>
        <section className="h-s">
          <section className="h-container">
            <div className="h-wrapper">
              <div className="h-content">
                <h1 className="h-h1">
                  Merge
                  <span className="society-text">Society</span>
                </h1>
                <p className="h-p">
                  MergeSociety is an online resource for web developers. Our
                  content is designed to help new learners build a solid
                  foundation in HTML, CSS, JavaScript, and React.js, from basics
                  to advanced levels. We also provide in-depth articles on the
                  latest trends, tips, and tricks in web development to keep you
                  ahead of the curve.
                </p>
              </div>
            </div>
            <div className="h-btn">
              <Link href="/html">
                <button className="btn-start">Start Learning Now</button>
              </Link>
            </div>
          </section>
          <section className="guide">
            <h2>Ready to start?</h2>
            <p>
              Don't know where to begin?{" "}
              <Link className="land-link" href="/guide">
                Click here
              </Link>{" "}
              to get an introduction!
            </p>
          </section>
          <section className="guide">
            <h2>Test Your Skills!</h2>
            <p>
              If you want to take some HTML, CSS, and JavaScript quizzes, click
              below:
            </p>
            <Link className="land-link" href="/quizzes">
              Take a Quiz
            </Link>
          </section>
        </section>
        <section className="section-padding">
          <h2 className="heading">Our Courses</h2>
          <div className="course-grid">
            {["HTML", "CSS", "JavaScript", "React"].map((course) => (
              <div key={course} className="course-card">
                <h3>{course}</h3>
                <p>
                  Master the fundamentals of {course} and build amazing web
                  projects.
                </p>
                <Link
                  href={`/${course.toLowerCase()}`}
                  className="learn-link"
                  passHref
                >
                  Learn {course}
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="c-l">
          <h2 className="h-ps">
            Practical HTML,CSS and JavaScript Projects for Beginners & Experts
          </h2>

          <Link href="/projects/htmlP" passHref>
            <article className="c-cd">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736332219/html-projects_1_udgnrz.jpg"
                alt="HTML Projects for Building Real-World Websites"
                className="project-image"
                width={300}
                height={200}
                priority
              />
              <h2>HTML Projects for Beginners: A Step-by-Step Guide</h2>
              <p>
                Master HTML with hands-on projects! Learn to build everything
                from simple web pages to advanced layouts. Perfect for beginners
                and those looking to enhance their skills.
              </p>
              <button className="ct-button">Explore HTML Projects</button>
            </article>
          </Link>

          <Link href="/projects/cssP" passHref>
            <article className="c-cd">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736348371/css-projects_ngdwjn.jpg"
                alt="CSS Projects to Elevate Your Web Design Skills"
                className="project-image"
                width={300}
                height={200}
                priority
              />
              <h2>
                CSS Projects to Improve and Elevate Your Web Design Skills
              </h2>
              <p>
                Learn CSS with practical projects! Explore responsive designs,
                animations, and modern layouts to enhance your web design
                skills. Start building stunning websites today.
              </p>

              <button className="ct-button">Explore CSS Projects</button>
            </article>
          </Link>

          <Link href="/projects/javascriptP" passHref>
            <article className="c-cd">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736350846/javascript-projects_uhalsm.jpg"
                alt="JavaScript Projects for Interactive Web Development"
                className="project-image"
                width={300}
                height={200}
                priority
              />
              <h2>JavaScript Projects to Master Interactive Web Development</h2>{" "}
              <p>
                Build dynamic and interactive websites with JavaScript projects
                designed for beginners to advanced developers. Take your coding
                skills to the next level today!
              </p>
              <button className="ct-button">Explore JavaScript Projects</button>
            </article>
          </Link>
        </section>
        <br />
        <section className="blog-section">
          <h2>Web Development Blog</h2>
          <p>
            Stay updated with the latest trends, tips, and tricks in web
            development.
          </p>
          <Link href="/blog" className="blog-button">
            Read Our Blog
          </Link>
        </section>

        <section className="why-choose-section">
          <h2 className="why-choose-heading">Why Choose MergeSociety?</h2>
          <div className="why-choose-grid">
            {[
              {
                title: "Expert-Led Tutorials",
                description: "Learn from industry professionals",
              },
              {
                title: "Hands-On Projects",
                description: "Apply your skills to real-world scenarios",
              },
              {
                title: "Community Support",
                description: "Connect with fellow learners",
              },
              {
                title: "Up-to-Date Content",
                description: "Stay current with the latest technologies",
              },
            ].map((item, index) => (
              <div key={index} className="why-choose-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="call-to-action-section">
          <h2>Ready to Start Your Web Development Journey?</h2>
          <p>
            Join MergeSociety today and take the first step towards becoming a
            proficient web developer.
          </p>
          <Link href={"/html"}>
            <button className="call-to-action-button">Start With HTML</button>
          </Link>
        </section>

        <section id="html" className="html-section">
          <h2 className="html-heading">HTML5 Mastery</h2>
          <div className="html-grid">
            {[
              {
                title: "Master Semantic HTML for Better SEO",
                description:
                  "Learn how to use semantic HTML elements to improve your website's SEO and structure.",
              },
              {
                title: "Create Accessible Web Content",
                description:
                  "Understand how to build web content that is accessible to users with disabilities.",
              },
              {
                title: "Understand HTML5 APIs and Their Applications",
                description:
                  "Explore HTML5 APIs and how they can be used to enhance your web applications.",
              },
              {
                title: "Build Responsive Layouts with HTML and CSS",
                description:
                  "Learn to create responsive web layouts that look great on all devices.",
              },
              {
                title: "Enhance User Experience with Modern HTML Features",
                description:
                  "Utilize modern HTML features like custom data attributes and web components to create interactive and dynamic user experiences.",
              },
              {
                title: "Optimize Web Performance with HTML5 Best Practices",
                description:
                  "Learn best practices for optimizing web performance using HTML5 features and techniques.",
              },
            ].map((item, index) => (
              <div key={index} className="html-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="html-project">
            <strong>Project:</strong> Create a fully accessible, semantic
            personal portfolio website.
          </p>
        </section>
        <section className="b-section">
          <h2 className="b-heading">Latest Blog Posts</h2>
          <div className="b-grid">
            {[
              {
                title: "Why Learn React in 2025?",
                description:
                  "Learn Why React is the Most Popular Framework for Building Modern Websites and Web Applications.",
                id: "10",
                date: "2025-01-10",
                displayDate: "January 13, 2025",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406497/react.js_l1cyl8.jpg",
                alt: "React framework illustration",
              },
              {
                title: "Mastering JavaScript Closures: Explained with Examples",
                description:
                  "Dive Deep into JavaScript Closures: Unlock Powerful and Flexible Code Techniques",
                id: "11",
                date: "2025-01-15",
                displayDate: "January 6, 2025",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406718/javascript_dnoltz.jpg",
                alt: "JavaScript closures illustration",
              },
              {
                title: "CSS Grid vs. Flexbox: Which to Choose?",
                description:
                  "Learn the differences between CSS Grid and Flexbox and when to use each layout technique for best results.",
                id: "12",
                date: "2025-017-14",
                displayDate: "January 2, 2025",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736406947/flex-grid_hviaoa.webp",
                alt: "CSS Grid vs Flexbox illustration",
              },
              {
                title:
                  "React Hooks: A Comprehensive Guide for Beginners and Experts",
                description:
                  "Get to grips with React Hooks, their benefits, and how they can simplify state management in your React applications.",
                id: "13",
                date: "2025-01-05",
                displayDate: "January 7, 2025",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736407136/react_hooks_alcajf.jpg",
                alt: "React Hooks illustration",
              },
              {
                id: 1,
                title: "Understanding How the Internet Works",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1729264510/internet_rsw2y5.jpg",
                alt: "Understanding How the Internet Works",
                date: "January 13, 2025",
                description:
                  "Learn how the internet functions, from the basics of networking to protocols like HTTP. Understand key concepts like IP addresses, DNS, and data packet routing.",
              },
              {
                id: 2,
                title: "Progressive Web Apps: A Step-by-Step Guide",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736669823/Progressive_Web_Apps_Logo.svg_utovcn.png",
                alt: "Build a Parallax Scrolling Effect",
                date: "January 14, 2025",
                description:
                  "Learn the essentials of building Progressive Web Apps (PWAs) that combine the best of web and mobile apps. This guide covers service workers, manifest files, and offline capabilities to create a seamless user experience.",
              },
              {
                id: 3,
                title: "Mastering SEO and Content Marketing Strategies",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1729325661/search-engine-optimization-4111000_1920_wsec3v.jpg",
                alt: "Build a Parallax Scrolling Effect",
                date: "January 10, 2025",
                description:
                  "Unlock the secrets of search engine optimization (SEO) and content marketing. Understand how Google indexes pages and learn to create valuable content that attracts and engages your target audience.",
              },
              {
                id: 4,
                title: "Web Analytics: Tracking User Behavior for Better UX",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736670226/Web_Analytics_jzmlyv.jpg",
                alt: "Build a Parallax Scrolling Effect",
                date: "January 8, 2025",
                description:
                  "Harness the power of web analytics to improve your website's user experience. Learn how to set up Google Analytics, interpret user behavior data, and use tools like Hotjar and Crazy Egg to optimize your site's performance and conversion rates.",
              },
              {
                id: 5,
                title: "Cybersecurity Essentials for Web Developers",
                image:
                  "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736670828/security_uewdhv.jpg",
                alt: "Build a Parallax Scrolling Effect",
                date: "January 4, 2025",
                description:
                  "Protect your website and users with essential cybersecurity practices. Explore the importance of HTTPS, SSL certificates, and learn about common vulnerabilities like XSS and CSRF.",
              },
            ].map((item, index) => (
              <article key={index} className="b-card">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="b-image"
                  priority={index < 2} // Prioritize loading for the first two images
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0", // Rounded corners only at the top
                  }}
                />
                <div className="b-content">
                  <h3>{item.title}</h3>
                  <time dateTime={item.date} className="b-date">
                    {item.displayDate}
                  </time>
                  <p>{item.description}</p>
                  <Link href={`/blog/${item.id}`} className="b-link" passHref>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="b-call-to-action">
            <Link href="/blog" className="b-link" passHref>
              View All Posts
            </Link>
          </div>
        </section>
        <section className="dg-section">
          <div className="dg-content">
            <h2 className="dg-heading">
              Check Out Another Project I Built:
              <span className="dg-highlight">DevGallery.com</span>
            </h2>
            <Image
              src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1736410771/DevGallery_nncq4j.jpg"
              alt="DevGallery.com"
              width={600}
              height={400}
              className="dg-image"
              priority
            />
            <p className="dg-description">
              <strong>DevGallery</strong> is an online platform designed for
              developers—whether you're a junior developer, a senior developer,
              or someone just starting your coding journey. It offers a
              collection of posts, including developer roadmaps, tips, and
              tutorials on languages like JavaScript, Python, HTML, CSS, Java,
              and more.
            </p>
            <Link href="https://devgallary.com" className="dg-link" passHref>
              Visit DevGallery.com
            </Link>
          </div>
        </section>
        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            <div className="faq-item">
              <h3 className="faq-question">What is MergeSociety?</h3>
              <p className="faq-answer">
                MergeSociety is an online platform dedicated to teaching web
                development. Through step-by-step tutorials and hands-on
                projects, you'll master HTML, CSS, JavaScript, and React to
                build real-world skills.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                How can MergeSociety help me learn web development?
              </h3>
              <p className="faq-answer">
                MergeSociety guides you with practical projects that let you
                apply what you've learned. Each project is designed to improve
                your coding skills, and our blog offers tips and insights to
                enhance your learning experience.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Is MergeSociety free?</h3>
              <p className="faq-answer">
                Yes, all our tutorials, projects, and blog posts are completely
                free to access. Start learning without any cost or subscription.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                Can MergeSociety help me find a job as a web developer?
              </h3>
              <p className="faq-answer">
                Absolutely! By completing our projects and building a strong
                portfolio, you can showcase your skills to potential employers.
                Many users have successfully landed jobs after learning with us.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                What skills will I learn on MergeSociety?
              </h3>
              <p className="faq-answer">
                You'll learn core web development skills, including HTML for
                structuring content, CSS for designing beautiful layouts,
                JavaScript for creating interactive features, and React for
                building dynamic user interfaces.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                How long does it take to learn web development?
              </h3>
              <p className="faq-answer">
                The time it takes varies depending on your pace and commitment.
                With consistent practice, most people become comfortable with
                web development in a few months to a year. Patience and regular
                effort are key.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                How do I get started with MergeSociety?
              </h3>
              <p className="faq-answer">
                Start with our beginner tutorials on HTML, CSS, and JavaScript.
                Once you're comfortable, explore React and advanced topics on
                our blog to take your skills further.
              </p>
            </div>
          </div>
        </section>
      </main>

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
                <Link href="/blog">Blog</Link>
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
                <Link href="https://www.mergesociety.ccom">Dev Gallery</Link>
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
