import Link from "next/link";
import ScrollToTop from "../ScrollToTop";

export const metadata = {
  title: "Complete JavaScript Course: From Basics to Advanced | MergeSociety",
  description:
    "Master JavaScript with our comprehensive course. Learn everything from fundamentals to advanced concepts like async programming and API integration. Ideal for beginners and intermediate developers.",
  keywords:
    "JavaScript course, web development, JS tutorial, learn JavaScript, coding, front-end development, ES6, DOM manipulation, asynchronous JavaScript",
  openGraph: {
    title:
      "Master JavaScript: Comprehensive Web Development Course | MergeSociety",
    description:
      "Dive deep into JavaScript with our step-by-step course. Cover everything from basics to advanced topics. Start your journey to becoming a JavaScript expert today!",
  },
};

const Jscourse = () => {
  return (
    <div className="container">
      <ScrollToTop />
      <main>
        <h1>JavaScript Course</h1>

        <p>
          Don't know where to begin? <Link href={"/guide"}>click here</Link>
          ➡️ to get an introduction!
        </p>
        <p>
          Looking for practice projects?{" "}
          <Link href="/projects" passHref>
            Click here to explore coding projects!
          </Link>
        </p>
        <br />
        <p>Choose a topic to start learning:</p>
        {/* Introduction Section */}
        <section className="section">
          <h2>Introduction</h2>
          <div className="grid">
            <Link href="/javascript/introduction-to-javascript">
              <div className="card">
                <h3>Introduction to JavaScript</h3>
                <p>
                  Learn what JavaScript is and its importance in web
                  development.
                </p>
              </div>
            </Link>
            <Link href="/javascript/why-javascript">
              <div className="card">
                <h3>Why Learn JavaScript?</h3>
                <p>
                  Explore the benefits of learning JavaScript for developers.
                </p>
              </div>
            </Link>
            <Link href="/javascript/running-js">
              <div className="card">
                <h3>How to Insert and Run Your Code</h3>
                <p>
                  Learn how to properly insert and execute JavaScript code in
                  HTML.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* JavaScript Fundamentals Section */}
        <section className="section">
          <h2>JavaScript Fundamentals</h2>
          <div className="grid">
            <Link href="/javascript/variables">
              <div className="card">
                <h3>Variables (let, const, var)</h3>
                <p>Learn about variable declarations and scope.</p>
              </div>
            </Link>
            <Link href="/javascript/naming-variables">
              <div className="card">
                <h3>Best Practices for Variable Naming</h3>
                <p>Discover effective naming conventions for your variables.</p>
              </div>
            </Link>
            <Link href="/javascript/data-types">
              <div className="card">
                <h3>Data Types</h3>
                <p>
                  Understand different data types in JavaScript (numbers,
                  strings, booleans, arrays, objects).
                </p>
              </div>
            </Link>
            <Link href="/javascript/comments">
              <div className="card">
                <h3>Comments</h3>
                <p>
                  Learn how to add comments in your JavaScript code for clarity.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>JavaScript Operators</h2>
          <div className="grid">
            <Link href="/javascript/arithmetic-operators">
              <div className="card">
                <h3>Arithmetic Operators</h3>
                <p>
                  Learn about operators like addition (+), subtraction (-),
                  multiplication (*), and division (/).
                </p>
              </div>
            </Link>
            <Link href="/javascript/comparison-operators">
              <div className="card">
                <h3>Comparison Operators</h3>
                <p>{`Understand comparison operators such as equal (==), not equal (!=), greater than (>), and less than (<).`}</p>
              </div>
            </Link>
            <Link href="/javascript/logical-operators">
              <div className="card">
                <h3>Logical Operators</h3>
                <p>
                  Explore logical operators like AND (&&), OR (||), and NOT (!).
                </p>
              </div>
            </Link>
            <Link href="/javascript/assignment-operators">
              <div className="card">
                <h3>Assignment Operators</h3>
                <p>
                  Learn how to assign values with operators like equals (=),
                  plus equals (+=), and minus equals (-=).
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Control Flow Section */}
        <section className="section">
          <h2>Control Flow</h2>
          <div className="grid">
            <Link href="/javascript/conditional-statements">
              <div className="card">
                <h3>Conditional Statements</h3>
                <p>
                  Understand if/else and switch statements for decision-making.
                </p>
              </div>
            </Link>
            <Link href="/javascript/loops">
              <div className="card">
                <h3>Loops</h3>
                <p>
                  Learn about different loops (for, while, do-while) for
                  iteration.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* JavaScript Functions Section */}
        <section className="section">
          <h2>JavaScript Functions</h2>
          <div className="grid">
            <Link href="/javascript/defining-calling-functions">
              <div className="card">
                <h3>Defining and Calling Functions</h3>
                <p>Explore how to define and invoke functions in JavaScript.</p>
              </div>
            </Link>
            <Link href="/javascript/parameters-arguments">
              <div className="card">
                <h3>Parameters and Arguments</h3>
                <p>
                  Understand the difference between parameters and arguments.
                </p>
              </div>
            </Link>
            <Link href="/javascript/return-values">
              <div className="card">
                <h3>Returning Values</h3>
                <p>Learn how to return values from functions.</p>
              </div>
            </Link>
            <Link href="/javascript/function-scope">
              <div className="card">
                <h3>Function Scope</h3>
                <p>
                  Discover how scope affects variable accessibility in
                  functions.
                </p>
              </div>
            </Link>
            <Link href="/javascript/arrow-functions">
              <div className="card">
                <h3>Arrow Functions</h3>
                <p>Learn about the syntax and use of arrow functions.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Working with Strings Section */}
        <section className="section">
          <h2>Working with Strings</h2>
          <div className="grid">
            <Link href="/javascript/string-methods">
              <div className="card">
                <h3>String Methods</h3>
                <p>
                  Explore methods for manipulating strings in JavaScript
                  (length, concatenation, search, replace, etc.).
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* JavaScript Arrays Section */}
        <section className="section">
          <h2>JavaScript Arrays</h2>
          <div className="grid">
            <Link href="/javascript/arrays">
              <div className="card">
                <h3>Arrays</h3>
                <p>Understand how to create and use arrays in JavaScript.</p>
              </div>
            </Link>
            <Link href="/javascript/array-methods">
              <div className="card">
                <h3>Array Methods</h3>
                <p>Learn about various methods to manipulate arrays.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Objects Section */}
        <section className="section">
          <h2>Objects</h2>
          <div className="grid">
            <Link href="/javascript/objects">
              <div className="card">
                <h3>Objects</h3>
                <p>Discover how to create and use objects in JavaScript.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* JavaScript Scope Section */}
        <section className="section">
          <h2>JavaScript Scope Explained</h2>
          <div className="grid">
            <Link href="/javascript/scope">
              <div className="card">
                <h3>JavaScript Scope</h3>
                <p>Understand global, local, and block scope in JavaScript.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Mastering Hoisting Section */}
        <section className="section">
          <h2>Mastering JavaScript Hoisting</h2>
          <div className="grid">
            <Link href="/javascript/hoisting">
              <div className="card">
                <h3>Mastering JavaScript Hoisting</h3>
                <p>
                  Learn about hoisting and best practices for variable and
                  function scope.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* DOM Manipulation Section */}
        <section className="section">
          <h2>DOM Manipulation</h2>
          <div className="grid">
            <Link href="/javascript/dom-intro">
              <div className="card">
                <h3>Introduction to the DOM</h3>
                <p>Understand the Document Object Model and its importance.</p>
              </div>
            </Link>
            <Link href="/javascript/selecting-elements">
              <div className="card">
                <h3>Selecting Elements</h3>
                <p>
                  Learn how to select elements by ID, class name, and tag name.
                </p>
              </div>
            </Link>
            <Link href="/javascript/modifying-elements">
              <div className="card">
                <h3>Modifying Element Properties</h3>
                <p>
                  Explore how to change text content and styles of elements.
                </p>
              </div>
            </Link>
            <Link href="/javascript/create-append">
              <div className="card">
                <h3>Creating and Appending Elements</h3>
                <p>
                  Learn how to create new elements and append them to the DOM.
                </p>
              </div>
            </Link>
            <Link href="/javascript/event-handling">
              <div className="card">
                <h3>Event Handling</h3>
                <p>
                  Understand how to handle user interactions through events.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Browser Object Model Section */}
        <section className="section">
          <h2>The Browser Object Model (BOM)</h2>
          <div className="grid">
            <Link href="/javascript/bom-intro">
              <div className="card">
                <h3>Introduction to the BOM</h3>
                <p>Learn about the Browser Object Model and its components.</p>
              </div>
            </Link>
            <Link href="/javascript/window-object">
              <div className="card">
                <h3>Window Object</h3>
                <p>Explore alert, confirm, prompt, and screen dimensions.</p>
              </div>
            </Link>
            <Link href="/javascript/location-object">
              <div className="card">
                <h3>Location Object</h3>
                <p>Learn about URL manipulation.</p>
              </div>
            </Link>
            <Link href="/javascript/navigation-object">
              <div className="card">
                <h3>Navigation Object</h3>
                <p>Discover browser information.</p>
              </div>
            </Link>
            <Link href="/javascript/history-object">
              <div className="card">
                <h3>History Object</h3>
                <p>Explore navigation information.</p>
              </div>
            </Link>
            <Link href="/javascript/screen-object">
              <div className="card">
                <h3>Screen Object</h3>
                <p>Learn about screen size and resolution.</p>
              </div>
            </Link>
            <Link href="/javascript/bom-applications">
              <div className="card">
                <h3>BOM Applications</h3>
                <p>Explore user interaction beyond the page content.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* JavaScript vs. ECMAScript Section */}
        <section className="section">
          <h2>JavaScript vs. ECMAScript</h2>
          <div className="grid">
            <Link href="/javascript/js-vs-ecmascript">
              <div className="card">
                <h3>What's the Difference?</h3>
                <p>
                  Understand the relationship between JavaScript and ECMAScript.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Advanced JavaScript Concepts Section */}
        <section className="section">
          <h2>Advanced JavaScript Concepts</h2>
          <div className="grid">
            <Link href="/javascript/modules">
              <div className="card">
                <h3>Modules</h3>
                <p>Learn about JavaScript modules and how to use them.</p>
              </div>
            </Link>
            <Link href="/javascript/classes">
              <div className="card">
                <h3>Classes</h3>
                <p>
                  Explore object-oriented programming with JavaScript classes.
                </p>
              </div>
            </Link>
            <Link href="/javascript/this-keyword">
              <div className="card">
                <h3>this Keyword</h3>
                <p>
                  Understand the complexities of the 'this' keyword in
                  JavaScript.
                </p>
              </div>
            </Link>
            <Link href="/javascript/prototypes">
              <div className="card">
                <h3>Prototypes</h3>
                <p>Learn about JavaScript's prototype-based inheritance.</p>
              </div>
            </Link>
            <Link href="/javascript/json">
              <div className="card">
                <h3>JSON</h3>
                <p>Explore working with JSON data in JavaScript.</p>
              </div>
            </Link>
            <Link href="/javascript/date-methods">
              <div className="card">
                <h3>Date Methods</h3>
                <p>Learn how to work with dates and times in JavaScript.</p>
              </div>
            </Link>
            <Link href="/javascript/math-object">
              <div className="card">
                <h3>Math Object</h3>
                <p>Explore mathematical operations using the Math object.</p>
              </div>
            </Link>
            <Link href="/javascript/foreach-method">
              <div className="card">
                <h3>forEach Method</h3>
                <p>Learn how to iterate over arrays using forEach.</p>
              </div>
            </Link>
            <Link href="/javascript/map-method">
              <div className="card">
                <h3>Map Method</h3>
                <p>Discover how to transform arrays using the map method.</p>
              </div>
            </Link>
            <Link href="/javascript/settimeout-setinterval">
              <div className="card">
                <h3>setTimeout/setInterval</h3>
                <p>Learn about timing events in JavaScript.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Asynchronous JavaScript Section */}
        <section className="section">
          <h2>Asynchronous JavaScript</h2>
          <div className="grid">
            <Link href="/javascript/async-programming">
              <div className="card">
                <h3>Understanding Asynchronous Programming</h3>
                <p>
                  Learn the basics of asynchronous programming in JavaScript.
                </p>
              </div>
            </Link>
            <Link href="/javascript/event-loop">
              <div className="card">
                <h3>Event Loop Explained</h3>
                <p>Understand how the JavaScript event loop works.</p>
              </div>
            </Link>
            <Link href="/javascript/callbacks">
              <div className="card">
                <h3>Callbacks</h3>
                <p>
                  Learn about callback functions in asynchronous operations.
                </p>
              </div>
            </Link>
            <Link href="/javascript/promises">
              <div className="card">
                <h3>Promises</h3>
                <p>Explore working with Promises for better async code.</p>
              </div>
            </Link>
            <Link href="/javascript/async-await">
              <div className="card">
                <h3>Async/Await</h3>
                <p>Learn about the async/await syntax for handling Promises.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Error Handling Section */}
        <section className="section">
          <h2>Error Handling</h2>
          <div className="grid">
            <Link href="/javascript/try-catch">
              <div className="card">
                <h3>Try/Catch Statements</h3>
                <p>Learn how to handle errors using try/catch blocks.</p>
              </div>
            </Link>
            <Link href="/javascript/throwing-errors">
              <div className="card">
                <h3>Throwing and Handling Errors</h3>
                <p>Explore how to throw and handle custom errors.</p>
              </div>
            </Link>
            <Link href="/javascript/debugging">
              <div className="card">
                <h3>Debugging Techniques</h3>
                <p>Learn various techniques for debugging JavaScript code.</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="section">
          <h2>Working with API (Application Programming Interface)</h2>
          <div className="grid">
            <Link href="/javascript/api-intro">
              <div className="card">
                <h3>API (Understanding what is an API)</h3>
                <p>
                  Learn the basics of APIs and their importance in web
                  development.
                </p>
              </div>
            </Link>
            <Link href="/javascript/api-preparation">
              <div className="card">
                <h3>Things to understand before Fetching data from an API</h3>
                <p>Explore important concepts before working with APIs.</p>
              </div>
            </Link>
            <Link href="/javascript/fetching-api-data">
              <div className="card">
                <h3>Fetching Data from APIs</h3>
                <p>Learn how to retrieve data from APIs using JavaScript.</p>
              </div>
            </Link>
            <Link href="/javascript/displaying-api-data">
              <div className="card">
                <h3>Displaying API Data in JavaScript</h3>
                <p>
                  Discover techniques to present API data in your web
                  applications.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Jscourse;
