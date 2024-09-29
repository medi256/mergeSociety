import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Attribute Selectors in CSS",
  description:
    "Learn how to use attribute selectors in CSS to style HTML elements based on their attributes and values. Explore syntax, usage, and best practices.",
  keywords: [
    "CSS attribute selectors",
    "CSS selectors",
    "web design",
    "styling HTML elements",
    "CSS best practices",
    "attribute value selectors",
  ],

  openGraph: {
    title: "Understanding Attribute Selectors in CSS",
    description:
      "Discover the power of attribute selectors in CSS and learn how to style elements based on their attributes and values.",
    type: "article",
  },
};

const CSSAttributeSelectors = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
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
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
element[attribute="value"] {
  /* Styles applied to elements with specified attribute and value */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        For example, to target all anchor elements with a specific {`"target"`}
        attribute value, you can use:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
a[target="_blank"] {
  /* Styles applied to anchor elements with target="_blank" */
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h2>Common Use Cases</h2>
      <p>
        Let's explore some common scenarios where attribute selectors can be
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
      <AdUnit />
      <h2>Hands-On Practice</h2>
      <p>
        Now, let's practice using attribute selectors in a simple HTML document.
        Experiment with selecting and styling elements based on their
        attributes.
      </p>

      <Button whereToGo={"css-transforms"} />
    </div>
  );
};

export default CSSAttributeSelectors;
