import { useNavigate } from "react-router-dom";

const Units = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Units</h1>
      <p>
        CSS (Cascading Style Sheets) provides various units for expressing
        lengths, which are crucial for effective web design.
      </p>
      <h2>Absolute Length Units:</h2>
      <p>
        These units represent fixed measurements that remain unchanged
        regardless of the device’s screen size. While they are not commonly used
        for screen layouts due to varying screen sizes, they find application in
        print layouts where the output medium is known.
      </p>
      <ol>
        <li> Pixels (px):</li>
        <ul>
          <li>
            Meaning: A pixel represents a single dot on a screen. It’s the
            smallest unit of measurement in CSS.
          </li>
          <li>
            Usage: Pixels are commonly used for specifying precise dimensions,
            such as element sizes, borders, and margins.
          </li>
          <li>Example:</li>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  div {
    width: 300px;
    height: 200px;
    }
                `}
              </code>
            </pre>
            <p>
              {`
              You can specify any numerical value you want, as long as you add a "px" suffix at the end. "px" stands for pixels, as it wouldn't make sense to provide the value as "5pixels", which would be both cumbersome and incorrect. While you may not use all these units, you will certainly encounter developers using "px", "em", "rem", and "%".`}
            </p>
          </div>
        </ul>
        <li> Inches (in):</li>
        <ul>
          <li>
            Meaning: An inch corresponds to a physical inch (2.54 centimeters)
            in the real world.
          </li>
          <li>
            Usage: Rarely used for web design due to varying screen sizes.
          </li>
          <li>Example:</li>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  img {
    max-width: 2in;
      }
                `}
              </code>
            </pre>
          </div>
          <p>
            {`
            You won't often see people using it. Personally, I have never used it before. However, it's worth knowing that it exists. Once you encounter it, you won't be surprised.`}
          </p>
        </ul>
        <li> Centimeters (cm):</li>
        <ul>
          <li> Meaning: Represents centimeters.</li>
          <li> Usage: Similar to inches, but less common in web design.</li>
          <li> Example:</li>
          <h4>CSS code</h4>
          <div>
            <pre>
              <code>
                {`
  header {
    margin-bottom: 1cm;
    }
                `}
              </code>
            </pre>
          </div>
          <p>
            {` 
            You won't often use this either, but just be aware of it. The main focus should be on what suits your preferences or what you find easy.`}
          </p>
        </ul>
        <li> Millimeters (mm):</li>
        <ul>
          <li> Meaning: Corresponds to millimeters.</li>
          <li>
            Usage: Less common but occasionally used for precise measurements.
          </li>
          <li> Example:</li>
          <h4>CSS code</h4>
          <div>
            <pre>
              <code>
                {`
  table {
    border-spacing: 5mm;
      }
                `}
              </code>
            </pre>
          </div>
        </ul>
      </ol>
      <h2>Relative Length Units:</h2>
      <ol>
        <li>em (Element):</li>
        <h4>Meaning:</h4>
        <ul>
          <li> The em unit is a relative measurement in CSS.</li>
          <li>
            It represents a size relative to the font size of the parent
            element.
          </li>
        </ul>
        <h4>Usage:</h4>
        <ul>
          <li>
            The em unit is particularly useful for creating scalable layouts.
          </li>
          <li>
            When you set an element’s size using em, it adjusts proportionally
            based on the font size of its parent.
          </li>
        </ul>
        <h4>Example:</h4>
        <p> Consider the following CSS snippet:</p>
        <h4>CSS code</h4>
        <div>
          <pre>
            <code>
              {`
  p {
   font-size: 1.2em; /* 120% of parent's font size */
   }
              `}
            </code>
          </pre>
        </div>
        <p>
          {`In this example, the font size of the <p> (paragraph) element is set to 1.2 times the font size of its parent.`}
        </p>
        <p>
          {`If the parent element (e.g., a <div>) has a font size of 16 pixels, the paragraph’s font size will be calculated as 1.2 * 16px = 19.2px.`}{" "}
        </p>
        <p>
          {` 
          You will definitely be seeing developers using this a lot, but it's up to you to choose what suits your understanding. `}
        </p>
        <li> rem (Root Element):</li>
        <h4> Meaning:</h4>
        <ul>
          <li>The rem unit stands for “root em”.</li>
          <li>
            {`It is relative to the font size of the root <html> element (not the parent element like em).`}
          </li>
          <li>
            {` The root element is typically the entire web page, represented by the <html> tag.`}
          </li>
        </ul>
        <h4> Usage:</h4>
        <ul>
          <li>
            The rem unit is ideal for creating responsive designs because it
            ensures consistency across the entire document.
          </li>
          <li>
            Unlike em, which inherits its size from the parent, rem always
            refers to the root font size.
          </li>
        </ul>
        <h4>Example:</h4>
        <p> Consider the following CSS snippet:</p>
        <h4>CSS code</h4>
        <div>
          <pre>
            <code>
              {`
    body {
      font-size: 16px; /* Base font size for the entire document */
      }
    h2 {
      margin: 1.5rem; /* 1.5 times the root font size */
      }
              `}
            </code>
          </pre>
        </div>
        <h4> In this example:</h4>
        <ul>
          <li>
            The base font size for the entire document is set to 16 pixels using
            body.
          </li>
          <li>
            {`
            The <h2> (heading level 2) element’s margin is specified as 1.5 times the root font size.`}
          </li>
          <li>
            {`If the root font size (set by the <html> element) remains at 16 pixels, the margin for <h2> will be calculated as 1.5 * 16px = 24px.`}
          </li>
        </ul>
        <p>
          By using rem, you create a consistent and scalable design where
          elements adjust proportionally based on the root font size. This makes
          it easier to maintain responsiveness across different screen sizes.
        </p>
        <li> vw (Viewport Width):</li>
        <h4> Meaning:</h4>
        <ul>
          <li>The vw unit stands for “viewport width”.</li>
          <li>It is relative to a percentage of the viewport width.</li>
          <li>
            The viewport refers to the visible area of the web page within the
            browser window.
          </li>
        </ul>
        <h4> Usage:</h4>
        <ul>
          <li>
            The vw unit is great for creating responsive layouts because it
            adjusts based on the user’s screen size.
          </li>
          <li>
            When you set an element’s size using vw, it scales proportionally
            with the width of the viewport.
          </li>
        </ul>
        <h4>Example:</h4>
        <p>Consider the following CSS snippet:</p>
        <h4> CSS</h4>
        <ul>
          <li>
            {`The <section> element’s width is set to 50% of the viewport width.`}
          </li>
          <li>
            If the viewport width is 1000 pixels, the section’s width will be
            calculated as 0.5 * 1000px = 500px.
          </li>
        </ul>
        <p>
          By using vw, you ensure that your design adapts to different screen
          sizes, making it ideal for responsive web development.
        </p>
        <li> vh (Viewport Height):</li>
        <h4> Meaning:</h4>
        <ul>
          <li> The vh unit stands for “viewport height”.</li>
          <li> It is relative to a percentage of the viewport height.</li>
          <li>
            The viewport refers to the visible area of the web page within the
            browser window.
          </li>
        </ul>
        <h4> Usage:</h4>
        <ul>
          <li> The vh unit is useful for creating responsive designs.</li>
          <li>
            When you set an element’s height using vh, it scales proportionally
            with the height of the viewport.
          </li>
        </ul>
        <h4> Example:</h4>
        <p> Consider the following CSS snippet:</p>
        <h4> CSS code</h4>
        <pre>
          <code>
            {`
  aside {
    height: 80vh; /* 80% of the viewport height */
    }
            `}
          </code>
        </pre>
        <p> In this example:</p>
        <ul>
          <li>
            {`The <aside> element’s height is set to 80% of the viewport height.`}
          </li>
          <li>
            {`If the viewport height is 800 pixels, the <aside> will have a height of 0.8 * 800px = 640px.`}
          </li>
        </ul>
        <p>
          Using vh ensures that your design adapts to different screen sizes,
          making it ideal for responsive web development. 🌟
        </p>
      </ol>
      <p>
        Remember, em and rem are powerful tools for creating flexible and
        responsive designs. As for why we use “px” instead of spelling out
        “pixel,” it’s simply for brevity and consistency in code.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Units .
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Units;

export const BoxModel = () => {
  const navigate = useNavigate();
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

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
