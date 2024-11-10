import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Functions: Returning Values and More",
  description:
    "Explore the power of returning values from functions in JavaScript. Learn how to use the return statement to send results back to your code. This tutorial will guide you through various examples of returning different data types, making your functions more versatile and useful.",
  keywords: [
    "javascript",
    "functions",
    "returning values",
    "javascript functions",
    "return statement",
    "function results",
    "programming tutorials",
    "web development",
    "javascript coding",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/return-values",
  },

  openGraph: {
    title: "Mastering the Art of Returning Values in JavaScript Functions",
    description:
      "Discover the magic of returning values from JavaScript functions. This comprehensive guide will teach you how to use the return statement effectively, handle different data types, and create functions that provide meaningful results. Enhance your coding skills and take your JavaScript projects to the next level.",
  },
};

const ReturnValues = () => {
  return (
    <div className="lesson-container">
      <h1>Returning Values from Functions</h1>
      <p>
        Welcome back! So far, we've learned about defining and calling
        functions, as well as using parameters and arguments. Now, let's dive
        into another important aspect of functions: returning values.
      </p>

      <h2>What Does it Mean to Return a Value?</h2>
      <p>
        Imagine you have a toy robot that can do various tricks. One of the
        tricks is to add two numbers together. After the robot adds the numbers,
        it can give you the result. This is similar to how functions can return
        values in JavaScript.
      </p>
      <p>
        In JavaScript, when a function performs a calculation or some other
        operation, it can send a result back to the place where it was called.
        This result is called the return value.
      </p>

      <h2>
        Using the <code>return</code> Statement
      </h2>
      <p>
        To return a value from a function, we use the <code>return</code>{" "}
        statement. Let's look at an example where our robot adds two numbers and
        returns the result:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the function <code>addNumbers</code> takes two
        parameters, <code>a</code> and <code>b</code>. It calculates their sum
        and returns the result using the <code>return</code> statement.
      </p>

      <h2>Why Return Values?</h2>
      <p>
        Returning values from functions makes them more useful because we can
        use the result in other parts of our code. Let's see how we can use the
        returned value:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let result = addNumbers(5, 3);
console.log(result); // Output: 8
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we call the <code>addNumbers</code> function with arguments{" "}
        <code>5</code> and <code>3</code>. The function returns the sum, which
        is <code>8</code>. We store this returned value in the variable{" "}
        <code>result</code> and print it using <code>console.log</code>.
      </p>

      <h2>Real-World Analogy</h2>
      <p>
        Let's go back to our toy robot analogy. Imagine you have a robot that
        can measure the length of an object. You ask the robot to measure the
        length of a toy car, and the robot tells you the length is 10 cm. Here,
        the robot has performed a task (measuring) and returned a value (10 cm).
      </p>
      <p>
        In JavaScript, functions can perform tasks and return values in a
        similar way. The <code>return</code> statement allows a function to send
        a result back to where it was called.
      </p>

      <h2>Returning Different Types of Values</h2>
      <p>
        Functions can return different types of values, such as numbers,
        strings, and even other functions. Let's look at some examples:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function getGreeting(name) {
  return 'Hello, ' + name + '!';
}

function multiplyNumbers(a, b) {
  return a * b;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(getGreeting('Alice')); // Output: Hello, Alice!
console.log(multiplyNumbers(4, 7)); // Output: 28
console.log(isEven(10)); // Output: true
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In these examples, <code>getGreeting</code> returns a string,{" "}
        <code>multiplyNumbers</code> returns a number, and <code>isEven</code>{" "}
        returns a boolean value.
      </p>

      <h2>Conclusion</h2>
      <p>
        Returning values from functions is a powerful feature that makes our
        code more flexible and reusable. By using the <code>return</code>{" "}
        statement, we can perform operations in functions and use the results in
        other parts of our code.
      </p>
      <p>
        Remember, defining a function with a return value is like teaching a
        robot to perform a task and give you the result. Calling the function
        and using the return value allows you to use the result in different
        parts of your program.
      </p>
      <p>
        Practice creating functions that return different types of values to get
        comfortable with this essential concept in JavaScript!
      </p>

      <Button whereToGo={"function-scope"} />
    </div>
  );
};

export default ReturnValues;
