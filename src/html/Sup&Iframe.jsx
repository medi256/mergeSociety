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
      <h1>
        The <code>{`<iframe>`}</code> Element in HTML
      </h1>
      <p>
        Hello there! In this lesson, {` we'll `} be diving deep into the{" "}
        <code>{`<iframe>`}</code>
        element in HTML - a versatile tool that allows you to embed external
        content and create rich, interactive experiences on your web pages. The{" "}
        <code>{`<iframe>`}</code>
        element is commonly used for displaying videos, maps, social media
        posts, and more. {` Let's `} explore the world of{" "}
        <code>{`<iframe>`}</code> and learn how to use it effectively.
      </p>

      <h2>
        What Is the <code>{`<iframe>`}</code> Element?
      </h2>
      <p>
        The <code>{`<iframe>`}</code> element in HTML, short for{" "}
        {` "inline frame," `} is a powerful tool that allows you to embed
        another HTML document or external content within your current HTML
        document. It creates a rectangular area on your web page where the
        external content is displayed seamlessly. The <code>{`<iframe>`}</code>
        element is particularly useful for including interactive or dynamic
        content from other sources, enhancing the user experience on your
        website.
      </p>

      <h2>
        Using the <code>{`<iframe>`}</code> Element
      </h2>
      <p>
        When using the <code>{`<iframe>`}</code> element, there are several
        important considerations to keep in mind:
      </p>

      <ul>
        <li>
          <strong>Specify the source:</strong> The <code>{`<iframe>`}</code>{" "}
          element requires the {` "src" `} attribute to indicate the URL of the
          external content you want to embed. Make sure to provide a valid and
          accessible URL for the content.
        </li>
        <li>
          <strong>Set the dimensions:</strong> You can control the size of the
          embedded content by setting the width and height attributes of the
          <code>{`<iframe>`}</code> element. This ensures that the content fits
          well within your web page layout.
        </li>
        <li>
          <strong>Provide alternative content:</strong>{" "}
          {` It's a good practice to `}
          include alternative content within the <code>{`<iframe>`}</code> using
          the <code>{`<p>`}</code>
          element. This content will be displayed if the{" "}
          <code>{`<iframe>`}</code> content fails to load or if the user has
          disabled iframes in their browser.
        </li>
        <li>
          <strong>Consider accessibility:</strong> Ensure that your{" "}
          <code>{`<iframe>`}</code>
          content is accessible to users with disabilities.{" "}
          {` Use the "aria-label"
          attribute to provide a descriptive label for screen readers, and consider
          using the "title" attribute to provide additional context.`}
        </li>
      </ul>

      <h2>
        Examples of Using the <code>{`<iframe>`}</code> Element
      </h2>
      <p>
        Here are some practical examples of using the <code>{`<iframe>`}</code>{" "}
        element:
      </p>

      <ul>
        <li>
          <strong>Embedding a YouTube Video:</strong>
          <pre>
            <code>
              {`
            
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID">
  <p>Alternative content for users with iframes disabled.</p>
</iframe>
            `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Embedding a Google Map:</strong>
          <pre>
            <code>
              {`
<iframe width="425" height="350" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3...">
  <p>Alternative content: A map showing Central Park in New York City.</p>
</iframe>
    
    `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Embedding a Social Media Feed:</strong>
          <pre>
            <code>
              {`
<iframe src="https://www.socialmedia.com/embed/feed" width="500" height="600">
  <p>Alternative content: Follow us on Social Media!</p>
</iframe>
            
            `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>
        Advanced Features of the <code>{`<iframe>`}</code> Element
      </h2>
      <p>
        The <code>{`<iframe>`}</code> element offers several advanced features
        that enhance its versatility:
      </p>

      <ul>
        <li>
          <strong>Sandboxing:</strong>{" "}
          {` The "sandbox" attribute allows you to control
          the security and permissions of the embedded content, preventing it from
          accessing certain features like scripts or forms.`}
        </li>
        <li>
          <strong>Responsive Embeds:</strong> You can make your{" "}
          <code>{`<iframe>`}</code>
          responsive by using relative width and height values,{" "}
          {` such as "width: 100%"
          and "height: 100%". This ensures that the embedded content adapts to
          different screen sizes.`}
        </li>
        <li>
          <strong>Communication with Parent Window:</strong> The{" "}
          <code>{`<iframe>`}</code>
          content can communicate with the parent window using the{" "}
          {` "window.postMessage()"
          method. `}{" "}
          This enables interaction between the embedded content and your web
          page.
        </li>
      </ul>

      <h2>
        Best Practices for Using the <code>{`<iframe>`}</code> Element
      </h2>
      <ul>
        <li>
          <strong>
            Use <code>{`<iframe>`}</code> responsibly:
          </strong>{" "}
          Avoid using <code>{`<iframe>`}</code>
          excessively on your web page. Only use it when necessary, such as for
          embedding videos, maps, or interactive content.
        </li>
        <li>
          <strong>Provide meaningful alternative content:</strong> Always
          provide alternative content that conveys the same information or
          functionality as the
          <code>{`<iframe>`}</code> content. This ensures a seamless experience
          for users who have disabled iframes or have slow internet connections.
        </li>
        <li>
          <strong>Consider performance and security:</strong> Embedding external
          content can impact the performance and security of your web page.
          Choose lightweight content, and ensure that the source of the content
          is trusted and secure.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, {` let's `} put your knowledge into practice! Open your code editor
        and create a new HTML file. Experiment with embedding external content
        using the
        <code>{`<iframe>`}</code> element.{" "}
        {` Here's a simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "iframe.html" in your workspace
          folder.`}
        </li>
        <li>
          Embed a YouTube video using the <code>{`<iframe>`}</code> element,
          providing alternative content for users with iframes disabled.
        </li>
        <li>
          Try embedding a Google Map within an <code>{`<iframe>`}</code>,
          including alternative content that describes the {` map's purpose.`}
        </li>
        <li>
          {` Experiment with the "sandbox" attribute to control the permissions of the
          embedded content.`}
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        In this lesson, {` we've `} explored the <code>{`<iframe>`}</code>{" "}
        element in HTML, including its purpose, usage, and advanced features.
        The <code>{`<iframe>`}</code> element is a versatile tool that allows
        you to enhance your web pages with external content. Remember to use it
        wisely, provide meaningful alternative content, and consider performance
        and security implications. In the next lesson,{" "}
        {` we'll
        continue our journey by exploring favicon in HTML. Stay tuned, and happy
        coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "CreateButtons")}>
          back
        </button>
        <button onClick={() => (window.location.href = "favicon")}>Next</button>
      </div>
    </div>
  );
};
