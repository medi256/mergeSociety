const TextFormating = () => {
  return (
    <div className="comments-container">
      <h1>Text Formatting in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring the wonderful world of
        text formatting in HTML. Text formatting allows you to emphasize,
        highlight, and style your text in various ways, making your content
        more engaging and visually appealing. Let's dive right in and learn
        about the different text formatting options available in HTML.`}
      </p>

      <h2>Basic Text Formatting Tags</h2>
      <p>
        HTML provides several tags that you can use to format text within your
        paragraphs, headings, or other elements. Here are some of the most
        commonly used text formatting tags:
      </p>

      <ul>
        <li>
          <strong>{`<strong>`}:</strong> The <code>{`<strong> `}</code> tag
          makes the enclosed text bold. It is typically used to indicate strong
          emphasis or importance. For example, <br />
          <code>{`<strong>This text is
          bold.</strong>`}</code>
          .
        </li>
        <li>
          <strong>{`<em>:`}</strong> The <code>{`<em>`}</code> tag italicizes
          the enclosed text. It is used to indicate emphasis or stress. For
          instance,
          <br />
          <code>{` <em>This text is italicized.</em>.`}</code>
        </li>
        <li>
          <strong>{`<u>`}:</strong> The <code>{`<u> `}</code>tag underlines the
          enclosed text. It can be used to highlight or emphasize certain text.
          For example,
          <br />
          <code>{`<u>This text is underlined.</u>`}</code>.
        </li>
        <li>
          <strong>
            <code>{`<mark>`}</code>:
          </strong>{" "}
          The <code>{`<mark>`}</code> tag adds a yellow background color to the
          enclosed text, creating a highlight effect. It is often used to mark
          important or relevant text. For instance,
          <br />
          <code>{`<mark>This text is highlighted.</mark>`}</code>.
        </li>
        <li>
          <strong>
            <code>{`<del>`}</code>:
          </strong>{" "}
          The <code>{`<del>`}</code> tag strikes through the enclosed text,
          indicating that it should be deleted or is no longer relevant. For
          example,
          <br />
          <code>{`<del>This text is deleted.</del>`}</code> .
        </li>
        <li>
          <strong>
            <code>{`<ins>`}</code>:
          </strong>{" "}
          The <code>{`<ins>`}</code> tag underlines the enclosed text and
          indicates that it has been inserted or added. It is often used to show
          updates or corrections. For instance,
          <br />
          <code>{` <ins>This text has been inserted.</ins>`}</code>.
        </li>
      </ul>
      <pre>
        <code>
          {`
<p>
  This is a paragraph with <strong>bold</strong>,
  <em>italic</em>, <u>underlined</u>,
  <mark>highlighted</mark>, <del>deleted</del>,
  and <ins>inserted</ins> text.
</p>
   
     `}
        </code>
      </pre>

      <h2>
        Using the <code>{`<sup>`}</code> and <code>{`<sub>`}</code> Tags
      </h2>
      <p>
        The <code>{`<sup>`}</code> and <code>{`<sub>`}</code>{" "}
        {`tags are used for superscript and
        subscript text, respectively. Superscript text appears slightly above
        the baseline, while subscript text appears slightly below it. These
        tags are commonly used for footnotes, mathematical expressions, or
        scientific notations. Here's an example:`}
      </p>
      <pre>
        <code>
          {`
The temperature is 30<sup>o</sup>C.
The formula is H<sub>2</sub>O.
        `}
        </code>
      </pre>

      <p>
        {`In the above code, "30o" will be displayed as superscript, and "2" will be
        displayed as subscript.`}
      </p>

      <h2>
        Using the <code>{`<abbr>`}</code> Tag
      </h2>
      <p>
        The <code>{`<abbr>`}</code>{" "}
        {`tag is used to create abbreviations or acronyms. It
        provides a way to define the full form or meaning of the abbreviation.
        When users hover over the abbreviated text, they can see the full form
        in a tooltip. Here's an example:`}
      </p>
      <pre>
        <code>
          {`
The <abbr title="World Wide Web">WWW</abbr> is a global information system.
        `}
        </code>
      </pre>

      <p>
        {`In this example, hovering over "WWW" will display "World Wide Web" as a
        tooltip.`}
      </p>

      <h2>Best Practices for Text Formatting</h2>
      <ul>
        <li>
          <strong>Use text formatting sparingly:</strong> Text formatting should
          be used to emphasize important words or phrases. Overusing text
          formatting can make your content look cluttered and hard to read.
        </li>
        <li>
          <strong>Use text formatting for its intended purpose:</strong> Each
          text formatting tag has a specific purpose. Use bold for strong
          emphasis, italics for stress or emphasis, underlines for links or
          highlighting, and so on.
        </li>
        <li>
          <strong>Avoid using text formatting for styling:</strong> While text
          formatting can enhance the appearance of your text, it should not be
          used solely for styling purposes. For more advanced styling, you can
          use CSS.
        </li>
        <li>
          <strong>Consider readability:</strong>{" "}
          {`Text formatting should improve
          the readability of your content. Make sure the formatted text is
          still easy to read and doesn't distract or confuse readers.`}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Experiment with the different text
        formatting tags and try creating content with various formatting
        options. Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "text-formatting.html" in your
          workspace folder.`}
        </li>
        <li>
          Add a paragraph to your HTML file and format certain words or phrases
          using bold, italics, underlines, and other text formatting options.
          For example,
          <br />
          <code>{` <p>This is an <strong>important</strong>
          announcement!</p>`}</code>
        </li>
        <li>
          Try using the <code>{`<sup>`}</code> and <code>{`<sub> `}</code> tags
          for superscript and subscript text. For instance,
          <br />
          <code>
            {" "}
            {`<p>The formula is
          E=mc<sup>2</sup>.</p>`}
          </code>
        </li>
        <li>
          View your HTML file in the browser and observe how the text formatting
          affects the appearance and readability of your content.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored the various text formatting options
        available in HTML. Text formatting allows you to emphasize, highlight,
        and style your text in different ways. Remember to use text formatting
        wisely, follow best practices, and always consider the readability of
        your content. In the next lesson, we'll move on to lists and learn how
        to present information in a structured and organized manner. Stay tuned,
        and happy coding!`}
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
