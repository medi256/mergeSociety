import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: " Borders in CSS - Style Your Elements with Elegance",
  description:
    "Explore how to use borders in CSS to create visual hierarchies, enhance your web design, and improve user experience with styles like solid, dashed, and more.",
  keywords: [
    "CSS",
    "borders in CSS",
    "CSS border styles",
    "web design",
    "border-radius",
    "border-color",
    "web development",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-borders",
  },
  openGraph: {
    title: "The Magical World of Borders in CSS",
    description:
      "Learn how to style elements with borders in CSS, including various border styles, widths, colors, and rounded corners.",
  },
};

const CSSBorders = () => {
  return (
    <div className="lesson-container">
      <h1>Borders in CSS - Style Your Elements with Elegance</h1>
      <p>
        Borders are like the frames that enclose your web designs, adding
        structure, emphasis, and visual appeal to your elements. They can
        transform the appearance of your designs, create visual hierarchies, and
        enhance the overall user experience. In this section, we'll explore the
        fascinating world of borders in CSS and learn how to style your elements
        with elegance and creativity. Let's embark on this border adventure!
      </p>

      <h2>Border Style</h2>
      <p>
        The <code>border-style</code> property allows you to specify the style
        of the border around an element. You can choose from a variety of border
        styles, including <code>solid</code>, <code>dashed</code>,
        <code>dotted</code>, <code>double</code>, and more. Here's an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  border-style: solid;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we set the <code>border-style</code> property to
        <code>solid</code>, creating a solid border around the div element. The
        solid border style is the most commonly used and provides a clean,
        continuous line around the element. However, you can experiment with
        different border styles to add variety and visual interest to your
        designs.
      </p>
      <h3>Here is a table of values and their description</h3>
      <table border="1">
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
              The same as 'none', except in terms of border conflict resolution
              for table elements
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Border Width</h2>
      <p>
        The <code>border-width</code> property allows you to adjust the
        thickness of the border. You can use specific values, such as{" "}
        <code>thin</code>,<code>medium</code>, <code>thick</code>, or numeric
        values (in pixels). Here's an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  border-width: 2px;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

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

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  border-color: #336699; /* Dark blue */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

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
        <code>50%</code>. Here's an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  border-radius: 5px;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

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
        shorthand property includes the border style, width, and color. Here's
        an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  border: 1px solid red; /* Border width, style, and color */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

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
        Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of
        borders:
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

      <Button whereToGo={"css-padding"} />
    </div>
  );
};

export default CSSBorders;
