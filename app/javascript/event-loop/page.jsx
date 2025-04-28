import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding the Event Loop in JavaScript",
  description:
    "Dive into the concept of the Event Loop in JavaScript, exploring how it manages asynchronous operations and ensures non-blocking execution. This lesson breaks down the event-driven nature of JavaScript, making it accessible for beginners.",
  keywords:
    "JavaScript, Event Loop, asynchronous programming, non-blocking execution, web development",
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/event-loop",
  },
  openGraph: {
    title: "Understanding the Event Loop in JavaScript",
    description:
      "Learn about the Event Loop in JavaScript and how it handles asynchronous operations.",
  },
};

const EventLoop = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Understanding the Event Loop in JavaScript</h1>

        <p>
          The <code>event loop</code> is a key concept that helps JavaScript
          handle asynchronous tasks. It allows JavaScript to perform tasks in
          the background while still responding to other code that needs to run.
          Understanding the event loop will help you see how JavaScript manages
          multiple tasks without getting stuck.
        </p>

        <h2>JavaScript is Single-Threaded</h2>
        <p>
          First, remember that JavaScript is a <code>single-threaded</code>{" "}
          language. This means it can only do one thing at a time in the main
          thread. However, modern web applications often need to do many things
          at once, like handling user input, fetching data from the server, and
          updating the user interface. So how does JavaScript do all this at
          once if it’s single-threaded? This is where the{" "}
          <code>event loop</code> comes in.
        </p>

        <h2>How the Event Loop Works</h2>
        <p>
          The event loop is like a traffic controller for JavaScript. It helps
          JavaScript manage tasks that take time without blocking the main
          thread. Let's break it down:
        </p>

        <h3>The Stack</h3>
        <p>
          JavaScript uses something called a <code>call stack</code> to keep
          track of what functions are currently running. Think of the stack as a
          to-do list where tasks are added on top and removed from the top once
          they’re completed.
        </p>

        <h4>Example of the Call Stack:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
function greet() {
console.log('Hello');
}

greet(); // This function gets added to the call stack and executed
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          When the <code>greet()</code> function is called, it gets added to the
          call stack. Once it’s done (i.e., when{" "}
          <code>console.log('Hello')</code> runs), it is removed from the stack.
          The stack allows JavaScript to keep track of what task is running and
          what to do next.
        </p>

        <h3>The Queue</h3>
        <p>
          While the call stack handles tasks that are being executed
          immediately, JavaScript also has a <code>message queue</code> (or{" "}
          <code>task queue</code>) where tasks that are waiting to be executed
          are stored. This queue holds tasks that are ready to be processed, but
          JavaScript won’t deal with them until the current task in the call
          stack is finished.
        </p>

        <p>
          Tasks that are asynchronous, like fetching data or waiting for a
          timer, are placed in the queue once they are ready to be processed.
        </p>

        <h4>Example with a Timer:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
console.log('Task 1: Start');

setTimeout(() => {
console.log('Task 2: This is delayed by 2 seconds');
}, 2000);

console.log('Task 3: End');
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <ul>
          <li>
            <code>Task 1</code> is printed immediately: "Task 1: Start."
          </li>
          <li>
            <code>Task 2</code> uses <code>setTimeout</code>, so it’s scheduled
            to run after 2 seconds. It doesn’t block the rest of the code, so it
            goes into the queue.
          </li>
          <li>
            <code>Task 3</code> runs immediately after Task 1, printing "Task 3:
            End."
          </li>
          <li>
            After 2 seconds, <code>Task 2</code> is moved from the queue to the
            stack and executed, printing "Task 2: This is delayed by 2 seconds."
          </li>
        </ul>

        <p>
          Notice how the event loop allows JavaScript to keep working on other
          tasks (like Task 3) while waiting for Task 2 to finish its delay.
        </p>

        <h3>The Event Loop in Action</h3>
        <p>
          The <code>event loop</code> constantly checks whether the call stack
          is empty. If the stack is empty, it takes the next task from the queue
          and moves it to the call stack to be executed. This way, JavaScript
          can continue processing new tasks while waiting for asynchronous
          operations like timers or data fetching.
        </p>

        <h4>Step-by-Step Example:</h4>
        <ol>
          <li>
            Task 1 (<code>console.log('Task 1: Start')</code>) is placed on the
            stack and executed.
          </li>
          <li>
            Task 2 (<code>setTimeout</code>) is placed in the queue since it has
            a delay of 2 seconds.
          </li>
          <li>
            Task 3 (<code>console.log('Task 3: End')</code>) is placed on the
            stack and executed immediately.
          </li>
          <li>
            After 2 seconds, the event loop moves Task 2 from the queue to the
            stack to be executed.
          </li>
        </ol>

        <h2>Real-Life Analogy: A Restaurant</h2>
        <p>
          Imagine a restaurant kitchen. The <code>call stack</code> is like the
          kitchen where chefs prepare one dish at a time. Once a dish is
          finished, it’s served to the customer. The <code>queue</code> is like
          the list of orders waiting to be cooked. Orders are placed in the
          queue, but the chefs can only work on one dish at a time.
        </p>

        <p>
          The <code>event loop</code> is like the restaurant manager, making
          sure the chefs are always working on the next available order once
          they finish cooking a dish. If an order takes a long time (like
          waiting for a cake to bake), the manager ensures the chefs keep
          working on other orders in the meantime.
        </p>

        <h2>Summary</h2>
        <p>To summarize:</p>
        <ul>
          <li>
            JavaScript is single-threaded, meaning it can only execute one task
            at a time.
          </li>
          <li>
            The <code>call stack</code> tracks what task is currently being
            executed.
          </li>
          <li>
            The <code>queue</code> holds tasks that are waiting to be executed,
            like delayed tasks or tasks waiting for a response from the server.
          </li>
          <li>
            The <code>event loop</code> ensures that once the stack is empty,
            tasks from the queue are processed.
          </li>
          <li>
            This process allows JavaScript to handle multiple tasks efficiently,
            even though it can only execute one task at a time.
          </li>
        </ul>

        <p>
          The event loop makes sure that JavaScript can continue running
          smoothly, handling tasks in the background while keeping the main
          thread free for other tasks. Next, we’ll explore how JavaScript uses{" "}
          <code>callbacks</code>, <code>promises</code>, and{" "}
          <code>async/await</code> to handle asynchronous tasks more easily.
        </p>

        <Button whereToGo={"callbacks"} />
      </div>
    </div>
  );
};

export default EventLoop;
