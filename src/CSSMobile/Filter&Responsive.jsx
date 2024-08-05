import { InArticleAdUnit } from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Filter = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Understanding CSS Filters</h1>
      <p>
        CSS filters allow you to apply visual effects to elements, such as
        blurring, grayscale, contrast adjustment, and more. {`They're`} like
        Instagram filters for your webpage!
      </p>

      <h2>What are CSS Filters?</h2>
      <p>
        CSS filters are a set of visual effects that can be applied to elements
        in your webpage to alter their appearance. These effects can be used to
        enhance images, create interesting backgrounds, and add a touch of
        creativity to your design.
      </p>

      <h2>Features of CSS Filters</h2>

      <h3>Wide Range of Effects</h3>
      <p>
        CSS filters offer a wide range of effects, including blur, grayscale,
        brightness, contrast, hue rotation, and more. You can combine multiple
        filters to create unique visual effects.
      </p>

      <h3>Easy to Apply</h3>
      <p>
        Applying CSS filters is simple and requires only a few lines of code.
        You can apply filters directly in your CSS stylesheet or inline within
        HTML elements.
      </p>

      <h3>Real-time Rendering</h3>
      <p>
        CSS filters are rendered in real-time by the browser, allowing for
        dynamic and interactive effects. You can change filter properties
        dynamically using JavaScript to create animations and transitions.
      </p>

      <h2>Benefits of CSS Filters</h2>
      <p>
        Using CSS filters can enhance the visual appeal of your webpage and make
        it more engaging for users. Filters can be used to create stunning
        backgrounds, add depth to images, and highlight important content.
      </p>

      <h2>When to Use CSS Filters</h2>
      <p>
        CSS filters are ideal for adding visual effects to elements on your
        webpage, such as images, backgrounds, and UI components. They can be
        used to create artistic effects, simulate depth and texture, and improve
        the overall design aesthetic.
      </p>

      <h2>Common CSS Filter Effects</h2>

      <h3>blur()</h3>
      <p>
        The <code>blur()</code> filter applies a Gaussian blur to the element,
        making it appear out of focus. You can specify the blur radius to
        control the intensity of the effect.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: blur(5px);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>grayscale()</h3>
      <p>
        The <code>grayscale()</code> filter converts the element to grayscale,
        removing all color information and rendering it in shades of gray.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: grayscale(100%);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>brightness()</h3>
      <p>
        The <code>brightness()</code> filter adjusts the brightness of the
        element. You can specify a percentage value to increase or decrease the
        brightness.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: brightness(150%);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>contrast()</h3>
      <p>
        The <code>contrast()</code> filter adjusts the contrast of the element.
        You can specify a percentage value to increase or decrease the contrast.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: contrast(200%);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>hue-rotate()</h3>
      <p>
        The <code>hue-rotate()</code> filter applies a hue rotation to the
        element, shifting the colors along the color wheel. You can specify an
        angle value to control the amount of rotation.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: hue-rotate(90deg);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <InArticleAdUnit />
      <h3>drop-shadow()</h3>
      <p>
        The <code>drop-shadow()</code> filter adds a drop shadow effect to the
        element. You can specify the shadow color, blur radius, horizontal
        offset, and vertical offset.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`
.image {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Examples</h2>

      <h3>Blur Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: blur(5px);
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Blur Effect"
      ></iframe>

      <h3>Grayscale Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: grayscale(100%);
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Grayscale Effect"
      ></iframe>

      <h3>Brightness Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: brightness(150%);
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Brightness Effect"
      ></iframe>

      <h3>Contrast Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: contrast(200%);
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Contrast Effect"
      ></iframe>

      <h3>Hue Rotate Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: hue-rotate(90deg);
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Hue Rotate Effect"
      ></iframe>

      <h3>Drop Shadow Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .image {
      width: 300px;
      height: 200px;
      background-image: url('https://via.placeholder.com/300x200');
      filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
    }
  </style>
</head>
<body>
  <div class="image"></div>
</body>
</html>`}
        title="Drop Shadow Effect"
      ></iframe>

      <p>
        Experiment with different filter effects and values to create unique
        visual effects for your webpage!
      </p>

      <p>
        For more details and additional filter effects, check out the
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">
          MDN Web Docs
        </a>
        .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/animationMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/responsiveMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Filter;

export const Responsive = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Responsive Design and Best Practices</h1>
      <p>
        Responsive design is an approach to web development that ensures web
        pages render well on a variety of devices and window or screen sizes.
        {`It's`} essential for providing a seamless user experience across
        different platforms, including desktops, laptops, tablets, and
        smartphones.
      </p>

      <h2>Key Principles of Responsive Design</h2>

      <h3>Fluid Layouts</h3>
      <p>
        Use fluid layouts that adjust and adapt to the size of the {`user's`}
        viewport. Avoid fixed-width layouts that may not scale properly on
        different devices.
      </p>

      <h3>Media Queries</h3>
      <p>
        Utilize CSS media queries to apply different styles based on the
        characteristics of the device, such as screen width, height, and
        orientation. This allows you to create responsive designs that adapt to
        various screen sizes and resolutions.
      </p>

      <h3>Flexible Images and Media</h3>
      <p>
        Ensure images and media elements are responsive by setting their maximum
        width to 100% of the container and using the appropriate CSS properties
        to control their size and aspect ratio.
      </p>

      <h3>Mobile-First Approach</h3>
      <p>
        Start designing for mobile devices first, then progressively enhance the
        layout and functionality for larger screens. This ensures a better user
        experience on smaller devices and prevents the need for excessive
        overrides and adjustments.
      </p>

      <h3>Content Priority</h3>
      <p>
        Prioritize content based on its importance and relevance to the user.
        Use techniques like content stacking and hiding less critical elements
        on smaller screens to improve readability and usability.
      </p>

      <h2>Best Practices for Responsive Design</h2>
      <p>
        Here are some additional best practices to follow when designing
        responsive websites:
      </p>

      <ul>
        <li>
          Test your website on various devices and browsers to ensure
          compatibility and consistency.
        </li>
        <li>
          Optimize images and media files for faster loading times on mobile
          devices.
        </li>
        <li>
          Use relative units like percentages and ems for sizing elements to
          maintain scalability.
        </li>
        <li>
          Implement touch-friendly navigation and interactive elements for
          touchscreen devices.
        </li>
        <li>
          Design for accessibility by ensuring text is readable, buttons are
          easily clickable, and content is navigable with keyboard and screen
          readers.
        </li>
        <li>
          Regularly update and maintain your website to adapt to changing
          technology and user needs.
        </li>
      </ul>

      <h2>Examples</h2>

      <p>Below are examples demonstrating responsive design principles:</p>

      <h3>Fluid Layout</h3>
      <p>
        This example uses a fluid layout that adjusts based on the size of the
        viewport:
      </p>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>This is a fluid layout that adjusts based on the size of the viewport.</p>
  </div>
</body>
</html>`}
        title="Fluid Layout Example"
      ></iframe>
      <InArticleAdUnit />
      <h3>Media Queries</h3>
      <p>
        This example uses media queries to apply different styles for different
        screen sizes:
      </p>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
      background-color: #f0f0f0;
    }

    @media screen and (max-width: 600px) {
      .container {
        background-color: #e0e0e0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <p>This example uses media queries to apply different styles for different screen sizes.</p>
  </div>
</body>
</html>`}
        title="Media Queries Example"
      ></iframe>

      <p>
        By following these principles and best practices, you can create
        responsive designs that provide a consistent and enjoyable experience
        for users across all devices and screen sizes.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/filterMob")}>
          back
        </button>
      </div>
    </div>
  );
};
