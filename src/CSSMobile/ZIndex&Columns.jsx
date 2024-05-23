const ZIndex = () => {
  return (
    <div className="comments-container">
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
      <h1>CSS Columns Tutorial</h1>
      <p>
        In this tutorial, you will learn how to create multi-column layouts
        using CSS columns.
      </p>

      <h2>Introduction</h2>
      <ul>
        <li>
          CSS columns allow you to divide a {`container's`} content into
          multiple columns.
        </li>
        <li>
          This can be useful for creating magazine-style layouts, menus, or any
          content that benefits from a multi-column format.
        </li>
      </ul>

      <h2>Syntax:</h2>
      <p>
        The <code>column-count</code> property specifies the number of columns
        an element should be divided into.
      </p>
      <pre>
        <code>
          {`
       .example {
         column-count: 3;
       }`}
        </code>
      </pre>

      <p>
        The <code>column-width</code> property specifies the width of the
        columns.
      </p>
      <pre>
        <code>
          {`
      .example {
        column-width: 200px;
      }`}
        </code>
      </pre>

      <p>
        The <code>column-gap</code> property specifies the gap between the
        columns.
      </p>
      <pre>
        <code>
          {`
      .example {
        column-gap: 20px;
      }`}
        </code>
      </pre>

      <h2>Examples</h2>
      <ul>
        <li>
          <strong>Equal Width Columns:</strong>
          <p>This example divides content into three equal-width columns.</p>
          <pre>
            <code>
              {`
  <div style={{ columnCount: 3, columnGap: '20px' }}>
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Column 1</div>
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Column 2</div>
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Column 3</div>
  </div>
              `}
            </code>
          </pre>
          <div style={{ columnCount: 3, columnGap: "20px" }}>
            <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
              Column 1
            </div>
            <br />
            <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
              Column 2
            </div>
            <br />
            <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
              Column 3
            </div>
          </div>
        </li>
        <li>
          <strong>Fixed Width Columns:</strong>
          <p>This example sets fixed-width columns with a gap between them.</p>
          <pre>
            <code>
              {`
  <div style={{ columnWidth: '200px', columnGap: '20px' }}>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Column 1</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Column 2</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Column 3</div>
  </div>
              `}
            </code>
          </pre>
          <div style={{ columnWidth: "200px", columnGap: "20px" }}>
            <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
              Column 1
            </div>
            <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
              Column 2
            </div>
            <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
              Column 3
            </div>
          </div>
        </li>
        <li>
          <strong>Responsive Columns:</strong>
          <p>
            This example uses media queries to create a responsive layout with
            different column counts based on screen size.
          </p>
          <pre>
            <code>
              {`
  <div>
    <div style={{ columnCount: 1 }}>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 1</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 2</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 3</div>
    </div>
  
    <div style={{ '@media (minWidth: 768px)': { columnCount: 2 } }}>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 1</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 2</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 3</div>
    </div>
  
    <div style={{ '@media (minWidth: 1024px)': { columnCount: 3 } }}>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 1</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 2</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Column 3</div>
    </div>
  </div>
              `}
            </code>
          </pre>
          <div>
            <div style={{ columnCount: 1 }}>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 1
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 2
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 3
              </div>
            </div>

            <div style={{ "@media (minWidth: 768px)": { columnCount: 2 } }}>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 1
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 2
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 3
              </div>
            </div>

            <div style={{ "@media (minWidth: 1024px)": { columnCount: 3 } }}>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 1
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 2
              </div>
              <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
                Column 3
              </div>
            </div>
          </div>
        </li>
      </ul>

      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns">
          MDN Web Docs
        </a>{" "}
        on CSS columns.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/zIndexMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/overFlowMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
