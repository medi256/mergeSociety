const Head = () => {
  return (
    <div className="comments-container">
      <h1>Understanding the HTML head Element</h1>
      <p>
        The HTML <code>&lt;head&gt;</code> element serves as a container for
        essential elements such as <code>&lt;title&gt;</code>,{" "}
        <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>,{" "}
        <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, and{" "}
        <code>&lt;base&gt;</code>.
      </p>
      <h2>
        The <code>&lt;head&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;head&gt;</code> element resides between the{" "}
        <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag,
        containing metadata crucial for the document.
      </p>
      <p>
        HTML metadata, though unseen, plays a vital role in defining the
        {`edocument's`} characteristics, including its title, character set,
        styles, scripts, and other meta-information.
      </p>
      <h2>
        The HTML <code>&lt;title&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;title&gt;</code> element defines the{" "}
        {`document's title,
        visible in the browser's`}{" "}
        title bar or tab. It must consist of text only.
      </p>
      <p>
        The title is critical for Search Engine Optimization (SEO), influencing
        the {`page's`} ranking in search results.
      </p>
      <h4>
        The <code>&lt;title&gt;</code> Element:
      </h4>
      <ul>
        <li>Defines a title in the browser toolbar</li>
        <li>Provides a title for the page when bookmarked</li>
        <li>Displays a title for the page in search engine results</li>
        <li>
          Is exclusively declared within the <code>&lt;head&gt;</code> element
        </li>
      </ul>
      <p>
        Thus, {`it's essential`} to craft titles that are accurate and
        meaningful.
      </p>
      <h5>
        Example of <code>&lt;title&gt;</code> Element:
      </h5>
      <h4>HTML Code:</h4>
      <pre>
        <code>
          &lt;head&gt; &lt;title&gt;My Web Page - Welcome&lt;/title&gt;
          &lt;/head&gt;
        </code>
      </pre>
      <h2>
        The HTML <code>&lt;style&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;style&gt;</code> element defines style information for a
        single HTML page, allowing the inclusion of CSS within the webpage.
      </p>
      <p>
        This tutorial focuses solely on HTML, postponing CSS discussions until
        later. For now, understand that the <code>&lt;style&gt;</code> tag
        facilitates CSS incorporation into webpages.
      </p>
      <h2>
        The HTML <code>&lt;link&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;link&gt;</code> element establishes the relationship
        between the current document and an external resource, such as
        stylesheets.
      </p>
      <p>
        The <code>&lt;link&gt;</code> tag {`doesn't`} render anything on the
        webpage but is instrumental in linking HTML files to crucial resources
        like stylesheets.
      </p>
      <p>
        It acts as a bridge between the webpage and external resources,
        enhancing the {`webpage's`} appearance and functionality.
      </p>
      <h2>
        The HTML <code>&lt;meta&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;meta&gt;</code> tag, a silent narrator in the web
        development realm, reveals essential details beyond the surface.
      </p>
      <h3>
        Section 1: The Alphabet of Characters{" "}
        <code>&lt;meta charset={`"UTF-8"`}&gt;</code>
      </h3>
      <p>
        The <code>&lt;meta charset={`"UTF-8"`}&gt;</code> tag, akin to a
        linguistic maestro, ensures the proper display of characters from
        diverse languages, maintaining clarity and accuracy.
      </p>
      <p>
        {`It's`} primarily used to specify the character set, page description,
        keywords, author, and viewport settings.
      </p>
      <h3>Example:</h3>
      <pre>
        <code>
          {`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Meta Character Set Example  </title>
  </head>
  <body>
  ...
  </body>
  </html>
          `}
        </code>
      </pre>
      <p>
        The <code>&lt;meta charset={`"UTF-8"`}&gt;</code> tag is conventionally
        placed within the <code>&lt;head&gt;</code> tag to ensure proper
        character encoding.
      </p>
      <h3>Setting The Viewport</h3>
      <p>
        The viewport, varying with the device, denotes the{" "}
        {`user's visible area
        of a webpage. It's`}{" "}
        essential to include the following <code>&lt;meta&gt;</code> element in
        all <code>&lt;head&gt;</code> tags:
      </p>
      <pre>
        <code>
          {`
  <meta name="viewport" content="width=device-width, 
  initial-scale=1.0" />
            `}
        </code>
      </pre>
      <p>
        This instruction guides the browser on controlling the {`page's`}{" "}
        dimensions and scaling.
      </p>
      <h2>
        The HTML <code>&lt;script&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;script&gt;</code> element embeds executable code or data
        within the HTML, primarily used for client-side JavaScripts. It can also
        support other languages like JSON, GLSL, etc.
      </p>
      <h2>Chapter Summary</h2>
      <ul>
        <li>
          The <code>&lt;head&gt;</code> element serves as a container for
          metadata.
        </li>
        <li>
          The <code>&lt;title&gt;</code> element defines the {`document's`}{" "}
          title.
        </li>
        <li>
          The <code>&lt;style&gt;</code> element includes style information for
          a single document.
        </li>
        <li>
          The <code>&lt;link&gt;</code> element links the document to external
          resources.
        </li>
        <li>
          The <code>&lt;meta&gt;</code> element specifies metadata for the
          document.
        </li>
        <li>
          The <code>&lt;script&gt;</code> element embeds client-side scripts.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/semanticMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/quotationMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Head;
export const Quotation = () => {
  return (
    <div className="comments-container">
      <h2>Quotations in HTML</h2>
      <p>
        Quotations can add depth and insight to your HTML content, providing
        additional context or emphasizing key points. HTML offers two types of
        quotations: <code>&lt;q&gt;</code> for inline quotations and{" "}
        <code>&lt;blockquote&gt;</code> for longer, block-level quotations.
      </p>
      <h3>
        The HTML <code>&lt;q&gt;</code> Element
      </h3>
      <p>
        The <code>&lt;q&gt;</code> element is used for inline quotations within
        a paragraph or block of text. It indicates that the enclosed text is a
        short inline quotation.
      </p>
      <blockquote>
        <p>
          {`
          "Inline quotations provide a concise way to incorporate short snippets
          of text directly within your content, maintaining readability and
          flow."`}
        </p>
      </blockquote>
      <p>
        The <code>&lt;q&gt;</code> element automatically adds quotation marks
        around the text, making it visually distinct from the surrounding
        content.
      </p>
      <h5>
        Example of <code>&lt;q&gt;</code> Element:
      </h5>
      <p>To include an inline quotation in your HTML:</p>
      <pre>
        <code>
          {`
  <p>
    The author said
    <q>A journey of a thousand miles begins with a single step</q> 
    which is a famous proverb.
  </p>
            `}
        </code>
      </pre>
      <h5>Output:</h5>
      <p>
        The author said{" "}
        <q>A journey of a thousand miles begins with a single step</q> which is
        a famous proverb.
      </p>
      <h3>
        The HTML <code>&lt;blockquote&gt;</code> Element
      </h3>
      <p>
        The <code>&lt;blockquote&gt;</code> element is used for longer,
        block-level quotations that span multiple lines. It signifies that the
        enclosed text is a substantial quotation separate from the main text.
      </p>
      <blockquote>
        <p>
          {`
          "Block quotations offer a visually distinct way to showcase longer
          passages of text, such as excerpts from literature, speeches, or
          articles."`}
        </p>
      </blockquote>
      <p>
        The <code>&lt;blockquote&gt;</code> element typically renders with an
        indentation or different styling to set it apart from the surrounding
        content.
      </p>
      <h5>
        Example of <code>&lt;blockquote&gt;</code> Element:
      </h5>
      <p>To include a block-level quotation in your HTML:</p>
      <pre>
        <code>
          {`
          
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    dapibus nunc id metus pulvinar, vitae blandit dolor sagittis. In eget
    ligula nec mauris elementum volutpat. Proin at tortor purus.
  </p>
  <p>
    Nullam condimentum libero vel ligula semper tristique. Vivamus blandit
    tincidunt est, in vehicula purus varius at. Pellentesque habitant
    morbi tristique senectus et netus et malesuada fames ac turpis
    egestas.
  </p>
</blockquote>
          `}
        </code>
      </pre>
      <h4>Output:</h4>
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dapibus nunc id metus pulvinar, vitae blandit dolor sagittis. In eget
          ligula nec mauris elementum volutpat. Proin at tortor purus.
        </p>
        <p>
          Nullam condimentum libero vel ligula semper tristique. Vivamus blandit
          tincidunt est, in vehicula purus varius at. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
      </blockquote>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/headMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/entitiesMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
