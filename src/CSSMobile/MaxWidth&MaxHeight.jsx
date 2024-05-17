const MaxWidth = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Max-Width in CSS</h1>
      <p>
        {`Max-width is a powerful tool in CSS that allows you to set a maximum
        width for your elements. It helps create responsive and flexible designs
        that adapt to different screen sizes and ensures your content looks
        great on any device. In this section, we'll explore the fascinating
        world of max-width and learn how to use it effectively to style your
        elements. Let's embark on this max-width adventure!`}
      </p>

      <h2>Understanding Max-Width</h2>
      <p>
        {`Max-width is like a magical boundary for your elements. It sets the
        maximum width they can reach before they start to shrink or wrap. This
        is especially useful when creating responsive designs that need to work
        on various devices, from small mobile screens to large desktop monitors.
        Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  max-width: 500px; /* Sets the maximum width to 500 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>max-width</code> property to 500
        pixels. This means that the element will never be wider than 500 pixels.
        If the available space is smaller than 500 pixels, the element will
        gracefully shrink to fit the available width. This ensures that your
        content remains readable and accessible on smaller screens.
      </p>

      <h2>Using Max-Width</h2>
      <p>
        {`Max-width is commonly used to create responsive layouts. For example,
        you can set a maximum width for a container to prevent it from becoming
        too wide on larger screens. This helps maintain a balanced layout and
        improves the user experience. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
.container {
  max-width: 1200px; /* Sets the maximum width to 1200 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>max-width</code>{" "}
        {`property to 1200
        pixels for a container element. This ensures that the container doesn't
        become too wide, creating a comfortable reading experience for users.
        Your content will be centered within the container, making it responsive
        and adaptable to different screen sizes.`}
      </p>

      <h2>Benefits of Max-Width</h2>
      <p>Using max-width offers several advantages for your designs:</p>

      <ul>
        <li>
          <strong>Responsive Design:</strong> Max-width is a key player in
          creating responsive layouts. Your designs will gracefully adapt to
          different screen sizes, ensuring a seamless user experience across
          devices.
        </li>
        <li>
          <strong>Improved Readability:</strong>{" "}
          {`By setting a maximum width, you
          can ensure that your content doesn't become too wide, making it easier
          for users to read and interact with your website. This is especially
          important for mobile devices with limited screen space.`}
        </li>
        <li>
          <strong>Visual Balance:</strong> Max-width helps create visually
          balanced layouts. It prevents elements from stretching too wide,
          maintaining a harmonious and aesthetically pleasing design. Your
          designs will look proportionate and well-organized.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of
        max-width:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your max-width experiments.
        </li>
        <li>
          Apply different max-width values to your elements and observe how they
          respond to different screen sizes. Try using larger and smaller values
          to see the impact on the layout and readability.
        </li>
        <li>
          Experiment with max-width on different types of elements, such as
          containers, images, or text blocks. Observe how it affects their
          appearance and behavior.
        </li>
        <li>
          Refer to max-width resources and tutorials to discover creative ways
          to use max-width, such as creating responsive grids, flexible images,
          or interactive elements.
        </li>
      </ol>

      <p>
        Remember, max-width is a powerful tool in your CSS toolbox. It helps
        create responsive and user-friendly designs that work well on any
        device. Choose max-width values that align with your design goals,
        ensure readability, and create visually appealing interfaces. Happy
        coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/boxModelMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/maxHeightMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MaxWidth;

export const MaxHeight = () => {
  return (
    <div className="comments-container">
      <h1>Max Height</h1>
      <p>
        Imagine you have a photo gallery on your website. You want the images to
        be a certain size and not too large, but some of them might be taller
        than others. With max-height, you can ensure that no matter how tall an
        image is, it {`won't`} exceed a certain height.
      </p>
      <p>{`Here's`} a simple example:</p>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`<!DOCTYPE html>
<html>
<head>
  <style>
    .image-container {
      max-height: 300px; /* This sets the maximum height of the image container */
      overflow: hidden; /* This hides any part of the image that goes beyond the set height */
      margin: 0 auto; /* This centers the image container on the page */
      background-color: lightgray; /* Just for visualization */
      padding: 20px; /* Just for visualization */
    }
    .image {
      width: 100%; /* Ensures the image takes up the full width of its container */
      height: auto; /* Allows the image to adjust its height proportionally to its width */
    }
  </style>
</head>
<body>
  <div class="image-container">
    <img class="image" src="example.jpg" alt="Example Image">
  </div>
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, the .image-container class has a max-height: 300px;
        property, which means that no matter how tall the image is, it {`won't`}{" "}
        exceed 300 pixels in height. If an image is taller than 300 pixels, the
        overflow: hidden; property ensures that any excess part of the image is
        hidden from view.
      </p>
      <p>
        So, the max-height property helps you control the maximum height of an
        element, ensuring that it {`doesn't`} become too tall and disrupt the
        layout of your webpage. Hope that helps clarify things!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Max-height.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/maxWidthMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/minWidthMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
