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
          For example,
          <br />
          <code>{`<table cellspacing="10">`}</code>.
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
        <button onClick={() => (window.location.href = "/blockMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/semanticMobile")}>
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
      <h1>Semantic HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring Semantic HTML - a concept
        that focuses on the meaning and structure of your HTML code. Semantic HTML
        involves using HTML tags and attributes to convey the purpose and
        significance of your content, making it more accessible and understandable
        to both users and search engines. Let's dive into the world of Semantic
        HTML and learn how to write more meaningful and semantic code.`}
      </p>

      <h2>What Is Semantic HTML?</h2>
      <p>
        Semantic HTML is a way of writing HTML code that emphasizes the meaning
        and purpose of your content. It involves using HTML tags and attributes
        that accurately describe the content they contain. By using Semantic
        HTML, you make your code more readable, accessible, and search engine
        friendly. Semantic HTML helps convey the structure and importance of
        your content to both users and machines.
      </p>

      <h2>Benefits of Semantic HTML</h2>
      <p>Using Semantic HTML offers several benefits:</p>

      <ul>
        <li>
          <strong>Accessibility:</strong> Semantic HTML improves accessibility
          for users with disabilities. Screen readers and assistive technologies
          rely on semantic tags to interpret and convey the content to users who
          cannot see the page visually.
        </li>
        <li>
          <strong>Search Engine Optimization (SEO):</strong> Search engines,
          like Google, use semantic tags to understand the content and structure
          of your web pages. Semantic HTML can help improve your search engine
          rankings and make your content more discoverable.
        </li>
        <li>
          <strong>Code Maintainability:</strong> Semantic HTML makes your code
          more readable and understandable. It becomes easier to maintain and
          update your code when it accurately represents the meaning and purpose
          of the content.
        </li>
        <li>
          <strong>Flexibility and Reusability:</strong> Semantic HTML allows you
          to create more flexible and reusable code. By using semantic tags, you
          can easily style and manipulate specific elements without affecting
          the overall structure.
        </li>
      </ul>

      <h2>Examples of Semantic HTML</h2>
      <p>
        Here are some examples of Semantic HTML in action, along with code
        snippets:
      </p>

      <ul>
        <li>
          <strong>
            Using <code>{`<nav>`}</code> :
          </strong>{" "}
          The <code>{`<nav>`}</code> tag is used to define the navigation
          section of your website, such as the main menu or navigation links. It
          helps users and search engines understand the navigational structure
          of your site.
          <pre>
            <code>
              {`
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
  
    `}
            </code>
          </pre>
        </li>
        <li>
          <strong>
            Using <code>{`<header>`}</code> and <code>{` <footer>`}</code> :
          </strong>{" "}
          The
          <code>{`<header>`}</code> tag is used to define the header section of
          your web page, typically containing the logo, site title, and
          navigation. The
          <code>{` <footer>`}</code> tag is used for the footer section,
          containing contact information, copyright notices, or additional
          links.
          <pre>
            <code>
              {`
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
</header>

<footer>
  <p>Copyright 2023 My Website. All rights reserved.</p>
</footer>
  
    `}
            </code>
          </pre>
        </li>
        <li>
          <strong>
            Using <code>{`<article>`}</code> and <code>{`<section>`}</code>:
          </strong>{" "}
          The
          <code>{`<article>`}</code> tag is used to define a self-contained
          piece of content, such as a blog post or news article. The{" "}
          <code>{`<section>`}</code> tag is used to group related content
          together, such as a section within a web page.
          <pre>
            <code>
              {`
<article>
  <h2>My Blog Post</h2>
  <p>This is the content of my blog post.</p>
</article>

<section>
  <h2>About Me</h2>
  <p>This is a section about me.</p>
</section>
  
    `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Best Practices for Semantic HTML</h2>
      <ul>
        <li>
          <strong>Use semantic tags appropriately:</strong> Choose the right
          semantic tag based on the purpose and meaning of the content. For
          example, use <code>{`<nav>`}</code> for navigation,{" "}
          <code>{`<header>`}</code> for the header section, and{" "}
          <code>{`<article>`}</code> for self-contained articles or blog posts.
        </li>
        <li>
          <strong>Keep content within semantic tags:</strong> Ensure that the
          content within semantic tags accurately represents the meaning and
          purpose of the tag. For instance, use <code>{`<nav>`}</code> only for
          navigation links.
        </li>
        <li>
          <strong>Avoid using semantic tags for styling purposes:</strong>{" "}
          Semantic tags should convey the meaning and structure of your content,
          not just for visual styling.
        </li>
        <li>
          <strong>Be creative and flexible:</strong> Semantic HTML allows you to
          be creative and flexible in your code. Experiment with different
          semantic tags and structures to find the best representation of your
          content.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using semantic tags, structuring
        your content, and making it more meaningful. Here's a simple exercise to
        get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "semantic.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a basic structure for a web page using semantic tags, such as
          <code>{`<header>`}</code>, <code>{`<nav>`}</code>,{" "}
          <code>{`<main>`}</code>, <code>{`<article>`}</code>, and
          <code>{`<footer>`}</code>. Be creative and structure your content in a
          meaningful way.
        </li>
        <li>
          Try adding your own content within the semantic tags. For instance,
          create a blog post using the <code>{`<article>`}</code> tag and
          structure it with headings, paragraphs, and images.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored Semantic HTML, including its purpose,
        benefits, and best practices. Semantic HTML helps make your code more
        meaningful, accessible, and search engine friendly. Remember to use
        semantic tags wisely, be creative, and always test your code to ensure it
        provides a great user experience. In the next lesson, we'll continue our
        journey by exploring the Head  element and all   other elements found in the head element. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/tablesMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/headMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
