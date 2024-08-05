import { InArticleAdUnit } from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Div = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Divs in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring divs - one of the most
        fundamental building blocks of HTML. Divs, short for divisions, are
        versatile containers that are used to group and structure HTML elements.
        Divs allow you to organize your content, apply styles, and create
        layouts. Let's dive into the world of divs in HTML and learn how to use
        them effectively.`}
      </p>

      <h2>What Are Divs in HTML?</h2>
      <p>
        Divs, represented by the <code>{`<div>`}</code>{" "}
        {` tag, are block-level elements that
        act as containers for other HTML elements. They don't have any specific
        visual appearance on their own, but they are used to group and organize
        content. Divs are commonly used to create sections, columns, or
        separate different parts of a web page. Here's the basic structure of a
        div in HTML:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<div>
Content goes here 
</div>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<div>`}</code> tag defines the beginning
        of the div, and the closing <code>{`</div>`}</code> tag marks the end of
        the div. You can place other HTML elements or content within the div to
        group them together.
      </p>

      <h2>Using Divs for Structure and Layout</h2>
      <p>
        {`Divs are commonly used to create the overall structure and layout of a
        web page. They can be nested inside each other to create hierarchical
        relationships and define sections of the page. Here's an example:`}
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<div>
<div>Header</div>
<div>
<div>Sidebar</div>
<div>Main Content</div>
</div>
<div>Footer</div>
</div>

`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we have a nested structure of divs. The outer div
        represents the entire web page, while the inner divs represent different
        sections of the page, such as the header, sidebar, main content, and
        footer.
      </p>

      <h2>Applying Styles to Divs</h2>
      <p>
        {`You can apply styles to divs using CSS (Cascading Style Sheets). By
        assigning a class or id attribute to a div, you can target it with CSS
        rules and customize its appearance. Here's an example:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<div class="container">
<div class="header">Header</div>
<div class="content">Main Content</div>
<div class="sidebar">Sidebar</div>
</div>

`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        {`In the code above, we added class attributes to each div, such as
        "container," "header," and "sidebar." You can then use CSS to style these
        divs and control their appearance, such as background color, width,
        height, padding, and more.`}
      </p>

      <h2>Best Practices for Using Divs</h2>
      <ul>
        <li>
          <strong>Use divs for structure and layout:</strong> Divs are ideal for
          creating the overall structure and layout of your web page. Use them
          to group related elements and create sections.
        </li>
        <li>
          <strong>Nest divs for hierarchy:</strong> Divs can be nested inside
          each other to create hierarchical relationships and define the flow of
          your content.
        </li>
        <li>
          <strong>Use meaningful class and id attributes:</strong> Assign
          descriptive class and id attributes to your divs, making it easier to
          target them with CSS or JavaScript.
        </li>
        <li>
          <strong>Avoid using divs for styling only:</strong> Divs should be
          used primarily for structure and organization, not just for styling
          purposes. Use CSS to apply styles to your divs.
        </li>
        <li>
          <strong>Keep divs semantic:</strong> Use divs to create meaningful
          sections or groups of content. Avoid using divs just for visual
          styling without any structural purpose.
        </li>
      </ul>
      <InArticleAdUnit />
      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating divs, nesting them, and
        applying styles using CSS. Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "divs.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a basic structure for a web page using divs, such as a header,
          main content area, and footer. For example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<div>
<div>Header</div>
<div>Main Content</div>
<div>Footer</div>
</div>

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try nesting divs within each other to create more complex structures.
          For instance, you can have a div for the main content area, and within
          that, you can have divs for different sections or columns.
        </li>
        <li>
          Apply styles to your divs using CSS. For example, you can use CSS to
          change the background color, add borders, or adjust the width and
          height of the divs.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored divs in HTML, including their purpose, how
        to use them for structure and layout, applying styles, and best
        practices. Divs are fundamental building blocks of HTML and play a
        crucial role in creating modern web pages. Remember to use divs wisely,
        follow best practices, and always test your HTML and CSS code to ensure
        your divs render correctly in different browsers and devices. In the
        next lesson, we'll move on to span in HTML. Stay tuned, and happy
        coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "formsH")}>back</button>
        <button onClick={() => (window.location.href = "span")}>Next</button>
      </div>
    </div>
  );
};

export default Div;

export const Spans = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Spans in HTML</h1>
      <p>
        Hello there! In this lesson, {` we'll `} be exploring spans - another
        important tool in your HTML toolbox. Spans, represented by the{" "}
        <code>{` <span> `}</code> tag, are inline elements that are used to
        group and style small portions of text or other inline elements. Spans
        allow you to apply styles or add functionality to specific parts of your
        content.{" "}
        {` Let's dive into the world
        of spans in HTML and learn how to use them effectively.`}
      </p>

      <h2>What Are Spans in HTML?</h2>
      <p>
        Spans, denoted by the <code>{`<span>`}</code>{" "}
        {`tag, are inline elements that are used
        to group and style text or other inline elements. Unlike divs, which are
        block-level elements, spans are inline and do not create line breaks
        before or after them. Spans are commonly used to apply styles or
        functionality to specific words, phrases, or small portions of text.
        Here's the basic structure of a span in HTML:`}
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
        {`One of the primary uses of spans is to apply styles to specific parts of
        your text. By using CSS (Cascading Style Sheets), you can target spans and
        style the text within them. Here's an example:`}
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
        {`Spans can also be used to add functionality to specific parts of your
        content. For example, you can use JavaScript to interact with spans,
        trigger events, or apply dynamic behavior. Here's an example:`}
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
        In the code above, we added a class attribute and a {` "data-tooltip" `}
        attribute to the <code>{`<span>`}</code> tag. You can then use
        JavaScript to detect when the user hovers over the span and display a
        tooltip or perform other actions.
      </p>
      <InArticleAdUnit />
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
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating spans, applying styles,
        and adding functionality. Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "spans.html" in your workspace
          folder.`}
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
        {`In this lesson, we've explored spans in HTML, including their purpose, how
        they are used for styling and functionality, best practices, and more.
        Spans are versatile tools that allow you to target and manipulate specific
        parts of your content. Remember to use spans wisely, follow best
        practices, and always test your HTML and JavaScript code to ensure your
        spans work correctly in different browsers and devices. In the next
        lesson, we'll move on to inline elements in HTML. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "div")}>back</button>
        <button onClick={() => (window.location.href = "inline")}>Next</button>
      </div>
    </div>
  );
};
