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
      <h1>Understanding DOM Events and JavaScript Event Listeners </h1>
      <p>
        {" "}
        JavaScript code in the browser uses an event-driven programming pattern.
        What this means is that when a specific DOM event happens in the
        browser, a piece of code will be executed as a response to that action.
      </p>
      <p>
        {" "}
        Today, I will help you see and understand how to listen and respond to
        DOM events using JavaScript.
      </p>
      <h2>What Are DOM Events and Why Are They Useful?</h2>
      <p>
        DOM events are signals exposed by the browser that you can use to run a
        piece of JavaScript code.
      </p>
      <p>
        These DOM events occur when the user interacts with the application
        {`we've`} created, such as clicking a button or typing letters into an
        input field.
      </p>
      <p>
        As a web developer, you can instruct JavaScript to listen for a specific
        event and do something in response to that event.
      </p>
      <h3>For example:</h3>
      <ul>
        <li>When a button is clicked, do change the text of a paragraph.</li>
        <li>
          When a form is submitted, do a POST request using the Fetch API.
        </li>
      </ul>
      <h2>How to Listen to DOM Events</h2>
      <p>
        To listen for an event, you need to attach an event listener to an
        element by using the <code> {`addEventListener()`} </code> method.
      </p>
      <p>
        {" "}
        The <code>addEventListener()</code> method accepts two parameters:
      </p>
      <ul>
        <li>
          {" "}
          The event <code>type</code> to listen to
        </li>
        <li>A function to run when the event is triggered</li>
      </ul>
      <p>
        {" "}
        The <code>addEventListener()</code> method syntax
      </p>
      <pre>
        <code>
          {`
Element.addEventListener(type, function);
          `}
        </code>
      </pre>
      <p>
        {" "}
        Back to the example, suppose you want to change the text of a paragraph
        when a <b>button</b> element is clicked. Here’s how you do it:
      </p>
      <h3>
        An example of using the <code>addEventListener()</code> method
      </h3>
      <pre>
        <code>
          {`
<body>
<p id="myParagraph">This is an example paragraph</p>
<button id="changeText">Change Text</button>
<script>
  const button = document.querySelector('#changeText');

  function newText(event) {
    const p = document.querySelector('#myParagraph');
    p.innerText = 'The text has been changed';
  }

  button.addEventListener('click', newText);
</script>
</body>
          `}
        </code>
      </pre>
      <p>
        To insert JavaScript code into the HTML document, we need to use the
        <b>script</b> tag as shown above.
      </p>
      <p>
        The button element is selected using{" "}
        <code>document.querySelector()</code> method, then the method{" "}
        <code>addEventListener()</code> is called on the element. This means you
        attach an event listener to the button.
      </p>
      <p>
        First, you specify the <code>type</code> of event to listen to, which is
        a <code>click</code> event in this case. Next, you specify the function
        to run when that event happens.
      </p>
      <p>
        {" "}
        In the code above, the <b>newText</b> function will be executed when the
        <code>click</code> event is triggered.
      </p>
      <p>
        {" "}
        The event listener will also send an <code>event</code> object, which
        carries information about the event that was triggered. That’s why
        there’s an <b>event</b> parameter in the <b>newText</b> function above.
      </p>
      <p>You can log the event to the console to see its details:</p>
      <pre>
        <code>
          {`
function newText(event) {
  console.log(event);
}
          `}
        </code>
      </pre>
      <p>Logging the event object</p>
      <p>
        If you click on the button again, you will have the following output:
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1714121571/event-log-example-1_xe49rb.png"
        alt="An example Event object log
"
      />
      <p>An example Event object log</p>
      <p>
        Depending on what you want to do when an event is triggered, you may
        need to use the information contained inside the <b>event</b> object.
      </p>
      <p>
        Here, all we want to do is to change the text of the paragraph, so the
        <b>event</b> object is not needed. We’ll see an example of using the
        event object later, when handling the keyboard events.
      </p>
      <p>
        There are many events you can listen to in the browser. Here are some of
        the most common events you may need when developing a web application:
      </p>

      <table border={"1px"} style={{ borderCollapse: "collapse" }}>
        <tr>
          <th>Event</th>
          <th>Event is fired</th>
        </tr>
        <tr>
          <td>click</td>
          <td>
            When you press down and release the primary mouse button. Used to
            track buttons and clickable elements
          </td>
        </tr>
        <tr>
          <td>mousemove</td>
          <td>When you move the mouse cursor</td>
        </tr>
        <tr>
          <td>mouseover</td>
          <td>
            When you move the mouse cursor over an element. {`It's`} like the
            CSS hover state
          </td>
        </tr>
        <tr>
          <td>mouseout</td>
          <td>
            When your mouse cursor moves outside the boundaries of an element
          </td>
        </tr>
        <tr>
          <td>dblclick</td>
          <td>When you click twice</td>
        </tr>
        <tr>
          <td>DOMContentLoaded</td>
          <td>When the DOM content is fully loaded</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>When you press a key on your keyboard</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>When you release a key on your keyboard</td>
        </tr>
        <tr>
          <td>submit</td>
          <td>When a form is submitted</td>
        </tr>
      </table>
      <p>
        If you want to read the full list of DOM event types, you can{" "}
        <a href="https://en.wikipedia.org/wiki/DOM_event">visit this page.</a>
      </p>
      <p>
        The DOM Events are broken into several categories. Here we will just
        look at two of the most common events you might use in your project:
        keyboard and mouse events.
      </p>
      <h2>Keyboard Events</h2>
      <p>
        {" "}
        For the keyboard, you can track the keydown and keyup events, which run
        when you press and release a key, respectively.
      </p>
      <p>To show you an example, run the following code from the console:</p>
      <pre>
        <code>
          {`
document.addEventListener('keydown', event => {
  console.log(\`A key is pressed: \${event.key}\`);
});

document.addEventListener('keyup', event => {
  console.log(\`A key is released: \${event.key}\`);
});
          `}
        </code>
      </pre>
      <p>
        Once you run the code above, press a key on your keyboard slowly, then
        release it slowly.
      </p>
      <p>You should see a log output as follows:</p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1714122795/keydown-event-1_ejep1t.png"
        alt="Logging keyup and keydown events
"
      />
      <p> Logging keyup and keydown events</p>
      <p>
        {" "}
        Notice how the{" "}
        {`'keydown' log appears as soon as you press a key, and the
        'keyup' log appears only when you release the key.`}
      </p>
      <p>
        The keyboard events are usually attached to the <b>document</b> object
        instead of a specific element, because the whole website should be able
        to listen to that event.
      </p>
      <AdUnit />
      <h2>Mouse Events</h2>
      <p>
        Aside from keyboard events, the DOM also provides a way to track any
        mouse events.
      </p>
      <p>The most common mouse events that you can track are:</p>
      <ul>
        <li>
          <code> mousedown</code> – the mouse button was pressed
        </li>
        <li>
          {" "}
          <code> mouseup</code> – the mouse button was released
        </li>
        <li>
          {" "}
          <code>click</code> – a click event
        </li>
        <li>
          <code> dblclick</code> – a double click event
        </li>
        <li>
          <code>mousemove</code> – when the mouse is moved over the element
        </li>
        <li>
          {" "}
          <code>contextmenu</code> – when the context menu is opened, for
          example on a right mouse button click
        </li>
      </ul>
      <p>
        {" "}
        Again, you can test these events by adding an event listener directly to
        the <code>document</code> object:
      </p>
      <pre>
        <code>
          {`
document.addEventListener('mousedown', event => {
  console.log(\`The mouse is pressed\`);
});

document.addEventListener('mouseup', event => {
  console.log(\`The mouse is released\`);
});
          `}
        </code>
      </pre>
      <p>Capturing the mouse events</p>
      <p>
        Run the code above, then click anywhere inside the browser. You should
        see the <code>mousedown</code> and <code>mouseup</code> events logged,
        respectively.
      </p>
      <h2>How to Remove Event Listeners</h2>
      <p>
        {" "}
        To remove an event listener attached to an element, you need to call the
        <code>removeEventListener()</code> method, passing the <code>type</code>{" "}
        of the event and the <code>function</code> you passed to the{" "}
        <code>addEventListener()</code> method as follows:
      </p>
      <p>Example of removing an event listener</p>
      <pre>
        <code>
          {`
 button.removeEventListener('click', newText);

          `}
        </code>
      </pre>
      <p>
        The above code is enough to remove the {`'click'`} event listener from
        the <b>button</b> element. Notice how you need to call the
        <code>removeEventListener()</code> method on the element while also
        passing the function <b>newText</b> to the method.
      </p>
      <p>
        To correctly remove an event listener, you need to have a reference to
        the function attached to the event. If you pass a nameless function to
        the <code>addEventListener()</code> method, then that event can’t be
        removed:
      </p>
      <p>A nameless function {`can't`} be removed</p>
      <pre>
        <code>
          {`
button.addEventListener('click', function (event) {
  alert('Button save is clicked');
});
          `}
        </code>
      </pre>
      <p>
        Without the function name as in the example above, you won’t be able to
        remove the event listener.
      </p>
      <h2>How to Listen to Events using HTML Attributes</h2>
      <p>
        Aside from using the <code>addEventListener()</code> method, you can
        also listen to events by adding the <code>on[eventname]</code> attribute
        to your HTML elements.
      </p>
      <p>
        For example, suppose you want to listen to a button click. You can add
        the <code>onclick</code> attribute to your button as follows:
      </p>
      <pre>
        <code>
          {`
<body>
<button onclick="handleClick()">Click Me!</button>
<script>

   function handleClick(event) {
     alert('The button is clicked!');
   }

</script>
</body>
          `}
        </code>
      </pre>
      <p> Listening to the click event using the onclick HTML attribute</p>
      <p>
        {" "}
        In the button element above, we add the <code>onclick</code> property
        and pass the
        <code> handleClick()</code> function to it.
      </p>
      <p>
        When we click on the button, the <code>handleClick()</code> function
        will be executed.
      </p>
      <p>
        You can also add the <code>onclick</code> attribute using JavaScript as
        follows:
      </p>
      <pre>
        <code>
          {`
<body>
<button id="myBtn">Click Me!</button>
<script>

  const myBtn = document.querySelector('#myBtn');
  myBtn.onclick = handleClick;
  function handleClick(event) {
    alert('The button is clicked!');
  }

</script>
</body>
          `}
        </code>
      </pre>
      <AdUnit />
      <p> Example of using the onclick attribute</p>
      <p>
        Here, we assign a reference to the <code>handleClick</code> function to
        the <code>onclick</code> property using JavaScript.
      </p>
      <p>
        To remove the onclick attribute, you can assign the property to null:
      </p>
      <pre>
        <code>
          {`
const myBtn = document.querySelector('#myBtn');
myBtn.onclick = null;
          `}
        </code>
      </pre>
      <p>Assigning the onclick attribute to null</p>
      <h2>Which One Should You Use?</h2>
      <p>
        As you can see, there are two ways you can listen to DOM events: the
        <code>addEventListener() </code>method and the{" "}
        <code>on[eventname]</code> HTML attribute. Which one should you use?
      </p>
      <p>
        The answer is that the <code>addEventListener()</code> method can be
        used when you need more extensibility, and the{" "}
        <code>on[eventname]</code> can be used when you prefer things to be
        simple.
      </p>
      <p>
        {" "}
        When developing web applications, the <code>.html</code> file should
        only serve as the structure of the page, while the <code>.js</code> file
        should define any behavior the web application can have.
      </p>
      <p>
        To make your application easier to maintain and extend, JavaScript
        should have access to HTML elements, but no HTML elements should be able
        to execute JavaScript functions. This is why{" "}
        <code>addEventListener()</code> should be the recommended method.
      </p>
      <p>
        <code> But addEventListener()</code> {`doesn't`} come without a cost:
        you trade extensibility with verbosity, making your code quite
        cumbersome to read.
      </p>
      <p>
        When using the <code>on[eventname]</code> attribute, you only need to
        specify the function name in your HTML element:
      </p>
      <pre>
        <code>
          {`
<body>
<button onclick="handleClick()">Click Me!</button>
<script>

  function handleClick(event) {
    alert('The button is clicked!');
  }

</script>
</body>
          `}
        </code>
      </pre>
      <p>The onclick attribute offers simplicity</p>
      <p>
        But when you use the <code>addEventListener()</code> method, you need to
        query the element you need, call the method, then specify the event and
        the callback function to run:
      </p>
      <pre>
        <code>
          {`
<body>
<button id="myBtn">Click Me!</button>
<script>

  const myBtn = document.querySelector('#myBtn');
  myBtn.addEventListener('click', handleClick);
  function handleClick(event) {
    alert('The button is clicked!');
  }

</script>
</body>
          `}
        </code>
      </pre>
      <p>
        The <code>addEventListener()</code> method offers extensibility
      </p>
      <p>
        As you can see above, there are two additional lines that you {`don't`}{" "}
        need to write when you use the <code>on[eventname]</code> attribute.
      </p>
      <p>
        While it might look insignificant, it will be a serious issue when you
        work on a large scale application with many HTML and JS files.
      </p>
      <p>
        In addition, the <code>addEventListener()</code> method also allows you
        to attach multiple listeners to the same element as follows:
      </p>
      <pre>
        <code>
          {`
<body>
<button id="myBtn">Click Me!</button>
<script>

  const myBtn = document.querySelector('#myBtn');

  myBtn.addEventListener('click', handleClick);

  myBtn.addEventListener('click', handleClickTwo);

  function handleClick() {
    console.log('Run from handleClick function');
  }

  function handleClickTwo() {
    console.log('Run from handleClickTwo function');
  }

</script>
</body>
          `}
        </code>
      </pre>
      <p>
        <code>addEventListener()</code> allows you to assign more than one
        listener
      </p>
      <p>
        When you click on the button above, JavaScript will execute both event
        listeners.
      </p>
      <p>
        This is not possible with the onclick property because you can only
        assign one function as a reference at a time:
      </p>
      <pre>
        <code>
          {`
<body>
<button id="myBtn">Click Me!</button>
<script>

  const myBtn = document.querySelector('#myBtn');

  myBtn.onclick = handleClick;

  // when you assign a new function to onclick,
  // the old function is overwritten

  myBtn.onclick = handleClickTwo;

  function handleClick() {
    console.log('Run from handleClick function');
  }

  function handleClickTwo() {
    console.log('Run from handleClickTwo function');
  }

</script>
</body>
          `}
        </code>
      </pre>
      <p>
        But I never encountered a situation where I needed to listen to the same
        event twice, so this advantage might not be useful at all.
      </p>
      <h2>Conclusion</h2>
      <p>
        {" "}
        The DOM events exposed by the browser enable you to respond to user
        actions in the appropriate way.
      </p>
      <p>
        {" "}
        This pattern of using event listeners to do specific tasks is known as
        event-driven programming, and {`you'll`} use this pattern a lot when
        developing a web application using JavaScript.
      </p>
      <p>
        There are two ways you can listen to events: using the
        <code>addEventListener()</code> JavaScript method and the on[eventname]
        HTML attributes. Each has its advantages and disadvantages, so {`it's`}{" "}
        good to be familiar with both.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/ModifyingElements")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/introBOM")}>
          Next
        </button>
      </div>
    </div>
  );
};
