const VariablesDataTypes = () => {
  return (
    <div className="comments-container internet">
      <h1>JavaScript Variables</h1>
      <p>{`Imagine you're building a website or creating a game. You'll need to store
        different kinds of information: player scores, user names, or even the
        positions of objects on the screen. That's where variables come in!
        They're like your personal toolbelt, holding essential tools (data)
        that you can use throughout your JavaScript code.`}</p>
      <p>
        {" "}
        It’s like a virtual box that can hold values you put into it. We’ll
        learn them by examples in this section.
      </p>
      <p>
        The purpose of variable is to keep us, programmers, from repeating our
        code over and over.
      </p>
      <p>
        Variables in JavaScript are untyped — it means you can assign a value of
        any type to a variable, and then you can assign another value with a
        different type into the same variable.
      </p>
      <p>
        Variables in JavaScript must be declared with variables keyword before
        we can use it.
      </p>
      <p>
        There are 3 keywords you can use to create variables:{" "}
        <code>let, var</code> and <code>const </code>.
      </p>
      <p>
        {" "}
        <i>
          Note: The following section contains sample code that you can run on
          your JavaScript development environment. If you are new to JavaScript
          and would like try and run the code samples, follow the guide on
          JavaScript Development Environment Guide
        </i>{" "}
      </p>
      <h3>
        Using<code> let </code>keyword
      </h3>
      <p>
        {`
        Imagine you're building a lemonade stand. You need containers to hold
        your ingredients. In JavaScript, let is like labeling your containers
        with names so you know what's inside.`}
      </p>
      <ol>
        <li>
          <b>Making a container</b>: You use let followed by a name you choose
          for your container {`(like "sugarContainer")`} and an equal sign (=)
          to put a number inside. For example:
        </li>
        <pre>
          <code>
            {`
//JavaScript

let sugarContainer = 2; // Holds 2 cups of sugar
            `}
          </code>
        </pre>
        <p>
          Here, {`you're`} creating a container named sugarContainer and putting
          2 (the number) inside, representing 2 cups of sugar.
        </p>
        <li>
          {" "}
          <b>Using the container</b>: Once you have your container, you can use
          its name (sugarContainer) to refer to the number stored inside.
          Imagine checking the label and seeing how much sugar you have.
        </li>
        <pre>
          <code>
            {`
//JavaScript


let sugarContainer = 2;
console.log(sugarContainer); // This will print 2 to the console (showing the amount)
            `}
          </code>
        </pre>

        <li>
          <b>More containers</b>: You can create more containers with let and
          different names to hold other ingredients like lemons:
        </li>
        <pre>
          <code>
            {`
            //JavaScript

            let lemonCount = 5; // Holds the number of lemons (5)
            `}
          </code>
        </pre>
        <p>
          Remember, each container (sugarContainer, lemonCount) has its own name
          and can hold a different number. This helps you keep track of your
          ingredients (and your code organized in JavaScript).
        </p>
      </ol>
      <h3> Here are the key points again:</h3>
      <ul>
        <li>
          {" "}
          <code>let </code> helps you name and store numbers or other simple
          data in your code.
        </li>
        <li>
          Each <code>let </code> variable has a unique name.
        </li>
        <li>
          You can use the name to access the number or data stored inside.
        </li>
      </ul>

      <p>
        If you don’t specify any value during variable declaration, the value of
        the variable will be undefined until your code store a new value into
        it.
      </p>
      <pre>
        <code>
          {`
let age;
console.log(age);
// undefined
age = 25;
console.log(age);
// 25
          `}
        </code>
      </pre>
      <p>
        That’s pretty much explain <code>let</code> keyword.
      </p>
      <h3>
        {`let's`} talk about var in JavaScript, using the same lemonade stand
        analogy. While let is generally preferred these days, understanding var
        is helpful, especially if you encounter older code.
      </h3>
      <h2>
        Similarities between <code>var</code> and <code>let</code>:
      </h2>
      <ul>
        <li>
          Both <code>var</code> and <code>let</code> are keywords used to
          declare variables (create containers) in your code.
        </li>
        <li>
          You can assign values (like the number of lemons) to these containers.
        </li>
        <li>
          {" "}
          You can use the variable name to refer to the stored value later.
        </li>
      </ul>
      <h2>
        Key Differences between <code>var </code> and <code>let </code>:
      </h2>
      <ol>
        <li>
          <b>Scope </b>: This is a fancy way of saying where your variable can
          be accessed in your code.
        </li>
        <ul>
          <li>
            <code>let </code> variables have block scope. This means they are
            only accessible within the specific block of code where they are
            declared (like a curly brace section {`{}`}). This helps prevent
            confusion and keeps your code cleaner.
          </li>
          <li>
            <code>var</code> variables have function scope. They are accessible
            throughout the entire function they are declared within, even in
            nested blocks within that function. This can sometimes lead to
            unexpected behavior if {`you're not careful`}.
          </li>
          <p>
            {`It's okay if you don't`} get scope yet. The more you work with
            JavaScript, the clearer it will become.
          </p>
        </ul>
        <li>Redeclaration:</li>
        <ul>
          <li>
            {" "}
            You cannot redeclare a variable with <code> let </code> within the
            same block of code. This helps avoid accidentally overwriting a{" "}
            {`variable's`} value.
          </li>
          <li>
            {" "}
            You can redeclare a variable with <code> var </code> within the same
            function scope, even if {`it's`} within a nested block. This can be
            confusing and lead to errors.
          </li>
        </ul>
      </ol>
      <h3>
        {" "}
        Using <code> var </code> in the Lemonade Stand:
      </h3>
      <p>
        Imagine you have a big box (like a function) for your lemonade stand
        supplies. You can put containers (variables) inside the box using var.
      </p>
      <pre>
        <code>
          {`
//JavaScript


function makeLemonade() {
  var sugarCount = 2; // Cups of sugar (declared with var)

  // ... (code to make lemonade using sugarCount)
}
          `}
        </code>
      </pre>
      <p>
        {" "}
        Here, sugarCount is declared with var inside the makeLemonade function.
        It can be accessed anywhere within that function, even in nested blocks.
      </p>
      <h3>Be Careful with var:</h3>
      <p>
        While var seems simpler at first, its broader scope can lead to issues.
        For example, if you accidentally redeclare sugarCount with a different
        value in a nested block, it can affect the entire function unexpectedly.
      </p>
      <h3>Recommendation:</h3>
      <p>
        In modern JavaScript, {`it's`} generally recommended to use let for most
        variable declarations. It provides better code organization and avoids
        potential pitfalls of var.
      </p>

      <h3>
        {" "}
        The <code>const</code> keyword
      </h3>
      <p>
        Imagine {`you're`} setting up your lemonade stand and labeling different
        parts with names:
      </p>
      <ul>
        <li>
          {" "}
          let (like a reusable label): You can use let to label a container
          (variable){" "}
          {`like "sugarAmount" and change the contents (value) later if
          needed. It's like`}{" "}
          a reusable label you can stick on different jars.
        </li>
      </ul>
      <pre>
        <code>
          {`
//JavaScript

          
let sugarAmount = 2; // Initially 2 cups of sugar
console.log(sugarAmount); // Prints 2
          
sugarAmount = 4; // Later, add more sugar (update the label)
console.log(sugarAmount); // Prints 4 (updated value)
          `}
        </code>
      </pre>
      <p>
        <code>const</code> (like a permanent marker): You can use const to label
        something that should never change,{" "}
        {`like "standLocation". It's like
        writing on a board with a permanent marker - you can't erase it.`}
      </p>
      <pre>
        <code>
          {`
//JavaScript


const standLocation = "Corner of Elm and Main";
console.log(standLocation); // Prints "Corner of Elm and Main"
          
// This will cause an error because you cannot change a const value
standLocation = "New Location";
          
          `}
        </code>
      </pre>
      <p>
        {" "}
        Here, you try to change the standLocation with const, but that results
        in an error. This ensures your lemonade stand always stays at the
        designated corner.
      </p>
      <h3>
        Key points about <code>const</code>:
      </h3>
      <ul>
        <li>
          You assign a value to a <code>const</code> variable when you create
          it, and that value cannot be changed later.
        </li>
        <li>
          Use <code> const </code> for things that should be fixed throughout
          your code, like website URLs or mathematical constants.
        </li>
      </ul>
      <h3>In essence:</h3>
      <ul>
        <li>
          {" "}
          <code>let</code> is flexible for labeling things that might change
          (like sugar amount).
        </li>
        <li>
          <code>const</code> is for permanent labels that should never be
          rewritten (like stand location).
        </li>
      </ul>
      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/JavascriptVsECMAScript")}
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/namingVariable")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default VariablesDataTypes;

export const NamingVariable = () => {
  return (
    <div className="comments-container internet">
      <h1>Best Practices for Variable Naming in JavaScript</h1>
      <p>
        Naming variables in JavaScript is an essential aspect of writing clean,
        readable, and maintainable code. Following best practices for variable
        naming can help you and others understand your code better. {`Let's`}{" "}
        dive into some of the best practices for variable naming in JavaScript.
      </p>
      <ol>
        <li>
          {" "}
          Use descriptive names: Choose variable names that clearly describe the
          purpose or content of the variable. This makes your code
          self-explanatory and easier to understand.
          <p>
            For example, instead of using a single letter variable name like{" "}
            <b>x</b>, use a descriptive name like <b>customerAddress</b>,{" "}
            <b>orderTotal</b>, or <b>productName</b>.
          </p>
        </li>
        <li>
          Use camelCase: JavaScript follows the camelCase naming convention for
          variables, functions, and properties. This means that the first letter
          of the variable name is lowercase, and the first letter of each
          subsequent concatenated word is capitalized.
          <h3>For example </h3>
          <pre>
            <code>
              {`
let userName = "John Doe";
let orderDate = "2022-01-01";
let productPrice = 100.50;
              `}
            </code>
          </pre>
        </li>
        <li>
          Avoid using reserved keywords: JavaScript has a list of reserved
          keywords that cannot be used as variable names. Using these keywords
          as variable names can cause errors and confusion.
          <p>
            {" "}
            For example, you should not use <b>let, var, function,</b> or{" "}
            <b>class</b> as variable names. Here is a list of reserved keywords
            in JavaScript:
            <ul>
              <li>let</li>
              <li>var</li>
              <li>function</li>
              <li>class</li>
              <li>if</li>
              <li>else</li>
              <li>switch</li>
              <li>case</li>
              <li>default</li>
            </ul>
          </p>
        </li>
        <li>
          Use meaningful abbreviations: If you need to use abbreviations, make
          sure they are meaningful and commonly understood. Avoid using
          abbreviations that are not widely recognized or could be
          misinterpreted.
          <h3>For example </h3>
          <pre>
            <code>
              {`
let id = "12345";
let url = "https://example.com";
              `}
            </code>
          </pre>
        </li>
        <li>
          Use singular names for variables: When a variable represents a single
          value, use a singular name. This helps to avoid confusion when working
          with arrays or objects.
          <h3>For example </h3>
          <pre>
            <code>
              {`
let productName = "Apple iPhone";
let customerEmail = "john.doe@example.com";
              `}
            </code>
          </pre>
        </li>
        <li>
          {" "}
          Use consistent naming conventions: Consistency is key when naming
          variables. Choose a naming convention and stick to it throughout your
          codebase. This makes your code more readable and easier to maintain.
        </li>
        <li>
          {" "}
          Avoid using abbreviations for variable names: While abbreviations can
          be useful in some cases, they can also make your code harder to read
          and understand. Use them sparingly and only when they are widely
          recognized.
        </li>
        <li>
          {" "}
          Avoid using single-letter variable names: Single-letter variable names
          can be confusing and make your code harder to read. Use descriptive
          names that clearly convey the purpose of the variable.
        </li>{" "}
      </ol>
      <p>
        By following these best practices for variable naming in JavaScript, you
        can write code that is easier to read, understand, and maintain.
        Remember, good variable names are an essential part of writing clean and
        professional code.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/VariablesDataTypes")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/DataTypes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const DataTypes = () => {
  return (
    <div className="comments-container internet">
      <h1>JavaScript Data Types</h1>
      <h3>The Building Blocks of Your Data:</h3>
      <p>
        Just like any construction project, your JavaScript code needs various
        building blocks to create something meaningful. These building blocks
        are called data types, and they represent the different kinds of
        information you can store in your variables.
      </p>
      <h2>The Essential Data Types:</h2>
      <p>
        JavaScript has several fundamental data types for storing different
        types of information:
      </p>
      <ul>
        <li>
          {" "}
          <b>Numbers</b>: These represent numerical values, like whole numbers
          (10, 25) or decimals (3.14, -5.2).
        </li>
        <li>
          <b>Strings</b>: These represent sequences of text characters, enclosed
          in quotes {`(like "Hello, world!" or 'This is a string').`}
        </li>
        <li>
          <b>Booleans</b>: These represent logical values, either true or false.
          {`They're`} often used for making decisions in your code.
        </li>
        <li>
          {" "}
          <b>Undefined</b>: This indicates a variable that has been declared but
          {`hasn't`} been assigned a value yet.
        </li>
        <li>
          <b>Null</b>: This represents the intentional absence of any value.
          {`It's different from undefined as it's an explicit way to say there's
          nothing there.`}
        </li>
      </ul>
      <h3> Beyond the Basics:</h3>
      <p>
        JavaScript also offers some additional data types for more complex
        scenarios:
      </p>
      <ul>
        <li>
          <b>Symbols</b>: These are unique identifiers that can be used as
          property keys in objects. {`They're`} not very common for beginners
          but are useful in advanced situations.
        </li>
        <li>
          <b>Objects</b>: These are collections of key-value pairs that allow
          you to store and organize related data.
        </li>
        <li>
          <b>Arrays</b>: These are ordered lists of values, allowing you to
          group similar items together.
        </li>
      </ul>
      <h3>Choosing the Right Block (Data Type) for Your Variable:</h3>
      <p>
        When you create a variable using let, var, or const, you also specify
        the data type of the information it will hold. This helps JavaScript
        understand how to interpret and use the data effectively.
      </p>
      <h3> For example:</h3>
      <ul>
        <li>
          {" "}
          You might use a Number data type for a variable storing a game score.
        </li>
        <li>
          You might use a String data type for a variable containing a
          {`character's`} name.
        </li>
        <li>
          You might use a Boolean data type for a variable indicating whether a
          sound effect is on or off.
        </li>
      </ul>
      <h3>Connecting Data Types and Keywords:</h3>
      <p>
        {" "}
        The choice of keyword (<code> let, var</code>, or <code>const</code> )
        you use for a variable
        {`doesn't`} directly determine the data type. You can use any keyword
        with any data type. However, using let or const is generally recommended
        as they provide better control and organization over your variables.
      </p>
      <h3>In essence:</h3>
      <ul>
        <li>
          Data types define the kind of information your variables can hold
          (numbers, text, etc.).
        </li>
        <li>
          You choose the appropriate data type when creating a variable using
          keywords like <code> let, var</code>, or <code>const </code> .
        </li>
      </ul>
      <p>
        {`Let's`} break down each data type in JavaScript, one by one, along
        with explanations and practical examples to help you understand them as
        a beginner.
      </p>
      <ol>
        <li>
          <h1>1. Numbers</h1>
          <ul>
            <li>
              <b>What are they?</b> Numbers represent numerical values, like
              quantities or measurements. They can be whole numbers (integers)
              like 10, -25, or numbers with decimals like 3.14 (pi), -5.2
              (temperature). Imagine counting apples (integers) or measuring the
              length of something (decimals).
            </li>
            <li>
              <b>How to use them:</b> We can store numbers in variables using
              keywords like `let`, `var` (less common now), or `const`. Think of
              a variable as a labeled box where you keep your number value.
            </li>
            <pre>
              <code>
                {`
        // JavaScript

        let age = 30; // Stores your age (integer)
        const pi = 3.14159; // Stores the mathematical constant pi (decimal)
        var distance = 100.5; // Stores a distance (decimal)
        `}
              </code>
            </pre>
            <li>
              <b>Things to know:</b>
              <ul>
                <li>
                  <b>Math with numbers:</b> We can use special symbols like `+`
                  (add), `-` (subtract), `*` (multiply), and `/` (divide) to
                  perform calculations on our numbers. Just like with a
                  calculator!
                  <pre>
                    <code>
                      {`
              let sum = age + pi; // sum will be 33.14159 (adding age and pi)
              let difference = distance - 20; // difference will be 80.5 (subtracting 20 from distance)
              `}
                    </code>
                  </pre>
                </li>
                <li>
                  <b>Turning text into numbers:</b> Sometimes we might get
                  numbers as text (like user input). We can use functions like
                  `parseInt()` to convert text to whole numbers (integers) and
                  `parseFloat()` to convert text to decimals. Imagine turning a
                  written price tag (text) into a number you can use for
                  calculations.
                  <pre>
                    <code>
                      {`
              let userInput = "123.45"; // This is text!

              let userNumber = parseInt(userInput); // userNumber will be 123 (integer part)
              let userDecimal = parseFloat(userInput); // userDecimal will be 123.45 (decimal)
              `}
                    </code>
                  </pre>
                </li>
                <li>
                  <b>Fun fact:</b> Computers store numbers differently than
                  text. This special way allows for faster calculations!
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h1>2. Strings: Text Time!</h1>
          <ul>
            <li>
              <b>What are they?</b> Strings are basically fancy text holders in
              your code. Imagine a cool notepad where you write down words,
              numbers, symbols, emojis - anything!{" "}
              {`They're wrapped in either single quotes (\` ' \`) or double quotes (\` " \`)`}
              . Strings let you play around with text data.
            </li>
            <li>
              <b>How to use them:</b> We can store strings in boxes (variables)
              using words like `let`, `var` (not as popular anymore), or
              `const`. Think of these boxes as labeled sticky notes where you
              keep your text.
            </li>
            <pre>
              <code>
                {`
        // JavaScript

        let name = "Alice"; // Stores your awesome name
        const greeting = 'Yo, world!'; // A cool greeting message
        var message = "This is some text!"; // Just a random message
        `}
              </code>
            </pre>
            <li>
              <b>Fun stuff to know:</b>
              <ul>
                <li>
                  <b>Special characters:</b> Sometimes you might want quotes
                  inside your text, like someone saying something. We use a
                  backslash (`\`) before the quote to tell JavaScript {`it's`}{" "}
                  part of the message, not the end. Think of writing a quote
                  within a quote in a story! For example:
                  <pre>
                    <code>{`let quote = "He said, 'What up, world!'";`}</code>
                  </pre>
                </li>
                <li>
                  <b>Sticking things together:</b> We can join (concatenate)
                  multiple strings using a plus sign (` + `). Imagine putting
                  sentences together to make a longer message. For example:
                  <pre>
                    <code>{`let fullName = name + " Smith"; // fullName will be "Alice Smith"`}</code>
                  </pre>
                </li>
                <li>
                  <b>Peeking inside strings:</b> Each letter in a string has a
                  place (index) starting from 0. We can use square brackets `[]`
                  and the index to grab specific letters. Imagine finding a
                  specific letter in a word. For example:
                  <pre>
                    <code>{`let firstLetter = name[0]; // firstLetter will be "A"`}</code>
                  </pre>
                </li>
                <li>
                  <b>Changing strings:</b> Built-in functions like
                  `toUpperCase()` and `toLowerCase()` can transform strings.
                  Imagine shouting a message (uppercase) or whispering
                  (lowercase). For example:
                  <pre>
                    <code>{`let shoutedName = name.toUpperCase(); // shoutedName will be "ALICE"`}</code>
                  </pre>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Note</h2>
          <p>
            In JavaScript, anything between quotation marks turns into text,
            even numbers! So if you write {`"100"`}, it becomes text, not the
            number 100. Remember, anything with quotes is treated as text
            (string) in JavaScript.
          </p>
        </li>
        <li>
          <h1>3. Booleans: True or False?</h1>
          <ul>
            <li>
              <b>What are they?</b> Imagine a light switch. It can be either
              **on** or **off**. Booleans in code are like that switch! They can
              only be one of two things: **true** (like the light being on) or
              **false** (like the light being off). Booleans help your code make
              decisions based on these two simple options.
            </li>
            <li>
              <b>How to use them:</b>{" "}
              {`We can store these "on" or "off" values in variables
      using keywords like "let" or "const". Think of it like a labeled box where you
      put either "true" or "false" depending on what you want to remember.`}
            </li>
            <pre>
              <code>
                {`
        // JavaScript

        let isLoggedIn = false;  // Not logged in (like light off)
        const isRaining = true;   // Raining (like light on)
        var isGameOver = false;   // Game not over (like light off)
        `}
              </code>
            </pre>
            <li>
              <b>More about booleans:</b>
              <ul>
                <li>
                  <b>Making choices:</b> Booleans are like little helpers that
                  tell your code what to do next. Imagine a game where you need
                  a key to open a door. You can use a boolean like{" "}
                  {`"hasKey" to be true (like having the
          key) or false (like not having it). Based on that, your code can show
          a message saying "Door unlocked!" or "You need a key."`}
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h1>4. {`What's`} in the Box?</h1>
          <ul>
            <li>
              <b>Imagine you have boxes to store your things.</b> Sometimes, you
              might declare a box (like a variable) but forget to put anything
              inside yet. This is what **undefined** means in code. The variable
              exists, but {`it's`}
              like an empty box waiting for something.
            </li>
            <li>
              <b>
                On the other hand, you might also have empty boxes on purpose.
              </b>
              Maybe you want a box to hold something later, but right now,{" "}
              {`it's
      intentionally empty. This is what **null** means in code. It's like a
      special way of saying the box is supposed to be empty for now.`}
            </li>
            <pre>
              <code>
                {`
        // JavaScript

        let toyBox;  // This box (variable) is declared but empty (undefined)
        console.log(toyBox); // This might print "undefined" because it's empty

        let giftBox = null; // This box (variable) is intentionally empty (null)
        console.log(giftBox); // This will print "null" because it's supposed to be empty
        `}
              </code>
            </pre>
            <li>
              <b>Tips for your boxes:</b>
              <ul>
                <li>
                  You can check if your box has something inside using a special
                  tool called `typeof`. This is like peeking inside to see if{" "}
                  {`there's`} a toy (value) or not.
                </li>
                <li>
                  {`It's`} a good idea to try to fill your boxes with things
                  (values) as soon as you know what you want to keep in them.
                  This helps avoid any confusion later in your code.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <h3> Going further:</h3>
        <p>
          As you progress in your JavaScript journey, {`you'll`} encounter more
          complex data types:
        </p>
        <p>
          Get ready to learn more about objects, arrays, and symbols later on!
          For now, {`we're just introducing them to show you that they're`}
          different ways to store information in JavaScript, just like numbers
          and other data types.
        </p>
        <li>
          <b>Symbols</b>: Unique identifiers used for object properties.
        </li>
        <li>
          <b>Objects</b>: Collections of key-value pairs to store related data.
        </li>
        <li>
          <b>Arrays</b>: Ordered lists of values that allow you to group similar
          items together.
        </li>
      </ol>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/namingVariable")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/operator")}>
          Next
        </button>
      </div>
    </div>
  );
};
