import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering Nested Routes in React Router: Efficient Routing Structure",
  description:
    "Learn how to organize your React application with nested routes. Discover the power of hierarchical routing and create a seamless user experience.",
  openGraph: {
    title: "React Router Nested Routes Tutorial",
    description:
      "Explore the world of nested routes in React Router. Enhance your application structure and improve user navigation.",
  },

  alternates: {
    canonical: "https://www.mergesociety.com/react/nesting-routes",
  },

  keywords: [
    "React Router",
    "Nested Routes",
    "React",
    "Routing",
    "Hierarchical Routing",
    "User Experience",
  ],
};

const NestingRoutes = () => {
  return (
    <div className="lesson-container">
      <h1>Nesting Routes in React Router: Efficient Routing Structure</h1>

      <p>
        React Router not only allows you to define routes and render components,
        but it also provides the ability to nest routes. Nesting routes is a
        powerful technique that helps you organize and structure your routes
        efficiently. Let's explore the world of nesting routes and learn how to
        efficiently manage and navigate through nested routes in your React
        applications.
      </p>

      <h3>Understanding Nested Routes</h3>

      <p>
        Nested routes in React Router refer to the practice of defining routes
        within other routes. This hierarchical structure allows you to organize
        your routes in a more logical and maintainable way. With nested routes,
        you can create a clear and intuitive routing structure for your
        application.
      </p>

      <h4>What are Nested Routes?</h4>

      <p>
        Nested routes in React Router are routes that are defined within other
        routes. This nesting creates a hierarchical structure where parent
        routes can contain child routes. Nested routes are useful when you have
        sections of your application that require multiple levels of navigation.
      </p>

      <h4>Why Use Nested Routes?</h4>

      <p>Nested routes offer several benefits:</p>

      <ul>
        <li>
          <strong>Improved Organization:</strong> Nested routes allow you to
          organize your routes in a more logical and hierarchical manner. This
          makes it easier to manage and maintain your routes as your application
          grows.
        </li>
        <li>
          <strong>Code Reusability:</strong> With nested routes, you can reuse
          common route structures across different sections of your application.
        </li>
        <li>
          <strong>Dynamic Routing:</strong> Nested routes enable dynamic routing
          by allowing you to render different components based on the current
          route and its nested routes.
        </li>
      </ul>

      <h3>Steps to Nest Routes</h3>

      <p>Here are the steps to nest routes in React Router:</p>

      <ol>
        <li>
          <strong>Define Parent Routes:</strong> Create a parent route using the{" "}
          <code>Route</code> component.
        </li>
        <li>
          <strong>Nest Child Routes:</strong> Within the parent route, define
          child routes using the <code>Route</code> component and specify the{" "}
          <code>path</code> and <code>element</code> or <code>component</code>{" "}
          prop.
        </li>
        <li>
          <strong>Set Default Route with Index:</strong> If you want a specific
          child route to be rendered by default, you can use the{" "}
          <code>index</code> attribute instead of omitting the <code>path</code>{" "}
          prop.
        </li>
      </ol>

      <h3>Step-by-Step Example</h3>

      <h4>1. Defining Parent Routes</h4>

      <p>Let's define our parent routes:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import News from './News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news">
          <Route path="/news/technology" element={<Technology />} />
          <Route path="/news/sports" element={<Sports />} />
        </Route>
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
        In this code, we define two parent routes: one for the homepage (
        <code>/</code>) and another for the news page (<code>/news</code>).
      </p>

      <h4>2. Nesting Child Routes</h4>

      <p>Now, let's nest child routes within the news page route:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// News.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Technology from './Technology';
import Sports from './Sports';

function News() {
  return (
    <Routes>
      <Route path="/news/technology" element={<Technology />} />
      <Route path="/news/sports" element={<Sports />} />
    </Routes>
  );
}

export default News;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we define two child routes within the news page route: one
        for the technology section (<code>/news/technology</code>) and another
        for the sports section (<code>/news/sports</code>). We specify the{" "}
        <code>element</code> prop to indicate the component that should be
        rendered for each child route.
      </p>

      <h4>3. Setting a Default Route with Index</h4>

      <p>
        If you want a specific child route to be rendered by default, you can
        use the <code>index</code> attribute instead of omitting the{" "}
        <code>path</code> prop:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// News.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Technology from './Technology';
import Sports from './Sports';
import IntroductionH from './IntroductionH';

function News() {
  return (
    <Routes>
      <Route path="/news/technology" element={<Technology />} />
      <Route path="/news/sports" element={<Sports />} />
      <Route index element={<IntroductionH />} /> {/* This route will be rendered by default */}
    </Routes>
  );
}

export default News;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we added a default route (<code>/news</code>) that will be
        rendered when the user visits <code>/news</code> without specifying a
        specific child route. The <code>IntroductionH</code> component will be
        rendered by default.
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
import News from './News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news">
          <Route path="/news/technology" element={<Technology />} />
          <Route path="/news/sports" element={<Sports />} />
          <Route index element={<IntroductionH />} /> {/* This route will be rendered by default */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>News.js</h4>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// News.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Technology from './Technology';
import Sports from './Sports';
import IntroductionH from './IntroductionH';

function News() {
  return (
    <Routes>
      <Route path="/news/technology" element={<Technology />} />
      <Route path="/news/sports" element={<Sports />} />
      <Route index element={<IntroductionH />} /> {/* This route will be rendered by default */}
    </Routes>
  );
}

export default News;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Define Parent Routes:</strong> We define our parent routes
          using the <code>Route</code> component. The parent routes act as the
          main sections of our application.
        </li>
        <li>
          <strong>Nest Child Routes:</strong> Within the parent routes, we
          define child routes using the <code>Route</code> component. The child
          routes represent subsections within the parent routes.
        </li>
        <li>
          <strong>Set Default Route with Index:</strong> We can use the{" "}
          <code>index</code> attribute to specify a default route. This route
          will be rendered when the user visits the parent route without
          specifying a specific child route.
        </li>
      </ul>

      <h3>Note</h3>

      <p>
        Nesting routes in React Router provides a structured and organized way
        to manage your application's routing. It allows you to create a
        hierarchical structure that reflects the logical flow of your
        application. By nesting routes, you can efficiently manage and navigate
        through different sections of your application.
      </p>

      <Button whereToGo={"fetching-api"} />
    </div>
  );
};

export default NestingRoutes;
