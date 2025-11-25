import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Inserting CSS: External, Internal, and Inline Methods Explained",
  description:
    "Learn how to insert CSS into your HTML documents using external stylesheets, internal styles, and inline CSS. Master the art of styling web pages with practical examples and best practices.",
  keywords:
    "CSS insertion, external CSS, internal CSS, inline CSS, web design, HTML styling, stylesheet linking",
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-inserting",
  },
  openGraph: {
    title: "Master CSS Insertion Techniques for Web Design",
    description:
      "Explore different methods to insert CSS into HTML: external stylesheets, internal styles, and inline CSS. Includes practical examples and exercises for hands-on learning.",
  },
};

const HTMLInserting = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Inserting CSS</h1>
        <p>
          Welcome back! In this section, we'll dive into the world of CSS and
          explore the different ways to insert CSS into your HTML documents.
          CSS, or Cascading Style Sheets, is a powerful tool that allows you to
          style and design your web pages. By inserting CSS, you can transform
          the appearance, layout, and behavior of your HTML content, making it
          visually appealing and user-friendly. Let's begin!
        </p>

        <h2>External CSS</h2>
        <p>
          One common approach to inserting CSS is by using external stylesheets.
          External stylesheets offer several advantages, including reusability
          and easier maintenance. With external CSS, you can define styles in a
          separate file and apply them to multiple HTML documents.
        </p>

        <h3>Creating an External Stylesheet</h3>
        <p>To create an external stylesheet, follow these steps:</p>

        <ol>
          <li>
            <strong>Open your code editor.</strong> You can use any text editor
            or a specialized code editor like Visual Studio Code or Sublime
            Text.
          </li>
          <li>
            <strong>Create a new file.</strong> In your code editor, go to the
            "File" menu and select "New File" or use the appropriate keyboard
            shortcut (e.g., Ctrl+N or Cmd+N).
          </li>
          <li>
            <strong>Save the file with a .css extension.</strong> When saving
            the file, make sure to give it a descriptive name (e.g.,
            "styles.css" or "main.css") and include the <code>.css</code>{" "}
            extension at the end. This extension indicates that it's a CSS file.
          </li>
          <li>
            <strong>Write your CSS rules.</strong> Inside the newly created CSS
            file, you can start writing your CSS rules. Each rule consists of a
            selector and a set of declarations enclosed in curly braces. Here's
            an example:
            <code>
              <pre>
                <code>
                  <SyntaxHighlighter language="CSS" style={docco}>
                    {`
h1 {
  color: blue;
  text-align: center;
}
              `}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </code>
          </li>
          <li>
            <strong>Save and close the file.</strong> Once you've written your
            CSS rules, save the file and close it. It's now ready to be linked
            to your HTML document.
          </li>
        </ol>

        <h3>Linking External Stylesheet</h3>
        <p>
          Now that you've created your external stylesheet, it's time to link it
          to your HTML document. Here's how you do it:
        </p>

        <code>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
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
              </SyntaxHighlighter>
            </code>
          </pre>
        </code>

        <p>
          In the code above, the <code>link</code> element establishes the
          connection between your HTML document and the external stylesheet. The{" "}
          <code>rel="stylesheet"</code> attribute specifies that the linked file
          is a stylesheet, <code>type="text/css"</code> indicates the MIME type,
          and <code>href="styles.css"</code> provides the path to your CSS file.
        </p>
        <h3>
          You can also watch this video and learn how to create and link your
          CSS file
        </h3>
        <video
          width={"300px"}
          controls
          src="https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public/videos%20and%20audios/cssInsertion_f5qaw3_x2ydwf.mov"
        >
          <p>
            Your browser doesn't support this video format, try opening the
            website in chrome or safari
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
            <strong>Maintenance:</strong> Changes made to the external
            stylesheet will automatically reflect in all linked HTML documents.
            This makes it easier to update and maintain your styles, especially
            when dealing with large projects.
          </li>
          <li>
            <strong>Separation of Concerns:</strong> By separating content
            (HTML) from presentation (CSS), external stylesheets improve code
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
          appearance of specific elements without affecting others. Here's an
          example:
        </p>

        <code>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<h1 style="color: blue; text-align: center;">My Heading</h1>
            `}
              </SyntaxHighlighter>
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
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`<style>`}
              </SyntaxHighlighter>
            </code>
          </code>{" "}
          Element
        </h3>
        <p>
          Another way to use internal CSS is by including a <code>style</code>{" "}
          element within the <code>{`<head>`}</code> section of your HTML
          document. This allows you to define styles that apply to multiple
          elements on the same page. Here's an example:
        </p>

        <code>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
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
              </SyntaxHighlighter>
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
          Inline CSS involves applying styles directly to individual HTML
          elements using the <code>style</code> attribute. This approach is
          useful for one-off styles or when you need to override specific styles
          for a particular element. Here's an example:
        </p>

        <code>
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<h1 style="color: red; font-size: 24px;">My Heading</h1>
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </code>

        <p>
          In this code snippet, the <code>style</code> attribute contains CSS
          properties and their values, directly modifying the appearance of the{" "}
          <code>h1</code> element. The text color is set to red, and the font
          size is increased to 24 pixels.
        </p>

        <h3>Advantages and Disadvantages of Inline CSS</h3>
        <ul>
          <li>
            <strong>Advantage:</strong> Inline CSS allows for highly specific
            styling of individual elements. It can be useful when you need to
            apply unique styles to a single element.
          </li>
          <li>
            <strong>Disadvantage:</strong> Excessive use of inline styles can
            make your HTML code harder to read and maintain. It's generally
            recommended to use external or internal stylesheets for more
            organized and manageable code.
          </li>
        </ul>

        <h2>Practice Time!</h2>
        <p>
          Now it's time to apply what you've learned! Open your code editor and
          create a new HTML file. Let's experiment with different ways of
          inserting CSS:
        </p>

        <ol>
          <li>
            Create an external stylesheet named "styles.css" and link it to your
            HTML document using the <code>link</code> element. Define styles for
            headings (<code>h1</code> to <code>h6</code>) to change their color,
            font-size, and text alignment.
          </li>
          <li>
            In your HTML document, create different heading levels (
            <code>h1</code>
            to <code>h6</code>) and apply the styles from the external
            stylesheet. Observe how the styles are applied consistently across
            the headings.
          </li>
          <li>
            Now, add some internal CSS using the <code>style</code> element
            within the <code>{`<head>`}</code> section. Define styles for
            paragraphs (<code>p</code>) to change their font-family,
            line-height, and text-indent.
          </li>
          <li>
            Experiment with inline CSS by applying styles directly to specific
            elements using the <code>style</code> attribute. Try overriding the
            styles defined in the external stylesheet and observe the changes.
          </li>
          <li>
            Finally, play around with different values and properties to see how
            they affect the appearance of your HTML content. Feel free to
            explore and be creative!
          </li>
          <li>
            One last thing, don't panic or get confused by those CSS properties
            yet. We will cover each property in its separate lesson. Just try
            your best to master how to insert and create rules.
          </li>
        </ol>

        <p>
          Remember, practice makes perfect! The more you experiment and play
          with CSS, the better you'll become at styling your web pages.
        </p>

        <Button whereToGo={"css-selectors"} />
      </div>
    </div>
  );
};

export default HTMLInserting;
