import { useNavigate } from "react-router-dom";

const Border = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>CSS Borders</h1>
      <p>
        CSS border properties allow you to define the style, width, and color of
        an {`element's`} border. {`Let's`} dive into each aspect:
      </p>
      <ol>
        <li>
          <h3>border-style:</h3>
          <p>
            This property defines the type of border to display. You can choose
            from various styles:
          </p>
          <ul>
            <li>dotted: Creates a dotted border.</li>
            <li>dashed: Creates a dashed border.</li>
            <li>solid: Creates a solid border (the most common).</li>
            <li>double: Creates a double border.</li>
            <li>
              groove: Creates a 3D grooved border (effect depends on the border
              color).
            </li>
            <li>
              ridge: Creates a 3D ridged border (effect depends on the border
              color).
            </li>
            <li>
              inset: Creates a 3D inset border (effect depends on the border
              color).
            </li>
            <li>
              outset: Creates a 3D outset border (effect depends on the border
              color).
            </li>
            <li>none: No border.</li>
            <li>hidden: A hidden border.</li>
          </ul>
          <h4>Example:</h4>
          <pre>
            <code>
              {`
  .dotted { border-style: dotted; }
  .dashed { border-style: dashed; }
  .solid { border-style: solid; }
  .double { border-style: double; }
  .groove { border-style: groove; }
  .ridge { border-style: ridge; }
  .inset { border-style: inset; }
  .outset { border-style: outset; }
  .none { border-style: none; }
              `}
            </code>
          </pre>
          <h5>Result:</h5>
          <div>
            <ul>
              <li style={{ borderStyle: "dotted" }}>A dotted border.</li>
              <li style={{ borderStyle: "dashed" }}>A dashed border.</li>
              <li style={{ borderStyle: "solid" }}>A solid border.</li>
              <li style={{ borderStyle: "double" }}>A double border.</li>
              <li style={{ borderStyle: "groove" }}>A groove border.</li>
              <li style={{ borderStyle: "ridge" }}>A ridge border.</li>
              <li style={{ borderStyle: "inset" }}>An inset border.</li>
              <li style={{ borderStyle: "outset" }}>An outset border.</li>
              <li style={{ borderStyle: "none" }}>No border.</li>
            </ul>
          </div>
          <p>
            Note: None of the other CSS border properties (which you’ll learn
            more about in the next chapters) will have any effect unless the
            border-style property is set!
          </p>
        </li>
        <li>
          <h3>border-width:</h3>
          <p>
            This property controls the width of the border. You can specify it
            in pixels, ems, or other units.
          </p>
        </li>
        <li>
          <h3>border-color:</h3>
          <p>
            Sets the color of the border. You can use named colors, hexadecimal
            values, or RGB values.
          </p>
        </li>
        <li>
          <h3>Shorthand border Property:</h3>
          <p>
            To simplify your code, you can use the shorthand border property to
            set all border properties at once. For example:
          </p>
          <h4>CSS code</h4>
          <pre>
            <code>
              {`
  h1 {
    border: 8px solid blue;
  }
              `}
            </code>
          </pre>
        </li>
      </ol>

      <p>
        Remember to experiment with different border styles, widths, and colors
        to achieve the desired visual effect for your web elements!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Borders .
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Border;

export const Padding = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Understanding Padding in CSS</h1>
      <ul>
        <li>
          <p>
            Padding is crucial for creating space around an element’s content,
            inside any defined borders.
          </p>
        </li>
        <li>
          <p>
            Unlike margins, which create space outside an element, padding
            provides extra space within an element.
          </p>
        </li>
        <li>
          <p>
            You can control padding for each side of an element: top, right,
            bottom, and left.
          </p>
        </li>
      </ul>
      <h3>Individual Padding Properties</h3>
      <p>
        CSS provides individual properties for setting padding on each side of
        an element:
      </p>
      <ol>
        <li>
          <strong>padding-top:</strong> Sets the padding for the top side.
        </li>
        <li>
          <strong>padding-right:</strong> Sets the padding for the right side.
        </li>
        <li>
          <strong>padding-bottom:</strong> Sets the padding for the bottom side.
        </li>
        <li>
          <strong>padding-left:</strong> Sets the padding for the left side.
        </li>
      </ol>
      <h3>Example:</h3>
      <p>
        Suppose we have a <code>&lt;div&gt;</code> element, and we want to set
        different paddings for each side:
      </p>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  }
      `}
        </code>
      </pre>
      <h4>In this example:</h4>
      <ul>
        <li>The top padding is 50 pixels.</li>
        <li>The right padding is 30 pixels.</li>
        <li>The bottom padding is 50 pixels.</li>
        <li>The left padding is 80 pixels.</li>
      </ul>
      <h3>Shorthand Padding Property</h3>
      <p>
        To simplify your code, you can use the shorthand padding property. It
        allows you to specify all paddings in one declaration.
      </p>
      <h4>How It Works:</h4>
      <ul>
        <li>If you provide four values:</li>
      </ul>
      <pre>
        <code>
          {`
  div {
    padding: 25px 50px 75px 100px;
  }
      `}
        </code>
      </pre>
      <ul>
        <li>Top padding: 25px</li>
        <li>Right padding: 50px</li>
        <li>Bottom padding: 75px</li>
        <li>Left padding: 100px</li>
      </ul>
      <ul>
        <li>If you provide three values:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  div {
    padding: 25px 50px 75px;
  }
      `}
        </code>
      </pre>
      <ul>
        <li>Top padding: 25px</li>
        <li>Right and left paddings: 50px</li>
        <li>Bottom padding: 75px</li>
      </ul>
      <ul>
        <li>If you provide two values:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  div {
    padding: 25px 50px;
  }
      `}
        </code>
      </pre>
      <ul>
        <li>Top and bottom paddings: 25px</li>
        <li>Right and left paddings: 50px</li>
      </ul>
      <ul>
        <li>If you provide one value:</li>
      </ul>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  div {
    padding: 25px;
  }
      `}
        </code>
      </pre>
      <ul>
        <li>All four paddings: 25px</li>
      </ul>
      <p>
        Mastering padding is essential for achieving balanced and visually
        pleasing designs! 🎨👩‍💻
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Padding .
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
