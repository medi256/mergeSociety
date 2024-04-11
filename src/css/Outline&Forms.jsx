const Outline = () => {
  return (
    <div className="comments-container">
      <h1>Outline</h1>
      <p>
        In this tutorial, you will learn how to use the outline property in CSS.
      </p>

      <ol>
        <li>
          Introduction
          <ul>
            <li>
              {`
            The outline property draws a line around the border of an element, outside the border edge.`}
            </li>
            <li>
              It is often used to highlight elements without affecting their
              layout.
            </li>
          </ul>
        </li>
        <h2>Outline Property:</h2>
        <p>
          The <code>outline</code> property is used to specify the style, color,
          and width of the outline around an element.
        </p>
        <pre>
          <code>
            {`
  .example {
    outline: 2px solid blue;
  }`}
          </code>
        </pre>

        <li>
          Examples
          <ul>
            <li>
              <strong>Outline: Solid Blue</strong>
              <p>This example sets a solid blue outline around an element.</p>
              <pre>
                <code>
                  {`
  <div style={{ outline: '2px solid blue', border: '1px solid black' }}>
    <p>This element has a solid blue outline.</p>
  </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  outline: "2px solid blue",
                  border: "1px solid black",
                }}
              >
                <p>This element has a solid blue outline.</p>
              </div>
            </li>
            <li>
              <strong>Outline: Dashed Red</strong>
              <p>This example sets a dashed red outline around an element.</p>
              <pre>
                <code>
                  {`
  <div style={{ outline: '2px dashed red', border: '1px solid black' }}>
    <p>This element has a dashed red outline.</p>
  </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  outline: "2px dashed red",
                  border: "1px solid black",
                }}
              >
                <p>This element has a dashed red outline.</p>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Outline .
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
