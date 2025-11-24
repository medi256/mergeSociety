import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Component Hierarchy in React",
  description:
    "Explore the concept of Component Hierarchy in React, including parent and child components, nesting, and the importance of props and state management in building scalable applications.",
  keywords: [
    "React",
    "Component Hierarchy",
    "Nesting Components",
    "Props",
    "State Management",
    "Web Development",
    "JavaScript",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/component-hierarchy",
  },

  openGraph: {
    title: "Understanding Component Hierarchy in React",
    description:
      "Learn about Component Hierarchy in React, its key concepts, and how to effectively manage components to create complex UIs.",
  },
};

const Hierarchy = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>What is Component Hierarchy?</h1>
        <p>
          In React, Component Hierarchy refers to the way components are
          organized and structured within an application. It's similar to a
          family tree where components can be parents, children, or siblings to
          one another.
        </p>
        <h2>Key Concepts:</h2>
        <ul>
          <li>
            <strong>Parent Component:</strong> This is a component that contains
            other components inside it. Think of it as the "container" for child
            components.
          </li>
          <li>
            <strong>Child Component:</strong> This is a component that is nested
            inside another component. It can receive data from its parent
            component and display or use that data.
          </li>
          <li>
            <strong>Sibling Components:</strong> These are components that are
            at the same level in the hierarchy, sharing the same parent
            component.
          </li>
        </ul>

        <h2>Why is Component Hierarchy Important?</h2>
        <ul>
          <li>
            <strong>Organization:</strong> Helps in structuring your application
            in a logical and manageable way.
          </li>
          <li>
            <strong>Reusability:</strong> Allows you to reuse components across
            different parts of your application.
          </li>
          <li>
            <strong>Maintainability:</strong> Makes it easier to manage and
            update your code as your application grows.
          </li>
        </ul>

        <h2>Basic Example of Component Hierarchy</h2>
        <p>
          Let's start with a simple example to illustrate component hierarchy:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
import React from 'react';

const Header = () => (
  <header>
    <h1>My React App</h1>
  </header>
);

const MainContent = () => (
  <main>
    <p>Welcome to my application!</p>
  </main>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 My React App</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;
      `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h3>Explanation:</h3>
        <ul>
          <li>
            <strong>Header, MainContent, and Footer</strong> are individual
            components.
          </li>
          <li>
            <strong>App</strong> is the parent component that includes Header,
            MainContent, and Footer as its children.
          </li>
        </ul>
        <p>Here’s how the hierarchy looks:</p>
        <pre>{`
App
├── Header
├── MainContent
└── Footer
      `}</pre>

        <h2>Nesting Components</h2>
        <p>
          Nesting Components refers to placing one component inside another.
          This helps in creating more complex UIs by combining simpler
          components.
        </p>
        <p>Example of Nested Components:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
import React from 'react';

const UserProfile = ({ name, age }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

const UserList = () => (
  <div>
    <h1>User List</h1>
    <UserProfile name="Alice" age={25} />
    <UserProfile name="Bob" age={30} />
  </div>
);

const App = () => (
  <div>
    <h1>Welcome to the User Directory</h1>
    <UserList />
  </div>
);

export default App;
      `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h3>Explanation:</h3>
        <ul>
          <li>
            <strong>UserProfile</strong> is a component that displays a user’s
            name and age.
          </li>
          <li>
            <strong>UserList</strong> is a component that displays a list of
            users. It includes multiple UserProfile components as its children.
          </li>
          <li>
            <strong>App</strong> is the top-level component that includes
            UserList.
          </li>
        </ul>
        <p>Here’s the hierarchy:</p>
        <pre>{`
App
└── UserList
    ├── UserProfile (Alice)
    └── UserProfile (Bob)
      `}</pre>

        <h2>Props and State in Hierarchy</h2>
        <p>
          In React, props and state play crucial roles in how components
          communicate and maintain data.
        </p>

        <h3>Props</h3>
        <p>
          Props (short for properties) are used to pass data from a parent
          component to a child component. Props are read-only and help in
          customizing child components based on the data provided by the parent.
        </p>
        <p>
          In the example above, UserProfile receives name and age as props from
          UserList.
        </p>

        <h3>State</h3>
        <p>
          State is used to manage data within a component. State can change over
          time, and when it does, the component re-renders to reflect the new
          data. State is local to a component, but can be passed down to
          children as props.
        </p>
        <p>
          For example, if you wanted to add functionality to update user
          details, you’d use state in the UserList component to manage and
          update the list of users.
        </p>

        <h2>Handling Events and Updating State</h2>
        <p>
          Event handling and state updates are key aspects of component
          interaction.
        </p>
        <p>Here’s an example of how state and event handling work together:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
      `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h3>Explanation:</h3>
        <ul>
          <li>
            <strong>useState Hook:</strong> This hook is used to create state in
            a functional component. <code>count</code> is the state variable,
            and <code>setCount</code> is the function to update it.
          </li>
          <li>
            <strong>handleIncrement Function:</strong> This function is called
            when the button is clicked, and it updates the state.
          </li>
          <li>
            <strong>Button with onClick Event:</strong> The button’s{" "}
            <code>onClick</code> event triggers the handleIncrement function.
          </li>
        </ul>

        <h2>Summary</h2>
        <p>
          Component Hierarchy and Nesting help in organizing and structuring
          your React application. By understanding how to create and nest
          components, you can build complex UIs in a manageable way.
        </p>
        <ul>
          <li>
            <strong>Component Hierarchy:</strong> Refers to how components are
            organized in a parent-child relationship.
          </li>
          <li>
            <strong>Nesting Components:</strong> Involves placing components
            inside one another to build complex UIs.
          </li>
          <li>
            <strong>Props and State:</strong> Help in managing data and
            interactions between components.
          </li>
          <li>
            <strong>Event Handling:</strong> Allows components to respond to
            user actions and update the state accordingly.
          </li>
        </ul>

        <Button whereToGo={"props"} />
      </div>
    </div>
  );
};

export default Hierarchy;
