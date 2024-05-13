const Inserting = () => {
  return (
    <div className="comments-container">
      <h1>Inserting CSS</h1>
      <p>
        {`Welcome back! In this section, we'll dive into the world of CSS and
        explore the different ways to insert CSS into your HTML documents.
        CSS, or Cascading Style Sheets, is a powerful tool that allows you to
        style and design your web pages. By inserting CSS, you can transform
        the appearance, layout, and behavior of your HTML content, making it
        visually appealing and user-friendly. Let's begin!`}
      </p>

      <h2>External CSS</h2>
      <p>
        One common approach to inserting CSS is by using external stylesheets.
        External stylesheets offer several advantages, including reusability and
        easier maintenance. With external CSS, you can define styles in a
        separate file and apply them to multiple HTML documents.
      </p>

      <h3>Creating an External Stylesheet</h3>
      <p>To create an external stylesheet, follow these steps:</p>

      <ol>
        <li>
          <strong>Open your code editor.</strong> You can use any text editor or
          a specialized code editor like Visual Studio Code or Sublime Text.
        </li>
        <li>
          <strong>Create a new file.</strong>{" "}
          {` In your code editor, go to the
          "File" menu and select "New File" or use the appropriate keyboard
          shortcut (e.g., Ctrl+N or Cmd+N).`}
        </li>
        <li>
          <strong>Save the file with a .css extension.</strong> When saving the
          file, make sure to give it a descriptive name{" "}
          {` (e.g.,  "styles.css" or
          "main.css") `}{" "}
          and include the <code>.css</code> extension at the end. This extension
          indicates that {` it's a CSS file.`}
        </li>
        <li>
          <strong>Write your CSS rules.</strong> Inside the newly created CSS
          file, you can start writing your CSS rules. Each rule consists of a
          selector and a set of declarations enclosed in curly braces.{" "}
          {` Here's
          an example:`}
          <code>
            <pre>
              <code>
                {`
h1 {
  color: blue;
  text-align: center;
}
              `}
              </code>
            </pre>
          </code>
        </li>
        <li>
          <strong>Save and close the file.</strong>{" "}
          {`Once you've written your CSS
          rules, save the file and close it. It's now ready to be linked to
          your HTML document.`}
        </li>
      </ol>

      <h3>Linking External Stylesheet</h3>
      <p>
        {`Now that you've created your external stylesheet, it's time to link it
        to your HTML document. Here's how you do it:`}
      </p>

      <code>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, the <code>link</code> element establishes the
        connection between your HTML document and the external stylesheet. The{" "}
        <code>{`rel="stylesheet"`}</code> attribute specifies that the linked
        file is a stylesheet, <code>{`type="text/css"`}</code> indicates the
        MIME type, and <code>{`href="styles.css"`}</code> provides the path to
        your CSS file.
      </p>
      <h3>
        You can also watch this video and learn how to create and link your CSS
        file
      </h3>
      <video
        width={"300px"}
        controls
        src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1715592011/cssInsertion_f5qaw3.mov"
      ></video>

      <h3>Advantages of External Stylesheets</h3>
      <ul>
        <li>
          <strong>Reusability:</strong> External stylesheets can be linked to
          multiple HTML documents, allowing you to apply consistent styles
          across your entire website. This promotes code reuse and reduces
          redundancy.
        </li>
        <li>
          <strong>Maintenance:</strong> Changes made to the external stylesheet
          will automatically reflect in all linked HTML documents. This makes it
          easier to update and maintain your styles, especially when dealing
          with large projects.
        </li>
        <li>
          <strong>Separation of Concerns:</strong> By separating content (HTML)
          from presentation (CSS), external stylesheets improve code
          organization and make collaboration with other developers smoother.
        </li>
      </ul>

      <h2>Internal CSS</h2>
      <p>
        Internal CSS involves embedding styles directly within your HTML
        document. This approach is useful for styles specific to a particular
        page or when you want to keep your styles self-contained.
      </p>

      <h3>
        Using the <code>style</code> Attribute
      </h3>
      <p>
        You can apply internal styles to individual HTML elements using the{" "}
        <code>style</code> attribute. This allows you to customize the
        appearance of specific elements without affecting others. {` Here's an`}
        example:
      </p>

      <code>
        <pre>
          <code>
            {`
<h1 style="color: blue; text-align: center;">My Heading</h1>
            `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, the <code>style</code> attribute contains CSS
        property-value pairs separated by semicolons. The <code>color</code>{" "}
        property sets the text color to blue, and{" "}
        <code>text-align: center</code> centers the heading text.
      </p>

      <h3>
        Using the{" "}
        <code>
          {" "}
          <code>{`<style>`}</code>
        </code>{" "}
        Element
      </h3>
      <p>
        Another way to use internal CSS is by including a <code>style</code>{" "}
        element within the <code>{`<head>`}</code> section of your HTML
        document. This allows you to define styles that apply to multiple
        elements on the same page. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;

      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
          `}
          </code>
        </pre>
      </code>

      <p>
        In this example, the styles defined within the <code>style</code>{" "}
        element will apply to the specified HTML elements on the page. You can
        include multiple style rules within the <code>style</code> element to
        style different elements.
      </p>

      <h2>Inline CSS</h2>
      <p>
        Inline CSS involves applying styles directly to individual HTML elements
        using the <code>style</code> attribute. This approach is useful for
        one-off styles or when you need to override specific styles for a
        particular element. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
<h1 style="color: red; font-size: 24px;">My Heading</h1>
            `}
          </code>
        </pre>
      </code>

      <p>
        In this code snippet, the <code>style</code> attribute contains CSS
        properties and their values, directly modifying the appearance of the{" "}
        <code>h1</code> element. The text color is set to red, and the font size
        is increased to 24 pixels.
      </p>

      <h3>Advantages and Disadvantages of Inline CSS</h3>
      <ul>
        <li>
          <strong>Advantage:</strong> Inline CSS allows for highly specific
          styling of individual elements. It can be useful when you need to
          apply unique styles to a single element.
        </li>
        <li>
          <strong>Disadvantage:</strong> Excessive use of inline styles can make
          your HTML code harder to read and maintain.{" "}
          {` It's generally
          recommended to use external or internal stylesheets for more
          organized and manageable code.`}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to apply what you've learned! Open your code editor and
        create a new HTML file. Let's experiment with different ways of
        inserting CSS:`}
      </p>

      <ol>
        <li>
          Create an external stylesheet named {` "styles.css" `} and link it to
          your HTML document using the <code>link</code> element. Define styles
          for headings (<code>h1</code> to <code>h6</code>) to change their
          color, font-size, and text alignment.
        </li>
        <li>
          In your HTML document, create different heading levels (
          <code>h1</code>
          to <code>h6</code>) and apply the styles from the external stylesheet.
          Observe how the styles are applied consistently across the headings.
        </li>
        <li>
          Now, add some internal CSS using the <code>style</code> element within
          the <code>{`<head>`}</code> section. Define styles for paragraphs (
          <code>p</code>) to change their font-family, line-height, and
          text-indent.
        </li>
        <li>
          Experiment with inline CSS by applying styles directly to specific
          elements using the <code>style</code> attribute. Try overriding the
          styles defined in the external stylesheet and observe the changes.
        </li>
        <li>
          Finally, play around with different values and properties to see how
          they affect the appearance of your HTML content. Feel free to explore
          and be creative!
        </li>
        <li>
          {`One last thing, don't panic or get confused by those CSS properties
          yet. We will cover each property in its separate lesson. Just try your
          best to master how to insert and create rules.`}
        </li>
      </ol>

      <p>
        {`Remember, practice makes perfect! The more you experiment and play
        with CSS, the better you'll become at styling your web pages.`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "syntax")}>back</button>
        <button onClick={() => (window.location.href = "selectors")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Inserting;
export const Selectors = () => {
  return (
    <div className="comments-container">
      <h1>CSS Selectors</h1>
      <p>
        Selectors are essential for targeting specific HTML elements and
        applying styles to them. {`Let's`} explore various types of selectors,
        their usage, and examples:
      </p>
      <ol>
        <li>
          <h2>Element Selector</h2>
          <ul>
            <li>
              The element selector selects HTML elements based on their tag
              names.
            </li>
            <li>
              It applies styles to all instances of that element on the page.
            </li>
            <li>For example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  p {
    color: blue;
  }
                `}
              </code>
            </pre>
          </div>
          <p>In this example, all &lt;p&gt; elements will have blue text.</p>
        </li>
        <li>
          <h2>ID Selector</h2>
          <ul>
            <li>
              The ID selector selects a specific HTML element based on its
              unique id attribute.
            </li>
            <li>IDs must be unique within a page.</li>
            <li>
              To select an element with a specific ID, use the # character
              followed by the ID name.
            </li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  #my-heading {
    font-weight: bold;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, the element with id={`"my-heading"`} will have bold
            text.
          </p>
        </li>
        <li>
          <h2>Class Selector</h2>
          <ul>
            <li>
              The class selector selects HTML elements based on their class
              attribute.
            </li>
            <li>Classes can be applied to multiple elements.</li>
            <li>
              To select elements with a specific class, use the . character
              followed by the class name.
            </li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  .highlight {
    background-color: yellow;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all elements with class={`"highlight"`} will have a
            yellow background.
          </p>
        </li>
        <li>
          <h2>Universal Selector</h2>
          <ul>
            <li>
              The universal selector (*) selects all HTML elements on the page.
            </li>
            <li>It’s often used to apply styles globally.</li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  * {
    margin: 0;
    padding: 0;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all elements will have zero margin and padding.
          </p>
        </li>
        <li>
          <h2>Grouping Selector</h2>
          <ul>
            <li>
              The grouping selector allows you to apply the same styles to
              multiple selectors.
            </li>
            <li>Separate selectors with commas.</li>
            <li>Example:</li>
          </ul>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1, h2, h3 {
    font-family: "Helvetica", sans-serif;
  }
                `}
              </code>
            </pre>
          </div>
          <p>
            In this example, all &lt;h1&gt;, &lt;h2&gt;, and &lt;h3&gt; elements
            will use the Helvetica font.
          </p>
          <p>
            For more details, check out the{" "}
            <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on
            CSS Selectors.
          </p>
        </li>
      </ol>
      <div className="button-container">
        <button onClick={() => (window.location.href = "inserting")}>
          back
        </button>
        <button onClick={() => (window.location.href = "color")}>Next</button>
      </div>
    </div>
  );
};
