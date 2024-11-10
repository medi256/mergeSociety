import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "CSS Units | The Magical World of Units in CSS",
  description:
    "Learn about the magical world of CSS units, including pixels, percentages, ems, rems, and time units. Explore how to effectively use these units for flexible and responsive designs in CSS.",
  keywords: [
    "CSS units",
    "pixels",
    "percentages",
    "em",
    "rem",
    "responsive design",
    "time units",
    "CSS measurements",
    "CSS best practices",
    "web design",
    "CSS properties",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/css/css-units",
  },

  openGraph: {
    title: "CSS Units | The Magical World of Units in CSS",
    description:
      "Discover the key CSS units like pixels, percentages, ems, rems, and time units. Learn how to use them for scalable and responsive web design.",
  },
};

const CSSUnits = () => {
  return (
    <div className="lesson-container">
      <h1>The Magical World of Units in CSS</h1>
      <p>
        Units in CSS are like the building blocks of measurements. They allow
        you to specify sizes, distances, durations, and more in a precise and
        consistent manner. In this section, we'll explore the fascinating world
        of units in CSS and learn how to use them effectively to style your
        elements. Let's embark on this unit adventure!
      </p>

      <h2>Length Units</h2>
      <p>
        Length units are used to specify sizes, distances, and positions in CSS.
        They provide a way to measure and define various aspects of your
        designs. Some commonly used length units include:
      </p>

      <ul>
        <li>
          <strong>Pixels (px)</strong>: A pixel is the smallest unit on a
          digital display. It represents a single dot on the screen. Pixels are
          commonly used for specifying sizes, margins, padding, and positions.
          For example, you can set the width of an element to 300 pixels to make
          it 300 pixels wide.
        </li>
        <li>
          <strong>Percentages (%)</strong>: Percentages are relative units that
          are calculated based on the size of another element. They are often
          used for creating responsive designs that scale proportionally. For
          instance, setting the width of an element to 50% will make it half the
          width of its parent element.
        </li>
        <li>
          <strong>Em (em)</strong>: An em is a relative unit that is based on
          the font size of the current element. It is commonly used for font
          sizes, margins, and padding. For example, setting the font size to
          1.5em will make the font size 1.5 times larger than the current font
          size. Ems are useful for creating scalable and responsive designs.
        </li>
        <li>
          <strong>Rem (rem)</strong>: A rem is similar to an em, but it is
          relative to the font size of the root element (<code>html</code>). It
          provides a consistent reference point across the entire document. For
          example, setting the margin of an element to 2rem will add a margin of
          2 times the root font size around the element.
        </li>
      </ul>

      <h2>Using Length Units</h2>
      <p>Here's an example of how to use length units in CSS:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
div {
  width: 300px; /* Sets the width to 300 pixels */
  margin: 20px; /* Adds 20 pixels of margin around the element */
  padding: 10%; /* Adds 10% of the parent's width as padding */
  font-size: 1.5rem; /* Sets the font size to 1.5 times the root font size */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we used different length units to specify the width,
        margin, padding, and font size of a div element. Pixels (px) provide
        absolute measurements, while percentages (%) and rems (rem) offer
        relative measurements. By using a combination of these units, you can
        create flexible and responsive designs that adapt to different screen
        sizes and font sizes.
      </p>

      <h2>Time Units</h2>
      <p>
        Time units in CSS are used to specify durations for animations or
        transitions. They allow you to control how long an animation or
        transition takes to complete. Some commonly used time units include:
      </p>

      <ul>
        <li>
          <strong>Seconds (s)</strong>: Represents a single second. For example,
          setting the duration of an animation to 2s will make it last for 2
          seconds.
        </li>
        <li>
          <strong>Milliseconds (ms)</strong>: Represents a thousandth of a
          second. Milliseconds are commonly used for shorter durations, such as
          300ms for a subtle transition effect.
        </li>
      </ul>

      <h2>Using Time Units</h2>
      <p>Here's an example of how to use time units in CSS:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
.fade-in {
  transition: opacity 0.5s ease; /* Sets a 0.5-second transition for the opacity property */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we used seconds (s) to specify the duration of a
        transition effect. The transition property smoothly changes the opacity
        of the element over 0.5 seconds, creating a fade-in effect. You can
        adjust the duration to control the speed and smoothness of your
        animations.
      </p>

      <h2>Practice Time!</h2>
      <p>
        Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of units:
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your unit experiments.
        </li>
        <li>
          Apply different length units, such as pixels, percentages, ems, and
          rems, to specify sizes, margins, padding, and font sizes. Observe how
          they affect the layout and appearance of your elements. Try using
          larger and smaller values to see the impact on the design.
        </li>
      </ol>

      <p>
        Remember, units play a crucial role in CSS. They provide precision,
        consistency, and flexibility in your designs. Choose units that align
        with your design goals, ensure responsiveness, and create visually
        appealing and user-friendly interfaces. Happy coding and happy
        designing!
      </p>

      <Button whereToGo={"css-box-model"} />
    </div>
  );
};

export default CSSUnits;
