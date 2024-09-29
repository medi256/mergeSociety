import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding the 'this' Keyword in JavaScript",
  description:
    "Explore the concept of the 'this' keyword in JavaScript, its role in object context, and practical examples to enhance your understanding.",
  keywords: [
    "JavaScript",
    "this keyword",
    "object context",
    "JavaScript classes",
    "functions",
  ],

  openGraph: {
    type: "article",
    title: "Understanding the 'this' Keyword in JavaScript",
    description:
      "Explore the concept of the 'this' keyword in JavaScript, its role in object context, and practical examples to enhance your understanding.",
  },
};

const ThisKeyWord = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>
        Understanding the <code>this</code> Keyword in JavaScript
      </h1>
      <p>
        In our last lesson, we introduced the <code>this</code> keyword when
        discussing classes. You might have noticed that <code>this</code> was
        used to refer to properties of the object created from the class. But
        what exactly is <code>this</code> and why is it so important in
        JavaScript? Let's break it down.
      </p>

      <h2>
        What is the <code>this</code> Keyword?
      </h2>
      <p>
        The <code>this</code> keyword in JavaScript refers to the object that is
        currently executing the code. It gives you a way to access the
        properties and methods of the object that is running the current piece
        of code.
      </p>

      <p>
        Think of <code>this</code> as a personal reference for an object.
        Imagine you’re in a classroom, and the teacher says, "I want everyone to
        raise their hand." When you hear that, you don’t think about anyone
        else; you understand that “I” means you, and you raise your hand.
        Similarly, when JavaScript uses <code>this</code>, it’s like the code is
        saying, "I want this particular object to do something."
      </p>
      <h2>
        How <code>this</code> Works in a Class
      </h2>
      <p>
        Let’s revisit the class example from our previous lesson. We used the{" "}
        <code>this</code> keyword to assign values to properties in the{" "}
        <code>Animal</code> class. Here's the code again:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  class Animal {
    constructor(name, sound) {
      this.name = name;  // 'this.name' refers to the 'name' property of the object being created
      this.sound = sound; // 'this.sound' refers to the 'sound' property of the object being created
    }

    makeSound() {
      console.log(\`\${this.name} says \${this.sound}\`);
    }
  }

  const dog = new Animal('Dog', 'Woof');
  dog.makeSound();  // Output: "Dog says Woof"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>this.name</code> and <code>this.sound</code> are
        using the <code>this</code> keyword to refer to the specific object
        being created. When we create a new <code>Animal</code> object like{" "}
        <code>dog</code>, <code>this</code> inside the constructor refers to the{" "}
        <code>dog</code> object.
      </p>

      <h2>Breaking It Down Further</h2>
      <p>
        Let’s dive deeper with another analogy. Imagine you’re at a family
        gathering, and everyone has a name tag that says, "Hello, my name is
        ______." When you point to your own name tag, you’re referring to
        yourself. That’s what <code>this</code> does. It points to the current
        object, the one that’s wearing the name tag in this scenario.
      </p>

      <h3>Example:</h3>
      <p>
        Here’s a simpler example that doesn’t involve classes. Let’s say we have
        an object representing a person:
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
        In this example, when we call <code>person.greet()</code>, the{" "}
        <code>this</code> keyword inside the <code>greet</code> method refers to
        the <code>person</code> object. It’s like saying, “Hello, my name is on
        this name tag,” and the name tag belongs to <code>Alice</code>.
      </p>

      <h2>
        Common Pitfall: Losing <code>this</code> Context
      </h2>
      <p>
        Sometimes, the <code>this</code> keyword can get tricky, especially when
        used inside different functions or methods. A common issue is losing the{" "}
        <code>this</code> context. Here’s an example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const person = {
    name: 'Bob',
    greet() {
      console.log('Hello, my name is ' + this.name);
    }
  };

  const greetFunction = person.greet;
  greetFunction();  // Output: "Hello, my name is undefined"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Why does it say "undefined"? When we assigned <code>greetFunction</code>{" "}
        to <code>person.greet</code>, we lost the original context of{" "}
        <code>this</code>. Now <code>this.name</code> doesn’t refer to{" "}
        <code>Bob</code> anymore because <code>this</code> has lost its
        connection to the <code>person</code> object.
      </p>
      <AdUnit />
      <h2>
        Solving the <code>this</code> Problem
      </h2>
      <p>
        There are ways to ensure <code>this</code> behaves as expected:
      </p>
      <ul>
        <li>
          <b>
            Using <code>bind()</code>:
          </b>{" "}
          You can explicitly bind <code>this</code> to a specific object using
          the <code>bind()</code> method.
        </li>
        <li>
          <b>Using arrow functions:</b> Arrow functions don’t have their own{" "}
          <code>this</code>, so they inherit <code>this</code> from the
          surrounding code.
        </li>
      </ul>

      <h3>
        Example Using <code>bind()</code>:
      </h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const person = {
    name: 'Charlie',
    greet() {
      console.log('Hello, my name is ' + this.name);
    }
  };

  const greetFunction = person.greet.bind(person);
  greetFunction();  // Output: "Hello, my name is Charlie"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By using <code>bind()</code>, we ensured that <code>this</code> still
        refers to <code>person</code> when calling <code>greetFunction()</code>.
      </p>

      <h3>Example Using Arrow Functions:</h3>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const person = {
    name: 'Dana',
    greet: () => {
      console.log('Hello, my name is ' + this.name);
    }
  };

  person.greet();  // Output: "Hello, my name is undefined"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, since arrow functions don’t have their own{" "}
        <code>this</code>, they inherit <code>this</code> from the parent scope.
        However, because our arrow function is in a global context here,{" "}
        <code>this.name</code> is <code>undefined</code>. Arrow functions are
        typically more useful when nested inside other functions or methods
        where <code>this</code> is inherited from the surrounding code.
      </p>
      <AdUnit />
      <h2>
        Practice: Using <code>this</code> in Your Own Code
      </h2>
      <p>
        Try creating an object that represents something from your daily life,
        like a <code>book</code> or a <code>car</code>. Use the{" "}
        <code>this</code> keyword to refer to properties within that object and
        create methods that can perform actions using <code>this</code>.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const book = {
    title: 'JavaScript for Beginners',
    author: 'John Doe',
    describe() {
      console.log('The book titled "' + this.title + '" is written by ' + this.author);
    }
  };

  book.describe();  // Output: "The book titled "JavaScript for Beginners" is written by John Doe"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        By practicing with different objects and methods, you'll get more
        comfortable using <code>this</code> in your JavaScript code. Remember,{" "}
        <code>this</code> is all about context—it always refers to the object
        that is executing the current function or method.
      </p>

      <Button whereToGo={"prototypes"} />
    </div>
  );
};

export default ThisKeyWord;
