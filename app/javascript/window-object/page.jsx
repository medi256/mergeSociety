
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Window Object Methods Tutorial | Alert, Confirm, Prompt",
  description:
    "Master JavaScript's Window Object methods with this detailed tutorial. Learn how to use alert, confirm, and prompt to create interactive user experiences with pop-up boxes in your web applications.",
  keywords: [
    "JavaScript window object",
    "window alert",
    "window confirm",
    "window prompt",
    "JavaScript pop-ups",
    "browser interaction",
    "user input",
    "JavaScript tutorial",
    "BOM window object",
    "interactive web pages",
    "web development",
  ],
  openGraph: {
    title: "Master JavaScript Window Object Methods: Alert, Confirm, Prompt",
    description:
      "Learn how to interact with users using JavaScript's Window Object methods. Discover how to use alert, confirm, and prompt to create dynamic, interactive web applications.",
    type: "article",
  },
  authors: [{ name: "MergeSociety" }],
  category: "Web Development Tutorials",
};

const WindowObject = () => {
  return (
    <div className="lesson-container">
      
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
      
      <h2>Conclusion</h2>
      <p>
        The <code>Window Object</code> methods <code>alert</code>,{" "}
        <code>confirm</code>, and <code>prompt</code> are powerful tools for
        interacting with users through pop-up boxes. They help you display
        messages, get confirmations, and collect input, making your web pages
        more interactive and engaging.
      </p>

      <Button whereToGo={"location-object"} />
    </div>
  );
};

export default WindowObject;
