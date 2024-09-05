import AdUnit from "../AdUnit";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ForEachMethod = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Understanding the <code>forEach</code> Method in JavaScript
      </h1>
      <p>
        The <code>forEach</code> method is a built-in method in JavaScript that
        allows you to execute a function for each item in an array. It’s useful
        when you want to perform an action on every item in the array without
        needing to manually manage a loop.
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
      <AdUnit />
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
          The <code>fruit</code> parameter in the function represents each item
          as the loop goes through the array.
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
          <code>index</code> represents the position of the current item in the
          array.
        </li>
        <li>
          <code>array</code> is the original array, allowing you to reference it
          if needed.
        </li>
      </ul>
      <AdUnit />
      <h2>
        Using Arrow Functions with <code>forEach</code>
      </h2>
      <p>
        You can also use arrow functions with <code>forEach</code> to make your
        code more concise. Here’s how:
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

      <p>
        In this example, the arrow function{" "}
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`(fruit) => { console.log(fruit); }`}
          </SyntaxHighlighter>
        </code>{" "}
        is a shorter way of writing the function. It does the same thing but
        with less code.
      </p>

      <h2>Important Notes</h2>
      <ul>
        <li>
          <code>forEach</code> does not return a value. It performs the action
          and then stops. If you need a transformed array, consider using{" "}
          <code>map</code> instead.
        </li>
        <li>
          <code>forEach</code> is great for performing actions on each item but
          is not suitable for cases where you need to break out of the loop
          early. For such cases, <code>for</code> or <code>for...of</code> loops
          are more appropriate.
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
          Write a <code>forEach</code> loop to print each number in an array of
          numbers doubled.
        </li>
        <li>
          Use <code>forEach</code> to create a new array where each item is the
          length of the corresponding string in an array of strings.
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
      <AdUnit />
      <h2>Summary</h2>
      <p>
        The <code>forEach</code> method is a useful way to loop through each
        item in an array and perform an action. It simplifies the process of
        iterating through arrays and makes your code more readable.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/mathObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/mapMethod")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ForEachMethod;

export const MapMethod = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Understanding the <code>map</code> Method in JavaScript
      </h1>
      <p>
        The <code>map</code> method is another way to loop through an array,
        similar to <code>forEach</code>. But unlike <code>forEach</code>, the{" "}
        <code>map</code> method does more than just perform an action on each
        item in the array. It also **creates a new array** with the results from
        the function you apply to each item.
      </p>

      <h2>
        What Does the <code>map</code> Method Do?
      </h2>
      <p>
        Imagine you have an array of items, and you want to change each item in
        some way. For example, you might want to double every number in an array
        or convert all the strings in an array to uppercase letters. The{" "}
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
          <code>return newValue</code>: This is the value that will go into the
          new array for each element.
        </li>
      </ul>
      <AdUnit />
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
        through the array and performs an action, but it **doesn’t return a new
        array**. On the other hand, <code>map</code> always **returns a new
        array** with the results. The original array stays unchanged.
      </p>
      <p>
        Think of it like this: <code>forEach</code> is like reading a list and
        doing something with each item, but <code>map</code> is like reading the
        list, making changes, and then creating a brand-new list with those
        changes.
      </p>

      <h2>
        Using Arrow Functions with <code>map</code>
      </h2>
      <p>
        Just like with <code>forEach</code>, you can use arrow functions with{" "}
        <code>map</code> to make the code shorter. Here’s the same example using
        an arrow function:
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
        As you can see, it’s much shorter, but it does the same thing. The arrow
        function makes it easier to write when you don’t need a lot of code
        inside the function.
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
      <AdUnit />
      <h2>Practice: Try it Yourself</h2>
      <p>
        Now it’s your turn! Try using the <code>map</code> method with different
        arrays. Here are some practice exercises:
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
        <li>The new array will have the same length as the original array.</li>
        <li>
          <code>map</code> can be used with any data type: numbers, strings,
          objects, etc.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/forEach")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/setTimeSetinterval")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const SetTimeOutSetInterval = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>What are setTimeout and setInterval?</h1>
      <p>
        setTimeout and setInterval are two related but distinct functions in
        JavaScript that allow you to execute a piece of code after a certain
        amount of time has passed.
      </p>
      <h2>setTimeout</h2>
      <p>
        <code>setTimeout</code> is a function that executes a piece of code
        after a specified delay. {`It's`} like setting a timer that goes off
        once, and when it does, it runs the code you specified.
      </p>
      <h2>The Syntax</h2>
      <p>
        The basic syntax of <code>setTimeout</code> is:
      </p>
      <pre>
        <code>
          {`
setTimeout(function, delay)
          `}
        </code>
      </pre>
      <p>Where:</p>
      <ul>
        <li>
          <b>function</b> is the code you want to execute after the delay.
        </li>
        <li>
          {" "}
          <b>delay</b> is the amount of time (in milliseconds) you want to wait
          before executing the code.
        </li>
      </ul>
      <h2>How it Works</h2>
      <p>
        {" "}
        {`Here's`} a step-by-step breakdown of what happens when you use
        <code>setTimeout</code>:
      </p>
      <ul>
        <li> You call setTimeout with a function and a delay.</li>
        <li>
          The browser adds the function to a queue, along with the specified
          delay.
        </li>
        <li>
          The browser continues executing other code, but keeps track of the
          delay.
        </li>
        <li>When the delay has passed, the browser executes the function.</li>
        <li>
          {" "}
          The function is executed only once, and then {`it's`} removed from the
          queue.
        </li>
      </ul>
      <h2>Example 1: Hello World after 2 seconds</h2>
      <p>
        {`Let's say you want to print "Hello World" to the console after 2
        seconds. You can use setTimeout like this:`}
      </p>
      <pre>
        <code>
          {`
setTimeout(function() {
  console.log("Hello World");
}, 2000);
          `}
        </code>
      </pre>
      <p>
        In this example, the function <b>{`console.log("Hello World")`}</b> will
        be executed after 2 seconds (2000 milliseconds).
      </p>
      <h2>setInterval</h2>
      <p>
        setInterval is similar to setTimeout, but it executes the code
        repeatedly at a specified interval. {`It's`} like setting a timer that
        goes off at regular intervals, and each time it does, it runs the code
        you specified.
      </p>
      <h2>The Syntax</h2>
      <p>
        {" "}
        The basic syntax of <code>setInterval</code> is:
      </p>
      <pre>
        <code>
          {`
setInterval(function, interval)
          `}
        </code>
      </pre>
      <p>Where:</p>
      <ul>
        <li>
          <b>function</b> is the code you want to execute at each interval.
        </li>
        <li>
          <b>interval</b> is the amount of time (in milliseconds) between each
          execution.
        </li>
      </ul>
      <AdUnit />
      <h3>How it Works</h3>
      <p>
        {" "}
        {`Here's`} a step-by-step breakdown of what happens when you use
        <code>setInterval</code>:
      </p>
      <ul>
        <li> You call setInterval with a function and an interval.</li>
        <li>
          The browser adds the function to a queue, along with the specified
          interval.
        </li>
        <li>
          {" "}
          The browser continues executing other code, but keeps track of the
          interval.
        </li>
        <li>
          When the interval has passed, the browser executes the function.
        </li>
        <li>
          {" "}
          The function is executed repeatedly at each interval, until you stop
          it using <code>clearInterval</code>.
        </li>
      </ul>
      <h2>Example 2: Counting up every second</h2>
      <p>
        {" "}
        {`Let's`} say you want to count up from 0 to 10, printing the current
        number to the console every second. You can use setInterval like this:
      </p>
      <pre>
        <code>
          {`
let count = 0;
setInterval(function() {
  console.log(count);
  count++;
  if (count > 10) {
    clearInterval(this);
  }
}, 1000);
          `}
        </code>
      </pre>
      <p>
        In this example, the function <b>console.log(count); count++;</b> will
        be executed every second (1000 milliseconds), and it will stop after 10
        iterations.
      </p>
      <h2>Common Use Cases</h2>
      <p>
        <code>setTimeout</code> and <code>setInterval</code> are useful in a
        variety of situations, such as:
      </p>
      <ul>
        <li> Animating elements on a web page</li>
        <li> Updating a timer or clock</li>
        <li>Polling for new data from a server</li>
        <li>
          Executing a piece of code after a certain amount of time has passed
        </li>
      </ul>
      <h2>Tips and Tricks</h2>
      <ul>
        <li>
          You can use <code>clearTimeout</code> to cancel a{" "}
          <code>setTimeout</code> call, and <code>clearInterval</code> to cancel
          a <code>setInterval</code> call.
        </li>
        <li>
          You can pass arguments to the function executed by setTimeout or
          <code>setInterval</code> using the <code>bind</code> method.
        </li>
        <li>
          {" "}
          Be careful not to create infinite loops with <code>setInterval</code>,
          as it can cause performance issues.
        </li>
        <li>
          You can use <code>setTimeout</code> with a delay of 0 to execute a
          function asynchronously, but be aware that it may not execute
          immediately.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/mapMethod")}>
          back
        </button>
        <button
          onClick={() =>
            (window.location.href = "/UnderstandingAsynchronousProgramming")
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
