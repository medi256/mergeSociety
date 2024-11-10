import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "React CSS Styling: A beginner's Guide ",
  description:
    "Explore the world of React CSS styling. Learn how to style your components using class names, inline styles, CSS-in-JS, and more.",
  keywords: [
    "react css styling",
    "react css tutorial",
    "react css class names",
    "inline styles react",
    "css-in-js",
    "react styled-components",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/react-css-styling",
  },

  openGraph: {
    title: "React CSS Styling: Master the Art of Component Styling",
    description:
      "Dive into React CSS styling. Learn to style your components efficiently using various techniques.",
  },
};

const ReactStyling = () => {
  return (
    <div className="lesson-container">
      <h1>React CSS Styling: Efficient Styling Techniques</h1>

      <p>
        Styling in React can be a challenging task, but with the right
        techniques, it becomes a superpower! React provides several efficient
        ways to style your components using CSS. Let's explore the world of
        React CSS styling and learn how to efficiently manage and apply styles
        in your React applications.
      </p>

      <h2>Understanding React CSS Styling</h2>

      <p>
        React CSS styling involves applying styles to your React components
        using CSS. You can style your components using class names, inline
        styles, or CSS-in-JS libraries. React also offers features like CSS
        Modules and styled-components to enhance your styling experience. Let's
        dive into the world of React CSS styling and unlock its superpowers!
      </p>

      <h3>What is React CSS Styling?</h3>

      <p>
        React CSS styling refers to the process of applying styles to your React
        components using CSS. It involves defining styles in separate CSS files,
        inline styles within your JSX, or using CSS-in-JS libraries like
        styled-components. React also provides features like CSS Modules to help
        you manage and scope styles effectively.
      </p>

      <h4>Why Use React CSS Styling?</h4>

      <p>React CSS styling offers several benefits:</p>

      <ul>
        <li>
          <strong>Separation of Concerns:</strong> React CSS styling promotes
          the separation of concerns by allowing you to define styles separately
          from your component logic.
        </li>
        <li>
          <strong>Reusability:</strong> React CSS styling encourages reusable
          styles by allowing you to define styles in separate CSS files or using
          CSS-in-JS libraries.
        </li>
        <li>
          <strong>Dynamic Styling:</strong> React CSS styling allows you to
          dynamically update styles based on component state or user
          interactions.
        </li>
      </ul>

      <h3>Steps to Style React Components with CSS</h3>

      <p>Here are the steps to style React components with CSS:</p>

      <ol>
        <li>
          <strong>Choose a Styling Approach:</strong> Decide whether you want to
          use class names, inline styles, or CSS-in-JS libraries.
        </li>
        <li>
          <strong>Define Styles:</strong> Create a separate CSS file or define
          inline styles within your JSX code.
        </li>
        <li>
          <strong>Apply Styles:</strong> Use class names, inline styles, or
          CSS-in-JS libraries to apply the defined styles to your components.
        </li>
      </ol>

      <h3>Step-by-Step Example</h3>

      <h4>1. Choosing a Styling Approach</h4>

      <p>Let's choose class names as our styling approach:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// MyComponent.js

import React from 'react';

function MyComponent() {
  return (
    <div className="container">
      <h1 className="title">Hello, React CSS Styling!</h1>
    </div>
  );
}

export default MyComponent;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we use class names <code>container</code> and{" "}
        <code>title</code> to style our components.
      </p>

      <h4>2. Defining Styles</h4>

      <p>Let's define styles in a separate CSS file:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
/* MyComponent.css */

.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.title {
  color: #333333;
  font-size: 24px;
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this CSS file, we define styles for the <code>.container</code> and{" "}
        <code>.title</code> classes.
      </p>

      <h4>3. Applying Styles</h4>

      <p>Now, let's apply the styles to our components:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// ...

import './MyComponent.css';

function MyComponent() {
  return (
    <div className="container">
      <h1 className="title">Hello, React CSS Styling!</h1>
    </div>
  );
}

// ...
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we import the <code>MyComponent.css</code> file to apply
        the styles to our components. The styles defined in the CSS file are
        automatically applied to the elements with the corresponding class
        names.
      </p>

      <h3>Putting It All Together</h3>

      <p>Let's see the complete example:</p>

      <h4>MyComponent.js</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// MyComponent.js

import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return (
    <div className="container">
      <h1 className="title">Hello, React CSS Styling!</h1>
    </div>
  );
}

export default MyComponent;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>MyComponent.css</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
/* MyComponent.css */

.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.title {
  color: #333333;
  font-size: 24px;
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Choose a Styling Approach:</strong> We choose class names as
          our styling approach and apply them to our JSX elements.
        </li>
        <li>
          <strong>Define Styles:</strong> We define styles in a separate CSS
          file, <code>MyComponent.css</code>.
        </li>
        <li>
          <strong>Apply Styles:</strong> We import the CSS file and apply the
          styles to our components using class names.
        </li>
      </ul>

      <h3>Note</h3>

      <p>
        React CSS styling provides a powerful way to manage and apply styles in
        your React applications. It promotes the separation of concerns,
        encourages reusable styles, and allows for dynamic styling based on
        component state or user interactions.
      </p>

      <Button whereToGo={"inline-styles"} />
    </div>
  );
};

export default ReactStyling;
