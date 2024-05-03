const ForEachMethod = () => {
  return (
    <div className="comments-container">
      <p>
        Now, {`let's`} dive into the <code>forEach</code> method in JavaScript,
        with a fun and interactive approach.
      </p>
      <h2>Imagine {`You're`} a Party Planner</h2>
      <p>
        As a party planner, you need to prepare for a big event. You have a list
        of guests, and you need to send them invitations, prepare their favorite
        foods, and set up their seats. You {`can't`} do it all by yourself, so
        you need a way to delegate tasks to your team.
      </p>
      <p>
        In JavaScript, the <code>forEach</code> method is like a team of helpers
        that can perform a task on each item in an array. You can think of it
        like a party planning assistant that helps you get everything ready for
        the big event.
      </p>
      <h2>The Party Planning Assistant</h2>
      <p>
        {" "}
        {`Let's`} say you have an array of guests, and you want to send them
        invitations. You can use the <code>forEach</code> method to loop through
        the array and perform a task on each guest:
      </p>
      <p>
        <code>
          {`
const guests = ['John', 'Jane', 'Bob', 'Alice'];

guests.forEach(guest => {
  console.log(\`Sending invitation to \${guest}\`);
});
          `}
        </code>
      </p>
      <p>This code will output:</p>
      <pre>
        <code>
          {`
Sending invitation to John
Sending invitation to Jane
Sending invitation to Bob
Sending invitation to Alice
          `}
        </code>
      </pre>
      <p>
        The <code>forEach</code> method takes a callback function as an
        argument, which is called on each item in the array. The callback
        function receives the current item as an argument, and you can use it to
        perform a task on that item.
      </p>
      <h2>The Task List</h2>
      <p>
        {" "}
        {`Let's`} say you have a task list of things to do for each guest, like
        preparing their favorite food and setting up their seat. You can use the
        <code>forEach</code> method to loop through the array and perform
        multiple tasks on each guest:
      </p>
      <pre>
        <code>
          {`
const guests = [
  { name: 'John', food: 'pizza', seat: 'table 1' },
  { name: 'Jane', food:'salad', seat: 'table 2' },
  { name: 'Bob', food: 'burger', seat: 'table 3' },
  { name: 'Alice', food:'sandwich', seat: 'table 4' }
];

guests.forEach(guest => {
  console.log(\`Preparing \${guest.food} for \${guest.name}\`);
  console.log(\`Setting up \${guest.seat} for \${guest.name}\`);
});
          `}
        </code>
      </pre>
      <p>This code will output:</p>
      <pre>
        <code>
          {`
Preparing pizza for John
Setting up table 1 for John
Preparing salad for Jane
Setting up table 2 for Jane
Preparing burger for Bob
Setting up table 3 for Bob
Preparing sandwich for Alice
Setting up table 4 for Alice
          `}
        </code>
      </pre>
      <p>
        The <code>forEach</code> method is a powerful tool in JavaScript that
        allows you to perform tasks on each item in an array. {`It's`} like
        having a team of helpers that can assist you with any task you need to
        accomplish.
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
    <div className="comments-container">
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
    <div className="comments-container">
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
