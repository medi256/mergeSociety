import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Comparison Operators: Let's Compare Things!",
  description:
    "Explore comparison operators in JavaScript, including equality, inequality, greater than, less than, and more, and learn how to use them for decision-making in your code.",
  category: "JavaScript Tutorials",
  keywords: [
    "JavaScript",
    "Comparison Operators",
    "Equality",
    "Inequality",
    "Greater Than",
    "Less Than",
    "Programming",
    "Coding",
    "Conditionals",
  ],
  openGraph: {
    title: "Mastering JavaScript Comparison Operators",
    description:
      "Learn how comparison operators in JavaScript help you compare values and make decisions in your code.",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "JavaScript Comparison Operators: A Comprehensive Guide",
    description:
      "A detailed tutorial on JavaScript comparison operators, their usage, and their role in creating conditional statements.",
    keywords:
      "JavaScript, Comparison Operators, Equality, Inequality, Greater Than, Less Than, Programming, Coding, Conditionals",
    articleSection: "JavaScript Tutorials",
    wordCount: 1800,
  },
};

const JavaScriptOperatorsLesson = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <section>
        <h1>2. Comparison Operators: Let's Compare Things!</h1>
        <p>
          Now that we've learned how to do math with arithmetic operators, let's
          explore comparison operators. These are like the judges in a contest -
          they help us compare values and decide if something is equal, greater
          than, or less than something else.
        </p>
        <p>
          In everyday life, we make comparisons all the time. Is this apple
          bigger than that one? Do I have enough money to buy this toy? Am I
          older or younger than my friend? Comparison operators help us make
          these kinds of decisions in our code.
        </p>

        <h3>The Equality Operator (==)</h3>
        <p>
          This operator checks if two values are equal. It's like asking, "Are
          these two things the same?"
        </p>
        <p>
          In JavaScript, we use two equal signs (==) for the equality operator.
          Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let myAge = 12;
let friendAge = 12;

// Let's check if the ages are the same
let sameAge = myAge == friendAge;

console.log("Are we the same age?", sameAge); // Output: Are we the same age? true

// The equality operator returns true if the values are equal, and false if they're not
let myFavoriteNumber = 7;
let luckyNumber = 13;

let sameFavoriteNumber = myFavoriteNumber == luckyNumber;

console.log("Do we have the same favorite number?", sameFavoriteNumber); 
// Output: Do we have the same favorite number? false

// Be careful! The equality operator can sometimes give unexpected results with different types
console.log("5 == '5':", 5 == '5'); // Output: 5 == '5': true
// This is true because == converts the string '5' to a number before comparing
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The equality operator is super useful when you need to check if two
          values are the same. You might use it to verify a user's password,
          check if a game score has reached a certain level, or see if a
          student's grade matches a particular mark.
        </p>

        <h3>The Strict Equality Operator (===)</h3>
        <p>
          This operator is like the equality operator's stricter sibling. It not
          only checks if the values are equal, but also if they're of the same
          type (like both being numbers, or both being strings).
        </p>
        <p>
          In JavaScript, we use three equal signs (===) for the strict equality
          operator. Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let num = 5;
let strNum = '5';

console.log("num == strNum:", num == strNum);   // Output: num == strNum: true
console.log("num === strNum:", num === strNum); // Output: num === strNum: false

// The strict equality operator checks both value and type
let x = 10;
let y = 10;
let z = '10';

console.log("x === y:", x === y); // Output: x === y: true
console.log("x === z:", x === z); // Output: x === z: false

// This is particularly useful when you need to be sure about both value and type
let isComplete = true;
let completeString = 'true';

console.log("isComplete === true:", isComplete === true);           // Output: isComplete === true: true
console.log("completeString === true:", completeString === true);   // Output: completeString === true: false
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The strict equality operator is very important in JavaScript because
          it helps prevent bugs that can occur when different types of data are
          unexpectedly treated as equal. It's often recommended to use ===
          instead of == in most situations to avoid confusion.
        </p>
        <AdUnit />
        <h3>The Inequality Operator (!=)</h3>
        <p>
          This operator checks if two values are not equal. It's like asking,
          "Are these two things different?"
        </p>
        <p>
          In JavaScript, we use an exclamation mark followed by an equal sign
          (!=) for the inequality operator. Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let myFavoriteColor = 'blue';
let yourFavoriteColor = 'red';

// Let's check if our favorite colors are different
let differentColors = myFavoriteColor != yourFavoriteColor;

console.log("Do we have different favorite colors?", differentColors); 
// Output: Do we have different favorite colors? true

// The inequality operator returns true if the values are not equal, and false if they are
let x = 10;
let y = 10;
let z = 15;

console.log("Is x different from y?", x != y); // Output: Is x different from y? false
console.log("Is x different from z?", x != z); // Output: Is x different from z? true

// Like the equality operator, be careful with different types
console.log("5 != '5':", 5 != '5'); // Output: 5 != '5': false
// This is false because != converts the string '5' to a number before comparing
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The inequality operator is useful when you need to check if two values
          are not the same. You might use it to verify if a user's input is
          different from an expected value, or to check if a game state has
          changed.
        </p>
        <AdUnit />
        <h3>The Greater Than {` (>) `} and Less Than (&lt;) Operators</h3>
        <p>
          These operators help us compare numbers to see which one is bigger or
          smaller. It's like having a balance scale to weigh two items.
        </p>
        <p>
          In JavaScript, we use {` > `} for "greater than" and &lt; for "less
          than". Here's how they work:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let myScore = 85;
let passingScore = 70;

// Let's check if my score is greater than the passing score
let passed = myScore > passingScore;

console.log("Did I pass the test?", passed); // Output: Did I pass the test? true

// We can also check if one number is less than another
let myMoney = 10;
let toyPrice = 15;

let canAfford = myMoney > toyPrice;
console.log("Can I afford the toy?", canAfford); // Output: Can I afford the toy? false

let needMoreMoney = myMoney < toyPrice;
console.log("Do I need more money?", needMoreMoney); // Output: Do I need more money? true

// These operators work with decimal numbers too
let temperature = 32.5;
let freezingPoint = 32.0;

console.log("Is it above freezing?", temperature > freezingPoint); // Output: Is it above freezing? true
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The greater than and less than operators are incredibly useful in
          programming. You might use them to check if a player's score is high
          enough to advance to the next level, if there's enough inventory in
          stock, or if a temperature reading indicates a fever.
        </p>

        <h3>
          The Greater Than or Equal To {` (>=) `} and Less Than or Equal To
          (&lt;=) Operators
        </h3>
        <p>
          These operators are similar to {` > `}` and &lt;, but they also
          consider the case where the values are equal. It's like asking "Is
          this greater than or the same as that?" or "Is this less than or the
          same as that?"
        </p>
        <p>
          In JavaScript, we use {` >= `} for "greater than or equal to" and
          &lt;= for "less than or equal to". Here's how they work:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let myAge = 12;
let teenagerAge = 13;
let seniorAge = 65;

// Let's check if I'm a teenager or older
let isTeenagerOrOlder = myAge >= teenagerAge;
console.log("Am I a teenager or older?", isTeenagerOrOlder); // Output: Am I a teenager or older? false

// Now let's check if I'm younger than or exactly a teenager's age
let notYetTeenager = myAge <= teenagerAge;
console.log("Am I not yet a teenager?", notYetTeenager); // Output: Am I not yet a teenager? true

// These operators are very useful for range checks
let temperature = 100;
let feverThreshold = 100;

let hasFever = temperature >= feverThreshold;
console.log("Do I have a fever?", hasFever); // Output: Do I have a fever? true

// They work with decimal numbers too
let weight = 50.5;
let weightLimit = 50.5;

let withinWeightLimit = weight <= weightLimit;
console.log("Is the weight within the limit?", withinWeightLimit); // Output: Is the weight within the limit? true
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The greater than or equal to and less than or equal to operators are
          very handy when you need to include the boundary value in your
          comparison. You might use them to check if a student's grade is high
          enough to pass (including the exact passing grade), if a product is
          within a certain price range, or if a date falls within a specific
          time period.
        </p>

        <p>
          Comparison operators are essential tools in programming. They allow
          your code to make decisions and react differently based on different
          conditions. As you practice using these operators, you'll see how they
          can be combined with what you learned about arithmetic operators to
          solve more complex problems and create more interactive programs!
        </p>
      </section>

      <section>
        <h2>What's Coming Next?</h2>
        <p>
          Great job on mastering arithmetic and comparison operators! You're
          making excellent progress. Next up, we'll explore:
        </p>
        <ul>
          <li>
            Logical Operators: These are for combining multiple conditions, like
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
          using these comparison operators. Here are some ideas to get you
          started:
        </p>
        <ul>
          <li>
            Create a simple quiz game where you compare the user's answer to the
            correct answer.
          </li>
          <li>
            Write a program that checks if a person is old enough to watch a
            certain movie rating.
          </li>
          <li>
            Make a basic calculator that compares two numbers and tells which
            one is bigger, smaller, or if they're equal.
          </li>
          <li>
            Create a weather advisory program that gives different messages
            based on the temperature (e.g., "It's freezing!" if the temperature
            is below 32°F).
          </li>
        </ul>
        <AdUnit />
        <p>
          Remember, every great programmer started where you are now. The more
          you practice, the better you'll get. Don't worry if you make mistakes
          – they're a normal part of learning. Keep experimenting and have fun
          with it!
        </p>
        <Button whereToGo={"logical-operators"} />
      </section>
    </div>
  );
};

export default JavaScriptOperatorsLesson;
