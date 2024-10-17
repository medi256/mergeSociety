"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const BlogPostStyling = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to Blog Post Styling",
      content: (
        <>
          <h3>Welcome to Blog Post Styling with CSS!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll focus on styling a blog post using CSS. We'll
            learn how to enhance the appearance of a simple blog post, making it
            visually appealing and readable.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for a blog post.</li>
            <li>Applying basic styling to the post title and content.</li>
            <li>
              Using CSS to adjust font families, text colors, and line heights.
            </li>
            <li>Adding responsive design for different screen sizes.</li>
          </ul>
          <p>
            By the end of this project, you'll have a beautifully styled blog
            post and a better understanding of CSS typography and layout.
          </p>
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
              "Folder", and name it "my-blog-post".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "my-blog-post".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "my-blog-post" folder and select "Open with
                  Code".
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
                sure to save them in your "my-blog-post" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, and "styles.css" will hold our CSS rules for styling. The
            "index.html" file is the main page of our blog post, and it's
            standard to name it "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our blog post.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Blog Post HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS, let's set up the HTML structure for our
            blog post:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Blog Post HTML:</strong> Copy and paste the
              following code into your "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Post</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <article>
    <h1>Blog Post Title</h1>
    <p>This is the first paragraph of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, metus vitae tincidunt elementum, nibh est facilisis risus, non interdum magna nisi in nisl.</p>
    <p>This is the second paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Donec rutrum congue leo eget malesuada.</p>
    <!-- Add more paragraphs as needed -->
  </article>
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
              <code>&lt;article&gt;</code>: Represents the main content of the
              blog post.
            </li>
            <li>
              <code>&lt;h1&gt;</code>: The title of the blog post.
            </li>
            <li>
              <code>&lt;p&gt;</code>: Paragraphs containing the blog post text.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our blog
            post.
          </p>
        </>
      ),
    },
    {
      title: "Basic Styling",
      content: (
        <>
          <ScrollToTop />
          <h3>Applying Basic CSS Styling</h3>
          <p>
            Now, let's add some basic CSS styles to our blog post. We'll focus
            on the overall layout and typography to create a clean and readable
            design.
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
                    {`/* Basic Layout and Typography */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f9f9f9;
}

article {
  max-width: 700px;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>body</code>: Sets the font family, margin, padding, and
              background color for the entire page.
            </li>
            <li>
              <code>article</code>: Styles the blog post container with a
              centered layout, background color, padding, and a subtle box
              shadow.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. If you open "index.html" in a web
            browser, you'll see the basic layout and typography applied to your
            blog post.
          </p>
          <p>
            In the next steps, we'll continue to refine the styling and add more
            advanced CSS techniques to make our blog post visually appealing.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Post Title",
      content: (
        <>
          <h3>Styling the Blog Post Title</h3>
          <ScrollToTop />
          <p>
            Let's enhance the appearance of the blog post title to make it more
            prominent and visually appealing.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Here's what this CSS rule does:</p>
          <ul>
            <li>
              <code>h1</code>: Styles the post title with a larger font size, a
              specific color, and centers it horizontally.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you view your blog post in a
            web browser, you'll notice the title is more visually appealing and
            centered.
          </p>
          <p>
            In the next step, we'll move on to styling the paragraphs for a
            consistent and readable look.
          </p>
        </>
      ),
    },
    {
      title: "Styling Paragraphs",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Blog Post Paragraphs</h3>
          <p>
            Now, let's focus on styling the paragraphs to ensure a consistent
            and readable appearance.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Here's what this CSS rule does:</p>
          <ul>
            <li>
              <code>p</code>: Styles the paragraphs with a comfortable font
              size, line height for readability, and justifies the text.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you view your blog post in a
            web browser, you'll see that the paragraphs have a consistent and
            readable appearance.
          </p>
          <p>
            In the next step, we'll add advanced typography techniques to make
            our blog post even more visually appealing.
          </p>
        </>
      ),
    },
    {
      title: "Advanced Typography",
      content: (
        <>
          <h3>Advanced Typography and Readability</h3>
          <ScrollToTop />
          <p>
            Let's take our blog post to the next level by using advanced
            typography techniques to improve readability and visual appeal.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`/* Advanced Typography */
h1 {
  font-family: 'Georgia', serif;
}

p {
  font-family: 'Arial', sans-serif;
  text-indent: 20px;
}

/* Hyperlink Styling */
a {
  color: #007bff;
  text-decoration: none;
  border-bottom: 1px dotted #007bff;
}

a:hover {
  color: #0056b3;
  border-bottom: 1px solid #0056b3;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Here's what these CSS rules do:</p>
          <ul>
            <li>
              <code>h1</code>: Changes the font family to 'Georgia' for a more
              elegant look.
            </li>
            <li>
              <code>p</code>: Sets the font family to 'Arial' and indents the
              first line of each paragraph.
            </li>
            <li>
              <code>a</code>: Styles hyperlinks with a specific color and a
              dotted underline.
            </li>
            <li>
              <code>a:hover</code>: Changes the link color and underline style
              on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you view your blog post in a
            web browser, you'll notice improved typography and hyperlink
            styling.
          </p>
          <p>
            In the next step, we'll make our blog post responsive for different
            screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Responsive Design",
      content: (
        <>
          <ScrollToTop />
          <h3>Making the Blog Post Responsive</h3>
          <p>
            Let's ensure our blog post looks great on various devices by adding
            responsive design using CSS media queries.
          </p>
          <ol>
            <li>
              <strong>Modify "styles.css":</strong> Add the following CSS code
              to your "styles.css" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="css" style={docco}>
                    {`/* Responsive Design */
@media (max-width: 768px) {
  article {
    max-width: 100%;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
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
              <code>@media (max-width: 768px)</code>: A media query for screens
              up to 768px wide (e.g., tablets).
            </li>
            <li>
              <code>@media (max-width: 480px)</code>: A media query for screens
              up to 480px wide (e.g., mobile phones).
            </li>
            <li>
              <code>article</code>: Adjusts the max-width and padding for
              smaller screens.
            </li>
            <li>
              <code>h1</code>, <code>p</code>: Reduces font sizes for better
              readability on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the blog post on different devices, you'll see the layout
            adapt to different screen sizes.
          </p>
          <p>
            Congratulations! You've completed the CSS project, "Style a Blog
            Post with CSS." You've learned how to style a blog post using CSS,
            including typography, layout, and responsive design.
          </p>
          <p>
            Feel free to continue experimenting with different styles and
            techniques to further enhance your blog post. Happy coding!
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
          Styling a Blog Post with CSS
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

export default BlogPostStyling;
