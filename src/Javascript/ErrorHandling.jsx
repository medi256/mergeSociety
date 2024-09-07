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
      <h1>Throwing and Handling Errors in JavaScript</h1>

      <p>
        In the previous section, we learned how the <strong>Try/Catch</strong>{" "}
        statement helps us handle errors gracefully. Now, let’s dive deeper into
        how we can <strong>throw</strong> and <strong>handle</strong> our own
        errors in JavaScript. Throwing errors manually gives us more control
        over how and when an error should occur.
      </p>

      <h2>What Does "Throwing an Error" Mean?</h2>
      <p>
        When we say we are <strong>throwing an error</strong>, it means we are
        intentionally creating an error when something unexpected happens in our
        code. For example, if a user enters an invalid value or a condition we
        expect isn't met, we can throw an error to alert the program that
        something went wrong.
      </p>
      <p>
        JavaScript will then stop executing the code at the point where the
        error is thrown and look for a <strong>Catch</strong> block to handle
        it. This is where the Try/Catch structure comes in handy because the
        catch block can take care of what to do when that error happens.
      </p>

      <h2>How to Throw an Error</h2>
      <p>
        To throw an error in JavaScript, we use the <code>throw</code> keyword
        followed by the <code>new Error()</code> function. This creates a new
        error object with a message describing what went wrong. Here's an
        example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function checkAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative'); // Throwing an error with a custom message
  }
  return 'Valid age: ' + age;
}

try {
  console.log(checkAge(-5)); // This will throw an error because age is negative
} catch (error) {
  console.log('Error:', error.message); // Handling the error
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>checkAge</code> function checks if the age is
        a negative number. If it is, we <strong>throw</strong> an error using{" "}
        <code>throw new Error()</code> with a custom message: "Age cannot be
        negative". When this happens, the code inside the <code>try</code> block
        will stop running, and the control moves to the <code>catch</code>{" "}
        block, where the error is handled.
      </p>

      <h2>Why Throw Errors?</h2>
      <p>
        You might be wondering, why would we throw errors ourselves? Here are
        some reasons:
      </p>

      <ul>
        <li>
          <strong>Input Validation:</strong> If a user enters invalid data (like
          a negative age), you can throw an error to prevent further processing.
        </li>
        <li>
          <strong>Unexpected Conditions:</strong> If a condition that should
          never happen does occur (for example, dividing by zero), you can throw
          an error to stop the code from continuing in an unpredictable state.
        </li>
        <li>
          <strong>Debugging:</strong> Throwing custom errors with clear messages
          helps you track down problems in your code more easily.
        </li>
      </ul>

      <p>
        By throwing errors where something goes wrong, you ensure that your
        program doesn't continue running with incorrect data or in an unexpected
        state. Instead, you can handle the error and take the appropriate
        action, such as showing an error message to the user or logging the
        issue for debugging.
      </p>
      <AdUnit />
      <h2>Throwing Custom Errors</h2>
      <p>
        While JavaScript provides some built-in errors (like{" "}
        <code>TypeError</code>, <code>ReferenceError</code>, etc.), you can
        throw <strong>custom errors</strong> by providing your own messages.
        This makes it easier to understand what went wrong. Here’s an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function checkEmail(email) {
  if (!email.includes('@')) {
    throw new Error('Invalid email format'); // Custom error message for invalid email
  }
  return 'Valid email: ' + email;
}

try {
  console.log(checkEmail('invalidEmail.com')); // This will throw an error
} catch (error) {
  console.log('Error:', error.message); // Handling the error
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>checkEmail</code> function checks if the
        email contains an "@" symbol. If not, it throws a custom error: "Invalid
        email format". The <code>catch</code> block then handles that error by
        printing the error message.
      </p>

      <h2>How to Handle Errors</h2>
      <p>
        Once an error is thrown, we need to handle it in the{" "}
        <strong>Catch</strong> block. Handling errors means deciding what to do
        when something goes wrong. For example:
      </p>

      <ul>
        <li>
          <strong>Log the error:</strong> You can log the error message for
          debugging purposes.
        </li>
        <li>
          <strong>Show a user-friendly message:</strong> Instead of showing a
          technical error, you can display a message like "Please enter a valid
          email."
        </li>
        <li>
          <strong>Retry an operation:</strong> If something like a network
          request fails, you might want to try again.
        </li>
      </ul>

      <h2>Handling Errors in Try/Catch</h2>
      <p>
        Let’s see how handling errors works inside a <code>try</code> and{" "}
        <code>catch</code> block. We can use the catch block to do something
        when an error happens:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
try {
  const userInput = 'invalidEmail.com';
  console.log(checkEmail(userInput)); // Throws error
} catch (error) {
  // Handling the error
  console.log('An error occurred:', error.message);
  // You can show a user-friendly message here, like:
  console.log('Please enter a valid email address.');
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, if the user enters an invalid email, the{" "}
        <code>catch</code> block will log the error message and provide a
        user-friendly message like "Please enter a valid email address."
      </p>
      <AdUnit />
      <h2>Important Notes About Error Handling</h2>
      <ul>
        <li>
          <strong>Don't Overuse Try/Catch:</strong> While Try/Catch is useful,
          you shouldn’t wrap every bit of code in it. Use it where errors are
          likely to occur (like user input or network requests), but avoid using
          it for every single line of code.
        </li>
        <li>
          <strong>Always Provide Helpful Error Messages:</strong> When throwing
          custom errors, make sure the messages are clear and describe what went
          wrong. This will make debugging much easier.
        </li>
        <li>
          <strong>Don’t Hide Errors:</strong> Handle errors in a way that allows
          you to understand and fix them. Don’t just suppress the error message
          without fixing the underlying issue.
        </li>
      </ul>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        By throwing and handling errors, you gain more control over how your
        code behaves when something unexpected happens. This ensures that your
        program doesn’t break down when an error occurs, and you can take the
        appropriate action to handle it. Whether you are validating user input,
        making network requests, or debugging your code, throwing and catching
        errors is a powerful tool to make your JavaScript programs more
        reliable.
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
