import Link from "next/link";
import "../html/course.css";

export const metadata = {
  title: "Comprehensive CSS Tutorial | Learn CSS from Basics to Advanced",
  description:
    "Master CSS with our in-depth tutorial covering everything from basic syntax to advanced layout techniques like Flexbox and Grid. Perfect for beginners and experienced developers alike.",
  keywords:
    "CSS, web development, HTML, styling, layout, Flexbox, Grid, responsive design",
  alternates: {
    canonical: "https://www.mergesociety.com/css",
  },
  openGraph: {
    title: "Comprehensive CSS Tutorial | Learn CSS from Basics to Advanced",
    description:
      "Master CSS with our in-depth tutorial covering everything from basic syntax to advanced layout techniques like Flexbox and Grid. Perfect for beginners and experienced developers alike.",
  },
};

const CSSCourse = () => {
  return (
    <div className="container">
      <main>
        <h1>CSS Tutorial</h1>
        {/* <p>
          Don't know where to begin? <Link href={"/guide"}>click here</Link>
          ➡️ to get an introduction!
        </p> */}
        <p>
          Looking for practice projects?{" "}
          <Link href="/projects" passHref>
            Click here to explore coding projects!
          </Link>
        </p>
        <p>
          You can also take some HTML, CSS, and JavaScript quizzes here:
          <Link href="/quizzes" passHref>
            Take Quizzes
          </Link>
        </p>
        <br />
        <p>Choose a topic to start learning:</p>
        {/* CSS Topics Section */}
        <section className="section">
          <h2>CSS Topics</h2>
          <div className="grid">
            <Link href="/css/css-introduction">
              <div className="card">
                <h3>Introduction to CSS</h3>
                <p>Learn the basics of CSS and how it styles HTML elements.</p>
              </div>
            </Link>
            <Link href="/css/css-syntax">
              <div className="card">
                <h3>CSS Syntax</h3>
                <p>Understand the syntax of CSS rules and selectors.</p>
              </div>
            </Link>
            <Link href="/css/css-inserting">
              <div className="card">
                <h3>Inserting CSS</h3>
                <p>Discover how to insert CSS in your HTML document.</p>
              </div>
            </Link>
            <Link href="/css/css-selectors">
              <div className="card">
                <h3>CSS Selectors</h3>
                <p>Learn the different types of CSS selectors.</p>
              </div>
            </Link>
            <Link href="/css/css-colors">
              <div className="card">
                <h3>CSS Colors</h3>
                <p>Explore how to apply colors to your web elements.</p>
              </div>
            </Link>
            <Link href="/css/css-fonts">
              <div className="card">
                <h3>CSS Fonts</h3>
                <p>Learn how to style text fonts using CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-backgrounds">
              <div className="card">
                <h3>CSS Backgrounds</h3>
                <p>Discover how to style element backgrounds.</p>
              </div>
            </Link>
            <Link href="/css/css-comments">
              <div className="card">
                <h3>CSS Comments</h3>
                <p>Understand how to use comments in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-borders">
              <div className="card">
                <h3>CSS Borders</h3>
                <p>Learn how to add and style borders in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-padding">
              <div className="card">
                <h3>CSS Padding</h3>
                <p>Discover how to control padding around elements.</p>
              </div>
            </Link>
            <Link href="/css/css-margins">
              <div className="card">
                <h3>CSS Margins</h3>
                <p>Learn how to manage spacing between elements.</p>
              </div>
            </Link>
            <Link href="/css/css-width">
              <div className="card">
                <h3>CSS Width</h3>
                <p>Control the width of your elements using CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-height">
              <div className="card">
                <h3>CSS Height</h3>
                <p>Adjust the height of your elements with CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-text">
              <div className="card">
                <h3>Styling Text with CSS</h3>
                <p>Learn how to style text in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-units">
              <div className="card">
                <h3>CSS Units</h3>
                <p>Understand different CSS measurement units.</p>
              </div>
            </Link>
            <Link href="/css/css-box-model">
              <div className="card">
                <h3>CSS Box Model</h3>
                <p>Learn the CSS box model for element layout.</p>
              </div>
            </Link>
            <Link href="/css/css-max-width">
              <div className="card">
                <h3>CSS Max-Width</h3>
                <p>Limit the maximum width of elements.</p>
              </div>
            </Link>
            <Link href="/css/css-max-height">
              <div className="card">
                <h3>CSS Max-Height</h3>
                <p>Set the maximum height of elements.</p>
              </div>
            </Link>
            <Link href="/css/css-min-width">
              <div className="card">
                <h3>CSS Min-Width</h3>
                <p>Define the minimum width for elements.</p>
              </div>
            </Link>
            <Link href="/css/css-min-height">
              <div className="card">
                <h3>CSS Min-Height</h3>
                <p>Set the minimum height for elements.</p>
              </div>
            </Link>
            <Link href="/css/css-lists">
              <div className="card">
                <h3>Styling Lists with CSS</h3>
                <p>Style ordered and unordered lists with CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-tables">
              <div className="card">
                <h3>Styling Tables with CSS</h3>
                <p>Learn how to style tables using CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-links">
              <div className="card">
                <h3>Styling Links with CSS</h3>
                <p>Learn how to style links and hover effects.</p>
              </div>
            </Link>
            <Link href="/css/css-images">
              <div className="card">
                <h3>Styling Images with CSS</h3>
                <p>Discover ways to style images with CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-icons">
              <div className="card">
                <h3>CSS Icons</h3>
                <p>Learn how to style and use icons with CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-float">
              <div className="card">
                <h3>CSS Float Property</h3>
                <p>Understand the float property and its usage.</p>
              </div>
            </Link>
            <Link href="/css/css-display">
              <div className="card">
                <h3>CSS Display Property</h3>
                <p>Control the display of elements using CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-position">
              <div className="card">
                <h3>CSS Position Property</h3>
                <p>Learn how to position elements using CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-z-index">
              <div className="card">
                <h3>CSS Z-index</h3>
                <p>Understand how to control the stacking order of elements.</p>
              </div>
            </Link>
            <Link href="/css/css-columns">
              <div className="card">
                <h3>CSS Columns</h3>
                <p>Learn how to create multi-column layouts.</p>
              </div>
            </Link>
            <Link href="/css/css-overflow">
              <div className="card">
                <h3>CSS Overflow Property</h3>
                <p>Handle overflowed content in elements with CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-opacity">
              <div className="card">
                <h3>CSS Opacity</h3>
                <p>Learn how to control the transparency of elements.</p>
              </div>
            </Link>
            <Link href="/css/css-outline">
              <div className="card">
                <h3>CSS Outline</h3>
                <p>Style the outline of elements in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-forms">
              <div className="card">
                <h3>Styling Forms with CSS</h3>
                <p>Learn how to style forms and input elements.</p>
              </div>
            </Link>
            <Link href="/css/css-flexbox">
              <div className="card">
                <h3>CSS Flexbox</h3>
                <p>Master the CSS Flexbox layout model.</p>
              </div>
            </Link>
            <Link href="/css/css-grid-layout">
              <div className="card">
                <h3>CSS Grid Layout</h3>
                <p>Explore the CSS Grid layout for complex designs.</p>
              </div>
            </Link>
            <Link href="/css/css-variables">
              <div className="card">
                <h3>CSS Variables</h3>
                <p>Learn how to use variables in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-media-queries">
              <div className="card">
                <h3>CSS Media Queries</h3>
                <p>
                  Control your layouts for different devices using media
                  queries.
                </p>
              </div>
            </Link>
            <Link href="/css/css-universal-selector">
              <div className="card">
                <h3>CSS Universal Selector</h3>
                <p>Learn about the universal selector in CSS.</p>
              </div>
            </Link>
            <Link href="/css/css-attribute-selectors">
              <div className="card">
                <h3>CSS Attribute Selectors</h3>
                <p>Use attribute selectors to target elements.</p>
              </div>
            </Link>
            <Link href="/css/css-transforms">
              <div className="card">
                <h3>CSS Transforms</h3>
                <p>Learn how to transform elements in 2D and 3D.</p>
              </div>
            </Link>
            <Link href="/css/css-transitions">
              <div className="card">
                <h3>CSS Transitions</h3>
                <p>Create smooth transitions between styles.</p>
              </div>
            </Link>
            <Link href="/css/css-animations">
              <div className="card">
                <h3>CSS Animations</h3>
                <p>Animate properties of elements with CSS animations.</p>
              </div>
            </Link>
            <Link href="/css/css-filters">
              <div className="card">
                <h3>CSS Filters</h3>
                <p>Apply graphical effects like blur and brightness.</p>
              </div>
            </Link>
            <Link href="/css/css-responsive-design">
              <div className="card">
                <h3>Responsive Design with CSS</h3>
                <p>Learn principles for designing responsive layouts.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CSSCourse;
