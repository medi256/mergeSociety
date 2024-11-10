import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Event Handling in Functional Components",
  description:
    "Learn how to add interactivity to your React applications by handling events in functional components. This tutorial covers the basics of event handling, with examples and practical applications, to help beginners create dynamic and interactive UIs.",
  keywords: [
    "React",
    "Functional Components",
    "Event Handling",
    "React Tutorial",
    "Interactive UI",
    "Beginner Tutorial",
    "Event Handlers",
    "React Button Click",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/functional-event-handling",
  },

  openGraph: {
    title: "Event Handling in Functional Components",
    description:
      "Learn how to add interactivity to your React applications by handling events in functional components. This tutorial covers the basics of event handling, with examples and practical applications, to help beginners create dynamic and interactive UIs.",
  },
};

const FunctionalEventHandler = () => {
  return (
    <div className="lesson-container">
      <h1>Event Handling in Functional Components: Adding Interactivity</h1>

      <p>
        Event handling in functional components is like giving them superpowers.
        It allows them to respond to user interactions such as clicks, form
        submissions, and more. Think of event handling as the secret agent that
        empowers your components to take action when users engage with your UI.
        Let's dive into the world of event handling and explore its superpowers!
      </p>

      <h2>Understanding Event Handling</h2>

      <p>
        Event handling in functional components involves defining functions,
        known as event handlers, that are called when specific events occur.
        These event handlers enable your components to react to user
        interactions and perform specific actions. Let's see how event handling
        works in functional components:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// Example event handling
function handleClick() {
  alert('Button clicked!');
}

function MyComponent() {
  return <button onClick={handleClick}>Click me!</button>;
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>handleClick</code> is an event handler function
        that displays an alert when a button is clicked. We attach the event
        handler to the button using the
        <code>onClick</code> attribute. When the button is clicked, React calls
        the
        <code>handleClick</code> function, triggering the desired action. Event
        handling brings interactivity and responsiveness to your UI.
      </p>

      <h3>Benefits of Event Handling in Functional Components</h3>

      <p>Event handling in functional components offers several advantages:</p>

      <ul>
        <li>
          <strong>Interactivity:</strong> Event handling brings your UI to life
          by allowing components to respond to user interactions. Your
          components can take action when users click buttons, submit forms, or
          perform other actions.
        </li>
        <li>
          <strong>Dynamic Behavior:</strong> Event handlers let you define
          custom actions for different events. You can handle button clicks,
          form submissions, keyboard inputs, and more. This dynamic behavior
          makes your UI interactive and engaging.
        </li>
        <li>
          <strong>Code Organization:</strong> Event handlers help you organize
          your code by separating UI rendering and event handling logic. This
          improves code readability and maintainability.
        </li>
        <li>
          <strong>Reusability:</strong> Event handlers can be reused across
          multiple components. You can define a single event handler and attach
          it to different UI elements, reducing code duplication.
        </li>
      </ul>

      <h3>Using Event Handling in Practice</h3>

      <p>
        Event handling shines when it comes to creating interactive and dynamic
        UIs. Let's see how we can use event handling in a simple example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// Define an event handler
function handleClick() {
  alert('Button clicked!');
}

function MyButton() {
  return <button onClick={handleClick}>Click me!</button>;
}

// Use the component with the event handler
function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton />
    </div>
  );
}

// Render the app
ReactDOM.render(<MyApp />, document.getElementById('root'));
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>handleClick</code> is an event handler function
        that displays an alert when a button is clicked. We attach the event
        handler to the
        <code>MyButton</code> component using the <code>onClick</code>{" "}
        attribute. When the button is clicked, React calls the{" "}
        <code>handleClick</code> function, triggering the desired action. Event
        handling empowers your components to respond to user interactions and
        create engaging UIs.
      </p>

      <h3>Note</h3>

      <p>
        Remember, event handling in functional components is like giving them
        superpowers. It enables them to react to user interactions and perform
        specific actions. As your React journey continues, event handling will
        become a crucial tool for creating dynamic and interactive UIs. Embrace
        the power of event handling to build captivating and responsive
        interfaces!
      </p>

      <Button whereToGo={"rendering-lists"} />
    </div>
  );
};

export default FunctionalEventHandler;
