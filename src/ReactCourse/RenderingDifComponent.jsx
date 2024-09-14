import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const RenderingDifComponent = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Creating and Rendering JSX Files</h1>

      <p>
        Now that you have a basic understanding of JSX, let’s learn how to
        create and render JSX files in your React project. This will help you
        organize your code and make it easier to manage as your project grows.
      </p>

      <h2>1. Creating a New JSX File</h2>
      <p>
        To start using JSX, you need to create new files in your React project.
        These files will contain your JSX code and can be used to build
        different parts of your user interface. Let’s go through the steps to
        create a new JSX file.
      </p>

      <h3>Step 1: Create a New File</h3>
      <p>
        In your project’s <strong>src</strong> folder, create a new file. You
        can name it something like <strong>MyComponent.js</strong> or
        <strong>Header.js</strong>, depending on what you’re building.
      </p>

      <h3>Step 2: Write JSX Code</h3>
      <p>
        Open your new file and start writing your JSX code. For example, let’s
        create a simple component that displays a welcome message:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
    </div>
  );
};

export default MyComponent;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <strong>MyComponent</strong> is a React component that
        renders a <strong>div</strong> with an <strong>h1</strong> heading. This
        file exports the component so it can be used in other parts of your
        application.
      </p>

      <h2>2. Rendering JSX Files in Your App</h2>
      <p>
        After creating your JSX file, you need to render it in your app to see
        it in action. This involves importing the component into another file
        and including it in your app’s component tree.
      </p>

      <h3>Step 1: Import the Component</h3>
      <p>
        In your main application file (usually <strong>App.js</strong>), import
        the component you just created:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';
import MyComponent from './MyComponent'; // Adjust the path based on where you saved the file

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Here, we import <strong>MyComponent</strong> and include it inside the
        <strong>App</strong> component. This way, <strong>MyComponent</strong>
        will be displayed wherever <strong>App</strong> is used.
      </p>

      <h3>Step 2: Render Your App</h3>
      <p>
        Finally, make sure your React application is set up to render the{" "}
        <strong>App</strong>
        component. This is usually done in the <strong>index.js</strong> file:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app will be rendered in the HTML
);
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The <strong>ReactDOM.render</strong> function takes the{" "}
        <strong>App</strong>
        component and renders it inside the <strong>div</strong> with the id of
        <strong>root</strong> in your <strong>index.html</strong> file.
      </p>

      <h2>3. Updating and Re-rendering Components</h2>
      <p>
        React is great at updating the user interface automatically when data
        changes. When you make changes to your JSX files, React will re-render
        your components to reflect those changes.
      </p>

      <p>
        For example, if you update the content of <strong>MyComponent</strong>{" "}
        to say something different, React will automatically update the display
        without needing to reload the page.
      </p>

      <p>Just remember to save your files, and React will handle the rest!</p>

      <AdUnit />
      <h2>Wrapping Up</h2>
      <p>
        Creating and rendering JSX files is a fundamental part of building React
        applications. By following these steps, you can organize your code into
        reusable components and ensure that your user interface updates
        automatically as needed.
      </p>
      <p>
        Next, we’ll dive into more advanced topics and learn how to manage state
        and handle user interactions in your React components.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/JSXStructure")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/imagesReact")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RenderingDifComponent;
