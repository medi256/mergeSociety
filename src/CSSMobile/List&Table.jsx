import { useNavigate } from "react-router-dom";
import "./indexCSS.css";

const List = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Lists</h1>
      <h2>HTML Lists Recap</h2>
      <p>There are two main types of lists in HTML — Ordered and Unordered.</p>
      <p>
        In Ordered lists {`(<ol></ol>)`}, the order of the list items is
        important. The items may appear in order by number, roman numeral, alpha
        numeral, or another type of marker. The default marker for ordered lists
        is a number (or decimal).
      </p>
      <p>
        In Unordered lists {`(<ul></ul>)`}, the order of the list items does not
        matter. The items appear in bullet format. The default marker for
        unordered lists is a round bullet point or disc.
      </p>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401427/unordered-list_paktt8.png"
          alt="images of unordered list"
        />
      </div>
      <p>
        Each list item within an ordered or unordered list is created with the{" "}
        {`<li></li>`} tag.
      </p>
      <h1>List-Specific Styles</h1>
      <p>
        There are three common properties specific to styling lists:
        list-style-type, list-style-position, and list-style-image. There is
        also a shorthand property which includes all three.
      </p>
      <h3>list-style-type</h3>
      <p>
        The markers (or bullet points) that appear in ordered and unordered
        lists can be styled in a variety of ways. The CSS property for styling
        the marker type is list-style-type. The default list-style-type value
        for an ordered list is decimal, whereas the default for an unordered
        list is disc.
      </p>
      <h4>Ordered list example:</h4>
      <pre>
        <code>
          {`
  /* css */
  ol {
    list-style-type: upper-roman;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401636/list-style-type-upper-roman_tmm01x.png"
          alt="this image describes ordered lists with roman list style type"
        />
      </div>
      <h3>Unordered list example:</h3>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style-type: square;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401791/list-style-type-square_agxirh.png"
          alt="these are lists with square bullets"
        />
      </div>
      <h3>No marker example:</h3>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style-type: none;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401893/listNone_d9kmsq.png"
          alt="these image describes lists with no bullets"
        />
      </div>
      <p>Accepted values for the list-style-type property include:</p>
      <h4>Unordered:</h4>
      <ul>
        <li>disc (default)</li>
        <li>circle</li>
        <li>square</li>
      </ul>
      <h4>Ordered:</h4>
      <ul>
        <li>decimal (default)</li>
        <li>decimal-leading-zero</li>
        <li>lower-roman</li>
        <li>upper-roman</li>
        <li>lower-greek</li>
        <li>lower-latin</li>
        <li>upper-latin</li>
        <li>armenian</li>
        <li>georgian</li>
        <li>lower-alpha</li>
        <li>upper-alpha</li>
      </ul>
      <h4>Other:</h4>
      <ul>
        <li>none</li>
      </ul>
      <p>
        Note: all the property values listed above can be used for styling both
        ordered and unordered lists (ex: an ordered list with square list
        markers).
      </p>
      <h3>list-style-position</h3>
      <p>
        list-style-position controls whether the list marker appears inside or
        outside of each list item element {`(<li></li>)`}. The property accepts
        two values, outside (default) or inside.
      </p>
      <p>
        Position the marker outside of the list item element, and all text lines
        and sub-lines of each list item will align vertically:
      </p>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style-position: outside; /* default */
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401993/positionOut_azosla.png"
          alt="this image shows how lists are positioned outside"
        />
      </div>
      <h3>list-style-image</h3>
      <p>
        The list-style-image property accepts an image url in place of the list
        marker. The default value for this property is none.
      </p>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style-image: url(https://url-to-image);
  }
      `}
        </code>
      </pre>
      <h2>list-style Shorthand</h2>
      <p>
        list-style is a shorthand property for the three style properties listed
        above. The order of values list-style accepts is list-style-type,
        list-style-position, and list-style-image. If any value is omitted, the
        default value for that property will be used.
      </p>
      <h4>Example:</h4>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style: circle inside none;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712402102/shorthand_invwlz.png"
          alt="this image has an example on how to use the image shorthand property"
        />
      </div>
      <h1>More List-Specific Styling</h1>
      <p>
        Ordered list tags also accept attributes that control the flow, count,
        or specific marker values of its list items. These include the start,
        reversed, and value attributes. See the MDN resources listed below for
        further details.
      </p>
      <h3>General Styling</h3>
      <p>
        List content can be styled just like other p or div elements. color,
        font-family, margin, padding, or border are just a few examples of
        properties that can be added to either the ul, ol, or li elements.
      </p>
      <p>
        Note that any styles added to the ul or ol element will affect the
        entire list. Styles added directly to the li elements will affect the
        individual list items. In the example below, the border and
        background-color properties are styled differently between the list and
        list item elements:
      </p>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style-type: circle;
    border: 2px solid blue;
    background-color: lightblue;
  }
  li {
    margin: 5px;
    background-color: lightyellow;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712402197/listAgain_dylo5w.png"
          alt="There was an error with this image"
        />
      </div>
      <h3>List Spacing</h3>
      <p>
        You may notice extra spacing in front of the list items when
        list-style-type is set to none. Setting padding to 0 (or whatever
        spacing is preferred) on the list element will override this default
        padding.
      </p>
      <pre>
        <code>
          {`
  /* css */
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 5px 10px;
    background-color: #EEEEEE;
    border: 1px solid #DDDDDD;
  }
      `}
        </code>
      </pre>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712402284/listPadding_ixue4s.png"
          alt="Removing padding on lists"
        />
      </div>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Lists.
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default List;

export const Table = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>CSS Tables</h1>
      <p>
        With CSS, we can significantly enhance the appearance of HTML tables.
      </p>
      <h3>CSS Table Borders</h3>
      <p>
        We can add borders to a table using the <code>border</code> CSS
        property. Here is an example:
      </p>
      <h4>CSS code</h4>
      <pre>
        <code>
          {`
  table, th, td {
    border: 2px solid black;
  }
      `}
        </code>
      </pre>
      <table style={{ border: "2px solid black" }}>
        <tr style={{ border: "2px solid black" }}>
          <th style={{ border: "2px solid black" }}>First Name</th>
          <th style={{ border: "2px solid black" }}>Last Name</th>
        </tr>
        <tr style={{ border: "2px solid black" }}>
          <td style={{ border: "2px solid black" }}>Massa</td>
          <td style={{ border: "2px solid black" }}>Medi</td>
        </tr>
        <tr style={{ border: "2px solid black" }}>
          <td style={{ border: "2px solid black" }}>Bank</td>
          <td style={{ border: "2px solid black" }}>Summer</td>
        </tr>
      </table>
      <p>
        Was that table ugly? Yes, because of the multiple borders that made it
        look unattractive. But {`don't worry, we'll`} fix that!
      </p>
      <h3>CSS Collapsing Table Borders</h3>
      <p>
        The <code>border-collapse</code> CSS declaration collapses table borders
        into one.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  table {
    border-collapse: collapse;
  }

  table, th, td {
    border: 2px solid black;
  }
      `}
        </code>
      </pre>
      <table style={{ border: "2px solid black", borderCollapse: "collapse" }}>
        <tr>
          <th style={{ border: "2px solid black" }}>First Name</th>
          <th style={{ border: "2px solid black" }}>Last Name</th>
        </tr>
        <tr>
          <td style={{ border: "2px solid black" }}>Massa</td>
          <td style={{ border: "2px solid black" }}>Medi</td>
        </tr>
        <tr>
          <td style={{ border: "2px solid black" }}>Bank</td>
          <td style={{ border: "2px solid black" }}>Summer</td>
        </tr>
      </table>
      <h3>CSS Padding</h3>
      <p>
        To add space between a table {`cell's`} border and content we can use
        the <code>padding</code> CSS property.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  table, th, td {
    border: 2px solid black;
    padding: 5px;
  }
      `}
        </code>
      </pre>
      <table style={{ border: "2px solid black", padding: "5px" }}>
        <tr>
          <th style={{ border: "2px solid black", padding: "5px" }}>
            First Name
          </th>
          <th style={{ border: "2px solid black", padding: "5px" }}>
            Last Name
          </th>
        </tr>
        <tr>
          <td style={{ border: "2px solid black", padding: "5px" }}>Massa</td>
          <td style={{ border: "2px solid black", padding: "5px" }}>Medi</td>
        </tr>
        <tr>
          <td style={{ border: "2px solid black", padding: "5px" }}>Bank</td>
          <td style={{ border: "2px solid black", padding: "5px" }}>Summer</td>
        </tr>
      </table>
      <h3>Aligning Text Content</h3>
      <p>
        We can align text inside the table cells using the{" "}
        <code>text-align</code> CSS property.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  table {
    border-collapse: collapse;
    text-align: center;
  
  table, th, td {
    border: 2px solid black;
    padding: 5px;
  }
      `}
        </code>
      </pre>
      <table
        style={{
          border: "2px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <tr>
          <th style={{ border: "2px solid black", padding: "5px" }}>
            First Name
          </th>
          <th style={{ border: "2px solid black", padding: "5px" }}>
            Last Name
          </th>
        </tr>
        <tr>
          <td style={{ border: "2px solid black", padding: "5px" }}>Massa</td>
          <td style={{ border: "2px solid black", padding: "5px" }}>Medi</td>
        </tr>
        <tr>
          <td style={{ border: "2px solid black", padding: "5px" }}>Bank</td>
          <td style={{ border: "2px solid black", padding: "5px" }}>Summer</td>
        </tr>
      </table>
      <h2>Full-Width Table</h2>
      <p>
        Sometimes you want your table to stretch across the entire screen. To
        achieve this, set the width of the <code>&lt;table&gt;</code> element to
        100%.
      </p>
      <h4>Like this</h4>
      <pre>
        <code>
          {`
  table {
    width: 100%;
  }
      `}
        </code>
      </pre>
      <p>Now your table will span the entire width of its container.</p>
      <p>
        For a zebra-striped effect (alternating row colors), you can assign
        different classes to your table rows and then apply a background color
        to them. There are other methods you can use, but we will not cover them
        in this part; we will address them elsewhere.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Table.
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
