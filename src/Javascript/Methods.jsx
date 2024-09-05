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
      <h1>
        Understanding <code>setTimeout</code> and <code>setInterval</code> in
        JavaScript
      </h1>

      <p>
        JavaScript allows us to perform tasks after a certain time has passed or
        to repeat tasks continuously at regular intervals. To do this, we use
        two special functions: <code>setTimeout</code> and{" "}
        <code>setInterval</code>.
      </p>

      <h2>
        1. <code>setTimeout</code>: Delay a Task
      </h2>
      <p>
        The <code>setTimeout</code> function allows you to delay the execution
        of a task (or function) by a specified amount of time. Think of it as
        setting an alarm: the task won’t happen immediately, but it will happen
        after the time you set has passed.
      </p>

      <h3>
        How Does <code>setTimeout</code> Work?
      </h3>
      <p>
        Imagine you want something to happen after 3 seconds, like showing a
        message to the user or changing the color of an element. You can use{" "}
        <code>setTimeout</code> to wait for 3 seconds and then perform the
        action.
      </p>

      <h3>Basic Syntax</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setTimeout(function, delay);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>
      <ul>
        <li>
          <code>function</code>: This is the code (a function) you want to run
          after the delay.
        </li>
        <li>
          <code>delay</code>: This is the time (in milliseconds) to wait before
          running the function. 1 second = 1000 milliseconds.
        </li>
      </ul>
      <AdUnit />
      <h3>
        Example of <code>setTimeout</code>
      </h3>
      <p>
        Here’s an example where we use <code>setTimeout</code> to display a
        message after 2 seconds:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Wait for 2 seconds...");

setTimeout(function() {
  console.log("2 seconds have passed!");
}, 2000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          The first <code>console.log</code> runs immediately, displaying "Wait
          for 2 seconds...".
        </li>
        <li>
          Then, <code>setTimeout</code> waits for 2 seconds (2000 milliseconds)
          before running the second <code>console.log</code> that displays "2
          seconds have passed!".
        </li>
      </ul>

      <p>
        This shows how <code>setTimeout</code> delays a task without stopping
        the rest of the code from running. The delayed task runs later, once the
        timer is up.
      </p>

      <h3>Common Use Cases</h3>
      <ul>
        <li>
          Showing a popup after a few seconds when a user lands on a page.
        </li>
        <li>Displaying a notification after a delay.</li>
        <li>Simulating a loading process that finishes after a short time.</li>
      </ul>

      <h2>
        2. <code>setInterval</code>: Repeat a Task
      </h2>
      <p>
        Now, what if you want something to happen over and over, continuously,
        after a certain time interval? That’s where <code>setInterval</code>{" "}
        comes in. It’s like setting an alarm that keeps ringing every 5 minutes
        until you stop it.
      </p>

      <h3>
        How Does <code>setInterval</code> Work?
      </h3>
      <p>
        While <code>setTimeout</code> runs a task only once after a delay,{" "}
        <code>setInterval</code> keeps running the task over and over at a
        specified interval. This is useful if you want to update something
        regularly, like the time on a clock, or if you want to continuously
        check something, like new notifications.
      </p>

      <h3>Basic Syntax</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setInterval(function, interval);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>
      <ul>
        <li>
          <code>function</code>: This is the code (a function) you want to run
          repeatedly.
        </li>
        <li>
          <code>interval</code>: This is the time (in milliseconds) between each
          repetition of the function.
        </li>
      </ul>
      <AdUnit />
      <h3>
        Example of <code>setInterval</code>
      </h3>
      <p>
        Here’s an example where we use <code>setInterval</code> to display a
        message every 3 seconds:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Starting...");

setInterval(function() {
  console.log("3 seconds have passed!");
}, 3000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          The first <code>console.log</code> runs immediately, displaying
          "Starting...".
        </li>
        <li>
          Then, every 3 seconds, <code>setInterval</code> runs the second{" "}
          <code>console.log</code> that displays "3 seconds have passed!".
        </li>
        <li>This will keep happening every 3 seconds until you stop it.</li>
      </ul>

      <p>
        This shows how <code>setInterval</code> repeats a task at regular
        intervals. It doesn’t stop by itself—you need to manually stop it if you
        want it to end.
      </p>

      <h3>
        How to Stop <code>setInterval</code> and <code>setTimeout</code>
      </h3>
      <p>
        If you set up an interval or a timeout but want to stop it before it
        finishes, you can use the <code>clearTimeout</code> and{" "}
        <code>clearInterval</code> functions.
      </p>

      <h4>
        Example of Stopping <code>setInterval</code>
      </h4>
      <p>
        To stop an interval, you need to save it to a variable and then use{" "}
        <code>clearInterval</code> to stop it. Let’s see how:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let intervalId = setInterval(function() {
  console.log("Repeating every 2 seconds");
}, 2000);

// After 6 seconds, stop the interval
setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 6000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We set an interval to display "Repeating every 2 seconds" every 2
          seconds.
        </li>
        <li>
          We also set a <code>setTimeout</code> to stop the interval after 6
          seconds using <code>clearInterval(intervalId)</code>.
        </li>
        <li>
          After 6 seconds, the interval stops, and the message "Interval
          stopped" is displayed.
        </li>
      </ul>

      <h2>
        Using Arrow Functions with <code>setTimeout</code> and{" "}
        <code>setInterval</code>
      </h2>
      <p>
        Just like in other functions, you can use arrow functions to shorten the
        code when using <code>setTimeout</code> and <code>setInterval</code>.
        Here’s how you can rewrite the examples above with arrow functions:
      </p>

      <h4>
        Example with <code>setTimeout</code>:
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setTimeout(() => {
  console.log("2 seconds have passed!");
}, 2000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>
        Example with <code>setInterval</code>:
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let intervalId = setInterval(() => {
  console.log("Repeating every 3 seconds");
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 9000);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h2>Practice: Try it Yourself</h2>
      <p>
        Now that you understand <code>setTimeout</code> and{" "}
        <code>setInterval</code>, here are some practice tasks to try on your
        own:
      </p>
      <ul>
        <li>
          Use <code>setTimeout</code> to display a message after 5 seconds.
        </li>
        <li>
          Use <code>setInterval</code> to show the current time every second.
        </li>
        <li>
          Try creating an interval that stops itself after a certain amount of
          time.
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
