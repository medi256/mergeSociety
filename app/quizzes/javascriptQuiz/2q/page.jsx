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

const JavaScriptQuizTwo = () => {
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
          <h2>JavaScript Intermediate Quiz Results</h2>
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
          JavaScript Intermediate - Question {currentQuestion + 1} of{" "}
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

export default JavaScriptQuizTwo;
