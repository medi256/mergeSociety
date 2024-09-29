import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "React Components: A Comprehensive Beginner's Guide",
  description:
    "Learn about React components in this detailed guide. Understand what components are, how to create and use them, and practice with simple examples.",
  keywords:
    "React, components, beginner guide, functional components, JavaScript, web development",
  robots: "index, follow",
  openGraph: {
    title: "React Components: A Comprehensive Beginner's Guide",
    description:
      "Discover the basics of React components in this friendly guide. Perfect for beginners who want to learn how to create reusable components.",

    type: "article",
  },
};

const Component = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"jsx-structure"} />
    </div>
  );
};

export default Component;
