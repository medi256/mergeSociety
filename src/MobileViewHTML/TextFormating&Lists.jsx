const TextFormating = () => {
  return (
    <div className="comments-container">
      <h1>Text Formatting in HTML</h1>
      <p>
        Text formatting is a crucial aspect of web development, allowing you to
        enhance the appearance and readability of your content. HTML provides
        various tags and attributes for formatting text in different ways.
      </p>
      <h2>Common Text Formatting Techniques</h2>
      <p>
        <strong>Bold Text:</strong> Use the <code>&lt;strong&gt;</code> tag to
        make text bold. For example:
      </p>
      <pre>
        <code>{`<p>This is <strong>bold</strong> text.</p>`}</code>
      </pre>
      <p>
        This is <strong>bold</strong> text.
      </p>
      <p>
        <strong>Italic Text:</strong> Use the <code>&lt;em&gt;</code> tag to
        italicize text. For example:
      </p>
      <pre>
        <code>{`<p>This is <em>italic</em> text.</p>`}</code>
      </pre>
      <p>
        This is <em>italic</em> text.
      </p>
      <p>
        <strong>Underlined Text:</strong> Although HTML does not have a native
        tag for underlining text, you can achieve this using CSS or the
        <code>&lt;u&gt;</code> tag{" "}
        {`(though it's considered outdated and not
        recommended). Example with CSS:`}
      </p>
      <pre>
        <code>
          {`<p style="text-decoration: underline;">This is underlined text.</p>`}
        </code>
      </pre>
      <p style={{ textDecoration: "underline" }}>This is underlined text.</p>
      <p>
        <strong>Strikethrough Text:</strong> Use the <code>&lt;s&gt;</code> or
        <code>&lt;del&gt;</code> tag to create strikethrough text. For example:
      </p>
      <pre>
        <code>{`<p>This is <s>strikethrough</s> text.</p>`}</code>
      </pre>
      <p>
        This is <s>strikethrough</s> text.
      </p>
      <p>
        These are just a few examples of text formatting techniques available in
        HTML. Experiment with different tags and CSS styles to achieve the
        desired formatting for your content.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/paragraphsMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/listsMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TextFormating;

export const Lists = () => {
  return (
    <div className="comments-container">
      <h1>Lists in HTML</h1>
      <p>
        Lists are essential for organizing and presenting information in a
        structured manner on web pages. HTML provides three types of lists:
        ordered lists, unordered lists, and definition lists.
      </p>
      <h2>Ordered Lists (ol)</h2>
      <p>
        Ordered lists are numbered lists where each item is preceded by a number
        or another ordered marker. Use the <code>&lt;ol&gt;</code> tag to create
        an ordered list. For example:
      </p>
      <pre>
        <code>
          {`
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}
        </code>
      </pre>
      <p>Output:</p>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>
      <h2>Unordered Lists (ul)</h2>
      <p>
        Unordered lists are bulleted lists where each item is preceded by a
        bullet or another unordered marker. Use the <code>&lt;ul&gt;</code> tag
        to create an unordered list. For example:
      </p>
      <pre>
        <code>
          {`
<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Banana</li>
</ul>`}
        </code>
      </pre>
      <p>Output:</p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
      <h2>Definition Lists (dl)</h2>
      <p>
        Definition lists are used to display a list of terms and their
        definitions. Use the <code>&lt;dl&gt;</code> tag to create a definition
        list. For example:
      </p>
      <pre>
        <code>
          {`
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}
        </code>
      </pre>
      <p>Output:</p>
      <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
      </dl>
      <p>
        Lists are versatile elements in HTML, allowing you to present
        information in a structured and organized manner.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/FormattingMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/linksHMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
