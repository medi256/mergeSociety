import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering JavaScript Functions: A Comprehensive Guide",
  description:
    "Dive into the world of JavaScript functions and discover how to define, call, and utilize them effectively. This tutorial will empower you to organize your code, enhance reusability, and simplify complex tasks with ease.",
  keywords: [
    "javascript",
    "functions",
    "javascript functions",
    "function definition",
    "function calling",
    "code organization",
    "code reusability",
    "programming tutorials",
    "web development",
  ],
  alternates: {
    canonical:
      "https://www.mergesociety.com/javascript/defining-calling-functions",
  },

  openGraph: {
    title: "JavaScript Functions: The Ultimate Guide to Code Efficiency",
    description:
      "Learn the art of creating and utilizing functions in JavaScript. This comprehensive tutorial will teach you how to define functions, call them, and leverage their power to organize and streamline your code.",
  },
};

const DefiningFunction = () => {
  return (
    <div className="lesson-container">
      <h1>Introduction to Functions</h1>
      <p>
        Welcome everyone! Today, we're going to learn about functions in
        JavaScript. Functions are a fundamental part of JavaScript and are used
        to group together code that performs a specific task.
      </p>

      <h2>What is a Function?</h2>
      <p>
        Imagine you have a toy robot. This robot can do a lot of things, but
        some things you want it to do over and over. For example, you might want
        it to walk forward.
      </p>
      <p>
        Instead of giving the robot a separate instruction each time, you can
        teach it a "trick." This trick is like a function in JavaScript. You
        give the trick a name, like "walkForward," and then you teach the robot
        the steps it needs to do to walk forward. In JavaScript, these steps are
        the lines of code inside curly braces.
      </p>
      <p>
        Once you've taught the robot the trick, you can call it whenever you
        want the robot to walk forward. Calling the trick is like calling a
        function in JavaScript. You just use the name of the function, and the
        robot (or the computer program) does what you taught it.
      </p>
      <p>
        This way, you don't have to give the robot a bunch of instructions every
        time you want it to do something. You can just call the trick with the
        right name. This is what functions let you do in JavaScript. They let
        you group together instructions and then use them over and over again
        with just a simple name.
      </p>

      <h2>Defining a Function</h2>
      <p>
        To create a function in JavaScript, you use the <code>function</code>{" "}
        keyword, followed by a name for your function, parentheses{" "}
        <code>()</code>, and curly braces <code>{"{}"}</code>. The code that
        performs the task goes inside the curly braces. This is called
        "defining" a function.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function walkForward() {
  console.log('The robot is walking forward.');
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we defined a function named <code>walkForward</code>.
        When this function is called, it will print 'The robot is walking
        forward.' to the console.
      </p>
      <p>Let's break down the parts of a function definition:</p>
      <ul>
        <li>
          <strong>function</strong>: This keyword tells JavaScript that you are
          defining a function.
        </li>
        <li>
          <strong>walkForward</strong>: This is the name of the function. You
          can name it anything you like, but it's good to choose a name that
          describes what the function does.
        </li>
        <li>
          <strong>()</strong>: These parentheses can hold parameters (inputs)
          for the function. We'll talk more about parameters later.
        </li>
        <li>
          <strong>{"{}"}</strong>: The curly braces contain the code that runs
          when the function is called.
        </li>
      </ul>

      <h2>Calling a Function</h2>
      <p>
        Defining a function doesn't execute it. To execute the code inside a
        function, you need to "call" the function by writing its name followed
        by parentheses <code>()</code>.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
walkForward();
// Output: The robot is walking forward.
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we call the <code>walkForward</code> function, and it prints 'The
        robot is walking forward.' to the console.
      </p>

      <h2>Why Use Functions?</h2>
      <p>
        Functions help you organize your code and make it reusable. Imagine you
        need to greet users in multiple places in your code. Instead of writing{" "}
        <code>console.log('Hello, there!')</code> each time, you can just call
        the <code>greet</code> function.
      </p>
      <p>
        Functions also make your code easier to read and maintain. If you need
        to update the greeting message, you only have to change it in one place
        – inside the <code>greet</code> function.
      </p>
      <p>
        Let's look at another example where we use a function to display a
        simple message.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function sayGoodbye() {
  console.log('Goodbye, see you next time!');
}

sayGoodbye();
// Output: Goodbye, see you next time!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we define a function called <code>sayGoodbye</code>.
        Inside the function, we print a goodbye message. When we call the
        function, it prints 'Goodbye, see you next time!'.
      </p>

      <h2>Understanding the Parts of a Function</h2>
      <p>Let's look closely at the different parts of a function definition:</p>
      <ul>
        <li>
          <strong>Function Name:</strong> The name of the function should
          describe what the function does. In our example, <code>greet</code> is
          a good name because it tells us that the function greets someone.
        </li>
        <li>
          <strong>Function Body:</strong> This is the code inside the curly
          braces <code>{"{}"}</code>. This code will run when the function is
          called.
        </li>
      </ul>

      <h2>Using Functions to Organize Code</h2>
      <p>
        Functions help keep your code organized. For example, if you were making
        a simple program to greet users and say goodbye, you might have separate
        functions for each task.
      </p>
      <p>
        Here’s an example of how you might use functions to organize your code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function greetUser() {
  console.log('Hello, User!');
}

function farewellUser() {
  console.log('Goodbye, User!');
}

// Calling the functions
greetUser(); // Output: Hello, User!
farewellUser(); // Output: Goodbye, User!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we have two functions: <code>greetUser</code> and{" "}
        <code>farewellUser</code>. Each function performs a specific task,
        making our code more organized and easier to read.
      </p>

      <h2>Conclusion</h2>
      <p>
        Functions are a powerful tool in JavaScript that help you organize,
        reuse, and simplify your code. By defining functions, you can create
        blocks of code that perform specific tasks and use them whenever needed.
        This makes your code more efficient and easier to read.
      </p>
      <p>
        Remember, defining a function is like teaching a robot a trick, and
        calling a function is like asking the robot to perform that trick.
        Practice creating and calling functions to get comfortable with this
        fundamental concept in JavaScript.
      </p>

      <Button whereToGo={"parameters-arguments"} />
    </div>
  );
};

export default DefiningFunction;
