import AdUnit from "../AdUnit";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FetchAPI = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Working with APIs in React: Fetching Dynamic Data</h2>

      <p>
        React is a versatile tool for building user interfaces, and when
        combined with APIs, it becomes even more powerful. APIs, or Application
        Programming Interfaces, enable your React application to communicate
        with external data sources and fetch dynamic data. Let's explore the
        world of APIs and learn how to efficiently fetch and manage data in your
        React applications.
      </p>

      <h3>Understanding APIs and Data Fetching</h3>

      <p>
        APIs play a crucial role in modern web development. They allow your
        React application to interact with external data sources, retrieve
        information, and display it in your user interface. By leveraging APIs,
        you can build dynamic and data-driven applications that provide a
        seamless user experience.
      </p>

      <h4>What are APIs?</h4>

      <p>
        APIs, or Application Programming Interfaces, are a set of defined rules
        and protocols that facilitate communication between different software
        applications. In the context of web development, APIs are commonly used
        to retrieve data from a server and incorporate it into your web
        application.
      </p>

      <p>
        For example, let's say you're building a news application that displays
        the latest headlines. You can use an API provided by a news service to
        fetch the latest news articles and display them in your React
        application. The API acts as an intermediary between your application
        and the server, allowing you to retrieve the data you need in a
        structured format.
      </p>

      <h4>Why Use APIs?</h4>

      <p>APIs offer several advantages:</p>

      <ul>
        <li>
          <strong>Dynamic Data:</strong> APIs allow you to fetch and display
          dynamic data in your React application. This means that your UI can
          update automatically whenever new data is available. For example, if
          you're building a social media app, you can use an API to fetch the
          latest posts or updates from your friends.
        </li>
        <li>
          <strong>Reusability:</strong> APIs provide a standardized way to
          retrieve data, making it easier to reuse the same data across
          different parts of your application or even in different projects.
          This promotes code reusability and reduces duplication.
        </li>
        <li>
          <strong>Scalability:</strong> With APIs, you can fetch data from
          external sources, making your application more scalable and adaptable
          to changing data requirements. For instance, if you're building an
          e-commerce app, you can use an API to fetch product information,
          prices, and reviews from a database.
        </li>
      </ul>
      <AdUnit />
      <h3>Steps to Work with APIs in React</h3>

      <p>Here are the steps to work with APIs in React:</p>

      <ol>
        <li>
          <strong>Choose an API:</strong> Select an API that provides the data
          you need for your application. There are various public APIs
          available, such as the JSONPlaceholder API, which offers dummy data
          for testing purposes. You can also use APIs provided by specific
          services or build your own API.
        </li>
        <li>
          <strong>Fetch Data:</strong> Use the <code>fetch</code> API or a
          library like Axios to send HTTP requests to the API and retrieve the
          desired data. You can send GET, POST, PUT, DELETE, and other types of
          requests depending on your needs.
        </li>
        <li>
          <strong>Display Data:</strong> Utilize React's state management and
          rendering capabilities to display the fetched data in your user
          interface. You can use state variables, props, or context to manage
          the fetched data and render it in your components.
        </li>
      </ol>

      <h3>Step-by-Step Example</h3>

      <h4>1. Choosing an API</h4>

      <p>
        Let's select an API that provides the data we need for our application.
        For this example, we'll use the{" "}
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder API
        </a>
        , which offers dummy data for testing purposes. This API provides
        endpoints for retrieving posts, comments, albums, and more.
      </p>

      <h4>2. Fetching Data</h4>

      <p>Now, let's fetch data from the API:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we use the <code>fetch</code> API to send a GET request to
        the JSONPlaceholder API and retrieve a list of posts. We use the{" "}
        <code>useState</code> and <code>useEffect</code> hooks to manage the
        state of the fetched data and fetch the data when the component mounts.
      </p>

      <p>
        The <code>useEffect</code> hook is used to perform side effects or
        cleanup tasks in React components. In this case, we're using it to fetch
        data when the component mounts (similar to{" "}
        <code>componentDidMount</code> in class components). The fetched data is
        then stored in the <code>posts</code> state variable using the{" "}
        <code>setPosts</code> function.
      </p>

      <h4>3. Displaying Data</h4>

      <p>Finally, let's display the fetched data in our user interface:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// ...

return (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

// ...
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this code, we use the <code>posts</code> array to iterate over the
        fetched data and display each post's title and body in our UI. The{" "}
        <code>key</code> attribute is used to give each post a unique
        identifier, which is important for React's reconciliation process.
      </p>

      <h3>Putting It All Together</h3>

      <p>Let's see the complete example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
// App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Choose an API:</strong> We select the JSONPlaceholder API,
          which provides dummy data for testing purposes. This API offers
          various endpoints for retrieving different types of data, such as
          posts, comments, albums, and more.
        </li>
        <li>
          <strong>Fetch Data:</strong> We use the <code>fetch</code> API to send
          a GET request to the API and retrieve a list of posts. The fetched
          data is stored in the <code>posts</code> state variable using the{" "}
          <code>setPosts</code> function.
        </li>
        <li>
          <strong>Display Data:</strong> We use React's state management and
          rendering capabilities to display the fetched data in our UI. We map
          over the <code>posts</code> array and display the title and body of
          each post within a <code>div</code> element.
        </li>
      </ul>
      <h2>You can also watch this video if you have not understood</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/27f3B1qndW8?si=lTGEELhQ4tU499Cv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h3>Note</h3>

      <p>
        Working with APIs in React empowers you to build dynamic and data-driven
        applications. By leveraging APIs, you can fetch and display dynamic data
        in your user interface, creating a seamless and engaging user
        experience. Remember to handle errors and loading states when working
        with APIs to provide a robust and user-friendly application.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/RouteParamNest")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/AsyncAwaitReact")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchAPI;
