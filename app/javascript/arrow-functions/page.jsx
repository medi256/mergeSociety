import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Arrow Functions: A Comprehensive Guide",
  description:
    "Master JavaScript arrow functions with this beginner-friendly guide. Learn syntax, benefits, and tips to write clean, readable code.",

  keywords: [
    "javascript",
    "arrow functions",
    "javascript functions",
    "function syntax",
    "programming tutorials",
    "web development",
    "javascript coding",
    "code readability",
    "code simplicity",
  ],
  openGraph: {
    title: "JavaScript Arrow Functions: The Ultimate Guide",
    description:
      "Master JavaScript arrow functions with this beginner-friendly guide. Learn syntax, benefits, and tips to write clean, readable code.",
  },
};

const ArrowFuc = () => {
  return (
    <div className="lesson-container">
      <h1>Arrow Functions in JavaScript</h1>
      <p>
        We've learned about regular functions, function parameters, and how to
        return values. Now, let's discover a simpler way to write functions in
        JavaScript called Arrow Functions. They make writing short functions
        faster and more readable, especially when working with simple tasks.
      </p>

      <h2>What Are Arrow Functions?</h2>
      <p>
        Arrow functions provide a shorter syntax to write functions. They are
        great for writing simple functions in a cleaner and more concise way.
        Think of them like a quick shortcut for writing functions. They help you
        write less code and make your code look neat.
      </p>

      <h3>Traditional Function Syntax</h3>
      <p>
        Before we dive into arrow functions, let’s look at a basic example of a
        traditional function:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function sayHello(name) {
  return 'Hello, ' + name + '!';
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the function <code>sayHello</code> takes one input,{" "}
        <code>name</code>, and returns a greeting message. We use curly braces{" "}
        <code>{}</code> to define the body of the function and the{" "}
        <code>return</code> keyword to send back the result.
      </p>

      <h3>Arrow Function Syntax</h3>
      <p>
        Now, let's see how we can write the same function using an arrow
        function:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const sayHello = name => 'Hello, ' + name + '!';
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>The syntax is shorter and more concise. Here’s what each part does:</p>
      <ul>
        <li>
          <strong>Parameters:</strong> The input parameters are listed inside
          parentheses <code>(name)</code>. If there’s only one parameter, we can
          leave out the parentheses. For example,{" "}
          <code>{`name => 'Hello, ' + name + '!'`}</code>.
        </li>
        <li>
          <strong>Arrow:</strong> The <code>{`=>`}</code> symbol separates the
          parameters from the function’s action. It indicates that we’re using
          an arrow function.
        </li>
        <li>
          <strong>Body:</strong> If the function only has a single line of code,
          we don’t need curly braces <code>{}</code> or the <code>return</code>{" "}
          keyword. The result of the single line is automatically returned.
        </li>
      </ul>

      <h2>Arrow Functions with Curly Braces</h2>
      <p>
        Sometimes, you need to write more than one line of code in a function.
        When that happens, you need to use curly braces <code>{}</code> and
        explicitly use the <code>return</code> keyword. Here’s how you can do
        that:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the <code>multiply</code> function takes two numbers,
        multiplies them together, and then returns the result. We use curly
        braces because we have multiple lines of code: one line to perform the
        multiplication and another line to return the result.
      </p>

      <h2>Detailed Examples of Arrow Functions</h2>
      <p>
        Let’s go through a few more simple examples to see how arrow functions
        work in different scenarios:
      </p>

      <h3>Example 1: Adding Two Numbers</h3>
      <p>Here’s an arrow function that adds two numbers together:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const addNumbers = (x, y) => x + y;
console.log(addNumbers(5, 3)); // Output: 8
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes two numbers <code>x</code> and <code>y</code>, and
        returns their sum. Since this function is simple and consists of a
        single line, we don’t need curly braces or the <code>return</code>{" "}
        keyword.
      </p>

      <h3>Example 2: Greeting a User</h3>
      <p>Here’s an arrow function that creates a greeting message:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const greetUser = name => 'Welcome, ' + name + '!';
console.log(greetUser('Alice')); // Output: Welcome, Alice!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes one input, <code>name</code>, and returns a greeting
        message that includes the name. It’s another simple example where the
        function is written in a compact form.
      </p>

      <h3>Example 3: Checking if a Number is Even</h3>
      <p>Here’s an arrow function that checks if a number is even:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const isEven = number => number % 2 === 0;
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes one input, <code>number</code>, and returns{" "}
        <code>true</code> if the number is even, and <code>false</code> if it is
        not. The arrow function makes it easy to perform this check in a compact
        and readable way.
      </p>

      <h2>Conclusion</h2>
      <p>
        Arrow functions are a neat and simple way to write functions in
        JavaScript. They help you write less code and keep your functions clean
        and readable. Remember, if your function only has a single line of code,
        you can write it in a shorter form without curly braces and{" "}
        <code>return</code>. If you need more lines of code, use curly braces
        and <code>return</code> to ensure everything works as expected.
      </p>
      <p>
        Practice using arrow functions in your code to become more comfortable
        with them. They are a valuable tool in JavaScript and can help you write
        code that is easier to read and maintain.
      </p>

      <Button whereToGo={"string-methods"} />
    </div>
  );
};

export default ArrowFuc;
