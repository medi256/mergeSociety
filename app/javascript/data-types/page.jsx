import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Data Types: A Comprehensive Beginner's Guide",
  description:
    "Unleash the power of JavaScript by understanding its fundamental data types. This beginner-friendly guide will take you on a journey through numbers, strings, booleans, and more. Learn how to store, manipulate, and control data effectively, setting the foundation for your JavaScript expertise.",
  keywords: [
    "javascript",
    "javascript data types",
    "javascript basics",
    "javascript for beginners",
    "number data type",
    "string data type",
    "boolean data type",
    "undefined and null",
    "type coercion",
    "data type checking",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/data-types",
  },

  openGraph: {
    title: "JavaScript Data Types: The Essential Building Blocks",
    description:
      "Explore the core data types that power JavaScript applications. This comprehensive guide will help you master the art of storing and manipulating data, ensuring your code is robust and reliable.",
  },
};

const DataTypes = () => {
  return (
    <div className="lesson-container">
      <h1>Introduction to JavaScript Data Types</h1>
      <p>
        Welcome everyone! Today, we're going to dive into the fundamental
        building blocks of JavaScript: data types. Just like when you're
        building a house and you need different materials, in programming, we
        use different types of data to store and work with information. Think of
        it like the different subjects you study at school, each requiring a
        different kind of knowledge.
      </p>
      <h2>Understanding Data Types</h2>
      <p>
        In JavaScript, we have several types of data that we use to represent
        different kinds of information. Let's explore each of these data types
        in detail.
      </p>

      <h3>Number</h3>
      <p>
        The <strong>Number</strong> data type is used to represent numeric
        values. These can be integers (whole numbers) or floating-point numbers
        (decimals). Numbers are essential for performing mathematical
        calculations and operations.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let age = 30;
let pi = 3.14;

console.log(age); // Output: 30
console.log(pi); // Output: 3.14`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Numbers are used for representing quantitative values like age or
        mathematical constants such as pi. We can perform mathematical
        operations on numbers using operators like <code>+</code>,{" "}
        <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code>.
        Here's a simple example of using a mathematical operator:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let sum = 10 + 5;
console.log(sum); // Output: 15`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Numbers are commonly used in calculations. For instance, you might use
        numbers to calculate the total price of items in a shopping cart.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let itemPrice = 20;
let quantity = 3;

let totalPrice = itemPrice * quantity;
console.log(totalPrice); // Output: 60`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>String</h3>
      <p>
        The <strong>String</strong> data type is used to represent textual data.
        Strings are enclosed in single <code>'</code> or double <code>"</code>{" "}
        quotes. Strings are crucial for storing and manipulating text.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let firstName = 'John';
let message = "Hello, Console!";

console.log(firstName); // Output: John
console.log(message); // Output: Hello, Console!`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Strings are used for storing text, such as names or messages. We can
        manipulate strings, combine them, or extract parts of them using various
        string methods in JavaScript. For example, you can concatenate (join)
        two strings together:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let fullName = 'John' + ' ' + 'Doe';
console.log(fullName); // Output: John Doe`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Strings are often used for user input and output. For example, you might
        store a user's name and display a welcome message.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let userName = 'Alice';
let greeting = 'Hello, ' + userName + '!';

console.log(greeting); // Output: Hello, Alice!`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Boolean</h3>
      <p>
        The <strong>Boolean</strong> data type represents a logical value
        indicating <code>true</code> or <code>false</code>. Booleans are
        fundamental for controlling the flow of programs with conditional
        statements.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let isStudent = true;
let isWorking = false;

console.log(isStudent); // Output: true
console.log(isWorking); // Output: false`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Booleans are used for logical operations. They represent truth values
        and are often used to make decisions in programs. For example, you might
        use a boolean to represent whether a user has completed a task or not.
      </p>
      <p>
        Booleans are used in decision-making. For instance, you might check if a
        user is subscribed to a newsletter before displaying certain content.
      </p>

      <h3>Undefined</h3>
      <p>
        The <strong>Undefined</strong> data type represents a variable that has
        been declared but not yet assigned a value. It indicates the absence of
        a value.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let lastName;
console.log(lastName); // Output: undefined`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Variables that are declared but not initialized with a value
        automatically have the value <code>undefined</code>. This is different
        from <code>null</code>, which represents an intentional absence of a
        value.
      </p>

      <h3>Null</h3>
      <p>
        The <strong>Null</strong> data type represents the intentional absence
        of any object value. It is explicitly assigned to a variable to indicate
        that it has no value.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let middleName = null;
console.log(middleName); // Output: null`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Null is often used to signify that a variable intentionally has no value
        or that a function deliberately returns no value. It's a way of saying
        "this variable is empty" in a clear manner.
      </p>

      <h3>Type Coercion</h3>
      <p>
        Type coercion is the process of converting a value from one data type to
        another. JavaScript often performs this conversion implicitly, which can
        sometimes lead to unexpected results.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let result = '5' + 5;
console.log(result); // Output: '55'`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In the example above, JavaScript converts the number <code>5</code> to a
        string and concatenates it with the string <code>'5'</code>, resulting
        in <code>'55'</code>. Type coercion can also occur with other
        operations:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let result = '5' - 2;
console.log(result); // Output: 3`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, JavaScript converts the string <code>'5'</code> to a number and
        performs the subtraction, resulting in <code>3</code>.
      </p>

      <h3>Detailed Explanation</h3>
      <p>
        Type coercion happens in many situations in JavaScript, especially when
        performing operations that involve different data types. JavaScript
        tries to be helpful by automatically converting values to the
        appropriate type needed for the operation. This can sometimes lead to
        unexpected results if you're not careful.
      </p>

      <h4>Examples of Type Coercion</h4>
      <p>
        <strong>String Concatenation:</strong>
      </p>
      <p>
        When a number is added to a string, JavaScript converts the number to a
        string and concatenates them.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let example = '5' + 10;
console.log(example); // Output: '510'`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        <strong>Subtraction:</strong>
      </p>
      <p>
        When a string containing a numeric value is subtracted from a number,
        JavaScript converts the string to a number and performs the subtraction.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let example = '10' - 5;
console.log(example); // Output: 5`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Data Type Checking</h3>
      <p>
        The <code>typeof</code> operator is used to determine the data type of a
        variable. This can be useful for debugging and understanding the
        behavior of different code snippets.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let age = 30;
let name = 'Alice';
let isStudent = true;

console.log(typeof age); // Output: 'number'
console.log(typeof name); // Output: 'string'
console.log(typeof isStudent); // Output: 'boolean'`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Using the <code>typeof</code> operator helps you identify the data type
        of a variable, which can be particularly helpful when debugging or
        writing complex code.
      </p>

      <h3>Going Further</h3>
      <p>
        As you progress in your JavaScript journey, you'll encounter more
        complex data types:
      </p>
      <ul>
        <li>
          <strong>Symbols</strong>: Unique identifiers used for object
          properties.
        </li>
        <li>
          <strong>Objects</strong>: Collections of key-value pairs to store
          related data.
        </li>
        <li>
          <strong>Arrays</strong>: Ordered lists of values that allow you to
          group similar items together.
        </li>
      </ul>

      <p>
        Understanding these data types is crucial because they form the
        foundation of how we store and manipulate information in JavaScript. In
        our next lesson, we'll dive deeper into mathematical operations using
        operators.
      </p>

      <Button whereToGo={"comments"} />
    </div>
  );
};

export default DataTypes;
