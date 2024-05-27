const Outline = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Outline in CSS</h1>
      <p>
        {`Outline is a CSS property that allows you to create a decorative border around an
        element, but with a twist! Unlike traditional borders, outlines don't occupy space within
        the element's box model, making them non-blocking and non-overlapping. In this section,
        we'll explore the fascinating world of outline and learn how to use it effectively in
        your CSS designs. Let's embark on this outline adventure!`}
      </p>

      <h2>Understanding Outline</h2>
      <p>
        {`Outline is a CSS property that specifies the style, width, and color of a border drawn
        around an element's outer edge. It can be used to create a visual emphasis, highlight
        certain elements, or add a decorative touch to your designs. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.element {
  outline: 2px solid red; /* Creates a 2-pixel solid red outline */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>outline</code> property to{" "}
        <code>2px solid red</code>, which means a 2-pixel wide solid red outline
        will be drawn around the element.{" "}
        {`Outline
        is different from traditional borders because it doesn't affect the layout or positioning
        of surrounding elements.`}
      </p>

      <h3>Outline Style</h3>
      <p>
        The <code>outline-style</code> property specifies the style of the
        outline. It can have values such as <code>solid</code>,{" "}
        <code>dashed</code>, <code>dotted</code>, and more.
        {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.element {
  outline-style: dashed; /* Creates a dashed outline */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Outline Width</h3>
      <p>
        The <code>outline-width</code> property specifies the width of the
        outline. You can use pixel values, percentages, or keywords like{" "}
        <code>thin</code> or <code>thick</code>.{`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.element {
  outline-width: 3px; /* Creates a 3-pixel wide outline */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Outline Color</h3>
      <p>
        The <code>outline-color</code>{" "}
        {`property specifies the color of the outline. You can use
        color names, hex codes, RGB values, or even transparent. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.element {
  outline-color: blue; /* Creates a blue outline */
}
          `}
          </code>
        </pre>
      </code>

      <h2>Using Outline</h2>
      <p>
        Outline can be used in various ways to create visually appealing and
        functional designs. Here are some common use cases for outline:
      </p>

      <h3>Visual Emphasis</h3>
      <p>
        {`Outline can be used to visually emphasize or highlight certain elements on a page. For
        example, you can add an outline to a button when it's hovered over to indicate that it's
        interactive. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
button:hover {
  outline: 1px dashed blue; /* Adds a dashed blue outline on hover */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Non-Blocking Borders</h3>
      <p>
        {`Outline is particularly useful when you want to add borders without affecting the layout
        or positioning of surrounding elements. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
img {
  outline: 1px dotted green; /* Adds a dotted green outline */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        {`In the code above, we added a dotted green outline to an image. Notice how the outline
        doesn't affect the positioning of other elements, making it non-blocking.`}
      </p>

      <h2>Benefits of Outline</h2>
      <p>Using outline offers several advantages for your designs:</p>

      <ul>
        <li>
          <strong>Visual Emphasis:</strong> Outline can be used to draw
          attention to specific elements, making them stand out from the
          surrounding content.
        </li>
        <li>
          <strong>Non-Blocking Borders:</strong>{" "}
          {`Outline doesn't affect the layout or positioning
          of other elements, making it ideal for adding borders without disrupting the overall
          design.`}
        </li>
        <li>
          <strong>Accessibility:</strong> Outline can be used to improve
          accessibility by providing a visual indication of focus or interaction
          for users.
        </li>
      </ul>

      <h2>Challenges of Outline</h2>
      <p>
        While outline is a powerful tool, it also comes with some challenges:
      </p>

      <ul>
        <li>
          <strong>Limited Styling:</strong> Outline has fewer styling options
          compared to the border property, which offers more variations in
          border styles.
        </li>
        <li>
          <strong>Browser Support:</strong> Outline may not be supported
          consistently across all browsers, especially older versions.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of outline:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with elements to serve as containers
          for your outline experiments.
        </li>
        <li>
          Apply different outline styles, widths, and colors to observe how
          elements are outlined. Try using solid, dashed, or dotted outlines
          with different color values.
        </li>
        <li>
          Experiment with using outline to visually emphasize interactive
          elements, such as buttons or links, when they are hovered over or
          focused.
        </li>
        <li>
          Refer to outline resources and tutorials to discover creative ways to
          use outline, such as creating visual hierarchies, improving
          accessibility, or adding decorative borders.
        </li>
      </ol>

      <p>
        Remember, outline is a powerful tool in CSS that allows you to create
        non-blocking borders and visual emphasis. Choose outline options that
        align with your design goals, ensure accessibility, and create engaging
        interfaces. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "opacity")}>back</button>
        <button onClick={() => (window.location.href = "forms")}>Next</button>
      </div>
    </div>
  );
};

export default Outline;

export const Forms = () => {
  return (
    <div className="comments-container">
      <h1>Styling Forms</h1>
      <p>In this tutorial, you will learn how to style HTML forms using CSS.</p>

      <ol>
        <li>
          Introduction
          <ul>
            <li>
              {`
            HTML forms are essential for collecting user input on websites.`}
            </li>
            <li>
              Styling forms with CSS can improve the user experience and make
              forms more visually appealing.
            </li>
          </ul>
        </li>
        <h2>Styling Form Elements:</h2>
        <p>
          Form elements such as input fields, buttons, and select dropdowns can
          be styled using CSS.
        </p>
        <pre>
          <code>
            {`
  input[type="text"], input[type="email"], textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  select {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }`}
          </code>
        </pre>

        <li>
          Examples
          <ul>
            <li>
              <strong>Styled Input Field</strong>
              <p>This example shows a styled text input field.</p>
              <pre>
                <code>
                  {`
     <input type="text" placeholder="Enter your name">
                  `}
                </code>
              </pre>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              />
            </li>
            <li>
              <strong>Styled Button</strong>
              <p>This example shows a styled button.</p>
              <pre>
                <code>
                  {`
    <button>Submit</button>
                  `}
                </code>
              </pre>
              <button
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </li>
            <li>
              <strong>Styled Select Dropdown</strong>
              <p>This example shows a styled select dropdown.</p>
              <pre>
                <code>
                  {`
  <select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
                  `}
                </code>
              </pre>
              <select
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
          </ul>
        </li>
      </ol>

      <div className="button-container">
        <button onClick={() => (window.location.href = "outline")}>back</button>
        <button onClick={() => (window.location.href = "flex")}>Next</button>
      </div>
    </div>
  );
};
