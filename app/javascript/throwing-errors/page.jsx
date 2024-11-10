import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering JavaScript Error Handling: Throw and Catch Explained",
  description:
    "Learn how to effectively throw and handle errors in JavaScript. Improve your coding skills with practical examples and best practices for error management.",
  keywords: [
    "JavaScript error handling",
    "throw errors JavaScript",
    "try catch JavaScript",
    "custom errors JavaScript",
    "JavaScript debugging",
    "error management web development",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/throwing-errors",
  },
  openGraph: {
    title: "JavaScript Error Handling Tutorial: Throw and Catch Like a Pro",
    description:
      "Master the art of throwing and catching errors in JavaScript. Boost your coding skills and create more robust applications.",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Web Development Tutorials",
};

const ThrowingError = () => {
  return (
    <div className="lesson-container">
      <h1>Throwing and Handling Errors in JavaScript</h1>

      <p>
        In the previous section, we learned how the <strong>Try/Catch</strong>{" "}
        statement helps us handle errors gracefully. Now, let’s dive deeper into
        how we can <strong>throw</strong> and <strong>handle</strong> our own
        errors in JavaScript. Throwing errors manually gives us more control
        over how and when an error should occur.
      </p>

      <h2>What Does "Throwing an Error" Mean?</h2>
      <p>
        When we say we are <strong>throwing an error</strong>, it means we are
        intentionally creating an error when something unexpected happens in our
        code. For example, if a user enters an invalid value or a condition we
        expect isn't met, we can throw an error to alert the program that
        something went wrong.
      </p>
      <p>
        JavaScript will then stop executing the code at the point where the
        error is thrown and look for a <strong>Catch</strong> block to handle
        it. This is where the Try/Catch structure comes in handy because the
        catch block can take care of what to do when that error happens.
      </p>

      <h2>How to Throw an Error</h2>
      <p>
        To throw an error in JavaScript, we use the <code>throw</code> keyword
        followed by the <code>new Error()</code> function. This creates a new
        error object with a message describing what went wrong. Here's an
        example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function checkAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative'); // Throwing an error with a custom message
  }
  return 'Valid age: ' + age;
}

try {
  console.log(checkAge(-5)); // This will throw an error because age is negative
} catch (error) {
  console.log('Error:', error.message); // Handling the error
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>checkAge</code> function checks if the age is
        a negative number. If it is, we <strong>throw</strong> an error using{" "}
        <code>throw new Error()</code> with a custom message: "Age cannot be
        negative". When this happens, the code inside the <code>try</code> block
        will stop running, and the control moves to the <code>catch</code>{" "}
        block, where the error is handled.
      </p>

      <h2>Why Throw Errors?</h2>
      <p>
        You might be wondering, why would we throw errors ourselves? Here are
        some reasons:
      </p>

      <ul>
        <li>
          <strong>Input Validation:</strong> If a user enters invalid data (like
          a negative age), you can throw an error to prevent further processing.
        </li>
        <li>
          <strong>Unexpected Conditions:</strong> If a condition that should
          never happen does occur (for example, dividing by zero), you can throw
          an error to stop the code from continuing in an unpredictable state.
        </li>
        <li>
          <strong>Debugging:</strong> Throwing custom errors with clear messages
          helps you track down problems in your code more easily.
        </li>
      </ul>

      <p>
        By throwing errors where something goes wrong, you ensure that your
        program doesn't continue running with incorrect data or in an unexpected
        state. Instead, you can handle the error and take the appropriate
        action, such as showing an error message to the user or logging the
        issue for debugging.
      </p>

      <h2>Throwing Custom Errors</h2>
      <p>
        While JavaScript provides some built-in errors (like{" "}
        <code>TypeError</code>, <code>ReferenceError</code>, etc.), you can
        throw <strong>custom errors</strong> by providing your own messages.
        This makes it easier to understand what went wrong. Here’s an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
function checkEmail(email) {
  if (!email.includes('@')) {
    throw new Error('Invalid email format'); // Custom error message for invalid email
  }
  return 'Valid email: ' + email;
}

try {
  console.log(checkEmail('invalidEmail.com')); // This will throw an error
} catch (error) {
  console.log('Error:', error.message); // Handling the error
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>checkEmail</code> function checks if the
        email contains an "@" symbol. If not, it throws a custom error: "Invalid
        email format". The <code>catch</code> block then handles that error by
        printing the error message.
      </p>

      <h2>How to Handle Errors</h2>
      <p>
        Once an error is thrown, we need to handle it in the{" "}
        <strong>Catch</strong> block. Handling errors means deciding what to do
        when something goes wrong. For example:
      </p>

      <ul>
        <li>
          <strong>Log the error:</strong> You can log the error message for
          debugging purposes.
        </li>
        <li>
          <strong>Show a user-friendly message:</strong> Instead of showing a
          technical error, you can display a message like "Please enter a valid
          email."
        </li>
        <li>
          <strong>Retry an operation:</strong> If something like a network
          request fails, you might want to try again.
        </li>
      </ul>

      <h2>Handling Errors in Try/Catch</h2>
      <p>
        Let’s see how handling errors works inside a <code>try</code> and{" "}
        <code>catch</code> block. We can use the catch block to do something
        when an error happens:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
try {
  const userInput = 'invalidEmail.com';
  console.log(checkEmail(userInput)); // Throws error
} catch (error) {
  // Handling the error
  console.log('An error occurred:', error.message);
  // You can show a user-friendly message here, like:
  console.log('Please enter a valid email address.');
}
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, if the user enters an invalid email, the{" "}
        <code>catch</code> block will log the error message and provide a
        user-friendly message like "Please enter a valid email address."
      </p>

      <h2>Important Notes About Error Handling</h2>
      <ul>
        <li>
          <strong>Don't Overuse Try/Catch:</strong> While Try/Catch is useful,
          you shouldn’t wrap every bit of code in it. Use it where errors are
          likely to occur (like user input or network requests), but avoid using
          it for every single line of code.
        </li>
        <li>
          <strong>Always Provide Helpful Error Messages:</strong> When throwing
          custom errors, make sure the messages are clear and describe what went
          wrong. This will make debugging much easier.
        </li>
        <li>
          <strong>Don’t Hide Errors:</strong> Handle errors in a way that allows
          you to understand and fix them. Don’t just suppress the error message
          without fixing the underlying issue.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        By throwing and handling errors, you gain more control over how your
        code behaves when something unexpected happens. This ensures that your
        program doesn’t break down when an error occurs, and you can take the
        appropriate action to handle it. Whether you are validating user input,
        making network requests, or debugging your code, throwing and catching
        errors is a powerful tool to make your JavaScript programs more
        reliable.
      </p>

      <Button whereToGo={"debugging"} />
    </div>
  );
};

export default ThrowingError;
