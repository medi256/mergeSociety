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
      <h1>What is Scope?</h1>
      <p>
        Scope, in simple terms, refers to the visibility or accessibility of
        variables, functions, and objects within a program. It determines where
        and how these elements can be accessed and manipulated. In JavaScript,
        there are two main types of scope: global scope and local scope.
      </p>
      <h2>Global Scope</h2>
      <p>
        Global scope refers to the highest level of scope in a JavaScript
        program. Variables, functions, and objects declared outside of any
        function or block are considered to be in the global scope. This means
        they can be accessed and modified from anywhere in the program.
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
let globalVar = "I'm a global variable!";

function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // Output: I'm a global variable!
          `}
        </code>
      </pre>
      <p>
        In the above code, <b>globalVar</b> is a global variable, and it can be
        accessed and used inside the <b>printGlobalVar</b> function.
      </p>
      <h2>Local Scope</h2>
      <p>
        {" "}
        Local scope, on the other hand, refers to the visibility of variables,
        functions, and objects within a specific block or function. Variables
        declared inside a function or block are considered to be in the local
        scope, and they can only be accessed and used within that function or
        block.
      </p>
      <h3> {`Here's`} is an example</h3>
      <pre>
        <code>
          {`
function printLocalVar() {
  let localVar = "I'm a local variable!";

  function printLocalVar() {
    console.log(localVar);
  }

  printLocalVar(); // Output: I'm a local variable!
}

printLocalVar();
console.log(localVar); // ReferenceError: localVar is not defined
          `}
        </code>
      </pre>
      <p>
        In the above code, <b>localVar</b> is a local variable, and it can only
        be accessed and used within the <b>printLocalVar</b> function. Trying to
        access it outside of the function results in a <b>ReferenceError</b>.
      </p>
      <h2>The Scope Chain</h2>
      <p>
        When you try to access a variable or function, JavaScript follows a
        process called the {`"scope chain"`} to determine its value or
        existence. The scope chain is a series of scopes, starting from the
        current scope and moving up to the global scope, until it finds the
        variable or function being accessed.
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
let globalVar = "I'm a global variable!";

function outerFunction() {
  let outerVar = "I'm an outer variable!";

  function innerFunction() {
    console.log(globalVar); // Output: I'm a global variable!
    console.log(outerVar); // Output: I'm an outer variable!
    console.log(innerVar); // Output: undefined
  }

  let innerVar = "I'm an inner variable!";

  innerFunction();
}

outerFunction();
          `}
        </code>
      </pre>
      <p>
        In the above code, when <b>innerFunction</b> tries to access{" "}
        <b>innerVar</b>, it follows the scope chain and looks for the variable
        in the local scope of
        <b>innerFunction</b>, then in the local scope of <b>outerFunction</b>,
        and finally in the global scope. Since <b>innerVar</b> is not found in
        any of these scopes, it returns <b>undefined</b>.
      </p>
      <AdUnit />
      <h2>Best Practices</h2>
      <ol>
        <li>
          Avoid using global variables as much as possible, as they can lead to
          unexpected behavior and conflicts.
        </li>
        <li>
          {" "}
          Use local variables and functions to keep your code organized and
          maintainable.
        </li>
        <li>
          Be mindful of the scope chain when working with nested functions or
          blocks.
        </li>
      </ol>
      <p>
        By understanding and applying the concept of scope, {`you'll`} be able
        to write more efficient and maintainable JavaScript code.
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
