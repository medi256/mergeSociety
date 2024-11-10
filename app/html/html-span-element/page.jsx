import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Spans in HTML: Understanding Inline Elements",
  description:
    "Discover the role of spans in HTML as inline elements used for styling and functionality. Learn how to effectively group and manipulate text with practical examples and best practices.",
  keywords:
    "HTML, spans, inline elements, web development, CSS styling, JavaScript functionality, coding for beginners, best practices for spans",
  alternates: {
    canonical: "https://www.mergesociety.com/html/html-span-element",
  },
  openGraph: {
    title: "Spans in HTML: Understanding Inline Elements",
    description:
      "Dive into the essential features of spans in HTML. This lesson covers their purpose, usage for styling and interactivity, and best practices to enhance your web content.",
  },
};

const HTMLSpan = () => {
  return (
    <div className="lesson-container">
      <h1>Spans in HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring spans - another
        important tool in your HTML toolbox. Spans, represented by the{" "}
        <code>{` <span> `}</code> tag, are inline elements that are used to
        group and style small portions of text or other inline elements. Spans
        allow you to apply styles or add functionality to specific parts of your
        content. Let's dive into the world of spans in HTML and learn how to use
        them effectively.
      </p>

      <h2>What Are Spans in HTML?</h2>
      <p>
        Spans, denoted by the <code>{`<span>`}</code> tag, are inline elements
        that are used to group and style text or other inline elements. Unlike
        divs, which are block-level elements, spans are inline and do not create
        line breaks before or after them. Spans are commonly used to apply
        styles or functionality to specific words, phrases, or small portions of
        text. Here's the basic structure of a span in HTML:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<span>Highlighted text</span>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<span>`}</code> tag defines the beginning
        and end of the span. You can place text or other inline elements within
        the span to apply styles or functionality to them.
      </p>

      <h2>Using Spans for Styling</h2>
      <p>
        One of the primary uses of spans is to apply styles to specific parts of
        your text. By using CSS (Cascading Style Sheets), you can target spans
        and style the text within them. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<span class="highlight">Highlighted text</span>

`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we added a class attribute to the{" "}
        <code>{`<span>`}</code> tag. You can then use CSS to style the text
        within the span, such as changing the color, font weight, or adding
        background colors.
      </p>

      <h2>Using Spans for Functionality</h2>
      <p>
        Spans can also be used to add functionality to specific parts of your
        content. For example, you can use JavaScript to interact with spans,
        trigger events, or apply dynamic behavior. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<span class="tooltip" data-tooltip="This is a tooltip">over me!</span>   

`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we added a class attribute and a "data-tooltip"
        attribute to the <code>{`<span>`}</code> tag. You can then use
        JavaScript to detect when the user hovers over the span and display a
        tooltip or perform other actions.
      </p>

      <h2>Best Practices for Using Spans</h2>
      <ul>
        <li>
          <strong>Use spans for styling text:</strong> Spans are ideal for
          applying styles to specific words, phrases, or small portions of text.
          Use CSS to style the text within spans, such as changing the color,
          font, or adding background effects.
        </li>
        <li>
          <strong>Use spans for adding functionality:</strong> Spans can be used
          to add dynamic behavior or interactivity to specific parts of your
          content. Use JavaScript to target spans and trigger events or
          functionality.
        </li>
        <li>
          <strong>Keep spans semantic:</strong> Use spans to group and style
          text or inline elements that belong together. Avoid using spans just
          for styling purposes without any semantic meaning.
        </li>
        <li>
          <strong>Avoid using spans for block-level elements:</strong> Spans are
          inline elements, so they should not be used to group block-level
          elements or create line breaks. Use divs for block-level grouping
          instead.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating spans, applying styles,
        and adding functionality. Here's a simple exercise to get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "spans.html" in your workspace
          folder.
        </li>
        <li>
          Create a paragraph with some text and apply styles to specific words
          using spans. For example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<p>This is a <span class="highlight">highlighted</span> sentence.</p>

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try adding functionality to spans using JavaScript. For instance, you
          can use JavaScript to detect when a user clicks on a span and trigger
          an event, such as displaying a popup or toggling a menu.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        In this lesson, we've explored spans in HTML, including their purpose,
        how they are used for styling and functionality, best practices, and
        more. Spans are versatile tools that allow you to target and manipulate
        specific parts of your content. Remember to use spans wisely, follow
        best practices, and always test your HTML and JavaScript code to ensure
        your spans work correctly in different browsers and devices. In the next
        lesson, we'll move on to inline elements in HTML. Stay tuned, and happy
        coding!
      </p>
      <Button whereToGo={"html-inline-elements"} />
    </div>
  );
};

export default HTMLSpan;
