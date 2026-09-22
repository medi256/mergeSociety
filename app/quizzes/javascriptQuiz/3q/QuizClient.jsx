"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the output of: Object.create(null) instanceof Object?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which pattern does this implement: const singleton = new function() { this.property = value; }?",
    options: [
      "Factory Pattern",
      "Singleton Pattern",
      "Module Pattern",
      "Observer Pattern",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is method borrowing in JavaScript?",
    options: [
      "Copying methods between objects",
      "Using call/apply to use methods of one object on another",
      "Inheriting methods from a prototype",
      "Creating method references",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question:
      "What will be logged: const proto = { a: 1 }; const obj = Object.create(proto); obj.b = 2; for(let prop in obj) { console.log(prop); }?",
    options: ["Only 'b'", "'a' and 'b'", "Only 'a'", "undefined"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What is the purpose of the WeakRef object?",
    options: [
      "To create weak references that don't prevent garbage collection",
      "To reference weak types",
      "To create temporary references",
      "To manage memory manually",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Which statement about the Reflect API is correct?",
    options: [
      "It's only for meta-programming",
      "It provides methods for interceptable JavaScript operations",
      "It's used only with Proxies",
      "It replaces the Object methods",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What is the purpose of Symbol.toPrimitive?",
    options: [
      "To convert objects to strings",
      "To convert objects to numbers",
      "To customize object to primitive conversion",
      "To define object serialization",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question:
      "What is the difference between Object.preventExtensions() and Object.seal()?",
    options: [
      "No difference",
      "preventExtensions only prevents adding properties",
      "seal prevents both adding and deleting properties",
      "Both B and C are correct",
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "What is the purpose of using the Mediator pattern?",
    options: [
      "To handle cross-origin requests",
      "To reduce direct communication between components",
      "To mediate between client and server",
      "To manage state",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What is Function.prototype.bind() used for?",
    options: [
      "To create new functions",
      "To bind event listeners",
      "To permanently set the this value of a function",
      "To combine multiple functions",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "What is the purpose of using Web Workers?",
    options: [
      "To improve UI performance",
      "To run scripts in background threads",
      "To work with service workers",
      "To handle worker threads",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "What is the Flyweight pattern used for?",
    options: [
      "To improve loading speed",
      "To minimize memory usage by sharing data",
      "To optimize network requests",
      "To reduce CPU usage",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "What is the purpose of using requestAnimationFrame?",
    options: [
      "To create animations",
      "To optimize animations performance",
      "To schedule frame updates",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 14,
    question: "What is the purpose of using TypedArrays in JavaScript?",
    options: [
      "To work with binary data",
      "To enforce type checking",
      "To create arrays with specific types",
      "To optimize array operations",
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "What is the Command pattern used for?",
    options: [
      "To execute commands",
      "To encapsulate method calls as objects",
      "To manage command line interfaces",
      "To handle user commands",
    ],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "What is the purpose of using Object.defineProperty()?",
    options: [
      "To create new properties",
      "To define property attributes",
      "To modify existing properties",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "What is event delegation?",
    options: [
      "Delegating events to other handlers",
      "Using a parent element to handle events on descendants",
      "Creating custom events",
      "Managing event propagation",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "What is the purpose of using SharedArrayBuffer?",
    options: [
      "To share memory between windows",
      "To share memory between workers",
      "To optimize array operations",
      "To create shared references",
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "What is the Observer pattern used for?",
    options: [
      "To observe object changes",
      "To define one-to-many dependencies",
      "To watch for events",
      "To monitor performance",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "What is the purpose of using Symbols?",
    options: [
      "To create unique identifiers",
      "To optimize performance",
      "To enforce privacy",
      "All of the above",
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "What is the Chain of Responsibility pattern?",
    options: [
      "A way to chain function calls",
      "A pattern for handling requests through a chain of handlers",
      "A way to manage dependencies",
      "A pattern for managing callbacks",
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: "What is the purpose of using WeakMap?",
    options: [
      "To create weak references",
      "To optimize map operations",
      "To prevent memory leaks",
      "Both A and C",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "What is the purpose of using the Factory pattern?",
    options: [
      "To create objects",
      "To abstract object creation logic",
      "To manage object lifecycle",
      "To optimize object creation",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "What is the purpose of the Iterator pattern?",
    options: [
      "To iterate over collections",
      "To provide sequential access to elements",
      "To implement custom iteration",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "What is prototype pollution?",
    options: [
      "A way to modify prototypes",
      "A security vulnerability involving prototype chain modification",
      "A type of memory leak",
      "A performance issue",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "What is the purpose of using Atomics?",
    options: [
      "To perform atomic operations",
      "To ensure thread safety",
      "To work with SharedArrayBuffer",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: "What is the Decorator pattern used for?",
    options: [
      "To add new functionality",
      "To extend objects dynamically",
      "To modify existing behavior",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 28,
    question: "What is the purpose of using performance.now()?",
    options: [
      "To measure time",
      "To get high-resolution timestamps",
      "To profile code",
      "All of the above",
    ],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "What is the Strategy pattern used for?",
    options: [
      "To implement different algorithms",
      "To switch between algorithms at runtime",
      "To encapsulate algorithms",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "What is the purpose of using IntersectionObserver?",
    options: [
      "To detect element visibility",
      "To observe DOM changes",
      "To handle intersections",
      "To manage viewport changes",
    ],
    correctAnswer: 0,
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
              <p className="quiz-label">JavaScript Advanced Quiz</p>
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
