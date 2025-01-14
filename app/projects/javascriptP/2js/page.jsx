import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Build a Random Quote Generator with JavaScript | Complete Tutorial",
  description:
    "Learn how to create a random quote generator using JavaScript, HTML, and CSS. Step-by-step tutorial covering API integration, responsive design, and modern UI development.",

  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/2js",
  },

  openGraph: {
    title:
      "Build a Random Quote Generator with JavaScript | Beginner-Friendly Tutorial",
    description:
      "Create a random quote generator and learn API integration, DOM manipulation, and responsive design. A perfect project for beginners!",
  },
  keywords: [
    "javascript projects",
    "web development projects",
    "api integration projects",
    "dom manipulation project",
    "css styling project",
    "responsive design project",
    "quote generator javascript project",
    "javascript project for beginners",
    "js project",
    "html css javascript project",
    "beginner  javascript project",
    "building a javascript project",
    " Building a Random Quote Generator with JavaScript",
  ],
};

const RandomQuoteGenerator = () => {
  return (
    <div className="project-container">
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Building a Random Quote Generator with JavaScript
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584814/javascript_randomquote_el9bfx.jpg"
          }
          alt={"Personal Website Example"}
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
          Welcome to the beginner-friendly tutorial on building a Random Quote
          Generator with JavaScript! In this project, we'll create a simple app
          that fetches random quotes from an API and displays them dynamically.
          This project is an excellent way to learn API integration and UI
          updates in JavaScript.
        </p>

        <h2>Setting Up Your Workspace</h2>
        <h3>Creating Your Project Folder and Files</h3>
        <p>
          Before we begin coding, let's set up a workspace for our project.
          Think of this folder as your digital canvas, where you'll keep all the
          project files organized.
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
            Create a new folder on your computer to store all your project
            files. You can name it "random-quote-generator".
          </p>
          <strong>On Windows:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New" &gt; "Folder"</li>
            <li>Name it "random-quote-generator"</li>
          </ol>
          <strong>On Mac:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New Folder"</li>
            <li>Name it "random-quote-generator"</li>
          </ol>
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
            You'll need a text editor to write your code. We recommend Visual
            Studio Code, which is free and beginner-friendly.
          </p>
          <ol>
            <li>
              Download Visual Studio Code from{" "}
              <span style={{ color: "#0066cc" }}>code.visualstudio.com</span>.
            </li>
            <li>Install it on your computer.</li>
            <li>
              Open VS Code and drag your "random-quote-generator" folder into
              the window.
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
          <p>We need three essential files for our project:</p>
          <ul>
            <li>
              <strong>index.html</strong> - The HTML file is like the blueprint
              of our app.
            </li>
            <li>
              <strong>styles.css</strong> - The CSS file is where we'll add
              styles to make our app look beautiful.
            </li>
            <li>
              <strong>script.js</strong> - The JavaScript file is where the
              magic happens, making our app interactive.
            </li>
          </ul>
          <p>To create these files:</p>
          <ol>
            <li>Open VS Code.</li>
            <li>
              <strong>index.html</strong> - Click "New File" and save it as
              "index.html".
            </li>
            <li>
              <strong>styles.css</strong> - Click "New File" again and save it
              as "styles.css".
            </li>
            <li>
              <strong>script.js</strong> - Click "New File" once more and save
              it as "script.js".
            </li>
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
            <strong>🎯 Success Check:</strong> You should now have:
          </p>
          <ul>
            <li>A folder named "random-quote-generator" on your desktop.</li>
            <li>Visual Studio Code open with your folder.</li>
            <li>Three empty files: index.html, styles.css, and script.js.</li>
          </ul>
          <p>
            <strong>👉 Tip:</strong> If something's not working, try restarting
            VS Code or creating the files using the "File → New File" menu.
          </p>
        </div>

        <h2>Setting Up the HTML Structure</h2>
        <h3>Creating the Quote Generator HTML</h3>
        <p>
          Let's start by building the HTML structure for our random quote
          generator. HTML is like the foundation of our app.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "index.html":</strong> Open your "index.html" file
            in your code editor.
          </li>
          <li>
            <strong>2. Add the Quote Generator HTML:</strong> Copy and paste the
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
        <p>Let's break down the HTML structure:</p>
        <ul>
          <li>
            <code>&lt;div class="container"&gt;</code>: This is the main
            container for our app.
          </li>
          <li>
            <code>&lt;h1&gt;Random Quote Generator&lt;/h1&gt;</code>: The title
            of our app.
          </li>
          <li>
            <code>&lt;div class="quote-container"&gt;</code>: The container for
            the quote and the button.
          </li>
          <li>
            <code>
              &lt;p id="quote"&gt;Click the button to get a random
              quote.&lt;/p&gt;
            </code>
            : The paragraph element for displaying the quote.
          </li>
          <li>
            <code>&lt;button id="get-quote"&gt;Get Quote&lt;/button&gt;</code>:
            The button for fetching a new quote.
          </li>
          <li>
            <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
            the JavaScript file for handling the app's functionality.
          </li>
        </ul>
        <p>
          Save your "index.html" file. Now we have the basic HTML structure in
          place. In the next step, we'll add some styling to make it look nice!
        </p>

        <h2>Styling the Quote Generator</h2>
        <h3>Adding CSS Styles</h3>
        <p>
          CSS is like the paint and brushes we use to make our app visually
          appealing. Let's add some styles to our random quote generator.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
            your code editor.
          </li>
          <li>
            <strong>2. Add Quote Generator Styles:</strong> Copy and paste the
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
            <code>body</code>: Sets the default font, removes margins and
            padding, and centers the content on the screen.
          </li>
          <li>
            <code>.container</code>: Styles the container with a white
            background, padding, rounded corners, and a shadow.
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
            <code>button</code>: Styles the button with a blue background, white
            text, no border, padding, border-radius, cursor, and transition for
            smooth changes.
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

        <h2>Adding JavaScript for User Interactions</h2>
        <h3>Handling Form Submission and Adding Tasks</h3>
        <p>
          Now, let's add JavaScript to make our app interactive! We'll start by
          handling user interactions and fetching quotes from the API.
        </p>

        <h4>Selecting HTML Elements</h4>
        <p>
          First, we need to select the HTML elements we want to work with. We'll
          select the button and the paragraph element.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "script.js":</strong> Open the "script.js" file in
            your code editor.
          </li>
          <li>
            <strong>2. Selecting Elements:</strong> Copy and paste the following
            JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Selecting HTML elements
const getQuoteButton = document.getElementById('get-quote');
const quoteElement = document.getElementById('quote');`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          Here, we're using the <code>getElementById</code> method to select the
          HTML elements with specific IDs.
        </p>

        <h4>Handling Button Click</h4>
        <p>
          Next, we'll add an event listener to the button to handle the click
          event. We'll fetch a random quote from the API and update the UI.
        </p>
        <ol className="space-y-6" start={3}>
          <li>
            <strong>3. Handling Button Click:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Handling button click
getQuoteButton.addEventListener('click', () => {
  fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = \`\${data.quote} - \${data.author}\`;
    })
    .catch(error => { console.error('Error fetching quote:', error); });
});`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this part, we're using the <code>addEventListener</code> method to
          listen for the 'click' event on the button. We fetch a random quote
          from the API, update the UI with the quote and author, and handle any
          errors that might occur during the fetch request.
        </p>

        <h3>Putting It All Together</h3>
        <p>
          Now, let's put everything together. If you've been following along and
          pasting the code into your "script.js" file, it should look like this:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`// Selecting HTML elements
const getQuoteButton = document.getElementById('get-quote');
const quoteElement = document.getElementById('quote');

// Handling button click
getQuoteButton.addEventListener('click', () => {
  fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = \`\${data.quote} - \${data.author}\`;
    })
    .catch(error => { console.error('Error fetching quote:', error); });
});`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h2>Making the Quote Generator Responsive</h2>
        <h3>Making the Quote Generator Responsive</h3>

        <p>
          Let's ensure our quote generator looks great on various devices by
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
            <code>@media (max-width: 600px)</code>: A media query for screens up
            to 600px wide (e.g., mobile phones).
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
            <code>button</code>: Adjusts the padding and font size of the button
            for better readability on smaller screens.
          </li>
        </ul>
        <p>
          Save your "styles.css" file. Now, if you resize your browser window or
          view the quote generator on different devices, you'll see the layout
          adapt to different screen sizes.
        </p>
        <p>In the next step, we'll add final touches to the quote generator.</p>

        <h2>Adding Final Touches</h2>
        <h3>Adding Final Touches</h3>
        <p>
          Let's add the final touches to our quote generator to ensure it is
          fully functional and visually appealing.
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
          more JavaScript techniques. Happy coding! 🚀
        </p>
      </article>
      <h3>Recommended</h3>
      <JSProjectsss />
    </div>
  );
};

export default RandomQuoteGenerator;

export const JSProjectsss = () => {
  const projects = [
    {
      id: "1js",
      title: "To-Do List App",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584631/todo-list_bcl3hp.png",
      alt: "To-Do List App in javascript",
      date: "January 15, 2025",
      description:
        "Create a simple to-do list app where users can add, edit, and remove tasks. Learn the basics of DOM manipulation and event handling in JavaScript.",
    },
    {
      id: "3js",
      title: "JavaScript Quiz Game",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584905/Quiz-App-01_zwez9e.png",
      alt: "JavaScript Quiz Game javascript project",
      date: "January 25, 2025",
      description:
        "Develop a fun quiz game where users answer multiple-choice questions. Use arrays and functions to manage questions, track scores, and display results.",
    },
    {
      id: "4js",
      title: "Weather App with API",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585719/weather-app_nynylh.jpg",
      alt: "Weather App with API javascript project",
      date: "January 15, 2025",
      description:
        "Create a weather app that fetches real-time weather data from an API. Learn how to work with APIs, handle async functions, and display the data on your webpage.",
    },
    {
      id: "5js",
      title: "JavaScript Calculator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585940/javascript_fjhd7p.jpg",
      alt: "JavaScript Calculator javascript project",
      date: "January 9, 2025",
      description:
        "Build a fully functional calculator with advanced operations. Practice working with event listeners, complex logic, and DOM manipulation for a real-world challenge.",
    },
    {
      id: "6js",
      title: "Sorting Algorithm Visualizer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736587158/js_hjlvsn.jpg",
      alt: "Sorting Algorithm Visualizer javascript project",
      date: "January 19, 2025",
      description:
        "Develop a sorting algorithm visualizer that demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort. This project will help you understand complex algorithms and visualize how they work.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">JavaScript Projects</h1>

      <div className="posts-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/javascriptP/${project.id}`}
            passHref
          >
            <article className="post-card">
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
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};
