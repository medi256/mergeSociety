import Link from "next/link";
import ScrollToTop from "../ScrollToTop";
import AdUnit from "../AdUnit";

export const metadata = {
  title: "Complete React Course: From Basics to Advanced | MergeSociety",
  description:
    "Master React.js with our comprehensive course. Learn everything from React fundamentals to advanced concepts like hooks, state management, and API integration. Ideal for beginners and intermediate developers.",
  keywords:
    "React.js course, web development, React tutorial, learn React, coding, front-end development, JSX, React hooks, state management, API integration",
  openGraph: {
    title:
      "Master React.js: Comprehensive Web Development Course | MergeSociety",
    description:
      "Dive deep into React.js with our step-by-step course. Cover everything from basics to advanced topics like hooks and state management. Start building modern web apps today!",
  },
};

const ReactCourse = () => {
  return (
    <div className="container">
      <AdUnit />
      <ScrollToTop />
      <main>
        <h1>React.js Course</h1>
        <p>Choose a topic to start learning:</p>
        <p>
          Don't know where to begin? <Link href={"/guide"}>click here</Link>
          ➡️ to get an introduction!
        </p>

        {/* Introduction to React Section */}
        <section className="section">
          <h2>Introduction to React</h2>
          <div className="grid">
            <Link href="/react/react-overview">
              <div className="card">
                <h3>Overview of React</h3>
                <p>
                  Learn about React and its place in modern web development.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Setting Up Your Environment Section */}
        <section className="section">
          <h2>Setting Up Your Environment</h2>
          <div className="grid">
            <Link href="/react/installing-nodejs">
              <div className="card">
                <h3>Installing Node.js and npm</h3>
                <p>Set up the necessary tools for React development.</p>
              </div>
            </Link>
            <Link href="/react/code-editor-setup">
              <div className="card">
                <h3>Setting up a code editor (VS Code recommended)</h3>
                <p>
                  Configure your development environment for optimal React
                  coding.
                </p>
              </div>
            </Link>
            <Link href="/react/create-react-app">
              <div className="card">
                <h3>Create a new React project using Create React App</h3>
                <p>Learn how to bootstrap a new React application.</p>
              </div>
            </Link>
            <Link href="/react/project-structure">
              <div className="card">
                <h3>Understanding the Project Structure</h3>
                <p>Explore the layout of a typical React project.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Core Concepts Section */}
        <section className="section">
          <h2>Core Concepts</h2>
          <div className="grid">
            <Link href="/react/jsx-intro">
              <div className="card">
                <h3>Introduction to JSX</h3>
                <p>Learn about JSX and its role in React development.</p>
              </div>
            </Link>
            <Link href="/react/jsx-attributes">
              <div className="card">
                <h3>Attributes in JSX: Enhancing UI Elements</h3>
                <p>
                  Understand how to use attributes in JSX for UI enhancement.
                </p>
              </div>
            </Link>
            <Link href="/react/functional-components">
              <div className="card">
                <h3>Functional Components</h3>
                <p>
                  Learn how to create and use functional components in React.
                </p>
              </div>
            </Link>
            <Link href="/react/jsx-structure">
              <div className="card">
                <h3>JSX Structure and Container Elements</h3>
                <p>Explore the structure of JSX and container elements.</p>
              </div>
            </Link>
            <Link href="/react/creating-rendering-jsx">
              <div className="card">
                <h3>Creating and Rendering JSX Files</h3>
                <p>
                  Learn how to create and render JSX files in your React app.
                </p>
              </div>
            </Link>
            <Link href="/react/images-in-react">
              <div className="card">
                <h3>Images in React</h3>
                <p>Discover how to work with images in React applications.</p>
              </div>
            </Link>
            <Link href="/react/jsx-best-practices">
              <div className="card">
                <h3>JSX Syntax and Best Practices</h3>
                <p>
                  Learn the best practices for writing clean and efficient JSX.
                </p>
              </div>
            </Link>
            <Link href="/react/conditional-rendering">
              <div className="card">
                <h3>React Conditional Rendering</h3>
                <p>Explore techniques for conditional rendering in React.</p>
              </div>
            </Link>
            <Link href="/react/class-components">
              <div className="card">
                <h3>Class Components</h3>
                <p>Learn how to create and use class components in React.</p>
              </div>
            </Link>
            <Link href="/react/component-hierarchy">
              <div className="card">
                <h3>Component Hierarchy and Nesting</h3>
                <p>Understand how to structure and nest components in React.</p>
              </div>
            </Link>
            <Link href="/react/props">
              <div className="card">
                <h3>Props (Properties)</h3>
                <p>Learn how to pass and use props in React components.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Handling Events Section */}
        <section className="section">
          <h2>Handling Events</h2>
          <div className="grid">
            <Link href="/react/event-handlers">
              <div className="card">
                <h3>Adding Event Handlers</h3>
                <p>Learn how to add and manage event handlers in React.</p>
              </div>
            </Link>
            <Link href="/react/functional-event-handling">
              <div className="card">
                <h3>Event Handling in Functional Components</h3>
                <p>
                  Explore event handling techniques in functional components.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Lists and Keys Section */}
        <section className="section">
          <h2>Lists and Keys</h2>
          <div className="grid">
            <Link href="/react/rendering-lists">
              <div className="card">
                <h3>Rendering Lists</h3>
                <p>Learn how to render lists of elements in React.</p>
              </div>
            </Link>
            <Link href="/react/understanding-keys">
              <div className="card">
                <h3>Understanding Keys in React</h3>
                <p>Explore the importance and usage of keys in React lists.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Advanced Concepts Section */}
        <section className="section">
          <h2>Advanced Concepts</h2>
          <div className="grid">
            <Link href="/react/hooks-intro">
              <div className="card">
                <h3>Introduction to Hooks</h3>
                <p>Learn about React Hooks and their benefits.</p>
              </div>
            </Link>
            <Link href="/react/usestate-hook">
              <div className="card">
                <h3>useState</h3>
                <p>Explore state management with the useState hook.</p>
              </div>
            </Link>
            <Link href="/react/useeffect-hook">
              <div className="card">
                <h3>useEffect</h3>
                <p>Learn how to manage side effects with the useEffect hook.</p>
              </div>
            </Link>
            <Link href="/react/useref-hook">
              <div className="card">
                <h3>useRef</h3>
                <p>Discover how to use the useRef hook for DOM manipulation.</p>
              </div>
            </Link>
            <Link href="/react/usecontext-hook">
              <div className="card">
                <h3>useContext</h3>
                <p>Learn about context management with the useContext hook.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Context API Section */}
        <section className="section">
          <h2>Context API</h2>
          <div className="grid">
            <Link href="/react/context-api">
              <div className="card">
                <h3>Passing Data Through Component Tree</h3>
                <p>Learn how to use Context API for efficient data passing.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Forms and Controlled Components Section */}
        <section className="section">
          <h2>Forms and Controlled Components</h2>
          <div className="grid">
            <Link href="/react/form-handling">
              <div className="card">
                <h3>Handling Form Input</h3>
                <p>Learn techniques for handling form inputs in React.</p>
              </div>
            </Link>
            <Link href="/react/controlled-vs-uncontrolled">
              <div className="card">
                <h3>Controlled vs Uncontrolled Components</h3>
                <p>
                  Understand the difference between controlled and uncontrolled
                  components.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Styling in React Section */}
        <section className="section">
          <h2>Styling in React</h2>
          <div className="grid">
            <Link href="/react/react-css-styling">
              <div className="card">
                <h3>React CSS Styling: Efficient Styling Techniques</h3>
                <p>Explore various methods for styling React components.</p>
              </div>
            </Link>
            <Link href="/react/inline-styles">
              <div className="card">
                <h3>Applying Inline Styles in React</h3>
                <p>Learn how to use inline styles in React components.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* React Router Section */}
        <section className="section">
          <h2>React Router</h2>
          <div className="grid">
            <Link href="/react/setup-react-router">
              <div className="card">
                <h3>Setting Up React Router</h3>
                <p>Learn how to set up routing in your React application.</p>
              </div>
            </Link>
            <Link href="/react/navigating-pages">
              <div className="card">
                <h3>Navigating between Pages</h3>
                <p>Explore techniques for navigation in React applications.</p>
              </div>
            </Link>
            <Link href="/react/nesting-routes">
              <div className="card">
                <h3>Nesting Routes</h3>
                <p>
                  Learn how to create and manage nested routes in React Router.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Working with APIs Section */}
        <section className="section">
          <h2>Working with APIs</h2>
          <div className="grid">
            <Link href="/react/fetching-api">
              <div className="card">
                <h3>Fetching API</h3>
                <p>Learn how to fetch data from APIs in React applications.</p>
              </div>
            </Link>
            <Link href="/react/async-await">
              <div className="card">
                <h3>Async/Await Syntax</h3>
                <p>
                  Explore the async/await syntax for handling asynchronous
                  operations.
                </p>
              </div>
            </Link>
            <Link href="/react/error-handling">
              <div className="card">
                <h3>Error Handling</h3>
                <p>Learn techniques for handling errors in API requests.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Deploying React App Section */}
        <section className="section">
          <h2>Deploying React App</h2>
          <div className="grid">
            <Link href="/react/deploying-options">
              <div className="card">
                <h3>Deploying Options (Netlify, Vercel, Github Pages)</h3>
                <p>
                  Explore different options for deploying your React
                  application.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <AdUnit />
      <AdUnit />
    </div>
  );
};

export default ReactCourse;
