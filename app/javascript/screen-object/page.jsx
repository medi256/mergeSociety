
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Screen Object in JavaScript - Understanding the Browser Object Model",
  description:
    "Learn about the Screen object in the Browser Object Model (BOM) and how to use it to access properties like screen height, width, and more. This detailed guide includes examples and practical applications.",
  keywords: [
    "Screen object",
    "BOM",
    "JavaScript",
    "Browser Object Model",
    "screen properties",
    "screen height",
    "screen width",
    "responsive design",
    "web development",
  ],
  author: "Your Name",
  openGraph: {
    title: "Understanding the Screen Object in JavaScript",
    description:
      "Explore the properties of the Screen object in JavaScript and learn how to access and use screen information for better responsive web design.",

    type: "article",
  },
};

const ScreenObject = () => {
  return (
    <div className="lesson-container">
      

      <h1>Exploring the Screen Object</h1>

      <h2>Introduction</h2>
      <p>
        In our previous lessons, we've been learning about the Browser Object
        Model (BOM) and its various components. So far, we've covered the Window
        object, the Location object, the Navigation object, and more. Now, let's
        move on to another important part of the BOM: the Screen object.
      </p>

      <h2>What is the Screen Object?</h2>
      <p>
        The Screen object is a part of the BOM that provides information about
        the user's screen, such as its size and resolution. It's like a report
        card for the user's screen, giving you details about its capabilities.
      </p>
      <p>
        Think of the Screen object as a way to get information about the user's
        screen, which can be useful for designing and developing web pages that
        look great on different devices.
      </p>

      <h2>Properties of the Screen Object</h2>
      <p>
        The Screen object has several properties that provide information about
        the user's screen. Here are some of the most important ones:
      </p>
      <ul>
        <li>
          <code>availHeight</code>: This property returns the height of the
          screen in pixels, minus the height of any toolbars or other features
          that take up space on the screen.
        </li>
        <li>
          <code>availWidth</code>: This property returns the width of the screen
          in pixels, minus the width of any toolbars or other features that take
          up space on the screen.
        </li>
        <li>
          <code>colorDepth</code>: This property returns the color depth of the
          screen, which is the number of bits used to represent the color of
          each pixel.
        </li>
        <li>
          <code>height</code>: This property returns the total height of the
          screen in pixels.
        </li>
        <li>
          <code>pixelDepth</code>: This property returns the pixel depth of the
          screen, which is the number of bits used to represent the color of
          each pixel.
        </li>
        <li>
          <code>width</code>: This property returns the total width of the
          screen in pixels.
        </li>
      </ul>
      <p>
        These properties can be used to get information about the user's screen,
        which can be useful for designing and developing web pages that look
        great on different devices.
      </p>
      
      <h2>Example: Using the Screen Object</h2>
      <p>
        Let's start by looking at an example that uses the <code>screen</code>{" "}
        object to access different properties of the user's screen.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Screen Object Example</title>
</head>
<body>

<script>
// Get the height of the screen
const screenHeight = screen.height;
console.log(screenHeight);

// Get the width of the screen
const screenWidth = screen.width;
console.log(screenWidth);

// Get the color depth of the screen
const screenColorDepth = screen.colorDepth;
console.log(screenColorDepth);

// Get the pixel depth of the screen
const screenPixelDepth = screen.pixelDepth;
console.log(screenPixelDepth);

// Get the available height of the screen
const screenAvailHeight = screen.availHeight;
console.log(screenAvailHeight);

// Get the available width of the screen
const screenAvailWidth = screen.availWidth;
console.log(screenAvailWidth);
</script>


</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Explanation of the Code Example</h2>
      <p>
        In this example, we're using the <code>screen</code> object to access
        and log various properties of the user's screen. Here's what's happening
        in each step:
      </p>
      <ul>
        <li>
          We use <code>screen.height</code> to get the total height of the
          screen in pixels and store it in the <code>screenHeight</code>{" "}
          variable. The value is then logged to the console.
        </li>
        <li>
          We use <code>screen.width</code> to get the total width of the screen
          in pixels and store it in the <code>screenWidth</code> variable. The
          value is logged to the console.
        </li>
        <li>
          The <code>screen.colorDepth</code> property returns the number of bits
          used to represent the color of each pixel, and this value is stored in
          the <code>screenColorDepth</code> variable and logged to the console.
        </li>
        <li>
          Similarly, the <code>screen.pixelDepth</code> property returns the
          pixel depth of the screen, which is stored in the{" "}
          <code>screenPixelDepth</code> variable and logged to the console.
        </li>
        <li>
          The <code>screen.availHeight</code> property returns the available
          height of the screen, which excludes the height taken up by toolbars
          or other features. This value is stored in the{" "}
          <code>screenAvailHeight</code> variable and logged to the console.
        </li>
        <li>
          Finally, the <code>screen.availWidth</code> property returns the
          available width of the screen, which excludes the width taken up by
          toolbars or other features. This value is stored in the{" "}
          <code>screenAvailWidth</code> variable and logged to the console.
        </li>
      </ul>
      <p>
        By using the <code>screen</code> object, we can access detailed
        information about the user's screen, which can be helpful for creating
        responsive designs that work well on different devices.
      </p>

      <h2>Another Simple Example: Updating the DOM</h2>
      <p>
        We can also use the Screen object to update the content of our webpage
        dynamically. For instance, let's say we want to display the screen width
        inside a paragraph on our webpage.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html>
<head>
<title>Screen Width Example</title>
</head>
<body>
<p id="screen-info"></p>

<script>
// Get the screen width
const screenWidth = screen.width;

// Find the paragraph element by its ID
const paragraph = document.getElementById('screen-info');

// Set the text content of the paragraph to show

    // Set the text content of the paragraph to show the screen width
paragraph.textContent = 'Screen Width:'+ screenWidth +'pixels';
</script>
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>
      <ul>
        <li>
          We get the screen width using <code>screen.width</code>.
        </li>
        <li>
          We find the paragraph element with the ID <code>screen-info</code>{" "}
          using <code>document.getElementById</code>.
        </li>
        <li>
          We update the text inside the paragraph to display the screen width.
        </li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've learned about the Screen object and its
        properties. We've also seen how to use the Screen object to get
        information about the user's screen, and how to update the content of
        our webpage dynamically.
      </p>
      <p>
        The Screen object is an important part of the BOM, and understanding how
        to use it can help you design and develop web pages that look great on
        different devices.
      </p>

      <Button whereToGo={"bom-applications"} />
    </div>
  );
};

export default ScreenObject;
