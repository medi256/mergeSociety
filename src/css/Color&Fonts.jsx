const Color = () => {
  return (
    <div className="comments-container">
      <h1>The Magical World of Colors in CSS</h1>
      <p>
        Colors are like the paintbrushes that bring your web designs to life!
        They add personality, emotion, and visual appeal to your websites. In
        this section, {` we'll `} explore the fascinating world of colors in CSS
        and learn how to use the <code>color</code> property to style your text
        and other elements. {`Let's embark on this colorful adventure!`}
      </p>

      <h2>
        The <code>color</code> Property
      </h2>
      <p>
        The <code>color</code> property is a fundamental tool in CSS that allows
        you to specify the color of text and other elements. It determines the
        color of the text content within an element. For example:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: red; /* Sets the text color of paragraphs to red */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, the <code>color</code> property is used to set the
        text color of paragraphs (<code> {`<p>`}</code>) to red. The{" "}
        <code>color</code>
        property can be applied to various HTML elements, such as headings,
        links, and more, allowing you to add color to your designs.
      </p>

      <h2>Color Keywords</h2>
      <p>
        CSS provides a set of predefined color keywords that are easy to
        remember and use. These keywords represent common color names, making it
        convenient to specify colors without memorizing complex color codes.
        Here are some examples:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: red; /* Keyword for red color */
}

div {
  color: blue; /* Keyword for blue color */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        Color keywords, such as <code>red</code>, <code>blue</code>,
        <code>green</code>, and more, provide a simple and intuitive way to add
        color to your designs. They are widely recognized and easy to remember,
        making them a popular choice for specifying colors.
      </p>

      <h2>Hexadecimal Colors</h2>
      <p>
        Hexadecimal colors, often referred to as hex colors, offer a more
        precise and versatile way to specify colors. Hex colors use a six-digit
        combination of letters and numbers preceded by a pound sign (#). Here
        are some examples:
      </p>

      <code>
        <pre>
          <code>
            {`
#FF0000 /* Red */
#00FF00 /* Lime Green */
#336699 /* Dark Blue */
          `}
          </code>
        </pre>
      </code>

      <p>
        In hexadecimal colors, each pair of letters and numbers represents the
        intensity of red, green, and blue (RGB) components of the color. For
        example, #FF0000 represents red, with the highest intensity of red
        (#FF), no green (00), and no blue (00). Hex colors provide a vast
        spectrum of color options, allowing you to create vibrant and unique
        designs.
      </p>
      <p>
        <p>
          If {` you're `} interested in hexadecimal color codes, check out this
          link:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">
            Mozilla Developer Network
          </a>
          .
        </p>
      </p>

      <h2>RGB Colors</h2>
      <p>
        RGB colors are specified using a combination of red, green, and blue
        values. Each value can range from 0 to 255, giving you precise control
        over the color composition. Here are some examples:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: rgb(255, 0, 0); /* Red */
}

div {
  color: rgb(0, 255, 0); /* Green */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, <code>rgb(255, 0, 0)</code> represents red, with the
        maximum value of red (255), no green (0), and no blue (0). RGB colors
        allow for fine-grained control over the color composition, enabling you
        to create endless color variations.
      </p>
      <p>
        If you need to learn more about RGB colors, please visit this link:{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">
          Mozilla Developer Network
        </a>
        .
      </p>

      <h2>HSL Colors</h2>
      <p>
        HSL stands for Hue, Saturation, and Lightness. HSL colors provide an
        alternative way to specify colors by defining the hue, saturation, and
        lightness of a color. Here are some examples:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: hsl(0, 100%, 50%); /* Red */
}

div {
  color: hsl(120, 50%, 75%); /* Light Green */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, <code>hsl(0, 100%, 50%)</code> represents red, with a
        hue of 0 (red), 100% saturation, and 50% lightness. HSL colors offer a
        more intuitive way to specify colors, as you can easily adjust the hue,
        saturation, and lightness to create the desired color.
      </p>
      <p>
        To explore more about HSL colors, you can visit this link:{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">
          Mozilla Developer Network
        </a>
        .
      </p>

      <h2>Color Opacity</h2>
      <p>
        Color opacity refers to the transparency or opacity of a color. You can
        control the opacity of a color using the <code>rgba()</code> function.
        The opacity value ranges from 0 (fully transparent) to 1 (fully opaque).
        {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In this example, the red color has an opacity of 0.5, making it
        semi-transparent. Adjusting the opacity allows you to create subtle
        effects, add depth to your designs, and create interesting visual
        effects.
      </p>

      <h2>Note</h2>
      <p>
        {`You can use any type of color you know. Try changing those colors — try
        black, blue, orange, or any other color. If you're a beginner, you only
        need to use color names; you don't have to deal with other color values.
        As you master CSS, you will become familiar with these other color
        values. The reason we mention them is to make you aware that they do
        exist. So, if you encounter them in someone's code, you won't be
        surprised.`}
      </p>

      <h2>Color Theory and Emotion</h2>
      <p>
        {`Understanding color theory is crucial when working with colors in web
        design. Different colors evoke different emotions and can influence the
        user's perception of your website. Here are some common color
        associations:`}
      </p>

      <ul>
        <li>
          <strong>Red:</strong> Passion, energy, excitement, and urgency. Red is
          often associated with boldness and can be used to grab attention.
        </li>
        <li>
          <strong>Blue:</strong> Trust, reliability, calmness, and serenity.
          Blue is commonly used to convey a sense of professionalism and
          stability.
        </li>
        <li>
          <strong>Green:</strong> Nature, growth, harmony, and freshness. Green
          is often associated with environmental awareness and health.
        </li>
        <li>
          <strong>Yellow:</strong> Happiness, optimism, caution, and creativity.
          Yellow is a bright and cheerful color that can be used to highlight
          important elements.
        </li>
        <li>
          <strong>Purple:</strong> Royalty, luxury, sophistication, and
          creativity. Purple is often associated with elegance and wisdom.
        </li>
      </ul>

      <p>
        Choosing the right colors based on color theory can help convey the
        desired emotions, create a positive user experience, and make your
        designs more impactful.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to put your knowledge into practice! Open your code editor
        and create a new HTML file. Let's explore the wonderful world of colors:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with headings, paragraphs, and other
          elements.
        </li>
        <li>
          Apply different color values to elements using color keywords,
          hexadecimal, RGB, and HSL colors. Observe how the colors change and
          create different moods or themes.
        </li>
        <li>
          Experiment with color opacity by adjusting the fourth value in{" "}
          <code>rgba()</code>. Notice how the transparency affects the
          appearance of elements and creates interesting effects.
        </li>
        <li>
          Try combining colors with other CSS properties, such as borders and
          text shadows, to create visually appealing designs.
        </li>
        <li>
          Explore color theory and choose colors that convey the desired
          emotions and enhance the user experience.
        </li>
        <li>
          Refer to color tools, such as color pickers and color palette
          generators, to discover new colors and create beautiful color schemes
          for your projects.
        </li>
      </ol>

      <p>
        Remember, colors have a powerful impact on your designs. Choose colors
        that align with your brand, convey the right emotions, and ensure
        accessibility for all users. Happy coding and happy coloring!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "selectors")}>
          back
        </button>
        <button onClick={() => (window.location.href = "fonts")}>Next</button>
      </div>
    </div>
  );
};

export default Color;

export const Fonts = () => {
  return (
    <div className="comments-container">
      <h1>The Art of Fonts in CSS</h1>
      <p>
        {`Fonts are like the brushstrokes that bring your web designs to life!
        They play a crucial role in shaping the overall look and feel of your
        website, influencing readability, aesthetics, and user experience. In
        this section, we'll explore the magical world of fonts in CSS and learn
        how to style your text with elegance and precision. Let's begin our
        typographic journey!`}
      </p>

      <h2>Font Family</h2>
      <p>
        The <code>font-family</code>{" "}
        {`property is like a painter's palette,
        allowing you to choose the typeface for your text. You can select from
        a wide range of font families, including serif, sans-serif, monospace,
        and more. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  font-family: Arial, sans-serif;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>font-family</code> property to
        <code>Arial</code>, with a fallback to <code>sans-serif</code>.{" "}
        {`The
        browser will use Arial if it's available, and if not, it will default
        to a sans-serif font. This ensures that your text remains legible and
        consistent across different devices and browsers.`}
      </p>
      <p>
        If you want to explore different font families values, you can refer to
        this link:{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">
          Mozilla Developer Network
        </a>
        .
      </p>

      <h2>Font Size</h2>
      <p>
        The <code>font-size</code>{" "}
        {` property allows you to adjust the size of your
        text, making it larger or smaller. You can use various units, such as
        pixels (px), ems (relative to the parent element's font size), or
        percentages (%). Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  font-size: 16px;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>font-size</code> property to 16
        pixels, making the text within paragraphs appear at that size. You can
        experiment with different font sizes to find the perfect balance between
        readability and aesthetics.
      </p>
      <p>
        {`Don't panic if you don't understand units like (px), (%), and (ems). We
        will cover them more in the Units topic, explaining what each means and
        how they work. For now, try adding any number you know followed by the
        (px) keyword like this: (font-size: 20px;). Your text will increase or
        decrease in size according to what you provide. Play around with it and
        see in the browser.`}
      </p>

      <h2>Font Weight</h2>
      <p>
        The <code>font-weight</code> property allows you to adjust the thickness
        or boldness of your text. You can use numeric values (100 to 900) or
        keywords like <code>normal</code> and <code>bold</code>. {` Here's an`}
        example:
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  font-weight: bold;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>font-weight</code> property to
        <code>bold</code>, making the text within paragraphs appear bold. You
        can use different font weights to create emphasis, highlight important
        text, or add visual hierarchy to your designs.
      </p>
      <p>
        You can play around with your code to experiment with how your text
        changes. Add bold values, use numbers from 100 to 900, and experiment
        freely.
      </p>

      <h2>Font Style</h2>
      <p>
        The <code>font-style</code>{" "}
        {` property allows you to add stylistic variations
        to your text. You can choose between normal, italic, or oblique styles.
        Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  font-style: italic;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>font-style</code> property to
        <code>italic</code>, making the text within paragraphs appear in italic
        style. Italic text is often used to emphasize certain passages or to
        convey a softer tone.
      </p>
      <p>
        Experiment with other values as well. Try adding them and see how your
        text will appear.
      </p>

      <h2>Text Decoration</h2>
      <p>
        The <code>text-decoration</code> property allows you to add decorative
        elements to your text, such as underlines, overlines, or line-throughs.{" "}
        {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
a {
  text-decoration: underline;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>text-decoration</code> property to
        <code>underline</code>, adding an underline to the text within anchor (
        <code>a</code>) elements. Text decorations can be used to highlight
        important links or emphasize specific text.
      </p>
      <h3>
        Here is a table of values you can use to achieve different decorations.
      </h3>
      <table border="1" style={{ borderCollapse: "collapse", padding: "20px" }}>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>underline</td>
          <td>Adds a single line under the text content.</td>
        </tr>
        <tr>
          <td>overline</td>
          <td>Adds a single line above the text content.</td>
        </tr>
        <tr>
          <td>line-through</td>
          <td>
            Draws a line through the middle of the text content (strikethrough).
          </td>
        </tr>
        <tr>
          <td>none</td>
          <td>Removes any existing text decoration (default).</td>
        </tr>
        <tr>
          <td>blink (not recommended)</td>
          <td>Makes the text blink (avoid due to accessibility concerns).</td>
        </tr>
        <tr>
          <td>initial</td>
          <td>
            Sets the decoration to the default value specified by the user
            agent.
          </td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>Inherits the decoration value from the parent element.</td>
        </tr>
        <tr>
          <td>dotted</td>
          <td>Draws a line with small dots along the baseline of the text.</td>
        </tr>
        <tr>
          <td>dashed</td>
          <td>Draws a line with dashes along the baseline of the text.</td>
        </tr>
        <tr>
          <td>wavy</td>
          <td>Draws a wavy line under the text content.</td>
        </tr>
      </table>

      <h2>Text Transform</h2>
      <p>
        The <code>text-transform</code> property allows you to control the
        capitalization of your text. You can choose between uppercase,
        lowercase, and capitalize options. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  text-transform: uppercase;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>text-transform</code> property to
        <code>uppercase</code>, converting all text within paragraphs to
        uppercase. Text transformation can be used to create visual emphasis or
        to maintain consistency in headings or labels.
      </p>
      <h3>Common text-transform values:</h3>
      <table border="1" style={{ borderCollapse: "collapse", padding: "20px" }}>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>none</td>
          <td>No capitalization or transformation.</td>
        </tr>
        <tr>
          <td>capitalize</td>
          <td>Transforms the first character of each word to uppercase.</td>
        </tr>
        <tr>
          <td>uppercase</td>
          <td>Transforms all characters to uppercase.</td>
        </tr>
        <tr>
          <td>lowercase</td>
          <td>Transforms all characters to lowercase.</td>
        </tr>
      </table>

      <h2>Line Height</h2>
      <p>
        The <code>line-height</code> property allows you to adjust the spacing
        between lines of text, also known as leading. You can use numeric values
        or keywords like <code>normal</code>. {` Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
p {
  line-height: 1.5;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In the code above, we set the <code>line-height</code> property to 1.5,
        increasing the spacing between lines of text within paragraphs.
        Adjusting the line height can improve readability and make your text
        more visually appealing.
      </p>
      <p>
        Try to adjust and experiment on your browser. Play around with different
        numbers and see: the higher the value, the more the space increases; the
        lower the number, the less the space.
      </p>

      <h2>Practice Time!</h2>
      <p>
        {`Now it's time to unleash your creativity and experiment with fonts in CSS!
        Open your code editor and create a new HTML file. Let's explore the
        wonderful world of fonts:`}
      </p>

      <ol>
        <li>
          Create a simple HTML structure with headings, paragraphs, and other
          elements.
        </li>
        <li>
          Apply different font families to your text and observe how they change
          the overall appearance of your designs.
        </li>
        <li>
          Experiment with font sizes and see how they impact the readability and
          aesthetics of your content.
        </li>
        <li>
          Try using different font weights to create emphasis or highlight
          important information.
        </li>
        <li>
          Play with font styles, such as italic or oblique, to add variation and
          emphasis to your text.
        </li>
        <li>
          Explore text decorations, such as underline or line-through, to add
          visual cues and draw attention to specific elements.
        </li>
        <li>
          Adjust the line height to improve the readability and overall layout
          of your text-heavy designs.
        </li>
        <li>
          Refer to font resources and font pairing guides to choose
          complementary fonts for your designs.
        </li>
      </ol>

      <p>
        Remember, fonts have a significant impact on the user experience. Choose
        fonts that are legible, appropriate for your audience, and consistent
        with your brand identity. Happy coding and happy designing!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "color")}>back</button>
        <button onClick={() => (window.location.href = "background")}>
          Next
        </button>
      </div>
    </div>
  );
};
