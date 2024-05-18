const List = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of List Styling in CSS</h1>
      <p>
        {`List styling in CSS is an essential aspect of creating visually
        appealing and functional designs. Lists are commonly used for presenting
        information, navigation, content organization, and more. In this
        section, we'll explore the fascinating world of list styling and learn
        how to use CSS to transform your lists into beautiful and user-friendly
        elements. Let's embark on this list styling adventure!`}
      </p>

      <h2>Understanding List Styling</h2>
      <p>
        List styling involves applying CSS properties to lists, list items, and
        their markers to enhance their appearance and improve the user
        experience. Lists can be styled in numerous ways, including changing the
        marker style, modifying the spacing between list items, adding
        decorative effects, and even creating entirely custom markers. The{" "}
        <code>list-style-type</code> property is one of the key properties used
        for list styling. {`Let's explore it in depth:`}
      </p>

      <h3>list-style-type Property</h3>
      <p>
        The <code>list-style-type</code> property allows you to specify the type
        of marker used for list items. It can be applied to both unordered lists
        (<code>ul</code>) and ordered lists (<code>ol</code>). Here are some
        commonly used values for
        <code>list-style-type</code>:
      </p>

      <ul>
        <li>
          <strong>disc:</strong> This value displays a solid circle as the
          marker. It is commonly used for unordered lists.
        </li>
        <li>
          <strong>circle:</strong> This value displays an empty circle as the
          marker. It is often used for nested lists or to create a more open and
          airy appearance.
        </li>
        <li>
          <strong>square:</strong> This value displays a filled square as the
          marker. It creates a bold and modern look for your lists.
        </li>
        <li>
          <strong>decimal:</strong> This value displays numbers as markers,
          starting from 1, 2, 3, and so on. It is commonly used for ordered
          lists.
        </li>
        <li>
          <strong>lower-alpha:</strong> This value displays lowercase letters as
          markers, starting from a, b, c, and so on. It creates an alphabetical
          list.
        </li>
        <li>
          <strong>upper-roman:</strong> This value displays upper-case Roman
          numerals as markers, starting from I, II, III, and so on. It adds an
          elegant touch to your lists.
        </li>

        <li>
          <strong>none:</strong> This value removes any markers from the list
          items, resulting in a clean and minimalist look. No bullets, numbers,
          or other markers will be displayed, allowing for a seamless
          integration into your content.
        </li>
      </ul>

      <code>
        <pre>
          <code>
            {`
ul {
  list-style-type: circle; /* Changes the marker style to circles */
}

ol {
  list-style-type: lower-alpha; /* Changes the marker style to lowercase letters */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used <code>list-style-type</code> to change the
        marker style for unordered lists to circles and for ordered lists to
        lowercase letters. You can experiment with different values to create
        lists that align with your design aesthetic and content.
      </p>
      <p>
        Experiment with the various values to see how they are displayed in your
        browser.
      </p>

      <h2>Using List Styling</h2>
      <p>
        List styling can be used to create visually appealing and functional
        lists. In addition to <code>list-style-type</code>, there are other
        properties that can be used to style lists, such as <code>padding</code>
        , <code>margin</code>, and
        <code>list-style-image</code>.{" "}
        {`Let's explore some of these properties:`}
      </p>

      <h3>Padding and Margin</h3>
      <p>
        Padding and margin can be used to adjust the spacing around list items.
        Padding controls the space inside the list item, while margin controls
        the space outside the list item. These properties can be used to create
        indentation, add breathing room between list items, and improve the
        overall layout of your lists.
      </p>

      <code>
        <pre>
          <code>
            {`
li {
  padding-left: 20px; /* Adds left padding for indentation */
  margin-bottom: 10px; /* Adds bottom margin for spacing between list items */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we added left padding to create indentation for the
        list items and bottom margin to create spacing between each item. You
        can adjust these values to achieve the desired spacing and layout for
        your lists.
      </p>

      <h3>list-style-image Property</h3>
      <p>
        The <code>list-style-image</code> property allows you to use an image as
        the marker for list items. This property can be used to create unique
        and custom list styles. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
ul {
  list-style-image: url('custom-marker.png'); /* Uses an image as the marker */
}
          `}
          </code>
        </pre>
      </code>
      <p>
        In the code above, we used the <code>list-style-image</code>{" "}
        {` property to
        specify a custom image as the marker for the unordered list. You can
        replace 'custom-marker.png' with the path to your own image file.`}
      </p>
      <h3>Note</h3>
      <p>
        The same way we uploaded images to our background-image is the way we do
        it for the list-style-type. You just need a URL.
      </p>

      <p>
        You can also use other CSS properties on lists just like any other
        element. You can apply color, background, font, and many others.
      </p>

      <h2>Benefits of List Styling</h2>
      <p>Using list styling offers several advantages for your designs:</p>

      <ul>
        <li>
          <strong>Visual Appeal:</strong> List styling allows you to enhance the
          appearance of your lists, making them more visually appealing and
          engaging. You can experiment with different marker styles, colors, and
          spacing options to create lists that complement your overall design
          aesthetic.
        </li>
        <li>
          <strong>Readability:</strong> Proper list styling improves readability
          by providing clear markers, adequate spacing, and a well-organized
          layout. This makes it easier for users to scan and understand the
          information presented in the list.
        </li>
        <li>
          <strong>User Experience:</strong> List styling can greatly improve the
          user experience. Well-styled lists guide users through content,
          highlight important information, and make navigation more intuitive.
          By styling lists effectively, you can enhance the usability and
          accessibility of your designs.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of list
        styling:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with unordered lists (<code>ul</code>)
          and ordered lists (<code>ol</code>) to serve as containers for your
          list styling experiments.
        </li>
        <li>
          Apply different <code>list-style-type</code> values to change the
          marker style of your lists. Try using circles, squares, numbers,
          letters, or even custom images as markers to see the impact on the
          appearance.
        </li>
        <li>
          Experiment with padding and margin to adjust the spacing between list
          items and create a visually balanced layout. Try using different
          values for each side to achieve the desired indentation and spacing.
        </li>
        <li>
          Explore the <code>list-style-image</code> property to use custom
          images as markers. Play with different image options to create unique
          and creative lists.
        </li>
        <li>
          Refer to list styling resources and tutorials to discover more
          advanced list styling techniques, such as creating nested lists,
          adding interactive effects, or using pseudo-classes to style specific
          list items.
        </li>
      </ol>

      <p>
        Remember, list styling is a powerful tool in CSS. It helps create
        visually appealing and functional lists that enhance the user
        experience. Choose list styling options that align with your design
        goals, ensure readability, and create engaging interfaces. Happy coding
        and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "minHeight")}>
          back
        </button>
        <button onClick={() => (window.location.href = "tables")}>Next</button>
      </div>
    </div>
  );
};

export default List;

export const Table = () => {
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
      }

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

      <div className="button-container">
        <button onClick={() => (window.location.href = "lists")}>back</button>
        <button onClick={() => (window.location.href = "links")}>Next</button>
      </div>
    </div>
  );
};
