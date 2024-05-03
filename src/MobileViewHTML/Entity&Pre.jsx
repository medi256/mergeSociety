const Entity = () => {
  return (
    <div className="comments-container">
      <h2>HTML Entities</h2>
      <p>
        HTML entities are special codes used to display characters that have
        special meaning in HTML, such as reserved characters like{" "}
        {`"<",  ">", "&",`} and non-breaking spaces. These entities ensure that
        such characters are displayed correctly in the browser and do not
        interfere with HTML markup.
      </p>
      <h3>Reserved Characters</h3>
      <p>
        Reserved characters, such as {`"<" and   ">",`} have special meanings in
        HTML and must be represented using entities to display them as regular
        text.
      </p>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Entity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{"<"}</td>
            <td>&amp;lt;</td>
          </tr>
          <tr>
            <td>{">"}</td>
            <td>&amp;gt;</td>
          </tr>
          <tr>
            <td>{"&"}</td>
            <td>&amp;amp;</td>
          </tr>
        </tbody>
      </table>
      <h3>Non-Breaking Space</h3>
      <p>
        Non-breaking space, represented by `&nbsp;`, is used to create space
        between words or elements that should not be broken by line breaks or
        word wrapping.
      </p>
      <p>
        For example, to create a space between two words that should always
        appear together:
      </p>
      <pre>
        <code>
          {`
          First&nbsp;Name
          `}
        </code>
      </pre>
      <p>
        Output: <pre>First&nbsp;Name</pre>
      </p>
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
      <h2>
        The HTML <code>&lt;pre&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;pre&gt;</code> element in HTML represents preformatted
        text. Text within this element is typically displayed in a monospace
        font and preserves both spaces and line breaks.
      </p>
      <p>
        The <code>&lt;pre&gt;</code> tag is useful for displaying code snippets,
        ASCII art, or any text where formatting and spacing are important.
      </p>
      <h3>
        Example of <code>&lt;pre&gt;</code> Element:
      </h3>
      <pre>
        <code>
          function greet() &#123;
          {"\n"}
          &nbsp;&nbsp;console.log{`("Hello, World!")`};{"\n"}
          &#125;
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>
          function greet() &#123;
          {"\n"}
          &nbsp;&nbsp;console.log{`("Hello, World!")`};{"\n"}
          &#125;
        </code>
      </pre>
      <p>
        The text inside the <code>&lt;pre&gt;</code> element is rendered exactly
        as it appears in the HTML code, including whitespace and line breaks.
      </p>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;pre&gt;</code> element for displaying blocks of code
          or text that require preservation of whitespace and line breaks.
        </li>
        <li>
          Avoid using the <code>&lt;pre&gt;</code> element for general text
          content, as it may disrupt the flow of the page.
        </li>
      </ul>

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
