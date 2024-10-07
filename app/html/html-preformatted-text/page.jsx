
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Using the <pre> Tag in HTML: Preserve Whitespace and Formatting",
  description:
    "Learn how to use the <pre> tag in HTML to preserve whitespace, line breaks, and indentation. This tutorial covers its purpose, best practices, and real-world examples for displaying code snippets, poetry, and ASCII art.",
  keywords:
    "HTML <pre> tag, HTML whitespace, HTML formatting, code snippets, ASCII art, HTML best practices, preformatted text, web development, display code in HTML, HTML coding",
  openGraph: {
    title:
      "Mastering the <pre> Tag in HTML: Display Code, ASCII Art, and More | MergeSociety",
    description:
      "Explore how to use the <pre> tag in HTML for preserving whitespace, line breaks, and formatting. Learn best practices for displaying code snippets, poetry, and ASCII art with practical examples.",
  },
};

const HTMLPre = () => {
  return (
    <div className="lesson-container">
      
      <h1>
        The <code>{`<pre>`}</code> Tag in HTML
      </h1>
      <p>
        Hello there! In this lesson, we'll be exploring the{" "}
        <code>{`<pre>`}</code> tag in HTML - a tag that is used to preserve
        whitespace and line breaks in your text. The <code>{`<pre>`}</code> tag
        is particularly useful when you want to display content that requires
        precise formatting, such as code snippets, poetry, or ASCII art. Let's
        dive into the world of the <code>{`<pre>`}</code> tag and learn how to
        use it effectively.
      </p>

      <h2>
        What Is the <code>{`<pre>`}</code> Tag?
      </h2>
      <p>
        The <code>{`<pre>`}</code> tag in HTML stands for "preformatted text."
        It is used to indicate that the enclosed text should be displayed
        exactly as it is, preserving whitespace, line breaks, and indentation.
        The <code>{`<pre>`}</code> tag is commonly used for displaying content
        that requires a specific layout or formatting, such as code snippets,
        poetry, or ASCII art.
      </p>

      <h2>
        Using the <code>{`<pre>`}</code> Tag
      </h2>
      <p>
        When using the <code>{`<pre>`}</code> tag, there are a few things to
        keep in mind:
      </p>

      <ul>
        <li>
          <strong>Preserve whitespace:</strong> The <code>{`<pre>`}</code> tag
          ensures that whitespace, including spaces, tabs, and line breaks, is
          preserved exactly as it appears in the source code.
        </li>
        <li>
          <strong>Display content with precise formatting:</strong> The{" "}
          <code>{`<pre>`}</code>
          tag is ideal for displaying content that requires precise formatting,
          such as code snippets, poetry, or ASCII art. It helps maintain the
          intended layout and structure of the content.
        </li>
      </ul>

      <h2>
        Examples of Using the <code>{`<pre>`}</code> Tag
      </h2>
      <p>
        Here are some examples of using the <code>{`<pre>`}</code> tag:
      </p>

      <ul>
        <li>
          <strong>Displaying Code Snippets:</strong>
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<pre>
  function greet() {
    console.log("Hello, world!");
  }
</pre>
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Preserving Line Breaks:</strong>
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<pre>
  This is a poem
  with line breaks
  and indentation.
</pre>
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Displaying ASCII Art:</strong>
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<pre>
  ______
  |      |
  |      |
  |      |
  |____|
</pre>
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ul>

      <h2>
        Best Practices for Using the <code>{`<pre>`}</code> Tag
      </h2>
      <ul>
        <li>
          <strong>
            Use <code>{`<pre>`}</code> for precise formatting:
          </strong>{" "}
          The <code>{`<pre>`}</code>
          tag is perfect for content that requires precise formatting, such as
          code snippets, poetry, or ASCII art. It ensures that the formatting is
          maintained as intended.
        </li>
        <li>
          <strong>
            Avoid using <code>{`<pre>`}</code> for regular text:
          </strong>{" "}
          The <code>{`<pre>`}</code>
          tag should be used specifically for content that requires precise
          formatting. Avoid using it for regular paragraphs or text that doesn't
          need whitespace preservation.
        </li>
        <li>
          <strong>
            Nest relevant content within <code>{`<pre>`}</code>:
          </strong>{" "}
          When using
          <code>{`<pre>`}</code>, ensure that the content within it is relevant
          and requires precise formatting. Avoid using <code>{`<pre>`}</code>{" "}
          for content that doesn't need this level of formatting control.
        </li>
      </ul>
      
      <h2>Practice Time!</h2>
      <p>
        Now, {` let's `} put your knowledge into practice! Open your code editor
        and create a new HTML file. Experiment with using the{" "}
        <code>{`<pre>`}</code> tag, displaying code snippets, poetry, or ASCII
        art. Here's a simple exercise to get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "pre.html" in your workspace
          folder.
        </li>
        <li>
          Create a <code>{`<pre>`}</code> block to display a code snippet. For
          example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<pre>
  function greet() { 
    console.log("Hello, world!");
  }
</pre>
    
    `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try using <code>{`<pre>`}</code> to preserve line breaks and
          indentation in a poem or ASCII art. For instance,
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<pre>
This is a poem with
line breaks and indentation.
</pre>

`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've explored the <code>{`<pre>`}</code> tag in HTML,
        including its purpose, usage, and best practices. The{" "}
        <code>{`<pre>`}</code> tag is a valuable tool for preserving whitespace,
        line breaks, and indentation in your content. Remember to use it wisely,
        follow best practices, and always test your HTML code to ensure it
        renders correctly in different browsers and devices. In the next lesson,{" "}
        we'll continue our journey by exploring Comments in HTML. Stay tuned,
        and happy coding!
      </p>

      <Button whereToGo={"html-comments"} />
    </div>
  );
};

export default HTMLPre;
