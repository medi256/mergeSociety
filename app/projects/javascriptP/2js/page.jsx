"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const RandomQuoteGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to the Random Quote Generator",
      content: (
        <>
          <h3>Welcome to Building a Random Quote Generator with JavaScript!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a simple app that fetches random
            quotes from an API and updates the UI dynamically. This project will
            help you learn the basics of API integration and UI updates in
            JavaScript.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for the quote generator.</li>
            <li>Applying basic styling to the quote generator.</li>
            <li>
              Adding JavaScript to handle user interactions and API calls.
            </li>
            <li>Displaying random quotes from an API.</li>
            <li>
              Making the quote generator responsive for different screen sizes.
            </li>
          </ul>
          <p>
            By the end of this project, you'll have a fully functional random
            quote generator. Let's get started by setting up our project files!
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
              "Folder", and name it "random-quote-generator".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "random-quote-generator".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "random-quote-generator" folder and select
                  "Open with Code".
                </li>
                <li>
                  <strong>Other Text Editors:</strong> For Notepad or TextEdit,
                  simply double-click on the folder to open it.
                </li>
              </ul>
            </li>

            <strong>Create HTML, CSS, and JavaScript Files:</strong>
            <ul>
              <li>
                In VS Code: Right-click in the file explorer panel, select "New
                File", and create three files: "index.html", "styles.css", and
                "script.js".
              </li>
              <li>
                In Notepad/TextEdit: Create a new file, then immediately "Save
                As" and create three files: "index.html", "styles.css", and
                "script.js". Make sure to save them in your
                "random-quote-generator" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, "styles.css" will hold our CSS rules for styling, and
            "script.js" will contain our JavaScript code. The "index.html" file
            is the main page of our random quote generator, and it's standard to
            name it "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our quote generator.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Quote Generator HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS and JavaScript, let's set up the HTML
            structure for our random quote generator:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Quote Generator HTML:</strong> Copy and paste the
              following code into your "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Quote Generator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Random Quote Generator</h1>
    <div class="quote-container">
      <p id="quote">Click the button to get a random quote.</p>
      <button id="get-quote">Get Quote</button>
    </div>
  </div>
  <script src="script.js"></script>
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
              <code>&lt;div class="container"&gt;</code>: Represents the
              container for the quote generator.
            </li>
            <li>
              <code>&lt;h1&gt;Random Quote Generator&lt;/h1&gt;</code>: The
              title of the quote generator.
            </li>
            <li>
              <code>&lt;div class="quote-container"&gt;</code>: The container
              for the quote and the button.
            </li>
            <li>
              <code>
                &lt;p id="quote"&gt;Click the button to get a random
                quote.&lt;/p&gt;
              </code>
              : The paragraph element for displaying the quote.
            </li>
            <li>
              <code>&lt;button id="get-quote"&gt;Get Quote&lt;/button&gt;</code>
              : The button for fetching a new quote.
            </li>
            <li>
              <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>:
              Includes the JavaScript file for handling the app's functionality.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            quote generator.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Quote Generator",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Quote Generator</h3>
          <p>
            Let's start by styling the quote generator to ensure a consistent
            and clean layout.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Quote Generator Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
              <pre>
                <code>
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
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.5rem;
}

.quote-container {
  margin-top: 20px;
}

#quote {
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>body</code>: Sets the default font, removes default margin
              and padding, sets a light gray background, and centers the content
              using flexbox.
            </li>
            <li>
              <code>.container</code>: Styles the container with a white
              background, padding, rounded corners, a shadow, and a fixed width.
            </li>
            <li>
              <code>h1</code>: Styles the title with a larger font size and
              margin.
            </li>
            <li>
              <code>.quote-container</code>: Adds margin to the quote container.
            </li>
            <li>
              <code>#quote</code>: Styles the quote paragraph with a larger font
              size and margin.
            </li>
            <li>
              <code>button</code>: Styles the button with a blue background,
              white text, no border, padding, border-radius, cursor, and
              transition for smooth changes.
            </li>
            <li>
              <code>button:hover</code>: Changes the background color of the
              button on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled quote generator.
          </p>
          <p>
            In the next step, we'll start adding JavaScript to handle user
            interactions and fetch random quotes from an API.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for User Interactions: Part 1",
      content: (
        <>
          <h3>Adding JavaScript for User Interactions: Part 1</h3>
          <ScrollToTop />
          <p>
            Let's start adding JavaScript to handle user interactions, such as
            fetching random quotes from an API.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Selecting Elements:</strong> Copy and paste the following
              JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`document.addEventListener('DOMContentLoaded', () => {
  const getQuoteButton = document.getElementById('get-quote');
  const quoteElement = document.getElementById('quote');
});`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`document.addEventListener('DOMContentLoaded', () => { ... })`}</code>
              : Ensures that the JavaScript code runs only after the DOM has
              been fully loaded.
            </li>
            <li>
              <code>
                const getQuoteButton = document.getElementById('get-quote');
              </code>
              : Selects the button element.
            </li>
            <li>
              <code>
                const quoteElement = document.getElementById('quote');
              </code>
              : Selects the paragraph element where the quote will be displayed.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, we have selected the necessary
            elements from the DOM. In the next step, we'll add the functionality
            to fetch a random quote from an API.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for User Interactions: Part 2",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for User Interactions: Part 2</h3>
          <p>
            Let's add the functionality to fetch a random quote from an API and
            update the UI.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Fetching a Random Quote:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`document.addEventListener('DOMContentLoaded', () => {
  const getQuoteButton = document.getElementById('get-quote');
  const quoteElement = document.getElementById('quote');

  getQuoteButton.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteElement.textContent = \`\${data.content} - $\{data.author}\`;
      })
      .catch(error => { console.error('Error fetching quote:', error); });
  });
});`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`getQuoteButton.addEventListener('click', () => { ... })`}</code>
              : Adds an event listener to the button to handle the click event.
            </li>
            <li>
              <code>fetch('https://api.quotable.io/random')</code>: Sends a GET
              request to the API to fetch a random quote.
            </li>
            <li>
              <code>{`.then(response => response.json())`}</code>: Converts the
              response to JSON format.
            </li>
            <li>
              <code>{`.then(data => { ... })`}</code>: Handles the JSON data and
              updates the quote element with the fetched quote and author.
            </li>
            <li>
              <code>
                {`
                quoteElement.textContent = \`\${data.content} - \${data.author}
                \`;`}
              </code>
              : Sets the text content of the quote element to the fetched quote
              and author.
            </li>
            <li>
              <code>{`.catch(error => { console.error('Error fetching quote:', error); })`}</code>
              : Handles any errors that occur during the fetch request.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you'll be able to fetch and display random quotes by
            clicking the "Get Quote" button.
          </p>
          <p>
            In the next step, we'll make the quote generator responsive for
            different screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Making the Quote Generator Responsive",
      content: (
        <>
          <h3>Making the Quote Generator Responsive</h3>
          <ScrollToTop />
          <p>
            Let's ensure our quote generator looks great on various devices by
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
                    {`@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  #quote {
    font-size: 1rem;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9rem;
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
              <code>@media (max-width: 600px)</code>: A media query for screens
              up to 600px wide (e.g., mobile phones).
            </li>
            <li>
              <code>.container</code>: Adjusts the width of the container to 90%
              for better visibility on smaller screens.
            </li>
            <li>
              <code>#quote</code>: Adjusts the font size of the quote for better
              readability on smaller screens.
            </li>
            <li>
              <code>button</code>: Adjusts the padding and font size of the
              button for better readability on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the quote generator on different devices, you'll see the
            layout adapt to different screen sizes.
          </p>
          <p>
            In the next step, we'll add final touches to the quote generator.
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
            Let's add the final touches to our quote generator to ensure it is
            fully functional and visually appealing.
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
                    {`.container {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>.container</code>: Adds a more pronounced shadow to the
              container for a better visual effect.
            </li>
            <li>
              <code>button</code>: Adds a transition effect for background color
              and transform to the button.
            </li>
            <li>
              <code>button:hover</code>: Scales the button slightly larger on
              hover to create a subtle zoom effect.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the final touches in action.
          </p>
          <p>
            Congratulations! You've completed the JavaScript project, "Random
            Quote Generator." You've learned how to create a simple app that
            fetches random quotes from an API and updates the UI dynamically.
            You've also learned the basics of API integration and UI updates in
            JavaScript.
          </p>
          <p>
            Feel free to continue customizing your quote generator and exploring
            more JavaScript techniques. Happy coding!
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
          Building a Random Quote Generator with JavaScript
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

export default RandomQuoteGenerator;
