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
      <h1>Block-Level Elements in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring block-level elements -
        another important concept in HTML. Block-level elements are those that
        occupy the entire width of the container and create line breaks before and
        after them. Let's dive into the world of block-level elements and learn
        how to use them effectively.`}
      </p>

      <h2>What Are Block-Level Elements in HTML?</h2>
      <p>
        Block-level elements are HTML elements that are displayed on their own
        line and occupy the full width of the container. They create line breaks
        before and after them, separating the content into distinct blocks.
        Block-level elements are typically used for larger sections of content
        or structural purposes. Here are some commonly used block-level
        elements:
      </p>

      <ul>
        <li>
          <strong>
            {" "}
            <code>{`<div> `}</code> :
          </strong>{" "}
          The <code>{`<div> `}</code> element is a generic container used for
          grouping and structuring content.{" "}
          {` It's commonly used
          to create sections, columns, or separate different parts of a web page.`}
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<p>`}</code> :
          </strong>{" "}
          The <code>{`<p>`}</code> element represents a paragraph. It is used to
          create distinct blocks of text, such as paragraphs, quotations, or
          standalone sentences.
        </li>
        <li>
          <strong>
            <code>{`<h1>`}</code>, <code>{`<h2>`}</code>, <code>{`<h3>`}</code>,
            etc.:
          </strong>{" "}
          Heading elements, denoted by <code>{`<h1>`}</code> to{" "}
          <code>{`<h6>`}</code>, are used to create headings and subheadings of
          different levels. They indicate the importance and hierarchy of the
          content.
        </li>
        <li>
          <strong>
            <code>{`<ul>`}</code>, <code>{`<ol>`}</code>,<code>{` <li>`}</code>:
          </strong>{" "}
          List elements, such as unordered lists <code>{`(<ul>)`}</code>,
          ordered lists <code>{`(<ol>)`}</code>, and list items{" "}
          <code>{`(<li>)`}</code>, are used to create structured lists of items.
        </li>
        <li>
          <strong>
            {" "}
            <code>{`<form> `}</code>:
          </strong>{" "}
          The <code>{`<form> `}</code> element is used to create forms, allowing
          users to input data and submit information.
        </li>
      </ul>

      <h2>Using Block-Level Elements Effectively</h2>
      <p>
        Block-level elements are essential for creating the overall structure
        and layout of your web page. Here are some tips for using block-level
        elements effectively:
      </p>

      <ul>
        <li>
          <strong>Use block-level elements for structural purposes:</strong>
          Block-level elements are ideal for creating sections, columns, or
          distinct blocks of content.
        </li>
        <li>
          <strong>Nest block-level elements within each other:</strong>
          Block-level elements can be nested within each other to create
          hierarchical relationships and define the flow of your content.
        </li>
        <li>
          <strong>
            Use block-level elements for larger portions of content:
          </strong>
          Block-level elements are suitable for content that requires its own
          line or occupies a significant portion of the page.
        </li>
      </ul>

      <h2>Best Practices for Using Block-Level Elements</h2>
      <ul>
        <li>
          <strong>Use block-level elements for structure and layout:</strong>
          Block-level elements should be used to create the overall structure
          and layout of your web page.
        </li>
        <li>
          <strong>Use semantic block-level elements:</strong> Choose the right
          block-level element based on the purpose and meaning of the content.
          For example, use <code>{`<p>`}</code> for paragraphs,{" "}
          <code>{`<h1>`}</code> to <code>{`<h6>`}</code>
          for headings, and <code>{`<ul>`}</code> or <code>{`<ol>`}</code> for
          lists.
        </li>
        <li>
          <strong>Avoid using block-level elements for inline content:</strong>
          Block-level elements should not be used for small pieces of text or
          inline elements. Use inline elements like <code>{`<span>`}</code> or{" "}
          <code>{`<a>`}</code> for those cases.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using block-level elements,
        nesting them, and creating structured layouts. Here's a simple exercise
        to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "block-elements.html" in your
          workspace folder.`}
        </li>
        <li>
          Create a basic structure for a web page using block-level elements,
          such as a header, main content area, and footer. For example,
          <br />
          <pre>
            <code>
              {`
<div>
  <h1>Header</h1>
  <p>Main Content</p>
  <footer>Footer</footer>
</div>
    
      `}
            </code>
          </pre>
        </li>
        <li>
          Try nesting block-level elements within each other to create more
          complex structures. For instance, you can have a div for the main
          content area, and within that, you can have paragraphs, headings, and
          lists.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored block-level elements in HTML, including
        their purpose, commonly used block-level elements, how to use them
        effectively, best practices, and more. Block-level elements play a crucial
        role in creating structured and organized web pages. Remember to use
        block-level elements wisely, follow best practices, and always test your
        HTML code to ensure your block-level elements render correctly in
        different browsers and devices. In the next lesson, we'll move on to
        tables in HTML, allowing you to present tabular data in a structured and
        organized manner. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "inline")}>back</button>
        <button onClick={() => (window.location.href = "tables")}>Next</button>
      </div>
    </div>
  );
};
