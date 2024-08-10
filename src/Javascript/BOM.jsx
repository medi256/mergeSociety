import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IntroductionBOM = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to the Browser Object Model (BOM)</h1>

      <p>
        Have you ever seen a popup on a website asking for your name or giving
        you an alert? Or maybe a box that asks for confirmation? All these
        actions are possible because of something called the{" "}
        <b>Browser Object Model (BOM)</b>.
      </p>
      <p>
        The BOM represents everything about the browser itself, like the window,
        the current URL, and the history of pages you’ve visited. While the DOM
        deals with the content of the web page, the BOM helps you interact with
        the browser.
      </p>

      <h2>Components of the BOM</h2>
      <p>
        The BOM includes several important objects that allow you to interact
        with the browser environment. Let’s take a closer look at some of these
        key components:
      </p>
      <ul>
        <li>
          <b>Window Object:</b> This is like the main dashboard of your browser.
          It represents the browser window and provides methods to interact with
          it, such as displaying alerts, confirming actions, and getting screen
          dimensions.
        </li>
        <li>
          <b>Location Object:</b> This is like your browser's address bar. It
          gives you information about the current URL and allows you to change
          the URL or reload the page.
        </li>
        <li>
          <b>Navigator Object:</b> This is like the information center of your
          browser, providing details about the browser, such as the app name,
          version, and platform.
        </li>
        <li>
          <b>History Object:</b> This is like the logbook of your browser,
          recording all the pages you’ve visited and allowing you to navigate
          back and forth between them.
        </li>
        <li>
          <b>Screen Object:</b> This is like the radar of your browser, giving
          you information about the screen size and resolution.
        </li>
      </ul>
      <AdUnit />
      <h2>BOM Applications</h2>
      <p>
        The BOM allows you to create interactive and dynamic experiences beyond
        the content of the web page. Here are a few examples of what you can do
        with the BOM:
      </p>
      <ul>
        <li>
          Show pop-up alerts to users to grab their attention or get their
          input.
        </li>
        <li>Redirect users to different pages or refresh the current page.</li>
        <li>
          Get information about the user's screen size to make your web page
          responsive.
        </li>
        <li>
          Access and manipulate the browser's history to create a seamless
          navigation experience.
        </li>
      </ul>

      <h2>Imagine Your Browser as a Spaceship</h2>
      <p>
        Let's use an analogy to make it easier to understand. Imagine your web
        browser is a spaceship. The BOM is like the spaceship's dashboard that
        gives you information about your surroundings (the browser) and lets you
        control things outside the spaceship.
      </p>

      <h2>The Difference Between the DOM and BOM</h2>
      <p>
        Now that we understand what the BOM is, it’s important to understand the
        difference between the DOM and the BOM:
      </p>
      <ul>
        <li>
          <b>DOM (Document Object Model):</b> The DOM is like the blueprint of a
          house. It represents the structure of a web page, including elements
          like headings, paragraphs, and images. It's all about the content and
          structure of the web page.
        </li>
        <li>
          <b>BOM (Browser Object Model):</b> The BOM is like the control panel
          of the house. It represents the browser's environment in which the web
          page exists. It includes things like the window, location, history,
          and screen, which are not part of the web page's content but are
          related to the browser itself.
        </li>
      </ul>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        The BOM is like the control panel of your web browser spaceship, giving
        you tools to interact with the browser environment and enhance user
        experiences. While the DOM focuses on the content and structure of the
        web page, the BOM opens up possibilities beyond the page itself,
        allowing you to create more dynamic and interactive web applications.
        So, buckle up and get ready to explore the vast universe of the BOM!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/EventHandling")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/windowObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroductionBOM;

export const WindowObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Exploring Window Object Methods</h1>

      <h2>Introduction</h2>
      <p>
        In our last lesson, we introduced the Browser Object Model (BOM) and
        discussed its various components, like the <code>Window Object</code>.
        Now, we’re going to dive deeper into the <code>Window Object</code> and
        explore some of its useful methods. These methods help us interact with
        the user through pop-up boxes and get feedback from them.
      </p>

      <h2>
        The <code>alert</code> Method
      </h2>
      <p>
        The <code>alert</code> method displays a simple pop-up box with a
        message and an OK button. It’s a way to show important information or
        warnings to the user.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          alert(<code>message</code>);
        </code>
      </pre>
      <p>
        <strong>Explanation:</strong> The <code>alert</code> method takes one
        argument, <code>message</code>, which is the text you want to display.
        When the user clicks OK, the pop-up box closes.
      </p>
      <p>
        For example, if you want to tell the user that their form has been
        submitted, you can use an <code>alert</code> to let them know.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
  <title>Alert Example</title>
</head>
<body>

  <script>
    // Show an alert box with a message
    alert("Form submitted successfully!");
  </script>
    

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        When this code runs, a pop-up box with the message "Form submitted
        successfully!" will appear. The user will need to click OK to continue.
      </p>
      <AdUnit />
      <h2>
        The <code>confirm</code> Method
      </h2>
      <p>
        The <code>confirm</code> method shows a pop-up box with a message, an OK
        button, and a Cancel button. It’s used to ask the user for confirmation
        before proceeding with an action.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          confirm(<code>message</code>);
        </code>
      </pre>
      <p>
        <strong>Explanation:</strong> The <code>confirm</code> method takes one
        argument, <code>message</code>, which is the text you want to display in
        the confirmation box. It returns <code>true</code> if the user clicks OK
        and <code>false</code> if they click Cancel.
      </p>
      <p>
        For example, if you want to ask the user if they are sure they want to
        delete an item, you can use a <code>confirm</code> dialog.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
  <title>Confirm Example</title>
</head>
<body>

  <script>
    // Ask for confirmation before deleting an item
    const userConfirmed = confirm("Are you sure you want to delete this item?");

    if (userConfirmed) {
      alert("Item deleted.");
    } else {
      alert("Action cancelled.");
    }
  </script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This code will display a pop-up asking the user if they want to delete
        the item. Depending on their response, a message will appear telling
        them whether the item was deleted or the action was cancelled.
      </p>
      <AdUnit />
      <h2>
        The <code>prompt</code> Method
      </h2>
      <p>
        The <code>prompt</code> method shows a pop-up box that asks the user for
        input. It includes a message, a text input field, an OK button, and a
        Cancel button.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          prompt(<code>message</code>, <code>defaultValue</code>);
        </code>
      </pre>
      <p>
        <strong>Explanation:</strong> The <code>prompt</code> method takes two
        arguments: <code>message</code>, which is the text you want to show, and{" "}
        <code>defaultValue</code> (optional), which is the text that appears in
        the input field by default. It returns the text entered by the user if
        they click OK, or <code>null</code> if they click Cancel.
      </p>
      <p>For example, you might want to ask the user to enter their name.</p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
  <title>Prompt Example</title>
</head>
<body>

  <script>
    // Prompt the user to enter their name
    const userName = prompt("Please enter your name:", "Your name here");

    if (userName) {
      alert("Hello, " + userName + "!");
    } else {
      alert("No name entered.");
    }
  </script>
  

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This code will display a pop-up asking the user to enter their name. If
        they provide a name and click OK, a greeting will appear with their
        name. If they click Cancel, a message saying "No name entered" will
        appear.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        The <code>Window Object</code> methods <code>alert</code>,{" "}
        <code>confirm</code>, and <code>prompt</code> are powerful tools for
        interacting with users through pop-up boxes. They help you display
        messages, get confirmations, and collect input, making your web pages
        more interactive and engaging.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/introBOM")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/LocationObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const LocationObject = () => {
  return (
    <div className="comments-container internet">
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
      <div className="button-container">
        <button onClick={() => (window.location.href = "/windowObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/navigationObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const NavigationObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding the Navigator Object</h1>

      <h2>Introduction</h2>
      <p>
        We've been exploring the Browser Object Model (BOM) and its various
        components. So far, we've covered the Window object and the Location
        object. Now, let's move on to another important part of the BOM: the
        Navigator object.
      </p>

      <h2>What is the Navigator Object?</h2>
      <p>
        The Navigator object is a part of the BOM that provides information
        about the browser. It helps you find out details such as the browser's
        name, version, and the user's operating system. This information can be
        useful for tailoring your website's behavior based on the browser or
        device the user is using.
      </p>
      <p>
        Think of the Navigator object as a source of information about the
        user's browser and system. It gives you important details that can help
        you make your web application more user-friendly and compatible with
        different browsers and devices.
      </p>

      <h2>Understanding Key Terms</h2>
      <p>
        Before we dive into the properties and methods, let's understand some
        key terms:
      </p>
      <ul>
        <li>
          <strong>Browser:</strong> The program you use to access the internet,
          such as Chrome, Firefox, or Safari.
        </li>
        <li>
          <strong>Operating System:</strong> The software that runs on your
          computer, such as Windows, macOS, or Linux.
        </li>
        <li>
          <strong>Cookies:</strong> Small pieces of data stored by your browser
          to remember information about your visit to a website.
        </li>
        <li>
          <strong>User Agent:</strong> A string of text that your browser sends
          to websites, telling them about the browser and operating system
          you're using.
        </li>
      </ul>
      <AdUnit />
      <h2>Properties of the Navigator Object</h2>
      <p>
        The Navigator object has several properties that provide information
        about the browser and the user's system. Here are some of the most
        important ones:
      </p>
      <ul>
        <li>
          <code>appName</code>: This property returns the name of the browser,
          such as "Netscape" (which is used for most modern browsers like
          Chrome, Firefox, etc.).
        </li>
        <li>
          <code>appVersion</code>: This property returns the version information
          of the browser.
        </li>
        <li>
          <code>userAgent</code>: This property returns the user agent string,
          which contains information about the browser and operating system.
        </li>
        <li>
          <code>platform</code>: This property returns the platform (operating
          system) on which the browser is running, such as "Win32" for Windows
          or "MacIntel" for macOS.
        </li>
        <li>
          <code>language</code>: This property returns the preferred language of
          the user, such as "en-US" for English (United States).
        </li>
        <li>
          <code>cookieEnabled</code>: This property returns a boolean value
          indicating whether cookies are enabled in the browser.
        </li>
      </ul>
      <p>
        These properties can be used to get information about the browser and
        the user's system.
      </p>
      <AdUnit />
      <h2>Methods of the Navigator Object</h2>
      <p>
        The Navigator object also has some methods that can be useful. Here are
        a few important ones:
      </p>
      <ul>
        <li>
          <code>geolocation</code>: This property returns a Geolocation object
          that can be used to get the user's geographical location.
        </li>
        <li>
          <code>javaEnabled()</code>: This method returns a boolean value
          indicating whether Java is enabled in the browser.
        </li>
      </ul>

      <h2>Example: Using the Navigator Object</h2>
      <p>
        Let's see some examples of how we can use the Navigator object to get
        information about the browser and the user's system.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Navigator Object Example</title>
</head>
<body>

<script>
// Get the name of the browser
const browserName = navigator.appName;
console.log("Browser Name: " + browserName);

// Get the version information of the browser
const browserVersion = navigator.appVersion;
console.log("Browser Version: " + browserVersion);

// Get the user agent string
const userAgent = navigator.userAgent;
console.log("User Agent: " + userAgent);

// Get the platform (operating system)
const platform = navigator.platform;
console.log("Platform: " + platform);

// Get the preferred language of the user
const language = navigator.language;
console.log("Language: " + language);

// Check if cookies are enabled
const cookiesEnabled = navigator.cookieEnabled;
console.log("Cookies Enabled: " + cookiesEnabled);

// Check if Java is enabled
const javaEnabled = navigator.javaEnabled();
console.log("Java Enabled: " + javaEnabled);
</script>
  

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This example demonstrates how to use various properties of the Navigator
        object to get information about the browser and the user's system.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've learned about the Navigator object and its
        properties and methods. We've seen how to use the Navigator object to
        get information about the browser and the user's system. The Navigator
        object is an important part of the BOM, and understanding how to use it
        can help you build more user-friendly and compatible web applications.
      </p>
      <p>
        We'll continue to explore the BOM and its components in future lessons.
        Stay tuned!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/LocationObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/historyObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const HistoryObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding the History Object</h1>

      <h2>Introduction</h2>
      <p>
        We've been learning about the Browser Object Model (BOM) and its various
        parts. So far, we've talked about the Window, Location, and Navigator
        objects. Now, let's talk about another important part of the BOM: the
        History object.
      </p>

      <h2>What is the History Object?</h2>
      <p>
        The History object is like a record of the pages you've visited in your
        current browsing session. Think of it as a list of web pages that the
        browser keeps track of as you move from one page to another. With the
        History object, you can go back to the previous page you visited or go
        forward to a page you navigated away from.
      </p>
      <p>
        Imagine the History object as a time machine that lets you travel back
        and forth through the web pages you've visited.
      </p>

      <h2>Understanding Key Terms</h2>
      <p>
        Before we talk about how to use the History object, let's understand
        some key terms:
      </p>
      <ul>
        <li>
          <strong>Session History:</strong> This is the list of web pages you
          have visited in the current browser session. Each tab or window in
          your browser has its own session history.
        </li>
        <li>
          <strong>Back:</strong> This means going to the previous page in the
          session history.
        </li>
        <li>
          <strong>Forward:</strong> This means going to the next page in the
          session history, but only if you have gone back before.
        </li>
      </ul>
      <AdUnit />
      <h2>Properties of the History Object</h2>
      <p>
        The History object has some properties that give us information about
        the session history. Here is an important one:
      </p>
      <ul>
        <li>
          <code>length</code>: This property tells you how many entries are in
          the session history, including the current page.
        </li>
      </ul>
      <p>
        For example, if you have visited 5 pages in the current session,{" "}
        <code>history.length</code> will return 5.
      </p>

      <h2>Methods of the History Object</h2>
      <p>
        The History object also has some methods that allow you to navigate
        through the session history. Here are the most important ones:
      </p>
      <ul>
        <li>
          <code>back()</code>: This method takes you to the previous page in the
          session history. It's like clicking the back button in your browser.
        </li>
        <li>
          <code>forward()</code>: This method takes you to the next page in the
          session history. It's like clicking the forward button in your
          browser.
        </li>
        <li>
          <code>go()</code>: This method allows you to go to a specific page in
          the session history. You can tell it how many pages to move back or
          forward. For example, <code>history.go(-1)</code> takes you to the
          previous page, and <code>history.go(1)</code> takes you to the next
          page.
        </li>
      </ul>
      <AdUnit />
      <h2>Example: Using the History Object</h2>
      <p>
        Let's look at some examples of how we can use the History object to
        navigate through the session history.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>History Object Example</title>
</head>
<body>

  
<script>
// Get the number of entries in the session history
const historyLength = history.length;
console.log("History Length: " + historyLength);

// Navigate to the previous page
function goBack() {
history.back();
}

// Navigate to the next page
function goForward() {
history.forward();
}

// Navigate to a specific page in the session history
function goToPage(number) {
history.go(number);
}
</script>

<button onclick="goBack()">Go Back</button>
<button onclick="goForward()">Go Forward</button>
<button onclick="goToPage(-1)">Go to Previous Page</button>

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we use different methods of the History object to
        navigate through the session history. The <code>goBack()</code> function
        moves to the previous page, the <code>goForward()</code> function moves
        to the next page, and the <code>goToPage()</code> function moves to a
        specific page in the history based on the number you provide.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've learned about the History object and its
        properties and methods. We've seen how to use the History object to
        navigate through the session history and manipulate history entries. The
        History object is an important part of the BOM, and understanding how to
        use it can help you build more dynamic and interactive web applications.
      </p>
      <p>
        We'll continue to explore the BOM and its components in future lessons.
        Stay tuned!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/navigationObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/screenObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ScreenObject = () => {
  return (
    <div className="comments-container internet">
      <h1>Exploring the Screen Object</h1>

      <h2>Introduction</h2>
      <p>
        In our previous lessons, we've been learning about the Browser Object
        Model (BOM) and its various components. So far, we've covered the Window
        object, the Location object, the Navigation object, and more. Now, let's
        move on to another important part of the BOM: the Screen object.
      </p>

      <h2>What is the Screen Object?</h2>
      <p>
        The Screen object is a part of the BOM that provides information about
        the user's screen, such as its size and resolution. It's like a report
        card for the user's screen, giving you details about its capabilities.
      </p>
      <p>
        Think of the Screen object as a way to get information about the user's
        screen, which can be useful for designing and developing web pages that
        look great on different devices.
      </p>

      <h2>Properties of the Screen Object</h2>
      <p>
        The Screen object has several properties that provide information about
        the user's screen. Here are some of the most important ones:
      </p>
      <ul>
        <li>
          <code>availHeight</code>: This property returns the height of the
          screen in pixels, minus the height of any toolbars or other features
          that take up space on the screen.
        </li>
        <li>
          <code>availWidth</code>: This property returns the width of the screen
          in pixels, minus the width of any toolbars or other features that take
          up space on the screen.
        </li>
        <li>
          <code>colorDepth</code>: This property returns the color depth of the
          screen, which is the number of bits used to represent the color of
          each pixel.
        </li>
        <li>
          <code>height</code>: This property returns the total height of the
          screen in pixels.
        </li>
        <li>
          <code>pixelDepth</code>: This property returns the pixel depth of the
          screen, which is the number of bits used to represent the color of
          each pixel.
        </li>
        <li>
          <code>width</code>: This property returns the total width of the
          screen in pixels.
        </li>
      </ul>
      <p>
        These properties can be used to get information about the user's screen,
        which can be useful for designing and developing web pages that look
        great on different devices.
      </p>

      <h2>Example: Using the Screen Object</h2>
      <p>
        Let's start by looking at an example that uses the <code>screen</code>{" "}
        object to access different properties of the user's screen.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Screen Object Example</title>
</head>
<body>

<script>
// Get the height of the screen
const screenHeight = screen.height;
console.log(screenHeight);

// Get the width of the screen
const screenWidth = screen.width;
console.log(screenWidth);

// Get the color depth of the screen
const screenColorDepth = screen.colorDepth;
console.log(screenColorDepth);

// Get the pixel depth of the screen
const screenPixelDepth = screen.pixelDepth;
console.log(screenPixelDepth);

// Get the available height of the screen
const screenAvailHeight = screen.availHeight;
console.log(screenAvailHeight);

// Get the available width of the screen
const screenAvailWidth = screen.availWidth;
console.log(screenAvailWidth);
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Explanation of the Code Example</h2>
      <p>
        In this example, we're using the <code>screen</code> object to access
        and log various properties of the user's screen. Here's what's happening
        in each step:
      </p>
      <ul>
        <li>
          We use <code>screen.height</code> to get the total height of the
          screen in pixels and store it in the <code>screenHeight</code>{" "}
          variable. The value is then logged to the console.
        </li>
        <li>
          We use <code>screen.width</code> to get the total width of the screen
          in pixels and store it in the <code>screenWidth</code> variable. The
          value is logged to the console.
        </li>
        <li>
          The <code>screen.colorDepth</code> property returns the number of bits
          used to represent the color of each pixel, and this value is stored in
          the <code>screenColorDepth</code> variable and logged to the console.
        </li>
        <li>
          Similarly, the <code>screen.pixelDepth</code> property returns the
          pixel depth of the screen, which is stored in the{" "}
          <code>screenPixelDepth</code> variable and logged to the console.
        </li>
        <li>
          The <code>screen.availHeight</code> property returns the available
          height of the screen, which excludes the height taken up by toolbars
          or other features. This value is stored in the{" "}
          <code>screenAvailHeight</code> variable and logged to the console.
        </li>
        <li>
          Finally, the <code>screen.availWidth</code> property returns the
          available width of the screen, which excludes the width taken up by
          toolbars or other features. This value is stored in the{" "}
          <code>screenAvailWidth</code> variable and logged to the console.
        </li>
      </ul>
      <p>
        By using the <code>screen</code> object, we can access detailed
        information about the user's screen, which can be helpful for creating
        responsive designs that work well on different devices.
      </p>

      <h2>Another Simple Example: Updating the DOM</h2>
      <p>
        We can also use the Screen object to update the content of our webpage
        dynamically. For instance, let's say we want to display the screen width
        inside a paragraph on our webpage.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Screen Width Example</title>
</head>
<body>
<p id="screen-info"></p>

<script>
// Get the screen width
const screenWidth = screen.width;

// Find the paragraph element by its ID
const paragraph = document.getElementById('screen-info');

// Set the text content of the paragraph to show

    // Set the text content of the paragraph to show the screen width
paragraph.textContent = 'Screen Width:'+ screenWidth +'pixels';
</script>
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We get the screen width using <code>screen.width</code>.
        </li>
        <li>
          We find the paragraph element with the ID <code>screen-info</code>{" "}
          using <code>document.getElementById</code>.
        </li>
        <li>
          We update the text inside the paragraph to display the screen width.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        In this lesson, we've learned about the Screen object and its
        properties. We've also seen how to use the Screen object to get
        information about the user's screen, and how to update the content of
        our webpage dynamically.
      </p>
      <p>
        The Screen object is an important part of the BOM, and understanding how
        to use it can help you design and develop web pages that look great on
        different devices.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/historyObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/BOMApplication")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const BOMApplication = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>BOM Applications: Interactive Web Experiences</h1>
      <p>
        Now that we’ve learned about different objects in the Browser Object
        Model (BOM), let’s explore how we can use these objects to make our web
        pages more interactive and responsive. The BOM allows us to create
        dynamic content that responds to user actions and adapts to different
        devices. Let’s dive into some practical examples.
      </p>

      <h2>1. Using BOM for Dynamic Content</h2>
      <p>
        One of the key benefits of the BOM is that it lets us make our web pages
        respond to what users do. Here are a few ways we can use BOM objects to
        achieve this:
      </p>
      <ul>
        <li>
          <b>Changing the URL with the Location Object:</b> Imagine you have an
          online store. When a user selects a product, you can use the{" "}
          <code>location.href</code> property to update the URL to something
          like <code>https://mystore.com/product?id=123</code>. This not only
          helps with sharing links but also allows you to track which product
          the user is viewing without refreshing the page.
        </li>
        <li>
          <b>Creating Confirmations with the Window Object:</b> Let’s say you
          want to confirm an action, like deleting an item from a list. You can
          use the <code>confirm()</code> method to ask the user, “Are you sure
          you want to delete this item?” If the user clicks "OK," you can
          proceed with the action; if they click "Cancel," you stop the action.
          This adds an extra layer of interaction to your web page.
        </li>
        <li>
          <b>Handling Navigation with the History Object:</b> If your web page
          has multiple steps, like a sign-up form with several sections, you can
          use <code>history.pushState()</code> to keep track of each step. This
          way, if the user clicks "Back," they return to the previous section
          without losing their progress.
        </li>
      </ul>

      <h2>2. Making Web Pages Responsive</h2>
      <p>
        With more people accessing websites from various devices like
        smartphones, tablets, and desktop computers, it’s crucial to make sure
        your site looks good and works well on all of them. The BOM provides
        tools to help with this:
      </p>
      <ul>
        <li>
          <b>Adjusting Layouts with the Screen Object:</b> The{" "}
          <code>screen</code> object helps you get information about the user’s
          screen, such as its width and height. You can use this data to adjust
          your web page layout, making sure it’s easy to use whether someone is
          viewing it on a large monitor or a small phone screen. For instance,
          you might choose to display larger images on a desktop and smaller,
          more compressed images on a mobile device.
        </li>
        <li>
          <b>Optimizing Content Placement with the Window Object:</b> The{" "}
          <code>window.innerWidth</code> and <code>window.innerHeight</code>{" "}
          properties give you the size of the user’s browser window. If the
          window is small, you can hide certain elements or rearrange content to
          fit better, improving the user experience.
        </li>
      </ul>

      <h2>3. Enhancing User Interaction with Real-Time Updates</h2>
      <p>
        Real-time updates make web pages feel more dynamic and modern by
        allowing content to change without needing to reload the page. Here’s
        how BOM objects can help:
      </p>
      <ul>
        <li>
          <b>Auto-Updating Content with the Location Object:</b> For example, if
          you have a news website, you can use the <code>location</code> object
          to automatically update the displayed news articles when the user
          navigates to a different section of the site. This keeps the content
          fresh and relevant without requiring the user to manually refresh the
          page.
        </li>
        <li>
          <b>Managing Browsing History with the History Object:</b> Social media
          platforms often use the History Object to enhance navigation. If
          you’re scrolling through posts and click on one to view it in detail,
          the platform can use <code>history.pushState()</code> to save your
          current position. This allows you to return to where you left off
          without reloading the entire page.
        </li>
      </ul>

      <p>
        The Browser Object Model is more than just a collection of objects—it’s
        a powerful tool that lets you create dynamic, responsive, and engaging
        web experiences. By using the BOM effectively, you can make your web
        pages do more than just display content—they can interact with users,
        respond to different devices, and keep content up-to-date in real-time.
      </p>
      <p>
        As you continue building your web development skills, remember to
        experiment with these BOM features. The more you practice, the more
        you’ll discover how to create rich, interactive experiences that your
        users will love.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/screenObject")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/JavascriptVsECMAScript")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
