import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering the forEach Method in JavaScript: A Comprehensive Guide",
  description:
    "Discover how to use the forEach method in JavaScript effectively. This guide covers its syntax, usage, practical examples, and exercises to enhance your coding skills.",
  keywords: [
    "JavaScript forEach method",
    "JavaScript array iteration",
    "JavaScript forEach tutorial",
    "JavaScript coding examples",
    "array methods in JavaScript",
    "JavaScript for beginners",
    "JavaScript functional programming",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/foreach-method",
  },

  openGraph: {
    title: "Mastering the forEach Method in JavaScript",
    description:
      "Learn how to use the forEach method in JavaScript with this detailed guide, featuring examples, tips, and practical exercises.",
  },
};

const ForEach = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>
          Understanding the <code>forEach</code> Method in JavaScript
        </h1>
        <p>
          The <code>forEach</code> method is a built-in method in JavaScript
          that allows you to execute a function for each item in an array. It’s
          useful when you want to perform an action on every item in the array
          without needing to manually manage a loop.
        </p>
        <h2>
          What is the <code>forEach</code> Method?
        </h2>
        <p>
          The <code>forEach</code> method is a way to iterate through all the
          elements in an array and apply a function to each element. Unlike
          traditional loops, <code>forEach</code> makes your code cleaner and
          easier to read.
        </p>
        <h2>Basic Syntax</h2>
        <p>
          The basic syntax of <code>forEach</code> is:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
array.forEach(function(element, index, array) {
  // Code to execute for each element
});
        `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Here’s what each part means:</p>
        <ul>
          <li>
            <code>array</code>: The array you want to loop through.
          </li>
          <li>
            <code>element</code>: The current item in the array being processed.
          </li>
          <li>
            <code>index</code>: The index of the current item in the array
            (optional).
          </li>
          <li>
            <code>array</code>: The original array (optional).
          </li>
        </ul>
        <h2>
          Using <code>forEach</code> with an Array
        </h2>
        <p>
          Let’s see an example of how to use <code>forEach</code> to iterate
          through an array and log each item to the console.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
        `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>In this example:</p>
        <ul>
          <li>
            <code>fruits</code> is an array of strings representing different
            fruits.
          </li>
          <li>
            <code>forEach</code> iterates over each item in the{" "}
            <code>fruits</code> array.
          </li>
          <li>
            The <code>fruit</code> parameter in the function represents each
            item as the loop goes through the array.
          </li>
          <li>
            <code>console.log(fruit)</code> prints each fruit to the console.
          </li>
        </ul>
        <h2>
          Using <code>forEach</code> with Index and Array Parameters
        </h2>
        <p>
          You can also use the index and the original array within the function.
          Here’s an example:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index, array) {
  console.log("Index:", index, "Fruit:", fruit);
  console.log("Original array:", array);
});
        `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>In this example:</p>
        <ul>
          <li>
            <code>index</code> represents the position of the current item in
            the array.
          </li>
          <li>
            <code>array</code> is the original array, allowing you to reference
            it if needed.
          </li>
        </ul>
        <h2>
          Using Arrow Functions with <code>forEach</code>
        </h2>
        <p>
          You can also use arrow functions with <code>forEach</code> to make
          your code more concise. Here’s how:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
        `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>In this example, the arrow function </p>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`(fruit) => { console.log(fruit); }`}
          </SyntaxHighlighter>
        </code>{" "}
        <div>
          is a shorter way of writing the function. It does the same thing but
          with less code.
        </div>
        <h2>Important Notes</h2>
        <ul>
          <li>
            <code>forEach</code> does not return a value. It performs the action
            and then stops. If you need a transformed array, consider using{" "}
            <code>map</code> instead.
          </li>
          <li>
            <code>forEach</code> is great for performing actions on each item
            but is not suitable for cases where you need to break out of the
            loop early. For such cases, <code>for</code> or{" "}
            <code>for...of</code> loops are more appropriate.
          </li>
        </ul>
        <h2>
          Practice: Using <code>forEach</code>
        </h2>
        <p>
          Try these exercises to practice using <code>forEach</code>:
        </p>
        <ul>
          <li>
            Write a <code>forEach</code> loop to print each number in an array
            of numbers doubled.
          </li>
          <li>
            Use <code>forEach</code> to create a new array where each item is
            the length of the corresponding string in an array of strings.
          </li>
        </ul>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  const doubled = number * 2;
  console.log("Doubled number:", doubled);
});

const strings = ["hello", "world", "JavaScript"];
const lengths = [];
strings.forEach((string) => {
  lengths.push(string.length);
});
console.log("Lengths of strings:", lengths);
        `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h2>Summary</h2>
        <p>
          The <code>forEach</code> method is a useful way to loop through each
          item in an array and perform an action. It simplifies the process of
          iterating through arrays and makes your code more readable.
        </p>
        <Button whereToGo={"map-method"} />
      </div>
    </div>
  );
};

export default ForEach;
