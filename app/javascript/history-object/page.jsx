
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding the History Object in JavaScript",
  description:
    "Explore the History object in JavaScript, a crucial part of the Browser Object Model (BOM). Learn how to use its properties and methods to navigate the session history, including going back, forward, and jumping to specific pages.",
  keywords: [
    "History object",
    "JavaScript History",
    "BOM History",
    "browser object model",
    "history properties",
    "history methods",
    "session history",
    "JavaScript back method",
    "JavaScript forward method",
    "history.go",
    "web navigation",
    "JavaScript browser navigation",
    "JavaScript history example",
  ],

  openGraph: {
    title: "Understanding the History Object in JavaScript",
    description:
      "Learn how to use the History object to navigate through session history in JavaScript. Understand its methods like back(), forward(), and go(), and see examples of browser navigation.",

    type: "article",
  },
};

const HistoryObject = () => {
  return (
    <div className="lesson-container">
      
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

      <Button whereToGo={"screen-object"} />
    </div>
  );
};

export default HistoryObject;
