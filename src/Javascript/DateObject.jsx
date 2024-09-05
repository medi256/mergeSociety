import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DateObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding Date Methods in JavaScript</h1>

      <p>
        Handling dates and times is a common task in web development. JavaScript
        provides the <code>Date</code> object to work with dates and times
        easily. In this lesson, we'll cover the basic methods you need to know
        to handle dates and times in your code.
      </p>

      <h2>What is the JavaScript Date Object?</h2>
      <p>
        The <code>Date</code> object in JavaScript is used to represent dates
        and times. You can think of it as a digital calendar and clock combined,
        which allows you to get and set dates and times.
      </p>

      <h3>Analogy: Date Object as a Calendar and Clock</h3>
      <p>
        Imagine the <code>Date</code> object as a calendar and clock in one.
        Just like you use a calendar to find out what day it is and a clock to
        see the current time, the <code>Date</code> object helps you work with
        both dates and times in your code.
      </p>

      <h2>Creating a Date Object</h2>
      <p>
        To work with dates and times, you first need to create a{" "}
        <code>Date</code> object. You can do this in a few ways:
      </p>

      <h3>1. Current Date and Time</h3>
      <p>
        To get the current date and time, simply create a new <code>Date</code>{" "}
        object without any arguments:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const now = new Date();
  console.log(now);
  // Output: Current date and time (e.g., "Mon Aug 19 2024 10:35:20 GMT-0400 (Eastern Daylight Time)")
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>This gives you the date and time at the moment the code runs.</p>

      <h3>2. Specific Date and Time</h3>
      <p>
        You can also create a <code>Date</code> object for a specific date and
        time by passing the year, month, day, hour, minute, and second:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const specificDate = new Date(2024, 7, 19, 10, 35, 20);
  console.log(specificDate);
  // Output: "Mon Aug 19 2024 10:35:20 GMT-0400 (Eastern Daylight Time)"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Here's what each part means:</p>
      <ul>
        <li>
          <code>2024</code> – The year
        </li>
        <li>
          <code>7</code> – The month (August; remember, months start from 0, so
          January is 0 and December is 11)
        </li>
        <li>
          <code>19</code> – The day of the month
        </li>
        <li>
          <code>10</code> – The hour
        </li>
        <li>
          <code>35</code> – The minute
        </li>
        <li>
          <code>20</code> – The second
        </li>
      </ul>
      <AdUnit />
      <h2>Common Date Methods</h2>
      <p>
        JavaScript provides methods to get and set various parts of a date.
        Let's look at some of the most useful methods.
      </p>

      <h3>
        1. Getting the Full Year: <code>getFullYear()</code>
      </h3>
      <p>
        Use <code>getFullYear()</code> to get the year from a <code>Date</code>{" "}
        object:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const now = new Date();
  const year = now.getFullYear();
  console.log(year);
  // Output: 2024
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>This is like checking the year on your calendar.</p>

      <h3>
        2. Getting the Month: <code>getMonth()</code>
      </h3>
      <p>
        Use <code>getMonth()</code> to get the month. Note that months are
        zero-indexed, meaning January is 0 and December is 11:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const month = now.getMonth();
  console.log(month);
  // Output: 7 (August)
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This is like looking at the month on your calendar. Remember to add 1 to
        get the actual month number.
      </p>

      <h3>
        3. Getting the Day of the Month: <code>getDate()</code>
      </h3>
      <p>
        Use <code>getDate()</code> to get the day of the month:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const day = now.getDate();
  console.log(day);
  // Output: 19
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>This is like checking the day of the month on your calendar.</p>

      <h3>
        4. Getting the Day of the Week: <code>getDay()</code>
      </h3>
      <p>
        Use <code>getDay()</code> to get the day of the week. It returns 0 for
        Sunday, 1 for Monday, and so on:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const dayOfWeek = now.getDay();
  console.log(dayOfWeek);
  // Output: 1 (Monday)
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This is like checking what day of the week it is. Remember, Sunday is 0,
        and Saturday is 6.
      </p>

      <h3>
        5. Getting the Hour: <code>getHours()</code>
      </h3>
      <p>
        Use <code>getHours()</code> to get the hour of the day:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const hour = now.getHours();
  console.log(hour);
  // Output: 10
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>This is like looking at the hour on your clock.</p>

      <h3>
        6. Getting the Minutes: <code>getMinutes()</code>
      </h3>
      <p>
        Use <code>getMinutes()</code> to get the minutes past the hour:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const minutes = now.getMinutes();
  console.log(minutes);
  // Output: 35
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>This is like checking the minutes on your clock.</p>

      <h2>Using Date with the DOM</h2>
      <p>
        You can also use the <code>Date</code> object to display dates and times
        on your webpage. Here’s a simple example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  // Create a Date object for the current date and time
  const now = new Date();

  // Get the <p> element from the DOM
  const dateElement = document.querySelector("p");

  // Set the text content of the <p> element to the current date and time
  dateElement.textContent = "Current date and time: " + now.toLocaleString();
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we create a <code>Date</code> object for the current
        date and time. We then select a <code>&lt;p&gt;</code> element from the
        DOM and update its text content to display the current date and time.
        This helps show how you can use JavaScript’s Date object to dynamically
        update your webpage with current information.
      </p>
      <AdUnit />
      <h2>Practice: Working with Dates</h2>
      <p>
        Let’s practice creating and manipulating dates with a simple exercise.
      </p>

      <p>
        Create a <code>Date</code> object for today’s date and time. Then, use
        the methods we’ve discussed to get and display the year, month, day, and
        hour. Finally, set the year to the next year and display the updated
        date.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
  const today = new Date();

  // Display the current year, month, day, and hour
  console.log("Year:", today.getFullYear());
  console.log("Month:", today.getMonth() + 1); // Adding 1 because months are zero-indexed
  console.log("Day:", today.getDate());
  console.log("Hour:", today.getHours());

  // Set the year to the next year
  today.setFullYear(today.getFullYear() + 1);
  console.log("Updated Year:", today.getFullYear());
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        This exercise will help you practice working with dates using
        JavaScript’s built-in methods. It’s a great way to get comfortable with
        date and time operations.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/json")}>back</button>
        <button onClick={() => (window.location.href = "/mathObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DateObject;

export const MathObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding the Math Object in JavaScript</h1>
      <p>
        The <code>Math</code> object in JavaScript provides a variety of
        mathematical functions and constants. It’s like a set of helpful tools
        for doing math without needing to create an instance of{" "}
        <code>Math</code>—you use it directly.
      </p>

      <h2>What is the Math Object?</h2>
      <p>
        The <code>Math</code> object is built into JavaScript and offers methods
        and constants for mathematical operations. Think of it as a recipe book
        where each recipe helps you solve different math problems.
      </p>

      <h2>Math Properties</h2>
      <p>
        The <code>Math</code> object has some key properties that represent
        important mathematical constants.
      </p>

      <h3>
        1. <code>Math.PI</code>
      </h3>
      <p>
        <code>Math.PI</code> represents the number π (pi), which is
        approximately 3.14. It’s commonly used in calculations involving
        circles.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const piValue = Math.PI;
console.log("Value of PI:", piValue);
// Output: 3.141592653589793
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>
        2. <code>Math.E</code>
      </h3>
      <p>
        <code>Math.E</code> represents the base of natural logarithms,
        approximately 2.72. It’s used in exponential growth and logarithms.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const eValue = Math.E;
console.log("Value of E:", eValue);
// Output: 2.718281828459045
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Math Methods</h2>
      <p>
        The <code>Math</code> object also includes methods to perform various
        mathematical operations. You can use these methods directly without
        needing to create an instance.
      </p>

      <h3>
        1. <code>Math.abs()</code>
      </h3>
      <p>
        <code>Math.abs()</code> returns the absolute value of a number, which is
        the number without its sign. It’s like measuring how far a number is
        from zero.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const negativeNumber = -5;
const absoluteValue = Math.abs(negativeNumber);
console.log("Absolute value:", absoluteValue);
// Output: 5

const positiveNumber = 3.14;
const absValue = Math.abs(positiveNumber);
console.log("Absolute value:", absValue);
// Output: 3.14
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        2. <code>Math.round()</code>
      </h3>
      <p>
        <code>Math.round()</code> rounds a number to the nearest whole number.
        If the fractional part is 0.5 or more, it rounds up; otherwise, it
        rounds down.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const roundedUp = Math.round(4.7);
console.log("Rounded up:", roundedUp);
// Output: 5

const roundedDown = Math.round(4.4);
console.log("Rounded down:", roundedDown);
// Output: 4
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        3. <code>Math.floor()</code>
      </h3>
      <p>
        <code>Math.floor()</code> always rounds a number down to the nearest
        whole number. It’s like moving to the lower shelf in a cabinet.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const floorUp = Math.floor(4.7);
console.log("Rounded down:", floorUp);
// Output: 4

const floorDown = Math.floor(-4.7);
console.log("Rounded down:", floorDown);
// Output: -5
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>
        4. <code>Math.ceil()</code>
      </h3>
      <p>
        <code>Math.ceil()</code> always rounds a number up to the next whole
        number. It’s like moving up to the higher shelf.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const ceilUp = Math.ceil(4.3);
console.log("Rounded up:", ceilUp);
// Output: 5

const ceilDown = Math.ceil(-4.3);
console.log("Rounded up:", ceilDown);
// Output: -4
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        5. <code>Math.max()</code> and <code>Math.min()</code>
      </h3>
      <p>
        <code>Math.max()</code> finds the largest number from a list, while{" "}
        <code>Math.min()</code> finds the smallest. Think of them as tools for
        sorting numbers to find the highest or lowest.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const highest = Math.max(1, 2, 3, 4, 5);
console.log("Highest number:", highest);
// Output: 5

const lowest = Math.min(-1, -2, -3, -4, -5);
console.log("Lowest number:", lowest);
// Output: -5
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        6. <code>Math.random()</code>
      </h3>
      <p>
        <code>Math.random()</code> returns a random number between 0 (inclusive)
        and 1 (exclusive). It’s like drawing a random value from a hat.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const randomValue = Math.random();
console.log("Random number:", randomValue);
// Output: A random number between 0 and 1, e.g., 0.123456789
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        7. <code>Math.pow()</code>
      </h3>
      <p>
        <code>Math.pow()</code> raises a number to a specific power. For
        example, <code>Math.pow(2, 3)</code> means 2 raised to the power of 3.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const powerOfTwo = Math.pow(2, 3);
console.log("2 to the power of 3:", powerOfTwo);
// Output: 8

const powerOfFive = Math.pow(5, 2);
console.log("5 to the power of 2:", powerOfFive);
// Output: 25
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>
        8. <code>Math.sqrt()</code>
      </h3>
      <p>
        <code>Math.sqrt()</code> gives the square root of a number. It’s like
        finding which number multiplied by itself gives you the original number.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const sqrtOf16 = Math.sqrt(16);
console.log("Square root of 16:", sqrtOf16);
// Output: 4

const sqrtOf25 = Math.sqrt(25);
console.log("Square root of 25:", sqrtOf25);
// Output: 5
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Analogy: The Math Object as a Recipe Book</h2>
      <p>
        Think of the <code>Math</code> object as a recipe book for math. Each
        method and property is like a recipe that helps you solve different
        types of math problems. Just as you use different recipes for different
        dishes, you use different methods and properties for different
        calculations.
      </p>
      <AdUnit />
      <h2>Practice: Using the Math Object</h2>
      <p>
        Try these examples to practice using the <code>Math</code> object:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log("Area of the circle:", area);

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNumber);
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In these examples:</p>
      <ul>
        <li>
          We calculate the area of a circle using the radius and{" "}
          <code>Math.PI</code>.
        </li>
        <li>
          We generate a random number between 1 and 100 using{" "}
          <code>Math.random()</code> and <code>Math.floor()</code>.
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        The <code>Math</code> object is a handy set of tools for various
        mathematical tasks. You can use its methods and properties directly to
        solve math problems without needing to create a new instance of{" "}
        <code>Math</code>.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/dates")}>back</button>
        <button onClick={() => (window.location.href = "/forEach")}>
          Next
        </button>
      </div>
    </div>
  );
};
