import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Event Handling Tutorial | Interactive Web Development",
  description:
    "Master event handling in JavaScript with this comprehensive guide. Learn to create dynamic, interactive web pages by handling user actions like clicks, mouse movements, and keyboard inputs.",
  keywords: [
    "JavaScript event handling",
    "addEventListener",
    "click event",
    "mouseover event",
    "mouseout event",
    "keydown event",
    "keyup event",
    "DOM events",
    "web interactivity",
    "JavaScript tutorial",
    "event listeners",
    "user interaction",
    "dynamic web pages",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/event-handling",
  },
  openGraph: {
    title:
      "Master JavaScript Event Handling: Create Interactive Web Experiences",
    description:
      "Dive into JavaScript event handling! Learn to respond to user actions, create dynamic interfaces, and build engaging web applications in this comprehensive tutorial.",
  },
};

const EventHandling = () => {
  return (
    <div className="lesson-container">
      <h1>Event Handling</h1>

      <h2>Introduction</h2>
      <p>
        In web development, events are actions that occur in the browser, such
        as clicking a button, moving the mouse, or pressing a key. Handling
        these events allows you to create interactive and responsive web pages
        that react to user actions.
      </p>
      <p>
        Think of an event as something that happens on your web page. For
        example, when you click a button, that click is an event. By learning
        how to handle these events, you can make your website respond in
        real-time, such as showing a message or changing an element's style.
      </p>
      <p>
        Mastering event handling is crucial for making your web pages dynamic
        and engaging. It's one of the fundamental skills you need to create
        interactive web applications.
      </p>

      <h2>Adding Event Listeners in HTML</h2>

      <h3>Syntax</h3>
      <p>
        The simplest way to handle events directly in HTML is by using
        attributes. Here is the basic syntax for adding an event listener using
        an HTML attribute:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`<element event="function()">Content</element>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <strong>element</strong>: The HTML element you want to attach the event
        to (e.g., <code>button</code>, <code>div</code>).
        <br />
        <strong>event</strong>: The type of event you want to listen for (e.g.,{" "}
        <code>onclick</code>, <code>onmouseover</code>).
        <br />
        <strong>function()</strong>: The JavaScript function that will be called
        when the event occurs.
      </p>

      <h3>Example</h3>
      <p>
        Here’s an example of how to use the <code>onclick</code> attribute to
        handle a button click event:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>HTML Event Listener</title>
</head>
<body>
<button onclick="showAlert()">Click me!</button>

<script>
function showAlert() {
alert('Button clicked!');
}
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, clicking the button calls the <code>showAlert</code>{" "}
        function, which displays an alert with the message "Button clicked!".
      </p>
      <p>
        While this approach is straightforward, it mixes HTML and JavaScript,
        which can make your code harder to manage as it grows.
      </p>

      <h2>Adding Event Listeners in JavaScript</h2>

      <h3>Syntax</h3>
      <p>
        Adding event listeners in JavaScript involves using the{" "}
        <code>addEventListener</code> method. Here is the basic syntax:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
element.addEventListener('event', function() {
// Code to execute when the event occurs
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        <strong>element</strong>: The HTML element you want to attach the event
        to (e.g., <code>button</code>, <code>div</code>).
        <br />
        <strong>'event'</strong>: The type of event you want to listen for
        (e.g., <code>'click'</code>, <code>'mouseover'</code>).
        <br />
        <strong>function()</strong>: The function that will be called when the
        event occurs.
      </p>

      <h3>Example</h3>
      <p>
        Here’s an example of how to use the <code>addEventListener</code> method
        to handle a button click event:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>JavaScript Event Listener</title>
</head>
<body>
<button id="myButton">Click me!</button>

<script>
// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
alert('Button clicked!');
});
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we first select the button using its ID, then attach an
        event listener to it. This listener waits for a click event and shows an
        alert message when the button is clicked.
      </p>
      <p>
        This approach is more versatile and keeps your HTML and JavaScript code
        separate, making it easier to update and maintain.
      </p>

      <h2>Common Event Types</h2>
      <p>Here are some common types of events you might use:</p>
      <ul>
        <li>
          <code>click</code>: Triggered when an element is clicked.
        </li>
        <li>
          <code>mouseover</code>: Triggered when the mouse pointer moves over an
          element.
        </li>
        <li>
          <code>mouseout</code>: Triggered when the mouse pointer moves out of
          an element.
        </li>
        <li>
          <code>keydown</code>: Triggered when a key is pressed down.
        </li>
        <li>
          <code>keyup</code>: Triggered when a key is released.
        </li>
      </ul>

      <h2>Click Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a click event, use the <code>click</code> event type with the{" "}
        <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`element.addEventListener('click', function() {
// Code to execute when the element is clicked
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the click event to change the color of a paragraph:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Click Event</title>
</head>
<body>
<p id="myParagraph">Click the button to change my color!</p>
<button id="myButton">Click me!</button>

<script>
// Get the paragraph and button elements
const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
paragraph.style.color = 'blue';
});
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, clicking the button changes the color of the paragraph
        to blue.
      </p>

      <h2>Mouseover Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a mouseover event, use the <code>mouseover</code> event type
        with the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`element.addEventListener('mouseover', function() {
// Code to execute when the mouse moves over the element
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the mouseover event to change the background color of
        a paragraph:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Mouseover Event</title>
</head>
<body>
<p id="myParagraph">Hover over me to change my background color!</p>

<script>
// Get the paragraph element
const paragraph = document.getElementById('myParagraph');

// Add an event listener to the paragraph
paragraph.addEventListener('mouseover', function() {
paragraph.style.backgroundColor = 'yellow';
});
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, hovering over the paragraph changes its background
        color to yellow.
      </p>

      <h2>Mouseout Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a mouseout event, use the <code>mouseout</code> event type
        with the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`element.addEventListener('mouseout', function() {
// Code to execute when the mouse moves out of the element
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the mouseout event to change the background color of a
        paragraph:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Mouseout Event</title>
</head>
<body>
<p id="myParagraph">Hover over me and then move out to change my background color!</p>

<script>
// Get the paragraph element
const paragraph = document.getElementById('myParagraph');

// Add an event listener to the paragraph
paragraph.addEventListener('mouseout', function() {
paragraph.style.backgroundColor = 'transparent';
});
</script>

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, moving the mouse out of the paragraph changes its
        background color back to transparent.
      </p>

      <h2>Keydown Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a keydown event, use the <code>keydown</code> event type with
        the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`document.addEventListener('keydown', function(event) {
// Code to execute when a key is pressed down
// You can use event.key to get the key that was pressed
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the keydown event to display the pressed key in an
        alert:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Keydown Event</title>
</head>
<body>
<p>Press any key to see which key you pressed!</p>

<script>
// Add an event listener to the document
document.addEventListener('keydown', function(event) {
alert('Key pressed: ' + event.key);
});
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, pressing any key will display an alert showing the key
        that was pressed.
      </p>

      <h2>Keyup Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a keyup event, use the <code>keyup</code> event type with the{" "}
        <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`document.addEventListener('keyup', function(event) {
// Code to execute when a key is released
// You can use event.key to get the key that was released
});`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the keyup event to display the released key in an
        alert:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Keyup Event</title>
</head>
<body>
<p>Release any key to see which key you released!</p>

<script>
// Add an event listener to the document
document.addEventListener('keyup', function(event) {
alert('Key released: ' + event.key);
});
</script>

</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, releasing any key will display an alert showing the key
        that was released.
      </p>

      <h2>Conclusion</h2>
      <p>
        Understanding how to handle events is a fundamental part of web
        development. It allows you to create interactive and engaging user
        experiences by responding to user actions.
      </p>
      <p>
        As you continue learning, you'll find even more ways to use events to
        make your web applications interactive and responsive.
      </p>

      <Button whereToGo={"bom-intro"} />
    </div>
  );
};

export default EventHandling;
