import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage">
      <main>
        <section className="home-section">
          <h1 className="home-h1">Learn HTML, CSS, JavaScript and react js</h1>
          <p className="home-p">
            Embark on your web development journey with our comprehensive
            tutorials and insightful blog posts.
          </p>
          <Link href="/html">
            <button className="btn-start">Start Learning Now </button>
          </Link>
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
                <Link href={`/${course.toLowerCase()}`} className="learn-link">
                  Learn {course}
                </Link>
              </div>
            ))}
          </div>
        </section>

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
          {/* <button className="call-to-action-button">Sign Up Now</button> */}
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

        <section id="blog" className="blog-section">
          <h2 className="blog-heading">Latest Blog Posts</h2>
          <div className="blog-grid">
            {[
              {
                title: "Why Learn React in 2024?",
                description:
                  "Discover why React remains one of the most popular frameworks for modern web development.",
                id: "10",
                date: "May 8, 2024",
              },
              {
                title: "Understanding JavaScript Closures",
                description:
                  "Get a deep dive into JavaScript closures and how they can be used to create powerful and flexible code.",
                id: "11",
                date: "June 15, 2024",
              },
              {
                title: "CSS Grid vs. Flexbox: Which to Choose?",
                description:
                  "Learn the differences between CSS Grid and Flexbox and when to use each layout technique for best results.",
                id: "12",
                date: "July 22, 2024",
              },
              {
                title: "React Hooks: A Comprehensive Guide",
                description:
                  "Get to grips with React Hooks, their benefits, and how they can simplify state management in your React applications.",
                id: "13",
                date: "August 5, 2024",
              },
            ].map((item, index) => (
              <article key={index} className="blog-article">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={`/blog/${item.id}`} className="blog-link" passHref>
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            <div className="faq-item">
              <h3 className="faq-question">What is MergeSociety?</h3>
              <p className="faq-answer">
                MergeSociety is a platform where you can learn web development
                by mastering HTML, CSS, JavaScript, and React. We offer clear
                tutorials and practical projects to help you build your skills.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                How will MergeSociety help me learn web development?
              </h3>
              <p className="faq-answer">
                You will learn by working on various projects step-by-step. Each
                project will help you practice what you've learned and improve
                your skills. You can also read our blog for tips and insights on
                web development.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Is MergeSociety free to use?</h3>
              <p className="faq-answer">
                Yes, all of our tutorials and blog content are completely free.
                You can access and learn from all our resources without any
                cost.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                Can MergeSociety help me get a job as a web developer?
              </h3>
              <p className="faq-answer">
                Yes, many people who use MergeSociety to learn web development
                go on to find jobs in the field. By completing our projects and
                building a strong portfolio, you can improve your chances of
                getting hired.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What skills will I learn?</h3>
              <p className="faq-answer">
                You’ll learn the essential skills for web development, including
                HTML for structuring web pages, CSS for styling, JavaScript for
                adding interactivity, and React for building dynamic user
                interfaces.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                How long does it take to learn web development?
              </h3>
              <p className="faq-answer">
                Learning web development is a journey and varies for each
                person. It might take several months to a year or more to become
                comfortable with these skills. The key is to practice regularly
                and be patient with your progress.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How do I get started?</h3>
              <p className="faq-answer">
                If you're new to web development, start with our beginner
                tutorials on HTML, CSS, and JavaScript. If you have some
                experience, you can dive into React and our blog for more
                advanced topics.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="homepage-footer">
        <div className="footer-container">
          <ul className="social-links">
            <h6>Social Media Links</h6>
            <li>
              <a
                href="https://www.instagram.com/medi45.of?utm_source=qr&igsh=YnR4bnd4bHFzZWNo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/@manager70191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100088699977603"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@merge.corp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i> TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Codak_3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </li>
            <li>
              <a href="mailto:managersebowa4525@gmail.com">
                <i className="fa-solid fa-envelope"></i> Email
              </a>
            </li>
          </ul>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} MergeSociety. All rights
              reserved.
            </p>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy & Terms of Service</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
