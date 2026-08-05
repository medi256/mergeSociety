import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering DOM Element Selection in JavaScript",
  description:
    "Learn how to select elements in the DOM using JavaScript. Understand methods like getElementById, getElementsByClassName, and getElementsByTagName to manipulate web pages effectively.",
  keywords: [
    "JavaScript",
    "DOM",
    "element selection",
    "getElementById",
    "getElementsByClassName",
    "getElementsByTagName",
    "web development",
    "programming tutorial",
  ],
  openGraph: {
    title: "Master DOM Element Selection: The Key to Dynamic Web Pages",
    description:
      "Dive into DOM element selection techniques. Learn how to use JavaScript to select and manipulate specific elements on your web pages for interactive user experiences.",
  },

  alternates: {
    canonical: "https://www.mergesociety.com/javascript/selecting-elements",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Web Development Tutorial",

  schema: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Mastering DOM Element Selection in JavaScript",
    description:
      "Comprehensive guide to selecting DOM elements using JavaScript, covering methods like getElementById, getElementsByClassName, and getElementsByTagName.",
    author: {
      "@type": "Person",
      name: "MergeSociety",
    },
    skillLevel: "Beginner to Intermediate",
    proficiencyLevel: "Beginner",
    audience: {
      "@type": "Audience",
      audienceType: "Web Developers",
    },
  },
};

const SelectingElement = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Selecting Elements in the DOM</h1>

        <h2>Introduction</h2>
        <p>
          Now that you've learned the basics of the DOM, it's time to dive into
          how to select elements within the DOM. Selecting elements is crucial
          for manipulating them using JavaScript. You can select elements by
          their <strong>ID</strong>,<strong> class name</strong>, or{" "}
          <strong>tag name</strong>. This is the first step in making your web
          pages dynamic and interactive.
        </p>
        <p>
          Think of the DOM as a tree-like structure that represents the HTML
          elements on the page. Each element in the DOM has a unique identifier,
          which is used to select and manipulate it.
        </p>

        <h2>
          What is the <code>document</code> object?
        </h2>
        <p>
          In JavaScript, the <code>document</code> object represents the entire
          web page. It is a global object that provides access to the Document
          Object Model (DOM) of the web page.
        </p>
        <p>
          The <code>document</code> object is like a container that holds all
          the HTML elements on the page. You can use the <code>document</code>{" "}
          object to access and manipulate these elements.
        </p>
        <p>
          But how does the <code>document</code> object connect with the DOM?
          Well, the
          <code>document</code> object provides a property called{" "}
          <code>document</code>, which we can use to target the DOM elements.
          This property is like a bridge that connects the <code>document</code>{" "}
          object with the DOM.
        </p>
        <p>
          Let's take a closer look at the <code>document</code> object and its
          properties.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Document Object Example</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>
   
<script>
// Get the document object
const documentObject = document;

// Get the HTML element with the ID "myParagraph"
const paragraph = documentObject.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"
</script>

</body>
</html>

`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          As you can see, the <code>document</code> object has a property called{" "}
          <code>getElementById</code>, which we can use to select an element by
          its <strong>ID</strong>.
        </p>

        <h2>
          Selecting Elements by <strong>ID</strong>
        </h2>
        <p>
          The <code>getElementById</code> method is used to select an element by
          its <strong>ID</strong>. An <strong>ID</strong>
          is a unique identifier that is assigned to an HTML element using the{" "}
          <code>id</code> attribute.
        </p>
        <p>
          When you use the <code>getElementById</code> method, it returns the
          element that matches the specified <strong>ID</strong>. You can then
          use this element to access its properties and methods.
        </p>
        <p>
          For example, let's say you have an HTML element with the{" "}
          <strong>ID</strong> "myParagraph". You can use the{" "}
          <code>getElementById</code> method to select this element and then use
          its <code>textContent</code> property to access its text content.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Select by ID</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"
</script>

</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Note that the <code>getElementById</code> method returns{" "}
          <code>null</code> if no element with the specified <strong>ID</strong>{" "}
          is found.
        </p>

        <h2>
          Selecting Elements by <strong>Class Name</strong>
        </h2>
        <p>
          The <code>getElementsByClassName</code> method is used to select
          elements by their
          <strong>class name</strong>. A <strong>class name</strong> is a string
          that is assigned to an HTML element using the <code>class</code>{" "}
          attribute.
        </p>
        <p>
          When you use the <code>getElementsByClassName</code> method, it
          returns a collection of elements that match the specified{" "}
          <strong>class name</strong>. You can then use this collection to
          access the properties and methods of the elements.
        </p>
        <p>
          For example, let's say you have multiple HTML elements with the{" "}
          <strong>class name</strong>
          "myClass". You can use the <code>getElementsByClassName</code> method
          to select all of these elements and then use their{" "}
          <code>textContent</code> property to access their text content.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Select by Class Name</title>
</head>
<body>
<p class="myClass">Hello World!</p>
<p class="myClass">Goodbye World!</p>

<script>
const paragraphs = document.getElementsByClassName('myClass');
console.log(paragraphs.length); // Output: 2
</script>

</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Note that the <code>getElementsByClassName</code> method returns an
          HTML collection, which is an array-like object that contains the
          selected elements.
        </p>

        <h2>
          Selecting Elements by <strong>Tag Name</strong>
        </h2>
        <p>
          The <code>getElementsByTagName</code> method is used to select
          elements by their <strong>tag name</strong>. A{" "}
          <strong>tag name</strong>
          is the name of an HTML element, such as <code>p</code>,{" "}
          <code>div</code>, <code>span</code>, etc.
        </p>
        <p>
          When you use the <code>getElementsByTagName</code> method, it returns
          a collection of elements that match the specified{" "}
          <strong>tag name</strong>. You can then use this collection to access
          the properties and methods of the elements.
        </p>
        <p>
          For example, let's say you have multiple HTML elements with the{" "}
          <strong>tag name</strong>
          "p". You can use the <code>getElementsByTagName</code> method to
          select all of these elements and then use their{" "}
          <code>textContent</code> property to access their text content.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Select by Tag Name</title>
</head>
<body>
<p>Hello World!</p>
<p>Goodbye World!</p>

<script>
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length); // Output: 2
</script>

</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Note that the <code>getElementsByTagName</code> method returns an HTML
          collection, which is an array-like object that contains the selected
          elements.
        </p>

        <h2>Conclusion</h2>
        <p>
          In this article, we learned how to select elements in the DOM using
          JavaScript. We covered three methods:{" "}
          <code>document.getElementById()</code>,
          <code>document.getElementsByClassName()</code>, and{" "}
          <code>document.getElementsByTagName()</code>.
        </p>
        <p>
          Each method has its own strengths and weaknesses, and the choice of
          which method to use depends on the specific requirements of your
          project.
        </p>
        <p>
          By mastering these methods, you can write more efficient and effective
          JavaScript code that interacts with the DOM.
        </p>

        <Button whereToGo={"modifying-elements"} />
      </div>
    </div>
  );
};

export default SelectingElement;
