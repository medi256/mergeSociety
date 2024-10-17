"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const ResponsiveNavigationMenu = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to Responsive Navigation Menus",
      content: (
        <>
          <h3>Welcome to Building a Responsive Navigation Menu with CSS!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a responsive navigation menu using
            CSS. A responsive navigation menu is essential for ensuring that
            your website is user-friendly on various devices, from desktops to
            mobile phones.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for the navigation menu.</li>
            <li>Applying basic styling to the menu items.</li>
            <li>Using media queries to make the menu responsive.</li>
            <li>Adding a hamburger menu for mobile devices.</li>
          </ul>
          <p>
            By the end of this project, you'll have a fully functional and
            responsive navigation menu. Let's get started by setting up our
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
          <ol>
            <li>
              On Windows: Right-click on your desktop, select "New" &gt;
              "Folder", and name it "responsive-navigation-menu".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "responsive-navigation-menu".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "responsive-navigation-menu" folder and
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
                sure to save them in your "responsive-navigation-menu" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, and "styles.css" will hold our CSS rules for styling. The
            "index.html" file is the main page of our navigation menu, and it's
            standard to name it "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our navigation menu.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Navigation Menu HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS, let's set up the HTML structure for our
            navigation menu:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Navigation Menu HTML:</strong> Copy and paste the
              following code into your "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navigation Menu</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav>
    <div class="logo">
      <a href="#">My Website</a>
    </div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
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
              <code>&lt;nav&gt;</code>: Represents the navigation menu.
            </li>
            <li>
              <code>&lt;div class="logo"&gt;</code>: Contains the logo or main
              title of the website.
            </li>
            <li>
              <code>&lt;ul class="nav-links"&gt;</code>: Contains the list of
              navigation links.
            </li>
            <li>
              <code>&lt;div class="burger"&gt;</code>: Represents the hamburger
              menu icon for mobile devices.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            navigation menu.
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
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the basic layout applied to your page.
          </p>
          <p>In the next step, we'll style the navigation bar.</p>
        </>
      ),
    },
    {
      title: "Styling the Navigation Bar",
      content: (
        <>
          <h3>Styling the Navigation Bar</h3>
          <ScrollToTop />
          <p>
            Now, let's style the navigation bar to give it a clean and modern
            look.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Navigation Bar Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>background-color: #333;</code>: Sets the background color of
              the navigation bar to a dark gray.
            </li>
            <li>
              <code>color: #fff;</code>: Sets the text color of the navigation
              bar to white.
            </li>
            <li>
              <code>display: flex;</code>: Uses flexbox to layout the items in
              the navigation bar.
            </li>
            <li>
              <code>justify-content: space-between;</code>: Distributes the
              items in the navigation bar to the start and end.
            </li>
            <li>
              <code>align-items: center;</code>: Vertically centers the items in
              the navigation bar.
            </li>
            <li>
              <code>padding: 10px 20px;</code>: Adds padding to the navigation
              bar for spacing.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled navigation bar.
          </p>
          <p>In the next step, we'll style the logo.</p>
        </>
      ),
    },
    {
      title: "Styling the Logo",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Logo</h3>
          <p>
            Let's style the logo to make it stand out and look professional.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Logo Styles:</strong> Copy and paste the following CSS
              code into your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>color: #fff;</code>: Sets the text color of the logo to
              white.
            </li>
            <li>
              <code>text-decoration: none;</code>: Removes the underline from
              the logo link.
            </li>
            <li>
              <code>font-size: 1.5rem;</code>: Sets the font size of the logo to
              1.5rem for a larger size.
            </li>
            <li>
              <code>font-weight: bold;</code>: Makes the logo text bold.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled logo.
          </p>
          <p>In the next step, we'll style the navigation links.</p>
        </>
      ),
    },
    {
      title: "Styling the Navigation Links",
      content: (
        <>
          <h3>Styling the Navigation Links</h3>
          <ScrollToTop />
          <p>
            Now, let's style the navigation links to make them visually
            appealing and easy to navigate.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Navigation Links Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;  
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>display: flex;</code>: Uses flexbox to layout the navigation
              links horizontally.
            </li>
            <li>
              <code>list-style: none;</code>: Removes the default bullet points
              from the list.
            </li>
            <li>
              <code>margin: 0 15px;</code>: Adds horizontal margin between the
              navigation links.
            </li>
            <li>
              <code>color: #fff;</code>: Sets the text color of the navigation
              links to white.
            </li>
            <li>
              <code>text-decoration: none;</code>: Removes the underline from
              the navigation links.
            </li>
            <li>
              <code>font-size: 1.1rem;</code>: Sets the font size of the
              navigation links to 1.1rem.
            </li>
            <li>
              <code>transition: color 0.3s ease;</code>: Adds a smooth
              transition effect when the link color changes.
            </li>
            <li>
              <code>.nav-links a:hover</code>: Changes the link color to a
              different shade on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled navigation links.
          </p>
          <p>In the next step, we'll style the hamburger menu icon.</p>
        </>
      ),
    },
    {
      title: "Styling the Hamburger Menu Icon",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Hamburger Menu Icon</h3>
          <p>
            Let's style the hamburger menu icon to make it visible and
            interactive on mobile devices.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Hamburger Menu Icon Styles:</strong> Copy and paste
              the following CSS code into your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  transition: all 0.3s ease;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>display: none;</code>: Hides the hamburger menu icon by
              default.
            </li>
            <li>
              <code>cursor: pointer;</code>: Changes the cursor to a pointer
              when hovering over the hamburger menu icon.
            </li>
            <li>
              <code>width: 25px;</code>: Sets the width of the hamburger menu
              lines.
            </li>
            <li>
              <code>height: 3px;</code>: Sets the height of the hamburger menu
              lines.
            </li>
            <li>
              <code>background-color: #fff;</code>: Sets the color of the
              hamburger menu lines to white.
            </li>
            <li>
              <code>margin: 5px;</code>: Adds margin between the hamburger menu
              lines.
            </li>
            <li>
              <code>transition: all 0.3s ease;</code>: Adds a smooth transition
              effect when the hamburger menu lines change.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled hamburger menu icon.
          </p>
          <p>
            In the next step, we'll make the navigation menu responsive for
            different screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Making the Navigation Menu Responsive",
      content: (
        <>
          <h3>Making the Navigation Menu Responsive</h3>
          <ScrollToTop />
          <p>
            Let's ensure our navigation menu looks great on various devices by
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
  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav-links li {
    opacity: 0;
  }

  .burger {
    display: block;
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
              <code>.nav-links</code>: Positions the navigation links off-screen
              and sets them to display as a column.
            </li>
            <li>
              <code>.nav-links li</code>: Sets the opacity of the navigation
              links to 0 initially.
            </li>
            <li>
              <code>.burger</code>: Displays the hamburger menu icon.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the navigation menu on different devices, you'll see the
            layout adapt to different screen sizes.
          </p>
          <p>
            In the next step, we'll add the final touches to the responsive
            navigation menu.
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
            Let's add the final touches to our responsive navigation menu to
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
                    {`.nav-active {
  transform: translateX(0);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>.nav-active</code>: Class to animate the navigation links
              onto the screen.
            </li>
            <li>
              <code>@keyframes navLinkFade</code>: Keyframes for animating the
              navigation links.
            </li>
            <li>
              <code>.toggle .line1</code>, <code>.toggle .line2</code>,{" "}
              <code>.toggle .line3</code>: Styles to transform the hamburger
              menu icon into an "X" when toggled.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the navigation menu on different devices, you'll see the
            final touches in action.
          </p>
          <p>
            Congratulations! You've completed the CSS project, "Create a
            Responsive Navigation Menu." You've learned how to create a
            responsive navigation menu using HTML and CSS.
          </p>
          <p>
            Feel free to continue customizing your navigation menu and exploring
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
          Building a Responsive Navigation Menu with CSS
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

export default ResponsiveNavigationMenu;
