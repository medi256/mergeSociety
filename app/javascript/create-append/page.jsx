import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title:
    "Creating and Appending DOM Elements in JavaScript | Web Development Tutorial",
  description:
    "Master dynamic web development by learning how to create, append, insert, replace, and remove DOM elements using JavaScript. Perfect for beginners and intermediate developers looking to enhance their skills.",
  keywords: [
    "JavaScript DOM manipulation",
    "creating DOM elements",
    "appending elements",
    "inserting elements",
    "replacing elements",
    "removing elements",
    "web development tutorial",
    "dynamic web pages",
    "createElement method",
    "appendChild method",
    "insertBefore method",
    "replaceChild method",
    "removeChild method",
  ],
  openGraph: {
    title:
      "Master DOM Manipulation: Create and Append Elements Dynamically with JavaScript",
    description:
      "Learn to build dynamic web pages by creating, appending, inserting, replacing, and removing DOM elements using JavaScript in this comprehensive tutorial.",
    type: "article",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Web Development Tutorials",
};

const CreateAppend = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Creating and Appending Elements</h1>

      <h2>Introduction</h2>
      <p>
        Now that you've learned how to select and modify elements, it's time to
        learn how to create new elements and add them to the DOM. This is a very
        important concept in web development, and it's used a lot in building
        dynamic web applications.
      </p>
      <p>
        Think of creating elements like building with blocks. You start with a
        blank slate, and then you add blocks one by one to create a structure.
        Just like how you can use different types of blocks to build different
        things, you can use different types of elements to build different parts
        of a web page.
      </p>

      <h2>Creating Elements</h2>
      <p>
        To create a new element, you can use the <code>createElement</code>{" "}
        method. This method takes a string argument that specifies the type of
        element you want to create.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Creating an Element</title>
</head>
<body>

<script>
// Create a new paragraph element
const paragraph = document.createElement('p');
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element using the{" "}
        <code>createElement</code> method. The <code>createElement</code> method
        returns a reference to the newly created element, which we can store in
        a variable.
      </p>
      <p>
        This reference allows us to interact with the element, such as adding
        content to it, styling it, or even attaching event listeners to make it
        interactive.
      </p>
      <p>
        Once you've created an element, you can add text content to it using the
        <code>textContent</code> property. The <code>textContent</code> property
        sets or returns the text content of the specified node.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Adding Text Content</title>
</head>
<body>

<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we add the text "Hello World!" to the paragraph
        element. The <code>textContent</code> property sets the text content of
        the element to the specified value.
      </p>
      <AdUnit />
      <p>
        You can also add other types of content to an element, such as images or
        other elements. For example, let's create an image element and a
        paragraph element:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Creating and Adding Content</title>
</head>
<body>

<script>
// Create a new image element
const image = document.createElement('img');

// Set the source of the image
image.src = 'image.jpg';

// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new image element and set its source to
        "image.jpg". We also create a new paragraph element and add the text
        "Hello World!" to it.
      </p>

      <h2>Appending Elements</h2>
      <p>
        To add an element to the DOM, you can use the <code>appendChild</code>{" "}
        method. This method takes a reference to the element you want to add as
        an argument.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Appending Elements</title>
</head>
<body>


<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Append the paragraph to the body
document.body.appendChild(paragraph);
</script>

</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then append it to the body of the HTML document. The{" "}
        <code>appendChild</code> method adds the element to the end of the
        specified parent element.
      </p>
      <p>
        Appending an element means adding it to the end of the parent element’s
        child nodes. If the parent element already has other child elements, the
        new element will be added after the last child element.
      </p>
      <AdUnit />
      <p>
        You can also use the <code>appendChild</code> method to add an element
        to a specific parent element, not just the body.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Appending to a Container</title>
</head>
<body>
<div id="myContainer"></div>

<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Append the paragraph to the container
const container = document.getElementById('myContainer');
container.appendChild(paragraph);
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then append it to a container element with the ID "myContainer".
      </p>

      <h2>Inserting Elements</h2>
      <p>
        Sometimes you may want to insert an element at a specific position in
        the DOM. You can use the <code>insertBefore</code> method to do this.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Inserting Elements</title>
</head>
<body>
<div id="myContainer">
<p>First paragraph</p>
</div>

<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Insert the new paragraph before the first child
const container = document.getElementById('myContainer');
const referenceElement = container.firstChild;
container.insertBefore(paragraph, referenceElement);
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then insert it before the first child element of the container.
        The <code>insertBefore</code> method inserts the element before the
        specified reference element.
      </p>
      <p>
        This method is useful when you need to place a new element in a specific
        position relative to other elements within the same parent container. It
        ensures the new element appears exactly where you want it.
      </p>

      <h2>Replacing Elements</h2>
      <p>
        You can use the <code>replaceChild</code> method to replace an existing
        element with a new one.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Replacing Elements</title>
</head>
<body>
<div id="myContainer">
<p>Old paragraph</p>
</div>

<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Replace the old paragraph with the new one
const container = document.getElementById('myContainer');
const oldParagraph = container.firstChild;
container.replaceChild(paragraph, oldParagraph);
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then replace the first child element of the container with the
        new paragraph. The <code>replaceChild</code> method replaces the
        specified old element with the new element.
      </p>
      <p>
        Replacing an element can be handy when you want to update the content or
        structure of the DOM dynamically. Instead of just modifying an existing
        element, you replace it entirely with a new one.
      </p>
      <AdUnit />
      <h2>Removing Elements</h2>
      <p>
        You can use the <code>removeChild</code> method to remove an element
        from the DOM.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Removing Elements</title>
</head>
<body>
<div id="myContainer">
<p>Paragraph to be removed</p>
</div>

<script>
// Remove the paragraph from the container
const container = document.getElementById('myContainer');
const paragraph = container.firstChild;
container.removeChild(paragraph);
</script>


</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we remove the first child element of the container from
        the DOM. The <code>removeChild</code> method removes the specified
        element from the DOM.
      </p>
      <p>
        Removing elements is useful for cleaning up the DOM, especially when
        certain elements are no longer needed, such as removing items from a
        list or deleting user inputs after processing them.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Creating, appending, inserting, replacing, and removing elements are
        essential skills for web developers. They allow you to dynamically
        modify the structure and content of a web page, making your applications
        more interactive and responsive.
      </p>
      <p>
        Remember, practice is key to mastering these techniques. Try creating
        different types of elements and manipulating them in various ways to get
        a better understanding of how they work.
      </p>
      <p>
        In the next lessons, we will explore more advanced techniques for
        manipulating the DOM and making your web pages more dynamic and
        interactive.
      </p>
      <Button whereToGo={"event-handling"} />
    </div>
  );
};

export default CreateAppend;
