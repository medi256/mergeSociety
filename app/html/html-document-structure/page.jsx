import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding HTML Document Structure: A Beginner's Guide",
  description:
    "Master the basics of HTML document structure. Learn how the head and body sections work, including key tags like <!DOCTYPE>, <html>, <head>, <title>, and more.",
  keywords:
    "HTML document structure, web development, head and body tags, HTML basics, HTML elements, metadata, block-level elements, inline elements, front-end development",
  openGraph: {
    title: "HTML Document Structure: A Step-by-Step Guide | MergeSociety",
    description:
      "Explore the essential components of an HTML document. From the <!DOCTYPE> declaration to block-level elements and attributes, learn how to organize web pages effectively.",
  },
};

const HTMLStructure = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Basic Structure of an HTML Document</h1>
      <p>
        Hello there! In this lesson, we'll dive deep into the basic structure of
        an HTML document - the foundation upon which every web page is built.
        We'll explore the <code>{`<!DOCTYPE>`}</code> declaration, the{" "}
        <code>{`<html>`}</code> element, and the roles of the{" "}
        <code>{`<head>`}</code> and <code>{`<body>`}</code> elements. By the end
        of this lesson, you'll be able to create well-structured HTML documents
        that follow best practices and are accessible to users and search
        engines. Let's begin!
      </p>

      <h2>
        The <code>{`<!DOCTYPE>`}</code> Declaration
      </h2>
      <p>
        The <code>{`<!DOCTYPE>`}</code> declaration is the very first thing that
        appears in an HTML document. It tells web browsers about the version of
        HTML being used and how the document should be interpreted. Here's an
        example:
      </p>

      <code>
        <SyntaxHighlighter language="HTML" style={docco}>
          {`
<!DOCTYPE html>
        
        `}
        </SyntaxHighlighter>
      </code>

      <p>
        In the code above, <code>{`<!DOCTYPE html>`}</code> informs the web
        browser that we are using HTML5. This declaration is crucial because it
        sets the standards and rules that the browser will follow when rendering
        your HTML document.
      </p>

      <h2>
        The <code>{`<html>`}</code> Element
      </h2>
      <p>
        The <code>{`<html>`}</code> element is the root element of an HTML
        document. It wraps all the other elements and represents the entire HTML
        document. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
  ...
</html>
        
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, <code>{`<html> `}</code> is the opening tag, and{" "}
        <code>{`</html>`}</code> is the closing tag. Everything within these
        tags represents the content of your web page, including the{" "}
        <code>{`<head>`}</code> and <code>{`<body>`}</code> elements that{" "}
        {` we'll`}
        explore next.
      </p>

      <h2>
        The <code>{`<head>`}</code> and <code>{`<body>`}</code> Elements
      </h2>
      <p>
        The <code>{`<head>`}</code> and <code>{`<body>`}</code> elements are two
        important children of the
        <code>{`<html>`}</code> element.{" "}
        {` Let's take a closer look at each of them:`}
      </p>

      <ul>
        <li>
          <strong>
            <code>{`<head>`}</code> Element:
          </strong>{" "}
          The <code>{`<head>`}</code> element contains metadata, links to
          external resources, and instructions for the web browser. It does not
          contain any visible content on the web page itself. Here's an example:
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<head>
  <title>My Web Page</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
      
        `}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            In the code above, we have the <code>{`<title>`}</code> element to
            set the title of the web page, the <code>{`<meta>`}</code> element
            to specify the character encoding, the <code>{`<link> `}</code>{" "}
            element to link an external stylesheet, and the
            <code>{`<script>`}</code> element to include an external JavaScript
            file.
          </p>
        </li>
        <li>
          <strong>
            <code>{`<body>`}</code> Element:
          </strong>{" "}
          The <code>{`<body>`}</code> element contains the visible content of
          your web page, such as headings, paragraphs, images, forms, and other
          elements. Here's an example:
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is the main content of my web page.</p>
  <img src="image.jpg" alt="Description">
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
  </form>
</body>
          
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            In the code above, we have a heading <code>{`(<h1>)`}</code>, a
            paragraph
            <code>{`(<p>)`}</code>, an image <code>{`(<img>)`}</code>, and a
            form <code>{`(<form>)`}</code> within the <code>{`<body>`}</code>{" "}
            element.
          </p>
        </li>
      </ul>
      <AdUnit />
      <h2>Putting It All Together</h2>
      <p>
        Now, let's put all the pieces together to create a basic HTML document:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the main content of my web page.</p>
  </body>
</html>
          
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we have the <code>{`<!DOCTYPE html>`}</code>{" "}
        declaration, followed by the <code>{`<html>`}</code> element. Within the{" "}
        <code>{`<html>`}</code> element, we have the
        <code>{`<head>`}</code> element containing metadata and the{" "}
        <code>{`<body>`}</code> element containing the visible content of the
        web page.
      </p>

      <h2>Best Practices for HTML Structure</h2>
      <ul>
        <li>
          <strong>
            Always start with <code>{`<!DOCTYPE html>`}</code>:
          </strong>{" "}
          Begin every HTML document with the <code>{`<!DOCTYPE html>`}</code>{" "}
          declaration to ensure consistent rendering across different browsers.
        </li>
        <li>
          <strong>Use semantic elements:</strong> Use semantic HTML elements,
          such as <code>{`<header>`}</code>, <code>{`<nav>`}</code>,{" "}
          <code>{`<main>`}</code>, and <code>{`<footer>`}</code>, to provide
          structure and meaning to your content.
        </li>
        <li>
          <strong>
            Include a <code>{`<title>`}</code> element:
          </strong>{" "}
          Always include a<code>{`<title>`}</code> element within the{" "}
          <code>{`<head>`}</code> element to set a descriptive title for your
          web page.
        </li>
        <li>
          <strong>
            Use <code>{`<meta>`}</code> tags for metadata:
          </strong>{" "}
          Provide metadata about your web page using <code>{`<meta>`}</code>{" "}
          tags, such as character encoding, viewport settings, and keywords for
          search engines.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, {` let's `} put your knowledge into practice! Open your code editor
        and create a new HTML file. Experiment with creating basic HTML
        documents, structuring them properly, and adding content to the{" "}
        <code>{`<head>`}</code> and
        <code>{`<body>`}</code> elements.{" "}
        {` Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "index.html" in your workspace
          folder.
        </li>
        <li>
          Add the <code>{`<!DOCTYPE html>`}</code> declaration at the very
          beginning of your HTML document.
        </li>
        <li>
          Include the <code>{`<html>`}</code> element, with{" "}
          <code>{`<head>`}</code> and <code>{`<body>`}</code>
          elements as its children.
        </li>
        <li>
          Add a <code>{`<title>`}</code> element within the{" "}
          <code>{`<head>`}</code> element to set a meaningful title for your web
          page.
        </li>
        <li>
          Add content to the <code>{`<body>`}</code> element, such as headings,
          paragraphs, images, forms, or other elements. Feel free to be
          creative!
        </li>
      </ol>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, {` we've `} explored the basic structure of an HTML
        document, including the <code>{`<!DOCTYPE>`}</code>,{" "}
        <code>{`<html>`}</code>, <code>{`<head>`}</code>, and{" "}
        <code>{`<body>`}</code>
        elements. Understanding and implementing this structure is essential for
        creating well-formed and accessible HTML documents. Remember to follow
        best practices, test your code across different browsers, and always
        consider the user experience when designing your web pages. In the next
        lesson, we'll continue our journey by exploring buttons in HTML. Stay
        tuned, and happy coding!
      </p>

      <Button whereToGo={"semantic-html"} />
    </div>
  );
};

export default HTMLStructure;
