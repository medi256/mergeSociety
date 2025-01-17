import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Building a Parallax Scrolling Effect with CSS",
  description:
    "Learn how to create a visually engaging parallax scrolling effect using CSS. This step-by-step tutorial covers setting up HTML, applying CSS, and making the effect responsive.",
  keywords: [
    "css  project for beginners",
    "css  project",
    "CSS project",
    "beginner css project",
    "master css  with projects",
    "learn css through projects",
    "Building a Parallax Scrolling Effect with CSS",
    "learn css",
    "build  css projects",
    "master css",
    "how to  master css with projects",
    "how to  build css  project",
    "styling html with css",
    "css demo project",
    "html css projects",
    "html css projects for beginners",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/5c",
  },

  openGraph: {
    title: "Building a Parallax Scrolling Effect with CSS",
    description:
      "This tutorial guides you through creating a parallax scrolling effect using CSS. Perfect for beginners looking to add visual depth to their websites.",
  },
};

const ParallaxScrollingEffect = () => {
  return (
    <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
        Building a Parallax Scrolling Effect with CSS
      </h1>

      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577912/csstype_prlpwm.jpg"
        }
        alt={"Personal Portfolio Layout Example"}
        width={600}
        height={400}
        className="project-image"
        priority
      />
      <h2 className="project-info">
        <Image
          src={
            "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="founders-image"
          priority
        />
        <span className="project-title">
          <Link href={"/about"}>Written by Massa Medi</Link>
        </span>
        <span className="project-date">| January 15, 2025</span>
      </h2>

      <p>
        In this project, we'll create a visually engaging parallax scrolling
        effect using CSS. A parallax scrolling effect is a technique where the
        background moves slower than the foreground, creating a sense of depth
        and immersion.
      </p>
      <p>Here's what we'll cover in this tutorial:</p>
      <ul>
        <li>Setting up the HTML structure for the parallax effect.</li>
        <li>Applying basic styling to the sections.</li>
        <li>Using CSS to create the parallax effect.</li>
        <li>Adding smooth scrolling for a better user experience.</li>
        <li>
          Making the parallax effect responsive for different screen sizes.
        </li>
      </ul>
      <p>
        By the end of this project, you'll have a fully functional and visually
        engaging parallax scrolling effect. Let's get started by setting up our
        project files!
      </p>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>Before we start coding, let's set up a workspace for our project:</p>
      <div
        className="step-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 1: Create Your Project Folder</h4>
        <p>
          Think of this folder like a container where we'll keep all our project
          files - just like having a special drawer for your art supplies!
        </p>
        <ul>
          <li>
            <strong>On Windows:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New" &gt; "Folder"</li>
              <li>Name it "parallax-scrolling-effect"</li>
            </ol>
          </li>
          <li>
            <strong>On Mac:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New Folder"</li>
              <li>Name it "parallax-scrolling-effect"</li>
            </ol>
          </li>
        </ul>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 2: Get Your Text Editor Ready</h4>
        <p>
          A text editor is like your crafting tool - it's where we'll write our
          code. We recommend Visual Studio Code because it's free and
          beginner-friendly!
        </p>
        <ol>
          <li>
            Download Visual Studio Code from{" "}
            <span style={{ color: "#0066cc" }}>code.visualstudio.com</span> if
            you haven't already
          </li>
          <li>Install it on your computer</li>
          <li>
            Open VS Code and drag your "parallax-scrolling-effect" folder into
            the window
          </li>
        </ol>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 3: Create Your Project Files</h4>
        <p>
          We need two special files - think of them as two pieces of paper where
          we'll write different things:
        </p>
        <ul>
          <li>
            <strong>index.html</strong> - This is like the blueprint of our
            parallax effect (the structure)
          </li>
          <li>
            <strong>styles.css</strong> - This is like our painting palette
            (where we make things pretty)
          </li>
        </ul>
        <p>To create these files:</p>
        <ol>
          <li>Click "New File" in VS Code</li>
          <li>Save it as "index.html"</li>
          <li>Create another new file</li>
          <li>Save it as "styles.css"</li>
        </ol>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>🎯 Success Check:</strong> At this point, you should have:
        </p>
        <ul>
          <li>A folder named "parallax-scrolling-effect" on your desktop</li>
          <li>Visual Studio Code open with your folder</li>
          <li>Two empty files: index.html and styles.css</li>
        </ul>
        <p>
          <strong>👉 Need Help?</strong> If something's not working, try closing
          VS Code and opening it again, or create the files using the "File →
          New File" menu.
        </p>
      </div>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Parallax Scrolling Effect HTML</h3>

      <p>
        Before we dive into CSS, let's set up the HTML structure for our
        parallax scrolling effect:
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Parallax Scrolling Effect HTML:</strong> Copy and
          paste the following code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parallax Scrolling Effect</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="parallax-section" id="section1">
    <div class="content">
      <h1>Section 1</h1>
      <p>This is the first section with a parallax background.</p>
    </div>
  </section>
  <section class="parallax-section" id="section2">
    <div class="content">
      <h1>Section 2</h1>
      <p>This is the second section with a parallax background.</p>
    </div>
  </section>
  <section class="parallax-section" id="section3">
    <div class="content">
      <h1>Section 3</h1>
      <p>This is the third section with a parallax background.</p>
    </div>
  </section>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the HTML structure:</p>
      <ul>
        <li>
          <code>&lt;section class="parallax-section" id="section1"&gt;</code>:
          Represents a section with a parallax background.
        </li>
        <li>
          <code>&lt;div class="content"&gt;</code>: Contains the content for
          each section, including a title and a paragraph.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll start applying CSS styles to our parallax
        sections.
      </p>

      <h2>Styling the Body</h2>
      <h3>Styling the Body</h3>
      <p>
        Let's start by styling the body of our HTML document to ensure a
        consistent and clean layout.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Body Styles:</strong> Copy and paste the following CSS
          code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  overflow-x: hidden;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>font-family: Arial, sans-serif;</code>: Sets the default font
          for the entire page.
        </li>
        <li>
          <code>margin: 0;</code>: Removes the default margin from the body.
        </li>
        <li>
          <code>padding: 0;</code>: Removes the default padding from the body.
        </li>
        <li>
          <code>box-sizing: border-box;</code>: Ensures that the padding and
          border are included in the element's total width and height.
        </li>
        <li>
          <code>background-color: #f4f4f4;</code>: Sets the background color of
          the body to a light gray.
        </li>
        <li>
          <code>overflow-x: hidden;</code>: Hides any horizontal overflow to
          prevent horizontal scrollbars.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the basic layout applied to your page.
      </p>
      <p>In the next step, we'll style the parallax sections.</p>

      <h2>Styling the Parallax Sections</h2>
      <h3>Styling the Parallax Sections</h3>

      <p>
        Now, let's style the parallax sections to give them a clean and modern
        look.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Parallax Section Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.parallax-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.parallax-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}

#section1::before {
  background-image: url('https://via.placeholder.com/1920x1080');
}

#section2::before {
  background-image: url('https://via.placeholder.com/1920x1080');
}

#section3::before {
  background-image: url('https://via.placeholder.com/1920x1080');
}

.content {
  text-align: center;
  z-index: 1;
}

.content h1 {
  font-size: 3rem;
  margin: 0;
}

.content p {
  font-size: 1.5rem;
  margin: 10px 0;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.parallax-section</code>: Styles the parallax sections with a
          relative position, full viewport height, and centered content.
        </li>
        <li>
          <code>.parallax-section::before</code>: Creates a pseudo-element for
          the background image with a fixed attachment to create the parallax
          effect.
        </li>
        <li>
          <code>#section1::before</code>, <code>#section2::before</code>,
          <code>#section3::before</code>: Sets the background image for each
          section.
        </li>
        <li>
          `.content`: Styles the content of each section with centered text and
          a higher z-index to ensure it appears above the background.
        </li>
        <li>
          <code>.content h1</code>: Styles the title of each section with a
          larger font size and no margin.
        </li>
        <li>
          <code>.content p</code>: Styles the paragraph of each section with a
          comfortable font size and margin.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled parallax sections.
      </p>
      <p>
        In the next step, we'll add smooth scrolling for a better user
        experience.
      </p>

      <h2>Adding Smooth Scrolling</h2>
      <h3>Adding Smooth Scrolling</h3>
      <p>
        Let's add smooth scrolling to enhance the user experience of the
        parallax effect.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Smooth Scrolling:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`html {
  scroll-behavior: smooth;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rule we just added:</p>
      <ul>
        <li>
          <code>scroll-behavior: smooth;</code>: Adds smooth scrolling to the
          entire document, making the scroll experience more fluid.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser and scroll, you'll notice the smooth scrolling effect.
      </p>
      <p>
        In the next step, we'll make the parallax effect responsive for
        different screen sizes.
      </p>

      <h2>Making the Parallax Effect Responsive</h2>
      <h3>Making the Parallax Effect Responsive</h3>

      <p>
        Let's ensure our parallax effect looks great on various devices by
        adding responsive design using CSS media queries.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Responsive Design Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`@media (max-width: 768px) {
  .parallax-section {
    height: auto;
    padding: 50px 20px;
  }

  .content h1 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>@media (max-width: 768px)</code>: A media query for screens up
          to 768px wide (e.g., tablets and mobile phones).
        </li>
        <li>
          <code>.parallax-section</code>: Adjusts the height of the sections to
          auto and adds padding for better visibility on smaller screens.
        </li>
        <li>
          <code>.content h1</code>: Adjusts the font size of the title for
          better readability on smaller screens.
        </li>
        <li>
          <code>.content p</code>: Adjusts the font size of the paragraph for
          better readability on smaller screens.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you resize your browser window or
        view the parallax effect on different devices, you'll see the layout
        adapt to different screen sizes.
      </p>
      <p>In the next step, we'll add final touches to the parallax effect.</p>

      <h2>Adding Final Touches</h2>
      <h3>Adding Final Touches</h3>
      <p>
        Let's add the final touches to our parallax scrolling effect to ensure
        it is fully functional and visually appealing.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Final Touches:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.parallax-section:hover::before {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.parallax-section:hover::before</code>: Scales the background
          image slightly larger on hover to create a subtle zoom effect.
        </li>
        <li>
          <code>transition: transform 0.5s ease;</code>: Adds a smooth
          transition effect for the zoom effect.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the final touches in action.
      </p>
      <p>
        Congratulations! You've completed the CSS project, "Build a Parallax
        Scrolling Effect." You've learned how to create a visually engaging
        parallax scrolling effect using HTML and CSS.
      </p>
      <p>
        Feel free to continue customizing your parallax effect and exploring
        more CSS techniques. Happy coding! 🚀
      </p>
      <h3>Recommended</h3>
      <CssProjectssssss />
    </article>
  );
};

export default ParallaxScrollingEffect;

export const CssProjectssssss = () => {
  const cssOnlyProjectTitles = [
    {
      id: "1c",
      title: "Build a Simple Personal Portfolio Layout",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736527272/cssstyling_ouoarm.jpg",
      alt: "Build a Simple Personal Portfolio Layout",
      date: "January 15, 2025",
      description:
        "Learn how to style a personal portfolio using basic CSS properties like background colors, fonts, and spacing. Focus on layout fundamentals such as margins, padding, and text alignment.",
    },
    {
      id: "2c",
      title: "Style a Blog Post with CSS",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577431/cssblog_stuovd.jpg",
      alt: "Style a Blog Post with CSS",
      date: "January 11, 2025",
      description:
        "Style a simple blog post using CSS. Learn how to apply font families, text colors, and adjust line height and spacing to enhance readability.",
    },
    {
      id: "3c",
      title: "Create a Responsive Navigation Menu",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577561/cssresume_n7bzyu.jpg",
      alt: "Create a Responsive Navigation Menu",
      date: "January 17, 2025",
      description:
        "Build a responsive navigation menu that works across devices using media queries. This project focuses on layout design and adapting styles for smaller screens.",
    },
    {
      id: "4c",
      title: "Design an Advanced Pricing Table",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577692/restaurantcss_taihjr.jpg",
      alt: "Design an Advanced Pricing Table",
      date: "January 20, 2025",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
    },
    {
      id: "6c",
      title: "Create a CSS Animation for Button Hover Effects",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736578044/lastCSS_wjgdhm.jpg",
      alt: "Create a CSS Animation for Button Hover Effects",
      date: "January 15, 2025",
      description:
        "Explore the power of CSS animations by designing interactive button hover effects. This project focuses on keyframes, transitions, and animation timing functions.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">CSS-Only Projects</h1>

      <div className="posts-grid">
        {cssOnlyProjectTitles.map((project) => (
          <Link key={project.id} href={`/projects/cssP/${project.id}`} passHref>
            <div className="post-card">
              <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <div className="post-button ct-button">Start Tutorial</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
