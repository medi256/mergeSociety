import "./html.css";

const IntroductionH = () => {
  return (
    <div className="comments-container">
      <h1>Introduction to HTML</h1>
      <p>
        {`
        Welcome to the world of web development! If you're new here, don't
        worry; we'll start from the basics. Web development involves three
        essential languages: HTML, CSS, and JavaScript.`}
      </p>
      <p>
        HTML, which stands for HyperText Markup Language, forms the structure of
        a webpage, defining elements like text, images, and links, similar to a
        blueprint for a building.
      </p>
      <p>
        CSS, or Cascading Style Sheets, adds style and design to your webpage,
        making it visually appealing and user-friendly.
      </p>
      <p>
        JavaScript adds functionality to your webpage, making it interactive and
        allowing users to engage with elements like forms and buttons.
      </p>

      <h2>Understanding Programming Languages</h2>
      <p>
        {`
        In web development, a programming language is a means for developers to
        communicate with computers. It's like a set of rules designed to
        interact with computers effectively.`}
      </p>
      <p>
        While there are numerous programming languages, HTML, CSS, and
        JavaScript are fundamental for web development. Understanding their
        roles is crucial for navigating the programming landscape.
      </p>

      <h2>Setting Up Your Workspace</h2>
      <p>
        Before diving into HTML,{" "}
        {`let's prepare your workspace for writing and
        experimenting with code. All you need is a simple text editor like
        Notepad (Windows), TextEdit (macOS), or Visual Studio Code (available
        for multiple platforms).`}
      </p>
      <p>
        {`
        If you're new to Visual Studio Code, watch this video tutorial to get
        started:`}
      </p>
      <div className="video">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/EUJlVYggR1Y?si=_H3U0c6grc-IAWda"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="sr-only">
          Video tutorial on setting up Visual Studio Code for beginners.
        </p>
      </div>

      <h3>For Smartphone Users:</h3>
      <p>
        {`
        1. Download a code editor app like "QuickEdit" (Android) or "Textastic
        Code Editor" (iOS) from your app store.`}
      </p>
      <p>2. Create a new file within the app.</p>
      <p>3. Save the file with a .html extension (e.g., index.html).</p>

      <h4>Regardless of your device:</h4>
      <p>1. Start coding by typing or copying HTML examples into your file.</p>
      <p>
        {`
        2. View your webpage by opening the file in a web browser. On a
        computer, right-click the file and select 'Open with' or drag it into
        your browser. On a smartphone, use the app's preview feature or open it
        in your mobile browser.`}
      </p>
      <p>
        {`
        As you code and view your webpage, you'll see it come to life. This
        hands-on approach will reinforce your learning and give you a sense of
        accomplishment.`}
      </p>
      <p>
        {`
        Set up your coding environment, and in the next lesson, we'll start
        building our first webpage using HTML.`}
      </p>

      <h2>Interactive Example</h2>
      <p>Below is a simple HTML code example:</p>
      <div>
        <p>This is how you would write HTML code:</p>
        <textarea
          rows="7"
          cols="50"
          className="introHTM"
          style={{ color: "#c7544d" }}
        >
          {`
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
        </textarea>
        <p>This is what it would look like in a browser:</p>
        <iframe
          width="400"
          height="300"
          srcDoc={`
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
          title="Example Result"
        ></iframe>

        <div className="button-container">
          <button onClick={() => (window.location.href = "/HTMLBasicsMobile")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionH;

export const HTMLBasics = () => {
  return (
    <div className="comments-container">
      <h1>HTML Basics:</h1>
      <p>
        {`
        HTML, short for Hypertext Markup Language, is the foundation of web
        pages. It's a standardized language used to create and structure the
        content of websites.`}
      </p>
      <h2>Structure of HTML: </h2>
      <p>
        HTML documents are made up of a series of elements, and these elements
        tell web browsers how to display the content on a webpage.
      </p>
      <h2>Tags in HTML: </h2>
      <p>
        HTML uses tags to define and format content. There are two main types of
        tags in HTML: Container tags and Empty tags.{" "}
      </p>
      <h2>Container tags:</h2>
      <p>
        {" "}
        Container tags are used to enclose content and require both an opening
        and a closing tag. They instruct the browser where the content begins
        and ends
      </p>
      <h5>Examples of Container tags </h5>
      <pre>
        <ol>
          <li>
            {" "}
            <code>&lt;html&gt; &lt;&#47;html&gt;</code>
          </li>
          <li>
            <code>&lt;p&gt; &lt;&#47;p&gt;</code>{" "}
          </li>
          <li>
            <code>&lt;h1&gt; &lt;&#47;h1&gt;</code>{" "}
          </li>
        </ol>
      </pre>
      <p>
        These tags wrap around content and define its structure or presentation.
      </p>
      <h2>Empty tags:</h2>
      <p>
        {`
        Empty tags, also known as self-closing tags, are used to insert elements
        into a page that don't have content or don't need a closing tag.`}
      </p>
      <h5>Examples of Empty tags </h5>
      <pre>
        <ol>
          <li>
            <code>&lt;hr&gt;</code>
          </li>
          <li>
            <code>&lt;br&gt;</code>
          </li>
          <li>
            <code>&lt;img&gt;</code>
          </li>
        </ol>
      </pre>
      <p>
        {`
        Empty tags don't require a closing tag because they don't wrap around
        content; instead, they are used to insert specific elements, like
        horizontal lines, line breaks, or images, into the page.`}
      </p>
      <h3>Summary</h3>
      <p>
        HTML, which stands for Hypertext Markup Language, is the foundation of
        web development. It is used to structure and format web pages, like the
        one you are currently using to learn HTML.{" "}
      </p>
      <h4>In HTML, there are two main types of tags:</h4>
      <p>
        1. <strong>Container Tags:</strong> These tags, such as{" "}
        <code>&lt;html&gt; &lt;&#47;html&gt;, &lt;p&gt; &lt;&#47;p&gt; </code>,
        and <code>&lt;h1&gt; &lt;&#47;h1&gt;</code>, are used to enclose content
        and define its structure on a web page. They require both an opening and
        a closing tag.
      </p>
      <p>
        2. <strong>Empty Tags:</strong> Also known as self-closing tags,
        examples include <code>&lt;hr&gt;, &lt;br&gt;</code>, and{" "}
        <code>&lt;img&gt;</code>. These tags are used to insert specific
        elements into a page that either {`don't have content or don't`} need a
        closing tag.
      </p>
      <p>
        Understanding these fundamental concepts of HTML will pave the way for
        you to create and customize web pages effectively. Happy learning!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/IntroductionHMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/headingsMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
