const CommentsH = () => {
  return (
    <div className="comments-container">
      <h1>Comments in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring comments in HTML - a feature
        that allows you to include notes, explanations, or instructions in your HTML
        code. Comments are ignored by web browsers, meaning they won't be displayed
        on the web page itself. Comments are useful for providing additional
        information, documenting your code, or temporarily disabling certain parts
        of your code during development or testing. Let's dive into the world of
        comments in HTML and learn how to use them effectively.`}
      </p>

      <h2>What Are Comments in HTML?</h2>
      <p>
        Comments in HTML are special constructs that allow you to include notes,
        explanations, or instructions within your HTML code. Comments are
        denoted by specific delimiters, and they are not rendered or displayed
        on the web page. Comments are primarily intended for providing
        information or instructions to other developers who may work on the
        code.
      </p>

      <h2>Creating Comments in HTML</h2>
      <p>
        {`Comments in HTML are created using special delimiters that indicate the
        beginning and end of the comment. Here's the basic structure of an HTML
        comment:`}
      </p>
      <pre>
        <code>
          {`
<!-- This is a comment -->
        `}
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<!--`}</code> marks the start of the
        comment, and the <code>{`-->`}</code>
        marks the end of the comment. Anything within these delimiters is
        considered a comment and will be ignored by web browsers.
      </p>

      <h2>Using Comments in HTML</h2>
      <p>Comments in HTML can be used for various purposes:</p>

      <ul>
        <li>
          <strong>Documentation:</strong> Comments can be used to provide
          explanations, instructions, or additional information about your code.
          This helps other developers understand your code and its
          functionality.
        </li>
        <li>
          <strong>Temporary Disabling:</strong> Comments can be used to
          temporarily disable certain parts of your HTML code during development
          or testing. This allows you to test different scenarios or disable
          specific features without deleting the code entirely.
        </li>
        <li>
          <strong>Collaboration:</strong> Comments can be used to communicate
          with other developers working on the same project. You can leave
          notes, ask questions, or provide feedback within the HTML code itself.
        </li>
      </ul>

      <h2>Examples of Comments in HTML</h2>
      <p>Here are some examples of using comments in HTML:</p>

      <ul>
        <li>
          <strong>Documentation Comment:</strong>
          <pre>
            <code>
              {`
<!-- This section displays the user's profile information -->
<div class="user-profile">
  <h2>User Profile</h2>
  <p>Name: <span class="name">John Doe</span></p>
  <p>Email: <span class="email">john@example.com</span></p>
</div>
          
          `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Temporary Disabling Comment:</strong>
          <pre>
            <code>
              {`
<!-- This feature is temporarily disabled -->
<div>
  <!-- <p>This section is hidden</p> -->
</div>
            
            `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Collaboration Comment:</strong>
          <pre>
            <code>
              {`
<!-- Note to other developers: This section requires additional testing and validation -->
            
            `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Best Practices for Comments in HTML</h2>
      <ul>
        <li>
          <strong>Use comments for documentation:</strong> Include comments to
          provide explanations, instructions, or additional information about
          your HTML code. This helps other developers understand and collaborate
          more effectively.
        </li>
        <li>
          <strong>Keep comments concise and relevant:</strong> Avoid writing
          lengthy comments that may become outdated or confusing. Keep your
          comments focused on providing valuable information.
        </li>
        <li>
          <strong>Update and remove outdated comments:</strong> Ensure that your
          comments remain accurate and relevant. Remove comments that are no
          longer applicable to avoid confusion for other developers.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with adding comments, documenting your
        HTML code, or temporarily disabling certain parts. Here's a simple exercise
        to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "comments.html" in your workspace
          folder.`}
        </li>
        <li>
          Add a comment to provide an explanation for a section of your HTML
          code. For example,
          <pre>
            <code>
              {`
<!-- This section displays the navigation menu -->.
              `}
            </code>
          </pre>
        </li>
        <li>
          Try using comments to temporarily disable certain parts of your HTML
          code during development or testing. For instance,
          <pre>
            <code>
              {`
<!-- This feature is under development and will be enabled soon -->.
              
              `}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored comments in HTML, including their purpose,
        usage, and best practices. Comments are a valuable tool for providing
        additional information, documenting your code, or temporarily disabling
        certain parts. Remember to use comments wisely, keep them concise and
        relevant, and always consider the audience who may read and benefit from
        your comments. In the next lesson, we'll continue our journey by exploring the
        Structure of an HTML Document. Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "pre")}>back</button>
        <button onClick={() => (window.location.href = "sub")}>Next</button>
      </div>
    </div>
  );
};

export default CommentsH;
export const Sub = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;sub&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;sub&gt;</code> element is used to define subscript text in
        HTML. Subscript text appears half a character below the normal line and
        is typically used for footnotes, chemical formulas, mathematical
        expressions, and other situations where smaller text is required.
      </p>
      <h3>Example:</h3>
      <p>
        The chemical formula for water (
        <code>
          H<sub>2</sub>O
        </code>
        ) can be written using the <code>&lt;sub&gt;</code> element for the
        subscript {`"2"`}.
      </p>
      <pre>
        <code>
          {`
  <p>
    The chemical formula for water (H<sub>2</sub>O) is written using the
    <sub> element for the subscript "2".
  </p>
          `}
        </code>
      </pre>
      <p>
        Output: The chemical formula for water (H<sub>2</sub>O) is written using
        the <sub>2</sub> element for the subscript{`"2".`}
      </p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;sub&gt;</code> element does not have any specific
        attributes.
      </p>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;sub&gt;</code> element to represent subscript text
          in HTML, such as footnotes, chemical formulas, and mathematical
          expressions.
        </li>
        <li>
          Avoid using the <code>&lt;sub&gt;</code> element for purely
          presentational purposes; ensure that subscript text carries semantic
          meaning.
        </li>
        <li>
          Ensure that subscript text is appropriately styled for readability and
          accessibility, especially for users with visual impairments.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "commentsH")}>
          back
        </button>
        <button onClick={() => (window.location.href = "sup")}>Next</button>
      </div>
    </div>
  );
};
