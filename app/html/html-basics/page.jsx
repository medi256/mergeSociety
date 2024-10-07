import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";


import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "HTML Basics: The Building Blocks of Web Development",
  description:
    "Learn the core principles of HTML, from elements and tags to structuring web pages. Understand the difference between container and empty elements, and explore real code examples.",
  keywords:
    "HTML, web development, HTML elements, HTML tutorial, HTML basics, coding for beginners, container elements, empty elements, web design",
  openGraph: {
    title: "HTML Basics: The Building Blocks of Web Development | MergeSociety",
    description:
      "Master the fundamental elements of HTML and learn how to structure a basic webpage with our in-depth guide. Perfect for beginners eager to start their web development journey.",
  },
};

const HTMLBasics = () => {
  return (
    <div className="lesson-container">
      <section>
        
        <h1>HTML Basics</h1>
        <p>
          Welcome back, aspiring web developer! In this lesson, we'll dive into
          the fundamentals of HTML structure and explore the different types of
          tags that make up the language. By the end of this section, you'll
          have a clear understanding of how HTML elements work and how they tell
          the web browser what to display. Let's get started!
        </p>

        <h2>The Building Blocks: HTML Elements</h2>
        <p>
          HTML is made up of a series of elements, and these elements are the
          building blocks of any web page. Each element is defined by a specific
          tag, and these tags tell the web browser what to display and how to
          interpret the content. Think of elements as the Lego bricks that come
          together to build a website. Here's a simple example:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
       
       `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the above code, we have several HTML elements:{" "}
          <code>{`<html>`}</code>,<code>{`<head>`}</code>,{" "}
          <code>{`<title>`}</code>, <code>{`<body>`}</code>,{" "}
          <code>{`<h1></h1>`}</code>, and <code>{`<p>`}</code>. Each element
          serves a specific purpose and contributes to the overall structure of
          the web page.
        </p>

        <h3>Container Elements and Empty Elements</h3>
        <p>
          {`There are two main types of HTML elements: container elements and empty
        elements. Container elements have both an opening tag and a closing tag,
        and they can contain other elements or text within them. For example,
        the <body> element is a container element because it can hold
        headings, paragraphs, images, and other content.`}
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
    
      `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          {`On the other hand, empty elements do not have a closing tag and are
        typically used for standalone elements that don't contain other
        elements or text. For example, the <img> tag is an empty element
        used to embed an image in the web page.`}
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
       
       <img src="image.jpg" alt="Description of the image">
       `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>Let's explore some common container elements and their usage:</p>

        <ul>
          <li>
            <strong>{`<h1> to <h6>`}:</strong>{" "}
            {`These tags are used for headings
          of different sizes. <h1> represents the largest heading,
          while <h6> represents the smallest.`}
          </li>
          <li>
            <strong>{`<p>`}:</strong>{" "}
            {`This tag is used to create paragraphs of
          text. It's perfect for displaying blocks of text content.`}
          </li>
          <li>
            <strong>{`<div>`}:</strong>{" "}
            {`The <div> tag is a generic container
          used to group other elements together. It doesn't have any specific
          semantic meaning but is often used for layout purposes.`}
          </li>
          <li>
            <strong>{`<ul> and <ol>`}:</strong> These tags are used to create
            unordered (bulleted) and ordered (numbered) lists, respectively.
            List items are nested within these container elements.
          </li>
        </ul>

        <p>
          {`Now, let's take a look at some common empty elements and their usage:`}
        </p>

        <ul>
          <li>
            <strong>{`<img>`}:</strong>{" "}
            {`As mentioned earlier, this tag is used to
          embed images in the web page. The "src" attribute specifies the
          image source, and the "alt" attribute provides alternative text for
          screen readers and when the image cannot be displayed.`}
          </li>
          <li>
            <strong>{`<br>`}:</strong>{" "}
            {`This tag creates a line break, forcing the
          text or content after it to start on a new line. It's an empty tag
          with no closing tag.`}
          </li>
          <li>
            <strong>{`<input>`}:</strong>{" "}
            {`The <input>; tag is used to create
          input fields within forms. It's an empty tag, and the "type" attribute
          specifies the type of input, such as "text," "email," or "password."`}
          </li>
        </ul>
        
        <h2>Why Do Elements Have Opening and Closing Tags?</h2>
        <p>
          {`You might be wondering why some elements have both opening and closing
        tags while others don't. The reason lies in the nature of the content
        they contain. Container elements, like <p> or <div>,
        typically contain text or other elements, so they need a closing tag to
        indicate where the content ends. On the other hand, empty elements, like
        <img> or <br>, perform a specific function and don't
        require any content within them, so they don't need a closing tag.`}
        </p>

        <h2>Putting It All Together</h2>
        <p>
          {`Now that we've explored container and empty elements, let's put it all
        together and create a simple HTML structure. Here's an example of a
        basic HTML document:`}
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
    <h1>Welcome to My Website!</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Description of the image">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          {`In this example, we have a basic HTML document with a title, a heading,
        a paragraph, an image, and an unordered list. Notice how the container
        elements wrap the content within them, while the empty elements, like
        <img> and <br>, stand alone.`}
        </p>
        
        <h2>Conclusion</h2>
        <p>
          In this lesson, we explored the fundamental building blocks of HTML -
          the elements. We learned about container elements and empty elements,
          and how they work together to structure a web page. Understanding
          these basics is crucial for creating well-formed and meaningful HTML
          documents. In the next lesson, we'll continue our exploration of HTML
          tags and dive into specific elements and their usage in more detail.
          Stay tuned, and keep practicing!
        </p>
        <Button whereToGo={"html-headings"} />
      </section>
    </div>
  );
};

export default HTMLBasics;
