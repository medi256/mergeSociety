import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Logical Operators: Making Decisions in Code",
  description:
    "Learn about logical operators in JavaScript, including AND, OR, and NOT, and how to use them for complex decision-making in your code.",
  category: "JavaScript Tutorials",
  keywords: [
    "JavaScript",
    "Logical Operators",
    "AND",
    "OR",
    "NOT",
    "Programming",
    "Coding",
    "Decision Making",
    "Conditionals",
  ],
  openGraph: {
    title: "Mastering JavaScript Logical Operators",
    description:
      "Explore how logical operators in JavaScript help you create powerful decision-making logic in your code.",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "JavaScript Logical Operators: A Comprehensive Guide",
    description:
      "A detailed tutorial on logical operators in JavaScript, their usage, and their role in creating complex conditional statements.",
    keywords:
      "JavaScript, Logical Operators, AND, OR, NOT, Programming, Coding, Decision Making, Conditionals",
    articleSection: "JavaScript Tutorials",
    wordCount: 2000,
  },
};

const JavaScriptOperatorsLesson = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <section>
        <h1>3. Logical Operators: Making Decisions in Code</h1>
        <p>
          Now that we've learned about arithmetic and comparison operators,
          let's explore logical operators. These are like the decision-makers in
          our code. They help us combine different conditions and make choices
          based on multiple factors.
        </p>
        <p>
          In everyday life, we often make decisions based on multiple
          conditions. For example, "I'll go to the park if it's sunny AND I've
          finished my homework." Or, "I'll have ice cream OR cake for dessert."
          Logical operators help us express these kinds of decisions in our
          code.
        </p>

        <h3>The AND Operator (&&)</h3>
        <p>
          The AND operator checks if multiple conditions are all true. It's like
          a strict parent who only says "yes" if all the rules are followed.
        </p>
        <p>
          In JavaScript, we use two ampersands (&&) for the AND operator. Here's
          how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let isSunny = true;
let isWeekend = true;

// Let's check if it's sunny AND it's the weekend
let canGoToPark = isSunny && isWeekend;

console.log("Can I go to the park?", canGoToPark); // Output: Can I go to the park? true

// The AND operator only returns true if ALL conditions are true
let homeworkDone = false;
let canPlayVideoGames = isSunny && isWeekend && homeworkDone;

console.log("Can I play video games?", canPlayVideoGames); // Output: Can I play video games? false

// You can use the AND operator with more than two conditions
let hasEnoughMoney = true;
let storeOpen = true;
let parentPermission = true;

let canBuyToy = hasEnoughMoney && storeOpen && parentPermission;
console.log("Can I buy the toy?", canBuyToy); // Output: Can I buy the toy? true
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The AND operator is incredibly useful when you need to check multiple
          conditions at once. You might use it to verify if a user has both
          entered the correct password AND has the right permissions to access a
          feature, or to check if a game character has enough health AND enough
          mana to cast a spell.
        </p>

        <h3>The OR Operator (||)</h3>
        <p>
          The OR operator checks if at least one of multiple conditions is true.
          It's like a lenient friend who's happy if any of the options work out.
        </p>
        <p>
          In JavaScript, we use two vertical bars (||) for the OR operator.
          Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let hasPizza = false;
let hasBurger = true;

// Let's check if we have pizza OR burger for dinner
let hasDinner = hasPizza || hasBurger;

console.log("Do we have dinner?", hasDinner); // Output: Do we have dinner? true

// The OR operator returns true if ANY of the conditions are true
let isRainy = true;
let isCold = false;
let isWindy = false;

let stayIndoors = isRainy || isCold || isWindy;
console.log("Should we stay indoors?", stayIndoors); // Output: Should we stay indoors? true

// It's particularly useful for setting default values
let userColorChoice = ""; // User didn't choose a color
let defaultColor = "blue";
let finalColor = userColorChoice || defaultColor;

console.log("The chosen color is:", finalColor); // Output: The chosen color is: blue
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The OR operator is very handy when you want to check if any one of
          several conditions is met. You might use it to check if a user has any
          of several types of membership, or to see if there's any available
          slot in a schedule.
        </p>

        <h3>The NOT Operator (!)</h3>
        <p>
          The NOT operator is like a rebel - it flips the truth value of
          whatever comes after it. If something is true, it makes it false, and
          if something is false, it makes it true.
        </p>
        <p>
          In JavaScript, we use an exclamation mark (!) for the NOT operator.
          Here's how it works:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let isRaining = false;

// Let's check if it's NOT raining
let isSunny = !isRaining;

console.log("Is it sunny?", isSunny); // Output: Is it sunny? true

// The NOT operator is often used to check if something is false
let taskCompleted = false;

if (!taskCompleted) {
  console.log("You still need to complete the task!");
}
// Output: You still need to complete the task!

// It's also useful for toggling boolean values
let lightOn = true;
console.log("Is the light on?", lightOn); // Output: Is the light on? true

lightOn = !lightOn; // Toggle the light
console.log("Is the light on now?", lightOn); // Output: Is the light on now? false
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The NOT operator is super useful when you want to check for the
          absence of something, or when you want to toggle between two states.
          You might use it to check if a user is not logged in, or to switch a
          game character between two modes (like visible/invisible).
        </p>
        <AdUnit />
        <h3>Combining Logical Operators</h3>
        <p>
          Just like we can create complex math expressions, we can also create
          complex logical expressions by combining these operators. Here's an
          example:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`
let hasTicket = true;
let hasID = false;
let isWithAdult = true;

// To enter the movie, you need a ticket AND (an ID OR to be with an adult)
let canEnterMovie = hasTicket && (hasID || isWithAdult);

console.log("Can enter the movie?", canEnterMovie); // Output: Can enter the movie? true

// We can make this even more complex
let isWeekend = true;
let hasMoney = true;
let isRaining = false;

// Let's go to the beach if it's the weekend AND we have money AND it's not raining
let goToBeach = isWeekend && hasMoney && !isRaining;

console.log("Should we go to the beach?", goToBeach); // Output: Should we go to the beach? true
          `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Combining logical operators allows you to create complex
          decision-making logic in your code. This is powerful because it lets
          your programs make nuanced choices based on multiple factors, just
          like we do in real life!
        </p>

        <p>
          Logical operators are key tools in programming that allow your code to
          make decisions based on multiple conditions. As you practice using
          these operators, you'll see how they can be combined with arithmetic
          and comparison operators to solve complex problems and create more
          intelligent, responsive programs!
        </p>
      </section>

      <section>
        <h2>What's Coming Next?</h2>
        <p>
          Fantastic job on mastering arithmetic, comparison, and now logical
          operators! You're making great strides in your JavaScript journey.
          Next up, we'll explore:
        </p>
        <ul>
          <li>
            Assignment Operators: These are handy shortcuts for changing values,
            like quickly adding points to your score in a game.
          </li>
        </ul>
        <p>
          This final set of operators will round out your foundational
          knowledge, giving you a complete toolkit to start building more
          complex and interesting programs!
        </p>
      </section>

      <section>
        <h2>Practice Time!</h2>
        <p>
          As always, the best way to learn is by doing. Try creating your own
          examples using these logical operators. Here are some ideas to get you
          started:
        </p>
        <ul>
          <li>
            Create a simple game where a character can only use a special
            ability if they have enough mana AND their health is above a certain
            level.
          </li>
          <li>
            Write a program that decides if it's a good day for a picnic (it
            should be warm AND not raining).
          </li>
          <li>
            Make a login system where a user can access an area if they have the
            correct password OR if they're an admin.
          </li>
          <li>
            Create a school grading program that gives a student a passing grade
            if they've completed all assignments OR if they've scored above 90%
            on the final exam.
          </li>
        </ul>
        <AdUnit />
        <p>
          Remember, every skilled programmer started exactly where you are now.
          Don't be discouraged if things don't work perfectly right away –
          mistakes are an important part of learning. Keep experimenting, stay
          curious, and most importantly, have fun with your coding adventures!
        </p>
        <Button whereToGo={"assignment-operators"} />
      </section>
    </div>
  );
};

export default JavaScriptOperatorsLesson;
