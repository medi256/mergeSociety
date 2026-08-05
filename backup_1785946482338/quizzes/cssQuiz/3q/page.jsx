"use client";

import { useState } from "react";

const cssQuizThreeQuestions = [
  {
    id: 41,
    question: "Which CSS property is used to set the text color?",
    options: ["color", "text-color", "font-color", "text"],
    correctAnswer: 0,
  },
  {
    id: 42,
    question: "How do you set the margin for all four sides of an element?",
    options: [
      "margin: 10px;",
      "margin: 10px 10px 10px 10px;",
      "margin: 10px 10px;",
      "margin: 10px 10px 10px;",
    ],
    correctAnswer: 0,
  },
  {
    id: 43,
    question:
      "Which CSS property is used to create a radial gradient background?",
    options: [
      "background: radial-gradient(circle, red, blue);",
      "background: gradient-radial(circle, red, blue);",
      "background: gradient(circle, red, blue);",
      "background: radial-gradient(red, blue);",
    ],
    correctAnswer: 0,
  },
  {
    id: 44,
    question: "How do you set the font style to italic?",
    options: [
      "font-style: italic;",
      "font-italic: true;",
      "text-style: italic;",
      "text-italic: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 45,
    question: "Which CSS property is used to set the line height?",
    options: ["line-height", "text-height", "height-line", "line-spacing"],
    correctAnswer: 0,
  },
  {
    id: 46,
    question: "How do you make an element fixed at the top of the viewport?",
    options: [
      "position: fixed; top: 0;",
      "position: absolute; top: 0;",
      "position: sticky; top: 0;",
      "position: relative; top: 0;",
    ],
    correctAnswer: 0,
  },
  {
    id: 47,
    question: "Which CSS property is used to set the opacity of an element?",
    options: ["opacity", "alpha", "transparency", "visibility"],
    correctAnswer: 0,
  },
  {
    id: 48,
    question:
      "How do you set the text to be centered vertically in a container?",
    options: [
      "display: flex; align-items: center;",
      "text-align: center;",
      "vertical-align: middle;",
      "justify-content: center;",
    ],
    correctAnswer: 0,
  },
  {
    id: 49,
    question: "Which CSS property is used to set the border color?",
    options: ["border-color", "color", "border", "border-style"],
    correctAnswer: 0,
  },
  {
    id: 50,
    question:
      "How do you select all direct child elements of a parent element?",
    options: [
      "parent > child",
      "parent child",
      "parent .child",
      "parent #child",
    ],
    correctAnswer: 0,
  },
  {
    id: 51,
    question: "Which CSS property is used to set the text decoration?",
    options: ["text-decoration", "text-style", "text-format", "text-underline"],
    correctAnswer: 0,
  },
  {
    id: 52,
    question: "How do you set the transition duration?",
    options: [
      "transition-duration: 0.5s;",
      "transition: 0.5s;",
      "animate: 0.5s;",
      "change: 0.5s;",
    ],
    correctAnswer: 1,
  },
  {
    id: 53,
    question:
      "Which CSS property is used to set the border radius to a specific corner?",
    options: [
      "border-top-left-radius: 5px;",
      "corner-radius: 5px 0 0 0;",
      "border-radius: 5px 0 0 0;",
      "border-curve: 5px 0 0 0;",
    ],
    correctAnswer: 0,
  },
  {
    id: 54,
    question: "How do you set the text to be uppercase?",
    options: [
      "text-transform: uppercase;",
      "font-case: uppercase;",
      "text-case: uppercase;",
      "text-style: uppercase;",
    ],
    correctAnswer: 0,
  },
  {
    id: 55,
    question: "Which CSS property is used to set the font weight to bold?",
    options: [
      "font-weight: bold;",
      "font-style: bold;",
      "text-weight: bold;",
      "bold: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 56,
    question: "How do you set the background color to a specific color?",
    options: [
      "background-color: red;",
      "color: red;",
      "text-color: red;",
      "bg-color: red;",
    ],
    correctAnswer: 0,
  },
  {
    id: 57,
    question:
      "Which CSS property is used to set the padding for all four sides of an element?",
    options: [
      "padding: 10px;",
      "padding: 10px 10px 10px 10px;",
      "padding: 10px 10px;",
      "padding: 10px 10px 10px;",
    ],
    correctAnswer: 0,
  },
  {
    id: 58,
    question: "How do you set the display property to flex?",
    options: [
      "display: flex;",
      "flex-container: true;",
      "flex: 1;",
      "flex-layout: true;",
    ],
    correctAnswer: 0,
  },
  {
    id: 59,
    question: "Which CSS property is used to set the font family?",
    options: ["font-family", "font", "text-font", "font-style"],
    correctAnswer: 0,
  },
  {
    id: 60,
    question: "How do you set the border width?",
    options: [
      "border-width: 2px;",
      "border: 2px;",
      "border-size: 2px;",
      "border-thickness: 2px;",
    ],
    correctAnswer: 0,
  },
];

const CSSQuizThree = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === cssQuizThreeQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizThreeQuestions.length - 1) {
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

    if (index === cssQuizThreeQuestions[currentQuestion].correctAnswer) {
      return "correct-answer";
    }

    if (
      index === selectedAnswer &&
      index !== cssQuizThreeQuestions[currentQuestion].correctAnswer
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
              {score} / {cssQuizThreeQuestions.length}
            </div>
            <div className="percentage">
              {((score / cssQuizThreeQuestions.length) * 100).toFixed(0)}%
              Correct
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
          Question {currentQuestion + 1} of {cssQuizThreeQuestions.length}
        </h2>
      </div>
      <div className="quiz-content">
        <div className="question">
          {cssQuizThreeQuestions[currentQuestion].question}
        </div>
        <div className="options">
          {cssQuizThreeQuestions[currentQuestion].options.map(
            (option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`option ${getOptionStyle(index)}`}
              >
                {option}
                {isAnswered &&
                  index ===
                    cssQuizThreeQuestions[currentQuestion].correctAnswer && (
                    <span className="icon correct">✓</span>
                  )}
                {isAnswered &&
                  index === selectedAnswer &&
                  index !==
                    cssQuizThreeQuestions[currentQuestion].correctAnswer && (
                    <span className="icon wrong">×</span>
                  )}
              </div>
            )
          )}
        </div>
        <button
          onClick={handleNextQuestion}
          className="next-button"
          disabled={isAnswered ? false : true}
        >
          {currentQuestion === cssQuizThreeQuestions.length - 1
            ? "Show Results"
            : "Next Question"}
        </button>
        <div className="progress-w">
          <span>Score: {score}</span>
          <span>
            Progress:{" "}
            {(
              ((currentQuestion + 1) / cssQuizThreeQuestions.length) *
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

export default CSSQuizThree;
