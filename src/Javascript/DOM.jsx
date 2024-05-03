const DOMintro = () => {
  return (
    <div className="comments-container">
      <h1>Welcome to the Wonderful World of the DOM!</h1>
      <p>
        Have you ever clicked a button on a website and something cool happened?
        Maybe a hidden message appeared, or a funny cat video popped up! Ever
        wondered how that works? Well, {`there's`} a secret agent behind the
        scenes called the <b>Document Object Model (DOM)</b>, and {`it's`} what
        makes websites interactive and dynamic!
      </p>
      <p>
        But hold on, what exactly is this DOM?{" "}
        {`Don't worry, it's not a scary monster! Think of it like a special
        name, a nickname for something really cool. The DOM isn't a single
        thing,`}{" "}
        but rather a way of organizing and understanding all the parts that make
        up a webpage.
      </p>
      <h2>Imagine your favorite website as a delicious pizza.</h2>
      <ul>
        <li>The crust is the foundation, holding everything together.</li>
        <li>The sauce is the background color or image.</li>
        <li>
          {" "}
          Each topping – pepperoni, peppers, mushrooms – are the different parts
          that make the pizza unique, like headings, paragraphs, images, and
          buttons.
        </li>
      </ul>
      <p>
        The DOM takes that pizza and breaks it down into all its tasty
        ingredients, but {`here's the twist: It doesn't`} just separate them!
        The DOM creates a special kind of family tree for the website:
      </p>
      <ul>
        <li>
          <b>The crust</b> (the foundation) becomes the root of the tree, the
          most important part.
        </li>
        <li>
          <b>The sauce </b> (the background) becomes a branch.
        </li>
        <li>
          <b> Each topping</b> (headings, paragraphs, images, buttons) becomes
          its own little leaf on the tree.
        </li>
      </ul>
      <h2>Why is this Family Tree Important?</h2>
      <p>
        This family tree is super important because it allows programmers to
        target specific parts of the website, just like you might pick off a
        specific mushroom from your pizza{" "}
        {`(we wouldn't want to upset the other toppings, would we?). Imagine you
        want to add extra cheese (more content) to your pizza after it's already
        cooked (the webpage has loaded). Normally, you'd have to throw the whole
        thing away and start over. But with the DOM, it's different!`}
      </p>
      <h2>The Magic Happens When You Open the Page</h2>
      <p>
        The moment you visit a website, your web browser (like Chrome or Safari)
        does some amazing work behind the scenes. It takes a peek under the hood
        and uses its special skills to build this DOM tree. It reads the
        {`website's code, which is like a recipe for the pizza, and figures out
        where everything belongs in the tree. This DOM tree is created
        immediately when the page loads, just like the ingredients come together
        to make the pizza when it's baked.`}
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
          {" "}
          <b>Change the text</b> on a webpage, like making a headline blink or
          hiding a boring paragraph.
        </li>
        <li>
          {" "}
          <b>Swap out images</b> based on user clicks, like showing a happy cat
          picture when someone clicks a button.
        </li>
        <li>
          <b>Add new elements</b> to the page, like creating a comment box where
          users can leave messages.
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
      <h2>Ready to Become a DOM Explorer?</h2>
      <p>
        The DOM might sound complicated at first, but by understanding this
        family tree and how it works,{" "}
        {`you'll be well on your way to becoming a website detective! In the
        next lessons, we'll delve deeper into the DOM,`}{" "}
        learning how to navigate the tree and use JavaScript to make websites
        more interactive and exciting. So, buckle up and get ready for some DOM
        adventures!
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
    <div className="comments-container">
      <h1>Picking Your Targets: Selecting Elements in the DOM (Enhanced)</h1>
      <p>
        {" "}
        Now that {`you've explored the DOM's secret family tree, it's`} time to
        learn how to target specific elements on a webpage, just like picking
        out your favorite topping from a pizza! In the DOM world, this is called
        <b>selecting elements</b>.
      </p>
      <p>
        Programmers use JavaScript to interact with the DOM, and there are a few
        different ways to select elements:
      </p>
      <h2>
        1. <b>Selecting by ID</b>
      </h2>
      <p>
        Imagine each element on a webpage has a unique ID tag, like a name tag
        at a party. You can use JavaScript to find elements with a specific ID.
        Think of it like calling out {`someone's`} name at a party to get their
        attention!
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
// JavaScript


// Let's say there's a heading on the webpage with the ID "main-title"
const mainTitle = document.getElementById("main-title");

// Now you can use the "mainTitle" variable to change the text, style, or even hide the heading!
          `}
        </code>
      </pre>
      <h2>
        2. <b>Selecting by Tag Name</b>
      </h2>
      <p>
        {`
        Think of tag names like categories on a pizza menu.  There might be categories for "meat lovers," "veggie supreme," and so on.  In the DOM, elements also have tag names, like <p> for paragraphs, <img> for images, and  <h1> for headings.
        `}
      </p>
      <p>
        You can use JavaScript to select all the elements on a webpage with a
        specific tag name. Imagine ordering all the pizzas with a specific
        category!
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
// JavaScript


// Let's say you want to change the color of all the paragraphs on the webpage
const allParagraphs = document.getElementsByTagName("p");

// Now you can loop through each paragraph in "allParagraphs" and change its color!
          `}
        </code>
      </pre>
      <h2>3. Selecting by Class Name</h2>
      <p>
        Sometimes, elements on a webpage might share a class name, like a
        special discount for {`"first-time customers"`} on a pizza menu. You can
        use JavaScript to select all the elements with a specific class name.
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
// JavaScript


// Let's say there are several buttons on the webpage with the class name "special-offer"
const specialButtons = document.getElementsByClassName("special-offer");

// Now you can add an event listener to each button in "specialButtons" to make something happen when it's clicked!
          `}
        </code>
      </pre>
      <h2>Meet the Document: Your Starting Point</h2>
      <p>
        Before we dive deeper, {`let's`} talk about the keyword{" "}
        <code>document</code>. Think of it as the master chef in the kitchen,
        overseeing all the ingredients (the DOM elements) on the webpage. The
        <code>document</code> keyword in JavaScript gives you access to the
        entire DOM tree, like the chef has access to all the ingredients in the
        kitchen.
      </p>
      <h2>Selecting with More Power: querySelector() and querySelectorAll()</h2>
      <p>
        {" "}
        These are some of the most powerful tools in your DOM selection toolbox!
      </p>
      <p>
        {" "}
        <code>querySelector()</code>: This method is like a picky eater who only
        wants one specific slice of pizza. It searches the DOM tree for the
        first element that matches a specific selector (ID, tag name, class
        name).
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
// JavaScript


// Let's say you only want the first image on the webpage
const firstImage = document.querySelector("img");

// Now you can change the source of the image or add an effect to it!
          `}
        </code>
      </pre>
      <p>
        <code>querySelectorAll()</code>: This method is more generous, like
        someone who wants all the pizzas with pepperoni. It returns a list of
        all the elements that match a specific selector.
      </p>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
// JavaScript


// Let's say you want to change the background color of all the buttons on the webpage
const allButtons = document.querySelectorAll("button");

// Now you can loop through each button in "allButtons" and change its background color!
          `}
        </code>
      </pre>
      <h3>Choosing the Right Tool</h3>
      <p>
        Selecting by ID is the most specific way, like picking out a single
        slice of pizza. Selecting by tag name is broader, like choosing all the
        pizzas with pepperoni. Selecting by class name falls somewhere in
        between. <code>querySelector()</code> targets the first matching
        element, while
        <code>querySelectorAll()</code> grabs them all.
      </p>
      <p>
        <b>Remember</b>: The DOM tree helps you understand how elements are
        related. If{" "}
        {`you're unsure which method to use, you can use your
        browser's developer`}{" "}
        tools to inspect the webpage and see the ID, tag names, and class names
        of different elements.
      </p>
      <p>
        By mastering these selection techniques,{" "}
        {`you'll be well on your way to
        becoming a DOM ninja, able to target and manipulate any element on a
        webpage! In the next lesson, we'll`}{" "}
        explore how to use JavaScript to change the content and style of these
        elements, making webpages truly interactive.
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
    <div className="comments-container">
      <h1>How to Modify DOM Elements</h1>
      <p>
        Once you have access to DOM elements, you can modify them in various
        ways using JavaScript.
      </p>
      <h2>How to Manipulate Element Content </h2>
      <p>
        This lesson equips you with the skills to manipulate element content in
        JavaScript – essential tools for any web developer.{" "}
        {`We'll
        assume you're`}{" "}
        familiar with selecting elements from the DOM (document.getElementById,
        getElementsByTagName, querySelector).
      </p>
      <h3>The Content Chameleon: innerHTML</h3>
      <p>
        Imagine <code>innerHTML</code> as a content chameleon. It lets you
        replace the entire HTML content within an element, including text,
        images, and even other HTML elements.
      </p>
      <ul>
        <li>
          {" "}
          <b>Accessing the Chameleon</b>: {`Let's`} say you have a{" "}
          <code> {` <div>`} </code> {`with an ID of "product-description"`}{" "}
          containing some generic text:
        </li>
      </ul>
      <pre>
        <code>
          {`
//HTML


<div id="product-description">This is a placeholder description.</div>
          `}
        </code>
      </pre>
      <p>
        In JavaScript, you can grab this element and use innerHTML to
        dynamically update it:
      </p>
      <pre>
        <code>
          {`
//JavaScript


const productDescription = document.getElementById('product-description');
productDescription.innerHTML = 'Introducing the all-new XYZ widget, packed with amazing features!';
          
          `}
        </code>
      </pre>
      <h2>
        Text Masters: <code>textContent</code>
      </h2>
      <p>
        {" "}
        This property focus solely on the text content of an element, leaving
        any HTML tags behind. It is perfect for situations where you only want
        to modify the plain text:
      </p>
      <p>
        <b>The Text Editor</b>: <code>textContent</code>: This property treats
        the element like a text editor. You can modify the text content while
        ignoring any HTML tags within.
      </p>
      <h3>Example</h3>
      <pre>
        <code>
          {`
//HTML


<p id="message">Click the button for a surprise!</p>
          `}
        </code>
      </pre>
      <p>With a button click, you can change the message:</p>
      <pre>
        <code>
          {`
//JavaScript


const messageElement = document.getElementById('message');
messageElement.textContent = 'You clicked the button! Here's your surprise.';
          `}
        </code>
      </pre>
      <h2>
        The <code>Style</code> Chameleon: <code>style</code> Property
      </h2>
      <p>
        Imagine the <code>style</code> property as a chameleon that can adapt to
        any CSS property. It grants you fine-grained control over an{" "}
        {`element's`}
        visual appearance directly through JavaScript.
      </p>
      <ul>
        <li>
          {" "}
          <b>{` Accessing the Element's Style`} </b>: Just like with other
          properties, you can access an {`element's`} style using the style
          property:
        </li>
      </ul>
      <pre>
        <code>
          {`
          
//JavaScript


const element = document.getElementById('myElement');
const elementStyle = element.style;
          `}
        </code>
      </pre>
      <p>
        Here, <b>elementStyle</b> becomes a reference to the {`element's`} style
        object, allowing you to modify its properties.
      </p>
      <ul>
        <li>
          {" "}
          <b>Changing CSS Properties</b>: Now comes the fun part! You can
          directly set the values of various CSS properties on this style
          object. Property names are written in camelCase (e.g.,{" "}
          <b>backgroundColor</b>
          instead of <b>background-color</b> ). Here are some examples:
        </li>
        <li>
          <code>Color:</code> Change the text color of an element:
        </li>
      </ul>
      <pre>
        <code>
          {`
//HTML

<p id="color-changed">How you </p>
          `}
        </code>
      </pre>
      <h3>The javascript</h3>
      <pre>
        <code>
          {`
//Javascript
          
const  = colorChanged  = document.getElementById("color-changed");
colorChanged.style.color = 'red';
          `}
        </code>
      </pre>
      <h3>
        <b>Font Size</b>: Make the text larger:
      </h3>
      <pre>
        <code>
          {`
//HTML

<h2 class="font-changed">My font will be changed </h2>

          
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript

const  fontChanged  = document.getElementByClassName("font-changed");

fontChanged.style.fontSize = '20px'; 
          `}
        </code>
      </pre>
      <h3>
        <b>Background Color</b>: Set a background color:
      </h3>
      <pre>
        <code>
          {`
//HTML

<div>
  <p>I come first </p>
  <p>Then what about me </p>
</div>
          
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript

const  backGround = document.querySelector("div");

backGround.style.backgroundColor = 'lightblue';
          `}
        </code>
      </pre>
      <h3>Example with many styles</h3>
      <pre>
        <code>
          {`
//HTML


<h1 id="many-styles">Do you  like what  you see </h1>


          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript
let manyStyles = document.getElementById("many-styles");
manyStyles.style.textAlign = 'center';
manyStyles.style.padding = '5px';
manyStyles.style.color = 'brown';

          `}
        </code>
      </pre>
      <p>
        Remember, you can target any valid CSS property using this approach.
      </p>
      <h2> How to Modify Element Attributes</h2>
      <p>
        {` Attributes act like little tags on your HTML elements, holding important information. We'll explore how to access them, change them, and even remove them altogether!`}{" "}
      </p>
      <h3>Imagine a Magic Toolbox:</h3>
      <p>
        {" "}
        Think of our toolbox as a collection of powerful tools to manipulate
        element attributes. {`Let's`} meet the key ones:
      </p>
      <ul>
        <li>
          <b>{`The Grabber (getAttribute())`} </b>: This tool lets you peek
          inside an element and retrieve the value of a specific attribute.
        </li>
      </ul>
      <h3> Example </h3>
      <pre>
        <code>
          {`
//HTML

<img id="myImage" src="placeholder.jpg" alt="Image description">
      `}
        </code>
      </pre>
      <pre>
        <code>
          {`
          
//JavaScript


const image = document.getElementById('myImage');
const imageSource = image.getAttribute('src');
console.log("Current image source:", imageSource); // Outputs: "placeholder.jpg"
          `}
        </code>
      </pre>
      <p>
        Here, we use the grabber <code>{`(getAttribute('src'))`} </code> to get
        the current source of the image and log it to the console. After
        grabbing it, you can change the current value or even delete it.
      </p>
      <h2>
        {" "}
        The Modifier <code>(setAttribute())</code>:{" "}
      </h2>
      <p>
        The Modifier <code>(setAttribute())</code>: This tool allows you to
        change the value of an existing attribute or even create a new one on an
        element.
      </p>
      <h3>Example</h3>

      <pre>
        <code>
          {`
//HTML

<button id="myButton">Click Me</button>
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript


const button = document.getElementById('myButton');
button.setAttribute('disabled', true); // Disable the button
          `}
        </code>
      </pre>
      <p>
        In this example, we use the modifier{" "}
        <b>{`(setAttribute('disabled', true))`} </b> to disable the button,
        making it unclickable.
      </p>
      <h2>
        {" "}
        The Inspector <code>(hasAttribute())</code>
      </h2>
      <p>
        <b>The Inspector (hasAttribute())</b>: This tool helps you check if a
        specific attribute exists on an element. It returns true if it finds the
        attribute, and false otherwise.
      </p>
      <h3>Example</h3>

      <pre>
        <code>
          {`
//HTML

<p id="myParagraph">This is a paragraph.</p>
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript


const paragraph = document.getElementById('myParagraph');
const hasClass = paragraph.hasAttribute('class'); // Check if 'class' attribute exists
console.log("Has 'class' attribute:", hasClass); // Outputs: "false" (assuming no class is set)
          `}
        </code>
      </pre>
      <p>
        Here, we use the inspector <code>{`(hasAttribute('class'))`} </code> to
        see if the paragraph element has a class attribute.
      </p>
      <h2>
        {" "}
        The Eraser <code>(removeAttribute())</code>
      </h2>
      <p>
        The Eraser <code>(removeAttribute()) </code>: This tool lets you remove
        an attribute entirely from an element.
      </p>
      <h3>Example</h3>
      <pre>
        <code>
          {`
//HTML

<a id="myLink" href="#">Click me!</a>
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`
//JavaScript


const link = document.getElementById('myLink');
link.removeAttribute('href'); // Remove the link's href attribute
          `}
        </code>
      </pre>
      <p>
        This example uses the eraser <code> {`(removeAttribute('href'))`}</code>{" "}
        to remove the {`link's`} <b>href</b> attribute, effectively making it
        non-clickable.
      </p>
      <h2>HTML Insertion Methods</h2>
      <p>
        In HTML, there are several ways to insert new content or modify existing
        content dynamically using JavaScript. These are known as HTML insertion
        methods.
      </p>
      <h3>Our Training Ground:</h3>
      <p>{`Let's`} consider this HTML structure as our practice arena:</p>
      <pre>
        <code>
          {`
//HTML


<html>
<head></head>
<body>
  <div class="container">
    <div id="first">First element</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
          `}
        </code>
      </pre>
      <h2>Classic Approach: The InnerHTML Method</h2>
      <p>
        {" "}
        A traditional way to insert HTML is using the innerHTML property. This
        property allows you to directly set the entire HTML content within an
        element. {`Let's`} say we want to add an <code>{`<h1>`}</code> element
        with the text {`"Hello World" inside the first div. Here's how:`}
      </p>
      <pre>
        <code>
          {`
//JavaScript


// Select the container element
let container = document.getElementsByTagName('div')[0];

// Set the innerHTML with the new content
container.innerHTML = '<h1>Hello World</h1>';
          
          `}
        </code>
      </pre>
      <h3>Important Note:</h3>
      <p>
        While <code>innerHTML</code> is convenient, use it with caution. It can
        introduce security vulnerabilities if {`you're`} working with
        user-generated content. Consider alternative methods for improved
        security.
      </p>
      <h2>
        Alternative: Creating Elements with <code>createElement</code>
      </h2>
      <p>
        A safer approach involves creating new elements using{" "}
        <code>createElement</code> and then manipulating them. For instance, we
        can create an <code>{`<h1>`} </code> element, set its text content, and
        append it to the container:
      </p>
      <pre>
        <code>
          {`
//JavaScript


// Create a new h1 element
let newHeading = document.createElement('h1');
newHeading.textContent = "Hello World (created)";

// Select the container element
let container = document.getElementById('first'); // Using getElementById for specificity

// Append the new h1 element as a child
container.appendChild(newHeading);
          `}
        </code>
      </pre>
      <h2>Beyond the Basics: Other Insertion Methods</h2>
      <p> The DOM offers a variety of methods for more precise insertion:</p>
      <ul>
        <li>
          {" "}
          <code>appendChild(element)</code>: Adds the element as the last child
          of the target element.
        </li>
        <li>
          {" "}
          <code> prependChild(element)</code>: Adds the element as the first
          child of the target element.
        </li>
        <li>
          {" "}
          <code>before(element)</code>: Inserts the element before the target
          element.
        </li>
        <li>
          <code>after(element)</code> : Inserts the element after the target
          element.
        </li>
        <li>
          <code>replaceWith(element)</code>: Replaces the target element with
          the provided element.
        </li>
      </ul>
      <h3>Exploring Examples:</h3>
      <p>
        {`Let's`} use these methods to insert content into our container
        element:
      </p>
      <pre>
        <code>
          {`
JavaScript
// Select the container element
let container = document.getElementById('first');

// Create a new div element for demonstration
let newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World (appended)</h1>';

// Append the new div (last child)
container.appendChild(newDiv);

// Create another div for prepend
newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World (prepended)</h1>';

// Prepend the new div (first child)
container.prepend(newDiv);

// Create another div for insertion before
newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World (before)</h1>';

// Get a reference to the first child element
let firstChild = container.firstChild;

// Insert the new div before the first child
container.insertBefore(newDiv, firstChild);

// Create another div for insertion after
newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World (after)</h1>';

// Insert the new div after the container element
container.after(newDiv);

// Create another div for replacement
newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World (replaced)</h1>';

// Replace the container element with the new div
container.replaceWith(newDiv);


`}
        </code>
      </pre>
      <h3>Remember:</h3>
      <p>
        Choose the appropriate insertion method based on your desired placement
        (append, prepend, before, after, replace).
      </p>
      <p>
        Explore createElement for dynamic element creation and manipulation.
      </p>
      <h2>How to Manipulate Classes with JavaScript</h2>
      <p>
        {" "}
        Welcome, JavaScript warriors! Today, we delve into the realm of class
        manipulation. Classes, like trusty companions, help you group elements
        and apply styles using CSS. By manipulating classes with JavaScript, you
        can dynamically change the appearance of your webpages.
      </p>
      <h2>The Training Arena:</h2>
      <p>{`Let's`} consider this HTML structure as our practice ground:</p>
      <pre>
        <code>
          {`
//HTML


<div id="first">
  <span>Hello, this is text</span>
</div>
          
          `}
        </code>
      </pre>
      <p>We also have some CSS styles defined:</p>
      <pre>
        <code>
          {`
//CSS


.yellow {
  background-color: yellow;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.text-dark {
  color: black;
}
          `}
        </code>
      </pre>
      <h3>
        The Classic Approach: The <code>className</code> Property
      </h3>
      <p>
        In JavaScript, you can access and modify the class attribute of an
        element using the <code>className</code> property. This property holds
        all the classes assigned to an element as a space-separated string.
      </p>
      <h3>Example</h3>
      <pre>
        <code>
          {`
//JavaScript


// Select the element
let element = document.getElementById('first');

// Change the class to "red text-dark" (removes previous classes)
element.className = "red text-dark";
          `}
        </code>
      </pre>
      <h3>Adding Classes Without Overwriting:</h3>
      <p>
        {" "}
        While <code>className</code> is convenient, it overwrites existing
        classes by default. To add a class without removing others, use the{" "}
        <code>+=</code>
        operator.
      </p>
      <pre>
        <code>
          {`
//JavaScript


// Add the class "yellow" to existing classes
element.className += " yellow";
          `}
        </code>
      </pre>
      <h2>
        The Modern Way: The <code>classList</code> Property
      </h2>
      <p>
        For more advanced class manipulation, the <code>classList</code>{" "}
        property offers a powerful toolkit. It provides methods for adding,
        removing, toggling, and checking class presence.
      </p>
      <h1>Adding a Class:</h1>
      <pre>
        <code>
          {`
//JavaScript


// Add the class "text-dark" using classList.add()
element.classList.add('text-dark');
          
          `}
        </code>
      </pre>
      <h3>Removing a Class:</h3>
      <pre>
        <code>
          {`
//JavaScript


// Remove the class "text-dark" using classList.remove()
element.classList.remove('text-dark');
          `}
        </code>
      </pre>
      <h3>Toggling a Class:</h3>
      <p>
        The <code>classList.toggle()</code> method is a handy tool. It checks if
        a class exists and then adds it if absent, or removes it if present.
      </p>
      <pre>
        <code>
          {`
//JavaScript


// Toggle the class "text-dark" (add if absent, remove if present)
element.classList.toggle('text-dark');
          
          `}
        </code>
      </pre>
      <h3>Checking for a Class:</h3>
      <p>
        Use <code>classList.contains()</code> to verify if a specific class
        exists on an element.
      </p>
      <h3>Example:</h3>
      <pre>
        <code>
          {`
//JavaScript


// Check if the element has the class "text-dark"
let hasTextDarkClass = element.classList.contains('text-dark');
console.log("Has 'text-dark' class:", hasTextDarkClass); // Outputs true or false
          
          `}
        </code>
      </pre>
      <ul>
        <li>
          Use <code>className</code> for simple class assignment (but be
          cautious of overwriting).
        </li>
        <li>
          {" "}
          Leverage <code>classList</code> for advanced control over adding,
          removing, toggling, and checking classes.
        </li>
      </ul>
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
    <div className="comments-container">
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
