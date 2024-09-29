import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding CSS Filters - Enhance Your Web Design",
  description:
    "Learn how to use CSS filters to create stunning visual effects on your web pages. Discover various effects like blur, grayscale, brightness, and more with practical examples.",
  keywords:
    "CSS filters, web design, visual effects, blur, grayscale, brightness, contrast, hue-rotate, drop-shadow, interactive design",

  openGraph: {
    title: "Understanding CSS Filters - Enhance Your Web Design",
    description:
      "Unlock the power of CSS filters! Explore how to apply effects like blur and brightness to enhance your website's visual appeal.",
    type: "article",
  },
};

const CSSFilters = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Understanding CSS Filters</h1>
      <p>
        CSS filters allow you to apply visual effects to elements, such as
        blurring, grayscale, contrast adjustment, and more. They're like
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
          <SyntaxHighlighter language="CSS" style={docco}>
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
          <SyntaxHighlighter language="CSS" style={docco}>
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
          <SyntaxHighlighter language="CSS" style={docco}>
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
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
.image {
  filter: contrast(200%);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>hue-rotate()</h3>
      <p>
        The <code>hue-rotate()</code> filter applies a hue rotation to the
        element, shifting the colors along the color wheel. You can specify an
        angle value to control the amount of rotation.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
.image {
  filter: hue-rotate(90deg);
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>drop-shadow()</h3>
      <p>
        The <code>drop-shadow()</code> filter adds a drop shadow effect to the
        element. You can specify the shadow color, blur radius, horizontal
        offset, and vertical offset.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
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
        srcDoc={`
<!DOCTYPE html>
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
      <AdUnit />
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
      <AdUnit />
      <p>
        For more details and additional filter effects, check out the
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">
          MDN Web Docs
        </a>
        .
      </p>

      <Button whereToGo={"css-responsive-design"} />
    </div>
  );
};

export default CSSFilters;
