import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding CSS Syntax: Selectors, Properties, and Values",
  description:
    "Learn the fundamental structure of CSS syntax, including selectors, properties, and values. Master basic and advanced CSS techniques for effective web design.",
  keywords:
    "CSS syntax, selectors, properties, values, web design, styling, cascading style sheets",
  openGraph: {
    title: "CSS Syntax Guide: From Basics to Advanced Techniques",
    description:
      "Dive deep into CSS syntax. Understand selectors, properties, values, and explore advanced features like pseudo-classes, media queries, and CSS variables.",
    type: "article",
    authors: ["MergeSociety"],
  },
};

const CSSSyntax = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>CSS Syntax</h1>
      <p>
        CSS (Cascading Style Sheets) is a styling language used to design and
        format the layout of web pages. It plays a crucial role in enhancing the
        visual appeal and user experience of websites. Understanding CSS syntax
        is fundamental to creating effective and stylish web interfaces.
      </p>

      <h2>Basic Structure of CSS Syntax</h2>
      <p>
        The fundamental structure of CSS syntax involves three main components:
        selectors, properties, and values.
      </p>

      <h3>Selectors</h3>
      <p>
        Selectors are the building blocks of CSS. They are used to target and
        select specific HTML elements on a web page. Selectors allow you to
        apply styles to particular elements, giving you control over their
        appearance. Here are some commonly used selectors:
      </p>
      <ul>
        <li>
          <strong>Element Selectors</strong>: These target specific HTML
          elements, such as <code>h1</code>, <code>p</code>, or
          <code>div</code>. For example, <code>h1</code> selects all
          <code> {`<h1>`};</code> elements on the page.
        </li>
        <li>
          <strong>Class Selectors</strong>: These target elements with a
          specific class attribute. Classes are used to style multiple elements
          with the same style rules. For instance,
          <code>.header</code> selects all elements with the class "header".
        </li>
        <li>
          <strong>ID Selectors</strong>: These target elements with a unique ID.
          IDs are used to style specific, individual elements. For example,
          <code>#header</code> selects the element with the ID "header".
        </li>
        <li>
          <strong>Attribute Selectors</strong>: These target elements based on
          their attributes and their values. For instance,
          <code>[hreflang="en"]</code> selects all elements with an
          <code>hreflang</code> attribute with a value of "en".
        </li>
      </ul>

      <h3>Properties</h3>
      <p>
        Properties are the characteristics that you want to style or modify for
        the selected elements. Each property defines a specific aspect of an
        element's appearance or behavior. Here are some commonly used
        properties:
      </p>
      <ul>
        <li>
          <strong>Color Properties</strong>: These properties define the color
          of various elements, such as text, backgrounds, and borders. Examples
          include <code>color</code>,<code>background-color</code>, and
          <code>border-color</code>.
        </li>
        <li>
          <strong>Font Properties</strong>: These properties control the
          appearance of text, including font family, size, style, and weight.
          Examples include <code>font-family</code>,<code>font-size</code>, and{" "}
          <code>font-weight</code>.
        </li>
        <li>
          <strong>Layout Properties</strong>: These properties determine the
          layout and positioning of elements on the page. Examples include
          <code>display</code>, <code>position</code>, and
          <code>float</code>.
        </li>
      </ul>
      <AdUnit />
      <h3>Values</h3>
      <p>
        Values are assigned to properties to define their specific behavior or
        appearance. Values can come in different forms, such as keywords,
        lengths, percentages, or even other CSS rules.
      </p>
      <ul>
        <li>
          <strong>Keyword Values</strong>: These are specific keywords that
          define a property's value. For example, <code>red</code>,
          <code>bold</code>, or <code>center</code>.
        </li>
        <li>
          <strong>Length Values</strong>: These define a length or size using
          units such as pixels, inches, or percentages. For example,
          <code>10px</code>, <code>2in</code>, or <code>50%</code>.
        </li>
        <li>
          <strong>URL Values</strong>: These values are used to link to external
          resources, such as images or fonts. For example,
          <code>url(image.png)</code>.
        </li>
      </ul>

      <h2>Putting It All Together</h2>
      <p>
        Now, let's see how these components come together to form a CSS rule. A
        CSS rule consists of a selector, followed by curly braces that contain
        one or more property-value pairs. Here's an example:
      </p>

      <code>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
h1 {
  color: red;
  font-size: 24px;
  text-align: center;
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
      </code>

      <p>
        In this example, <code>h1</code> is the selector, targeting all
        <code> {`<h1>`}</code> elements on the page. Inside the curly braces, we
        have two property-value pairs: <code>color: red</code> and
        <code>font-size: 24px</code>. This rule sets the text color of
        <code> {`<h1>`}</code> elements to red and their font size to 24 pixels.
      </p>
      <AdUnit />
      <h2>Advanced CSS Syntax</h2>
      <p>
        While the basics of CSS syntax are relatively straightforward, the
        language offers a wide range of advanced features and techniques to
        create more complex and dynamic styles. Here are a few examples:
      </p>
      <ul>
        <li>
          <strong>Pseudo-classes and Pseudo-elements</strong>: These allow you
          to style elements based on their state or position, such as
          <code>:hover</code> or <code>::before</code>.
        </li>
        <li>
          <strong>Media Queries</strong>: Media queries enable you to apply
          styles based on device characteristics, such as screen size or
          orientation. This is crucial for responsive web design.
        </li>
        <li>
          <strong>CSS Variables</strong>: Variables allow you to store and reuse
          values throughout your stylesheet, making it easier to maintain and
          update styles.
        </li>
        <li>
          <strong>CSS Functions</strong>: CSS provides various functions that
          perform calculations or generate values, such as
          <code>calc()</code> or <code>rgb()</code>.
        </li>
      </ul>

      <p>
        As you continue to explore CSS, you'll discover a wealth of features and
        techniques that will empower you to create stunning and responsive web
        designs.
      </p>

      <Button whereToGo={"css-inserting"} />
    </div>
  );
};

export default CSSSyntax;
