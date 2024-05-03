const Height = () => {
  return (
    <div className="comments-container">
      <h1>CSS Height Property</h1>
      <ul>
        <li>The height property specifies the height of an element.</li>
        <li>
          By default, it defines the height of the content area (excluding
          padding, borders, and margins).
        </li>
        <li>
          If the box-sizing property is set to border-box, it instead determines
          the height of the border area (including padding and content).
        </li>
      </ul>
      <p>
        The values for the height property are similar to those for the width
        property. The only difference is that the width property sets the width,
        while the height property sets the height of an element.
      </p>
      <h3>Values:</h3>
      <ol>
        <li>length: Defines the height as a distance value (e.g., 120px).</li>
        <li>
          percentage: Defines the height as a percentage of the containing
          block’s height (e.g., 75%).
        </li>
        <li>
          auto: The browser calculates and selects a height for the specified
          element.
        </li>
        <li>max-content: Represents the intrinsic preferred height.</li>
        <li>min-content: Represents the intrinsic minimum height.</li>
        <li>
          fit-content: Uses available space but not more than max-content
          (similar to min(max-content, max(min-content, stretch))).
        </li>
        <li>
          fit-content(length-percentage): Uses the fit-content formula with the
          available space replaced by the specified argument (e.g.,
          fit-content(50%)).
        </li>
      </ol>
      <h3>Examples:</h3>
      <ol>
        <li>Setting Height Using Pixels and Percentages:</li>
        <h4>HTML code</h4>
        <pre>
          <code>
            {`
  <div id="taller">I'm 50 pixels tall.</div>
  <div id="shorter">I'm 25 pixels tall.</div>
  <div id="parent">
    <div id="child">I'm half the height of my parent.</div>
  </div>
            `}
          </code>
        </pre>
        <h4>CSS code</h4>
        <pre>
          <code>
            {`
  div {
    width: 250px;
    margin-bottom: 5px;
    border: 2px solid blue;
  }
  #taller {
    height: 50px;
  }
  #shorter {
    height: 25px;
  }
  #parent {
    height: 100px;
  }
  #child {
    height: 50%;
    width: 75%;
  }
            `}
          </code>
        </pre>
        <li>Using max-content:</li>
        <h4>CSS code</h4>
        <pre>
          <code>
            {`
  .maxgreen {
    background: lightgreen;
    height: max-content;
  }
            `}
          </code>
        </pre>
        <p>
          <p className="maxgreen">
            The height adapts to the intrinsic content size.
          </p>
        </p>
      </ol>
      <p>
        All the values provided are valuable, but some are less commonly
        utilized by developers. To streamline your learning process, focus on
        mastering percentage, rem, pixels, and even em units, as these are
        frequently employed in web development.
      </p>
      <p>
        Remember that setting appropriate heights ensures your elements fit
        harmoniously within your layout. Experiment with different values to
        achieve the desired visual effect!
      </p>

      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Height .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/widthMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/styleMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Height;
export const TextStyling = () => {
  return (
    <div className="comments-container">
      <h1>Text Styling</h1>
      <p>
        CSS provides various methods to style text, such as changing color,
        indentation, adding text decoration, and more. Fonts and colors have
        been covered in previous tutorials and {`won't`} be discussed here.
      </p>
      <ol>
        <li>
          Text Decoration (<code>text-decoration</code>):
          <ul>
            <li>
              Adds visual effects to text (e.g., underline, overline,
              line-through).
            </li>
            <li>Common values: none, underline, overline, line-through.</li>
            <li>Example:</li>
          </ul>
          <h4>CSS code</h4>
          <pre>
            <code>
              {`
  a {
    text-decoration: none; /* Remove underline from links */
  }
              `}
            </code>
          </pre>
          <p>
            It removes the default underline from links, providing a cleaner and
            more visually appealing appearance.
          </p>
          <p>Play around with other values to see how they affect your text.</p>
        </li>
        <li>
          Text Transformation (<code>text-transform</code>):
          <ul>
            <li>Controls text capitalization within an element.</li>
            <li>Values: uppercase, lowercase, capitalize, none (default).</li>
          </ul>
          <h4>Example:</h4>
          <h4>CSS code</h4>
          <pre>
            <code>
              {`
  h2 {
    text-transform: uppercase;
  }
              `}
            </code>
          </pre>
          <p>
            The text within <code>&lt;h2&gt;</code> elements will appear in
            uppercase.
          </p>
          <p>Experiment with different values for varying effects.</p>
        </li>
        <li>
          Text Shadow (<code>text-shadow</code>):
          <p>
            Adds a shadow effect behind text, enhancing visibility and creating
            depth.
          </p>
          <h4>Syntax:</h4>
          <ul>
            <li>h-shadow, v-shadow, blur, color.</li>
          </ul>
          <h4>Example:</h4>
          <pre>
            <code>
              {`
  h3 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  `}
            </code>
          </pre>
          <ul>
            <li>
              The text inside <code>&lt;h3&gt;</code> elements will have a
              shadow.
            </li>
            <li>Adjust values for different shadow effects.</li>
          </ul>
        </li>
        <li>
          Letter Spacing (<code>letter-spacing</code>):
          <p>Controls space between individual characters within text.</p>
          <h4>Example:</h4>
          <pre>
            <code>
              {`
  p {
    letter-spacing: 1px;
  }
              `}
            </code>
          </pre>
          <ul>
            <li>
              Text inside <code>&lt;p&gt;</code> elements will have an
              additional space of 1 pixel between each character.
            </li>
            <li>Adjust the value based on design preferences.</li>
          </ul>
        </li>
        <li>
          Word Spacing (<code>word-spacing</code>):
          <p>Controls space between words within text.</p>
          <h4>Example:</h4>
          <pre>
            <code>
              {`
              p {
                word-spacing: 2px;
              }
              `}
            </code>
          </pre>
          <ul>
            <li>
              Text inside <code>&lt;p&gt;</code> elements will have an
              additional space of 2 pixels between adjacent words.
            </li>
            <li>Adjust the value based on design preferences.</li>
          </ul>
        </li>
        <li>
          Text Alignment (<code>text-align</code>):
          <p>Determines horizontal alignment of text within its container.</p>
          <h4>Example:</h4>
          <pre>
            <code>
              {`
  .centered {
    text-align: center;
  }
              `}
            </code>
          </pre>
          <ul>
            <li>
              Text inside elements with class <code>.centered</code> will be
              centered horizontally.
            </li>
            <li>Useful for creating centered headings, captions, etc.</li>
          </ul>
        </li>
      </ol>
      <p>
        Practice these concepts in your code editor to reinforce your learning.
      </p>
      <p>
        For more details, refer to the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Text.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/heightMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/unitsMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
