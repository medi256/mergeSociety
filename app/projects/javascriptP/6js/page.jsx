import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
// import Image from "next/image";
import "../cp.css";

export const metadata = {
  title: "Build a Sorting Algorithm Visualizer: Javascript Project ",
  description:
    "Develop a sorting algorithm visualizer that demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort. This project will help you understand complex algorithms and visualize how they work. Perfect for beginners!",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/6js",
  },
  openGraph: {
    title: "Build a Sorting Algorithm Visualizer: Javascript Project",
    description:
      "Create a sorting algorithm visualizer and learn algorithms, visualization, and web development. A perfect project for beginners!",
  },
  keywords: [
    "javascript project",
    "web development html css javascript object",
    "algorithms javascript object",
    "sorting algorithms javascript object",
    "visualization javascript object",
    "bubble sort javascript object",
    "quick sort javascript object",
    "merge sort javascript object",
    "javascript project for beginners",
    "js project",
    "html css javascript project",
    "beginner javascript object",
    "build an algorithms javascript project",
    "build javascript algorithms project from scratch",
  ],
};

const SortingAlgorithmVisualizer = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article
        className="lesson-container"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
      >
        <h1>Building a Sorting Algorithm Visualizer</h1>

        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-01-7">
            | January 7, 2025
          </time>
        </h2>

        <p>
          Welcome to the beginner-friendly tutorial on building a Sorting
          Algorithm Visualizer! In this project, we'll create a visualizer that
          demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort.
          This project will help you understand complex algorithms and visualize
          how they work.
        </p>

        <h2>Setting Up Your Workspace</h2>
        <h3>Creating Your Project Folder and Files</h3>
        <p>
          Before we begin coding, let's set up a workspace for our project. This
          folder will be your digital canvas, where you'll keep all the project
          files organized.
        </p>
        <div>
          <h4>Step 1: Create Your Project Folder</h4>
          <p>
            Create a new folder on your computer to store all your project
            files. You can name it "sorting-visualizer".
          </p>
          <strong>On Windows:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New" &gt; "Folder".</li>
            <li>Name it "sorting-visualizer".</li>
          </ol>
          <strong>On Mac:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New Folder".</li>
            <li>Name it "sorting-visualizer".</li>
          </ol>
        </div>

        <div>
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
              Open VS Code and drag your "sorting-visualizer" folder into the
              window.
            </li>
          </ol>
        </div>

        <div>
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

        <div>
          <p>
            <strong>🎯 Success Check:</strong> You should now have:
          </p>
          <ul>
            <li>A folder named "sorting-visualizer" on your desktop.</li>
            <li>Visual Studio Code open with your folder.</li>
            <li>Three empty files: index.html, styles.css, and script.js.</li>
          </ul>
          <p>
            <strong>👉 Tip:</strong> If something's not working, try restarting
            VS Code or creating the files using the "File → New File" menu.
          </p>
        </div>

        <h2>Setting Up the HTML Structure</h2>
        <h3>Creating the Visualizer HTML</h3>
        <p>
          Let's start by building the HTML structure for our visualizer. HTML is
          like the foundation of our app.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "index.html":</strong> Open your "index.html" file
            in your code editor.
          </li>
          <li>
            <strong>2. Add the Visualizer HTML:</strong> Copy and paste the
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
  <div class="container">
    <h1>Sorting Algorithm Visualizer</h1>
    <div class="controls">
      <select id="algorithm">
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
      </select>
      <button id="generate">Generate Array</button>
      <button id="sort">Sort</button>
    </div>
    <div id="bars-container"></div>
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
            <code>&lt;div class="container"&gt;</code>: The main container for
            our app.
          </li>
          <li>
            <code>&lt;h1&gt;Sorting Algorithm Visualizer&lt;/h1&gt;</code>: The
            title of our app.
          </li>
          <li>
            <code>&lt;div class="controls"&gt;</code>: The container for the
            control elements.
          </li>
          <li>
            <code>&lt;select id="algorithm"&gt;</code>: The dropdown for
            selecting the sorting algorithm.
          </li>
          <li>
            <code>
              &lt;button id="generate"&gt;Generate Array&lt;/button&gt;
            </code>
            : The button to generate a random array.
          </li>
          <li>
            <code>&lt;button id="sort"&gt;Sort&lt;/button&gt;</code>: The button
            to start the sorting process.
          </li>
          <li>
            <code>&lt;div id="bars-container"&gt;&lt;/div&gt;</code>: The
            container for the bars representing the array elements.
          </li>
          <li>
            <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
            the JavaScript file for handling the app's functionality.
          </li>
        </ul>
        <p>
          Save your "index.html" file. Now we have the basic HTML structure in
          place. In the next step, we'll add some styling to make it look nice!
          🎨
        </p>

        <h2>Styling the Visualizer</h2>
        <h3>Adding CSS Styles</h3>
        <p>
          CSS is like the paint and brushes we use to make our app visually
          appealing. Let's add some styles to our visualizer.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
            your code editor.
          </li>
          <li>
            <strong>2. Add Visualizer Styles:</strong> Copy and paste the
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
  width: 800px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.5rem;
}

.controls {
  margin-bottom: 20px;
}

select, button {
  padding: 10px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

#bars-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
}

.bar {
  background-color: #3498db;
  margin: 0 1px;
  width: 20px;
}

.bar.sorted {
  background-color: #2ecc71;
}

.bar.comparing {
  background-color: #e74c3c;
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
            <code>.controls</code>: Adds margin to the control elements.
          </li>
          <li>
            <code>select, button</code>: Styles the select dropdown and buttons
            with padding, margin, border, and font size.
          </li>
          <li>
            <code>#bars-container</code>: Uses flex layout to arrange the bars
            and sets the height of the container.
          </li>
          <li>
            <code>.bar</code>: Styles the bars with a blue background, margin,
            and width.
          </li>
          <li>
            <code>.bar.sorted</code>: Changes the background color of sorted
            bars to green.
          </li>
          <li>
            <code>.bar.comparing</code>: Changes the background color of
            comparing bars to red.
          </li>
        </ul>
        <p>
          Save your "styles.css" file. Now, if you open "index.html" in a web
          browser, you'll see the styled visualizer. 🎉
        </p>

        <h2>Adding JavaScript for User Interactions</h2>
        <h3>Handling User Interactions</h3>
        <p>
          Now, let's add JavaScript to make our visualizer interactive! We'll
          handle user interactions and implement the sorting algorithms.
        </p>

        <h4>Selecting HTML Elements</h4>
        <p>
          First, we need to select the HTML elements we want to work with. We'll
          select the control elements and the bars container.
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
const algorithmSelect = document.getElementById('algorithm');
const generateButton = document.getElementById('generate');
const sortButton = document.getElementById('sort');
const barsContainer = document.getElementById('bars-container');`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          Here, we're using the <code>getElementById</code> method to select the
          control elements and the bars container.
        </p>

        <h4>Generating a Random Array</h4>
        <p>
          Next, let's create a function to generate a random array and display
          it as bars.
        </p>
        <ol className="space-y-6" start={3}>
          <li>
            <strong>3. Generating a Random Array:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to generate a random array
function generateArray() {
  const array = [];
  const arraySize = 50;
  const maxBarHeight = 300;

  for (let i = 0; i < arraySize; i++) {
    const randomHeight = Math.floor(Math.random() * maxBarHeight) + 1;
    array.push(randomHeight);
  }

  displayArray(array);
}

// Function to display the array as bars
function displayArray(array) {
  barsContainer.innerHTML = '';

  array.forEach((height, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = \`\${height}px\`;
    bar.style.backgroundColor = '#3498db';
    barsContainer.appendChild(bar);
  });
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>generateArray</code> function creates a random array of 50
          elements with heights between 1 and 300. The <code>displayArray</code>
          function displays the array as bars in the bars container.
        </p>

        <h4>Adding Event Listeners to Buttons</h4>
        <p>
          Now, let's add event listeners to the buttons to handle user
          interactions.
        </p>
        <ol className="space-y-6" start={4}>
          <li>
            <strong>4. Adding Event Listeners to Buttons:</strong> Copy and
            paste the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Adding event listeners to buttons
generateButton.addEventListener('click', generateArray);
sortButton.addEventListener('click', sortArray);`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          This code adds a click event listener to the "Generate Array" button,
          which calls the <code>generateArray</code> function, and another event
          listener to the "Sort" button, which calls the <code>sortArray</code>{" "}
          function.
        </p>

        <h4>Implementing the Sorting Algorithms</h4>
        <p>
          Now, let's implement the sorting algorithms. We'll start with Bubble
          Sort.
        </p>
        <ol className="space-y-6" start={5}>
          <li>
            <strong>5. Implementing Bubble Sort:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to perform Bubble Sort
async function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const bar1 = barsContainer.children[j];
      const bar2 = barsContainer.children[j + 1];

      bar1.classList.add('comparing');
      bar2.classList.add('comparing');

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        await sleep(100);
        displayArray(array);
      }

      bar1.classList.remove('comparing');
      bar2.classList.remove('comparing');
    }
  }

  array.forEach((_, index) => {
    barsContainer.children[index].classList.add('sorted');
  });
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>bubbleSort</code> function implements the Bubble Sort
          algorithm and updates the display after each comparison and swap. The{" "}
          <code>sleep</code>
          function is used to introduce a delay, making the sorting process
          visible.
        </p>

        <h4>Implementing Quick Sort</h4>
        <p>Next, let's implement the Quick Sort algorithm.</p>
        <ol className="space-y-6" start={6}>
          <li>
            <strong>6. Implementing Quick Sort:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to perform Quick Sort
async function quickSort(array, left, right) {
  if (left < right) {
    const partitionIndex = await partition(array, left, right);
    await quickSort(array, left, partitionIndex - 1);
    await quickSort(array, partitionIndex + 1, right);
  }
}

// Function to partition the array
async function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    const bar1 = barsContainer.children[j];
    const bar2 = barsContainer.children[right];

    bar1.classList.add('comparing');
    bar2.classList.add('comparing');

    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      await sleep(100);
      displayArray(array);
    }

    bar1.classList.remove('comparing');
    bar2.classList.remove('comparing');
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  await sleep(100);
  displayArray(array);

  return i + 1;
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>quickSort</code> function implements the Quick Sort
          algorithm recursively, and the <code>partition</code> function is used
          to partition the array. The <code>sleep</code> function is used to
          introduce a delay, making the sorting process visible.
        </p>

        <h4>Implementing Merge Sort</h4>
        <p>Finally, let's implement the Merge Sort algorithm.</p>
        <ol className="space-y-6" start={7}>
          <li>
            <strong>7. Implementing Merge Sort:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to perform Merge Sort
async function mergeSort(array, left, right) {
  if (left < right) {
    const middle = Math.floor((left + right) / 2);
    await mergeSort(array, left, middle);
    await mergeSort(array, middle + 1, right);
    await merge(array, left, middle, right);
  }
}

// Function to merge two subarrays
async function merge(array, left, middle, right) {
  const n1 = middle - left + 1;
  const n2 = right - middle;

  const L = array.slice(left, left + n1);
  const R = array.slice(middle + 1, middle + 1 + n2);

  let i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    const bar1 = barsContainer.children[k];
    const bar2 = barsContainer.children[k + 1];

    bar1.classList.add('comparing');
    bar2.classList.add('comparing');

    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }

    await sleep(100);
    displayArray(array);

    bar1.classList.remove('comparing');
    bar2.classList.remove('comparing');

    k++;
  }

  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }

  await sleep(100);
  displayArray(array);
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>mergeSort</code> function implements the Merge Sort
          algorithm recursively, and the <code>merge</code> function is used to
          merge two subarrays. The <code>sleep</code> function is used to
          introduce a delay, making the sorting process visible.
        </p>

        <h4>Handling the Sort Button Click</h4>
        <p>
          Now, let's create a function to handle the "Sort" button click and
          call the appropriate sorting algorithm based on the selected
          algorithm.
        </p>
        <ol className="space-y-6" start={8}>
          <li>
            <strong>8. Handling the Sort Button Click:</strong> Copy and paste
            the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to handle the Sort button click
async function sortArray() {
  const algorithm = algorithmSelect.value;
  const array = Array.from(barsContainer.children).map(bar => parseInt(bar.style.height));

  if (algorithm === 'bubble') {
    await bubbleSort(array);
  } else if (algorithm === 'quick') {
    await quickSort(array, 0, array.length - 1);
  } else if (algorithm === 'merge') {
    await mergeSort(array, 0, array.length - 1);
  }

  array.forEach((_, index) => {
    barsContainer.children[index].classList.add('sorted');
  });
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>sortArray</code> function determines the selected sorting
          algorithm and calls the appropriate sorting function. After sorting,
          it marks all bars as sorted.
        </p>

        <h4>Adding the Sleep Function</h4>
        <p>
          Finally, let's add the <code>sleep</code> function to introduce delays
          in the sorting process.
        </p>
        <ol className="space-y-6" start={9}>
          <li>
            <strong>9. Adding the Sleep Function:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to introduce a delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          The <code>sleep</code> function returns a promise that resolves after
          the specified number of milliseconds, allowing us to introduce delays
          in the sorting process.
        </p>

        <h3>Putting It All Together</h3>
        <p>
          Now that we have the HTML, CSS, and JavaScript in place, let's put it
          all together and test our visualizer.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Save Your Files:</strong> Save the "index.html",
            "styles.css", and "script.js" files.
          </li>
          <li>
            <strong>2. Open "index.html" in a Web Browser:</strong> Open your
            "index.html" file in a web browser to see your visualizer in action.
          </li>
        </ol>
        <p>
          If everything is working correctly, you should be able to generate a
          random array and sort it using different sorting algorithms.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Congratulations! You've completed the Sorting Algorithm Visualizer
          project. You've learned how to create a visualizer that demonstrates
          complex sorting algorithms like Bubble Sort, Quick Sort, and Merge
          Sort. This project introduced you to working with algorithms,
          visualization, and web development.
        </p>
        <p>
          Feel free to customize and expand your visualizer further. You can add
          more sorting algorithms, improve the design, or even create a mobile
          version. Happy coding and exploring the world of web development! 🚀
        </p>
        <h3>Recommended</h3>
        <JSProjectsssssss />
      </article>
    </div>
  );
};

export default SortingAlgorithmVisualizer;

export const JSProjectsssssss = () => {
  const projects = [
    {
      id: "1js",
      title: "To-Do List App",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584631/todo-list_bcl3hp.png",
      alt: "To-Do List App in javascript",
      date: "January 4, 2025",
      description:
        "Create a simple to-do list app where users can add, edit, and remove tasks. Learn the basics of DOM manipulation and event handling in JavaScript.",
    },
    {
      id: "2js",
      title: "Random Quote Generator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584814/javascript_randomquote_el9bfx.jpg",
      alt: "Random Quote Generator javascript project",
      date: "January 7, 2025",
      description:
        "Build a random quote generator that displays a new quote every time the user clicks a button. Use JavaScript to fetch random quotes and update the UI dynamically.",
    },
    {
      id: "3js",
      title: "JavaScript Quiz Game",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584905/Quiz-App-01_zwez9e.png",
      alt: "JavaScript Quiz Game javascript project",
      date: "January 15, 2025",
      description:
        "Develop a fun quiz game where users answer multiple-choice questions. Use arrays and functions to manage questions, track scores, and display results.",
    },
    {
      id: "4js",
      title: "Weather App with API",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585719/weather-app_nynylh.jpg",
      alt: "Weather App with API javascript project",
      date: "January 9, 2025",
      description:
        "Create a weather app that fetches real-time weather data from an API. Learn how to work with APIs, handle async functions, and display the data on your webpage.",
    },
    {
      id: "5js",
      title: "JavaScript Calculator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "JavaScript Calculator javascript project",
      date: "January 17, 2025",
      description:
        "Build a fully functional calculator with advanced operations. Practice working with event listeners, complex logic, and DOM manipulation for a real-world challenge.",
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
              {/* <div className="post-image"> */}
              {/* <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div> */}
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
