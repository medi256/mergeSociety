function LinksH() {
  return (
    <div className="comments-container">
      <h2>Understanding Links in HTML</h2>
      <p>
        Links in HTML serve as connections between different web pages, enabling
        users to navigate seamlessly. They are created using the{" "}
        <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code> tags.
      </p>
      <h3>Basic Structure:</h3>
      <p>
        In its simplest form, a link is constructed using the <code>href</code>{" "}
        attribute within an <code>&lt;a&gt;</code> tag. The <code>href</code>{" "}
        attribute specifies the destination of the link, which can be either a
        URL or an anchor within the same page.
      </p>
      <h4>Example:</h4>
      <pre>
        <code>&lt;a href={`"URL"`}&gt; Link Text &lt;/a&gt;</code>
      </pre>
      <p>
        Here, <code>Link Text</code> represents the clickable part of the link,
        visible to users.
      </p>
      <h3>Understanding Attributes:</h3>
      <p>
        The <code>href</code> attribute acts as a locator for the link,
        determining its destination. It is analogous to a GPS coordinate guiding
        users to the intended location.
      </p>
      <h2>Examples:</h2>
      <h3>1. Linking to Another Web Page:</h3>
      <pre>
        <code>
          &lt;a href={`"https://www.google.com"`}&gt; Visit Google Website
          &lt;/a&gt;
        </code>
      </pre>
      <p>
        This example demonstrates a link that directs users to the{" "}
        <a href="https://www.google.com">Google website</a> when clicked.
      </p>
      <h3>2. Linking to a Section on the Same Page:</h3>
      <pre>
        <code>&lt;a href={`"#section2"`}&gt; Jump to Section 2 &lt;/a&gt;</code>
      </pre>
      <p>
        Here, clicking the link will navigate users to a specific section
        denoted by an anchor with the ID <code>section2</code> on the same page.
      </p>
      <h2>Key Points to Remember:</h2>
      <ul>
        <li>
          Links consist of <code>&lt;a&gt;</code> tags with an <code>href</code>{" "}
          attribute specifying the destination.
        </li>
        <li>The link text represents what users see and click on.</li>
        <li>
          <code>href</code> attributes can point to external URLs or internal
          anchors.
        </li>
      </ul>
      <p>
        By mastering the creation of links, you empower users to navigate
        seamlessly through your website, enhancing their overall experience.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/lists")}>back</button>
        <button onClick={() => (window.location.href = "/attribute")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LinksH;

export function Attributes() {
  return (
    <div className="comments-container">
      <h2>Understanding HTML Attributes</h2>
      <p>
        HTML attributes provide additional information about HTML elements,
        enriching their functionality and appearance.
      </p>
      <h2>Key Points to Remember about HTML Attributes</h2>
      <ul>
        <li>
          HTML attributes are integral parts of HTML tags, enhancing their
          behavior.
        </li>
        <li>
          Attributes are only present within the start tags of HTML elements.
        </li>
        <li>
          Multiple attributes can be applied to a single HTML element, each
          serving a specific purpose.
        </li>
        <li>
          Attributes consist of name/value pairs enclosed within quotation
          marks.
        </li>
      </ul>
      <h4>Anatomy of an HTML Attribute:</h4>
      <ul>
        <li>An attribute name</li>
        <li>An equal sign (=)</li>
        <li>A value enclosed in quotation marks {`("value")`}</li>
        <p>
          For example: <code>attributename={`"value"`}</code>
        </p>
      </ul>
      <p>
        While single quotation marks can also be used, double quotation marks
        are recommended for consistency.
      </p>
      <h2>Examples of HTML Attributes</h2>
      <h3>
        1. Attribute <b>lang</b>
      </h3>
      <pre>
        <code>&lt;html lang={`"en-US"`}&gt; &lt;/html&gt;</code>
      </pre>
      <p>
        The <b>lang</b> attribute specifies the language used in the HTML
        document, allowing browsers to render text appropriately.
      </p>
      <h3>
        2. Attribute <b>href</b>
      </h3>
      <pre>
        <code>&lt;a href={`"http://www.youtube.com"`}&gt; &lt;/a&gt;</code>
      </pre>
      <p>
        The <b>href</b> attribute directs users to the specified URL when
        clicked, commonly used in hyperlink creation.
      </p>
      <h3>
        3. Attributes <b>id</b> and <b>class</b>
      </h3>
      <pre>
        <code>&lt;p id={`"name"`}&gt; &lt;/p&gt;</code>
        <code>&lt;p class={`"name"`}&gt; &lt;/p&gt;</code>
      </pre>
      <p>
        The <b>id</b> and <b>class</b> attributes enable element referencing,
        facilitating styling and scripting in CSS and JavaScript.
      </p>
      <h3>
        Points to Remember about <b>id</b> and <b>class</b> Attributes:
      </h3>
      <p>
        Multiple elements can share the same class name, allowing uniform
        styling across them.
      </p>
      <p>
        All elements should ideally have a unique <b>id</b> for better document
        structuring.
      </p>
      <p>
        Names for <b>id</b> and <b>class</b> attributes can be chosen according
        to your preference.
      </p>
      <p>
        We will delve into more attributes as we progress through the tutorial.
      </p>
      <h2>Summary</h2>
      <p>
        HTML attributes enrich the functionality and appearance of HTML
        elements, providing additional information for better document
        structuring and interactivity.
      </p>
      <p>
        Attributes are exclusively placed within the start tags of HTML
        elements, enhancing their behavior and facilitating styling and
        scripting.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/linksH")}>back</button>
        <button onClick={() => (window.location.href = "/imagesH")}>
          Next
        </button>
      </div>
    </div>
  );
}
