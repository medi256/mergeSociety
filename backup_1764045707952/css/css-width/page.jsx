import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "The Complete Guide to CSS Width | Learn Web Design",
  description:
    "Master CSS width properties with our comprehensive guide. Learn about pixels, percentages, auto width, and best practices for responsive web design.",
  keywords: [
    "CSS",
    "width",
    "web design",
    "responsive design",
    "layout",
    "CSS properties",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-width",
  },
  openGraph: {
    title: "CSS Width Mastery: From Basics to Advanced Techniques",
    description:
      "Dive into the world of CSS width. Learn how to create flexible, responsive layouts that look great on any device.",
  },
};

const CSSWidth = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>The Magical World of Width in CSS</h1>
        <p>
          Width is a fundamental property in CSS that determines the horizontal
          size of an element. It plays a crucial role in defining the layout,
          appearance, and responsiveness of your web designs. In this section,
          we'll explore the fascinating world of width in CSS and learn how to
          use it effectively to style your elements. Let's embark on this width
          adventure!
        </p>

        <h2>Width Property</h2>
        <p>
          The <code>width</code> property is a powerful tool in CSS that allows
          you to set the width of an element. You can specify the width using
          various units, such as pixels (px), percentages (%), or keywords like{" "}
          <code>auto</code>. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
div {
  width: 300px; /* Sets the width to 300 pixels */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we set the <code>width</code> property to 300
          pixels, making the div element 300 pixels wide. You can adjust the
          width value to create elements with different sizes, depending on your
          design needs. For example, you can create narrow columns, wide
          banners, or elements that span the full width of their container.
        </p>

        <h2>Percentages for Width</h2>
        <p>
          Using percentages for width allows you to set the width relative to
          the width of the parent element. This means that the width will adjust
          dynamically based on the size of the parent element. Here's an
          example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
div {
  width: 50%; /* Sets the width to 50% of the parent's width */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we set the <code>width</code> property to 50%,
          making the div element half the width of its parent element. This is
          useful when you want the element to scale proportionally with the
          parent element's size. For example, if the parent element has a width
          of 800 pixels, the child element with a width of 50% will be 400
          pixels wide. Percentages for width are commonly used to create
          flexible layouts that adapt to different screen sizes or to create
          responsive designs.
        </p>

        <h2>Auto Width</h2>
        <p>
          The <code>width: auto</code> property is commonly used for images and
          other elements that need to adjust their width based on their content.
          Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
img {
  width: auto; /* Sets the width based on the image's original size */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we set the <code>width</code> property to{" "}
          <code>auto</code>
          for an image element. This means that the image will be displayed at
          its original size, without any stretching or distortion. The{" "}
          <code>auto</code>
          value tells the browser to calculate the width based on the intrinsic
          size of the image. This is particularly useful for images or other
          elements that need to maintain their original aspect ratio while
          fitting within their container.
        </p>

        <h2>Practice Time!</h2>
        <p>
          Now it's time to put your knowledge into practice! Open your code
          editor and create a new HTML file. Let's explore the wonderful world
          of width:
        </p>

        <ol>
          <li>
            Create a simple HTML structure with div elements to serve as
            containers for your width experiments.
          </li>
          <li>
            Apply different width values, such as pixels, percentages, and auto,
            and observe how they affect the size of the elements. Try using
            larger and smaller values to see the impact on the layout.
          </li>
          <li>
            Experiment with percentages for width to create elements that scale
            proportionally with the parent element's size. Observe how the width
            adjusts as you resize the parent element.
          </li>
          <li>
            Use <code>width: auto</code> for images or other elements that need
            to adjust their width based on their content. Notice how the image
            maintains its original aspect ratio.
          </li>
          <li>
            Explore the relationship between width and height by creating
            elements with different width and height values. Observe how they
            interact and affect the layout.
          </li>
          <li>
            Refer to width resources and tutorials to discover creative ways to
            use width to create flexible and responsive designs that look great
            on various devices.
          </li>
        </ol>

        <p>
          Remember, width is a powerful tool in web design. It helps define the
          layout, appearance, and responsiveness of your designs. Choose width
          values that align with your brand, ensure readability, and provide a
          great user experience. Happy coding and happy designing!
        </p>

        <Button whereToGo={"css-height"} />
      </div>
    </div>
  );
};

export default CSSWidth;
