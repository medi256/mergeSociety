const Background = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Backgrounds in CSS</h1>
      <p>
        {`Backgrounds are like the canvas upon which your web designs come to life!
        They set the stage for your content, influence the overall aesthetic,
        and create a visual hierarchy. In this section, we'll explore the
        wonderful world of backgrounds in CSS and learn how to style your
        elements with beautiful and creative backgrounds. Let's begin our
        journey into the realm of backgrounds!`}
      </p>

      <h2>Background Color</h2>
      <p>
        The <code>background-color</code>{" "}
        {` property allows you to set the color of
        the background behind an element. You can use color keywords,
        hexadecimal values, RGB values, or HSL values to specify the background
        color. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-color: #336699; /* Dark blue */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-color</code> property to
        a dark blue color using a hexadecimal value. Hexadecimal values use a
        combination of letters and numbers to represent colors. For example,
        #336699 represents a shade of dark blue. You can also use color keywords
        like <code>red</code>, <code>blue</code>, or <code>green</code>.
        Additionally, you can specify colors using RGB values (red, green, blue)
        or HSL values (hue, saturation, lightness).
      </p>
      <p>
        {`The values are the same as those we covered in the color property, so
        feel free to experiment by changing the background colors of your
        elements. For beginners, it's recommended to start with color names like
        red, blue, green, and so on. You can explore the other color value
        formats later once you feel more comfortable with CSS.`}
      </p>

      <h2>Background Image</h2>
      <p>
        The <code>background-image</code>{" "}
        {` property allows you to add images as
        backgrounds. You can use URLs, gradients, or even other elements as
        backgrounds. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-image: url("background.jpg");
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-image</code>{" "}
        {` property to a
        URL pointing to an image file named "background.jpg". The image will be
        used as the background for the div element. You can use images to add
        visual interest, create textures, or set the overall theme for your
        designs.`}
      </p>
      <h2>
        {`Here's a video tutorial to assist you in learning how to set images as
        backgrounds for HTML elements`}
      </h2>
      <video
        controls
        width={"300px"}
        src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1715756479/ImageAsBackground_zio00t.mov"
      >
        Your browser does not support this video format
      </video>

      <h2>Background Repeat</h2>
      <p>
        The <code>background-repeat</code> property controls how the background
        image repeats within the element. You can choose between values like
        <code>repeat</code>, <code>no-repeat</code>, <code>repeat-x</code>, and
        <code>repeat-y</code>. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-image: url("background.jpg");
  background-repeat: no-repeat;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-repeat</code> property to
        <code>no-repeat</code>, ensuring that the background image is displayed
        only once without repeating. This is useful when you want to use a large
        image as a background without creating a tiled effect. You can also use{" "}
        <code>repeat-x</code> to repeat the image horizontally or
        <code>repeat-y</code> to repeat it vertically.
      </p>

      <h2>Background Position</h2>
      <p>
        The <code>background-position</code> property allows you to specify the
        position of the background image within the element. You can use values
        like <code>top</code>, <code>bottom</code>, <code>center</code>, or
        specific coordinates. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-image: url("background.jpg");
  background-position: center;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-position</code> property
        to
        <code>center</code>, positioning the background image in the center of
        the element. This is useful when you want to create a centered
        background effect. You can also use coordinates like <code>left</code>,
        <code>right</code>, <code>top</code>, or <code>bottom</code> to position
        the image precisely.
      </p>

      <h2>Background Size</h2>
      <p>
        The <code>background-size</code> property allows you to control the size
        of the background image. You can use values like <code>cover</code>,
        <code>contain</code>, or specific dimensions. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-image: url("background.jpg");
  background-size: cover;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-size</code> property to
        <code>cover</code>, ensuring that the background image covers the entire
        element, maintaining its aspect ratio. This is useful for creating
        full-screen background images that adapt to different screen sizes. You
        can also set specific dimensions, such as{" "}
        <code>background-size: 200px 150px</code>, to specify the exact size of
        the background image.
      </p>

      <h2>Background Attachment</h2>
      <p>
        The <code>background-attachment</code> property determines whether the
        background image scrolls with the page or remains fixed in place. You
        can use values like <code>scroll</code> or <code>fixed</code>.{" "}
        {`Here's
        an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  background-image: url("background.jpg");
  background-attachment: fixed;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>background-attachment</code>{" "}
        property to
        <code>fixed</code>, making the background image stay fixed while the
        page scrolls. This creates a parallax effect, where the background
        remains stationary while the content scrolls over it. This technique
        adds depth and visual interest to your designs.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of backgrounds:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your backgrounds.
        </li>
        <li>
          Apply different background colors to your elements and observe how
          they set the tone and atmosphere of your designs.
        </li>
        <li>
          Experiment with background images and see how they transform the look
          and feel of your designs.
        </li>
        <li>
          Play with background repeat options to create unique patterns or
          maintain the integrity of your background images.
        </li>
        <li>
          Explore background positions to create visually appealing
          compositions, such as centering an image or creating a diagonal
          background effect.
        </li>
        <li>
          Adjust the background size to ensure your images fit perfectly within
          their containers, maintaining their aspect ratio.
        </li>
        <li>
          Try using background attachments to create scrolling effects or to
          keep important background elements in view at all times.
        </li>
        <li>
          Refer to background resources and tutorials to discover creative ways
          to use backgrounds in your designs.
        </li>
      </ol>

      <p>
        Remember, backgrounds play a crucial role in setting the tone, creating
        visual interest, and enhancing the user experience. Choose backgrounds
        that complement your content, convey the right emotions, and ensure
        accessibility for all users. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/fontMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/commentsMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Background;

export const Comments = () => {
  return (
    <div className="comments-container">
      <h1>CSS Comments</h1>
      <p>
        Comments in CSS are not displayed in the browser but serve as notes
        within your source code.
      </p>
      <p>
        They help explain the code and can be useful when you revisit it later.
      </p>
      <p>
        Browsers completely ignore comments; they don’t affect the rendering of
        your webpage.
      </p>

      <h3>Syntax:</h3>
      <ul>
        <li>
          A CSS comment starts with <code>{`/*`}</code> and ends with{" "}
          <code>*/</code>.
        </li>
        <li>You can place comments anywhere in your CSS code.</li>
      </ul>

      <h3>Examples:</h3>
      <ol>
        <li>
          Single-Line Comment:
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  /* This is a single-line comment */
   p {
     color: red;
   }`}
              </code>
            </pre>
            <p>
              In this example, the comment explains that the text color is set
              to red.
            </p>
          </div>
        </li>
        <li>
          Inline Comment (within a line of code):
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  p {
    color: /*red*/ blue;
  }`}
              </code>
            </pre>
            <p>Here, the comment is placed in the middle of the code line.</p>
          </div>
        </li>
        <li>
          Multi-Line Comment:
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  /* This is a multi-line comment */
  p {
    color: red;
  }`}
              </code>
            </pre>
            <p>You can span comments across multiple lines.</p>
          </div>
        </li>
      </ol>

      <h3>Combining HTML and CSS Comments:</h3>
      <ul>
        <li>
          Remember that HTML also supports comments using the{" "}
          <code>&lt;!-- ... --&gt;</code> syntax.
        </li>
        <li>You can combine HTML and CSS comments for better documentation:</li>
      </ul>

      <h4>Example:</h4>
      <div>
        <h4>HTML code</h4>
        <pre>
          <code>
            {`
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: red; /* Set text color to red */
      }
    </style>
  </head>
  <body>
    <h2>My Heading</h2>
    <!-- These paragraphs will be red -->
    <p>Hello World!</p>
    <p>This paragraph is styled with CSS.</p>
    <p>CSS comments are not shown in the output.</p>
  </body>
</html>`}
          </code>
        </pre>
      </div>

      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Comments .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/backgroundMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/borderMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
