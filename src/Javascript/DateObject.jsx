const DateObject = () => {
  return (
    <div className="comments-container internet">
      <h1>What is a Date in JavaScript?</h1>
      <p>
        Imagine {`you're`} planning a birthday party for your friend. You need
        to keep track of the date and time of the party, so you can send out
        invitations and make sure everyone shows up on time.
      </p>
      <p>
        In JavaScript, a date is an object that represents a specific moment in
        time, like the date and time of your {`friend's`} birthday party. You
        can create a date object using the <code>Date</code> constructor, like
        this:
      </p>
      <pre>
        <code>
          {`
const partyDate = new Date('2022-07-25T14:30:00.000Z');
          `}
        </code>
      </pre>
      <p>
        This code creates a date object that represents July 25, 2022, at 2:30
        PM.
      </p>
      <h2>Date Methods</h2>
      <p>
        Now, imagine you want to get more information about the party date, like
        the day of the week or the month. You can use various methods of the
        date object to get this information.
      </p>
      <p>
        For example, you can use the <code>getDay() </code> method to get the
        day of the week:
      </p>
      <pre>
        <code>
          {`
console.log(partyDate.getDay()); // 1 (Monday)
`}
        </code>
      </pre>
      <p>
        Or, you can use the <code>getMonth()</code> method to get the month:
      </p>
      <pre>
        <code>
          {`
console.log(partyDate.getMonth()); // 6 (July)

          `}
        </code>
      </pre>
      <p>
        There are many other methods you can use to get information about the
        date, like <code>getFullYear()</code>, <code>getDate()</code>,{" "}
        <code>getHours()</code>,<code>getMinutes()</code>, and
        <code>getSeconds()</code>.
      </p>
      <h2>Date Formatting</h2>
      <p>
        Imagine you want to display the party date on the invitation, but you
        want to format it in a specific way, like {`"July 25, 2022, 2:30 PM"`}.
        You can use the <code>toLocaleString()</code> method to format the date:
      </p>
      <pre>
        <code>
          {`
console.log(partyDate.toLocaleString()); // July 25, 2022, 2:30:00 PM
          `}
        </code>
      </pre>
      <p>
        Or, you can use the <code>toLocaleDateString()</code> method to format
        the date part only:
      </p>
      <pre>
        <code>
          {`
console.log(partyDate.toLocaleDateString()); // July 25, 2022

          `}
        </code>
      </pre>
      <h2>Real-World Time Example</h2>
      <p>
        {" "}
        {`Let's`} say you want to create a clock on your website that displays
        the current time, updated every second. You can use the{" "}
        <code>setInterval()</code>
        function to update the clock every second:
      </p>
      <pre>
        <code>
          {`
const clockElement = document.getElementById('clock');

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = \`\${hours}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
  clockElement.textContent = timeString;
}, 1000);
          `}
        </code>
      </pre>
      <p>
        This code creates a clock that updates every second, displaying the
        current time in the format {`"HH:MM:SS"`}.
      </p>
      <h2>Real-World Date Example</h2>
      <p>
        {`Let's say you want to display the current date on your website, in the
        format "MMMM DD, YYYY".`}{" "}
        You can use the <code>Date</code> object and some string manipulation to
        achieve this:
      </p>
      <pre>
        <code>
          {`
const dateElement = document.getElementById('date');

const now = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = monthNames[now.getMonth()];
const day = now.getDate();
const year = now.getFullYear();
const dateString = \`\${month} \${day}, \${year}\`;
dateElement.textContent = dateString;
          `}
        </code>
      </pre>
      <p>
        {`This code displays the current date in the format "MMMM DD, YYYY", like
        "July 25, 2022".`}
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
