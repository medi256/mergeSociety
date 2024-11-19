"use client";

import { useState } from "react";

const cssQuizQuestions = [
  {
    id: 1,
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "color", "text-color", "bg-color"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "How do you select all <p> elements with a class 'highlight'?",
    options: [
      "p.highlight",
      "p:highlight",
      "p.class='highlight'",
      "p[class='highlight']",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Which CSS property is used for positioning elements?",
    options: ["position", "layout", "place", "align"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      "What is the CSS selector for selecting all elements with a specific class?",
    options: [".class", "class", "class-name", "class()"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "How do you make text bold using CSS?",
    options: [
      "font-weight: bold;",
      "font-style: bold;",
      "text-weight: bold;",
      "bold: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Which CSS property is used for setting the font size?",
    options: ["font-size", "text-size", "size", "font-scale"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "How do you center an element horizontally using CSS?",
    options: [
      "text-align: center;",
      "margin: 0 auto;",
      "display: flex; justify-content: center;",
      "position: absolute; left: 50%; transform: translateX(-50%);",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Which CSS property is used for adding a border to an element?",
    options: ["border", "outline", "box-border", "edge"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "How do you create a gradient background in CSS?",
    options: [
      "background: linear-gradient(red, blue);",
      "background-gradient: red, blue;",
      "gradient-bg: red, blue;",
      "background: red, blue;",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "Which CSS property is used for adding a box shadow?",
    options: ["box-shadow", "shadow", "text-shadow", "element-shadow"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "How do you make an element invisible using CSS?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "opacity: 0;",
      "hide: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question:
      "Which CSS property is used for setting the width and height of an element?",
    options: ["dimensions", "size", "width-height", "width, height"],
    correctAnswer: 3,
  },
  {
    id: 13,
    question:
      "What is the CSS selector for selecting all elements with a specific ID?",
    options: ["#id", "id", "id-selector", "id()"],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "How do you apply a transition effect to an element?",
    options: [
      "transition: all 0.5s;",
      "animate: all 0.5s;",
      "change: all 0.5s;",
      "transform: all 0.5s;",
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "Which CSS property is used for adding padding to an element?",
    options: ["padding", "margin", "space", "gap"],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "How do you create a flex container in CSS?",
    options: [
      "display: flex;",
      "flex-container: true;",
      "flex: 1;",
      "flex-layout: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Which CSS property is used for setting the font family?",
    options: ["font-family", "font", "text-font", "font-style"],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "How do you add a border radius to an element?",
    options: [
      "border-radius: 5px;",
      "corner-radius: 5px;",
      "radius: 5px;",
      "border-curve: 5px;",
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question:
      "What is the CSS selector for selecting all elements of a specific tag?",
    options: ["tag", "tag-selector", "tag-name", "tag()"],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "How do you create a CSS animation?",
    options: [
      "@keyframes animationName {}",
      "animation: animationName;",
      "animate: animationName;",
      "transition: animationName;",
    ],
    correctAnswer: 0,
  },
];

const CSSQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === cssQuizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizQuestions.length - 1) {
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

    if (index === cssQuizQuestions[currentQuestion].correctAnswer) {
      return "correct-answer";
    }

    if (
      index === selectedAnswer &&
      index !== cssQuizQuestions[currentQuestion].correctAnswer
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
              {score} / {cssQuizQuestions.length}
            </div>
            <div className="percentage">
              {((score / cssQuizQuestions.length) * 100).toFixed(0)}% Correct
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
          Question {currentQuestion + 1} of {cssQuizQuestions.length}
        </h2>
      </div>
      <div className="quiz-content">
        <div className="question">
          {cssQuizQuestions[currentQuestion].question}
        </div>
        <div className="options">
          {cssQuizQuestions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`option ${getOptionStyle(index)}`}
            >
              {option}
              {isAnswered &&
                index === cssQuizQuestions[currentQuestion].correctAnswer && (
                  <span className="icon correct">✓</span>
                )}
              {isAnswered &&
                index === selectedAnswer &&
                index !== cssQuizQuestions[currentQuestion].correctAnswer && (
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
          {currentQuestion === cssQuizQuestions.length - 1
            ? "Show Results"
            : "Next Question"}
        </button>
        <div className="progress">
          <span>Score: {score}</span>
          <span>
            Progress:{" "}
            {(((currentQuestion + 1) / cssQuizQuestions.length) * 100).toFixed(
              0
            )}
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

export default CSSQuiz;
