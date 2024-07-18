import { InArticleAdUnit } from "../AdUnit";

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
        {`Non-positioned elements are those with the default position value of
        "static", while positioned elements have any other position value (e.g.,
        "absolute", "relative", "sticky", or "fixed").`}
      </p>

      <h4>HTML:</h4>
      <pre>
        <code>
          {`
<!-- Example HTML -->
<div class="pink">
  <div class="orange"></div>
</div>
<div class="blue"></div>
<div class="green"></div>
</code></pre>

<h4>CSS:</h4>
<pre><code>
/* Example CSS */
.blue, .pink, .orange {
  position: absolute; /* Positioning required for z-index */
}`}
        </code>
      </pre>
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
      <pre>
        <code>
          {`
  /* Example CSS */
  .blue { z-index: 2; }
  .orange { z-index: 3; }
  .green { z-index: 100; /* has no effect */ }
          `}
        </code>
      </pre>
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
      <pre>
        <code>
          {`
  <!-- Example HTML -->
  <div class="pink">
    <div class="orange"></div>
  </div>
  <div class="blue"></div>
  <div class="purple"></div>
  <div class="green"></div>
          `}
        </code>
      </pre>
      <h4>CSS:</h4>
      <pre>
        <code>
          {`
  /* Example CSS */
  .blue, .pink, .orange, .purple {
    position: absolute; /* Positioning required for z-index */
  }
  .purple { z-index: 0; }
  .pink { z-index: 1; }
  .blue { z-index: 2; }
  .orange { z-index: 3; }
  .green { z-index: 100; }
          `}
        </code>
      </pre>
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
      <pre>
        <code>
          {`
  <!-- Example HTML -->
  <div class="pink">
    <div class="orange"></div>
  </div>
  <div class="blue"></div>
  <div class="green"></div>
          `}
        </code>
      </pre>
      <h4>CSS:</h4>
      <pre>
        <code>
          {`
  /* Example CSS */
  .blue, .pink, .orange {
    position: absolute; /* Positioning required for z-index */
  }
  .pink { filter: hue-rotate(20deg); }
  .blue { z-index: 2; }
  .orange { z-index: 3; }
  .green { z-index: 100; }
          `}
        </code>
      </pre>
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
        {`Now it's your turn to put your knowledge into practice! In this
        exercise, you will create a layered design using z-index and explore the
        impact of stacking contexts.`}
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
        <button onClick={() => (window.location.href = "position")}>
          back
        </button>
        <button onClick={() => (window.location.href = "columns")}>Next</button>
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
        {`Columns are a powerful tool in CSS that allow you to create visually appealing and
        structured layouts. They give your designs a magazine-like feel, making your content
        stand out and easier to read. In this section, we'll explore the fascinating world of
        columns and learn how to use them effectively in your CSS designs. Let's embark on this
        column adventure!`}
      </p>

      <h2>Understanding Columns</h2>
      <p>
        {`Columns are a CSS property that allows you to divide an element's content into
        multiple vertical columns. They are commonly used to create layouts that resemble
        magazine articles or newspaper columns. By using columns, you can present your content
        in a structured and visually appealing way. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.columns {
  columns: 3; /* Creates three columns within the element */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>columns</code> property to{" "}
        <code>3</code>, which means the content within the element will be
        divided into three equal columns. You can adjust the number of columns
        to create the desired layout.
      </p>

      <h2>Using Columns</h2>
      <p>
        {`Columns can be used in various ways to create beautiful and functional designs. Let's
        explore some common use cases for columns:`}
      </p>

      <h3>Magazine-Style Layouts</h3>
      <p>
        {`Columns are perfect for creating magazine-style layouts. They give your designs a
        sophisticated and professional look. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.magazine-layout {
  columns: 2; /* Creates two columns for the content */
  column-gap: 20px; /* Adds a gap between the columns */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>columns</code> property to{" "}
        <code>2</code>, creating two columns for the content. We also added a{" "}
        <code>column-gap</code> to create a visually appealing gap between the
        columns.
      </p>

      <h3>Unequal Columns</h3>
      <p>
        You can create columns with unequal widths by using the{" "}
        <code>column-width</code>
        property. This allows you to specify the exact width of each column.{" "}
        {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.unequal-columns {
  column-width: 200px 300px; /* Creates two columns with unequal widths */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>column-width</code> property to{" "}
        <code>200px 300px</code>, creating two columns with unequal widths. You
        can adjust the values to achieve the desired layout.
      </p>

      <h3>Applying Styles to Columns</h3>
      <p>
        {`You can apply styles to individual columns within a multi-column layout. This allows you
        to highlight specific columns or create unique designs. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.columns {
  columns: 3;
}

.column:nth-child(2) {
  background-color: #f0f0f0; /* Adds a background color to the second column */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we applied a background color to the second column
        using the
        <code>:nth-child()</code> pseudo-class. You can use this technique to
        style specific columns within your layout.
      </p>

      <h2>Benefits of Columns</h2>
      <p>Using columns offers several advantages for your designs:</p>

      <ul>
        <li>
          <strong>Visual Appeal:</strong> Columns add a professional and
          polished look to your designs, making your content stand out and
          creating a magazine-like feel.
        </li>
        <li>
          <strong>Layout Flexibility:</strong> Columns allow you to present
          content in a structured and organized manner, making it easier for
          users to scan and digest information.
        </li>
        <li>
          <strong>Content Presentation:</strong> Columns help you present
          content in a visually appealing way, making it easier for users to
          focus on specific sections or articles.
        </li>
      </ul>

      <h2>Challenges of Columns</h2>
      <p>While columns are powerful, they also come with some challenges:</p>

      <ul>
        <li>
          <strong>Content Overflow:</strong> If the content within a column is
          too long, it may overflow and overlap with the next column. This can
          be addressed by setting a specific height for the columns or using the{" "}
          <code>column-fill</code> property.
        </li>
        <li>
          <strong>Browser Compatibility:</strong>{" "}
          {`Columns may not be supported in older
          browsers, so it's important to test your designs across different browsers to
          ensure compatibility.`}
        </li>
      </ul>
      <InArticleAdUnit />
      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of columns:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with containers and content to serve as
          containers for your column experiments.
        </li>
        <li>
          Apply the <code>columns</code> property to elements and observe how
          the content is divided into multiple columns. Try using different
          column counts to create varied layouts.
        </li>
        <li>
          Experiment with the <code>column-gap</code> property to add spacing
          between columns, creating a visually appealing layout.
        </li>
        <li>
          Refer to columns resources and tutorials to discover creative ways to
          use columns, such as creating magazine-style layouts, applying styles
          to individual columns, or managing content overflow.
        </li>
      </ol>

      <p>
        Remember, columns are a powerful tool in CSS that allow you to create
        visually appealing and functional designs. Choose column options that
        align with your design goals, ensure responsiveness, and create engaging
        interfaces. Happy coding and happy designing!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "Zindex")}>back</button>
        <button onClick={() => (window.location.href = "overflow")}>
          Next
        </button>
      </div>
    </div>
  );
};
