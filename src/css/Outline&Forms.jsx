const Outline = () => {
  return (
    <div className="comments-container">
      <h1>The Mystery of the Outlined Element: A CSS Adventure</h1>
      <p>
        {`Have you ever noticed a cool glow appear around a button or link when you
        click on it with your mouse, or tab to it with your keyboard? That's the
        magic of outlines in CSS! They act like a little spotlight, highlighting
        the element you're currently interacting with. But outlines are more than
        just a pretty effect – they also help people who use keyboards to navigate
        websites easily.`}
      </p>

      <h2>Understanding Outlines</h2>
      <p>
        By default, browsers add a basic outline to some elements like buttons
        and links when they receive focus. This outline is usually a thin, blue
        line. But with CSS, you have the power to control how this outline looks
        and behaves!
      </p>

      <h2>The Outline Toolbox</h2>
      <p>
        {`Imagine you have a special toolbox filled with tools to customize the
        outline. Let's explore what's inside:`}
      </p>

      <ul>
        <li>
          <strong>Outline Style:</strong> This lets you choose the design of the
          outline itself. Do you want a solid line like a marker, a dotted line
          like a dotted notebook page, or maybe even a dashed line like a racing
          stripe? There are many options to choose from! Here are some common
          styles:
          <ul>
            <li>solid: This creates a continuous line around the element.</li>
            <li>
              dotted: This creates a line with small dots at regular intervals.
            </li>
            <li>
              dashed: This creates a line with short dashes at regular
              intervals.
            </li>
            <li>double: This creates two outlines, one inside the other.</li>
            <li>
              none: This completely removes the outline (but be careful, this
              might make it harder for some users to see which element is
              focused).
            </li>
          </ul>
        </li>
        <li>
          <strong>Outline Width:</strong>{" "}
          {`This tool lets you adjust the thickness of the
          outline, just like adjusting the width of a marker line. You can use
          pixels (px) for a precise width, or keywords like "thin," "medium," or
          "thick" for a more general look.`}
        </li>
        <li>
          <strong>Outline Color:</strong> Unleash your creativity here! You can
          choose any color you can imagine for the outline. Want a classic blue?
          Go for it! Feeling adventurous? Try a bright green or a playful hot
          pink! Just make sure the color contrasts well with the background so
          everyone can see it clearly.
        </li>
        <li>
          <strong>Outline Offset:</strong>{" "}
          {`This tool lets you add a bit of space between
          the element's border (if it has one) and the outline. Think of it like
          creating a small breathing room around the element. This can be useful
          to avoid the outline appearing too close to the element's content.`}
        </li>
      </ul>

      <h2>Bringing the Magic to Life with Code</h2>
      <p>
        {`Now that you know the tools in your outline toolbox, let's see how to use
        them in code! Imagine you have a cool button on your website:`}
      </p>

      <code>
        <pre>
          <code>
            {`
button:focus {
  outline: 2px solid blue; /* Blue outline, 2px thick */
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`This code uses the \`:focus\` pseudo-class to target the button only when it
        receives focus. Then, it sets the outline style to "solid," the outline
        width to 2 pixels, and the outline color to blue. Now, whenever someone
        clicks or tabs to the button, it will have a nice blue outline that's easy
        to see.`}
      </p>

      <h2>Making Outlines Fun and Accessible</h2>
      <p>
        Outlines can be a great way to add a touch of personality to your
        website and improve the user experience. But remember, the most
        important thing is to make your website accessible to everyone. Here are
        some tips to keep in mind:
      </p>

      <ul>
        <li>
          <strong>High Contrast:</strong> Make sure the outline color contrasts
          well with the background color. A bright outline on a dark background
          is ideal, but avoid low-contrast combinations like light gray on
          white, which can be difficult to see for some users.
        </li>
        <li>
          <strong>Be Mindful of Outline Removal:</strong>{" "}
          {`While you can use the
          "none" value for the outline style to remove it completely, be cautious.
          This can make it hard for keyboard users to identify focused elements.
          Use it sparingly and only if you have a clear alternative way to indicate
          focus.`}
        </li>
        <li>
          <strong>Test on Different Devices and Browsers:</strong> Outlines can
          render differently depending on the device or browser. Always test
          your website on various platforms to ensure consistent and accessible
          outlines for everyone.
        </li>
      </ul>

      <p>
        By following these tips, you can create outlines that are both visually
        appealing and accessible to all users. Remember, a little accessibility
        goes a long way in making your website a more inclusive and enjoyable
        experience for everyone!
      </p>

      <h2>{`Practice Time: Let's Get Outlining!`}</h2>
      <p>
        {`Now that you're armed with outline knowledge, it's time to experiment!
        Grab your code editor and try these exercises:`}
      </p>

      <ol>
        <li>
          Create a button and play with different outline styles (solid, dotted,
          dashed). See how they affect the look and feel.
        </li>
        <li>
          Experiment with outline width and color. Try bold outlines, different
          colors, and see how they impact visibility.
        </li>
        <li>
          Try removing the outline completely and see how it affects usability
          with a keyboard. Remember, accessibility is key!
        </li>
        <li>
          Test your creations on different devices and browsers to ensure
          consistent outlines across platforms.
        </li>
      </ol>

      <p>
        {`Outlines can be a powerful tool for enhancing your website's design and
        usability. So have fun exploring and creating outlines that make your
        website shine!`}
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
