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

const QuizClient = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = cssQuizThreeQuestions[currentQuestion];

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizThreeQuestions.length - 1) {
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
    const percentage = Math.round((score / cssQuizThreeQuestions.length) * 100);

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
                / {cssQuizThreeQuestions.length}
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
              0 10px 30px color-mix(in srgb, CanvasText 8%, transparent),
              0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);
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

            background: color-mix(in srgb, #6366f1 12%, Canvas);

            border-radius: 50%;
            font-size: 34px;
          }

          .results-screen h2 {
            margin: 0 0 8px;
            color: CanvasText;
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
            color: CanvasText;
            font-size: 42px;
            font-weight: 800;
            line-height: 1;
          }

          .score-total {
            margin-top: 4px;
            color: color-mix(in srgb, CanvasText 60%, transparent);
            font-size: 16px;
          }

          .percentage {
            color: CanvasText;
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

  const progress = ((currentQuestion + 1) / cssQuizThreeQuestions.length) * 100;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="header-top">
            <span className="quiz-label">CSS Quiz</span>

            <span className="question-count">
              Question {currentQuestion + 1} / {cssQuizThreeQuestions.length}
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
              {currentQuestion === cssQuizThreeQuestions.length - 1
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
            0 10px 30px color-mix(in srgb, CanvasText 8%, transparent),
            0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);
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
          color: CanvasText;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.7;
        }

        .score-badge {
          padding: 7px 12px;
          border-radius: 999px;

          background: color-mix(in srgb, #6366f1 12%, Canvas);

          color: #6366f1;
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

          color: CanvasText;

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

        /*
          System-aware hover:
          Instead of forcing white, this mixes with Canvas,
          so it works with both light and dark system themes.
        */
        .option:hover:not(:disabled) {
          transform: translateY(-2px);

          background: color-mix(in srgb, #6366f1 8%, Canvas);

          border-color: color-mix(in srgb, #6366f1 45%, CanvasText 10%);

          box-shadow: 0 5px 15px color-mix(in srgb, #6366f1 12%, transparent);
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

          color: CanvasText;

          font-size: 14px;
          font-weight: 700;
        }

        .option-text {
          flex: 1;

          color: inherit;

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
          background: color-mix(in srgb, #22c55e 13%, Canvas) !important;

          border-color: #86efac !important;
          color: #166534;
        }

        .correct-answer .option-letter {
          background: color-mix(in srgb, #22c55e 18%, Canvas);

          color: #166534;
        }

        .correct-icon {
          color: #22c55e;
        }

        .wrong-answer {
          background: color-mix(in srgb, #ef4444 13%, Canvas) !important;

          border-color: #fca5a5 !important;
          color: #991b1b;
        }

        .wrong-answer .option-letter {
          background: color-mix(in srgb, #ef4444 18%, Canvas);

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
