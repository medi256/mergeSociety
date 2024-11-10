import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript : Running Your First Code - A Beginner's Guide",
  description:
    "Take your first steps into the world of JavaScript coding. Learn how to insert and run JavaScript code using various methods, from embedding it in HTML to using online code editors. This comprehensive guide will get you coding in no time!",
  keywords: [
    "javascript",
    "learn javascript",
    "javascript for beginners",
    "running javascript",
    "javascript in html",
    "browser developer tools",
    "online code editor",
    "javascript tutorial",
    "javascript examples",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/running-js",
  },
  openGraph: {
    title: "JavaScript Coding : From Zero to Running Code",
    description:
      "A beginner's journey into JavaScript coding. Discover the different ways to insert and execute JavaScript, ensuring you have the skills to bring your code to life.",
  },
};

const RunningJavascript = () => {
  return (
    <div className="lesson-container">
      <h1>How to Insert and Run Your Code</h1>
      <p>
        When you start learning JavaScript, one of the first things you need to
        know is how to write your code and see it in action. There are three
        main ways to insert and run your JavaScript code: directly in an HTML
        file, using the browser's developer tools, and through an online code
        editor. Let's explore each method step-by-step.
      </p>

      <h2>1. Directly in an HTML File</h2>
      <p>
        One common way to run JavaScript is by embedding it directly within an
        HTML file. This method is great for beginners because it allows you to
        see how JavaScript interacts with HTML. Follow these steps:
      </p>
      <ul>
        <li>Create a new HTML file or open an existing one.</li>
        <li>
          Inside the <code>&lt;body&gt;</code> tags, add a{" "}
          <code>&lt;script&gt;</code> tag to include your JavaScript code.
        </li>
        <li>
          Write your JavaScript code between the <code>&lt;script&gt;</code>{" "}
          tags.
        </li>
        <li>
          Save the file and open it in your web browser to see the results.
        </li>
      </ul>
      <p>Here's a simple example:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Example</title>
</head>
<body>
<h1>Hello, World!</h1>

  <script>
    alert('This is a JavaScript alert!');
  </script>

</body>
</html>
      `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        When you open this HTML file in your browser, you will see a pop-up
        message displaying "This is a JavaScript alert!".
      </p>

      <h2>2. Using Browser Developer Tools</h2>
      <p>
        Modern web browsers come with built-in developer tools that allow you to
        run JavaScript code without modifying your HTML files. This is very
        handy for testing and experimenting with code snippets. Here's how to
        use it:
      </p>
      <ul>
        <li>Open your web browser (such as Chrome, Firefox, or Edge).</li>
        <li>
          Right-click anywhere on the webpage and select "Inspect" or "Inspect
          Element".
        </li>
        <li>
          In the developer tools window, find and click on the "Console" tab.
        </li>
        <li>
          In the console, you can type JavaScript code and press Enter to run it
          immediately.
        </li>
      </ul>
      <p>Try this example:</p>
      <pre>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
console.log('Hello, Developer Tools!');
      `}
        </SyntaxHighlighter>
      </pre>
      <p>
        When you type this into the console and press Enter, you will see the
        message "Hello, Developer Tools!" appear in the console.
      </p>

      <h2>3. Using an Online Code Editor</h2>
      <p>
        Online code editors are websites where you can write and run JavaScript
        code without needing to set up any files on your computer. They are
        perfect for beginners who want to practice coding quickly and easily.
        Some popular online code editors include JSFiddle, CodePen, and Repl.it.
        Here's how to use an online code editor:
      </p>
      <ul>
        <li>
          Open your web browser and go to an online code editor like JSFiddle or
          CodePen.
        </li>
        <li>
          Create a new "fiddle" or "pen" (these are just terms for a new coding
          project).
        </li>
        <li>In the JavaScript section, write your JavaScript code.</li>
        <li>Click the "Run" button to see your code in action.</li>
      </ul>
      <p>For example, using JSFiddle, you might write:</p>
      <pre>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
console.log('Hello, JSFiddle!');
      `}
        </SyntaxHighlighter>
      </pre>
      <p>
        When you click "Run", you will see the message "Hello, JSFiddle!" in the
        output area.
      </p>

      <h2>4. Using an External JavaScript File</h2>
      <p>
        As your JavaScript code grows, it becomes a good practice to keep your
        JavaScript in a separate file. This keeps your HTML clean and your
        JavaScript organized. Here's how you can do this:
      </p>
      <ul>
        <li>
          Create a new JavaScript file with a <code>.js</code> extension (for
          example, <code>script.js</code>).
        </li>
        <li>Write your JavaScript code in this new file and save it.</li>
        <li>
          Link your JavaScript file to your HTML file by adding a{" "}
          <code>&lt;script&gt;</code> tag with the <code>src</code> attribute
          pointing to your JavaScript file. Place this{" "}
          <code>&lt;script&gt;</code> tag just before the closing{" "}
          <code>&lt;/body&gt;</code> tag in your HTML file.
        </li>
        <li>Open your HTML file in a web browser to see the results.</li>
      </ul>
      <p>Here's an example setup:</p>
      <pre>
        <SyntaxHighlighter language="HTML" style={docco}>
          {`
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External JavaScript Example</title>
</head>
<body>
  <h1>Hello, World!</h1>

  <script src="script.js"></script>


</body>
</html>
      `}
        </SyntaxHighlighter>
      </pre>

      <pre>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
// script.js
alert('This is a JavaScript alert from an external file!');
      `}
        </SyntaxHighlighter>
      </pre>
      <p>
        When you open the <code>index.html</code> file in your browser, you will
        see the alert message from the JavaScript in the <code>script.js</code>{" "}
        file.
      </p>

      <h2>Recommended Method</h2>
      <p>
        While all these methods are useful, for beginners, we recommend starting
        with the first method: embedding JavaScript directly within an HTML
        file. This way, you can see how JavaScript works with HTML and get a
        better understanding of how web pages are built. As you get more
        comfortable, you can explore the other methods for testing and
        organizing your code.
      </p>

      <h2>Conclusion</h2>
      <p>
        Learning how to insert and run your JavaScript code is the first step in
        becoming a proficient developer. By practicing with these methods,
        you'll gain confidence and start to see the power of JavaScript in
        action. Happy coding!
      </p>

      <Button whereToGo={"variables"} />
    </div>
  );
};

export default RunningJavascript;
