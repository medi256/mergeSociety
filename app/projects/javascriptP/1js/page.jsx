import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Build a Simple To-Do List App with JavaScript",
  description:
    "Learn how to create a beginner-friendly To-Do List application using JavaScript, HTML, and CSS. This step-by-step tutorial is perfect for newcomers to web development.",
  keywords: [
    "javascript to-do  list",
    "javascript  project",
    "javascript beginner project",
    "javascript projects",
    "beginner javascript object",
    "build to-do list app",
    "js project",
    "html css javascript",
    "beginner html css javascript",
    "to-do  list javascript project",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/1js",
  },
  openGraph: {
    title: "Build a Simple To-Do List App with JavaScript",
    description:
      "Create a basic To-Do List app and learn DOM manipulation, event handling, and responsive design. Perfect for beginners!",
  },
};

const SimpleToDoListApp = () => {
  return (
    <article
      className="lesson-container"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
        Building a Simple To-Do List App with JavaScript
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584631/todo-list_bcl3hp.png"
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
        <time datetime="2025-01-4" className="project-date">
          | January 4, 2025
        </time>
      </h2>
      <p>
        Welcome to the beginner-friendly tutorial on building a Simple To-Do
        List App with JavaScript! In this project, we'll create a
        straightforward to-do list application where users can add and delete
        tasks. This project is an excellent starting point for learning DOM
        manipulation and event handling in JavaScript.
      </p>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>
        Before we begin coding, let's set up a workspace for our project. Think
        of this as preparing your art supplies!
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
          You can name it "simple-todo-list-app".
        </p>
        <strong>On Windows:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New" &gt; "Folder"</li>
          <li>Name it "simple-todo-list-app"</li>
        </ol>
        <strong>On Mac:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New Folder"</li>
          <li>Name it "simple-todo-list-app"</li>
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
            <span style={{ color: "#0066cc" }}>code.visualstudio.com</span> if
            you haven't already.
          </li>
          <li>Install it on your computer.</li>
          <li>
            Open VS Code and drag your "simple-todo-list-app" folder into the
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
          <li>A folder named "simple-todo-list-app" on your desktop.</li>
          <li>Visual Studio Code open with your folder.</li>
          <li>Three empty files: index.html, styles.css, and script.js.</li>
        </ul>
        <p>
          <strong>👉 Tip:</strong> If you encounter any issues, try restarting
          VS Code or creating the files using the "File → New File" menu.
        </p>
      </div>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Simple To-Do List HTML</h3>
      <p>
        Let's start by building the HTML structure for our simple to-do list
        app. HTML is like the foundation of a house, providing the structure for
        our app.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Simple To-Do List HTML:</strong> Copy and paste the
          following code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do List App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Simple To-Do List</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Add a new task" required>
      <button type="submit">Add Task</button>
    </form>
    <ul id="todo-list"></ul>
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
          <code>&lt;div class="container"&gt;</code>: This is the main container
          for our app, like a frame for a painting.
        </li>
        <li>
          <code>&lt;h1&gt;Simple To-Do List&lt;/h1&gt;</code>: This is the title
          of our app, displayed at the top.
        </li>
        <li>
          <code>&lt;form id="todo-form"&gt;</code>: This is the form where users
          can add new tasks.
        </li>
        <li>
          <code>
            &lt;input type="text" id="todo-input" placeholder="Add a new task"
            required&gt;
          </code>
          : This is the input field where users type their tasks.
        </li>
        <li>
          <code>&lt;button type="submit"&gt;Add Task&lt;/button&gt;</code>: This
          button submits the form to add the task to the list.
        </li>
        <li>
          <code>&lt;ul id="todo-list"&gt;&lt;/ul&gt;</code>: This unordered list
          will display the tasks added by the user.
        </li>
        <li>
          <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: This
          includes the JavaScript file where we'll write the interactive code.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll add some styling to make it look nice!
      </p>

      <h2>Styling the Simple To-Do List</h2>
      <h3>Adding CSS Styles</h3>
      <p>
        CSS is like the paint and brushes we use to make our app visually
        appealing. Let's add some styles to our simple to-do list.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Simple To-Do List Styles:</strong> Copy and paste the
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

form {
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
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
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

li button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;
}

li button:hover {
  background-color: #ff1a1a;
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
          <code>form</code>: Adds margin to the form.
        </li>
        <li>
          <code>input[type="text"]</code>: Styles the input field with a fixed
          width, padding, border, and font size.
        </li>
        <li>
          <code>button</code>: Styles the add task button with a blue
          background, white text, and a hover effect.
        </li>
        <li>
          <code>ul</code>: Removes the default list style.
        </li>
        <li>
          <code>li</code>: Styles the list items with a light gray background,
          padding, and flexbox for layout.
        </li>
        <li>
          <code>li button</code>: Styles the delete button within the list items
          with a red background and a hover effect.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled simple to-do list app.
      </p>

      <h2>Adding JavaScript for User Interactions</h2>
      <h3>Handling Form Submission and Adding Tasks</h3>
      <p>
        Now, let's add JavaScript to make our app interactive! We'll start by
        handling form submission and adding tasks to the to-do list.
      </p>

      <h4>Selecting HTML Elements</h4>
      <p>
        First, we need to select the HTML elements we want to work with. We'll
        select the form, input field, and the unordered list.
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
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we're using the <code>getElementById</code> method to select the
        HTML elements with specific IDs.
      </p>

      <h4>Handling Form Submission</h4>
      <p>
        Next, we'll add an event listener to the form to handle the submit
        event. We'll prevent the default form submission behavior and call a
        function to add the task to the list.
      </p>
      <ol className="space-y-6" start={3}>
        <li>
          <strong>3. Handling Form Submission:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Handling form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoInput.value);
  todoInput.value = '';
});`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        In this part, we're using the <code>addEventListener</code> method to
        listen for the 'submit' event on the form. We prevent the default form
        submission behavior using <code>e.preventDefault()</code> and then call
        the <code>addTask</code> function to add the task to the list.
      </p>

      <h4>Adding Tasks to the List</h4>
      <p>
        Now, let's define the <code>addTask</code> function to add tasks to the
        to-do list.
      </p>
      <ol className="space-y-6" start={4}>
        <li>
          <strong>4. Adding Tasks:</strong> Copy and paste the following
          JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Adding tasks to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we create a new list item using <code>createElement</code>, set
        its text content to the task, and then append it to the to-do list using
        <code>appendChild</code>.
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
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Handling form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoInput.value);
  todoInput.value = '';
});

// Adding tasks to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Adding Functionality to Delete Tasks</h2>
      <h3>Deleting Tasks from the To-Do List</h3>
      <p>
        Now, let's add the functionality to delete tasks from the to-do list.
        We'll create a delete button for each task and handle the click event to
        remove the corresponding list item.
      </p>

      <h4>Adding Delete Functionality</h4>
      <p>
        First, we'll define a function to create and add the delete button to
        each task.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "script.js":</strong> Open the "script.js" file in
          your code editor.
        </li>
        <li>
          <strong>2. Adding Delete Functionality:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to add a delete button to each task
function addDeleteButton(li) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(deleteButton);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        In this section, we're defining the <code>addDeleteButton</code>{" "}
        function to create a delete button, set its text content to 'Delete',
        and add an event listener to handle the click event.
      </p>

      <h4>Modifying the addTask Function</h4>
      <p>
        Now, let's modify the <code>addTask</code> function to include the
        delete button.
      </p>
      <ol className="space-y-6" start={3}>
        <li>
          <strong>3. Modifying the addTask Function:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Adding tasks to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
  addDeleteButton(li);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we're calling the <code>addDeleteButton</code> function within the
        <code>addTask</code> function to add the delete button to each task.
      </p>

      <h3>Putting It All Together</h3>
      <p>
        Now, let's put everything together. If you've been following along and
        pasting the code into your "script.js" file, it should now look like
        this:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`// Selecting HTML elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Handling form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoInput.value);
  todoInput.value = '';
});

// Function to add a delete button to each task
function addDeleteButton(li) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(deleteButton);
}

// Adding tasks to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
  addDeleteButton(li);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Making the Simple To-Do List Responsive</h2>
      <h3>Adjusting for Different Screen Sizes</h3>
      <p>
        Let's make our simple to-do list app responsive so that it looks great
        on various devices. We'll use CSS media queries to adjust the layout for
        smaller screens.
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

  input[type="text"] {
    font-size: 0.9rem;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  li {
    font-size: 0.9rem;
  }

  li button {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we're using a media query to target screens with a maximum width
        of 600px (e.g., mobile phones). We adjust the container width, font
        sizes, and button padding to make the layout more suitable for smaller
        screens.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Congratulations! You've completed the Simple To-Do List App project with
        JavaScript. You've learned how to create a basic to-do list app where
        users can add and delete tasks. This project introduced you to DOM
        manipulation, event handling, and responsive design.
      </p>
      <p>
        Feel free to customize and expand your simple to-do list app further.
        You can add more features, improve the design, or even create a mobile
        version. Happy coding and exploring the world of web development! 🚀
      </p>
      <h3>Recommended </h3>
      <JSProjectss />
    </article>
  );
};

export default SimpleToDoListApp;

export const JSProjectss = () => {
  const projects = [
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
