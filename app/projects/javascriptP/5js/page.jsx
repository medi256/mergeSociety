import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Building a Simple Calculator with HTML, CSS, and JavaScript",
  description:
    "Learn how to build a fully functional calculator with advanced operations. This step-by-step tutorial covers working with event listeners, complex logic, and DOM manipulation. Perfect for beginners!",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/5js",
  },
  openGraph: {
    title: "Building a Simple Calculator with HTML, CSS, and JavaScript",
    description:
      "Create a fully functional calculator and learn event listeners, complex logic, and DOM manipulation. A perfect project for beginners!",
  },
  keywords: [
    "javascript beginner projects",
    "web development javascript html css projects",
    "event listeners javascript project",
    "logic javascript project",
    "dom manipulation  javascript project",
    "calculator javascript project",
    "javascript project for beginners",
    "js project",
    "html css javascript project",
    "js beginner project",
    "beginner javascript object",
    "html css javascript object",
  ],
};

const JavaScriptCalculator = () => {
  return (
    <article
      className="project-container"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
        Building a Simple Calculator with HTML, CSS, and JavaScript
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585940/javascript_fjhd7p.jpg"
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
        Welcome to the beginner-friendly tutorial on building a JavaScript
        Calculator! In this project, we'll create a fully functional calculator
        that can perform basic and advanced operations. This project is an
        excellent way to learn how to work with event listeners, complex logic,
        and DOM manipulation.
      </p>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>
        Before we begin coding, let's set up a workspace for our project. This
        folder will be your digital canvas, where you'll keep all the project
        files organized.
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
          Create a new folder on your computer to store all your project files.
          You can name it "javascript-calculator".
        </p>
        <strong>On Windows:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New" &gt; "Folder".</li>
          <li>Name it "javascript-calculator".</li>
        </ol>
        <strong>On Mac:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New Folder".</li>
          <li>Name it "javascript-calculator".</li>
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
            Open VS Code and drag your "javascript-calculator" folder into the
            window.
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
            <strong>index.html</strong> - The HTML file is like the blueprint of
            our app.
          </li>
          <li>
            <strong>styles.css</strong> - The CSS file is where we'll add styles
            to make our app look beautiful.
          </li>
          <li>
            <strong>script.js</strong> - The JavaScript file is where the magic
            happens, making our app interactive.
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
            <strong>styles.css</strong> - Click "New File" again and save it as
            "styles.css".
          </li>
          <li>
            <strong>script.js</strong> - Click "New File" once more and save it
            as "script.js".
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
          <li>A folder named "javascript-calculator" on your desktop.</li>
          <li>Visual Studio Code open with your folder.</li>
          <li>Three empty files: index.html, styles.css, and script.js.</li>
        </ul>
        <p>
          <strong>👉 Tip:</strong> If something's not working, try restarting VS
          Code or creating the files using the "File → New File" menu.
        </p>
      </div>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Calculator HTML</h3>
      <p>
        Let's start by building the HTML structure for our calculator. HTML is
        like the foundation of our app.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Calculator HTML:</strong> Copy and paste the
          following code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>JavaScript Calculator</h1>
    <div id="calculator">
      <input type="text" id="display" disabled>
      <div class="buttons">
        <button class="btn" id="clear">C</button>
        <button class="btn" id="delete">DEL</button>
        <button class="btn" id="divide">/</button>
        <button class="btn" id="multiply">*</button>
        <button class="btn" id="seven">7</button>
        <button class="btn" id="eight">8</button>
        <button class="btn" id="nine">9</button>
        <button class="btn" id="subtract">-</button>
        <button class="btn" id="four">4</button>
        <button class="btn" id="five">5</button>
        <button class="btn" id="six">6</button>
        <button class="btn" id="add">+</button>
        <button class="btn" id="one">1</button>
        <button class="btn" id="two">2</button>
        <button class="btn" id="three">3</button>
        <button class="btn" id="equals">=</button>
        <button class="btn" id="zero">0</button>
        <button class="btn" id="decimal">.</button>
      </div>
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
          <code>&lt;div class="container"&gt;</code>: The main container for our
          app.
        </li>
        <li>
          <code>&lt;h1&gt;JavaScript Calculator&lt;/h1&gt;</code>: The title of
          our app.
        </li>
        <li>
          <code>&lt;div id="calculator"&gt;</code>: The container for the
          calculator.
        </li>
        <li>
          <code>&lt;input type="text" id="display" disabled&gt;</code>: The
          display for showing the current input and result.
        </li>
        <li>
          <code>&lt;div class="buttons"&gt;</code>: The container for the
          buttons.
        </li>
        <li>
          <code>&lt;button class="btn" id="clear"&gt;C&lt;/button&gt;</code>:
          The button to clear the display.
        </li>
        <li>
          <code>&lt;button class="btn" id="delete"&gt;DEL&lt;/button&gt;</code>:
          The button to delete the last character.
        </li>
        <li>
          <code>&lt;button class="btn" id="divide"&gt;/&lt;/button&gt;</code>:
          The button for division.
        </li>
        <li>
          <code>&lt;button class="btn" id="multiply"&gt;*&lt;/button&gt;</code>:
          The button for multiplication.
        </li>
        <li>
          <code>&lt;button class="btn" id="seven"&gt;7&lt;/button&gt;</code>:
          The button for the number 7.
        </li>
        <li>
          <code>&lt;button class="btn" id="eight"&gt;8&lt;/button&gt;</code>:
          The button for the number 8.
        </li>
        <li>
          <code>&lt;button class="btn" id="nine"&gt;9&lt;/button&gt;</code>: The
          button for the number 9.
        </li>
        <li>
          <code>&lt;button class="btn" id="subtract"&gt;-&lt;/button&gt;</code>:
          The button for subtraction.
        </li>
        <li>
          <code>&lt;button class="btn" id="four"&gt;4&lt;/button&gt;</code>: The
          button for the number 4.
        </li>
        <li>
          <code>&lt;button class="btn" id="five"&gt;5&lt;/button&gt;</code>: The
          button for the number 5.
        </li>
        <li>
          <code>&lt;button class="btn" id="six"&gt;6&lt;/button&gt;</code>: The
          button for the number 6.
        </li>
        <li>
          <code>&lt;button class="btn" id="add"&gt;+&lt;/button&gt;</code>: The
          button for addition.
        </li>
        <li>
          <code>&lt;button class="btn" id="one"&gt;1&lt;/button&gt;</code>: The
          button for the number 1.
        </li>
        <li>
          <code>&lt;button class="btn" id="two"&gt;2&lt;/button&gt;</code>: The
          button for the number 2.
        </li>
        <li>
          <code>&lt;button class="btn" id="three"&gt;3&lt;/button&gt;</code>:
          The button for the number 3.
        </li>
        <li>
          <code>&lt;button class="btn" id="equals"&gt;=&lt;/button&gt;</code>:
          The button to calculate the result.
        </li>
        <li>
          <code>&lt;button class="btn" id="zero"&gt;0&lt;/button&gt;</code>: The
          button for the number 0.
        </li>
        <li>
          <code>&lt;button class="btn" id="decimal"&gt;.&lt;/button&gt;</code>:
          The button for the decimal point.
        </li>
        <li>
          <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
          the JavaScript file for handling the app's functionality.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll add some styling to make it look nice! 🎨
      </p>

      <h2>Styling the Calculator</h2>
      <h3>Adding CSS Styles</h3>
      <p>
        CSS is like the paint and brushes we use to make our app visually
        appealing. Let's add some styles to our calculator.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Calculator Styles:</strong> Copy and paste the
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
  width: 300px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.5rem;
}

#calculator {
  text-align: left;
}

#display {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #f0f0f0;
}

#clear, #delete, #equals {
  background-color: #007bff;
  color: #fff;
}

#clear:hover, #delete:hover, #equals:hover {
  background-color: #0056b3;
}

#divide, #multiply, #subtract, #add {
  background-color: #ff9800;
  color: #fff;
}

#divide:hover, #multiply:hover, #subtract:hover, #add:hover {
  background-color: #ff8c00;
}

#decimal, #zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine {
  background-color: #4a90e6;
  color: #fff;
}

#decimal:hover, #zero:hover, #one:hover, #two:hover, #three:hover, #four:hover, #five:hover, #six:hover, #seven:hover, #eight:hover, #nine:hover {
  background-color: #3a7cbb;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>body</code>: Sets the default font, removes margins and padding,
          and centers the content on the screen.
        </li>
        <li>
          <code>.container</code>: Styles the container with a white background,
          padding, rounded corners, and a shadow.
        </li>
        <li>
          <code>h1</code>: Styles the title with a larger font size and margin.
        </li>
        <li>
          <code>#calculator</code>: Styles the calculator container with text
          alignment.
        </li>
        <li>
          <code>#display</code>: Styles the display input with a fixed width,
          padding, border, and font size.
        </li>
        <li>
          <code>.buttons</code>: Uses grid layout to arrange the buttons.
        </li>
        <li>
          <code>.btn</code>: Styles the buttons with padding, border-radius,
          font size, cursor, and transition for smooth changes.
        </li>
        <li>
          <code>.btn:hover</code>: Changes the background color on hover.
        </li>
        <li>
          <code>#clear, #delete, #equals</code>: Styles the special buttons with
          a blue background and white text.
        </li>
        <li>
          <code>#clear:hover, #delete:hover, #equals:hover</code>: Changes the
          background color on hover.
        </li>
        <li>
          <code>#divide, #multiply, #subtract, #add</code>: Styles the operation
          buttons with an orange background and white text.
        </li>
        <li>
          <code>
            #divide:hover, #multiply:hover, #subtract:hover, #add:hover
          </code>
          : Changes the background color on hover.
        </li>
        <li>
          <code>
            #decimal, #zero, #one, #two, #three, #four, #five, #six, #seven,
            #eight, #nine
          </code>
          : Styles the number buttons with a teal background and white text. and
          changes the background color on hover.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled calculator. 🎉
      </p>

      <h2>Adding JavaScript for User Interactions</h2>
      <h3>Handling Button Clicks</h3>
      <p>
        Now, let's add JavaScript to make our calculator interactive! We'll
        handle button clicks and perform calculations.
      </p>

      <h4>Selecting HTML Elements</h4>
      <p>
        First, we need to select the HTML elements we want to work with. We'll
        select the display input and all the buttons.
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
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we're using the <code>getElementById</code> and
        <code>querySelectorAll</code> methods to select the display input and
        all the buttons.
      </p>

      <h4>Handling Button Clicks</h4>
      <p>
        Next, we'll create a function to handle button clicks. This function
        will determine what to do based on the button clicked.
      </p>
      <ol className="space-y-6" start={3}>
        <li>
          <strong>3. Handling Button Clicks:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to handle button clicks
function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (button.id === 'clear') {
    clearCalculator();
  } else if (button.id === 'delete') {
    deleteLastCharacter();
  } else if (button.id === 'equals') {
    calculateResult();
  } else {
    updateDisplay(value);
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This function checks the ID of the button clicked and calls the
        appropriate function based on the button's ID.
      </p>

      <h4>Clearing the Calculator</h4>
      <p>Now, let's create a function to clear the calculator display.</p>
      <ol className="space-y-6" start={4}>
        <li>
          <strong>4. Clearing the Calculator:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to clear the calculator
function clearCalculator() {
  display.value = '';
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This function sets the display value to an empty string, effectively
        clearing the display.
      </p>

      <h4>Deleting the Last Character</h4>
      <p>
        Next, let's create a function to delete the last character from the
        display.
      </p>
      <ol className="space-y-6" start={5}>
        <li>
          <strong>5. Deleting the Last Character:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to delete the last character
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This function uses the <code>slice</code> method to remove the last
        character from the display value.
      </p>

      <h4>Updating the Display</h4>
      <p>
        Now, let's create a function to update the display with the value of the
        button clicked.
      </p>
      <ol className="space-y-6" start={6}>
        <li>
          <strong>6. Updating the Display:</strong> Copy and paste the following
          JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to update the display
function updateDisplay(value) {
  if (value === 'C' || value === 'DEL' || value === '=') {
    return;
  }
  display.value += value;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This function checks if the value is 'C', 'DEL', or '=' and returns
        early if it is. Otherwise, it appends the value to the display.
      </p>

      <h4>Calculating the Result</h4>
      <p>
        Finally, let's create a function to calculate the result of the
        expression in the display.
      </p>
      <ol className="space-y-6" start={7}>
        <li>
          <strong>7. Calculating the Result:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to calculate the result
function calculateResult() {
  const expression = display.value;
  try {
    const result = eval(expression);
    display.value = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This function uses the <code>eval</code> function to evaluate the
        expression in the display. If the evaluation is successful, it sets the
        display value to the result. If an error occurs, it sets the display
        value to 'Error'.
      </p>

      <h4>Adding Event Listeners to Buttons</h4>
      <p>
        Now, let's add event listeners to all the buttons so that they trigger
        the <code>handleButtonClick</code> function when clicked.
      </p>
      <ol className="space-y-6" start={8}>
        <li>
          <strong>8. Adding Event Listeners to Buttons:</strong> Copy and paste
          the following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Adding event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        This code iterates over all the buttons and adds a click event listener
        to each one, calling the <code>handleButtonClick</code> function when a
        button is clicked.
      </p>

      <h3>Putting It All Together</h3>
      <p>
        Now that we have the HTML, CSS, and JavaScript in place, let's put it
        all together and test our calculator.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Save Your Files:</strong> Save the "index.html",
          "styles.css", and "script.js" files.
        </li>
        <li>
          <strong>2. Open "index.html" in a Web Browser:</strong> Open your
          "index.html" file in a web browser to see your calculator in action.
        </li>
      </ol>
      <p>
        If everything is working correctly, you should be able to perform basic
        and advanced operations using the calculator.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Congratulations! You've completed the JavaScript Calculator project.
        You've learned how to create a fully functional calculator that can
        perform basic and advanced operations. This project introduced you to
        working with event listeners, complex logic, and DOM manipulation.
      </p>
      <p>
        Feel free to customize and expand your calculator further. You can add
        more features, improve the design, or even create a mobile version.
        Happy coding and exploring the world of web development! 🚀
      </p>
      <h3>Recommended</h3>
      <JSProjectssssss />
    </article>
  );
};

export default JavaScriptCalculator;

export const JSProjectssssss = () => {
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
      id: "2js",
      title: "Random Quote Generator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584814/javascript_randomquote_el9bfx.jpg",
      alt: "Random Quote Generator javascript project",
      date: "January 17, 2025",
      description:
        "Build a random quote generator that displays a new quote every time the user clicks a button. Use JavaScript to fetch random quotes and update the UI dynamically.",
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
