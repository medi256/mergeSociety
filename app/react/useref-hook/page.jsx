import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering useRef Hook in React: A Beginner's Guide",
  description:
    "Explore the useRef Hook in React. Learn how to access DOM elements and manage mutable values without triggering re-renders.",
  keywords: [
    "react useRef",
    "useRef tutorial",
    "react dom access",
    "mutable values",
    "react hooks ref",
    "useRef example",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/useref-hook",
  },

  openGraph: {
    title: "React useRef: The Ultimate Guide to DOM Access and Mutable Values",
    description:
      "Dive into the world of React Hooks with useRef. Learn to access DOM elements and manage mutable data efficiently.",
  },
};

const UseRef = () => {
  return (
    <div className="lesson-container">
      <h1>useRef Hook in React</h1>

      <h2>What Is useRef?</h2>
      <p>
        In React, <code>useRef</code> is a special Hook that helps you
        "reference" or keep track of a DOM element or a value in your functional
        components without causing re-renders.
      </p>
      <p>But what does that mean?</p>
      <p>
        Imagine you have a magic notebook where you can write down a note and
        always refer back to it, no matter how many times you change the pages.
        In this analogy, <code>useRef</code> is like that magic notebook. It
        lets you keep a persistent note (or reference) without changing how your
        component behaves.
      </p>

      <h2>Why Do We Need useRef?</h2>
      <p>
        Before Hooks, if you wanted to access a DOM element or maintain some
        mutable value without causing re-renders, you had to use class
        components and deal with more complex code. With <code>useRef</code>,
        you can do this in functional components easily.
      </p>
      <p>
        The <code>useRef</code> Hook is useful for:
      </p>
      <ul>
        <li>Accessing a DOM element directly.</li>
        <li>
          Storing a value that doesn't need to trigger re-renders when updated.
        </li>
        <li>
          Keeping track of a previous value to compare with the current one.
        </li>
      </ul>
      <p>
        In summary, <code>useRef</code> provides a way to interact with elements
        and values directly, without affecting the component's rendering.
      </p>

      <h2>How Does useRef Work?</h2>
      <p>
        Let’s walk through how the <code>useRef</code> Hook works, step by step.
        Here’s a basic example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useRef } from 'react';

function ExampleComponent() {
// 1. Create a ref object
const inputRef = useRef(null);

const handleClick = () => {
// 2. Access the DOM element
inputRef.current.focus();
};

return (
<div>
<input ref={inputRef} type="text" />
<button onClick={handleClick}>Focus the input</button>
</div>
);
}

export default ExampleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking It Down for Beginners</h3>
      <p>Let’s break this code into smaller pieces to understand it fully:</p>

      <h4>Import useRef</h4>
      <p>
        At the top of the file, we import the <code>useRef</code> Hook from
        React. You always need to import Hooks like <code>useRef</code> before
        using them in your component.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useRef } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Create a Ref Object</h4>
      <p>
        Inside your functional component (<code>ExampleComponent</code>), you
        create something called a ref object. The <code>useRef</code> Hook helps
        you do this.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const inputRef = useRef(null);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>This line does a few important things:</p>
      <ul>
        <li>
          <code>inputRef</code>: This is the ref object. It will be used to
          store a reference to the input element. The <code>null</code> is the
          initial value of the ref object.
        </li>
        <li>
          <code>{`useRef(null)`}</code>: This tells React to create a ref object
          that starts as <code>null</code>. When the component renders, React
          will assign the ref to the DOM element you reference.
        </li>
      </ul>

      <h4>Access the DOM Element</h4>
      <p>
        Inside the <code>handleClick</code> function, we access the input
        element using <code>inputRef.current</code>. This is like using your
        magic notebook to get the note you wrote earlier.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const handleClick = () => {
inputRef.current.focus();
};`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Calling <code>inputRef.current.focus()</code> focuses the input field
        when the button is clicked.
      </p>

      <h4>Attach Ref to Element</h4>
      <p>
        We attach the ref to the input element using the <code>ref</code>{" "}
        attribute.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<input ref={inputRef} type="text" />`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        By setting <code>{`ref={inputRef}`}</code>, React links the ref object
        to this input element, allowing us to access it through{" "}
        <code>inputRef.current</code>.
      </p>

      <h2>What Does useRef Actually Do?</h2>
      <p>Let’s examine what’s happening:</p>
      <ul>
        <li>
          <strong>Initial value:</strong> When the component first loads,{" "}
          <code>{`useRef(null)`}</code> creates a ref object with an initial
          value of <code>null</code>.
        </li>
        <li>
          <strong>Accessing elements:</strong> Once the component renders, React
          assigns the ref object to the DOM element. You can then use
          <code>inputRef.current</code> to interact with the element.
        </li>
        <li>
          <strong>Stable reference:</strong> The ref object doesn’t change
          between renders. It always points to the same DOM element or value.
        </li>
      </ul>
      <p>
        This is how <code>useRef</code> helps you keep track of elements or
        values without causing unnecessary re-renders.
      </p>

      <h2>Important Things to Know About useRef</h2>
      <ul>
        <li>
          <strong>Ref is not for re-rendering:</strong> Changing the ref value
          does not cause your component to re-render. It’s purely for accessing
          elements or storing values without affecting the UI.
        </li>
        <li>
          <strong>Ref object persists:</strong> The ref object persists for the
          full lifetime of the component. It doesn’t get reset on re-renders.
        </li>
        <li>
          <strong>Use with caution:</strong> Use refs only when you need to
          interact with the DOM directly or store a mutable value. For other
          state needs, prefer using <code>useState</code>.
        </li>
      </ul>

      <h2>More Real-Life Examples</h2>
      <p>
        Here are some examples of how you might use <code>useRef</code> in
        real-life scenarios:
      </p>

      <h3>Accessing a DOM Element</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const inputRef = useRef(null);

<input ref={inputRef} type="text" />
<button onClick={() => inputRef.current.focus()}>Focus Input</button>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>inputRef</code> holds a reference to the input element, allowing
        you to focus it programmatically.
      </p>

      <h3>Storing Mutable Values</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const countRef = useRef(0);

const increment = () => {
countRef.current += 1;
console.log(countRef.current);
};`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>countRef</code> keeps track of a count value that can be updated
        without causing re-renders.
      </p>
      <Button whereToGo={"usecontext-hook"} />
    </div>
  );
};

export default UseRef;
