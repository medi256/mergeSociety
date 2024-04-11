const CommentsH = () => {
  return (
    <div className="comments-container">
      <h2>HTML Comments</h2>
      <p>
        HTML comments provide a way to add notes or annotations within your HTML
        code that are ignored by the browser when rendering the page. They are
        useful for documenting your code, adding reminders, or temporarily
        disabling sections of code.
      </p>
      <h3>Syntax:</h3>
      <p>
        HTML comments are enclosed within <code>&lt;!--</code> and{" "}
        <code>--&gt;</code> tags.
      </p>
      <p>Example:</p>
      <pre>
        <code>&lt;!-- This is a comment --&gt;</code>
      </pre>
      <p>Comments can span multiple lines:</p>
      <pre>
        <code>
          &lt;!-- This is a multiline comment. It spans multiple lines. --&gt;
        </code>
      </pre>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use comments to provide explanations or context for your code, making
          it easier to understand for yourself and others.
        </li>
        <li>
          Avoid over-commenting; use comments judiciously and only when
          necessary.
        </li>
        <li>
          Comments are ignored by browsers and do not affect the appearance or
          functionality of the rendered page.
        </li>
        <li>
          Comments can be used to temporarily disable or {`"comment out"`}{" "}
          sections of code during testing or debugging.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/pre")}>back</button>
        <button onClick={() => (window.location.href = "/sub")}>Next</button>
      </div>
    </div>
  );
};

export default CommentsH;
export const Sub = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;sub&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;sub&gt;</code> element is used to define subscript text in
        HTML. Subscript text appears half a character below the normal line and
        is typically used for footnotes, chemical formulas, mathematical
        expressions, and other situations where smaller text is required.
      </p>
      <h3>Example:</h3>
      <p>
        The chemical formula for water (
        <code>
          H<sub>2</sub>O
        </code>
        ) can be written using the <code>&lt;sub&gt;</code> element for the
        subscript {`"2"`}.
      </p>
      <pre>
        <code>
          {`
  <p>
    The chemical formula for water (H<sub>2</sub>O) is written using the
    <sub> element for the subscript "2".
  </p>
          `}
        </code>
      </pre>
      <p>
        Output: The chemical formula for water (H<sub>2</sub>O) is written using
        the <sub>2</sub> element for the subscript{`"2".`}
      </p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;sub&gt;</code> element does not have any specific
        attributes.
      </p>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;sub&gt;</code> element to represent subscript text
          in HTML, such as footnotes, chemical formulas, and mathematical
          expressions.
        </li>
        <li>
          Avoid using the <code>&lt;sub&gt;</code> element for purely
          presentational purposes; ensure that subscript text carries semantic
          meaning.
        </li>
        <li>
          Ensure that subscript text is appropriately styled for readability and
          accessibility, especially for users with visual impairments.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/commentsH")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/sup")}>Next</button>
      </div>
    </div>
  );
};
