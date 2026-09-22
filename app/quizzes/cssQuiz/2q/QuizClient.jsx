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

const QuizClient = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = cssQuizTwoQuestions[currentQuestion];

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizTwoQuestions.length - 1) {
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

  const getOptionClass = (index) => {
    if (!isAnswered) return "";

    if (index === question.correctAnswer) {
      return "correct-answer";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "wrong-answer";
    }

    return "faded";
  };

  const optionLetters = ["A", "B", "C", "D"];

  if (showResults) {
    const percentage = Math.round((score / cssQuizTwoQuestions.length) * 100);

    return (
      <div className="quiz-wrapper">
        <div className="quiz-card">
          <div className="results-screen">
            <div className="results-icon">🎉</div>

            <h2>Quiz Complete!</h2>

            <p className="results-message">
              Great work! You completed the CSS quiz.
            </p>

            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">
                / {cssQuizTwoQuestions.length}
              </span>
            </div>

            <div className="percentage">{percentage}% Correct</div>

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
              0 10px 30px rgba(0, 0, 0, 0.08),
              0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .results-screen {
            text-align: center;
            padding: 60px 24px;
          }

          .results-icon {
            width: 72px;
            height: 72px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eef2ff;
            border-radius: 50%;
            font-size: 34px;
          }

          .results-screen h2 {
            margin: 0 0 8px;
            font-size: 28px;
            font-weight: 700;
          }

          .results-message {
            margin: 0 0 32px;
            color: color-mix(in srgb, CanvasText 65%, transparent);
            font-size: 16px;
          }

          .score-circle {
            width: 150px;
            height: 150px;
            margin: 0 auto 20px;
            border: 8px solid #6366f1;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            box-sizing: border-box;
          }

          .score-number {
            font-size: 42px;
            font-weight: 800;
            line-height: 1;
          }

          .score-total {
            margin-top: 4px;
            font-size: 16px;
            opacity: 0.6;
          }

          .percentage {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 32px;
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
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .retry-button:hover {
            background: #4f46e5;
            transform: translateY(-1px);
          }

          .retry-button span {
            font-size: 20px;
          }

          @media (max-width: 640px) {
            .quiz-wrapper {
              padding: 12px;
            }

            .results-screen {
              padding: 48px 20px;
            }

            .results-screen h2 {
              font-size: 24px;
            }

            .score-circle {
              width: 130px;
              height: 130px;
            }

            .score-number {
              font-size: 36px;
            }
          }
        `}</style>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / cssQuizTwoQuestions.length) * 100;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="header-top">
            <span className="quiz-label">CSS Quiz</span>

            <span className="question-count">
              Question {currentQuestion + 1} / {cssQuizTwoQuestions.length}
            </span>

            <span className="score-badge">Score: {score}</span>
          </div>

          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="quiz-content">
          <h1 className="question">{question.question}</h1>

          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                className={`option ${getOptionClass(index)}`}
              >
                <span className="option-letter">{optionLetters[index]}</span>

                <span className="option-text">{option}</span>

                <span className="option-icon">
                  {isAnswered && index === question.correctAnswer && (
                    <span className="correct-icon">✓</span>
                  )}

                  {isAnswered &&
                    index === selectedAnswer &&
                    index !== question.correctAnswer && (
                      <span className="wrong-icon">×</span>
                    )}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextQuestion}
            className="next-button"
            disabled={!isAnswered}
          >
            <span>
              {currentQuestion === cssQuizTwoQuestions.length - 1
                ? "Show Results"
                : "Next Question"}
            </span>

            <span className="arrow">→</span>
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
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .quiz-header {
          padding: 24px 24px 0;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }

        .quiz-label {
          color: #6366f1;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .question-count {
          font-size: 14px;
          font-weight: 600;
          opacity: 0.7;
        }

        .score-badge {
          padding: 7px 12px;
          border-radius: 999px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 13px;
          font-weight: 700;
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
          background: #6366f1;
          transition: width 0.3s ease;
        }

        .quiz-content {
          padding: 32px 24px 28px;
        }

        .question {
          margin: 0 0 28px;
          font-size: 25px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }

        .option {
          width: 100%;
          min-height: 74px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
          border-radius: 14px;
          background: color-mix(in srgb, Canvas 98%, CanvasText 2%);
          color: CanvasText;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
          font-family: inherit;
        }

        .option:hover:not(:disabled) {
          transform: translateY(-2px);
          border-color: #a5b4fc;
          background: #5454fe;
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.08);
        }

        .option-letter {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: color-mix(in srgb, CanvasText 7%, transparent);
          font-size: 14px;
          font-weight: 700;
        }

        .option-text {
          flex: 1;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 500;
          word-break: break-word;
        }

        .option-icon {
          flex-shrink: 0;
          width: 24px;
          text-align: center;
          font-size: 21px;
          font-weight: 800;
        }

        .correct-answer {
          background: #f0fdf4 !important;
          border-color: #86efac !important;
          color: #166534;
        }

        .correct-answer .option-letter {
          background: #dcfce7;
          color: #166534;
        }

        .correct-icon {
          color: #22c55e;
        }

        .wrong-answer {
          background: #fef2f2 !important;
          border-color: #fca5a5 !important;
          color: #991b1b;
        }

        .wrong-answer .option-letter {
          background: #fee2e2;
          color: #991b1b;
        }

        .wrong-icon {
          color: #ef4444;
        }

        .faded {
          opacity: 0.45;
        }

        .next-button {
          width: 100%;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          border-radius: 12px;
          background: #6366f1;
          color: white;
          font-family: inherit;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .next-button:not(:disabled):hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        .next-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .arrow {
          font-size: 20px;
          line-height: 1;
        }

        @media (max-width: 640px) {
          .quiz-wrapper {
            padding: 12px;
          }

          .quiz-header {
            padding: 20px 16px 0;
          }

          .header-top {
            flex-wrap: wrap;
          }

          .question-count {
            order: 3;
            width: 100%;
          }

          .quiz-content {
            padding: 24px 16px 20px;
          }

          .question {
            font-size: 21px;
            margin-bottom: 22px;
          }

          .options {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .option {
            min-height: 66px;
            padding: 13px;
          }

          .option-text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizClient;
