
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Prototypes in JavaScript",
  description:
    "Dive deep into the concept of prototypes in JavaScript. Learn how prototypes enable inheritance, reduce code duplication, and see practical examples of their use.",
  keywords: [
    "JavaScript",
    "prototypes",
    "inheritance",
    "JavaScript objects",
    "constructor functions",
  ],

  openGraph: {
    type: "article",
    title: "Understanding Prototypes in JavaScript",
    description:
      "Dive deep into the concept of prototypes in JavaScript. Learn how prototypes enable inheritance, reduce code duplication, and see practical examples of their use.",
  },
};

const Prototypes = () => {
  return (
    <div className="lesson-container">
      
      <h1>Understanding Prototypes in JavaScript</h1>
      <p>
        JavaScript is often described as a prototype-based language. But what
        does that really mean? In this lesson, we'll break down the concept of
        prototypes, explain how they work, and use analogies to make the idea
        clear and relatable.
      </p>

      <h2>What Are Prototypes?</h2>
      <p>
        A prototype is like a blueprint or a set of instructions that objects in
        JavaScript can follow. Every object in JavaScript has a prototype, which
        is another object that the first object can inherit properties and
        methods from. This allows us to share common functionalities across
        multiple objects without duplicating code.
      </p>

      <h3>Analogy: A Family Tree</h3>
      <p>
        Imagine a family tree. You inherit certain traits from your parents,
        like eye color or hair color. These traits weren’t defined by you but
        were passed down from your parents. In the same way, an object in
        JavaScript can inherit properties and methods from its prototype.
      </p>

      <p>
        Just like in a family tree, where you can trace traits back to your
        grandparents and beyond, in JavaScript, you can trace properties and
        methods back through a chain of prototypes, known as the prototype
        chain.
      </p>

      <h2>Prototypes in Action</h2>
      <p>
        Let’s see how prototypes work with an example. First, we'll create a
        simple object:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const person = {
    name: 'Alice',
    greet() {
      console.log('Hello, my name is ' + this.name);
    }
  };

  person.greet();  // Output: "Hello, my name is Alice"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>person</code> is an object with a property{" "}
        <code>name</code> and a method <code>greet</code>. Now, what if we want
        to create another object that shares the same greet method but has a
        different name? We can use prototypes to do this.
      </p>

      <h3>Creating a New Object with a Prototype</h3>
      <p>
        We can create a new object and link it to the <code>person</code> object
        using prototypes:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const anotherPerson = Object.create(person);
  anotherPerson.name = 'Bob';

  anotherPerson.greet();  // Output: "Hello, my name is Bob"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Here, we created <code>anotherPerson</code> using{" "}
        <code>Object.create(person)</code>. This means that{" "}
        <code>anotherPerson</code> inherits from the <code>person</code> object.
        Even though we didn’t explicitly define the <code>greet</code> method in{" "}
        <code>anotherPerson</code>, it still has access to it because it’s
        inheriting from <code>person</code>.
      </p>
      
      <h3>Understanding the Prototype Chain</h3>
      <p>
        The prototype chain is like a series of links. When you try to access a
        property or method on an object, JavaScript first looks at the object
        itself. If it doesn’t find it there, it moves up the prototype chain to
        see if the property or method exists in the object’s prototype.
      </p>

      <p>
        For example, if we try to access a method that doesn’t exist on{" "}
        <code>anotherPerson</code>:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  anotherPerson.sayGoodbye = function() {
    console.log('Goodbye from ' + this.name);
  };

  anotherPerson.sayGoodbye();  // Output: "Goodbye from Bob"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Now <code>anotherPerson</code> has a method called{" "}
        <code>sayGoodbye</code>. If we try to call this method on{" "}
        <code>person</code>, it won't work because it wasn’t defined in the{" "}
        <code>person</code> object or its prototype chain.
      </p>

      <h2>Using Prototypes to Share Methods</h2>
      <p>
        Prototypes are powerful because they allow us to share methods and
        properties across multiple objects without having to define them
        multiple times. This helps keep our code DRY (Don’t Repeat Yourself).
      </p>

      <h3>Example: Creating Multiple Objects with Shared Methods</h3>
      <p>
        Let’s say we’re building a game and we want to create multiple player
        objects. All players should have a <code>greet</code> method, but we
        don’t want to define it for each player individually. We can use
        prototypes:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  function Player(name) {
    this.name = name;
  }

  Player.prototype.greet = function() {
    console.log('Hello, I am player ' + this.name);
  };

  const player1 = new Player('Alice');
  const player2 = new Player('Bob');

  player1.greet();  // Output: "Hello, I am player Alice"
  player2.greet();  // Output: "Hello, I am player Bob"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we used a constructor function <code>Player</code> to
        create player objects. We then added the <code>greet</code> method to{" "}
        <code>Player.prototype</code>, so it’s shared across all instances of{" "}
        <code>Player</code>. Both <code>player1</code> and <code>player2</code>{" "}
        can access the <code>greet</code> method without it being redefined for
        each one.
      </p>

      <h2>
        Understanding <code>Object.prototype</code>
      </h2>
      <p>
        All JavaScript objects ultimately inherit from{" "}
        <code>Object.prototype</code>. This is the topmost object in the
        prototype chain, and it contains common methods like{" "}
        <code>toString()</code> and <code>hasOwnProperty()</code>. When you
        create a new object, it automatically inherits from{" "}
        <code>Object.prototype</code> unless you explicitly change the prototype
        chain.
      </p>

      <p>For instance, if you create a simple object:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const simpleObject = {};
  console.log(simpleObject.toString());  // Output: "[object Object]"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Even though we didn’t define the <code>toString()</code> method in{" "}
        <code>simpleObject</code>, it’s still available because it’s inherited
        from <code>Object.prototype</code>.
      </p>

      <h2>Why Prototypes Matter</h2>
      <p>
        Understanding prototypes is crucial because it gives you insight into
        how JavaScript handles inheritance and how objects share properties and
        methods. Prototypes allow for more efficient memory usage because
        methods and properties don’t need to be duplicated across every instance
        of an object.
      </p>
      
      <h2>Practice: Creating Your Own Prototypes</h2>
      <p>
        Try creating your own prototypes by defining a constructor function and
        adding methods to its prototype. For example, create a <code>Car</code>{" "}
        constructor with properties like <code>make</code> and{" "}
        <code>model</code>, and add methods to <code>Car.prototype</code> for
        actions like <code>start</code> and <code>stop</code>.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  Car.prototype.start = function() {
    console.log(this.make + ' ' + this.model + ' is starting.');
  };

  const myCar = new Car('Toyota', 'Corolla');
  myCar.start();  // Output: "Toyota Corolla is starting."
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By practicing with prototypes, you'll gain a deeper understanding of how
        inheritance works in JavaScript and how to efficiently manage shared
        functionality across multiple objects.
      </p>

      <Button whereToGo={"json"} />
    </div>
  );
};

export default Prototypes;
