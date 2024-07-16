import AdUnit from "../AdUnit";

const Modules = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1> What are JavaScript Modules?</h1>
      <p>
        In JavaScript, a module is a file that contains code to perform a
        specific task. A module can contain variables, functions, classes, and
        other JavaScript constructs. Modules are used to organize code in a way
        that makes it reusable and easy to maintain.
      </p>
      <h2>Types of Modules</h2>
      <p>There are two types of modules in JavaScript:</p>
      <ol>
        <li>
          <b> ES6 Modules</b>: Also known as ECMAScript 2015 modules, these are
          the standard way of creating modules in JavaScript. They use the
          <code>import</code> and <code>export</code> keywords to define and use
          modules.
        </li>
        <li>
          <b>CommonJS Modules</b>: These are an older way of creating modules in
          JavaScript, used in Node.js and other environments. They use the
          <code>module.exports</code> and <code>require</code> functions to
          define and use modules.
        </li>
      </ol>
      <h2>ES6 Modules</h2>
      <p>
        ES6 modules are the standard way of creating modules in JavaScript. They
        use the <code>import</code> and <code>export</code> keywords to define
        and use modules.
      </p>
      <h3>Exporting Module Features</h3>
      <p>
        To make a {`module's`} features available to other scripts, you need to
        export them using the export keyword. There are two types of exports:
        named exports and default exports.
      </p>
      <h2>Named Exports</h2>
      <p>
        Named exports allow you to export multiple features from a module. You
        can export variables, functions, or classes using the{" "}
        <code>export</code> keyword followed by the name of the feature.
      </p>
      <pre>
        <code>
          {`
// math.js


export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
          `}
        </code>
      </pre>
      <h3>Default Exports</h3>
      <p>
        {" "}
        Default exports allow you to export a single feature from a module. You
        can export a variable, function, or class using the{" "}
        <code>export default</code>
        keyword.
      </p>
      <pre>
        <code>
          {`
// greet.js


export default function greet(name) {
  return \`Hello, \${name}!\`;
}
          `}
        </code>
      </pre>
      <h2>Importing Module Features</h2>
      <p>
        To use a {`module's`} features in another script, you need to import
        them using the <code>import</code> keyword.
      </p>
      <h3>Importing Named Exports</h3>
      <p>
        {" "}
        You can import named exports using the <code>import</code> keyword
        followed by the name of the feature.
      </p>
      <pre>
        <code>
          {`
// main.js


import { add, subtract } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
          
          `}
        </code>
      </pre>
      <h3>Importing Default Exports</h3>
      <p>
        {" "}
        You can import default exports using the <code>import</code> keyword
        followed by the name of the module.
      </p>
      <pre>
        <code>
          {`
// main.js


import greet from './greet.js';

console.log(greet('John')); // Hello, John!
          `}
        </code>
      </pre>
      <h3>Importing Multiple Features</h3>
      <p>
        You can import multiple features from a module using the{" "}
        <code>import</code> keyword followed by the names of the features.
      </p>
      <pre>
        <code>
          {`
// main.js


import { add, subtract, multiply } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 5)); // 20
          
          `}
        </code>
      </pre>
      <h3>Importing All Features</h3>
      <p>
        {" "}
        You can import all features from a module using the import * as syntax.
      </p>
      <pre>
        <code>
          {`
// main.js


import * as math from './math.js';

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
console.log(math.multiply(4, 5)); // 20
          `}
        </code>
      </pre>
      <h3>Module Syntax</h3>
      <p>Here is an example of a module that exports multiple features:</p>
      <pre>
        <code>
          {`
// math.js


export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}
          `}
        </code>
      </pre>
      <p>
        And here is an example of a script that imports and uses the module:
      </p>
      <pre>
        <code>
          {`
// main.js


import { add, subtract, multiply } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 5)); // 20
          `}
        </code>
      </pre>
      <AdUnit />
      <h2>CommonJS Modules</h2>
      <p>
        CommonJS modules are an older way of creating modules in JavaScript,
        used in Node.js and other environments. They use the{" "}
        <code>module.exports</code> and
        <code>require</code> functions to define and use modules.
      </p>
      <h3>Defining a CommonJS Module</h3>
      <p>
        {" "}
        To define a CommonJS module, you need to assign the {`module's`}{" "}
        features to the <code>module.exports</code> object.
      </p>
      <pre>
        <code>
          {`
// math.js


module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};
          `}
        </code>
      </pre>
      <h3>Using a CommonJS Module</h3>
      <p>
        {" "}
        To use a CommonJS module, you need to require it using the require
        function.
      </p>
      <pre>
        <code>
          {`
// main.js
const math = require('./math');

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
console.log(math.multiply(4, 5)); // 20
          `}
        </code>
      </pre>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/BOMApplication")}>
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
      <h1>What are Classes in JavaScript?</h1>
      <p>
        {" "}
        Imagine {`you're`} building a toy box. You want to create a bunch of
        toys that are similar, but each one has its own special features.{" "}
        {`That's`}
        kind of like what classes do in JavaScript. A class is like a blueprint
        or a template that helps you create multiple objects that share similar
        characteristics.
      </p>
      <h2>Declaring a Class</h2>
      <p>
        To create a class, you use the <code>class</code> keyword followed by
        the name of the class. For example:
      </p>
      <pre>
        <code>
          {`
class Toy {
  // class body
}
          `}
        </code>
      </pre>
      <p>
        Think of the class body as the inside of the toy box. This is where you
        define the characteristics of the toys that will be created from this
        class.
      </p>
      <h2>Class Properties</h2>
      <p>
        Properties are like the features of the toys. For example, a toy car
        might have a color, a shape, and a size. You can define these properties
        inside the class body using the <code>this</code> keyword. For example:
      </p>
      <pre>
        <code>
          {`
class Toy {
  constructor(color, shape, size) {
    this.color = color;
    this.shape = shape;
    this.size = size;
  }
}
          `}
        </code>
      </pre>
      <p>
        The <code>constructor</code> function is like a special set of
        instructions that gets called when you create a new toy from the class.
        It helps set up the properties of the toy.
      </p>
      <h2>Class Methods</h2>
      <p>
        {" "}
        Methods are like the actions that the toys can perform. For example, a
        toy car might be able to move or make a sound. You can define these
        methods inside the class body using the <code>this</code> keyword. For
        example:
      </p>
      <pre>
        <code>
          {`
class Toy {
  constructor(color, shape, size) {
    this.color = color;
    this.shape = shape;
    this.size = size;
  }

  move() {
    console.log("Vroom!");
  }

  makeSound() {
    console.log("Beep beep!");
  }
}
          `}
        </code>
      </pre>
      <h3>Creating Objects from a Class</h3>
      <p>
        {" "}
        To create a new toy from the class, you use the <code>new</code> keyword
        followed by the class name. For example:
      </p>
      <pre>
        <code>
          {`
const myToyCar = new Toy("red", "car", "small");
          `}
        </code>
      </pre>
      <p>
        This creates a new toy car object with the properties{" "}
        <b>
          {" "}
          {`color: "red",
        shape: "car",`}
        </b>{" "}
        and <b>{`size: "small"`}</b>.
      </p>
      <h2>Accessing Class Properties and Methods</h2>
      <p>
        {" "}
        You can access the properties and methods of the toy car object using
        the dot notation. For example:
      </p>
      <pre>
        <code>
          {`
console.log(myToyCar.color); // "red"
myToyCar.move(); // "Vroom!"
myToyCar.makeSound(); // "Beep beep!"
          `}
        </code>
      </pre>
      <AdUnit />
      <h2>Inheritance</h2>
      <p>
        {" "}
        Inheritance is like creating a new toy box {`that's`} similar to an
        existing one, but with some extra features. You can create a new class
        that inherits the properties and methods of an existing class. For
        example:
      </p>
      <pre>
        <code>
          {`
class ElectricToy extends Toy {
  constructor(color, shape, size, batteryLife) {
    super(color, shape, size);
    this.batteryLife = batteryLife;
  }

  recharge() {
    console.log("Recharging...");
  }
}
          `}
        </code>
      </pre>
      <p>
        {" "}
        The <b>ElectricToy</b> class inherits the properties and methods of the
        Toy class, but adds its own <b>batteryLife</b> property and{" "}
        <b>recharge</b>
        method.
      </p>
      <h3> Conclusion</h3>
      <p>
        {" "}
        Classes in JavaScript are a powerful tool for creating objects that
        share similar characteristics. By defining classes with properties and
        methods, you can create objects that can be used in your code.
        Inheritance allows you to create a hierarchy of classes that can inherit
        properties and behavior from each other.
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
