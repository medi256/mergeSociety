import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding setTimeout and setInterval in JavaScript",
  description:
    "Learn how to use setTimeout and setInterval in JavaScript to manage time-based actions. This lesson covers syntax, examples, and practical use cases.",
  keywords: [
    "JavaScript",
    "setTimeout",
    "setInterval",
    "JavaScript timing functions",
    "web development",
    "JavaScript tutorials",
    "coding",
    "asynchronous JavaScript",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/settimeout-setinterval",
  },

  openGraph: {
    title: "Understanding setTimeout and setInterval in JavaScript",
    description:
      "Master the use of setTimeout and setInterval in JavaScript with this comprehensive lesson featuring clear examples and practical applications.",
  },
};

const Time = () => {
  return (
    <div className="lesson-container">
      <h1>
        Understanding <code>setTimeout</code> and <code>setInterval</code> in
        JavaScript
      </h1>

      <p>
        JavaScript allows us to perform tasks after a certain time has passed or
        to repeat tasks continuously at regular intervals. To do this, we use
        two special functions: <code>setTimeout</code> and{" "}
        <code>setInterval</code>.
      </p>

      <h2>
        1. <code>setTimeout</code>: Delay a Task
      </h2>
      <p>
        The <code>setTimeout</code> function allows you to delay the execution
        of a task (or function) by a specified amount of time. Think of it as
        setting an alarm: the task won’t happen immediately, but it will happen
        after the time you set has passed.
      </p>

      <h3>
        How Does <code>setTimeout</code> Work?
      </h3>
      <p>
        Imagine you want something to happen after 3 seconds, like showing a
        message to the user or changing the color of an element. You can use{" "}
        <code>setTimeout</code> to wait for 3 seconds and then perform the
        action.
      </p>

      <h3>Basic Syntax</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setTimeout(function, delay);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>
      <ul>
        <li>
          <code>function</code>: This is the code (a function) you want to run
          after the delay.
        </li>
        <li>
          <code>delay</code>: This is the time (in milliseconds) to wait before
          running the function. 1 second = 1000 milliseconds.
        </li>
      </ul>

      <h3>
        Example of <code>setTimeout</code>
      </h3>
      <p>
        Here’s an example where we use <code>setTimeout</code> to display a
        message after 2 seconds:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Wait for 2 seconds...");

setTimeout(function() {
  console.log("2 seconds have passed!");
}, 2000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          The first <code>console.log</code> runs immediately, displaying "Wait
          for 2 seconds...".
        </li>
        <li>
          Then, <code>setTimeout</code> waits for 2 seconds (2000 milliseconds)
          before running the second <code>console.log</code> that displays "2
          seconds have passed!".
        </li>
      </ul>

      <p>
        This shows how <code>setTimeout</code> delays a task without stopping
        the rest of the code from running. The delayed task runs later, once the
        timer is up.
      </p>

      <h3>Common Use Cases</h3>
      <ul>
        <li>
          Showing a popup after a few seconds when a user lands on a page.
        </li>
        <li>Displaying a notification after a delay.</li>
        <li>Simulating a loading process that finishes after a short time.</li>
      </ul>

      <h2>
        2. <code>setInterval</code>: Repeat a Task
      </h2>
      <p>
        Now, what if you want something to happen over and over, continuously,
        after a certain time interval? That’s where <code>setInterval</code>{" "}
        comes in. It’s like setting an alarm that keeps ringing every 5 minutes
        until you stop it.
      </p>

      <h3>
        How Does <code>setInterval</code> Work?
      </h3>
      <p>
        While <code>setTimeout</code> runs a task only once after a delay,{" "}
        <code>setInterval</code> keeps running the task over and over at a
        specified interval. This is useful if you want to update something
        regularly, like the time on a clock, or if you want to continuously
        check something, like new notifications.
      </p>

      <h3>Basic Syntax</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setInterval(function, interval);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>
      <ul>
        <li>
          <code>function</code>: This is the code (a function) you want to run
          repeatedly.
        </li>
        <li>
          <code>interval</code>: This is the time (in milliseconds) between each
          repetition of the function.
        </li>
      </ul>

      <h3>
        Example of <code>setInterval</code>
      </h3>
      <p>
        Here’s an example where we use <code>setInterval</code> to display a
        message every 3 seconds:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Starting...");

setInterval(function() {
  console.log("3 seconds have passed!");
}, 3000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          The first <code>console.log</code> runs immediately, displaying
          "Starting...".
        </li>
        <li>
          Then, every 3 seconds, <code>setInterval</code> runs the second{" "}
          <code>console.log</code> that displays "3 seconds have passed!".
        </li>
        <li>This will keep happening every 3 seconds until you stop it.</li>
      </ul>

      <p>
        This shows how <code>setInterval</code> repeats a task at regular
        intervals. It doesn’t stop by itself—you need to manually stop it if you
        want it to end.
      </p>

      <h3>
        How to Stop <code>setInterval</code> and <code>setTimeout</code>
      </h3>
      <p>
        If you set up an interval or a timeout but want to stop it before it
        finishes, you can use the <code>clearTimeout</code> and{" "}
        <code>clearInterval</code> functions.
      </p>

      <h4>
        Example of Stopping <code>setInterval</code>
      </h4>
      <p>
        To stop an interval, you need to save it to a variable and then use{" "}
        <code>clearInterval</code> to stop it. Let’s see how:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let intervalId = setInterval(function() {
  console.log("Repeating every 2 seconds");
}, 2000);

// After 6 seconds, stop the interval
setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 6000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We set an interval to display "Repeating every 2 seconds" every 2
          seconds.
        </li>
        <li>
          We also set a <code>setTimeout</code> to stop the interval after 6
          seconds using <code>clearInterval(intervalId)</code>.
        </li>
        <li>
          After 6 seconds, the interval stops, and the message "Interval
          stopped" is displayed.
        </li>
      </ul>

      <h2>
        Using Arrow Functions with <code>setTimeout</code> and{" "}
        <code>setInterval</code>
      </h2>
      <p>
        Just like in other functions, you can use arrow functions to shorten the
        code when using <code>setTimeout</code> and <code>setInterval</code>.
        Here’s how you can rewrite the examples above with arrow functions:
      </p>

      <h4>
        Example with <code>setTimeout</code>:
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setTimeout(() => {
  console.log("2 seconds have passed!");
}, 2000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>
        Example with <code>setInterval</code>:
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let intervalId = setInterval(() => {
  console.log("Repeating every 3 seconds");
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 9000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Practice: Try it Yourself</h2>
      <p>
        Now that you understand <code>setTimeout</code> and{" "}
        <code>setInterval</code>, here are some practice tasks to try on your
        own:
      </p>
      <ul>
        <li>
          Use <code>setTimeout</code> to display a message after 5 seconds.
        </li>
        <li>
          Use <code>setInterval</code> to show the current time every second.
        </li>
        <li>
          Try creating an interval that stops itself after a certain amount of
          time.
        </li>
      </ul>

      <Button whereToGo={"async-programming"} />
    </div>
  );
};

export default Time;
