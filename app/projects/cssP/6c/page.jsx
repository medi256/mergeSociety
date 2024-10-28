"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const ButtonHoverEffects = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to Button Hover Effects",
      content: (
        <>
          <h3>
            Welcome to Creating a CSS Animation for Button Hover Effects! 🚀
          </h3>
          <ScrollToTop />
          <p>
            In this project, we'll explore the power of CSS animations by
            designing interactive button hover effects. We'll focus on using
            keyframes, transitions, and animation timing functions to create
            engaging and visually appealing hover effects.
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
            with various hover effects. Let's get started by setting up our
            project files!
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
              Think of this folder like a container where we'll keep all our
              project files - just like having a special drawer for your art
              supplies!
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
              A text editor is like your crafting tool - it's where we'll write
              our code. We recommend Visual Studio Code because it's free and
              beginner-friendly!
            </p>
            <ol>
              <li>
                Download Visual Studio Code from{" "}
                <span style={{ color: "#0066cc" }}>code.visualstudio.com</span>{" "}
                if you haven't already
              </li>
              <li>Install it on your computer</li>
              <li>
                Open VS Code and drag your "button-hover-effects" folder into
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
              We need two special files - think of them as two pieces of paper
              where we'll write different things:
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
              <strong>👉 Need Help?</strong> If something's not working, try
              closing VS Code and opening it again, or create the files using
              the "File → New File" menu.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Button HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS, let's set up the HTML structure for our
            buttons:
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "index.html":</strong> Open your "index.html" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add the Button HTML:</strong> Copy and paste the
              following code into your "index.html" file:
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
              <code> &lt;div class="container"&gt;</code>: Represents the
              container for the buttons.
            </li>
            <li>
              <code> &lt;button class="btn btn-1"&gt;</code>: Represents a
              button with a specific class for styling.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            buttons.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Body and Container",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Body and Container</h3>
          <p>
            Let's start by styling the body and container of our HTML document
            to ensure a consistent and clean layout.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Body and Container Styles:</strong> Copy and paste
              the following CSS code into your "styles.css" file:
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
              <code>height: 100vh;</code>: Sets the height of the body to the
              full viewport height.
            </li>
            <li>
              <code>.container</code>: Styles the container to display the
              buttons in a column with a gap between them and adds padding for
              spacing.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the basic layout applied to your page.
          </p>
          <p>In the next step, we'll style the buttons.</p>
        </>
      ),
    },
    {
      title: "Styling the Buttons",
      content: (
        <>
          <h3>Styling the Buttons</h3>
          <ScrollToTop />
          <p>
            Now, let's style the buttons to give them a clean and modern look.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Button Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
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
              <code>.btn</code>: Styles the buttons with a blue background,
              white text, no border, padding, font size, border-radius, cursor,
              and transition for smooth changes.
            </li>
            <li>
              <code>.btn:hover</code>: Changes the background color of the
              button on hover.
            </li>
            <li>
              <code>position: relative;</code>: Ensures the button can contain
              absolute elements for more complex effects.
            </li>
            <li>
              <code>overflow: hidden;</code>: Ensures any content that overflows
              the button is hidden, which is useful for effects that involve
              elements moving in and out of the button.
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
        </>
      ),
    },
    {
      title: "Creating and Applying CSS Animations",
      content: (
        <>
          <ScrollToTop />
          <h3>Creating and Applying CSS Animations</h3>
          <p>
            Now, let's create and apply CSS animations for the button hover
            effects.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Animation Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
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
              <code>.btn-1:hover::before</code>: Scales the pseudo-element to
              full size on hover.
            </li>
            <li>
              <code>.btn-2::before</code>: Creates a pseudo-element for a slide
              in effect on hover.
            </li>
            <li>
              <code>.btn-2:hover::before</code>: Slides the pseudo-element into
              view on hover.
            </li>
            <li>
              <code>.btn-3::before</code>: Creates a pseudo-element for a rotate
              and scale effect on hover.
            </li>
            <li>
              <code>.btn-3:hover::before</code>: Rotates and scales the
              pseudo-element on hover.
            </li>
            <li>
              <code>@keyframes colorChange</code>: Defines a keyframe animation
              for a background color change.
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
            In the next step, we'll add final touches to the button hover
            effects.
          </p>
        </>
      ),
    },
    {
      title: "Adding Final Touches",
      content: (
        <>
          <h3>Adding Final Touches</h3>
          <ScrollToTop />
          <p>
            Let's add the final touches to our button hover effects to ensure
            they are fully functional and visually appealing.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Final Touches:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
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
              <code>.btn-1, .btn-2, .btn-3, .btn-4</code>: Adds a subtle shadow
              to the buttons.
            </li>
            <li>
              <code>
                .btn-1:hover, .btn-2:hover, .btn-3:hover, .btn-4:hover
              </code>
              : Increases the shadow on hover to create a more pronounced
              effect.
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
          Creating a CSS Animation for Button Hover Effects
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

export default ButtonHoverEffects;
