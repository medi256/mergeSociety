const Inserting = () => {
  return (
    <div className="comments-container">
      <h2>Methods for Adding CSS to HTML Elements</h2>
      <p>There are three simple ways to insert CSS into an HTML document:</p>
      <h3>1. Internal Styles</h3>
      <p>
        Internal styles are defined within the HTML document using the{" "}
        {`"style"`}
        {""}
        tag in the head section. This method is useful when a single HTML
        document requires unique styles.
      </p>
      <p>
        To use internal styles, CSS rules should be included within the{" "}
        <code>&lt;style&gt;&lt;/style&gt;</code> tags, typically placed within
        the <code>&lt;head&gt;</code> section of your HTML document.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS</title>
    <style>
      body {
        background-color: blue;
      }
      h2 {
        color: white;
      }
    </style>
  </head>
  <body>
    <h2>Merge Academy</h2>
  </body>
</html>
    `}
        </code>
      </pre>
      <h3>2. External Styles</h3>
      <p>
        External styles involve placing CSS code in a separate file and linking
        it to the HTML document. This method keeps your code organized and makes
        it easier to maintain.
      </p>
      <p>
        To use external styles, create a new CSS file within the same folder as
        your HTML file and define your CSS rules in it. Then, link the CSS file
        to your HTML document using the <code>&lt;link&gt;</code> tag in the{" "}
        <code>&lt;head&gt;</code> section.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  <!-- Inside the <head> section of your HTML file -->
  <link rel="stylesheet" href="filename.css">
        `}
        </code>
      </pre>
      <h3>3. Inline Styles</h3>
      <p>
        Inline styles involve applying styles directly to individual HTML
        elements using the {`"style"`} attribute. This method is convenient for
        quickly adding styles to specific elements.
      </p>
      <p>
        To use inline styles, add the {`"style"`} attribute to the HTML element
        and specify the CSS rules directly within the {`attribute's`} value.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  <h1 style="color: blue; font-size: 24px;">Hello, World!</h1>
          `}
        </code>
      </pre>
      <p>
        {`It's`} generally recommended to use external or internal stylesheets
        for larger projects to maintain code organization and readability.
        However, inline styles can be useful for quick styling of individual
        elements.
      </p>
      <p>
        Practice each method and experiment with different styles to reinforce
        your understanding of CSS.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/syntaxMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/selectMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Inserting;
export const Selectors = () => {
  return (
    <div className="comments-container">
      <h1>CSS Selectors</h1>
      <p>
        Selectors are essential for targeting specific HTML elements and
        applying styles to them. {`Let's`} explore various types of selectors,
        their usage, and examples:
      </p>
      <ol>
        <li>
          <h2>Element Selector</h2>
          <ul>
            <li>
              The element selector selects HTML elements based on their tag
              names.
            </li>
            <li>
              It applies styles to all instances of that element on the page.
            </li>
            <li>For example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  p {
    color: blue;
  }
                `}
              </code>
            </pre>
          </div>
          <p>In this example, all &lt;p&gt; elements will have blue text.</p>
        </li>
        <li>
          <h2>ID Selector</h2>
          <ul>
            <li>
              The ID selector selects a specific HTML element based on its
              unique id attribute.
            </li>
            <li>IDs must be unique within a page.</li>
            <li>
              To select an element with a specific ID, use the # character
              followed by the ID name.
            </li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  #my-heading {
    font-weight: bold;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, the element with id={`"my-heading"`} will have bold
            text.
          </p>
        </li>
        <li>
          <h2>Class Selector</h2>
          <ul>
            <li>
              The class selector selects HTML elements based on their class
              attribute.
            </li>
            <li>Classes can be applied to multiple elements.</li>
            <li>
              To select elements with a specific class, use the . character
              followed by the class name.
            </li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  .highlight {
    background-color: yellow;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all elements with class={`"highlight"`} will have a
            yellow background.
          </p>
        </li>
        <li>
          <h2>Universal Selector</h2>
          <ul>
            <li>
              The universal selector (*) selects all HTML elements on the page.
            </li>
            <li>It’s often used to apply styles globally.</li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  * {
    margin: 0;
    padding: 0;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all elements will have zero margin and padding.
          </p>
        </li>
        <li>
          <h2>Grouping Selector</h2>
          <ul>
            <li>
              The grouping selector allows you to apply the same styles to
              multiple selectors.
            </li>
            <li>Separate selectors with commas.</li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1, h2, h3 {
    font-family: "Helvetica", sans-serif;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all &lt;h1&gt;, &lt;h2&gt;, and &lt;h3&gt; elements
            will use the Helvetica font.
          </p>
          <p>
            For more details, check out the{" "}
            <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on
            CSS Selectors.
          </p>
        </li>
      </ol>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/insertMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/colorMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
