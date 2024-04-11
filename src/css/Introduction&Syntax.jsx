const Introduction = () => {
  return (
    <div className="comments-container">
      <h1>CSS (Cascading Style Sheets).</h1>
      <p>
        CSS is a powerful language that allows you to style your web pages,
        making them visually appealing and well-organized.
      </p>
      <h2>What is CSS?</h2>
      <h4>Definition:</h4>
      <ul>
        <li> CSS stands for Cascading Style Sheets.</li>
        <li>
          It’s a language used to describe how HTML elements should be displayed
          on various media, such as screens, paper, or other devices.
        </li>
        <li>
          CSS allows you to control the layout, colors, fonts, spacing, and
          other visual aspects of your web pages.
        </li>
      </ul>
      <h2>Why Use CSS?</h2>
      <ul>
        <li>
          <strong>Separation of Concerns:</strong> CSS separates the
          presentation (styling) from the content (HTML). This makes your code
          more maintainable and easier to update.
        </li>
        <li>
          <strong>Consistency:</strong> You can define styles once and apply
          them to multiple elements across different pages.
        </li>
        <li>
          <strong>Efficiency:</strong> External stylesheets (stored in separate
          .css files) allow you to change the look of an entire website by
          modifying just one file.
        </li>
        <li>
          <strong>Responsive Design:</strong> With CSS, developers can create
          responsive layouts that adapt to different screen sizes and devices.
          Media queries and flexible units enable the creation of designs that
          look good on desktops, tablets, and smartphones, enhancing the user
          experience across various devices.
        </li>
        <li>
          <strong>Compatibility:</strong> CSS is supported by all modern web
          browsers and is continually evolving with new features and standards.
          This ensures compatibility across different platforms and devices,
          allowing developers to create consistent user experiences regardless
          of the browser being used.
        </li>
      </ul>
      <p>
        Overall, CSS is a fundamental tool in web development that provides
        numerous benefits, including improved maintainability, enhanced design
        flexibility, and better user experience.
      </p>
      <p>Ready to get started with CSS? {`Let's dive in!`}</p>
      {/* <div className="button-container">
        <button onClick={() => (window.location.href = "/syntax")}>Next</button>
      </div> */}
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
        <button onClick={() => (window.location.href = "introduction")}>
          back
        </button>
        <button onClick={() => (window.location.href = "inserting")}>
          Next
        </button>
      </div>
    </div>
  );
};
