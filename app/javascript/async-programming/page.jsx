import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Asynchronous Programming in JavaScript",
  description:
    "Explore the fundamentals of asynchronous programming in JavaScript. Learn how setTimeout and setInterval work, and understand the importance of non-blocking tasks for web applications.",
  keywords: [
    "JavaScript",
    "asynchronous programming",
    "synchronous programming",
    "setTimeout",
    "setInterval",
    "event loop",
    "callbacks",
    "promises",
    "async/await",
    "web development",
    "JavaScript tutorials",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/async-programming",
  },

  openGraph: {
    title: "Understanding Asynchronous Programming in JavaScript",
    description:
      "Learn the key concepts of asynchronous programming in JavaScript, including setTimeout, setInterval, and the event loop. Keep your web applications responsive with non-blocking code.",
  },
};

const AsyncProgram = () => {
  return (
    <div className="lesson-container">
      <h1>Understanding Asynchronous Programming in JavaScript</h1>

      <p>
        In JavaScript, many tasks happen one after the other, like following
        steps in a recipe. This is called <code>synchronous</code> programming,
        where each step waits for the previous one to finish before moving on.
        However, not everything can or should happen one by one. For example,
        imagine you’re cooking and you need to boil water. While waiting for the
        water to boil, you can chop vegetables. You don’t have to stop
        everything and wait for the water before moving to the next task.
      </p>

      <p>
        <code>Asynchronous programming</code> allows JavaScript to handle tasks
        that might take some time, such as fetching data from the internet or
        waiting for a user’s input, without stopping everything else. In other
        words, JavaScript can do other things while waiting for certain tasks to
        complete.
      </p>

      <h2>Synchronous vs Asynchronous Programming</h2>

      <h3>Synchronous Programming</h3>
      <p>
        In <code>synchronous programming</code>, tasks are performed one after
        the other. JavaScript reads a line of code, executes it, and moves to
        the next line. It doesn’t move forward until the current task is
        complete. Think of it as standing in line at a store, waiting for the
        person in front of you to finish before it’s your turn.
      </p>

      <h4>Example of Synchronous Code:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Task 1: Start");
console.log("Task 2: Continue");
console.log("Task 3: Finish");
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In the example above, each task happens one after the other. First,
        "Task 1: Start" is printed, then "Task 2: Continue," and finally "Task
        3: Finish."
      </p>

      <h3>Asynchronous Programming</h3>
      <p>
        With <code>asynchronous programming</code>, some tasks take time to
        complete, like downloading a file, waiting for a response from an API,
        or loading data. Instead of waiting for these tasks to finish before
        moving on, JavaScript can continue executing other code while waiting
        for the longer tasks to complete. Once those tasks are done, JavaScript
        comes back to them and completes the necessary actions.
      </p>

      <h4>
        Example of Asynchronous Code (Using <code>setTimeout</code>):
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Task 1: Start");

setTimeout(function() {
console.log("Task 2: Delayed by 2 seconds");
}, 2000);

console.log("Task 3: Continue without waiting");
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>In this example:</p>
      <ul>
        <li>
          <strong>Task 1</strong> is executed immediately, printing "Task 1:
          Start".
        </li>
        <li>
          <strong>Task 2</strong> is delayed by 2 seconds using{" "}
          <code>setTimeout</code>. JavaScript doesn't wait for 2 seconds to
          complete this task. Instead, it moves on to the next task right away.
        </li>
        <li>
          <strong>Task 3</strong> runs immediately after Task 1 without waiting
          for Task 2 to finish, printing "Task 3: Continue without waiting".
        </li>
        <li>
          Once 2 seconds have passed, Task 2 finally executes, printing "Task 2:
          Delayed by 2 seconds".
        </li>
      </ul>

      <p>
        Notice how Task 3 happens immediately, even though Task 2 has a delay.
        This is how asynchronous programming works: certain tasks can happen in
        the background, and JavaScript doesn’t have to wait for them to finish
        before moving on to other things.
      </p>

      <h2>Why is Asynchronous Programming Important?</h2>
      <p>
        Asynchronous programming is crucial in JavaScript because many tasks
        take time to complete, such as:
      </p>
      <ul>
        <li>Loading data from a server (fetching data).</li>
        <li>
          Waiting for user input (like waiting for a file to be uploaded).
        </li>
        <li>Running animations that occur over time.</li>
      </ul>

      <p>
        Imagine if JavaScript waited for each of these tasks to finish before
        moving on. Your web page could freeze, or become unresponsive, because
        JavaScript would be stuck waiting. Asynchronous programming allows
        JavaScript to handle these time-consuming tasks in the background while
        keeping the rest of the program running smoothly.
      </p>

      <h2>Real-Life Example: Making a Meal</h2>
      <p>
        Let’s imagine you’re cooking dinner. Some tasks take time, like boiling
        water or baking something in the oven. You don’t just stand there
        waiting for the water to boil—you do other things, like chopping
        vegetables or setting the table, while the water boils. Once the water
        is ready, you can come back to it.
      </p>

      <p>
        In the same way, asynchronous programming lets JavaScript do other
        things while waiting for certain tasks (like data fetching) to complete.
      </p>

      <h2>JavaScript is Single-Threaded</h2>
      <p>
        JavaScript is a <code>single-threaded</code> language, meaning it can
        only execute one task at a time in the main thread. However, with
        asynchronous programming, JavaScript can start a task, like fetching
        data from a server, and move on to other things while it waits for the
        data. When the data is ready, it comes back to that task and completes
        it. This makes JavaScript feel faster and more responsive, even though
        it's doing one thing at a time.
      </p>

      <h3>Single-Threaded vs Multi-Threaded</h3>
      <p>
        A <code>single-threaded</code> language like JavaScript handles one task
        at a time. In contrast, a <code>multi-threaded</code> language can
        handle multiple tasks at once. Even though JavaScript is
        single-threaded, asynchronous programming makes it seem like it can
        handle multiple tasks by starting something, moving on to other tasks,
        and then coming back once the first task is done.
      </p>

      <h2>Understanding the Bigger Picture</h2>
      <p>
        In the upcoming sections, we will dive into <code>how</code> JavaScript
        handles these asynchronous tasks behind the scenes using things like the{" "}
        <code>event loop</code>, and we’ll explore concepts like{" "}
        <code>callbacks</code>, <code>promises</code>, and{" "}
        <code>async/await</code>. Each of these plays a key role in managing
        asynchronous code in JavaScript.
      </p>

      <p>
        But for now, remember that asynchronous programming allows JavaScript to
        handle tasks that take time without stopping everything else, making
        your web applications faster and more responsive.
      </p>

      <Button whereToGo={"event-loop"} />
    </div>
  );
};

export default AsyncProgram;
