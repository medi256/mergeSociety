import AdUnit from "../AdUnit";

const Comments = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1> Comments in JavaScript</h1>
      <p>
        Just like how we use comments in our daily lives to explain things or
        leave notes, JavaScript allows us to add comments to our code. Comments
        are lines of text that are ignored by the computer when the code runs.
        They act like hidden messages for you or other programmers who might
        read your code in the future.
      </p>
      <h2>Why Use Comments?</h2>
      <p>
        There are many reasons why comments are essential for good JavaScript
        code:
      </p>
      <ul>
        <li>
          <b> Clarity and Understanding</b>: Comments help explain what your
          code is doing, making it easier for you and others to understand how
          it works, especially when you come back to it later or someone else
          needs to maintain it.
        </li>
        <li>
          {" "}
          <b>Improve Readability</b>: Code with comments is like a well-written
          story – it has a clear flow and makes sense to the reader. Comments
          break down complex parts and add context.
        </li>
        <li>
          <b>Documentation</b>: Comments can serve as documentation within your
          code, explaining the purpose of different functions, variables, or
          code blocks.
        </li>
        <li>
          {" "}
          <b>Debugging</b>: Adding comments as you write code can help you
          identify and fix errors (debugging) more efficiently. Comments can act
          as reminders or notes about specific parts of the code.
        </li>
      </ul>
      <h3>Types of Comments in JavaScript:</h3>
      <p>JavaScript offers two main ways to add comments:</p>
      <h3>Single-line Comments:</h3>
      <ul>
        <li> Use two forward slashes (//) to create a single-line comment.</li>
        <li> Any text you write after the // will be ignored by JavaScript.</li>
      </ul>
      <pre>
        <code>
          {`
JavaScript


// This is a single-line comment explaining the code below
let message = "Hello, world!";
          `}
        </code>
      </pre>
      <AdUnit />
      <h3>Multi-line Comments:</h3>
      <ul>
        <li> Use /* and */ to create comments that span multiple lines.</li>
        <li>
          {" "}
          Everything between /* and */ will be considered a comment, even if it
          includes multiple lines of text.
        </li>
      </ul>
      <pre>
        <code>
          {`
JavaScript


/* This is a multi-line comment 
that can explain complex parts of your code
or even write multiple paragraphs */
          
let age = 25;
          `}
        </code>
      </pre>
      <p>
        Comment Generously: {`Don't`} be afraid to add comments throughout your
        code, especially for complex logic or non-obvious parts.
      </p>
      <p>
        {" "}
        Explain the Why: Focus on explaining the purpose of your code and the
        reasoning behind your decisions.
      </p>
      <p>
        Keep it Clear and Concise: Avoid overly complex or lengthy comments.
        Strive for clear and simple explanations.
      </p>
      <p>
        Use Consistent Style: Develop a consistent commenting style for your
        code, making it easier to read and maintain.
      </p>
      <p>
        <b>Remember</b>: Comments are for humans, not computers. Write them in a
        way that is easy to understand for anyone reading your code.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/operator")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/ControlFlow")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Comments;

export const ScopeJS = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>JavaScript Scope: Global vs. Local vs. Block Scope</h1>

      <h2>Introduction to Scope</h2>
      <p>
        In JavaScript, scope refers to the area of a program where a variable is
        accessible. Think of scope as the visibility of variables: where you can
        see and use them. It's like having different rooms in a house where
        certain items are stored. Depending on the room you’re in, you might
        have access to different items.
      </p>
      <p>
        There are three main types of scope in JavaScript:{" "}
        <strong>global scope</strong>, <strong>local scope</strong>, and{" "}
        <strong>block scope</strong>. Each type determines where variables can
        be accessed and modified in your code.
      </p>

      <h2>Global Scope</h2>
      <p>
        Global scope refers to variables that are accessible from anywhere in
        your code. These variables are defined outside of any function or block
        and are available throughout the entire program.
      </p>
      <pre>
        <code>
          {`
let globalVariable = 'I am global!'; // This variable is in the global scope

function showGlobal() {
console.log(globalVariable); // Accessing the global variable
}

showGlobal(); // Output: I am global!
console.log(globalVariable); // Output: I am global!
    `}
        </code>
      </pre>
      <p>
        In this example, <code>globalVariable</code> is defined outside of any
        function or block, so it can be accessed both inside the{" "}
        <code>showGlobal</code> function and outside it.
      </p>
      <p>
        <strong>Global Scope Caution:</strong> While global variables seem
        convenient for sharing data across your entire program, using them
        excessively can lead to problems. Imagine multiple parts of your code
        accidentally modifying the same global variable, causing unexpected
        behavior. It's generally recommended to use local or block scope
        variables whenever possible to keep your code modular and avoid
        unintended side effects.
      </p>

      <h2>Local Scope</h2>
      <p>
        Local scope refers to variables that are only accessible within a
        specific function. These variables are defined inside a function and are
        not visible outside of that function. This helps to keep your code
        organized and prevents variable names from clashing.
      </p>
      <pre>
        <code>
          {`
function localScopeExample() {
let localVariable = 'I am local!'; // This variable is in the local scope of the function
console.log(localVariable); // Accessing the local variable inside the function
}

localScopeExample(); // Output: I am local!

console.log(localVariable); // Error: localVariable is not defined
    `}
        </code>
      </pre>
      <p>
        Here, <code>localVariable</code> is defined inside the{" "}
        <code>localScopeExample</code> function. It can be accessed within the
        function but not outside of it, which causes an error when we try to log
        it outside the function.
      </p>
      <AdUnit />
      <h2>Block Scope</h2>
      <p>
        Block scope refers to variables that are accessible only within the
        block of code (i.e., inside curly braces <code>{`{}`}</code>) where they
        are defined. This type of scope was introduced with <code>let</code> and{" "}
        <code>const</code> in ES6 (ECMAScript 2015).
      </p>
      <pre>
        <code>
          {`
if (true) {
let blockVariable = 'I am in a block!'; // This variable is in block scope
console.log(blockVariable); // Accessible within the block
}

console.log(blockVariable); // Error: blockVariable is not defined
    `}
        </code>
      </pre>
      <p>
        In this example, <code>blockVariable</code> is defined inside an{" "}
        <code>if</code> block. It is accessible only within that block and
        causes an error when accessed outside the block.
      </p>

      <h2>Comparing Scopes</h2>
      <p>Let’s summarize how each type of scope works:</p>
      <ul>
        <li>
          <strong>Global Scope:</strong> Variables are accessible from anywhere
          in your code. Be cautious with global variables as they can be
          modified from anywhere, potentially causing unintended side effects.
          For example, if multiple functions accidentally change the same global
          variable, it might lead to unpredictable behavior in your application.
        </li>
        <li>
          <strong>Local Scope:</strong> Variables are accessible only within the
          function where they are defined. This helps in keeping functions
          modular and prevents conflicts with other parts of the code. For
          example, a variable declared inside a function won't affect other
          functions or parts of the code.
        </li>
        <li>
          <strong>Block Scope:</strong> Variables are accessible only within the
          block (e.g., <code>if</code> statements, loops) where they are
          defined. This provides more granular control over variable visibility
          and helps avoid issues in complex code structures. For instance, a
          variable inside a loop or conditional statement won’t be accessible
          outside of that block.
        </li>
      </ul>

      <h2>Examples and Use Cases</h2>
      <p>Here are a few examples to illustrate the different scopes:</p>

      <h3>Global Scope Example</h3>
      <pre>
        <code>
          {`
let appName = 'My App'; // Global scope variable

function displayAppName() {
console.log(appName); // Can access global variable
}

displayAppName(); // Output: My App
    `}
        </code>
      </pre>
      <AdUnit />
      <h3>Local Scope Example</h3>
      <pre>
        <code>
          {`
function calculateSum(a, b) {
let sum = a + b; // Local scope variable
return sum;
}

console.log(calculateSum(5, 3)); // Output: 8
console.log(sum); // Error: sum is not defined
    `}
        </code>
      </pre>

      <h3>Block Scope Example</h3>
      <pre>
        <code>
          {`
for (let i = 0; i < 3; i++) {
let blockVariable = i; // Block scope variable
console.log(blockVariable); // Accessible within the block
}

console.log(blockVariable); // Error: blockVariable is not defined
    `}
        </code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        Understanding scope is crucial for writing effective and bug-free
        JavaScript code. By knowing when and where variables can be accessed,
        you can better organize your code, avoid errors, and manage your data
        more efficiently. Use global variables sparingly and prefer local or
        block scope variables to keep your code clean and manageable.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/objects")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/hoisting")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const Hoisting = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to Hoisting in JavaScript (JS)</h1>
      <p>
        {" "}
        Hoisting in JavaScript is a behavior where variable and function
        declarations are moved to the top of their containing scope during the
        compilation phase. This might sound a bit confusing at first, but{" "}
        {`let's`}
        break it down with a simple analogy and some beginner-friendly
        explanations.
      </p>
      <p>
        Imagine{" "}
        {`you're planning a party. You have a list of tasks to complete,
        such as sending out invitations, buying decorations, and preparing food.
        Now, you decide to start working on these tasks one by one, but you want
        to make sure you don't`}{" "}
        forget anything. So, you write down all the tasks on a piece of paper
        and keep it in front of you as you work.
      </p>
      <p>
        In JavaScript, the code you write is like the list of tasks, and the
        code execution is like the process of completing those tasks. Hoisting
        is like the act of moving the list of tasks to the top of your
        workspace, so you can see it clearly and easily access it whenever you
        need it.
      </p>
      <h3>{`Here's`} a simple example to illustrate hoisting in JavaScript:</h3>
      <pre>
        <code>
          {`
console.log(myVariable); // This will output "undefined"

let myVariable = "Hello, World!";
          `}
        </code>
      </pre>
      <p>
        In the code above, {`we're`} trying to print the value of{" "}
        <b>myVariable</b> to the console. However, when you run this code,{" "}
        {`you'll`} see that it outputs <b>undefined</b>. This happens because
        the variable declaration{" "}
        <b>{`let myVariable
        = "Hello, World!";`}</b>{" "}
        is hoisted to the top of the scope, but the assignment of the value is
        not hoisted.
      </p>
      <p>
        So, when the JavaScript engine encounters the{" "}
        <b>console.log(myVariable)</b>
        statement, it tries to access the value of <b>myVariable</b>, but since
        it
        {`hasn't`} been assigned yet, it returns <b>undefined</b>.
      </p>
      <AdUnit />
      <h3>Now, {`let's`} see what happens when we run the code again:</h3>
      <pre>
        <code>
          {`
console.log(myVariable); // This will output "Hello, World!"
          `}
        </code>
      </pre>
      <p>
        This time, when you run the code, it outputs {`"Hello, World!".`} This
        is because the variable declaration{" "}
        <b>{`let myVariable = "Hello, World!";`}</b> has been hoisted to the top
        of the scope, and the assignment of the value has also been hoisted. So,
        when the <b>console.log(myVariable)</b> statement is executed, the
        variable <b>myVariable</b> already has the value {`"Hello, World!".`}
      </p>
      <p>
        {`It's essential to understand that hoisting only applies to variable and
        function declarations, not to assignments. This means that you can't
        rely on the order of assignments in your code, as they won't be hoisted.`}
      </p>
      <p>
        {" "}
        In summary, hoisting in JavaScript is a behavior that moves variable and
        function declarations to the top of their containing scope during the
        compilation phase. This can sometimes lead to unexpected results, so
        {`it's`} essential to be aware of this behavior when writing your code.
      </p>
      <p>
        Remember, just like keeping your list of tasks in front of you, you can
        use hoisting to your advantage by organizing your code and making it
        easier to understand and maintain. However, always be cautious and test
        your code thoroughly to avoid any unexpected behavior.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/scope")}>back</button>
        <button onClick={() => (window.location.href = "/DomIntro")}>
          Next
        </button>
      </div>
    </div>
  );
};
