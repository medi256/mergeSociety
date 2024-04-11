import { useNavigate } from "react-router-dom";

const Margin = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Introduction to Margins in CSS</h1>
      <ul>
        <li>
          <p>
            Margins are used to create space around elements, outside of any
            defined borders.
          </p>
        </li>
        <li>
          <p>
            Unlike padding, which creates space within an element, margins
            provide extra space around an element.
          </p>
        </li>
        <li>
          <p>
            You can control margins for each side of an element: top, right,
            bottom, and left.
          </p>
        </li>
      </ul>
      <h3>Individual Margin Properties</h3>
      <p>
        CSS provides individual properties for setting margins on each side of
        an element:
      </p>
      <ol>
        <li>
          <strong>margin-top:</strong> Sets the margin for the top side.
        </li>
        <li>
          <strong>margin-right:</strong> Sets the margin for the right side.
        </li>
        <li>
          <strong>margin-bottom:</strong> Sets the margin for the bottom side.
        </li>
        <li>
          <strong>margin-left:</strong> Sets the margin for the left side.
        </li>
      </ol>
      <h4>Example:</h4>
      <p>
        Suppose we have a paragraph (<code>&lt;p&gt;</code>) element, and we
        want to set different margins for each side:
      </p>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  p {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
  }
          `}
        </code>
      </pre>
      <p>In this example:</p>
      <ul>
        <li>The top margin is 100 pixels.</li>
        <li>The bottom margin is 100 pixels.</li>
        <li>The right margin is 150 pixels.</li>
        <li>The left margin is 80 pixels.</li>
      </ul>
      <h3>Shorthand Margin Property</h3>
      <p>
        To simplify your code, you can use the shorthand margin property. It
        allows you to specify all margins in one declaration.
      </p>
      <h4>How It Works:</h4>
      <ul>
        <li>If you provide four values:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  p {
    margin: 25px 50px 75px 100px;
  }  
          `}
        </code>
      </pre>
      <ul>
        <li>Top margin: 25px</li>
        <li>Right margin: 50px</li>
        <li>Bottom margin: 75px</li>
        <li>Left margin: 100px</li>
      </ul>
      <ul>
        <li>If you provide three values:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  p {
    margin: 25px 50px 75px;
  }
          `}
        </code>
      </pre>
      <ul>
        <li>Top margin: 25px</li>
        <li>Right and left margins: 50px</li>
        <li>Bottom margin: 75px</li>
      </ul>
      <ul>
        <li>If you provide two values:</li>{" "}
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  p {
    margin: 25px 50px;
  }
            `}
        </code>
      </pre>
      <ul>
        <li>Top and bottom margins: 25px</li>
        <li>Right and left margins: 50px</li>
      </ul>
      <ul>
        <li>If you provide one value:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  p {
    margin: 25px;
  }
          `}
        </code>
      </pre>
      <ul>
        <li>All four margins: 25px</li>
      </ul>
      <h2>Centering Elements Horizontally</h2>
      <ul>
        <li>
          Set <code>margin: auto;</code> to horizontally center an element
          within its container.
        </li>
        <li>
          The element will take up the specified width, and the remaining space
          will be split equally between the left and right margins.
        </li>
      </ul>
      <h4>Example</h4>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  div {
    width: 50%; 
    margin: auto; 
  }
          `}
        </code>
      </pre>
      <p>
        In this example, the <code>div</code> element will have a width of 50%
        of its container, and by setting <code>margin: auto;</code>, the element
        will be horizontally centered within its container.
      </p>
      <p>
        The remaining space will be split equally between the left and right
        margins.
      </p>

      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Margin .
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Margin;
export const Width = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>CSS Width Property</h1>
      <ul>
        <li>The width property sets an element’s width.</li>
        <li>
          By default, it specifies the width of the content area (excluding
          padding, borders, and margins).
        </li>
        <li>
          If the box-sizing property is set to border-box, it instead sets the
          width of the border area (including padding and content).
        </li>
        <li>
          We will cover {`'border-box'`} and {`'box-sizing'`} in the upcoming
          tutorial.
        </li>
      </ul>
      <h3>Values:</h3>
      <ol>
        <li>length: Defines the width as a distance value (e.g., 300px).</li>
        <li>
          percentage: Defines the width as a percentage of the containing
          block’s width (e.g., 75%).
        </li>
        <li>
          auto: The browser calculates and selects a width for the specified
          element.
        </li>
        <li>max-content: Represents the intrinsic preferred width.</li>
        <li>min-content: Represents the intrinsic minimum width.</li>
        <li>
          fit-content: Uses available space but not more than max-content
          (similar to min(max-content, max(min-content, stretch))).
        </li>
        <li>
          fit-content(length-percentage): Uses the fit-content formula with the
          specified argument (e.g., fit-content(20em)).
        </li>
      </ol>
      <h3>Examples:</h3>
      <ol>
        <li>Default Width:</li>
        <h4>CSS code</h4>
        <pre>
          <code>
            {`
  .goldie {
    background: gold;
  }
        `}
          </code>
        </pre>
        <p>
          <span className="goldie">
            The Mozilla community produces a lot of great software.
          </span>
        </p>
        <li>Width in Pixels and Ems:</li>
        <h4>CSS code</h4>
        <pre>
          <code>
            {`
  .px_length {
    width: 200px;
    background-color: red;
    color: white;
    border: 1px solid black;
  }
  
  .em_length {
    width: 20em;
    background-color: white;
    color: red;
    border: 1px solid black;
  }
        `}
          </code>
        </pre>
        <p>
          <div className="px_length">Width measured in pixels</div>
        </p>
        <p>
          <div className="em_length">Width measured in ems</div>
        </p>
        <li>Width in Percentage:</li>
        <h4>CSS code</h4>
        <pre>
          <code>
            {`
  .percent {
    width: 20%;
    background-color: silver;
    border: 1px solid red;
  }
        `}
          </code>
        </pre>
        <p>
          <div className="percent">Width in percentage</div>
        </p>
        <li>Using “max-content”:</li>
        <pre>
          <code>
            {`
  .maxgreen {
    background: lightgreen;
    width: intrinsic; /* Safari/WebKit uses a non-standard name */
    width: -moz-max-content; /* Firefox/Gecko */
    width: -webkit-max-content; /* Chrome */
    width: max-content;
  }
        `}
          </code>
        </pre>
        <p>
          <span className="maxgreen">
            The width adapts to the intrinsic content size.
          </span>
        </p>
      </ol>
      <p>
        In the array of values provided, all are valuable, yet some are less
        commonly utilized by developers. To streamline your learning process, I
        suggest focusing on mastering percentage, rem, pixels, and even em
        units, as these are frequently employed in web development.
      </p>
      <p>
        Remember that setting appropriate widths ensures your elements fit
        harmoniously within your layout. Experiment with different values to
        achieve the desired visual effect!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Width .
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
