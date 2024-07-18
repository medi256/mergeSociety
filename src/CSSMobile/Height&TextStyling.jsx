import { InArticleAdUnit } from "../AdUnit";

const Height = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>The World of Height in CSS</h1>
      <p>
        {`Height is another fundamental property in CSS that determines the vertical size
        of an element. Just like width, height plays a crucial role in defining the
        layout, appearance, and responsiveness of your web designs. In this section,
        we'll explore the wonderful world of height in CSS and learn how to use it
        effectively to style your elements. Let's begin!`}
      </p>

      <h2>Height Property</h2>
      <p>
        The <code>height</code> property allows you to set the height of an
        element. You can specify the height using various units, such as pixels
        (px), percentages (%), or keywords like <code>auto</code>.{" "}
        {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  height: 200px; /* Sets the height to 200 pixels */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code> property to 200
        pixels, making the div element 200 pixels tall. You can adjust the
        height value to create elements with different sizes, depending on your
        design needs.
      </p>

      <h2>Percentages for Height</h2>
      <p>
        {`Using percentages for height allows you to set the height relative to the height
        of the parent element. This means that the height will adjust dynamically based
        on the size of the parent element. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  height: 50%; /* Sets the height to 50% of the parent's height */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code>{" "}
        {`property to 50%, making the
        div element half the height of its parent element. This is useful when you want
        the element to scale proportionally with the parent element's height. For
        example, if the parent element has a height of 600 pixels, the child element
        with a height of 50% will be 300 pixels tall. Percentages for height are
        commonly used to create flexible layouts that adapt to different screen
        sizes or to maintain a specific aspect ratio.`}
      </p>

      <h2>Auto Height</h2>
      <p>
        The <code>height: auto</code>{" "}
        {`property is commonly used for images and other
        elements that need to adjust their height based on their content. Here's an
        example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
img {
  height: auto; /* Sets the height based on the image's original size */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>height</code> property to{" "}
        <code>auto</code>
        for an image element. This means that the image will be displayed at its
        original height, without any stretching or distortion. The{" "}
        <code>auto</code>
        value tells the browser to calculate the height based on the intrinsic
        size of the image. This is particularly useful for images or other
        elements that need to maintain their original aspect ratio while fitting
        within their container.
      </p>
      <InArticleAdUnit />
      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to experiment with height in CSS! Open your code editor and create
        a new HTML file. Let's explore the wonderful world of height:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with div elements to serve as
          containers for your height experiments.
        </li>
        <li>
          Apply different height values, such as pixels, percentages, and auto,
          and observe how they affect the size of the elements.
        </li>
        <li>
          {`Experiment with percentages for height to create elements that scale
          proportionally with the parent element's height.`}
        </li>
        <li>
          Use <code>height: auto</code> for images or other elements that need
          to adjust their height based on their content. Notice how the element
          maintains its original aspect ratio.
        </li>
        <li>
          Explore the relationship between height and width by creating elements
          with different height and width values. Observe how they interact and
          affect the layout.
        </li>
        <li>
          Refer to height resources and tutorials to discover creative ways to
          use height to create flexible and responsive designs.
        </li>
      </ol>

      <p>
        Remember, height is a powerful tool in web design. It helps define the
        layout, appearance, and responsiveness of your designs. Choose height
        values that align with your brand and enhance the overall user
        experience. Happy coding!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/widthMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/styleMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Height;
export const TextStyling = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>The Magical Art of Styling Text in CSS</h1>
      <p>
        {`Styling text in CSS is like giving your words a magical makeover! You can
        transform their appearance, add emphasis, and create visually stunning
        designs. In this section, we'll explore the fascinating world of text
        styling in CSS and learn how to use different properties to style your text
        elements. Let's embark on this text styling adventure!`}
      </p>

      <h2>Word Spacing</h2>
      <p>
        The <code>word-spacing</code>{" "}
        {`property allows you to adjust the space between
        words in your text. You can use positive or negative values to increase or
        decrease the spacing. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  word-spacing: 5px; /* Adds 5 pixels of space between each word */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>word-spacing</code> property to 5
        pixels, creating a noticeable gap between each word. This technique can
        be used to create a unique layout, improve readability, or add emphasis
        to certain phrases or keywords. Play with different values to find the
        perfect spacing that enhances the visual appeal and readability of your
        text.
      </p>

      <h2>Letter Spacing</h2>
      <p>
        The <code>letter-spacing</code>{" "}
        {`property allows you to adjust the space between
        individual letters in your text. You can use positive or negative values to
        increase or decrease the spacing. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
h1 {
  letter-spacing: 2px; /* Adds 2 pixels of space between each letter */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>letter-spacing</code> property to 2
        pixels, creating a slight gap between each letter. This technique is
        often used to create unique visual effects, add emphasis to headings, or
        improve the readability of tightly spaced letters. Experiment with
        different values to find the perfect letter spacing that complements
        your design and enhances readability.
      </p>

      <h2>Line Height</h2>
      <p>
        The <code>line-height</code> property allows you to adjust the spacing
        between lines of text. It determines the distance between the baselines
        of adjacent lines. You can use numeric values, percentages, or keywords
        like
        <code>normal</code>. {`Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  line-height: 1.5; /* Sets the line height to 1.5 times the font size */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>line-height</code> property to 1.5,
        creating a comfortable spacing between lines of text. This improves
        readability and makes the text easier to scan. You can adjust the line
        height to create tighter or looser spacing, depending on your design
        needs. A higher line height generally improves readability, while a
        lower line height can create a more compact and dense appearance.
      </p>

      <h2>Text Alignment</h2>
      <p>
        The <code>text-align</code> property allows you to align your text
        within its container. You can choose from values like <code>left</code>,
        <code>right</code>, <code>center</code>, or <code>justify</code>.{" "}
        {`Here's an`}
        example:
      </p>

      <code>
        <pre>
          <code>
            {`
div {
  text-align: justify; /* Justifies the text within the container */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>text-align</code> property to
        <code>justify</code>, aligning the text to both the left and right edges
        of the container. This creates a clean, justified alignment, commonly
        used for body text or paragraphs. You can also center text using{" "}
        <code>text-align: center</code>
        to create a balanced layout or align text to the left or right to
        achieve different visual effects. Text alignment plays a crucial role in
        creating visually appealing and readable designs.
      </p>
      <h2>
        Here is a table for all th values of <code>{`text-align`}</code>{" "}
        property
      </h2>
      <table border="1" style={{ borderCollapse: "collapse", padding: "20px" }}>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>left</td>
          <td>Aligns the text to the left</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Aligns the text to the right</td>
        </tr>
        <tr>
          <td>center</td>
          <td>Centers the text horizontally</td>
        </tr>
        <tr>
          <td>justify</td>
          <td>
            Expands the spaces between words so that the lines of text touch
            both sides of the container
          </td>
        </tr>
      </table>
      <InArticleAdUnit />
      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor and
        create a new HTML file. Let's explore the wonderful world of text styling:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with text elements to serve as
          containers for your text styling experiments.
        </li>
        <li>
          Apply different word spacing values and observe how they affect the
          spacing between words. Try using larger and smaller values to see the
          impact on readability.
        </li>
        <li>
          Experiment with letter spacing to create unique visual effects or
          improve readability. Play with positive and negative values to see
          their effects.
        </li>
        <li>
          Adjust the line height to create comfortable spacing between lines of
          text, ensuring readability. Try different values to find the perfect
          balance.
        </li>
        <li>
          Explore text alignment options to create balanced layouts or emphasize
          important text elements. Center a heading, justify a paragraph, or
          align text to the left or right to see the visual impact.
        </li>
        <li>
          Refer to text styling resources and tutorials to discover creative
          ways to style your text, such as using text shadows, adding special
          effects, or combining multiple text styling properties.
        </li>
      </ol>

      <p>
        Remember, text styling plays a crucial role in web design. It helps
        convey the right tone, adds emphasis, and enhances the user experience.
        Choose text styles that align with your brand, ensure readability, and
        create visually appealing designs. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/heightMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/unitsMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
