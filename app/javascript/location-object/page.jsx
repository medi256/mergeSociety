import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Exploring the Location Object | BOM JavaScript Tutorial",
  description:
    "Learn about the Location object in JavaScript's Browser Object Model (BOM), its properties like href, protocol, pathname, and methods like assign(), replace(), and reload(). Understand how to manipulate URLs and navigate web pages dynamically.",
  keywords: [
    "Location object",
    "BOM",
    "Browser Object Model",
    "JavaScript location",
    "window.location",
    "URL manipulation",
    "assign method",
    "replace method",
    "reload method",
    "JavaScript URL",
    "web navigation",
    "dynamic URL",
    "JavaScript tutorial",
  ],
  author: "Your Name",
  openGraph: {
    title: "Exploring the Location Object | BOM JavaScript Tutorial",
    description:
      "Discover the Location object in JavaScript and learn how to use its properties and methods to manipulate URLs and navigate web pages.",

    type: "article",
  },
};

const LocationObject = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Exploring the Location Object</h1>

      <h2>Introduction</h2>
      <p>
        In our previous lessons, we've been learning about the Browser Object
        Model (BOM) and its various components. So far, we've covered the Window
        object and its methods, such as <code>alert</code>, <code>confirm</code>
        , and <code>prompt</code>. Now, let's move on to another important part
        of the BOM: the Location object.
      </p>

      <h2>What is the Location Object?</h2>
      <p>
        The Location object is a part of the BOM that represents the current URL
        of the webpage. It provides information about the URL, such as the
        protocol, hostname, pathname, and more. The Location object also allows
        you to manipulate the URL, which can be useful for navigating between
        pages or loading new content.
      </p>
      <p>
        Think of the Location object as a map that shows you where you are on
        the web. It gives you information about the current URL and allows you
        to navigate to new URLs.
      </p>

      <h2>Understanding the Window and Location Objects</h2>
      <p>
        Before we dive into the properties and methods of the Location object,
        it's important to understand the context in which it's used: the{" "}
        <code>window</code> object.
      </p>
      <p>
        The <code>window</code> object is the global object in a web browser
        that represents the browser window or tab. It contains properties and
        methods for controlling the browser window, accessing the browser's
        history, and manipulating the document content.
      </p>
      <p>
        The <code>location</code> object is a property of the{" "}
        <code>window</code> object. When you use <code>window.location</code>,
        you're accessing the Location object associated with the current browser
        window or tab. This is why we often use the syntax{" "}
        <code>window.location</code> to interact with the Location object.
      </p>
      <AdUnit />
      <h2>Properties of the Location Object</h2>
      <p>
        The Location object has several properties that provide information
        about the current URL. Here are some of the most important ones:
      </p>
      <ul>
        <li>
          <code>href</code>: This property returns the entire URL of the
          webpage, including the protocol, hostname, pathname, and query string.
        </li>
        <li>
          <code>protocol</code>: This property returns the protocol part of the
          URL, such as "http:" or "https:".
        </li>
        <li>
          <code>hostname</code>: This property returns the hostname part of the
          URL, such as "www.example.com".
        </li>
        <li>
          <code>pathname</code>: This property returns the pathname part of the
          URL, such as "/path/to/page".
        </li>
        <li>
          <code>search</code>: This property returns the query string part of
          the URL, such as "?query=string".
        </li>
        <li>
          <code>hash</code>: This property returns the fragment identifier part
          of the URL, such as "#anchor".
        </li>
      </ul>
      <p>
        These properties can be used to get information about the current URL,
        and to manipulate the URL.
      </p>

      <h2>Methods of the Location Object</h2>
      <p>
        The Location object also has several methods that allow you to
        manipulate the URL. Here are some of the most important ones:
      </p>
      <ul>
        <li>
          <code>assign()</code>: This method loads a new URL into the browser
          window.
        </li>
        <li>
          <code>replace()</code>: This method replaces the current URL with a
          new one, without adding a new entry to the browser's history.
        </li>
        <li>
          <code>reload()</code>: This method reloads the current URL, which can
          be useful for updating the page after making changes.
        </li>
      </ul>
      <p>
        These methods can be used to navigate between pages, or to load new
        content.
      </p>
      <AdUnit />
      <h2>Example: Using the Location Object</h2>
      <p>
        Let's see some examples of how we can use the Location object. We'll use
        JavaScript code to get information about the current URL and to navigate
        to new URLs.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Location Object Example</title>
</head>
<body>

<script>
// Get the current URL
const currentURL = window.location.href;
console.log("Current URL: " + currentURL);

// Get the protocol part of the URL
const protocol = window.location.protocol;
console.log("Protocol: " + protocol);

// Get the hostname part of the URL
const hostname = window.location.hostname;
console.log("Hostname: " + hostname);

// Get the pathname part of the URL
const pathname = window.location.pathname;
console.log("Pathname: " + pathname);

// Get the search query part of the URL
const search = window.location.search;
console.log("Search query: " + search);

// Get the hash part of the URL
const hash = window.location.hash;
console.log("Hash: " + hash);

// Load a new URL into the browser window
// window.location.assign("https://www.example.com");

// Replace the current URL with a new one
// window.location.replace("https://www.example.com/new-page");

// Reload the current URL
// window.location.reload();
</script>

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This example demonstrates how to use various properties of the Location
        object to get information about the current URL. Uncomment the lines
        with <code>window.location.assign</code>,{" "}
        <code>window.location.replace</code>, and{" "}
        <code>window.location.reload</code> to see how these methods work in
        action.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've learned about the Location object and its
        properties and methods. We've also seen how to use the Location object
        to manipulate the URL and navigate between pages. The Location object is
        an important part of the BOM, and understanding how to use it can help
        you build more dynamic and interactive web applications.
      </p>
      <p>
        We'll continue to explore the BOM and its components in future lessons.
        Stay tuned!
      </p>
      <Button whereToGo={"navigation-object"} />
    </div>
  );
};

export default LocationObject;
