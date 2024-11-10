import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Promises in JavaScript | Advanced Web Development",
  description:
    "Master JavaScript Promises with our comprehensive guide. Learn how to handle asynchronous operations, chain promises, and write cleaner code.",
  keywords: [
    "JavaScript Promises",
    "asynchronous programming",
    "web development",
    "JavaScript tutorial",
    "Promise chaining",
    "async JavaScript",
    "front-end development",
    "ES6 features",
  ],
  openGraph: {
    title: "JavaScript Promises Explained | Interactive Coding Lesson",
    description:
      "Dive into JavaScript Promises with hands-on examples. Perfect for intermediate developers looking to level up their async programming skills.",
  },

  alternates: {
    canonical: "https://www.mergesociety.com/javascript/promises",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Advanced Web Development Tutorial",

  schema: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Understanding Promises in JavaScript",
    description:
      "A comprehensive lesson on JavaScript Promises, including examples and best practices for asynchronous programming.",

    audience: {
      "@type": "Audience",
      audienceType: "Developers",
    },
    educationalLevel: "Intermediate to Advanced",
    learningResourceType: "Lesson",
    inLanguage: "en",
    isAccessibleForFree: true,
  },
};

const Promises = () => {
  return (
    <div className="lesson-container">
      <h1>Understanding Promises in JavaScript</h1>
      <p>
        In JavaScript, a <code>Promise</code> is an object that represents the
        eventual completion (or failure) of an asynchronous operation and its
        resulting value. Promises provide a much cleaner and more readable way
        to handle asynchronous operations compared to callbacks, especially when
        you have several asynchronous tasks that depend on each other.
      </p>

      <h2>Why Do We Need Promises?</h2>
      <p>
        In the previous topic, we learned that callbacks can sometimes lead to
        messy code when we need to deal with multiple asynchronous operations,
        resulting in "callback hell." Promises solve this problem by allowing us
        to structure our code in a more manageable way. With Promises, we can
        avoid deeply nested callbacks and write asynchronous code that is easier
        to read and understand.
      </p>

      <h2>What Exactly Is a Promise?</h2>
      <p>
        A <code>Promise</code> in JavaScript can be thought of as a guarantee
        that we will get a result in the future. The result can either be:
      </p>
      <ul>
        <li>
          <strong>Resolved</strong>: The promise has successfully completed, and
          the result is available.
        </li>
        <li>
          <strong>Rejected</strong>: Something went wrong, and the promise could
          not be completed.
        </li>
      </ul>

      <p>
        Think of it like ordering food from a restaurant. When you place an
        order, you're "promised" that your food will arrive. If everything goes
        well, you get your meal (the promise is <code>resolved</code>). If
        something goes wrong (e.g., they run out of ingredients), they notify
        you that the order can’t be fulfilled (the promise is{" "}
        <code>rejected</code>).
      </p>

      <h2>The States of a Promise</h2>
      <p>A Promise can be in one of three states:</p>
      <ul>
        <li>
          <code>PENDING</code>: The initial state, when the promise is neither
          resolved nor rejected.
        </li>
        <li>
          <code>FULFILLED</code> (or <code>RESOLVED</code>): The operation has
          completed successfully, and we have the result.
        </li>
        <li>
          <code>REJECTED</code>: The operation failed, and we get an error or
          failure reason.
        </li>
      </ul>

      <h2>Creating a Promise</h2>
      <p>
        We create a promise using the <code>Promise</code> constructor, which
        takes a function as an argument. This function itself takes two
        arguments:
      </p>
      <ul>
        <li>
          <code>resolve</code>: A function that is called when the operation
          completes successfully.
        </li>
        <li>
          <code>reject</code>: A function that is called if there’s an error or
          failure.
        </li>
      </ul>

      <p>Here’s a simple example of creating a promise:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const myPromise = new Promise((resolve, reject) => {
  const success = true;  // Imagine this is the result of an asynchronous task

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('There was an error.');
  }
});
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the promise checks if <code>success</code> is true. If
        it is, the promise is resolved with the message "Operation was
        successful!" Otherwise, it’s rejected with the message "There was an
        error."
      </p>

      <h2>Handling Promises: then() and catch()</h2>
      <p>
        Once a promise is created, we need a way to handle the result. We use
        two key methods:
      </p>
      <ul>
        <li>
          <code>.then()</code>: This is called when the promise is resolved
          successfully.
        </li>
        <li>
          <code>.catch()</code>: This is called when the promise is rejected
          (i.e., there’s an error).
        </li>
      </ul>

      <h3>Example: Using then() and catch()</h3>
      <p>Here’s how we handle the promise from the previous example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
myPromise
  .then((message) => {
    console.log(message);  // This runs if the promise is resolved
  })
  .catch((error) => {
    console.log(error);  // This runs if the promise is rejected
  });
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          If the promise is resolved, the <code>.then()</code> method logs the
          success message ("Operation was successful!").
        </li>
        <li>
          If the promise is rejected, the <code>.catch()</code> method logs the
          error message ("There was an error.").
        </li>
      </ul>

      <h2>Real-Life Example of Promises</h2>
      <p>
        Let’s see a more practical example using a mock asynchronous task, like
        fetching data from a server:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function fetchData() {
  return new Promise((resolve, reject) => {
    const dataReceived = true;  // Simulating a successful data fetch

    setTimeout(() => {
      if (dataReceived) {
        resolve('Data received successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 2000);  // Simulating a 2-second delay
  });
}

fetchData()
  .then((data) => {
    console.log(data);  // This will run if data is successfully fetched
  })
  .catch((error) => {
    console.log(error);  // This will run if there's an error
  });
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We created a function <code>fetchData</code> that returns a promise.
        </li>
        <li>
          The promise simulates fetching data (or some other long-running task).
        </li>
        <li>
          We use <code>setTimeout</code> to mimic a delay (2 seconds) before
          resolving or rejecting the promise.
        </li>
        <li>
          If the data is fetched successfully, the promise is resolved with the
          message "Data received successfully!"
        </li>
        <li>
          If something goes wrong (e.g., the data is not fetched), the promise
          is rejected with the message "Failed to fetch data."
        </li>
      </ul>

      <h2>Promise Chaining</h2>
      <p>
        One of the key benefits of promises is <code>chaining</code>. You can
        link <code>.then()</code> calls together to handle multiple asynchronous
        tasks in a sequence. For example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
fetchData()
  .then((data) => {
    console.log(data);  // Log the fetched data
    return 'Next operation';  // Pass the result to the next then()
  })
  .then((message) => {
    console.log(message);  // Log the next message
  })
  .catch((error) => {
    console.log(error);  // Catch any error that occurs in any step
  });
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Here, the first <code>.then()</code> gets the fetched data, and the
        second <code>.then()</code> uses the result from the first one. If any
        error occurs, the <code>.catch()</code> will handle it.
      </p>

      <h3>Real-Life Analogy</h3>
      <p>
        Think of promises like placing an online order. You place the order, and
        you are promised the delivery of the product (which might take some
        time). The promise has two possible outcomes: either the delivery is
        successful (resolved) and you get your product, or there’s a problem
        with the delivery (rejected) and you get an error notification. You
        don’t wait by the door the whole time; instead, you’re notified when the
        delivery is done or if something goes wrong.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>
          A <code>Promise</code> represents the eventual result of an
          asynchronous operation. It can either be resolved (success) or
          rejected (failure).
        </li>
        <li>
          Promises help us avoid callback hell by making asynchronous code
          easier to read and manage.
        </li>
        <li>
          We use <code>.then()</code> to handle the successful result of a
          promise and <code>.catch()</code> to handle any errors.
        </li>
        <li>
          Promise chaining allows us to handle multiple asynchronous tasks in a
          sequence.
        </li>
      </ul>

      <p>
        Promises are a powerful tool for managing asynchronous code in
        JavaScript. But as we move forward, there's an even simpler way to write
        asynchronous code using <code>async</code> and <code>await</code>. We’ll
        cover that next!
      </p>

      <Button whereToGo={"async-await"} />
    </div>
  );
};

export default Promises;
