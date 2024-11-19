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

const JavaScriptQuizThree = () => {
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
          <h2>JavaScript Advanced Quiz Results</h2>
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
            background: white;
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
          JavaScript Advanced - Question {currentQuestion + 1} of{" "}
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
        <div className="progress">
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
          background: white;
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
          color: #333;
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
          color: #1e293b;
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

export default JavaScriptQuizThree;
