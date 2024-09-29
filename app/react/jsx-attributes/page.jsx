import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering JSX Attributes in React",
  description:
    "Learn how to effectively use attributes in JSX to enhance your React applications. Understand the differences between HTML and JSX attributes, camelCase syntax, embedding JavaScript, and self-closing tags. Perfect for beginners in web development.",
  keywords:
    "JSX, React, JSX attributes, web development, JavaScript, HTML, React components, coding tutorials",

  openGraph: {
    type: "article",
    title: "Mastering JSX Attributes in React",
    description:
      "Dive deep into JSX attributes in React. Explore how to modify UI elements, understand attribute syntax differences, and learn best practices for dynamic content.",
  },
};

const JSXAttribute = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"functional-components"} />
    </div>
  );
};

export default JSXAttribute;
