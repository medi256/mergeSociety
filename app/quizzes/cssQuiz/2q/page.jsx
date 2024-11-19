"use client";

import { useState } from "react";

const cssQuizTwoQuestions = [
  {
    id: 21,
    question:
      "Which CSS property is used for creating a linear gradient background?",
    options: [
      "background-gradient",
      "gradient-bg",
      "background-image",
      "background",
    ],
    correctAnswer: 2,
  },
  {
    id: 22,
    question: "How do you set the height of an element to match its content?",
    options: [
      "height: auto;",
      "height: 100%;",
      "height: fit-content;",
      "height: content-height;",
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "Which CSS property is used for adding a box shadow with spread?",
    options: [
      "box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);",
      "shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);",
      "box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);",
      "box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);",
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question:
      "How do you make an element take the full width and height of its parent?",
    options: [
      "width: 100%; height: 100%;",
      "width: 100%; height: auto;",
      "width: auto; height: 100%;",
      "width: 100%; height: 100vw;",
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "Which CSS property is used for text alignment?",
    options: ["text-align", "align-text", "align", "text-position"],
    correctAnswer: 0,
  },
  {
    id: 26,
    question:
      "How do you create a flex container with items aligned horizontally?",
    options: [
      "display: flex; flex-direction: row;",
      "display: flex; justify-content: flex-start;",
      "display: flex; align-items: flex-start;",
      "display: flex; flex-wrap: wrap;",
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "Which CSS property is used for setting the font size in pixels?",
    options: [
      "font-size: 16px;",
      "font: 16px;",
      "text-size: 16px;",
      "size: 16px;",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "How do you create a CSS animation with a 2-second duration?",
    options: [
      "@keyframes animationName { from {} to {} }",
      "@keyframes animationName { 0% {} 100% {} }",
      "@keyframes animationName { 2s {} }",
      "@keyframes animationName { duration: 2s; }",
    ],
    correctAnswer: 1,
  },
  {
    id: 29,
    question:
      "Which CSS property is used for adding a border radius to the top-left corner?",
    options: [
      "border-top-left-radius: 5px;",
      "corner-radius: 5px 0 0 0;",
      "border-radius: 5px 0 0 0;",
      "border-curve: 5px 0 0 0;",
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question:
      "How do you select all elements with a class 'active' and a tag 'li'?",
    options: [
      "li.active",
      "li:active",
      "li[class='active']",
      "li.class='active'",
    ],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: "Which CSS property is used for setting the line height?",
    options: ["line-height", "text-height", "height-line", "line-spacing"],
    correctAnswer: 0,
  },
  {
    id: 32,
    question:
      "How do you create a flex container with items centered vertically and horizontally?",
    options: [
      "display: flex; justify-content: center; align-items: center;",
      "display: flex; align-items: center;",
      "display: flex; justify-content: center;",
      "display: flex; flex-direction: center;",
    ],
    correctAnswer: 0,
  },
  {
    id: 33,
    question:
      "Which CSS property is used for adding a border to the right side?",
    options: ["border-right", "right-border", "border-side", "border-edge"],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: "How do you make text uppercase using CSS?",
    options: [
      "text-transform: uppercase;",
      "font-case: uppercase;",
      "text-case: uppercase;",
      "text-style: uppercase;",
    ],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: "Which CSS property is used for setting the background image?",
    options: ["background-image", "bg-image", "image", "background-picture"],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: "How do you create a CSS transition with a 0.3-second duration?",
    options: [
      "transition: all 0.3s;",
      "transition-duration: 0.3s;",
      "animate: all 0.3s;",
      "change: all 0.3s;",
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    question:
      "Which CSS property is used for adding a border radius to all corners?",
    options: [
      "border-radius: 5px;",
      "corner-radius: 5px;",
      "radius: 5px;",
      "border-curve: 5px;",
    ],
    correctAnswer: 0,
  },
  {
    id: 38,
    question:
      "How do you select all elements with a class 'button' and a tag 'button'?",
    options: [
      "button.button",
      "button:button",
      "button[class='button']",
      "button.class='button'",
    ],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: "Which CSS property is used for setting the font weight?",
    options: ["font-weight", "text-weight", "font-bold", "bold-weight"],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: "How do you create a CSS animation with a 0.5-second delay?",
    options: [
      "@keyframes animationName { 0% {} 100% {} }",
      "@keyframes animationName { from {} to {} }",
      "@keyframes animationName { delay: 0.5s; }",
      "@keyframes animationName { animation-delay: 0.5s; }",
    ],
    correctAnswer: 3,
  },
];

const CSSQuizTwo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === cssQuizTwoQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizTwoQuestions.length - 1) {
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

    if (index === cssQuizTwoQuestions[currentQuestion].correctAnswer) {
      return "correct-answer";
    }

    if (
      index === selectedAnswer &&
      index !== cssQuizTwoQuestions[currentQuestion].correctAnswer
    ) {
      return "wrong-answer";
    }

    return "faded";
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Quiz Results</h2>
        </div>
        <div className="quiz-content">
          <div className="results">
            <div className="score">
              {score} / {cssQuizTwoQuestions.length}
            </div>
            <div className="percentage">
              {((score / cssQuizTwoQuestions.length) * 100).toFixed(0)}% Correct
            </div>
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
          Question {currentQuestion + 1} of {cssQuizTwoQuestions.length}
        </h2>
      </div>
      <div className="quiz-content">
        <div className="question">
          {cssQuizTwoQuestions[currentQuestion].question}
        </div>
        <div className="options">
          {cssQuizTwoQuestions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`option ${getOptionStyle(index)}`}
            >
              {option}
              {isAnswered &&
                index ===
                  cssQuizTwoQuestions[currentQuestion].correctAnswer && (
                  <span className="icon correct">✓</span>
                )}
              {isAnswered &&
                index === selectedAnswer &&
                index !==
                  cssQuizTwoQuestions[currentQuestion].correctAnswer && (
                  <span className="icon wrong">×</span>
                )}
            </div>
          ))}
        </div>
        <button
          onClick={handleNextQuestion}
          className="next-button"
          disabled={isAnswered ? false : true}
        >
          {currentQuestion === cssQuizTwoQuestions.length - 1
            ? "Show Results"
            : "Next Question"}
        </button>
        <div className="progress">
          <span>Score: {score}</span>
          <span>
            Progress:{" "}
            {(
              ((currentQuestion + 1) / cssQuizTwoQuestions.length) *
              100
            ).toFixed(0)}
            %
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
          ${isAnswered ? "" : "opacity: 0.5; cursor: not-allowed;"}
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

export default CSSQuizTwo;
