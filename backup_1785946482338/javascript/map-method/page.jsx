import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding the map Method in JavaScript: A Detailed Guide",
  description:
    "Explore the map method in JavaScript with this comprehensive tutorial. Learn its syntax, how to use it for array manipulation, and practical examples to enhance your skills.",
  keywords: [
    "JavaScript map method",
    "JavaScript array methods",
    "map tutorial",
    "JavaScript coding examples",
    "array manipulation in JavaScript",
    "JavaScript for beginners",
    "functional programming in JavaScript",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/map-method",
  },

  openGraph: {
    title: "Understanding the map Method in JavaScript",
    description:
      "Dive into the map method in JavaScript. This guide provides syntax details, usage examples, and exercises for practicing your coding skills.",
  },
};

const MapMethod = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>
          Understanding the <code>map</code> Method in JavaScript
        </h1>
        <p>
          The <code>map</code> method is another way to loop through an array,
          similar to <code>forEach</code>. But unlike <code>forEach</code>, the{" "}
          <code>map</code> method does more than just perform an action on each
          item in the array. It also **creates a new array** with the results
          from the function you apply to each item.
        </p>

        <h2>
          What Does the <code>map</code> Method Do?
        </h2>
        <p>
          Imagine you have an array of items, and you want to change each item
          in some way. For example, you might want to double every number in an
          array or convert all the strings in an array to uppercase letters. The{" "}
          <code>map</code> method helps you do that by creating a new array with
          those changes, without altering the original array.
        </p>

        <h2>Basic Syntax</h2>
        <p>
          Here’s what the syntax of the <code>map</code> method looks like:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const newArray = array.map(function(element, index, array) {
  // Code to apply to each element
  return newValue;
});
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>Let’s break it down:</p>
        <ul>
          <li>
            <code>array</code>: The original array you’re working with.
          </li>
          <li>
            <code>element</code>: The current item in the array being processed.
          </li>
          <li>
            <code>index</code>: The position of the current item in the array
            (optional).
          </li>
          <li>
            <code>array</code>: The original array itself (optional).
          </li>
          <li>
            <code>newArray</code>: The new array that <code>map</code> creates
            with the updated items.
          </li>
          <li>
            <code>return newValue</code>: This is the value that will go into
            the new array for each element.
          </li>
        </ul>

        <h2>
          Example: Using <code>map</code> to Modify an Array
        </h2>
        <p>
          Let’s start with a simple example where we use <code>map</code> to
          double every number in an array.
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>In this example:</p>
        <ul>
          <li>
            The <code>numbers</code> array contains the original numbers.
          </li>
          <li>
            We use <code>map</code> to loop through the <code>numbers</code>{" "}
            array.
          </li>
          <li>For each number, we multiply it by 2 and return the result.</li>
          <li>
            The <code>doubledNumbers</code> array contains the updated values,
            where each number is doubled.
          </li>
        </ul>

        <h2>
          Key Difference Between <code>forEach</code> and <code>map</code>
        </h2>
        <p>
          It’s important to understand that <code>forEach</code> just loops
          through the array and performs an action, but it **doesn’t return a
          new array**. On the other hand, <code>map</code> always **returns a
          new array** with the results. The original array stays unchanged.
        </p>
        <p>
          Think of it like this: <code>forEach</code> is like reading a list and
          doing something with each item, but <code>map</code> is like reading
          the list, making changes, and then creating a brand-new list with
          those changes.
        </p>

        <h2>
          Using Arrow Functions with <code>map</code>
        </h2>
        <p>
          Just like with <code>forEach</code>, you can use arrow functions with{" "}
          <code>map</code> to make the code shorter. Here’s the same example
          using an arrow function:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          As you can see, it’s much shorter, but it does the same thing. The
          arrow function makes it easier to write when you don’t need a lot of
          code inside the function.
        </p>

        <h2>Working with Strings</h2>
        <p>
          The <code>map</code> method isn’t just for numbers. You can use it on
          arrays of strings as well. Let’s say we have an array of lowercase
          words, and we want to change them all to uppercase:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const words = ["hello", "world", "javascript"];

const uppercasedWords = words.map(function(word) {
  return word.toUpperCase();
});

console.log(uppercasedWords); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>In this example:</p>
        <ul>
          <li>
            The <code>words</code> array contains lowercase words.
          </li>
          <li>
            We use <code>map</code> to loop through the <code>words</code> array
            and convert each word to uppercase.
          </li>
          <li>
            The <code>uppercasedWords</code> array contains the new words in
            uppercase.
          </li>
        </ul>

        <h2>Practice: Try it Yourself</h2>
        <p>
          Now it’s your turn! Try using the <code>map</code> method with
          different arrays. Here are some practice exercises:
        </p>
        <ul>
          <li>
            Write a <code>map</code> function that adds 5 to every number in an
            array of numbers.
          </li>
          <li>
            Use <code>map</code> to convert an array of names to all lowercase
            letters.
          </li>
          <li>
            Try creating a new array that contains the lengths of each string in
            an array of strings.
          </li>
        </ul>

        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const numbers = [10, 20, 30, 40];
const addFive = numbers.map((number) => number + 5);
console.log(addFive); // Output: [15, 25, 35, 45]

const names = ["Alice", "BOB", "CHARLIE"];
const lowercaseNames = names.map((name) => name.toLowerCase());
console.log(lowercaseNames); // Output: ["alice", "bob", "charlie"]

const fruits = ["apple", "banana", "cherry"];
const fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); // Output: [5, 6, 6]
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h2>Important Points to Remember</h2>
        <ul>
          <li>
            <code>map</code> always returns a new array. It doesn’t change the
            original array.
          </li>
          <li>
            The new array will have the same length as the original array.
          </li>
          <li>
            <code>map</code> can be used with any data type: numbers, strings,
            objects, etc.
          </li>
        </ul>

        <Button whereToGo={"settimeout-setinterval"} />
      </div>
    </div>
  );
};

export default MapMethod;
