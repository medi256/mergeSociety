"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the output of: [...'hello']?",
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      "Error",
      "{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which method creates a new array with the results of calling a function for every array element?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is the correct way to destructure nested objects?",
    options: [
      "const { user: { name } } = obj",
      "const { user.name } = obj",
      "const { user[name] } = obj",
      "const { user->name } = obj",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      "What will be the output of: Promise.resolve(1).then(x => x + 1).then(x => console.log(x))?",
    options: ["1", "2", "undefined", "Error"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which statement about async/await is correct?",
    options: [
      "async functions always return a Promise",
      "await can be used in regular functions",
      "await blocks the entire application",
      "async/await cannot handle errors",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "What's the purpose of the Array.from() method?",
    options: [
      "To create a shallow copy of an array",
      "To convert array-like objects to arrays",
      "To create an array from a string",
      "Both B and C are correct",
    ],
    correctAnswer: 3,
  },
  {
    id: 7,
    question: "What is the output of: Object.keys({a: 1, b: 2, c: 3})?",
    options: [
      "[1, 2, 3]",
      "['a', 'b', 'c']",
      "{a: 1, b: 2, c: 3}",
      "['1', '2', '3']",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is a closure in JavaScript?",
    options: [
      "A function that returns undefined",
      "A function that has access to variables in its outer scope",
      "A function that closes the program",
      "A function without parameters",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "Which ES6 feature is being used here: `Hello ${name}`?",
    options: [
      "Template Literals",
      "String Interpolation",
      "Variable Substitution",
      "String Formatting",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "What's the difference between map() and forEach()?",
    options: [
      "map() is faster than forEach()",
      "forEach() can modify the original array",
      "map() returns a new array",
      "There is no difference",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "What will Array.isArray([1, 2, 3]) return?",
    options: ["undefined", "null", "true", "false"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "What is the correct way to clone an object in JavaScript?",
    options: [
      "Object.clone(obj)",
      "{...obj}",
      "obj.clone()",
      "new Object(obj)",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "What is the purpose of the reduce() method?",
    options: [
      "To filter array elements",
      "To transform array elements",
      "To accumulate array elements into a single value",
      "To sort array elements",
    ],
    correctAnswer: 2,
  },
  {
    id: 14,
    question: "What is the output of: [1,2,3].find(x => x > 1)?",
    options: ["[2,3]", "2", "true", "undefined"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "What is the purpose of the Set object?",
    options: [
      "To store unique values",
      "To store key-value pairs",
      "To store arrays",
      "To store functions",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "What is a generator function in JavaScript?",
    options: [
      "A function that generates random numbers",
      "A function that can be paused and resumed",
      "A function that creates objects",
      "A function that generates arrays",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "What is the purpose of the async keyword?",
    options: [
      "To make a function run faster",
      "To make a function return a Promise",
      "To make a function synchronous",
      "To prevent function execution",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "What will Object.values({a: 1, b: 2, c: 3}) return?",
    options: ["['a', 'b', 'c']", "[1, 2, 3]", "{1, 2, 3}", "['1', '2', '3']"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "What is the purpose of the Symbol type in JavaScript?",
    options: [
      "To create unique identifiers",
      "To create special strings",
      "To create special numbers",
      "To create special objects",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "What is the output of: new Set([1,1,2,2,3,3]).size?",
    options: ["6", "3", "1", "Error"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "What is the purpose of Object.freeze()?",
    options: [
      "To make an object immutable",
      "To prevent object creation",
      "To deep freeze nested objects",
      "To temporarily disable object methods",
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "What will Promise.all([]) return?",
    options: [
      "null",
      "undefined",
      "Resolved promise with []",
      "Rejected promise",
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "What is the purpose of the WeakMap object?",
    options: [
      "To store weak references to key-value pairs",
      "To store only string keys",
      "To store only number values",
      "To create a map with limited size",
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "What is event bubbling?",
    options: [
      "Creating new events",
      "Stopping event propagation",
      "Event propagation from child to parent elements",
      "Event propagation from parent to child elements",
    ],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "What is the purpose of Object.seal()?",
    options: [
      "To prevent adding/removing properties",
      "To make properties read-only",
      "To hide object properties",
      "To encrypt object data",
    ],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: "What is a Promise in JavaScript?",
    options: [
      "A guaranteed return value",
      "An object representing eventual completion of an async operation",
      "A function that returns undefined",
      "A special type of array",
    ],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "What is the output of: ['a', 'b', 'c'].entries().next().value?",
    options: ["['a']", "[0, 'a']", "0", "'a'"],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: "What is the purpose of the Proxy object?",
    options: [
      "To create a copy of an object",
      "To intercept and customize operations",
      "To protect objects from modification",
      "To improve object performance",
    ],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "What will Object.is(NaN, NaN) return?",
    options: ["false", "true", "undefined", "Error"],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "What is the purpose of the finally() method in Promises?",
    options: [
      "To handle errors",
      "To handle successful responses",
      "To execute code regardless of success or failure",
      "To cancel the Promise",
    ],
    correctAnswer: 2,
  },
];

const QuizClient = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
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

    if (index === question.correctAnswer) {
      return "correct-answer";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "wrong-answer";
    }

    return "faded";
  };

  if (showResults) {
    const percentage = ((score / quizQuestions.length) * 100).toFixed(0);

    return (
      <div className="quiz-wrapper">
        <div className="quiz-card results-card">
          <div className="results">
            <div className="results-icon">🎉</div>

            <p className="results-label">Quiz Complete!</p>

            <h2>Great work!</h2>

            <div className="score-circle">
              <span className="score-number">
                {score}/{quizQuestions.length}
              </span>
              <span className="score-text">Score</span>
            </div>

            <p className="percentage">{percentage}% Correct</p>

            <button onClick={resetQuiz} className="retry-button">
              Try Again
              <span>↻</span>
            </button>
          </div>
        </div>

        <style jsx>{`
          .quiz-wrapper {
            width: 100%;
            max-width: 820px;
            margin: 0 auto;
            padding: 24px;
            box-sizing: border-box;
          }

          .quiz-card {
            color: CanvasText;
            background: color-mix(in srgb, Canvas 96%, CanvasText 4%);
            border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
            border-radius: 24px;
            overflow: hidden;
            box-shadow:
              0 10px 30px color-mix(in srgb, CanvasText 8%, transparent),
              0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);
          }

          .results-card {
            padding: 60px 24px;
          }

          .results {
            text-align: center;
          }

          .results-icon {
            font-size: 48px;
            margin-bottom: 16px;
          }

          .results-label {
            color: #6366f1;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin: 0 0 8px;
          }

          .results h2 {
            margin: 0 0 30px;
            font-size: 32px;
            font-weight: 800;
          }

          .score-circle {
            width: 150px;
            height: 150px;
            margin: 0 auto 22px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: color-mix(in srgb, #6366f1 10%, Canvas);
            border: 8px solid color-mix(in srgb, #6366f1 20%, Canvas);
          }

          .score-number {
            font-size: 32px;
            font-weight: 800;
          }

          .score-text {
            font-size: 13px;
            opacity: 0.65;
            margin-top: 3px;
          }

          .percentage {
            font-size: 20px;
            font-weight: 600;
            opacity: 0.7;
            margin: 0 0 30px;
          }

          .retry-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 24px;
            border: none;
            border-radius: 12px;
            background: #6366f1;
            color: white;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition:
              transform 0.2s ease,
              background 0.2s ease,
              box-shadow 0.2s ease;
          }

          .retry-button:hover {
            background: #4f46e5;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px color-mix(in srgb, #6366f1 25%, transparent);
          }

          .retry-button span {
            font-size: 20px;
          }

          @media (max-width: 640px) {
            .quiz-wrapper {
              padding: 12px;
            }

            .results-card {
              padding: 45px 20px;
            }

            .results h2 {
              font-size: 26px;
            }

            .score-circle {
              width: 135px;
              height: 135px;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="header-top">
            <div>
              <p className="quiz-label">JavaScript Intermediate Quiz</p>
              <p className="question-count">
                Question {currentQuestion + 1} / {quizQuestions.length}
              </p>
            </div>

            <div className="score-badge">
              Score: <strong>{score}</strong>
            </div>
          </div>

          <div className="progress-track">
            <div
              className="progress-bar"
              style={{
                width: `${
                  ((currentQuestion + 1) / quizQuestions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="quiz-content">
          <h2 className="question">{question.question}</h2>

          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                className={`option ${getOptionStyle(index)}`}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="option-text">{option}</span>

                <span className="option-icon">
                  {isAnswered && index === question.correctAnswer && "✓"}

                  {isAnswered &&
                    index === selectedAnswer &&
                    index !== question.correctAnswer &&
                    "×"}
                </span>
              </button>
            ))}
          </div>

          {isAnswered && (
            <button onClick={handleNextQuestion} className="next-button">
              {currentQuestion === quizQuestions.length - 1
                ? "Show Results"
                : "Next Question"}

              <span>→</span>
            </button>
          )}

          <div className="progress-info">
            <span>Score: {score}</span>

            <span>
              Progress:{" "}
              {(((currentQuestion + 1) / quizQuestions.length) * 100).toFixed(
                0,
              )}
              %
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quiz-wrapper {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          padding: 24px;
          box-sizing: border-box;
        }

        .quiz-card {
          color: CanvasText;
          background: color-mix(in srgb, Canvas 96%, CanvasText 4%);
          border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 10px 30px color-mix(in srgb, CanvasText 8%, transparent),
            0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);
        }

        .quiz-header {
          padding: 24px 28px 20px;
          border-bottom: 1px solid
            color-mix(in srgb, CanvasText 8%, transparent);
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }

        .quiz-label {
          margin: 0 0 5px;
          color: #6366f1;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .question-count {
          margin: 0;
          font-size: 14px;
          opacity: 0.6;
        }

        .score-badge {
          padding: 8px 13px;
          border-radius: 999px;
          background: color-mix(in srgb, #6366f1 10%, Canvas);
          color: CanvasText;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .score-badge strong {
          color: #6366f1;
        }

        .progress-track {
          width: 100%;
          height: 7px;
          overflow: hidden;
          border-radius: 999px;
          background: color-mix(in srgb, CanvasText 10%, transparent);
        }

        .progress-bar {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #6366f1, #818cf8);
          transition: width 0.3s ease;
        }

        .quiz-content {
          padding: 30px 28px 24px;
        }

        .question {
          margin: 0 0 26px;
          font-size: 25px;
          line-height: 1.4;
          font-weight: 750;
          letter-spacing: -0.02em;
        }

        .options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 22px;
        }

        .option {
          width: 100%;
          min-height: 76px;
          padding: 14px 16px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr) 24px;
          align-items: center;
          gap: 12px;
          text-align: left;
          border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
          border-radius: 14px;
          background: color-mix(in srgb, Canvas 98%, CanvasText 2%);
          color: CanvasText;
          cursor: pointer;
          font: inherit;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .option:hover:not(:disabled) {
          background: color-mix(in srgb, #6366f1 8%, Canvas);
          border-color: color-mix(in srgb, #6366f1 45%, CanvasText 10%);
          box-shadow: 0 5px 15px color-mix(in srgb, #6366f1 12%, transparent);
          transform: translateY(-2px);
        }

        .option:disabled {
          cursor: default;
        }

        .option-letter {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: color-mix(in srgb, CanvasText 7%, transparent);
          color: CanvasText;
          font-size: 14px;
          font-weight: 800;
        }

        .option-text {
          min-width: 0;
          font-size: 15px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .option-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          font-weight: 800;
        }

        .correct-answer {
          background: color-mix(in srgb, #22c55e 12%, Canvas);
          border-color: color-mix(in srgb, #22c55e 45%, CanvasText 8%);
        }

        .correct-answer .option-letter {
          background: color-mix(in srgb, #22c55e 18%, Canvas);
        }

        .correct-answer .option-icon {
          color: #22c55e;
        }

        .wrong-answer {
          background: color-mix(in srgb, #ef4444 12%, Canvas);
          border-color: color-mix(in srgb, #ef4444 45%, CanvasText 8%);
        }

        .wrong-answer .option-letter {
          background: color-mix(in srgb, #ef4444 18%, Canvas);
        }

        .wrong-answer .option-icon {
          color: #ef4444;
        }

        .faded {
          opacity: 0.45;
        }

        .next-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 20px;
          margin-bottom: 18px;
          border: none;
          border-radius: 12px;
          background: #6366f1;
          color: white;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .next-button:hover {
          background: #4f46e5;
          transform: translateY(-1px);
          box-shadow: 0 7px 18px color-mix(in srgb, #6366f1 22%, transparent);
        }

        .next-button span {
          font-size: 20px;
          line-height: 1;
        }

        .progress-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 13px;
          opacity: 0.55;
        }

        @media (max-width: 640px) {
          .quiz-wrapper {
            padding: 12px;
          }

          .quiz-header {
            padding: 20px;
          }

          .quiz-content {
            padding: 24px 20px 20px;
          }

          .header-top {
            align-items: flex-start;
          }

          .question {
            font-size: 21px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          .option {
            min-height: 68px;
          }

          .option-text {
            font-size: 14px;
          }

          .progress-info {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizClient;
