const Introduction = () => {
  return (
    <div className="comments-container">
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
        <button onClick={() => (window.location.href = "/syntaxMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Introduction;
export const Syntax = () => {
  return (
    <div className="comments-container">
      <h2>Syntax</h2>
      <p>
        {`
        In CSS, the syntax defines the set of rules for writing styles that will
        be applied to HTML elements. It's important to understand the basic
        structure to create effective styles for your webpage.`}
      </p>
      <p>
        {`
        When writing CSS, the rules are the same for all HTML elements. Once you
        understand how to style one element, you've got the hang of applying CSS
        to all elements.`}
      </p>
      <p>
        The syntax generally consists of a <strong>selector</strong>, followed
        by a<strong> declaration block</strong> enclosed in curly braces. The
        declaration block contains one or more{" "}
        <strong>property-value pairs</strong> separated by semicolons.
      </p>
      <div>
        <h3>Example:</h3>
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712400176/rule_uiwtjx.png"
          alt="an image describing a css rule"
          style={{ width: "500px" }}
        />
        <p>
          {`
        Take your time to examine this because we're about to begin our journey into
        writing CSS. As mentioned, the CSS rule we're discussing will stay constant.
        Master it, and feel free to experiment by changing the selector or HTML
        element you're familiar with. The best way to master it is by practicing.`}
        </p>
      </div>
      <h3>Another Example:</h3>
      <pre>
        {`
      h1 {
        color: blue;
        font-size: 24px;
      }
      `}
      </pre>
      <p>
        In this example, the selector is <strong>{`"h1,"`}</strong> and the
        declaration block contains two property-value pairs (color and
        font-size).
      </p>
      <p>
        In CSS, the <strong>semicolon (;)</strong> separates style rules, while
        the <strong>colon (:)</strong>
        connects properties to their values. Together, they help structure and
        define the appearance of selected HTML elements on a webpage.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/introMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/insertMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
