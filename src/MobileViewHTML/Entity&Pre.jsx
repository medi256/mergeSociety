import { InArticleAdUnit } from "../AdUnit";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Entity = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Entities in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring entities in HTML - special
        codes that are used to represent characters that cannot be directly typed
        or have special meanings. Entities allow you to include characters like
        copyright symbols, trademark symbols, or special characters in your HTML
        documents. Let's dive into the world of entities in HTML and learn how
        to use them effectively.`}
      </p>

      <h2>What Are Entities in HTML?</h2>
      <p>
        Entities in HTML are special codes that are used to represent characters
        that cannot be directly typed or have special meanings. They are used to
        ensure that your HTML code is properly interpreted and displayed by web
        browsers. Entities allow you to include characters that may not be
        available on your keyboard or have specific purposes, such as copyright
        symbols or non-breaking spaces.
      </p>

      <h2>Types of Entities in HTML</h2>
      <p>There are two main types of entities in HTML:</p>

      <ul>
        <li>
          <strong>Character Entities:</strong> Character entities are used to
          represent specific characters that cannot be directly typed. They are
          denoted by an ampersand (&), followed by a code, and ending with a
          semicolon (;). For example, &amp;copy; represents the copyright symbol
          (©).
        </li>
        <li>
          <strong>Numeric Entities:</strong> Numeric entities are used to
          represent characters by their Unicode code points. They start with an
          ampersand (&), followed by a pound sign (#), then the code point, and
          ending with a semicolon (;). For example, &amp;#169; also represents
          the copyright symbol (©).
        </li>
      </ul>

      <h2>Using Entities in HTML</h2>
      <p>
        When using entities in HTML, there are a few things to keep in mind:
      </p>

      <ul>
        <li>
          <strong>Use entities for special characters:</strong> Entities allow
          you to include characters that may not be available on your keyboard,
          such as copyright symbols (©), trademark symbols (™), or non-breaking
          spaces (&amp;nbsp;).
        </li>
        <li>
          <strong>Use numeric entities for Unicode characters:</strong> If you
          need to include characters from other languages or special symbols,
          you can use numeric entities to represent their Unicode code points.
        </li>
        <li>
          <strong>Escape characters within attribute values:</strong> If you
          need to include an ampersand (&) within an attribute value, you can
          use the entity &amp;amp; to represent it.
        </li>
      </ul>

      <h2>Examples of Entities in HTML</h2>
      <p>Here are some examples of using entities in HTML:</p>

      <ul>
        <li>
          <strong>Character Entities:</strong>

          <code>
            <p>This is a copyright symbol: &amp;copy;</p>
          </code>
        </li>
        <li>
          <strong>Numeric Entities:</strong>

          <code>
            <p>This is a trademark symbol: &amp;#8482;</p>
          </code>
        </li>
        <li>
          <strong>Escaping Ampersands in Attribute Values:</strong>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`
<a href="https://www.example.com?param=value&amp;amp;other=true">Click me!</a>
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ul>

      <h3>Exploring More Entities</h3>
      <p>
        If you need to use special characters or symbols in your HTML, you can
        find a comprehensive list of HTML entities and their corresponding codes
        on various websites and documentation resources. Some popular references
        include:
      </p>
      <ul>
        <li>
          <a
            href="https://dev.w3.org/html5/html-author/charref"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C HTML Character Reference
          </a>
        </li>
        <li>
          <a
            href="https://www.toptal.com/designers/htmlarrows/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Arrows
          </a>
        </li>
        <li>
          <a
            href="https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Living Standard - Named Character References
          </a>
        </li>
      </ul>
      <p>
        These resources offer searchable databases and tables of HTML entities,
        making it easy to find the codes you need for your web development
        projects.
      </p>
      <InArticleAdUnit />
      <h2>Best Practices for Entities in HTML</h2>
      <ul>
        <li>
          <strong>Use entities for special characters:</strong> Familiarize
          yourself with common character entities, such as &amp;copy; for the
          copyright symbol, &amp;trade; for the trademark symbol, or &amp;nbsp;
          for a non-breaking space.
        </li>
        <li>
          <strong>Use numeric entities for Unicode characters:</strong> If you
          need to include characters from other languages or special symbols,
          use numeric entities to represent their Unicode code points.
        </li>
        <li>
          <strong>Escape ampersands within attribute values:</strong> When
          including an ampersand (&) within an attribute value, use the entity
          &amp;amp; to ensure proper interpretation and rendering.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using entities, including special
        characters, and escaping ampersands within attribute values. Here's a
        simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "entities.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a paragraph with a copyright symbol using the &amp;copy;
          entity. For example, <p>Copyright &amp;copy; 2023 My Company</p>.
        </li>
        <li>
          Try using numeric entities to represent characters from other
          languages or special symbols. For instance, &amp;#127775; represents
          the heart emoji (♥).
        </li>
        <li>
          Experiment with escaping ampersands within attribute values. For
          example,
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`
<a href="https://www.example.com?param=value&amp;amp;other=true">
 Click me!
</a>.
              
              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored entities in HTML, including their purpose,
        types, and how to use them effectively. Entities allow you to include
        special characters, symbols, and non-breaking spaces in your HTML
        documents. Remember to use entities wisely, follow best practices, and
        always test your HTML code to ensure it renders correctly in different
        browsers and devices. In the next lesson, we'll continue our journey by
        exploring the pre HTML tag. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/quotationMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/preMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Entity;
export const Pre = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>
        The <code>{`<pre>`}</code> Tag in HTML
      </h1>
      <p>
        Hello there! In this lesson, {` we'll `} be exploring the{" "}
        <code>{`<pre>`}</code> tag in HTML - a tag that is used to preserve
        whitespace and line breaks in your text. The <code>{`<pre>`}</code> tag
        is particularly useful when you want to display content that requires
        precise formatting, such as code snippets, poetry, or ASCII art.{" "}
        {` Let's `} dive into the world of the <code>{`<pre>`}</code> tag and
        learn how to use it effectively.
      </p>

      <h2>
        What Is the <code>{`<pre>`}</code> Tag?
      </h2>
      <p>
        The <code>{`<pre>`}</code> tag in HTML stands for{" "}
        {` "preformatted text." `} It is used to indicate that the enclosed text
        should be displayed exactly as it is, preserving whitespace, line
        breaks, and indentation. The <code>{`<pre>`}</code> tag is commonly used
        for displaying content that requires a specific layout or formatting,
        such as code snippets, poetry, or ASCII art.
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
              <SyntaxHighlighter language="javascript" style={docco}>
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
              <SyntaxHighlighter language="javascript" style={docco}>
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
              <SyntaxHighlighter language="javascript" style={docco}>
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
      <InArticleAdUnit />
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
          formatting. Avoid using it for regular paragraphs or text that{" "}
          {` doesn't
          need whitespace preservation.`}
        </li>
        <li>
          <strong>
            Nest relevant content within <code>{`<pre>`}</code>:
          </strong>{" "}
          When using
          <code>{`<pre>`}</code>, ensure that the content within it is relevant
          and requires precise formatting. Avoid using <code>{`<pre>`}</code>{" "}
          for content that{" "}
          {` doesn't
          need this level of formatting control. `}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, {` let's `} put your knowledge into practice! Open your code editor
        and create a new HTML file. Experiment with using the{" "}
        <code>{`<pre>`}</code> tag, displaying code snippets, poetry, or ASCII
        art.{" "}
        {` Here's a simple exercise to
        get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "pre.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a <code>{`<pre>`}</code> block to display a code snippet. For
          example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
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
              <SyntaxHighlighter language="javascript" style={docco}>
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
        In this lesson, {` we've `} explored the <code>{`<pre>`}</code> tag in
        HTML, including its purpose, usage, and best practices. The{" "}
        <code>{`<pre>`}</code> tag is a valuable tool for preserving whitespace,
        line breaks, and indentation in your content. Remember to use it wisely,
        follow best practices, and always test your HTML code to ensure it
        renders correctly in different browsers and devices. In the next lesson,{" "}
        {` we'll continue our journey by exploring
        Comments in HTML. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/entitiesMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/commentsHMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
