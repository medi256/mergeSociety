const CreatingButtons = () => {
  return (
    <div className="comments-container">
      <h1>Buttons in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring buttons in HTML - one of the
        most commonly used interactive elements on web pages. Buttons allow users to
        trigger actions, submit forms, or navigate to different pages. Let's dive
        into the world of buttons in HTML and learn how to create them effectively.`}
      </p>

      <h2>What Are Buttons in HTML?</h2>
      <p>
        Buttons in HTML are interactive elements that users can click or tap to
        trigger an action. They are typically used for submitting forms,
        navigating to different pages, or performing specific tasks. Buttons are
        an essential part of user interfaces, providing a way for users to
        interact with your website or web application.
      </p>

      <h2>Creating Buttons in HTML</h2>
      <p>
        To create a button in HTML, you can use the <code>{`<button>`}</code>{" "}
        element. The
        <code>{`<button>`}</code> element represents a clickable button that
        users can interact with. {` Here's the basic structure of a button:`}
      </p>

      <code>
        {`
<button>Click me!</button>
        `}
      </code>

      <p>
        In the code above, <code>{`<button>`}</code> is the opening tag, and{" "}
        <code>{`</button>`}</code> is the closing tag. The text between the tags
        represents the label or text that users will see on the button.
      </p>

      <h2>Types of Buttons in HTML</h2>
      <p>There are different types of buttons you can create in HTML:</p>

      <ul>
        <li>
          <strong>Submit Buttons:</strong> Submit buttons are used within forms
          to allow users to submit their data. They are typically used with the
          <code>{`<form>`}</code> element.
        </li>
        <li>
          <strong>Regular Buttons:</strong> Regular buttons are used for general
          purposes, such as navigating to a different page or performing a
          specific action.
        </li>
      </ul>

      <h2>{`Examples of Buttons in HTML`}</h2>
      <p>Here are some examples of creating buttons in HTML:</p>

      <ul>
        <li>
          <strong>Submit Button:</strong>
          <pre>
            <code>
              {`
<form>
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
            
            `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Regular Button:</strong>
          <pre>
            <code>
              {`
<button>Click me!</button>
            
            `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Best Practices for Buttons in HTML</h2>
      <ul>
        <li>
          <strong>Use descriptive labels:</strong> Provide clear and descriptive
          labels for your buttons, so users know what action will be triggered
          when they click the button.
        </li>
        <li>
          <strong>Use appropriate button types:</strong>{" "}
          {` Use the "submit" type for
          buttons within forms, and the "button" type for regular buttons.`}
        </li>
        <li>
          <strong>Ensure accessibility:</strong>{" "}
          {`Make sure your buttons are
          accessible to users with disabilities. Use the "aria-label" attribute to
          provide a descriptive label for screen readers.`}
        </li>
        <li>
          <strong>Test button functionality:</strong> Always test your buttons
          to ensure they work as intended across different browsers and devices.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating different types of buttons
        and adding functionality. Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "buttons.html" in your workspace
          folder.`}
        </li>
        <li>
          Create a submit button within a form. For example,
          <br />
          <pre>
            <code>
              {`
<form>
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
            
              `}
            </code>
          </pre>
        </li>
        <li>
          Try creating a regular button with a descriptive label. For instance,
          <br />
          <pre>
            <code>
              {`

<button>Click me to continue</button>.
`}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored buttons in HTML, including their purpose,
        creation, and best practices. Buttons are an essential part of user interfaces,
        allowing users to interact with your website or application. Remember to use
        descriptive labels, follow accessibility guidelines, and always test your
        buttons to ensure they provide a smooth user experience. In the next
        lesson, we'll continue our journey by exploring iframe.
        Stay tuned, and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "HTMLStructure")}>
          back
        </button>
        <button onClick={() => (window.location.href = "iframe")}>Next</button>
      </div>
    </div>
  );
};

export default CreatingButtons;
export const Iframe = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;iframe&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;iframe&gt;</code> element is used to embed another
        document within the current HTML document. It allows you to display
        content from another URL or source inline on your webpage.
      </p>
      <h3>Example 1: Embedding a Google Map</h3>
      <p>
        You can embed a Google Map using an <code>&lt;iframe&gt;</code> element:
      </p>
      <pre>
        <code>
          {`
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4848967822143!2d-74.00996668573602!3d40.70595984213321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e534de7bcb%3A0x6a07709d14af81f3!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1648661886851!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          `}
        </code>
      </pre>
      <p>Output: (A Google Map embedded within the webpage)</p>
      <h3>Example 2: Embedding a Video</h3>
      <p>
        You can embed a YouTube video using an <code>&lt;iframe&gt;</code>{" "}
        element:
      </p>
      <pre>
        <code>
          {`
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          `}
        </code>
      </pre>
      <p>Output: (A YouTube video embedded within the webpage)</p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;iframe&gt;</code> element supports various attributes,
        including:
      </p>
      <ul>
        <li>
          <code>src</code>: Specifies the URL of the content to be embedded.
        </li>
        <li>
          <code>width</code> and <code>height</code>: Specifies the dimensions
          of the embedded content.
        </li>
        <li>
          <code>allowfullscreen</code>: Allows the content to be displayed in
          fullscreen mode.
        </li>
        <li>
          <code>frameborder</code>: Specifies whether to display a border around
          the iframe.
        </li>
        <li>
          <code>allow</code>: Specifies a set of permissions for the content
          within the iframe.
        </li>
        <li>
          <code>loading</code>: Specifies the loading behavior of the iframe.
        </li>
        <li>and more...</li>
      </ul>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;iframe&gt;</code> element to embed content from
          another source, such as maps, videos, or external websites, within
          your HTML document.
        </li>
        <li>
          Ensure that the content you embed is secure and trustworthy, as it can
          potentially execute scripts and access cookies in the context of your
          webpage.
        </li>
        <li>
          Consider the dimensions and aspect ratio of the embedded content to
          ensure proper display and responsiveness.
        </li>
        <li>
          Provide alternative content or fallback options for users whose
          browsers do not support iframes or who have disabled iframe rendering.
        </li>
        <li>
          Be cautious when embedding content from external sources, as it may
          affect the performance and security of your webpage.
        </li>
        <li>
          Ensure that embedded content complies with applicable laws,
          copyrights, and usage policies.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "CreateButtons")}>
          back
        </button>
        <button onClick={() => (window.location.href = "favicon")}>Next</button>
      </div>
    </div>
  );
};
