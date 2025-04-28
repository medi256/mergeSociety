import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Callbacks in JavaScript | Learn Web Development",
  description:
    "Master JavaScript callbacks with our comprehensive guide. Learn how to handle asynchronous operations, avoid callback hell, and write efficient code.",
  keywords: [
    "JavaScript callbacks",
    "asynchronous programming",
    "web development",
    "JavaScript tutorial",
    "callback functions",
    "callback hell",
    "JavaScript async",
    "front-end development",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/callbacks",
  },
  openGraph: {
    title: "JavaScript Callbacks Explained | Interactive Coding Lesson",
    description:
      "Dive into JavaScript callbacks with hands-on examples. Perfect for beginners and intermediate developers looking to level up their skills.",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Web Development Tutorial",

  schema: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Understanding Callbacks in JavaScript",
    description:
      "A comprehensive lesson on JavaScript callbacks, including examples and best practices for asynchronous programming.",

    audience: {
      "@type": "Audience",
      audienceType: "Developers",
    },
    educationalLevel: "Beginner to Intermediate",
    learningResourceType: "Lesson",
    inLanguage: "en",
    isAccessibleForFree: true,
  },
};

const CallBack = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Understanding Callbacks in JavaScript</h1>

        <p>
          In JavaScript, functions are special because they can be treated just
          like any other variable. You can pass them around, store them in
          variables, and even use them as arguments inside other functions. A{" "}
          <code>**callback**</code> is a function that is passed into another
          function as an argument and is then executed after some operation is
          completed.
        </p>

        <h2>What is a Callback?</h2>
        <p>
          A <code>**callback**</code> is simply a function that is passed as an
          argument to another function and is called (or "invoked") after some
          other task is completed. It's like giving instructions to someone:
          "Once you're done with this, call me back." Callbacks help us handle
          tasks that take time, like fetching data from a server, waiting for
          user input, or performing any other asynchronous operation.
        </p>

        <h2>Why Do We Need Callbacks?</h2>
        <p>
          In JavaScript, tasks like reading files, making network requests, or
          waiting for user actions are asynchronous (they take time to
          complete). Instead of stopping everything while waiting for these
          tasks, JavaScript uses callbacks to say, "Keep doing other things, but
          when you're done with this task, run this function."
        </p>

        <h3>Example of a Callback Function</h3>
        <p>Here’s a simple example of how a callback works:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
function greet(name) {
console.log('Hello ' + name);
}

function processUserInput(callback) {
const name = prompt('Please enter your name.');
callback(name);
}

processUserInput(greet);
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>In this example:</p>
        <ul>
          <li>
            We have a function <code>greet</code> that logs a greeting message.
          </li>
          <li>
            The <code>processUserInput</code> function takes a{" "}
            <code>**callback**</code> as an argument.
          </li>
          <li>
            Inside <code>processUserInput</code>, we get the user's name (let's
            say through a prompt) and pass that name to the callback, which is
            the <code>greet</code> function.
          </li>
          <li>
            Finally, when we call <code>processUserInput(greet)</code>, it runs
            the <code>greet</code> function after getting the user’s name.
          </li>
        </ul>

        <h2>Callbacks and Asynchronous Programming</h2>
        <p>
          Callbacks become especially useful when dealing with{" "}
          <code>**asynchronous tasks**</code> like fetching data or waiting for
          a timer. Let’s say you want to get data from a server, but you don’t
          want to freeze your program while waiting for the data. In such cases,
          you can use a callback to run the code once the data is ready, without
          blocking other tasks in your program.
        </p>

        <h3>Example with setTimeout</h3>
        <p>
          Here’s an example using <code>setTimeout</code>, which runs a function
          after a certain delay:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
console.log('Start');

setTimeout(() => {
console.log('This runs after 3 seconds');
}, 3000);

console.log('End');
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <ul>
          <li>
            The <code>setTimeout</code> function is asynchronous. It schedules a
            task to run after 3 seconds, but it doesn’t stop the rest of the
            code from running.
          </li>
          <li>
            While <code>setTimeout</code> is waiting, the program keeps going.
            So, "End" is printed immediately after "Start."
          </li>
          <li>
            After 3 seconds, the callback function inside{" "}
            <code>setTimeout</code> is executed, printing "This runs after 3
            seconds."
          </li>
        </ul>

        <h3>Why Use Callbacks?</h3>
        <p>
          Without callbacks, JavaScript would have to wait for every task to
          finish before moving on to the next one. Imagine if you had to wait
          for a timer or data from a server before you could do anything else –
          your program would feel slow and unresponsive. Callbacks help avoid
          this by allowing your code to keep running while waiting for an
          asynchronous task to complete.
        </p>

        <h2>Callback Functions Explained in Detail</h2>
        <p>
          Callbacks are functions passed into other functions, but it's
          important to understand when and why they're used. Let’s look at
          another example to break it down further.
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
function fetchData(callback) {
setTimeout(() => {
const data = 'Data from the server';
callback(data);
}, 2000);
}

function displayData(data) {
console.log(data);
}

fetchData(displayData);
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <ul>
          <li>
            The <code>fetchData</code> function simulates getting data from a
            server. It uses <code>setTimeout</code> to wait for 2 seconds before
            calling the <code>callback</code> function.
          </li>
          <li>
            The <code>callback</code> function here is <code>displayData</code>,
            which is passed as an argument.
          </li>
          <li>
            Once <code>setTimeout</code> finishes after 2 seconds, it runs the{" "}
            <code>callback</code> (which is <code>displayData</code>) and passes
            the fetched data ("Data from the server") to it.
          </li>
          <li>
            Then, <code>displayData</code> logs the data to the console.
          </li>
        </ul>

        <h2>Callback Hell</h2>
        <p>
          While callbacks are very useful, they can sometimes lead to something
          called <code>**callback hell**</code>. This happens when you have
          multiple callbacks nested inside each other, making your code hard to
          read and maintain. For example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
setTimeout(() => {
console.log('Task 1 done');
setTimeout(() => {
console.log('Task 2 done');
setTimeout(() => {
console.log('Task 3 done');
}, 1000);
}, 1000);
}, 1000);
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In this example, we have three tasks, each waiting for 1 second before
          the next one starts. The problem is that the callbacks are nested
          inside each other, making the code harder to follow.
        </p>

        <h3>Real-Life Analogy</h3>
        <p>
          Imagine you’re cooking a meal, but some tasks take time, like boiling
          water or baking. Instead of standing there waiting for the water to
          boil, you start cutting vegetables or preparing other ingredients.
          When the water is finally boiled, you get a callback: "The water is
          ready!" This is how callbacks work – they notify you when an
          asynchronous task is done so you can continue working on other things
          in the meantime.
        </p>

        <h2>Summary</h2>
        <ul>
          <li>
            A <code>**callback**</code> is a function passed into another
            function as an argument and executed after some operation is
            completed.
          </li>
          <li>
            Callbacks are especially useful for handling asynchronous tasks like
            fetching data or waiting for timers.
          </li>
          <li>
            They allow JavaScript to keep running other tasks while waiting for
            long operations to finish.
          </li>
          <li>
            Be careful with <code>**callback hell**</code>, where too many
            nested callbacks can make your code difficult to read and maintain.
          </li>
        </ul>

        <p>
          Callbacks are one of the first ways JavaScript handled asynchronous
          operations. Next, we’ll explore a more powerful and flexible
          alternative to callbacks: <code>**Promises**</code>.
        </p>

        <Button whereToGo={"promises"} />
      </div>
    </div>
  );
};

export default CallBack;
