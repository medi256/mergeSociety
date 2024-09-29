import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering useState Hook in React: A Beginner's Guide",
  description:
    "Explore the power of useState Hook in React. Learn how to manage state in functional components, making your apps more interactive and dynamic.",
  keywords: [
    "react useState",
    "useState tutorial",
    "react state management",
    "functional components state",
    "react hooks state",
    "useState example",
  ],
  openGraph: {
    title: "React useState: The Ultimate Beginner's Guide",
    description:
      "Dive into the world of React Hooks with useState. Learn to build engaging apps with dynamic state management.",
  },
};

const UseState = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>useState Hook in React</h1>

      <h2>What Is useState?</h2>
      <p>
        In React, <code>useState</code> is a special Hook that lets you add
        something called <strong>state</strong> to your functional components.
      </p>
      <p>But what exactly is state?</p>
      <p>
        Think of state as a way for your component to "remember" things. For
        example, imagine you’re building a simple counter app. The counter’s
        number will change every time you click a button. This number is your
        component's state because it keeps changing, but the component needs to
        "remember" the latest value.
      </p>
      <p>
        Without state, your component would forget the number each time it
        re-renders, and it would be stuck showing the same value.
      </p>
      <p>
        The <code>useState</code> Hook lets your component remember and update
        values over time.
      </p>

      <h2>Why Do We Need useState?</h2>
      <p>
        Before we had Hooks, we could only add state in class components. If you
        wanted a button to update a number, or a form to store user input, you’d
        have to write more complicated code using classes. But with{" "}
        <code>useState</code>, you can do this directly in functional
        components, making it much simpler.
      </p>
      <p>
        The <code>useState</code> Hook makes functional components more powerful
        by allowing them to keep track of changing values, such as:
      </p>
      <ul>
        <li>A counter that increases when a button is clicked.</li>
        <li>Text that a user types into an input field.</li>
        <li>Whether something is open or closed, like a dropdown menu.</li>
      </ul>
      <p>
        In short, <code>useState</code> is the easiest way to handle changing
        data in a React app.
      </p>

      <h2>How Does useState Work?</h2>
      <p>
        Let’s walk through how the <code>useState</code> Hook works, step by
        step. Here’s how you use it in a functional component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState } from 'react';

function ExampleComponent() {
// 1. Create a state variable and a function to update it
const [count, setCount] = useState(0);

return (
<div>
<p>The current count is: {count}</p>
<button onClick={() => setCount(count + 1)}>Increase Count</button>
</div>
);
}

export default ExampleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking It Down for Beginners</h3>
      <p>
        Let's break this code into smaller pieces so you can fully understand
        what's happening:
      </p>

      <h4>Import useState</h4>
      <p>
        First, at the top of the file, we import the <code>useState</code> Hook
        from React. You always need to import Hooks like <code>useState</code>{" "}
        before you use them in your component.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Create State Variables</h4>
      <p>
        Inside your functional component (<code>ExampleComponent</code>), you
        create something called a state variable. The <code>useState</code> Hook
        helps you do this.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [count, setCount] = useState(0);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>This line does a few important things:</p>
      <ul>
        <li>
          <code>count</code>: This is the state variable. It stores the current
          value of the counter, which starts at 0. Every time the state changes,
          React will remember the new value.
        </li>
        <li>
          <code>setCount</code>: This is the function that we use to update the
          value of <code>count</code>. Whenever you want to change the counter’s
          value, you call <code>setCount</code>.
        </li>
        <li>
          <code>useState(0)</code>: This tells React that <code>count</code>{" "}
          should start at 0. The 0 inside <code>useState()</code> is the initial
          state, meaning the first value that <code>count</code> will have when
          the component loads.
        </li>
      </ul>
      <AdUnit />
      <h4>Display the State Value</h4>
      <p>
        Inside the return part of the component, we show the current value of{" "}
        <code>count</code> using curly braces <code>{`{count}`}</code>. This
        tells React to display the value of <code>count</code> on the screen.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<p>The current count is: {count}</p>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Update the State</h4>
      <p>
        We also create a button that, when clicked, will increase the count by
        1. The button uses the <code>onClick</code> event to call the{" "}
        <code>setCount</code> function, updating the state.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<button onClick={() => setCount(count + 1)}>Increase Count</button>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Every time you click the button, <code>setCount(count + 1)</code> will
        update <code>count</code> by adding 1 to the current value. React will
        then re-render the component to show the new value of <code>count</code>{" "}
        on the screen.
      </p>

      <h2>What Does useState Actually Do?</h2>
      <p>Let’s take a closer look at what’s happening:</p>
      <ul>
        <li>
          <strong>Initial state:</strong> When the component first loads,{" "}
          <code>useState(0)</code> gives the <code>count</code> variable its
          initial value, which is 0 in this case.
        </li>
        <li>
          <strong>State changes:</strong> Each time you click the button, the{" "}
          <code>setCount</code> function updates the state. React then updates
          the component with the new value.
        </li>
        <li>
          <strong>Re-rendering:</strong> Whenever the state changes, React
          automatically re-renders the component to show the updated value of{" "}
          <code>count</code>.
        </li>
      </ul>
      <p>
        This is how your component "remembers" things like the number of times a
        button has been clicked — through state.
      </p>

      <h2>Important Things to Know About useState</h2>
      <ul>
        <li>
          <strong>State is only remembered inside the component:</strong> The
          state created with <code>useState</code> only exists in the component
          where you declare it. Each component can have its own state that
          doesn’t interfere with other components.
        </li>
        <li>
          <strong>State triggers re-rendering:</strong> Anytime you use the
          function from <code>useState</code> (like <code>setCount</code>),
          React will update the component with the new value and re-render it on
          the screen.
        </li>
        <li>
          <strong>State can be any type:</strong> The value in{" "}
          <code>useState</code> doesn’t have to be just a number. You can use{" "}
          <code>useState</code> with strings, booleans, objects, arrays —
          anything that can change over time.
        </li>
      </ul>

      <h2>More Real-Life Examples</h2>
      <p>
        Here are some examples of how you might use <code>useState</code> in
        real-life situations:
      </p>

      <h3>Tracking Form Input</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [name, setName] = useState('');

<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<p>Your name is: {name}</p>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>name</code> is the state that stores the user’s input.
        <br />
        <code>setName</code> updates the state every time the user types
        something new in the input field.
      </p>
      <AdUnit />
      <h3>Toggling Visibility</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
{isOpen ? 'Close Menu' : 'Open Menu'}
</button>
{isOpen && <div>This is the menu!</div>}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>isOpen</code> is the state that keeps track of whether the menu is
        open.
        <br />
        <code>setIsOpen</code> toggles the state between true and false whenever
        the button is clicked.
      </p>

      <h2>Conclusion: useState Makes Functional Components Powerful</h2>
      <p>To wrap up:</p>
      <ul>
        <li>
          <code>useState</code> lets your component "remember" and update values
          (like a counter or form input) over time.
        </li>
        <li>It’s an easy way to add state to your functional components.</li>
        <li>
          Using <code>useState</code>, you can build interactive apps that
          change based on what users do.
        </li>
      </ul>
      <p>
        In the next lesson, we’ll look at another important Hook:{" "}
        <code>useEffect</code>, which lets you handle side effects like fetching
        data or setting up timers when your component renders.
      </p>

      <Button whereToGo={"useeffect-hook"} />
    </div>
  );
};

export default UseState;
