import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering Try/Catch in JavaScript | Error Handling Tutorial",
  description:
    "Learn how to use Try/Catch statements in JavaScript to handle errors effectively. Improve your code reliability and debugging skills with our comprehensive guide.",
  keywords: [
    "JavaScript",
    "Try/Catch",
    "Error Handling",
    "throw keyword",
    "Async/Await",
    "Web Development",
    "Coding Tutorial",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/try-catch",
  },
  openGraph: {
    title: "Master JavaScript Error Handling with Try/Catch",
    description:
      "Discover how to write robust JavaScript code using Try/Catch statements. Perfect for beginners and intermediate developers looking to level up their error handling skills.",
  },

  schema: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Understanding Try/Catch Statements in JavaScript",
    description:
      "A comprehensive guide to using Try/Catch for error handling in JavaScript, including examples with async/await and the throw keyword.",
    author: {
      "@type": "Person",
      name: "MergeSociety",
    },

    keywords:
      "JavaScript, Try/Catch, Error Handling, throw keyword, Async/Await, Web Development",
  },
};

const tryCatch = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Understanding Try/Catch Statements in JavaScript</h1>

        <p>
          In JavaScript, things don’t always go as planned. Sometimes errors
          happen when you’re running your code, like trying to access data that
          doesn’t exist or making a network request that fails.
        </p>

        <p>
          <code>Try/Catch Statements</code> help you manage those errors
          gracefully, so instead of your entire program crashing, you can
          control what happens when an error occurs.
        </p>

        <h2>What is Try/Catch?</h2>
        <p>
          A <code>Try/Catch Statement</code> is a way to "try" running some
          code, and if an error happens, you can "catch" it and handle it
          without stopping the entire program. Think of it as a safety net for
          your code.
        </p>

        <h2>How Does It Work?</h2>
        <p>A Try/Catch statement has two main parts:</p>
        <ul>
          <li>
            <code>Try Block</code>: This is where you put the code you want to
            run. JavaScript will "try" to execute this code.
          </li>
          <li>
            <code>Catch Block</code>: If there’s an error in the try block,
            JavaScript "catches" the error and runs the code inside this block
            to handle the situation.
          </li>
        </ul>

        <h2>Basic Example of Try/Catch</h2>
        <p>Here’s an example to show how Try/Catch works:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
try {
  // Code that might cause an error
  const result = 10 / 0; // Dividing by zero
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.log('An error occurred:', error.message);
}
  `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this example, JavaScript will try to divide 10 by 0 (which is
          technically an error in some cases). If something goes wrong, the
          catch block will handle it, and you’ll see an error message in the
          console.
        </p>

        <h2>What is the "throw" Keyword?</h2>
        <p>
          The <code>throw</code> keyword is used in JavaScript to manually throw
          (or create) an error when something unexpected happens. When you
          "throw" an error, JavaScript will stop running the code in the{" "}
          <code>try</code> block and immediately jump to the <code>catch</code>{" "}
          block, where you can handle the error.
        </p>

        <p>
          You can think of <code>throw</code> as raising a red flag that
          something has gone wrong and you want to stop and handle it.
        </p>

        <h2>Throwing Errors with the "throw" Keyword</h2>
        <p>
          Here’s an example where we use <code>throw</code> to manually trigger
          an error:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
try {
  const userAge = -5; // Invalid age

  if (userAge < 0) {
    throw new Error('Age cannot be negative'); // Custom error
  }

  console.log('User age:', userAge);
} catch (error) {
  console.log('An error occurred:', error.message);
}
  `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this example, we’re checking if the <code>userAge</code> is
          negative. If it is, we <code>throw</code> an error using{" "}
          <code>throw new Error()</code> with a custom message. The{" "}
          <code>catch</code> block will catch that error, and we can handle it
          (in this case, by logging the error message to the console).
        </p>

        <h2>Why Use the "throw" Keyword?</h2>
        <p>
          You might want to use the <code>throw</code> keyword when you need to
          stop execution if certain conditions aren't met or if invalid data is
          entered. For example, if you’re expecting user input to be a number
          but receive something else, you can throw an error to notify the user
          or stop the program.
        </p>

        <h2>Why Use Try/Catch?</h2>
        <p>
          Errors are a normal part of programming, especially when dealing with
          things like user input, network requests, or external data. Without
          Try/Catch, errors could break your code and stop everything. But with
          Try/Catch, you can handle errors and decide what happens next, like
          showing a message to the user or retrying an operation.
        </p>

        <h2>Try/Catch in Action</h2>
        <p>
          Let’s say you are working with user input, and you want to avoid
          breaking the program when the user enters incorrect data.
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
try {
  const userAge = parseInt('not a number'); // Trying to convert a string to a number
  if (isNaN(userAge)) {
    throw new Error('Invalid age entered'); // Throwing an error if it's not a number
  }
  console.log('User age:', userAge);
} catch (error) {
  console.log('An error occurred:', error.message);
}
  `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this example, the <code>parseInt</code> function tries to convert a
          string ("not a number") to a number, which fails. The catch block then
          handles the error, and you can display a message or take action based
          on the error.
        </p>

        <h2>Try/Catch with Asynchronous Code</h2>
        <p>
          You can also use Try/Catch with asynchronous code like promises (which
          we learned about earlier). Here’s how it works with an async function:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Failed to fetch data:', error.message);
  }
}

fetchData(); // Calling the async function
  `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this example, the <code>fetchData</code> function tries to get data
          from an API. If the network request fails or something goes wrong, the
          catch block will handle the error, and you can show a message like
          "Failed to fetch data" instead of crashing the program.
        </p>

        <h2>Benefits of Try/Catch</h2>
        <ul>
          <li>Prevents your program from crashing when an error occurs.</li>
          <li>Allows you to control what happens when an error is detected.</li>
          <li>Makes debugging easier by providing error messages.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          <code>Try/Catch Statements</code> are essential for writing reliable
          JavaScript code. They help you deal with unexpected errors in a
          controlled way, making your code more stable and easier to debug.
          Whether you’re handling user input, working with external data, or
          making network requests, <code>Try/Catch</code> will help you ensure
          your program runs smoothly even when something goes wrong.
        </p>

        <Button whereToGo={"throwing-errors"} />
      </div>
    </div>
  );
};

export default tryCatch;
