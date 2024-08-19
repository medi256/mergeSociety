import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Modules = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Advanced JavaScript Concepts: Modules</h1>
      <p>
        As you advance in your JavaScript journey, you’ll encounter larger and
        more complex projects. One of the key challenges in managing such
        projects is keeping your code organized and maintainable. This is where
        JavaScript Modules come in. Modules allow you to break your code into
        smaller, reusable pieces, making it easier to manage, understand, and
        debug.
      </p>

      <h2>What Are JavaScript Modules?</h2>
      <p>
        JavaScript Modules are files that contain code, which can be imported
        and used in other files. Think of a module as a self-contained unit of
        code that performs a specific task or function. By using modules, you
        can separate your code into different files, each responsible for a
        particular part of your application.
      </p>
      <p>
        For example, you might have a module for handling user authentication,
        another for interacting with an API, and yet another for managing the
        user interface. This separation of concerns helps keep your codebase
        clean and organized, making it easier to develop and maintain.
      </p>

      <h2>Why Use Modules?</h2>
      <p>
        Modules offer several benefits that are essential for writing
        high-quality, maintainable JavaScript code:
      </p>
      <ul>
        <li>
          <b>Reusability:</b> Modules allow you to reuse code across different
          parts of your application. For example, if you have a utility function
          that’s used in multiple places, you can put it in a module and import
          it wherever it’s needed.
        </li>
        <li>
          <b>Maintainability:</b> By breaking your code into smaller, focused
          modules, it’s easier to understand, update, and debug. When a bug
          occurs or a feature needs to be updated, you only need to work with
          the relevant module instead of navigating through a large, monolithic
          codebase.
        </li>
        <li>
          <b>Encapsulation:</b> Modules help encapsulate code, meaning that the
          internal workings of a module are hidden from the rest of the
          application. This reduces the likelihood of accidental interference
          between different parts of your code.
        </li>
        <li>
          <b>Namespace Management:</b> In JavaScript, it's easy to accidentally
          overwrite variables or functions with the same name, especially in
          large projects. Modules create their own scope, preventing naming
          collisions and keeping your global namespace clean.
        </li>
      </ul>
      <AdUnit />
      <h2>How Do JavaScript Modules Work?</h2>
      <p>
        JavaScript modules work by using the <code>import</code> and{" "}
        <code>export</code> statements to share code between files. Here’s how
        it works:
      </p>

      <h3>Exporting from a Module</h3>
      <p>
        To make code in a module available to other parts of your application,
        you use the <code>export</code> statement. You can export variables,
        functions, classes, or objects. Here’s a simple example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // mathUtils.js
  export function add(a, b) {
    return a + b;
  }

  export const PI = 3.14159;
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we have a module called <code>mathUtils.js</code> that
        exports a function <code>add</code> and a constant <code>PI</code>.
        Other files can import these exports and use them.
      </p>

      <h3>Importing a Module</h3>
      <p>
        To use code from a module in another file, you use the{" "}
        <code>import</code> statement. Here’s how you would import the
        <code>add</code> function and <code>PI</code> constant from our
        <code>mathUtils.js</code> module:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // main.js
  import { add, PI } from './mathUtils.js';

  console.log(add(2, 3)); // Outputs: 5
  console.log(PI);        // Outputs: 3.14159
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Let's take a closer look at the <code>import</code> statement above. You
        might have noticed the <code>from</code> keyword in the statement
        <code>
          import {"{"} add, PI {"}"} from './mathUtils.js';
        </code>
        .
      </p>
      <p>
        The <code>from</code> keyword is used to specify the location of the
        module you are importing from. In this case,{" "}
        <code>from './mathUtils.js'</code> tells JavaScript that the{" "}
        <code>add</code> function and <code>PI</code> constant should be
        imported from the <code>mathUtils.js</code> file. The path inside the
        quotes <code>'./mathUtils.js'</code> is relative to the current file.
        This means that JavaScript looks for the <code>mathUtils.js</code> file
        in the same directory as the current file (because of the{" "}
        <code>./</code> at the beginning).
      </p>
      <p>
        If the module were located in a different directory, you would adjust
        the path accordingly. For example,{" "}
        <code>from '../utils/mathUtils.js'</code> would look for the module in a
        parent directory's <code>utils</code> folder.
      </p>

      <h3>Default Exports</h3>
      <p>
        A module can also have a default export. Default exports are used when a
        module only exports a single value, such as a function or a class.
        Here’s an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // user.js
  export default function getUser() {
    return { name: 'John Doe', age: 30 };
  }
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this case, <code>getUser</code> is the default export of the
        <code>user.js</code> module. When importing a default export, you can
        name it whatever you like:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // main.js
  import getUser from './user.js';

  const user = getUser();
  console.log(user.name); // Outputs: John Doe
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Notice that we didn’t use curly braces <code>{}</code> when importing
        the default export. This is a key difference between named exports and
        default exports.
      </p>
      <AdUnit />
      <h3>Named Exports vs. Default Exports</h3>
      <p>
        It’s important to understand the difference between named exports and
        default exports:
      </p>
      <ul>
        <li>
          <b>Named Exports:</b> You can have multiple named exports in a module.
          These must be imported using the exact name and curly braces.
        </li>
        <li>
          <b>Default Exports:</b> A module can have only one default export.
          When importing, you don’t need to use curly braces, and you can give
          it any name you want.
        </li>
      </ul>

      <h2>Using Modules in Modern JavaScript Projects</h2>
      <p>
        In modern JavaScript development, using modules is standard practice.
        Most JavaScript frameworks and libraries (like React, Angular, and Vue)
        are built using modules, and tools like Webpack and Parcel are commonly
        used to bundle modules together for deployment.
      </p>
      <p>
        Modules are especially useful in large-scale projects where code needs
        to be organized, reusable, and easy to maintain. By breaking your
        application into modules, you can also take advantage of features like
        tree shaking (removing unused code) and lazy loading (loading code only
        when it’s needed), which can significantly improve performance.
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        JavaScript Modules are a powerful feature that helps you manage and
        organize your code, especially as your projects grow in complexity.
        Understanding how to use <code>import</code> and <code>export</code>{" "}
        statements, as well as the differences between named exports and default
        exports, is crucial for modern JavaScript development.
      </p>
      <p>
        As you continue building projects, practice using modules to separate
        your code into manageable pieces. This will not only make your code
        easier to work with but also help you adopt best practices that are
        widely used in the industry.
      </p>
      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/JavascriptVsECMAScript")}
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/Classes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Modules;

export const Classes = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to JavaScript Classes</h1>
      <p>
        Imagine you're building a toy car collection. Each toy car has the same
        basic parts: wheels, doors, and an engine, but the details like color
        and model can differ. In JavaScript, a **class** is like the blueprint
        for creating these toy cars. It defines the basic structure, and you can
        create different toy cars with specific details from this blueprint.
      </p>

      <h2>What Is a Class?</h2>
      <p>
        A **class** in JavaScript is a special kind of function that acts as a
        blueprint for creating objects. When you create an object using a class,
        you’re making something based on that blueprint, just like using a
        recipe to bake a cake or following a plan to build a toy car.
      </p>

      <h2>Why Use Classes?</h2>
      <p>
        Classes help you organize your code by grouping related data and actions
        together. For example, if you were coding a game, you might have a class
        for a character with properties like <code>name</code> and{" "}
        <code>health</code>, and actions like <code>attack()</code> or{" "}
        <code>defend()</code>.
      </p>

      <h2>Understanding the Syntax</h2>
      <p>
        Before we dive into examples, let's break down the basic syntax of a
        class in JavaScript:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  class ClassName {
    constructor(parameters) {
      this.property = value;
    }
    
    methodName() {
      // code for the method
    }
  }
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <ul>
        <li>
          <b>class ClassName:</b> This defines a new class. The name of the
          class (like <code>ClassName</code>) should usually start with a
          capital letter.
        </li>
        <li>
          <b>constructor(parameters):</b> The <code>constructor</code> method is
          a special method used to initialize objects created with the class.
          The <code>parameters</code> are values you pass in when creating a new
          object.
        </li>
        <li>
          <b>this.property = value:</b> The keyword <code>this</code> refers to
          the object created from the class. <code>this.property</code> sets a
          property of the object to a certain value.
        </li>
        <li>
          <b>methodName():</b> A method is a function that belongs to the class.
          It defines an action that objects created from the class can perform.
        </li>
      </ul>
      <AdUnit />
      <h2>Creating Your Own Class</h2>
      <p>
        Now that we’ve covered the basic syntax, let’s create a simple class.
        We’ll use the <code>class</code> keyword to define it.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // Define a class named "Animal"
  class Animal {
    // The constructor method is called when you create a new Animal
    constructor(name, sound) {
      this.name = name;  // Property: the name of the animal
      this.sound = sound; // Property: the sound the animal makes
    }

    // Method: this is an action the animal can perform
    makeSound() {
      console.log(\`\${this.name} says \${this.sound}\`);
    }
  }
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking It Down</h3>
      <p>Let’s go through this code step by step:</p>
      <ul>
        <li>
          <b>class Animal:</b> This line tells JavaScript that we’re creating a
          new class called <code>Animal</code>. It’s like saying, “I’m making a
          new blueprint called Animal.”
        </li>
        <li>
          <b>constructor(name, sound):</b> The <code>constructor</code> is a
          special method that gets called when we create a new animal. It’s like
          setting up the initial details of our toy car, like the color and
          model. Here, <code>name</code> and <code>sound</code> are the details
          (or properties) of our Animal.
        </li>
        <li>
          <b>this.name = name:</b> The keyword <code>this</code> refers to the
          specific animal object being created. <code>this.name</code> sets the
          name of our animal, similar to how you’d choose the color for your toy
          car.
        </li>
        <li>
          <b>makeSound():</b> This is a method, or action, that our Animal can
          perform. When we call <code>makeSound()</code>, it will log a message
          to the console telling us what sound the animal makes, just like
          making the toy car move forward.
        </li>
      </ul>

      <h2>Creating and Using an Object</h2>
      <p>
        Now, let’s use our <code>Animal</code> class to create a new animal:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // Create a new Animal object
  const dog = new Animal('Dog', 'Woof');

  // Call the makeSound method
  dog.makeSound();  // Output: "Dog says Woof"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Here’s what’s happening:</p>
      <ul>
        <li>
          <b>new Animal('Dog', 'Woof'):</b> This creates a new object based on
          the <code>Animal</code> class. The <code>constructor</code> method is
          called with 'Dog' as the name and 'Woof' as the sound, just like
          building a toy car with the specific color and model you chose.
        </li>
        <li>
          <b>dog.makeSound():</b> This calls the <code>makeSound()</code> method
          for our <code>dog</code> object, which logs "Dog says Woof" to the
          console, just like making your toy car move forward with the details
          you’ve set.
        </li>
      </ul>
      <AdUnit />
      <h2>Practice: Create Your Own Class</h2>
      <p>
        Now it’s your turn! Try creating a class for something else. It could be
        a <code>Car</code>, <code>Person</code>, or anything you like. Here’s a
        simple example to get you started:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // Define a class named "Car"
  class Car {
    constructor(make, model) {
      this.make = make;   // The make of the car (e.g., Toyota)
      this.model = model; // The model of the car (e.g., Corolla)
    }

    // Method: describes the car
    describe() {
      console.log(\`This car is a \${this.make} \${this.model}\`);
    }
  }

  // Create a new Car object
  const myCar = new Car('Toyota', 'Corolla');
  
  // Call the describe method
  myCar.describe();  // Output: "This car is a Toyota Corolla"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <p>
        Remember, classes are a powerful way to structure your code, especially
        as your projects get bigger and more complex. Start simple, and with
        practice, you'll be able to create more advanced classes and objects.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/Modules")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/prototypes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const Prototypes = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>What are Prototypes in JavaScript?</h1>
      <p>
        In JavaScript, every object has a prototype. A prototype is like a
        blueprint or a template that defines the properties and behavior of an
        object. Think of it like a recipe book that contains the instructions
        for making a certain type of cake.
      </p>
      <h2>The Prototype Chain</h2>
      <p>
        When you create an object in JavaScript, it automatically gets a
        prototype. This prototype is linked to another prototype, which is
        linked to another prototype, and so on. This creates a chain of
        prototypes, with each prototype inheriting properties and behavior from
        its parent prototype.
      </p>
      <h2>
        The <code>__proto__</code> Property
      </h2>
      <p>
        {" "}
        Every object in JavaScript has a <code>__proto__</code> property that
        points to its prototype. This property is like a secret ingredient that
        allows objects to inherit properties and behavior from their prototypes.
      </p>
      <h3>Creating a Prototype</h3>
      <p>
        You can create a prototype by defining a constructor function. A
        constructor function is like a recipe that creates a new object. For
        example:
      </p>
      <pre>
        <code>
          {`
function Cake(flavor, ingredients) {
  this.flavor = flavor;
  this.ingredients = ingredients;
}
          `}
        </code>
      </pre>
      <p>
        This constructor function creates a new <b>Cake</b> object with two
        properties:
        <b>flavor</b> and <b>ingredients</b>.
      </p>
      <h3>The prototype Property</h3>
      <p>
        {" "}
        Every constructor function has a <code>prototype</code> property that
        points to its prototype object. This prototype object contains the
        properties and behavior that will be inherited by objects created from
        the constructor function.
      </p>
      <h3>Adding Properties to the Prototype</h3>
      <p>
        {" "}
        You can add properties and methods to the prototype object using the
        <code>prototype</code> property. For example:
      </p>
      <pre>
        <code>
          {`
Cake.prototype.bake = function() {
  console.log("Baking the cake...");
};

Cake.prototype.decorate = function() {
  console.log("Decorating the cake...");
};
          `}
        </code>
      </pre>
      <p>
        This adds two methods to the <b>Cake</b> prototype: <b>bake</b> and{" "}
        <b>decorate</b>.
      </p>
      <h3>Inheriting Properties and Behavior</h3>
      <p>
        {" "}
        When you create a new object from the <b>Cake</b> constructor function,
        it automatically inherits the properties and behavior from the{" "}
        <b>Cake</b>
        prototype. For example:
      </p>
      <pre>
        <code>
          {`
const chocolateCake = new Cake("chocolate", ["flour", "sugar", "eggs"]);

chocolateCake.bake(); // "Baking the cake..."
chocolateCake.decorate(); // "Decorating the cake..."
          `}
        </code>
      </pre>
      <p>
        The <b>chocolateCake</b> object inherits the <b>bake</b> and{" "}
        <b>decorate</b>
        methods from the <b>Cake</b> prototype.
      </p>
      <h3>Prototype Inheritance</h3>
      <p>
        Prototype inheritance is like a family tree. When you create a new
        object from a constructor function, it inherits properties and behavior
        from its parent prototype. This creates a chain of prototypes, with each
        prototype inheriting from its parent.
      </p>
      <AdUnit />
      <h2>The Object.prototype</h2>
      <p>
        The <b>Object.prototype</b> is the root prototype of all objects in
        JavaScript. It contains the basic properties and behavior that are
        inherited by all objects.
      </p>
      <h3>Conclusion</h3>
      <p>
        Prototypes in JavaScript are a powerful tool for creating objects that
        share similar characteristics. By defining prototypes with properties
        and behavior, you can create objects that inherit from their parent
        prototypes. This creates a chain of prototypes, with each prototype
        inheriting from its parent.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/Classes")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/thisKeyWord")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ThisKeyWord = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>What is this in JavaScript?</h1>
      <p>
        {" "}
        In JavaScript, <code>this</code> is a special keyword that refers to the
        current object or context in which a function is being executed. Think
        of it like a pronoun that changes its meaning depending on the
        situation.
      </p>
      <h2>Imagine {`You're`} at a Party</h2>
      <p>
        {`Imagine you're at a party, and someone asks you to introduce yourself. You would say, "Hi, I'm [Your Name]." In this case, "I" refers to you, the person speaking.

`}{" "}
      </p>
      <p>
        {`Now, imagine you're at the same party, but this time, you're introducing your friend. You would say, "This is my friend, [Friend's Name]." In this case, "this" refers to your friend, the person you're introducing.

`}{" "}
      </p>
      <h2>
        How <code>this</code> Works in JavaScript
      </h2>
      <p>
        {" "}
        In JavaScript, <code>this</code> works in a similar way. When you call a
        function, <code>this</code> refers to the object that the function is a
        part of. Here are some examples:
      </p>
      <h2>Global Scope</h2>
      <p>
        When {`you're`} in the global scope (i.e., not inside a function),{" "}
        <code>this</code>
        refers to the global object, which is usually the <b>window</b> object
        in a web browser or the <b>global</b> object in a Node.js environment.
      </p>
      <pre>
        <code>
          {`
console.log(this); // window or global object
          `}
        </code>
      </pre>
      <AdUnit />
      <h2> Function Scope</h2>
      <p>
        When {`you're`} inside a function, <code>this</code> refers to the
        global object, unless the function is called as a method of an object.
      </p>
      <pre>
        <code>
          {`
function sayHello() {
  console.log(this); // window or global object
}


sayHello();
          
          `}
        </code>
      </pre>
      <h2>Object Scope</h2>
      <p>
        {" "}
        When you call a function as a method of an object, <code>
          this
        </code>{" "}
        refers to that object.
      </p>
      <pre>
        <code>
          {`
const person = {
  name: 'John',
  sayHello: function() {
    console.log(this); // person object
  }
};

person.sayHello();
          
          `}
        </code>
      </pre>
      <h2> Constructor Scope</h2>
      <p>
        When you use a function as a constructor (with the <code>new</code>{" "}
        keyword), <code>this</code> refers to the new object being created.
      </p>
      <pre>
        <code>
          {`
function Person(name) {
  this.name = name;
  console.log(this); // new Person object
}

const john = new Person('John');
          `}
        </code>
      </pre>
      <h2> Event Listener Scope</h2>
      <p>
        {" "}
        When you use a function as an event listener, <code>this</code> refers
        to the element that triggered the event.
      </p>
      <pre>
        <code>
          {`
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this); // button element
});
          `}
        </code>
      </pre>
      <h3>
        The <code>this</code> Keyword in Summary
      </h3>
      <p>
        In summary, <code>this</code> is a keyword in JavaScript that refers to
        the current object or context in which a function is being executed.{" "}
        {`Its
        meaning changes depending on the situation, just like how the pronoun
        "I" or "this" changes its meaning depending on who's speaking.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/prototypes")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/json")}>Next</button>
      </div>
    </div>
  );
};
