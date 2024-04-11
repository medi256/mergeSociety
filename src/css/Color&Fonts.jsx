const Color = () => {
  return (
    <div className="comments-container">
      <h1>CSS Colors</h1>
      <p>
        Colors are crucial for creating visually appealing web designs, and CSS
        provides various methods to define and apply them. {`Let's`} delve into
        each aspect:
      </p>
      <ol>
        <li>
          <h2>Color Names and Hex Values</h2>
          <ul>
            <li>CSS offers a wide array of color options.</li>
            <li>
              You can use named colors, hexadecimal values, RGB, and HSL
              formats.
            </li>
          </ul>
          <ul>
            <li>
              <h4>Named Colors</h4>
              <ul>
                <li>
                  CSS provides a set of predefined color names such as red,
                  blue, green, orange, and purple.
                </li>
                <li>
                  These named colors are supported by all modern browsers.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2>Hexadecimal Values</h2>
          <ul>
            <li>
              Hex values represent colors using a combination of six characters
              (0-9 and A-F).
            </li>
            <li>
              Format: #RRGGBB (where RR, GG, and BB are two-digit hexadecimal
              values).
            </li>
            <li>Example: #FF0000 for red.</li>
          </ul>
          <div>
            <h4>Example:</h4>
            <div>
              <h4>CSS code</h4>
              <pre>
                <code>
                  {`
  h1 {
    color: red; /* Named color */
  }
  
  p {
    color: #336699; /* Hex value for blue */
  }
                  `}
                </code>
              </pre>
            </div>
          </div>
        </li>
        <li>
          <h2>RGB and RGBA</h2>
          <ul>
            <li>RGB stands for Red, Green, and Blue.</li>
            <li>
              You can specify colors using RGB values ranging from 0 to 255.
            </li>
            <li>
              Format: rgb(red, green, blue) or rgba(red, green, blue, alpha).
            </li>
          </ul>
          <div>
            <h4>Example:</h4>
            <div>
              <h4>CSS code</h4>
              <pre>
                <code>
                  {`
  h2 {
    color: rgb(255, 0, 0); /* Red */
  }
  
  span {
    color: rgba(0, 128, 0, 0.7); /* Green with 70% opacity */
  }
                  `}
                </code>
              </pre>
            </div>
          </div>
        </li>
        <li>
          <h2>HSL and HSLA</h2>
          <ul>
            <li>HSL stands for Hue, Saturation, and Lightness.</li>
            <li>
              HSL values allow you to adjust color based on hue (0-360),
              saturation (0-100%), and lightness (0-100%).
            </li>
            <li>
              Format: hsl(hue, saturation, lightness) or hsla(hue, saturation,
              lightness, alpha).
            </li>
          </ul>
          <div>
            <h4>Example:</h4>
            <div>
              <h4>CSS code</h4>
              <pre>
                <code>
                  {`
  a {
    color: hsl(210, 70%, 50%); /* Dark cyan */
  }
  
  blockquote {
    color: hsla(30, 100%, 50%, 0.8); /* Light orange with 80% opacity */
  }
                  `}
                </code>
              </pre>
            </div>
            <p>
              For more details, check out the{" "}
              <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on
              CSS Colors.
            </p>
            <p>
              Remember to experiment with colors to create visually stunning
              designs for your web pages!
            </p>
          </div>
        </li>
      </ol>

      <div className="button-container">
        <button onClick={() => (window.location.href = "selectors")}>
          back
        </button>
        <button onClick={() => (window.location.href = "fonts")}>Next</button>
      </div>
    </div>
  );
};

export default Color;

export const Fonts = () => {
  return (
    <div className="comments-container">
      <h1>CSS Fonts</h1>
      <ol>
        <li>
          <h2>Font Families</h2>
          <p>
            Font families play a vital role in defining the visual style of your
            text. They group related fonts with similar characteristics,
            allowing you to specify fallback options.
          </p>
          <p>There are two main types of font families:</p>
          <ol>
            <li>
              <h3>Generic Font Families</h3>
              <ul>
                <li>
                  Generic font families categorize fonts into broader groups
                  with similar design traits.
                </li>
                <li>
                  They act as fallbacks when specific fonts are unavailable.
                </li>
                <li>
                  Examples include serif, sans-serif, monospace, cursive, and
                  fantasy.
                </li>
              </ul>
            </li>
            <li>
              <h3>Specific Font Families</h3>
              <ul>
                <li>
                  Specific font families refer to actual font names like{" "}
                  {`"Arial," "Helvetica," "Georgia,"`} etc.
                </li>
                <li>
                  You can specify multiple font names to create a fallback
                  system.
                </li>
              </ul>
            </li>
          </ol>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
/* Specify different fonts for three paragraphs */
.p1 {
  font-family: "Times New Roman", Times, serif;
  /* Fallback to generic serif font */
}
.p2 {
  font-family: Arial, Helvetica, sans-serif;
  /* Fallback to generic sans-serif font */
}
.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
  /* Fallback to generic monospace font */
}
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Size</h2>
          <p>
            The font-size property allows you to control the size of your text
            using either absolute or relative units.
          </p>
          <h4>Absolute Size (Pixels):</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 14px;
  }
            `}
              </code>
            </pre>
          </div>
          <h4>Relative Size (Em):</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1 {
    font-size: 2.5em; /* 40px/16=2.5em */
  }
  h2 {
    font-size: 1.875em; /* 30px/16=1.875em */
  }
  p {
    font-size: 0.875em; /* 14px/16=0.875em */
  }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Weight</h2>
          <p>
            The font-weight property adjusts the thickness or boldness of the
            text.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  .normal-text {
    font-weight: normal; /* Regular weight */
  }
  .bold-text {
    font-weight: bold; /* Bold weight */
  }
  .bolder-text {
    font-weight: 900; /* Extra bold weight */
  }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Style</h2>
          <p>
            The font-style property sets whether a font should be styled with a
            normal, italic, or oblique face.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
            .italic-text {
              font-style: italic; /* Italic style */
            }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Variant</h2>
          <p>The font-variant property controls the use of small caps.</p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
.small-caps-text {
  font-variant: small-caps; /* Display text in small caps */
}
            `}
              </code>
            </pre>
          </div>
        </li>
      </ol>
      <div className="button-container">
        <button onClick={() => (window.location.href = "color")}>back</button>
        <button onClick={() => (window.location.href = "background")}>
          Next
        </button>
      </div>
    </div>
  );
};
