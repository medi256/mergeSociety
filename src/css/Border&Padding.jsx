const Border = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Borders in CSS</h1>
      <p>
        {`Borders are like the frames that enclose your web designs, adding structure,
        emphasis, and visual appeal to your elements. They can transform the
        appearance of your designs, create visual hierarchies, and enhance the
        overall user experience. In this section, we'll explore the fascinating
        world of borders in CSS and learn how to style your elements with
        elegance and creativity. Let's embark on this border adventure!`}
      </p>

      <h2>Border Style</h2>
      <p>
        The <code>border-style</code> property allows you to specify the style
        of the border around an element. You can choose from a variety of border
        styles, including <code>solid</code>, <code>dashed</code>,
        <code>dotted</code>, <code>double</code>, and more.{" "}
        {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  border-style: solid;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>border-style</code> property to
        <code>solid</code>, creating a solid border around the div element. The
        solid border style is the most commonly used and provides a clean,
        continuous line around the element. However, you can experiment with
        different border styles to add variety and visual interest to your
        designs.
      </p>
      <h3>Here is a table of values and their description</h3>
      <table border="1" style={{ borderCollapse: "collapse", padding: "20px" }}>
        <thead>
          <tr>
            <th>Border Style Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dotted</td>
            <td>A series of round dots</td>
          </tr>
          <tr>
            <td>dashed</td>
            <td>A series of short dashes</td>
          </tr>
          <tr>
            <td>solid</td>
            <td>A single solid line</td>
          </tr>
          <tr>
            <td>double</td>
            <td>Two parallel solid lines</td>
          </tr>
          <tr>
            <td>groove</td>
            <td>A 3D grooved effect</td>
          </tr>
          <tr>
            <td>ridge</td>
            <td>A 3D ridged effect</td>
          </tr>
          <tr>
            <td>inset</td>
            <td>A 3D inset effect</td>
          </tr>
          <tr>
            <td>outset</td>
            <td>A 3D outset effect</td>
          </tr>
          <tr>
            <td>none</td>
            <td>No border</td>
          </tr>
          <tr>
            <td>hidden</td>
            <td>
              {`The same as 'none', except in terms of border conflict resolution
              for table elements`}
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Border Width</h2>
      <p>
        The <code>border-width</code> property allows you to adjust the
        thickness of the border. You can use specific values, such as{" "}
        <code>thin</code>,<code>medium</code>, <code>thick</code>, or numeric
        values (in pixels).
        {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  border-width: 2px;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>border-width</code> property to 2
        pixels, creating a border with a thickness of 2 pixels around the div
        element. You can adjust the border width to create subtle or bold
        borders, depending on the desired visual impact. Thicker borders can add
        emphasis to important elements, while thinner borders can provide a more
        delicate touch.
      </p>

      <h2>Border Color</h2>
      <p>
        The <code>border-color</code> property allows you to specify the color
        of the border. You can use color keywords, hexadecimal values, RGB
        values, or HSL values to set the border color. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  border-color: #336699; /* Dark blue */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>border-color</code> property to a
        dark blue color using a hexadecimal value. Hexadecimal values use a
        combination of letters and numbers to represent colors. For example,
        #336699 represents a shade of dark blue. You can also use color keywords
        like
        <code>red</code>, <code>blue</code>, or <code>green</code>.
        Additionally, you can specify colors using RGB values (red, green, blue)
        or HSL values (hue, saturation, lightness). Experiment with different
        color values to create borders that complement your designs and convey
        the desired emotions.
      </p>

      <h2>Border Radius</h2>
      <p>
        The <code>border-radius</code> property allows you to add rounded
        corners to your elements, creating a softer and more modern look. You
        can use specific values, such as <code>5px</code>, or percentages, such
        as
        <code>50%</code>. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  border-radius: 5px;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>border-radius</code> property to 5
        pixels, creating rounded corners on the div element. The border radius
        property affects all four corners of the element. You can adjust the
        border radius to create elements with different shapes, such as circles
        or ovals. For example, setting the border radius to 50% will create a
        circular shape. Play around with different values to achieve the desired
        level of curvature for your elements.
      </p>

      <h2>Border Shorthand</h2>
      <p>
        CSS provides a shorthand property called <code>border</code> that allows
        you to specify multiple border properties in a single declaration. This
        shorthand property includes the border style, width, and color.{" "}
        {` Here's
        an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  border: 1px solid red; /* Border width, style, and color */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used the <code>border</code> shorthand property to
        set the border width to 1 pixel, the border style to solid, and the
        border color to red. This shorthand property makes your code more
        concise and easier to read. You can also include the border radius in
        the shorthand property, like this:{" "}
        <code>border: 1px solid red; border-radius: 5px;</code>.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {` Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of borders:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your borders.
        </li>
        <li>
          Apply different border styles, such as solid, dashed, or dotted, and
          observe how they change the appearance of your designs.
        </li>
        <li>
          Experiment with border widths to create subtle or bold borders,
          depending on the desired visual impact.
        </li>
        <li>
          Play with border colors to create borders that complement your color
          scheme or add contrast to your designs.
        </li>
        <li>
          Adjust the border radius to create elements with rounded corners,
          circles, or ovals. Observe how the border radius affects the shape of
          your elements.
        </li>
        <li>
          Use the border shorthand property to set multiple border properties in
          a concise manner.
        </li>
        <li>
          Refer to border resources and tutorials to discover creative ways to
          use borders in your designs, such as creating unique shapes or adding
          decorative effects.
        </li>
      </ol>

      <p>
        Remember, borders play a crucial role in defining the structure,
        emphasis, and visual appeal of your designs. Choose border styles,
        widths, colors, and radii that align with your brand and enhance the
        user experience. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "comments")}>
          back
        </button>
        <button onClick={() => (window.location.href = "padding")}>Next</button>
      </div>
    </div>
  );
};

export default Border;

export const Padding = () => {
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

      <div className="button-container">
        <button onClick={() => (window.location.href = "border")}>back</button>
        <button onClick={() => (window.location.href = "margin")}>Next</button>
      </div>
    </div>
  );
};
