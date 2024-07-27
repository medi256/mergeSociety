import AdUnit from "../AdUnit";

const DOMintro = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Welcome to the World of the DOM!</h1>
      <p>
        Have you ever clicked a button on a website and something cool happened?
        Maybe a hidden message appeared, or a funny cat video popped up! Ever
        wondered how that works? Well, there's a secret agent behind the scenes
        called the
        <b>Document Object Model (DOM)</b>, and it's what makes websites
        interactive and dynamic!
      </p>
      <p>
        But hold on, what exactly is this DOM? Don't worry, it's not a scary
        monster! Think of it like a special name, a nickname for something
        really cool. The DOM isn't a single thing, but rather a way of
        organizing and understanding all the parts that make up a webpage.
      </p>
      <h2>Imagine your favorite website as a delicious pizza.</h2>
      <ul>
        <li>
          The crust is the foundation, holding everything together. In the DOM,
          the crust becomes the root of the tree, the most important part.
        </li>
        <li>
          The sauce is the background color or image. In the DOM, the sauce
          becomes a branch.
        </li>
        <li>
          Each topping – pepperoni, peppers, mushrooms – are the different parts
          that make the pizza unique, like headings, paragraphs, images, and
          buttons. In the DOM, each topping becomes its own little leaf on the
          tree.
        </li>
      </ul>
      <p>
        The DOM takes that pizza and breaks it down into all its tasty
        ingredients, but here's the twist: It doesn't just separate them! The
        DOM creates a special kind of family tree for the website:
      </p>
      <ul>
        <li>
          The crust (the foundation) becomes the root of the tree, the most
          important part.
        </li>
        <li>The sauce (the background) becomes a branch.</li>
        <li>
          Each topping (headings, paragraphs, images, buttons) becomes its own
          little leaf on the tree.
        </li>
      </ul>
      <AdUnit />
      <h2>The DOM Tree Structure</h2>
      <p>
        The DOM represents a document as a tree structure, where each part of
        the document is called a node. A node is a single point in this
        structure. Think of nodes as building blocks of the document. There are
        different types of nodes, such as:
      </p>
      <ul>
        <li>
          <strong>Element nodes:</strong> These represent HTML elements like{" "}
          <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, and{" "}
          <code>&lt;h1&gt;</code>. HTML elements are the tags you use in your
          HTML files to create the structure of your web page. For example,{" "}
          <code>&lt;div&gt;</code> is used to create a division or a section,{" "}
          <code>&lt;p&gt;</code> is used to create a paragraph, and{" "}
          <code>&lt;h1&gt;</code> is used to create a top-level heading.
        </li>
        <li>
          <strong>Text nodes:</strong> These represent the text content inside
          HTML elements. For example, if you have a paragraph{" "}
          <code>&lt;p&gt;Hello, World!&lt;/p&gt;</code>, the text node would be
          "Hello, World!".
        </li>
        <li>
          <strong>Attribute nodes:</strong> These represent the attributes of
          HTML elements, such as <code>id</code> and <code>class</code>.
          Attributes provide additional information about HTML elements. For
          example, <code>&lt;div id="main"&gt;</code> has an attribute{" "}
          <code>id</code> with a value of "main".
        </li>
        <li>
          <strong>Comment nodes:</strong> These represent comments in the HTML.
          Comments are used to leave notes in the code for other developers. For
          example, <code>&lt;!-- This is a comment --&gt;</code> is a comment
          node.
        </li>
      </ul>
      <p>Here's a simple example of a DOM tree for a basic HTML document:</p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </code>
      </pre>
      <p>
        In this DOM tree, the <code>&lt;html&gt;</code> element is the root
        node, which is like the trunk of a tree. It has two main branches: the{" "}
        <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> elements. The{" "}
        <code>&lt;head&gt;</code> element can be thought of as a branch that
        contains meta-information about the document, like the{" "}
        <code>&lt;title&gt;</code> element. The <code>&lt;body&gt;</code>{" "}
        element is another branch that contains the content visible on the
        webpage.
      </p>
      <p>
        Within the <code>&lt;body&gt;</code> element, there are more branches or
        nodes. In this example, the <code>&lt;h1&gt;</code> element represents a
        heading, and the <code>&lt;p&gt;</code> element represents a paragraph.
        Each of these elements is a node in the DOM tree.
      </p>
      <h2>Why is this Family Tree Important?</h2>
      <p>
        This family tree is super important because it allows programmers to
        target specific parts of the website, just like you might pick off a
        specific mushroom from your pizza (we wouldn't want to upset the other
        toppings, would we?). Imagine you want to add extra cheese (more
        content) to your pizza after it's already cooked (the webpage has
        loaded). Normally, you'd have to throw the whole thing away and start
        over. But with the DOM, it's different!
      </p>
      <AdUnit />
      <h2>The Magic Happens When You Open the Page</h2>
      <p>
        The moment you visit a website, your web browser (like Chrome or Safari)
        does some amazing work behind the scenes. It takes a peek under the hood
        and uses its special skills to build this DOM tree. It reads the
        website's code, which is like a recipe for the pizza, and figures out
        where everything belongs in the tree. This DOM tree is created
        immediately when the page loads, just like the ingredients come together
        to make the pizza when it's baked.
      </p>

      <h2>How Does JavaScript Use the DOM?</h2>
      <p>
        JavaScript is a programming language that programmers can use to
        interact with the DOM tree. Think of it like having special tools to
        reach into the pizza box and make changes. Here are some cool things you
        can do with the DOM and JavaScript:
      </p>
      <ul>
        <li>
          Change the text on a webpage, like making a headline blink or hiding a
          boring paragraph.
        </li>
        <li>
          Swap out images based on user clicks, like showing a happy cat picture
          when someone clicks a button.
        </li>
        <li>
          Add new elements to the page, like creating a comment box where users
          can leave messages.
        </li>
      </ul>
      <h2>The Parent-Child Relationship: Understanding the Tree</h2>
      <p>
        The DOM tree is special because it shows how elements on a webpage are
        related to each other. Imagine the crust (the root) as the parent of all
        the toppings (the elements). Each topping can also have its own
        children! For example, a paragraph (a leaf) might contain smaller
        elements like bold text (another leaf). By understanding this
        parent-child relationship, programmers can easily navigate the tree and
        find the specific elements they want to work with.
      </p>
      <h2>DOM Manipulation: How to Make Changes to the Tree</h2>
      <p>
        Now that you have a better understanding of the DOM tree, let's dive
        into how you can use JavaScript to make changes to it. This process is
        called DOM manipulation, and it's a powerful way to create dynamic and
        interactive websites.
      </p>
      <p>
        To manipulate the DOM, you'll need to use JavaScript code. Here are some
        examples of common DOM manipulation techniques:
      </p>
      <ul>
        <li>
          <b>Creating elements:</b> You can create new HTML elements using
          JavaScript code and add them to the DOM tree. For example, you can
          create a new paragraph element and insert it into the document.
        </li>
        <li>
          <b>Updating elements:</b> You can change the content of existing
          elements in the DOM tree. For example, you can change the text of a
          heading or the source of an image.
        </li>
        <li>
          <b>Removing elements:</b> You can remove elements from the DOM tree.
          For example, you can remove a button or a section of the page.
        </li>
      </ul>
      <h2>Events and Event Listeners: Reacting to User Actions</h2>
      <p>
        In addition to manipulating the DOM, JavaScript also allows you to
        listen for user actions on your website. These actions are called
        events, and they can include things like clicking a button, hovering
        over an element, or typing in a form field.
      </p>
      <p>
        To respond to these events, you'll use event listeners. An event
        listener is a piece of JavaScript code that waits for a specific event
        to occur and then takes action based on that event. For example, you can
        use an event listener to show an alert when a button is clicked.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Understanding the DOM is like learning the secret recipe for making your
        favorite pizza. It helps you see how all the ingredients (elements) come
        together to create something amazing (a webpage). With JavaScript, you
        can interact with the DOM tree, make changes, and create dynamic
        experiences for users. So, the next time you click a button and see
        something cool happen, remember that it's all thanks to the magical DOM
        and the power of JavaScript!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/hoisting")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/SelectingElementsINDom")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DOMintro;
export const SelectingElementsINDom = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Selecting Elements in the DOM</h1>

      <h2>Introduction</h2>
      <p>
        Now that you've learned the basics of the DOM, it's time to dive into
        how to select elements within the DOM. Selecting elements is crucial for
        manipulating them using JavaScript. You can select elements by their{" "}
        <strong>ID</strong>,<strong> class name</strong>, or{" "}
        <strong>tag name</strong>. This is the first step in making your web
        pages dynamic and interactive.
      </p>
      <p>
        Think of the DOM as a tree-like structure that represents the HTML
        elements on the page. Each element in the DOM has a unique identifier,
        which is used to select and manipulate it.
      </p>

      <h2>
        What is the <code>document</code> object?
      </h2>
      <p>
        In JavaScript, the <code>document</code> object represents the entire
        web page. It is a global object that provides access to the Document
        Object Model (DOM) of the web page.
      </p>
      <p>
        The <code>document</code> object is like a container that holds all the
        HTML elements on the page. You can use the <code>document</code> object
        to access and manipulate these elements.
      </p>
      <p>
        But how does the <code>document</code> object connect with the DOM?
        Well, the
        <code>document</code> object provides a property called{" "}
        <code>document</code>, which we can use to target the DOM elements. This
        property is like a bridge that connects the <code>document</code> object
        with the DOM.
      </p>
      <p>
        Let's take a closer look at the <code>document</code> object and its
        properties.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Document Object Example</title>
</head>
<body>`}

          <span className="codePurple">
            {`         
<script>
// Get the document object
const documentObject = document;

// Get the HTML element with the ID "myParagraph"
const paragraph = documentObject.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"
</script>
`}{" "}
          </span>

          {`
</body>
</html>
  
`}
        </code>
      </pre>
      <p>
        As you can see, the <code>document</code> object has a property called{" "}
        <code>getElementById</code>, which we can use to select an element by
        its <strong>ID</strong>.
      </p>
      <AdUnit />
      <h2>
        Selecting Elements by <strong>ID</strong>
      </h2>
      <p>
        The <code>getElementById</code> method is used to select an element by
        its <strong>ID</strong>. An <strong>ID</strong>
        is a unique identifier that is assigned to an HTML element using the{" "}
        <code>id</code> attribute.
      </p>
      <p>
        When you use the <code>getElementById</code> method, it returns the
        element that matches the specified <strong>ID</strong>. You can then use
        this element to access its properties and methods.
      </p>
      <p>
        For example, let's say you have an HTML element with the{" "}
        <strong>ID</strong> "myParagraph". You can use the{" "}
        <code>getElementById</code> method to select this element and then use
        its <code>textContent</code> property to access its text content.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Select by ID</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>
`}
          <span className="codePurple">
            {" "}
            {`
<script>
const paragraph = document.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"
</script>
`}
          </span>
          {`
</body>
</html>
`}
        </code>
      </pre>
      <p>
        Note that the <code>getElementById</code> method returns{" "}
        <code>null</code> if no element with the specified <strong>ID</strong>{" "}
        is found.
      </p>

      <h2>
        Selecting Elements by <strong>Class Name</strong>
      </h2>
      <p>
        The <code>getElementsByClassName</code> method is used to select
        elements by their
        <strong>class name</strong>. A <strong>class name</strong> is a string
        that is assigned to an HTML element using the <code>class</code>{" "}
        attribute.
      </p>
      <p>
        When you use the <code>getElementsByClassName</code> method, it returns
        a collection of elements that match the specified{" "}
        <strong>class name</strong>. You can then use this collection to access
        the properties and methods of the elements.
      </p>
      <p>
        For example, let's say you have multiple HTML elements with the{" "}
        <strong>class name</strong>
        "myClass". You can use the <code>getElementsByClassName</code> method to
        select all of these elements and then use their <code>textContent</code>{" "}
        property to access their text content.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Select by Class Name</title>
</head>
<body>
<p class="myClass">Hello World!</p>
<p class="myClass">Goodbye World!</p>
`}
          <span className="codePurple">
            {`
<script>
const paragraphs = document.getElementsByClassName('myClass');
console.log(paragraphs.length); // Output: 2
</script>
  
  `}
          </span>
          {`
</body>
</html>
`}
        </code>
      </pre>
      <p>
        Note that the <code>getElementsByClassName</code> method returns an HTML
        collection, which is an array-like object that contains the selected
        elements.
      </p>
      <AdUnit />
      <h2>
        Selecting Elements by <strong>Tag Name</strong>
      </h2>
      <p>
        The <code>getElementsByTagName</code> method is used to select elements
        by their <strong>tag name</strong>. A <strong>tag name</strong>
        is the name of an HTML element, such as <code>p</code>, <code>div</code>
        , <code>span</code>, etc.
      </p>
      <p>
        When you use the <code>getElementsByTagName</code> method, it returns a
        collection of elements that match the specified{" "}
        <strong>tag name</strong>. You can then use this collection to access
        the properties and methods of the elements.
      </p>
      <p>
        For example, let's say you have multiple HTML elements with the{" "}
        <strong>tag name</strong>
        "p". You can use the <code>getElementsByTagName</code> method to select
        all of these elements and then use their <code>textContent</code>{" "}
        property to access their text content.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Select by Tag Name</title>
</head>
<body>
<p>Hello World!</p>
<p>Goodbye World!</p>
`}
          <span className="codePurple">
            {`
  
  <script>
  const paragraphs = document.getElementsByTagName('p');
  console.log(paragraphs.length); // Output: 2
  </script>
  
  `}
          </span>
          {`
</body>
</html>
`}
        </code>
      </pre>
      <p>
        Note that the <code>getElementsByTagName</code> method returns an HTML
        collection, which is an array-like object that contains the selected
        elements.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this article, we learned how to select elements in the DOM using
        JavaScript. We covered three methods:{" "}
        <code>document.getElementById()</code>,
        <code>document.getElementsByClassName()</code>, and{" "}
        <code>document.getElementsByTagName()</code>.
      </p>
      <p>
        Each method has its own strengths and weaknesses, and the choice of
        which method to use depends on the specific requirements of your
        project.
      </p>
      <p>
        By mastering these methods, you can write more efficient and effective
        JavaScript code that interacts with the DOM.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/DomIntro")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/ModifyingElements")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ModifyingElements = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Modifying Element Properties</h1>

      <h2>Introduction</h2>
      <p>
        Now that you've learned how to select elements in the DOM, it's time to
        learn how to modify their properties. Modifying element properties is a
        crucial part of dynamic web development, as it allows you to change the
        content, layout, and behavior of your web pages in response to user
        interactions.
      </p>
      <p>
        Think of modifying element properties like changing the settings on your
        phone. Just like how you can change the wallpaper, ringtone, or font
        size on your phone, you can change the properties of an element in the
        DOM to make it look or behave differently.
      </p>

      <h2>Modifying Text Content</h2>
      <p>
        One of the most common ways to modify an element's property is to change
        its text content. You can do this using the <code>textContent</code>{" "}
        property.
      </p>
      <p>
        The <code>textContent</code> property is like a container that holds the
        text inside an element. You can think of it like a box where you can put
        words or sentences.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Change Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>

`}
          <span className="codePurple">
            {`
<script>

const paragraph = document.getElementById('myParagraph');
paragraph.textContent = 'Goodbye World!';

</script>
    
    `}
          </span>
          {`
</body>
</html>
    `}
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
        replacing it? You can use the <code>+=</code> operator to add more text
        to the existing text.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Add Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>
  `}
          <span className="codePurple">
            {`
<script>

const paragraph = document.getElementById('myParagraph');
paragraph.textContent += ' This is a new sentence!';

</script>
`}
          </span>
          {`
</body>
</html>
    `}
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
          {`
<!DOCTYPE html>
<html>
<head>
<title>Get Text Content</title>
</head>
<body>
<p id="myParagraph">Hello World!</p>
  `}
          <span className="codePurple">
            {`
<script>

const paragraph = document.getElementById('myParagraph');
console.log(paragraph.textContent); // Output: "Hello World!"

</script>

`}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we select the paragraph element with the ID
        "myParagraph" and log its text content to the console.
      </p>
      <AdUnit />
      <h2>Modifying Style</h2>
      <p>
        Another way to modify an element's property is to change its style. You
        can do this using the <code>style</code> property.
      </p>
      <p>
        The <code>style</code> property is like a collection of settings that
        control the appearance of an element. You can think of it like a
        dashboard with different knobs and buttons that you can adjust to change
        the look of the element.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Change Element Style</title>
</head>
<body>
<p id="myParagraph" style="color: blue;">Hello World!</p>
`}
          <span className="codePurple">
            {`
<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style.color = 'red';
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we select the paragraph element with the ID
        "myParagraph" and change its text color to red. This is like adjusting
        the color knob on the dashboard to change the color of the text.
      </p>
      <p>
        But what if you want to change multiple styles at once? You can use the
        <code>style</code> property to change multiple styles in one go.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Change Multiple Styles</title>
</head>
<body>
<p id="myParagraph" style="color: blue; font-size: 24px;">Hello World!</p>
  `}
          <span className="codePurple">
            {`
<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style = 'color: red; font-size: 36px;';
</script>
    
    `}
          </span>
          {`
</body>
</html>
    `}
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
        Also, when adding properties with two words, like <code>font-size</code>
        , you don't use the <code>-</code> symbol because it is used for
        subtraction in JavaScript. Instead, you use camel case, like{" "}
        <code>fontSize</code>. This is important to remember, as it can be
        confusing for beginners.
      </p>
      <p>
        For example, if you want to change the font size and font family, you
        would use <code>fontSize</code> and <code>fontFamily</code>, not{" "}
        <code>font-size</code> and <code>font-family</code>.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Change Font Properties</title>
</head>
<body>
<p id="myParagraph" style="color: blue; font-size: 24px;">Hello World!</p>
  `}
          <span className="codePurple">
            {`
<script>
const paragraph = document.getElementById('myParagraph');
paragraph.style.fontSize = '36px';
paragraph.style.fontFamily = 'Arial';
</script>
    
    `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we change the font size to 36px and font family to
        Arial using camel case.
      </p>
      <AdUnit />
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
          {`
<!DOCTYPE html>
<html>
<head>
<title>Modify Attributes</title>
</head>
<body>
<img id="myImage" src="image.jpg" alt="An image">
`}
          <span className="codePurple">
            {`
<script>
const image = document.getElementById('myImage');
image.setAttribute('src', 'new-image.jpg');
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we select the image element with the ID "myImage" and
        change its <code>src</code> attribute to "new-image.jpg". This is like
        using the screwdriver to adjust the <code>src</code> attribute of the
        image.
      </p>
      <p>
        But what if you want to remove an attribute from an element? You can use
        the <code>removeAttribute</code> method to do so.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Remove Attributes</title>
</head>
<body>
<img id="myImage" src="image.jpg" alt="An image">
`}
          <span className="codePurple">
            {`
<script>
const image = document.getElementById('myImage');
image.removeAttribute('alt');
</script>

`}
          </span>
          {`
</body>
</html>
    `}
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
        The <code>classList</code> property is like a list of stickers that you
        can put on an element. You can add, remove, or toggle classes to change
        the appearance or behavior of an element.
      </p>
      <pre>
        <code>
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
`}
          <span className="codePurple">
            {`
<script>
const paragraph = document.getElementById('myParagraph');
paragraph.classList.add('blue', 'bold');
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we select the paragraph element with the ID
        "myParagraph" and add the "blue" and "bold" classes to it. This is like
        putting the blue and bold stickers on the paragraph element.
      </p>
      <p>
        But what if you want to remove a class from an element? You can use the
        <code>classList</code> property to remove a class from an element.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Remove Classes</title>
`}
          <span className="codePurple">
            {`
  <style>
  .blue {
    color: blue;
  }
  .bold {
    font-weight: bold;
  }
  </style>
  `}
          </span>
          {`
</head>
<body>
<p id="myParagraph" class="blue bold">Hello World!</p>
`}
          <span className="codePurple">
            {`
<script>
const paragraph = document.getElementById('myParagraph');
paragraph.classList.remove('bold');
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we select the paragraph element with the ID
        "myParagraph" and remove the "bold" class from it. This is like removing
        a sticker from the paragraph element.
      </p>
      <AdUnit />
      <h2>Summary</h2>
      <p>
        In this topic, you've learned how to modify element properties in the
        DOM. You can change the text content, style, attributes, and classes of
        an element to make it look or behave differently. Remember, modifying
        element properties is like adjusting the settings on your phone or using
        tools to change the appearance and behavior of an element.
      </p>
      <p>
        In the next topic, you'll learn about events and how to handle user
        interactions with JavaScript.
      </p>
      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/SelectingElementsINDom")}
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/CreateAppend")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const CreateAppend = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Creating and Appending Elements</h1>

      <h2>Introduction</h2>
      <p>
        Now that you've learned how to select and modify elements, it's time to
        learn how to create new elements and add them to the DOM. This is a very
        important concept in web development, and it's used a lot in building
        dynamic web applications.
      </p>
      <p>
        Think of creating elements like building with blocks. You start with a
        blank slate, and then you add blocks one by one to create a structure.
        Just like how you can use different types of blocks to build different
        things, you can use different types of elements to build different parts
        of a web page.
      </p>

      <h2>Creating Elements</h2>
      <p>
        To create a new element, you can use the <code>createElement</code>{" "}
        method. This method takes a string argument that specifies the type of
        element you want to create.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Creating an Element</title>
</head>
<body>
`}
          <span className="codePurple">
            {`
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element using the{" "}
        <code>createElement</code> method. The <code>createElement</code> method
        returns a reference to the newly created element, which we can store in
        a variable.
      </p>
      <p>
        This reference allows us to interact with the element, such as adding
        content to it, styling it, or even attaching event listeners to make it
        interactive.
      </p>
      <p>
        Once you've created an element, you can add text content to it using the
        <code>textContent</code> property. The <code>textContent</code> property
        sets or returns the text content of the specified node.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Adding Text Content</title>
</head>
<body>
`}
          <span className="codePurple">
            {`
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we add the text "Hello World!" to the paragraph
        element. The <code>textContent</code> property sets the text content of
        the element to the specified value.
      </p>
      <AdUnit />
      <p>
        You can also add other types of content to an element, such as images or
        other elements. For example, let's create an image element and a
        paragraph element:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Creating and Adding Content</title>
</head>
<body>
`}
          <span className="codePurple">
            {`
<script>
// Create a new image element
const image = document.createElement('img');

// Set the source of the image
image.src = 'image.jpg';

// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';
</script>

`}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new image element and set its source to
        "image.jpg". We also create a new paragraph element and add the text
        "Hello World!" to it.
      </p>

      <h2>Appending Elements</h2>
      <p>
        To add an element to the DOM, you can use the <code>appendChild</code>{" "}
        method. This method takes a reference to the element you want to add as
        an argument.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Appending Elements</title>
</head>
<body>
`}
          <span className="codePurple">
            {`
  
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Append the paragraph to the body
document.body.appendChild(paragraph);
</script>
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then append it to the body of the HTML document. The{" "}
        <code>appendChild</code> method adds the element to the end of the
        specified parent element.
      </p>
      <p>
        Appending an element means adding it to the end of the parent element’s
        child nodes. If the parent element already has other child elements, the
        new element will be added after the last child element.
      </p>
      <AdUnit />
      <p>
        You can also use the <code>appendChild</code> method to add an element
        to a specific parent element, not just the body.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Appending to a Container</title>
</head>
<body>
<div id="myContainer"></div>
`}
          <span className="codePurple">
            {`
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Append the paragraph to the container
const container = document.getElementById('myContainer');
container.appendChild(paragraph);
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then append it to a container element with the ID "myContainer".
      </p>

      <h2>Inserting Elements</h2>
      <p>
        Sometimes you may want to insert an element at a specific position in
        the DOM. You can use the <code>insertBefore</code> method to do this.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Inserting Elements</title>
</head>
<body>
<div id="myContainer">
<p>First paragraph</p>
</div>
`}
          <span className="codePurple">
            {`
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Insert the new paragraph before the first child
const container = document.getElementById('myContainer');
const referenceElement = container.firstChild;
container.insertBefore(paragraph, referenceElement);
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then insert it before the first child element of the container.
        The <code>insertBefore</code> method inserts the element before the
        specified reference element.
      </p>
      <p>
        This method is useful when you need to place a new element in a specific
        position relative to other elements within the same parent container. It
        ensures the new element appears exactly where you want it.
      </p>

      <h2>Replacing Elements</h2>
      <p>
        You can use the <code>replaceChild</code> method to replace an existing
        element with a new one.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Replacing Elements</title>
</head>
<body>
<div id="myContainer">
<p>Old paragraph</p>
</div>
`}
          <span className="codePurple">
            {`
<script>
// Create a new paragraph element
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = 'Hello World!';

// Replace the old paragraph with the new one
const container = document.getElementById('myContainer');
const oldParagraph = container.firstChild;
container.replaceChild(paragraph, oldParagraph);
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we create a new paragraph element, add text content to
        it, and then replace the first child element of the container with the
        new paragraph. The <code>replaceChild</code> method replaces the
        specified old element with the new element.
      </p>
      <p>
        Replacing an element can be handy when you want to update the content or
        structure of the DOM dynamically. Instead of just modifying an existing
        element, you replace it entirely with a new one.
      </p>
      <AdUnit />
      <h2>Removing Elements</h2>
      <p>
        You can use the <code>removeChild</code> method to remove an element
        from the DOM.
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Removing Elements</title>
</head>
<body>
<div id="myContainer">
<p>Paragraph to be removed</p>
</div>
`}
          <span className="codePurple">
            {`
<script>
// Remove the paragraph from the container
const container = document.getElementById('myContainer');
const paragraph = container.firstChild;
container.removeChild(paragraph);
</script>
  
  `}
          </span>
          {`
</body>
</html>
    `}
        </code>
      </pre>
      <p>
        In this example, we remove the first child element of the container from
        the DOM. The <code>removeChild</code> method removes the specified
        element from the DOM.
      </p>
      <p>
        Removing elements is useful for cleaning up the DOM, especially when
        certain elements are no longer needed, such as removing items from a
        list or deleting user inputs after processing them.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Creating, appending, inserting, replacing, and removing elements are
        essential skills for web developers. They allow you to dynamically
        modify the structure and content of a web page, making your applications
        more interactive and responsive.
      </p>
      <p>
        Remember, practice is key to mastering these techniques. Try creating
        different types of elements and manipulating them in various ways to get
        a better understanding of how they work.
      </p>
      <p>
        In the next lessons, we will explore more advanced techniques for
        manipulating the DOM and making your web pages more dynamic and
        interactive.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/ModifyingElements")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/EventHandling")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const EventHandling = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Event Handling</h1>

      <h2>Introduction</h2>
      <p>
        In web development, events are actions that occur in the browser, such
        as clicking a button, moving the mouse, or pressing a key. Handling
        these events allows you to create interactive and responsive web pages
        that react to user actions.
      </p>
      <p>
        Think of an event as something that happens on your web page. For
        example, when you click a button, that click is an event. By learning
        how to handle these events, you can make your website respond in
        real-time, such as showing a message or changing an element's style.
      </p>
      <p>
        Mastering event handling is crucial for making your web pages dynamic
        and engaging. It's one of the fundamental skills you need to create
        interactive web applications.
      </p>

      <h2>Adding Event Listeners in HTML</h2>

      <h3>Syntax</h3>
      <p>
        The simplest way to handle events directly in HTML is by using
        attributes. Here is the basic syntax for adding an event listener using
        an HTML attribute:
      </p>
      <pre>
        <code>{`<element event="function()">Content</element>`}</code>
      </pre>
      <p>
        <strong>element</strong>: The HTML element you want to attach the event
        to (e.g., <code>button</code>, <code>div</code>).
        <br />
        <strong>event</strong>: The type of event you want to listen for (e.g.,{" "}
        <code>onclick</code>, <code>onmouseover</code>).
        <br />
        <strong>function()</strong>: The JavaScript function that will be called
        when the event occurs.
      </p>
      <AdUnit />
      <h3>Example</h3>
      <p>
        Here’s an example of how to use the <code>onclick</code> attribute to
        handle a button click event:
      </p>
      <pre>
        <code>
          {`<!DOCTYPE html>
<html>
<head>
<title>HTML Event Listener</title>
</head>
<body>
<button onclick="showAlert()">Click me!</button>
`}
          <span className="codePurple">
            {`
<script>
function showAlert() {
alert('Button clicked!');
}
</script>

  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, clicking the button calls the <code>showAlert</code>{" "}
        function, which displays an alert with the message "Button clicked!".
      </p>
      <p>
        While this approach is straightforward, it mixes HTML and JavaScript,
        which can make your code harder to manage as it grows.
      </p>

      <h2>Adding Event Listeners in JavaScript</h2>

      <h3>Syntax</h3>
      <p>
        Adding event listeners in JavaScript involves using the{" "}
        <code>addEventListener</code> method. Here is the basic syntax:
      </p>
      <pre>
        <code>
          {`element.addEventListener('event', function() {
// Code to execute when the event occurs
});`}
        </code>
      </pre>
      <p>
        <strong>element</strong>: The HTML element you want to attach the event
        to (e.g., <code>button</code>, <code>div</code>).
        <br />
        <strong>'event'</strong>: The type of event you want to listen for
        (e.g., <code>'click'</code>, <code>'mouseover'</code>).
        <br />
        <strong>function()</strong>: The function that will be called when the
        event occurs.
      </p>

      <h3>Example</h3>
      <p>
        Here’s an example of how to use the <code>addEventListener</code> method
        to handle a button click event:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>JavaScript Event Listener</title>
</head>
<body>
<button id="myButton">Click me!</button>
`}
          <span className="codePurple">
            {`
<script>
// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
alert('Button clicked!');
});
</script>
  
  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, we first select the button using its ID, then attach an
        event listener to it. This listener waits for a click event and shows an
        alert message when the button is clicked.
      </p>
      <p>
        This approach is more versatile and keeps your HTML and JavaScript code
        separate, making it easier to update and maintain.
      </p>
      <AdUnit />
      <h2>Common Event Types</h2>
      <p>Here are some common types of events you might use:</p>
      <ul>
        <li>
          <code>click</code>: Triggered when an element is clicked.
        </li>
        <li>
          <code>mouseover</code>: Triggered when the mouse pointer moves over an
          element.
        </li>
        <li>
          <code>mouseout</code>: Triggered when the mouse pointer moves out of
          an element.
        </li>
        <li>
          <code>keydown</code>: Triggered when a key is pressed down.
        </li>
        <li>
          <code>keyup</code>: Triggered when a key is released.
        </li>
      </ul>

      <h2>Click Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a click event, use the <code>click</code> event type with the{" "}
        <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          {`element.addEventListener('click', function() {
// Code to execute when the element is clicked
});`}
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the click event to change the color of a paragraph:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Click Event</title>
</head>
<body>
<p id="myParagraph">Click the button to change my color!</p>
<button id="myButton">Click me!</button>
`}
          <span className="codePurple">
            {`
<script>
// Get the paragraph and button elements
const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
paragraph.style.color = 'blue';
});
</script>

`}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, clicking the button changes the color of the paragraph
        to blue.
      </p>

      <h2>Mouseover Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a mouseover event, use the <code>mouseover</code> event type
        with the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          {`element.addEventListener('mouseover', function() {
// Code to execute when the mouse moves over the element
});`}
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the mouseover event to change the background color of
        a paragraph:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Mouseover Event</title>
</head>
<body>
<p id="myParagraph">Hover over me to change my background color!</p>
`}
          <span className="codePurple">
            {`
<script>
// Get the paragraph element
const paragraph = document.getElementById('myParagraph');

// Add an event listener to the paragraph
paragraph.addEventListener('mouseover', function() {
paragraph.style.backgroundColor = 'yellow';
});
</script>
  
  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, hovering over the paragraph changes its background
        color to yellow.
      </p>
      <AdUnit />
      <h2>Mouseout Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a mouseout event, use the <code>mouseout</code> event type
        with the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          {`element.addEventListener('mouseout', function() {
// Code to execute when the mouse moves out of the element
});`}
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the mouseout event to change the background color of a
        paragraph:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Mouseout Event</title>
</head>
<body>
<p id="myParagraph">Hover over me and then move out to change my background color!</p>
`}

          <span className="codePurple">
            {`
<script>
// Get the paragraph element
const paragraph = document.getElementById('myParagraph');

// Add an event listener to the paragraph
paragraph.addEventListener('mouseout', function() {
paragraph.style.backgroundColor = 'transparent';
});
</script>
  
  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, moving the mouse out of the paragraph changes its
        background color back to transparent.
      </p>

      <h2>Keydown Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a keydown event, use the <code>keydown</code> event type with
        the <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          {`document.addEventListener('keydown', function(event) {
// Code to execute when a key is pressed down
// You can use event.key to get the key that was pressed
});`}
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the keydown event to display the pressed key in an
        alert:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Keydown Event</title>
</head>
<body>
<p>Press any key to see which key you pressed!</p>
`}
          <span className="codePurple">
            {`
<script>
// Add an event listener to the document
document.addEventListener('keydown', function(event) {
alert('Key pressed: ' + event.key);
});
</script>
  
  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, pressing any key will display an alert showing the key
        that was pressed.
      </p>

      <h2>Keyup Event</h2>
      <h3>Syntax</h3>
      <p>
        To handle a keyup event, use the <code>keyup</code> event type with the{" "}
        <code>addEventListener</code> method:
      </p>
      <pre>
        <code>
          {`document.addEventListener('keyup', function(event) {
// Code to execute when a key is released
// You can use event.key to get the key that was released
});`}
        </code>
      </pre>
      <h3>Example</h3>
      <p>
        Here’s how to use the keyup event to display the released key in an
        alert:
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Keyup Event</title>
</head>
<body>
<p>Release any key to see which key you released!</p>
`}

          <span className="codePurple">
            {`
<script>
// Add an event listener to the document
document.addEventListener('keyup', function(event) {
alert('Key released: ' + event.key);
});
</script>
  
  `}
          </span>
          {`
</body>
</html>`}
        </code>
      </pre>
      <p>
        In this example, releasing any key will display an alert showing the key
        that was released.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        Understanding how to handle events is a fundamental part of web
        development. It allows you to create interactive and engaging user
        experiences by responding to user actions.
      </p>
      <p>
        As you continue learning, you'll find even more ways to use events to
        make your web applications interactive and responsive.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/CreateAppend")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/introBOM")}>
          Next
        </button>
      </div>
    </div>
  );
};
