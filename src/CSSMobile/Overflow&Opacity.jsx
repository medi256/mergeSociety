const Overflow = () => {
  return (
    <div className="comments-container">
      <h1>Mastering Overflow in CSS</h1>
      <p>
        {`The CSS overflow property is crucial when it comes to controlling how 
        content is displayed when it overflows its container. This property 
        can help you handle situations where content is too big to fit within 
        an element's box. Let's dive into the world of overflow and understand 
        how it works.`}
      </p>

      <h2>Understanding Overflow</h2>
      <p>
        {`The overflow property in CSS specifies what should happen if content 
        overflows an element's box. By default, content that doesn't fit will 
        overflow the box, causing layout issues. Here are the key values you can 
        use with the overflow property:`}
      </p>

      <ul>
        <li>
          <strong>visible:</strong>{" "}
          {`This is the default value. The overflow 
          content is not clipped and is visible outside the element's box.`}
        </li>
        <li>
          <strong>hidden:</strong>{" "}
          {`The overflow content is clipped, and the rest 
          of the content is hidden.`}
        </li>
        <li>
          <strong>scroll:</strong>{" "}
          {`The overflow content is clipped, but a scrollbar 
          is added to see the rest of the content.`}
        </li>
        <li>
          <strong>auto:</strong>{" "}
          {`If overflow is clipped, a scrollbar should be added 
          to see the rest of the content, but only if necessary.`}
        </li>
      </ul>

      <h3>Example: Overflow Visible</h3>
      <p>
        {`Let's start with the default overflow value, visible. Here, the content 
        will overflow outside the container. This can be useful if you want to 
        display content that exceeds the container size, but it can also cause 
        layout issues:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  overflow: visible; /* Content overflows outside the box */
  width: 200px; 
  height: 100px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In the code above, we have a container with a fixed width and height. 
        The content inside the container will overflow and be visible outside 
        the box. This can sometimes lead to unexpected layout issues if not 
        handled properly.`}
      </p>

      <h3>Example: Overflow Hidden</h3>
      <p>
        {`Next, let's see how overflow hidden works. The overflowing content will 
        be clipped and hidden. This is useful when you want to hide any content 
        that exceeds the container size to maintain a clean layout:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  overflow: hidden; /* Overflowing content is hidden */
  width: 200px; 
  height: 100px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In the code above, the overflowing content is clipped, so anything that 
        doesn't fit within the 200px by 100px container will be hidden. This can 
        help maintain a clean and tidy layout without any overflowing content 
        disrupting the design.`}
      </p>

      <h3>Example: Overflow Scroll</h3>
      <p>
        {`Now, let's see how overflow scroll works. The overflowing content will 
        be clipped, but a scrollbar will be added. This allows users to scroll 
        through the content that doesn't fit within the container:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  overflow: scroll; /* Adds a scrollbar for overflowing content */
  width: 200px; 
  height: 100px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In the code above, a scrollbar is added to the container, allowing users 
        to scroll through the content. This is particularly useful when you have 
        a lot of content that needs to be accessed, but you want to keep the 
        container size fixed.`}
      </p>

      <h3>Example: Overflow Auto</h3>
      <p>
        {`Finally, let's see how overflow auto works. A scrollbar will be added 
        only if necessary. This means that if the content fits within the 
        container, no scrollbar will be shown. If the content overflows, a 
        scrollbar will appear:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  overflow: auto; /* Adds a scrollbar only if needed */
  width: 200px; 
  height: 100px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In the code above, a scrollbar will only appear if the content exceeds 
        the size of the container. This provides a clean solution for handling 
        overflow without always showing a scrollbar, which can be visually 
        distracting.`}
      </p>

      <h2>Handling Overflow in Different Situations</h2>
      <p>
        {`Let's look at some real-world scenarios where handling overflow is 
        essential. This will help you understand how to use the overflow property 
        effectively in your projects.`}
      </p>

      <h3>Overflow in Fixed-Size Containers</h3>
      <p>
        {`Imagine you have a fixed-size container on your webpage, such as a sidebar 
        or a card. You want to ensure that any content that exceeds the container's 
        dimensions is handled properly. Here’s an example using overflow auto:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.sidebar {
  overflow: auto; /* Adds scrollbar if content exceeds size */
  width: 300px; 
  height: 600px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In this scenario, the sidebar will have a scrollbar only if the content 
        inside it exceeds 300px by 600px. This ensures that the layout remains 
        neat and users can access all the content.`}
      </p>

      <h3>Overflow in Dynamic Content Areas</h3>
      <p>
        {`For areas with dynamic content, such as user comments or chat windows, 
        handling overflow is crucial. You might want to use overflow scroll to 
        ensure users can scroll through all the messages without breaking the 
        layout:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.chat-window {
  overflow: scroll; /* Always shows scrollbar for overflow content */
  width: 100%; 
  height: 400px; 
  border: 1px solid black;
}
            `}
          </code>
        </pre>
      </code>

      <p>
        {`In this example, the chat window will have a fixed height of 400px, 
        and a scrollbar will always be present if the content overflows. This 
        ensures that users can scroll through all the messages without any 
        layout issues.`}
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now that we've covered the basics and some practical examples of the 
        overflow property, it's time for you to practice! Open your code editor 
        and create a new HTML file. Use different overflow values to see how 
        they affect the layout of your content.`}
      </p>

      <ol>
        <li>Create a container with a fixed width and height.</li>
        <li>Add content that overflows the container.</li>
        <li>
          Experiment with the overflow property values: visible, hidden, scroll,
          and auto.
        </li>
        <li>
          Observe how each value changes the behavior of the overflowing
          content.
        </li>
      </ol>

      <p>
        {`Understanding how to control overflow in CSS will help you create 
        better layouts and improve the user experience on your website. Keep 
        experimenting and happy coding!`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/columnMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/opacityMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Overflow;

export const Opacity = () => {
  return (
    <div className="comments-container">
      <h1>Opacity</h1>
      <p>In this tutorial, you will learn how to use opacity in CSS.</p>

      <ol>
        <li>
          Introduction
          <ul>
            <li>
              {`
            Opacity refers to the transparency level of an element.`}
            </li>
            <li>
              It ranges from 0 (completely transparent) to 1 (completely
              opaque).
            </li>
          </ul>
        </li>
        <h2>Opacity Property:</h2>
        <p>
          The <code>opacity</code> property specifies the transparency level of
          an element.
        </p>
        <pre>
          <code>
            {`
  .example {
    opacity: 0.5;
  }`}
          </code>
        </pre>

        <li>
          Examples
          <ul>
            <li>
              <strong>Opacity: 0.5</strong>
              <p>
                This example sets the opacity of an element to 0.5, making it
                semi-transparent.
              </p>
              <pre>
                <code>
                  {`
        <div style={{ opacity: '0.5', border: '1px solid black' }}>
            <p>This is a semi-transparent content.</p>
        </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  opacity: "0.5",
                  border: "1px solid black",
                }}
              >
                <p>This is a semi-transparent content.</p>
              </div>
            </li>
            <li>
              <strong>Opacity: 0.2</strong>
              <p>
                This example sets the opacity of an element to 0.2, making it
                highly transparent.
              </p>
              <pre>
                <code>
                  {`
            <div style={{ opacity: '0.2', border: '1px solid black' }}>
               <p>This is a highly transparent content.</p>
            </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  opacity: "0.2",
                  border: "1px solid black",
                }}
              >
                <p>This is a highly transparent content.</p>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Opacity .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/overFlowMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/outlineMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
