import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IntroHooks = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Introduction to Hooks in React</h1>

      <h2>What Are Hooks?</h2>
      <p>
        Before we dive into Hooks, let's first talk about{" "}
        <strong>functional components</strong> and{" "}
        <strong>class components</strong> in React.
      </p>
      <p>React started with two main types of components:</p>
      <ul>
        <li>Class components</li>
        <li>Functional components</li>
      </ul>

      <p>Class components were used when you needed to do things like:</p>
      <ul>
        <li>
          Keeping track of data that changes over time (called{" "}
          <strong>state</strong>).
        </li>
        <li>
          Running certain code when a component appears on the screen or when
          something changes (called <strong>side effects</strong>).
        </li>
      </ul>

      <p>
        On the other hand, functional components were simpler. They didn’t have
        state or side effects and were just used to display static data.
      </p>
      <p>
        However, as developers started building more complex apps, they needed
        state and side effects even in simple functional components. That’s
        where Hooks came in.
      </p>
      <p>
        Hooks are special functions that allow you to add extra powers to
        functional components. They let you do things like:
      </p>
      <ul>
        <li>
          Manage <strong>state</strong> (data that can change over time, like a
          counter or a form input).
        </li>
        <li>
          Handle <strong>side effects</strong> (such as fetching data from an
          API, setting up timers, or interacting with the browser).
        </li>
      </ul>

      <p>
        Hooks make it possible to write components in a simpler, more organized
        way using functions instead of classes.
      </p>

      <h2>Why Did React Create Hooks?</h2>
      <p>
        To understand why Hooks are so important, let’s imagine a real-life
        situation:
      </p>
      <p>
        Let's say you’re building a simple app with a button that increases a
        number on the screen each time you click it. This number is data that
        changes over time — it's called <strong>state</strong> in React.
      </p>

      <p>
        Before Hooks were created, you would have to write this button component
        using a class to manage the state, and that made things a little harder
        to understand, especially for beginners. Class components involve more
        setup, extra keywords, and different rules you have to follow.
      </p>

      <p>
        For example, in a class component, you had to use the{" "}
        <strong>this</strong> keyword to refer to your component, which could
        easily confuse new developers. You also had to remember different
        methods like <code>componentDidMount</code>,{" "}
        <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>{" "}
        to handle side effects.
      </p>

      <p>
        But with Hooks, React gave us an easier and cleaner way to manage things
        like state and side effects in functional components, which are much
        simpler to write.
      </p>

      <p>
        Hooks make functional components just as powerful as class components
        but without all the complexity.
      </p>
      <AdUnit />
      <h2>How Do Hooks Work?</h2>
      <p>
        Think of a Hook as a special tool that adds powers to your functional
        components. Hooks let you do things like:
      </p>
      <ul>
        <li>
          Track changes in your data (using <strong>state</strong>).
        </li>
        <li>
          Run certain code when your component loads or updates (like fetching
          data or setting timers).
        </li>
      </ul>

      <p>
        There are different types of Hooks for different jobs, but the three
        most important ones are:
      </p>
      <ul>
        <li>
          <strong>useState</strong>: This helps your component remember and
          update changing data, like user input or button clicks.
        </li>
        <li>
          <strong>useEffect</strong>: This helps you run some code when your
          component is created, updated, or removed. It’s useful for things like
          fetching data from the server or cleaning up resources like timers.
        </li>
        <li>
          <strong>useContext</strong>: This helps your component share data
          across different parts of your app without passing props down manually
          through every level.
        </li>
      </ul>

      <h2>How Hooks Changed React</h2>
      <p>Before Hooks, if you wanted to:</p>
      <ul>
        <li>Keep track of changing data (state),</li>
        <li>
          Perform actions when your component was loaded or updated (side
          effects),
        </li>
      </ul>
      <p>
        You had to use class components, which made things more complicated.
      </p>

      <p>Hooks allow you to:</p>
      <ul>
        <li>Use all these features in functional components.</li>
        <li>Write less code that is easier to read and understand.</li>
      </ul>

      <p>With Hooks, React became easier for beginners to learn because:</p>
      <ul>
        <li>
          Functional components are simpler to write than class components.
        </li>
        <li>
          Hooks give functional components the same powers that class components
          have, without the confusing <code>this</code> keyword or complex
          lifecycle methods.
        </li>
      </ul>

      <p>In short:</p>
      <ul>
        <li>Hooks make your code cleaner, simpler, and easier to manage.</li>
        <li>
          You no longer need class components for features like state or side
          effects.
        </li>
        <li>React has become easier to learn because of Hooks.</li>
      </ul>

      <h2>Why Are Hooks So Powerful?</h2>
      <p>Let’s look at some of the key things Hooks let you do:</p>
      <ul>
        <li>
          <strong>Managing State</strong>: State is any data in your component
          that can change over time, like the text a user types in a form or the
          number of clicks on a button. Before Hooks, you had to use class
          components to manage state. With Hooks, you can use the{" "}
          <code>useState</code> Hook in functional components to keep track of
          and update your data.
        </li>
        <li>
          <strong>Handling Side Effects</strong>: Sometimes, you want your
          component to do something when it first appears on the screen, or when
          something changes. These actions, like fetching data from an API or
          setting up a timer, are called side effects. With the{" "}
          <code>useEffect</code> Hook, you can manage side effects in a clear
          and easy way without needing complex lifecycle methods.
        </li>
        <li>
          <strong>Sharing Data Across Components</strong>: Imagine you have a
          piece of data that multiple components in your app need to access.
          Instead of passing this data through every component in the tree using
          props (which can get messy), you can use the <code>useContext</code>{" "}
          Hook to make this data available wherever you need it, without passing
          it through every level manually.
        </li>
      </ul>
      <AdUnit />
      <h2>Conclusion: Hooks Make React Easier and More Powerful</h2>
      <p>To sum up:</p>
      <ul>
        <li>
          Hooks let you add more power to your functional components, such as
          managing state and handling side effects.
        </li>
        <li>
          Hooks make your code simpler, cleaner, and easier to understand,
          especially for beginners.
        </li>
        <li>
          With Hooks, you can do everything you could do in class components —
          but in a more straightforward way.
        </li>
      </ul>

      <p>
        In the next lessons, we’ll learn how to use some of the most important
        Hooks:
      </p>
      <ul>
        <li>
          <code>useState</code> (to manage state),
        </li>
        <li>
          <code>useEffect</code> (to handle side effects), and
        </li>
        <li>
          <code>useContext</code> (to share data across components).
        </li>
      </ul>

      <p>
        Each of these Hooks will give you new powers to build more interactive
        and dynamic React apps. We’ll start with the <code>useState</code> Hook
        in the next lesson!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/UseKey")}>back</button>
        <button onClick={() => (window.location.href = "/useState")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroHooks;

export const UseState = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>useState Hook in React</h1>

      <h2>What Is useState?</h2>
      <p>
        In React, <code>useState</code> is a special Hook that lets you add
        something called <strong>state</strong> to your functional components.
      </p>
      <p>But what exactly is state?</p>
      <p>
        Think of state as a way for your component to "remember" things. For
        example, imagine you’re building a simple counter app. The counter’s
        number will change every time you click a button. This number is your
        component's state because it keeps changing, but the component needs to
        "remember" the latest value.
      </p>
      <p>
        Without state, your component would forget the number each time it
        re-renders, and it would be stuck showing the same value.
      </p>
      <p>
        The <code>useState</code> Hook lets your component remember and update
        values over time.
      </p>

      <h2>Why Do We Need useState?</h2>
      <p>
        Before we had Hooks, we could only add state in class components. If you
        wanted a button to update a number, or a form to store user input, you’d
        have to write more complicated code using classes. But with{" "}
        <code>useState</code>, you can do this directly in functional
        components, making it much simpler.
      </p>
      <p>
        The <code>useState</code> Hook makes functional components more powerful
        by allowing them to keep track of changing values, such as:
      </p>
      <ul>
        <li>A counter that increases when a button is clicked.</li>
        <li>Text that a user types into an input field.</li>
        <li>Whether something is open or closed, like a dropdown menu.</li>
      </ul>
      <p>
        In short, <code>useState</code> is the easiest way to handle changing
        data in a React app.
      </p>

      <h2>How Does useState Work?</h2>
      <p>
        Let’s walk through how the <code>useState</code> Hook works, step by
        step. Here’s how you use it in a functional component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState } from 'react';

function ExampleComponent() {
// 1. Create a state variable and a function to update it
const [count, setCount] = useState(0);

return (
<div>
<p>The current count is: {count}</p>
<button onClick={() => setCount(count + 1)}>Increase Count</button>
</div>
);
}

export default ExampleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking It Down for Beginners</h3>
      <p>
        Let's break this code into smaller pieces so you can fully understand
        what's happening:
      </p>

      <h4>Import useState</h4>
      <p>
        First, at the top of the file, we import the <code>useState</code> Hook
        from React. You always need to import Hooks like <code>useState</code>{" "}
        before you use them in your component.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Create State Variables</h4>
      <p>
        Inside your functional component (<code>ExampleComponent</code>), you
        create something called a state variable. The <code>useState</code> Hook
        helps you do this.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [count, setCount] = useState(0);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>This line does a few important things:</p>
      <ul>
        <li>
          <code>count</code>: This is the state variable. It stores the current
          value of the counter, which starts at 0. Every time the state changes,
          React will remember the new value.
        </li>
        <li>
          <code>setCount</code>: This is the function that we use to update the
          value of <code>count</code>. Whenever you want to change the counter’s
          value, you call <code>setCount</code>.
        </li>
        <li>
          <code>useState(0)</code>: This tells React that <code>count</code>{" "}
          should start at 0. The 0 inside <code>useState()</code> is the initial
          state, meaning the first value that <code>count</code> will have when
          the component loads.
        </li>
      </ul>
      <AdUnit />
      <h4>Display the State Value</h4>
      <p>
        Inside the return part of the component, we show the current value of{" "}
        <code>count</code> using curly braces <code>{`{count}`}</code>. This
        tells React to display the value of <code>count</code> on the screen.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<p>The current count is: {count}</p>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Update the State</h4>
      <p>
        We also create a button that, when clicked, will increase the count by
        1. The button uses the <code>onClick</code> event to call the{" "}
        <code>setCount</code> function, updating the state.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<button onClick={() => setCount(count + 1)}>Increase Count</button>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Every time you click the button, <code>setCount(count + 1)</code> will
        update <code>count</code> by adding 1 to the current value. React will
        then re-render the component to show the new value of <code>count</code>{" "}
        on the screen.
      </p>

      <h2>What Does useState Actually Do?</h2>
      <p>Let’s take a closer look at what’s happening:</p>
      <ul>
        <li>
          <strong>Initial state:</strong> When the component first loads,{" "}
          <code>useState(0)</code> gives the <code>count</code> variable its
          initial value, which is 0 in this case.
        </li>
        <li>
          <strong>State changes:</strong> Each time you click the button, the{" "}
          <code>setCount</code> function updates the state. React then updates
          the component with the new value.
        </li>
        <li>
          <strong>Re-rendering:</strong> Whenever the state changes, React
          automatically re-renders the component to show the updated value of{" "}
          <code>count</code>.
        </li>
      </ul>
      <p>
        This is how your component "remembers" things like the number of times a
        button has been clicked — through state.
      </p>

      <h2>Important Things to Know About useState</h2>
      <ul>
        <li>
          <strong>State is only remembered inside the component:</strong> The
          state created with <code>useState</code> only exists in the component
          where you declare it. Each component can have its own state that
          doesn’t interfere with other components.
        </li>
        <li>
          <strong>State triggers re-rendering:</strong> Anytime you use the
          function from <code>useState</code> (like <code>setCount</code>),
          React will update the component with the new value and re-render it on
          the screen.
        </li>
        <li>
          <strong>State can be any type:</strong> The value in{" "}
          <code>useState</code> doesn’t have to be just a number. You can use{" "}
          <code>useState</code> with strings, booleans, objects, arrays —
          anything that can change over time.
        </li>
      </ul>

      <h2>More Real-Life Examples</h2>
      <p>
        Here are some examples of how you might use <code>useState</code> in
        real-life situations:
      </p>

      <h3>Tracking Form Input</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [name, setName] = useState('');

<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<p>Your name is: {name}</p>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>name</code> is the state that stores the user’s input.
        <br />
        <code>setName</code> updates the state every time the user types
        something new in the input field.
      </p>
      <AdUnit />
      <h3>Toggling Visibility</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
{isOpen ? 'Close Menu' : 'Open Menu'}
</button>
{isOpen && <div>This is the menu!</div>}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>isOpen</code> is the state that keeps track of whether the menu is
        open.
        <br />
        <code>setIsOpen</code> toggles the state between true and false whenever
        the button is clicked.
      </p>

      <h2>Conclusion: useState Makes Functional Components Powerful</h2>
      <p>To wrap up:</p>
      <ul>
        <li>
          <code>useState</code> lets your component "remember" and update values
          (like a counter or form input) over time.
        </li>
        <li>It’s an easy way to add state to your functional components.</li>
        <li>
          Using <code>useState</code>, you can build interactive apps that
          change based on what users do.
        </li>
      </ul>
      <p>
        In the next lesson, we’ll look at another important Hook:{" "}
        <code>useEffect</code>, which lets you handle side effects like fetching
        data or setting up timers when your component renders.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/introHook")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/useEffect")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const UseEffect = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Understanding the useEffect Hook in React</h1>

      <h2>What Is useEffect?</h2>
      <p>
        The <code>useEffect</code> Hook in React lets you perform{" "}
        <strong>side effects</strong> in your functional components. Side
        effects are operations that occur in your component but don't directly
        involve rendering the UI. Examples of side effects include:
      </p>
      <ul>
        <li>Fetching data from an API.</li>
        <li>Setting up a timer.</li>
        <li>Updating the document title.</li>
      </ul>
      <p>
        Before Hooks, these tasks were handled in class components using
        lifecycle methods. With <code>useEffect</code>, you can manage side
        effects in functional components more easily and directly.
      </p>

      <h2>Why Do We Need useEffect?</h2>
      <p>
        Imagine you have a component that needs to fetch user data from an API
        when it first appears on the screen. In class components, you’d use the{" "}
        <code>componentDidMount</code> lifecycle method for this task. With
        functional components, <code>useEffect</code> provides a more
        straightforward way to perform this operation.
      </p>

      <h2>Basic Usage of useEffect</h2>
      <p>
        Here's a step-by-step example of using <code>useEffect</code>:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState, useEffect } from 'react';

function SimpleEffectComponent() {
// 1. State to store a message
const [message, setMessage] = useState('Hello, world!');

// 2. useEffect to run code when the component mounts
useEffect(() => {
console.log('Component has mounted!');
}, []); // Empty array means this runs only once when the component mounts

return (
<div>
<h1>{message}</h1>
</div>
);
}

export default SimpleEffectComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking Down the Example</h3>
      <AdUnit />
      <h4>Importing useEffect</h4>
      <p>
        You need to import <code>useEffect</code> from the React library, along
        with <code>useState</code>.
      </p>
      <pre>
        <code>
          {" "}
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useState, useEffect } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Creating State</h4>
      <p>
        We use the <code>useState</code> Hook to create a state variable{" "}
        <code>message</code> with an initial value of 'Hello, world!'.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const [message, setMessage] = useState('Hello, world!');`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>message</code>: This state variable stores the message to display.
        <br />
        <code>setMessage</code>: This function updates the state of{" "}
        <code>message</code>.
      </p>

      <h4>Using useEffect</h4>
      <p>
        The <code>useEffect</code> Hook lets us run code when the component
        mounts (i.e., when it appears on the screen).
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`useEffect(() => {
console.log('Component has mounted!');
}, []);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        The first argument is a function containing the code to run. In this
        example, it logs 'Component has mounted!' to the console.
        <br />
        The second argument is an array of dependencies. An empty array{" "}
        <code>[]</code> means the effect runs only once after the component
        mounts, similar to <code>componentDidMount</code> in class components.
      </p>

      <h4>Rendering Output</h4>
      <p>
        The component displays the <code>message</code> state inside an{" "}
        <code>&lt;h1&gt;</code> tag.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`return (
<div>
<h1>{message}</h1>
</div>
);`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>More Detailed Examples</h2>

      <h3>Updating the Document Title</h3>
      <p>
        Here’s how to update the document title whenever the component mounts:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useEffect } from 'react';

function UpdateTitleComponent() {
useEffect(() => {
document.title = 'New Title';
}, []); // Runs only once when the component mounts

return (
<div>
<h1>Check the document title!</h1>
</div>
);
}

export default UpdateTitleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>document.title</code>: This changes the title of the browser tab.
        When the component mounts, the document title updates to 'New Title'.
      </p>
      <AdUnit />
      <h3>Setting Up a Timer</h3>
      <p>
        You can use <code>useEffect</code> to set up a timer that performs an
        action at regular intervals:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useEffect } from 'react';

function TimerComponent() {
useEffect(() => {
const timer = setInterval(() => {
console.log('Tick');
}, 1000); // Runs every second

// Cleanup function
return () => clearInterval(timer);
}, []); // Runs only once when the component mounts

return (
<div>
<h1>Check the console for "Tick" messages!</h1>
</div>
);
}

export default TimerComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>setInterval</code>: Sets up a timer that logs 'Tick' every second.
        <br />
        Cleanup function: The function returned from <code>useEffect</code>{" "}
        clears the timer when the component unmounts or before the effect runs
        again.
      </p>

      <h2>Key Points to Remember</h2>
      <ul>
        <li>
          <strong>useEffect Runs on Mount and Update:</strong> By default,{" "}
          <code>useEffect</code> runs after the component mounts. You can
          control its behavior using the dependencies array.
        </li>
        <li>
          <strong>Dependencies Array:</strong>
          <ul>
            <li>
              An empty array <code>[]</code> means the effect runs only once
              after the component mounts.
            </li>
            <li>
              If you include variables in the array, the effect will run
              whenever those variables change.
            </li>
          </ul>
        </li>
        <li>
          <strong>Cleanup Function:</strong> If your effect sets up something
          like a timer or subscription, provide a cleanup function to remove or
          clear those resources when the component unmounts.
        </li>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`useEffect(() => {
const timer = setInterval(() => {
console.log('Tick');
}, 1000);

return () => clearInterval(timer); // Cleanup function
}, []);`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <li>
          <strong>Multiple Effects:</strong> You can use <code>useEffect</code>{" "}
          multiple times in the same component to handle different side effects.
        </li>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`useEffect(() => {
// Effect for fetching data
}, []);

useEffect(() => {
// Effect for setting up a subscription
}, [subscriptionData]);`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </ul>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        The <code>useEffect</code> Hook is a powerful tool for managing side
        effects in React functional components. It simplifies tasks like
        fetching data, updating the document title, and setting up timers.
        Understanding <code>useEffect</code> allows you to manage these
        operations effectively without needing class components.
      </p>
      <p>
        In the next lesson, we’ll explore <code>useContext</code>, which helps
        you share and manage data across your React app more easily.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/useState")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/useRef")}>Next</button>
      </div>
    </div>
  );
};

export const UseContextReducer = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Super Easy Guide to useContext in React for Complete Beginners</h1>

      <h2>Hello, new React friends!</h2>
      <p>
        Today we're going to learn about something called{" "}
        <code>useContext</code>. Don't worry, we'll make it super easy to
        understand!
      </p>

      <h2>What is useContext?</h2>
      <p>
        Imagine you have a big family, and you want to tell everyone what's for
        dinner. Instead of going to each family member one by one, wouldn't it
        be easier to make an announcement that everyone can hear? That's what{" "}
        <code>useContext</code> does in React!
      </p>
      <p>
        <code>useContext</code> is like a loudspeaker that lets you share
        information with many parts of your React app at once.
      </p>

      <h2>Why do we need useContext?</h2>
      <p>
        Let's say you're making a website for your school. You want to show the
        school's name on every page. Without <code>useContext</code>, you'd have
        to pass the school name to every single part of your website. With{" "}
        <code>useContext</code>, you can announce the school name once, and
        every part of your website can hear it!
      </p>

      <h2>How to use useContext: A Step-by-Step Guide</h2>
      <p>
        Let's learn how to use <code>useContext</code> with a simple example.
        We'll create a website that shows your school name.
      </p>

      <h3>Step 1: Create the loudspeaker (Context)</h3>
      <p>
        First, we need to create our loudspeaker. In React, we call this a
        "Context".
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

// Create our loudspeaker
const SchoolContext = React.createContext();`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This creates a special announcer called <code>SchoolContext</code> that
        will hold our school name.
      </p>

      <h3>Step 2: Make the announcement (Provider)</h3>
      <p>
        Now that we have our loudspeaker, we need to announce the school name to
        our app. We do this with a "Provider".
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function App() {
// Our school name
const schoolName = "Friendly Neighborhood School";

return (
// Announce our school name to the whole app
<SchoolContext.Provider value={schoolName}>
<Header />
<MainContent />
<Footer />
</SchoolContext.Provider>
);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we're announcing our <code>schoolName</code> to our whole app.
        Every part of our app can now hear this announcement.
      </p>

      <h3>Step 3: Listen to the announcement (useContext)</h3>
      <p>
        Now, in any part of our app, we can listen to this announcement and get
        our school name!
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function Header() {
// Listen to the school name announcement
const schoolName = React.useContext(SchoolContext);

return (
<header>
<h1>{schoolName}</h1>
</header>
);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this <code>Header</code> component, we're using{" "}
        <code>useContext</code> to listen for the school name. We can then use
        this to show the school name in our header.
      </p>
      <AdUnit />
      <h2>Let's put it all together!</h2>
      <p>
        Here's a small, complete example of how all these pieces work together:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

// Create our loudspeaker
const SchoolContext = React.createContext();

function App() {
// Our school name
const schoolName = "Friendly Neighborhood School";

return (
// Announce our school name to the whole app
<SchoolContext.Provider value={schoolName}>
<div className="App">
  <Header />
  <MainContent />
  <Footer />
</div>
</SchoolContext.Provider>
);
}

function Header() {
// Listen to the school name announcement
const schoolName = React.useContext(SchoolContext);

return (
<header>
<h1>{schoolName}</h1>
</header>
);
}

function MainContent() {
// We can also listen to the school name here
const schoolName = React.useContext(SchoolContext);

return (
<main>
<h2>Welcome to {schoolName}!</h2>
<p>We're glad you're here.</p>
</main>
);
}

function Footer() {
// And we can listen to it here too!
const schoolName = React.useContext(SchoolContext);

return (
<footer>
<p>© 2023 {schoolName}. All rights reserved.</p>
</footer>
);
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example:
        <ul>
          <li>
            We create our <code>SchoolContext</code> (our loudspeaker).
          </li>
          <li>
            In our <code>App</code>, we announce our school name using{" "}
            <code>SchoolContext.Provider</code>.
          </li>
          <li>
            In our <code>Header</code>, <code>MainContent</code>, and{" "}
            <code>Footer</code>, we use <code>useContext</code> to listen for
            this announcement and get the school name.
          </li>
        </ul>
      </p>
      <p>
        And that's it! Now you can use the school name anywhere in your app
        without passing it to every component. It's like magic!
      </p>
      <AdUnit />
      <p>
        Remember, <code>useContext</code> is great for information that many
        parts of your app need to know about. It helps keep your code simple and
        easy to understand.
      </p>
      <p>Keep practicing, and you'll be a React pro in no time! 🌟</p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/useRef")}>back</button>
        <button onClick={() => (window.location.href = "/PassData")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const UseRef = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>useRef Hook in React</h1>

      <h2>What Is useRef?</h2>
      <p>
        In React, <code>useRef</code> is a special Hook that helps you
        "reference" or keep track of a DOM element or a value in your functional
        components without causing re-renders.
      </p>
      <p>But what does that mean?</p>
      <p>
        Imagine you have a magic notebook where you can write down a note and
        always refer back to it, no matter how many times you change the pages.
        In this analogy, <code>useRef</code> is like that magic notebook. It
        lets you keep a persistent note (or reference) without changing how your
        component behaves.
      </p>

      <h2>Why Do We Need useRef?</h2>
      <p>
        Before Hooks, if you wanted to access a DOM element or maintain some
        mutable value without causing re-renders, you had to use class
        components and deal with more complex code. With <code>useRef</code>,
        you can do this in functional components easily.
      </p>
      <p>
        The <code>useRef</code> Hook is useful for:
      </p>
      <ul>
        <li>Accessing a DOM element directly.</li>
        <li>
          Storing a value that doesn't need to trigger re-renders when updated.
        </li>
        <li>
          Keeping track of a previous value to compare with the current one.
        </li>
      </ul>
      <p>
        In summary, <code>useRef</code> provides a way to interact with elements
        and values directly, without affecting the component's rendering.
      </p>

      <h2>How Does useRef Work?</h2>
      <p>
        Let’s walk through how the <code>useRef</code> Hook works, step by step.
        Here’s a basic example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useRef } from 'react';

function ExampleComponent() {
  // 1. Create a ref object
  const inputRef = useRef(null);

  const handleClick = () => {
    // 2. Access the DOM element
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default ExampleComponent;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking It Down for Beginners</h3>
      <p>Let’s break this code into smaller pieces to understand it fully:</p>

      <h4>Import useRef</h4>
      <p>
        At the top of the file, we import the <code>useRef</code> Hook from
        React. You always need to import Hooks like <code>useRef</code> before
        using them in your component.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React, { useRef } from 'react';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Create a Ref Object</h4>
      <p>
        Inside your functional component (<code>ExampleComponent</code>), you
        create something called a ref object. The <code>useRef</code> Hook helps
        you do this.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const inputRef = useRef(null);`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>This line does a few important things:</p>
      <ul>
        <li>
          <code>inputRef</code>: This is the ref object. It will be used to
          store a reference to the input element. The <code>null</code> is the
          initial value of the ref object.
        </li>
        <li>
          <code>{`useRef(null)`}</code>: This tells React to create a ref object
          that starts as <code>null</code>. When the component renders, React
          will assign the ref to the DOM element you reference.
        </li>
      </ul>

      <h4>Access the DOM Element</h4>
      <p>
        Inside the <code>handleClick</code> function, we access the input
        element using <code>inputRef.current</code>. This is like using your
        magic notebook to get the note you wrote earlier.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const handleClick = () => {
  inputRef.current.focus();
};`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Calling <code>inputRef.current.focus()</code> focuses the input field
        when the button is clicked.
      </p>

      <h4>Attach Ref to Element</h4>
      <p>
        We attach the ref to the input element using the <code>ref</code>{" "}
        attribute.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<input ref={inputRef} type="text" />`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        By setting <code>{`ref={inputRef}`}</code>, React links the ref object
        to this input element, allowing us to access it through{" "}
        <code>inputRef.current</code>.
      </p>

      <h2>What Does useRef Actually Do?</h2>
      <p>Let’s examine what’s happening:</p>
      <ul>
        <li>
          <strong>Initial value:</strong> When the component first loads,{" "}
          <code>{`useRef(null)`}</code> creates a ref object with an initial
          value of <code>null</code>.
        </li>
        <li>
          <strong>Accessing elements:</strong> Once the component renders, React
          assigns the ref object to the DOM element. You can then use
          <code>inputRef.current</code> to interact with the element.
        </li>
        <li>
          <strong>Stable reference:</strong> The ref object doesn’t change
          between renders. It always points to the same DOM element or value.
        </li>
      </ul>
      <p>
        This is how <code>useRef</code> helps you keep track of elements or
        values without causing unnecessary re-renders.
      </p>

      <h2>Important Things to Know About useRef</h2>
      <ul>
        <li>
          <strong>Ref is not for re-rendering:</strong> Changing the ref value
          does not cause your component to re-render. It’s purely for accessing
          elements or storing values without affecting the UI.
        </li>
        <li>
          <strong>Ref object persists:</strong> The ref object persists for the
          full lifetime of the component. It doesn’t get reset on re-renders.
        </li>
        <li>
          <strong>Use with caution:</strong> Use refs only when you need to
          interact with the DOM directly or store a mutable value. For other
          state needs, prefer using <code>useState</code>.
        </li>
      </ul>
      <AdUnit />
      <h2>More Real-Life Examples</h2>
      <p>
        Here are some examples of how you might use <code>useRef</code> in
        real-life scenarios:
      </p>

      <h3>Accessing a DOM Element</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const inputRef = useRef(null);

<input ref={inputRef} type="text" />
<button onClick={() => inputRef.current.focus()}>Focus Input</button>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>inputRef</code> holds a reference to the input element, allowing
        you to focus it programmatically.
      </p>

      <h3>Storing Mutable Values</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`const countRef = useRef(0);

const increment = () => {
  countRef.current += 1;
  console.log(countRef.current);
};`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <code>countRef</code> keeps track of a count value that can be updated
        without causing re-renders.
      </p>
      <AdUnit />
      <div className="button-container">
        <button onClick={() => (window.location.href = "/useEffect")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/useRedContext")}>
          Next
        </button>
      </div>
    </div>
  );
};
