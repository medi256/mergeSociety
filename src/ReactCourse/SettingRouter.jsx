import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SettingRouter = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>React Router: Your Website's GPS</h2>

      <p>
        Hey there, future React superstars! Today, we're going to talk about
        something super cool called React Router. Don’t worry if it sounds
        complicated – we’ll break it down step by step, nice and easy!
      </p>

      <h3>What is React Router?</h3>

      <p>
        Imagine you're building a house (that’s your React app). Now, this house
        has many rooms (these are like different pages in your app). But how do
        you move from one room to another? You need doors, right? Well, React
        Router is like the doors in your house that let you move between
        different rooms (pages) of your app!
      </p>

      <p>
        React Router helps users move between different parts of your app
        smoothly, like a GPS for your website – guiding users to the right place
        when they click on different links.
      </p>

      <h3>Why Do We Need React Router?</h3>

      <p>
        You might be thinking, "Why can’t I just create different pages and link
        them together like I did in HTML?" Great question!
      </p>

      <p>
        In React, we usually make what’s called a Single Page Application (SPA).
        This is like a magic house where instead of moving from room to room,
        the walls around you shift to show different views! This makes your app
        faster and smoother because instead of loading new pages entirely, only
        the parts that need to change are updated.
      </p>

      <p>
        React Router makes this magic possible by controlling which parts of the
        app to show based on the URL.
      </p>

      <h4>Here’s What React Router Does for Us:</h4>

      <ul>
        <li>
          Keeps things fast: Instead of loading a whole new page every time, it
          just updates the part that needs to be changed.
        </li>
        <li>
          Helps with organization: It lets us split our app into different
          components, making everything neat and easier to manage.
        </li>
        <li>
          Makes navigation smooth: Users can move around without the page
          reloading.
        </li>
      </ul>

      <h3>Setting Up React Router</h3>

      <p>
        Now, let's get our hands dirty and set up React Router in our app. We’ll
        take it slow and steady to make sure everything makes sense!
      </p>

      <h4>Step 1: Install React Router</h4>

      <p>
        First, we need to add React Router to our project. Think of this like
        going to the hardware store to buy the doors for our house.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`npm install react-router-dom`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This command tells npm (Node Package Manager) to fetch React Router for
        us and add it to our project.
      </p>

      <h4>Step 2: Import React Router Components</h4>

      <p>
        Great! Now that we have our "doors" (React Router), let’s start using
        them in our app.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Here’s a breakdown of the components we’re importing:</p>

      <ul>
        <li>
          <strong>BrowserRouter</strong> (which we’re calling Router for short)
          is the main container that ensures your entire app is connected to the
          React Router system. Think of it like the frame of your house—it holds
          everything together.
        </li>
        <li>
          <strong>Routes</strong> is where we’ll define which pages (or
          components) should be shown for different URLs. Think of it as the
          place where your doors are set up.
        </li>
        <li>
          <strong>Route</strong> is like the individual doors. Each Route says,
          "When the user goes to this path, show them this component (or page)."{" "}
        </li>
      </ul>
      <AdUnit />
      <h4>Step 3: Wrap Your App with BrowserRouter</h4>

      <p>
        Now we need to wrap our entire app with the BrowserRouter component.
        This is like installing the main doorframe that holds all the doors
        we’ll be adding.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function App() {
  return (
    <Router>
      {/* Your app content goes here */}
    </Router>
  );
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Why is BrowserRouter important? It’s like the backbone of our navigation
        system. By wrapping our app inside BrowserRouter, we’re telling React,
        "Hey, manage all the navigation inside this app." Without it, React
        Router wouldn't be able to handle any routing at all.
      </p>

      <h4>Step 4: Set Up Your Routes</h4>

      <p>
        Now, let’s set up the routes! This is where we decide which component
        (or "room") to show when someone visits a specific URL.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this code, we’re telling React Router:</p>

      <ul>
        <li>
          When the user visits / (the homepage), show them the Home component.
        </li>
        <li>When the user visits /about, show them the About component.</li>
      </ul>

      <h4>Step 5: Create the Home and About Components</h4>

      <p>
        Now, let’s create the actual Home and About components that will be
        displayed when users visit those pages.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// Home.js

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default Home;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// About.js

function About() {
  return <h1>About Us</h1>;
}

export default About;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Now, import these components into your App.js file:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import Home from './Home';
import About from './About';`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 6: Bringing It All Together</h4>

      <p>Here’s how the complete App.js file will look:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Now, when you visit / (your homepage), you’ll see the Home page content.
        And when you go to /about, you’ll see the About Us page. React Router
        handles this navigation smoothly, without refreshing the page.
      </p>
      <AdUnit />
      <h3>Congratulations!</h3>

      <p>
        You’ve just set up basic routing in your React app! You can now navigate
        between the Home and About pages without reloading the entire app. It’s
        smooth, fast, and organized!
      </p>

      <h3>What’s Next?</h3>

      <p>
        In the next lesson, we’ll learn how to add links to navigate between
        pages and how to nest routes for more complex apps. But for now, take a
        moment to celebrate – you’ve taken a big step into the world of React
        Router!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/inline")}>back</button>
        <button onClick={() => (window.location.href = "/NavigatePage")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SettingRouter;

export const NavigPage = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>
        Navigating between Pages in React Router: Enhancing User Experience
      </h2>

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
      <div className="button-container">
        <button onClick={() => (window.location.href = "/SettingRoute")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/RouteParamNest")}>
          Next
        </button>
      </div>
    </div>
  );
};
export const RouteParamNestRoute = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Nesting Routes in React Router: Efficient Routing Structure</h2>

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
      <AdUnit />
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
      <div className="button-container">
        <button onClick={() => (window.location.href = "/NavigatePage")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/FetchAPI")}>
          Next
        </button>
      </div>
    </div>
  );
};
