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
      >
        <p>
          {`Your browser doesn't support this video format, try opening the
          website in chrome or safari`}
        </p>
      </video>

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
        <button onClick={() => (window.location.href = "/syntaxMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/selectMobile")}>
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
        {`Selectors are one of the most fundamental concepts in CSS. They are like
        powerful tools that allow you to target and style specific HTML
        elements on your web page. Think of selectors as patterns that help
        you identify and select elements for styling. In this section, we'll
        explore the most commonly used CSS selectors and how they work. Let's
        get started!`}
      </p>

      <h2>Element Selector</h2>
      <p>
        The element selector, also known as a type selector, targets elements
        based on their HTML tag name. It selects all elements of a specific
        type. For example, {` let's `} say you want to style all{" "}
        <code>
          {" "}
          <code>{`<p>`}</code>
        </code>
        elements on your page. You can use the element selector like this:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: blue;
}

/* This selector targets all <p> elements and makes their text color blue. */
          `}
          </code>
        </pre>
      </code>

      <p>
        In this example, the selector <code>p</code> targets all{" "}
        <code>
          {" "}
          <code>{`<p>`}</code>
        </code>{" "}
        elements on the page and sets their text color to blue. This is a simple
        and straightforward way to apply styles to elements of a specific type.
      </p>

      <h2>Class Selector</h2>
      <p>
        {`The class selector is a versatile tool that targets elements based on
        their class attribute. Classes are used to group and style multiple
        elements with the same style rules. For instance, let's say you have
        several elements that you want to highlight with a yellow background.
        You can use the class selector like this:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.highlight {
  background-color: yellow;
}

/* This selector targets all elements with the class "highlight" and makes their background color yellow. */
          `}
          </code>
        </pre>
      </code>

      <p>In your HTML, you can add the class to elements like this:</p>

      <code>
        <pre>
          <code>
            {`
<p class="highlight">This paragraph will have a yellow background.</p>
<div class="highlight">This div will also have a yellow background.</div>
          `}
          </code>
        </pre>
      </code>

      <p>
        By using the class selector, you can apply the same styles to multiple
        elements, making your code more efficient and maintainable.
      </p>

      <h2>ID Selector</h2>
      <p>
        {`The ID selector is like a laser pointer that targets a specific element
        based on its unique ID. Each ID should be unique within a page, making
        it perfect for styling individual elements. For example, let's say you
        want to style the header of your web page:`}
      </p>

      <code>
        <pre>
          <code>
            {`
#header {
  font-size: 24px;
}

/* This selector targets the element with the ID "header" and sets its font size to 24 pixels. */
          `}
          </code>
        </pre>
      </code>

      <p>In your HTML, you can assign an ID to an element like this:</p>

      <code>
        <pre>
          <code>
            {`
<h1 id="header">This is the header</h1>
          `}
          </code>
        </pre>
      </code>

      <p>
        Keep in mind that IDs should be unique, so you can use them to target
        specific elements on your page.
      </p>

      <h2>Attribute Selector</h2>
      <p>
        The attribute selector is like a detective that targets elements based
        on their attributes and their values. It allows you to select elements
        that have a specific attribute or attribute value. For example,{" "}
        {` let's `}
        say you want to style all links (
        <code>
          {" "}
          <code>{`<a>`}</code>
        </code>
        ) that point to external websites:
      </p>

      <code>
        <pre>
          <code>
            {`
a[href^="https"] {
  color: green;
}

/* This selector targets all <a> elements with an "href" attribute starting with "https" and makes their text color green. */
          `}
          </code>
        </pre>
      </code>

      <p>
        In this example, the attribute selector targets links that have an{" "}
        <code>href</code>{" "}
        {` attribute starting with "https". You can use this
        selector to apply styles to elements based on their attributes.`}
      </p>

      <h2>Descendant Selector</h2>
      <p>
        The descendant selector is like a family tree that targets elements
        based on their relationship with other elements. It allows you to apply
        styles to elements that are nested within other elements. For instance,{" "}
        {` let's `} say you want to style list items (<code> {`<li>`}</code>)
        that are descendants of unordered lists (<code> {`<ul>`}</code>):
      </p>

      <code>
        <pre>
          <code>
            {`
ul li {
  color: red;
}

/* This selector targets <li> elements that are descendants of <ul> elements and makes their text color red. */
          `}
          </code>
        </pre>
      </code>

      <p>In your HTML, the structure would look like this:</p>

      <code>
        <pre>
          <code>
            {`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
          `}
          </code>
        </pre>
      </code>

      <p>
        With the descendant selector, you can easily style elements based on
        their hierarchical relationship.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code
        editor and create a new HTML file. Let's experiment with different
        selectors and observe how they target and style elements:`}
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
          class of {` "highlight".`}
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
        {`Remember, practice makes perfect! The more you experiment with
        selectors, the better you'll become at targeting and styling elements
        on your web pages. Happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/insertMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/colorMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
