import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Conditional Statements: A Comprehensive Guide",
  description:
    "Master the art of controlling your JavaScript code with conditional statements. This beginner-friendly guide will teach you how to use if/else, else if, and switch statements to make your code dynamic and responsive. Learn how to handle different scenarios and conditions with ease, making your applications more interactive and user-friendly.",
  keywords: [
    "javascript",
    "javascript conditional statements",
    "if else statements",
    "else if statements",
    "switch statements",
    "javascript conditions",
    "javascript control flow",
    "javascript programming",
    "javascript tutorials",
  ],
  openGraph: {
    title: "JavaScript Conditional Statements: The Ultimate Guide",
    description:
      "Dive into the world of JavaScript conditionals and learn how to make your code adapt to different scenarios. This comprehensive guide will empower you to create dynamic and responsive applications, ensuring a smooth user experience for your audience.",
  },
};

export const dynamic = "force-static";
export const revalidate = 36000;

const Conditoional = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>JavaScript Conditional Statements</h1>

      <h2>Introduction</h2>
      <p>
        Welcome, everyone! Today, we're diving into conditional statements in
        JavaScript. These statements allow our programs to make decisions based
        on specific conditions we define.
      </p>
      <p>
        Think of a conditional statement like making decisions in real life. You
        decide what to wear based on the weather, right? Similarly, JavaScript
        uses conditional statements to change how our code behaves depending on
        different situations.
      </p>

      <h2>Understanding Conditions</h2>
      <p>
        In JavaScript, conditions are checks that evaluate to either true or
        false. We use comparison operators to compare values and create these
        conditions. Here are some common ones:
      </p>
      <ul>
        <li>
          <code>===</code>: Checks if two values are exactly the same
        </li>
        <li>
          <code>!==</code>: Checks if two values are not exactly the same
        </li>
        <li>
          <code>&gt;</code>: Checks if the value on the left is greater than the
          value on the right
        </li>
        <li>
          <code>&lt;</code>: Checks if the value on the left is less than the
          value on the right
        </li>
        <li>
          <code>&gt;=</code>: Checks if the value on the left is greater than or
          equal to the value on the right
        </li>
        <li>
          <code>&lt;=</code>: Checks if the value on the left is less than or
          equal to the value on the right
        </li>
      </ul>
      <p>
        These operators help us create conditions that tell our code what to do
        based on different inputs and situations.
      </p>

      <h2>if/else Statements</h2>
      <p>
        The <code>if</code> statement is basic but powerful in JavaScript. It
        allows us to execute a block of code only if a specified condition is
        true. If the condition is false, the code block is skipped.
      </p>
      <p>Here's how an if/else statement works:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
if (condition) {
// Code to execute if the condition is true
} else {
// Code to execute if the condition is false
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Let's consider a real-world example: determining if a user is old enough
        to vote.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let age = 18;

if (age >= 18) {
console.log('You are eligible to vote.');
} else {
console.log('You are not eligible to vote yet.');
}
// Output: You are eligible to vote.
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, if the variable <code>age</code> is 18 or older, the
        message "You are eligible to vote." is displayed. If not, the message
        "You are not eligible to vote yet." is displayed.
      </p>

      <h2>else if Statements</h2>
      <p>
        Sometimes, you need to check multiple conditions. The{" "}
        <code>else if</code> statement allows you to specify a new condition if
        the previous condition is false, creating a chain of conditions.
      </p>
      <p>Here's how an if/else if/else statement looks:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
if (condition1) {
// Code to execute if condition1 is true
} else if (condition2) {
// Code to execute if condition1 is false and condition2 is true
} else {
// Code to execute if both condition1 and condition2 are false
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Let's apply this to another real-world example: classifying a number as
        positive, negative, or zero.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let number = 5;

if (number > 0) {
console.log('The number is positive.');
} else if (number < 0) {
console.log('The number is negative.');
} else {
console.log('The number is zero.');
}
// Output: The number is positive.
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this case, depending on the value of <code>number</code>, one of the
        messages "The number is positive.", "The number is negative.", or "The
        number is zero." will be displayed.
      </p>
      <AdUnit />
      <h2>switch Statements</h2>
      <p>
        The <code>switch</code> statement provides another way to handle
        multiple conditions in JavaScript. It's useful when you have a variable
        or expression that can have different values, and you want to execute
        different blocks of code based on those values.
      </p>
      <p>Here's how a switch statement works:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
switch (expression) {
case value1:
// Code to execute if expression equals value1
break;
case value2:
// Code to execute if expression equals value2
break;
default:
// Code to execute if none of the cases match
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        The <code>switch</code> statement evaluates the <code>expression</code>{" "}
        and executes the code block associated with the first matching{" "}
        <code>case</code>. If no matches are found, it executes the code in the{" "}
        <code>default</code> block.
      </p>
      <p>
        Let's illustrate this with an example: displaying a message based on the
        day of the week.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let day = 'Monday';

switch (day) {
case 'Monday':
console.log('Start of the work week.');
break;
case 'Wednesday':
console.log('Midweek day.');
break;
case 'Friday':
console.log('End of the work week.');
break;
default:
console.log('Regular day.');
}
// Output: Start of the work week.
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, the switch statement evaluates the variable{" "}
        <code>day</code> and prints a message based on its value. Since{" "}
        <code>day</code> is set to <code>'Monday'</code>, the message "Start of
        the work week." is printed.
      </p>
      <p>
        The <code>switch</code> statement is particularly useful when you have
        multiple conditions to check against a single value. It's more concise
        and readable than chaining multiple <code>if</code> and{" "}
        <code>else if</code> statements.
      </p>

      <h2>In-Depth Explanation of switch Statements</h2>
      <p>
        The <code>switch</code> statement is particularly useful when you have
        multiple conditions to check against a single value. It's more concise
        and readable than chaining multiple <code>if</code> and{" "}
        <code>else if</code> statements.
      </p>
      <p>Let's break down the switch statement in more detail:</p>
      <ul>
        <li>
          <b>switch (expression):</b> This is the main part of the switch
          statement. It evaluates the <code>expression</code> and compares it to
          the values in the <code>case</code> statements.
        </li>
        <li>
          <b>case value1:</b> This is the first case in the switch statement. If
          the evaluated <code>expression</code> matches the <code>value1</code>,
          the code block below it is executed.
        </li>
        <li>
          <b>break;</b> This statement is used to break out of the switch
          statement. If the <code>expression</code> matches a <code>case</code>,
          the code below it is executed until a <code>break</code> statement is
          encountered. This prevents the code from falling through to the next
          case.
        </li>
        <li>
          <b>default:</b> This is an optional part of the switch statement. If
          the evaluated <code>expression</code> doesn't match any of the{" "}
          <code>case</code> values, the code block below the{" "}
          <code>default</code> statement is executed.
        </li>
      </ul>
      <p>
        Remember to always include a <code>break</code> statement after the code
        block of each <code>case</code> to prevent the code from falling through
        to the next case.
      </p>

      <h2>Additional Examples of switch Statements</h2>
      <p>Let's explore some more examples using the switch statement:</p>
      <ul>
        <li>
          <b>Grade Calculation:</b> Calculate a student's grade based on their
          exam score.
        </li>
        <li>
          <b>Color Determination:</b> Determine the color of an object based on
          its RGB values.
        </li>
        <li>
          <b>Menu Selection:</b> Display different menu options based on a
          user's role or preference.
        </li>
      </ul>
      <p>
        These examples showcase the versatility and usefulness of the switch
        statement in real-world scenarios.
      </p>
      <AdUnit />
      <h2>Real-World Examples</h2>
      <p>
        Let's explore some practical uses of conditional statements in
        real-world scenarios:
      </p>
      <ul>
        <li>
          <b>Form Validation:</b> Use conditional statements to check if all
          required fields in a form are filled out before submission.
        </li>
        <li>
          <b>Website Navigation:</b> Conditionally display different content or
          navigation options based on user roles or preferences.
        </li>
        <li>
          <b>Game Development:</b> Implement game logic using conditional
          statements to handle different game states, such as checking for wins
          or losses.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Conditional statements (<code>if/else</code>, <code>else if</code>,{" "}
        <code>switch</code>) are essential tools in JavaScript that help us
        create dynamic and responsive applications. They allow us to control the
        flow of our programs based on various conditions.
      </p>
      <p>
        Practice using these statements in your own projects to become more
        familiar with their usage. Experiment with different conditions and see
        how they affect the behavior of your code. The more you practice, the
        more comfortable you'll become with JavaScript's conditional statements.
      </p>

      <Button whereToGo={"loops"} />
    </div>
  );
};

export default Conditoional;
