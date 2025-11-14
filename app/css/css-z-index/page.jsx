import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import Image from "next/image";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Master CSS Z-Index: Understanding Stacking and Layering",
  description:
    "Learn how to control element stacking with CSS z-index, from default stacking order to complex stacking contexts. Includes hands-on examples and exercises.",
  keywords: [
    "CSS z-index",
    "CSS stacking order",
    "CSS layering",
    "positioning with z-index",
    "CSS stacking contexts",
    "CSS layering exercise",
    "absolute position z-index",
    "CSS tutorial",
    "web development",
    "frontend CSS tips",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-z-index",
  },
  openGraph: {
    title: "Master CSS Z-Index: Understanding Stacking and Layering",
    description:
      "Deep dive into the z-index property in CSS. Understand how stacking order works and practice building layered designs with positioning and z-index. Hands-on coding exercises included.",
  },
};

const CSSIndex = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>CSS Z-index</h1>
        <p>
          The z-index property in CSS controls the stacking order of elements on
          a webpage. Elements with a higher z-index value are displayed in front
          of those with a lower z-index value.
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
          "static", while positioned elements have any other position value
          (e.g., "absolute", "relative", "sticky", or "fixed").
        </p>

        <h4>HTML:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
    <!-- Example HTML -->
    <div class="pink">
      <div class="orange"></div>
    </div>
    <div class="blue"></div>
    <div class="green"></div>
    `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h4>CSS:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
    /* Example CSS */
    .blue, .pink, .orange {
      position: absolute; /* Positioning required for z-index */
    }
    `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <Image
          width={500}
          layout="responsive"
          height={300}
          src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762776985/posi_fedygu_o1tvzb.png"
          alt="demo-7"
        />

        <p>
          Even though the green box is defined last in the document, it appears
          behind the others because it is non-positioned.
        </p>
        <h3>Stacking with Z-index</h3>
        <p>
          To change the stacking order of elements, we can use the z-index
          property. An element with a higher z-index will be displayed in front
          of an element with a lower z-index. However, z-index only works with
          positioned elements.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
  /* Example CSS */
  .blue { z-index: 2; }
  .orange { z-index: 3; }
  .green { z-index: 100; /* has no effect */ }
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <Image
          width={500}
          layout="responsive"
          height={300}
          src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762776950/zDemo_tatecd_x6bqrz.png"
          alt="demo-8"
        />
        <p>
          The orange box, with a higher z-index, is displayed in front of the
          blue box.
        </p>
        <h3>Stacking Context</h3>
        <p>
          Adding a z-index value to an element creates a stacking context,
          affecting how its child elements are displayed.
        </p>
        <h4>HTML:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
  <!-- Example HTML -->
  <div class="pink">
    <div class="orange"></div>
  </div>
  <div class="blue"></div>
  <div class="purple"></div>
  <div class="green"></div>
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h4>CSS:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
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
            </SyntaxHighlighter>
          </code>
        </pre>
        <Image
          width={500}
          layout="responsive"
          height={300}
          src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762775988/stackDemo_x5h870_nmov0m.png"
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
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
  <!-- Example HTML -->
  <div class="pink">
    <div class="orange"></div>
  </div>
  <div class="blue"></div>
  <div class="green"></div>
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <h4>CSS:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
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
            </SyntaxHighlighter>
          </code>
        </pre>
        <Image
          width={500}
          layout="responsive"
          height={300}
          src="https://res.cloudinary.com/dgyofctwi/image/upload/v1762775627/stack3_mwtsnf_rdyxyc.png"
          alt="demo-12"
        />
        <p>
          The orange box still has a higher z-index than the blue one but is
          displayed behind it because the filter property caused the pink box to
          form a new stacking context.
        </p>

        <h2>Exercise: Layering and Stacking Challenge</h2>
        <p>
          Now it's your turn to put your knowledge into practice! In this
          exercise, you will create a layered design using z-index and explore
          the impact of stacking contexts.
        </p>
        <ol>
          <li>
            Create a simple HTML structure with multiple div elements
            representing different layers of your design.
          </li>
          <li>
            Apply positioning (e.g., absolute, relative) and z-index values to
            create a layered effect.
          </li>
          <li>
            Experiment with different z-index values to change the stacking
            order and observe how the layers overlap.
          </li>
          <li>
            Create a visually appealing composition by playing with colors,
            sizes, and positioning.
          </li>
          <li>
            Challenge yourself by creating a complex design with multiple
            stacking contexts and overlapping elements.
          </li>
        </ol>

        <p>
          Remember to refer to the concepts and examples covered in this
          tutorial as you work through the exercise. Happy coding and have fun
          exploring the world of layering and stacking!
        </p>

        <Button whereToGo={"css-columns"} />
      </div>
    </div>
  );
};

export default CSSIndex;
