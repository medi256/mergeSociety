import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Array Methods: A Comprehensive Guide",
  description:
    "Explore the world of array methods in JavaScript. Learn how to manipulate and transform arrays efficiently. This tutorial will guide you through essential array methods like push, unshift, pop, shift, slice, splice, concat, join, indexOf, includes, reverse, and more. Discover the power of array manipulation and create dynamic applications.",
  keywords: [
    "javascript",
    "array methods",
    "javascript arrays",
    "array manipulation",
    "array operations",
    "programming tutorials",
    "web development",
    "data structures",
    "javascript coding",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/array-methods",
  },
  openGraph: {
    title: "JavaScript Array Methods: The Ultimate Guide",
    description:
      "Master the art of array methods in JavaScript. This comprehensive guide will teach you how to use push, unshift, pop, shift, slice, splice, concat, join, indexOf, includes, reverse, and more. Learn to manipulate arrays efficiently, making your JavaScript code more powerful and versatile.",
  },
};

const ArrayMethods = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Array Methods in JavaScript</h1>
        <h2>Connecting to Arrays</h2>
        <p>
          In the previous lesson, we learned about arrays and how they allow us
          to store multiple values in a single variable. We also explored basic
          operations like adding, removing, and accessing elements. Now, we'll
          dive deeper into array methods, which provide powerful ways to
          manipulate and interact with arrays. These methods make working with
          arrays more efficient and expressive.
        </p>

        <h2>
          Adding Elements: <code>push()</code> and <code>unshift()</code>
        </h2>
        <h3>
          <code>push()</code>
        </h3>
        <p>
          The <code>push()</code> method adds one or more elements to the end of
          an array and returns the new length of the array. We saw a brief
          example earlier, but let's explore it further:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const newLength = fruits.push('date', 'elderberry');

console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(newLength); // Output: 5
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Here, we used <code>push()</code> to add 'date' and 'elderberry' to
          the end of the <code>fruits</code> array. The method returns the new
          length of the array, which is 5.
        </p>

        <h3>
          <code>unshift()</code>
        </h3>
        <p>
          The <code>unshift()</code> method adds one or more elements to the
          beginning of an array and returns the new length of the array:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const newLength = fruits.unshift('mango', 'kiwi');

console.log(fruits); // Output: ['mango', 'kiwi', 'apple', 'banana', 'cherry']
console.log(newLength); // Output: 5
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we used <code>unshift()</code> to add 'mango' and
          'kiwi' to the beginning of the <code>fruits</code> array. The method
          returns the new length of the array, which is 5.
        </p>

        <h2>
          Removing Elements: <code>pop()</code> and <code>shift()</code>
        </h2>
        <h3>
          <code>pop()</code>
        </h3>
        <p>
          The <code>pop()</code> method removes the last element from an array
          and returns that element:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();

console.log(lastFruit); // Output: cherry
console.log(fruits); // Output: ['apple', 'banana']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Here, we used <code>pop()</code> to remove the last element ('cherry')
          from the <code>fruits</code> array. The method returns the removed
          element.
        </p>

        <h3>
          <code>shift()</code>
        </h3>
        <p>
          The <code>shift()</code> method removes the first element from an
          array and returns that element:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const firstFruit = fruits.shift();

console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ['banana', 'cherry']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we used <code>shift()</code> to remove the first
          element ('apple') from the <code>fruits</code> array. The method
          returns the removed element.
        </p>

        <h2>
          Extracting a Portion: <code>slice()</code>
        </h2>
        <p>
          The <code>slice()</code> method returns a shallow copy of a portion of
          an array into a new array object. It does not modify the original
          array. You can specify the start and end indexes (end not included) to
          define the portion to extract:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const citrus = fruits.slice(1, 4);

console.log(citrus); // Output: ['banana', 'cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we used <code>slice()</code> to create a new array,{" "}
          <code>citrus</code>, containing elements from index 1 to 3 (end index
          4 is not included). The original <code>fruits</code> array remains
          unchanged.
        </p>

        <h2>
          Modifying Content: <code>splice()</code>
        </h2>
        <p>
          The <code>splice()</code> method changes the contents of an array by
          removing, replacing, or adding elements. It modifies the original
          array and returns an array containing the deleted elements (if any).
          The first parameter specifies the start index, the second parameter
          specifies the number of elements to remove, and the rest of the
          parameters are elements to add:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const removedFruits = fruits.splice(2, 2, 'fig', 'grape');

console.log(removedFruits); // Output: ['cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'fig', 'grape', 'elderberry']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Here, we used <code>splice()</code> to remove two elements from index
          2 and add 'fig' and 'grape' at the same position. The method returns
          the removed elements, and the original array is modified.
        </p>

        <h2>
          Combining Arrays: <code>concat()</code>
        </h2>
        <p>
          The <code>concat()</code> method is used to merge two or more arrays.
          It returns a new array and does not change the existing arrays:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];

const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'date']

console.log(fruits); // Output: ['apple', 'banana']
console.log(moreFruits); // Output: ['cherry', 'date']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we used <code>concat()</code> to merge{" "}
          <code>fruits</code> and <code>moreFruits</code> into a new array,{" "}
          <code>allFruits</code>. The original arrays remain unchanged.
        </p>

        <h2>
          Joining Elements: <code>join()</code>
        </h2>
        <p>
          The <code>join()</code> method joins all elements of an array into a
          string. You can specify a separator, and if omitted, the elements are
          separated with a comma:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'apple, banana, cherry'
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Here, we used <code>join()</code> to create a string with all elements
          of the <code>fruits</code> array, separated by ', '.
        </p>

        <h2>
          Finding Elements: <code>indexOf()</code> and <code>includes()</code>
        </h2>
        <h3>
          <code>indexOf()</code>
        </h3>
        <p>
          The <code>indexOf()</code> method returns the first index at which a
          given element can be found in the array, or -1 if the element is not
          found:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];

const index = fruits.indexOf('banana');
console.log(index); // Output: 1

const notFound = fruits.indexOf('date');
console.log(notFound); // Output: -1
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, <code>indexOf()</code> returns the index of 'banana',
          which is 1. It returns -1 for 'date' since it is not in the array.
        </p>

        <h3>
          <code>includes()</code>
        </h3>
        <p>
          The <code>includes()</code> method determines whether an array
          contains a specified element, returning <code>true</code> or{" "}
          <code>false</code>:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

const hasDate = fruits.includes('date');
console.log(hasDate); // Output: false
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Here, <code>includes()</code> returns <code>true</code> for 'banana'
          and <code>false</code> for 'date'.
        </p>

        <h2>
          Reversing Elements: <code>reverse()</code>
        </h2>
        <p>
          The <code>reverse()</code> method reverses the order of the elements
          in an array. It modifies the original array:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
const fruits = ['apple', 'banana', 'cherry'];
fruits.reverse();
console.log(fruits); // Output: ['cherry', 'banana', 'apple']
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we used <code>reverse()</code> to reverse the order
          of elements in the <code>fruits</code> array.
        </p>

        <h2>Conclusion</h2>
        <p>
          Array methods in JavaScript provide powerful ways to manipulate and
          interact with arrays. They allow you to add, remove, extract, modify,
          combine, and find elements with ease. Understanding these methods will
          help you work more efficiently with arrays and perform complex
          operations with simple and readable code.
        </p>

        <Button whereToGo={"objects"} />
      </div>
    </div>
  );
};

export default ArrayMethods;
