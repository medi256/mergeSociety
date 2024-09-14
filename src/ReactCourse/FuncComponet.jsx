import AdUnit from "../AdUnit";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FuncComponet = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>React Components: A Comprehensive Beginner's Guide</h1>

      <p>
        Hi there! 👋 Welcome to this detailed and friendly guide on React
        components. If you're new to React, don't worry—we'll walk you through
        everything step by step, using simple and easy-to-understand language.
      </p>

      <h2>What are Components?</h2>
      <p>
        Think of components like building blocks for your website—just like how
        you can build complex structures with Lego blocks. Each component
        represents a small part of your website, and once you create a
        component, you can reuse it multiple times in different places!
      </p>
      <p>For example, in a social media app, you might have:</p>
      <ul>
        <li>A component for the header (the top part of the page)</li>
        <li>A component for each post</li>
        <li>A component for the comments section</li>
      </ul>
      <p>
        By breaking your app into smaller components, you make your code easier
        to manage and maintain!
      </p>

      <h2>Two Types of Components</h2>
      <p>In React, there are two main types of components:</p>
      <ul>
        <li>
          <strong>Functional Components:</strong> These are the newer and
          simpler way to write components. They work just like JavaScript
          functions, which makes them a great choice for beginners. We'll focus
          on these!
        </li>
        <li>
          <strong>Class Components:</strong> These were used before functional
          components, but they are more complicated. Don't worry about them for
          now—we'll stick to functional components.
        </li>
      </ul>

      <h2>Let's Create Your First Component!</h2>
      <p>
        Ready to build your first React component? Let’s get started step by
        step!
      </p>

      <h3>Step 1: Name Your Component</h3>
      <p>
        First, choose a name for your component. One important rule is that the
        component name must always start with a capital letter. For this
        example, let's call our component <code>Welcome</code>.
      </p>

      <h3>Step 2: Write a Function</h3>
      <p>
        Now, let's write a simple function. This function will return the
        content that you want to display on the screen. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function Welcome() {
return <h1>Hello, friend!</h1>;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Let's break this down:</p>
      <ul>
        <li>
          <code>function Welcome()</code> creates a new function called{" "}
          <strong>Welcome</strong>. This function will generate some content for
          us.
        </li>
        <li>
          <code>return</code> tells React what to display on the screen. In this
          case, we're returning an HTML element—a big heading (
          <code>&lt;h1&gt;</code>) that says "Hello, friend!"
        </li>
      </ul>
      <p>
        Whenever we use the <code>Welcome</code> component, it will display this
        heading.
      </p>
      <AdUnit />
      <h3>Step 3: Export Your Component</h3>
      <p>
        To use your component in other parts of your app, you need to{" "}
        <strong>export</strong> it. Exporting a component is like packing it up
        in a box so that you can easily move it around and use it anywhere in
        your project. Here's how you do that:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function Welcome() {
return <h1>Hello, friend!</h1>;
}

export default Welcome;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        The <code>export default Welcome;</code> line makes the{" "}
        <code>Welcome</code> component available to other files in your app.
      </p>

      <h3>Step 4: Use Your Component</h3>
      <p>
        Now that we've created the <code>Welcome</code> component, let's learn
        how to use it inside our app. We need to do two things:
      </p>
      <ul>
        <li>
          <strong>Import</strong> the component.
        </li>
        <li>
          <strong>Use</strong> the component in your JSX code.
        </li>
      </ul>
      <p>Here's an example of how to do that:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import Welcome from './Welcome'; // Importing the Welcome component

function App() {
return (
<div>
<Welcome />  {/* Using the Welcome component */}
</div>
);
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Here's what's happening:</p>
      <ul>
        <li>
          <code>import React from 'react';</code> is always needed when writing
          React components.
        </li>
        <li>
          <code>import Welcome from './Welcome';</code> brings the{" "}
          <code>Welcome</code> component we created earlier into this file. The{" "}
          <code>./</code> means that the <code>Welcome</code> component is in
          the same folder.
        </li>
        <li>
          <code>&lt;Welcome /&gt;</code> is how we use the <code>Welcome</code>{" "}
          component. This looks similar to an HTML tag but represents the
          component we created.
        </li>
      </ul>

      <h3>
        Why Do We Write <code>&lt;Welcome /&gt;</code> Instead of{" "}
        <code>Welcome()</code>?
      </h3>
      <p>
        Great question! In React, we use the syntax{" "}
        <code>&lt;Welcome /&gt;</code> because:
      </p>
      <ul>
        <li>It's part of JSX, the special syntax React uses.</li>
        <li>
          It helps React understand that this is a component, not just a regular
          function.
        </li>
        <li>
          It makes your code look more like HTML, which is easier to read and
          write when building web pages.
        </li>
      </ul>
      <AdUnit />
      <h3>Wrapping Multiple Elements</h3>
      <p>
        Sometimes, you'll want to return more than one element from your
        component. For example, maybe you want to return both a heading and a
        paragraph:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function Welcome() {
return (
<div>
<h1>Hello, friend!</h1>
<p>Welcome to our app!</p>
</div>
);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Notice that both the heading and paragraph are inside a{" "}
        <code>&lt;div&gt;</code> element. This is important because React
        requires your component to return one single parent element. If you
        don’t wrap the elements, React will show an error.
      </p>

      <h2>Practice Time!</h2>
      <p>
        Let's create another simple component to practice. This time, we'll make
        a button component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function ButtonClick() {
return (
<button>Click me!</button>
);
}

export default ButtonClick;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Now, let's use this new button in our App component alongside the
        Welcome component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import Welcome from './Welcome';
import ButtonClick from './ButtonClick';

function App() {
return (
<div>
<Welcome />
<ButtonClick />
</div>
);
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h2>Wrapping Up</h2>
      <p>Here are the key points to remember:</p>
      <ul>
        <li>Components are like building blocks for your website.</li>
        <li>Always start component names with a capital letter.</li>
        <li>
          Use <code>export default</code> to make your component available to
          other parts of your app.
        </li>
        <li>
          Use <code>import</code> to bring components into the file where you
          want to use them.
        </li>
        <li>
          Use components like <code>&lt;ComponentName /&gt;</code> in your JSX
          code.
        </li>
        <li>
          Wrap multiple elements in a container (like a <code>&lt;div&gt;</code>
          ) when returning them from a component.
        </li>
      </ul>
      <p>
        Keep practicing, and soon you'll be creating amazing things with React
        components! 😊
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/JSXAttributes")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/JSXStructure")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FuncComponet;

export const JSXStructure = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>
        JSX Structure and Container Elements: A Comprehensive Beginner's Guide
      </h2>

      <p>
        Hello there! 👋 You've already learned about JSX, and now we're going to
        explore how to structure your JSX, use container elements, and learn
        some cool new tricks! By the end of this guide, you’ll have a solid
        understanding of how to organize your JSX code in a way that keeps
        everything clear and working smoothly.
      </p>

      <h3>Why Do We Need to Structure Our JSX?</h3>
      <p>
        Think of JSX like building blocks in a game or stacking bricks to build
        a tower. If you don't arrange the blocks correctly, the tower will fall.
        JSX works in a similar way. We need to carefully arrange our JSX code to
        make sure the React component functions properly.
      </p>

      <p>By structuring JSX correctly, we can:</p>
      <ul>
        <li>
          <strong>Keep our code organized:</strong> Well-structured code is
          easier to read, both for you and for other developers.
        </li>
        <li>
          <strong>Make our websites look good:</strong> The way you structure
          your code directly affects how the website looks and behaves.
        </li>
        <li>
          <strong>Avoid bugs:</strong> If JSX isn’t structured correctly, it
          might break the app or make React throw errors.
        </li>
      </ul>

      <p>
        In React, everything revolves around building reusable pieces of code
        called "components." If we don't structure our components properly,
        things can quickly become confusing. So, learning how to structure JSX
        is essential for building React apps!
      </p>

      <h3>The One Parent Rule</h3>
      <p>
        React has a very important rule: your JSX must always return just{" "}
        <strong>one parent element</strong>. This means that inside every
        component, all your elements must be wrapped inside a single container.
        It’s like packing items into a box—you can’t hand over several items
        separately without putting them into one box first.
      </p>

      <p>For example, this code won't work:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function BadExample() {
  return (
    <h1>Hello!</h1>
    <p>This won't work.</p>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the above example, React doesn’t know how to handle two sibling
        elements (<code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>) without a
        single parent wrapping them. It’s like trying to hold two cups of water
        in one hand without a tray—it will get messy!
      </p>

      <p>
        To fix this, we can wrap these elements in a container. Usually, we use
        a <code>&lt;div&gt;</code> (a general-purpose container) to hold
        multiple elements together:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function GoodExample() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This works great!</p>
    </div>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Now React understands that everything inside the{" "}
        <code>&lt;div&gt;</code> is grouped together, so it’s happy and can
        render your component.
      </p>
      <AdUnit />
      <h3>Using Container Elements</h3>
      <p>
        A container element is like a box that holds other elements inside it.
        In HTML, different container elements are used for organizing content.
        In React, we commonly use <code>&lt;div&gt;</code>, but there are other
        options that make your code more meaningful.
      </p>
      <p>Some of the common container elements you’ll use include:</p>
      <ul>
        <li>
          <code>&lt;div&gt;</code>: This is the most commonly used container.
          It’s like a simple box you can use anywhere.
        </li>
        <li>
          <code>&lt;section&gt;</code>: Use this for grouping related content.
          For example, you might use it to group all the content about a
          particular topic together.
        </li>
        <li>
          <code>&lt;article&gt;</code>: Use this when the content makes sense by
          itself, like a blog post or an article.
        </li>
        <li>
          <code>&lt;header&gt;</code>: This is used for the top part of your
          page or a section, typically where a title or navigation goes.
        </li>
        <li>
          <code>&lt;footer&gt;</code>: This is for the bottom part of your page,
          where copyright information or contact details often go.
        </li>
        <li>
          <code>&lt;nav&gt;</code>: Use this for navigation links, like a menu
          or table of contents.
        </li>
      </ul>

      <p>Let’s see an example of how to use different container elements:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function SimpleWebPage() {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <section>
        <h2>About Us</h2>
        <p>We are a cool company that does amazing things!</p>
      </section>
      <footer>
        <p>Copyright 2024</p>
      </footer>
    </div>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we’re using different HTML container elements to
        organize different parts of the webpage. The <code>&lt;header&gt;</code>{" "}
        contains the main title, <code>&lt;nav&gt;</code> contains the
        navigation links, <code>&lt;section&gt;</code> contains the "About Us"
        content, and <code>&lt;footer&gt;</code> contains the copyright notice.
        Structuring content like this makes it easier for both users and
        developers to understand the layout of your page.
      </p>

      <h3>Nesting Elements</h3>
      <p>
        Nesting is when you place one element inside another. It’s like putting
        smaller boxes inside bigger ones. This helps to group related content
        together.
      </p>

      <p>Here’s an example:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function NestedExample() {
  return (
    <div>
      <section>
        <h2>Our Products</h2>
        <div>
          <h3>Product 1</h3>
          <p>This is a great product!</p>
        </div>
        <div>
          <h3>Product 2</h3>
          <p>This product is even better!</p>
        </div>
      </section>
    </div>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we have two <code>&lt;div&gt;</code> elements nested
        inside a <code>&lt;section&gt;</code>. This keeps the related
        content—information about products—grouped together in one section.
        Nesting helps you organize and structure your content logically.
      </p>
      <AdUnit />
      <h3>Introducing Fragments: A Special Container</h3>
      <p>
        Sometimes, you don’t want to add an extra HTML element like a{" "}
        <code>&lt;div&gt;</code>. Maybe you just need something to group
        elements together without affecting your layout. That’s where{" "}
        <strong>fragments</strong> come in!
      </p>

      <p>
        A fragment is an invisible container that holds elements without adding
        anything extra to the HTML. This is useful when you need to group
        elements but don't want to mess up the design with extra HTML tags.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

function FragmentExample() {
  return (
    <React.Fragment>
      <h1>Hello!</h1>
      <p>This uses a Fragment.</p>
    </React.Fragment>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        You can also write fragments in a shorter way, using empty angle
        brackets <code>&lt;&gt;</code> like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function ShortFragmentExample() {
  return (
    <>
      <h1>Hello!</h1>
      <p>This uses a short Fragment.</p>
    </>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Both versions do the same thing: group elements without adding extra
        HTML tags to your page.
      </p>
      <AdUnit />
      <h3>Adding JavaScript to Your JSX</h3>
      <p>
        One of the coolest things about JSX is that it allows you to combine
        HTML-like syntax with JavaScript. To add JavaScript inside your JSX, you
        use curly braces <code>{"{}"}</code>. Inside these braces, you can
        include variables, function calls, or even simple calculations.
      </p>

      <p>For example:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
function Greeting() {
  const name = "Alice";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>The result of 2 + 2 is {2 + 2}.</p>
    </div>
  );
}
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>{"{name}"}</code> inserts the value of the{" "}
        <code>name</code> variable into the JSX, and <code>{"{2 + 2}"}</code>{" "}
        calculates the result and displays it.
      </p>

      <p>
        This makes JSX super powerful because you can dynamically change the
        content of your elements using JavaScript!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/funcComp")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/RenderingComp")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ClassCompoent = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
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
      <AdUnit />
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
      <AdUnit />
      <h2>Summary</h2>
      <p>
        Class Components were the primary way to create components in React
        before Functional Components and Hooks were introduced. They use classes
        and have features like state and lifecycle methods. Although you will
        mainly work with Functional Components in modern React development,
        understanding Class Components is useful for reading and maintaining
        older code.
      </p>

      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/ReactConditionalRendering")}
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/CompHierarchNest")}>
          Next
        </button>
      </div>
    </div>
  );
};
export const CompHierarchNest = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>What is Component Hierarchy?</h1>
      <p>
        In React, Component Hierarchy refers to the way components are organized
        and structured within an application. It's similar to a family tree
        where components can be parents, children, or siblings to one another.
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
          <strong>Sibling Components:</strong> These are components that are at
          the same level in the hierarchy, sharing the same parent component.
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
          <strong>Maintainability:</strong> Makes it easier to manage and update
          your code as your application grows.
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
        Nesting Components refers to placing one component inside another. This
        helps in creating more complex UIs by combining simpler components.
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
      <AdUnit />
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
        data. State is local to a component, but can be passed down to children
        as props.
      </p>
      <p>
        For example, if you wanted to add functionality to update user details,
        you’d use state in the UserList component to manage and update the list
        of users.
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
          <strong>useState Hook:</strong> This hook is used to create state in a
          functional component. <code>count</code> is the state variable, and{" "}
          <code>setCount</code> is the function to update it.
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
      <AdUnit />
      <h2>Summary</h2>
      <p>
        Component Hierarchy and Nesting help in organizing and structuring your
        React application. By understanding how to create and nest components,
        you can build complex UIs in a manageable way.
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
          <strong>Event Handling:</strong> Allows components to respond to user
          actions and update the state accordingly.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/classComponent")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/Props")}>Next</button>
      </div>
    </div>
  );
};
export const Property = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>What Are Props in React?</h1>
      <p>
        In React, <strong>props</strong> (short for "properties") are used to
        pass data from one component to another. Think of props like arguments
        you pass to a function in JavaScript, but in this case, you’re passing
        data to a React component. The component can then use the data provided
        via props to display dynamic content or perform specific actions.
      </p>
      <p>
        Props make components reusable and customizable, which is a powerful
        feature in React. Without props, each component would be static and
        unable to adapt to different situations. By using props, we can pass
        different data to the same component, and it will react accordingly (pun
        intended!). This way, we avoid duplicating code and can create flexible,
        scalable applications.
      </p>

      <h2>How Do Props Work?</h2>
      <p>
        When you create a React component, you can pass props to it by adding
        attributes in the component's tag. The props are received in the
        component as an object. Inside the component, you can access the props
        by using
        <code>props.propName</code>.
      </p>

      <h2>Why Use Props?</h2>
      <p>There are several reasons why props are important in React:</p>
      <ul>
        <li>
          <strong>Reusable Components:</strong> With props, you can create a
          single component and use it in different places, passing different
          values each time. This makes your code more efficient and prevents
          repetition.
        </li>
        <li>
          <strong>Data Flow:</strong> Props allow components to communicate.
          Specifically, they allow parent components to pass data down to child
          components, which is essential for structuring complex applications.
        </li>
        <li>
          <strong>Customization:</strong> You can use props to customize how a
          component behaves and what content it displays. This helps to build
          dynamic and interactive applications.
        </li>
      </ul>

      <h2>Example of Props</h2>
      <p>
        Let’s break down a simple example. Imagine you have a component that
        greets users by name. Instead of hard-coding the name, you can pass it
        as a prop, making the component more flexible.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// A simple Greeting component that takes a 'name' prop
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// App component where we pass different names as props
const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>
          <strong>Greeting Component:</strong> This component accepts a prop
          called <code>name</code>. It uses the <code>{"{props.name}"}</code>{" "}
          syntax to display the name passed from the parent component. This
          allows the component to be reusable for different names.
        </li>
        <li>
          <strong>App Component:</strong> In the <code>App</code> component, we
          use the <code>Greeting</code> component twice, passing a different{" "}
          <code>name</code> prop each time. In one case, we pass "Alice", and in
          another, we pass "Bob". This results in two personalized greetings
          being displayed.
        </li>
      </ul>
      <AdUnit />
      <h2>Why Are Props Read-Only?</h2>
      <p>
        It’s important to understand that <strong>props are read-only</strong>.
        This means that a component receiving props cannot modify them. The
        reason for this is to maintain a one-way data flow in React, which is a
        core principle of the framework.
      </p>
      <p>
        Data flows from the parent component to the child component, and the
        child component can use the props to display content but cannot alter
        them. If the child could change the props, it would create unpredictable
        behavior, making it difficult to understand how data is being managed.
      </p>

      <h2>Default Props</h2>
      <p>
        Sometimes, you may want to provide a default value for a prop in case
        the parent component doesn't pass anything. This is where{" "}
        <strong>default props</strong> come in handy. Default props allow you to
        set a fallback value that will be used if no value is provided for that
        prop.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// Greeting component with a default prop value
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Setting a default value for the 'name' prop
Greeting.defaultProps = {
  name: 'Guest',
};

const App = () => {
  return (
    <div>
      <Greeting /> {/* Will use default prop value 'Guest' */}
      <Greeting name="Alice" /> {/* Will use passed value 'Alice' */}
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the example above, if no <code>name</code> prop is passed to the{" "}
        <code>Greeting</code> component, it will default to "Guest". This makes
        the component more robust and prevents errors if a prop is accidentally
        omitted.
      </p>

      <h2>Props vs. State</h2>
      <p>
        While props are essential for passing data between components, they’re
        not the same as <strong>state</strong>. Here’s the difference:
      </p>
      <ul>
        <li>
          <strong>Props:</strong> Props are passed from a parent component to a
          child component and are <strong>read-only</strong>. They cannot be
          changed by the child component.
        </li>
        <li>
          <strong>State:</strong> State is used to manage data that belongs to
          the component itself and can change over time. When state changes, the
          component re-renders to reflect the new state.
        </li>
      </ul>

      <h2>Passing Functions as Props</h2>
      <p>
        Props aren’t limited to just data like strings or numbers. You can also
        pass functions as props, which is useful when you want to allow a child
        component to trigger actions or communicate back to the parent
        component.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
import React from 'react';

// Button component that takes a function as a prop
const Button = (props) => {
  return <button onClick={props.handleClick}>Click Me</button>;
};

// App component that passes a function as a prop
const App = () => {
  const showMessage = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button handleClick={showMessage} />
    </div>
  );
};

export default App;
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>Button</code> component receives a function
        as a prop (called <code>handleClick</code>). When the button is clicked,
        it calls this function, which triggers an alert. This shows how you can
        pass functions as props to allow child components to interact with their
        parent components.
      </p>
      <AdUnit />
      <h2>Summary</h2>
      <p>Let’s recap what we’ve learned about props:</p>
      <ul>
        <li>
          Props are a way to pass data from a parent component to a child
          component.
        </li>
        <li>
          Props are read-only, meaning they cannot be modified by the child
          component.
        </li>
        <li>
          Props allow components to be flexible, reusable, and customizable.
        </li>
        <li>
          You can set default props in case a value is not passed by the parent
          component.
        </li>
        <li>
          Props can be any type of data, including strings, numbers, arrays,
          objects, and even functions.
        </li>
        <li>
          Props are different from state, which is local to the component and
          can change over time.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/CompHierarchNest")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/eventHdle")}>
          Next
        </button>
      </div>
    </div>
  );
};
