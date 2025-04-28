import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Controlled vs Uncontrolled Components in React: A Beginner's Guide",
  description:
    "Explore the differences between Controlled and Uncontrolled Components in React. Learn when to use each approach for form handling.",
  keywords: [
    "react controlled components",
    "react uncontrolled components",
    "form handling in react",
    "react state management",
    "controlled vs uncontrolled",
    "react forms tutorial",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/controlled-vs-uncontrolled",
  },

  openGraph: {
    title: "React Forms: Controlled vs Uncontrolled Components",
    description:
      "Dive into the world of React forms. Learn the differences between Controlled and Uncontrolled Components and when to use each.",
  },
};

const ControlledeUncrolled = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>
          Controlled vs Uncontrolled Components in React: A Beginner's Guide
        </h1>

        <p>
          Welcome back! In our previous lesson, we learned how to handle form
          input in React. Now, we're going to explore two important concepts:
          Controlled Components and Uncontrolled Components. Don't worry if
          you're not familiar with these terms yet – we'll break everything down
          step by step.
        </p>

        <h2>1. What Are Controlled Components?</h2>
        <p>
          In React, a Controlled Component is a component that controls its form
          elements using React's state. This means that React is in charge of
          managing the value of the input field. Let's look at a simple example
          to understand this better.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React, { useState } from 'react';

function ControlledForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">Controlled Input:</label>
      <input
        type="text"
        id="controlled-input"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Here's what's happening in the ControlledForm component:</p>
        <ul>
          <li>
            We use <code>useState</code> to create a state variable called{" "}
            <code>value</code> and a function <code>setValue</code> to update
            it.
          </li>
          <li>
            The <code>value</code> prop of the <code>&lt;input&gt;</code> is set
            to the <code>value</code> state variable. This means that the input
            field always displays the current value of the state.
          </li>
          <li>
            The <code>onChange</code> prop of the <code>&lt;input&gt;</code> is
            set to <code>handleChange</code>, which updates the state whenever
            the user types in the input field.
          </li>
          <li>
            When the form is submitted, <code>handleSubmit</code> logs the
            current value of the input to the console.
          </li>
        </ul>
        <p>
          In a Controlled Component, React is responsible for the input's value.
          This allows us to easily access and manipulate the input value,
          perform validation, and control the input's behavior.
        </p>

        <h2>2. What Are Uncontrolled Components?</h2>
        <p>
          Uncontrolled Components are the opposite. Instead of using React's
          state to manage the form values, Uncontrolled Components rely on the
          DOM itself to handle form inputs. This means you use a ref to access
          the input's value when you need it.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input">Uncontrolled Input:</label>
      <input
        type="text"
        id="uncontrolled-input"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Here's what's happening in the UncontrolledForm component:</p>
        <ul>
          <li>
            We use <code>useRef</code> to create a reference called{" "}
            <code>inputRef</code> that will point to the input element.
          </li>
          <li>
            The <code>ref</code> prop of the <code>&lt;input&gt;</code> is set
            to <code>inputRef</code>, which allows us to access the input
            element directly.
          </li>
          <li>
            When the form is submitted, <code>handleSubmit</code> logs the
            current value of the input by accessing{" "}
            <code>inputRef.current.value</code>.
          </li>
        </ul>
        <p>
          In an Uncontrolled Component, React does not control the input's
          value. Instead, we rely on the DOM to handle the form's state. This
          approach can be simpler for certain cases, but it offers less control
          over the input's behavior and value.
        </p>

        <h2>
          3. Key Differences Between Controlled and Uncontrolled Components
        </h2>
        <p>
          Let's summarize the main differences between Controlled and
          Uncontrolled Components:
        </p>
        <ul>
          <li>
            <strong>Control:</strong> In Controlled Components, React controls
            the input value through state. In Uncontrolled Components, the DOM
            handles the input value.
          </li>
          <li>
            <strong>Access:</strong> In Controlled Components, you access the
            input value through React's state. In Uncontrolled Components, you
            use a ref to access the input value directly from the DOM.
          </li>
          <li>
            <strong>Usage:</strong> Controlled Components are generally
            preferred for most use cases because they provide more control and
            allow for easier validation and manipulation of input values.
            Uncontrolled Components can be useful when you want to avoid the
            overhead of managing state or when working with third-party
            libraries that require direct DOM access.
          </li>
        </ul>

        <h2>4. Conclusion</h2>
        <p>
          We've explored Controlled and Uncontrolled Components in React.
          Controlled Components give you more control over form inputs by
          managing their state in React, while Uncontrolled Components rely on
          the DOM to manage the form inputs.
        </p>
        <p>
          Both approaches have their use cases, and it's essential to choose the
          right one based on your needs. Experiment with both methods and see
          which one works best for your specific scenario. In our next lesson,
          we'll dive into handling multiple form fields and form validation.
        </p>

        <Button whereToGo={"react-css-styling"} />
      </div>
    </div>
  );
};

export default ControlledeUncrolled;
