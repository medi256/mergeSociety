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
      <h1>What is the Map method?</h1>
      <h2>Set time out and setinterval in Javascript</h2>
      <p>
        The Map method is a powerful tool in JavaScript that allows you to
        transform an array of values into a new array with the same number of
        values, but with each value modified according to a specific function.
      </p>
      <p>
        Think of it like a conveyor belt in a factory. You put in an array of
        raw materials (values) at one end, and the Map method applies a specific
        process (function) to each material as it moves along the belt. At the
        other end, you get a new array with the transformed materials.
      </p>
      <h2>The Syntax</h2>
      <p>The basic syntax of the Map method is:</p>
      <pre>
        <code>
          {`
array.map(callbackFunction)

          `}
        </code>
      </pre>
      <p>Where:</p>
      <ul>
        <li>
          <b>array</b> is the original array of values you want to transform.
        </li>
        <li>
          <b>callbackFunction</b> is the function that will be applied to each
          value in the array.
        </li>
      </ul>
      <h2>How it Works</h2>
      <p>
        {`Here's`} a step-by-step breakdown of what happens when you use the Map
        method:
      </p>
      <ol>
        <li>
          The Map method takes the original array and creates a new, empty
          array.
        </li>
        <li>
          {" "}
          It then iterates over each value in the original array, one by one.
        </li>
        <li>
          {" "}
          For each value, it calls the <b>callbackFunction</b> and passes the
          value as an argument.
        </li>
        <li>
          The <b>callbackFunction</b> processes the value and returns a new
          value.
        </li>
        <li>
          The Map method takes the new value returned by the{" "}
          <b>callbackFunction</b>
          and adds it to the new array.
        </li>
        <li>
          Once all values in the original array have been processed, the Map
          method returns the new array with the transformed values.
        </li>
      </ol>
      <h3>Example 1: Doubling Numbers</h3>
      <p>
        {`Let's`} say you have an array of numbers, and you want to create a new
        array with each number doubled. You can use the Map method like this:
      </p>
      <pre>
        <code>
          {`
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubleNumbers); // [2, 4, 6, 8, 10]
          `}
        </code>
      </pre>
      <p>
        In this example, the <b>callbackFunction</b> takes each number in the
        <b>numbers</b> array and multiplies it by 2. The resulting array
        <b>doubleNumbers</b> contains the doubled values.
      </p>
      <AdUnit />
      <h2>Example 2: Converting Strings to Uppercase</h2>
      <p>
        Suppose you have an array of strings, and you want to create a new array
        with each string converted to uppercase. You can use the Map method like
        this:
      </p>
      <pre>
        <code>
          {`
const words = ['hello', 'world', 'javascript'];
const uppercaseWords = words.map(function(word) {
  return word.toUpperCase();
});

console.log(uppercaseWords); // ['HELLO', 'WORLD', 'JAVASCRIPT']
          `}
        </code>
      </pre>
      <p>
        In this example, the <b>callbackFunction</b> takes each string in the
        <b>words</b> array and converts it to uppercase using the{" "}
        <b>toUpperCase()</b>
        method. The resulting array <b>uppercaseWords</b> contains the uppercase
        strings.
      </p>
      <h3>Common Use Cases</h3>
      <p>The Map method is useful in a variety of situations, such as:</p>
      <ul>
        <li>
          Transforming data from one format to another (e.g., converting Celsius
          to Fahrenheit)
        </li>
        <li>
          {" "}
          Extracting specific information from an array of objects (e.g.,
          extracting names from an array of user objects)
        </li>
        <li>
          Performing calculations on an array of values (e.g., calculating the
          sum or average of an array of numbers)
        </li>
      </ul>
      <h2>Tips and Tricks</h2>
      <ul>
        <li>
          {" "}
          The Map method returns a new array, it {`doesn't`} modify the original
          array.
        </li>
        <li>
          You can use arrow functions as the <b>callbackFunction</b> for a more
          concise syntax.
        </li>
        <li>
          If you return <b>undefined</b> from the <b>callbackFunction</b>, the
          resulting array will contain <b>undefined</b> values.
        </li>
        <li>
          {" "}
          You can chain multiple Map methods together to perform complex
          transformations.
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
