const MinWidth = () => {
  return (
    <div className="comments-container">
      <h1>Min Width</h1>
      <p>
        Imagine you have a form on your website where users can input their
        information. You want to make sure that the form fields are always wide
        enough to comfortably accommodate the text users might input. With
        min-width, you can set a minimum width for these form fields so they
        {`don't become too narrow and make it difficult for users to read what
    they've`}{" "}
        typed.
      </p>
      <p>{`Here's`} a simple example:</p>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
  <style>
    .form-field {
      min-width: 200px; /* This sets the minimum width of the form field */
      margin-bottom: 10px; /* Adds some space between form fields */
    }
  </style>
</head>
<body>
  <form>
    <label for="name">Name:</label>
    <input class="form-field" type="text" id="name" name="name"><br>
    <label for="email">Email:</label>
    <input class="form-field" type="email" id="email" name="email"><br>
    <label for="message">Message:</label><br>
    <textarea class="form-field" id="message" name="message" rows="4" cols="50"></textarea><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, each form field with the class .form-field has a
        min-width: 200px; property. This ensures that even if the content
        entered into the field is narrow, the field itself {`won't`} shrink to
        less than 200 pixels wide. This helps maintain a consistent and
        user-friendly layout for your form, preventing fields from becoming too
        cramped.
      </p>
      <p>
        So, the min-width property allows you to set a minimum width for an
        element, ensuring it {`doesn't`} become too narrow and affect the
        readability or usability of your webpage. Hope that helps clarify
        things!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Min-width.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "maxHeight")}>
          back
        </button>
        <button onClick={() => (window.location.href = "minHeight")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MinWidth;

export const MinHeight = () => {
  return (
    <div className="comments-container">
      <h1>Min Height</h1>
      <p>
        Imagine {`you're`} designing a webpage with a section for articles. Each
        article might have a different amount of text, but you want all of them
        to be visible without too much scrolling. With min-height, you can
        ensure that each article section is at least a certain height, so even
        if one article has less content, it still looks consistent with the
        others.
      </p>
      <p>{`Here's`} a simple example:</p>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`<!DOCTYPE html>
<html>
<head>
  <style>
    .article {
      min-height: 200px; /* This sets the minimum height of each article */
      margin-bottom: 20px; /* Adds some space between articles */
      background-color: lightgray; /* Just for visualization */
      padding: 20px; /* Just for visualization */
    }
  </style>
</head>
<body>
  <div class="article">
    <h2>Article Title 1</h2>
    <p>This is the content of the first article.</p>
  </div>
  <div class="article">
    <h2>Article Title 2</h2>
    <p>This is the content of the second article. It has a bit more text than the first one.</p>
    <p>It even has multiple paragraphs!</p>
  </div>
  <div class="article">
    <h2>Article Title 3</h2>
    <p>This is the content of the third article. It's the longest one,
     but all articles still look consistent.
    </p>
    <p>More content goes here...</p>
  </div>
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, each .article class has a min-height: 200px; property.
        This ensures that even if one article has less content, it will still
        take up at least 200 pixels of height. This maintains consistency in the
        layout, making it visually pleasing and easier for users to navigate.
      </p>
      <p>
        So, the min-height property allows you to set a minimum height for an
        element, ensuring it {`doesn't`} become too short and affect the overall
        design of your webpage. Hope that clarifies things for you!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Min-height.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "minWidth")}>
          back
        </button>
        <button onClick={() => (window.location.href = "lists")}>Next</button>
      </div>
    </div>
  );
};
