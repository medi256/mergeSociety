import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Handling Events in React (Functional Components) - MergeSociety",
  description:
    "Master event handling in React functional components. Learn how to handle button clicks, pass arguments to event handlers, and understand the differences between React events and regular HTML events.",
  keywords:
    "React, event handling, functional components, button clicks, onClick, web development, JavaScript, programming, interactive applications",

  openGraph: {
    title: "Handling Events in React (Functional Components) - MergeSociety",
    description:
      "Explore how to handle events in React, focusing on button clicks and passing arguments to event handlers. Enhance your React skills with this comprehensive lesson.",

    type: "article",
  },
};

const EventHandlers = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Handling Events in React (Functional Components)</h1>
      <p>
        In web development, events are actions that occur when the user
        interacts with your app. Common examples of events include clicking a
        button, hovering over an element, or submitting a form. React allows you
        to handle these events in a structured way using event handlers.
      </p>
      <p>
        In this lesson, we will focus on handling button clicks. This is a
        simple and important concept for beginners because it helps make your
        app interactive.
      </p>

      <h2>
        Key Differences in Handling Events in React vs. Regular HTML/JavaScript
      </h2>
      <p>
        Before we dive into examples, let’s cover a couple of important
        differences between how React handles events compared to regular HTML
        and JavaScript:
      </p>
      <ul>
        <li>
          React uses camelCase for event names. For example,{" "}
          <code>onClick</code> in React instead of <code>onclick</code> in
          regular HTML.
        </li>
        <li>
          Instead of strings, in React, you pass a function as the event
          handler. In HTML, you might write something like{" "}
          <code>onclick="doSomething()"</code>, but in React, you pass the
          function directly without quotes.
        </li>
      </ul>
      <p>
        These differences make React event handling more powerful and flexible.
      </p>

      <h2>Handling a Button Click</h2>
      <p>
        Let’s start with a very simple example where we respond to a button
        click. When the user clicks the button, we’ll display a message.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

function App() {
  // This function will run when the button is clicked
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking Down the Example:</h3>
      <ul>
        <li>
          <strong>The handleClick function:</strong> This is the function that
          React will run whenever the button is clicked. In this case, the
          function shows a pop-up alert that says "Button was clicked!"
        </li>
        <li>
          <strong>The onClick event:</strong> We attach the <code>onClick</code>{" "}
          event directly to the button. Whenever the button is clicked, the
          event triggers the <code>handleClick</code> function, which then shows
          the alert message.
        </li>
      </ul>
      <p>
        Notice that in React, the event name is <code>onClick</code> (camelCase)
        instead of the lowercase <code>onclick</code> that you might have seen
        in regular HTML.
      </p>
      <p>
        <strong>Why are we passing the function directly?</strong> In React,
        instead of wrapping the function name in quotes like{" "}
        <code>"handleClick()"</code>, we just pass the function name{" "}
        <code>handleClick</code> without parentheses. This is because we want
        the function to run only when the button is clicked, not immediately
        when the page loads.
      </p>

      <h2>Passing Information to the Event Handler</h2>
      <p>
        There may be situations where you want to handle different actions based
        on which button is clicked. For example, imagine you have multiple
        buttons on the page, and you want to know exactly which button the user
        clicked. To handle this, you can pass arguments (or values) to the event
        handler.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

function App() {
  // This function accepts a 'buttonName' and shows it in the alert
  function handleClick(buttonName) {
    alert(\`\${buttonName} button was clicked!\`);
  }

  return (
    <div>
      <button onClick={() => handleClick('First')}>First Button</button>
      <button onClick={() => handleClick('Second')}>Second Button</button>
    </div>
  );
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking Down the Example:</h3>
      <ul>
        <li>
          <strong>The handleClick function:</strong> This function is slightly
          different from the previous one. It now accepts an argument called{" "}
          <code>buttonName</code>. When the button is clicked, this function
          shows which button was clicked by displaying a message like "First
          button was clicked!" or "Second button was clicked!".
        </li>
        <li>
          <strong>Passing Arguments to the Event Handler:</strong> In order to
          pass the name of the button to the <code>handleClick</code> function,
          we use an arrow function inside the <code>onClick</code> event:{" "}
          <code>{`onClick={() => handleClick("First")}`}</code>. This allows us
          to pass the string 'First' to the function when the first button is
          clicked, and 'Second' when the second button is clicked.
        </li>
      </ul>
      <p>
        <strong>Why use an arrow function?</strong> If you tried to write{" "}
        <code>{`onClick={handleClick("First")}`}</code>, the function would run
        immediately when the page loads, and we don’t want that. By using the
        arrow function <code>{`() => handleClick('First')`}</code>, it only runs
        when the button is actually clicked.
      </p>
      <AdUnit />
      <h2>How React Event Handling Works Under the Hood</h2>
      <p>
        React uses something called Synthetic Events to handle events across
        different browsers in a consistent way. This means you don’t have to
        worry about browser differences when handling events. While you don’t
        need to dive into the technical details of synthetic events as a
        beginner, it’s good to know that React handles some of the
        behind-the-scenes work for you, making things easier and more
        predictable.
      </p>

      <h2>Common Events in React</h2>
      <p>
        While we’ve focused on the <code>onClick</code> event here, React
        supports many other events that you might use depending on what you’re
        building. Here are a few common ones:
      </p>
      <ul>
        <li>
          <code>onMouseEnter</code>: Runs when the user hovers their mouse over
          an element.
        </li>
        <li>
          <code>onMouseLeave</code>: Runs when the user stops hovering over an
          element.
        </li>
        <li>
          <code>onKeyDown</code>: Runs when the user presses a key on their
          keyboard.
        </li>
        <li>
          <code>onFocus</code>: Runs when an element (like an input field) gains
          focus.
        </li>
        <li>
          <code>onBlur</code>: Runs when an element loses focus (e.g., when a
          user clicks outside an input field).
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        In this lesson, we’ve covered the basics of handling events in React
        functional components. We learned how to:
      </p>
      <ul>
        <li>
          Attach event handlers like <code>onClick</code> to elements in React.
        </li>
        <li>Write functions that respond to events like button clicks.</li>
        <li>
          Pass arguments to event handlers so we can control what happens based
          on user actions.
        </li>
      </ul>
      <p>
        This is an important part of building interactive web apps, and
        mastering event handling will give you more control over how your app
        behaves.
      </p>
      <AdUnit />
      <h3>Recap:</h3>
      <ul>
        <li>
          <strong>Handling Button Clicks:</strong> We attach the{" "}
          <code>onClick</code> event to a button and run a function when the
          user clicks it.
        </li>
        <li>
          <strong>Passing Arguments:</strong> We can pass specific information
          to our event handler functions using arrow functions inside{" "}
          <code>onClick</code>.
        </li>
        <li>
          <strong>Common React Events:</strong> React has many events like{" "}
          <code>onClick</code>, <code>onMouseEnter</code>,{" "}
          <code>onKeyDown</code>, and more, giving you control over different
          user interactions.
        </li>
      </ul>
      <p>
        By practicing handling events, you’ll be able to make your React apps
        interactive and dynamic!
      </p>

      <Button whereToGo={"functional-event-handling"} />
    </div>
  );
};

export default EventHandlers;
