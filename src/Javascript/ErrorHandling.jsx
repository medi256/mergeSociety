const TryCatch = () => {
  return (
    <div className="comments-container internet">
      <h1>Try/Catch Statements: Graceful Error Handling in JavaScript</h1>
      <p>
        {" "}
        Imagine{" "}
        {`you're writing a program that asks the user for their age and displays a message based on it. But what happens if the user enters something unexpected, like "hello" instead of a number? This could cause an error and crash your program.`}
      </p>
      <h3>Enter Try/Catch: The Superhero of Error Handling</h3>
      <p>
        Try/Catch statements are like superheroes in JavaScript. They help you
        anticipate and gracefully handle errors, preventing your program from
        crashing and providing a better user experience. {`Here's`} how they
        work:
      </p>
      <h2>1. The Try Block: Where the Action Happens (But Might Go Wrong)</h2>
      <li>
        {" "}
        The try block is where you place the code that might throw an error.
        This could be anything from converting a {`user's`} input to a number to
        accessing a file that might not exist.
      </li>
      <li> Example:</li>
      <pre>
        <code>
          {`
//JavaScript


try {
  const age = parseInt(prompt("Enter your age: "));
  if (age >= 18) {
    console.log("Welcome!");
  } else {
    console.log("You must be 18 or older to proceed.");
  }
} catch (error) {
  // We'll handle errors here
}
          `}
        </code>
      </pre>
      <h2>
        2. The <code>Catch</code> Block: Catching Those Pesky Errors
      </h2>
      <ul>
        <li>
          The <code>catch</code> block is the {`hero's cape. It's`} where you
          define what happens when an error occurs inside the <code>try</code>{" "}
          block.
        </li>
        <li>
          The catch block receives an argument, usually named error, which
          contains information about the error that happened.
        </li>
        <li>
          You can use this information to display a user-friendly message, log
          the error for debugging, or take other corrective actions.
        </li>
        <li>Example (continued from above):</li>
      </ul>
      <pre>
        <code>
          {`
//JavaScript


try {
  // ... (same code as before)
} catch (error) {
  console.error("Oops! Something went wrong:", error.message);
}
          `}
        </code>
      </pre>
      <h2>3. Putting It All Together: A Heroic Example</h2>
      <p> Now, {`let's`} see our code with Try/Catch in action:</p>
      <pre>
        <code>
          {`
//JavaScript


try {
  const age = parseInt(prompt("Enter your age: "));
  if (age >= 18) {
    console.log("Welcome!");
  } else {
    console.log("You must be 18 or older to proceed.");
  }
} catch (error) {
  console.error("Hey there! It seems you entered something unexpected. Please enter your age as a number.");
}
          `}
        </code>
      </pre>
      <p>
        In this example, if the user enters {`"hello"`} instead of a number, the
        <code>catch</code> block will catch the error and display a clear
        message, preventing the program from crashing.
      </p>
      <p>
        Remember: Try/Catch statements are your friends when it comes to writing
        robust and user-friendly JavaScript programs. They help you anticipate
        errors and provide a better user experience.
      </p>
      <h2>Additional Tips:</h2>
      <ol>
        <li>
          {" "}
          You can have multiple <code>catch</code> blocks to handle different
          types of errors.
        </li>
        <li>
          Not all code needs to be wrapped in a <code>try...catch</code> block.
          Use it for sections where errors are likely.
        </li>
        <li>
          Consider using <code>console.error</code> for logging errors to the{" "}
          {`browser's`} developer console for debugging purposes.
        </li>
      </ol>
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
