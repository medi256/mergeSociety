const FuncComponet = () => {
  return (
    <div className="internet comments-container">
      <h2>Introduction to Components in React</h2>
      <p>
        Components are the fundamental building blocks of a React application.
        They allow us to create reusable and self-contained UI elements that can
        be composed together to build complex interfaces. Think of components
        like Lego bricks, each with its unique shape and purpose, that can be
        assembled to create anything from a simple toy to a grand castle.
      </p>
      <h3>What is a Component?</h3>
      <p>
        {`A component in React is a reusable piece of code that encapsulates the
        structure, behavior, and appearance of a specific UI element. It's like
        a blueprint that defines what the UI element should look like, how it
        should behave, and how it interacts with the rest of the application.
        Components can be as small as a single button or as complex as a
        full-page layout.`}
      </p>
      <h3>Why Use Components?</h3>
      <p>
        Components promote reusability, modularity, and maintainability in your
        codebase. Here are some superpowers that components bring to your React
        applications:
      </p>
      <ul>
        <li>
          <strong>Reusability:</strong> Components can be used multiple times
          throughout your application, reducing code duplication. If you need
          the same UI element in different places, you can simply reuse the same
          component.
        </li>
        <li>
          <strong>Modularity:</strong> Components allow you to break down your
          UI into smaller, manageable pieces. This makes it easier to
          understand, modify, and maintain your code.
        </li>
        <li>
          <strong>Encapsulation:</strong> Components encapsulate their own
          logic, data, and appearance. This means you can work on a component in
          isolation without affecting the rest of the application.
        </li>
        <li>
          <strong>Composition:</strong> Components can be composed together to
          build complex interfaces. You can nest components within each other,
          creating a hierarchy that makes your UI flexible and powerful.
        </li>
      </ul>
      <h3>Types of Components in React</h3>
      <p>
        In React, there are two main types of components: functional components
        and class components.
      </p>
      <ul>
        <li>
          <strong>Functional Components:</strong> These are simple JavaScript
          functions that return JSX content. They are lightweight and ideal for
          creating small and reusable UI elements.
        </li>
        <li>
          <strong>Class Components:</strong> These are defined using ES6 classes
          and provide more advanced features like local state and lifecycle
          methods. They are typically used for more complex components that
          require internal state management.
        </li>
      </ul>
      <p>
        {`Now that we've introduced the concept of components, let's dive into the
        world of functional components and explore their unique characteristics.`}
      </p>
      <h2>Functional Components in React: Simplicity and Reusability</h2>
      <p>
        {`Functional components are a fundamental concept in React that empower us
        to create concise and reusable UI elements. They are like the building
        blocks of a Lego set, allowing us to construct complex interfaces with
        ease. Let's dive into the world of functional components and explore
        their superpowers!`}
      </p>
      <h3>Understanding Functional Components</h3>
      <p>
        {`A functional component in React is a simple JavaScript function that
        returns JSX content. It's like a recipe for creating a specific UI
        element. You give it some ingredients (called "props"), and it returns a
        delicious dish (your UI element). Functional components can be defined
        using either regular JavaScript functions or arrow functions, whichever
        suits your coding style.`}
      </p>
      <pre>
        <code>
          {` 
// Define a functional component using a regular function

function MyFunctionalComponent() {
  return <div>Hello, Functional Component!</div>;
}

// Or use an arrow function

const MyFunctionalComponent = () => {
  return <div>Hello, Functional Component!</div>;
};
`}
        </code>
      </pre>
      <p>
        In this example, <code>MyFunctionalComponent</code> is a functional
        component. It takes no arguments and returns a <code>&lt;div&gt;</code>{" "}
        with a friendly greeting. This component is responsible for rendering a
        specific piece of UI.
      </p>
      <h3>Benefits of Using Functional Components</h3>
      <p>
        Functional components offer several advantages that make them a popular
        choice in React:
      </p>
      <ul>
        <li>
          <strong>Simplicity:</strong> Functional components are straightforward
          and easy to understand. They focus solely on rendering JSX content,
          making them perfect for creating small and reusable UI elements.
        </li>
        <li>
          <strong>Performance:</strong>{" "}
          {`Since functional components don't have
          their own state, React can optimize their rendering. This leads to
          improved performance and faster applications.`}
        </li>
        <li>
          <strong>Reusability:</strong> Functional components excel at being
          reused throughout your application. You can create a functional
          component once and use it in multiple places, reducing code
          duplication.
        </li>
        <li>
          <strong>Testability:</strong> Functional components are typically
          easier to test because they are pure functions that produce
          predictable outputs. Testing a functional component becomes a breeze.
        </li>
        <li>
          <strong>Maintainability:</strong> Functional components promote clean
          and modular code. By keeping components small and focused, your
          codebase becomes easier to understand, modify, and maintain.
        </li>
      </ul>
      <h3>Using Functional Components in Practice</h3>
      <p>
        {`Functional components shine when it comes to creating reusable UI
        elements like buttons, form inputs, navigation menus, and more. Let's
        see how we can use a functional component in action:`}
      </p>
      <pre>
        <code>
          {`
// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
function MyButton() {
  return <button>Click me!</button>;
}

// Or use an arrow function
const MyButton = () => <button>Click me!</button>;

// Use the functional component
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
        </code>
      </pre>
      <p>
        In this example, <code>MyButton</code> is a functional component that
        returns a <code>&lt;button&gt;</code>. We can define functional
        components using either regular functions or arrow functions, whichever
        suits your coding style. We then use <code>MyButton</code> within
        another component,
        <code>MyApp</code>, to create a more complex UI. Finally, we render
        <code>MyApp</code> using <code>ReactDOM.render()</code>, bringing our
        button to life on the screen.
      </p>
      <h3>Note</h3>
      <p>
        {`Remember, functional components are all about keeping things simple and
        reusable. They are one type of component in React, perfect for creating
        small, focused UI elements. As your React journey continues, you'll
        explore another type of component called class components, which offer
        more advanced features. But for now, embrace the simplicity and power of
        functional components to build amazing UIs!`}
      </p>
      <p>
        With functional components, you can create reusable and concise UI
        elements that are easy to understand and maintain. They are a
        fundamental tool in your React toolbox, enabling you to build complex
        interfaces with ease.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/RenderingComp")}>
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
      <h2>
        JSX Structure and Container Elements in React: Building the Foundation
      </h2>

      <p>
        {`JSX structure and container elements are like the foundation of a house,
        providing the framework upon which your React components are built. They
        ensure that your UI elements are properly organized and rendered
        correctly. Let's dive into the world of JSX structure and explore its
        superpowers!`}
      </p>

      <h3>Understanding JSX Structure</h3>

      <p>
        JSX structure refers to the way we organize and structure our JSX code
        within a React component. It involves wrapping our JSX content within a
        container element, typically a <code>&lt;div&gt;</code>. This container
        element serves as the foundation for our UI and ensures that our
        components are rendered correctly. Additionally, we use parentheses{" "}
        <code>()</code> to enclose our JSX content, allowing us to include
        multiple elements and return them as a single unit.
      </p>

      <pre>
        <code>
          {
            // Example JSX structure
            function MyComponent() {
              return (
                <div>
                  <h1>Hello, JSX!</h1>
                  <p>This is my JSX content.</p>
                </div>
              );
            }
          }
        </code>
      </pre>

      <p>
        In this example, the JSX content is wrapped within a{" "}
        <code>&lt;div&gt;</code> container element. This container serves as the
        foundation for our UI. It ensures that the heading (
        <code>&lt;h1&gt;</code>) and paragraph (<code>&lt;p&gt;</code>) elements
        are properly structured and rendered. The container element acts as a
        parent to the child UI elements, providing a solid framework for our UI.
        Additionally, we use parentheses <code>()</code> to enclose our JSX
        content. This allows us to include multiple elements within the
        container and return them as a single unit.
      </p>

      <h3>Benefits of Using Container Elements</h3>

      <p>
        Using container elements in our JSX structure offers several advantages:
      </p>

      <ul>
        <li>
          <strong>Proper Rendering:</strong> Container elements ensure that our
          UI elements are rendered correctly. They provide a structured
          framework that helps React understand how to display our UI elements
          properly.
        </li>
        <li>
          <strong>Flexibility:</strong> Container elements give us the
          flexibility to organize and structure our UI. We can nest child UI
          elements within the container, creating a hierarchical structure that
          is easy to manage and maintain.
        </li>
        <li>
          <strong>Code Readability:</strong> Container elements improve code
          readability by clearly defining the boundaries of our UI. They make it
          easier to understand the overall structure and layout of our UI
          elements.
        </li>
        <li>
          <strong>CSS Styling:</strong> Container elements can be targeted with
          CSS styles, allowing us to apply styles to a group of UI elements
          collectively. This helps maintain a consistent and cohesive design
          across our UI.
        </li>
      </ul>

      <h3>Using Container Elements in Practice</h3>

      <p>
        {`Container elements shine when it comes to building structured and
        organized UIs. Let's see how we can use container elements in a
        practical example:`}
      </p>

      <pre>
        <code>
          {`
      // Define a component with container elements
      function MyComponent() {
        return (
          <div>
            <h1>Header</h1>
            <div>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </div>
            <Footer />
          </div>
        );
      }

      // Use the component
      function MyApp() {
        return (
          <div>
            <MyComponent />
          </div>
        );
      }

      // Render the app
      ReactDOM.render(<MyApp />, document.getElementById('root'));
    `}
        </code>
      </pre>

      <p>
        In this example, the <code>MyComponent</code> component uses container
        elements to structure its UI. The <code>&lt;div&gt;</code> container
        serves as the foundation for the UI, providing a structured framework.
        Within the container, we nest child UI elements like headings (
        <code>&lt;h1&gt;</code>), paragraphs (<code>&lt;p&gt;</code>), and other
        components (<code>Footer</code>). This hierarchical structure ensures
        that our UI elements are properly organized and rendered.
      </p>

      <h3>Note</h3>

      <p>
        Remember, JSX structure and container elements are like the foundation
        of a house, providing the framework for your React components. They
        ensure proper rendering, flexibility, and code readability. The
        parentheses <code>()</code> in JSX allow us to enclose multiple elements
        and return them as a single unit. As your React applications grow,
        container elements will become essential for building structured and
        well-organized UIs. Embrace the power of container elements to build
        solid and well-structured interfaces!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/funcComp")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/ReactConditionalRendering")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const ClassCompoent = () => {
  return (
    <div className="internet comments-container">
      <h2>Class Components in React: Unleashing Advanced Features</h2>

      <p>
        Class components in React are like the older siblings of functional
        components. They offer more advanced features and capabilities, making
        them perfect for building complex and dynamic UI elements. Think of
        class components as the superheroes of React, ready to display amazing
        content and save the day!
      </p>

      <h3>Understanding Class Components</h3>

      <p>
        {`Before we dive in, it's important to note that class components are an
        older way of defining React components. In this course, we will
        primarily focus on functional components because they are simpler to
        define and have been widely adopted by developers. However,
        understanding class components is valuable because they offer the same
        functionality and you might encounter them in existing codebases.`}
      </p>

      <p>
        {`A class component in React is defined using ES6 class syntax. It
        provides more flexibility and control over your UI elements. With class
        components, you can manage local state, handle lifecycle events, and use
        additional methods to enhance your UI. Let's dive into the world of
        class components and explore their superpowers!`}
      </p>

      <pre>
        <code>
          {`// Example class component
class MyClassComponent extends React.Component {
  render() {
    return <div>Hello, Class Component!</div>;
  }
}`}
        </code>
      </pre>

      <p>
        In this example, <code>MyClassComponent</code> is a class component. It
        extends <code>React.Component</code>, which gives it access to{" "}
        {` React's `}
        powerful features. The <code>render</code> method defines the UI
        structure and returns JSX content. In this case, it simply renders a
        greeting message.
      </p>

      <h3>Benefits of Using Class Components</h3>

      <p>
        Class components offer several advantages that make them well-suited for
        building complex and dynamic UIs:
      </p>

      <ul>
        <li>
          <strong>Local State:</strong> Class components can manage their own
          state using the <code>this.state</code> object. This allows you to
          dynamically update and display content within the component.
        </li>
        <li>
          <strong>Lifecycle Methods:</strong> Class components provide lifecycle
          methods like <code>componentDidMount</code> and{" "}
          <code>componentDidUpdate</code>. These methods allow you to perform
          actions when the component is first rendered or updated, such as
          fetching data or updating the UI.
        </li>
        <li>
          <strong>Event Handling:</strong>{" "}
          {`Class components make it easy to
          handle events like clicks, keyboard inputs, and form submissions. You
          can define methods to handle these events and update the component's
          state accordingly.`}
        </li>
        <li>
          <strong>Enhanced Flexibility:</strong> Class components give you more
          flexibility in managing complex UI logic. They provide a structured
          way to organize your code and handle interactions within the
          component.
        </li>
      </ul>

      <h3>Using Class Components in Practice</h3>

      <p>
        {`Class components shine when it comes to building UI elements that
        require dynamic content and event handling. Let's see how we can use a
        class component in a simple example:`}
      </p>

      <pre>
        <code>
          {`// Define a class component
class MyParagraph extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Class Component!</h1>
        <p>This is a paragraph.</p>
      </div>
    );
  }
}

// Use the class component
function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyParagraph />
    </div>
  );
}

// Render the app
ReactDOM.render(<MyApp />, document.getElementById('root'));
`}
        </code>
      </pre>

      <p>
        In this example, <code>MyParagraph</code> is a class component that
        renders a heading and a paragraph. We can use it within another
        component,
        <code>MyApp</code>, to create a more complex UI. Class components give
        you the flexibility to structure and render dynamic content within your
        UI elements.
      </p>

      <h3>Note</h3>

      <p>
        {`Remember, class components are powerful tools in your React toolbox.
        They are perfect for building UI elements that require dynamic content
        and event handling. As your React skills grow, you'll find class
        components to be versatile and flexible, allowing you to create engaging
        and interactive UIs. However, in modern React development, functional
        components are preferred for their simplicity and the benefits brought
        by React hooks. Don't be intimidated by the advanced features of class
        components; start with simple examples and gradually explore their full
        potential. Embrace the rendering power of class components to create
        captivating UIs!`}
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
      <h2>
        Component Hierarchy and Nesting in React: Building Complex Interfaces
      </h2>

      <p>
        {`Component hierarchy and nesting are fundamental concepts in React that
        allow us to build complex and structured interfaces. Think of it like
        putting together a puzzle, where each piece (component) fits together to
        form a beautiful picture. Let's dive into the world of component
        hierarchy and explore how we can create powerful and organized UIs.`}
      </p>

      <h3>Understanding Component Hierarchy</h3>

      <p>
        {`Component hierarchy refers to how we organize and structure components
        within a React application. It's like building a house, where each room
        (component) has its own purpose and fits together to make a complete
        home. In React, we create parent components that can contain multiple
        child components. This hierarchical structure helps us build complex
        interfaces by combining simpler components.`}
      </p>

      <pre>
        <code>
          {`// Example component hierarchy
function MyApp() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}`}
        </code>
      </pre>

      <p>
        In this example, <code>MyApp</code> is the parent component that holds
        three child components: <code>Header</code>, <code>Content</code>, and{" "}
        <code>Footer</code>. Each child component is responsible for rendering a
        specific part of the UI. By organizing components in a hierarchical
        structure, we can break down complex UIs into smaller, more manageable
        pieces.
      </p>

      <h3>Benefits of Component Hierarchy</h3>

      <p>
        Component hierarchy brings several advantages that make it a powerful
        tool in React:
      </p>

      <ul>
        <li>
          <strong>Modularity:</strong> Component hierarchy promotes modular
          design by breaking down the UI into smaller, reusable components. This
          makes it easier to understand, maintain, and test individual
          components.
        </li>
        <li>
          <strong>Code Reusability:</strong> With component hierarchy, you can
          reuse the same child components in different parent components. This
          reduces code duplication and makes your codebase more efficient.
        </li>
        <li>
          <strong>Maintainability:</strong>{" "}
          {`By organizing components in a
          hierarchical structure, it becomes easier to locate and modify
          specific parts of the UI. Changes to one component won't affect the
          rest of the application.`}
        </li>
        <li>
          <strong>Scalability:</strong> Component hierarchy allows you to build
          complex interfaces by combining simpler components. You can start
          small and gradually add more components to create sophisticated UIs.
        </li>
      </ul>

      <h3>Nesting Components</h3>

      <p>
        {`Nesting components is like putting one component inside another. It
        allows us to create complex and structured UIs by arranging components
        within each other. Let's see how nesting works in practice:`}
      </p>

      <pre>
        <code>
          {`// Example component nesting
function MyComponent() {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
      <Footer />
    </div>
  );
}`}
        </code>
      </pre>

      <p>
        In this example, <code>MyComponent</code> is a parent component that
        contains multiple child components. The <code>&lt;h1&gt;</code> and{" "}
        <code>&lt;Footer&gt;</code> components are nested directly within the
        parent. Additionally, the two <code>&lt;p&gt;</code>
        components are nested within a <code>&lt;div&gt;</code>, creating a
        nested structure. Nesting components gives us the flexibility to build
        complex and structured UIs.
      </p>

      <h3>Using Component Hierarchy and Nesting in Practice</h3>

      <p>
        {`Component hierarchy and nesting are powerful tools when it comes to
        building complex interfaces. Let's see how we can use them in a
        practical example:`}
      </p>

      <pre>
        <code>
          {`// Define parent and child components
function Header() {
  return <h1>Header</h1>;
}

function Content() {
  return (
    <div>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  );
}

function Footer() {
  return <p>Footer</p>;
}

// Use component hierarchy and nesting
function MyApp() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// Render the app
ReactDOM.render(<MyApp />, document.getElementById('root'));
`}
        </code>
      </pre>

      <p>
        In this example, <code>MyApp</code> is the parent component that
        contains three child components: <code>Header</code>,{" "}
        <code>Content</code>, and <code>Footer</code>. The
        <code>Content</code> component itself contains two nested{" "}
        <code>&lt;p&gt;</code>
        components. This hierarchical structure allows us to build a complex UI
        by combining simpler components. You can even duplicate components and
        use them multiple times within the same parent, creating a versatile and
        dynamic UI.
      </p>

      <h3>Note</h3>

      <p>
        Remember, component hierarchy and nesting are powerful tools in React
        that enable you to build complex and structured interfaces. They promote
        modular design, code reusability, and maintainability. As your React
        applications grow, component hierarchy and nesting will become essential
        techniques for creating sophisticated and well-organized UIs. Embrace
        the power of hierarchy and nesting to build stunning and dynamic
        interfaces!
      </p>
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
      <h2>Props (Properties) in React: Passing Data to Components</h2>

      <p>
        {`Props, short for properties, are like the superpowers of React
        components. They allow us to pass data from a parent component to its
        child components, giving them the information they need to render the UI
        correctly. Think of props as special messages that help components
        understand what they should display and how they should behave. Let's
        dive into the world of props and explore their superpowers!`}
      </p>

      <h3>Understanding Props</h3>

      <p>
        {`Props are a way to pass data from a parent component to its child
        components. They are like ingredients that you give to a recipe,
        allowing the child component to create the desired output. Props can be
        any type of data, such as strings, numbers, objects, or even functions.
        Let's see how props work in action:`}
      </p>

      <pre>
        <code>
          {`
    // Example prop passing
    function MyComponent(props) {
      return <div>{props.message}</div>;
    }

    // Use the component with props
    function MyApp() {
      return <MyComponent message="Hello, Props!" />;
    }

    // Render the app
    ReactDOM.render(<MyApp />, document.getElementById('root'));
    `}
        </code>
      </pre>

      <p>
        In this example, <code>MyComponent</code> is a functional component that
        accepts a prop called <code>message</code>. Inside the component, we use{" "}
        <code>{`{props.message}`}</code> to display the value of the{" "}
        <code>message</code> prop. In the <code>MyApp</code> component, we use{" "}
        <code>&lt;MyComponent message={`"Hello, Props!"`} /&gt;</code> to pass
        the <code>message</code> prop to the <code>MyComponent</code>. This way,
        the child component receives the data it needs to render the UI
        correctly.
      </p>

      <h3>Benefits of Using Props</h3>

      <p>
        Props offer several advantages that make them a crucial part of React:
      </p>

      <ul>
        <li>
          <strong>Data Passing:</strong> Props allow parent components to pass
          data to their child components. This enables child components to
          render dynamic content based on the data they receive.
        </li>
        <li>
          <strong>Customization:</strong> With props, you can customize the
          behavior and appearance of child components. By passing different prop
          values, you can create reusable components that adapt to different
          situations.
        </li>
        <li>
          <strong>Flexibility:</strong>{" "}
          {`Props give you the flexibility to create
          dynamic UIs by updating the props passed to child components. You can
          change the UI without modifying the child component's internal logic.`}
        </li>
        <li>
          <strong>Readability:</strong> Props make it clear what data a
          component needs to function properly. This improves code readability
          and makes it easier to understand how components interact.
        </li>
      </ul>

      <h3>Using Props in Practice</h3>

      <p>
        {`Props are essential when you want to customize the behavior or
        appearance of child components. Let's see how we can use props in some
        simple examples:`}
      </p>

      <pre>
        <code>
          {`
    // Define a component with props
    function MyGreeting(props) {
      return <div>Hello, {props.name}</div>;
    }

    // Use the component with different props
    function MyApp() {
      return (
        <div>
          <h1>Welcome to My App</h1>
          <MyGreeting name="Alice" />
          <MyGreeting name="Bob" />
        </div>
      );
    }

    // Render the app
    ReactDOM.render(<MyApp />, document.getElementById('root'));
    `}
        </code>
      </pre>

      <p>
        In this example, <code>MyGreeting</code> is a functional component that
        accepts a <code>name</code> prop. We can use the <code>MyGreeting</code>{" "}
        component multiple times within the <code>MyApp</code> component,
        passing different names as props. Each instance of{" "}
        <code>MyGreeting</code> will render a personalized greeting based on the
        prop value it receives. Props allow us to create dynamic and
        customizable UIs.
      </p>

      <pre>
        <code>
          {`
    // Define a component with props
    function MyButton(props) {
      return <button>{props.label}</button>;
    }

    // Use the component with different props
    function MyApp() {
      return (
        <div>
          <h1>Welcome to My App</h1>
          <MyButton label="Click me!" />
          <MyButton label="Submit" />
        </div>
      );
    }

    // Render the app
    ReactDOM.render(<MyApp />, document.getElementById('root'));
    `}
        </code>
      </pre>

      <p>
        In this example, <code>MyButton</code> is a functional component that
        accepts a <code>label</code> prop. We can use the <code>MyButton</code>{" "}
        component multiple times within the <code>MyApp</code> component,
        passing different labels as props. Each instance of{" "}
        <code>MyButton</code> will render a button with the specified label.
        Props give us the flexibility to create dynamic and customizable UIs.
      </p>

      <h3>Note</h3>

      <p>
        {`Remember, props are like the lifeblood of React components. They allow
        data to flow from parent components to their children, enabling them to
        render dynamic and customizable UIs. As your React journey continues,
        you'll find props to be essential tools for building powerful and
        flexible interfaces. Embrace the power of props to create dynamic and
        adaptable components!`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/CompHierarchNest")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/AddEvent")}>
          Next
        </button>
      </div>
    </div>
  );
};
