import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Async/Await in JavaScript | Modern JS Tutorial",
  description:
    "Master async/await in JavaScript with our comprehensive guide. Learn how to simplify asynchronous operations, handle errors, and write cleaner code.",
  keywords: [
    "JavaScript",
    "async/await",
    "asynchronous programming",
    "promises",
    "error handling",
    "web development",
    "coding tutorial",
  ],
  openGraph: {
    title: "Mastering Async/Await in JavaScript",
    description:
      "Simplify your asynchronous JavaScript code with our in-depth async/await tutorial. Perfect for beginners and intermediate developers.",
    type: "article",
    article: {
      tags: ["JavaScript", "Async/Await", "Web Development"],
    },
  },

  schema: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Understanding Async/Await in JavaScript",
    description:
      "A comprehensive guide to using async/await for asynchronous programming in JavaScript",
    author: {
      "@type": "Person",
      name: "Merge Society",
    },

    keywords:
      "JavaScript, async/await, asynchronous programming, promises, web development",
  },
};

const AsyncAwait = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Understanding Async/Await in JavaScript</h1>

      <p>
        <code>Async/Await</code> is a feature in JavaScript that simplifies
        working with asynchronous operations, like fetching data from a server
        or reading a file. It makes your code look more like synchronous code,
        which is easier to understand and maintain.
      </p>

      <h2>What Is Async/Await?</h2>
      <p>
        <code>Async/Await</code> is a combination of two keywords:{" "}
        <code>async</code> and <code>await</code>. They work together to handle
        asynchronous operations in a cleaner and more readable way than
        traditional methods, like using promises and callbacks.
      </p>

      <h2>How Does It Work?</h2>
      <p>
        - <code>Async</code>: This keyword is used to declare a function as
        asynchronous. An async function always returns a promise, and inside
        this function, you can use the <code>await</code> keyword.
      </p>
      <p>
        - <code>Await</code>: This keyword is used inside an async function to
        pause the execution of the function until a promise is resolved. It
        allows you to write code that waits for an asynchronous operation to
        complete before moving on.
      </p>

      <h2>Creating an Async Function</h2>
      <p>
        To create an async function, you use the <code>async</code> keyword
        before the function declaration. Inside this function, you can use{" "}
        <code>await</code> to wait for asynchronous operations.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
async function fetchData() {
  // Simulate fetching data with a delay
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received successfully!');
    }, 2000); // 2 seconds delay
  });
  return data;
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>fetchData</code> is an async function. Inside it,
        we use <code>await</code> to pause the execution until the promise is
        resolved. Once resolved, the function returns the data.
      </p>

      <h2>Using Async/Await with Error Handling</h2>
      <p>
        You can use <code>try</code> and <code>catch</code> blocks to handle
        errors when using async/await. This makes it easy to manage errors in a
        straightforward way.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
async function fetchData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Failed to fetch data.');
      }, 2000); // 2 seconds delay
    });
    return data;
  } catch (error) {
    console.log(error); // Handle the error
  }
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this updated example, if the promise is rejected, the{" "}
        <code>catch</code> block will handle the error and log it to the
        console.
      </p>

      <h2>Using Async/Await in Practice</h2>
      <p>
        Here’s a practical example where we fetch data and log it to the
        console:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
async function getData() {
  const data = await fetchData(); // Fetch data using our async function
  console.log(data); // Log the result
}

getData(); // Call the function to see the result
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we call <code>getData</code>, which in turn calls{" "}
        <code>fetchData</code>. Since <code>fetchData</code> is an async
        function, <code>getData</code> uses <code>await</code> to wait for it to
        finish before logging the result.
      </p>

      <h2>Why Use Async/Await?</h2>
      <p>
        <code>Async/Await</code> makes it easier to:
      </p>
      <ul>
        <li>Write cleaner and more readable asynchronous code.</li>
        <li>
          Handle errors more effectively using <code>try/catch</code> blocks.
        </li>
        <li>
          Chain asynchronous operations in a straightforward manner without
          deeply nested callbacks or promises.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>
          <code>Async</code> is used to declare an asynchronous function that
          returns a promise.
        </li>
        <li>
          <code>Await</code> is used inside async functions to pause execution
          until a promise is resolved.
        </li>
        <li>
          <code>Try/Catch</code> is used for error handling within async
          functions.
        </li>
        <li>
          <code>Async/Await</code> makes asynchronous code more readable and
          easier to manage.
        </li>
      </ul>

      <p>
        Async/await is a powerful tool in JavaScript that can simplify your
        asynchronous code and make it easier to work with. Now that you have a
        good grasp of how it works, you’ll find it much easier to manage complex
        asynchronous tasks in your projects.
      </p>

      <Button whereToGo={"try-catch"} />
    </div>
  );
};

export default AsyncAwait;
