import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Introduction to JSX: Learn JavaScript XML in React",
  description:
    "Explore the fundamentals of JSX in React. Understand how JSX integrates JavaScript and HTML-like syntax to build user interfaces. Perfect for beginners looking to enhance their React skills.",
  keywords:
    "JSX, JavaScript XML, React, React tutorials, learn JSX, web development, front-end development, JavaScript, UI development",

  alternates: {
    canonical: "https://www.mergesociety.com/react/jsx-intro",
  },

  openGraph: {
    title: "Introduction to JSX: Learn JavaScript XML in React",
    description:
      "Master the basics of JSX, a crucial component of React for creating dynamic user interfaces. This lesson is ideal for beginners and covers essential JSX syntax and practices.",
  },
};

const JSX = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Introduction to JSX (JavaScript XML)</h1>

        <p>
          Now that you’ve set up your React project and understand its
          structure, the next step is learning how to build the user interface
          of your app. In React, we use something called <strong>JSX </strong>{" "}
          to create the UI.
        </p>

        <h2>What is JSX?</h2>
        <p>
          <strong> JSX </strong>stands for <strong> JavaScript XML</strong>.
          It’s a syntax that allows us to write HTML-like code inside
          JavaScript. JSX is very useful because it makes it easier to visualize
          the structure of your user interface right inside your JavaScript
          code.
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
          Behind the scenes, JSX is converted to JavaScript. So, when the
          browser reads your code, it’s actually dealing with JavaScript, not
          raw HTML. But don’t worry—React handles this conversion for you, so
          you don’t have to think about it.
        </p>

        <h2>How JSX Works</h2>
        <p>
          JSX looks like HTML but is actually JavaScript. It allows you to
          create components (which you’ll learn more about soon) and dynamically
          update your UI based on user interaction or data changes.
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
          used inside the <strong>App.js </strong> file and any new components
          you create. Every time you want to define what your UI looks like,
          you’ll be using JSX.
        </p>
        <p>
          Remember the <code>{`<div id="root"></div>`} </code> inside the{" "}
          <strong>index.html </strong> file in the <strong>public/ </strong>{" "}
          folder? React uses <strong> JSX </strong>to "inject" your components
          into that <strong>{`div`}</strong> . This is how everything you build
          using JSX shows up in the browser.
        </p>

        <h2>JSX is More Powerful Than HTML</h2>
        <p>
          Unlike regular HTML, JSX allows you to embed JavaScript code inside
          it. This means you can dynamically control your UI based on data,
          conditions, or user actions. You can also reuse components, making
          your code more efficient.
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
          In this example, <strong>{`name`}</strong> is JavaScript code that
          will be replaced by the value of the variable{" "}
          <strong>{`name`} </strong>. When this runs, the browser will display{" "}
          <strong>Hello, Medi! </strong> .
        </p>

        <h2>Wrapping Up JSX</h2>
        <p>
          JSX is an important concept to understand because it forms the
          foundation of how you’ll build React apps. You use it to define your
          UI and control how elements are displayed on the screen.
        </p>
        <p>
          Now that you have a basic understanding of JSX, let’s dive deeper into
          its syntax and best practices, so you can start writing clean and
          efficient JSX code.
        </p>

        <Button whereToGo={"jsx-attributes"} />
      </div>
    </div>
  );
};

export default JSX;
