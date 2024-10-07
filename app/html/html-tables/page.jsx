
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering Accessible HTML Tables: Structuring Data for All Users",
  description:
    "Learn how to create accessible HTML tables that ensure usability for all audiences, including users with disabilities. This tutorial covers proper HTML structure with <th>, <td>, and scope attributes, and offers tips for complex table headers and captions.",
  keywords:
    "accessible HTML tables, web accessibility, HTML table structure, screen readers, WCAG compliance, table headers, <th> element, <td> element, scope attribute, data tables, caption, WAI tutorial",
  openGraph: {
    title:
      "Accessible HTML Tables: A Guide for Better Web Accessibility | MergeSociety",
    description:
      "Discover the essential techniques for building accessible HTML tables. This guide explains the use of <th> and <td> tags, the scope attribute, and other best practices for making tables usable for people with disabilities.",
  },
};

const HTMLTables = () => {
  return (
    <div className="lesson-container">
      
      <h1>Tables in HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring tables - a powerful tool
        for presenting structured data in a tabular format. Tables allow you to
        organize and display data in rows and columns, making it easier for
        users to understand and compare information. Let's dive into the world
        of tables in HTML and learn how to create and customize tables
        effectively.
      </p>

      <h2>Creating a Basic Table in HTML</h2>
      <p>
        In HTML, tables are created using the <code>{`<table>`}</code> tag. The{" "}
        <code>{`<table>`}</code>
        tag acts as a container for the table elements, such as table headers,
        rows, and cells. {`Here's the basic structure of a table in HTML:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<table>
  <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 2</td>
        </tr>
    </tbody>
</table>

    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In the code above, the <code>{`<table>`}</code> tag defines the table.
        Within the table, we have <code>{`<thead>`}</code> for the table
        headers, <code>{`<tbody>`}</code> for the table body,{" "}
        <code>{`<tr>`}</code> for table rows, <code>{`<th>`}</code> for table
        headers, and
        <code>{`<td>`}</code> for table cells.
      </p>

      <h2>Table Headers, Rows, and Cells</h2>
      <p>
        Table headers <code>{`(<th>)`}</code> are used to define the column
        headers of the table. They are typically bold or highlighted to indicate
        their importance. Table rows <code>{`(<tr>)`}</code> contain the
        individual rows of data, and table cells
        <code>{`(<td>)`}</code> contain the actual data or content within each
        cell.{" "}
        {`Here's
        an example:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Alice</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
      
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we have a table with two columns: "Name" and "Age."
        Each row <code>{`(<tr>)`}</code> contains the data for a person's name
        and age.
      </p>

      <h2>Customizing Table Appearance</h2>
      <p>
        While we won't dive into CSS styles in this lesson, it's important to
        know that you can customize the appearance of tables using CSS
        (Cascading Style Sheets). By targeting the different elements within a
        table, such as
        <code>{`<table>`}</code>, <code>{`<thead>`}</code> ,{" "}
        <code>{`<tbody>`}</code> ,<code>{` <tr>`}</code>, <code>{`<th>`}</code>,
        and
        <code>{`<td>`}</code>, you can apply styles such as borders, background
        colors, padding, and more.
      </p>

      <h2>Table Attributes</h2>
      <p>
        There are several attributes that you can use with the{" "}
        <code>{`<table>`}</code> tag to customize its appearance and behavior:
      </p>

      <ul>
        <li>
          <strong>Border:</strong> The "border" attribute allows you to add a
          border around the table. For example,
          <br />
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {` <table border="1">`}
            </SyntaxHighlighter>
          </code>
          .
        </li>
        <li>
          <strong>Cellpadding:</strong>{" "}
          {` The "cellpadding" attribute specifies the
          amount of space between the cell content and its border. `}{" "}
          For example,
          <br />
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`<table cellpadding="5">`}
            </SyntaxHighlighter>
          </code>
          .
        </li>
        <li>
          <strong>Cellspacing:</strong>{" "}
          {` The "cellspacing" attribute specifies the
          amount of space between cells. `}{" "}
          For example,{" "}
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`<table cellspacing="10">`}
            </SyntaxHighlighter>
          </code>
          .
        </li>
        <li>
          <strong>Width and Height:</strong>{" "}
          {` You can use the "width" and "height"
          attributes to specify the dimensions of the table. `}{" "}
          For example,
          <br />
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`<table width="300" height="200">`}
            </SyntaxHighlighter>
          </code>
          .
        </li>
      </ul>
      
      <h2>Best Practices for Using Tables</h2>
      <ul>
        <li>
          <strong>Use tables for structured data:</strong> Tables are ideal for
          presenting data that can be logically organized into rows and columns,
          such as lists, statistics, or product information.
        </li>
        <li>
          <strong>
            Use <code>{`<thead>`}</code> and <code>{`<tbody>`}</code>:
          </strong>{" "}
          Use <code>{`<thead>`}</code>
          for table headers and <code>{`<tbody>`}</code> for the table body.
          This helps screen readers and search engines understand the structure
          of your table.
        </li>
        <li>
          <strong>
            Use <code>{`<th>`}</code> for headers and <code>{`<td>`}</code> for
            cells:
          </strong>
          Use <code>{`<th>`}</code> tags for column headers and{" "}
          <code>{`<td>`}</code> tags for table cells. This ensures proper
          rendering and accessibility.
        </li>
        <li>
          <strong>Keep tables semantic:</strong> Use tables only for presenting
          structured data. Avoid using tables for layout purposes. Use CSS and
          other layout techniques for creating complex layouts.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating tables, adding headers,
        rows, and cells, and customizing their appearance using attributes.
        Here's a simple exercise to get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "tables.html" in your workspace
          folder.
        </li>
        <li>
          Create a basic table with headers and rows. For example,
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<table>
     <thead>
         <tr>
             <th>Name</th>
             <th>Age</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>John</td>
             <td>25</td>
         </tr>
         <tr>
             <td>Alice</td>
             <td>30</td>
         </tr>
     </tbody>
</table>
          
              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try customizing the appearance of your tables using attributes like
          "border," "cellpadding," or "cellspacing." For instance, you can add a
          border around the table or adjust the spacing between cells.
        </li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've explored tables in HTML, including how to create
        tables, add headers, rows, and cells, customize their appearance using
        attributes, and best practices. Tables are a versatile tool for
        presenting structured data in a clear and organized manner. Remember to
        use tables wisely, follow best practices, and always test your HTML code
        to ensure your tables render correctly in different browsers and
        devices. In the next lesson, we'll move on to semantic HTML. Stay tuned,
        and happy coding!
      </p>

      <Button whereToGo={"html-head-element"} />
    </div>
  );
};

export default HTMLTables;
