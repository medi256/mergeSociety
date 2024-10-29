import Button from "@/app/button";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understand JavaScript Operators",
  description:
    "An introduction to JavaScript operators, including arithmetic, comparison, logical, and assignment operators, and how they work.",
  category: "JavaScript Tutorials",
  keywords: [
    "JavaScript",
    "Operators",
    "Arithmetic Operators",
    "Comparison Operators",
    "Logical Operators",
    "Assignment Operators",
    "Programming",
    "Coding",
  ],
  openGraph: {
    title: "Mastering JavaScript Operators",
    description:
      "Learn about the different types of operators in JavaScript and how they can be used to manipulate data and control program flow.",
  },
};

const JavaScriptOperatorsLesson = () => {
  return (
    <div className="lesson-container">
      <h1>Understand JavaScript Operators</h1>

      <section>
        <h2>What are Operators in JavaScript?</h2>
        <p>
          Imagine you're in a kitchen. You have ingredients (these are like your
          data in JavaScript), and you want to do things with them. Operators
          are like the kitchen tools that help you work with these ingredients.
        </p>
        <p>
          In JavaScript, operators are special symbols or keywords that tell the
          computer to perform specific actions with our data. They're like the
          magic wands of coding!
        </p>
        <p>
          For example, just like you use a knife to cut vegetables or a spoon to
          mix ingredients, in JavaScript, you use operators to combine numbers,
          compare values, or assign data to variables. These operators are the
          basic tools that allow you to manipulate and work with information in
          your code.
        </p>
      </section>

      <section>
        <h2>Types of Operators We'll Learn</h2>
        <ul>
          <li>Arithmetic Operators: For math stuff!</li>
          <li>Comparison Operators: To compare things</li>
          <li>Logical Operators: For making decisions</li>
          <li>Assignment Operators: To give values to things</li>
        </ul>
        <p>
          Don't worry if this sounds complicated. We'll take it step by step,
          and soon you'll be using these operators like a pro!
        </p>
        <p>
          Each type of operator serves a different purpose, just like different
          kitchen tools. Arithmetic operators are like your measuring cups and
          scales, helping you with numbers. Comparison operators are like your
          taste tests, helping you decide if something is more, less, or just
          right. Logical operators are like your recipe instructions, helping
          you make decisions based on multiple factors. And assignment operators
          are like your storage containers, helping you put values into
          variables for later use.
        </p>
      </section>

      <section>
        <h2>1. Arithmetic Operators: Let's Do Some Math!</h2>
        <p>
          Arithmetic operators are like the basic calculator functions. They
          help us do math in our code. These are probably the most familiar
          operators because we use them in everyday math.
        </p>

        <h3>The Addition Operator (+)</h3>
        <p>
          This is probably the easiest one. It adds things together! In real
          life, it's like combining items. For example, if you have 3 apples and
          someone gives you 2 more, you now have 5 apples in total.
        </p>
        <p>
          In JavaScript, the addition operator is represented by the plus sign
          (+). Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let apples = 5;  // This creates a variable named 'apples' and gives it a value of 5
let oranges = 3; // This creates another variable named 'oranges' with a value of 3

// Now, let's add them together
let totalFruit = apples + oranges;

// This will print the result to the console (a tool developers use to see output)
console.log("Total fruit:", totalFruit); // Output: Total fruit: 8

// You can also add more than two numbers:
let bananas = 2;
let allFruit = apples + oranges + bananas;
console.log("All fruit:", allFruit); // Output: All fruit: 10

// The addition operator also works with decimal numbers:
let money = 10.50 + 5.25;
console.log("Total money:", money); // Output: Total money: 15.75
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          As you can see, the addition operator is versatile. It can add whole
          numbers, decimal numbers, and even the values stored in variables.
          This is super useful when you need to calculate totals in your
          programs, like summing up scores in a game or calculating the total
          cost of items in a shopping cart.
        </p>

        <h3>The Subtraction Operator (-)</h3>
        <p>
          This one takes things away. In real life, it's like removing items
          from a group. For instance, if you have 10 candies and you eat 4,
          you're left with 6 candies.
        </p>
        <p>
          In JavaScript, the subtraction operator is represented by the minus
          sign (-). Here's how you can use it:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let totalCandies = 10;    // Start with 10 candies
let eatenCandies = 4;     // You've eaten 4 candies

// Let's calculate how many are left
let remainingCandies = totalCandies - eatenCandies;

console.log("Candies left:", remainingCandies); // Output: Candies left: 6

// You can also subtract decimal numbers:
let wallet = 20.50;
let expense = 15.75;
let moneyLeft = wallet - expense;
console.log("Money left:", moneyLeft); // Output: Money left: 4.75

// Be careful! Subtracting a larger number from a smaller one gives a negative result:
let small = 5;
let big = 10;
let result = small - big;
console.log("Result:", result); // Output: Result: -5
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The subtraction operator is crucial for many types of calculations in
          programming. You might use it to calculate the remaining lives in a
          game, the balance in a bank account after a withdrawal, or the time
          left until a deadline.
        </p>

        <h3>The Multiplication Operator (*)</h3>
        <p>
          Use this when you want to multiply numbers. In everyday life,
          multiplication is like repeated addition. For example, if you have 3
          bags of apples, and each bag contains 4 apples, you have 3 * 4 = 12
          apples in total.
        </p>
        <p>
          In JavaScript, we use the asterisk (*) for multiplication. Here's how
          it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let pricePerToy = 5;    // Each toy costs $5
let numberOfToys = 3;   // We're buying 3 toys

// Let's calculate the total cost
let totalCost = pricePerToy * numberOfToys;

console.log("Total cost:", totalCost); // Output: Total cost: 15

// Multiplication also works with decimal numbers:
let length = 2.5;  // 2.5 meters
let width = 3.2;   // 3.2 meters
let area = length * width;
console.log("Area:", area); // Output: Area: 8

// You can multiply more than two numbers:
let x = 2;
let y = 3;
let z = 4;
let product = x * y * z;
console.log("Product:", product); // Output: Product: 24
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Multiplication is incredibly useful in programming. You might use it
          to calculate the total price of multiple items, determine the area of
          a rectangle, or figure out compound interest in a financial
          application.
        </p>

        <h3>The Division Operator (/)</h3>
        <p>
          This splits numbers into equal parts. In real life, it's like sharing
          a pizza equally among friends. If you have 8 slices of pizza and 4
          friends, each friend gets 8 / 4 = 2 slices.
        </p>
        <p>
          In JavaScript, we use the forward slash (/) for division. Here's how
          you can use it:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let totalPizza = 8;     // We have 8 slices of pizza
let numberOfFriends = 4;  // We're sharing among 4 friends

// Let's calculate how many slices each friend gets
let slicesPerFriend = totalPizza / numberOfFriends;

console.log("Slices per friend:", slicesPerFriend); // Output: Slices per friend: 2

// Division can result in decimal numbers:
let money = 10;
let people = 3;
let sharePerPerson = money / people;
console.log("Each person's share:", sharePerPerson); // Output: Each person's share: 3.3333...

// Be careful! Dividing by zero is not allowed and will give you an error:
let a = 5;
let b = 0;
// let result = a / b;  // This would cause an error if uncommented

// Dividing a smaller number by a larger one gives a decimal less than 1:
let small = 1;
let big = 2;
let fraction = small / big;
console.log("Fraction:", fraction); // Output: Fraction: 0.5
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Division is essential in many programming scenarios. You might use it
          to calculate averages, determine the percentage of completed tasks, or
          split a bill among friends in a restaurant app.
        </p>

        <p>
          These arithmetic operators are just the beginning of your JavaScript
          journey! As you practice and become more comfortable with them, you'll
          see how they can be combined to perform more complex calculations.
          Remember, the key to mastering these concepts is practice and
          experimentation. Don't be afraid to try out different combinations and
          see what happens!
        </p>
      </section>

      <section>
        <h2>What's Coming Next?</h2>
        <p>
          Now that you've got a solid grasp of arithmetic operators, get ready
          to learn about:
        </p>
        <ul>
          <li>
            Comparison Operators: These will help you compare values, like
            checking if you have enough money to buy a toy.
          </li>
          <li>
            Logical Operators: These are for making decisions in your code, like
            "If I have enough money AND the store is open, I'll buy the toy."
          </li>
          <li>
            Assignment Operators: These are handy shortcuts for changing values,
            like quickly adding points to your score in a game.
          </li>
        </ul>
        <p>
          Each new set of operators will build on what you've learned, making
          you more and more powerful in the world of JavaScript!
        </p>
      </section>

      <section>
        <h2>Practice Time!</h2>
        <p>
          The best way to learn is by doing. Try creating your own examples
          using these operators. Here are some ideas to get you started:
        </p>
        <ul>
          <li>
            Calculate how much money you'll have left after buying some treats.
          </li>
          <li>Figure out how many days are left until your next birthday.</li>
          <li>
            Determine how many stickers each of your friends will get if you
            share your sticker collection equally.
          </li>
          <li>
            Calculate the area of your room (length * width) and then figure out
            how many small rugs (each 2 square meters) would fit in it.
          </li>
        </ul>
        <p>
          Remember, every great programmer started where you are now. The more
          you practice, the better you'll get. Don't worry if you make mistakes
          – they're a normal part of learning. Keep experimenting and have fun
          with it!
        </p>
        <Button whereToGo={"comparison-operators"} />
      </section>
    </div>
  );
};

export default JavaScriptOperatorsLesson;
