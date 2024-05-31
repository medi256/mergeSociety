const ControlFlow = () => {
  return (
    <div className="comments-container internet">
      <h1>Exploring Conditional Statements</h1>
      <p>
        Imagine{" "}
        {`you're building a program, like a game or an app. Wouldn't it be
        cool if it could react differently depending on what you do? That's the
        magic of conditional statements! They're like superpowers that let your
        program make choices. We'll explore how to use them to create exciting
        possibilities and bring your programs to life!`}
      </p>
      <p>
        Bring your programs to life with {`JavaScript's`} secret weapons: if,
        else, and switch statements! These powerful tools let your code make
        decisions and react to different situations, just like you would.
      </p>
      <h2>
        The <b>if/else</b> Statement: Making Informed Decisions in JavaScript
      </h2>
      <p>
        The <code>if/else</code> statement is a cornerstone of JavaScript
        programming, empowering you to create programs that exhibit
        decision-making capabilities. It allows you to execute different code
        blocks based on whether a specific condition evaluates to{" "}
        <code>true</code> or <code>false</code>.
      </p>
      <h2>Breaking Down the Syntax:</h2>
      <pre>
        <code>
          {`
//JavaScript


if (condition) {
  // Code to be executed if the condition is true
} else if (condition2) {
  // Code to be executed if the first condition is false and condition2 is true
} else {
  // Code to be executed if all previous conditions are false
}
          
          `}
        </code>
      </pre>
      <h3>Key Components:</h3>
      <ul>
        <li>
          <b>condition</b>: This is an expression that returns either{" "}
          <code> true</code> or
          <code>false</code>. It determines which code block gets executed.
        </li>
        <li>
          {" "}
          <b>if</b>: This keyword marks the beginning of the conditional
          statement.
        </li>
        <li>
          <b>{`{} (Curly braces)`}</b>: These braces enclose the code that will
          be executed if the corresponding condition is <code>true</code>. They
          are essential for grouping multiple statements within a code block,
          even if {`there's`} just one statement.
        </li>
        <li>
          {" "}
          <code>else if</code>: This keyword allows you to check additional
          conditions if the first <b>if</b> condition is <code>false</code>. You
          can chain multiple <code>else if</code> statements as needed.
        </li>
        <li>
          <code>else</code>: This keyword specifies the code block to be
          executed if all preceding conditions evaluate to <code>false</code>.{" "}
          {`It's`} optional if you only have two possible outcomes.
        </li>
      </ul>

      <h3>Individual Component Explanations:</h3>
      <p>
        {" "}
        <b>{`() (Parentheses)`}</b>: Parentheses are crucial for defining the
        order of operations within the <b>condition</b>. They ensure that
        complex expressions are evaluated correctly.
      </p>
      <p>
        <code>if</code>: The <code>if</code> keyword initiates the conditional
        statement. If the <b>condition</b> within the parentheses evaluates to{" "}
        <b>true</b>, the code block within the <b>{`{}`}</b> following{" "}
        <code>if</code> is executed.
      </p>
      <p>
        <code>else if</code>: The <code>else if</code> keyword serves to check
        additional conditions. If the <b>condition</b> in the initial{" "}
        <code>if</code> statement is <code>false</code>, and the{" "}
        <b>condition</b> within the <code>else if</code> statement is{" "}
        <code>true</code>, then the code block following <code>else if</code> is
        executed. You can have multiple <code>else if</code> statements to
        handle more complex scenarios.
      </p>
      <p>
        <code>else</code>: The <code>else</code> keyword provides a default code
        block to execute if all preceding conditions evaluate to false. {`It's`}
        optional if you only have two conditions (<code>true</code> or{" "}
        <code>false</code> ).
      </p>
      <h3>Examples:</h3>
      <p>
        {" "}
        Simple <code>if/else</code> Example:
      </p>
      <pre>
        <code>
          {`
//JavaScript


let age = 18;

if (age >= 18) { // Condition: age is greater than or equal to 18
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
          `}
        </code>
      </pre>
      <p>
        In this example, <code>if</code> age is 18 or greater, the{" "}
        <b>console.log</b>
        statement inside the <code>if</code> block is executed, printing{" "}
        {`"You
        are eligible to vote."`}{" "}
        Otherwise, the <code>else</code> {`block's`}
        <b>console.log</b> statement is executed, printing{" "}
        {`"You are not eligible
        to vote."`}
      </p>
      <h3>
        <code>if/else if/else</code> Example:
      </h3>
      <pre>
        <code>
          {`
//JavaScript


let grade = 85;

if (grade >= 90) {
  console.log("Excellent! You got an A.");
} else if (grade >= 80) {
  console.log("Great job! You got a B.");
} else {
  console.log("Keep practicing! You got a C or lower.");
}
          `}
        </code>
      </pre>
      <p>
        Here, the <code>if</code> condition checks if <b>grade</b> is 90 or
        higher. If so, the {`"Excellent!"`} message is printed. If not, the{" "}
        <code>else if</code>
        condition is evaluated. If <b>grade</b> is 80 or higher, the{" "}
        {`"Great
        job!"`}{" "}
        message is printed. Otherwise, the <code>else</code> {`block's`}
        message is displayed.
      </p>
      <h3>Remember:</h3>
      <ul>
        <li>
          {" "}
          Indentation is not strictly required in JavaScript, but {`it's`} a
          highly recommended practice for readability and maintainability of
          your code.
        </li>
        <li>
          {" "}
          You can nest <code>if/else</code> statements within each other to
          create more complex decision-making logic.
        </li>
        <li>
          {" "}
          Always consider handling unexpected inputs or edge cases to make your
          programs more robust.
        </li>
      </ul>
      <h2>The switch Statement: Streamlining Multi-Condition Handling</h2>
      <p>
        The <code>switch</code> statement offers a streamlined approach to
        handling multiple conditions in JavaScript, often preferable to lengthy
        <code>if/else</code> chains. It enables you to test a variable against a
        set of distinct values and execute corresponding code blocks based on
        the match.
      </p>
      <h3>Breakdown of the Syntax:</h3>
      <pre>
        <code>
          {`
//JavaScript


switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  default:
    // Code to be executed if expression doesn't match any case
}
          
          `}
        </code>
      </pre>
      <h3>Key Components Explained:</h3>
      <p>
        <code>expression</code>: This {`expression's`} value is evaluated
        against each <code>case</code> label. If {`there's`} a match, the
        associated code block is executed.
      </p>
      <p>
        {" "}
        <code>switch</code>: This keyword initiates the switch statement.
      </p>
      <p>
        <code>case value:</code>: Each <code>case</code> label represents a
        potential value of the <b>expression</b>. If the <b>expression</b>{" "}
        strictly equals <code>{`(===)`}</code> the <b>value</b>, the code block
        after that case is executed.
      </p>
      <p>
        <code>break</code>: The <code>break</code> statement is crucial for
        preventing {`"fall through"`} behavior. Once a matching case is found
        and its code executes, <code>break</code> terminates the switch
        statement, stopping further evaluation of subsequent cases. Omitting
        <code>break</code> can lead to unintended execution of the next{" "}
        {`case's`}
        code block.
      </p>
      <p>
        <code>default</code>: This optional label serves as a catch-all if the
        <b>expression</b> {`doesn't`} match any defined <code>case</code>{" "}
        values. If {`there's`} no match and no <code>default</code> label, no
        code within the switch statement will be executed.
      </p>
      <h3>Examples:</h3>
      <p>Basic switch Example:</p>
      <pre>
        <code>
          {`
//JavaScript


let grade = 87;

switch (grade) {
  case 90:
    console.log("Excellent! You got an A.");
    break;
  case 80:
    console.log("Great job! You got a B.");
    break;
  default:
    console.log("Keep practicing! You got a C or lower.");
}
          `}
        </code>
      </pre>
      <p>
        In this example, the <b>grade</b> variable is evaluated against the case
        labels. If <b>grade</b> is 90, the {`"Excellent!"`} message is printed
        with the <code>break</code> statement preventing execution from
        continuing to the next case. If <b>grade</b> is 80, the {`"Great job!"`}{" "}
        message is displayed. Otherwise, the <code>default</code> block takes
        over.
      </p>
      <h3>switch with String Values:</h3>
      <pre>
        <code>
          {`
//JavaScript


let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("It's the first day of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a weekday.");
}
          `}
        </code>
      </pre>
      <p>
        Here, the <code>day </code> variable is checked against{" "}
        <code>day </code> names. Matching cases print specific messages, with
        <code>break</code> statements ensuring correct execution flow. The
        <code>default</code> label handles non-matching days.
      </p>
      <h3>Remember:</h3>
      <ul>
        <li>
          <code>switch </code>statements work best when checking for specific,
          distinct values.
        </li>
        <li>
          {" "}
          Using <code>break</code> statements is essential to prevent unintended
          fall-through behavior.
        </li>
        <li>
          Consider using <code>if/else</code> for more complex conditions that
          {`don't`} involve testing against a set of discrete values.
        </li>
        <li>Proper indentation enhances code readability.</li>
      </ul>

      <p>
        With these conditional statements, we can create more dynamic and
        responsive programs that adapt to different scenarios and user inputs.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/comments")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/loops")}>Next</button>
      </div>
    </div>
  );
};

export default ControlFlow;
