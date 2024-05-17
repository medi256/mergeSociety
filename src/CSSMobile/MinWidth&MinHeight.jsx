const MinWidth = () => {
  return (
    <div className="comments-container">
      <h1>The World of Min-Width in CSS</h1>
      <p>
        {`Min-width is a powerful property in CSS that allows you to set a minimum width for
        an element. It helps create responsive and flexible designs that adapt to
        different screen sizes. In this section, we'll explore the wonderful world of
        min-width and learn how to use it effectively to style your elements. Let's
        begin!`}
      </p>

      <h2>Understanding Min-Width</h2>
      <p>
        {`Min-width specifies the minimum width an element can reach before it starts to
        expand or wrap. It ensures that the element doesn't become too narrow, making
        it useful for creating responsive designs that work well on various devices,
        from small mobile screens to large desktop monitors. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  min-width: 300px; /* Sets the minimum width to 300 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>min-width</code> property to 300
        pixels. This means that the element will never be narrower than 300
        pixels. If the available space is larger than 300 pixels, the element
        will expand to fill the available width.
      </p>

      <h2>Using Min-Width</h2>
      <p>
        {`Min-width is commonly used to create responsive layouts and ensure that elements
        don't become too narrow on larger screens. For example, you can set a minimum
        width for a container to prevent it from becoming too skinny on wider screens.
        This helps maintain a balanced layout and improves the user experience. Here's
        an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.container {
  min-width: 600px; /* Sets the minimum width to 600 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>min-width</code>{" "}
        {`property to 600 pixels
        for a container element. This ensures that the container doesn't become too narrow,
        creating a comfortable viewing experience for users. It's especially useful for
        elements that need to maintain a certain width, such as navigation menus or
        sidebars.`}
      </p>

      <h2>Benefits of Min-Width</h2>
      <p>Using min-width offers several benefits for your designs:</p>

      <ul>
        <li>
          <strong>Responsive Design:</strong> Min-width helps create responsive
          layouts that adapt to different screen sizes. Your designs will look
          great on both mobile and desktop devices, ensuring a seamless user
          experience.
        </li>
        <li>
          <strong>Visual Balance:</strong> Min-width helps create visually
          balanced designs. It prevents elements from becoming too narrow,
          maintaining a harmonious and aesthetically pleasing appearance.
        </li>
        <li>
          <strong>Content Visibility:</strong> Min-width ensures that your
          content is always visible and accessible. It prevents elements from
          becoming too narrow and causing content to wrap or become unreadable.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to experiment with min-width in CSS! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of min-width:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your min-width experiments.
        </li>
        <li>
          Apply different min-width values to your elements and observe how they
          respond to different screen sizes. Try using larger and smaller values
          to see the impact on the layout.
        </li>
        <li>
          Experiment with min-width on different types of elements, such as
          containers, images, or text blocks. Observe how it affects their
          appearance and behavior.
        </li>
        <li>
          Refer to min-width resources and tutorials to discover creative ways
          to use min-width, such as creating responsive menus or ensuring
          content visibility.
        </li>
      </ol>

      <p>
        Remember, min-width is a powerful tool in CSS. It helps create
        responsive and flexible designs that work well on various devices.
        Choose min-width values that align with your design goals, ensure
        readability, and create visually appealing interfaces. Happy coding!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/maxHeightMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/minHeightMob")}>
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
      <h1>The World of Min-Height in CSS</h1>
      <p>
        {`Min-height is a powerful property in CSS that allows you to set a minimum height
        for an element. It helps create responsive and flexible designs that adapt to
        different screen sizes. In this section, we'll explore the wonderful world of
        min-height and learn how to use it effectively to style your elements. Let's
        begin!`}
      </p>

      <h2>Understanding Min-Height</h2>
      <p>
        {`Min-height specifies the minimum height an element can reach before it starts to
        expand or overflow. It ensures that the element doesn't become too short, making
        it useful for creating responsive designs that work well on various devices,
        from small mobile screens to large desktop monitors. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  min-height: 200px; /* Sets the minimum height to 200 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>min-height</code> property to 200
        pixels. This means that the element will never be shorter than 200
        pixels. If the content is shorter than the minimum height, the element
        will expand to fill the available space.
      </p>

      <h2>Using Min-Height</h2>
      <p>
        {`Min-height is commonly used to create responsive layouts and ensure that elements
        don't become too short on larger screens. For example, you can set a minimum
        height for a container to prevent it from becoming too small on wider screens.
        This helps maintain a balanced layout and improves the user experience. Here's
        an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.container {
  min-height: 500px; /* Sets the minimum height to 500 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>min-height</code>{" "}
        {`property to 500 pixels
        for a container element. This ensures that the container doesn't become too short,
        creating a comfortable viewing experience for users. It's especially useful for
        elements with dynamic content, such as text areas or image galleries.`}
      </p>

      <h2>Benefits of Min-Height</h2>
      <p>Using min-height offers several benefits for your designs:</p>

      <ul>
        <li>
          <strong>Responsive Design:</strong> Min-height helps create responsive
          layouts that adapt to different screen sizes. Your designs will look
          great on both mobile and desktop devices, ensuring a seamless user
          experience.
        </li>
        <li>
          <strong>Content Visibility:</strong> Min-height ensures that your
          content is always visible and accessible. It prevents elements from
          becoming too short, causing content to be cut off or difficult to
          interact with.
        </li>
        <li>
          <strong>Visual Balance:</strong> Min-height helps create visually
          balanced designs. It prevents elements from becoming too short,
          maintaining a harmonious and aesthetically pleasing appearance.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to experiment with min-height in CSS! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of min-height:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your min-height experiments.
        </li>
        <li>
          Apply different min-height values to your elements and observe how
          they respond to different content sizes. Try using larger and smaller
          values to see the impact on the layout.
        </li>
        <li>
          Experiment with min-height on different types of elements, such as
          containers, images, or text areas. Observe how it affects their
          appearance and behavior.
        </li>
        <li>
          Refer to min-height resources and tutorials to discover creative ways
          to use min-height, such as creating responsive galleries or ensuring
          content visibility.
        </li>
      </ol>

      <p>
        Remember, min-height is a powerful tool in CSS. It helps create
        responsive and flexible designs that work well on various devices.
        Choose min-height values that align with your design goals, ensure
        readability, and create visually appealing interfaces. Happy coding!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/minWidthMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/listMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
