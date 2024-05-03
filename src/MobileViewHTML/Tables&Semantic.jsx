const Tables = () => {
  return (
    <div className="comments-container">
      <h1>Understanding HTML Tables</h1>
      <p>
        HTML tables are essential for organizing tabular data effectively on web
        pages. They allow you to present various types of information, such as
        school schedules, swimming pool timetables, or statistical data, in a
        structured format. This module will guide you through the process of
        creating and understanding HTML tables.
      </p>
      <h2>What is a Table in HTML?</h2>
      <p>
        An HTML table is a structured collection of rows and columns used to
        display tabular data. It enables easy retrieval of information related
        to different data entities, such as people and their attributes, weekly
        schedules, or business contacts.
      </p>
      <p>
        Simply put, a table is a way to organize data in a grid-like format.
      </p>
      <h2>Visual Examples</h2>
      <p>
        Take a look at these images below to understand how HTML tables can be
        used:
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712399517/numTable_y6g52h.png"
        alt="Example of a numbers table"
        width="500px"
      />
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712399616/swimTable_ygwnee.png"
        alt="Example of a timetable"
        width="400px"
      />
      <h2>Creating an HTML Table</h2>
      <p>An HTML table consists of cells organized into rows and columns.</p>
      <h2>Example</h2>
      <h4>HTML Code:</h4>
      <pre>
        <code>
          {`
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          `}
        </code>
      </pre>
      <h2>Output</h2>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
      <br />
      <h2>Understanding Table Structure</h2>
      <p>
        Each cell in a table is defined using the <code>&lt;td&gt;</code> tag.
        The content between <code>&lt;td&gt;</code> and <code>&lt;/td&gt;</code>{" "}
        represents the data within the cell.
      </p>
      <p>
        Similarly, each row begins with a <code>&lt;tr&gt;</code> tag and ends
        with a <code>&lt;/tr&gt;</code> tag.
      </p>
      <h2>Table Headers</h2>
      <p>
        Table header cells are defined using the <code>&lt;th&gt;</code> tag
        instead of <code>&lt;td&gt;</code>. They are typically used to represent
        headings for columns or rows.
      </p>
      <h2>Example</h2>
      <pre>
        <code>
          {`
  <table>
    <tr>
      <th>Person 1</th>
      <th>Person 2</th>
      <th>Person 3</th>
    </tr>
  </table>
          `}
        </code>
      </pre>
      <h2>Output</h2>
      <table>
        <tr>
          <th>Person 1</th>
          <th>Person 2</th>
          <th>Person 3</th>
        </tr>
      </table>
      <h2>Adding Borders to Tables</h2>
      <p>
        By default, HTML tables do not have borders. However, you can add
        borders using the <code>border</code> attribute within the{" "}
        <code>&lt;table&gt;</code> tag.
      </p>
      <h2>Example</h2>
      <h4>HTML Code:</h4>
      <pre>
        <code>
          {`
<table border="1">
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>
          `}
        </code>
      </pre>
      <h2>Output</h2>
      <table border="1">
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </tr>
        <tr>
          <td>Cell 3</td>
          <td>Cell 4</td>
        </tr>
      </table>
      <p>
        In this example, the <code>border={`"1"`}</code> attribute adds a border
        with a thickness of 1 pixel. You can adjust the numerical value to
        change the border thickness as needed.
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
          <button onClick={() => (window.location.href = "/tablesMobile")}>
            back
          </button>
          <button onClick={() => (window.location.href = "/headMobile")}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
};
