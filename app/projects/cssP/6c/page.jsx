import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Creating a CSS Animation for Button Hover Effects",
  description:
    "Learn how to create interactive button hover effects using CSS animations, keyframes, and transitions. Follow this step-by-step tutorial to enhance your web development skills.",
  keywords: [
    "CSS hover effects project",
    "CSS animations project",
    "button hover effects project",
    "CSS keyframes project",
    "CSS transitions",
    "web development tutorial project",
    "css project",
    "dev gallery",
    "practice css",
    "build with css",
    "css beginner project",
    "style a project with css",
    "understanding css  with  projects",
    "beginner css project",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/6c",
  },

  openGraph: {
    title: "Creating a CSS Animation for Button Hover Effects",
    description:
      "Explore interactive button hover effects with CSS animations. This tutorial covers keyframes, transitions, and how to make buttons come alive with smooth hover interactions.",
  },
};

const ButtonHoverEffects = () => {
  return (
    <article
      className="lesson-container"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
        Creating a CSS Animation for Button Hover Effects
      </h1>

      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736578044/lastCSS_wjgdhm.jpg"
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
        <time className="project-date" datetime="2025-01-15">
          | January 15, 2025
        </time>
      </h2>
      <p>
        In this project, we'll explore the power of CSS animations by designing
        interactive button hover effects. We'll focus on using keyframes,
        transitions, and animation timing functions to create engaging and
        visually appealing hover effects.
      </p>
      <p>Here's what we'll cover in this tutorial:</p>
      <ul>
        <li>Setting up the HTML structure for the buttons.</li>
        <li>Applying basic styling to the buttons.</li>
        <li>Creating and applying CSS animations for hover effects.</li>
        <li>Using keyframes to define animation sequences.</li>
        <li>Exploring different animation timing functions.</li>
      </ul>
      <p>
        By the end of this project, you'll have a set of interactive buttons
        with various hover effects. Let's get started by setting up our project
        files!
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
              <li>Name it "button-hover-effects"</li>
            </ol>
          </li>
          <li>
            <strong>On Mac:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New Folder"</li>
              <li>Name it "button-hover-effects"</li>
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
            Open VS Code and drag your "button-hover-effects" folder into the
            window
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
            button hover effects (the structure)
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
          <li>A folder named "button-hover-effects" on your desktop</li>
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
      <h3>Creating the Button HTML</h3>

      <p>
        Before we dive into CSS, let's set up the HTML structure for our
        buttons:
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Button HTML:</strong> Copy and paste the following
          code into your "index.html" file:
          <SyntaxHighlighter language="html" style={docco}>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Hover Effects</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <button class="btn btn-1">Button 1</button>
    <button class="btn btn-2">Button 2</button>
    <button class="btn btn-3">Button 3</button>
    <button class="btn btn-4">Button 4</button>
  </div>
</body>
</html>`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Let's understand the HTML structure:</p>
      <ul>
        <li>
          <code> &lt;div class="container"&gt;</code>: Represents the container
          for the buttons.
        </li>
        <li>
          <code> &lt;button class="btn btn-1"&gt;</code>: Represents a button
          with a specific class for styling.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll start applying CSS styles to our buttons.
      </p>

      <h2> Styling the Body and Container</h2>
      <h3>Styling the Body and Container</h3>
      <p>
        Let's start by styling the body and container of our HTML document to
        ensure a consistent and clean layout.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Body and Container Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <SyntaxHighlighter language="css" style={docco}>
            {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}`}
          </SyntaxHighlighter>
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
          <code>display: flex;</code>: Uses flexbox to center the content.
        </li>
        <li>
          <code>justify-content: center;</code>: Horizontally centers the
          content.
        </li>
        <li>
          <code>align-items: center;</code>: Vertically centers the content.
        </li>
        <li>
          <code>height: 100vh;</code>: Sets the height of the body to the full
          viewport height.
        </li>
        <li>
          <code>.container</code>: Styles the container to display the buttons
          in a column with a gap between them and adds padding for spacing.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the basic layout applied to your page.
      </p>
      <p>In the next step, we'll style the buttons.</p>

      <h2>Styling the Buttons</h2>
      <h3>Styling the Buttons</h3>

      <p>Now, let's style the buttons to give them a clean and modern look.</p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Button Styles:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <SyntaxHighlighter language="css" style={docco}>
            {`.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.btn:hover {
  background-color: #0056b3;
}`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.btn</code>: Styles the buttons with a blue background, white
          text, no border, padding, font size, border-radius, cursor, and
          transition for smooth changes.
        </li>
        <li>
          <code>.btn:hover</code>: Changes the background color of the button on
          hover.
        </li>
        <li>
          <code>position: relative;</code>: Ensures the button can contain
          absolute elements for more complex effects.
        </li>
        <li>
          <code>overflow: hidden;</code>: Ensures any content that overflows the
          button is hidden, which is useful for effects that involve elements
          moving in and out of the button.
        </li>
        <li>
          <code>user-select: none;</code>: Prevents text selection on the
          button.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled buttons.
      </p>
      <p>
        In the next step, we'll create and apply CSS animations for hover
        effects.
      </p>

      <h2>Creating and Applying CSS Animations </h2>
      <h3>Creating and Applying CSS Animations</h3>
      <p>
        Now, let's create and apply CSS animations for the button hover effects.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Animation Styles:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <SyntaxHighlighter language="css" style={docco}>
            {`/* Button 1: Scale Effect */
.btn-1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  transition: transform 0.3s ease;
  z-index: -1;
}

.btn-1:hover::before {
  transform: scale(1);
}

/* Button 2: Slide In Effect */
.btn-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: -1;
}

.btn-2:hover::before {
  transform: translateX(0);
}

/* Button 3: Rotate and Scale Effect */
.btn-3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: rotate(45deg) scale(0);
  transition: transform 0.3s ease;
  z-index: -1;
}

.btn-3:hover::before {
  transform: rotate(45deg) scale(1);
}

/* Button 4: Background Color Change with Animation */
@keyframes colorChange {
  0% {
    background-color: #007bff;
  }
  50% {
    background-color: #0056b3;
  }
  100% {
    background-color: #003d80;
  }
}

.btn-4 {
  animation: colorChange 2s infinite;
}

.btn-4:hover {
  animation-play-state: paused;
}`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.btn-1::before</code>: Creates a pseudo-element for a scale
          effect on hover.
        </li>
        <li>
          <code>.btn-1:hover::before</code>: Scales the pseudo-element to full
          size on hover.
        </li>
        <li>
          <code>.btn-2::before</code>: Creates a pseudo-element for a slide in
          effect on hover.
        </li>
        <li>
          <code>.btn-2:hover::before</code>: Slides the pseudo-element into view
          on hover.
        </li>
        <li>
          <code>.btn-3::before</code>: Creates a pseudo-element for a rotate and
          scale effect on hover.
        </li>
        <li>
          <code>.btn-3:hover::before</code>: Rotates and scales the
          pseudo-element on hover.
        </li>
        <li>
          <code>@keyframes colorChange</code>: Defines a keyframe animation for
          a background color change.
        </li>
        <li>
          <code>.btn-4</code>: Applies the keyframe animation to the button.
        </li>
        <li>
          <code>.btn-4:hover</code>: Pauses the animation on hover.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the animated button hover effects.
      </p>
      <p>
        In the next step, we'll add final touches to the button hover effects.
      </p>

      <h2>Adding Final Touches </h2>
      <h3>Adding Final Touches</h3>

      <p>
        Let's add the final touches to our button hover effects to ensure they
        are fully functional and visually appealing.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Final Touches:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <SyntaxHighlighter language="css" style={docco}>
            {`.btn-1, .btn-2, .btn-3, .btn-4 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.btn-1:hover, .btn-2:hover, .btn-3:hover, .btn-4:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.btn-1, .btn-2, .btn-3, .btn-4</code>: Adds a subtle shadow to
          the buttons.
        </li>
        <li>
          <code>.btn-1:hover, .btn-2:hover, .btn-3:hover, .btn-4:hover</code>:
          Increases the shadow on hover to create a more pronounced effect.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the final touches in action.
      </p>
      <p>
        Congratulations! You've completed the CSS project, "Create a CSS
        Animation for Button Hover Effects." You've learned how to design
        interactive button hover effects using CSS animations, keyframes,
        transitions, and animation timing functions.
      </p>
      <p>
        Feel free to continue customizing your button hover effects and
        exploring more CSS techniques. Happy coding! 🚀
      </p>
      <h3>Recommended</h3>
      <CssProjectsssssss />
    </article>
  );
};

export default ButtonHoverEffects;

export const CssProjectsssssss = () => {
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
      date: "January 5, 2025",
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
      date: "January 16, 2025",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
    },
    {
      id: "5c",
      title: "Build a Parallax Scrolling Effect",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577912/csstype_prlpwm.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 3, 2025",
      description:
        "Learn how to create a parallax scrolling effect using CSS. This project covers how to manipulate background images and layers for a visually engaging web experience.",
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
