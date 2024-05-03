const Buttons = () => {
  return <div></div>;
};

export default Buttons;
export const Flex = () => {
  return (
    <div className="comments-container">
      <h1>Understanding Flexbox in CSS</h1>
      <p>
        Flexbox is a powerful layout tool in CSS that simplifies the creation of
        flexible and responsive layouts. {`It's`} like a magic box that helps
        you arrange elements easily!
      </p>

      <h2>What is Flexbox?</h2>
      <p>
        Flexbox, short for Flexible Box, is a layout model in CSS designed for
        one-dimensional layouts. In simpler terms, it helps you organize
        elements in either a row or a column, making it easier to create
        layouts.
      </p>

      <h2>Features of Flexbox Layout</h2>

      <h3>Flexible Container</h3>
      <p>
        When you use Flexbox, you turn a regular HTML container into a flexible
        one. This means the container and its contents can adjust their sizes
        automatically, making your layout adaptable to different screen sizes.
      </p>

      <h3>Flexible Items</h3>
      <p>
        Inside a Flexbox container, each element becomes a flexible item. You
        can control how these items grow, shrink, or align within the container,
        giving you precise control over your layout.
      </p>

      <h3>Direction Control</h3>
      <p>
        With Flexbox, you can decide whether your items should flow horizontally
        (in a row) or vertically (in a column). {`It's`} like choosing whether
        to read a book from left to right or from top to bottom.
      </p>

      <h3>Alignment Controls</h3>
      <p>
        Flexbox provides easy ways to align your items along both the main axis
        (the direction of flow) and the cross axis (the perpendicular
        direction). {`It's`} like arranging books neatly on a shelf.
      </p>

      <h2>Benefits of Flexbox</h2>
      <p>
        Using Flexbox makes your life as a web developer easier! It simplifies
        the process of creating layouts, reduces the need for complex CSS hacks,
        and ensures your design looks good on all devices.
      </p>

      <h2>When to Use Flexbox</h2>
      <p>
        Flexbox is perfect for creating layouts where elements need to be
        organized in a single direction (either horizontally or vertically). You
        can use it for things like navigation bars, card layouts, or even entire
        webpage structures.
      </p>

      <h2>Flexbox Properties</h2>

      <h3>flex-direction</h3>
      <p>
        This property lets you control the direction in which your items flow
        inside the container. You can choose whether they should go left to
        right, right to left, top to bottom, or bottom to top.
      </p>

      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      border: 1px solid black;
      flex-direction: column; /* Try changing to 'row' */
    }
    .flex-item {
      background-color: lightblue;
      margin: 5px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`}
        title="Flex-direction Example"
      ></iframe>

      <h3>justify-content</h3>
      <p>
        With <code>justify-content</code>, you can decide how your items should
        be spaced along the main axis of the container. {`It's`} like telling
        your items how to line up in a row or a column.
      </p>

      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      border: 1px solid black;
      justify-content: space-between; /* Try other values like 'center', 'flex-start', 'flex-end' */
    }
    .flex-item {
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`}
        title="Justify-content Example"
      ></iframe>

      <h3>align-items</h3>
      <p>
        This property helps you align your items along the cross axis of the
        container. {`It's`} like arranging your items neatly in the center or
        stretching them to fill the entire container.
      </p>

      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      border: 1px solid black;
      align-items: center; /* Try other values like 'flex-start', 'flex-end', 'baseline', 'stretch' */
    }
    .flex-item {
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`}
        title="Align-items Example"
      ></iframe>

      <h3>flex</h3>
      <p>
        The <code>flex</code> property is a shorthand for three other
        properties: <code>flex-grow</code>, <code>flex-shrink</code>, and{" "}
        <code>flex-basis</code>. {`It's`} like a shortcut for controlling how
        your items grow, shrink, and start sizing themselves.
      </p>

      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      border: 1px solid black;
    }
    .flex-item {
      background-color: lightblue;
      padding: 10px;
      flex: 1 1 100px; /* Try changing the values */
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`}
        title="Flex Example"
      ></iframe>

      <h3>align-self</h3>
      <p>
        Sometimes, you want an individual item to behave differently from the
        others. {`That's`} where <code>align-self</code> comes in handy. It lets
        you override the alignment set by <code>align-items</code> for specific
        items.
      </p>

      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      border: 1px solid black;
    }
    .flex-item {
      background-color: lightblue;
      padding: 10px;
    }
    .flex-item:nth-child(2) {
      align-self: flex-end; /* Try other values like 'flex-start', 'center', 'baseline', 'stretch' */
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`}
        title="Align-self Example"
      ></iframe>

      <h2>Conclusion</h2>
      <p>
        Flexbox is a fantastic tool for creating layouts in CSS. By
        understanding its features and properties, {`you'll`} be able to build
        beautiful and responsive designs with ease.
      </p>

      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">
          MDN Web Docs
        </a>{" "}
        on Flexbox.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/formMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/gridMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
