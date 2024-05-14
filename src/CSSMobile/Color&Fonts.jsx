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
        <button onClick={() => (window.location.href = "/selectMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/fontMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Color;

export const Fonts = () => {
  return (
    <div className="comments-container">
      <h1>CSS Fonts</h1>
      <ol>
        <li>
          <h2>Font Families</h2>
          <p>
            Font families play a vital role in defining the visual style of your
            text. They group related fonts with similar characteristics,
            allowing you to specify fallback options.
          </p>
          <p>There are two main types of font families:</p>
          <ol>
            <li>
              <h3>Generic Font Families</h3>
              <ul>
                <li>
                  Generic font families categorize fonts into broader groups
                  with similar design traits.
                </li>
                <li>
                  They act as fallbacks when specific fonts are unavailable.
                </li>
                <li>
                  Examples include serif, sans-serif, monospace, cursive, and
                  fantasy.
                </li>
              </ul>
            </li>
            <li>
              <h3>Specific Font Families</h3>
              <ul>
                <li>
                  Specific font families refer to actual font names like{" "}
                  {`"Arial," "Helvetica," "Georgia,"`} etc.
                </li>
                <li>
                  You can specify multiple font names to create a fallback
                  system.
                </li>
              </ul>
            </li>
          </ol>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
/* Specify different fonts for three paragraphs */
.p1 {
  font-family: "Times New Roman", Times, serif;
  /* Fallback to generic serif font */
}
.p2 {
  font-family: Arial, Helvetica, sans-serif;
  /* Fallback to generic sans-serif font */
}
.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
  /* Fallback to generic monospace font */
}
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Size</h2>
          <p>
            The font-size property allows you to control the size of your text
            using either absolute or relative units.
          </p>
          <h4>Absolute Size (Pixels):</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 14px;
  }
            `}
              </code>
            </pre>
          </div>
          <h4>Relative Size (Em):</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  h1 {
    font-size: 2.5em; /* 40px/16=2.5em */
  }
  h2 {
    font-size: 1.875em; /* 30px/16=1.875em */
  }
  p {
    font-size: 0.875em; /* 14px/16=0.875em */
  }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Weight</h2>
          <p>
            The font-weight property adjusts the thickness or boldness of the
            text.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
  .normal-text {
    font-weight: normal; /* Regular weight */
  }
  .bold-text {
    font-weight: bold; /* Bold weight */
  }
  .bolder-text {
    font-weight: 900; /* Extra bold weight */
  }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Style</h2>
          <p>
            The font-style property sets whether a font should be styled with a
            normal, italic, or oblique face.
          </p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
            .italic-text {
              font-style: italic; /* Italic style */
            }
            `}
              </code>
            </pre>
          </div>
        </li>
        <li>
          <h2>Font Variant</h2>
          <p>The font-variant property controls the use of small caps.</p>
          <h4>Example:</h4>
          <div>
            <h4>CSS code</h4>
            <pre>
              <code>
                {`
.small-caps-text {
  font-variant: small-caps; /* Display text in small caps */
}
            `}
              </code>
            </pre>
          </div>
        </li>
      </ol>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/colorMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/backgroundMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
