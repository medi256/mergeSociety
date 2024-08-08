import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DefiningCallingFunc = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to Functions</h1>
      <p>
        Welcome everyone! Today, we're going to learn about functions in
        JavaScript. Functions are a fundamental part of JavaScript and are used
        to group together code that performs a specific task.
      </p>

      <h2>What is a Function?</h2>
      <p>
        Imagine you have a toy robot. This robot can do a lot of things, but
        some things you want it to do over and over. For example, you might want
        it to walk forward.
      </p>
      <p>
        Instead of giving the robot a separate instruction each time, you can
        teach it a "trick." This trick is like a function in JavaScript. You
        give the trick a name, like "walkForward," and then you teach the robot
        the steps it needs to do to walk forward. In JavaScript, these steps are
        the lines of code inside curly braces.
      </p>
      <p>
        Once you've taught the robot the trick, you can call it whenever you
        want the robot to walk forward. Calling the trick is like calling a
        function in JavaScript. You just use the name of the function, and the
        robot (or the computer program) does what you taught it.
      </p>
      <p>
        This way, you don't have to give the robot a bunch of instructions every
        time you want it to do something. You can just call the trick with the
        right name. This is what functions let you do in JavaScript. They let
        you group together instructions and then use them over and over again
        with just a simple name.
      </p>

      <h2>Defining a Function</h2>
      <p>
        To create a function in JavaScript, you use the <code>function</code>{" "}
        keyword, followed by a name for your function, parentheses{" "}
        <code>()</code>, and curly braces <code>{"{}"}</code>. The code that
        performs the task goes inside the curly braces. This is called
        "defining" a function.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function walkForward() {
  console.log('The robot is walking forward.');
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we defined a function named <code>walkForward</code>.
        When this function is called, it will print 'The robot is walking
        forward.' to the console.
      </p>
      <p>Let's break down the parts of a function definition:</p>
      <ul>
        <li>
          <strong>function</strong>: This keyword tells JavaScript that you are
          defining a function.
        </li>
        <li>
          <strong>walkForward</strong>: This is the name of the function. You
          can name it anything you like, but it's good to choose a name that
          describes what the function does.
        </li>
        <li>
          <strong>()</strong>: These parentheses can hold parameters (inputs)
          for the function. We'll talk more about parameters later.
        </li>
        <li>
          <strong>{"{}"}</strong>: The curly braces contain the code that runs
          when the function is called.
        </li>
      </ul>
      <AdUnit />
      <h2>Calling a Function</h2>
      <p>
        Defining a function doesn't execute it. To execute the code inside a
        function, you need to "call" the function by writing its name followed
        by parentheses <code>()</code>.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
walkForward();
// Output: The robot is walking forward.
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we call the <code>walkForward</code> function, and it prints 'The
        robot is walking forward.' to the console.
      </p>

      <h2>Why Use Functions?</h2>
      <p>
        Functions help you organize your code and make it reusable. Imagine you
        need to greet users in multiple places in your code. Instead of writing{" "}
        <code>console.log('Hello, there!')</code> each time, you can just call
        the <code>greet</code> function.
      </p>
      <p>
        Functions also make your code easier to read and maintain. If you need
        to update the greeting message, you only have to change it in one place
        – inside the <code>greet</code> function.
      </p>
      <p>
        Let's look at another example where we use a function to display a
        simple message.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function sayGoodbye() {
  console.log('Goodbye, see you next time!');
}

sayGoodbye();
// Output: Goodbye, see you next time!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we define a function called <code>sayGoodbye</code>.
        Inside the function, we print a goodbye message. When we call the
        function, it prints 'Goodbye, see you next time!'.
      </p>

      <h2>Understanding the Parts of a Function</h2>
      <p>Let's look closely at the different parts of a function definition:</p>
      <ul>
        <li>
          <strong>Function Name:</strong> The name of the function should
          describe what the function does. In our example, <code>greet</code> is
          a good name because it tells us that the function greets someone.
        </li>
        <li>
          <strong>Function Body:</strong> This is the code inside the curly
          braces <code>{"{}"}</code>. This code will run when the function is
          called.
        </li>
      </ul>

      <h2>Using Functions to Organize Code</h2>
      <p>
        Functions help keep your code organized. For example, if you were making
        a simple program to greet users and say goodbye, you might have separate
        functions for each task.
      </p>
      <p>
        Here’s an example of how you might use functions to organize your code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function greetUser() {
  console.log('Hello, User!');
}

function farewellUser() {
  console.log('Goodbye, User!');
}

// Calling the functions
greetUser(); // Output: Hello, User!
farewellUser(); // Output: Goodbye, User!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we have two functions: <code>greetUser</code> and{" "}
        <code>farewellUser</code>. Each function performs a specific task,
        making our code more organized and easier to read.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Functions are a powerful tool in JavaScript that help you organize,
        reuse, and simplify your code. By defining functions, you can create
        blocks of code that perform specific tasks and use them whenever needed.
        This makes your code more efficient and easier to read.
      </p>
      <p>
        Remember, defining a function is like teaching a robot a trick, and
        calling a function is like asking the robot to perform that trick.
        Practice creating and calling functions to get comfortable with this
        fundamental concept in JavaScript.
      </p>
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
      <h1>Function Parameters and Arguments</h1>
      <p>
        Welcome back! In our last lesson, we learned about functions and how
        they help us organize and reuse our code. Now, let's take a closer look
        at a special part of functions: parameters and arguments.
      </p>

      <h2>What are Parameters?</h2>
      <p>
        Imagine you have a toy robot that can walk forward. But what if you want
        the robot to walk a specific number of steps each time? You can teach
        the robot to take the number of steps as an input. This input is like a
        parameter in a function.
      </p>
      <p>
        In JavaScript, parameters are special variables that we include in our
        function definitions. They act as placeholders for the values (or
        inputs) that we will pass to the function when we call it.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function walkForward(steps) {
  console.log('The robot walks ' + steps + ' steps forward.');
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>steps</code> is a parameter. It acts as a
        placeholder for the number of steps the robot will take.
      </p>

      <h2>What are Arguments?</h2>
      <p>
        When we call a function, we need to provide actual values for the
        parameters. These values are called arguments. Think of arguments as the
        real instructions you give to the robot.
      </p>
      <p>
        Let's call the <code>walkForward</code> function and provide an
        argument:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
walkForward(5); // Output: The robot walks 5 steps forward.
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, <code>5</code> is the argument we pass to the{" "}
        <code>walkForward</code> function. The function uses this argument to
        replace the <code>steps</code> parameter and prints "The robot walks 5
        steps forward."
      </p>

      <h2>Why Use Parameters and Arguments?</h2>
      <p>
        Parameters and arguments make functions more flexible and powerful. They
        allow us to use the same function for different inputs. Instead of
        creating a new function for each number of steps, we can use one
        function and simply change the argument.
      </p>
      <p>
        Let's see another example where we use parameters and arguments to greet
        different users:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function greetUser(name) {
  console.log('Hello, ' + name + '!');
}

greetUser('Alice'); // Output: Hello, Alice!
greetUser('Bob');   // Output: Hello, Bob!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>name</code> is a parameter in the{" "}
        <code>greetUser</code> function. When we call the function with
        different arguments like <code>'Alice'</code> and <code>'Bob'</code>, it
        prints personalized greetings.
      </p>
      <AdUnit />
      <h2>Using Multiple Parameters</h2>
      <p>
        Functions can have more than one parameter. For example, let's teach our
        robot to walk a specific number of steps and also turn in a specific
        direction:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function walkAndTurn(steps, direction) {
  console.log('The robot walks ' + steps + ' steps and turns ' + direction + '.');
}

walkAndTurn(10, 'left'); // Output: The robot walks 10 steps and turns left.
walkAndTurn(5, 'right'); // Output: The robot walks 5 steps and turns right.
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>steps</code> and <code>direction</code> are
        parameters. When we call the <code>walkAndTurn</code> function, we
        provide two arguments to specify the number of steps and the direction
        the robot should turn.
      </p>

      <h2>Conclusion</h2>
      <p>
        Parameters and arguments make functions incredibly powerful. By using
        parameters, we can create flexible functions that work with different
        inputs. Arguments allow us to provide these inputs when we call the
        function.
      </p>
      <p>
        Remember, defining a function with parameters is like teaching a robot a
        trick that can take different instructions. Calling the function with
        arguments is like giving the robot specific instructions to perform the
        trick.
      </p>
      <p>
        Practice creating functions with parameters and calling them with
        different arguments to get comfortable with this essential concept in
        JavaScript!
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
      <h1>Returning Values from Functions</h1>
      <p>
        Welcome back! So far, we've learned about defining and calling
        functions, as well as using parameters and arguments. Now, let's dive
        into another important aspect of functions: returning values.
      </p>

      <h2>What Does it Mean to Return a Value?</h2>
      <p>
        Imagine you have a toy robot that can do various tricks. One of the
        tricks is to add two numbers together. After the robot adds the numbers,
        it can give you the result. This is similar to how functions can return
        values in JavaScript.
      </p>
      <p>
        In JavaScript, when a function performs a calculation or some other
        operation, it can send a result back to the place where it was called.
        This result is called the return value.
      </p>

      <h2>
        Using the <code>return</code> Statement
      </h2>
      <p>
        To return a value from a function, we use the <code>return</code>{" "}
        statement. Let's look at an example where our robot adds two numbers and
        returns the result:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the function <code>addNumbers</code> takes two
        parameters, <code>a</code> and <code>b</code>. It calculates their sum
        and returns the result using the <code>return</code> statement.
      </p>

      <h2>Why Return Values?</h2>
      <p>
        Returning values from functions makes them more useful because we can
        use the result in other parts of our code. Let's see how we can use the
        returned value:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let result = addNumbers(5, 3);
console.log(result); // Output: 8
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we call the <code>addNumbers</code> function with arguments{" "}
        <code>5</code> and <code>3</code>. The function returns the sum, which
        is <code>8</code>. We store this returned value in the variable{" "}
        <code>result</code> and print it using <code>console.log</code>.
      </p>
      <AdUnit />
      <h2>Real-World Analogy</h2>
      <p>
        Let's go back to our toy robot analogy. Imagine you have a robot that
        can measure the length of an object. You ask the robot to measure the
        length of a toy car, and the robot tells you the length is 10 cm. Here,
        the robot has performed a task (measuring) and returned a value (10 cm).
      </p>
      <p>
        In JavaScript, functions can perform tasks and return values in a
        similar way. The <code>return</code> statement allows a function to send
        a result back to where it was called.
      </p>

      <h2>Returning Different Types of Values</h2>
      <p>
        Functions can return different types of values, such as numbers,
        strings, and even other functions. Let's look at some examples:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function getGreeting(name) {
  return 'Hello, ' + name + '!';
}

function multiplyNumbers(a, b) {
  return a * b;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(getGreeting('Alice')); // Output: Hello, Alice!
console.log(multiplyNumbers(4, 7)); // Output: 28
console.log(isEven(10)); // Output: true
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In these examples, <code>getGreeting</code> returns a string,{" "}
        <code>multiplyNumbers</code> returns a number, and <code>isEven</code>{" "}
        returns a boolean value.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Returning values from functions is a powerful feature that makes our
        code more flexible and reusable. By using the <code>return</code>{" "}
        statement, we can perform operations in functions and use the results in
        other parts of our code.
      </p>
      <p>
        Remember, defining a function with a return value is like teaching a
        robot to perform a task and give you the result. Calling the function
        and using the return value allows you to use the result in different
        parts of your program.
      </p>
      <p>
        Practice creating functions that return different types of values to get
        comfortable with this essential concept in JavaScript!
      </p>

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
      <h1>Function Scope in JavaScript</h1>
      <p>
        Welcome back! We've learned how to define and call functions, use
        parameters and arguments, and return values. Now, let's dive into an
        important concept called function scope. Understanding scope is
        essential for writing effective and error-free JavaScript code.
      </p>

      <h2>What is Scope?</h2>
      <p>
        Imagine you have a toy robot that has a toolbox with different tools
        inside it. The robot can only use the tools that are inside its own
        toolbox. If it needs a tool that isn't in its toolbox, it won't be able
        to find or use it.
      </p>
      <p>
        In JavaScript, scope is similar to this toolbox. Scope determines where
        variables and functions can be accessed or used in your code. There are
        two main types of scope in JavaScript: global scope and local scope.
      </p>

      <h2>Global Scope</h2>
      <p>
        A variable declared in the global scope is like a tool that's available
        to every robot in your house. Any function or code block in your program
        can access this variable. Let's look at an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let tool = 'Wrench'; // Global scope

function fixRobot() {
  console.log('Using:', tool);
}

fixRobot(); // Output: Using: Wrench
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the variable <code>tool</code> is declared in the
        global scope. The function <code>fixRobot</code> can access and use the{" "}
        <code>tool</code> variable because it's globally available.
      </p>
      <p>
        Another way to think about global scope is to imagine a classroom where
        the teacher writes important information on the whiteboard. All students
        in the class can see and use the information on the whiteboard.
        Similarly, globally scoped variables are available to all parts of your
        program.
      </p>

      <h2>Local Scope</h2>
      <p>
        A variable declared inside a function is like a tool that's inside a
        specific robot's toolbox. Only that robot can use this tool, and it
        can't be accessed from outside the robot. These variables are said to be
        in the local scope.
      </p>
      <p>Let's look at an example of local scope:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function fixRobot() {
  let tool = 'Screwdriver'; // Local scope
  console.log('Using:', tool);
}

fixRobot(); // Output: Using: Screwdriver
console.log(tool); // Error: tool is not defined
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the variable <code>tool</code> is declared inside the{" "}
        <code>fixRobot</code> function. This means <code>tool</code> is in the
        local scope and can only be accessed within the <code>fixRobot</code>{" "}
        function. Trying to access <code>tool</code> outside the function
        results in an error because it's not available in the global scope.
      </p>
      <p>
        To continue with the classroom analogy, imagine each student has a
        personal notebook. The notes inside each student's notebook are only
        available to that student. Similarly, locally scoped variables are only
        available within the function they are declared in.
      </p>
      <AdUnit />
      <h2>Why is Scope Important?</h2>
      <p>
        Understanding scope helps you avoid errors and write cleaner code. It
        ensures that variables are only accessible where they are needed,
        preventing unexpected changes and conflicts.
      </p>
      <p>
        For instance, if you have multiple functions that use a variable with
        the same name, using local scope prevents them from interfering with
        each other. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function repairRobot() {
  let tool = 'Hammer';
  console.log('Repairing with:', tool);
}

function upgradeRobot() {
  let tool = 'Welding Torch';
  console.log('Upgrading with:', tool);
}

repairRobot(); // Output: Repairing with: Hammer
upgradeRobot(); // Output: Upgrading with: Welding Torch
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, both functions have a variable named <code>tool</code>{" "}
        in their local scope. Each function uses its own <code>tool</code>{" "}
        without any conflicts because they are scoped locally.
      </p>
      <p>
        By keeping variables within the local scope of a function, you ensure
        that changes to those variables do not affect other parts of your
        program. This makes your code more predictable and easier to debug.
      </p>

      <h2>Nested Functions and Scope</h2>
      <p>
        Sometimes, you may have functions inside other functions. This is called
        nested functions. In such cases, the inner function can access variables
        from its own scope as well as the outer function's scope.
      </p>
      <p>Let's see an example:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function outerFunction() {
  let outerTool = 'Drill';
  
  function innerFunction() {
    let innerTool = 'Pliers';
    console.log('Outer tool:', outerTool); // Can access outerTool
    console.log('Inner tool:', innerTool); // Can access innerTool
  }
  
  innerFunction();
  console.log('Outer tool:', outerTool); // Can access outerTool
  console.log('Inner tool:', innerTool); // Error: innerTool is not defined
}

outerFunction();
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>innerFunction</code> can access both{" "}
        <code>outerTool</code> and <code>innerTool</code> because it is nested
        inside <code>outerFunction</code>. However, <code>outerFunction</code>{" "}
        cannot access <code>innerTool</code> because it's only available within{" "}
        <code>innerFunction</code>'s local scope.
      </p>
      <p>
        To continue with our classroom analogy, imagine the teacher has a
        special notepad that only they can access. If the teacher writes a note
        in this notepad, only they can see and use it. However, if the teacher
        shares this note with a student, the student can also see and use it.
        Similarly, nested functions can access variables from their own scope
        and the scope of the function they are nested within.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Understanding scope is crucial for managing variables and functions
        effectively in JavaScript. Remember, variables declared globally are
        accessible everywhere, while variables declared locally are only
        accessible within their respective functions. This helps prevent
        conflicts and ensures your code runs smoothly.
      </p>
      <p>
        Keep practicing with different scenarios to get a solid grasp of scope.
        As you write more JavaScript code, understanding scope will become
        second nature!
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
      <h1>Arrow Functions in JavaScript</h1>
      <p>
        We've learned about regular functions, function parameters, and how to
        return values. Now, let's discover a simpler way to write functions in
        JavaScript called Arrow Functions. They make writing short functions
        faster and more readable, especially when working with simple tasks.
      </p>

      <h2>What Are Arrow Functions?</h2>
      <p>
        Arrow functions provide a shorter syntax to write functions. They are
        great for writing simple functions in a cleaner and more concise way.
        Think of them like a quick shortcut for writing functions. They help you
        write less code and make your code look neat.
      </p>

      <h3>Traditional Function Syntax</h3>
      <p>
        Before we dive into arrow functions, let’s look at a basic example of a
        traditional function:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function sayHello(name) {
  return 'Hello, ' + name + '!';
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the function <code>sayHello</code> takes one input,{" "}
        <code>name</code>, and returns a greeting message. We use curly braces{" "}
        <code>{}</code> to define the body of the function and the{" "}
        <code>return</code> keyword to send back the result.
      </p>

      <h3>Arrow Function Syntax</h3>
      <p>
        Now, let's see how we can write the same function using an arrow
        function:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const sayHello = name => 'Hello, ' + name + '!';
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>The syntax is shorter and more concise. Here’s what each part does:</p>
      <ul>
        <li>
          <strong>Parameters:</strong> The input parameters are listed inside
          parentheses <code>(name)</code>. If there’s only one parameter, we can
          leave out the parentheses. For example,{" "}
          <code>{`name => 'Hello, ' + name + '!'`}</code>.
        </li>
        <li>
          <strong>Arrow:</strong> The <code>{`=>`}</code> symbol separates the
          parameters from the function’s action. It indicates that we’re using
          an arrow function.
        </li>
        <li>
          <strong>Body:</strong> If the function only has a single line of code,
          we don’t need curly braces <code>{}</code> or the <code>return</code>{" "}
          keyword. The result of the single line is automatically returned.
        </li>
      </ul>
      <AdUnit />
      <h2>Arrow Functions with Curly Braces</h2>
      <p>
        Sometimes, you need to write more than one line of code in a function.
        When that happens, you need to use curly braces <code>{}</code> and
        explicitly use the <code>return</code> keyword. Here’s how you can do
        that:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the <code>multiply</code> function takes two numbers,
        multiplies them together, and then returns the result. We use curly
        braces because we have multiple lines of code: one line to perform the
        multiplication and another line to return the result.
      </p>

      <h2>Detailed Examples of Arrow Functions</h2>
      <p>
        Let’s go through a few more simple examples to see how arrow functions
        work in different scenarios:
      </p>

      <h3>Example 1: Adding Two Numbers</h3>
      <p>Here’s an arrow function that adds two numbers together:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const addNumbers = (x, y) => x + y;
console.log(addNumbers(5, 3)); // Output: 8
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes two numbers <code>x</code> and <code>y</code>, and
        returns their sum. Since this function is simple and consists of a
        single line, we don’t need curly braces or the <code>return</code>{" "}
        keyword.
      </p>

      <h3>Example 2: Greeting a User</h3>
      <p>Here’s an arrow function that creates a greeting message:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const greetUser = name => 'Welcome, ' + name + '!';
console.log(greetUser('Alice')); // Output: Welcome, Alice!
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes one input, <code>name</code>, and returns a greeting
        message that includes the name. It’s another simple example where the
        function is written in a compact form.
      </p>

      <h3>Example 3: Checking if a Number is Even</h3>
      <p>Here’s an arrow function that checks if a number is even:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const isEven = number => number % 2 === 0;
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This function takes one input, <code>number</code>, and returns{" "}
        <code>true</code> if the number is even, and <code>false</code> if it is
        not. The arrow function makes it easy to perform this check in a compact
        and readable way.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Arrow functions are a neat and simple way to write functions in
        JavaScript. They help you write less code and keep your functions clean
        and readable. Remember, if your function only has a single line of code,
        you can write it in a shorter form without curly braces and{" "}
        <code>return</code>. If you need more lines of code, use curly braces
        and <code>return</code> to ensure everything works as expected.
      </p>
      <p>
        Practice using arrow functions in your code to become more comfortable
        with them. They are a valuable tool in JavaScript and can help you write
        code that is easier to read and maintain.
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
