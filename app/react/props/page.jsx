import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "What Are Props in React? - MergeSociety",
  description:
    "Learn about props in React, how to pass data between components, and their importance in building reusable and customizable applications. Explore examples, default props, and the differences between props and state.",
  keywords:
    "React, props, components, web development, programming, JavaScript, reusable components, default props, state",
  alternates: {
    canonical: "https://www.mergesociety.com/react/props",
  },
  openGraph: {
    title: "What Are Props in React? - MergeSociety",
    description:
      "Discover how to use props in React for effective component communication and customization. Enhance your React skills with our comprehensive lesson.",
  },
};

const Props = () => {
  return (
    <div className="lesson-container">
      <h1>What Are Props in React?</h1>
      <p>
        In React, <strong>props</strong> (short for "properties") are used to
        pass data from one component to another. Think of props like arguments
        you pass to a function in JavaScript, but in this case, you’re passing
        data to a React component. The component can then use the data provided
        via props to display dynamic content or perform specific actions.
      </p>
      <p>
        Props make components reusable and customizable, which is a powerful
        feature in React. Without props, each component would be static and
        unable to adapt to different situations. By using props, we can pass
        different data to the same component, and it will react accordingly (pun
        intended!). This way, we avoid duplicating code and can create flexible,
        scalable applications.
      </p>

      <h2>How Do Props Work?</h2>
      <p>
        When you create a React component, you can pass props to it by adding
        attributes in the component's tag. The props are received in the
        component as an object. Inside the component, you can access the props
        by using
        <code>props.propName</code>.
      </p>

      <h2>Why Use Props?</h2>
      <p>There are several reasons why props are important in React:</p>
      <ul>
        <li>
          <strong>Reusable Components:</strong> With props, you can create a
          single component and use it in different places, passing different
          values each time. This makes your code more efficient and prevents
          repetition.
        </li>
        <li>
          <strong>Data Flow:</strong> Props allow components to communicate.
          Specifically, they allow parent components to pass data down to child
          components, which is essential for structuring complex applications.
        </li>
        <li>
          <strong>Customization:</strong> You can use props to customize how a
          component behaves and what content it displays. This helps to build
          dynamic and interactive applications.
        </li>
      </ul>

      <h2>Example of Props</h2>
      <p>
        Let’s break down a simple example. Imagine you have a component that
        greets users by name. Instead of hard-coding the name, you can pass it
        as a prop, making the component more flexible.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// A simple Greeting component that takes a 'name' prop
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// App component where we pass different names as props
const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>
          <strong>Greeting Component:</strong> This component accepts a prop
          called <code>name</code>. It uses the <code>{"{props.name}"}</code>{" "}
          syntax to display the name passed from the parent component. This
          allows the component to be reusable for different names.
        </li>
        <li>
          <strong>App Component:</strong> In the <code>App</code> component, we
          use the <code>Greeting</code> component twice, passing a different{" "}
          <code>name</code> prop each time. In one case, we pass "Alice", and in
          another, we pass "Bob". This results in two personalized greetings
          being displayed.
        </li>
      </ul>

      <h2>Why Are Props Read-Only?</h2>
      <p>
        It’s important to understand that <strong>props are read-only</strong>.
        This means that a component receiving props cannot modify them. The
        reason for this is to maintain a one-way data flow in React, which is a
        core principle of the framework.
      </p>
      <p>
        Data flows from the parent component to the child component, and the
        child component can use the props to display content but cannot alter
        them. If the child could change the props, it would create unpredictable
        behavior, making it difficult to understand how data is being managed.
      </p>

      <h2>Default Props</h2>
      <p>
        Sometimes, you may want to provide a default value for a prop in case
        the parent component doesn't pass anything. This is where{" "}
        <strong>default props</strong> come in handy. Default props allow you to
        set a fallback value that will be used if no value is provided for that
        prop.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// Greeting component with a default prop value
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Setting a default value for the 'name' prop
Greeting.defaultProps = {
  name: 'Guest',
};

const App = () => {
  return (
    <div>
      <Greeting /> {/* Will use default prop value 'Guest' */}
      <Greeting name="Alice" /> {/* Will use passed value 'Alice' */}
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the example above, if no <code>name</code> prop is passed to the{" "}
        <code>Greeting</code> component, it will default to "Guest". This makes
        the component more robust and prevents errors if a prop is accidentally
        omitted.
      </p>

      <h2>Props vs. State</h2>
      <p>
        While props are essential for passing data between components, they’re
        not the same as <strong>state</strong>. Here’s the difference:
      </p>
      <ul>
        <li>
          <strong>Props:</strong> Props are passed from a parent component to a
          child component and are <strong>read-only</strong>. They cannot be
          changed by the child component.
        </li>
        <li>
          <strong>State:</strong> State is used to manage data that belongs to
          the component itself and can change over time. When state changes, the
          component re-renders to reflect the new state.
        </li>
      </ul>

      <h2>Passing Functions as Props</h2>
      <p>
        Props aren’t limited to just data like strings or numbers. You can also
        pass functions as props, which is useful when you want to allow a child
        component to trigger actions or communicate back to the parent
        component.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// Button component that takes a function as a prop
const Button = (props) => {
  return <button onClick={props.handleClick}>Click Me</button>;
};

// App component that passes a function as a prop
const App = () => {
  const showMessage = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button handleClick={showMessage} />
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>Button</code> component receives a function
        as a prop (called <code>handleClick</code>). When the button is clicked,
        it calls this function, which triggers an alert. This shows how you can
        pass functions as props to allow child components to interact with their
        parent components.
      </p>

      <h2>Summary</h2>
      <p>Let’s recap what we’ve learned about props:</p>
      <ul>
        <li>
          Props are a way to pass data from a parent component to a child
          component.
        </li>
        <li>
          Props are read-only, meaning they cannot be modified by the child
          component.
        </li>
        <li>
          Props allow components to be flexible, reusable, and customizable.
        </li>
        <li>
          You can set default props in case a value is not passed by the parent
          component.
        </li>
        <li>
          Props can be any type of data, including strings, numbers, arrays,
          objects, and even functions.
        </li>
        <li>
          Props are different from state, which is local to the component and
          can change over time.
        </li>
      </ul>

      <Button whereToGo={"event-handlers"} />
    </div>
  );
};

export default Props;
