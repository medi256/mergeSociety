const Margin = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Margins in CSS</h1>
      <p>
        {`Margins are like the invisible spaces that surround your web designs,
        creating distance between elements and the edges of the page. Margins
        play a crucial role in layout, spacing, and visual hierarchy. They can
        make your designs more visually appealing, improve readability, and
        enhance the overall user experience. In this section, we'll explore the
        fascinating world of margins in CSS and learn how to use them effectively
        to style your elements. Let's embark on this margin adventure!`}
      </p>

      <h2>Margin Property</h2>
      <p>
        The <code>margin</code>{" "}
        {`property is a powerful tool in CSS that allows
        you to add space around an element, outside of its border. You can
        specify margins for individual sides (top, right, bottom, left) or use
        shorthand values to set margins for multiple sides at once. Here's an
        example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin: 10px; /* Adds 10px of margin to all sides */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin</code> property to 10 pixels,
        creating a uniform margin of 10 pixels around the div element. This
        means that there will be 10 pixels of space between the element and its
        neighboring elements or the edges of the page. Margins help create
        breathing room and separation between elements, improving the overall
        layout and readability of your designs.
      </p>

      <h2>Margin Top</h2>
      <p>
        The <code>margin-top</code>{" "}
        {`property allows you to add margin
        specifically to the top side of an element. This creates space between
        the element and the top edge of its container or the top edge of the
        page. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin-top: 20px; /* Adds 20px of margin to the top */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin-top</code> property to 20
        pixels, creating 20 pixels of space between the element and the top edge
        of its container or the top edge of the page. This is useful when you
        want to add extra space above the element, such as adding separation
        between a heading and the content below it.
      </p>

      <h2>Margin Right</h2>
      <p>
        The <code>margin-right</code>{" "}
        {` property allows you to add margin
        specifically to the right side of an element. This creates space between
        the element and the right edge of its container or the right edge of the
        page. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin-right: 15px; /* Adds 15px of margin to the right */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin-right</code> property to 15
        pixels, creating 15 pixels of space between the element and the right
        edge of its container or the right edge of the page. This is useful when
        you want to add extra space to the right of the element, such as
        creating a margin between the element and other elements on the right
        side.
      </p>

      <h2>Margin Bottom</h2>
      <p>
        The <code>margin-bottom</code> property allows you to add margin
        specifically to the bottom side of an element. This creates space
        between the element and the bottom edge of its container or the bottom
        edge of the page. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin-bottom: 10px; /* Adds 10px of margin to the bottom */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin-bottom</code> property to 10
        pixels, creating 10 pixels of space between the element and the bottom
        edge of its container or the bottom edge of the page. This is useful
        when you want to add extra space below the element, such as creating
        separation between paragraphs or adding emphasis to a specific element.
      </p>

      <h2>Margin Left</h2>
      <p>
        The <code>margin-left</code>{" "}
        {` property allows you to add margin
        specifically to the left side of an element. This creates space between
        the element and the left edge of its container or the left edge of the
        page. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin-left: 25px; /* Adds 25px of margin to the left */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin-left</code> property to 25
        pixels, creating 25 pixels of space between the element and the left
        edge of its container or the left edge of the page. This is useful when
        you want to add extra space to the left of the element, such as creating
        a margin between the element and other elements on the left side.
      </p>

      <h2>Margin Shorthand</h2>
      <p>
        {`CSS provides a shorthand property for margins that allows you to specify
        margins for multiple sides in a single declaration. This shorthand
        property follows the order of top, right, bottom, and left (TRBL).
        Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin: 10px 20px; /* Adds 10px of margin to the top and bottom, and 20px of margin to the left and right */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used the <code>margin</code> shorthand property to
        set 10 pixels of margin for the top and bottom sides and 20 pixels of
        margin for the left and right sides of the div element. This shorthand
        property makes your code more concise and easier to read. You can also
        use different values for each side, such as{" "}
        <code>margin: 10px 20px 15px 30px</code>, to set margins for each side
        individually.
      </p>

      <h2>Negative Margins</h2>
      <p>
        {`Margins can also be negative, allowing you to overlap elements or create
        unique layouts. Negative margins move elements closer to each other or
        to the edges of the page. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin: -10px; /* Moves the element 10px closer to its neighboring elements or the edges of the page */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin</code> property to -10
        pixels, moving the element 10 pixels closer to its neighboring elements
        or the edges of the page. Negative margins can be useful for creating
        overlapping effects or achieving specific layout designs. Just be
        cautious when using negative margins, as they can sometimes lead to
        unexpected layout issues.
      </p>

      <h2>Percentages for Margins</h2>
      <p>
        {`You can also use percentages to set margin values. Percentages are
        relative to the width of the parent element. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  margin: 5%; /* Adds 5% of the parent's width as margin */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>margin</code>{" "}
        {` property to 5%,
        creating margins that are relative to the width of the parent element.
        For example, if the parent element has a width of 400 pixels, the margin
        will be 20 pixels on each side (5% of 400). This dynamic margin can be
        useful when you want the margins to scale proportionally with the parent
        element's size.`}
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of
        margins:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your margin experiments.
        </li>
        <li>
          Apply margins to individual sides of an element and observe how it
          affects the spacing around the element. Try using different values to
          see the impact on the layout.
        </li>
        <li>
          Experiment with different margin values, both in pixels and
          percentages, to find the perfect spacing for your designs. Play with
          larger and smaller values to see how they affect the overall
          appearance.
        </li>
        <li>
          Try using the shorthand property to set margins for multiple sides in
          a concise manner. Observe how the different values affect the spacing
          on each side.
        </li>
        <li>
          Observe how margins affect the overall layout and spacing of your
          designs. Notice how adding or removing margins can change the visual
          hierarchy and relationships between elements.
        </li>
        <li>
          Refer to margin resources and tutorials to discover creative ways to
          use margins to enhance the layout, spacing, and visual hierarchy of
          your designs.
        </li>
      </ol>

      <p>
        Remember, margins play a crucial role in creating visually appealing and
        user-friendly designs. They help create breathing room between elements,
        improve readability, and add a sense of balance to your layouts. Choose
        margin values that align with your brand and enhance the overall user
        experience. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/paddingMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/widthMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Margin;
export const Width = () => {
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

      <div className="button-container">
        <button onClick={() => (window.location.href = "/marginMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/heightMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
