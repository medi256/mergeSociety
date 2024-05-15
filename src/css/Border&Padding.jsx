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
      <h1>The Magical World of Padding in CSS</h1>
      <p>
        {`Padding is like a clear space around the content of your boxes (like
        buttons or text). It's like adding a soft cushion that separates the
        content from the border. Padding makes things easier to read, gives your
        design a balanced look, and creates a better experience for people using
        your website. In this section, we'll dive into padding in CSS and show
        you how to use it to style your elements!`}
      </p>
      <h2>Padding Property</h2>
      <p>
        The <code>{` padding`}</code> property in CSS lets you control the space
        around the content inside your boxes (like buttons or text). You can add
        padding to just one side (top, right, bottom, left) or all sides at
        once. {`Here's an`}
        example:
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding: 10px; /* Adds 10px of padding to all sides */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding</code> property to 10
        pixels, creating a uniform padding of 10 pixels around the content of
        the div element. This means that there will be 10 pixels of space
        between the content and the border on all four sides of the element.
      </p>

      <h2>Padding Top</h2>
      <p>
        Imagine the content inside your box (like a button) has a little room
        above it. The <code>{`padding-top`}</code> property lets you control the
        size of that space. This pushes the content down and creates more
        breathing room at the top.{" "}
        {` Here's an example to show you how it works:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding-top: 20px; /* Adds 20px of padding to the top */

}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding-top</code>{" "}
        {`property to 20
        pixels, creating 20 pixels of space between the content and the top edge of
        the element's border. This is useful when you want to add extra space
        above the content, such as adding breathing room to a heading or
        separating it from other elements.`}
      </p>

      <h2>Padding Right</h2>
      <p>
        The <code>{`padding-right`}</code> property lets you add space
        specifically to the right side of your box (like a button or text).
        Imagine a clear area to the right of the content, separating it from the
        border. This property controls the size of that space.{" "}
        {`Here's an example to see it in action:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding-right: 15px; /* Adds 15px of padding to the right */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding-right</code>{" "}
        {`property to 15
        pixels, creating 15 pixels of space between the content and the right edge
        of the element's border. This is useful when you want to add extra space to
        the right of the content, such as creating a margin between text and other
        elements on the right side.`}
      </p>

      <h2>Padding Bottom</h2>
      <p>
        The <code>{`padding-bottom`}</code> property lets you control the space
        at the bottom of your box (like a button or text). Imagine a little
        extra space below the content, separating it from the bottom border.
        This property lets you adjust the size of that space.{" "}
        {`Here's an example to see it work:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding-bottom: 10px; /* Adds 10px of padding to the bottom */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding-bottom</code>{" "}
        {` property to 10
        pixels, creating 10 pixels of space between the content and the bottom edge
        of the element's border. This is useful when you want to add extra space
        below the content, such as creating separation between paragraphs or
        adding emphasis to a specific element.`}
      </p>

      <h2>Padding Left</h2>
      <p>
        The <code>{`padding-left`}</code> property lets you control the space on
        the left side of your box (like a button or text). Imagine a clear area
        to the left of the content, separating it from the border. This property
        controls the size of that space.{" "}
        {` Here's an example to see it in action:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding-left: 25px; /* Adds 25px of padding to the left */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding-left</code>{" "}
        {` property to 25 pixels,
        creating 25 pixels of space between the content and the left edge of the
        element's border. This is useful when you want to add extra space to the
        left of the content, such as creating a margin between text and other
        elements on the left side.`}
      </p>

      <h2>Padding Shorthand</h2>
      <p>
        {`In CSS, you can also set padding for all sides at once using a shortcut.
        Imagine your box (like a button) has four sides: top, right, bottom, and
        left. This shortcut lets you control the padding for all those sides in
        one line of code, following the order top, right, bottom, left (think
        TRBL for short!). Here's an example to show you how it works:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding: 10px 20px; /* Adds 10px of padding to the top and bottom, and 20px of padding to the left and right */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used the <code>padding</code> shorthand property
        to set 10 pixels of padding for the top and bottom sides and 20 pixels
        of padding for the left and right sides of the div element. This
        shorthand property makes your code more concise and easier to read. You
        can also use different values for each side, such as{" "}
        <code>padding: 10px 20px 15px 30px</code>, to set padding for each side
        individually.
      </p>

      <h2>Percentages for Padding</h2>
      <p>
        {`You can also use percentages to set padding values. Percentages are relative
        to the width of the parent element. This means that the padding will adjust
        dynamically based on the size of the parent element. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  padding: 5%; /* Adds 5% of the parent's width as padding */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>padding</code>{" "}
        {` property to 5%, creating
        padding that is relative to the width of the parent element. For example, if
        the parent element has a width of 400 pixels, the padding will be 20
        pixels on each side (5% of 400). This dynamic padding can be useful when
        you want the padding to scale proportionally with the parent element's
        size.`}
      </p>

      <h2>Practice Time!</h2>
      <p>
        {` Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of padding:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your padding experiments.
        </li>
        <li>
          Apply padding to individual sides of an element and observe how it
          affects the spacing around the content. Try using different values to
          see the impact on the layout.
        </li>
        <li>
          Experiment with different padding values, both in pixels and
          percentages, to find the perfect balance for your designs. Play with
          larger and smaller values to see how they affect the overall
          appearance.
        </li>
        <li>
          Try using the shorthand property to set padding for multiple sides in
          a concise manner. Observe how the different values affect the spacing
          on each side.
        </li>
        <li>
          Observe how padding affects the overall layout and spacing of your
          designs. Notice how adding or removing padding can change the visual
          hierarchy and readability of your content.
        </li>
        <li>
          Refer to padding resources and tutorials to discover creative ways to
          use padding to enhance the readability, visual balance, and user
          experience of your designs.
        </li>
      </ol>

      <p>
        Remember, padding is a powerful tool in web design. It helps create
        breathing room for your content, improves readability, and adds a sense
        of refinement to your designs. Choose padding values that align with
        your brand and enhance the overall user experience. Happy coding and
        happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "border")}>back</button>
        <button onClick={() => (window.location.href = "margin")}>Next</button>
      </div>
    </div>
  );
};
