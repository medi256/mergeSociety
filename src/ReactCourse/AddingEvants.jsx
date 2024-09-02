import SyntaxHighlighter from "react-syntax-highlighter";
import AdUnit from "../AdUnit";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AddingEvants = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>
        Adding Event Handlers in React: Interactivity and User Interactions
      </h2>
      <p>
        {`Event handlers are like the secret agents of React components, allowing
        them to respond to user interactions such as clicks, keyboard inputs,
        and form submissions. They empower your components to take action when
        users engage with your UI. Let's dive into the world of event handlers
        and explore their superpowers!`}
      </p>
      <h3>Understanding Event Handlers</h3>
      <p>
        Event handlers are functions that are called when a specific event
        occurs, such as a button click or a form submission. They enable your
        components to react to user interactions and perform specific actions in
        response. Event handlers can be attached to UI elements using special
        attributes, such as <code>onClick</code> for button clicks or{" "}
        <code>onChange</code> for input changes.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="react" style={docco}>
            {`
    // Example event handler
    function handleClick() {
      alert('Button clicked!');
    }

    function MyComponent() {
      return <button onClick={handleClick}>Click me!</button>;
    }

    // Render the component
    ReactDOM.render(<MyComponent />, document.getElementById('root'));
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>handleClick</code> is an event handler function
        that displays an alert when a button is clicked. We attach the event
        handler to the button using the <code>onClick</code> attribute. When the
        button is clicked, React calls the <code>handleClick</code> function,
        triggering the desired action.
      </p>
      <h3>Benefits of Using Event Handlers</h3>
      <p>
        Event handlers offer several advantages that make them essential in
        React:
      </p>
      <ul>
        <li>
          <strong>Interactivity:</strong> Event handlers bring your UI to life
          by allowing components to respond to user interactions. They enable
          your components to take action when users engage with them.
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
      <AdUnit />
      <h3>Using Event Handlers in Practice</h3>
      <p>
        {`Event handlers shine when it comes to creating interactive and dynamic
        UIs. Let's see how we can use event handlers in a practical example:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="react" style={docco}>
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
        handler to the <code>MyButton</code> component using the{" "}
        <code>onClick</code> attribute. When the button is clicked, React calls
        the <code>handleClick</code> function, triggering the desired action.
        Event handlers bring interactivity and responsiveness to your UI.
      </p>
      <h3>Note</h3>
      <p>
        Remember, event handlers are like the secret agents of React components,
        enabling them to respond to user interactions. They empower your
        components to take action and perform specific tasks when users engage
        with your UI. As your React applications grow, event handlers will
        become essential for creating dynamic and interactive UIs. Embrace the
        power of event handlers to build engaging and responsive interfaces!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/Props")}>back</button>
        <button onClick={() => (window.location.href = "/differentTypes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AddingEvants;

export const EventFuncVsClass = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Event Handling in Functional Components: Adding Interactivity</h2>

      <p>
        {`Event handling in functional components is like giving them superpowers.
        It allows them to respond to user interactions such as clicks, form
        submissions, and more. Think of event handling as the secret agent that
        empowers your components to take action when users engage with your UI.
        Let's dive into the world of event handling and explore its superpowers!`}
      </p>

      <h3>Understanding Event Handling</h3>

      <p>
        {`Event handling in functional components involves defining functions,
        known as event handlers, that are called when specific events occur.
        These event handlers enable your components to react to user
        interactions and perform specific actions. Let's see how event handling
        works in functional components:`}
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="react" style={docco}>
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
      <AdUnit />
      <h3>Using Event Handling in Practice</h3>

      <p>
        {`Event handling shines when it comes to creating interactive and dynamic
        UIs. Let's see how we can use event handling in a simple example:`}
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="react" style={docco}>
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
      <div className="button-container">
        <button onClick={() => (window.location.href = "/eventHdle")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/list")}>Next</button>
      </div>
    </div>
  );
};
