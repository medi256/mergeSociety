import { InArticleAdUnit } from "../AdUnit";

const Introduction = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>Introduction to CSS</h1>

      <p>
        CSS, or Cascading Style Sheets, is a fundamental part of web development
        that allows developers to create visually appealing and user-friendly
        websites. If you are already familiar with HTML, learning CSS will
        enable you to take your web development skills to the next level. In
        this tutorial, we will cover the basics of CSS, its history, and its
        role in web development.
      </p>

      <h2>History of CSS</h2>

      <p>
        CSS was developed in the mid-1990s as a way to separate the content and
        structure of a web page from its visual presentation. Before CSS, web
        developers used HTML tags to control the appearance of their pages,
        which led to inconsistent and messy code. Håkon Wium Lie and Bert Bos
        are considered the inventors of CSS, and the first version, CSS1, was
        published in 1996.
      </p>

      <h2>What is CSS?</h2>

      <p>
        CSS is a stylesheet language that describes the presentation of an HTML
        or XML document. It allows web developers to control the look and feel
        of their websites by specifying font styles, colors, layouts, and other
        visual elements. CSS is designed to be flexible and easy to use, making
        it a popular choice for both beginners and experienced developers.
      </p>

      <h2>Why Developers Must Learn CSS</h2>

      <p>
        As a web developer, learning CSS is essential for creating visually
        appealing and user-friendly websites. CSS enables you to control the
        appearance and layout of your web pages, making it easier for you to
        maintain and update your websites. Additionally, CSS allows you to
        create responsive designs that adapt to different screen sizes and
        devices, ensuring that your websites look great on any platform.
      </p>

      <p>
        By mastering CSS, you will be well-equipped to create beautiful and
        functional websites that engage your users and showcase your content.
        Many well-known companies, including Google, Facebook, Amazon, and
        Twitter, rely on CSS to create visually appealing and user-friendly
        interfaces that engage their users and showcase their products and
        services.
      </p>

      <h2>How CSS Works</h2>

      <p>
        CSS works by applying styles to HTML elements. To do this, developers
        create a separate CSS file or include CSS rules directly within an HTML
        document. These rules define the appearance of specific elements or
        groups of elements, allowing developers to create consistent and
        visually appealing designs.
      </p>

      <h2>The Purpose of CSS in Web Development</h2>

      <p>
        The primary purpose of CSS in web development is to improve the visual
        presentation and layout of web pages. By separating the content and
        structure of a page from its visual presentation, CSS makes it easier
        for developers to maintain and update their websites. Additionally, CSS
        allows developers to create responsive designs that adapt to different
        screen sizes and devices, ensuring that their websites look great on any
        platform.
      </p>

      <h2>Combining CSS with HTML and JavaScript</h2>

      <p>
        CSS is often used in conjunction with HTML and JavaScript to create
        dynamic and interactive web applications. HTML provides the structure
        and content of a web page, while CSS controls its appearance. JavaScript
        can be used to add interactivity and functionality to a website,
        allowing users to interact with elements on the page.
      </p>

      <h2>CSS Everywhere</h2>

      <p>
        CSS is an essential part of web development, and its influence can be
        seen on virtually every website on the internet. From simple blogs to
        complex web applications, CSS plays a crucial role in shaping the
        appearance and layout of the web.
      </p>

      <h2>Why CSS Matters</h2>

      <p>
        CSS is important because it allows web developers to create visually
        appealing and user-friendly websites. By separating the content and
        structure of a web page from its visual presentation, CSS makes it
        easier for developers to maintain and update their websites.
        Additionally, CSS enables developers to create responsive designs that
        adapt to different screen sizes and devices, ensuring that their
        websites look great on any platform.
      </p>
      <InArticleAdUnit />
      <h2>Conclusion</h2>

      <p>
        In this tutorial, we covered the basics of CSS, its history, and its
        role in web development. We learned that CSS is a powerful tool for
        controlling the visual appearance and layout of web pages, and that it
        is used by almost every website on the internet. By mastering CSS, you
        will be well-equipped to create beautiful and functional websites that
        engage your users and showcase your content.
      </p>

      <p>
        Remember, as a web developer, you must be familiar with HTML and where
        to write your code. As you progress through the CSS course, you will
        learn more about specific CSS properties and how to use them to create
        stunning designs. Stay tuned for the next topic in our CSS series!
      </p>

      <p>
        In summary, learning CSS is essential for web developers who want to
        create visually appealing and user-friendly websites. By mastering CSS,
        you will be able to control the appearance and layout of your web pages,
        create responsive designs, and combine CSS with HTML and JavaScript to
        create dynamic and interactive web applications.
      </p>

      <p>Ready to get started with CSS? {`Let's dive in!`}</p>

      <div className="button-container">
        {/* <button onClick={() => (window.location.href = "/syntaxMob")}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Introduction;

export const Syntax = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
      <h1>CSS Syntax</h1>
      <p>
        CSS (Cascading Style Sheets) is a styling language used to design and
        format the layout of web pages. It plays a crucial role in enhancing the
        visual appeal and user experience of websites. Understanding CSS syntax
        is fundamental to creating effective and stylish web interfaces.
      </p>

      <h2>Basic Structure of CSS Syntax</h2>
      <p>
        The fundamental structure of CSS syntax involves three main components:
        selectors, properties, and values.
      </p>

      <h3>Selectors</h3>
      <p>
        Selectors are the building blocks of CSS. They are used to target and
        select specific HTML elements on a web page. Selectors allow you to
        apply styles to particular elements, giving you control over their
        appearance. Here are some commonly used selectors:
      </p>
      <ul>
        <li>
          <strong>Element Selectors</strong>: These target specific HTML
          elements, such as <code>h1</code>, <code>p</code>, or
          <code>div</code>. For example, <code>h1</code> selects all
          <code> {`<h1>`};</code> elements on the page.
        </li>
        <li>
          <strong>Class Selectors</strong>: These target elements with a
          specific class attribute. Classes are used to style multiple elements
          with the same style rules. For instance,
          <code>.header</code> selects all elements with the class
          {` "header".`}
        </li>
        <li>
          <strong>ID Selectors</strong>: These target elements with a unique ID.
          IDs are used to style specific, individual elements. For example,
          <code>#header</code> selects the element with the ID {` "header".`}
        </li>
        <li>
          <strong>Attribute Selectors</strong>: These target elements based on
          their attributes and their values. For instance,
          <code>{`[hreflang="en"]`}</code> selects all elements with an
          <code>hreflang</code> attribute with a value of {` "en".`}
        </li>
      </ul>

      <h3>Properties</h3>
      <p>
        {`Properties are the characteristics that you want to style or modify for
        the selected elements. Each property defines a specific aspect of an
        element's appearance or behavior. Here are some commonly used
        properties:`}
      </p>
      <ul>
        <li>
          <strong>Color Properties</strong>: These properties define the color
          of various elements, such as text, backgrounds, and borders. Examples
          include <code>color</code>,<code>background-color</code>, and
          <code>border-color</code>.
        </li>
        <li>
          <strong>Font Properties</strong>: These properties control the
          appearance of text, including font family, size, style, and weight.
          Examples include <code>font-family</code>,<code>font-size</code>, and{" "}
          <code>font-weight</code>.
        </li>
        <li>
          <strong>Layout Properties</strong>: These properties determine the
          layout and positioning of elements on the page. Examples include
          <code>display</code>, <code>position</code>, and
          <code>float</code>.
        </li>
      </ul>

      <h3>Values</h3>
      <p>
        Values are assigned to properties to define their specific behavior or
        appearance. Values can come in different forms, such as keywords,
        lengths, percentages, or even other CSS rules.
      </p>
      <ul>
        <li>
          <strong>Keyword Values</strong>: These are specific keywords that
          define a {` property's `} value. For example, <code>red</code>,
          <code>bold</code>, or <code>center</code>.
        </li>
        <li>
          <strong>Length Values</strong>: These define a length or size using
          units such as pixels, inches, or percentages. For example,
          <code>10px</code>, <code>2in</code>, or <code>50%</code>.
        </li>
        <li>
          <strong>URL Values</strong>: These values are used to link to external
          resources, such as images or fonts. For example,
          <code>url(image.png)</code>.
        </li>
      </ul>

      <h2>Putting It All Together</h2>
      <p>
        {`Now, let's see how these components come together to form a CSS rule.
        A CSS rule consists of a selector, followed by curly braces that
        contain one or more property-value pairs. Here's an example:`}
      </p>

      <code>
        <pre>
          <code>
            {`
h1 {
  color: red;
  font-size: 24px;
  text-align: center;
}
          `}
          </code>
        </pre>
      </code>

      <p>
        In this example, <code>h1</code> is the selector, targeting all
        <code> {`<h1>`}</code> elements on the page. Inside the curly braces, we
        have two property-value pairs: <code>color: red</code> and
        <code>font-size: 24px</code>. This rule sets the text color of
        <code> {`<h1>`}</code> elements to red and their font size to 24 pixels.
      </p>
      <InArticleAdUnit />
      <h2>Advanced CSS Syntax</h2>
      <p>
        While the basics of CSS syntax are relatively straightforward, the
        language offers a wide range of advanced features and techniques to
        create more complex and dynamic styles. Here are a few examples:
      </p>
      <ul>
        <li>
          <strong>Pseudo-classes and Pseudo-elements</strong>: These allow you
          to style elements based on their state or position, such as
          <code>:hover</code> or <code>::before</code>.
        </li>
        <li>
          <strong>Media Queries</strong>: Media queries enable you to apply
          styles based on device characteristics, such as screen size or
          orientation. This is crucial for responsive web design.
        </li>
        <li>
          <strong>CSS Variables</strong>: Variables allow you to store and reuse
          values throughout your stylesheet, making it easier to maintain and
          update styles.
        </li>
        <li>
          <strong>CSS Functions</strong>: CSS provides various functions that
          perform calculations or generate values, such as
          <code>calc()</code> or <code>rgb()</code>.
        </li>
      </ul>

      <p>
        {`As you continue to explore CSS, you'll discover a wealth of features
        and techniques that will empower you to create stunning and
        responsive web designs.`}
      </p>

      <div className="button-container">
        {/* <button onClick={() => (window.location.href = "/introMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/insertMob")}>
          Next
        </button> */}
      </div>
    </div>
  );
};
