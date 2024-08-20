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
      <h1>What is Math in JavaScript?</h1>
      <h2>Imagine {`You're`} a Master Chef</h2>
      <p>
        As a master chef, you need to measure ingredients precisely to create a
        delicious dish. You have a variety of ingredients, like flour, sugar,
        and spices, and you need to combine them in the right proportions to get
        the perfect flavor.
      </p>
      <p>
        In JavaScript, numbers are like ingredients, and math operations are
        like the recipes you use to combine them. Just as you need to follow a
        recipe to create a dish, you need to use math operations to manipulate
        numbers in JavaScript.
      </p>
      <h2> The Kitchen of Math Operations</h2>
      <p>
        {" "}
        {`Let's`} explore the kitchen of math operations in JavaScript. You have
        various utensils, like the <b>+</b> operator, which is like a mixing
        bowl. You can use it to combine two or more numbers:
      </p>
      <pre>
        <code>
          {`
const a = 2;
const b = 3;
const result = a + b; // 5
          `}
        </code>
      </pre>
      <p>
        The <code>- </code>operator is like a cutting board, where you can
        subtract one number from another:
      </p>
      <pre>
        <code>
          {`
const a = 5;
const b = 2;
const result = a - b; // 3
`}
        </code>
      </pre>
      <p>
        The <code>*</code> operator is like a blender, where you can multiply
        two or more numbers:
      </p>
      <pre>
        <code>
          {`
const a = 2;
const b = 3;
const result = a * b; // 6
`}
        </code>
      </pre>
      <p>
        {" "}
        The <code>/</code> operator is like a measuring cup, where you can
        divide one number by another:
      </p>
      <pre>
        <code>
          {`
const a = 6;
const b = 2;
const result = a / b; // 3
          `}
        </code>
      </pre>
      <h2>The Spice Rack of Math Functions</h2>
      <p>
        Now, {`let's`} explore the spice rack of math functions in JavaScript.
        You have various spices, like <code>Math.PI</code>, which is like a
        pinch of salt:
      </p>
      <pre>
        <code>
          {`
console.log(Math.PI); // 3.14159
          `}
        </code>
      </pre>
      <p>
        The <code>Math.sqrt()</code> function is like a garlic press, where you
        can extract the square root of a number:
      </p>
      <pre>
        <code>
          {`
console.log(Math.sqrt(16)); // 4
          `}
        </code>
      </pre>
      <p>
        The <code>Math.pow()</code> function is like a blender, where you can
        raise a number to a power:
      </p>
      <pre>
        <code>
          {`
console.log(Math.pow(2, 3)); // 8

          `}
        </code>
      </pre>
      <p>
        The <code>Math.round()</code> function is like a rolling pin, where you
        can round a number to the nearest integer:
      </p>
      <pre>
        <code>
          {`
console.log(Math.round(3.7)); // 4

          `}
        </code>
      </pre>
      <AdUnit />
      <h2>The Recipe Book of Real-World Examples</h2>
      <p>
        {`Let's create a recipe book of real-world examples using math and numbers
        in JavaScript. Here's an example:`}
      </p>
      <pre>
        <code>
          {`
const distance = 10; // distance in miles
const speed = 5; // speed in miles per hour
const time = distance / speed; // time in hours
console.log(time); // 2 hours
          `}
        </code>
      </pre>
      <p>
        In this example,{" "}
        {`we're calculating the time it takes to travel a certain
        distance at a certain speed. We're`}{" "}
        using the <code>/</code> operator to divide the distance by the speed,
        and the result is the time in hours.
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
