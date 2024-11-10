import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "CSS Selectors: Mastering Element Targeting for Effective Styling",
  description:
    "Learn about CSS selectors including element, class, ID, attribute, and descendant selectors. Discover how to effectively target and style HTML elements with practical examples and exercises.",
  keywords:
    "CSS selectors, element selector, class selector, ID selector, attribute selector, descendant selector, web design, HTML styling",
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-selectors",
  },
  openGraph: {
    title: "Mastering CSS Selectors: From Basics to Advanced Techniques",
    description:
      "Explore various CSS selectors and learn how to target HTML elements precisely. Includes hands-on exercises and real-world examples for effective web styling.",
  },
};

const CSSSelectors = () => {
  return (
    <div className="lesson-container">
      <h1>CSS Selectors</h1>
      <p>
        Selectors are one of the most fundamental concepts in CSS. They are like
        powerful tools that allow you to target and style specific HTML elements
        on your web page. Think of selectors as patterns that help you identify
        and select elements for styling. In this section, we'll explore the most
        commonly used CSS selectors and how they work. Let's get started!
      </p>

      <h2>Element Selector</h2>
      <p>
        The element selector, also known as a type selector, targets elements
        based on their HTML tag name. It selects all elements of a specific
        type. For example, let's say you want to style all <code>{`<p>`}</code>
        elements on your page. You can use the element selector like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
p {
  color: blue;
}

/* This selector targets all <p> elements and makes their text color blue. */
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the selector <code>p</code> targets all{" "}
        <code>{`<p>`}</code>
        elements on the page and sets their text color to blue. This is a simple
        and straightforward way to apply styles to elements of a specific type.
      </p>

      <h2>Class Selector</h2>
      <p>
        The class selector is a versatile tool that targets elements based on
        their class attribute. Classes are used to group and style multiple
        elements with the same style rules. For instance, let's say you have
        several elements that you want to highlight with a yellow background.
        You can use the class selector like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
.highlight {
  background-color: yellow;
}

/* This selector targets all elements with the class "highlight" and makes their background color yellow. */
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In your HTML, you can add the class to elements like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<p class="highlight">This paragraph will have a yellow background.</p>
<div class="highlight">This div will also have a yellow background.</div>
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By using the class selector, you can apply the same styles to multiple
        elements, making your code more efficient and maintainable.
      </p>

      <h2>ID Selector</h2>
      <p>
        The ID selector is like a laser pointer that targets a specific element
        based on its unique ID. Each ID should be unique within a page, making
        it perfect for styling individual elements. For example, let's say you
        want to style the header of your web page:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
#header {
  font-size: 24px;
}

/* This selector targets the element with the ID "header" and sets its font size to 24 pixels. */
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In your HTML, you can assign an ID to an element like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<h1 id="header">This is the header</h1>
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Keep in mind that IDs should be unique, so you can use them to target
        specific elements on your page.
      </p>

      <h2>Attribute Selector</h2>
      <p>
        The attribute selector is like a detective that targets elements based
        on their attributes and their values. It allows you to select elements
        that have a specific attribute or attribute value. For example, let's
        say you want to style all links ( <code>{`<a>`}</code>) that point to
        external websites:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
a[href^="https"] {
  color: green;
}

/* This selector targets all <a> elements with an "href" attribute starting with "https" and makes their text color green. */
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the attribute selector targets links that have an{" "}
        <code>href</code> attribute starting with "https". You can use this
        selector to apply styles to elements based on their attributes.
      </p>

      <h2>Descendant Selector</h2>
      <p>
        The descendant selector is like a family tree that targets elements
        based on their relationship with other elements. It allows you to apply
        styles to elements that are nested within other elements. For instance,{" "}
        let's say you want to style list items (<code> {`<li>`}</code>) that are
        descendants of unordered lists (<code> {`<ul>`}</code>):
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
ul li {
  color: red;
}

/* This selector targets <li> elements that are descendants of <ul> elements and makes their text color red. */
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In your HTML, the structure would look like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        With the descendant selector, you can easily style elements based on
        their hierarchical relationship.
      </p>

      <h2>Practice Time!</h2>
      <p>
        Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's experiment with different selectors
        and observe how they target and style elements:
      </p>

      <ol>
        <li>
          Create a simple HTML structure with headings, paragraphs, lists, and
          other elements.
        </li>
        <li>
          Apply different selectors to target specific elements and change their
          styles, such as color, font-size, background-color, etc.
        </li>
        <li>
          Try combining multiple selectors to apply styles to specific groups of
          elements. For example, style all <code>{`<p>`}</code> elements with a
          class of "highlight".
        </li>
        <li>
          Experiment with attribute selectors to target elements based on their
          attributes and values. For example, style all images (
          <code> {`<img>`}</code>) with an <code>alt</code> attribute.
        </li>
        <li>
          Play around with descendant selectors to apply styles to elements
          nested within other elements. For example, style all list items (
          <code> {`<li>`}</code>) that are descendants of ordered lists (
          <code> {`<ol>`}</code>).
        </li>
        <li>
          Refer to the documentation and examples provided in this component for
          additional guidance and inspiration.
        </li>
      </ol>

      <p>
        Remember, practice makes perfect! The more you experiment with
        selectors, the better you'll become at targeting and styling elements on
        your web pages. Happy coding!
      </p>

      <Button whereToGo={"css-colors"} />
    </div>
  );
};

export default CSSSelectors;
