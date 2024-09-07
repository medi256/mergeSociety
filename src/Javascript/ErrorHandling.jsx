import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TryCatch = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding Try/Catch Statements in JavaScript</h1>

      <p>
        In JavaScript, things don’t always go as planned. Sometimes errors
        happen when you’re running your code, like trying to access data that
        doesn’t exist or making a network request that fails.
      </p>

      <p>
        <code>Try/Catch Statements</code> help you manage those errors
        gracefully, so instead of your entire program crashing, you can control
        what happens when an error occurs.
      </p>

      <h2>What is Try/Catch?</h2>
      <p>
        A <code>Try/Catch Statement</code> is a way to "try" running some code,
        and if an error happens, you can "catch" it and handle it without
        stopping the entire program. Think of it as a safety net for your code.
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
          JavaScript "catches" the error and runs the code inside this block to
          handle the situation.
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
        technically an error in some cases). If something goes wrong, the catch
        block will handle it, and you’ll see an error message in the console.
      </p>

      <h2>What is the "throw" Keyword?</h2>
      <p>
        The <code>throw</code> keyword is used in JavaScript to manually throw
        (or create) an error when something unexpected happens. When you "throw"
        an error, JavaScript will stop running the code in the <code>try</code>{" "}
        block and immediately jump to the <code>catch</code> block, where you
        can handle the error.
      </p>

      <p>
        You can think of <code>throw</code> as raising a red flag that something
        has gone wrong and you want to stop and handle it.
      </p>

      <h2>Throwing Errors with the "throw" Keyword</h2>
      <p>
        Here’s an example where we use <code>throw</code> to manually trigger an
        error:
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
        In this example, we’re checking if the <code>userAge</code> is negative.
        If it is, we <code>throw</code> an error using{" "}
        <code>throw new Error()</code> with a custom message. The{" "}
        <code>catch</code> block will catch that error, and we can handle it (in
        this case, by logging the error message to the console).
      </p>
      <AdUnit />
      <h2>Why Use the "throw" Keyword?</h2>
      <p>
        You might want to use the <code>throw</code> keyword when you need to
        stop execution if certain conditions aren't met or if invalid data is
        entered. For example, if you’re expecting user input to be a number but
        receive something else, you can throw an error to notify the user or
        stop the program.
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
        handles the error, and you can display a message or take action based on
        the error.
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
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        <code>Try/Catch Statements</code> are essential for writing reliable
        JavaScript code. They help you deal with unexpected errors in a
        controlled way, making your code more stable and easier to debug.
        Whether you’re handling user input, working with external data, or
        making network requests, <code>Try/Catch</code> will help you ensure
        your program runs smoothly even when something goes wrong.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/asyncAwait")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/throwingErr")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TryCatch;

export const ThrowingErro = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Throwing and Handling Errors: Taking Control in JavaScript</h1>
      <p>
        {" "}
        Now that{" "}
        {`you've seen how Try/Catch statements help catch errors, let's
        explore how we can intentionally throw errors in specific situations.`}
      </p>
      <h2> 1. Throwing Errors: Signaling When Things Go Wrong</h2>
      <ul>
        <li>
          The <code>throw</code> statement allows you to create your own errors
          and {`"throw" them when certain conditions aren't met.`} This helps
          signal to the code (and any Try/Catch blocks) that something
          unexpected has happened.
        </li>
        <li>
          You can throw any value, but {`it's`} best practice to throw an{" "}
          <code>Error</code>
          object for consistency. You can create an <code>Error</code> object
          with properties like <code>name</code> and <code>message</code> to
          provide more details about the error.
        </li>
      </ul>
      <h3>Example</h3>
      <pre>
        <code>
          {`
JavaScript
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative."); // Throwing a custom error
  }
  // Rest of the function logic
}

try {
  checkAge(-5);  // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}
          `}
        </code>
      </pre>
      <p>
        In this example, the <b>checkAge</b> function throws a custom error if
        the age is negative. The Try/Catch block in the main code catches this
        error and displays the error message.
      </p>
      <h2>2. Handling Thrown Errors: Putting Try/Catch to Work</h2>
      <ul>
        <li>
          {" "}
          As you saw earlier, Try/Catch statements become even more powerful
          when combined with thrown errors.
        </li>
        <li>
          {" "}
          The <code>catch</code> block can handle any error {`that's`} thrown
          within the <code>try</code> block or any function called from within
          it.
        </li>
      </ul>
      <AdUnit />
      <h2>Benefits of Throwing and Handling Errors:</h2>
      <p>
        {" "}
        <b>Improved Code Readability</b>: Throwing errors makes your code more
        explicit about potential problems, improving maintainability.
      </p>
      <p>
        <b>Centralized Error Handling</b>: You can handle errors in a single
        location (the catch block) instead of checking for errors everywhere in
        your code.
      </p>
      <p>
        <b>Robust Applications</b>: By anticipating and handling errors
        gracefully, you create more robust applications that can recover from
        unexpected situations.
      </p>
      <p>
        <b>Remember</b>: Throwing errors is a powerful tool, but use it
        judiciously. Throw errors for specific conditions that indicate
        problems, not for general control flow.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/tryCatch")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/debuggingTec")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const DebuggingTech = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1> Debugging Techniques: Unveiling the Mysteries of JavaScript</h1>
      <p>
        Even the best JavaScript code can have errors. Debugging techniques help
        you identify and fix these issues. Here are some common approaches:
      </p>
      <h2>
        1. <code>Console.log</code>: Your Debugging Best Friend
      </h2>
      <ul>
        <li>
          {" "}
          The <code>console.log</code> statement is a simple but powerful
          debugging tool. It allows you to print the values of variables and
          expressions at different points in your code.
        </li>
        <li>
          {" "}
          By strategically placing <code>console.log</code> statements, you can
          inspect the state of your program during execution and see if
          variables hold the expected values.
        </li>
      </ul>
      <h3>Example</h3>
      <pre>
        <code>
          {`
//JavaScript


function calculateArea(width, height) {
  const area = width * height;
  console.log("Area:", area);  // Inspect the calculated area
  return area;
}

const result = calculateArea(5, 10);
console.log("Result:", result);
          
          `}
        </code>
      </pre>
      <p>
        In this example, <code> console.log</code> statements are used to
        inspect the calculated area both inside and outside the function.
      </p>
      <h2> 2. Browser Developer Tools: A Treasure Trove of Information</h2>
      <ol>
        <li>
          Modern browsers come with built-in developer tools that offer a wealth
          of debugging features.
        </li>
        <li>
          {" "}
          These tools typically include:
          <ul>
            <li>
              <b>Source Code Editor</b>: View and edit your JavaScript code.
            </li>
            <li>
              {" "}
              <b>Breakpoints</b>: Pause code execution at specific lines to
              inspect variables and the call stack.
            </li>
            <li>
              {" "}
              <b>Call Stack</b>: See the chain of function calls that led to the
              current execution point.
            </li>
            <li>
              <b>Console</b>: Similar to <code>console.log</code>, but often
              with more advanced features for inspecting objects and evaluating
              code snippets.
            </li>
          </ul>
        </li>
      </ol>
      <AdUnit />
      <h3>3. The debugger Statement: A Pause Button for Your Code</h3>
      <p>
        The debugger statement is a simple way to pause code execution at a
        specific line.
      </p>
      <p>
        Once paused, you can use the {`browser's`} developer tools to step
        through your code line by line, examine variables, and identify the
        source of the problem.
      </p>
      <h3>4. Error Messages and Stack Traces: Your Guides in the Dark</h3>
      <ul>
        <li>
          When errors occur, JavaScript throws error messages and stack traces.
        </li>
        <li>
          <b>Error Messages</b>: These messages provide clues about the nature
          of the error. While they can be cryptic at times, they often point you
          in the right direction.
        </li>
        <li>
          <b>Stack Traces</b>: These show the chain of function calls that led
          to the error, helping you pinpoint the exact line of code where the
          error originated.
        </li>
      </ul>
      <h3> 5. Rubber Duck Debugging: Sometimes, the Answer Is Obvious</h3>
      <ul>
        <li>
          This technique might sound silly, but it can be surprisingly
          effective.
        </li>
        <li>
          Explain your code to an imaginary rubber duck (or any non-judgmental
          listener). As you verbalize your thought process, you might identify
          logical flaws or misunderstandings in your code.
        </li>
      </ul>
      <p>
        {" "}
        <b> Remember</b>: Debugging is an iterative process. Experiment with
        different techniques and find what works best for you. By combining
        these methods with Try/Catch statements and Throwing Errors, {`you'll`}{" "}
        be well-equipped to tackle even the trickiest JavaScript bugs.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/throwingErr")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/IntroAPI")}>
          Next
        </button>
      </div>
    </div>
  );
};
