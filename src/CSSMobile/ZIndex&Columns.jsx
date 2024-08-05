import { InArticleAdUnit } from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ZIndex = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>CSS Z-index</h1>
      <p>
        The z-index property in CSS controls the stacking order of elements on a
        webpage. Elements with a higher z-index value are displayed in front of
        those with a lower z-index value.
      </p>

      <h3>Default Stacking Order</h3>
      <p>By default, elements are stacked in the following order:</p>
      <ol>
        <li>Root element (the &lt;html&gt; element)</li>
        <li>Non-positioned elements in the order they are defined</li>
        <li>Positioned elements in the order they are defined</li>
      </ol>
      <p>
        Non-positioned elements are those with the default position value of
        "static", while positioned elements have any other position value (e.g.,
        "absolute", "relative", "sticky", or "fixed").
      </p>

      <h4>HTML:</h4>
      <SyntaxHighlighter language="html" style={docco}>
        {`<!-- Example HTML -->
<div class="pink">
  <div class="orange"></div>
</div>
<div class="blue"></div>
<div class="green"></div>`}
      </SyntaxHighlighter>

      <h4>CSS:</h4>
      <SyntaxHighlighter language="css" style={docco}>
        {`/* Example CSS */
.blue, .pink, .orange {
  position: absolute; /* Positioning required for z-index */
}`}
      </SyntaxHighlighter>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712405096/posi_fedygu.png"
        alt="demo-7"
      />

      <p>
        Even though the green box is defined last in the document, it appears
        behind the others because it is non-positioned.
      </p>
      <h3>Stacking with Z-index</h3>
      <p>
        To change the stacking order of elements, we can use the z-index
        property. An element with a higher z-index will be displayed in front of
        an element with a lower z-index. However, z-index only works with
        positioned elements.
      </p>
      <SyntaxHighlighter language="css" style={docco}>
        {`/* Example CSS */
.blue { z-index: 2; }
.orange { z-index: 3; }
.green { z-index: 100; /* has no effect */ }`}
      </SyntaxHighlighter>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712405160/zDemo_tatecd.png"
        alt="demo-8"
      />
      <p>
        The orange box, with a higher z-index, is displayed in front of the blue
        box.
      </p>
      <h3>Stacking Context</h3>
      <p>
        Adding a z-index value to an element creates a stacking context,
        affecting how its child elements are displayed.
      </p>
      <h4>HTML:</h4>
      <SyntaxHighlighter language="html" style={docco}>
        {`<!-- Example HTML -->
<div class="pink">
  <div class="orange"></div>
</div>
<div class="blue"></div>
<div class="purple"></div>
<div class="green"></div>`}
      </SyntaxHighlighter>

      <h4>CSS:</h4>
      <SyntaxHighlighter language="css" style={docco}>
        {`/* Example CSS */
.blue, .pink, .orange, .purple {
  position: absolute; /* Positioning required for z-index */
}
.purple { z-index: 0; }
.pink { z-index: 1; }
.blue { z-index: 2; }
.orange { z-index: 3; }
.green { z-index: 100; }`}
      </SyntaxHighlighter>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712405233/stackDemo_x5h870.png"
        alt="demo-9"
      />
      <p>
        The pink box is displayed in front of the purple box. However, the
        orange box, even with a higher z-index, is behind the blue one because
        they are in different stacking contexts.
      </p>
      <p>
        Stacking contexts are formed not only by z-index but also by other
        properties like filter, opacity, and transform.
      </p>
      <h4>HTML:</h4>
      <SyntaxHighlighter language="html" style={docco}>
        {`<!-- Example HTML -->
<div class="pink">
  <div class="orange"></div>
</div>
<div class="blue"></div>
<div class="green"></div>`}
      </SyntaxHighlighter>
      <h4>CSS:</h4>
      <SyntaxHighlighter language="css" style={docco}>
        {`/* Example CSS */
.blue, .pink, .orange {
  position: absolute; /* Positioning required for z-index */
}
.pink { filter: hue-rotate(20deg); }
.blue { z-index: 2; }
.orange { z-index: 3; }
.green { z-index: 100; }`}
      </SyntaxHighlighter>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712405317/stack3_mwtsnf.png"
        alt="demo-12"
      />
      <p>
        The orange box still has a higher z-index than the blue one but is
        displayed behind it because the filter property caused the pink box to
        form a new stacking context.
      </p>
      <InArticleAdUnit />
      <h2>Exercise: Layering and Stacking Challenge</h2>
      <p>
        Now it's your turn to put your knowledge into practice! In this
        exercise, you will create a layered design using z-index and explore the
        impact of stacking contexts.
      </p>
      <ol>
        <li>
          Create a simple HTML structure with multiple div elements representing
          different layers of your design.
        </li>
        <li>
          Apply positioning (e.g., absolute, relative) and z-index values to
          create a layered effect.
        </li>
        <li>
          Experiment with different z-index values to change the stacking order
          and observe how the layers overlap.
        </li>
        <li>
          Create a visually appealing composition by playing with colors, sizes,
          and positioning.
        </li>
        <li>
          Challenge yourself by creating a complex design with multiple stacking
          contexts and overlapping elements.
        </li>
      </ol>
      <p>
        Remember to refer to the concepts and examples covered in this tutorial
        as you work through the exercise. Happy coding and have fun exploring
        the world of layering and stacking!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/positionMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/columnMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ZIndex;

export const Columns = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>The Magical World of Columns in CSS</h1>
      <p>
        Columns are a powerful tool in CSS that allow you to create visually
        appealing and structured layouts. They give your designs a magazine-like
        feel, making your content stand out and easier to read. In this section,
        we'll explore the fascinating world of columns and learn how to use them
        effectively in your CSS designs. Let's embark on this column adventure!
      </p>

      <h2>Understanding Columns</h2>
      <p>
        Columns are a CSS property that allows you to divide an element's
        content into multiple vertical columns. They are commonly used to create
        layouts that resemble magazine articles or newspaper columns. By using
        columns, you can present your content in a structured and visually
        appealing way. Here's an example:
      </p>

      <SyntaxHighlighter language="css" style={docco}>
        {`.columns {
  columns: 3; /* Creates three columns within the element */
}`}
      </SyntaxHighlighter>

      <p>
        In the code above, we set the <code>columns</code> property to{" "}
        <code>3</code>, which means the content within the element will be
        divided into three equal columns. You can adjust the number of columns
        to create the desired layout.
      </p>

      <h2>Using Columns</h2>
      <p>
        Columns can be used in various ways to create beautiful and functional
        designs. Let's explore some common use cases for columns:
      </p>

      <h3>Magazine-Style Layouts</h3>
      <p>
        Columns are often used in magazine-style layouts to present text and
        images in an organized and visually appealing manner. By dividing the
        content into multiple columns, you can create a sophisticated and
        professional look. Here's an example:
      </p>

      <SyntaxHighlighter language="css" style={docco}>
        {`.magazine-layout {
  columns: 2; /* Creates two columns within the element */
}`}
      </SyntaxHighlighter>

      <h3>Grid-Based Layouts</h3>
      <p>
        Columns can also be used to create grid-based layouts, where elements
        are arranged in a grid pattern. This technique is commonly used in web
        design to create responsive and visually appealing layouts. Here's an
        example:
      </p>

      <SyntaxHighlighter language="css" style={docco}>
        {`.grid-layout {
  columns: 4; /* Creates four columns within the element */
}`}
      </SyntaxHighlighter>

      <h2>Column Width and Gaps</h2>
      <p>
        When working with columns, you can also specify the width of each column
        and the gap between columns. This allows you to control the layout and
        spacing of your columns more precisely. Here's an example:
      </p>

      <SyntaxHighlighter language="css" style={docco}>
        {`.columns {
  columns: 3; /* Creates three columns within the element */
  column-width: 200px; /* Sets the width of each column */
  column-gap: 20px; /* Sets the gap between columns */
}`}
      </SyntaxHighlighter>

      <p>
        In the code above, we set the <code>column-width</code> property to{" "}
        <code>200px</code>, which means each column will have a width of{" "}
        <code>200px</code>. We also set the <code>column-gap</code> property to{" "}
        <code>20px</code>, which adds a gap of <code>20px</code> between each
        column.
      </p>

      <h2>Conclusion</h2>
      <p>
        Columns are a powerful tool in CSS that allow you to create visually
        appealing and structured layouts. By dividing your content into multiple
        columns, you can create magazine-style layouts, grid-based designs, and
        more. Experiment with different column configurations to find the
        perfect layout for your website. Embrace the magic of columns and take
        your designs to the next level!
      </p>

      <InArticleAdUnit />

      <div className="button-container">
        <button onClick={() => (window.location.href = "/zIndexMob")}>
          Back
        </button>
        <button onClick={() => (window.location.href = "/overFlowMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
