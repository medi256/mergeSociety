"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const JavaScriptCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to the JavaScript Calculator",
      content: (
        <>
          <h3>Welcome to Building a JavaScript Calculator!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a fully functional calculator with
            advanced operations. This project will help you learn the basics of
            working with event listeners, complex logic, and DOM manipulation.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for the calculator.</li>
            <li>Applying basic styling to the calculator.</li>
            <li>Adding JavaScript to handle button clicks and calculations.</li>
            <li>
              Implementing advanced operations like square root and factorial.
            </li>
            <li>
              Making the calculator responsive for different screen sizes.
            </li>
          </ul>
          <p>
            By the end of this project, you'll have a fully functional
            JavaScript calculator. Let's get started by setting up our project
            files!
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
              "Folder", and name it "javascript-calculator".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "javascript-calculator".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "javascript-calculator" folder and select
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
                "javascript-calculator" folder.
              </li>
            </ul>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, "styles.css" will hold our CSS rules for styling, and
            "script.js" will contain our JavaScript code. The "index.html" file
            is the main page of our calculator, and it's standard to name it
            "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our calculator.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Calculator HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS and JavaScript, let's set up the HTML
            structure for our calculator:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Calculator HTML:</strong> Copy and paste the
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
  <div class="calculator">
    <input type="text" id="display" disabled>
    <div class="buttons">
      <button class="btn" id="clear">C</button>
      <button class="btn" id="backspace">←</button>
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
      <button class="btn" id="sqrt">√</button>
      <button class="btn" id="factorial">!</button>
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
              <code>&lt;div class="calculator"&gt;</code>: Represents the
              container for the calculator.
            </li>
            <li>
              <code>&lt;input type="text" id="display" disabled&gt;</code>: The
              input field for displaying the calculator input and result,
              disabled to prevent direct user input.
            </li>
            <li>
              <code>&lt;div class="buttons"&gt;</code>: The container for the
              calculator buttons.
            </li>
            <li>
              <code>&lt;button class="btn" id="clear"&gt;C&lt;/button&gt;</code>
              : The button for clearing the display. &lt;/li&lt;
            </li>
            <li>
              <code>
                &lt;button class="btn" id="backspace"&gt;←&lt;/button&gt;
              </code>
              : The button for deleting the last character.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="divide"&gt;/&lt;/button&gt;
              </code>
              : The button for division.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="multiply"&gt;*&lt;/button&gt;
              </code>
              : The button for multiplication.
            </li>
            <li>
              <code>&lt;button class="btn" id="seven"&gt;7&lt;/button&gt;</code>
              : The button for the number 7.
            </li>
            <li>
              <code>&lt;button class="btn" id="eight"&gt;8&lt;/button&gt;</code>
              : The button for the number 8.
            </li>
            <li>
              <code>&lt;button class="btn" id="nine"&gt;9&lt;/button&gt;</code>:
              The button for the number 9.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="subtract"&gt;-&lt;/button&gt;
              </code>
              : The button for subtraction.
            </li>
            <li>
              <code>&lt;button class="btn" id="four"&gt;4&lt;/button&gt;</code>:
              The button for the number 4.
            </li>
            <li>
              <code>&lt;button class="btn" id="five"&gt;5&lt;/button&gt;</code>:
              The button for the number 5.
            </li>
            <li>
              <code>&lt;button class="btn" id="six"&gt;6&lt;/button&gt;</code>:
              The button for the number 6.
            </li>
            <li>
              <code>&lt;button class="btn" id="add"&gt;+&lt;/button&gt;</code>:
              The button for addition.
            </li>
            <li>
              <code>&lt;button class="btn" id="one"&gt;1&lt;/button&gt;</code>:
              The button for the number 1.
            </li>
            <li>
              <code>&lt;button class="btn" id="two"&gt;2&lt;/button&gt;</code>:
              The button for the number 2.
            </li>
            <li>
              <code>&lt;button class="btn" id="three"&gt;3&lt;/button&gt;</code>
              : The button for the number 3.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="equals"&gt;=&lt;/button&gt;
              </code>
              : The button for calculating the result.
            </li>
            <li>
              <code>&lt;button class="btn" id="zero"&gt;0&lt;/button&gt;</code>:
              The button for the number 0.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="decimal"&gt;.&lt;/button&gt;
              </code>
              : The button for the decimal point.
            </li>
            <li>
              <code>&lt;button class="btn" id="sqrt"&gt;√&lt;/button&gt;</code>:
              The button for calculating the square root.
            </li>
            <li>
              <code>
                &lt;button class="btn" id="factorial"&gt;!&lt;/button&gt;
              </code>
              : The button for calculating the factorial.
            </li>
            <li>
              <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>:
              Includes the JavaScript file for handling the app's functionality.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            calculator.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Calculator",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Calculator</h3>
          <p>
            Let's start by styling the calculator to ensure a consistent and
            clean layout.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Calculator Styles:</strong> Copy and paste the
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

.calculator {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

#display {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.5rem;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e0e0e0;
}

#clear, #backspace, #sqrt, #factorial {
  background-color: #ff6b6b;
  color: #fff;
}

#clear:hover, #backspace:hover, #sqrt:hover, #factorial:hover {
  background-color: #e55f5f;
}

#divide, #multiply, #subtract, #add, #equals {
  background-color: #007bff;
  color: #fff;
}

#divide:hover, #multiply:hover, #subtract:hover, #add:hover, #equals:hover {
  background-color: #0056b3;
}

#decimal, #zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine {
  background-color: #e0e0e0;
  color: #333;
}

#decimal:hover, #zero:hover, #one:hover, #two:hover, #three:hover, #four:hover, #five:hover, #six:hover, #seven:hover, #eight:hover, #nine:hover {
  background-color: #d4d4d4;
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
              <code>.calculator</code>: Styles the container with a white
              background, padding, rounded corners, a shadow, and a fixed width.
            </li>
            <li>
              <code>#display</code>: Styles the input field for displaying the
              calculator input and result with a border, padding, and margin.
            </li>
            <li>
              <code>.buttons</code>: Uses CSS Grid to arrange the buttons in a
              4-column layout with a gap between them.
            </li>
            <li>
              <code>.btn</code>: Styles the buttons with a light gray
              background, border, padding, font size, border-radius, cursor, and
              transition for smooth changes.
            </li>
            <li>
              <code>.btn:hover</code>: Changes the background color of the
              buttons on hover.
            </li>
            <li>
              <code>#clear, #backspace, #sqrt, #factorial</code>: Styles the
              special function buttons with a red background and white text.
            </li>
            <li>
              <code>
                #clear:hover, #backspace:hover, #sqrt:hover, #factorial:hover
              </code>
              : Changes the background color of the special function buttons on
              hover.
            </li>
            <li>
              <code>#divide, #multiply, #subtract, #add, #equals</code>: Styles
              the operation buttons with a blue background and white text.
            </li>
            <li>
              <code>
                #divide:hover, #multiply:hover, #subtract:hover, #add:hover,
                #equals:hover
              </code>
              : Changes the background color of the operation buttons on hover.
            </li>
            <li>
              <code>
                #decimal, #zero, #one, #two, #three, #four, #five, #six, #seven,
                #eight, #nine
              </code>
              : Styles the number and decimal buttons with a light gray
              background and dark text.
            </li>
            <li>
              <code>
                #decimal:hover, #zero:hover, #one:hover, #two:hover,
                #three:hover, #four:hover, #five:hover, #six:hover,
                #seven:hover, #eight:hover, #nine:hover
              </code>
              : Changes the background color of the number and decimal buttons
              on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled calculator.
          </p>
          <p>
            In the next step, we'll start adding JavaScript to handle button
            clicks and calculations.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 1",
      content: (
        <>
          <h3>Adding JavaScript for Button Clicks: Part 1</h3>
          <ScrollToTop />
          <p>
            Let's start adding JavaScript to handle button clicks and
            calculations.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Display Element:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const display = document.getElementById('display');`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>const display = document.getElementById('display');</code>:
              Selects the input field for displaying the calculator input and
              result.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle number button clicks.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 2",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for Button Clicks: Part 2</h3>
          <p>Let's add the function to handle number button clicks.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Number Button Click Function:</strong> Copy and
              paste the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleNumberClick(number) {
  if (display.value === '0' || display.value === 'Error') {
    display.value = number;
  } else {
    display.value += number;
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleNumberClick(number) { ... }`}</code>:
              Defines a function to handle the click event for number buttons.
            </li>
            <li>
              <code>{`if (display.value === '0' || display.value === 'Error') { display.value = number; }`}</code>
              : If the display value is '0' or 'Error', sets the display value
              to the clicked number.
            </li>
            <li>
              <code>{`else { display.value += number; }`}</code>: If the display
              value is not '0' or 'Error', appends the clicked number to the
              display value.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle operation button clicks.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 3",
      content: (
        <>
          <h3>Adding JavaScript for Button Clicks: Part 3</h3>
          <ScrollToTop />
          <p>Let's add the function to handle operation button clicks.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Operation Button Click Function:</strong> Copy
              and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`let currentOperation = null;
let firstOperand = null;

function handleOperationClick(operation) {
  if (firstOperand === null) {
    firstOperand = parseFloat(display.value);
  } else if (display.value !== '') {
    const secondOperand = parseFloat(display.value);
    const result = performCalculation(firstOperand, currentOperation, secondOperand);
    display.value = result;
    firstOperand = result;
  }
  currentOperation = operation;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>let currentOperation = null;</code>: Initializes the current
              operation to null.
            </li>
            <li>
              <code>let firstOperand = null;</code>: Initializes the first
              operand to null.
            </li>
            <li>
              <code>{`function handleOperationClick(operation) { ... }`}</code>:
              Defines a function to handle the click event for operation
              buttons.
            </li>
            <li>
              <code>{`if (firstOperand === null) { firstOperand = parseFloat(display.value); }`}</code>
              : If the first operand is null, sets it to the current display
              value converted to a number.
            </li>
            <li>
              <code>{`else if (display.value !== '') { ... }`}</code>: If the
              display value is not empty, performs the current operation with
              the first and second operands, updates the display value, and sets
              the first operand to the result.
            </li>
            <li>
              <code>currentOperation = operation;</code>: Sets the current
              operation to the clicked operation.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to perform calculations.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Calculations: Part 1",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for Calculations: Part 1</h3>
          <p>Let's add the function to perform calculations.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Calculation Function:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function performCalculation(firstOperand, operation, secondOperand) {
  let result;
  try {
    switch (operation) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          throw new Error('Division by zero');
        }
        result = firstOperand / secondOperand;
        break;
      default:
        throw new Error('Invalid operation');
    }
  } catch (error) {
    display.value = 'Error';
    firstOperand = null;
    currentOperation = null;
    return;
  }
  return result;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function performCalculation(firstOperand, operation, secondOperand) { ... }`}</code>
              : Defines a function to perform the calculation based on the
              operation.
            </li>
            <li>
              <code>let result;</code>: Initializes the result variable.
            </li>
            <li>
              <code>{`try { ... } catch (error) { ... }`}</code>: Tries to
              perform the calculation and catches any errors.
            </li>
            <li>
              <code>{`switch (operation) { ... }`}</code>: Uses a switch
              statement to handle different operations.
            </li>
            <li>
              <code>
                case '+': result = firstOperand + secondOperand; break;
              </code>
              : Handles addition.
            </li>
            <li>
              <code>
                case '-': result = firstOperand - secondOperand; break;
              </code>
              : Handles subtraction.
            </li>
            <li>
              <code>
                case '*': result = firstOperand * secondOperand; break;
              </code>
              : Handles multiplication.
            </li>
            <li>
              <code>{`case '/': if (secondOperand === 0) { throw new Error('Division by zero'); } result = firstOperand / secondOperand; break;`}</code>
              : Handles division, checking for division by zero.
            </li>
            <li>
              <code>default: throw new Error('Invalid operation');</code>:
              Handles invalid operations.
            </li>
            <li>
              <code>{`catch (error) { display.value = 'Error'; firstOperand = null; currentOperation = null; return; }`}</code>
              : Catches any errors, displays 'Error' in the display, and resets
              the first operand and current operation.
            </li>
            <li>
              <code>return result;</code>: Returns the result of the
              calculation.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the equals button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 4",
      content: (
        <>
          <h3>Adding JavaScript for Button Clicks: Part 4</h3>
          <ScrollToTop />
          <p>Let's add the function to handle the equals button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Equals Button Click Function:</strong> Copy and
              paste the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleEqualsClick() {
  if (firstOperand !== null && currentOperation !== null && display.value !== '') {
    const secondOperand = parseFloat(display.value);
    const result = performCalculation(firstOperand, currentOperation, secondOperand);
    display.value = result;
    firstOperand = result;
    currentOperation = null;
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleEqualsClick() { ... }`}</code>: Defines a
              function to handle the click event for the equals button.
            </li>
            <li>
              <code>{`if (firstOperand !== null && currentOperation !== null && display.value !== '') { ... }`}</code>
              : Checks if the first operand, current operation, and display
              value are valid.
            </li>
            <li>
              <code>{`const secondOperand = parseFloat(display.value);`}</code>:
              Converts the current display value to a number.
            </li>
            <li>
              <code>{`const result = performCalculation(firstOperand, currentOperation, secondOperand);`}</code>
              : Performs the calculation using the{" "}
              <code>performCalculation</code>
              function.
            </li>
            <li>
              <code>display.value = result;</code>: Updates the display value
              with the result.
            </li>
            <li>
              <code>firstOperand = result;</code>: Sets the first operand to the
              result.
            </li>
            <li>
              <code>currentOperation = null;</code>: Resets the current
              operation to null.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the clear button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 5",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for Button Clicks: Part 5</h3>
          <p>Let's add the function to handle the clear button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Clear Button Click Function:</strong> Copy and
              paste the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleClearClick() {
  display.value = '0';
  firstOperand = null;
  currentOperation = null;
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleClearClick() { ... }`}</code>: Defines a
              function to handle the click event for the clear button.
            </li>
            <li>
              <code>display.value = '0';</code>: Resets the display value to
              '0'.
            </li>
            <li>
              <code>firstOperand = null;</code>: Resets the first operand to
              null.
            </li>
            <li>
              <code>currentOperation = null;</code>: Resets the current
              operation to null.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the backspace button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 6",
      content: (
        <>
          <h3>Adding JavaScript for Button Clicks: Part 6</h3>
          <ScrollToTop />
          <p>Let's add the function to handle the backspace button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Backspace Button Click Function:</strong> Copy
              and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleBackspaceClick() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleBackspaceClick() { ... }`}</code>: Defines
              a function to handle the click event for the backspace button.
            </li>
            <li>
              <code>{`if (display.value.length > 1) { display.value = display.value.slice(0, -1); }`}</code>
              : If the display value has more than one character, removes the
              last character.
            </li>
            <li>
              <code>{`else { display.value = '0'; }`}</code>: If the display
              value has only one character, resets it to '0'.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the decimal button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 7",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for Button Clicks: Part 7</h3>
          <p>Let's add the function to handle the decimal button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Decimal Button Click Function:</strong> Copy
              and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleDecimalClick() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleDecimalClick() { ... }`}</code>: Defines a
              function to handle the click event for the decimal button.
            </li>
            <li>
              <code>{`if (!display.value.includes('.')) { display.value += '.'; }`}</code>
              : If the display value does not already contain a decimal point,
              appends a decimal point.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the square root button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 8",
      content: (
        <>
          <h3>Adding JavaScript for Button Clicks: Part 8</h3>
          <ScrollToTop />
          <p>Let's add the function to handle the square root button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Square Root Button Click Function:</strong>{" "}
              Copy and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleSqrtClick() {
  if (display.value !== '') {
    const value = parseFloat(display.value);
    const result = Math.sqrt(value);
    display.value = result;
  }
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleSqrtClick() { ... }`}</code>: Defines a
              function to handle the click event for the square root button.
            </li>
            <li>
              <code>{`if (display.value !== '') { ... }`}</code>: Checks if the
              display value is not empty.
            </li>
            <li>
              <code>{`const value = parseFloat(display.value);`}</code>:
              Converts the display value to a number.
            </li>
            <li>
              <code>{`const result = Math.sqrt(value);`}</code>: Calculates the
              square root of the value.
            </li>
            <li>
              <code>display.value = result;</code>: Updates the display value
              with the result.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the function
            to handle the factorial button click.
          </p>
        </>
      ),
    },
    {
      title: "Adding JavaScript for Button Clicks: Part 9",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding JavaScript for Button Clicks: Part 9</h3>
          <p>Let's add the function to handle the factorial button click.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Factorial Button Click Function:</strong> Copy
              and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`function handleFactorialClick() {
  if (display.value !== '') {
    const value = parseInt(display.value);
    const result = factorial(value);
    display.value = result;
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`function handleFactorialClick() { ... }`}</code>: Defines
              a function to handle the click event for the factorial button.
            </li>
            <li>
              <code>{`if (display.value !== '') { ... }`}</code>: Checks if the
              display value is not empty.
            </li>
            <li>
              <code>const value = parseInt(display.value);</code>: Converts the
              display value to an integer.
            </li>
            <li>
              <code>const result = factorial(value);</code>: Calculates the
              factorial of the value using the <code>factorial</code> function.
            </li>
            <li>
              <code>display.value = result;</code>: Updates the display value
              with the result.
            </li>
            <li>
              <code>{`function factorial(n) { ... }`}</code>: Defines a
              recursive function to calculate the factorial of a number.
            </li>
            <li>
              <code>{`if (n === 0 || n === 1) { return 1; }`}</code>: Base case
              for the factorial function.
            </li>
            <li>
              <code>{`return n * factorial(n - 1);`}</code>: Recursive case for
              the factorial function.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll add the event
            listeners to handle button clicks.
          </p>
        </>
      ),
    },
    {
      title: "Adding Event Listeners for Button Clicks",
      content: (
        <>
          <h3>Adding Event Listeners for Button Clicks</h3>
          <ScrollToTop />
          <p>Let's add the event listeners to handle button clicks.</p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding Event Listeners:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('clear').addEventListener('click', handleClearClick);
  document.getElementById('backspace').addEventListener('click', handleBackspaceClick);
  document.getElementById('divide').addEventListener('click', () => handleOperationClick('/'));
  document.getElementById('multiply').addEventListener('click', () => handleOperationClick('*'));
  document.getElementById('subtract').addEventListener('click', () => handleOperationClick('-'));
  document.getElementById('add').addEventListener('click', () => handleOperationClick('+'));
  document.getElementById('equals').addEventListener('click', handleEqualsClick);
  document.getElementById('decimal').addEventListener('click', handleDecimalClick);
  document.getElementById('sqrt').addEventListener('click', handleSqrtClick);
  document.getElementById('factorial').addEventListener('click', handleFactorialClick);

  document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));
  document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));
  document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));
  document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));
  document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));
  document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));
  document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));
  document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));
  document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));
  document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));
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
              <code>{`document.getElementById('clear').addEventListener('click', handleClearClick);`}</code>
              : Adds an event listener to the clear button to handle the click
              event.
            </li>
            <li>
              <code>{`document.getElementById('backspace').addEventListener('click', handleBackspaceClick);`}</code>
              : Adds an event listener to the backspace button to handle the
              click event.
            </li>
            <li>
              <code>{`document.getElementById('divide').addEventListener('click', () => handleOperationClick('/'));`}</code>
              : Adds an event listener to the divide button to handle the click
              event and pass the division operation.
            </li>
            <li>
              <code>{`document.getElementById('multiply').addEventListener('click', () => handleOperationClick('*'));`}</code>
              : Adds an event listener to the multiply button to handle the
              click event and pass the multiplication operation.
            </li>
            <li>
              <code>{`document.getElementById('subtract').addEventListener('click', () => handleOperationClick('-'));`}</code>
              : Adds an event listener to the subtract button to handle the
              click event and pass the subtraction operation.
            </li>
            <li>
              <code>{`document.getElementById('add').addEventListener('click', () => handleOperationClick('+'));`}</code>
              : Adds an event listener to the add button to handle the click
              event and pass the addition operation.
            </li>
            <li>
              <code>
                document.getElementById('equals').addEventListener('click',
                handleEqualsClick);
              </code>
              : Adds an event listener to the equals button to handle the click
              event.
            </li>
            <li>
              <code>
                document.getElementById('decimal').addEventListener('click',
                handleDecimalClick);
              </code>
              : Adds an event listener to the decimal button to handle the click
              event.
            </li>
            <li>
              <code>
                document.getElementById('sqrt').addEventListener('click',
                handleSqrtClick);
              </code>
              : Adds an event listener to the square root button to handle the
              click event.
            </li>
            <li>
              <code>
                document.getElementById('factorial').addEventListener('click',
                handleFactorialClick);
              </code>
              : Adds an event listener to the factorial button to handle the
              click event.
            </li>
            <li>
              <code>{`document.getElementById('zero').addEventListener('click', () => handleNumberClick('0'));`}</code>
              : Adds an event listener to the zero button to handle the click
              event and pass the number '0'.
            </li>
            <li>
              <code>{`document.getElementById('one').addEventListener('click', () => handleNumberClick('1'));`}</code>
              : Adds an event listener to the one button to handle the click
              event and pass the number '1'.
            </li>
            <li>
              <code>{`document.getElementById('two').addEventListener('click', () => handleNumberClick('2'));`}</code>
              : Adds an event listener to the two button to handle the click
              event and pass the number '2'.
            </li>
            <li>
              <code>{`document.getElementById('three').addEventListener('click', () => handleNumberClick('3'));`}</code>
              : Adds an event listener to the three button to handle the click
              event and pass the number '3'.
            </li>
            <li>
              <code>{`document.getElementById('four').addEventListener('click', () => handleNumberClick('4'));`}</code>
              : Adds an event listener to the four button to handle the click
              event and pass the number '4'.
            </li>
            <li>
              <code>{`document.getElementById('five').addEventListener('click', () => handleNumberClick('5'));`}</code>
              : Adds an event listener to the five button to handle the click
              event and pass the number '5'.
            </li>
            <li>
              <code>{`document.getElementById('six').addEventListener('click', () => handleNumberClick('6'));`}</code>
              : Adds an event listener to the six button to handle the click
              event and pass the number '6'.
            </li>
            <li>
              <code>{`document.getElementById('seven').addEventListener('click', () => handleNumberClick('7'));`}</code>
              : Adds an event listener to the seven button to handle the click
              event and pass the number '7'.
            </li>
            <li>
              <code>{`document.getElementById('eight').addEventListener('click', () => handleNumberClick('8'));`}</code>
              : Adds an event listener to the eight button to handle the click
              event and pass the number '8'.
            </li>
            <li>
              <code>{`document.getElementById('nine').addEventListener('click', () => handleNumberClick('9'));`}</code>
              : Adds an event listener to the nine button to handle the click
              event and pass the number '9'.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you'll be able to use the fully functional calculator.
          </p>
          <p>
            In the next step, we'll make the calculator responsive for different
            screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Making the Calculator Responsive",
      content: (
        <>
          <ScrollToTop />
          <h3>Making the Calculator Responsive</h3>
          <p>
            Let's ensure our calculator looks great on various devices by adding
            responsive design using CSS media queries.
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
  .calculator {
    width: 90%;
  }

  #display {
    font-size: 1rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 15px;
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
              <code>.calculator</code>: Adjusts the width of the calculator to
              90% for better visibility on smaller screens.
            </li>
            <li>
              <code>#display</code>: Adjusts the font size of the display for
              better readability on smaller screens.
            </li>
            <li>
              <code>.btn</code>: Adjusts the font size and padding of the
              buttons for better readability on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the calculator on different devices, you'll see the layout
            adapt to different screen sizes.
          </p>
          <p>In the next step, we'll add final touches to the calculator.</p>
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
            Let's add the final touches to our calculator to ensure it is fully
            functional and visually appealing.
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
                    {`.calculator {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}

#display:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the CSS rules we just added:</p>
          <ul>
            <li>
              <code>.calculator</code>: Adds a more pronounced shadow to the
              calculator for a better visual effect.
            </li>
            <li>
              <code>.btn</code>: Adds a transition effect for background color
              and transform to the buttons.
            </li>
            <li>
              <code>.btn:hover</code>: Scales the buttons slightly larger on
              hover to create a subtle zoom effect.
            </li>
            <li>
              <code>#display:focus</code>: Changes the border color and adds a
              box shadow to the display when it is focused.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the final touches in action.
          </p>
          <p>
            Congratulations! You've completed the JavaScript project,
            "JavaScript Calculator." You've learned how to create a fully
            functional calculator with advanced operations. You've also learned
            the basics of working with event listeners, complex logic, and DOM
            manipulation.
          </p>
          <p>
            Feel free to continue customizing your calculator and exploring more
            JavaScript techniques. Happy coding!
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
          Building a JavaScript Calculator
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

export default JavaScriptCalculator;
