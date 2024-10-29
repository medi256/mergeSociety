import Link from "next/link";
import ScrollToTop from "../ScrollToTop";

export const metadata = {
  title: "Complete HTML Tutorial: From Beginner to Pro | MergeSociety",
  description:
    "Master HTML with our in-depth tutorial. Covers everything from basic tags to advanced concepts. Perfect for beginners and intermediate web developers.",
  keywords:
    "HTML tutorial, web development, HTML basics, HTML5, learn HTML, coding for beginners, web design, front-end development",
  openGraph: {
    title: "Complete HTML Tutorial: From Beginner to Pro | MergeSociety",
    description:
      "Dive into our comprehensive HTML guide. Learn to create stunning websites with our step-by-step lessons. Start your web development journey today!",
  },
};

const HTMLCourse = () => {
  return (
    <div className="container">
      <ScrollToTop />
      <main>
        <h1>HTML Tutorial</h1>
        <p>
          Don't know where to begin? <Link href={"/guide"}>click here</Link>
          ➡️ to get an introduction!
        </p>
        <p>
          Looking for practice projects?{" "}
          <Link href="/projects" passHref>
            Click here to explore coding projects!
          </Link>
        </p>
        <br />
        <p>Choose a topic to start learning:</p>
        <section className="section">
          <h2>Introduction</h2>
          <div className="grid">
            <Link href="/html/html-introduction">
              <div className="card">
                <h3>Introduction to HTML</h3>
                <p>
                  Learn the basics of HTML, the foundation of web development.
                </p>
              </div>
            </Link>
            <Link href="/html/html-basics">
              <div className="card">
                <h3>HTML Basics</h3>
                <p>
                  Get familiar with the essential HTML tags and their usage.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Text and Formatting</h2>
          <div className="grid">
            <Link href="/html/html-headings">
              <div className="card">
                <h3>HTML Headings</h3>
                <p>Learn how to create headings for your web content.</p>
              </div>
            </Link>
            <Link href="/html/html-paragraphs">
              <div className="card">
                <h3>HTML Paragraphs</h3>
                <p>Structure your content with paragraphs.</p>
              </div>
            </Link>
            <Link href="/html/html-text-formatting">
              <div className="card">
                <h3>HTML Text Formatting</h3>
                <p>Style your text with HTML's built-in formatting tags.</p>
              </div>
            </Link>
            <Link href="/html/html-lists">
              <div className="card">
                <h3>HTML Lists</h3>
                <p>Learn how to create both ordered and unordered lists.</p>
              </div>
            </Link>
            <Link href="/html/html-links">
              <div className="card">
                <h3>HTML Links</h3>
                <p>
                  Learn how to create hyperlinks and navigate between pages.
                </p>
              </div>
            </Link>
            <Link href="/html/html-attributes">
              <div className="card">
                <h3>HTML Attributes</h3>
                <p>Explore HTML attributes and how to enhance your elements.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Media</h2>
          <div className="grid">
            <Link href="/html/html-images">
              <div className="card">
                <h3>HTML Images</h3>
                <p>Learn how to add and format images on your web page.</p>
              </div>
            </Link>
            <Link href="/html/html-audio">
              <div className="card">
                <h3>HTML Audio</h3>
                <p>Embed audio files and control playback.</p>
              </div>
            </Link>
            <Link href="/html/html-video">
              <div className="card">
                <h3>HTML Video</h3>
                <p>Learn how to embed videos with HTML's video tag.</p>
              </div>
            </Link>
            <Link href="/html/html-iframes">
              <div className="card">
                <h3>Embedding YouTube Videos with Iframes</h3>
                <p>Embed external content like YouTube videos using iframes.</p>
              </div>
            </Link>
            <Link href="/html/html-favicon">
              <div className="card">
                <h3>Adding a Favicon in HTML</h3>
                <p>Learn how to add a favicon to your website.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Forms and User Input</h2>
          <div className="grid">
            <Link href="/html/html-forms">
              <div className="card">
                <h3>Creating Forms in HTML</h3>
                <p>Learn how to create and style forms in HTML.</p>
              </div>
            </Link>
            <Link href="/html/html-buttons">
              <div className="card">
                <h3>Creating Buttons in HTML</h3>
                <p>
                  Learn how to create interactive buttons for forms and actions.
                </p>
              </div>
            </Link>
            <Link href="/html/html-dropdown-menu">
              <div className="card">
                <h3>Dropdown Menu</h3>
                <p>Learn how to create dropdown menus for user selection.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Document Structure</h2>
          <div className="grid">
            <Link href="/html/html-div-element">
              <div className="card">
                <h3>HTML Div Element</h3>
                <p>Learn how to group elements with the div tag.</p>
              </div>
            </Link>
            <Link href="/html/html-span-element">
              <div className="card">
                <h3>HTML Span Element</h3>
                <p>Learn about inline grouping with the span element.</p>
              </div>
            </Link>
            <Link href="/html/html-inline-elements">
              <div className="card">
                <h3>HTML Inline Elements</h3>
                <p>Explore the difference between inline and block elements.</p>
              </div>
            </Link>
            <Link href="/html/html-block-elements">
              <div className="card">
                <h3>HTML Block Elements</h3>
                <p>Understand how block elements work in HTML.</p>
              </div>
            </Link>
            <Link href="/html/html-document-structure">
              <div className="card">
                <h3>HTML Document Structure</h3>
                <p>Learn the basic structure of an HTML document.</p>
              </div>
            </Link>
            <Link href="/html/semantic-html">
              <div className="card">
                <h3>Semantic HTML</h3>
                <p>Learn the importance of using semantic elements.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Advanced HTML Topics</h2>
          <div className="grid">
            <Link href="/html/html-tables">
              <div className="card">
                <h3>HTML Tables</h3>
                <p>Learn how to create and format tables.</p>
              </div>
            </Link>
            <Link href="/html/html-head-element">
              <div className="card">
                <h3>HTML Head Element</h3>
                <p>Understand the metadata of an HTML document.</p>
              </div>
            </Link>
            <Link href="/html/html-quotations-citations">
              <div className="card">
                <h3>HTML Quotations and Citations</h3>
                <p>Learn how to use blockquote and cite tags.</p>
              </div>
            </Link>
            <Link href="/html/html-entities">
              <div className="card">
                <h3>HTML Entities</h3>
                <p>Explore how to use character entities in HTML.</p>
              </div>
            </Link>
            <Link href="/html/html-preformatted-text">
              <div className="card">
                <h3>HTML Preformatted Text (Pre Element)</h3>
                <p>
                  Learn about the pre element and how it preserves formatting.
                </p>
              </div>
            </Link>
            <Link href="/html/html-comments">
              <div className="card">
                <h3>HTML Comments</h3>
                <p>Understand how to add comments in your HTML code.</p>
              </div>
            </Link>
            <Link href="/html/html-meta-tags">
              <div className="card">
                <h3>Responsive Design with Meta Tags</h3>
                <p>
                  Learn how to use meta tags for better mobile responsiveness.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HTMLCourse;
