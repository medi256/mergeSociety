import AdUnit from "../AdUnit";

const DefiningCallingFunc = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Welcome to the Wonderful World of JavaScript Functions!</h1>
      <p>
        Welcome, future JavaScript masters! Today, {`we'll`} meet some
        incredible tools called functions. Imagine functions as helpful
        assistants who can perform specific tasks over and over again, just like
        you might ask a friend to help you with the dishes or chores.
      </p>
      <h2>Why Functions Are So Awesome?</h2>
      <p>
        Functions help keep your code clean, organized, and reusable. Think of
        writing a complicated recipe from scratch each time you want to bake a
        cake. Functions are like the recipe itself, where you can define the
        steps once and then use it (call it) as many times as you want without
        rewriting everything!
      </p>
      <h2>Building Your First Function:</h2>
      <p>
        {`Let's see how we create a function in JavaScript. It's`} like giving
        your assistant instructions:
      </p>
      <pre>
        <code>
          {`
//JavaScript


function functionName() {
  // Code to be executed (function body)
}
          `}
        </code>
      </pre>
      <ul>
        <li>
          <code>function</code>: This keyword tells JavaScript that{" "}
          {`we're creating a powerful "assistant"`} called a function.
        </li>
        <li>
          <b>functionName</b>: Choose a descriptive name that reflects what your
          assistant will do (e.g., <b>sayHello</b>, <b>announceWinner</b> ).
        </li>
      </ul>
      <h2> Calling Your Function: Putting It to Work</h2>
      <p>
        Once {`you've`} defined your function, you can use it (call it) whenever
        you need it to perform its task. Think of it as giving your assistant a
        specific command to execute the instructions you defined.
      </p>
      <pre>
        <code>
          {`
//JavaScript


function sayHello() {
  console.log("Hello!");
}

sayHello(); // This calls the \`sayHello\` function
          `}
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ol>
        <li>
          We define a function named <b>sayHello</b> that {`doesn't`} take any
          arguments (parameters).
        </li>
        <li>
          {" "}
          Inside the function body, we use <b>console.log</b> to print{" "}
          {`"Hello!"`} to the console.
        </li>
        <li>
          When we write <b>{`sayHello()`} </b>;,{" "}
          {`we're essentially telling the function to execute its instructions, which is to print "Hello!" to the console.`}
        </li>
      </ol>
      <AdUnit />
      <h3>The Magic of Reusability:</h3>
      <p>The beauty of functions is that you can call them multiple times:</p>
      <pre>
        <code>
          {`
//JavaScript


sayHello(); // Prints "Hello!" again 
sayHello(); // And again!
          `}
        </code>
      </pre>
      <h3>Best Practices:</h3>
      <ul>
        <li>Use descriptive function names that reflect their purpose.</li>
        <li>Keep your functions concise and focused on a single task.</li>
        <li>Use functions to organize your code and make it more readable.</li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>Performing repetitive tasks, like printing a message.</li>
        <li>
          Encapsulating complex logic, like calculating a mathematical formula.
        </li>
        <li>
          Creating reusable code blocks, like a function to validate user input.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/loops")}>back</button>
        <button onClick={() => (window.location.href = "/ParameterArgument")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DefiningCallingFunc;

export const ParameterArgument = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Level Up Your Functions: Using Parameters and Arguments like a Pro
      </h1>
      <p>
        Remember our awesome function assistants from last time? Now,{" "}
        {`let's upgrade them with even more power! We'll`} introduce parameters
        and arguments to make functions even more flexible.
      </p>
      <h2>Introducing Parameters: The Special Instructions</h2>
      <p>
        Think of parameters as specific instructions you give your helper when
        you create the function{" "}
        {`(like "wash the dishes" or "mow the lawn").
        They're placeholders inside the function's definition, waiting for
        actual values to be provided later.`}
      </p>
      <h3>{`Here's`} the syntax for functions that include parameters:</h3>
      <pre>
        <code>
          {`
//JavaScript


function functionName(parameters) {
  // Code to be executed (function body)
}
          `}
        </code>
      </pre>
      <h3>For example:</h3>
      <pre>
        <code>
          {`
//JavaScript


function greetUser(name) { // "name" is the parameter
  console.log("Hello, " + name + "!");
}
          `}
        </code>
      </pre>
      <h3>Arguments: The Actual Values Passed</h3>
      <p>
        When you call (use) a function that has parameters, you provide the
        actual values (arguments) to fill those placeholders. {`It's`} like
        giving your helper the specific dishes to wash or the exact lawn area to
        mow.
      </p>
      <h3>{`Here's`} how you call a function with arguments:</h3>
      <pre>
        <code>
          {`
//JavaScript


greetUser("Alice"); // "Alice" is the argument for the "name" parameter
          `}
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ol>
        <li>
          We define a function named <b>greetUser</b> with one parameter named{" "}
          <b>name</b>.
        </li>
        <li>
          {" "}
          When we call <b>{`greetUser("Alice")`}</b>, the value {`"Alice"`} is
          the argument passed to the <b>name</b> parameter.
        </li>
        <li>
          Inside the {`function's`} code, the <b>name</b> parameter takes on the
          value of the argument {`("Alice")`}. This allows the function to
          create a personalized greeting.
        </li>
      </ol>
      <AdUnit />
      <h3>Benefits of Parameters and Arguments:</h3>
      <ul>
        <li>
          Functions can be more versatile by accepting different values each
          time {`they're`} called.
        </li>
        <li>
          You can create reusable functions that adapt to various situations.
        </li>
      </ul>
      <h3>Best Practices:</h3>
      <ul>
        <li>Use descriptive parameter names that reflect their purpose.</li>
        <li>Keep your functions concise and focused on a single task.</li>
        <li>Use functions to organize your code and make it more readable.</li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>Performing repetitive tasks, like printing a message.</li>
        <li>
          Encapsulating complex logic, like calculating a mathematical formula.
        </li>
        <li>
          Creating reusable code blocks, like a function to validate user input.
        </li>
      </ul>
      <h3>Keeping It Simple:</h3>
      <p>
        For now, remember that parameters are like placeholders in the function
        definition, while arguments are the actual values you provide when you
        call the function. {`We'll`} explore more advanced concepts like
        returning values in future lessons.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/DefiningCallingFunc")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/ReturnValues")}>
          Next
        </button>
      </div>
    </div>
  );
};
export const ReturnValues = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Unlocking the Power of Returning Values: Giving Your Functions Results
      </h1>
      <p>
        Remember our awesome function assistants{" "}
        {`we've been working with? Today,
        we'll equip them with the ability to return values. This makes them even
        more useful by letting them "report back" with information after
        completing their tasks.`}
      </p>
      <h2>Imagine Functions as Helpful Deliverers</h2>
      <p>
        {`Think of a function as a helpful delivery person who does some work for
        you (like calculating an area) and then brings back the result (the
        calculated area). That "result" is what we call the returned value.`}
      </p>
      <h2>Adding the return Keyword:</h2>
      <p>
        {" "}
        To return a value from a function, we use the return keyword followed by
        the value you want your function to send back.
      </p>
      <h3>{`Here's`} the syntax:</h3>
      <pre>
        <code>
          {`
//JavaScript


function functionName(parameters) {
  // Code to be executed (function body)
  return value;
}
          `}
        </code>
      </pre>
      <h3>Example: Returning a Calculation</h3>
      <p>
        {`Let's`} create a function that calculates the area of a rectangle and
        returns the result:
      </p>
      <pre>
        <code>
          {`
//JavaScript


function calculateArea(length, width) {
  const area = length * width;
  return area; // Returning the calculated area
}

const rectangleArea = calculateArea(5, 3); // Call the function and store the returned value

console.log("The area of the rectangle is:", rectangleArea); // This will print: "The area of the rectangle is: 15"
          `}
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ol>
        <li>
          We define a function named <b>calculateArea</b> that takes two
          parameters, <b>length</b> and <b>width</b>.
        </li>
        <li>
          Inside the function, we calculate the area by multiplying{" "}
          <b>length</b> and
          <b>width</b>.
        </li>
        <li>
          The <b>return area</b>; statement sends the calculated area value back
          to the code that called the function.
        </li>
        <li>
          When we call <b>calculateArea(5, 3)</b>, the function calculates the
          area (15) and returns it.
        </li>
        <li>
          We store the returned value (15) in the variable <b>rectangleArea</b>.
        </li>
        <li>
          Finally, we print the result using <b>console.log</b>.
        </li>
      </ol>
      <AdUnit />
      <h3>Best Practices:</h3>
      <ul>
        <li>Use descriptive variable names to make your code more readable.</li>
        <li>Keep your functions concise and focused on a single task.</li>
        <li>Use functions to organize your code and make it more reusable.</li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>
          Performing calculations, like calculating the area of a rectangle.
        </li>
        <li>
          Validating user input, like checking if a password meets certain
          criteria.
        </li>
        <li>Generating random numbers or strings.</li>
      </ul>
      <h3>Remember:</h3>
      <ul>
        <li> Functions can only return one value at a time.</li>
        <li>
          {" "}
          You can return any type of value, such as numbers, strings, or even
          objects.
        </li>
        <li>
          Returned values allow functions to provide useful information to the
          rest of your code.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/ParameterArgument")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/FuncScope")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const FuncScope = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Demystifying Function Scope: Where Your Variables Live</h1>
      <p>
        In our JavaScript journey,{" "}
        {`we've encountered the amazing power of
        functions. Now, let's`}{" "}
        explore a crucial concept called function scope. It determines where
        variables declared inside a function can be accessed and used.
      </p>
      <h2>Imagine Functions as Private Workspaces</h2>
      <p>
        Think of a function as a well-organized workspace. Variables defined
        inside the function{" "}
        {`(like tools on the workbench) are only accessible
        within that workspace. They're not visible to the "outside world" (the
        main code or other functions). This helps prevent naming conflicts and
        keeps your code clean.`}
      </p>
      <h3>Example: Function Scope in Action</h3>
      <p>{`Here's`} a simple example to illustrate function scope:</p>
      <pre>
        <code>
          {`
//JavaScript


function greetUser() {
  const name = "Alice"; // Variable declared inside the function
  console.log("Hello, " + name + "!");
}

greetUser(); // This will print "Hello, Alice!"

// console.log(name); // This will cause an error: "name is not defined"
          `}
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ol>
        <li>
          We define a function named <b>greetUser</b>.
        </li>
        <li>
          {" "}
          Inside the function, we declare a variable <b>name</b> with the value{" "}
          {`"Alice"`}.
        </li>
        <li>
          The function prints a greeting using the <b>name</b> variable. This
          works because <b>name</b> is accessible within the {`function's`}{" "}
          scope.
        </li>
        <li>
          {" "}
          Outside the function, when we try to access <b>name</b> using
          <b>console.log(name)</b>, it will result in an error because{" "}
          <b>name</b> is only visible inside the <b>greetUser</b> {`function's`}{" "}
          scope.
        </li>
      </ol>
      <AdUnit />
      <h3>Best Practices:</h3>
      <ul>
        <li>Use descriptive variable names to avoid naming conflicts.</li>
        <li>Keep your functions concise and focused on a single task.</li>
        <li>Use functions to organize your code and make it more reusable.</li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>
          Creating private variables that should not be accessed from outside
          the function.
        </li>
        <li>
          Preventing accidental modification of variables from outside the
          function.
        </li>
        <li>Organizing code into reusable functions with their own scope.</li>
      </ul>
      <h3>Remember:</h3>
      <p>
        Variables declared inside a function (local variables) are only
        accessible within that function.
      </p>
      <p>
        This prevents accidental modification of variables from outside the
        function and promotes cleaner code organization.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/ReturnValues")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/ArrowFunc")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ArrowFunc = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introducing Arrow Functions: A Simpler Way to Write Functions</h1>
      <p>
        {" "}
        Now that{" "}
        {`you've mastered regular functions, let's explore a more concise
        way to write them: arrow functions. Think of them as handy shortcuts for
        functions, especially when you don't need all the bells and whistles of
        a full-blown function.`}
      </p>
      <h2>Simpler Syntax for Simple Tasks</h2>
      <p>
        Arrow functions use a shorter syntax compared to regular functions.
        {`They're particularly useful for functions that perform a single,
        straightforward task. Here's the basic structure:`}
      </p>
      <pre>
        <code>
          {`
//JavaScript


const functionName = (parameters) => {
  // Code to be executed (function body)
}
          `}
        </code>
      </pre>
      <h3>Example: Arrow Function in Action</h3>
      <p>
        {" "}
        {`Let's`} rewrite the calculateArea function from before using an arrow
        function:
      </p>
      <pre>
        <code>
          {`
//JavaScript


const calculateArea = (length, width) => {
  const area = length * width;
  return area;
};

const rectangleArea = calculateArea(5, 3); // Call the function and store the returned value
console.log("The area of the rectangle is:", rectangleArea); // This will print: "The area of the rectangle is: 15"
          `}
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ol>
        <li>
          We define a constant <b>calculateArea</b> using an arrow function.
        </li>
        <li>
          The parameters <b>length</b> and <b>width</b> are enclosed in
          parentheses.
        </li>
        <li>
          {" "}
          The <b>{`=>`}</b> symbol separates the parameters from the function
          body.
        </li>
        <li>Inside the function body, we calculate the area and return it.</li>
      </ol>
      <h3>Benefits of Arrow Functions:</h3>
      <ul>
        <li>
          <b>Conciseness</b>: They offer a cleaner, less verbose syntax for
          simple functions.
        </li>
        <li>
          <b>Implicit</b> <code>return</code>: For single-line functions, the{" "}
          <b>return</b> keyword is implied, making the code even shorter.
        </li>
      </ul>
      <AdUnit />
      <h3>Best Practices:</h3>
      <ul>
        <li>Use arrow functions for simple, one-line functions.</li>
        <li>
          Avoid using arrow functions for complex logic or multiple statements.
        </li>
        <li>
          Keep your code organized by using arrow functions for concise tasks.
        </li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>
          Creating small, reusable functions for tasks like data transformation.
        </li>
        <li>Defining event handlers or callbacks with a concise syntax.</li>
        <li>
          Simplifying code by replacing short, simple functions with arrow
          functions.
        </li>
      </ul>
      <h3>Remember:</h3>
      <p>
        Arrow functions are not suitable for every situation. Use them for
        simple, concise functions.
      </p>
      <p>
        {" "}
        They inherit their <code>this</code> value from the surrounding scope,
        which can be different from regular functions{" "}
        {`(we'll discuss this
        further in advanced lessons).`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/FuncScope")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/StringMethod")}>
          Next
        </button>
      </div>
    </div>
  );
};
