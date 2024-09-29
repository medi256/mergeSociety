import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering useEffect Hook in React: A Comprehensive Guide",
  description:
    "Explore the useEffect Hook in React. Learn how to handle side effects, fetch data, and manage component lifecycle with ease.",
  keywords: [
    "react useEffect",
    "useEffect tutorial",
    "react side effects",
    "component lifecycle",
    "fetching data",
    "react hooks effects",
  ],
  openGraph: {
    title: "React useEffect: The Ultimate Guide to Side Effects",
    description:
      "Dive into the world of React Hooks with useEffect. Learn to manage component lifecycle, fetch data, and more.",
  },
};

const UseEffect = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Understanding the useEffect Hook in React</h1>

      <h2>What Is useEffect?</h2>
      <p>
        The <code>useEffect</code> Hook in React lets you perform{" "}
        <strong>side effects</strong> in your functional components. Side
        effects are operations that occur in your component but don't directly
        involve rendering the UI. Examples of side effects include:
      </p>
      <ul>
        <li>Fetching data from an API.</li>
        <li>Setting up a timer.</li>
        <li>Updating the document title.</li>
      </ul>
      <p>
        Before Hooks, these tasks were handled in class components using
        lifecycle methods. With <code>useEffect</code>, you can manage side
        effects in functional components more easily and directly.
      </p>

      <h2>Why Do We Need useEffect?</h2>
      <p>
        Imagine you have a component that needs to fetch user data from an API
        when it first appears on the screen. In class components, you’d use the{" "}
        <code>componentDidMount</code> lifecycle method for this task. With
        functional components, <code>useEffect</code> provides a more
        straightforward way to perform this operation.
      </p>

      <h2>Basic Usage of useEffect</h2>
      <p>
        Here's a step-by-step example of using <code>useEffect</code>:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState, useEffect } from 'react';

function SimpleEffectComponent() {
// 1. State to store a message
const [message, setMessage] = useState('Hello, world!');

// 2. useEffect to run code when the component mounts
useEffect(() => {
console.log('Component has mounted!');
}, []); // Empty array means this runs only once when the component mounts

return (
<div>
<h1>{message}</h1>
</div>
);
}

export default SimpleEffectComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking Down the Example</h3>
      <AdUnit />
      <h4>Importing useEffect</h4>
      <p>
        You need to import <code>useEffect</code> from the React library, along
        with <code>useState</code>.
      </p>
      <pre>
        <code>
          {" "}
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState, useEffect } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Creating State</h4>
      <p>
        We use the <code>useState</code> Hook to create a state variable{" "}
        <code>message</code> with an initial value of 'Hello, world!'.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [message, setMessage] = useState('Hello, world!');`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>message</code>: This state variable stores the message to display.
        <br />
        <code>setMessage</code>: This function updates the state of{" "}
        <code>message</code>.
      </p>

      <h4>Using useEffect</h4>
      <p>
        The <code>useEffect</code> Hook lets us run code when the component
        mounts (i.e., when it appears on the screen).
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`useEffect(() => {
console.log('Component has mounted!');
}, []);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        The first argument is a function containing the code to run. In this
        example, it logs 'Component has mounted!' to the console.
        <br />
        The second argument is an array of dependencies. An empty array{" "}
        <code>[]</code> means the effect runs only once after the component
        mounts, similar to <code>componentDidMount</code> in class components.
      </p>

      <h4>Rendering Output</h4>
      <p>
        The component displays the <code>message</code> state inside an{" "}
        <code>&lt;h1&gt;</code> tag.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`return (
<div>
<h1>{message}</h1>
</div>
);`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>More Detailed Examples</h2>

      <h3>Updating the Document Title</h3>
      <p>
        Here’s how to update the document title whenever the component mounts:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useEffect } from 'react';

function UpdateTitleComponent() {
useEffect(() => {
document.title = 'New Title';
}, []); // Runs only once when the component mounts

return (
<div>
<h1>Check the document title!</h1>
</div>
);
}

export default UpdateTitleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>document.title</code>: This changes the title of the browser tab.
        When the component mounts, the document title updates to 'New Title'.
      </p>
      <AdUnit />
      <h3>Setting Up a Timer</h3>
      <p>
        You can use <code>useEffect</code> to set up a timer that performs an
        action at regular intervals:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useEffect } from 'react';

function TimerComponent() {
useEffect(() => {
const timer = setInterval(() => {
console.log('Tick');
}, 1000); // Runs every second

// Cleanup function
return () => clearInterval(timer);
}, []); // Runs only once when the component mounts

return (
<div>
<h1>Check the console for "Tick" messages!</h1>
</div>
);
}

export default TimerComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>setInterval</code>: Sets up a timer that logs 'Tick' every second.
        <br />
        Cleanup function: The function returned from <code>useEffect</code>{" "}
        clears the timer when the component unmounts or before the effect runs
        again.
      </p>

      <h2>Key Points to Remember</h2>
      <ul>
        <li>
          <strong>useEffect Runs on Mount and Update:</strong> By default,{" "}
          <code>useEffect</code> runs after the component mounts. You can
          control its behavior using the dependencies array.
        </li>
        <li>
          <strong>Dependencies Array:</strong>
          <ul>
            <li>
              An empty array <code>[]</code> means the effect runs only once
              after the component mounts.
            </li>
            <li>
              If you include variables in the array, the effect will run
              whenever those variables change.
            </li>
          </ul>
        </li>
        <li>
          <strong>Cleanup Function:</strong> If your effect sets up something
          like a timer or subscription, provide a cleanup function to remove or
          clear those resources when the component unmounts.
        </li>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`useEffect(() => {
const timer = setInterval(() => {
console.log('Tick');
}, 1000);

return () => clearInterval(timer); // Cleanup function
}, []);`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <li>
          <strong>Multiple Effects:</strong> You can use <code>useEffect</code>{" "}
          multiple times in the same component to handle different side effects.
        </li>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`useEffect(() => {
// Effect for fetching data
}, []);

useEffect(() => {
// Effect for setting up a subscription
}, [subscriptionData]);`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </ul>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        The <code>useEffect</code> Hook is a powerful tool for managing side
        effects in React functional components. It simplifies tasks like
        fetching data, updating the document title, and setting up timers.
        Understanding <code>useEffect</code> allows you to manage these
        operations effectively without needing class components.
      </p>
      <p>
        In the next lesson, we’ll explore <code>useContext</code>, which helps
        you share and manage data across your React app more easily.
      </p>
      <Button whereToGo={"useref-hook"} />
    </div>
  );
};

export default UseEffect;
