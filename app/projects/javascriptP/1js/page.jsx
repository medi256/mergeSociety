"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const ToDolistApp = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to the To-Do List App",
      content: (
        <>
          <h3>Welcome to Building a To-Do List App with JavaScript! 🚀</h3>
          <ScrollToTop />
          <p>
            In this project, we'll create a simple to-do list app where users
            can add, edit, and remove tasks. This project will help you learn
            the basics of DOM manipulation and event handling in JavaScript.
          </p>
          <p>Here's what we'll cover in this tutorial:</p>
          <ul>
            <li>Setting up the HTML structure for the to-do list.</li>
            <li>Applying basic styling to the to-do list.</li>
            <li>Adding JavaScript to handle user interactions.</li>
            <li>Implementing functionality to add, edit, and remove tasks.</li>
            <li>
              Making the to-do list responsive for different screen sizes.
            </li>
          </ul>
          <p>
            By the end of this project, you'll have a fully functional to-do
            list app. Let's get started by setting up our project files!
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
              Think of this folder like a container where we'll keep all our
              project files - just like having a special drawer for your art
              supplies!
            </p>
            <ul>
              <li>
                <strong>On Windows:</strong>
                <ol>
                  <li>Right-click on your desktop</li>
                  <li>Choose "New" &gt; "Folder"</li>
                  <li>Name it "to-do-list-app"</li>
                </ol>
              </li>
              <li>
                <strong>On Mac:</strong>
                <ol>
                  <li>Right-click on your desktop</li>
                  <li>Choose "New Folder"</li>
                  <li>Name it "to-do-list-app"</li>
                </ol>
              </li>
            </ul>
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
              A text editor is like your crafting tool - it's where we'll write
              our code. We recommend Visual Studio Code because it's free and
              beginner-friendly!
            </p>
            <ol>
              <li>
                Download Visual Studio Code from{" "}
                <span style={{ color: "#0066cc" }}>code.visualstudio.com</span>{" "}
                if you haven't already
              </li>
              <li>Install it on your computer</li>
              <li>
                Open VS Code and drag your "to-do-list-app" folder into the
                window
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
            <p>
              We need three special files - think of them as three pieces of
              paper where we'll write different things:
            </p>
            <ul>
              <li>
                <strong>index.html</strong> - This is like the blueprint of our
                to-do list app (the structure)
              </li>
              <li>
                <strong>styles.css</strong> - This is like our painting palette
                (where we make things pretty)
              </li>
              <li>
                <strong>script.js</strong> - This is like our magic wand (where
                we make things interactive)
              </li>
            </ul>
            <p>To create these files:</p>
            <ol>
              <li>Click "New File" in VS Code</li>
              <li>Save it as "index.html"</li>
              <li>Create another new file</li>
              <li>Save it as "styles.css"</li>
              <li>Create one more new file</li>
              <li>Save it as "script.js"</li>
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
              <strong>🎯 Success Check:</strong> At this point, you should have:
            </p>
            <ul>
              <li>A folder named "to-do-list-app" on your desktop</li>
              <li>Visual Studio Code open with your folder</li>
              <li>Three empty files: index.html, styles.css, and script.js</li>
            </ul>
            <p>
              <strong>👉 Need Help?</strong> If something's not working, try
              closing VS Code and opening it again, or create the files using
              the "File → New File" menu.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Setting Up the HTML Structure",
      content: (
        <>
          <h3>Creating the To-Do List HTML</h3>
          <ScrollToTop />
          <p>
            Before we dive into CSS and JavaScript, let's set up the HTML
            structure for our to-do list app:
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "index.html":</strong> Open your "index.html" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add the To-Do List HTML:</strong> Copy and paste the
              following code into your "index.html" file:
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
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
            </li>
          </ol>
          <p>Let's understand the HTML structure:</p>
          <ul>
            <li>
              <code>&lt;div class="container"&gt;</code>: Represents the
              container for the to-do list app.
            </li>
            <li>
              <code>&lt;h1&gt;To-Do List&lt;/h1&gt;</code>: The title of the
              to-do list app.
            </li>
            <li>
              <code>&lt;form id="todo-form"&gt;</code>: The form for adding new
              tasks.
            </li>
            <li>
              <code>
                &lt;input type="text" id="todo-input" placeholder="Add a new
                task" required&gt;
              </code>
              : The input field for entering new tasks.
            </li>
            <li>
              <code>&lt;button type="submit"&gt;Add Task&lt;/button&gt;</code>:
              The button for submitting new tasks.
            </li>
            <li>
              <code>&lt;ul id="todo-list"&gt;&lt;/ul&gt;</code>: The unordered
              list for displaying the tasks.
            </li>
            <li>
              <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>:
              Includes the JavaScript file for handling the app's functionality.
            </li>
          </ul>
          <p>
            Save your "index.html" file. Now we have the basic HTML structure in
            place. In the next step, we'll start applying CSS styles to our
            to-do list.
          </p>
        </>
      ),
    },
    {
      title: "Styling the To-Do List",
      content: (
        <>
          <ScrollToTop />
          <h3>Styling the To-Do List</h3>
          <p>
            Let's start by styling the to-do list app to ensure a consistent and
            clean layout.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add To-Do List Styles:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
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
              <code>form</code>: Adds margin to the form.
            </li>
            <li>
              <code>input[type="text"]</code>: Styles the input field with a
              fixed width, padding, border, border-radius, and font size.
            </li>
            <li>
              <code>button</code>: Styles the add task button with a blue
              background, white text, no border, padding, border-radius, cursor,
              and transition for smooth changes.
            </li>
            <li>
              <code>button:hover</code>: Changes the background color of the
              button on hover.
            </li>
            <li>
              <code>ul</code>: Removes the default list style, padding, and
              margin.
            </li>
            <li>
              <code>li</code>: Styles the list items with a light gray
              background, padding, margin, border-radius, and flexbox for
              layout.
            </li>
            <li>
              <code>li button</code>: Styles the delete button within the list
              items with a red background, white text, no border, padding,
              border-radius, cursor, and transition for smooth changes.
            </li>
            <li>
              <code>li button:hover</code>: Changes the background color of the
              delete button on hover.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the styled to-do list app.
          </p>
          <p>
            In the next step, we'll start adding JavaScript to handle user
            interactions.
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
            adding tasks.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>2. Selecting Elements:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <SyntaxHighlighter language="javascript" style={docco}>
                {`document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
});`}
              </SyntaxHighlighter>
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
                const todoForm = document.getElementById('todo-form');
              </code>
              : Selects the form element.
            </li>
            <li>
              <code>
                const todoInput = document.getElementById('todo-input');
              </code>
              : Selects the input field.
            </li>
            <li>
              <code>
                const todoList = document.getElementById('todo-list');
              </code>
              : Selects the unordered list.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, we have selected the necessary
            elements from the DOM. In the next step, we'll add the functionality
            to handle the form submission.
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
            Let's add the functionality to handle the form submission and add
            new tasks to the to-do list.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>2. Handling Form Submission:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <SyntaxHighlighter language="javascript" style={docco}>
                {`document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(todoInput.value);
    todoInput.value = '';
  });

  function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    todoList.appendChild(li);
  }
});`}
              </SyntaxHighlighter>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>{` todoForm.addEventListener('submit', (e) => { ... }) `}</code>
              : Adds an event listener to the form to handle the submit event.
            </li>
            <li>
              <code>e.preventDefault();</code>: Prevents the default form
              submission behavior.
            </li>
            <li>
              <code>addTask(todoInput.value);</code>: Calls the
              <code>addTask</code> function with the value of the input field.
            </li>
            <li>
              <code>todoInput.value = '';</code>: Clears the input field after
              adding a task.
            </li>
            <li>
              <code>{`function addTask(task) { ... }`}</code>: Defines the
              <code>addTask</code> function to create a new list item and add it
              to the to-do list.
            </li>
            <li>
              <code>const li = document.createElement('li');</code>: Creates a
              new list item element.
            </li>
            <li>
              <code>li.textContent = task;</code>: Sets the text content of the
              list item to the task.
            </li>
            <li>
              <code>todoList.appendChild(li);</code>: Appends the list item to
              the to-do list.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you'll be able to add tasks to the to-do list.
          </p>
          <p>In the next step, we'll add functionality to delete tasks.</p>
        </>
      ),
    },
    {
      title: "Adding Functionality to Delete Tasks",
      content: (
        <>
          <h3>Adding Functionality to Delete Tasks</h3>
          <ScrollToTop />
          <p>Let's add functionality to delete tasks from the to-do list.</p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>2. Adding Delete Functionality:</strong> Copy and paste
              the following JavaScript code into your "script.js" file:
              <SyntaxHighlighter language="javascript" style={docco}>
                {`document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(todoInput.value);
    todoInput.value = '';
  });

  function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});`}
              </SyntaxHighlighter>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>
                const deleteButton = document.createElement('button');
              </code>
              : Creates a new button element for the delete action.
            </li>
            <li>
              <code>deleteButton.textContent = 'Delete';</code>: Sets the text
              content of the delete button to "Delete".
            </li>
            <li>
              <code>{`deleteButton.addEventListener('click', () => { ... })`}</code>
              : Adds an event listener to the delete button to handle the click
              event.
            </li>
            <li>
              <code>li.appendChild(deleteButton);</code>: Appends the delete
              button to the list item.
            </li>
            <li>
              <code>li.remove();</code>: Removes the list item from the DOM when
              the delete button is clicked.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you'll be able to add and delete tasks in the to-do list.
          </p>
          <p>In the next step, we'll add functionality to edit tasks.</p>
        </>
      ),
    },
    {
      title: "Adding Functionality to Edit Tasks",
      content: (
        <>
          <ScrollToTop />
          <h3>Adding Functionality to Edit Tasks</h3>
          <p>Let's add functionality to edit tasks in our to-do list app.</p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "script.js":</strong> Open the "script.js" file in
              your code editor.
            </li>
            <li>
              <strong>2. Adding Edit Functionality:</strong> Copy and paste the
              following JavaScript code into your "script.js" file:
              <SyntaxHighlighter language="javascript" style={docco}>
                {`document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(todoInput.value);
    todoInput.value = '';
  });

  function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newTask = prompt('Edit the task:', li.textContent);
      if (newTask) {
        li.textContent = newTask;
      }
    });

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    todoList.appendChild(li);
  }
});`}
              </SyntaxHighlighter>
            </li>
          </ol>
          <p>Let's understand the JavaScript code we just added:</p>
          <ul>
            <li>
              <code>const editButton = document.createElement('button');</code>:
              Creates a new button element for the edit action.
            </li>
            <li>
              <code>editButton.textContent = 'Edit';</code>: Sets the text
              content of the edit button to "Edit".
            </li>
            <li>
              <code>{`editButton.addEventListener('click', () => { ... })`}</code>
              : Adds an event listener to the edit button to handle the click
              event.
            </li>
            <li>
              <code>
                const newTask = prompt('Edit the task:', li.textContent);
              </code>
              : Prompts the user to enter a new task text.
            </li>
            <li>
              <code>{`if (newTask) { li.textContent = newTask; }`}</code>:
              Updates the list item's text content with the new task text if the
              user provides a new task.
            </li>
            <li>
              <code>li.appendChild(editButton);</code>: Appends the edit button
              to the list item.
            </li>
          </ul>
          <p>
            Save your "script.js" file. Now, if you open "index.html" in a web
            browser, you'll be able to add, delete, and edit tasks in the to-do
            list.
          </p>
          <p>
            In the next step, we'll make the to-do list responsive for different
            screen sizes.
          </p>
        </>
      ),
    },
    {
      title: "Making the To-Do List Responsive",
      content: (
        <>
          <h3>Making the To-Do List Responsive</h3>
          <ScrollToTop />
          <p>
            Let's ensure our to-do list app looks great on various devices by
            adding responsive design using CSS media queries.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Responsive Design Styles:</strong> Copy and paste
              the following CSS code into your "styles.css" file:
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
              <code>input[type="text"]</code>: Adjusts the font size of the
              input field for better readability on smaller screens.
            </li>
            <li>
              <code>button</code>: Adjusts the padding and font size of the
              buttons for better readability on smaller screens.
            </li>
            <li>
              <code>li</code>: Adjusts the font size of the list items for
              better readability on smaller screens.
            </li>
            <li>
              <code>li button</code>: Adjusts the padding and font size of the
              delete and edit buttons for better readability on smaller screens.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you resize your browser window
            or view the to-do list app on different devices, you'll see the
            layout adapt to different screen sizes.
          </p>
          <p>
            In the next step, we'll add final touches to the to-do list app.
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
            Let's add the final touches to our to-do list app to ensure it is
            fully functional and visually appealing.
          </p>
          <ol className="space-y-6">
            <li>
              <strong>1. Open "styles.css":</strong> Open the "styles.css" file
              in your code editor.
            </li>
            <li>
              <strong>2. Add Final Touches:</strong> Copy and paste the
              following CSS code into your "styles.css" file:
              <SyntaxHighlighter language="css" style={docco}>
                {`.container {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

li button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

li button:hover {
  transform: scale(1.1);
}`}
              </SyntaxHighlighter>
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
              and transform to the buttons.
            </li>
            <li>
              <code>button:hover</code>: Scales the buttons slightly larger on
              hover to create a subtle zoom effect.
            </li>
            <li>
              <code>li button</code>: Adds a transition effect for background
              color and transform to the delete and edit buttons.
            </li>
            <li>
              <code>li button:hover</code>: Scales the delete and edit buttons
              slightly larger on hover to create a subtle zoom effect.
            </li>
          </ul>
          <p>
            Save your "styles.css" file. Now, if you open "index.html" in a web
            browser, you'll see the final touches in action.
          </p>
          <p>
            Congratulations! You've completed the JavaScript project, "To-Do
            List App." You've learned how to create a simple to-do list app
            where users can add, edit, and remove tasks. You've also learned the
            basics of DOM manipulation and event handling in JavaScript.
          </p>
          <p>
            Feel free to continue customizing your to-do list app and exploring
            more JavaScript techniques. Happy coding! 🚀
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

export default ToDolistApp;
