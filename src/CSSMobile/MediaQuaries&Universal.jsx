import { InArticleAdUnit } from "../AdUnit";

const MediaQuaries = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>CSS Media Query</h1>
      <p>
        When designing a website, {`it's`} crucial to ensure your content looks
        good on all screen sizes.
      </p>
      <p>
        In this article, I will talk about how to use responsive design and
        media queries to make this happen. I will also provide code examples for
        media queries using max and min screen widths.
      </p>
      <h2>What is Responsive Design?</h2>
      <p>
        Responsive Design is the practice of making sure your content looks good
        on all screen sizes. Everything in the website including layouts, fonts
        and images should automatically adapt to the {`user's`} device.
      </p>
      <p>
        In the early{" "}
        {`2000's, developers focused on making sure their websites
        looked good on larger screen sizes like laptops and desktop computers.
        In today's`}{" "}
        world, you have to consider devices like mobile phones, tablets, and
        even watches.
      </p>
      <p>An important component of responsive design are media queries.</p>
      <h2>What is a Media Query?</h2>
      <p>
        In CSS, a media query is used to apply a set of styles based on the
        {`browser's`} characteristics including width, height, or screen
        resolution.
      </p>
      <p>
        For large screen sizes like desktops, we can see a search menu in the
        upper left-hand corner.
      </p>

      <img
        src="https://www.freecodecamp.org/news/content/images/size/w1600/2021/10/Screen-Shot-2021-10-19-at-7.50.41-PM.png"
        alt="demo"
      />

      <p>
        But on mobile devices, there is no search menu and we only have the menu
        options and sign-in button.
      </p>
      <img
        src="https://www.freecodecamp.org/news/content/images/2021/10/Screen-Shot-2021-10-19-at-7.54.59-PM.png"
        alt="demo"
      />

      <h2>Basic syntax of a media query</h2>
      <p>Here is the basic syntax for a media query in CSS:</p>
      <pre>
        <code>
          {`
@media media-type (media-feature){
  /*Styles go here*/
}
    `}
        </code>
      </pre>
      <p>{`Let's`} break down what this syntax means.</p>
      <p>
        The @media is a type of At-rule in CSS. These rules will dictate what
        the CSS will look like based on certain conditions.
      </p>
      <p>
        The media type refers to the category of media for the device. The
        different media types include all, print, screen, and speech.
      </p>
      <ol>
        <li>all - works for all devices</li>
        <li>
          print - works for devices where the media is in print preview mode
        </li>
        <li>screen - works for devices with screens</li>
        <li>
          speech - works for devices like screen readers where the content is
          read out loud to the user
        </li>
      </ol>

      <p>
        <i>
          Except when using the not or only logical operators, the media type is
          optional and the all type is implied.
        </i>{" "}
      </p>

      <p>You can choose to omit the media type and use this syntax instead.</p>
      <pre>
        <code>
          {`
@media (media-feature){
  /*Styles go here*/
}
    `}
        </code>
      </pre>
      <p>
        The media feature refers to the characteristics of the browser which
        include height and width of the viewport, orientation, or aspect-ratio.
        For a complete list of the possible media features, please visit the{" "}
        <a href="https://developer.mozilla.org/en-US/ ">MDN docs.</a>
      </p>
      <p>For this article, we are going to focus on the width media feature.</p>

      <p>
        If you wanted to create more complex media queries, then you can use
        logical operators.
      </p>
      <ul>
        <li>
          and - This operator is used to join multiple media features. If all of
          the media features are true then the styles inside the curly braces
          will be applied to the page.
        </li>
        <li>
          not - This operator reverses a true query into a false and a false
          query into a true.
        </li>
        <li>
          , (comma) - This operator will separate multiple media features by
          commas and apply the styles inside the curly brace if one of the
          conditions is true.
        </li>
      </ul>
      <h2>Media query examples</h2>
      <p>
        {`Let's`} take a look at a few examples that show how to use media
        queries in CSS.
      </p>
      <p>
        In this first example, we want the background color to change to blue
        when the width of the device is 600px or less.
      </p>
      <p>
        In the CSS, we want to add a (max-width: 600px) for the media query
        which tells the computer to target devices with a screen width of 600px
        and less.
      </p>
      <p>
        Inside the media query, we change the background styles for the body to
        background-color: #87ceeb;.
      </p>
      <h4>Here is the complete media query:</h4>
      <pre>
        <code>
          {`
@media (max-width: 600px) {
  body {
    background-color: #87ceeb;
  }
}
    `}
        </code>
      </pre>
      <img
        src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/10/Screen-Shot-2021-10-23-at-1.24.25-PM.png"
        alt="demo"
      />
      <p>
        In this second example, we want to change the background color from blue
        to red if the device has a width between 600 and 768px. We can use the
        and operator to accomplish this.
      </p>
      <pre>
        <code>
          {`
@media (min-width: 600px) and (max-width: 768px) {
  body {
    background-color: #de3163;
  }
}
    `}
        </code>
      </pre>
      <p>
        When you test it out, you should see that the background color is blue
        if the width of the screen is below 600px or above 768px.
      </p>
      <h1>
        Should you write separate media queries for every single device on the
        market?
      </h1>
      <p>The short answer to that question is no.</p>
      <p>
        There are way too many devices out on the market to try to write a media
        query for each device. Technology is always changing which means new
        devices will always be coming out.
      </p>
      <p>
        It is more important that you target a range of devices using media
        queries. In Cem {`Eygi's`} article, he lists out some common breakpoints
        used for media queries.
      </p>
      <ul>
        <li>320px-480px: Mobile devices</li>
        <li>481px—768px: iPads, Tablets</li>
        <li>769px—1024px: Small screens, laptops</li>
        <li>1025px—1200px: Desktops, large screens</li>
        <li>1201px and more— Extra large screens, TV</li>
      </ul>
      <InArticleAdUnit />
      <h2>Conclusion</h2>
      <p>
        Responsive Design is the practice of making sure your content looks good
        on all screen sizes. Everything in the website including layouts, fonts,
        and images should automatically adapt to the {`user's`} device.
      </p>
      <p>
        In CSS, a media query is used to apply a set of styles based on the
        {`browser's`} characteristics including width, height, or screen
        resolution.
      </p>
      <p>Here is the basic syntax for a media query in CSS.</p>

      <pre>
        <code>
          {`
@media media-type (media-feature){
  /*Styles go here*/
}
    `}
        </code>
      </pre>
      <p>
        The media type is optional unless you are using the not or only logical
        operators. If the media type is omitted then the media query will target
        all devices.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Media queries .
      </p>

      <div className="button-container">
        {/* <button onClick={() => (window.location.href = "/variableMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/universalMob")}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default MediaQuaries;

export const Universal = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>The World of the Universal Selector in CSS</h1>
      <p>
        {`The universal selector is a powerful tool in CSS that allows you to
        target and style all elements on a web page. It is represented by the
        asterisk (*) character and can be used to apply styles globally. In this
        section, we'll explore the wonderful world of the universal selector and
        learn how to use it effectively in your CSS designs. Let's begin!`}
      </p>

      <h2>Understanding the Universal Selector</h2>
      <p>
        {`The universal selector is denoted by the asterisk (*) character and
        matches all elements within the document. It allows you to apply styles
        that affect every element, regardless of their type or position. Here's
        an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
* {
  color: blue; /* Sets the color of all elements to blue */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we used the universal selector to set the color of
        all elements to blue. This is a powerful way to apply global styles or
        reset default styles across the entire page.
      </p>

      <h2>Using the Universal Selector</h2>
      <p>
        The universal selector can be used in various ways to create visually
        appealing and functional designs. Here are some common use cases:
      </p>

      <h3>Global Styles</h3>
      <p>
        {`The universal selector is useful for applying global styles that affect
        all elements on the page. This can include setting font styles,
        background colors, or margin and padding values. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
* {
  font-family: Arial, sans-serif; /* Sets the font family for all elements */
  margin: 0; /* Removes margins from all elements */
  padding: 0; /* Removes padding from all elements */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Resetting Default Styles</h3>
      <p>
        {`The universal selector can be used to reset the default styles of all
        elements, creating a clean slate for your custom styles. This is often
        done to ensure consistency and avoid browser inconsistencies. Here's an
        example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
* {
  margin: 0; /* Resets margins for all elements */
  padding: 0; /* Resets padding for all elements */
  border: none; /* Removes borders from all elements */
}
          `}
          </code>
        </pre>
      </code>

      <h3>Combining with Other Selectors</h3>
      <p>
        {`The universal selector can be combined with other selectors to create
        more specific styles. For example, you can use it with class or ID
        selectors to apply styles to specific elements while still targeting all
        elements on the page. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
* .highlight {
  background-color: yellow; /* Adds a yellow background to all elements with the "highlight" class */
}
          `}
          </code>
        </pre>
      </code>
      <InArticleAdUnit />
      <h2>Benefits of the Universal Selector</h2>
      <p>
        Using the universal selector offers several advantages for your designs:
      </p>

      <ul>
        <li>
          <strong>Global Styling:</strong> The universal selector allows you to
          apply styles consistently across all elements on the page, ensuring a
          unified look and feel.
        </li>
        <li>
          <strong>Resetting Defaults:</strong> It enables you to reset the
          default styles of all elements, creating a blank canvas for your
          custom designs.
        </li>
        <li>
          <strong>Specificity Control:</strong> By combining the universal
          selector with other selectors, you can achieve a fine level of control
          over the specificity of your styles.
        </li>
      </ul>

      <h2>Challenges of the Universal Selector</h2>
      <p>
        While the universal selector is powerful, it also comes with some
        challenges:
      </p>

      <ul>
        <li>
          <strong>Overly Broad Targeting:</strong> The universal selector
          targets all elements, which can lead to unintended consequences if not
          used carefully.{" "}
          {` It's important to be mindful of its impact on the
          entire page.`}
        </li>
        <li>
          <strong>Performance Impact:</strong> Applying styles to all elements
          can impact performance, especially on large and complex websites.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to experiment with the universal selector in CSS! Open
        your code editor and create a new HTML file. Let's explore the wonderful
        world of the universal selector:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with various elements, such as
          headings, paragraphs, links, and images.
        </li>
        <li>
          Apply the universal selector to set global styles, such as font
          styles, colors, or margins, and observe how it affects all elements on
          the page.
        </li>
        <li>
          Experiment with combining the universal selector with other selectors,
          such as class or ID selectors, to create more specific styles.
        </li>
        <li>
          Refer to universal selector resources and tutorials to discover
          creative ways to use it, such as creating global resets, applying
          consistent styles, or managing performance.
        </li>
      </ol>

      <p>
        Remember, the universal selector is a powerful tool in CSS that gives
        you the ability to target all elements on the page. Use it wisely to
        achieve global styling, reset default styles, and create visually
        appealing designs. Happy coding!
      </p>

      <div className="button-container">
        {/* <button onClick={() => (window.location.href = "/mediaQMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/attributeMob")}>
          Next
        </button> */}
      </div>
    </div>
  );
};
