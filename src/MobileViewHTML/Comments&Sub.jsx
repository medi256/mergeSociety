import { InArticleAdUnit } from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CommentsH = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />

      <h1>Comments in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring comments in HTML - a feature
        that allows you to include notes, explanations, or instructions in your HTML
        code. Comments are ignored by web browsers, meaning they won't be displayed
        on the web page itself. Comments are useful for providing additional
        information, documenting your code, or temporarily disabling certain parts
        of your code during development or testing. Let's dive into the world of
        comments in HTML and learn how to use them effectively.`}
      </p>

      <h2>What Are Comments in HTML?</h2>
      <p>
        Comments in HTML are special constructs that allow you to include notes,
        explanations, or instructions within your HTML code. Comments are
        denoted by specific delimiters, and they are not rendered or displayed
        on the web page. Comments are primarily intended for providing
        information or instructions to other developers who may work on the
        code.
      </p>

      <h2>Creating Comments in HTML</h2>
      <p>
        {`Comments in HTML are created using special delimiters that indicate the
        beginning and end of the comment. Here's the basic structure of an HTML
        comment:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!-- This is a comment -->
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<!--`}</code> marks the start of the
        comment, and the <code>{`-->`}</code>
        marks the end of the comment. Anything within these delimiters is
        considered a comment and will be ignored by web browsers.
      </p>

      <h2>Using Comments in HTML</h2>
      <p>Comments in HTML can be used for various purposes:</p>

      <ul>
        <li>
          <strong>Documentation:</strong> Comments can be used to provide
          explanations, instructions, or additional information about your code.
          This helps other developers understand your code and its
          functionality.
        </li>
        <li>
          <strong>Temporary Disabling:</strong> Comments can be used to
          temporarily disable certain parts of your HTML code during development
          or testing. This allows you to test different scenarios or disable
          specific features without deleting the code entirely.
        </li>
        <li>
          <strong>Collaboration:</strong> Comments can be used to communicate
          with other developers working on the same project. You can leave
          notes, ask questions, or provide feedback within the HTML code itself.
        </li>
      </ul>

      <h2>Examples of Comments in HTML</h2>
      <p>Here are some examples of using comments in HTML:</p>

      <ul>
        <li>
          <strong>Documentation Comment:</strong>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<!-- This section displays the user's profile information -->
<div class="user-profile">
<h2>User Profile</h2>
<p>Name: <span class="name">John Doe</span></p>
<p>Email: <span class="email">john@example.com</span></p>
</div>

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Temporary Disabling Comment:</strong>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<!-- This feature is temporarily disabled -->
<div>
<!-- <p>This section is hidden</p> -->
</div>

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Collaboration Comment:</strong>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<!-- Note to other developers: This section requires additional testing and validation -->

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ul>
      <InArticleAdUnit />
      <h2>Best Practices for Comments in HTML</h2>
      <ul>
        <li>
          <strong>Use comments for documentation:</strong> Include comments to
          provide explanations, instructions, or additional information about
          your HTML code. This helps other developers understand and collaborate
          more effectively.
        </li>
        <li>
          <strong>Keep comments concise and relevant:</strong> Avoid writing
          lengthy comments that may become outdated or confusing. Keep your
          comments focused on providing valuable information.
        </li>
        <li>
          <strong>Update and remove outdated comments:</strong> Ensure that your
          comments remain accurate and relevant. Remove comments that are no
          longer applicable to avoid confusion for other developers.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with adding comments, documenting your
        HTML code, or temporarily disabling certain parts. Here's a simple exercise
        to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "comments.html" in your workspace
          folder.`}
        </li>
        <li>
          Add a comment to provide an explanation for a section of your HTML
          code. For example,
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<!-- This section displays the navigation menu -->.
`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try using comments to temporarily disable certain parts of your HTML
          code during development or testing. For instance,
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<!-- This feature is under development and will be enabled soon -->.

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored comments in HTML, including their purpose,
        usage, and best practices. Comments are a valuable tool for providing
        additional information, documenting your code, or temporarily disabling
        certain parts. Remember to use comments wisely, keep them concise and
        relevant, and always consider the audience who may read and benefit from
        your comments. In the next lesson, we'll continue our journey by exploring the
        Structure of an HTML Document. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/preMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/HTMLStructureMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentsH;
export const HTMLStructure = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Basic Structure of an HTML Document</h1>
      <p>
        {` Hello there! In this lesson, we'll dive deep into the basic structure of an
        HTML document - the foundation upon which every web page is built. We'll `}
        explore the <code>{`<!DOCTYPE>`}</code> declaration, the{" "}
        <code>{`<html>`}</code> element, and the roles of the{" "}
        <code>{`<head>`}</code> and <code>{`<body>`}</code> elements.{" "}
        {`By the end of
        this lesson, you'll be able to create well-structured HTML documents that
        follow best practices and are accessible to users and search engines. Let's`}
        begin!
      </p>

      <h2>
        The <code>{`<!DOCTYPE>`}</code> Declaration
      </h2>
      <p>
        The <code>{`<!DOCTYPE>`}</code> declaration is the very first thing that
        appears in an HTML document. It tells web browsers about the version of
        HTML being used and how the document should be interpreted.{" "}
        {` Here's an example:`}
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
        document. {` Here's an`}
        example:
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
          The <code>{`<head>`}</code>{" "}
          {` element contains
          metadata, links to external resources, and instructions for the web
          browser. It does not contain any visible content on the web page itself.
          Here's an example:`}
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
          elements. {` Here's an example:`}
          <pre>
            <code1>
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
            </code1>
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
      <InArticleAdUnit />
      <h2>Putting It All Together</h2>
      <p>
        {`Now, let's put all the pieces together to create a basic HTML document:`}
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
          {`Create a new HTML file and save it as "index.html" in your workspace
          folder.`}
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
        lesson, {` we'll `}
        continue our journey by exploring buttons in HTML. Stay tuned, and happy
        coding!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/commentsHMobile")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/CreatingButtonsMobile")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
