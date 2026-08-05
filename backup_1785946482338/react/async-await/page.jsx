import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering Async/Await in React: Efficient Asynchronous Code",
  description:
    "Learn how to write asynchronous code in React using async/await. Improve code readability and handle asynchronous tasks with ease.",
  openGraph: {
    title: "React Async/Await Tutorial",
    description:
      "Explore the world of async/await in React. Write cleaner and more maintainable asynchronous code.",
  },
  alternates: {
    canonical: "https://www.mergesociety.com/react/async-await",
  },

  keywords: [
    "React",
    "Async/Await",
    "Asynchronous Code",
    "Promises",
    "Error Handling",
    "Readability",
  ],
};

const AsyncAwait = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Async/Await Syntax in React: Efficient Asynchronous Code</h1>

        <p>
          When working with asynchronous operations in React, the async/await
          syntax can be a powerful tool. It allows you to write asynchronous
          code in a more synchronous-looking way, making it easier to read and
          understand. Let's explore the world of async/await in React and learn
          how to efficiently manage asynchronous tasks.
        </p>

        <h3>Understanding Async/Await</h3>

        <p>
          Asynchronous code is a common aspect of modern web development,
          especially when dealing with operations like fetching data from an
          API, performing time-consuming tasks, or handling user interactions.
          The async/await syntax provides a way to write asynchronous code that
          looks and behaves like synchronous code, making it easier to reason
          about and maintain.
        </p>

        <h4>What is Async/Await?</h4>

        <p>
          Async/await is a syntax introduced in ES2017 that allows you to write
          asynchronous code in a more synchronous-looking way. It helps you
          handle asynchronous operations, such as promises, in a cleaner and
          more concise manner.
        </p>

        <h4>Why Use Async/Await?</h4>

        <p>Async/await offers several benefits:</p>

        <ul>
          <li>
            <strong>Synchronous-Looking Code:</strong> Async/await allows you to
            write asynchronous code that looks and behaves like synchronous
            code. This makes your code easier to read, understand, and maintain.
            It helps you avoid deeply nested callback functions and callback
            hell.
          </li>
          <li>
            <strong>Error Handling:</strong> Async/await provides a
            straightforward way to handle errors in asynchronous code using
            try/catch blocks. This makes error handling more intuitive and
            similar to synchronous code.
          </li>
          <li>
            <strong>Improved Readability:</strong> With async/await, your code
            becomes more readable and maintainable. It eliminates the need for
            callback functions and simplifies the flow of your asynchronous
            operations.
          </li>
        </ul>

        <h3>Steps to Use Async/Await in React</h3>

        <p>Here are the steps to use async/await in React:</p>

        <ol>
          <li>
            <strong>Mark Functions as Async:</strong> Add the <code>async</code>{" "}
            keyword before a function declaration to indicate that it contains
            asynchronous code.
          </li>
          <li>
            <strong>Await Promises:</strong> Use the <code>await</code> keyword
            before a promise to pause the execution of the function until the
            promise is resolved.
          </li>
          <li>
            <strong>Handle Errors:</strong> Use try/catch blocks to handle
            errors that may occur during asynchronous operations. This allows
            you to catch and handle errors gracefully.
          </li>
        </ol>

        <h3>Step-by-Step Example</h3>

        <h4>1. Marking Functions as Async</h4>

        <p>Let's mark a function as async:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
// App.js

import React, { useState, useEffect } from 'react';

async function fetchData() {
// Asynchronous code goes here
}

function App() {
const [data, setData] = useState(null);

useEffect(() => {
fetchData();
}, []);

// ...
}

export default App;
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this code, we add the <code>async</code> keyword before the{" "}
          <code>fetchData</code>
          function declaration to indicate that it contains asynchronous code.
          This tells React that the function will be performing asynchronous
          tasks.
        </p>

        <h4>2. Awaiting Promises</h4>

        <p>
          Now, let's use the <code>await</code> keyword to fetch data from an
          API:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
// ...

async function fetchData() {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

setData(data);
}

// ...
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this code, we use the <code>await</code> keyword before the{" "}
          <code>fetch</code> call to pause the execution of the function until
          the response is received. We then use
          <code>await</code> again to wait for the response data to be parsed as
          JSON. This allows us to work with the data as if it were synchronous.
        </p>

        <h4>3. Handling Errors</h4>

        <p>Let's add error handling using try/catch blocks:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
// ...

async function fetchData() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

setData(data);
} catch (error) {
console.error('Error fetching data:', error);
}
}

// ...
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this code, we use a try/catch block to handle errors that may occur
          during the asynchronous operations. If an error occurs, it will be
          caught by the catch block, and we can log the error or perform any
          necessary error handling. This makes error handling more intuitive and
          similar to how you would handle errors in synchronous code.
        </p>

        <h3>Putting It All Together</h3>

        <p>Let's see the complete example:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
// App.js

import React, { useState, useEffect } from 'react';

async function fetchData() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

setData(data);
} catch (error) {
console.error('Error fetching data:', error);
}
}

function App() {
const [data, setData] = useState(null);

useEffect(() => {
fetchData();
}, []);

// ...
}

export default App;
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h3>Explanation</h3>

        <ul>
          <li>
            <strong>Mark Functions as Async:</strong> We add the{" "}
            <code>async</code> keyword before a function declaration to indicate
            that it contains asynchronous code. This tells React that the
            function will be performing asynchronous tasks.
          </li>
          <li>
            <strong>Await Promises:</strong> We use the <code>await</code>{" "}
            keyword before promises to pause the execution of the function until
            the promises are resolved. This allows us to work with the resolved
            data as if it were synchronous.
          </li>
          <li>
            <strong>Handle Errors:</strong> We use try/catch blocks to handle
            errors that may occur during asynchronous operations. If an error
            occurs, we log it to the console and can perform additional error
            handling as needed.
          </li>
        </ul>

        <h3>Note</h3>

        <p>
          Async/await syntax in React allows you to write asynchronous code in a
          more synchronous-looking way. It improves code readability and makes
          it easier to manage and understand asynchronous tasks. Remember to use
          try/catch blocks to handle errors gracefully and provide a robust user
          experience.
        </p>

        <Button whereToGo={"error-handling"} />
      </div>
    </div>
  );
};

export default AsyncAwait;
