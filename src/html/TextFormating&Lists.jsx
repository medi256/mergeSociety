import { InArticleAdUnit } from "../AdUnit";
import { NavLink } from "react-router-dom";
const TextFormating = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
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
      <InArticleAdUnit />
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
        {/* <button onClick={() => (window.location.href = "paragraphs")}>
          back
        </button>
        <button onClick={() => (window.location.href = "lists")}>Next</button> */}
    
    <NavLink to={"/HTMLcourse/Paragraphs"} style={{textDecoration:"none",margin:"0 20px",fontSize:"large", color:"#ffc107"}}>
                            <span title="HTML course">Back</span>
                          </NavLink>
                      { <NavLink to={"/HTMLcourse/Lists"} style={{textDecoration:"none", fontSize:"large",color:"#ffc107"}}>
                      <span title="HTML course">Next</span>
                     </NavLink> }
      </div>
    </div>
  );
};

export default TextFormating;

export const Lists = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Lists in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring lists in HTML. Lists are
        a fundamental part of web content, allowing you to present information
        in a structured and organized manner. HTML provides two main types of
        lists: unordered lists (bulleted lists) and ordered lists (numbered
        lists). Let's dive right in and learn how to create and customize lists
        in HTML.`}
      </p>

      <h2>Unordered Lists</h2>
      <p>
        {`Unordered lists, also known as bulleted lists, are used when the order of
        the items in the list is not important. Each item in an unordered list is
        marked with a bullet point. Here's how you can create an unordered list:`}
      </p>
      <pre>
        <code>
          {`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
        
          `}
        </code>
      </pre>

      <p>
        In the above code, the <code>{`<ul>`}</code> tag defines the unordered
        list, and each item in the list is enclosed within{" "}
        <code>{`<li> `}</code> tags. The browser will automatically display
        bullet points for each list item.
      </p>

      <h2>Ordered Lists</h2>
      <p>
        {`Ordered lists, also known as numbered lists, are used when the order of
        the items in the list matters. Each item in an ordered list is marked with
        a number. Here's how you can create an ordered list:`}
      </p>
      <pre>
        <code>
          {`
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
        
          `}
        </code>
      </pre>

      <p>
        Similar to unordered lists, the <code>{`<ol>`}</code> tag defines the
        ordered list, and each item is enclosed within <code>{`<li>`}</code>{" "}
        tags. The browser will automatically number the list items for you.
      </p>
      <InArticleAdUnit />
      <h2>Nested Lists</h2>
      <p>
        {`You can create nested lists in HTML by placing one list inside another.
        This allows you to create hierarchical or multi-level lists. Here's an
        example of a nested list:`}
      </p>

      <pre>
        <code>
          {`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
        
          `}
        </code>
      </pre>

      <p>
        In this example, the second list item contains another unordered list,
        creating a nested list structure. You can nest lists within lists to
        create more complex hierarchies.
      </p>

      <h2>Best Practices for Using Lists</h2>
      <ul>
        <li>
          <strong>Use lists for structured content:</strong> Lists are perfect
          for presenting information in a clear and organized manner. They help
          readers quickly scan and understand your content.
        </li>
        <li>
          <strong>Choose the right list type:</strong>{" "}
          {`Use unordered lists when
          the order of items doesn't matter, and use ordered lists when the
          order is important.`}
        </li>
        <li>
          <strong>Keep list items concise:</strong> Each list item should be
          relatively short and easy to read. If an item becomes too long,
          consider breaking it down into multiple items or using paragraphs
          within the list.
        </li>
        <li>
          <strong>Use indentation for readability:</strong>{" "}
          {`Indentation can
          improve the readability of nested lists. Make sure there's enough
          spacing between nested list items.`}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating unordered and ordered
        lists, and try creating nested lists as well. Here's a simple exercise
        to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "lists.html" in your workspace
          folder.`}
        </li>
        <li>
          Create an unordered list with at least three items. For example,
          <br />
          <pre>
            <code>
              {`
<ul>
  <li>Apples</li>
  <li>Bananas</li>
</ul>
  
    `}
            </code>
          </pre>
          .
        </li>
        <li>
          Create an ordered list with numbered steps for a recipe or tutorial.
          For instance,
          <br />
          <pre>
            <code>
              {`
<ol>
  <li>Step 1: Preheat the oven.</li>
</ol>
            
              `}
            </code>
          </pre>
        </li>
        <li>
          Try creating nested lists by placing one list inside another.
          Experiment with different levels of nesting.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored the basics of lists in HTML, including
        unordered and ordered lists, as well as nested lists. Lists are a
        versatile tool for presenting information in a structured and organized
        way. Remember to use lists wisely, follow best practices, and always
        consider the readability of your content. In the next lesson, we'll move
        on to links and learn how to create hyperlinks in HTML. Stay tuned, and
        happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "Formatting")}>
          back
        </button>
        <button onClick={() => (window.location.href = "linksH")}>Next</button>
      </div>
    </div>
  );
};
