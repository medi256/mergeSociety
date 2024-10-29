import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "HTML Entities: Proper Usage for Special Characters and Symbols",
  description:
    "Explore how to use HTML entities to include special characters like ©, ™, and non-breaking spaces in your web pages. This guide covers character and numeric entities with examples and best practices.",
  keywords:
    "HTML entities, special characters in HTML, character entities, numeric entities, HTML symbols, ©, ™, non-breaking spaces, HTML coding, web development, accessible HTML",
  openGraph: {
    title:
      "Mastering HTML Entities: A Guide to Special Characters and Symbols | MergeSociety",
    description:
      "Learn how to use HTML entities for including special characters in your web pages. This tutorial covers both character and numeric entities, with tips for proper usage and implementation examples.",
  },
};

const HTMLEntity = () => {
  return (
    <div className="lesson-container">
      <h1>Entities in HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring entities in HTML -
        special codes that are used to represent characters that cannot be
        directly typed or have special meanings. Entities allow you to include
        characters like copyright symbols, trademark symbols, or special
        characters in your HTML documents. Let's dive into the world of entities
        in HTML and learn how to use them effectively.
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
              <SyntaxHighlighter language="HTML" style={docco}>
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
            WHATWG HTML Specification
          </a>
        </li>
      </ul>
      <p>
        These resources offer searchable databases and tables of HTML entities,
        making it easy to find the codes you need for your web development
        projects.
      </p>

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
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using entities, including
        special characters, and escaping ampersands within attribute values.
        Here's a simple exercise to get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "entities.html" in your
          workspace folder.
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
              <SyntaxHighlighter language="HTML" style={docco}>
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
        In this lesson, we've explored entities in HTML, including their
        purpose, types, and how to use them effectively. Entities allow you to
        include special characters, symbols, and non-breaking spaces in your
        HTML documents. Remember to use entities wisely, follow best practices,
        and always test your HTML code to ensure it renders correctly in
        different browsers and devices. In the next lesson, we'll continue our
        journey by exploring the pre HTML tag. Stay tuned, and happy coding!
      </p>

      <Button whereToGo={"html-preformatted-text"} />
    </div>
  );
};

export default HTMLEntity;
