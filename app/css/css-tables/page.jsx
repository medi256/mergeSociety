import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "The Magical World of Table Styling in CSS | Web Design Tutorial",
  description:
    "Learn how to transform your HTML tables with CSS styling techniques. Explore border properties, alternating row colors, and improve user experience with our comprehensive guide.",
  keywords:
    "CSS, table styling, web design, HTML tables, CSS borders, tr:nth-child, web development tutorial",
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-tables",
  },
  openGraph: {
    title: "Master CSS Table Styling | Web Design Tutorial",
    description:
      "Discover the magic of CSS table styling. Learn to create visually appealing and functional tables for better user experience and design aesthetics.",
  },
};

const CSStables = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>The Magical World of Table Styling in CSS</h1>
        <p>
          Table styling in CSS is an essential aspect of creating visually
          appealing and functional designs. Tables are commonly used for
          presenting data, organizing information, and displaying structured
          content. In this section, we'll explore the fascinating world of table
          styling and learn how to use CSS to transform your tables into
          beautiful and user-friendly elements. Let's embark on this table
          styling adventure!
        </p>

        <h2>Understanding Table Styling</h2>
        <p>
          Table styling involves applying CSS properties to tables, table rows,
          table headers, and table cells to enhance their appearance and improve
          the user experience. Tables can be styled in numerous ways, including
          adding borders, modifying cell spacing, changing background colors,
          formatting text, and even creating custom designs. Let's explore some
          of the key properties used for table styling:
        </p>

        <h3>Border Properties</h3>
        <p>
          Borders are a fundamental aspect of table styling. The{" "}
          <code>border</code> property allows you to add borders around tables,
          table cells, or specific sides of a table cell. Here are some commonly
          used border properties:
        </p>

        <ul>
          <li>
            <strong>border:</strong> This property sets the border style, width,
            and color for all sides of a table or table cell. You can specify
            values for border-style, border-width, and border-color individually
            or use a shorthand value.
          </li>
          <li>
            <strong>border-collapse:</strong> This property specifies whether
            table borders should be collapsed into a single border or separated.
            A value of
            <code>collapse</code> collapses the borders, while{" "}
            <code>separate</code>
            keeps them separate.
          </li>
          <li>
            <strong>border-spacing:</strong> This property sets the distance
            between adjacent table cells' borders. It is used when{" "}
            <code>border-collapse</code> is set to
            <code>separate</code>.
          </li>
        </ul>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
table {
  border: 1px solid black; /* Adds a solid black border around the table */
  border-collapse: collapse; /* Collapses the borders */
}

td {
  border: 1px solid #ddd; /* Adds borders to table cells */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we added borders to the table and table cells. We
          also collapsed the borders to create a unified border around the
          table. You can experiment with different border styles, widths, and
          colors to create visually appealing tables.
        </p>

        <h3>tr:nth-child(even) Selector</h3>
        <p>
          The tr:nth-child(even) selector is used to target and style every
          other row in a table. This selector allows you to apply styles to
          alternating rows, creating a striped or zebra-striped effect. Here's
          an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
tr:nth-child(even) {
  background-color: #eee; /* Adds a background color to every other row */
}
      `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we used the `tr:nth-child(even)` selector to add a
          background color to every other row in the table. This creates a
          visually appealing alternating row pattern, improving readability and
          making the table more engaging.
        </p>

        <p>
          The `tr:nth-child` selector is powerful because it goes beyond just
          even rows. You can use different values to target specific rows or
          patterns of rows:
        </p>
        <ul>
          <li>
            **Numbers:** Select a specific row by its number, like
            `tr:nth-child(3)` for the third row.
          </li>
          <li>
            **`odd`:** Target all odd-numbered rows, similar to how `even`
            works.
          </li>
        </ul>

        <h2>Using Table Styling</h2>
        <p>
          Table styling can be used to create visually appealing and functional
          tables. In addition to borders and alternating row colors, there are
          other properties that can be used to style tables, such as background
          colors, text formatting, and cell spacing. Let's explore some of these
          properties:
        </p>

        <h3>Background Colors and Text Formatting</h3>
        <p>
          Background colors and text formatting can be used to enhance the
          appearance of tables and improve readability. You can apply background
          colors to table rows, table headers, or individual cells to create
          visual contrast and highlight important information. Here's an
          example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
thead {
  background-color: #f5f5f5; /* Adds a background color to table headers */
  color: #333; /* Changes the text color in table headers */
}

tr:nth-child(even) {
  background-color: #eee; /* Adds alternating row colors */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we added a background color and changed the text
          color in the table headers. We also applied alternating row colors to
          improve readability and make the table more visually appealing.
        </p>

        <h3>Cell Spacing and Alignment</h3>
        <p>
          Cell spacing and alignment can be adjusted to improve the layout and
          readability of tables. The <code>padding</code> property adds space
          inside table cells, while the
          <code>text-align</code> property aligns text within a cell. Here's an
          example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
td {
  padding: 10px; /* Adds padding to table cells */
  text-align: center; /* Centers the text within the cell */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we added padding to create space around the content
          within table cells. We also centered the text within the cells to
          improve readability and create a balanced layout.
        </p>

        <h2>Benefits of Table Styling</h2>
        <p>Using table styling offers several advantages for your designs:</p>

        <ul>
          <li>
            <strong>Visual Appeal:</strong> Table styling allows you to enhance
            the appearance of your tables, making them more visually appealing
            and engaging. You can experiment with different border styles,
            colors, and formatting options to create tables that complement your
            overall design aesthetic.
          </li>
          <li>
            <strong>Readability:</strong> Proper table styling improves
            readability by providing clear borders, spacing, and formatting.
            This makes it easier for users to scan and understand the data
            presented in the table. Alternating row colors also improve
            readability by creating visual contrast.
          </li>
          <li>
            <strong>User Experience:</strong> Table styling can greatly improve
            the user experience. Well-styled tables guide users through data,
            highlight important information, and make data presentation more
            effective and accessible.
          </li>
        </ul>

        <h2>Practice Time!</h2>
        <p>
          Now it's time to put your knowledge into practice! Open your code
          editor and create a new HTML file. Let's explore the wonderful world
          of table styling:
        </p>

        <ol>
          <li>
            Create a simple HTML structure with tables (<code>table</code>),
            table headers (<code>th</code>), and table cells (<code>td</code>)
            to serve as containers for your table styling experiments.
          </li>
          <li>
            Apply different border styles, colors, and padding values to style
            your tables. Try using solid borders, dashed borders, or even double
            borders to see the impact on the appearance.
          </li>
          <li>
            Experiment with background colors, font styles, and text alignment
            to create visually appealing tables. Try using alternating row
            colors to improve readability.
          </li>
          <li>
            Explore the <code>tr:nth-child(even)</code> selector to create
            alternating row patterns in your tables.
          </li>
          <li>
            Refer to table styling resources and tutorials to discover creative
            ways to style tables, such as creating striped tables, adding hover
            effects, or formatting specific columns differently.
          </li>
        </ol>

        <p>
          Remember, table styling is a powerful tool in CSS. It helps create
          visually appealing and functional tables that enhance the user
          experience. Choose table styling options that align with your design
          goals, ensure readability, and create engaging interfaces. Happy
          coding and happy designing!
        </p>

        <Button whereToGo={"css-links"} />
      </div>
    </div>
  );
};

export default CSStables;
