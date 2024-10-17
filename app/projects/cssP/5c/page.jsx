"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const ParallaxScrollingEffect = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to Parallax Scrolling Effects",
      content: (
        <>
          <h3>Welcome to Building a Parallax Scrolling Effect with CSS!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a visually engaging parallax scrolling
            effect using CSS. A parallax scrolling effect is a technique where
            the background moves slower than the foreground, creating a sense of
            depth and immersion.
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
            By the end of this project, you'll have a fully functional and
            visually engaging parallax scrolling effect. Let's get started by
            setting up our project files!
          </p>
        </>
      ),
    },
    {
      title: "Setting Up Your Workspace",
      content: (
        <>
          <ScrollToTop />
          <h3>Creating Your Project Folder and Files</h3>
          <p>
            Before we start coding, let's set up a workspace for our project:
          </p>
          <ol>
            <li>
              On Windows: Right-click on your desktop, select "New" &gt;
              "Folder", and name it "parallax-scrolling-effect".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "parallax-scrolling-effect".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "parallax-scrolling-effect" folder and
                  select "Open with Code".
                </li>
                <li>
                  <strong>Other Text Editors:</strong> For Notepad or TextEdit,
                  simply double-click on the folder to open it.
                </li>
              </ul>
            </li>

            <strong>Create HTML and CSS Files:</strong>
            <ul>
              <li>
                In VS Code: Right-click in the file explorer panel, select "New
                File", and create two files: "index.html" and "styles.css".
              </li>
              <li>
                In Notepad/TextEdit: Create a new file, then immediately "Save
                As" and create two files: "index.html" and "styles.css". Make
                sure to save them in your "parallax-scrolling-effect" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, and "styles.css" will hold our CSS rules for styling. The
            "index.html" file is the main page of our parallax effect, and it's
            standard to name it "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our parallax effect.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Parallax Scrolling Effect HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS, let's set up the HTML structure for our
            parallax scrolling effect:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Parallax Scrolling Effect HTML:</strong> Copy and
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
              <code>
                &lt;section class="parallax-section" id="section1"&gt;
              </code>
              : Represents a section with a parallax background.
            </li>
            <li>
              <code>&lt;div class="content"&gt;</code>: Contains the content for
              each section, including a title and a paragraph.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            parallax sections.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Body",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Body</h3>
          <p>
            Let's start by styling the body of our HTML document to ensure a
            consistent and clean layout.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Body Styles:</strong> Copy and paste the following CSS
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
              <code>font-family: Arial, sans-serif;</code>: Sets the default
              font for the entire page.
            </li>
            <li>
              <code>margin: 0;</code>: Removes the default margin from the body.
            </li>
            <li>
              <code>padding: 0;</code>: Removes the default padding from the
              body.
            </li>
            <li>
              <code>box-sizing: border-box;</code>: Ensures that the padding and
              border are included in the element's total width and height.
            </li>
            <li>
              <code>background-color: #f4f4f4;</code>: Sets the background color
              of the body to a light gray.
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
        </>
      ),
    },
    {
      title: "Styling the Parallax Sections",
      content: (
        <>
          <h3>Styling the Parallax Sections</h3>
          <ScrollToTop />
          <p>
            Now, let's style the parallax sections to give them a clean and
            modern look.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Parallax Section Styles:</strong> Copy and paste the
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
              <code>.parallax-section</code>: Styles the parallax sections with
              a relative position, full viewport height, and centered content.
            </li>
            <li>
              <code>.parallax-section::before</code>: Creates a pseudo-element
              for the background image with a fixed attachment to create the
              parallax effect.
            </li>
            <li>
              <code>#section1::before</code>, <code>#section2::before</code>,
              <code>#section3::before</code>: Sets the background image for each
              section.
            </li>
            <li>
              <code>.content</code>: Styles the content of each section with
              centered text and a higher z-index to ensure it appears above the
              background.
            </li>
            <li>
              <code>.content h1</code>: Styles the title of each section with a
              larger font size and no margin.
            </li>
            <li>
              <code>.content p</code>: Styles the paragraph of each section with
              a comfortable font size and margin.
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
        </>
      ),
    },
    {
      title: "Adding Smooth Scrolling",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding Smooth Scrolling</h3>
          <p>
            Let's add smooth scrolling to enhance the user experience of the
            parallax effect.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Smooth Scrolling:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
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
              <code>scroll-behavior: smooth;</code>: Adds smooth scrolling to
              the entire document, making the scroll experience more fluid.
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
        </>
      ),
    },
    {
      title: "Making the Parallax Effect Responsive",
      content: (
        <>
          <h3>Making the Parallax Effect Responsive</h3>
          <ScrollToTop />
          <p>
            Let's ensure our parallax effect looks great on various devices by
            adding responsive design using CSS media queries.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Responsive Design Styles:</strong> Copy and paste the
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
              <code>@media (max-width: 768px)</code>: A media query for screens
              up to 768px wide (e.g., tablets and mobile phones).
            </li>
            <li>
              <code>.parallax-section</code>: Adjusts the height of the sections
              to auto and adds padding for better visibility on smaller screens.
            </li>
            <li>
              <code>.content h1</code>: Adjusts the font size of the title for
              better readability on smaller screens.
            </li>
            <li>
              <code>.content p</code>: Adjusts the font size of the paragraph
              for better readability on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the parallax effect on different devices, you'll see the
            layout adapt to different screen sizes.
          </p>
          <p>
            In the next step, we'll add final touches to the parallax effect.
          </p>
        </>
      ),
    },
    {
      title: "Adding Final Touches",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding Final Touches</h3>
          <p>
            Let's add the final touches to our parallax scrolling effect to
            ensure it is fully functional and visually appealing.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Final Touches:</strong> Copy and paste the following
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
              <code>.parallax-section:hover::before</code>: Scales the
              background image slightly larger on hover to create a subtle zoom
              effect.
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
            more CSS techniques. Happy coding!
          </p>
        </>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Building a Parallax Scrolling Effect with CSS
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#444" }}>
            Step {currentStep + 1}: {steps[currentStep].title}
          </h2>
          <div style={{ backgroundColor: "#f9f9f9", padding: "20px" }}>
            {steps[currentStep].content}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            style={{
              padding: "10px 20px",
              backgroundColor: currentStep === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: currentStep === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            style={{
              padding: "10px 20px",
              backgroundColor:
                currentStep === steps.length - 1 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                currentStep === steps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrollingEffect;
