
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "CSS Display | Mastering Layout Techniques",
  description:
    "Dive deep into the CSS display property and learn how to manipulate layouts with block, inline, and inline-block elements. Explore practical exercises and techniques to create responsive designs.",
  keywords: [
    "CSS display property",
    "block elements CSS",
    "inline elements CSS",
    "inline-block CSS",
    "display none",
    "CSS layout techniques",
    "CSS responsive design",
    "CSS display tutorial",
  ],
  openGraph: {
    title: "CSS Display | Mastering Layout Techniques",
    description:
      "Understand the power of the CSS display property. Learn how to use block, inline, and inline-block elements to build responsive and dynamic layouts.",
    type: "article",
  },
};

const CSSDisplay = () => {
  return (
    <div className="lesson-container">
      
      <h1>Diving Deep into the CSS Display Property</h1>
      <p>
        The CSS display property is a fundamental concept in web development
        that gives developers immense control over the visual structure and
        behavior of HTML elements. By understanding and utilizing this property
        effectively, you can create responsive, dynamic, and visually appealing
        web designs. In this comprehensive tutorial, we'll explore the various
        values of the display property, their impact on layout, and how you can
        leverage them to build flexible and engaging user interfaces.
      </p>

      <h2>Block-Level Elements</h2>
      <p>
        Block-level elements are the building blocks of your webpage's layout.
        They occupy the entire width of their parent container and always start
        on a new line, creating distinct horizontal blocks. These elements form
        the foundation of your design and are commonly used for structuring
        content. Here are some examples of block-level elements:
      </p>

      <ul>
        <li>
          <strong>Paragraphs:</strong> <code>&lt;p&gt;</code>
        </li>
        <li>
          <strong>Headings:</strong> <code>&lt;h1&gt;</code> to{" "}
          <code>&lt;h6&gt;</code>
        </li>
        <li>
          <strong>Divisions:</strong> <code>&lt;div&gt;</code>
        </li>
        <li>
          <strong>Lists:</strong> <code>&lt;ul&gt;</code>,{" "}
          <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>
        </li>
        <li>
          <strong>Forms:</strong> <code>&lt;form&gt;</code>
        </li>
        <li>
          <strong>Structural Elements:</strong> <code>&lt;section&gt;</code>,{" "}
          <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>
        </li>
      </ul>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<div>I'm a block-level element</div>
<p>I take up the full width of my container</p>
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By default, most HTML elements are set to display as block-level
        elements, creating a natural structure and flow to your webpage.
      </p>

      <h2>Inline Elements</h2>
      <p>
        Inline elements are the opposite of block-level elements. They flow with
        the surrounding text and do not create line breaks. Inline elements are
        used for small pieces of content or interactive elements that need to be
        embedded within a larger block of text. Here are some examples:
      </p>

      <ul>
        <li>
          <strong>Span:</strong> <code>&lt;span&gt;</code>
        </li>
        <li>
          <strong>Italic Text:</strong> <code>&lt;i&gt;</code>
        </li>
        <li>
          <strong>Anchor Links:</strong> <code>&lt;a&gt;</code>
        </li>
        <li>
          <strong>Images:</strong> <code>&lt;img&gt;</code>
        </li>
      </ul>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<p>This is a <span>span element</span> within a paragraph.</p>
<i>I'm an italic text element, flowing with the text.</i>
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Inline elements are versatile and can be used for adding emphasis,
        creating links, or embedding images within the flow of your content.
      </p>

      <h2>Manipulating Display Values</h2>
      <p>
        The true power of the display property lies in your ability to
        manipulate how elements are displayed. You can change the behavior of
        block-level elements to act like inline elements, and vice versa. This
        flexibility allows you to create unique and dynamic layouts. Let's
        explore some examples:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
/* CSS */

/* Transforming a block-level list item to inline */
li {
  display: inline;
}

/* Changing an inline element to block */
span {
  display: block;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By altering the display values, you can achieve intricate designs and
        responsive behaviors. For example, you can create a horizontal menu by
        setting the display of list items to inline, or you can give an inline
        element a specific width and height by changing it to a block element.
      </p>
      
      <h2>Hiding Elements with "None"</h2>
      <p>
        The <code>none</code> value of the display property allows you to
        completely hide elements from the webpage. This is particularly useful
        for creating dynamic interfaces or responsive designs where certain
        elements need to be shown or hidden based on specific conditions, such
        as screen size or user interactions.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
/* CSS */
.hidden-element {
  display: none;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By using <code>display: none</code>, you can control the visibility of
        elements without removing them from the HTML structure. This technique
        is commonly used for implementing responsive navigation menus, tabs, or
        conditional content display.
      </p>

      <h2>The Magic of "Inline-Block"</h2>
      <p>
        The <code>inline-block</code> value combines the best of both worlds.
        Elements with this display value behave like inline elements, flowing
        with the surrounding content, but you can also apply width and height
        properties to them. This gives you the flexibility to create complex
        layouts and designs.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
/* CSS */
span {
  display: inline-block;
  width: 150px;
  height: 50px;
}
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        With <code>inline-block</code>, you can create visually appealing
        designs where elements flow like inline elements but have specific
        dimensions and styling applied to them. This is especially useful for
        creating responsive grids or unique visual compositions.
      </p>

      <h2>Impact on Layout and Responsiveness</h2>
      <p>
        The display property plays a crucial role in determining the layout and
        responsiveness of your web pages. By manipulating display values, you
        can create fluid and adaptive designs that respond to different screen
        sizes or user interactions. For example:
      </p>

      <ul>
        <li>
          <strong>Responsive Navigation:</strong> You can create a responsive
          navigation menu by changing the display value of list items based on
          the screen size.
        </li>
        <li>
          <strong>Dynamic Content Display:</strong> By showing or hiding
          elements with <code>display: none</code>, you can create dynamic
          interfaces that adapt to user interactions or device capabilities.
        </li>
        <li>
          <strong>Flexible Grids:</strong> Using <code>inline-block</code>, you
          can create flexible grids that rearrange themselves based on available
          space, making your designs more responsive.
        </li>
      </ul>

      <h2>Practical Exercises</h2>
      <p>
        Now it's time to put your knowledge to the test! Open your code editor
        and experiment with the following exercises to reinforce your
        understanding of the display property:
      </p>

      <ol>
        <li>
          Create a simple HTML structure with various block and inline elements.
        </li>
        <li>
          Play with different display property values and observe how they
          impact the layout and behavior of elements.
        </li>
        <li>
          Try hiding elements using <code>display: none</code> and then
          revealing them with <code>display: block</code> based on different
          conditions.
        </li>
        <li>
          Create a responsive navigation menu that changes its display behavior
          based on the screen size.
        </li>
        <li>
          Explore advanced techniques by referring to CSS documentation and
          online resources, such as creating complex layouts with{" "}
          <code>inline-block</code>.
        </li>
      </ol>
      
      <p>
        Remember, the display property is a versatile tool that empowers you to
        create dynamic and visually stunning web designs. By understanding and
        manipulating display values, you can build responsive and engaging user
        interfaces that adapt to different devices and user interactions. Happy
        coding and designing!
      </p>

      <Button whereToGo={"css-position"} />
    </div>
  );
};

export default CSSDisplay;
