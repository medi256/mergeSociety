import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Build a JavaScript Quiz Game - Tutorial for Beginners",
  description:
    "Learn how to build a JavaScript quiz game with this step-by-step tutorial. From setting up your workspace to implementing quiz logic, we'll guide you through each step to create a fun, interactive game.",
  keywords:
    "JavaScript, quiz game, beginner tutorial, HTML, CSS, JavaScript quiz,javascript project, beginner javascript project,  tutorial, web development",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/3js",
  },

  openGraph: {
    title: "Build a JavaScript Quiz Game - Tutorial for Beginners",
    description:
      "Master JavaScript by building a quiz game in this step-by-step tutorial. Learn HTML, CSS, and JavaScript while creating a fun quiz game from scratch.",
  },
};

const JavaScriptQuizGame = () => {
  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Build a JavaScript Quiz Game - Tutorial for Beginners
        </h1>
      </div>

      <h2>Introduction to the JavaScript Quiz Game</h2>
      <h3>Welcome to Building a JavaScript Quiz Game!</h3>

      <p>
        In this project, we'll create a simple quiz game where users can answer
        multiple-choice questions. This project will help you learn the basics
        of arrays, functions, and quiz logic in JavaScript.
      </p>
      <p>Here's what we'll cover in this tutorial:</p>
      <ul>
        <li>Setting up the HTML structure for the quiz game.</li>
        <li>Applying basic styling to the quiz game.</li>
        <li>Adding JavaScript to handle quiz logic and user interactions.</li>
        <li>Managing questions, tracking scores, and displaying results.</li>
        <li>Making the quiz game responsive for different screen sizes.</li>
      </ul>
      <p>
        By the end of this project, you'll have a fully functional JavaScript
        quiz game. Let's get started by setting up our project files!
      </p>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>Before we start coding, let's set up a workspace for our project:</p>
      <ol>
        <li>
          On Windows: Right-click on your desktop, select "New" &gt; "Folder",
          and name it "javascript-quiz-game".
        </li>
        <li>
          On Mac: Right-click on your desktop, select "New Folder", and name it
          "javascript-quiz-game".
        </li>
        <li>
          <strong>Open the Folder in a Text Editor:</strong>
          <ul>
            <li>
              <strong>Visual Studio Code:</strong> If you have VS Code,
              right-click on the "javascript-quiz-game" folder and select "Open
              with Code".
            </li>
            <li>
              <strong>Other Text Editors:</strong> For Notepad or TextEdit,
              simply double-click on the folder to open it.
            </li>
          </ul>
        </li>

        <strong>Create HTML, CSS, and JavaScript Files:</strong>
        <ul>
          <li>
            In VS Code: Right-click in the file explorer panel, select "New
            File", and create three files: "index.html", "styles.css", and
            "script.js".
          </li>
          <li>
            In Notepad/TextEdit: Create a new file, then immediately "Save As"
            and create three files: "index.html", "styles.css", and "script.js".
            Make sure to save them in your "javascript-quiz-game" folder.
          </li>
        </ul>
      </ol>
      <p>
        <strong>Explanation:</strong> We create a new folder to keep our project
        organized. The "index.html" file will contain the HTML structure,
        "styles.css" will hold our CSS rules for styling, and "script.js" will
        contain our JavaScript code. The "index.html" file is the main page of
        our quiz game, and it's standard to name it "index.html".
      </p>
      <p>
        Great job! You've set up your workspace. In the next step, we'll start
        building the HTML structure for our quiz game.
      </p>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Quiz Game HTML</h3>

      <p>
        Before we dive into CSS and JavaScript, let's set up the HTML structure
        for our quiz game:
      </p>
      <ol>
        <li>
          <strong>Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>Add the Quiz Game HTML:</strong> Copy and paste the following
          code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Quiz Game</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>JavaScript Quiz Game</h1>
    <div id="quiz-container">
      <div id="question"></div>
      <ul id="options"></ul>
      <button id="next-button" disabled>Next Question</button>
    </div>
    <div id="result" style="display: none;">
      <h2>Quiz Results</h2>
      <p id="score"></p>
      <button id="restart-button">Restart Quiz</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the HTML structure:</p>
      <ul>
        <li>
          <code>&lt;div class="container"&gt;</code>: Represents the container
          for the quiz game.
        </li>
        <li>
          <code>&lt;h1&gt;JavaScript Quiz Game&lt;/h1&gt;</code>: The title of
          the quiz game.
        </li>
        <li>
          <code>&lt;div id="quiz-container"&gt;</code>: The container for the
          quiz questions and options.
        </li>
        <li>
          <code>&lt;div id="question"&gt;</code>: The element for displaying the
          current question.
        </li>
        <li>
          <code>&lt;ul id="options"&gt;&lt;/ul&gt;</code>: The unordered list
          for displaying the answer options.
        </li>
        <li>
          <code>
            &lt;button id="next-button" disabled&gt;Next Question&lt;/button&gt;
          </code>
          : The button for navigating to the next question, initially disabled.
        </li>
        <li>
          <code>&lt;div id="result" style="display: none;"&gt;</code>: The
          container for displaying the quiz results, initially hidden.
        </li>
        <li>
          <code>&lt;h2&gt;Quiz Results&lt;/h2&gt;</code>: The title for the quiz
          results.
        </li>
        <li>
          <code>&lt;p id="score"&gt;&lt;/p&gt;</code>: The element for
          displaying the user's score.
        </li>
        <li>
          <code>
            &lt;button id="restart-button"&gt;Restart Quiz&lt;/button&gt;
          </code>
          : The button for restarting the quiz.
        </li>
        <li>
          <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
          the JavaScript file for handling the app's functionality.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll start applying CSS styles to our quiz
        game.
      </p>

      <h2>Styling the Quiz Game</h2>
      <h3>Styling the Quiz Game</h3>
      <p>
        Let's start by styling the quiz game to ensure a consistent and clean
        layout.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Quiz Game Styles:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.5rem;
}

#quiz-container {
  margin-bottom: 20px;
}

#question {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

#options {
  list-style: none;
  padding: 0;
  margin: 0;
}

#options li {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

#options li:hover {
  background-color: #e0e0e0;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 20px;
}

#score {
  font-size: 1.2rem;
  margin-bottom: 20px;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>body</code>: Sets the default font, removes default margin and
          padding, sets a light gray background, and centers the content using
          flexbox.
        </li>
        <li>
          <code>.container</code>: Styles the container with a white background,
          padding, rounded corners, a shadow, and a fixed width.
        </li>
        <li>
          <code>h1</code>: Styles the title with a larger font size and margin.
        </li>
        <li>
          <code>#quiz-container</code>: Adds margin to the quiz container.
        </li>
        <li>
          <code>#question</code>: Styles the question with a larger font size
          and margin.
        </li>
        <li>
          <code>#options</code>: Removes the default list style and padding from
          the options list.
        </li>
        <li>
          <code>#options li</code>: Styles the list items for the answer options
          with a light gray background, padding, margin, border-radius, cursor,
          and transition for smooth changes.
        </li>
        <li>
          <code>#options li:hover</code>: Changes the background color of the
          list items on hover.
        </li>
        <li>
          <code>button</code>: Styles the buttons with a blue background, white
          text, no border, padding, border-radius, cursor, and transition for
          smooth changes.
        </li>
        <li>
          <code>button:hover</code>: Changes the background color of the buttons
          on hover.
        </li>
        <li>
          <code>#result</code>: Adds margin to the result container.
        </li>
        <li>
          <code>#score</code>: Styles the score with a larger font size and
          margin.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled quiz game.
      </p>
      <p>
        In the next step, we'll start adding JavaScript to handle quiz logic and
        user interactions.
      </p>

      <h2>Adding JavaScript for Quiz Logic: Part 1</h2>
      <h3>Adding JavaScript for Quiz Logic: Part 1</h3>

      <p>
        Let's start adding JavaScript to handle the quiz logic and user
        interactions.
      </p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Defining the Quiz Data:</strong> Copy and paste the following
          JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    answer: "William Shakespeare"
  }
];`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>const quizData = [ ... ]</code>: Defines an array of objects
          containing the quiz questions, options, and answers.
        </li>
        <li>
          Each object in the array represents a question and includes:
          <ul>
            <li>
              <code>question</code>: The text of the question.
            </li>
            <li>
              <code>options</code>: An array of possible answers.
            </li>
            <li>
              <code>answer</code>: The correct answer to the question.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Save your "script.js" file. In the next step, we'll add the
        initialization code and select the necessary DOM elements.
      </p>

      <h2>Adding JavaScript for Quiz Logic: Part 2</h2>
      <h3>Adding JavaScript for Quiz Logic: Part 2</h3>
      <p>
        Let's add the initialization code and select the necessary DOM elements.
      </p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Initialization and DOM Selection:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const restartButton = document.getElementById('restart-button');

  // Function to load the current question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(li);
    });

    nextButton.disabled = true;
  }

  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }

    nextButton.disabled = false;
  }

  // Function to show the quiz results
  function showResult() {
    resultContainer.style.display = 'block';
    scoreElement.textContent = \`You scored \${score} out of \${quizData.length}\`;
  }

  // Event listener for the next button
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  // Event listener for the restart button
  restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    loadQuestion();
  });

  // Load the first question
  loadQuestion();
});`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>let currentQuestionIndex = 0</code>: Initializes the index of
          the current question to 0.
        </li>
        <li>
          <code>let score = 0</code>: Initializes the user's score to 0.
        </li>
        <li>
          <code>{`document.addEventListener('DOMContentLoaded', () => { ... })`}</code>
          : Ensures that the JavaScript code runs only after the DOM has been
          fully loaded.
        </li>
        <li>
          <code>
            const questionElement = document.getElementById('question');
          </code>
          : Selects the element for displaying the question.
        </li>
        <li>
          <code>
            const optionsElement = document.getElementById('options');
          </code>
          : Selects the element for displaying the answer options.
        </li>
        <li>
          <code>
            const nextButton = document.getElementById('next-button');
          </code>
          : Selects the "Next Question" button.
        </li>
        <li>
          <code>
            const resultContainer = document.getElementById('result');
          </code>
          : Selects the container for displaying the quiz results.
        </li>
        <li>
          <code>const scoreElement = document.getElementById('score');</code>:
          Selects the element for displaying the user's score.
        </li>
        <li>
          <code>
            const restartButton = document.getElementById('restart-button');
          </code>
          : Selects the "Restart Quiz" button.
        </li>
        <li>
          <code>{`function loadQuestion() { ... }`}</code>: Defines the function
          to load the current question and its options.
        </li>
        <li>
          <code>{`function checkAnswer(selectedOption) { ... }`}</code>: Defines
          the function to check the selected answer and update the score.
        </li>
        <li>
          <code>{`function showResult() { ... }`}</code>: Defines the function
          to display the quiz results.
        </li>
        <li>
          <code>{`nextButton.addEventListener('click', () => { ... })`}</code>:
          Adds an event listener to the "Next Question" button to handle the
          click event and load the next question or show the results.
        </li>
        <li>
          <code>{`restartButton.addEventListener('click', () => { ... })`}</code>
          : Adds an event listener to the "Restart Quiz" button to handle the
          click event and reset the quiz.
        </li>
        <li>
          <code>loadQuestion();</code>: Calls the <code>loadQuestion</code>
          function to load the first question when the page loads.
        </li>
      </ul>
      <p>
        Save your "script.js" file. Now, if you open "index.html" in a web
        browser, you'll be able to play the quiz game, answer questions, and see
        your score at the end.
      </p>
      <p>
        In the next step, we'll make the quiz game responsive for different
        screen sizes.
      </p>

      <h2>Making the Quiz Game Responsive</h2>
      <h3>Making the Quiz Game Responsive</h3>

      <p>
        Let's ensure our quiz game looks great on various devices by adding
        responsive design using CSS media queries.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Responsive Design Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  #question {
    font-size: 1rem;
  }

  #options li {
    font-size: 0.9rem;
    padding: 8px;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  #score {
    font-size: 1rem;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>@media (max-width: 600px)</code>: A media query for screens up
          to 600px wide (e.g., mobile phones).
        </li>
        <li>
          <code>.container</code>: Adjusts the width of the container to 90% for
          better visibility on smaller screens.
        </li>
        <li>
          <code>#question</code>: Adjusts the font size of the question for
          better readability on smaller screens.
        </li>
        <li>
          <code>#options li</code>: Adjusts the font size and padding of the
          answer options for better readability on smaller screens.
        </li>
        <li>
          <code>button</code>: Adjusts the padding and font size of the buttons
          for better readability on smaller screens.
        </li>
        <li>
          <code>#score</code>: Adjusts the font size of the score for better
          readability on smaller screens.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you resize your browser window or
        view the quiz game on different devices, you'll see the layout adapt to
        different screen sizes.
      </p>
      <p>In the next step, we'll add final touches to the quiz game.</p>

      <h2>Adding Final Touches</h2>

      <h3>Adding Final Touches</h3>
      <p>
        Let's add the final touches to our quiz game to ensure it is fully
        functional and visually appealing.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Final Touches:</strong> Copy and paste the following CSS
          code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.container {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

#options li:hover {
  transform: scale(1.05);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.container</code>: Adds a more pronounced shadow to the
          container for a better visual effect.
        </li>
        <li>
          <code>button</code>: Adds a transition effect for background color and
          transform to the buttons.
        </li>
        <li>
          <code>button:hover</code>: Scales the buttons slightly larger on hover
          to create a subtle zoom effect.
        </li>
        <li>
          <code>#options li:hover</code>: Scales the answer options slightly
          larger on hover to create a subtle zoom effect.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the final touches in action.
      </p>
      <p>
        Congratulations! You've completed the JavaScript project, "JavaScript
        Quiz Game." You've learned how to create a simple quiz game where users
        can answer multiple-choice questions. You've also learned the basics of
        arrays, functions, and quiz logic in JavaScript.
      </p>
      <p>
        Feel free to continue customizing your quiz game and exploring more
        JavaScript techniques. Happy coding!
      </p>
    </div>
  );
};

export default JavaScriptQuizGame;
