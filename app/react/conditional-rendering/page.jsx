import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Conditional Rendering in React - MergeSociety",
  description:
    "Discover how to implement conditional rendering in React to create dynamic user interfaces. Learn about if statements, ternary operators, logical AND, and functions for effective rendering.",
  keywords: [
    "Conditional Rendering",
    "React",
    "JavaScript",
    "Web Development",
    "UI/UX Design",
    "Ternary Operator",
    "if Statements",
    "React Components",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/conditional-rendering",
  },

  openGraph: {
    type: "article",
    title: "Conditional Rendering in React - MergeSociety",
    description:
      "Master conditional rendering techniques in React for dynamic UI development. Learn essential methods like if statements, ternary operators, and more.",
  },
};

const Conditional = () => {
  return (
    <div className="lesson-container">
      <h1>What is Conditional Rendering?</h1>
      <p>
        In React, <strong>conditional rendering</strong> means showing (or
        hiding) something on the screen based on certain conditions. For
        example, you might want to show a message like "Welcome back!" if a user
        is logged in, but show a "Please log in" message if they’re not logged
        in. It’s like making decisions in your app: "If this happens, show this;
        otherwise, show that."
      </p>

      <h2>How Conditional Rendering Works in React</h2>
      <p>
        React lets you use JavaScript logic to conditionally render things
        inside your components. This means you can use
        <strong> if</strong>, <strong> else</strong>,{" "}
        <strong> ternary operators</strong>, or even JavaScript functions to
        decide what should appear in the user interface (UI). Let’s break down
        each way of doing this.
      </p>

      <h3>1. Using if Statements</h3>
      <p>
        In JavaScript, if statements allow you to run some code only if a
        condition is true. You can use this inside a React component to decide
        what to render.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const isLoggedIn = true;  // This is the condition (true or false)

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we have a variable called <code>isLoggedIn</code> that
        holds a boolean value (either true or false). If <code>isLoggedIn</code>{" "}
        is true, React will display "Welcome back!". If <code>isLoggedIn</code>{" "}
        is false, React will display "Please log in."
      </p>

      <h3>2. Using Ternary Operator</h3>
      <p>
        Another way to do conditional rendering is with the ternary operator.
        It’s a shorthand for <code>if...else</code>. Here’s how it works:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        The ternary operator checks if <code>isLoggedIn</code> is true. If true,
        it displays "Welcome back!". If false, it displays "Please log in." This
        approach is shorter and useful for simple conditions.
      </p>

      <h3>3. Using && (Logical AND)</h3>
      <p>
        The <code>&&</code> operator renders content only when a condition is
        true, without an else case. Here’s an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const hasNewMessages = true;

  return (
    <div>
      <h1>Welcome to your dashboard</h1>
      {hasNewMessages && <p>You have new messages!</p>}
    </div>
  );
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        If <code>hasNewMessages</code> is true, it shows "You have new
        messages!". Otherwise, nothing is shown.
      </p>

      <h3>4. Using Functions for Conditional Rendering</h3>
      <p>
        You can also use functions to handle complex conditional rendering. This
        can make your code more readable:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const isLoggedIn = true;

  const renderMessage = () => {
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  };

  return (
    <div>
      {renderMessage()}
    </div>
  );
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we use a function <code>renderMessage</code> to handle the logic
        and then call it in the JSX.
      </p>

      <h3>5. Rendering Multiple Elements Based on Conditions</h3>
      <p>
        You can combine conditions to display different content. For example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const isLoggedIn = false;
  const hasMessages = true;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          {hasMessages && <p>You have new messages!</p>}
        </div>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we check two conditions: if the user is logged in and if they have
        messages. The output depends on both conditions.
      </p>

      <h3>6. Conditional Rendering with null</h3>
      <p>
        Sometimes, you don’t want to show anything when a condition is false. In
        React, you can return <code>null</code> to render nothing.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const ConditionalRenderingExample = () => {
  const showWarning = false;

  return (
    <div>
      <h1>Dashboard</h1>
      {showWarning ? <p>Warning: Something went wrong!</p> : null}
    </div>
  );
};

export default ConditionalRenderingExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        If <code>showWarning</code> is false, nothing will be displayed for that
        part of the component.
      </p>

      <h2>Why Conditional Rendering is Important</h2>
      <p>
        Conditional rendering lets you create dynamic, interactive UIs. You can
        show or hide parts of the UI, display error messages, or handle
        different states like loading or success.
      </p>

      <h2>Summary</h2>
      <p>
        Conditional rendering in React lets you control what users see based on
        specific conditions. You can use <strong>if statements</strong>, the{" "}
        <strong>ternary operator</strong>, the <strong>logical AND</strong>, or{" "}
        <strong>functions</strong> to manage what appears in your UI. These
        methods are essential for building dynamic and responsive user
        interfaces.
      </p>

      <Button whereToGo={"class-components"} />
    </div>
  );
};

export default Conditional;
