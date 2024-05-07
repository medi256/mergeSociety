const Inline = () => {
  return (
    <div className="comments-container">
      <h1>Inline Elements in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring inline elements - an
        important concept in HTML. Inline elements are those that are displayed
        inline with the surrounding text, without creating line breaks or
        affecting the layout structure. Let's dive into the world of inline
        elements in HTML and learn how to use them effectively.`}
      </p>

      <h2>What Are Inline Elements in HTML?</h2>
      <p>
        Inline elements are HTML elements that are displayed inline with the
        text flow. They do not create line breaks or occupy the entire width of
        the container. Inline elements are typically used for small pieces of
        text or elements that should be displayed within a line of text, such as
        words, phrases, or short snippets of content. Here are some commonly
        used inline elements:
      </p>

      <ul>
        <li>
          <strong>
            {" "}
            <code>{`<span> `}</code> :
          </strong>{" "}
          The <code>{`<span> `}</code> element is used to group and style small
          portions of text or other inline elements.{" "}
          {` It's
          commonly used for applying styles or functionality to specific parts of
          text.`}
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<a>`}</code> :
          </strong>{" "}
          The <code>{`<a>`}</code> element, also known as an anchor tag, is used
          to create hyperlinks. It allows users to click and navigate to another
          web page or a specific location within the same page.
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<strong>`}</code> :
          </strong>{" "}
          The <code>{`<strong>`}</code> element is used to indicate strong
          emphasis or importance. It typically renders the enclosed text in
          bold.
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<em>`}</code> :
          </strong>{" "}
          The <code>{`<em>`}</code> element is used to indicate emphasis or
          stress. It typically renders the enclosed text in italics.
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<img> `}</code> :
          </strong>{" "}
          The <code>{`<img> `}</code> element is used to embed images within the
          text flow. It allows you to include images inline with the surrounding
          text.
        </li>
      </ul>

      <h2>Using Inline Elements Effectively</h2>
      <p>
        Inline elements are particularly useful when you want to style or add
        functionality to specific parts of your text without affecting the
        overall layout. Here are some tips for using inline elements
        effectively:
      </p>

      <ul>
        <li>
          <strong>Use inline elements for small portions of text:</strong>{" "}
          Inline elements are best suited for styling or adding functionality to
          words, phrases, or short snippets of text.
        </li>
        <li>
          <strong>Nest inline elements within block-level elements:</strong>
          Inline elements can be nested within block-level elements, such as
          paragraphs or divs, to create more complex structures.
        </li>
        <li>
          <strong>Use inline elements for interactive functionality:</strong>
          Inline elements like <code>{`<a>`}</code> or <code>{`<button>`}</code>{" "}
          can be used to create clickable elements that trigger actions or
          navigate to different locations.
        </li>
      </ul>

      <h2>Best Practices for Using Inline Elements</h2>
      <ul>
        <li>
          <strong>Use inline elements sparingly:</strong> Inline elements should
          be used only when necessary. Avoid using them for large portions of
          text or for structural purposes.
        </li>
        <li>
          <strong>Keep inline elements semantic:</strong> Use inline elements to
          enhance the meaning or functionality of the surrounding text, not just
          for styling purposes.
        </li>
        <li>
          <strong>Avoid using inline elements for block-level content:</strong>
          Inline elements should not be used for content that requires a line
          break or occupies the entire width of the container. Use block-level
          elements like <code>{`<div> `}</code> or <code>{`<p>`}</code> for
          those cases.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using inline elements, nesting
        them within block-level elements, and applying styles or functionality.
        Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "inline-elements.html" in your
          workspace folder.`}
        </li>
        <li>
          Create a paragraph with some text and apply styles to specific words
          using inline elements. For example,
          <br />
          <pre>
            <code>
              {`
<p>This is a <strong>strong</strong> and <em>emphasized</em> sentence with a <a href="https://www.example.com">link</a>.</p>

          `}
            </code>
          </pre>
        </li>
        <li>
          Try nesting inline elements within block-level elements, such as
          paragraphs or divs. For instance, you can have a paragraph with inline
          elements for emphasis or links.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored inline elements in HTML, including their
        purpose, how they are used, best practices, and more. Inline elements are
        an important tool for creating interactive and dynamic web pages. Remember
        to use inline elements wisely, follow best practices, and always test
        your HTML code to ensure your inline elements render correctly in
        different browsers and devices. In the next lesson, we'll move on to
        block-level elements in HTML, which will cover elements that create line
        breaks and occupy the entire width of the container. Stay tuned, and happy
        coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/spanMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/blockMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Inline;

export const Block = () => {
  return (
    <div className="comments-container">
      <h2>Understanding Block-Level Elements in HTML:</h2>
      <p>
        Block-level elements in HTML are used to mark up structural components
        of a webpage that typically start on a new line and occupy the full
        width of their containing element.
      </p>

      <h3>Basic Syntax:</h3>
      <p>
        Block-level elements are enclosed within tags and create a new
        block-level box.
      </p>
      <pre>
        <code>&lt;tag&gt;Content&lt;/tag&gt;</code>
      </pre>

      <h3>Common Block-Level Elements:</h3>
      <p>
        Some common block-level elements you will work with include:
        <ul>
          <li>
            <code>&lt;div&gt;</code> - Defines a division or section of the
            document.
          </li>
          <li>
            <code>&lt;p&gt;</code> - Represents a paragraph of text.
          </li>
          <li>
            <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings of
            various levels.
          </li>
          <li>
            <code>&lt;ul&gt;</code> - Represents an unordered list.
          </li>
          <li>
            <code>&lt;ol&gt;</code> - Represents an ordered list.
          </li>
          <li>
            <code>&lt;li&gt;</code> - Represents a list item within{" "}
            <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>.
          </li>
          <li>
            <code>&lt;table&gt;</code> - Represents a table.
          </li>
          <li>
            <code>&lt;form&gt;</code> - Represents a form.
          </li>
          <li>
            <code>&lt;footer&gt;</code>, <code>&lt;header&gt;</code>,{" "}
            <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> - HTML5
            semantic elements for structural markup.
          </li>
        </ul>
      </p>

      <h3>Identifying Block-Level Elements:</h3>
      <p>
        Block-level elements can be identified based on their behavior:
        <ul>
          <li>
            <b>Starts on a New Line:</b> Block-level elements typically start on
            a new line.
          </li>
          <li>
            <b>Occupies Full Width:</b> They occupy the full width available
            within their containing element by default.
          </li>
        </ul>
      </p>

      <h3>Example:</h3>
      <pre>
        <code>
          {`
  <div>
    <p>This is a paragraph inside a division.</p>
  </div>
          `}
        </code>
      </pre>
      <p>
        In this example, the <code>&lt;div&gt;</code> element defines a division
        or section of the document, and the <code>&lt;p&gt;</code> element
        represents a paragraph of text within it.
      </p>

      <h3>Usage:</h3>
      <p>
        Block-level elements are commonly used for:
        <ul>
          <li>Structuring the layout of a webpage.</li>
          <li>Grouping and organizing content into logical sections.</li>
          <li>
            Defining headings, paragraphs, lists, tables, forms, and other
            structural elements.
          </li>
          <li>Creating responsive designs and flexible layouts using CSS.</li>
        </ul>
      </p>

      <h3>Benefits:</h3>
      <ul>
        <li>
          <b>Structural Organization:</b> Block-level elements provide a clear
          and organized structure to webpages, enhancing readability and
          maintainability.
        </li>
        <li>
          <b>Layout Control:</b> They offer flexibility in designing layouts and
          arranging content within the webpage.
        </li>
        <li>
          <b>Accessibility:</b> Proper use of block-level elements improves
          accessibility for users and search engines.
        </li>
      </ul>

      <h3>Conclusion:</h3>
      <p>
        Understanding block-level elements is essential for structuring and
        organizing content in HTML documents. They serve as the building blocks
        for creating well-designed and semantically structured webpages.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/inlineMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/tablesMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
