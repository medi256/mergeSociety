function LinksH() {
  return (
    <div className="comments-container">
      <h1>Links in HTML</h1>
      <p>
        {`Welcome back, aspiring web developer! In this lesson, we'll be exploring
        one of the most fundamental elements of the web - links. Links, also
        known as hyperlinks, are what make the web interactive and allow users
        to navigate from one web page to another. Let's dive into the world of
        links in HTML and learn how to create and customize them effectively.`}
      </p>

      <h2>Creating Links in HTML</h2>
      <p>
        In HTML, links are created using the <code>{`<a>`}</code> tag, which
        stands for
        {`"anchor."`} The <code>{`<a>`}</code> tag is used to define a
        hyperlink.{" "}
        {`Here's the
        basic structure of a link in HTML:`}
      </p>
      <pre>
        <code>
          {`
        
<a href="https://www.example.com"&gt;Click me!</a>
        `}
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<a>`}</code> tag defines the link.{" "}
        {`The "href" attribute
        is used to specify the URL or web address that the link should point to.`}
        The text between the opening and closing <code>{`<a>`}</code> tags is
        the visible text of the link, often called the link text or anchor text.
        This is the text that users will see and click on.
      </p>

      <h2>Customizing Link Appearance</h2>
      <p>
        {`By default, links in HTML are blue and underlined. However, you can
        customize the appearance of links to match your website's design or to
        make them stand out. While we won't dive into CSS styles in this lesson,
        it's important to know that you can use CSS to change the color,
        underline style, or even add background colors to your links.`}
      </p>

      <h2>Opening Links in New Tabs or Windows</h2>
      <p>
        {`By default, clicking on a link will open the linked web page in the same
        browser tab or window. However, you can specify that the link should be
        opened in a new tab or window, providing a better user experience in
        certain cases. Here's how you can do that:`}
      </p>
      <pre>
        <code>
          {`
<a href="https://www.example.com" target="_blank">
  Open in a new tab
</a>`}
        </code>
      </pre>

      <p>
        {`In the code above, we added the "target" attribute with the value
        "_blank"`}{" "}
        to the <code>{`<a>`}</code> tag.{" "}
        {`This tells the browser to open the link
        in a new tab or window, depending on the user's browser settings.`}
      </p>

      <h2>Best Practices for Using Links</h2>
      <ul>
        <li>
          <strong>Use descriptive link text:</strong>{" "}
          {`The text of the link
          should clearly indicate where the link leads. Avoid using generic
          phrases like "Click here" or "Read more." Instead, use descriptive
          text that gives users a clear idea of what they can expect when they
          click the link.`}
        </li>
        <li>
          <strong>Make links visually distinct:</strong> Ensure that links stand
          out from the surrounding text. Users should be able to easily identify
          clickable elements on your web page. You can use color, underlines, or
          other visual cues to indicate that text is a clickable link.
        </li>
        <li>
          <strong>Use meaningful URLs:</strong>{" "}
          {`The URL specified in the "href"
          attribute should be meaningful and relevant to the link text. Avoid
          using misleading or cryptic URLs that may confuse users.`}
        </li>
        <li>
          <strong>Test your links:</strong> Always test your links to ensure
          they are working correctly. Broken links can frustrate users and
          negatively impact the user experience. Regularly check your links to
          make sure they are up-to-date and functional.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating links, customizing their
        appearance, and specifying how they should be opened. Here's a simple
        exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "links.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a link to your favorite website using the <code>{` <a>`}</code>{" "}
          tag. For example,
          <br />
          <code>
            {`
            
<a href="https://www.example.com">
  Visit my favorite website!
</a>.
            `}
          </code>
        </li>
        <li>
          Try adding multiple links to different web pages within your HTML
          document. Experiment with different link texts and URLs.
        </li>
        <li>
          {`Specify that a link should be opened in a new tab or window using the
          "target" attribute. For instance,`}
          <br />
          <pre>
            <code>
              {`
              
<a href="https://www.example.com" target="_blank">
  Open in a new tab
</a>.
              
              `}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored the basics of links in HTML, including how
        to create links, customize their appearance, and specify how they should
        be opened. Links are an essential part of the web, allowing users to
        navigate between web pages and explore different websites. Remember to
        use links wisely, follow best practices, and always test your links to
        ensure a smooth user experience. In the next lesson, we'll move on to
        attributes and learn what attributes are and their usecase. Stay tuned,
        and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "lists")}>back</button>
        <button onClick={() => (window.location.href = "attribute")}>
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
        <button onClick={() => (window.location.href = "linksH")}>back</button>
        <button onClick={() => (window.location.href = "imagesH")}>Next</button>
      </div>
    </div>
  );
}
