import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "React Router: A Beginner's Guide to Website Navigation",
  description:
    "Explore React Router, a powerful tool for handling navigation in React apps. Learn to set up routes and create dynamic websites.",
  keywords: [
    "react router",
    "react router tutorial",
    "website navigation",
    "react routing",
    "react router dom",
    "react router example",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/react/setup-react-router",
  },

  openGraph: {
    title: "React Router: Smooth Navigation for Your React Apps",
    description:
      "Dive into React Router. Learn to create dynamic websites with smooth navigation.",
  },
};

const RouterSet = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>React Router: Your Website's GPS</h1>

        <p>
          Hey there, future React superstars! Today, we're going to talk about
          something super cool called React Router. Don’t worry if it sounds
          complicated – we’ll break it down step by step, nice and easy!
        </p>

        <h3>What is React Router?</h3>

        <p>
          Imagine you're building a house (that’s your React app). Now, this
          house has many rooms (these are like different pages in your app). But
          how do you move from one room to another? You need doors, right? Well,
          React Router is like the doors in your house that let you move between
          different rooms (pages) of your app!
        </p>

        <p>
          React Router helps users move between different parts of your app
          smoothly, like a GPS for your website – guiding users to the right
          place when they click on different links.
        </p>

        <h3>Why Do We Need React Router?</h3>

        <p>
          You might be thinking, "Why can’t I just create different pages and
          link them together like I did in HTML?" Great question!
        </p>

        <p>
          In React, we usually make what’s called a Single Page Application
          (SPA). This is like a magic house where instead of moving from room to
          room, the walls around you shift to show different views! This makes
          your app faster and smoother because instead of loading new pages
          entirely, only the parts that need to change are updated.
        </p>

        <p>
          React Router makes this magic possible by controlling which parts of
          the app to show based on the URL.
        </p>

        <h4>Here’s What React Router Does for Us:</h4>

        <ul>
          <li>
            Keeps things fast: Instead of loading a whole new page every time,
            it just updates the part that needs to be changed.
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
          Now, let's get our hands dirty and set up React Router in our app.
          We’ll take it slow and steady to make sure everything makes sense!
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
          This command tells npm (Node Package Manager) to fetch React Router
          for us and add it to our project.
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
            <strong>BrowserRouter</strong> (which we’re calling Router for
            short) is the main container that ensures your entire app is
            connected to the React Router system. Think of it like the frame of
            your house—it holds everything together.
          </li>
          <li>
            <strong>Routes</strong> is where we’ll define which pages (or
            components) should be shown for different URLs. Think of it as the
            place where your doors are set up.
          </li>
          <li>
            <strong>Route</strong> is like the individual doors. Each Route
            says, "When the user goes to this path, show them this component (or
            page)."{" "}
          </li>
        </ul>

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
          Why is BrowserRouter important? It’s like the backbone of our
          navigation system. By wrapping our app inside BrowserRouter, we’re
          telling React, "Hey, manage all the navigation inside this app."
          Without it, React Router wouldn't be able to handle any routing at
          all.
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
          Now, when you visit / (your homepage), you’ll see the Home page
          content. And when you go to /about, you’ll see the About Us page.
          React Router handles this navigation smoothly, without refreshing the
          page.
        </p>

        <h3>Congratulations!</h3>

        <p>
          You’ve just set up basic routing in your React app! You can now
          navigate between the Home and About pages without reloading the entire
          app. It’s smooth, fast, and organized!
        </p>

        <h3>What’s Next?</h3>

        <p>
          In the next lesson, we’ll learn how to add links to navigate between
          pages and how to nest routes for more complex apps. But for now, take
          a moment to celebrate – you’ve taken a big step into the world of
          React Router!
        </p>

        <Button whereToGo={"navigating-pages"} />
      </div>
    </div>
  );
};

export default RouterSet;
