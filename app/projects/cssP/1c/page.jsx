"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const PortfolioLayout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to CSS and Web Design",
      content: (
        <>
          <h3>Welcome to CSS and Web Design!</h3>
          <ScrollToTop />
          <p>
            Before we begin creating your personal portfolio layout, let's
            explore the role of CSS in web design:
          </p>
          <ul>
            <li>
              <strong>CSS</strong> stands for Cascading Style Sheets.
            </li>
            <li>
              It's a language used to style and layout web pages, making them
              visually appealing.
            </li>
            <li>
              CSS allows you to control the appearance of HTML elements on a
              webpage.
            </li>
          </ul>
          <p>
            In this tutorial, we'll use CSS to create a simple and elegant
            personal portfolio layout. This layout will include:
          </p>
          <ul>
            <li>A header with your name and a short bio.</li>
            <li>A skills section with a list of your expertise.</li>
            <li>A responsive design that adapts to different screen sizes.</li>
          </ul>
          <p>Let's get started by setting up our project files!</p>
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
              "Folder", and name it "my-personal-webpage".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "my-personal-webpage".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "personal-portfolio" folder and select
                  "Open with Code".
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
                File", and Create two files: "index.html" and "styles.css".
              </li>
              <li>
                In Notepad/TextEdit: Create a new file, then immediately "Save
                As" and Create two files: "index.html" and "styles.css". Make
                sure to save them in your "my-personal-webpage" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, and "styles.css" will hold our CSS rules for styling. The
            "index.html" file is the main page of our website, and it's standard
            to name it "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure.
          </p>
        </>
      ),
    },
    {
      title: "HTML Structure",
      content: (
        <>
          <h3>Building the Basic HTML Structure</h3>
          <ScrollToTop />
          <p>
            Every webpage starts with HTML, which defines the structure of the
            content. Let's create the basic HTML structure for our portfolio:
          </p>
          <ol>
            <li>Open your "index.html" file if it's not already open.</li>
            <li>
              <strong>Add the Basic HTML Structure:</strong> Copy and paste the
              following code into your "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Content will go here -->
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
              <code>&lt;!DOCTYPE html&gt;</code>: Declares the document type as
              HTML5.
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: The root element of the HTML
              page, specifying the language as English.
            </li>
            <li>
              <code>&lt;head&gt;</code>: Contains meta information about the
              document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code>: Sets the character
              encoding to UTF-8.
            </li>
            <li>
              <code>&lt;meta name="viewport" ...&gt;</code>: Ensures the page is
              responsive.
            </li>
            <li>
              <code>&lt;title&gt;</code>: Sets the title of the webpage.
            </li>
            <li>
              <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>:
              Links the CSS file to the HTML.
            </li>
            <li>
              <code>&lt;body&gt;</code>: Contains the visible content of the
              webpage.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure
            ready. In the next step, we'll add the content for our portfolio.
          </p>
        </>
      ),
    },
    {
      title: "Adding Content",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding Your Personal Content</h3>
          <p>Now, let's add the content for your personal portfolio:</p>
          <ol>
            <li>
              <strong>Header with Name and Bio:</strong> Inside the{" "}
              <code>&lt;body&gt;</code> tags, add the following code:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<header>
  <h1>Your Name</h1>
  <p>A short bio about yourself.</p>
</header>`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
            <li>
              <strong>Skills Section:</strong> Below the header, add the skills
              section:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<section>
  <h2>Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <!-- Add more skills as needed -->
  </ul>
</section>`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>
            <strong>Customization:</strong> Replace "Your Name" with your name,
            and write a short bio about yourself. Also, add or remove skills as
            needed to match your expertise.
          </p>
          <p>
            Save your "index.html" file. Now we have the content in place. In
            the next step, we'll start styling with CSS.
          </p>
        </>
      ),
    },
    {
      title: "Basic CSS Styling",
      content: (
        <>
          <h3>Styling with CSS</h3>
          <ScrollToTop />
          <p>
            Now, let's add some CSS to style our portfolio layout. We'll keep it
            simple and focus on the basic layout and styling.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Basic Styles:</strong> Copy and paste the following
              CSS code into your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}

section {
  padding: 20px;
}

h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.1rem;
  margin-bottom: 5px;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>body</code>: Sets the font family, background color, and
              removes default margins and padding for the entire page.
            </li>
            <li>
              <code>header</code>: Styles the header with a dark background,
              white text, and some padding.
            </li>
            <li>
              <code>h1</code>, <code>p</code>, <code>section</code>,{" "}
              <code>h2</code>: Styles the headings, paragraphs, and sections for
              a consistent look.
            </li>
            <li>
              <code>ul</code>: Removes the default bullet points from the list.
            </li>
            <li>
              <code>li</code>: Styles the list items with a larger font size and
              some margin.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see your personal portfolio with basic styling
            applied.
          </p>
          <p>
            In the next steps, we'll continue to enhance the layout and add more
            advanced CSS techniques.
          </p>
        </>
      ),
    },
    {
      title: "Advanced CSS Techniques",
      content: (
        <>
          <ScrollToTop />
          <h3>Using Flexbox for Responsive Layout</h3>
          <p>
            Let's make our layout responsive using CSS Flexbox. This will ensure
            our portfolio looks great on different screen sizes.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`/* Flexbox for Responsive Layout */
header, section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  header, section {
    flex-direction: row;
    justify-content: space-between;
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Here's what these CSS rules do:</p>
          <ul>
            <li>
              <code>display: flex</code>: Applies flexbox to the header and
              section elements.
            </li>
            <li>
              <code>flex-direction: column</code>: Initially stacks the content
              vertically for mobile screens.
            </li>
            <li>
              <code>align-items: center</code>: Centers the content vertically.
            </li>
            <li>
              <code>@media (min-width: 768px)</code>: A media query that applies
              styles for screens wider than 768px (e.g., tablets and desktops).
            </li>
            <li>
              <code>flex-direction: row</code>: Changes the layout to a
              horizontal row for wider screens.
            </li>
            <li>
              <code>justify-content: space-between</code>: Distributes the
              content evenly on wider screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window,
            you'll see the layout adapt to different screen sizes.
          </p>
          <p>
            In the next step, we'll add some hover effects to make our layout
            more interactive.
          </p>
        </>
      ),
    },
    {
      title: "Adding Hover Effects",
      content: (
        <>
          <h3>Creating Interactive Hover Effects</h3>
          <ScrollToTop />
          <p>
            Let's add some interactivity to our layout with CSS hover effects.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`/* Hover Effects */
li {
  transition: transform 0.3s ease;
}

li:hover {
  transform: scale(1.1);
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Here's what these CSS rules do:</p>
          <ul>
            <li>
              <code>li</code>: Applies a smooth transition effect when the list
              items are hovered.
            </li>
            <li>
              <code>li:hover</code>: Scales the list items slightly when
              hovered.
            </li>
            <li>
              <code>a</code>: Styles links with a specific color and removes the
              default underline.
            </li>
            <li>
              <code>a:hover</code>: Changes the link color on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you hover over the list items
            or links, you'll see the interactive hover effects.
          </p>
          <p>
            Congratulations! You've completed the CSS project, "Build a Simple
            Personal Portfolio Layout." You've learned how to structure content
            with HTML and style it with CSS, including responsive design and
            interactivity.
          </p>
          <p>
            Feel free to continue customizing your portfolio and exploring more
            CSS techniques. Happy coding!
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
          Building a Personal Portfolio Layout with CSS
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

export default PortfolioLayout;
