const Inline = () => {
  return (
    <div className="comments-container">
      <h2>Exploring Inline Elements in HTML:</h2>
      <p>
        {`
        Inline elements in HTML are used to mark up parts of the document's
        content that do not break the flow of the text. Unlike block-level
        elements, inline elements do not start on a new line and only occupy the
        space bounded by the content and other elements around them.`}
      </p>

      <h3>Basic Syntax:</h3>
      <p>
        Inline elements are enclosed within tags just like block-level elements,
        but they do not create a new block-level box.
      </p>
      <pre>
        <code>&lt;tag&gt;Content&lt;/tag&gt;</code>
      </pre>

      <h3>Common Inline Elements:</h3>
      <p>
        Some common inline elements you will work with include:
        <ul>
          <li>
            <code>&lt;em&gt;</code> - Emphasizes text.
          </li>
          <li>
            <code>&lt;a&gt;</code> - Creates hyperlinks.
          </li>
          <li>
            <code>&lt;img&gt;</code> - Inserts images.
          </li>
          <li>
            <code>&lt;abbr&gt;</code> - Defines abbreviations.
          </li>
          <li>
            <code>&lt;code&gt;</code> - Marks up code snippets.
          </li>
          <li>
            <code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code> - Indicate
            inserted and deleted text, respectively.
          </li>
        </ul>
      </p>

      <h3>Identifying Inline Elements:</h3>
      <p>
        To identify an inline element, you can consider its behavior:
        <ul>
          <li>
            <b>No Line Break:</b> Inline elements do not start on a new line;
            they flow within the text.
          </li>
          <li>
            <b>Occupies Inline Space:</b> Inline elements only occupy the space
            bounded by the content and other elements around them.
          </li>
        </ul>
      </p>

      <h3>Example:</h3>
      <pre>
        <code>
          {`
<p>
  This is <em>emphasized</em> text within a paragraph.
</p>
          `}
        </code>
      </pre>
      <p>
        In this example, the <code>&lt;em&gt;</code> element is used to
        emphasize text within a paragraph without causing a line break.
      </p>

      <h3>Usage:</h3>
      <p>
        Inline elements are commonly used for:
        <ul>
          <li>Styling text with emphasis, italicization, or boldness.</li>
          <li>
            Inserting hyperlinks with the <code>&lt;a&gt;</code> element.
          </li>
          <li>
            Adding images with the <code>&lt;img&gt;</code> element.
          </li>
          <li>
            Defining abbreviations and acronyms with the{" "}
            <code>&lt;abbr&gt;</code> and <code>&lt;acronym&gt;</code> elements,
            respectively.
          </li>
          <li>
            Marking up code snippets with the <code>&lt;code&gt;</code> element.
          </li>
          <li>
            Indicating inserted and deleted text with the{" "}
            <code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code> elements,
            respectively.
          </li>
        </ul>
      </p>

      <h3>Benefits:</h3>
      <ul>
        <li>
          <b>Inline Styling:</b> Inline elements provide a way to apply styles
          to specific portions of text within a paragraph or other
          text-containing elements.
        </li>
        <li>
          <b>Accessibility:</b> They enable the semantic markup of text content,
          improving accessibility for users and search engines.
        </li>
        <li>
          <b>Flexible Layout:</b> Inline elements can be combined with
          block-level elements to create complex layouts and designs.
        </li>
      </ul>

      <h3>Conclusion:</h3>
      <p>
        Understanding inline elements is essential for effectively marking up
        text content in HTML documents. They offer a versatile way to add
        emphasis, links, images, and other inline content to webpages while
        maintaining the flow of the text.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "span")}>back</button>
        <button onClick={() => (window.location.href = "block")}>Next</button>
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
        <button onClick={() => (window.location.href = "inline")}>back</button>
        <button onClick={() => (window.location.href = "tables")}>Next</button>
      </div>
    </div>
  );
};
