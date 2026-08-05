import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Beginner's Guide to Form Handling in React: A Step-by-Step Tutorial",
  description:
    "Learn how to handle form input in React, from basic form creation to state management and controlled components.",
  keywords: [
    "react form handling",
    "react forms tutorial",
    "react state management",
    "controlled components",
    "react form submission",
    "react form input",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/form-handling",
  },

  openGraph: {
    title: "React Forms: A Beginner's Guide to Input Handling",
    description:
      "Dive into React form handling. Learn to create forms, manage state, and process user input with ease.",
  },
};

const FormHandle = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Handling Form Input in React: A Beginner's Guide</h1>

        <p>
          Welcome, new React developers! Today, we're going to learn about
          handling form input in React. We'll start from the very basics and
          gradually build up to more complex concepts. Don't worry if you don't
          understand everything right away – we'll take it step by step.
        </p>

        <h2>1. Introduction to Forms in React</h2>
        <p>
          In web development, forms are a crucial part of user interaction. They
          allow users to input data that can be sent to a server or processed by
          your application. Think about when you log into a website, post a
          comment, or make an online purchase – you're using forms in all these
          cases!
        </p>
        <p>
          In React, we handle forms a bit differently than in traditional HTML.
          React gives us more control over how forms behave and how we process
          the data. This control allows us to create more interactive and
          responsive user interfaces.
        </p>
        <p>Let's start with a simple example of a form in HTML:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <button type="submit">Submit</button>
</form>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>This is a basic form with three main parts:</p>
        <ul>
          <li>
            A <code> &lt;label&gt; </code>that tells the user what information
            to enter.
          </li>
          <li>
            An<code> &lt;input&gt;</code> where the user can type their
            username.
          </li>
          <li>
            A <code> &lt;button&gt;</code> to submit the form.
          </li>
        </ul>
        <p>
          In traditional HTML, when you click the submit button, the form data
          is usually sent to a server, and the page refreshes. But in React, we
          often want to handle this data ourselves without refreshing the page.
          This is where React's form handling comes in handy.
        </p>

        <h2>2. Creating a Simple Form in React</h2>
        <p>Now, let's create our first React component with a form:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React from 'react';

function SimpleForm() {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This might look very similar to our HTML example, but there are some
          important differences to understand:
        </p>
        <ul>
          <li>
            We start with import React from 'react';. This line is necessary for
            all React components. It brings in the React library, which allows
            us to use JSX and create components.
          </li>
          <li>
            We define our form as a function called SimpleForm. In React, we
            create components as functions (or sometimes as classes, but we're
            focusing on function components here). This function returns the JSX
            that describes what our component should look like.
          </li>
          <li>
            The return statement contains what looks like HTML, but it's
            actually JSX. JSX is a special syntax that allows us to write
            HTML-like code in our JavaScript. React will convert this JSX into
            regular JavaScript that the browser can understand.
          </li>
          <li>
            You might notice we use htmlFor instead of for in the label. This is
            because for is a reserved word in JavaScript (used in for loops). In
            JSX, we use htmlFor to avoid conflicts.
          </li>
          <li>
            The <code>&lt;input&gt; </code>and <code>&lt;button&gt;</code> tags
            are self-closing in this JSX. In HTML, you might see{" "}
            <code>&lt;input&gt;</code> without a closing tag, but in JSX, we
            always close our tags, either with a closing tag
            <code>(&lt;/input&gt;)</code> or a self-closing tag{" "}
            <code>(/&gt;)</code>
          </li>
          <li>
            Finally, we export default SimpleForm. This allows us to import and
            use this component in other parts of our React application.
          </li>
        </ul>
        <p>
          This SimpleForm component doesn't do anything yet when you submit it –
          it's just displaying a form. In the next steps, we'll add
          functionality to it.
        </p>

        <h2>3. Handling Form Submission</h2>
        <p>
          Now that we have our form displaying correctly, let's make it do
          something when we submit it. We'll modify our component to handle the
          form submission:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React from 'react';

function SimpleForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Let's break down what's new here:</p>
        <ul>
          <li>
            We've added a new function inside our component called handleSubmit.
            This function will run when the form is submitted. It takes one
            parameter, event, which is the submission event.
          </li>
          <li>
            Inside handleSubmit, we call{" "}
            <code>{` event.preventDefault()`} </code>. This is very important!
            By default, when a form is submitted, the browser tries to send the
            data to a server and refresh the page.{" "}
            <code>{` preventDefault() `}</code> stops this default behavior,
            allowing us to handle the submission ourselves without a page
            refresh.
          </li>
          <li>
            After preventing the default behavior, we simply log 'Form
            submitted!' to the console. In a real application, you might do
            something more useful here, like sending data to a server or
            updating the page content.
          </li>
          <li>
            In the <code> &lt;form&gt;</code> tag, we've added{" "}
            <code>{` onSubmit={handleSubmit}. `}</code> This is how we tell
            React to run our handleSubmit function when the form is submitted.
            The curly braces {` {} `} are used in JSX to embed JavaScript
            expressions.
          </li>
        </ul>
        <p>
          Now, when you click the submit button (or press Enter in the input
          field), instead of the page refreshing, you'll see 'Form submitted!'
          in the browser's console (you can open the console in your browser's
          developer tools to see this).
        </p>
        <p>
          This is a big step! We've gone from a static form to one that can
          respond to user actions. Next, we'll look at how to actually get the
          data the user has entered.
        </p>

        <h2>4. Getting Form Input Values</h2>
        <p>
          Now that we can handle the form submission, let's get the value from
          our input when the form is submitted:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React from 'react';

function SimpleForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log('Submitted username:', username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Let's examine what's new in our handleSubmit function:</p>
        <ul>
          <li>
            We've added a new line:{" "}
            <code> const username = event.target.elements.username.value;</code>
          </li>
          <li>This line is doing a lot, so let's break it down further:</li>
          <ul>
            <li>
              event.target refers to the element that triggered the event. In
              this case, it's our <code> &lt;form&gt;</code> element.
            </li>
            <li>
              event.target.elements is a collection of all the form controls
              (inputs, buttons, etc.) in the form.
            </li>
            <li>
              <strong>event.target.elements.username</strong> gets the input
              element with the name "username". This is why we gave our input a
              name attribute!
            </li>
            <li>
              <strong>.value</strong> gives us the current value of that input -
              what the user has typed in.
            </li>
          </ul>
          <li>
            We then log this username to the console with{" "}
            <strong>console.log('Submitted username:', username);</strong>
          </li>
        </ul>
        <p>
          Now, when you submit the form, instead of just seeing 'Form
          submitted!', you'll see 'Submitted username:' followed by whatever you
          typed into the input field.
        </p>
        <p>
          This approach of getting the input value when the form is submitted
          works, but it has limitations. What if we want to know what the user
          has typed before they submit the form? Or what if we want to validate
          the input as the user types? For these more advanced use cases, we
          need to introduce the concept of state.
        </p>

        <h2>5. Introduction to State</h2>
        <p>
          So far, we're only getting the input value when the form is submitted.
          But what if we want to know the value as the user types? This is where
          React's state comes in.
        </p>
        <p>
          State is like a component's memory. It's where we store data that can
          change over time. When you update a component's state, React
          automatically re-renders the component, reflecting the new state in
          the UI.
        </p>
        <p>Let's modify our component to use state:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`import React, { useState } from 'react';

function SimpleForm() {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted username:', username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>This is a big change, so let's break it down step by step:</p>
        <ul>
          <li>
            We start by importing useState from React. useState is a Hook - a
            special function that lets us use state in function components.
          </li>
          <li>Inside our component, we call {` useState('')`}:</li>
          <pre>
            <code>
              <SyntaxHighlighter language="jsx" style={docco}>
                {`const [username, setUsername] = useState('');`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This creates a state variable called username and a function to
            update it called <strong>setUsername</strong>. The empty string{" "}
            <code>'' </code> is the initial value of username.
          </p>
          <li>We add a new function called handleChange:</li>
          <pre>
            <code>
              <SyntaxHighlighter language="jsx" style={docco}>
                {`const handleChange = (event) => {
  setUsername(event.target.value);
};`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This function is called every time the input changes (i.e., every
            time the user types or deletes a character). It updates our username
            state with the new value of the input.
          </p>
          <li>
            In our <code>&lt;input&gt;</code>, we add two new props:
          </li>
          <pre>
            <code>
              <SyntaxHighlighter language="jsx" style={docco}>
                {`value={username}
onChange={handleChange}`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            <code>{` value={username} `} </code> sets the value of the input to
            our username state. This means the input will always show the
            current value of username.
          </p>
          <p>
            <code>{` onChange={handleChange} `}</code> tells React to call our
            handleChange function whenever the input changes.
          </p>
          <li>
            We've also simplified our handleSubmit function. Now it can directly
            use the username state variable instead of getting the value from
            the event.
          </li>
        </ul>
        <p>
          This setup creates what's called a "controlled component". The React
          state becomes the "single source of truth" for the input value. The
          input displays what's in the state, and the state updates when the
          input changes.
        </p>
        <p>
          With this approach, username will always contain the current value of
          the input. This allows you to easily use the input value elsewhere in
          your component, validate it as the user types, or even disable the
          submit button unless the username meets certain criteria.
        </p>

        <h2>Conclusion</h2>
        <p>
          We've covered a lot of ground here! We started with a basic form in
          React, added form submission handling, learned how to get input
          values, and finally introduced state to create a controlled input.
        </p>
        <p>Here's a quick recap of what we've learned:</p>
        <ul>
          <li>How to create a basic form in React</li>
          <li>How to handle form submission</li>
          <li>How to get input values when a form is submitted</li>
          <li>How to use state to track input values as they change</li>
        </ul>
        <p>
          Remember, learning React takes time and practice. Don't worry if you
          don't understand everything right away. Try playing around with this
          code, make changes, and see what happens. In our next lesson, we'll
          dive deeper into controlled components and discuss the difference
          between controlled and uncontrolled components.
        </p>
        <Button whereToGo={"controlled-vs-uncontrolled"} />
      </div>
    </div>
  );
};

export default FormHandle;
