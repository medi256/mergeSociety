const Loops = () => {
  return (
    <div className="comments-container internet">
      <h1>Loops: What They Are and How They Work</h1>
      <p>
        Think of loops as your personal automation crew. {`They're`} the
        tireless workers who take care of those repetitive tasks that would
        otherwise leave you stuck copy-pasting code endlessly. Not only do loops
        save you time, but they also make your code cleaner and easier to
        understand – less code, more happy brain cells!
      </p>
      <p>
        One advantage of loops is that they help us repeat tasks efficiently.
        For example, imagine you want to print the numbers 1 to 100 in the
        console. Without loops, {`you'd`} have to write <code>console.log</code>{" "}
        for each number. But with loops, you only need to write the{" "}
        <code>console.log</code> statement once, along with a loop that iterates
        through the numbers. This saves time and code.
      </p>
      <h3>
        JavaScript has a few different loop flavors, each with its own
        superpower:
      </h3>
      <h2>
        1. The <code>for</code> loop:
      </h2>
      <p>
        The <code>for </code>loop: This {`loop's`} your go-to when you know
        exactly how many times you want to run something. Imagine making
        pancakes – you gotta flip them a specific number of times (say, 3
        times). The for loop lets you set up a counter (like a variable named
        flip) to keep track of those <b>flips</b>.
      </p>
      <p>
        {" "}
        This loop has three parts, separated by semicolons (;). Imagine them as
        three steps your loop follows:
      </p>
      <ul>
        <li>
          {" "}
          <b>Initialization</b>: {`Here's`} where you set up your loop counter,
          like that flip variable in the pancake example. You can use{" "}
          <code>let</code> or <code>const</code> to declare it.
        </li>
        <li>
          {" "}
          <b>Condition</b>: This is the checkpoint that decides how long the
          party goes on. The loop keeps running as long as this condition is
          <code>true</code>. Think of it as the bouncer at the pizza party –
          they only let you in (keep looping) if {`there's`} pizza left.
        </li>
        <li>
          <b>Increment/Decrement</b>: This part updates your counter after each
          loop. In the pancake example, we used <b>flip++</b> to increment (add
          1) to keep track of the <b>flips</b>. You can also decrement (subtract
          1) if needed.
        </li>
      </ul>
      <h3> {`Here's`} the syntax with explanations:</h3>
      <pre>
        <code>
          {`
//JavaScript


for (let counter = startingValue; condition; updateCounter) {
  // Code to be executed repeatedly
}
            `}
        </code>
      </pre>
      <h3>{`Here's`} a quick example:</h3>
      <pre>
        <code>
          {`
//JavaScript


for (let flip = 1; flip <= 3; flip++) {
  console.log("Flipping pancake number", flip);
}
            `}
        </code>
      </pre>
      <p>
        This loop runs 3 times (once for each flip), printing a message to let
        you know your pancakes are getting golden brown.
      </p>
      <h2>
        2. The <code>while</code> loop:
      </h2>
      <p>
        The <code>while</code> loop: This loop is all about letting the good
        times roll as long as a certain condition is met. Picture yourself at a
        pizza party – you keep on grabbing slices{" "}
        {`(the code) as long asthere's`}
        pizza left (the condition).
      </p>
      <p>This loop is a bit more straightforward. It has one main part:</p>
      <p>
        <b>Condition</b>: Similar to the for loop, this is the gatekeeper. The
        loop keeps running as long as the condition is <code>true</code>.
      </p>
      <h3>{`Here's`} the syntax:</h3>
      <pre>
        <code>
          {`
JavaScript


while (condition) {
  // Code to be executed repeatedly
}
            `}
        </code>
      </pre>
      <h3>{`Here's`} an example:</h3>
      <pre>
        <code>
          {`
//JavaScript


let pizzaLeft = true;
while (pizzaLeft) {
  console.log("Another slice, please!");
  //... (some code to check if the pizza's gone)
  pizzaLeft = false; // Stop the loop when the pizza's gone
}
          
          `}
        </code>
      </pre>
      <p>
        This loop keeps printing {`"Another slice, please!" until there's`} no
        more pizza left, stopping the loop when <b>pizzaLeft</b> becomes false.
      </p>
      <h2>
        3. The <code>for...of</code> loop:
      </h2>
      <p>
        The <code>for...of</code> loop: This loop is your best friend for
        working with lists of stuff, like your music playlist. It lets you
        easily loop through each song in the list, one by one.
      </p>
      <p>
        This loop is designed specifically for iterating through lists{" "}
        {`(like our
        music playlist). It's pretty simple:`}
      </p>
      <ul>
        <li>
          {" "}
          <b>Loop variable</b>: This is where you store the current item from
          the list during each loop.
        </li>
        <li>
          {" "}
          <b>Iterable object</b>: This is the list (or any collection) you want
          to loop through.
        </li>
      </ul>
      <h3>{`Here's`} the syntax:</h3>
      <pre>
        <code>
          {`
//JavaScript


for (const item of iterableObject) {
  // Code to be executed for each item in the list
}
            `}
        </code>
      </pre>
      <h3>Imagine you have a killer playlist:</h3>
      <pre>
        <code>
          {`
//JavaScript


const playlist = ["Rock Anthem", "Chill Vibes", "Dance Party"];
for (const song of playlist) {
  console.log("Time to jam out to", song);
}
            `}
        </code>
      </pre>
      <p>
        This loop cruises through your playlist, picking up each song and
        printing a message for each one.
      </p>
      <p>
        The example above uses an array. An array is a fundamental data
        structure in JavaScript that allows you to store a collection of items
        in a single variable. In this case, the array holds the list of songs.
        {`We'll cover arrays in more detail in the next lessons, but for now, just
        understand that they are a convenient way to group related data. If
        you're new to programming, it's generally recommended to learn concepts
        step-by-step, so don't worry about jumping ahead – we'll get to arrays`}
        soon!
      </p>
      <h3>Best Practices:</h3>
      <ul>
        <li>
          Use descriptive variable names and comments to make the code more
          readable.
        </li>
        <li>Avoid complex loop logic that is hard to read or maintain.</li>
        <li>Use functions to encapsulate loop logic.</li>
      </ul>
      <h3>Common Use Cases:</h3>
      <ul>
        <li>Iterating over a list of items.</li>
        <li>Reading input from a user.</li>
        <li>Implementing algorithms.</li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/ControlFlow")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/DefiningCallingFunc")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Loops;
