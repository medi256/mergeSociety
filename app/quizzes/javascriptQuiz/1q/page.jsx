"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question:
      "What is the correct way to declare a variable in modern JavaScript?",
    options: [
      "var x = 5;",
      "let x = 5;",
      "both var and let",
      "variable x = 5;",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which operator is used for strict equality comparison in JavaScript?",
    options: ["==", "===", "=", "!="],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is the output of typeof null?",
    options: ["null", "undefined", "object", "number"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "How do you write a single-line comment in JavaScript?",
    options: ["<!-- comment -->", "/* comment */", "// comment", "# comment"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Which method is used to add elements to the end of an array?",
    options: ["push()", "append()", "add()", "insert()"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "def myFunction()",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Which method converts a string to uppercase?",
    options: ["toUpperCase()", "upperCase()", "toString()", "changeCase()"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "What is the result of 3 + '3' in JavaScript?",
    options: ["6", "33", "undefined", "error"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "How do you declare a constant variable in JavaScript?",
    options: ["const x = 5;", "let x = 5;", "constant x = 5;", "var x = 5;"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "What is the correct way to check if a variable is undefined?",
    options: [
      "if (variable === undefined)",
      "if (typeof variable === 'undefined')",
      "if (variable.undefined)",
      "Both A and B are correct",
    ],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "remove()", "delete()", "splice()"],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "What is the purpose of the parseInt() function?",
    options: [
      "To round a number",
      "To convert a string to an integer",
      "To check if a value is an integer",
      "To parse JSON data",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "How do you create a new object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = new Object();",
      "let obj = Object.create(null);",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 14,
    question: "What is the output of Boolean('')?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Which operator is used for string concatenation?",
    options: ["+", "&", "||", "&&"],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "What is the correct way to write an if statement in JavaScript?",
    options: ["if x = 5 then", "if (x == 5)", "if x == 5", "if x = 5"],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "What is the purpose of the return statement?",
    options: [
      "To end a function",
      "To return a value from a function",
      "To break out of a loop",
      "Both A and B are correct",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "Which method is used to find the length of a string?",
    options: ["length()", "size()", "length property", "count()"],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "What is the correct way to write a for loop?",
    options: [
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (let i = 0; i < 5; i++)",
    ],
    correctAnswer: 3,
  },
  {
    id: 20,
    question: "Which method is used to join array elements into a string?",
    options: ["concat()", "join()", "toString()", "unite()"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "What is the output of typeof undefined?",
    options: ["undefined", "null", "object", "string"],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "How do you round a number to the nearest integer in JavaScript?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.rnd()"],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "What is the correct way to check if a variable is an array?",
    options: [
      "typeof arr === 'array'",
      "arr.isArray()",
      "Array.isArray(arr)",
      "arr instanceof Array",
    ],
    correctAnswer: 2,
  },
  {
    id: 24,
    question: "Which operator is used for logical AND?",
    options: ["&", "AND", "&&", "||"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "What is the purpose of the this keyword in JavaScript?",
    options: [
      "To refer to the current function",
      "To refer to the current object",
      "To refer to the parent object",
      "To refer to a specific variable",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "How do you convert a string to lowercase?",
    options: [
      "toLowerCase()",
      "lowerCase()",
      "changeCaseLower()",
      "caseLower()",
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "What is the correct way to write a switch statement?",
    options: [
      "switch x { }",
      "switch (x) { }",
      "switch: x { }",
      "switch x [ ]",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: "Which method removes the first element of an array?",
    options: ["shift()", "unshift()", "remove()", "delete()"],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "What is the result of 5 + true in JavaScript?",
    options: ["5true", "6", "error", "undefined"],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "How do you find the minimum number between x and y?",
    options: ["min(x,y)", "Math.min(x,y)", "Math.lowest(x,y)", "lowest(x,y)"],
    correctAnswer: 1,
  },
];

const JavaScriptQuizOne = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getOptionStyle = (index) => {
    if (!isAnswered) return "";

    if (index === quizQuestions[currentQuestion].correctAnswer) {
      return "correct-answer";
    }

    if (
      index === selectedAnswer &&
      index !== quizQuestions[currentQuestion].correctAnswer
    ) {
      return "wrong-answer";
    }

    return "faded";
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>JavaScript Basics Quiz Results</h2>
        </div>
        <div className="quiz-content">
          <div className="results">
            <p className="score">
              {score} / {quizQuestions.length}
            </p>
            <p className="percentage">
              {((score / quizQuestions.length) * 100).toFixed(0)}% Correct
            </p>
            <button onClick={resetQuiz} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
        <style jsx>{`
          .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .quiz-header {
            text-align: center;
            margin-bottom: 20px;
          }
          .quiz-content {
            padding: 20px;
          }
          .results {
            text-align: center;
          }
          .score {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .percentage {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .retry-button {
            padding: 12px 24px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .retry-button:hover {
            background: #0056b3;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>
          JavaScript Basics - Question {currentQuestion + 1} of{" "}
          {quizQuestions.length}
        </h2>
      </div>
      <div className="quiz-content">
        <div className="question">
          {quizQuestions[currentQuestion].question}
        </div>
        <div className="options">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`option ${getOptionStyle(index)}`}
            >
              {option}
              {isAnswered &&
                index === quizQuestions[currentQuestion].correctAnswer && (
                  <span className="icon correct">✓</span>
                )}
              {isAnswered &&
                index === selectedAnswer &&
                index !== quizQuestions[currentQuestion].correctAnswer && (
                  <span className="icon wrong">×</span>
                )}
            </div>
          ))}
        </div>
        {isAnswered && (
          <button onClick={handleNextQuestion} className="next-button">
            {currentQuestion === quizQuestions.length - 1
              ? "Show Results"
              : "Next Question"}
          </button>
        )}
        <div className="progress-w">
          <span>Score: {score}</span>
          <span>
            Progress:{" "}
            {(((currentQuestion + 1) / quizQuestions.length) * 100).toFixed(0)}%
          </span>
        </div>
      </div>

      <style jsx>{`
        .quiz-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .quiz-header {
          margin-bottom: 20px;
        }
        .quiz-content {
          padding: 20px;
        }
        .question {
          font-size: 20px;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .option {
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
          font-size: 16px;
        }
        .option:hover:not(.correct-answer):not(.wrong-answer):not(.faded) {
          background-color: #f8fafc;
          border-color: #cbd5e1;
        }
        .correct-answer {
          background-color: #dcfce7;
          border-color: #86efac;
          color: #166534;
        }
        .wrong-answer {
          background-color: #fee2e2;
          border-color: #fca5a5;
          color: #991b1b;
        }
        .faded {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .icon {
          font-size: 20px;
          font-weight: bold;
        }
        .icon.correct {
          color: #166534;
        }
        .icon.wrong {
          color: #991b1b;
        }
        .next-button {
          width: 100%;
          padding: 16px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin-bottom: 16px;
        }
        .next-button:hover {
          background-color: #1d4ed8;
        }
        .progress {
          display: flex;
          justify-content: space-between;
          color: #64748b;
          font-size: 14px;
        }
        h2 {
          font-size: 24px;
          margin: 0;
          text-align: center;
        }
        .results {
          text-align: center;
          padding: 40px 0;
        }
        .score {
          font-size: 48px;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 8px;
        }
        .percentage {
          font-size: 24px;
          color: #64748b;
          margin-bottom: 32px;
        }
        .retry-button {
          padding: 16px 32px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .retry-button:hover {
          background-color: #1d4ed8;
        }
        @media (max-width: 640px) {
          .quiz-container {
            margin: 10px;
            padding: 16px;
          }
          .quiz-content {
            padding: 16px;
          }
          .question {
            font-size: 18px;
          }
          .option {
            padding: 14px;
            font-size: 15px;
          }
          .score {
            font-size: 36px;
          }
          .percentage {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default JavaScriptQuizOne;
