"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const SortingAlgorithmVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to the Sorting Algorithm Visualizer",
      content: (
        <>
          <h3>Welcome to Building a Sorting Algorithm Visualizer!</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a sorting algorithm visualizer that
            demonstrates algorithms like Bubble Sort, Quick Sort, and Merge
            Sort. This project will help you understand complex algorithms and
            visualize how they work.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for the visualizer.</li>
            <li>Applying basic styling to the visualizer.</li>
            <li>
              Adding JavaScript to handle user interactions and sorting
              algorithms.
            </li>
            <li>Implementing the Bubble Sort algorithm.</li>
            <li>Implementing the Quick Sort algorithm.</li>
            <li>Implementing the Merge Sort algorithm.</li>
            <li>
              Making the visualizer responsive for different screen sizes.
            </li>
          </ul>
          <p>
            By the end of this project, you'll have a fully functional sorting
            algorithm visualizer. Let's get started by setting up our project
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
              "Folder", and name it "sorting-algorithm-visualizer".
            </li>
            <li>
              On Mac: Right-click on your desktop, select "New Folder", and name
              it "sorting-algorithm-visualizer".
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> If you have VS Code,
                  right-click on the "sorting-algorithm-visualizer" folder and
                  select "Open with Code".
                </li>
                <li>
                  <strong>Other Text Editors:</strong> For Notepad or TextEdit,
                  simply double-click on the folder to open it.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create HTML, CSS, and JavaScript Files:</strong>
              <ul>
                <li>
                  In VS Code: Right-click in the file explorer panel, select
                  "New File", and create three files: "index.html",
                  "styles.css", and "script.js".
                </li>
                <li>
                  In Notepad/TextEdit: Create a new file, then immediately "Save
                  As" and create three files: "index.html", "styles.css", and
                  "script.js". Make sure to save them in your
                  "sorting-algorithm-visualizer" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Explanation:</strong> We create a new folder to keep our
            project organized. The "index.html" file will contain the HTML
            structure, "styles.css" will hold our CSS rules for styling, and
            "script.js" will contain our JavaScript code. The "index.html" file
            is the main page of our visualizer, and it's standard to name it
            "index.html".
          </p>
          <p>
            Great job! You've set up your workspace. In the next step, we'll
            start building the HTML structure for our visualizer.
          </p>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the Visualizer HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS and JavaScript, let's set up the HTML
            structure for our visualizer:
          </p>
          <ol>
            <li>
              <strong>Open "index.html":</strong> Open your "index.html" file in
              your code editor.
            </li>
            <li>
              <strong>Add the Visualizer HTML:</strong> Copy and paste the
              following code into your "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="html" style={docco}>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sorting Algorithm Visualizer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="visualizer">
    <h1>Sorting Algorithm Visualizer</h1>
    <div class="controls">
      <label for="array-size">Array Size:</label>
      <input type="number" id="array-size" min="10" max="100" step="1" value="20">
      <button id="generate-array">Generate Array</button>
      <label for="algorithm">Algorithm:</label>
      <select id="algorithm">
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
      </select>
      <button id="start-sort">Start Sorting</button>
    </div>
    <div class="array-container" id="array-container"></div>
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
              <code>&lt;div class="visualizer"&gt;</code>: Represents the
              container for the visualizer.
            </li>
            <li>
              <code>&lt;h1&gt;Sorting Algorithm Visualizer&lt;/h1&gt;</code>:
              The title of the visualizer.
            </li>
            <li>
              <code>&lt;div class="controls"&gt;</code>: The container for the
              controls (array size, algorithm selection, and start sorting
              button).
            </li>
            <li>
              <code>
                &lt;label for="array-size"&gt;Array Size:&lt;/label&gt;
              </code>
              : The label for the array size input.
            </li>
            <li>
              <code>
                &lt;input type="number" id="array-size" min="10" max="100"
                step="1" value="20"&gt;
              </code>
              : The input field for setting the array size.
            </li>
            <li>
              <code>
                &lt;button id="generate-array"&gt;Generate Array&lt;/button&gt;
              </code>
              : The button for generating a random array.
            </li>
            <li>
              <code>&lt;label for="algorithm"&gt;Algorithm:&lt;/label&gt;</code>
              : The label for the algorithm selection.
            </li>
            <li>
              <code>&lt;select id="algorithm"&gt;</code>: The dropdown for
              selecting the sorting algorithm.
            </li>
            <li>
              <code>
                &lt;button id="start-sort"&gt;Start Sorting&lt;/button&gt;
              </code>
              : The button for starting the sorting process.
            </li>
            <li>
              <code>
                &lt;div class="array-container" id="array-container"&gt;
              </code>
              : The container for displaying the array bars.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            visualizer.
          </p>
        </>
      ),
    },
    {
      title: "Styling the Visualizer",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the Visualizer</h3>
          <p>
            Let's start by styling the visualizer to ensure a consistent and
            clean layout.
          </p>
          <ol>
            <li>
              <strong>Open "styles.css":</strong> Open the "styles.css" file in
              your code editor.
            </li>
            <li>
              <strong>Add Visualizer Styles:</strong> Copy and paste the
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

.visualizer {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.array-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
}

.bar {
  background-color: #333;
  width: 20px;
  margin: 2px;
  border-radius: 2px;
  transition: height 0.3s ease;
}

.bar:hover {
  background-color: #555;
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
              <code>.visualizer</code>: Styles the container for the visualizer.
            </li>
            <li>
              <code>.controls</code>: Styles the container for the controls
              (array size, algorithm selection, and start sorting button).
            </li>
            <li>
              <code>.array-container</code>: Styles the container for displaying
              the array bars.
            </li>
            <li>
              <code>.bar</code>: Styles the individual bars in the array
              container.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled visualizer.
          </p>
          <p>
            In the next step, we'll add the JavaScript to handle user
            interactions and sorting algorithms.
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
          <p>Let's start by adding JavaScript to handle user interactions.</p>
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
                    {`const arraySizeInput = document.getElementById('array-size');
const generateArrayButton = document.getElementById('generate-array');
const algorithmSelect = document.getElementById('algorithm');
const startSortButton = document.getElementById('start-sort');
const arrayContainer = document.getElementById('array-container');`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
            <li>
              <strong>Generating a Random Array:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const generateRandomArray = () => {
  const arraySize = parseInt(arraySizeInput.value);
  arrayContainer.innerHTML = '';

  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    const height = Math.floor(Math.random() * 300) + 1; // Random height between 1 and 300
    bar.style.height = \${height}px;
    arrayContainer.appendChild(bar);
  }
};`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
            <li>
              <strong>Adding Event Listener for Generate Array Button:</strong>
              Copy and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`generateArrayButton.addEventListener('click', generateRandomArray);`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>
                const arraySizeInput = document.getElementById('array-size');
              </code>
              : Selects the input element for the array size.
            </li>
            <li>
              <code>
                const generateArrayButton =
                document.getElementById('generate-array');
              </code>
              : Selects the button for generating the array.
            </li>
            <li>
              <code>
                const algorithmSelect = document.getElementById('algorithm');
              </code>
              : Selects the dropdown for selecting the sorting algorithm.
            </li>
            <li>
              <code>
                const startSortButton = document.getElementById('start-sort');
              </code>
              : Selects the button for starting the sorting process.
            </li>
            <li>
              <code>
                const arrayContainer =
                document.getElementById('array-container');
              </code>
              : Selects the container for the array bars.
            </li>
            <li>
              <code>{`const generateRandomArray = () => { ... }`}</code>:
              Defines a function to generate a random array of bars.
            </li>
            <li>
              <code>const arraySize = parseInt(arraySizeInput.value);</code>:
              Gets the value of the array size input and converts it to an
              integer.
            </li>
            <li>
              <code>arrayContainer.innerHTML = '';</code>: Clears the container
              before generating a new array.
            </li>
            <li>
              <code>{`for (let i = 0; i < arraySize; i++) { ... }`}</code>:
              Loops through the array size and creates a bar for each element.
            </li>
            <li>
              <code>const bar = document.createElement('div');</code>: Creates a
              new bar element.
            </li>
            <li>
              <code>bar.className = 'bar';</code>: Sets the class name for the
              bar.
            </li>
            <li>
              <code>const height = Math.floor(Math.random() * 300) + 1;</code>:
              Generates a random height for the bar.
            </li>
            <li>
              <code>{`bar.style.height = \${height}px;`}</code>: Sets the height
              of the bar.
            </li>
            <li>
              <code>arrayContainer.appendChild(bar);</code>: Appends the bar to
              the container.
            </li>
            <li>
              <code>
                generateArrayButton.addEventListener('click',
                generateRandomArray);
              </code>
              : Adds an event listener to the "Generate Array" button to handle
              the click event.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you can generate a random array of bars.
          </p>
          <p>
            In the next step, we'll add the function to start the sorting
            process.
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
            Let's add the function to start the sorting process based on the
            selected algorithm.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Start Sorting Function:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const startSorting = async () => {
  const algorithm = algorithmSelect.value;

  switch (algorithm) {
    case 'bubble':
      await bubbleSort();
      break;
    case 'quick':
      await quickSort();
      break;
    case 'merge':
      await mergeSort();
      break;
    default:
      alert('Please select a sorting algorithm.');
  }
};`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
            <li>
              <strong>Adding Event Listener for Start Sorting Button:</strong>
              Copy and paste the following JavaScript code into your "script.js"
              file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`startSortButton.addEventListener('click', startSorting);`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`const startSorting = async () => { ... }`}</code>: Defines
              an asynchronous function to start the sorting process.
            </li>
            <li>
              <code>const algorithm = algorithmSelect.value;</code>: Gets the
              value of the selected algorithm.
            </li>
            <li>
              <code>{`switch (algorithm) { ... }`}</code>: Uses a switch
              statement to handle different sorting algorithms.
            </li>
            <li>
              <code>case 'bubble': await bubbleSort(); break;</code>: Calls the{" "}
              <code>bubbleSort</code> function if Bubble Sort is selected.
            </li>
            <li>
              <code>case 'quick': await quickSort(); break;</code>: Calls the{" "}
              <code>quickSort</code> function if Quick Sort is selected.
            </li>
            <li>
              <code>case 'merge': await mergeSort(); break;</code>: Calls the{" "}
              <code>mergeSort</code> function if Merge Sort is selected.
            </li>
            <li>
              <code>default: alert('Please select a sorting algorithm.');</code>
              : Shows an alert if no algorithm is selected.
            </li>
            <li>
              <code>
                startSortButton.addEventListener('click', startSorting);
              </code>
              : Adds an event listener to the "Start Sorting" button to handle
              the click event.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll implement the
            Bubble Sort algorithm.
          </p>
        </>
      ),
    },
    {
      title: "Implementing the Bubble Sort Algorithm",
      content: (
        <>
          <h3>Implementing the Bubble Sort Algorithm</h3>
          <ScrollToTop />
          <p>
            Let's implement the Bubble Sort algorithm to sort the array of bars.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Bubble Sort Function:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const bubbleSort = async () => {
  const array = arrayContainer.children;
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const bar1 = array[j];
      const bar2 = array[j + 1];
      const height1 = parseInt(bar1.style.height);
      const height2 = parseInt(bar2.style.height);

      if (height1 > height2) {
        await swapBars(bar1, bar2);
      }
    }
  }
};

const swapBars = (bar1, bar2) => {
  return new Promise((resolve) => {
    const temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    setTimeout(resolve, 50); // Delay for visualization
  });
};`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`const bubbleSort = async () => { ... }`}</code>: Defines
              an asynchronous function to implement the Bubble Sort algorithm.
            </li>
            <li>
              <code>const array = arrayContainer.children;</code>: Selects all
              the bar elements.
            </li>
            <li>
              <code>const n = array.length;</code>: Gets the length of the
              array.
            </li>
            <li>
              <code>{`for (let i = 0; i < n - 1; i++) { ... }`}</code>: Outer
              loop to iterate through the array.
            </li>
            <li>
              <code>{`for (let j = 0; j < n - 1 - i; j++) { ... }`}</code>:
              Inner loop to compare adjacent elements.
            </li>
            <li>
              <code>const bar1 = array[j];</code>: Selects the first bar.
            </li>
            <li>
              <code>const bar2 = array[j + 1];</code>: Selects the second bar.
            </li>
            <li>
              <code>const height1 = parseInt(bar1.style.height);</code>: Gets
              the height of the first bar.
            </li>
            <li>
              <code>const height2 = parseInt(bar2.style.height);</code>: Gets
              the height of the second bar.
            </li>
            <li>
              <code>{`if (height1 > height2) { await swapBars(bar1, bar2); }`}</code>
              : Swaps the bars if the first bar is taller than the second bar.
            </li>
            <li>
              <code>{`const swapBars = (bar1, bar2) => { ... }`}</code>: Defines
              a function to swap two bars.
            </li>
            <li>
              <code>const temp = bar1.style.height;</code>: Temporarily stores
              the height of the first bar.
            </li>
            <li>
              <code>bar1.style.height = bar2.style.height;</code>: Sets the
              height of the first bar to the height of the second bar.
            </li>
            <li>
              <code>bar2.style.height = temp;</code>: Sets the height of the
              second bar to the temporary height.
            </li>
            <li>
              <code>setTimeout(resolve, 50);</code>: Adds a delay for
              visualization.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll implement the
            Quick Sort algorithm.
          </p>
        </>
      ),
    },
    {
      title: "Implementing the Quick Sort Algorithm",
      content: (
        <>
          <ScrollToTop />
          <h3>Implementing the Quick Sort Algorithm</h3>
          <p>
            Let's implement the Quick Sort algorithm to sort the array of bars.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Quick Sort Function:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const quickSort = async (array, left, right) => {
  if (left < right) {
    const pivotIndex = await partition(array, left, right);
    await quickSort(array, left, pivotIndex - 1);
    await quickSort(array, pivotIndex + 1, right);
  }
};

const partition = async (array, left, right) => {
  const pivot = parseInt(array[right].style.height);
  let i = left - 1;

  for (let j = left; j < right; j++) {
    const height = parseInt(array[j].style.height);
    if (height < pivot) {
      i++;
      await swapBars(array[i], array[j]);
    }
  }

  await swapBars(array[i + 1], array[right]);
  return i + 1;
};`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`const quickSort = async (array, left, right) => { ... }`}</code>
              : Defines an asynchronous function to implement the Quick Sort
              algorithm.
            </li>
            <li>
              <code>{`if (left < right) { ... }`}</code>: Checks if the left
              index is less than the right index.
            </li>
            <li>
              <code>
                const pivotIndex = await partition(array, left, right);
              </code>
              : Finds the pivot index using the partition function.
            </li>
            <li>
              <code>await quickSort(array, left, pivotIndex - 1);</code>:
              Recursively sorts the left subarray.
            </li>
            <li>
              <code>await quickSort(array, pivotIndex + 1, right);</code>:
              Recursively sorts the right subarray.
            </li>
            <li>
              <code>{`const partition = async (array, left, right) => { ... }`}</code>
              : Defines an asynchronous function to partition the array.
            </li>
            <li>
              <code>const pivot = parseInt(array[right].style.height);</code>:
              Selects the pivot element.
            </li>
            <li>
              <code>let i = left - 1;</code>: Initializes the index for the
              partition.
            </li>
            <li>
              <code>{`for (let j = left; j < right; j++) { ... }`}</code>: Loops
              through the array to partition it.
            </li>
            <li>
              <code>const height = parseInt(array[j].style.height);</code>: Gets
              the height of the current element.
            </li>
            <li>
              <code>{`if (height < pivot) { i++; await swapBars(array[i], array[j]); }`}</code>
              : Swaps elements if the current element is less than the pivot.
            </li>
            <li>
              <code>await swapBars(array[i + 1], array[right]);</code>: Swaps
              the pivot element with the element at the partition index.
            </li>
            <li>
              <code>return i + 1;</code>: Returns the partition index.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll implement the
            Merge Sort algorithm.
          </p>
        </>
      ),
    },
    {
      title: "Implementing the Merge Sort Algorithm",
      content: (
        <>
          <h3>Implementing the Merge Sort Algorithm</h3>
          <ScrollToTop />
          <p>
            Let's implement the Merge Sort algorithm to sort the array of bars.
          </p>
          <ol>
            <li>
              <strong>Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>Adding the Merge Sort Function:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {`const mergeSort = async (array, left, right) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSort(array, left, mid);
    await mergeSort(array, mid + 1, right);
    await merge(array, left, mid, right);
  }
};

const merge = async (array, left, mid, right) => {
  const leftArray = Array.from(array).slice(left, mid + 1);
  const rightArray = Array.from(array).slice(mid + 1, right + 1);
  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {
    const leftHeight = parseInt(leftArray[i].style.height);
    const rightHeight = parseInt(rightArray[j].style.height);

    if (leftHeight <= rightHeight) {
      array[k].style.height = leftArray[i].style.height;
      i++;
    } else {
      array[k].style.height = rightArray[j].style.height;
      j++;
    }
    k++;
    await delay(50);
  }

  while (i < leftArray.length) {
    array[k].style.height = leftArray[i].style.height;
    i++;
    k++;
    await delay(50);
  }

  while (j < rightArray.length) {
    array[k].style.height = rightArray[j].style.height;
    j++;
    k++;
    await delay(50);
  }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{`const mergeSort = async (array, left, right) => { ... }`}</code>
              : Defines an asynchronous function to implement the Merge Sort
              algorithm.
            </li>
            <li>
              <code>{`if (left < right) { ... }`}</code>: Checks if the left
              index is less than the right index.
            </li>
            <li>
              <code>{`const mid = Math.floor((left + right) / 2);`}</code>:
              Finds the midpoint of the array.
            </li>
            <li>
              <code>await mergeSort(array, left, mid);</code>: Recursively sorts
              the left subarray.
            </li>
            <li>
              <code>await mergeSort(array, mid + 1, right);</code>: Recursively
              sorts the right subarray.
            </li>
            <li>
              <code>await merge(array, left, mid, right);</code>: Merges the
              sorted subarrays.
            </li>
            <li>
              <code>{`const merge = async (array, left, mid, right) => { ... }`}</code>
              : Defines an asynchronous function to merge two sorted subarrays.
            </li>
            <li>
              <code>
                const leftArray = Array.from(array).slice(left, mid + 1);
              </code>
              : Creates a copy of the left subarray.
            </li>
            <li>
              <code>
                const rightArray = Array.from(array).slice(mid + 1, right + 1);
              </code>
              : Creates a copy of the right subarray.
            </li>
            <li>
              <code>let i = 0; let j = 0; let k = left;</code>: Initializes
              indices for merging.
            </li>
            <li>
              <code>{`while (i < leftArray.length && j < rightArray.length) { ... }`}</code>
              : Merges elements from the left and right subarrays.
            </li>
            <li>
              <code>
                const leftHeight = parseInt(leftArray[i].style.height);
              </code>
              : Gets the height of the current element in the left subarray.
            </li>
            <li>
              <code>
                const rightHeight = parseInt(rightArray[j].style.height);
              </code>
              : Gets the height of the current element in the right subarray.
            </li>
            <li>
              <code>{`if (leftHeight <= rightHeight) { ... }`}</code>: Merges
              the element from the left subarray.
            </li>
            <li>
              <code>{`else { ... }`}</code>: Merges the element from the right
              subarray.
            </li>
            <li>
              <code>{`while (i < leftArray.length) { ... }`}</code>: Merges
              remaining elements from the left subarray.
            </li>
            <li>
              <code>{`while (j < rightArray.length) { ... }`}</code>: Merges
              remaining elements from the right subarray.
            </li>
            <li>
              <code>{`const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));`}</code>
              : Defines a function to add a delay for visualization.
            </li>
          </ul>
          <p>
            Save your "script.js" file. In the next step, we'll make the
            visualizer responsive for different screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Making the Visualizer Responsive",
      content: (
        <>
          <ScrollToTop />
          <h3>Making the Visualizer Responsive</h3>
          <p>
            Let's ensure our visualizer looks great on various devices by adding
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
  .visualizer {
    width: 90%;
  }

  .controls {
    flex-direction: column;
    align-items: flex-start;
  }

  .bar {
    width: 10px;
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
              <code>.visualizer</code>: Adjusts the width of the visualizer to
              90% for better visibility on smaller screens.
            </li>
            <li>
              <code>.controls</code>: Changes the flex direction to column and
              aligns items to the start for better layout on smaller screens.
            </li>
            <li>
              <code>.bar</code>: Adjusts the width of the bars for better
              visibility on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the visualizer on different devices, you'll see the layout
            adapt to different screen sizes.
          </p>
          <p>In the next step, we'll add final touches to the visualizer.</p>
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
            Let's add the final touches to our visualizer to ensure it is fully
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
                    {`.visualizer {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.bar {
  transition: height 0.3s ease, background-color 0.3s ease;
}

.bar:hover {
  background-color: #555;
}

.controls input, .controls button, .controls select {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.controls input:focus, .controls button:focus, .controls select:focus {
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
              <code>.visualizer</code>: Adds a more pronounced shadow to the
              visualizer for a better visual effect.
            </li>
            <li>
              <code>.bar</code>: Adds a transition effect for height and
              background color to the bars.
            </li>
            <li>
              <code>.bar:hover</code>: Changes the background color of the bars
              on hover.
            </li>
            <li>
              <code>.controls input, .controls button, .controls select</code>:
              Styles the input, button, and select elements in the controls.
            </li>
            <li>
              <code>
                .controls input:focus, .controls button:focus, .controls
                select:focus
              </code>
              : Changes the border color and adds a box shadow to the input,
              button, and select elements when they are focused.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the final touches in action.
          </p>
          <p>
            Congratulations! You've completed the JavaScript project, "Sorting
            Algorithm Visualizer." You've learned how to create a fully
            functional visualizer for sorting algorithms. You've also learned
            the basics of working with event listeners, complex algorithms, and
            DOM manipulation.
          </p>
          <p>
            Feel free to continue customizing your visualizer and exploring more
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
          Building a Sorting Algorithm Visualizer
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

export default SortingAlgorithmVisualizer;
