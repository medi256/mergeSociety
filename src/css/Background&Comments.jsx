const Background = () => {
  return (
    <div className="comments-container">
      <h1>CSS Background Properties</h1>
      <p>
        Background properties in CSS are powerful tools for enhancing the visual
        appeal of web elements. {`Let's`} explore each property in detail:
      </p>
      <ol>
        <li>
          <h2>background-color</h2>
          <p>
            The <code>background-color</code> property sets the background color
            of an element.
          </p>
          <p> You can specify it using:</p>
          <ul>
            <li>A valid color name (e.g., {`"red"`}).</li>
            <li>A HEX value (e.g., {`"#ff0000"`}).</li>
            <li>An RGB value (e.g., {`"rgb(255,0,0)"`}).</li>
          </ul>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background-color: lightblue;
  }
            `}
              </code>
            </pre>
          </div>
          <p>
            In this example, the background color of the entire page is set to
            light blue.
          </p>
        </li>
        <li>
          <h2>background-image</h2>
          <p>
            The <code>background-image</code> property specifies an image to use
            as the background of an element.
          </p>
          <p>
            By default, the image is repeated so it covers the entire element.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background-image: url("girl-avatar.png");
  }
            `}
              </code>
            </pre>
            <p>
              In this example, the background image is repeated. If the image is
              smaller than the container element, it repeats in both horizontal
              and vertical directions.
            </p>
          </div>
        </li>
        <li>
          <h2>background-repeat</h2>
          <p>
            The <code>background-repeat</code> property sets if/how a background
            image will be repeated.
          </p>
          <p>
            By default, a background image is repeated both vertically and
            horizontally.
          </p>
          <h3>Values:</h3>
          <ul>
            <li>
              repeat: The background image is repeated both vertically and
              horizontally (default).
            </li>
            <li>
              repeat-x: The background image is repeated only horizontally.
            </li>
            <li>repeat-y: The background image is repeated only vertically.</li>
            <li>
              no-repeat: The background image is not repeated; it’s shown only
              once.
            </li>
            <li>
              space: The background image is repeated as much as possible
              without clipping. The first and last images are pinned to either
              side of the element, and whitespace is distributed evenly between
              the images.
            </li>
            <li>
              round: The background image is repeated and squished or stretched
              to fill the space (no gaps).
            </li>
          </ul>
          <h3>Example:</h3>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background-image: url("paper.gif");
    background-repeat: repeat-x;
  }
            `}
              </code>
            </pre>
            <p>
              In this example, the background image is repeated only
              horizontally.
            </p>
          </div>
        </li>
        <li>
          <h2>background-attachment</h2>
          <p>
            The <code>background-attachment</code> property controls whether a
            background image scrolls with the rest of the page or remains fixed.
          </p>
          <p>Values:</p>
          <ul>
            <li>
              scroll: The background image scrolls with the page (default
              value).
            </li>
            <li>
              fixed: The background image remains fixed and doesn’t scroll with
              the rest of the content.
            </li>
            <li>
              local: The background image scrolls with the element’s content.
            </li>
          </ul>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background-image: url("coder-illustration.png");
    background-attachment: fixed;
  }
            `}
              </code>
            </pre>
            <p>
              In this example, the background image remains fixed while
              scrolling the rest of the content in the body.
            </p>
          </div>
        </li>
        <li>
          <h2>background-position</h2>
          <p>
            The <code>background-position</code> property specifies the position
            of the background image within the element.
          </p>
          <p>
            You can set it using keywords (e.g., top, center, bottom) or
            specific coordinates (e.g., 10px 20px).
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background-image: url("background.jpg");
    background-position: center;
  }
            `}
              </code>
            </pre>
            <p>
              In this example, the background image is centered within the
              element.
            </p>
          </div>
        </li>
        <li>
          <h2>Shorthand background Property</h2>
          <p>
            The <code>background</code> property allows you to set all
            background properties at once.
          </p>
          <p>
            It includes values for background-color, background-image,
            background-repeat, background-attachment, and background-position.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  body {
    background: url("background.jpg") center/cover no-repeat fixed lightblue;
  }
            `}
              </code>
            </pre>
            <p>
              In this example, the background image is centered, covers the
              entire element, doesn’t repeat, remains fixed, and has a light
              blue background color.
            </p>
          </div>
        </li>
      </ol>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Backgrounds .
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "fonts")}>back</button>
        <button onClick={() => (window.location.href = "comments")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Background;

export const Comments = () => {
  return (
    <div className="comments-container">
      <h1>CSS Comments</h1>
      <p>
        Comments in CSS are not displayed in the browser but serve as notes
        within your source code.
      </p>
      <p>
        They help explain the code and can be useful when you revisit it later.
      </p>
      <p>
        Browsers completely ignore comments; they don’t affect the rendering of
        your webpage.
      </p>

      <h3>Syntax:</h3>
      <ul>
        <li>
          A CSS comment starts with <code>{`/*`}</code> and ends with{" "}
          <code>*/</code>.
        </li>
        <li>You can place comments anywhere in your CSS code.</li>
      </ul>

      <h3>Examples:</h3>
      <ol>
        <li>
          Single-Line Comment:
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  /* This is a single-line comment */
   p {
     color: red;
   }`}
              </code>
            </pre>
            <p>
              In this example, the comment explains that the text color is set
              to red.
            </p>
          </div>
        </li>
        <li>
          Inline Comment (within a line of code):
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  p {
    color: /*red*/ blue;
  }`}
              </code>
            </pre>
            <p>Here, the comment is placed in the middle of the code line.</p>
          </div>
        </li>
        <li>
          Multi-Line Comment:
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  /* This is a multi-line comment */
  p {
    color: red;
  }`}
              </code>
            </pre>
            <p>You can span comments across multiple lines.</p>
          </div>
        </li>
      </ol>

      <h3>Combining HTML and CSS Comments:</h3>
      <ul>
        <li>
          Remember that HTML also supports comments using the{" "}
          <code>&lt;!-- ... --&gt;</code> syntax.
        </li>
        <li>You can combine HTML and CSS comments for better documentation:</li>
      </ul>

      <h4>Example:</h4>
      <div>
        <h4>HTML code</h4>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: red; /* Set text color to red */
      }
    </style>
  </head>
  <body>
    <h2>My Heading</h2>
    <!-- These paragraphs will be red -->
    <p>Hello World!</p>
    <p>This paragraph is styled with CSS.</p>
    <p>CSS comments are not shown in the output.</p>
  </body>
</html>`}
          </code>
        </pre>
      </div>

      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Comments .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "background")}>
          back
        </button>
        <button onClick={() => (window.location.href = "border")}>Next</button>
      </div>
    </div>
  );
};
