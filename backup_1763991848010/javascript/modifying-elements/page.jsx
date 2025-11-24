import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Modifying DOM Elements in JavaScript Tutorial",
  description:
    "Learn how to dynamically modify DOM elements using JavaScript. Master techniques for changing text content, styles, attributes, and classes in this comprehensive, beginner-friendly tutorial.",
  keywords: [
    "JavaScript DOM manipulation",
    "modifying DOM elements",
    "web development tutorial",
    "JavaScript for beginners",
    "dynamic web pages",
    "textContent property",
    "style manipulation",
    "setAttribute method",
    "classList property",
    "interactive coding examples",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/javascript/modifying-elements",
  },

  openGraph: {
    title:
      "Master DOM Manipulation: Change Web Page Content Dynamically with JavaScript",
    description:
      "Boost your web development skills! Learn to modify text, styles, attributes, and classes of HTML elements using JavaScript in this interactive tutorial.",
  },
};

const ModifyingElements = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Modifying DOM Elements in JavaScript:A beginner Tutorial</h1>

        <h2>Introduction</h2>
        <p>
          Now that you've learned how to select elements in the DOM, it's time
          to learn how to modify their properties. Modifying element properties
          is a crucial part of dynamic web development, as it allows you to
          change the content, layout, and behavior of your web pages in response
          to user interactions.
        </p>
        <p>
          Think of modifying element properties like changing the settings on
          your phone. Just like how you can change the wallpaper, ringtone, or
          font size on your phone, you can change the properties of an element
          in the DOM to make it look or behave differently.
        </p>

        <h2>Modifying Text Content</h2>
        <p>
          One of the most common ways to modify an element's property is to
          change its text content. You can do this using the{" "}
          <code>textContent</code> property.
        </p>
        <p>
          The <code>textContent</code> property is like a container that holds
          the text inside an element. You can think of it like a box where you
          can put words or sentences.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Change Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>


<script>

const paragraph = document.getElementById('myParagraph');
paragraph.textContent = 'Goodbye World!';

</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the paragraph element with the ID
          "myParagraph" and change its text content to "Goodbye World!". This is
          like opening the box and replacing the words "Hello World!" with
          "Goodbye World!".
        </p>
        <p>
          But what if you want to add more text to the paragraph instead of
          replacing it? You can use the <code>+=</code> operator to add more
          text to the existing text.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Add Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>

<script>

const paragraph = document.getElementById('myParagraph');
paragraph.textContent += ' This is a new sentence!';

</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we add the sentence "This is a new sentence!" to the
          existing text "Hello World!".
        </p>
        <p>
          You can also use the <code>textContent</code> property to get the text
          content of an element. For example:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Get Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>

<script>

const paragraph = document.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"

</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the paragraph element with the ID
          "myParagraph" and log its text content to the console.
        </p>

        <h2>Modifying Style</h2>
        <p>
          Another way to modify an element's property is to change its style.
          You can do this using the <code>style</code> property.
        </p>
        <p>
          The <code>style</code> property is like a collection of settings that
          control the appearance of an element. You can think of it like a
          dashboard with different knobs and buttons that you can adjust to
          change the look of the element.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Change Element Style</title>
</head>
<body>
<p id="myParagraph" style="color: blue;">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style.color = 'red';
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the paragraph element with the ID
          "myParagraph" and change its text color to red. This is like adjusting
          the color knob on the dashboard to change the color of the text.
        </p>
        <p>
          But what if you want to change multiple styles at once? You can use
          the
          <code>style</code> property to change multiple styles in one go.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Change Multiple Styles</title>
</head>
<body>
<p id="myParagraph" style="color: blue; font-size: 24px;">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style = 'color: red; font-size: 36px;';
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we change the text color to red and font size to 36px
          in one go.
        </p>
        <p>
          Note that when using the <code>style</code> property, you can add any
          CSS property that you want to change. For example, you can change the
          background color, padding, margin, border, and more.
        </p>
        <p>
          Also, when adding properties with two words, like{" "}
          <code>font-size</code>, you don't use the <code>-</code> symbol
          because it is used for subtraction in JavaScript. Instead, you use
          camel case, like <code>fontSize</code>. This is important to remember,
          as it can be confusing for beginners.
        </p>
        <p>
          For example, if you want to change the font size and font family, you
          would use <code>fontSize</code> and <code>fontFamily</code>, not{" "}
          <code>font-size</code> and <code>font-family</code>.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Change Font Properties</title>
</head>
<body>
<p id="myParagraph" style="color: blue; font-size: 24px;">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style.fontSize = '36px';
paragraph.style.fontFamily = 'Arial';
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we change the font size to 36px and font family to
          Arial using camel case.
        </p>

        <h2>Modifying Attributes</h2>
        <p>
          You can also modify an element's attributes using the{" "}
          <code>setAttribute</code>
          method.
        </p>
        <p>
          The <code>setAttribute</code> method is like a tool that allows you to
          change the attributes of an element. You can think of it like a
          screwdriver that you can use to adjust the settings of an element.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Modify Attributes</title>
</head>
<body>
<img id="myImage" src="image.jpg" alt="An image">

<script>
const image = document.getElementById('myImage');
image.setAttribute('src', 'new-image.jpg');
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the image element with the ID "myImage" and
          change its <code>src</code> attribute to "new-image.jpg". This is like
          using the screwdriver to adjust the <code>src</code> attribute of the
          image.
        </p>
        <p>
          But what if you want to remove an attribute from an element? You can
          use the <code>removeAttribute</code> method to do so.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Remove Attributes</title>
</head>
<body>
<img id="myImage" src="image.jpg" alt="An image">

<script>
const image = document.getElementById('myImage');
image.removeAttribute('alt');
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the image element with the ID "myImage" and
          remove its <code>alt</code> attribute. This is like using the
          screwdriver to remove the <code>alt</code> attribute from the image.
        </p>

        <h2>Modifying Classes</h2>
        <p>
          You can also modify an element's classes using the{" "}
          <code>classList</code> property.
        </p>
        <p>
          The <code>classList</code> property is like a list of stickers that
          you can put on an element. You can add, remove, or toggle classes to
          change the appearance or behavior of an element.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Add Classes</title>
<style>
.blue {
color: blue;
}
.bold {
font-weight: bold;
}
</style>
</head>
<body>
<p id="myParagraph">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
paragraph.classList.add('blue', 'bold');
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the paragraph element with the ID
          "myParagraph" and add the "blue" and "bold" classes to it. This is
          like putting the blue and bold stickers on the paragraph element.
        </p>
        <p>
          But what if you want to remove a class from an element? You can use
          the
          <code>classList</code> property to remove a class from an element.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<!DOCTYPE html>
<html>
<head>
<title>Remove Classes</title>

<style>
.blue {
color: blue;
}
.bold {
font-weight: bold;
}
</style>

</head>
<body>
<p id="myParagraph" class="blue bold">Hello World!</p>

<script>
const paragraph = document.getElementById('myParagraph');
paragraph.classList.remove('bold');
</script>


</body>
</html>
`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          In this example, we select the paragraph element with the ID
          "myParagraph" and remove the "bold" class from it. This is like
          removing a sticker from the paragraph element.
        </p>

        <h2>Summary</h2>
        <p>
          In this topic, you've learned how to modify element properties in the
          DOM. You can change the text content, style, attributes, and classes
          of an element to make it look or behave differently. Remember,
          modifying element properties is like adjusting the settings on your
          phone or using tools to change the appearance and behavior of an
          element.
        </p>
        <p>
          In the next topic, you'll learn about events and how to handle user
          interactions with JavaScript.
        </p>

        <Button whereToGo={"create-append"} />
      </div>
    </div>
  );
};

export default ModifyingElements;
