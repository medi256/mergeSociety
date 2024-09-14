import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IntroJSX = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Introduction to JSX (JavaScript XML)</h1>

      <p>
        Now that you’ve set up your React project and understand its structure,
        the next step is learning how to build the user interface of your app.
        In React, we use something called <strong>JSX </strong> to create the
        UI.
      </p>

      <h2>What is JSX?</h2>
      <p>
        <strong> JSX </strong>stands for <strong> JavaScript XML</strong>. It’s
        a syntax that allows us to write HTML-like code inside JavaScript. JSX
        is very useful because it makes it easier to visualize the structure of
        your user interface right inside your JavaScript code.
      </p>
      <p>
        If you’ve written HTML before, JSX will look familiar, but there are
        some differences you need to keep in mind.
      </p>

      <h2>Why Use JSX?</h2>
      <p>
        JSX is used in React to describe what the UI should look like. Instead
        of separating HTML and JavaScript into two different files, JSX allows
        you to write them together in a more natural way. This keeps your code
        cleaner and easier to manage, especially as your app grows.
      </p>
      <p>
        Behind the scenes, JSX is converted to JavaScript. So, when the browser
        reads your code, it’s actually dealing with JavaScript, not raw HTML.
        But don’t worry—React handles this conversion for you, so you don’t have
        to think about it.
      </p>

      <h2>How JSX Works</h2>
      <p>
        JSX looks like HTML but is actually JavaScript. It allows you to create
        components (which you’ll learn more about soon) and dynamically update
        your UI based on user interaction or data changes.
      </p>
      <p>For example, here’s a simple JSX element:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  const element = <h1>Hello, world!</h1>;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This looks like an HTML <code>{`<h1>`} </code> element, but it's
        actually JSX, which React will convert into JavaScript code.
      </p>

      <h2>Where Does JSX Fit in the Project?</h2>
      <p>
        In the project structure we explored earlier, you’ll typically see JSX
        used inside the <strong>App.js </strong> file and any new components you
        create. Every time you want to define what your UI looks like, you’ll be
        using JSX.
      </p>
      <p>
        Remember the <code>{`<div id="root"></div>`} </code> inside the{" "}
        <strong>index.html </strong> file in the <strong>public/ </strong>{" "}
        folder? React uses <strong> JSX </strong>to "inject" your components
        into that <strong>{`div`}</strong> . This is how everything you build
        using JSX shows up in the browser.
      </p>
      <AdUnit />
      <h2>JSX is More Powerful Than HTML</h2>
      <p>
        Unlike regular HTML, JSX allows you to embed JavaScript code inside it.
        This means you can dynamically control your UI based on data,
        conditions, or user actions. You can also reuse components, making your
        code more efficient.
      </p>
      <p>Let’s see an example where we use JSX to display dynamic data:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  const name = 'Medi';
  const element = <h1>Hello, {name}!</h1>;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <strong>{`name`}</strong> is JavaScript code that will
        be replaced by the value of the variable <strong>{`name`} </strong>.
        When this runs, the browser will display <strong>Hello, Medi! </strong>{" "}
        .
      </p>
      <AdUnit />
      <h2>Wrapping Up JSX</h2>
      <p>
        JSX is an important concept to understand because it forms the
        foundation of how you’ll build React apps. You use it to define your UI
        and control how elements are displayed on the screen.
      </p>
      <p>
        Now that you have a basic understanding of JSX, let’s dive deeper into
        its syntax and best practices, so you can start writing clean and
        efficient JSX code.
      </p>

      <div className="button-container">
        <button
          onClick={() =>
            (window.location.href = "/underStandingProjectStructure")
          }
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/JSXAttributes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroJSX;

export const JSXAttributes = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Attributes in JSX: Enhancing UI Elements</h1>

      <p>
        In JSX, attributes work similarly to HTML. These attributes allow you to
        modify the behavior or appearance of elements, like adding links,
        setting styles, or adding an image source. However, there are some
        differences between HTML attributes and JSX attributes, so let's explore
        them carefully.
      </p>

      <strong>1. Using Attributes in JSX</strong>
      <p>
        Just like in HTML, you can add attributes to JSX elements to modify
        their behavior. For example, to create an image or set a class for
        styling, you would use attributes such as <strong>src</strong> and{" "}
        <strong>class</strong> in HTML.
      </p>

      <p>In JSX, it looks like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // HTML
  <img src="logo.png" alt="Logo" />

  // JSX
  <img src="logo.png" alt="Logo" />
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Notice how JSX and HTML are almost the same in this case. You still use
        attributes like <strong>src</strong> for images and <strong>alt</strong>{" "}
        for alternative text.
      </p>

      <strong>2. Differences Between HTML and JSX Attributes</strong>
      <p>
        While JSX looks a lot like HTML, there are some differences, especially
        in how attributes are written. One major difference is that in JSX, some
        HTML attributes have different names. Let's look at a common example:
      </p>

      <p>In HTML, you write:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  <div class="container"></div>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>But in JSX, you write:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  <div className="container"></div>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This is because <strong>class</strong> is a reserved word in JavaScript.
        To avoid confusion, JSX uses <strong>className</strong> instead of{" "}
        <strong>class</strong>. This is one of the most important things to
        remember when adding classes to JSX elements.
      </p>
      <AdUnit />
      <strong>3. CamelCase for Attributes</strong>
      <p>
        Another key difference in JSX is how certain attributes are written. In
        HTML, you might be used to writing attributes in lowercase, like{" "}
        <strong>onclick</strong>. However, in JSX, we use something called{" "}
        <strong>camelCase</strong>.
      </p>

      <p>
        CamelCase means the first letter is lowercase, and the second word
        starts with a capital letter.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // HTML
  <button onclick="handleClick()">Click Me</button>

  // JSX
  <button onClick={handleClick}>Click Me</button>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Notice that <strong>onclick</strong> in HTML becomes{" "}
        <strong>onClick</strong> in JSX. This camelCase rule applies to many
        attributes, including <strong>onClick</strong>,{" "}
        <strong>onChange</strong>, and <strong>onSubmit</strong>.
      </p>

      <strong>4. Embedding JavaScript in JSX Attributes</strong>
      <p>
        One of the powerful features of JSX is that you can embed JavaScript
        directly into attributes. To do this, you simply wrap the JavaScript
        code in curly braces <strong>{`{}`}</strong>.
      </p>

      <p>
        For example, if you want to dynamically set the source of an image, you
        can do this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  const imageUrl = "logo.png";
  return <img src={imageUrl} alt="Dynamic Logo" />;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The <strong>imageUrl</strong> inside the <strong>src</strong> attribute
        tells JSX to use the value of the <strong>imageUrl</strong> variable.
        This allows you to make your JSX more flexible and dynamic.
      </p>

      <strong>5. Self-Closing Tags</strong>
      <p>
        In HTML, some tags, like <strong>img</strong> and <strong>input</strong>
        , are self-closing. This means they don’t need a separate closing tag
        like <strong>&lt;/img&gt;</strong>. JSX follows the same rule, but you
        must always add a slash (<strong>/</strong>) at the end of the tag to
        close it properly.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // Correct
  <img src="logo.png" alt="Logo" />

  // Incorrect (will cause an error)
  <img src="logo.png" alt="Logo">
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Always remember to close self-closing tags with a slash (
        <strong>/</strong>) in JSX, or it will cause an error.
      </p>
      <AdUnit />
      <h2>Wrapping Up JSX Attributes</h2>
      <p>
        JSX attributes allow you to enhance your UI elements by adding
        functionality like classes, event handlers, and dynamic content. Just
        remember:
      </p>

      <ul>
        <li>
          Use <strong>className</strong> instead of <strong>class</strong> for
          CSS classes.
        </li>
        <li>
          Use camelCase for attributes like <strong>onClick</strong> and{" "}
          <strong>onChange</strong>.
        </li>
        <li>
          Embed JavaScript in attributes using curly braces{" "}
          <strong>{`{}`}</strong>.
        </li>
        <li>
          Close self-closing tags like <strong>img</strong> with a slash (
          <strong>/</strong>).
        </li>
      </ul>

      <p>
        Now that you know how to use attributes in JSX, you're ready to move on
        to learning about <strong>Functional Components</strong>. Components are
        the building blocks of a React app, and they allow you to break down
        your UI into smaller, reusable parts.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/introJsx")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/funcComp")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ImagesIMG = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Working with Images in React</h1>
      <p>
        When working with images in React, there are a few important things to
        understand, like where to place your images, how to import them, and how
        to display them inside your components. Let's walk through everything
        step-by-step.
      </p>

      <h2>1. Placing Your Images</h2>
      <p>
        First, it's important to know where to store your images in a React
        project. By default, when you create a new React project, you'll see a
        folder called <code>public</code> and a folder called <code>src</code>.
      </p>
      <ul>
        <li>
          <strong>The public folder:</strong> This folder is for static files,
          like images, that won’t change as your application runs. Images placed
          here can be accessed directly from the HTML file.
        </li>
        <li>
          <strong>The src folder:</strong> This folder is where you write your
          components and logic. Images placed here will need to be imported into
          your components before being used.
        </li>
      </ul>

      <h3>Where Should You Store Your Images?</h3>
      <p>
        For most cases, you’ll want to store your images in the <code>src</code>{" "}
        folder, because you’ll likely use them in your components.
      </p>

      <h2>2. Adding an Image to Your Project</h2>
      <p>
        To demonstrate how to work with images in React, let's walk through the
        process of adding an image to a component.
      </p>

      <h3>Step 1: Add the Image to Your src Folder</h3>
      <p>
        First, copy an image into your project’s <code>src</code> folder. For
        example, you can create a new folder inside <code>src</code> called{" "}
        <code>images</code> and place your image there.
      </p>
      <p>
        Let’s say you added an image called <code>logo.png</code> to the{" "}
        <code>src/images</code> folder.
      </p>

      <h3>Step 2: Import the Image in Your Component</h3>
      <p>
        In React, to use an image in your JSX code, you first need to import it.
        Here’s how you can import the image into a component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import logo from './images/logo.png'; // Adjust the path based on where your image is stored

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src={logo} alt="App Logo" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Explanation:</h3>
      <ul>
        <li>
          <strong>Importing the image:</strong> The line{" "}
          <code>import logo from './images/logo.png';</code> tells React to
          import the image file so we can use it inside the component.
        </li>
        <li>
          <strong>Displaying the image:</strong> Inside the JSX, we use an{" "}
          <code>&lt;img&gt;</code> tag and set the <code>src</code> attribute to
          the image we imported.
        </li>
        <li>
          <strong>The alt attribute:</strong> This is for accessibility. If the
          image fails to load, the text inside the <code>alt</code> attribute
          will be shown instead. It’s also helpful for screen readers.
        </li>
      </ul>

      <h2>3. Working with Images in the public Folder</h2>
      <p>
        Sometimes, you might want to store your images in the{" "}
        <code>public</code> folder. This is useful when you want your images to
        be available to the browser directly, without having to import them in
        your components.
      </p>
      <h3>Step 1: Place the Image in the public Folder</h3>
      <p>
        Let’s say you have an image called <code>banner.jpg</code> that you
        place directly inside the <code>public</code> folder.
      </p>
      <h3>Step 2: Access the Image Without Importing</h3>
      <p>
        When you place images in the <code>public</code> folder, you don’t need
        to import them. You can reference them by their URL relative to the{" "}
        <code>public</code> folder, like this:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src="/banner.jpg" alt="Website Banner" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h2>4. Using Dynamic Image Paths</h2>
      <p>
        Sometimes, you might want to display images based on certain conditions
        or data. In these cases, you can use dynamic image paths. Here's an
        example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import apple from './images/apple.png';
import banana from './images/banana.png';

const App = () => {
  const fruits = [
    { name: 'Apple', image: apple },
    { name: 'Banana', image: banana },
  ];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <h2>{fruit.name}</h2>
          <img src={fruit.image} alt={fruit.name} />
        </div>
      ))}
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>5. Styling Images in React</h2>
      <p>You can style images in React in two ways:</p>
      <h3>Inline Styling:</h3>
      <pre>
        <code>
          {`<img src={logo} alt="App Logo" style={{ width: '200px', height: 'auto' }} />`}
        </code>
      </pre>

      <h3>Using CSS Classes:</h3>
      <p>
        Create a CSS file (e.g., <code>App.css</code>) and add some styles for
        your image:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`/* App.css */
.image-logo {
  width: 200px;
  height: auto;
  border-radius: 10px;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Then, import the CSS file and apply the class to your image:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import './App.css';
import logo from './images/logo.png';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src={logo} alt="App Logo" className="image-logo" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>6. Common Issues with Images in React</h2>
      <h3>Issue 1: Image Not Displaying</h3>
      <p>If your image isn't displaying, check:</p>
      <ul>
        <li>
          <strong>Correct Path:</strong> Ensure the path to the image is
          correct.
        </li>
        <li>
          <strong>File Location:</strong> Verify the image is in the right
          location.
        </li>
      </ul>

      <h3>Issue 2: Image Loads Slowly</h3>
      <p>
        If your image loads slowly, optimize its file size before using it in
        your app.
      </p>
      <AdUnit />
      <h2>7. Summary</h2>
      <p>
        Working with images in React is straightforward. Store images in the{" "}
        <code>src</code> folder and import them into your components, or place
        them in the <code>public</code> folder for direct access. You can also
        style and dynamically load images in React.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/RenderingComp")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/jsxSyntax")}>
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
      <h1>JSX Syntax and Best Practices</h1>

      <p>
        Now that you understand what JSX is, let’s talk about how to write it
        correctly. JSX has a specific syntax that must be followed, and there
        are best practices that will help you avoid common mistakes.
      </p>

      <h2>1. JSX Elements Must Be Wrapped in One Parent Element</h2>
      <p>
        In JSX, every component must return a single element. This doesn’t mean
        you can only have one HTML element, but that all your HTML elements must
        be wrapped in one “parent” container.
      </p>
      <p>
        For example, if you try to return two sibling elements without a parent
        container, you will get an error:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // This will cause an error
  return (
    <h1>Hello</h1>
    <p>Welcome to React</p>
  );
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        To fix this, you need to wrap them in a single parent element, like a{" "}
        {`<div>`} or a {`<React.Fragment>`}:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // This is correct
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        A good practice is to use {`<React.Fragment>`} when you don’t want to
        add extra HTML elements to your page but still need a parent wrapper.
      </p>

      <h2>2. JSX Must Close All Tags</h2>
      <p>
        Unlike regular HTML, JSX requires that every tag must be properly
        closed, even the ones that don’t usually need a closing tag in HTML,
        like {`<img>`}, {`<input>`}, or {`<br>`}.
      </p>
      <p>In HTML, you might write this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  <img src="image.jpg">
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>But in JSX, you must close it with a self-closing tag like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  <img src="image.jpg" />
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This rule applies to all elements that don’t have a closing tag in
        regular HTML, such as <code> {` <input />`}</code>,{" "}
        <code>{`<br />`}</code>, and <code>{`<hr />`}</code>.
      </p>
      <AdUnit />
      <h2>3. JSX is Case-Sensitive</h2>
      <p>
        In JSX, all HTML tags must be written in lowercase, like {`<div>`},{" "}
        {`<h1>`}, and {`<p>`}. However, when you create your own components
        (which you’ll learn about soon), those components must start with an
        uppercase letter.
      </p>
      <p>For example, this is how you’d create a custom component:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // Correct
  function MyComponent() {
    return <h1>This is my custom component</h1>;
  }

  // Incorrect (will cause an error)
  function mycomponent() {
    return <h1>This is my custom component</h1>;
  }
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This distinction helps React know whether you’re using a standard HTML
        element or a custom component you’ve created.
      </p>

      <h2>4. Embedding JavaScript in JSX</h2>
      <p>
        One of the most powerful features of JSX is that you can embed
        JavaScript code directly within it. To do this, you simply use curly
        braces `{}` around your JavaScript code.
      </p>
      <p>
        For example, you can display a JavaScript variable inside JSX like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  const name = "Medi";
  return <h1>Hello, {name}!</h1>;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The curly braces `{name}` allow you to insert the value of the `name`
        variable into the JSX, and React will display it as "Hello, Medi!" in
        the browser.
      </p>

      <h2>5. Use CamelCase for HTML Attributes</h2>
      <p>
        In regular HTML, attributes like `class` and `onclick` are written in
        lowercase. However, in JSX, you need to use **camelCase** for
        attributes. This means that the first word is lowercase, and any
        subsequent words are capitalized.
      </p>
      <p>For example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  // HTML
  <button class="btn">Click Me</button>
  
  // JSX (using camelCase)
  <button className="btn">Click Me</button>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Notice that `class` becomes `className` in JSX because `class` is a
        reserved word in JavaScript. Similarly, `onclick` becomes `onClick`, and
        `tabindex` becomes `tabIndex`.
      </p>
      <AdUnit />
      <h2>6. Comments in JSX</h2>
      <p>
        Adding comments in JSX is slightly different from regular JavaScript or
        HTML. In JSX, you use curly braces `{}` and `/* */` to add comments.
      </p>
      <p>Here’s how you add a comment inside JSX:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  return (
    <div>
      {/* This is a comment in JSX */}
      <h1>Hello, World!</h1>
    </div>
  );
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        If you try to use the regular HTML comment {`<!-- -->`}, it won’t work
        in JSX. Always use the JavaScript-style comments with curly braces and
        `/* */`.
      </p>

      <h2>7. Keep JSX Clean and Readable</h2>
      <p>
        One of the best practices in JSX is to keep your code clean and easy to
        read. Break long lines into multiple lines to make your code easier to
        understand.
      </p>
      <p>
        For example, instead of writing a long JSX element in one line, break it
        into multiple lines like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
  return (
    <div>
      <h1>Hello, Medi</h1>
      <p>Welcome to React</p>
    </div>
  );
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This makes your code more readable and maintainable, especially when
        working in larger teams or when revisiting your code after some time.
      </p>
      <AdUnit />
      <h2>Wrapping Up JSX Syntax and Best Practices</h2>
      <p>
        Understanding JSX syntax and following best practices will make your
        code cleaner, easier to debug, and more maintainable. JSX might look a
        little strange at first, but once you get the hang of it, it will become
        second nature. The most important things to remember are:
      </p>
      <ul>
        <li>Always wrap JSX elements in a single parent container.</li>
        <li>All tags must be properly closed, even self-closing tags.</li>
        <li>
          JSX is case-sensitive—HTML tags are lowercase, while custom components
          are uppercase.
        </li>
        <li>You can embed JavaScript inside JSX using curly braces `{}`.</li>
        <li>
          Use camelCase for HTML attributes (like `className` instead of
          `class`).
        </li>
        <li>Use `/* */` inside curly braces for comments in JSX.</li>
        <li>
          Write clean, readable code by breaking long lines into multiple lines.
        </li>
      </ul>

      <p>
        Following these best practices will help you avoid common mistakes and
        make your React components much easier to work with as you build more
        complex apps.
      </p>

      <p>
        Now that you’re familiar with JSX syntax and best practices, let’s move
        on to exploring **Attributes in JSX**. This will help you understand how
        to make your JSX elements more dynamic by adding properties like
        `className`, `src`, `href`, and more.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/imagesReact")}>
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
