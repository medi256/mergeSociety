import AdUnit from "../AdUnit";

const UnderstandingAsynchronousProgramming = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Synchronous vs. Asynchronous Programming: Keeping Your Web Pages
        Responsive
      </h1>
      <p>
        {" "}
        As developers, we want our JavaScript code to run smoothly and
        efficiently. But traditional programming languages often follow a
        <b>synchronous execution</b> model, where tasks are completed one after
        another, in a strict order. Imagine a meticulous chef following a recipe
        line by line. They {`can't`} pour the coffee until the water boils!
      </p>
      <h3>
        {`Here's`} a simple JavaScript example to illustrate synchronous
        execution:
      </h3>
      <pre>
        <code>
          {`
//JavaScript


console.log("I'm the first line of code!");
console.log("Now I'm running the second line.");
console.log("Wait for it... here's the last line!");
          `}
        </code>
      </pre>
      <p>
        In this code, each <code>console.log</code> statement executes
        sequentially. The second line {`won't`} run until the first line
        finishes, and the third line waits for the second to complete. This
        ensures everything is done in the specified order.
      </p>
      <p>
        However, the web is full of <b>asynchronous operations</b> – actions
        that take variable amounts of time to finish, like fetching data from
        servers. In a purely synchronous world, your entire program would grind
        to a halt while waiting for these slow tasks. The user would be stuck
        staring at a loading screen – not ideal!
      </p>
      <AdUnit />
      <h2>
        {" "}
        Asynchronous Programming: Taking Control and Keeping Things Responsive
      </h2>
      <p>
        {" "}
        <b>Asynchronous Programming</b> is our secret weapon for building
        responsive web applications. It allows your program to initiate a
        long-running task (like fetching data) and keep executing other code
        simultaneously. {`It's`} like having a super-powered assistant in your
        computer. You can send them off to fetch data while you continue
        building the rest of your webpage.
      </p>
      <p>
        This asynchronous approach is crucial for a smooth user experience.
        Users {`shouldn't`} have to wait for your entire program to finish
        before interacting with your web page. Asynchronous Programming ensures
        that your web page remains responsive, even while waiting for data to
        arrive.
      </p>
      <p>
        With Asynchronous Programming, you gain more control over the flow of
        your code. You can choose which parts run immediately (synchronously)
        and which can be handled asynchronously in the background. This allows
        you to create a more dynamic and engaging user experience.
      </p>
      <p>
        The next sections will delve deeper into the {`browser's`} event loop
        and the tools (Callbacks, Promises, Async/Await) JavaScript provides to
        manage asynchronous operations effectively.
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
      <h1>
        {" "}
        The {`Browser's`} Event Loop: The Traffic Cop for Asynchronous Tasks
      </h1>
      <p>
        Imagine a bustling city intersection. Cars (code execution) need to
        navigate smoothly, but{" "}
        {`there's only one police officer (the event loop)
        managing the traffic. This officer (event loop) prioritizes tasks to
        ensure everything runs efficiently. That's`}{" "}
        exactly how the <b>event loop</b> works in web browsers!
      </p>
      <p>
        The event loop is a core mechanism in JavaScript that manages the
        execution of code, including both synchronous and asynchronous
        operations. It acts like a traffic cop, prioritizing tasks and ensuring
        smooth execution. {`Let's`} break down its key functions:
      </p>
      <ol>
        <li>
          <b>Call Stack</b>: Think of this as a stack of plates at a restaurant.
          The call stack keeps track of currently executing functions. Each
          function call adds a new plate (stack frame) containing information
          about the
          {`function's`} execution. When a function finishes, its plate is
          removed from the stack.
        </li>
        <li>
          <b>Task Queue</b>: This is a line of people waiting to be served at
          the restaurant (asynchronous tasks). When a long-running operation
          (like fetching data) is initiated, {`it's`} placed in the task queue
          instead of blocking the call stack.
        </li>
        <li>
          {" "}
          <b>Event Loop Cycle</b>: The event loop continuously monitors these
          two areas:
          <ul>
            <li>
              <b>Call Stack</b>: If the call stack is empty (no functions
              executing), the event loop checks the task queue.
            </li>
            <li>
              <b>Task Queue</b>: If there are tasks waiting, the event loop
              removes the first one (like seating a waiting customer) and adds
              it to the call stack for execution.
            </li>
          </ul>
        </li>
      </ol>
      <AdUnit />
      <h3>{`Here's`} how it translates to Asynchronous Programming:</h3>
      <ol>
        <li> You initiate an asynchronous operation (like fetching data).</li>
        <li>
          {" "}
          This operation is placed in the task queue (like waiting in line).
        </li>
        <li>
          {" "}
          Your code continues executing other tasks synchronously (like taking
          other orders).
        </li>
        <li>
          Once the asynchronous operation finishes (like your food arrives), it
          notifies the event loop.{" "}
        </li>
        <li>
          {" "}
          The event loop, seeing an empty call stack, adds the completed
          operation to the call stack for further processing (like the chef
          brings your food).
        </li>
      </ol>
      <h3>Why is the Event Loop Important?</h3>
      <p>
        The event loop ensures that your web page remains responsive, even while
        waiting for asynchronous tasks to complete. It keeps JavaScript from
        getting bogged down and allows users to interact with the page without
        long pauses.{" "}
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
      <h1>Callbacks: Your Asynchronous Task Force in JavaScript</h1>
      <p>
        {" "}
        Imagine your web page is a bustling city square. Synchronous code
        execution would be like traffic lights that stop everything for
        pedestrians to cross. Asynchronous operations, like fetching data from
        servers, are like long lines at a kiosk – they take time and {`can't`}{" "}
        be rushed. Callbacks are your solution: a team of helpers who can handle
        these asynchronous tasks without blocking the entire city square (your
        code execution).
      </p>
      <h2> The Callback Crew in Action:</h2>
      <ol>
        <li>
          Printing a Document:
          <ul>
            <li>
              {" "}
              You initiate the print job (asynchronous task). This is like
              sending a document to a large printer at the office.
            </li>
            <li>
              {" "}
              You provide a callback function (your helper). This function is
              like someone who will be notified when the printing finishes.
              Their job might be to display a message saying,{" "}
              {`"Your document is
              printed and ready for pickup!"`}
            </li>
            <pre>
              <code>
                {`
//JavaScript


function printDocument(filePath, callback) {
  // Simulate asynchronous printing process (e.g., sending data to a printer)
  setTimeout(() => {
    console.log("Document", filePath, "printed successfully!");
    callback(); // Call the provided callback function when printing finishes
  }, 2000); // Simulate a 2-second delay
}

function notifyUser() {
  console.log("Your document is printed and ready for pickup!");
}

printDocument("report.pdf", notifyUser);

console.log("This line will execute before the document is printed.");
                
                `}
              </code>
            </pre>
          </ul>
        </li>
        <li>
          <h2>Downloading a Large File:</h2>
          <ul>
            <li>
              You initiate the download (asynchronous task). This is like
              starting a large file download from the internet.
            </li>
            <li>
              You provide a callback function (your helper). This function is
              like someone who will be notified when the download finishes.
              Their job might be to update a progress bar or display a{" "}
              {`"Download
              complete" message.`}
            </li>
            <pre>
              <code>
                {`
//JavaScript


function downloadFile(url, callback) {
  // Simulate asynchronous file download process
  setTimeout(() => {
    console.log("File downloaded from", url);
    callback(); // Call the provided callback function when download finishes
  }, 3000); // Simulate a 3-second delay
}

function updateUI() {
  console.log("Download complete! You can now access the file.");
}

downloadFile("large_image.jpg", updateUI);

console.log("This line will execute before the file download finishes.");
                `}
              </code>
            </pre>
          </ul>
        </li>
        <li>
          <h2>Fetching Social Media Updates:</h2>
          <ul>
            <li>
              You initiate a request for new updates (asynchronous task). This
              is like checking for new posts on your social media feed.
            </li>
            <li>
              You provide a callback function (your helper). This function is
              like someone who will be notified when new updates arrive. Their
              job might be to display the new posts on your screen.
            </li>
          </ul>
          <pre>
            <code>
              {`
//JavaScript


function fetchUpdates(callback) {
  // Simulate asynchronous data fetching from a social media API
  setTimeout(() => {
    const updates = ["New post!", "Friend request received."];
    callback(updates); // Call the provided callback function with the updates
  }, 1000); // Simulate a 1-second delay
}

function displayUpdates(data) {
  console.log("New updates:", data);
}

fetchUpdates(displayUpdates);

console.log("This line will execute before new updates arrive.");
              `}
            </code>
          </pre>
        </li>
      </ol>
      <AdUnit />
      <h2>Why Learn Callbacks? (And Why Move On?)</h2>
      <p>
        Callbacks are your initial tools for managing asynchronous operations in
        JavaScript. They allow you to execute code after an asynchronous task
        finishes. However, as your programs become more complex, nested
        callbacks can make code difficult to read and maintain. In future
        lessons, {`we'll`} explore cleaner alternatives like Promises and
        Async/Await that offer better ways to structure asynchronous code.
      </p>

      <p>
        <b>**Remember:**</b> Callbacks are a fundamental concept in asynchronous
        JavaScript, but {`they're`} not the only option available. As you
        progress in your learning, be prepared to explore more advanced
        techniques for handling asynchronous operations.
        <br />
        While callbacks have historical significance,{" "}
        {`it's generally recommended to 
  use other options for modern JavaScript development. We covered callbacks here 
  to provide a foundational understanding, but other methods like Promises and 
  \`async/await\` are often considered easier to use and manage. You'll likely find 
  these alternatives more enjoyable to work with.`}
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
