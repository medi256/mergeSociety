import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Class Components in React",
  description:
    "Learn about Class Components in React, including their creation, state management, lifecycle methods, and how they compare to Functional Components.",
  keywords: [
    "React",
    "Class Components",
    "State Management",
    "Lifecycle Methods",
    "Functional Components",
    "JavaScript",
    "Web Development",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/class-components",
  },
  openGraph: {
    title: "Understanding Class Components in React",
    description:
      "Explore Class Components in React and learn how they work, including state, lifecycle methods, and their role in React development.",
  },
};

const ClassComponent = () => {
  return (
    <div className="lesson-container">
      <h1>What Are Class Components?</h1>
      <p>
        Class Components are one of the two types of components in React. They
        were the main way to create components before Functional Components
        became popular with the introduction of React Hooks. Class Components
        are based on ES6 classes and are more complex compared to Functional
        Components.
      </p>
      <p>You should know about Class Components because:</p>
      <ul>
        <li>
          <strong>Legacy Code:</strong> You might come across them in older
          React codebases.
        </li>
        <li>
          <strong>Understanding React History:</strong> It helps to know how
          React components have evolved.
        </li>
      </ul>

      <h2>Creating a Class Component</h2>
      <p>Here’s how you create a basic Class Component:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My React App</h1>
      </div>
    );
  }
}

export default Welcome;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ul>
        <li>
          <strong>Importing React and Component:</strong> We start by importing
          React and Component from the 'react' library. Component is a class
          provided by React that we extend to create our own component.
        </li>
        <li>
          <strong>Creating a Class Component:</strong> We define a new class
          called <code>Welcome</code> that extends Component. This means our
          Welcome class inherits properties and methods from React's Component.
        </li>
        <li>
          <strong>The render Method:</strong> Every Class Component must have a{" "}
          <code>render</code> method. This method returns the JSX that defines
          what the component will display. In this example, it simply returns a{" "}
          <code>&lt;div&gt;</code> with a heading.
        </li>
        <li>
          <strong>Exporting the Component:</strong> We use{" "}
          <code>export default</code> to make our component available for use in
          other parts of the application.
        </li>
      </ul>

      <h2>State in Class Components</h2>
      <p>
        One of the main features of Class Components is state. State is used to
        store information that can change over time and affect how the component
        behaves or looks.
      </p>
      <p>Here’s an example of a Class Component with state:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ul>
        <li>
          <strong>Constructor Method:</strong> The constructor method is used to
          initialize the component's state. We call
          <code>super(props)</code> to ensure the parent Component class is
          properly initialized. <code>this.state</code> is used to set the
          initial state.
        </li>
        <li>
          <strong>State Object:</strong> <code>this.state</code> is an object
          where we store the component's data. In this case, we start with count
          set to 0.
        </li>
        <li>
          <strong>Updating State:</strong> We use <code>this.setState</code> to
          update the state. When <code>this.setState</code>
          is called, React re-renders the component with the new state. Here,
          the increment method increases the count by 1.
        </li>
        <li>
          <strong>Rendering State:</strong> Inside the render method, we access
          the state using <code>this.state.count</code>
          and display it in the <code>&lt;h1&gt;</code> tag. The button uses an{" "}
          <code>onClick</code> event to call the increment method when clicked.
        </li>
      </ul>

      <h2>Lifecycle Methods</h2>
      <p>
        Class Components have special methods called lifecycle methods that you
        can use to run code at specific points in a component's life. These
        methods allow you to handle things like data fetching, manual DOM
        manipulation, and cleanup.
      </p>
      <p>Here’s an example of a Class Component using a lifecycle method:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React, { Component } from 'react';

class LifecycleExample extends Component {
  componentDidMount() {
    console.log('Component has been rendered to the DOM');
  }

  render() {
    return (
      <div>
        <h1>Lifecycle Example</h1>
      </div>
    );
  }
}

export default LifecycleExample;
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Explanation:</h3>
      <ul>
        <li>
          <strong>Lifecycle Method:</strong> <code>componentDidMount</code> is a
          lifecycle method that runs after the component has been rendered to
          the DOM. It’s often used to fetch data or perform setup tasks.
        </li>
      </ul>

      <h2>Why Use Functional Components Instead?</h2>
      <p>
        Functional Components have become the preferred way to create components
        in React, thanks to their simplicity and the introduction of React
        Hooks. Hooks allow you to use state and other features without writing a
        class.
      </p>
      <ul>
        <li>
          <strong>Simplicity:</strong> They are easier to read and write.
        </li>
        <li>
          <strong>Hooks:</strong> Allow you to use state and other features
          without classes.
        </li>
        <li>
          <strong>Less Boilerplate:</strong> No need for constructor or this.
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        Class Components were the primary way to create components in React
        before Functional Components and Hooks were introduced. They use classes
        and have features like state and lifecycle methods. Although you will
        mainly work with Functional Components in modern React development,
        understanding Class Components is useful for reading and maintaining
        older code.
      </p>

      <Button whereToGo={"component-hierarchy"} />
    </div>
  );
};

export default ClassComponent;
