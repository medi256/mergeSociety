import AdUnit from "../AdUnit";

const IntroJSX = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Introduction to JSX</h2>
      <p>
        JSX is a fundamental concept in React development. It stands for
        JavaScript XML and allows us to write HTML-like code within our
        JavaScript code. JSX makes it easier and more intuitive to describe the
        structure and appearance of our user interfaces.
      </p>

      <h3>Why Do We Need JSX?</h3>
      <ul>
        <li>
          <strong>Familiar Syntax:</strong> JSX syntax is similar to HTML, which
          most developers are already familiar with. This makes the transition
          to React development smoother and more accessible.
        </li>
        <li>
          <strong>Component-Based UI:</strong> JSX promotes a component-based
          approach to building user interfaces. Components are reusable and
          self-contained units, making it simpler to manage and maintain complex
          UIs.
        </li>
        <li>
          <strong>Dynamic and Interactive UIs:</strong> JSX allows us to create
          dynamic and interactive user interfaces. We can display data, handle
          user interactions, and update the UI based on changing data.
        </li>
      </ul>

      <h3>JSX Syntax Basics</h3>
      <p>
        {` JSX syntax combines HTML-like tags with JavaScript expressions. Here's a
        basic example:`}
      </p>

      <pre>
        <code>
          {`
const element = <h1>Hello, JSX!</h1>;
          
          `}
        </code>
      </pre>

      <p>
        In this example, {` we're `} creating a JSX element called{" "}
        <code>element</code> that represents an <code>h1</code> heading. We can
        include attributes, just like in HTML:
      </p>

      <pre>
        <code>
          {`
          
const element = <h1 className="heading">Hello, JSX!</h1>;
          `}
        </code>
      </pre>

      <p>
        {`We can also include other HTML tags within our JSX elements, such as
        paragraphs, lists, and images. Here's an example:`}
      </p>

      <pre>
        <code>
          {`
const paragraph = <p>This is a paragraph in JSX.</p>; 
       

                           <ul>
const list =                  <li>Item 1</li>
                              <li>Item 2</li>
                            </ul>; 


const image = <img src="image.jpg" alt="Description" />;

        `}
        </code>
      </pre>

      <h3>Dynamic JSX with Variables</h3>
      <p>
        {`JSX allows us to embed dynamic content using variables. Let's see an
        example:`}
      </p>

      <pre>
        <code>
          {`
const content = 'Content'; 
        
const dynamicContent =  <h2>Dynamic {content}</h2>;
          `}
        </code>
      </pre>

      <p>
        In this example, {` we've `} declared the <code>content</code> variable
        and embedded its value within the JSX element using curly braces{" "}
        <code>{}</code>. This allows us to create dynamic and customizable
        content.
      </p>

      <h3>More Examples of Dynamic JSX</h3>
      <pre>
        <code>
          {`
const name = 'React'; 

const greeting = <h1>Hello, {name}!</h1>; 
        
const a = 1; 

const b = 3; 

const sum = <p>  The sum of {a + b} is {a + b}. </p>;
        `}
        </code>
      </pre>

      <p>
        {`In the examples above, we're embedding the values of variables within
        JSX elements. We can also perform calculations and include the results
        within the JSX elements.`}
      </p>
      <AdUnit />

      <h3>Tips and Hints</h3>
      <ul>
        <li>
          You can include any valid JavaScript expressions within curly braces{" "}
          <code>{}</code> in your JSX elements.
        </li>
        <li>
          Feel free to experiment with different variables and expressions to
          create dynamic content.
        </li>
        <li>Remember to declare your variables before using them in JSX.</li>
        <div className="button-container">
          <button
            onClick={() =>
              (window.location.href = "/underStandingProjectStructure")
            }
          >
            back
          </button>
          <button onClick={() => (window.location.href = "/jsxSyntax")}>
            Next
          </button>
        </div>
      </ul>
    </div>
  );
};

export default IntroJSX;

export const JSXAttributes = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Attributes in JSX: Enhancing UI Elements</h2>

      <p>
        {`Attributes in JSX are like the accessories that give our UI elements
        their unique style and behavior. They allow us to customize the
        appearance and functionality of our UI elements, just like we do in
        HTML. Let's dive into the world of attributes and explore their
        superpowers!`}
      </p>

      <h3>Understanding Attributes</h3>

      <p>
        {`Attributes in JSX are used to modify or enhance the behavior of UI
        elements. They are like special instructions that tell our UI elements
        how to look and act. Attributes can be used to set styles, handle
        events, or provide additional information, just like we do in HTML.
        Let's see how attributes work in action:`}
      </p>

      <pre>
        <code>
          {`
// Example attribute usage
function MyComponent() {
  return <button className="my-button">Click me!</button>;
}
          `}
        </code>
      </pre>

      <p>
        In this example, the <code>className</code> attribute is used to set the
        CSS class name for styling the button. This is similar to how we use the{" "}
        <code>class</code> attribute in HTML. However, in JSX, we use{" "}
        <code>className</code> instead of <code>class</code>
        because <code>class</code> is a reserved keyword in JavaScript. Using
        <code>className</code> ensures that we can apply styles to our UI
        elements without conflicting with {` JavaScript's syntax.`}
      </p>

      <h3>Benefits of Using Attributes</h3>

      <p>
        Attributes offer several advantages that make them essential in React:
      </p>

      <ul>
        <li>
          <strong>Customization:</strong> Attributes allow us to customize the
          appearance and behavior of UI elements. We can set styles, handle
          events, or provide additional information to make our UI elements
          truly stand out.
        </li>
        <li>
          <strong>Dynamic Behavior:</strong> Attributes enable us to create
          dynamic UI elements that respond to user interactions. We can use
          attributes like
          <code>onClick</code> to define custom actions for different events.
        </li>
        <li>
          <strong>Flexibility:</strong> Attributes give us the flexibility to
          adapt our UI elements to different situations. We can easily modify
          the appearance or behavior of a UI element by changing its attributes.
        </li>
        <li>
          <strong>Code Readability:</strong> Attributes make it clear what
          functionality or style a UI element has. This improves code
          readability and makes it easier to understand how our UI elements will
          behave.
        </li>
      </ul>
      <AdUnit />

      <h3>Using Attributes in Practice</h3>

      <p>
        {`Attributes shine when it comes to creating dynamic and interactive UIs.
        Let's see how we can use attributes in a practical example:`}
      </p>

      <pre>
        <code>
          {`
      // Define an event handler
      function handleClick() {
        alert('Button clicked!');
      }

      function MyButton() {
        return <button className="my-button" onClick={handleClick}>Click me!</button>;
      }

      // Use the component with attributes
      function MyApp() {
        return (
          <div>
            <h1 className="my-heading">Welcome to My App</h1>
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
        In this example, we use attributes to enhance the behavior and
        appearance of our UI elements. The <code>className</code> attribute sets
        the CSS class name for styling, allowing us to apply custom styles to
        the heading and button. We use
        <code>className</code> instead of <code>class</code> because{" "}
        <code>class</code> is a reserved keyword in JavaScript. The{" "}
        <code>onClick</code> attribute specifies what should happen when the
        button is clicked, triggering the <code>handleClick</code>
        function. Attributes give us the flexibility to customize and control
        the behavior of our UI elements.
      </p>

      <h3>Note</h3>

      <p>
        Remember, attributes are like the accessories that give our UI elements
        their unique style and behavior. They allow us to customize and enhance
        the functionality of our UI elements, just like we do in HTML. As your
        React journey continues, attributes will become essential tools for
        creating dynamic and interactive UIs. Embrace the power of attributes to
        build engaging and responsive interfaces!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/jsxSyntax")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/RenderingComp")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const JSXSyntax = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>JSX and Best Practices</h2>
      <p>
        {`Writing clean and maintainable JSX code is crucial for building robust
        and scalable React applications. In this section, we'll explore best
        practices that will help you write high-quality JSX code, focusing
        exclusively on JSX and expressions.`}
      </p>

      <h3>Best Practices for Writing Clean JSX</h3>
      <ul>
        <li>
          <strong>Use Self-Closing Tags:</strong> For elements without any
          content, use self-closing tags, such as <code> {`<img />`} </code> or{" "}
          <code> {`<input />`} </code>. This keeps your code concise and
          readable.
        </li>
        <li>
          <strong>Use Double Quotes for Attributes:</strong> When specifying
          attribute values, use double quotes instead of single quotes. This is
          the convention followed by most React developers and improves code
          consistency.
        </li>
        <li>
          <strong>Avoid Inline Styles:</strong> Instead of using inline styles,
          prefer using CSS classes or CSS-in-JS solutions like
          styled-components. This promotes separation of concerns and makes your
          code more maintainable.
        </li>
        <li>
          <strong>Keep JSX Focused on UI Structure:</strong> Avoid including
          complex logic or data manipulation within JSX. Use JavaScript
          functions and variables to handle the logic separately.
        </li>
        <li>
          <strong>Use JSX for Structure, Not Logic:</strong> Keep your JSX
          focused on describing the structure of your UI. Avoid including
          complex logic or calculations within JSX elements.
        </li>
        <li>
          <strong>Use Curly Braces for Expressions:</strong> When embedding
          JavaScript expressions within JSX, use curly braces <code>{}</code>.
          This allows you to include dynamic content, variables, and
          calculations within your JSX elements.
        </li>
      </ul>

      <h3>Example: Embedding Expressions in JSX</h3>
      <pre>
        <code>
          {`
        const name = 'React';
        const greeting = <h1>Hello, {name}!</h1>;
          
          `}
        </code>
      </pre>

      <p>
        In this example, {` we're `} embedding the value of the{" "}
        <code>name</code> variable within the JSX element. We can include any
        valid JavaScript expression within curly braces <code>{}</code>. This
        allows us to create dynamic and interactive UIs.
      </p>

      <h3>Tips and Hints</h3>
      <ul>
        <li>
          You can include any valid JavaScript expression within curly braces{" "}
          <code>{}</code> in your JSX elements.
        </li>
        <li>
          Feel free to experiment with different variables and expressions to
          create dynamic content.
        </li>
        <li>
          Remember to keep your expressions focused on displaying dynamic
          content or performing simple calculations.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/introJsx")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/JSXAttributes")}>
          Next
        </button>
      </div>
    </div>
  );
};
