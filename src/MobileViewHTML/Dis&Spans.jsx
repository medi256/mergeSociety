const Div = () => {
  return (
    <div className="comments-container">
      <h2>Understanding Divs in HTML:</h2>
      <p>
        In HTML, the <code>&lt;div&gt;</code> element is a generic container
        used to group together other elements for styling purposes or to define
        sections of a webpage.
      </p>

      <h3>Basic Syntax:</h3>
      <p>
        To create a div, you simply use the <code>&lt;div&gt;</code> opening tag
        and a corresponding closing tag <code>&lt;/div&gt;</code>. Anything
        placed between these tags will be contained within the div.
      </p>
      <pre>
        <code>
          {`

<div>
  <!-- Content goes here -->
</div>
          `}
        </code>
      </pre>

      <h3>Example:</h3>
      <pre>
        <code>
          {`
<div>
  <h1>Welcome to our Website! </h1>
  <p>This is a paragraph inside a div. </p>
</div>
        `}
        </code>
      </pre>
      <p>
        In this example, the <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>{" "}
        elements are contained within a div, which serves as a container for
        these elements.
      </p>

      <h3>Usage:</h3>
      <p>
        Divs are commonly used for:
        <ul>
          <li>Grouping and styling sections of a webpage.</li>
          <li>Creating layouts and arranging content.</li>
          <li>Applying CSS styles and classes.</li>
        </ul>
      </p>

      <h3>Benefits:</h3>
      <ul>
        <li>
          <b>Flexibility:</b> Divs allow for flexible and versatile structuring
          of web content.
        </li>
        <li>
          <b>Separation of Concerns:</b> They enable separation of content from
          styling, making the code more modular and maintainable.
        </li>
        <li>
          <b>Accessibility:</b> Divs can be used to improve accessibility by
          organizing content in a logical structure.
        </li>
      </ul>

      <h3>Conclusion:</h3>
      <p>
        Understanding divs is fundamental to building well-structured and
        visually appealing webpages. They provide a versatile way to organize
        and style content, contributing to a better user experience.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/formsHMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/spanMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Div;

export const Spans = () => {
  return (
    <div className="comments-container">
      <h2>Mastering Span Elements in HTML:</h2>
      <p>
        In HTML, the <code>&lt;span&gt;</code> element is an inline container
        used to apply styles or manipulate specific portions of text within a
        larger block of content.
      </p>

      <h3>Basic Syntax:</h3>
      <p>
        To create a span, you use the <code>&lt;span&gt;</code> opening tag and
        a corresponding closing tag <code>&lt;/span&gt;</code>. Anything placed
        between these tags will be affected by the styles or properties applied
        to the span.
      </p>
      <pre>
        <code>
          {`
<span>
<!-- Text goes here -->
</span>
          `}
        </code>
      </pre>

      <h3>Example:</h3>
      <pre>
        <code>
          &lt;p&gt;This is a <span style={{ color: "blue" }}>blue</span> text.
          &lt;/p&gt;
        </code>
      </pre>
      <p>
        In this example, the word {`"blue"`} is enclosed within a span element,
        and the color blue is applied to it using inline CSS. This allows for
        targeted styling of specific text within the paragraph.
      </p>

      <h3>Usage:</h3>
      <ul>
        <li>
          Applying inline styles or formatting to specific portions of text.
        </li>
        <li>Manipulating text content dynamically with JavaScript.</li>
        <li>Adding semantic meaning to inline elements.</li>
      </ul>

      <h3>Benefits:</h3>
      <ul>
        <li>
          <b>Granular Styling:</b> Spans provide a way to apply styles to
          individual words or phrases within larger blocks of text.
        </li>
        <li>
          <b>Dynamic Content:</b> They enable dynamic manipulation of text
          content using JavaScript, allowing for interactive user experiences.
        </li>
        <li>
          <b>Semantic Meaning:</b> Spans can be used to add semantic meaning to
          inline elements, improving accessibility and SEO.
        </li>
      </ul>

      <h3>Conclusion:</h3>
      <p>
        Understanding span elements is crucial for fine-tuning the appearance
        and behavior of text content on webpages. They offer a powerful way to
        apply styles, manipulate content, and enhance the semantic structure of
        HTML documents.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/divMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/inlineMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
