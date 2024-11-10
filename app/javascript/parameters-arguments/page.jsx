import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Function Parameters and Arguments: A Complete Guide",
  description:
    "Unleash the full potential of function parameters and arguments in JavaScript. Learn how to define functions with inputs, pass values, and create versatile code. This tutorial will help you master the art of using parameters and arguments, making your JavaScript code more dynamic and adaptable.",
  keywords: [
    "javascript",
    "functions",
    "parameters",
    "arguments",
    "javascript functions",
    "function inputs",
    "programming concepts",
    "code flexibility",
    "web development",
    "javascript tutorials",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/parameters-arguments",
  },

  openGraph: {
    title: "JavaScript Function Parameters and Arguments: The Ultimate Guide",
    description:
      "Explore the world of function parameters and arguments in JavaScript. This comprehensive tutorial will teach you how to define functions with inputs, handle multiple parameters, and create adaptable code. Take your JavaScript skills to the next level and create dynamic applications.",
  },
};

const Parameters = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"return-values"} />
    </div>
  );
};

export default Parameters;
