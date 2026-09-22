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

const QuizClient = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = cssQuizQuestions[currentQuestion];

  const handleAnswerClick = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizQuestions.length - 1) {
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

  /*
   * =========================
   * RESULTS SCREEN
   * =========================
   */

  if (showResults) {
    const percentage = Math.round((score / cssQuizQuestions.length) * 100);

    return (
      <div className="quiz-wrapper">
        <div className="quiz-card results-card">
          <div className="results-icon">{percentage >= 70 ? "🎉" : "📚"}</div>

          <span className="results-label">Quiz Complete</span>

          <h2>Great work!</h2>

          <p className="results-description">
            You completed the CSS quiz. Here&apos;s how you did.
          </p>

          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-total">/ {cssQuizQuestions.length}</span>
          </div>

          <p className="percentage">{percentage}% correct</p>

          <button onClick={resetQuiz} className="primary-button">
            Try Again
            <span>↻</span>
          </button>
        </div>

        <style jsx>{`
          .quiz-wrapper {
            width: 100%;
            max-width: 820px;
            margin: 0 auto;
            padding: 24px;
          }

          .quiz-card {
            background: color-mix(in srgb, Canvas 94%, transparent);
            border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
            border-radius: 24px;
            box-shadow:
              0 20px 60px color-mix(in srgb, CanvasText 8%, transparent),
              0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);
            overflow: hidden;
            color: CanvasText;
          }

          .results-card {
            padding: 56px 32px;
            text-align: center;
          }

          .results-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 18px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 18px;

            background: color-mix(in srgb, #6366f1 12%, transparent);

            font-size: 30px;
          }

          .results-label {
            display: inline-block;

            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;

            color: #6366f1;
          }

          .results-card h2 {
            margin: 10px 0 8px;

            font-size: 34px;
            line-height: 1.15;
            letter-spacing: -0.03em;
          }

          .results-description {
            max-width: 420px;
            margin: 0 auto;

            color: color-mix(in srgb, CanvasText 60%, transparent);

            line-height: 1.6;
          }

          .score-circle {
            width: 150px;
            height: 150px;

            margin: 36px auto 16px;

            display: flex;
            align-items: baseline;
            justify-content: center;

            border-radius: 50%;

            background: color-mix(in srgb, #6366f1 9%, transparent);

            border: 1px solid color-mix(in srgb, #6366f1 22%, transparent);

            box-shadow: inset 0 0 0 8px
              color-mix(in srgb, #6366f1 4%, transparent);
          }

          .score-number {
            font-size: 46px;
            font-weight: 800;
            letter-spacing: -0.05em;
          }

          .score-total {
            margin-left: 4px;

            font-size: 20px;

            color: color-mix(in srgb, CanvasText 45%, transparent);
          }

          .percentage {
            margin: 0 0 28px;

            font-size: 18px;
            font-weight: 600;
          }

          .primary-button {
            min-width: 180px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            padding: 14px 22px;

            border: 0;
            border-radius: 12px;

            background: #6366f1;
            color: white;

            font-size: 15px;
            font-weight: 700;

            cursor: pointer;

            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              background 0.2s ease;
          }

          .primary-button:hover {
            background: #5558e8;

            transform: translateY(-2px);

            box-shadow: 0 8px 24px color-mix(in srgb, #6366f1 30%, transparent);
          }

          .primary-button:active {
            transform: translateY(0);
          }

          @media (max-width: 640px) {
            .quiz-wrapper {
              padding: 12px;
            }

            .results-card {
              padding: 40px 20px;
            }

            .results-card h2 {
              font-size: 28px;
            }
          }
        `}</style>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / cssQuizQuestions.length) * 100;

  /*
   * =========================
   * QUIZ SCREEN
   * =========================
   */

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        {/* HEADER */}

        <div className="quiz-header">
          <div>
            <span className="quiz-label">CSS Quiz</span>

            <h2>
              Question {currentQuestion + 1}
              <span> / {cssQuizQuestions.length}</span>
            </h2>
          </div>

          <div className="score-badge">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
        </div>

        {/* PROGRESS */}

        <div className="progress-section">
          <div className="progress-track">
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span>{Math.round(progress)}%</span>
        </div>

        {/* QUESTION */}

        <div className="quiz-content">
          <div className="question">{question.question}</div>

          {/* OPTIONS */}

          <div className="options">
            {question.options.map((option, index) => {
              const isCorrect = isAnswered && index === question.correctAnswer;

              const isWrong =
                isAnswered &&
                index === selectedAnswer &&
                index !== question.correctAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isAnswered}
                  className={`option ${getOptionClass(index)}`}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-text">{option}</span>

                  <span className="option-icon">
                    {isCorrect && "✓"}
                    {isWrong && "×"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* NEXT BUTTON */}

          {isAnswered && (
            <button onClick={handleNextQuestion} className="next-button">
              <span>
                {currentQuestion === cssQuizQuestions.length - 1
                  ? "Show Results"
                  : "Next Question"}
              </span>

              <span className="arrow">→</span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .quiz-wrapper {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          padding: 24px;
        }

        .quiz-card {
          background: color-mix(in srgb, Canvas 94%, transparent);

          color: CanvasText;

          border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);

          border-radius: 24px;

          box-shadow:
            0 20px 60px color-mix(in srgb, CanvasText 8%, transparent),
            0 2px 8px color-mix(in srgb, CanvasText 5%, transparent);

          overflow: hidden;
        }

        /* =========================
           HEADER
        ========================= */

        .quiz-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 28px 32px 22px;
        }

        .quiz-label {
          display: block;

          margin-bottom: 5px;

          color: #6366f1;

          font-size: 12px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .quiz-header h2 {
          margin: 0;

          font-size: 22px;
          line-height: 1.3;

          letter-spacing: -0.02em;
        }

        .quiz-header h2 span {
          color: color-mix(in srgb, CanvasText 40%, transparent);

          font-weight: 500;
        }

        .score-badge {
          display: flex;
          align-items: center;
          gap: 9px;

          padding: 8px 12px;

          border-radius: 10px;

          background: color-mix(in srgb, CanvasText 6%, transparent);

          border: 1px solid color-mix(in srgb, CanvasText 9%, transparent);
        }

        .score-badge span {
          font-size: 12px;

          color: color-mix(in srgb, CanvasText 55%, transparent);
        }

        .score-badge strong {
          font-size: 14px;
        }

        /* =========================
           PROGRESS
        ========================= */

        .progress-section {
          display: flex;
          align-items: center;
          gap: 12px;

          padding: 0 32px 26px;
        }

        .progress-track {
          flex: 1;

          height: 6px;

          overflow: hidden;

          border-radius: 999px;

          background: color-mix(in srgb, CanvasText 8%, transparent);
        }

        .progress-bar {
          height: 100%;

          border-radius: inherit;

          background: #6366f1;

          transition: width 0.35s ease;
        }

        .progress-section > span {
          min-width: 38px;

          font-size: 12px;
          font-weight: 700;

          text-align: right;

          color: color-mix(in srgb, CanvasText 50%, transparent);
        }

        /* =========================
           CONTENT
        ========================= */

        .quiz-content {
          padding: 8px 32px 32px;
        }

        .question {
          max-width: 700px;

          margin-bottom: 28px;

          font-size: 25px;
          line-height: 1.4;

          font-weight: 700;

          letter-spacing: -0.025em;
        }

        /* =========================
           OPTIONS
        ========================= */

        .options {
          display: flex;
          flex-direction: column;

          gap: 10px;

          margin-bottom: 22px;
        }

        .option {
          position: relative;

          width: 100%;

          display: grid;

          grid-template-columns: 42px 1fr 28px;

          align-items: center;

          gap: 14px;

          padding: 14px 16px;

          border: 1px solid color-mix(in srgb, CanvasText 13%, transparent);

          border-radius: 14px;

          background: color-mix(in srgb, Canvas 96%, transparent);

          color: CanvasText;

          text-align: left;

          cursor: pointer;

          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background 0.18s ease,
            box-shadow 0.18s ease;
        }

        .option:not(:disabled):hover {
          transform: translateY(-1px);

          border-color: color-mix(in srgb, #6366f1 55%, transparent);

          background: color-mix(in srgb, #6366f1 7%, Canvas);

          box-shadow: 0 5px 18px color-mix(in srgb, CanvasText 7%, transparent);
        }

        .option:not(:disabled):active {
          transform: translateY(0);
        }

        .option-letter {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: color-mix(in srgb, CanvasText 7%, transparent);

          color: color-mix(in srgb, CanvasText 65%, transparent);

          font-size: 13px;
          font-weight: 800;

          transition:
            background 0.18s ease,
            color 0.18s ease;
        }

        .option:not(:disabled):hover .option-letter {
          background: color-mix(in srgb, #6366f1 15%, transparent);

          color: #6366f1;
        }

        .option-text {
          font-size: 15px;

          line-height: 1.5;

          font-weight: 500;
        }

        .option-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 26px;
          height: 26px;

          font-size: 18px;
          font-weight: 800;
        }

        /* =========================
           CORRECT ANSWER
        ========================= */

        .option.correct-answer {
          border-color: color-mix(in srgb, #22c55e 55%, transparent);

          background: color-mix(in srgb, #22c55e 10%, Canvas);

          color: CanvasText;
        }

        .option.correct-answer .option-letter {
          background: color-mix(in srgb, #22c55e 18%, transparent);

          color: #22c55e;
        }

        .option.correct-answer .option-icon {
          color: #22c55e;
        }

        /* =========================
           WRONG ANSWER
        ========================= */

        .option.wrong-answer {
          border-color: color-mix(in srgb, #ef4444 55%, transparent);

          background: color-mix(in srgb, #ef4444 10%, Canvas);
        }

        .option.wrong-answer .option-letter {
          background: color-mix(in srgb, #ef4444 18%, transparent);

          color: #ef4444;
        }

        .option.wrong-answer .option-icon {
          color: #ef4444;
        }

        /* =========================
           FADED OPTIONS
        ========================= */

        .option.faded {
          opacity: 0.42;
        }

        /* =========================
           NEXT BUTTON
        ========================= */

        .next-button {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 15px 20px;

          border: 0;

          border-radius: 13px;

          background: #6366f1;

          color: white;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          transition:
            transform 0.18s ease,
            background 0.18s ease,
            box-shadow 0.18s ease;
        }

        .next-button:hover {
          background: #5558e8;

          transform: translateY(-1px);

          box-shadow: 0 8px 24px color-mix(in srgb, #6366f1 28%, transparent);
        }

        .next-button:active {
          transform: translateY(0);
        }

        .arrow {
          font-size: 19px;

          transition: transform 0.18s ease;
        }

        .next-button:hover .arrow {
          transform: translateX(3px);
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 640px) {
          .quiz-wrapper {
            padding: 10px;
          }

          .quiz-card {
            border-radius: 18px;
          }

          .quiz-header {
            padding: 22px 18px 18px;
          }

          .progress-section {
            padding: 0 18px 22px;
          }

          .quiz-content {
            padding: 6px 18px 22px;
          }

          .question {
            font-size: 21px;

            margin-bottom: 22px;
          }

          .option {
            grid-template-columns: 36px 1fr 24px;

            gap: 11px;

            padding: 12px;
          }

          .option-letter {
            width: 32px;
            height: 32px;
          }

          .option-text {
            font-size: 14px;
          }

          .score-badge {
            padding: 7px 9px;
          }

          .score-badge span {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizClient;
