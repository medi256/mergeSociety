import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Advanced Guide to Context API in React",
  description:
    "Explore the Context API in React and learn how to share complex data across your entire app with ease.",
  keywords: [
    "react context api",
    "useContext advanced",
    "react context provider",
    "passing data in react",
    "react data sharing",
    "react hooks context api",
  ],
  openGraph: {
    title: "React Context API: A Comprehensive Guide to Data Sharing",
    description:
      "Dive deep into the React Context API. Learn to share data across your app efficiently and manage complex data flows.",
  },
};

const ContextApi = () => {
  return (
    <div className="lesson-container">
      <h1>
        Diving Deeper: Context API and Passing Data Through the Component Tree
      </h1>

      <h2>Hello again, React learners!</h2>
      <p>
        Remember our school website example where we used{" "}
        <code>useContext</code> to share the school name? Now, let's expand on
        that idea to understand how the Context API helps us pass data through
        our entire component tree.
      </p>

      <h2>
        Quick Recap: What is <code>useContext</code>?
      </h2>
      <p>
        In our previous lesson, we learned that <code>useContext</code> is like
        a loudspeaker that lets us share information with many parts of our
        React app at once. We used it to share our school name across different
        components.
      </p>

      <h2>Introducing the Context API</h2>
      <p>
        The Context API is the bigger system that makes <code>useContext</code>{" "}
        work. It's like the entire announcement system in our school, not just
        the loudspeaker. Let's break it down:
      </p>
      <ul>
        <li>
          <strong>Creating the Announcement System (createContext)</strong>
        </li>
        <li>
          <strong>Making the Announcement (Provider)</strong>
        </li>
        <li>
          <strong>
            Listening to the Announcement (useContext or Consumer)
          </strong>
        </li>
      </ul>

      <h2>Step-by-Step Guide to Using the Context API</h2>

      <h3>Step 1: Create the Announcement System (createContext)</h3>
      <p>
        First, we need to set up our announcement system. We do this in a
        separate file:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// SchoolContext.js
import React from 'react';

const SchoolContext = React.createContext();

export default SchoolContext;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This creates our <code>SchoolContext</code>, which will hold our school
        information.
      </p>

      <h3>Step 2: Make the Announcement (Provider)</h3>
      <p>
        Now, we need to use the Provider to make our announcement. We'll do this
        in our main App component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// App.js
import React from 'react';
import SchoolContext from './SchoolContext';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
const schoolInfo = {
name: "Friendly Neighborhood School",
principal: "Ms. Johnson",
founded: 1995
};

return (
<SchoolContext.Provider value={schoolInfo}>
<div className="App">
  <Header />
  <MainContent />
  <Footer />
</div>
</SchoolContext.Provider>
);
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here's what's new:
        <ul>
          <li>
            Instead of just the school name, we're now sharing more information
            about the school.
          </li>
          <li>
            We wrap our app components with <code>SchoolContext.Provider</code>.
          </li>
          <li>
            We pass our <code>schoolInfo</code> object as the <code>value</code>{" "}
            prop to the Provider.
          </li>
        </ul>
        Now, any component inside this Provider can access the school
        information!
      </p>

      <h3>Step 3: Listen to the Announcement (useContext)</h3>
      <p>
        Now that we've made our announcement, let's see how different parts of
        our app can listen to it:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// Header.js
import React, { useContext } from 'react';
import SchoolContext from './SchoolContext';

function Header() {
const schoolInfo = useContext(SchoolContext);

return (
<header>
<h1>{schoolInfo.name}</h1>
<p>Principal: {schoolInfo.principal}</p>
</header>
);
}

export default Header;

// MainContent.js
import React, { useContext } from 'react';
import SchoolContext from './SchoolContext';

function MainContent() {
const schoolInfo = useContext(SchoolContext);

return (
<main>
<h2>Welcome to {schoolInfo.name}!</h2>
<p>We've been providing quality education since {schoolInfo.founded}.</p>
</main>
);
}

export default MainContent;

// Footer.js
import React, { useContext } from 'react';
import SchoolContext from './SchoolContext';

function Footer() {
const schoolInfo = useContext(SchoolContext);

return (
<footer>
<p>© {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
</footer>
);
}

export default Footer;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>In each of these components:</p>
      <ul>
        <li>
          We import <code>useContext</code> from React and our{" "}
          <code>SchoolContext</code>.
        </li>
        <li>
          We call <code>useContext(SchoolContext)</code> to get the current
          value of <code>SchoolContext</code> (our <code>schoolInfo</code>{" "}
          object).
        </li>
        <li>
          We can now use different pieces of school information in each
          component!
        </li>
      </ul>

      <h2>Why is this helpful?</h2>
      <p>
        Imagine if we didn't have Context. We'd have to pass our{" "}
        <code>schoolInfo</code> to <code>Header</code>, then from{" "}
        <code>Header</code> to <code>MainContent</code>, and so on. It might
        look like this:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Header schoolInfo={schoolInfo}>
<MainContent schoolInfo={schoolInfo}>
<Footer schoolInfo={schoolInfo} />
</MainContent>
</Header>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This can get messy quickly, especially in larger apps. Context lets us
        skip all that and make the information available wherever we need it!
      </p>

      <h2>When to Use Context</h2>
      <p>
        Context is great for sharing data that many components need, like:
        <ul>
          <li>School information in a school website</li>
          <li>User information in a social media app</li>
          <li>
            Theme settings (like light or dark mode) across your whole app
          </li>
        </ul>
      </p>
      <p>
        But remember, with great power comes great responsibility! Don't overuse
        Context. If you only need to pass information to one or two components,
        regular props might be simpler.
      </p>

      <h2>Conclusion</h2>
      <p>
        The Context API, with its <code>createContext</code> function,{" "}
        <code>Provider</code> component, and <code>useContext</code> hook, gives
        us a powerful way to share information across our React app. It's like
        setting up an announcement system for our code, making sure every part
        of our app can easily access the information it needs.
      </p>
      <p>
        By expanding on our school website example, we've seen how Context
        allows us to pass complex data (like our <code>schoolInfo</code> object)
        through our component tree without having to manually pass props at
        every level.
      </p>
      <p>
        Keep practicing with Context in your React projects. Soon, you'll be
        managing complex data flows with ease!
      </p>

      <Button whereToGo={"form-handling"} />
    </div>
  );
};

export default ContextApi;
