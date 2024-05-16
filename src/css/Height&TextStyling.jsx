const Height = () => {
  return (
    <div className="comments-container">
      <h1>The World of Height in CSS</h1>
      <p>
        {`Height is another fundamental property in CSS that determines the vertical size
        of an element. Just like width, height plays a crucial role in defining the
        layout, appearance, and responsiveness of your web designs. In this section,
        we'll explore the wonderful world of height in CSS and learn how to use it
        effectively to style your elements. Let's begin!`}
      </p>

      <h2>Height Property</h2>
      <p>
        The <code>height</code> property allows you to set the height of an
        element. You can specify the height using various units, such as pixels
        (px), percentages (%), or keywords like <code>auto</code>.{" "}
        {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  height: 200px; /* Sets the height to 200 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code> property to 200
        pixels, making the div element 200 pixels tall. You can adjust the
        height value to create elements with different sizes, depending on your
        design needs.
      </p>

      <h2>Percentages for Height</h2>
      <p>
        {`Using percentages for height allows you to set the height relative to the height
        of the parent element. This means that the height will adjust dynamically based
        on the size of the parent element. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  height: 50%; /* Sets the height to 50% of the parent's height */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code>{" "}
        {`property to 50%, making the
        div element half the height of its parent element. This is useful when you want
        the element to scale proportionally with the parent element's height. For
        example, if the parent element has a height of 600 pixels, the child element
        with a height of 50% will be 300 pixels tall. Percentages for height are
        commonly used to create flexible layouts that adapt to different screen
        sizes or to maintain a specific aspect ratio.`}
      </p>

      <h2>Auto Height</h2>
      <p>
        The <code>height: auto</code>{" "}
        {`property is commonly used for images and other
        elements that need to adjust their height based on their content. Here's an
        example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
img {
  height: auto; /* Sets the height based on the image's original size */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code> property to{" "}
        <code>auto</code>
        for an image element. This means that the image will be displayed at its
        original height, without any stretching or distortion. The{" "}
        <code>auto</code>
        value tells the browser to calculate the height based on the intrinsic
        size of the image. This is particularly useful for images or other
        elements that need to maintain their original aspect ratio while fitting
        within their container.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to experiment with height in CSS! Open your code editor and create
        a new HTML file. Let's explore the wonderful world of height:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your height experiments.
        </li>
        <li>
          Apply different height values, such as pixels, percentages, and auto,
          and observe how they affect the size of the elements.
        </li>
        <li>
          {`Experiment with percentages for height to create elements that scale
          proportionally with the parent element's height.`}
        </li>
        <li>
          Use <code>height: auto</code> for images or other elements that need
          to adjust their height based on their content. Notice how the element
          maintains its original aspect ratio.
        </li>
        <li>
          Explore the relationship between height and width by creating elements
          with different height and width values. Observe how they interact and
          affect the layout.
        </li>
        <li>
          Refer to height resources and tutorials to discover creative ways to
          use height to create flexible and responsive designs.
        </li>
      </ol>

      <p>
        Remember, height is a powerful tool in web design. It helps define the
        layout, appearance, and responsiveness of your designs. Choose height
        values that align with your brand and enhance the overall user
        experience. Happy coding!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "width")}>back</button>
        <button onClick={() => (window.location.href = "stylingText")}>
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
        <button onClick={() => (window.location.href = "height")}>back</button>
        <button onClick={() => (window.location.href = "units")}>Next</button>
      </div>
    </div>
  );
};
