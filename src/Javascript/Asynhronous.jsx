import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UnderstandingAsynchronousProgramming = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding Asynchronous Programming in JavaScript</h1>

      <p>
        In JavaScript, many tasks happen one after the other, like following
        steps in a recipe. This is called <code>synchronous</code> programming,
        where each step waits for the previous one to finish before moving on.
        However, not everything can or should happen one by one. For example,
        imagine you’re cooking and you need to boil water. While waiting for the
        water to boil, you can chop vegetables. You don’t have to stop
        everything and wait for the water before moving to the next task.
      </p>

      <p>
        <code>Asynchronous programming</code> allows JavaScript to handle tasks
        that might take some time, such as fetching data from the internet or
        waiting for a user’s input, without stopping everything else. In other
        words, JavaScript can do other things while waiting for certain tasks to
        complete.
      </p>

      <h2>Synchronous vs Asynchronous Programming</h2>

      <h3>Synchronous Programming</h3>
      <p>
        In <code>synchronous programming</code>, tasks are performed one after
        the other. JavaScript reads a line of code, executes it, and moves to
        the next line. It doesn’t move forward until the current task is
        complete. Think of it as standing in line at a store, waiting for the
        person in front of you to finish before it’s your turn.
      </p>

      <h4>Example of Synchronous Code:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Task 1: Start");
console.log("Task 2: Continue");
console.log("Task 3: Finish");
  `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In the example above, each task happens one after the other. First,
        "Task 1: Start" is printed, then "Task 2: Continue," and finally "Task
        3: Finish."
      </p>

      <h3>Asynchronous Programming</h3>
      <p>
        With <code>asynchronous programming</code>, some tasks take time to
        complete, like downloading a file, waiting for a response from an API,
        or loading data. Instead of waiting for these tasks to finish before
        moving on, JavaScript can continue executing other code while waiting
        for the longer tasks to complete. Once those tasks are done, JavaScript
        comes back to them and completes the necessary actions.
      </p>

      <h4>
        Example of Asynchronous Code (Using <code>setTimeout</code>):
      </h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log("Task 1: Start");

setTimeout(function() {
  console.log("Task 2: Delayed by 2 seconds");
}, 2000);

console.log("Task 3: Continue without waiting");
  `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>In this example:</p>
      <ul>
        <li>
          <strong>Task 1</strong> is executed immediately, printing "Task 1:
          Start".
        </li>
        <li>
          <strong>Task 2</strong> is delayed by 2 seconds using{" "}
          <code>setTimeout</code>. JavaScript doesn't wait for 2 seconds to
          complete this task. Instead, it moves on to the next task right away.
        </li>
        <li>
          <strong>Task 3</strong> runs immediately after Task 1 without waiting
          for Task 2 to finish, printing "Task 3: Continue without waiting".
        </li>
        <li>
          Once 2 seconds have passed, Task 2 finally executes, printing "Task 2:
          Delayed by 2 seconds".
        </li>
      </ul>

      <p>
        Notice how Task 3 happens immediately, even though Task 2 has a delay.
        This is how asynchronous programming works: certain tasks can happen in
        the background, and JavaScript doesn’t have to wait for them to finish
        before moving on to other things.
      </p>

      <h2>Why is Asynchronous Programming Important?</h2>
      <p>
        Asynchronous programming is crucial in JavaScript because many tasks
        take time to complete, such as:
      </p>
      <ul>
        <li>Loading data from a server (fetching data).</li>
        <li>
          Waiting for user input (like waiting for a file to be uploaded).
        </li>
        <li>Running animations that occur over time.</li>
      </ul>

      <p>
        Imagine if JavaScript waited for each of these tasks to finish before
        moving on. Your web page could freeze, or become unresponsive, because
        JavaScript would be stuck waiting. Asynchronous programming allows
        JavaScript to handle these time-consuming tasks in the background while
        keeping the rest of the program running smoothly.
      </p>

      <h2>Real-Life Example: Making a Meal</h2>
      <p>
        Let’s imagine you’re cooking dinner. Some tasks take time, like boiling
        water or baking something in the oven. You don’t just stand there
        waiting for the water to boil—you do other things, like chopping
        vegetables or setting the table, while the water boils. Once the water
        is ready, you can come back to it.
      </p>

      <p>
        In the same way, asynchronous programming lets JavaScript do other
        things while waiting for certain tasks (like data fetching) to complete.
      </p>

      <h2>JavaScript is Single-Threaded</h2>
      <p>
        JavaScript is a <code>single-threaded</code> language, meaning it can
        only execute one task at a time in the main thread. However, with
        asynchronous programming, JavaScript can start a task, like fetching
        data from a server, and move on to other things while it waits for the
        data. When the data is ready, it comes back to that task and completes
        it. This makes JavaScript feel faster and more responsive, even though
        it's doing one thing at a time.
      </p>

      <h3>Single-Threaded vs Multi-Threaded</h3>
      <p>
        A <code>single-threaded</code> language like JavaScript handles one task
        at a time. In contrast, a <code>multi-threaded</code> language can
        handle multiple tasks at once. Even though JavaScript is
        single-threaded, asynchronous programming makes it seem like it can
        handle multiple tasks by starting something, moving on to other tasks,
        and then coming back once the first task is done.
      </p>

      <h2>Understanding the Bigger Picture</h2>
      <p>
        In the upcoming sections, we will dive into <code>how</code> JavaScript
        handles these asynchronous tasks behind the scenes using things like the{" "}
        <code>event loop</code>, and we’ll explore concepts like{" "}
        <code>callbacks</code>, <code>promises</code>, and{" "}
        <code>async/await</code>. Each of these plays a key role in managing
        asynchronous code in JavaScript.
      </p>

      <p>
        But for now, remember that asynchronous programming allows JavaScript to
        handle tasks that take time without stopping everything else, making
        your web applications faster and more responsive.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/setTimeSetinterval")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/EventLoop")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UnderstandingAsynchronousProgramming;

export const EventLoop = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding the Event Loop in JavaScript</h1>

      <p>
        The <code>event loop</code> is a key concept that helps JavaScript
        handle asynchronous tasks. It allows JavaScript to perform tasks in the
        background while still responding to other code that needs to run.
        Understanding the event loop will help you see how JavaScript manages
        multiple tasks without getting stuck.
      </p>

      <h2>JavaScript is Single-Threaded</h2>
      <p>
        First, remember that JavaScript is a <code>single-threaded</code>{" "}
        language. This means it can only do one thing at a time in the main
        thread. However, modern web applications often need to do many things at
        once, like handling user input, fetching data from the server, and
        updating the user interface. So how does JavaScript do all this at once
        if it’s single-threaded? This is where the <code>event loop</code> comes
        in.
      </p>

      <h2>How the Event Loop Works</h2>
      <p>
        The event loop is like a traffic controller for JavaScript. It helps
        JavaScript manage tasks that take time without blocking the main thread.
        Let's break it down:
      </p>

      <h3>The Stack</h3>
      <p>
        JavaScript uses something called a <code>call stack</code> to keep track
        of what functions are currently running. Think of the stack as a to-do
        list where tasks are added on top and removed from the top once they’re
        completed.
      </p>

      <h4>Example of the Call Stack:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function greet() {
  console.log('Hello');
}

greet(); // This function gets added to the call stack and executed
  `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        When the <code>greet()</code> function is called, it gets added to the
        call stack. Once it’s done (i.e., when <code>console.log('Hello')</code>{" "}
        runs), it is removed from the stack. The stack allows JavaScript to keep
        track of what task is running and what to do next.
      </p>
      <AdUnit />
      <h3>The Queue</h3>
      <p>
        While the call stack handles tasks that are being executed immediately,
        JavaScript also has a <code>message queue</code> (or{" "}
        <code>task queue</code>) where tasks that are waiting to be executed are
        stored. This queue holds tasks that are ready to be processed, but
        JavaScript won’t deal with them until the current task in the call stack
        is finished.
      </p>

      <p>
        Tasks that are asynchronous, like fetching data or waiting for a timer,
        are placed in the queue once they are ready to be processed.
      </p>

      <h4>Example with a Timer:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log('Task 1: Start');

setTimeout(() => {
  console.log('Task 2: This is delayed by 2 seconds');
}, 2000);

console.log('Task 3: End');
  `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <ul>
        <li>
          <code>Task 1</code> is printed immediately: "Task 1: Start."
        </li>
        <li>
          <code>Task 2</code> uses <code>setTimeout</code>, so it’s scheduled to
          run after 2 seconds. It doesn’t block the rest of the code, so it goes
          into the queue.
        </li>
        <li>
          <code>Task 3</code> runs immediately after Task 1, printing "Task 3:
          End."
        </li>
        <li>
          After 2 seconds, <code>Task 2</code> is moved from the queue to the
          stack and executed, printing "Task 2: This is delayed by 2 seconds."
        </li>
      </ul>

      <p>
        Notice how the event loop allows JavaScript to keep working on other
        tasks (like Task 3) while waiting for Task 2 to finish its delay.
      </p>

      <h3>The Event Loop in Action</h3>
      <p>
        The <code>event loop</code> constantly checks whether the call stack is
        empty. If the stack is empty, it takes the next task from the queue and
        moves it to the call stack to be executed. This way, JavaScript can
        continue processing new tasks while waiting for asynchronous operations
        like timers or data fetching.
      </p>

      <h4>Step-by-Step Example:</h4>
      <ol>
        <li>
          Task 1 (<code>console.log('Task 1: Start')</code>) is placed on the
          stack and executed.
        </li>
        <li>
          Task 2 (<code>setTimeout</code>) is placed in the queue since it has a
          delay of 2 seconds.
        </li>
        <li>
          Task 3 (<code>console.log('Task 3: End')</code>) is placed on the
          stack and executed immediately.
        </li>
        <li>
          After 2 seconds, the event loop moves Task 2 from the queue to the
          stack to be executed.
        </li>
      </ol>

      <h2>Real-Life Analogy: A Restaurant</h2>
      <p>
        Imagine a restaurant kitchen. The <code>call stack</code> is like the
        kitchen where chefs prepare one dish at a time. Once a dish is finished,
        it’s served to the customer. The <code>queue</code> is like the list of
        orders waiting to be cooked. Orders are placed in the queue, but the
        chefs can only work on one dish at a time.
      </p>

      <p>
        The <code>event loop</code> is like the restaurant manager, making sure
        the chefs are always working on the next available order once they
        finish cooking a dish. If an order takes a long time (like waiting for a
        cake to bake), the manager ensures the chefs keep working on other
        orders in the meantime.
      </p>
      <AdUnit />
      <h2>Summary</h2>
      <p>To summarize:</p>
      <ul>
        <li>
          JavaScript is single-threaded, meaning it can only execute one task at
          a time.
        </li>
        <li>
          The <code>call stack</code> tracks what task is currently being
          executed.
        </li>
        <li>
          The <code>queue</code> holds tasks that are waiting to be executed,
          like delayed tasks or tasks waiting for a response from the server.
        </li>
        <li>
          The <code>event loop</code> ensures that once the stack is empty,
          tasks from the queue are processed.
        </li>
        <li>
          This process allows JavaScript to handle multiple tasks efficiently,
          even though it can only execute one task at a time.
        </li>
      </ul>

      <p>
        The event loop makes sure that JavaScript can continue running smoothly,
        handling tasks in the background while keeping the main thread free for
        other tasks. Next, we’ll explore how JavaScript uses{" "}
        <code>callbacks</code>, <code>promises</code>, and{" "}
        <code>async/await</code> to handle asynchronous tasks more easily.
      </p>

      <div className="button-container">
        <button
          onClick={() =>
            (window.location.href = "/UnderstandingAsynchronousProgramming")
          }
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/CallBacks")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const CallBacks = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding Callbacks in JavaScript</h1>

      <p>
        In JavaScript, functions are special because they can be treated just
        like any other variable. You can pass them around, store them in
        variables, and even use them as arguments inside other functions. A{" "}
        <code>**callback**</code> is a function that is passed into another
        function as an argument and is then executed after some operation is
        completed.
      </p>

      <h2>What is a Callback?</h2>
      <p>
        A <code>**callback**</code> is simply a function that is passed as an
        argument to another function and is called (or "invoked") after some
        other task is completed. It's like giving instructions to someone: "Once
        you're done with this, call me back." Callbacks help us handle tasks
        that take time, like fetching data from a server, waiting for user
        input, or performing any other asynchronous operation.
      </p>

      <h2>Why Do We Need Callbacks?</h2>
      <p>
        In JavaScript, tasks like reading files, making network requests, or
        waiting for user actions are asynchronous (they take time to complete).
        Instead of stopping everything while waiting for these tasks, JavaScript
        uses callbacks to say, "Keep doing other things, but when you're done
        with this task, run this function."
      </p>

      <h3>Example of a Callback Function</h3>
      <p>Here’s a simple example of how a callback works:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function greet(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greet);
  `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We have a function <code>greet</code> that logs a greeting message.
        </li>
        <li>
          The <code>processUserInput</code> function takes a{" "}
          <code>**callback**</code> as an argument.
        </li>
        <li>
          Inside <code>processUserInput</code>, we get the user's name (let's
          say through a prompt) and pass that name to the callback, which is the{" "}
          <code>greet</code> function.
        </li>
        <li>
          Finally, when we call <code>processUserInput(greet)</code>, it runs
          the <code>greet</code> function after getting the user’s name.
        </li>
      </ul>
      <AdUnit />
      <h2>Callbacks and Asynchronous Programming</h2>
      <p>
        Callbacks become especially useful when dealing with{" "}
        <code>**asynchronous tasks**</code> like fetching data or waiting for a
        timer. Let’s say you want to get data from a server, but you don’t want
        to freeze your program while waiting for the data. In such cases, you
        can use a callback to run the code once the data is ready, without
        blocking other tasks in your program.
      </p>

      <h3>Example with setTimeout</h3>
      <p>
        Here’s an example using <code>setTimeout</code>, which runs a function
        after a certain delay:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
console.log('Start');

setTimeout(() => {
  console.log('This runs after 3 seconds');
}, 3000);

console.log('End');
  `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <ul>
        <li>
          The <code>setTimeout</code> function is asynchronous. It schedules a
          task to run after 3 seconds, but it doesn’t stop the rest of the code
          from running.
        </li>
        <li>
          While <code>setTimeout</code> is waiting, the program keeps going. So,
          "End" is printed immediately after "Start."
        </li>
        <li>
          After 3 seconds, the callback function inside <code>setTimeout</code>{" "}
          is executed, printing "This runs after 3 seconds."
        </li>
      </ul>

      <h3>Why Use Callbacks?</h3>
      <p>
        Without callbacks, JavaScript would have to wait for every task to
        finish before moving on to the next one. Imagine if you had to wait for
        a timer or data from a server before you could do anything else – your
        program would feel slow and unresponsive. Callbacks help avoid this by
        allowing your code to keep running while waiting for an asynchronous
        task to complete.
      </p>

      <h2>Callback Functions Explained in Detail</h2>
      <p>
        Callbacks are functions passed into other functions, but it's important
        to understand when and why they're used. Let’s look at another example
        to break it down further.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Data from the server';
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);
  `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <ul>
        <li>
          The <code>fetchData</code> function simulates getting data from a
          server. It uses <code>setTimeout</code> to wait for 2 seconds before
          calling the <code>callback</code> function.
        </li>
        <li>
          The <code>callback</code> function here is <code>displayData</code>,
          which is passed as an argument.
        </li>
        <li>
          Once <code>setTimeout</code> finishes after 2 seconds, it runs the{" "}
          <code>callback</code> (which is <code>displayData</code>) and passes
          the fetched data ("Data from the server") to it.
        </li>
        <li>
          Then, <code>displayData</code> logs the data to the console.
        </li>
      </ul>
      <AdUnit />
      <h2>Callback Hell</h2>
      <p>
        While callbacks are very useful, they can sometimes lead to something
        called <code>**callback hell**</code>. This happens when you have
        multiple callbacks nested inside each other, making your code hard to
        read and maintain. For example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
setTimeout(() => {
  console.log('Task 1 done');
  setTimeout(() => {
    console.log('Task 2 done');
    setTimeout(() => {
      console.log('Task 3 done');
    }, 1000);
  }, 1000);
}, 1000);
  `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we have three tasks, each waiting for 1 second before
        the next one starts. The problem is that the callbacks are nested inside
        each other, making the code harder to follow.
      </p>

      <h3>Real-Life Analogy</h3>
      <p>
        Imagine you’re cooking a meal, but some tasks take time, like boiling
        water or baking. Instead of standing there waiting for the water to
        boil, you start cutting vegetables or preparing other ingredients. When
        the water is finally boiled, you get a callback: "The water is ready!"
        This is how callbacks work – they notify you when an asynchronous task
        is done so you can continue working on other things in the meantime.
      </p>
      <AdUnit />
      <h2>Summary</h2>
      <ul>
        <li>
          A <code>**callback**</code> is a function passed into another function
          as an argument and executed after some operation is completed.
        </li>
        <li>
          Callbacks are especially useful for handling asynchronous tasks like
          fetching data or waiting for timers.
        </li>
        <li>
          They allow JavaScript to keep running other tasks while waiting for
          long operations to finish.
        </li>
        <li>
          Be careful with <code>**callback hell**</code>, where too many nested
          callbacks can make your code difficult to read and maintain.
        </li>
      </ul>

      <p>
        Callbacks are one of the first ways JavaScript handled asynchronous
        operations. Next, we’ll explore a more powerful and flexible alternative
        to callbacks: <code>**Promises**</code>.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/EventLoop")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/promises")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const Promises = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Imagine Promises as Waiters in a Restaurant</h1>
      <p>
        {" "}
        You (the programmer) are at a restaurant (your JavaScript code) and you
        order some food (an asynchronous operation). The waiter (the Promise)
        takes your order and goes to the kitchen (performs the asynchronous
        task).
      </p>
      <h3>There are three possible scenarios:</h3>
      <ol>
        <li>
          <b>The food arrives (Promise is fulfilled)</b>: The waiter brings you
          your delicious meal (the result of the operation). You can now enjoy
          it (use the result in your code).
        </li>
        <li>
          <b>{` There's a problem with the order (Promise is rejected)`}</b>:
          Maybe they ran out of your favorite dish. The waiter comes back to
          tell you{" "}
          {`there's an issue (the error) and you can decide what to do
          next (handle the error).`}
        </li>
        <li>
          <b>The waiter is still gone (Promise is pending)</b>:{" "}
          {`You haven't
          gotten your food yet, but you know it's being prepared. You can wait
          patiently (your code doesn't continue until the operation finishes).`}
        </li>
      </ol>
      <h2>How to Order Food with Promises (Creating and Using Promises):</h2>
      <ol>
        <li>
          {" "}
          <b>Talking to the Waiter (Creating a Promise)</b>: You tell the waiter
          what you want (define the asynchronous operation in the Promise
          constructor).
        </li>
        <li>
          {" "}
          <b>Waiting for the Food (Consuming Promises)</b>: You use the{" "}
          <code>{`.then`}</code>
          method to say what you want to do when the food arrives (handle the
          fulfilled result). You can also use <code>{`.catch`}</code> to say
          what to do if {`there's`} a problem (handle the error).
        </li>
      </ol>
      <h3>Example: Ordering a Pizza</h3>
      <pre>
        <code>
          {`
//JavaScript


function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    // Simulate making the pizza (asynchronous operation)
    setTimeout(() => {
      if (flavor === 'pineapple') {
        reject(new Error('We don't serve pineapple pizza!'));
      } else {
        const pizza = \`Here's your delicious \${flavor} pizza!\`;
        resolve(pizza);
      }
    }, 2000); // Simulate a 2-second wait
  });
}

// Ordering a pizza (calling the Promise function)
orderPizza('pepperoni')
  .then(pizza => {
    console.log('You enjoy your', pizza);
  })
  .catch(error => {
    console.error('Error:', error.message); // Handle the error (no pineapple pizza!)
  });
          `}
        </code>
      </pre>
      <AdUnit />
      <h2>Ordering Multiple Dishes (Promise Chaining):</h2>
      <p>
        {" "}
        Imagine you want pizza and a drink. You can chain Promises to handle
        them one after another:
      </p>
      <pre>
        <code>
          {`
//JavaScript


orderPizza('veggie')
  .then(pizza => {
    console.log('Enjoying the', pizza);
    return orderDrink('cola'); // Return another Promise (order a drink)
  })
  .then(drink => {
    console.log('Refreshing with a', drink);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
          
          `}
        </code>
      </pre>
      <h3>Key Points to Remember:</h3>
      <ul>
        <li>Promises help manage asynchronous operations in JavaScript.</li>
        <li>They can be in three states: pending, fulfilled, or rejected.</li>
        <li>
          {" "}
          Use <code>.then</code> to handle successful results and{" "}
          <code>.catch</code> for errors.
        </li>
        <li>
          Promise chaining allows you to perform multiple asynchronous tasks in
          sequence.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/CallBacks")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/asyncAwait")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const AsyncAwait = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Async and Await: Simplifying Asynchronous Programming</h1>
      <p>
        Promises are fantastic for managing asynchronous operations in
        JavaScript, but their <code>.then</code> and <code>.catch</code> syntax
        can lead to nested callbacks, making code harder to read.{" "}
        <code>Async</code> and <code>await</code> come to the rescue, offering a
        more synchronous-like way to write asynchronous code.
      </p>
      <h2>
        The <code>async</code> Keyword:
      </h2>
      <ul>
        <li>
          {" "}
          Imagine you have a regular function. By adding the <code>
            async
          </code>{" "}
          keyword before the function declaration, you transform it into an
          asynchronous function.
        </li>
        <li>
          {" "}
          An important thing to remember is that <code>async</code> functions
          always return a Promise, even if you {`don't`} explicitly use the
          <code>return</code> keyword within the function body.
        </li>
      </ul>
      <h2>
        The <code>await</code> Keyword:
      </h2>
      <ul>
        <li>
          Think of <code>await</code> as a magic pause button you can use only
          within <code>async</code> functions.
        </li>
        <li>
          When you place <code>await</code> before a Promise-based operation
          (like fetching data or waiting for a timer), the <code>async</code>{" "}
          function pauses its execution until that Promise settles (either
          fulfills or rejects).
        </li>
        <li>
          {" "}
          Once the Promise settles, the <code>await</code> keyword essentially
          {`"unpauses"`} the function and provides the resolved value (if
          fulfilled) or throws the error (if rejected).
        </li>
      </ul>
      <AdUnit />
      <h2>Benefits of Async/Await:</h2>
      <ul>
        <li>
          <b>Readability</b>: Async/await eliminates the need for chained{" "}
          <code>.then</code>
          and <code>.catch</code> calls, making your code look more linear and
          easier to follow. It feels more like writing synchronous code, even
          though the operations are asynchronous underneath.
        </li>
        <li>
          <b>Improved Code Flow</b>: You can write your asynchronous logic in a
          step-by-step manner, just like you would with synchronous code. This
          makes your code more intuitive and easier to reason about.
        </li>
      </ul>
      <h2>Examples to Illustrate Async/Await:</h2>
      <p>Imagine you want to display a message after a short delay:</p>
      <ol>
        <li>
          <pre>
            <code>
              {`
//JavaScript


async function waitAndDisplay(message) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
  console.log(message);
}

waitAndDisplay('Hello after 2 seconds!');
              `}
            </code>
          </pre>
          <p>
            Here, <b>waitAndDisplay</b> is <code>async</code>. We use{" "}
            <code>await</code> with a Promise that resolves after 2 seconds,
            creating a delay. Then, the function logs the message.
          </p>
        </li>
        <li>
          {" "}
          Simulating Multiple Asynchronous Tasks:
          <p>
            Sometimes, you want to perform multiple asynchronous tasks one after
            another:
          </p>
          <pre>
            <code>
              {`
//JavaScript


async function simulateTasks() {
  console.log('Task 1 started');
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
  console.log('Task 1 completed');

  console.log('Task 2 started');
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
  console.log('Task 2 completed');
}

simulateTasks();
              `}
            </code>
          </pre>
          <p>
            In this example, <b>simulateTasks</b> is <code>async</code>. We use
            <code>await</code> with Promises to simulate two tasks happening one
            after another, with delays in between.
          </p>
        </li>
      </ol>
      <h2>Key Points to Remember:</h2>
      <ul>
        <li>
          Use <code>async</code> functions to mark functions that handle
          asynchronous operations.
        </li>
        <li>
          Use <code>await</code> only inside <code>async</code> functions to
          pause execution until Promises settle.
        </li>
        <li>
          Async/await simplifies asynchronous code by making it look more like
          synchronous code.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/promises")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/tryCatch")}>
          Next
        </button>
      </div>
    </div>
  );
};
