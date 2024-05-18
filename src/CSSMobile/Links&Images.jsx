const Links = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Link Styling in CSS</h1>
      <p>
        {`Link styling in CSS is an essential aspect of creating visually
        appealing and functional designs. Links are commonly used for
        navigation, directing users to other pages or sections within a website.
        In this section, we'll explore the fascinating world of link styling and
        learn how to use CSS to transform your links into beautiful and
        user-friendly elements. Let's embark on this link styling adventure!`}
      </p>

      <h2>Understanding Link Styling</h2>
      <p>
        Link styling involves applying CSS properties to hyperlinks (
        <code>a</code>){" "}
        {`to enhance their appearance and improve the user
        experience. Links can be styled in numerous ways, including changing the
        text color, adding underline or hover effects, modifying the cursor
        style, and more. Let's explore some of the key properties used for link
        styling:`}
      </p>

      <h3>Text Color and Underline</h3>
      <p>
        The <code>color</code>{" "}
        {`property allows you to change the text color of
        links. You can specify any valid color value, such as color names, hex
        codes, or RGB values. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a {
  color: blue; /* Changes the text color of links to blue */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we changed the text color of links to blue. You can
        experiment with different color values, such as <code>red</code>,{" "}
        <code>#FF0000</code>, or
        <code>rgb(255, 0, 0)</code>, to create links that stand out and attract
        user attention.
      </p>

      <p>
        The <code>text-decoration</code> property allows you to add or remove
        the underline from links. By default, links have an underline, but you
        can remove it using the value <code>none</code>. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a {
  text-decoration: none; /* Removes the underline from links */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Hover Effects</h3>
      <p>
        Hover effects are used to provide visual feedback to users when they
        hover their mouse over a link. The <code>:hover</code> pseudo-class
        allows you to apply styles that take effect when the user hovers over
        the link. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a:hover {
  text-decoration: underline; /* Adds an underline on hover */
  background-color: #eee; /* Changes the background color on hover */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we added an underline and changed the background
        color on hover. Hover effects help users understand that the element is
        interactive and can be clicked. You can also experiment with other
        properties on hover, such as changing the text color, adding a border,
        or applying transition effects.
      </p>

      <h3>Cursor Property</h3>
      <p>
        The <code>cursor</code> property allows you to change the mouse cursor
        style when hovering over a link. It provides visual feedback to users
        about the interactivity of the element. Here are some commonly used
        values for the <code>cursor</code>
        property:
      </p>

      <ul>
        <li>
          <strong>pointer:</strong> Displays a pointing hand cursor, indicating
          that the element is clickable.
        </li>
        <li>
          <strong>default:</strong> Displays the default arrow cursor.
        </li>
        <li>
          <strong>wait:</strong> Displays a waiting cursor, indicating that the
          action is in progress.
        </li>
        <li>
          <strong>help:</strong> Displays a question mark cursor, indicating
          that help is available.
        </li>
      </ul>

      <code>
        <pre>
          <code>
            {`
a {
  cursor: pointer; /* Changes the cursor to a pointing hand */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we changed the cursor to a pointing hand when
        hovering over a link, indicating that the link is clickable. You can
        also use other cursor values, such as <code>crosshair</code> or{" "}
        <code>move</code>, depending on the context of your design.
      </p>

      <h2>Using Link Styling</h2>
      <p>
        {`Link styling can be used to create visually appealing and functional
        links. In addition to text color, underline, and hover effects, there
        are other properties that can be used to style links, such as visited
        and active states, transition effects, and more. Let's explore some of
        these properties:`}
      </p>

      <h3>Visited and Active States</h3>
      <p>
        The <code>:visited</code> and <code>:active</code> pseudo-classes allow
        you to style links based on their state. The <code>:visited</code>{" "}
        pseudo-class styles links that the user has already visited, while the{" "}
        <code>:active</code> pseudo-class styles links while they are being
        clicked. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a:visited {
  color: purple; /* Changes the color of visited links to purple */
}

a:active {
  color: red; /* Changes the color of active links to red */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we changed the color of visited links to purple and
        active links to red. These styles provide visual cues to users about the
        state of the link. You can also experiment with other properties, such
        as changing the background color or adding a border on visited or active
        links.
      </p>

      <h3>Transition Effects</h3>
      <p>
        Transition effects can be used to create smooth animations when changing
        the appearance of links on hover. The <code>transition</code> property
        allows you to specify the duration and timing function for the
        animation. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a {
  transition: background-color 0.3s ease-in-out; /* Applies a transition effect to the background color */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we applied a transition effect to the background
        color of the link. The transition duration is set to 0.3 seconds, and
        the <code>ease-in-out</code> timing function creates a smooth animation.
        You can experiment with different transition properties to create unique
        and engaging link animations.
      </p>

      <h2>Benefits of Link Styling</h2>
      <p>Using link styling offers several advantages for your designs:</p>

      <ul>
        <li>
          <strong>Visual Appeal:</strong> Link styling allows you to enhance the
          appearance of your links, making them more visually appealing and
          engaging. You can experiment with different text colors, underline
          styles, hover effects, and cursor styles to create links that stand
          out and attract user attention.
        </li>
        <li>
          <strong>User Experience:</strong> Link styling improves the user
          experience by making links more noticeable, providing visual feedback,
          and indicating the state of the link (visited, active, or hovered).
        </li>
        <li>
          <strong>Accessibility:</strong> Proper link styling ensures that links
          are distinguishable from regular text, making them easier to identify
          and interact with for all users, including those with visual
          impairments.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of link
        styling:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with hyperlinks (<code>a</code>) to
          serve as containers for your link styling experiments.
        </li>
        <li>
          Apply different text colors, underline styles, and hover effects to
          style your links. Try using bold or italic text, changing the cursor
          style, or adding background colors on hover to see the impact on the
          appearance.
        </li>
        <li>
          Experiment with styling visited and active links to provide visual
          cues to users about the state of the link.
        </li>
        <li>
          Explore the <code>transition</code> property to create smooth
          animations when changing the appearance of links on hover.
        </li>
        <li>
          Refer to link styling resources and tutorials to discover creative
          ways to style links, such as creating button-like links, adding
          transition effects to multiple properties, or styling links within
          navigation menus.
        </li>
      </ol>

      <p>
        Remember, link styling is a powerful tool in CSS. It helps create
        visually appealing and functional links that enhance the user
        experience. Choose link styling options that align with your design
        goals, ensure readability, and create engaging interfaces. Happy coding
        and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/tablesMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/imagesMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Links;
export const Images = () => {
  return (
    <div className="comments-container">
      <h2>CSS Images</h2>
      <p>
        In CSS, we can style images in many ways. We can make them rounded,
        circled, responsive, etc.
      </p>

      <h3>CSS Rounded Image</h3>
      <p>
        The <code>border-radius</code> CSS property is used to control the
        roundness of the corners of an {`element's`} border box. It allows you
        to create rounded corners on elements such as divs, images, and buttons,
        giving them a more aesthetically pleasing and modern look.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
      img {
        border-radius: 15px;
      }
      `}
        </code>
      </pre>
      <h4>Output</h4>
      <img
        style={{ width: "300px", borderRadius: "15px" }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
        alt="An image with rounded corners"
      />

      <h3>CSS Circle Image</h3>
      <p>
        To create a circular image, you just need to set the{" "}
        <code>border-radius</code> CSS property to <code>50%</code>.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
      img {
        border-radius: 50%;
      }
      `}
        </code>
      </pre>
      <h4>Output</h4>
      <img
        style={{ borderRadius: "50%", width: "300px" }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
        alt="A circular image"
      />

      <h3>CSS Thumbnail Image</h3>
      <p>
        We can create a thumbnail by adding a border and padding to an image.
      </p>
      <pre>
        <code>
          {`
  img {
    border: 1px solid brown;
    border-radius: 5px;
    padding: 5px;
  }
      `}
        </code>
      </pre>
      <img
        style={{
          width: "300px",
          border: "1px solid brown",
          borderRadius: "5px",
          padding: "5px",
        }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg "
        alt="A thumbnail image"
      />

      <h3>CSS Responsive Image</h3>
      <p>
        To make images responsive and fit any screen size, simply set their
        <code>max-width</code> to <code>100%</code> and <code>height</code> to{" "}
        <code>auto</code>.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  img {
    max-width: 100%;
    height: auto;
  }
      `}
        </code>
      </pre>

      <h3>Centering Images</h3>
      <p>
        To center an image, set the <code>display</code> CSS property to{" "}
        <code>block</code>
        and the <code>margin</code> property to <code>auto</code>.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Images.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/linksMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/iconsMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
