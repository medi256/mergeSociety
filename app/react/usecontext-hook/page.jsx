import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Beginner's Guide to useContext in React: A Super Easy Tutorial",
  description:
    "Explore the useContext Hook in React with a simple and fun analogy. Learn how to share data across your app easily.",
  keywords: [
    "react useContext",
    "useContext tutorial",
    "react context",
    "sharing data in react",
    "react hooks context",
    "useContext example",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/usecontext-hook",
  },

  openGraph: {
    title: "React useContext: A Beginner's Guide to Sharing Data",
    description:
      "Dive into the world of React Hooks with useContext. Learn to share data across your app like a pro.",
  },
};

const UseContex = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Super Easy Guide to useContext in React for Complete Beginners</h1>

        <h2>Hello, new React friends!</h2>
        <p>
          Today we're going to learn about something called{" "}
          <code>useContext</code>. Don't worry, we'll make it super easy to
          understand!
        </p>

        <h2>What is useContext?</h2>
        <p>
          Imagine you have a big family, and you want to tell everyone what's
          for dinner. Instead of going to each family member one by one,
          wouldn't it be easier to make an announcement that everyone can hear?
          That's what <code>useContext</code> does in React!
        </p>
        <p>
          <code>useContext</code> is like a loudspeaker that lets you share
          information with many parts of your React app at once.
        </p>

        <h2>Why do we need useContext?</h2>
        <p>
          Let's say you're making a website for your school. You want to show
          the school's name on every page. Without <code>useContext</code>,
          you'd have to pass the school name to every single part of your
          website. With <code>useContext</code>, you can announce the school
          name once, and every part of your website can hear it!
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
          This creates a special announcer called <code>SchoolContext</code>{" "}
          that will hold our school name.
        </p>

        <h3>Step 2: Make the announcement (Provider)</h3>
        <p>
          Now that we have our loudspeaker, we need to announce the school name
          to our app. We do this with a "Provider".
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
          Now, in any part of our app, we can listen to this announcement and
          get our school name!
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

        <h2>Let's put it all together!</h2>
        <p>
          Here's a small, complete example of how all these pieces work
          together:
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
        <p>In this example:</p>
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
        <p>
          And that's it! Now you can use the school name anywhere in your app
          without passing it to every component. It's like magic!
        </p>

        <p>
          Remember, <code>useContext</code> is great for information that many
          parts of your app need to know about. It helps keep your code simple
          and easy to understand.
        </p>
        <p>Keep practicing, and you'll be a React pro in no time! 🌟</p>

        <Button whereToGo={"context-api"} />
      </div>
    </div>
  );
};

export default UseContex;
