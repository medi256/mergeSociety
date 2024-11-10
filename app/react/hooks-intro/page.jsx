import Button from "@/app/button";

export const metadata = {
  title: "Introduction to Hooks in React: A Comprehensive Guide",
  description:
    "Learn about Hooks in React, why they were introduced, and how they simplify state management and side effects in functional components.",
  keywords: [
    "react hooks",
    "hooks tutorial",
    "functional components",
    "state management",
    "side effects",
    "react state",
    "react effects",
    "react context",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/hooks-intro",
  },

  openGraph: {
    title: "Mastering React Hooks: A Beginner's Guide",
    description:
      "Explore the power of Hooks in React and how they revolutionize state management and side effects. Learn how to build dynamic and interactive apps with ease.",
  },
};

const hooksIntro = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"usestate-hook"} />
    </div>
  );
};

export default hooksIntro;
