const AttributeS = () => {
  return (
    <div className="comments-container">
      <h1>Understanding Attribute Selectors in CSS</h1>
      <p>Welcome to our lesson on Attribute Selectors in CSS!</p>
      <h2>What are Attribute Selectors?</h2>
      <p>
        Attribute selectors in CSS allow you to target HTML elements based on
        their attributes and attribute values.
      </p>
      <h2>Syntax and Basic Usage</h2>
      <p>
        Attribute selectors have a variety of syntaxes, but the most common one
        is:
      </p>
      <pre>
        <code>
          {`
element[attribute="value"] {
  /* Styles applied to elements with specified attribute and value */
}
          `}
        </code>
      </pre>
      <p>
        For example, to target all anchor elements with a specific {`"target"`}
        attribute value, you can use:
      </p>
      <pre>
        <code>
          {`
a[target="_blank"] {
  /* Styles applied to anchor elements with target="_blank" */
}
          `}
        </code>
      </pre>
      <h2>Common Use Cases</h2>
      <p>
        {`Let's`} explore some common scenarios where attribute selectors can be
        useful:
      </p>
      <ul>
        <li>Styling links based on their target attribute</li>
        <li>
          Applying styles to form elements based on their type or required
          attributes
        </li>
        <li>Selecting elements with specific data attributes</li>
      </ul>
      <h2>Best Practices and Considerations</h2>
      <p>
        While attribute selectors provide powerful functionality, they should be
        used thoughtfully to maintain readability and avoid overly complex CSS.
      </p>
      <h2>Hands-On Practice</h2>
      <p>
        Now, {`let's`} practice using attribute selectors in a simple HTML
        document. Experiment with selecting and styling elements based on their
        attributes.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "universalS")}>
          back
        </button>
        <button onClick={() => (window.location.href = "transform")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AttributeS;

export const Transform = () => {
  return (
    <div className="comments-container">
      <h1>Understanding CSS Transform</h1>
      <p>
        The <code>transform</code> property in CSS allows you to modify the
        appearance and position of elements in 2D and 3D space. {`It's`} like
        having superpowers to manipulate objects on your webpage!
      </p>

      <h2>What is Transform?</h2>
      <p>
        With the <code>transform</code> property, you can apply various
        transformations to an element, such as scaling, rotating, skewing, and
        translating (moving) it. These transformations can be applied
        individually or combined to achieve complex effects.
      </p>

      <h2>Features of Transform</h2>

      <h3>2D and 3D Transformations</h3>
      <p>
        CSS Transform supports both 2D and 3D transformations. You can make
        elements appear flat or give them depth by manipulating them in 3D
        space.
      </p>

      <h3>Origin Point Control</h3>
      <p>
        You can specify the origin point around which the transformation occurs.
        This allows you to control where the transformation takes place relative
        to the element.
      </p>

      <h3>Chaining Transformations</h3>
      <p>
        Transformations can be chained together, allowing you to combine
        multiple transformations to create complex effects. For example, you can
        rotate an element and then scale it, or skew it and then translate it.
      </p>

      <h2>Benefits of Transform</h2>
      <p>
        Using the <code>transform</code> property provides a flexible and
        efficient way to manipulate elements on your webpage. {`It's`}{" "}
        particularly useful for creating interactive user interfaces,
        animations, and visual effects.
      </p>

      <h2>When to Use Transform</h2>
      <p>
        Transform is useful whenever you need to change the appearance or
        position of an element dynamically. You can use it to create animations,
        transform images, build interactive interfaces, and much more.
      </p>

      <h2>Transform Functions</h2>

      <h3>translate()</h3>
      <p>
        The <code>translate()</code> function moves an element along the X and Y
        axes. You can specify either one or both dimensions to translate the
        element horizontally and vertically.
      </p>
      <pre>
        <code>
          {`
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transform: translate(50px, 50px);
}`}
        </code>
      </pre>

      <h3>rotate()</h3>
      <p>
        The <code>rotate()</code> function rotates an element by a specified
        angle around a given point. You can rotate elements clockwise or
        counterclockwise in 2D or 3D space.
      </p>
      <pre>
        <code>
          {`
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transform: rotate(45deg);
}`}
        </code>
      </pre>

      <h3>scale()</h3>
      <p>
        The <code>scale()</code> function scales an element by a specified
        factor along the X and Y axes. You can make elements larger or smaller
        in 2D or 3D space.
      </p>
      <pre>
        <code>
          {`
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transform: scale(2, 1.5);
}`}
        </code>
      </pre>

      <h3>skew()</h3>
      <p>
        The <code>skew()</code> function skews an element along the X and Y axes
        by a specified angle. This creates a slanted effect, distorting the
        {`element's`} shape.
      </p>
      <pre>
        <code>
          {`
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transform: skew(30deg, 20deg);
}`}
        </code>
      </pre>

      <h3>matrix()</h3>
      <p>
        The <code>matrix()</code> function provides a way to apply arbitrary
        transformations using a 2D transformation matrix. This allows for
        complex transformations that cannot be achieved with the other functions
        alone.
      </p>
      <pre>
        <code>
          {`
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transform: matrix(1, 0.5, -0.5, 1, 0, 0);
}`}
        </code>
      </pre>

      <h2>Examples</h2>

      <h3>Translate Example</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transform: translate(50px, 50px);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Translate Example"
      ></iframe>

      <h3>Rotate Example</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transform: rotate(45deg);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Rotate Example"
      ></iframe>

      <h3>Scale Example</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transform: scale(2, 1.5);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Scale Example"
      ></iframe>

      <h3>Skew Example</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transform: skew(30deg, 20deg);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Skew Example"
      ></iframe>

      <h3>Matrix Example</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      transform: matrix(1, 0.5, -0.5, 1, 0, 0);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Matrix Example"
      ></iframe>

      <p>
        Experiment with these examples to see how different transformations
        affect the appearance of elements on your webpage!
      </p>

      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">
          MDN Web Docs
        </a>{" "}
        on CSS Transform.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "attributeS")}>
          back
        </button>
        <button onClick={() => (window.location.href = "transition")}>
          Next
        </button>
      </div>
    </div>
  );
};
