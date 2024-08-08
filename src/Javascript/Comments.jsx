import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
JavaScript


// This is a single-line comment explaining the code below
let message = "Hello, world!";
          `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
JavaScript


/* This is a multi-line comment 
that can explain complex parts of your code
or even write multiple paragraphs */
          
let age = 25;
          `}
          </SyntaxHighlighter>
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
      <h1>JavaScript Scope</h1>

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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let globalVariable = 'I am global!'; // This variable is in the global scope

function showGlobal() {
console.log(globalVariable); // Accessing the global variable
}

showGlobal(); // Output: I am global!
console.log(globalVariable); // Output: I am global!
    `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function localScopeExample() {
let localVariable = 'I am local!'; // This variable is in the local scope of the function
console.log(localVariable); // Accessing the local variable inside the function
}

localScopeExample(); // Output: I am local!

console.log(localVariable); // Error: localVariable is not defined
    `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
if (true) {
let blockVariable = 'I am in a block!'; // This variable is in block scope
console.log(blockVariable); // Accessible within the block
}

console.log(blockVariable); // Error: blockVariable is not defined
    `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let appName = 'My App'; // Global scope variable

function displayAppName() {
console.log(appName); // Can access global variable
}

displayAppName(); // Output: My App
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>Local Scope Example</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function calculateSum(a, b) {
let sum = a + b; // Local scope variable
return sum;
}

console.log(calculateSum(5, 3)); // Output: 8
console.log(sum); // Error: sum is not defined
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Block Scope Example</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
for (let i = 0; i < 3; i++) {
let blockVariable = i; // Block scope variable
console.log(blockVariable); // Accessible within the block
}

console.log(blockVariable); // Error: blockVariable is not defined
    `}
          </SyntaxHighlighter>
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
      <h1>Mastering JavaScript Hoisting</h1>

      <h2>Introduction to Hoisting</h2>
      <p>
        In JavaScript, hoisting is a behavior where variable and function
        declarations are moved to the top of their containing scope during the
        compile phase. This means you can use variables and functions before you
        declare them in your code.
      </p>
      <p>
        However, hoisting can sometimes lead to unexpected behavior, especially
        for beginners. Understanding how hoisting works and following best
        practices can help you write clearer and more predictable code.
      </p>

      <h2>Variable Hoisting</h2>
      <p>
        When a variable is hoisted, its declaration is moved to the top of the
        scope, but its initialization remains in place. This means that the
        variable will be undefined until the point in the code where it is
        initialized.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log(myVar); // Output: undefined
var myVar = 'Hello, world!';
console.log(myVar); // Output: Hello, world!
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the declaration of <code>myVar</code> is hoisted to the
        top, but its initialization (assignment of the value{" "}
        <code>'Hello, world!'</code>) stays in place. As a result, the first{" "}
        <code>console.log</code> outputs <code>undefined</code> because{" "}
        <code>myVar</code> has been declared but not yet initialized.
      </p>

      <h3>
        Best Practice: Use <code>let</code> and <code>const</code> for Variable
        Declarations
      </h3>
      <p>
        To avoid issues with hoisting, it's recommended to use <code>let</code>{" "}
        and <code>const</code> instead of <code>var</code>. Variables declared
        with <code>let</code> and <code>const</code> are not hoisted to the top
        of their scope in the same way as <code>var</code>.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log(myLetVar); // Error: Cannot access 'myLetVar' before initialization
let myLetVar = 'Hello, world!';

console.log(myConstVar); // Error: Cannot access 'myConstVar' before initialization
const myConstVar = 'Hello, world!';
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In these examples, trying to access <code>myLetVar</code> or{" "}
        <code>myConstVar</code> before their declaration results in an error,
        making it easier to avoid bugs related to hoisting.
      </p>
      <AdUnit />
      <h2>Function Hoisting</h2>
      <p>
        Functions in JavaScript are also hoisted, but unlike variables, the
        entire function definition is hoisted to the top of the scope. This
        allows you to call a function before its definition in your code.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
sayHello(); // Output: Hello, world!

function sayHello() {
console.log('Hello, world!');
}
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the <code>sayHello</code> function can be called before
        it is defined because the entire function definition is hoisted to the
        top of the scope.
      </p>

      <h3>Best Practice: Declare Functions Before Calling Them</h3>
      <p>
        Although function hoisting allows you to call functions before their
        definitions, it's a good practice to declare your functions before
        calling them. This makes your code more readable and easier to
        understand.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function sayHello() {
console.log('Hello, world!');
}

sayHello(); // Output: Hello, world!
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Understanding the Temporal Dead Zone (TDZ)</h2>
      <p>
        The Temporal Dead Zone (TDZ) is a behavior that occurs with variables
        declared using <code>let</code> and <code>const</code>. The TDZ is the
        period between entering a scope and the actual declaration of the
        variable within that scope. During this period, accessing the variable
        will result in a ReferenceError.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log(myLetVar); // Error: Cannot access 'myLetVar' before initialization
let myLetVar = 'Hello, world!';
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, trying to access <code>myLetVar</code> before its
        declaration results in an error due to the TDZ.
      </p>

      <h2>Analogy: Hoisting and the Lost-and-Found Box</h2>
      <p>
        Imagine you're in a classroom, and there's a lost-and-found box at the
        front. If you lose something, the teacher automatically puts it in the
        box (like hoisting variables to the top). However, just because the item
        is in the box doesn't mean you can use it immediately. You have to ask
        the teacher (initialize the variable) to get your item back. Using{" "}
        <code>let</code> and <code>const</code> is like having a rule that you
        can't even see the box until the teacher specifically tells you about
        your lost item.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Hoisting is an important concept in JavaScript that affects how
        variables and functions are initialized and used. By understanding
        hoisting and following best practices like using <code>let</code> and{" "}
        <code>const</code>, and declaring functions before calling them, you can
        write more predictable and error-free code.
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
