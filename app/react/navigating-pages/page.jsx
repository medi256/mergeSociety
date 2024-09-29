import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Navigating React Router: A Comprehensive Guide",
  description:
    "Master the art of page navigation in React Router. Learn how to define routes, use links, and navigate programmatically for an enhanced user experience.",
  openGraph: {
    title: "React Router Navigation Tutorial",
    description:
      "Explore the world of React Router navigation. Discover how to create seamless user experiences with dynamic routing and URL manipulation.",
  },
  keywords: [
    "React Router",
    "Page Navigation",
    "React",
    "Routing",
    "User Experience",
    "Dynamic Routing",
    "URL Manipulation",
  ],
};

const ReactNavigation = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>
        Navigating between Pages in React Router: Enhancing User Experience
      </h1>

      <p>
        React Router not only allows you to define routes and render components,
        but it also enables seamless navigation between pages. Let's explore the
        world of navigation in React Router and learn how to efficiently handle
        page transitions in your React applications.
      </p>

      <h3>Understanding Page Navigation</h3>

      <p>
        Page navigation in React Router involves transitioning between different
        routes and rendering the corresponding components. With React Router,
        you can easily navigate between pages using links or programmatically
        using the <code>navigate</code> function from the{" "}
        <code>useNavigate</code> hook. Let's dive into the world of page
        navigation and unlock its superpowers!
      </p>

      <h4>What is Page Navigation?</h4>

      <p>
        Page navigation in React Router refers to the process of transitioning
        between different routes and rendering the appropriate components based
        on the current route. It involves handling user interactions, such as
        clicking on links, and updating the URL to reflect the current route.
      </p>

      <h4>Why Use Page Navigation?</h4>

      <p>Page navigation in React Router offers several benefits:</p>

      <ul>
        <li>
          <strong>Seamless User Experience:</strong> Page navigation provides a
          seamless user experience by allowing users to navigate between
          different pages without full page reloads.
        </li>
        <li>
          <strong>Dynamic Routing:</strong> React Router enables dynamic routing
          by rendering different components based on the current route. This
          makes your application more interactive and responsive to user
          actions.
        </li>
        <li>
          <strong>URL Manipulation:</strong> React Router allows you to
          manipulate the URL to reflect the current route. This helps users
          understand where they are in the application and provides a more
          intuitive navigation experience.
        </li>
      </ul>

      <h3>Steps to Navigate between Pages</h3>

      <p>Here are the steps to navigate between pages in React Router:</p>

      <ol>
        <li>
          <strong>Define Routes:</strong> Create a <code>Router</code> component
          and define your routes using the <code>Route</code> component.
        </li>
        <li>
          <strong>Use Links:</strong> Within your components, use the{" "}
          <code>Link</code> component to create clickable links that navigate to
          different routes.
        </li>
        <li>
          <strong>Programmatic Navigation:</strong> You can also navigate
          programmatically using the <code>navigate</code> function from the{" "}
          <code>useNavigate</code> hook.
        </li>
      </ol>

      <h3>Step-by-Step Example</h3>

      <h4>1. Defining Routes</h4>

      <p>Let's define our routes:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we define two routes: one for the homepage (<code>/</code>
        ) and another for the about page (<code>/about</code>). We use the{" "}
        <code>element</code> prop to specify the component that should be
        rendered for each route.
      </p>

      <h4>2. Using Links</h4>

      <p>
        Now, let's use the <code>Link</code> component to create clickable links
        that navigate between pages:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Welcome to the Home page!
      <Link to="/about">Go to About page</Link>
    </div>
  );
}

export default Home;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we import the <code>Link</code> component from{" "}
        <code>react-router-dom</code>. We use the <code>Link</code> component to
        create a clickable link that navigates to the about page (
        <code>/about</code>) when clicked.
      </p>
      <AdUnit />
      <h4>3. Programmatic Navigation with useNavigate</h4>

      <p>
        React Router also allows you to navigate programmatically using the{" "}
        <code>navigate</code> function from the <code>useNavigate</code> hook:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// About.js

import React, { useNavigate } from 'react';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      This is the About page!
      <button onClick={() => navigate('/')}>Go to Home page</button>
      <button onClick={() => navigate(-1)}>Go back one page</button>
    </div>
  );
}

export default About;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we import the <code>useNavigate</code> hook to access the{" "}
        <code>navigate</code> function. We use the <code>navigate</code>{" "}
        function to programmatically navigate to different routes. For example,{" "}
        <code>navigate('/')</code> navigates to the homepage, and{" "}
        <code>navigate(-1)</code> goes back one page in the browser history.
      </p>

      <h3>Putting It All Together</h3>

      <p>Let's see the complete example:</p>

      <h4>App.js</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Home.js</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Welcome to the Home page!
      <Link to="/about">Go to About page</Link>
    </div>
  );
}

export default Home;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>About.js</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// About.js

import React, { useNavigate } from 'react';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      This is the About page!
      <button onClick={() => navigate('/')}>Go to Home page</button>
      <button onClick={() => navigate(-1)}>Go back one page</button>
    </div>
  );
}

export default About;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Define Routes:</strong> We define our routes using the{" "}
          <code>Router</code>, <code>Routes</code>, and <code>Route</code>{" "}
          components.
        </li>
        <li>
          <strong>Use Links:</strong> We use the <code>Link</code> component to
          create clickable links that navigate between pages.
        </li>
        <li>
          <strong>Programmatic Navigation:</strong> We use the{" "}
          <code>navigate</code> function from the <code>useNavigate</code> hook
          to programmatically navigate to different routes. The{" "}
          <code>useNavigate</code> hook provides a way to navigate
          programmatically and also allows us to go back in the browser history
          using negative values.
        </li>
      </ul>

      <h3>Note</h3>

      <p>
        React Router provides a seamless navigation experience in your React
        applications. By using links or programmatically navigating, users can
        transition between pages without full page reloads, resulting in a more
        intuitive and engaging user experience. The <code>useNavigate</code>{" "}
        hook enhances this experience by providing a way to programmatically
        navigate and manipulate the browser history.
      </p>

      <Button whereToGo={"nesting-routes"} />
    </div>
  );
};

export default ReactNavigation;
