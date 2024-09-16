import AdUnit from "../AdUnit";

const IntroHooks = () => {
  return (
    <div className="internet comments-container">
      <h1>Introduction to Hooks</h1>
      <p>
        When you start building React applications, you'll often hear about{" "}
        <strong>Hooks</strong>. Hooks are one of the more advanced features of
        React, but don't worry, we'll break it down step by step so you can
        understand how they work.
      </p>

      <h2>What are Hooks?</h2>
      <p>
        Imagine you're building something with blocks, like a tower. Each block
        does something specific. Some blocks change over time, like turning from
        red to blue. Now, Hooks are like special tools that let you tell React:
        "Hey, watch this block closely because it might change, and when it
        does, I want you to update the tower."
      </p>

      <p>
        In React, components are the "blocks" of your app. And sometimes, those
        components need to do something like handle a button click or update
        when some data changes. Before hooks, React had a different way of
        handling this, but it wasn’t as simple. Hooks make this easier.
      </p>

      <h2>Why Hooks?</h2>
      <p>
        Hooks let us use things like <strong>state</strong> and{" "}
        <strong>lifecycle methods</strong> (don’t worry, I’ll explain) inside
        function components. Before hooks, you could only do this in class
        components, which are a bit harder to understand. Hooks let us keep
        things simple by sticking to function components, which are easier for
        beginners.
      </p>

      <p>
        In short, hooks give us a way to add more abilities to our components,
        without making things too complicated.
      </p>

      <h2>Two Main Things You Can Do with Hooks</h2>
      <h3>State Management</h3>
      <p>
        This means keeping track of data that can change in your app. For
        example, if a user clicks a button, you might want to count how many
        times they clicked it. This is called "state." Hooks let you manage this
        changing data.
      </p>

      <h3>Side Effects</h3>
      <p>
        This means things that happen outside your app when something changes
        inside. For example, when a component loads, you might want to fetch
        data from an API (a place where data is stored). Hooks help you handle
        these kinds of "side effects."
      </p>

      <h2>Key Points to Remember</h2>
      <ul>
        <li>
          Hooks are a way to add more abilities to function components (which
          are simpler than class components).
        </li>
        <li>
          Hooks let us manage state (data that changes) and side effects (things
          that happen outside of React when something changes inside React).
        </li>
        <li>
          With Hooks, we don't need to use class components anymore for most
          tasks.
        </li>
      </ul>

      <p>
        Next, we’ll dive deeper into two important hooks:{" "}
        <strong>useState</strong> and <strong>useEffect</strong>, which help us
        manage state and side effects in our React apps.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/UseKey")}>back</button>
        <button onClick={() => (window.location.href = "/useStateEffect")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroHooks;

export const UseStateEffext = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>
        useState and useEffect Hooks in React: Managing State and Side Effects
      </h2>
      <p>
        {`The useState and useEffect hooks are essential tools in React that
        enable functional components to manage state and handle side effects.
        Let's explore these hooks in a way that's easy to understand for
        beginners.`}
      </p>

      <h3>Introducing useState</h3>
      <p>
        In React, state is used to store data that can change over time. The
        useState hook allows you to add state to your functional components.
        Imagine you have a counter that increases whenever a button is clicked.
        To achieve this, you need a way to remember the current count and update
        it when the button is pressed. This is where useState comes in.
      </p>

      <h4>Importing useState</h4>
      <p>
        Before you can use useState, you need to import it from React. This is
        done at the top of your JavaScript file, alongside the React library
        itself. Here’s how you import useState:
      </p>

      <pre>
        <code>{`import React, { useState } from 'react';`}</code>
      </pre>

      <p>
        In this code:
        <ul>
          <li>
            <code>import React</code> is importing the main React library, which
            is necessary for using React components and hooks.
          </li>
          <li>
            <code>{`{ useState }`}</code> is a named import that allows you to
            use the useState hook in your component.
          </li>
        </ul>
      </p>

      <h4>Declaring State with useState</h4>
      <p>
        To declare a state variable, you call useState inside your functional
        component. The useState function returns an array with two elements:
        <ul>
          <li>The current state value.</li>
          <li>A function that lets you update this value.</li>
        </ul>
        {`You can access these two elements using array destructuring syntax.
        Here's an example:`}
      </p>

      <pre>
        <code>{`const [count, setCount] = useState(0);`}</code>
      </pre>

      <p>
        In this declaration:
        <ul>
          <li>
            <code>count</code> is the state variable, initialized to 0.
          </li>
          <li>
            <code>setCount</code> is the function used to update the{" "}
            <code>count</code> variable.
          </li>
        </ul>
      </p>

      <p>
        <strong>Explanation:</strong>
        When you use useState, you are essentially telling React to keep track
        of this piece of data (count) and to re-render the component whenever
        count changes. The setCount function allows you to update count and
        trigger this re-render.
        <br />
        The syntax <code>{`[count, setCount]`}</code> is using array
        destructuring to assign the elements of the array returned by useState
        to count and setCount. This is a common JavaScript pattern and not
        unique to React. You could name the variables anything you like, such as{" "}
        <code>{`[value, setValue]`}</code>.
      </p>

      <h4>Example of useState in a Component</h4>
      <pre>
        <code>
          {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
        </code>
      </pre>

      <p>
        In this Counter component:
        <ul>
          <li>We import useState from React.</li>
          <li>We declare count and setCount using useState.</li>
          <li>
            We use count to display the current count and setCount to update it
            when the button is clicked.
          </li>
        </ul>
      </p>

      <h3>Introducing useEffect</h3>
      <p>
        While useState manages state, useEffect lets you perform side effects in
        your components. Side effects can include data fetching, subscriptions,
        or manually changing the DOM. Think of useEffect as a way to synchronize
        your component with external systems.
      </p>

      <h4>Importing useEffect</h4>
      <p>Like useState, you need to import useEffect from React:</p>

      <pre>
        <code>{`import React, { useEffect } from 'react';`}</code>
      </pre>

      <p>
        In this code:
        <ul>
          <li>
            <code>import React</code> is importing the main React library.
          </li>
          <li>
            <code>{`{ useEffect }`}</code> is a named import that allows you to
            use the useEffect hook in your component.
          </li>
        </ul>
      </p>

      <h4>Using useEffect</h4>
      <p>
        The useEffect hook takes a function that contains your side effect code.
        This function runs after the component renders. The useEffect hook also
        takes an optional second argument: an array of dependencies that
        determine when the effect should re-run.
        <br />
        Here’s a simple useEffect example:
      </p>

      <pre>
        <code>
          {`useEffect(() => {
  console.log('Component mounted!');
}, []);`}
        </code>
      </pre>

      <p>
        In this example:
        <ul>
          <li>
            The first argument to useEffect is a function that logs a message to
            the console.
          </li>
          <li>
            The second argument is an empty array [], which tells React to run
            this effect only once, when the component mounts. This is similar to
            componentDidMount in class components.
          </li>
        </ul>
      </p>

      <p>
        <strong>Explanation:</strong>
        The useEffect hook allows you to perform side effects in your function
        components. The function you pass to useEffect is your effect, and it
        runs after the component renders. By using the second argument (the
        dependency array), you can control when the effect runs. For example, if
        you include state variables in the array, the effect will re-run
        whenever those variables change.
        <br />
        If you omit the second argument, the effect will run after every render.
        If you include an empty array, the effect will run only once, after the
        initial render. If you include dependencies (e.g., [count]), the effect
        will run after the initial render and whenever the specified
        dependencies change.
      </p>

      <h4>Example of useEffect in a Component</h4>
      <pre>
        <code>
          {`import React, { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component mounted!');

    return () => {
      console.log('Component unmounted!');
    };
  }, []);

  return <div>Check the console log!</div>;
}

export default Logger;`}
        </code>
      </pre>

      <p>
        In this Logger component:
        <ul>
          <li>We import useEffect from React.</li>
          <li>We use useEffect to log a message when the component mounts.</li>
          <li>
            We return a cleanup function that logs a message when the component
            unmounts. This cleanup function is similar to componentWillUnmount
            in class components.
          </li>
        </ul>
      </p>
      <AdUnit />

      <h3>Rules of Hooks</h3>
      <p>
        To use Hooks effectively, follow these rules:
        <ul>
          <li>
            <strong>Top-Level Calls:</strong> Always call Hooks at the top level
            of your React function. Don’t call Hooks inside loops, conditions,
            or nested functions. This ensures Hooks are called in the same order
            each time a component renders.
          </li>
          <li>
            <strong>React Functions Only:</strong>{" "}
            {`Only call Hooks from React
            function components or custom Hooks. Don't call them from regular
            JavaScript functions.`}
          </li>
        </ul>
      </p>

      <h3>Benefits of useState and useEffect</h3>
      <p>
        Using useState and useEffect provides several benefits:
        <ul>
          <li>
            <strong>State Management:</strong> useState allows you to manage
            state within functional components easily.
          </li>
          <li>
            <strong>Side Effects:</strong> useEffect provides a structured way
            to handle side effects, such as data fetching and subscriptions.
          </li>
          <li>
            <strong>Cleaner Code:</strong> These hooks help separate logic for
            state and side effects from your component’s main rendering logic,
            promoting cleaner and more maintainable code.
          </li>
        </ul>
      </p>

      <h3>Putting it All Together</h3>
      <p>Here’s a practical example combining both useState and useEffect:</p>

      <pre>
        <code>
          {`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;`}
        </code>
      </pre>

      <p>
        In the Timer component:
        <ul>
          <li>useState tracks the number of seconds.</li>
          <li>
            useEffect sets up an interval to update the seconds state every
            second and cleans up the interval when the component unmounts.
          </li>
        </ul>
      </p>

      <p>
        By understanding and using useState and useEffect, you can create more
        dynamic and interactive UIs in React. These hooks provide powerful
        capabilities that simplify state management and side effect handling in
        functional components.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/introHook")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/useRedContext")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const UseContextReducer = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>useContext Hook in React: Sharing Data Across Components</h2>

      <p>
        The <code>useContext</code> hook in React is a powerful tool that
        simplifies data sharing and state management across components. It
        allows functional components to access values from a context without the
        need for manual prop drilling. Let's explore the superpowers of{" "}
        <code>useContext</code> and how it makes your React applications more
        efficient!
      </p>

      <h3>Understanding useContext</h3>

      <p>
        The <code>useContext</code> hook allows functional components to consume
        values from a context. Context provides a way to share data across
        components without the need for manual prop drilling. Think of it as a
        superpower that simplifies state management and data sharing in your
        React applications.
      </p>

      <h4>What is useContext?</h4>

      <p>
        <code>useContext</code> enables functional components to access values
        from a context. Context is a mechanism in React for sharing data across
        components efficiently. With <code>useContext</code>, you can easily
        consume context values without the hassle of passing props through every
        level of the component tree.
      </p>

      <h4>Steps to Use useContext</h4>

      <p>
        Here are the steps to use <code>useContext</code>:
      </p>

      <ol>
        <li>
          <strong>Create a Context:</strong> Define a context using{" "}
          <code>React.createContext()</code>. This context will hold the data
          you want to share across components.
        </li>
        <li>
          <strong>Provide the Context:</strong> Use a context provider, such as{" "}
          <code>Context.Provider</code>, to supply the context value to the
          components within its tree.
        </li>
        <li>
          <strong>Consume the Context:</strong> Use the <code>useContext</code>{" "}
          hook to access the context value in your functional components.
        </li>
      </ol>

      <h3>Step-by-Step Example</h3>

      <h4>1. Creating a Context</h4>

      <p>
        First, let's create a context using <code>React.createContext()</code>.
        This context will hold the data we want to share across components.
      </p>

      <pre>
        <code>
          {`
// MyContext.js

import React from 'react';

// Create a context with a default value
const MyContext = React.createContext('default value');

export default MyContext;
`}
        </code>
      </pre>

      <p>
        In this file, we create <code>MyContext</code> with a default value of{" "}
        <code>'default value'</code>. This default value will be used if a
        component that consumes the context does not have a provider above it.
      </p>
      <AdUnit />
      <h4>2. Providing the Context</h4>

      <p>
        Next, let's use a context provider to supply the context value to the
        components.
      </p>

      <pre>
        <code>
          {`
// App.js

import React from 'react';
import MyContext from './MyContext';
import MyComponent from './MyComponent';

function App() {
const contextValue = 'Hello from Context!';

return (
<MyContext.Provider value={contextValue}>
  <MyComponent />
</MyContext.Provider>
);
}

export default App;
`}
        </code>
      </pre>

      <p>
        In the <code>App</code> component, we use{" "}
        <code>MyContext.Provider</code> to provide the value{" "}
        <code>'Hello from Context!'</code> to all components within its tree.
        Any component inside <code>MyContext.Provider</code> can now access this
        context value.
      </p>

      <h4>3. Consuming the Context</h4>

      <p>
        Finally, let's use the <code>useContext</code> hook to consume the
        context value in a child component.
      </p>

      <pre>
        <code>
          {`
// MyComponent.js

import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
// Use useContext to consume the context value
const value = useContext(MyContext);

return <div>{value}</div>;
}

export default MyComponent;
`}
        </code>
      </pre>

      <p>
        In the <code>MyComponent</code> component, we use{" "}
        <code>useContext(MyContext)</code> to access the value provided by{" "}
        <code>MyContext.Provider</code>. The <code>value</code> variable will
        now hold the context value, which is <code>'Hello from Context!'</code>{" "}
        in this case.
      </p>

      <h3>Putting It All Together</h3>

      <p>Let's see the complete example:</p>

      <h4>MyContext.js</h4>

      <pre>
        <code>
          {`
import React from 'react';

// Create a context with a default value
const MyContext = React.createContext('default value');

export default MyContext;
`}
        </code>
      </pre>

      <h4>App.js</h4>

      <pre>
        <code>
          {`
import React from 'react';
import MyContext from './MyContext';
import MyComponent from './MyComponent';

function App() {
const contextValue = 'Hello from Context!';

return (
<MyContext.Provider value={contextValue}>
  <MyComponent />
</MyContext.Provider>
);
}

export default App;
`}
        </code>
      </pre>

      <h4>MyComponent.js</h4>

      <pre>
        <code>
          {`
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
const value = useContext(MyContext);

return <div>{value}</div>;
}

export default MyComponent;
`}
        </code>
      </pre>

      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Create Context:</strong> In <code>MyContext.js</code>, we
          create <code>MyContext</code> with a default value.
        </li>
        <li>
          <strong>Provide Context:</strong> In <code>App.js</code>, we use{" "}
          <code>MyContext.Provider</code> to provide the context value to all
          components inside it.
        </li>
        <li>
          <strong>Consume Context:</strong> In <code>MyComponent.js</code>, we
          use <code>useContext(MyContext)</code> to access the context value and
          display it.
        </li>
      </ul>

      <h3>Why Use useContext?</h3>

      <ul>
        <li>
          <strong>Simplifies State Management:</strong> <code>useContext</code>{" "}
          makes it easy to manage and share state across components, eliminating
          the need for manual prop drilling.
        </li>
        <li>
          <strong>Avoids Prop Drilling:</strong> With <code>useContext</code>,
          you don't have to pass props manually through every level of
          components. This keeps your code cleaner and more maintainable.
        </li>
        <li>
          <strong>Cleaner Code:</strong> By centralizing state access with{" "}
          <code>useContext</code>, your code becomes more readable and easier to
          understand.
        </li>
      </ul>

      <h3>Note</h3>

      <p>
        By understanding and using <code>useContext</code>, you can efficiently
        manage and share state across your React application. It simplifies data
        sharing and makes your components more modular and reusable. Embrace the
        power of <code>useContext</code> to create cleaner and more maintainable
        React code!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/useStateEffect")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/PassData")}>
          Next
        </button>
      </div>
    </div>
  );
};
