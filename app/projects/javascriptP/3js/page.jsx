import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Build a JavaScript Quiz Game | Beginner-Friendly Tutorial",
  description:
    "Learn how to create a fun quiz game using JavaScript, HTML, and CSS. This step-by-step tutorial covers arrays, functions, and quiz logic. Perfect for beginners!",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/3js",
  },
  openGraph: {
    title: "Build a JavaScript Quiz Game | Beginner-Friendly Tutorial",
    description:
      "Create a fun quiz game and learn arrays, functions, and quiz logic. A perfect project for beginners!",
  },
  keywords: [
    "javascript projects",
    "web development projects",
    "arrays javascript project",
    "functions javascript project",
    "quiz logic javascript project",
    "css styling project",
    "responsive design css javascript project",
    "quiz game javascript project",
    "quiz game javascript css html project",
    "javascript project for beginners",
    "js project",
    "html css javascript project",
    "follow  a  beginner  javascript  project  step  by  step",
    "build a quiz game  with  javascript ",
    "Building a JavaScript Quiz Game",
  ],
};

const QuizGame = () => {
  return (
    <div className="project-container">
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Building a JavaScript Quiz Game
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584905/Quiz-App-01_zwez9e.png"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="project-image"
          priority
        />
        <h2 className="project-info">
          <Image
            src={
              "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
            }
            alt={"Personal Website Example"}
            width={600}
            height={400}
            className="founders-image"
            priority
          />
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <span className="project-date">| January 15, 2025</span>
        </h2>
        <p>
          Welcome to the beginner-friendly tutorial on building a JavaScript
          Quiz Game! In this project, we'll create a fun quiz game where users
          can answer multiple-choice questions. This project is an excellent way
          to learn how to use arrays and functions to manage questions, track
          scores, and display results.
        </p>

        <h2>Setting Up Your Workspace</h2>
        <h3>Creating Your Project Folder and Files</h3>
        <p>
          Before we begin coding, let's set up a workspace for our project. This
          folder will be your digital canvas, where you'll keep all the project
          files organized.
        </p>
        <div
          className="step-box"
          style={{
            backgroundColor: "#fff3e0",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h4>Step 1: Create Your Project Folder</h4>
          <p>
            Create a new folder on your computer to store all your project
            files. You can name it "javascript-quiz-game".
          </p>
          <strong>On Windows:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New" &gt; "Folder".</li>
            <li>Name it "javascript-quiz-game".</li>
          </ol>
          <strong>On Mac:</strong>
          <ol>
            <li>Right-click on your desktop.</li>
            <li>Choose "New Folder".</li>
            <li>Name it "javascript-quiz-game".</li>
          </ol>
        </div>

        <div
          className="step-box"
          style={{
            backgroundColor: "#e3f2fd",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h4>Step 2: Get Your Text Editor Ready</h4>
          <p>
            You'll need a text editor to write your code. We recommend Visual
            Studio Code, which is free and beginner-friendly.
          </p>
          <ol>
            <li>
              Download Visual Studio Code from{" "}
              <span style={{ color: "#0066cc" }}>code.visualstudio.com</span>.
            </li>
            <li>Install it on your computer.</li>
            <li>
              Open VS Code and drag your "javascript-quiz-game" folder into the
              window.
            </li>
          </ol>
        </div>

        <div
          className="step-box"
          style={{
            backgroundColor: "#e8f5e9",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h4>Step 3: Create Your Project Files</h4>
          <p>We need three essential files for our project:</p>
          <ul>
            <li>
              <strong>index.html</strong> - The HTML file is like the blueprint
              of our app.
            </li>
            <li>
              <strong>styles.css</strong> - The CSS file is where we'll add
              styles to make our app look beautiful.
            </li>
            <li>
              <strong>script.js</strong> - The JavaScript file is where the
              magic happens, making our app interactive.
            </li>
          </ul>
          <p>To create these files:</p>
          <ol>
            <li>Open VS Code.</li>
            <li>
              <strong>index.html</strong> - Click "New File" and save it as
              "index.html".
            </li>
            <li>
              <strong>styles.css</strong> - Click "New File" again and save it
              as "styles.css".
            </li>
            <li>
              <strong>script.js</strong> - Click "New File" once more and save
              it as "script.js".
            </li>
          </ol>
        </div>

        <div
          className="tip-box"
          style={{
            backgroundColor: "#f0f7ff",
            padding: "15px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <p>
            <strong>🎯 Success Check:</strong> You should now have:
          </p>
          <ul>
            <li>A folder named "javascript-quiz-game" on your desktop.</li>
            <li>Visual Studio Code open with your folder.</li>
            <li>Three empty files: index.html, styles.css, and script.js.</li>
          </ul>
          <p>
            <strong>👉 Tip:</strong> If something's not working, try restarting
            VS Code or creating the files using the "File → New File" menu.
          </p>
        </div>

        <h2>Setting Up the HTML Structure</h2>
        <h3>Creating the Quiz Game HTML</h3>
        <p>
          Let's start by building the HTML structure for our quiz game. HTML is
          like the foundation of our app.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "index.html":</strong> Open your "index.html" file
            in your code editor.
          </li>
          <li>
            <strong>2. Add the Quiz Game HTML:</strong> Copy and paste the
            following code into your "index.html" file:
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
      <div id="question-container" class="hide">
        <div id="question">Question</div>
        <div id="answer-buttons" class="button-grid"></div>
      </div>
      <div id="controls">
        <button id="start-btn" class="start-btn">Start Quiz</button>
        <button id="next-btn" class="next-btn hide">Next</button>
      </div>
      <div id="results" class="hide">
        <h2>Results</h2>
        <p id="score">Score: 0</p>
      </div>
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
        <p>Let's break down the HTML structure:</p>
        <ul>
          <li>
            <code>&lt;div class="container"&gt;</code>: The main container for
            our app.
          </li>
          <li>
            <code>&lt;h1&gt;JavaScript Quiz Game&lt;/h1&gt;</code>: The title of
            our app.
          </li>
          <li>
            <code>&lt;div id="quiz-container"&gt;</code>: The container for the
            quiz.
          </li>
          <li>
            <code>&lt;div id="question-container" class="hide"&gt;</code>: The
            container for the question and answer buttons.
          </li>
          <li>
            <code>&lt;div id="question"&gt;</code>: The element for displaying
            the question.
          </li>
          <li>
            <code>&lt;div id="answer-buttons" class="button-grid"&gt;</code>:
            The container for the answer buttons.
          </li>
          <li>
            <code>&lt;div id="controls"&gt;</code>: The container for the start
            and next buttons.
          </li>
          <li>
            <code>
              &lt;button id="start-btn" class="start-btn"&gt;Start
              Quiz&lt;/button&gt;
            </code>
            : The button to start the quiz.
          </li>
          <li>
            <code>
              &lt;button id="next-btn" class="next-btn
              hide"&gt;Next&lt;/button&gt;
            </code>
            : The button to move to the next question.
          </li>
          <li>
            <code>&lt;div id="results" class="hide"&gt;</code>: The container
            for displaying the results.
          </li>
          <li>
            <code>&lt;p id="score"&gt;Score: 0&lt;/p&gt;</code>: The element for
            displaying the score.
          </li>
          <li>
            <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
            the JavaScript file for handling the app's functionality.
          </li>
        </ul>
        <p>
          Save your "index.html" file. Now we have the basic HTML structure in
          place. In the next step, we'll add some styling to make it look nice!
        </p>

        <h2>Styling the Quiz Game</h2>
        <h3>Adding CSS Styles</h3>
        <p>
          CSS is like the paint and brushes we use to make our app visually
          appealing. Let's add some styles to our quiz game.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
            your code editor.
          </li>
          <li>
            <strong>2. Add Quiz Game Styles:</strong> Copy and paste the
            following CSS code into your "styles.css" file:
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

#question-container {
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
}

#question {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}

.button-grid button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.button-grid button:hover {
  background-color: #0056b3;
}

#controls {
  margin-top: 20px;
}

#controls button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

#controls button:hover {
  background-color: #0056b3;
}

#results {
  margin-top: 20px;
  text-align: center;
}

#score {
  font-size: 1.2rem;
  margin-top: 10px;
}

.hide {
  display: none;
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>Let's understand the CSS rules we just added:</p>
        <ul>
          <li>
            <code>body</code>: Sets the default font, removes margins and
            padding, and centers the content on the screen.
          </li>
          <li>
            <code>.container</code>: Styles the container with a white
            background, padding, rounded corners, and a shadow.
          </li>
          <li>
            <code>h1</code>: Styles the title with a larger font size and
            margin.
          </li>
          <li>
            <code>#quiz-container</code>: Styles the quiz container with flexbox
            for layout.
          </li>
          <li>
            <code>#question-container</code>: Adds margin and text alignment for
            better readability.
          </li>
          <li>
            <code>#question</code>: Styles the question with a larger font size
            and margin.
          </li>
          <li>
            <code>.button-grid</code>: Uses grid layout to arrange answer
            buttons.
          </li>
          <li>
            <code>.button-grid button</code>: Styles the answer buttons with a
            blue background, white text, no border, padding, border-radius,
            cursor, and transition for smooth changes.
          </li>
          <li>
            <code>#controls</code>: Adds margin to the control buttons.
          </li>
          <li>
            <code>#controls button</code>: Styles the start and next buttons.
          </li>
          <li>
            <code>#results</code>: Styles the results container with margin and
            text alignment.
          </li>
          <li>
            <code>#score</code>: Styles the score text with a larger font size
            and margin.
          </li>
          <li>
            <code>.hide</code>: Hides elements that should not be visible
            initially.
          </li>
        </ul>
        <p>
          Save your "styles.css" file. Now, if you open "index.html" in a web
          browser, you'll see the styled quiz game.
        </p>

        <h2>Adding JavaScript for User Interactions</h2>
        <h3>Selecting HTML Elements</h3>
        <p>
          First, we need to select the HTML elements we want to work with. We'll
          select the question container, answer buttons, start button, next
          button, and score element.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "script.js":</strong> Open the "script.js" file in
            your code editor.
          </li>
          <li>
            <strong>2. Selecting Elements:</strong> Copy and paste the following
            JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Selecting HTML elements
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results');
const scoreElement = document.getElementById('score');`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          Here, we're using the <code>getElementById</code> method to select the
          HTML elements with specific IDs.
        </p>

        <h3>Defining Quiz Data</h3>
        <p>
          Next, we'll define the quiz data. This will include the questions and
          their corresponding answers.
        </p>
        <ol className="space-y-6" start={3}>
          <li>
            <strong>3. Defining Quiz Data:</strong> Copy and paste the following
            JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Quiz data
const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false },
    ],
  },
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
      { text: '6', correct: false },
    ],
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false },
      { text: 'Neptune', correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          Here, we define an array of questions, each with a question and an
          array of answers. Each answer has a <code>text</code> and a{" "}
          <code>correct</code>
          property.
        </p>

        <h3>Function to Start the Quiz</h3>
        <p>
          Now, let's create a function to start the quiz. This function will
          initialize the quiz and show the first question.
        </p>
        <ol className="space-y-6" start={4}>
          <li>
            <strong>4. Function to Start the Quiz:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.classList.add('hide');
  questionContainer.classList.remove('hide');
  resultsContainer.classList.add('hide');
  showQuestion();
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we reset the current question index and score, hide
          the next button, show the question container, hide the results
          container, and call the <code>showQuestion</code> function to display
          the first question.
        </p>

        <h3>Function to Show the Current Question</h3>
        <p>
          Next, let's create a function to show the current question. This
          function will display the question and its answer options.
        </p>
        <ol className="space-y-6" start={5}>
          <li>
            <strong>5. Function to Show the Current Question:</strong> Copy and
            paste the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to show the current question
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we call the <code>resetState</code> function to
          reset the state of the quiz, set the question text, and create answer
          buttons for each answer. We also add an event listener to each button
          to handle answer selection.
        </p>

        <h3>Function to Reset the State of the Quiz</h3>
        <p>
          Now, let's create a function to reset the state of the quiz. This
          function will remove all answer buttons from the previous question.
        </p>
        <ol className="space-y-6" start={6}>
          <li>
            <strong>6. Function to Reset the State of the Quiz:</strong> Copy
            and paste the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to reset the state of the quiz
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we remove all child elements from the
          <code>answerButtonsElement</code> to reset the state for the next
          question.
        </p>

        <h3>Function to Handle Answer Selection</h3>
        <p>
          Next, let's create a function to handle answer selection. This
          function will check if the selected answer is correct, update the
          score, and handle the next question or show the results.
        </p>
        <ol className="space-y-6" start={7}>
          <li>
            <strong>7. Function to Handle Answer Selection:</strong> Copy and
            paste the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to handle answer selection
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    showResults();
  }
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we check if the selected answer is correct, update
          the score, and add the appropriate class to the button. We also
          disable all buttons and show the next button if there are more
          questions, or show the results if it's the last question.
        </p>

        <h3>Function to Show the Results</h3>
        <p>
          Now, let's create a function to show the results. This function will
          display the final score.
        </p>
        <ol className="space-y-6" start={8}>
          <li>
            <strong>8. Function to Show the Results:</strong> Copy and paste the
            following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to show the results
function showResults() {
  questionContainer.classList.add('hide');
  resultsContainer.classList.remove('hide');
  scoreElement.innerText = \`Score: \${score}/\${questions.length}\`;
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we hide the question container, show the results
          container, and update the score text.
        </p>

        <h3>Function to Handle the Next Button Click</h3>
        <p>
          Finally, let's create a function to handle the next button click. This
          function will move to the next question.
        </p>
        <ol className="space-y-6" start={9}>
          <li>
            <strong>9. Function to Handle the Next Button Click:</strong> Copy
            and paste the following JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  showQuestion();
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this function, we increment the current question index and call the
          <code>showQuestion</code> function to display the next question.
        </p>

        <h3>Event Listeners</h3>
        <p>
          Now, let's add event listeners to the start button and next button to
          handle user interactions.
        </p>
        <ol className="space-y-6" start={10}>
          <li>
            <strong>10. Event Listeners:</strong> Copy and paste the following
            JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNextButton);`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this section, we add event listeners to the start button and next
          button to call the appropriate functions when they are clicked.
        </p>

        <h3>Initial State</h3>
        <p>Finally, let's set the initial state of the quiz.</p>
        <ol className="space-y-6" start={11}>
          <li>
            <strong>11. Initial State:</strong> Copy and paste the following
            JavaScript code into your "script.js" file:
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {`// Initial state
startBtn.classList.remove('hide');
nextBtn.classList.add('hide');
resultsContainer.classList.add('hide');`}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
        </ol>
        <p>
          In this section, we ensure that the start button is visible, the next
          button is hidden, and the results container is hidden initially.
        </p>

        <h2>Making the Quiz Game Responsive</h2>
        <h3>Making the Quiz Game Responsive</h3>
        <p>
          Let's ensure our quiz game looks great on various devices by adding
          responsive design using CSS media queries.
        </p>
        <ol className="space-y-6">
          <li>
            <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
            your code editor.
          </li>
          <li>
            <strong>2. Add Responsive Design Styles:</strong> Copy and paste the
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

  .button-grid button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  #controls button {
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
            <code>.container</code>: Adjusts the width of the container to 90%
            for better visibility on smaller screens.
          </li>
          <li>
            <code>#question</code>: Adjusts the font size of the question for
            better readability on smaller screens.
          </li>
          <li>
            <code>.button-grid button</code>: Adjusts the padding and font size
            of the answer buttons for better readability on smaller screens.
          </li>
          <li>
            <code>#controls button</code>: Adjusts the padding and font size of
            the control buttons for better readability on smaller screens.
          </li>
          <li>
            <code>#score</code>: Adjusts the font size of the score for better
            readability on smaller screens.
          </li>
        </ul>
        <p>
          Save your "styles.css" file. Now, if you resize your browser window or
          view the quiz game on different devices, you'll see the layout adapt
          to different screen sizes.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Congratulations! You've completed the JavaScript Quiz Game project.
          You've learned how to create a fun quiz game where users can answer
          multiple-choice questions. This project introduced you to using arrays
          and functions to manage questions, track scores, and display results.
        </p>
        <p>
          Feel free to customize and expand your quiz game further. You can add
          more questions, improve the design, or even create a mobile version.
          Happy coding and exploring the world of web development! 🚀
        </p>
      </article>
      <h3>Recommended</h3>
      <JSProjectssss />
    </div>
  );
};

export default QuizGame;

export const JSProjectssss = () => {
  const projects = [
    {
      id: "1js",
      title: "To-Do List App",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584631/todo-list_bcl3hp.png",
      alt: "To-Do List App in javascript",
      date: "January 15, 2025",
      description:
        "Create a simple to-do list app where users can add, edit, and remove tasks. Learn the basics of DOM manipulation and event handling in JavaScript.",
    },
    {
      id: "2js",
      title: "Random Quote Generator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736584814/javascript_randomquote_el9bfx.jpg",
      alt: "Random Quote Generator javascript project",
      date: "January 17, 2025",
      description:
        "Build a random quote generator that displays a new quote every time the user clicks a button. Use JavaScript to fetch random quotes and update the UI dynamically.",
    },
    {
      id: "4js",
      title: "Weather App with API",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585719/weather-app_nynylh.jpg",
      alt: "Weather App with API javascript project",
      date: "January 15, 2025",
      description:
        "Create a weather app that fetches real-time weather data from an API. Learn how to work with APIs, handle async functions, and display the data on your webpage.",
    },
    {
      id: "5js",
      title: "JavaScript Calculator",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736585940/javascript_fjhd7p.jpg",
      alt: "JavaScript Calculator javascript project",
      date: "January 9, 2025",
      description:
        "Build a fully functional calculator with advanced operations. Practice working with event listeners, complex logic, and DOM manipulation for a real-world challenge.",
    },
    {
      id: "6js",
      title: "Sorting Algorithm Visualizer",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736587158/js_hjlvsn.jpg",
      alt: "Sorting Algorithm Visualizer javascript project",
      date: "January 19, 2025",
      description:
        "Develop a sorting algorithm visualizer that demonstrates algorithms like Bubble Sort, Quick Sort, and Merge Sort. This project will help you understand complex algorithms and visualize how they work.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">JavaScript Projects</h1>

      <div className="posts-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/javascriptP/${project.id}`}
            passHref
          >
            <article className="post-card">
              <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>

                <div className="post-button ct-button">Start Tutorial</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};
