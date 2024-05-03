const Favicon = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;link&gt;</code> Element for Favicon
      </h2>
      <p>
        The <code>&lt;link&gt;</code> element with the{" "}
        <code>rel={`"icon"`}</code> attribute is used to define the favicon{" "}
        {`(short for "favorite icon")`} for a webpage. A favicon is a small
        image or icon that appears in the browser tab next to the page title.
      </p>
      <h3>Example:</h3>
      <p>
        To add a favicon to your webpage, include the following{" "}
        <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section
        of your HTML document:
      </p>
      <pre>
        <code>
          &lt;link rel={`"icon" href="favicon.ico" type="image/x-icon"`}&gt;
        </code>
      </pre>
      <p>
        Replace <code>favicon.ico</code> with the path to your favicon file.
      </p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;link&gt;</code> element for favicon supports the following
        attributes:
      </p>
      <ul>
        <li>
          <code>rel={`"icon"`}</code>: Specifies the relationship between the
          current document and the favicon.
        </li>
        <li>
          <code>href</code>: Specifies the URL or path to the favicon file.
        </li>
        <li>
          <code>type</code>: Specifies the MIME type of the favicon file. For a
          favicon file, the type is typically <code>image/x-icon</code>.
        </li>
      </ul>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;link&gt;</code> element with{" "}
          <code>rel={`"icon"`}</code> to add a favicon to your webpage.
        </li>
        <li>
          The favicon file should be in the ICO format (with the extension{" "}
          <code>.ico</code>), but modern browsers also support PNG and other
          image formats.
        </li>
        <li>
          Place the <code>&lt;link&gt;</code> tag in the{" "}
          <code>&lt;head&gt;</code> section of your HTML document.
        </li>
        <li>
          Ensure that the favicon file is accessible and properly hosted on your
          server.
        </li>
        <li>
          Consider creating a favicon that represents your website or brand
          identity for better recognition.
        </li>
        <li>
          Test your webpage in different browsers and devices to ensure that the
          favicon displays correctly.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/iframeMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/dropdownMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Favicon;

export const DropDown = () => {
  return (
    <div className="comments-container">
      <h2>Dropdown Menus in HTML</h2>
      <p>
        Dropdown menus are a common UI pattern used to present a list of options
        to users in a compact and accessible way. They are often used in
        navigation bars, forms, and other interactive components.
      </p>
      <h3>Example 1: Simple Dropdown</h3>
      <p>
        {`Here's`} a basic example of a dropdown menu using the{" "}
        <code>&lt;select&gt;</code> element:
      </p>
      <pre>
        <code>
          {`
  <select>
    <option value="option1">Option1</option>
    <option value="option2">Option2</option>
    <option value="option3">Option3</option>
  </select>        
          `}
        </code>
      </pre>
      <h3>Example 2: Grouped Options</h3>
      <p>
        You can group related options using the <code>&lt;optgroup&gt;</code>{" "}
        element:
      </p>
      <pre>
        <code>
          {`
  <select>
    <optgroup label="Group 1">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    </optgroup>
  </select>
          `}
        </code>
      </pre>
      <h3>Example 3: Multiple Selection</h3>
      <p>
        Allow users to select multiple options by adding the{" "}
        <code>multiple</code> attribute:
      </p>
      <pre>
        <code>
          {`
  <select multiple>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
          `}
        </code>
      </pre>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;select&gt;</code> element supports various attributes,
        including:
      </p>
      <ul>
        <li>
          <code>name</code>: Specifies the name of the dropdown menu, useful for
          form submission.
        </li>
        <li>
          <code>size</code>: Specifies the number of visible options (for a
          scrollbar).
        </li>
        <li>
          <code>multiple</code>: Allows multiple options to be selected.
        </li>
      </ul>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use dropdown menus to present a list of options to users in a compact
          and organized manner.
        </li>
        <li>
          Consider the context and purpose of the dropdown menu when designing
          its appearance and behavior.
        </li>
        <li>
          Group related options using the <code>&lt;optgroup&gt;</code> element
          to improve clarity and organization.
        </li>
        <li>
          Provide default or placeholder options when appropriate to guide users
          in making selections.
        </li>
        <li>
          Test dropdown menus across different browsers and devices to ensure
          compatibility and usability.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/faviconMobile")}>
          back
        </button>
      </div>
    </div>
  );
};
