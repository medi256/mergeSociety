import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Hoisting: Mastering Variable and Function Declarations",
  description:
    "Learn about JavaScript hoisting, including variable and function hoisting, best practices, and the Temporal Dead Zone (TDZ). Improve your code quality and avoid common pitfalls.",
  keywords: [
    "JavaScript",
    "hoisting",
    "variable hoisting",
    "function hoisting",
    "Temporal Dead Zone",
    "TDZ",
    "let",
    "const",
    "var",
    "programming tutorial",
  ],
  openGraph: {
    title:
      "Master JavaScript Hoisting: Variables, Functions, and Best Practices",
    description:
      "Dive deep into JavaScript hoisting and level up your coding skills. Learn how to write cleaner, more predictable code by understanding hoisting behavior.",
    type: "article",
  },
};

const Hoisting = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"dom-intro"} />
    </div>
  );
};

export default Hoisting;
