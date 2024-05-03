const Icon = () => {
  return (
    <div className="comments-container">
      <h1>Icons in CSS</h1>
      <p>
        We can enhance our HTML pages by adding icons using libraries such as
        Font Awesome, Bootstrap Icons, and Google Material Icons.
      </p>
      <p>
        To add icons, we use HTML inline elements such as {`<span> or <i>.`}
      </p>

      <h3>Font Awesome Icons</h3>
      <p>
        To use Font Awesome icons, we need to include the library in our HTML
        page using the <code>&lt;link&gt;</code> tag with its <code>href</code>
        attribute containing the URL of the library.
      </p>
      <p>
        The <code>&lt;link&gt;</code> tag should be placed inside the
        <code>&lt;head&gt;</code> element.
      </p>
      <p>
        Instead of manually typing the <code>&lt;link&gt;</code> tag, you can
        visit the Font Awesome website and copy the provided link into your
        <code>&lt;head&gt;</code> tag.
      </p>
      <h4>Font Awesome Link</h4>
      <p>
        <a href="https://www.cdnjs.com/libraries/font-awesome" target="_blank">
          Font Awesome CDN
        </a>
      </p>
      <p>
        After adding the link, visit the official Font Awesome website to
        explore available icons.
      </p>
      <h4>Font Awesome Icons</h4>
      <p>
        <a href="https://fontawesome.com/icons" target="_blank">
          Font Awesome Icons Gallery
        </a>
      </p>
      <p>
        To use an icon, click on it to see the code snippet, then copy and paste
        it into your HTML page.
      </p>
      <p>
        Ensure you include the Font Awesome link in your{" "}
        <code>&lt;head&gt;</code> element for the icons to display correctly.
      </p>
      <h4>Example Link Tag</h4>
      <pre>
        <code>
          {`
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
      `}
        </code>
      </pre>
      <h4>Example Icon Usage</h4>
      <pre>
        <code>
          {`
  <i class="fa-brands fa-facebook"></i>
          `}
        </code>
      </pre>

      <h3>Google Material Icons</h3>
      <p>
        Google Material Icons can be used similarly. Visit the Google Fonts
        website to explore available icons and obtain the link and icon codes.
      </p>
      <h4>Google Material Icons Link</h4>
      <p>
        <a href="https://fonts.google.com/icons" target="_blank">
          Google Material Icons
        </a>
      </p>

      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/" target="_blank">
          MDN Web Docs
        </a>{" "}
        on CSS Icons.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/imagesMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/floatMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Icon;

export const Float = () => {
  return (
    <div className="comments-container">
      <h1>Introduction to Floats in CSS</h1>
      <p>
        In CSS, the float property is used to align elements horizontally within
        their container. {`It's`} a fundamental tool for creating layouts,
        especially when you want elements to wrap around each other or align
        side by side. Imagine a magazine layout where text flows around images —
        {`that's`} the essence of what float does!
      </p>
      <h3>Basic Syntax:</h3>
      <pre>
        <code>
          {`
  .element {
    float: left | right | none | inherit;
  }
      `}
        </code>
      </pre>
      <ul>
        <li>left: The element floats to the left.</li>
        <li>right: The element floats to the right.</li>
        <li>none: The element does not float. This is the default value.</li>
        <li>
          inherit: The element inherits the float value from its parent element.
        </li>
      </ul>
      <h3>Example 1: Floating an Image</h3>
      <p>
        {`Let's`} say you have an image you want to float to the left of some
        text.
        {`Here's`} how you would do it:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
    <title>Floating an Image</title>
    <style>
        .image {
            float: left;
            margin-right: 10px; /* Optional: Add some spacing between the image and text */
        }
    </style>
</head>
<body>

<img src="example.jpg" alt="Example Image" class="image">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula 
ac quam mollis congue. Vestibulum id quam in mi tincidunt elementum vel at nunc.
</p>

</body>
</html>
      `}
        </code>
      </pre>
      <p>
        In this example, the float: left; property tells the image to float to
        the left of the text.
      </p>
      <h3> Example 2: Creating a Simple Layout</h3>
      <p>{`Let's`} say you want to create a basic two-column layout:</p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
    <title>Simple Layout</title>
    <style>
        .column {
            float: left;
            width: 50%; /* Each column takes up half of the container's width */
        }
    </style>
</head>
<body>

<div class="column">
    <h2>Column 1</h2>
    <p>This is the content of column 1.</p>
</div>

<div class="column">
    <h2>Column 2</h2>
    <p>This is the content of column 2.</p>
</div>

</body>
</html>
      `}
        </code>
      </pre>
      <p>
        Here, both .column elements are floated to the left, causing them to
        align side by side.
      </p>
      <p>
        The float property in CSS is a powerful tool for creating layouts and
        arranging elements horizontally. {`It's`} commonly used in combination
        with other CSS properties to achieve complex designs. Remember to use it
        wisely, as improper use can lead to unexpected layout issues. As you
        continue to practice and experiment, {`you'll`} become more comfortable
        with its nuances and possibilities!
      </p>
      <h2>The Clear Property</h2>
      <p>
        When {`you're`} floating elements, sometimes you need to ensure that an
        element {`doesn't`} float next to a floated element. This is where the
        clear property comes in handy.
      </p>
      <h2>Example: Clearing Floats</h2>
      <p>
        {`Let's`} say you have a container with two floated elements inside, and
        you want to insert a non-floated element below them. You would use the
        clear property to ensure it {`doesn't`} float alongside the other
        elements.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
    <title>Clearing Floats</title>
    <style>
        .float-left {
            float: left;
            width: 50%; /* Each column takes up half of the container's width */
        }
        .clear {
            clear: both;
        }
    </style>
</head>
<body>

<div class="float-left">
    <h2>Float Left</h2>
    <p>This is the content of the left floated element.</p>
</div>

<div class="float-left">
    <h2>Float Left</h2>
    <p>This is the content of the left floated element.</p>
</div>

<div class="clear">
    <h2>Clear</h2>
    <p>This is the non-floated element.</p>
</div>

</body>
</html>
      `}
        </code>
      </pre>
      <p>
        In this example, the .clear class is applied to the element we want to
        ensure does not float next to the floated elements. This causes it to
        move below them, effectively clearing the floats.
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Float.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/iconsMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/displayMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
