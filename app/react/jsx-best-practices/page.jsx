import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JSX Syntax and Best Practices - MergeSociety",
  description:
    "Learn the essential JSX syntax and best practices for writing clean and efficient React components. Understand how to wrap elements, close tags, use camelCase, and embed JavaScript.",
  keywords: [
    "JSX",
    "React",
    "JavaScript",
    "Web Development",
    "Best Practices",
    "React Components",
    "JSX Syntax",
    "Coding Tutorials",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/jsx-best-practices",
  },
  openGraph: {
    title: "JSX Syntax and Best Practices - MergeSociety",
    description:
      "Master JSX syntax and best practices to enhance your React components. Discover how to write clean and maintainable code.",
  },
};

const BestPractice = () => {
  return (
    <div className="lesson-container">
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
        The curly braces `name` allow you to insert the value of the `name`
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

      <Button whereToGo={"conditional-rendering"} />
    </div>
  );
};

export default BestPractice;
