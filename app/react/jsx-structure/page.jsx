import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JSX Structure and Container Elements",
  description:
    "Discover how to effectively structure your JSX in React. This beginner's guide covers the one parent rule, container elements, nesting, fragments, and adding JavaScript to JSX.",
  keywords: [
    "JSX structure",
    "React components",
    "container elements",
    "React nesting",
    "JavaScript in JSX",
    "React beginner's guide",
    "web development tutorials",
    "programming for beginners",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/jsx-structure",
  },
  openGraph: {
    title:
      "JSX Structure and Container Elements: A Comprehensive Beginner's Guide",
    description:
      "Learn how to structure your JSX code effectively in React. Understand container elements, nesting, and using JavaScript within JSX for dynamic content.",
  },
};

const Struture = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>
          JSX Structure and Container Elements: A Comprehensive Beginner's Guide
        </h1>

        <p>
          Hello there! 👋 You've already learned about JSX, and now we're going
          to explore how to structure your JSX, use container elements, and
          learn some cool new tricks! By the end of this guide, you’ll have a
          solid understanding of how to organize your JSX code in a way that
          keeps everything clear and working smoothly.
        </p>

        <h2>Why Do We Need to Structure Our JSX?</h2>
        <p>
          Think of JSX like building blocks in a game or stacking bricks to
          build a tower. If you don't arrange the blocks correctly, the tower
          will fall. JSX works in a similar way. We need to carefully arrange
          our JSX code to make sure the React component functions properly.
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
          component, all your elements must be wrapped inside a single
          container. It’s like packing items into a box—you can’t hand over
          several items separately without putting them into one box first.
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
          elements (<code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>) without
          a single parent wrapping them. It’s like trying to hold two cups of
          water in one hand without a tray—it will get messy!
        </p>

        <p>
          To fix this, we can wrap these elements in a container. Usually, we
          use a <code>&lt;div&gt;</code> (a general-purpose container) to hold
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

        <h3>Using Container Elements</h3>
        <p>
          A container element is like a box that holds other elements inside it.
          In HTML, different container elements are used for organizing content.
          In React, we commonly use <code>&lt;div&gt;</code>, but there are
          other options that make your code more meaningful.
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
            <code>&lt;article&gt;</code>: Use this when the content makes sense
            by itself, like a blog post or an article.
          </li>
          <li>
            <code>&lt;header&gt;</code>: This is used for the top part of your
            page or a section, typically where a title or navigation goes.
          </li>
          <li>
            <code>&lt;footer&gt;</code>: This is for the bottom part of your
            page, where copyright information or contact details often go.
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
          organize different parts of the webpage. The{" "}
          <code>&lt;header&gt;</code> contains the main title,{" "}
          <code>&lt;nav&gt;</code> contains the navigation links,{" "}
          <code>&lt;section&gt;</code> contains the "About Us" content, and{" "}
          <code>&lt;footer&gt;</code> contains the copyright notice. Structuring
          content like this makes it easier for both users and developers to
          understand the layout of your page.
        </p>

        <h3>Nesting Elements</h3>
        <p>
          Nesting is when you place one element inside another. It’s like
          putting smaller boxes inside bigger ones. This helps to group related
          content together.
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

        <h3>Introducing Fragments: A Special Container</h3>
        <p>
          Sometimes, you don’t want to add an extra HTML element like a{" "}
          <code>&lt;div&gt;</code>. Maybe you just need something to group
          elements together without affecting your layout. That’s where{" "}
          <strong>fragments</strong> come in!
        </p>

        <p>
          A fragment is an invisible container that holds elements without
          adding anything extra to the HTML. This is useful when you need to
          group elements but don't want to mess up the design with extra HTML
          tags.
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

        <h3>Adding JavaScript to Your JSX</h3>
        <p>
          One of the coolest things about JSX is that it allows you to combine
          HTML-like syntax with JavaScript. To add JavaScript inside your JSX,
          you use curly braces <code>{"{}"}</code>. Inside these braces, you can
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

        <Button whereToGo={"creating-rendering-jsx"} />
      </div>
    </div>
  );
};

export default Struture;
