import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Introduction to JavaScript Classes",
  description:
    "Learn the fundamentals of JavaScript classes, their syntax, and how to create and use objects. Understand the importance of modular programming and how classes help organize code.",
  keywords: [
    "JavaScript",
    "Classes",
    "Object-Oriented Programming",
    "JavaScript Objects",
    "Code Organization",
    "Programming Concepts",
    "Web Development",
  ],

  openGraph: {
    title: "Mastering JavaScript Classes",
    description:
      "Explore JavaScript classes, how to create them, and their role in object-oriented programming. Learn with examples and practical exercises.",

    type: "article",
  },
};

const Classes = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"this-keyword"} />
    </div>
  );
};

export default Classes;
