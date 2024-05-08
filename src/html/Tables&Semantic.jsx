const Tables = () => {
  return (
    <div className="comments-container">
      <h1>Tables in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring tables - a powerful tool
        for presenting structured data in a tabular format. Tables allow you to
        organize and display data in rows and columns, making it easier for users
        to understand and compare information. Let's dive into the world of tables
        in HTML and learn how to create and customize tables effectively.`}
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
        </code>
      </pre>

      <p>
        In the code above, we have a table with two columns:{" "}
        {` "Name" and "Age." `}
        Each row <code>{`(<tr>)`}</code> contains the data for a {` person's `}{" "}
        name and age.
      </p>

      <h2>Customizing Table Appearance</h2>
      <p>
        {` While we won't dive into CSS styles in this lesson, it's important to know
        that you can customize the appearance of tables using CSS (Cascading Style
        Sheets). `}{" "}
        By targeting the different elements within a table, such as
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
          <strong>Border:</strong>{" "}
          {`The "border" attribute allows you to add a
          border around the table.`}{" "}
          For example,
          <br />
          <code>{` <table border="1">`}</code>.
        </li>
        <li>
          <strong>Cellpadding:</strong>{" "}
          {` The "cellpadding" attribute specifies the
          amount of space between the cell content and its border. `}{" "}
          For example,
          <br />
          <code>{`<table cellpadding="5">`}</code>.
        </li>
        <li>
          <strong>Cellspacing:</strong>{" "}
          {` The "cellspacing" attribute specifies the
          amount of space between cells. `}{" "}
          For example, <code>{`<table cellspacing="10">`}</code>.
        </li>
        <li>
          <strong>Width and Height:</strong>{" "}
          {` You can use the "width" and "height"
          attributes to specify the dimensions of the table. `}{" "}
          For example,
          <br />
          <code>{`<table width="300" height="200">`}</code>.
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
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating tables, adding headers,
        rows, and cells, and customizing their appearance using attributes.
        Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "tables.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a basic table with headers and rows. For example,
          <pre>
            <code>
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
            </code>
          </pre>
        </li>
        <li>
          {`Try customizing the appearance of your tables using attributes like
          "border," "cellpadding," or "cellspacing." For instance, you can add a
          border around the table or adjust the spacing between cells.`}
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored tables in HTML, including how to create
        tables, add headers, rows, and cells, customize their appearance using
        attributes, and best practices. Tables are a versatile tool for presenting
        structured data in a clear and organized manner. Remember to use tables
        wisely, follow best practices, and always test your HTML code to ensure your
        tables render correctly in different browsers and devices. In the next
        lesson, we'll move on to semantic HTML. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "block")}>back</button>
        <button onClick={() => (window.location.href = "semantic")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Tables;

export const Semantic = () => {
  return (
    <div className="comments-container">
      <h1>Semantic HTML: Understanding Meaningful Markup</h1>
      <p>
        When we talk about{" "}
        {`"semantic HTML," we're referring to the use of HTML
        tags that convey meaning about the structure and content of a web page.
        Let's`}{" "}
        explore some key semantic elements and how they contribute to creating
        more accessible and well-organized websites.
      </p>
      <h2>Understanding Semantic HTML</h2>
      <p>
        Semantic HTML tags may not visibly render anything on the screen, but
        they carry significant meaning and play a crucial role in enhancing the
        structure, accessibility, and understanding of web content for both
        browsers and assistive technologies. By utilizing semantic tags such as{" "}
        <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
        <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, and others,
        developers imbue their markup with contextual meaning, aiding not only
        in the organization of content but also in conveying the intended
        purpose and relationships within the document. This results in a more
        semantically rich and accessible web, promoting better comprehension for
        both human users and automated systems, despite the absence of immediate
        visual impact.
      </p>
      <p>
        Semantic HTML tags, unlike generic tags like <code>&lt;div&gt;</code>{" "}
        and <code>&lt;span&gt;</code>,{" "}
        {`don't merely act as visual containers;
        they add meaning for browsers and`}{" "}
        potentially search engines.
      </p>
      <p>
        Throughout this tutorial, we{`won't`} provide code outputs. However,
        please understand that these semantic tags play a crucial role in
        organizing your HTML code in the browser.
      </p>
      <section>
        <h2>
          The <code>&lt;header&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;header&gt;</code> element defines the header of a
          document or a section. It often contains a heading, logo, navigation,
          or other introductory content.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {`
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          The <code>&lt;nav&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;nav&gt;</code> element defines a container for
          navigation links, helping to identify the navigation section of your
          page.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {` 
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          The <code>&lt;main&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;main&gt;</code> element encloses the main content of the
          document, excluding headers, footers, or sidebars.{" "}
          {`It's particularly
          useful for screen readers and other devices`}{" "}
          to identify the primary content.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {` 
  <main>
    <h2>Welcome to My Website</h2>
    <p>Explore and enjoy the content of this site.</p>
  </main>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          The <code>&lt;section&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;section&gt;</code> element is a generic container often
          used to group related content, aiding in structuring your document
          into meaningful sections.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {` 
  <section>
    <h2>About Us</h2>
    <p>Learn more about our company and its history.</p>
  </section>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          The <code>&lt;article&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;article&gt;</code> element represents a self-contained
          piece of content that could be distributed and reused independently,
          such as a news article or blog post.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {` 
  <article>
    <h2>Title of the Article</h2>
    <p>Content of the article goes here.</p>
  </article>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          The <code>&lt;footer&gt;</code> Element
        </h2>
        <p>
          The <code>&lt;footer&gt;</code> element defines the footer of a
          document or a section, typically containing metadata, copyright
          information, or links to related documents.
        </p>
        <h4>HTML Code Example:</h4>
        <pre>
          <code>
            {`
  <footer>
    <p>Copyright © 2023 My Website. All rights reserved.</p>
  </footer>
            `}
          </code>
        </pre>
      </section>
      <section>
        <h2>Summary:</h2>
        <p>
          Using semantic HTML elements not only makes your code more meaningful
          to developers but also improves accessibility for users of assistive
          technologies. By using elements like <code>&lt;header&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,{" "}
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and{" "}
          <code>&lt;footer&gt;</code>, you create a clear and organized
          structure for your web pages.
        </p>

        <div className="button-container">
          <button onClick={() => (window.location.href = "tables")}>
            back
          </button>
          <button onClick={() => (window.location.href = "head")}>Next</button>
        </div>
      </section>
    </div>
  );
};
