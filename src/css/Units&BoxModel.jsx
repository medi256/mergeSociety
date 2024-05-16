const Units = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Units in CSS</h1>
      <p>
        {`Units in CSS are like the building blocks of measurements. They allow you to
        specify sizes, distances, durations, and more in a precise and consistent
        manner. In this section, we'll explore the fascinating world of units in CSS
        and learn how to use them effectively to style your elements. Let's embark on
        this unit adventure!`}
      </p>

      <h2>Length Units</h2>
      <p>
        Length units are used to specify sizes, distances, and positions in CSS.
        They provide a way to measure and define various aspects of your
        designs. Some commonly used length units include:
      </p>

      <ul>
        <li>
          <strong>Pixels (px)</strong>: A pixel is the smallest unit on a
          digital display. It represents a single dot on the screen. Pixels are
          commonly used for specifying sizes, margins, padding, and positions.
          For example, you can set the width of an element to 300 pixels to make
          it 300 pixels wide.
        </li>
        <li>
          <strong>Percentages (%)</strong>: Percentages are relative units that
          are calculated based on the size of another element. They are often
          used for creating responsive designs that scale proportionally. For
          instance, setting the width of an element to 50% will make it half the
          width of its parent element.
        </li>
        <li>
          <strong>Em (em)</strong>: An em is a relative unit that is based on
          the font size of the current element. It is commonly used for font
          sizes, margins, and padding. For example, setting the font size to
          1.5em will make the font size 1.5 times larger than the current font
          size. Ems are useful for creating scalable and responsive designs.
        </li>
        <li>
          <strong>Rem (rem)</strong>: A rem is similar to an em, but it is
          relative to the font size of the root element (<code>html</code>). It
          provides a consistent reference point across the entire document. For
          example, setting the margin of an element to 2rem will add a margin of
          2 times the root font size around the element.
        </li>
      </ul>

      <h2>Using Length Units</h2>
      <p>{`Here's an example of how to use length units in CSS:`}</p>

      <code>
        <pre>
          <code>
            {`
div {
  width: 300px; /* Sets the width to 300 pixels */
  margin: 20px; /* Adds 20 pixels of margin around the element */
  padding: 10%; /* Adds 10% of the parent's width as padding */
  font-size: 1.5rem; /* Sets the font size to 1.5 times the root font size */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used different length units to specify the width,
        margin, padding, and font size of a div element. Pixels (px) provide
        absolute measurements, while percentages (%) and rems (rem) offer
        relative measurements. By using a combination of these units, you can
        create flexible and responsive designs that adapt to different screen
        sizes and font sizes.
      </p>

      <h2>Time Units</h2>
      <p>
        Time units in CSS are used to specify durations for animations or
        transitions. They allow you to control how long an animation or
        transition takes to complete. Some commonly used time units include:
      </p>

      <ul>
        <li>
          <strong>Seconds (s)</strong>: Represents a single second. For example,
          setting the duration of an animation to 2s will make it last for 2
          seconds.
        </li>
        <li>
          <strong>Milliseconds (ms)</strong>: Represents a thousandth of a
          second. Milliseconds are commonly used for shorter durations, such as
          300ms for a subtle transition effect.
        </li>
      </ul>

      <h2>Using Time Units</h2>
      <p>{`Here's an example of how to use time units in CSS:`}</p>

      <code>
        <pre>
          <code>
            {`
.fade-in {
  transition: opacity 0.5s ease; /* Sets a 0.5-second transition for the opacity property */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used seconds (s) to specify the duration of a
        transition effect. The transition property smoothly changes the opacity
        of the element over 0.5 seconds, creating a fade-in effect. You can
        adjust the duration to control the speed and smoothness of your
        animations.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of units:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your unit experiments.
        </li>
        <li>
          Apply different length units, such as pixels, percentages, ems, and
          rems, to specify sizes, margins, padding, and font sizes. Observe how
          they affect the layout and appearance of your elements. Try using
          larger and smaller values to see the impact on the design.
        </li>
      </ol>

      <p>
        Remember, units play a crucial role in CSS. They provide precision,
        consistency, and flexibility in your designs. Choose units that align
        with your design goals, ensure responsiveness, and create visually
        appealing and user-friendly interfaces. Happy coding and happy
        designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "stylingText")}>
          back
        </button>
        <button onClick={() => (window.location.href = "boxModel")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Units;

export const BoxModel = () => {
  return (
    <div className="comments-container">
      <h1>CSS Box Model</h1>
      <p>
        Understanding the CSS Box Model is crucial for mastering how elements
        are laid out on a page. At its core, the Box Model consists of four
        components: margin, border, padding, and content. {`Let's`} delve deeper
        into each of these components to grasp their significance and how they
        interact.
      </p>
      <p>
        While {`we've`} already covered margin, padding, and border separately,
        in this topic, {`we'll`} briefly revisit each to provide a comprehensive
        understanding of the box model framework.
      </p>
      <p>
        To visualize the breakdown of the Box Model, you can utilize tools like
        the Chrome Console, which provides a clear representation of each part
        as shown below:
      </p>

      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712400417/boxModel_adrlcz.png"
        alt="A diagram illustrating the CSS Box Model"
      />

      <p>
        To view this visual representation in Chrome (or your preferred
        browser), right-click on your page, select Inspect to open the developer
        console, navigate to the Styles tab, and scroll down to the bottom.
      </p>

      <p>
        Each part of the Box Model is labeled for your convenience, except for
        the content, which is represented by the blue box at the center.{" "}
        {`Let's`} dissect how each component functions and understand their
        distinct roles.
      </p>
      <h4>Margin</h4>
      <p>
        Think of margin as a buffer around your element. It provides space
        between your element and its surroundings. Imagine you have a cold and
        need to maintain distance from others to prevent spreading it. Margin
        serves a similar purpose by creating a buffer zone. Refer to the
        following illustration:
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712400615/margin_tj2mtp.png"
        alt="A diagram demonstrating margins in CSS"
      />
      <p>
        In the analogy, your friends maintain distance from you, surrounded by
        orange, representing margin. Similarly, margin creates space around your
        element without directly impacting its size. This invisible spacing
        ensures separation between elements.
      </p>
      <h4>Border</h4>
      <p>
        Border defines a visual edge for your element. It adds a visible
        boundary to your element, increasing its visual size on the screen.
        While margin can exist outside the border, the border itself contributes
        to the {`element's`} presentational size. Consider the following
        illustration:
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712400733/border_e9obwj.png"
        alt="A diagram illustrating borders in CSS"
      />
      <p>
        The presence of the black border creates a visual boundary around the
        element. Notably, the content size now includes both the emoji and the{" "}
        {`border's`} dimensions.
      </p>
      <p>{`Let's`} move on to padding.</p>
      <h4>Padding</h4>
      <p>
        Padding, positioned between the border and content, is optional. Unlike
        margin, padding increases the presentational size of your element. To
        distinguish between margin and padding, remember that padding affects
        the {`element's`} visual size. Consider the following analogy:
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712401074/boxDemo_t56jqe.png"
        alt="An image illustrating the concept of padding in CSS"
      />
      <p>
        Padding acts like the additional packaging your grandmother adds to your
        birthday gift to ensure its safety during transit. This extra padding
        increases the size of the package, making it appear larger.
      </p>
      <p>
        For example, if you create a {`<div>`} that is 100px wide by 100px tall
        and add 10px of padding to each edge, the {`<div>`} will become 120px
        wide by 120px tall due to the added padding on all sides.
      </p>
      <h4>Content</h4>
      <p>
        Content is the essence of your page. It represents the actual content
        defined in your CSS or the natural dimensions if using an image. Whether
        you create a {`<div>`} that is 50px wide by 300px tall or any other
        dimensions, the content occupies that space on your screen unless
        altered by the Box Model components.
      </p>
      <h4>Box Sizing</h4>
      <p>
        {`It's`} essential to mention the box-sizing property, especially
        box-sizing: border-box. While not delving into its specifics, box-sizing
        defaults to content-box, but you can override it with border-box. The
        latter ensures that elements calculate their width and height inclusive
        of border and padding, leading to a more predictable layout.
      </p>
      <p>Consider the following CSS snippet:</p>
      <pre>
        <code>
          {`
  *, *:before, *:after {
    box-sizing: border-box;
  }
          `}
        </code>
      </pre>
      <p>
        These lines instruct every element to include border and padding in
        their width and height calculations. This approach prevents unexpected
        layout issues and ensures elements respect their parent container.
      </p>
      <p>
        For a more detailed explanation, refer to the MDN Web Docs on CSS Box
        Model.
      </p>
      <h2>Conclusion</h2>
      <p>
        The Box Model serves as the foundation for understanding layout
        structures on web pages. With a clear understanding of how each
        component operates, you can efficiently design and organize elements on
        your page. Hopefully, this knowledge will save you from the tedious
        process of repeatedly adjusting margin and padding values in your CSS.
      </p>
      <p>For further insights, explore the MDN Web Docs on CSS Box Model.</p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        BoxModel .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "units")}>back</button>
        <button onClick={() => (window.location.href = "maxWidth")}>
          Next
        </button>
      </div>
    </div>
  );
};
