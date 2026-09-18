"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the purpose of the HTML <main> element?",
    options: [
      "To define the main content of a document",
      "To create a navigation menu",
      "To specify a header",
      "To define a footer",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which attribute is used to specify the language of the content?",
    options: ["lang", "language", "content-lang", "locale"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "What does the <figure> element represent?",
    options: [
      "A section of content that is self-contained and often referenced as a single unit",
      "A container for images",
      "A table",
      "A form",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Which HTML element is used to define a tooltip for an image?",
    options: ["<title>", "<alt>", "<tooltip>", "<caption>"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "What is the purpose of the <time> element?",
    options: [
      "To display the current time",
      "To specify a time in a document",
      "To create a timer",
      "To format time",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Which attribute is used to specify the target of a link?",
    options: ["target", "href", "src", "link"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "What is the purpose of the <mark> element?",
    options: [
      "To highlight text",
      "To mark a section of a document",
      "To create a marker",
      "To create a bookmark",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Which HTML element is used to define a progress bar?",
    options: ["<progress>", "<meter>", "<bar>", "<gauge>"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "What is the purpose of the <details> element?",
    options: [
      "To create a dropdown list",
      "To specify details that the user can view or hide",
      "To define a dialog box",
      "To create a form",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Which HTML element is used to define a dialog box?",
    options: ["<dialog>", "<modal>", "<popup>", "<window>"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "What is the purpose of the <summary> element?",
    options: [
      "To create a summary",
      "To define a visible heading for details",
      "To summarize text",
      "To create an abstract",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "Which HTML element is used to define a section of a document?",
    options: ["<section>", "<div>", "<article>", "<group>"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "What is the purpose of the <figcaption> element?",
    options: [
      "To define a caption for a <figure> element",
      "To define a caption for a table",
      "To define a caption for an image",
      "To define a caption for a video",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Which HTML element is used to define a keyboard input?",
    options: ["<kbd>", "<input>", "<key>", "<keyboard>"],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "What is the purpose of the <samp> element?",
    options: [
      "To define sample output from a computer program",
      "To define a sample text",
      "To define a sample code",
      "To define a sample data",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Which HTML element is used to define a variable?",
    options: ["<var>", "<variable>", "<v>", "<value>"],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "What is the purpose of the <ruby> element?",
    options: [
      "To display red text",
      "To show Ruby programming code",
      "To show Ruby annotations",
      "To create decorative text",
    ],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: "Which HTML element is used to define a definition term?",
    options: ["<dt>", "<dfn>", "<term>", "<def>"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "What is the purpose of the <q> element?",
    options: [
      "To define a short inline quotation",
      "To define a long quotation",
      "To define a quote",
      "To define a citation",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question:
      "Which HTML element is used to define a generic container for styling purposes?",
    options: ["<div>", "<container>", "<section>", "<wrapper>"],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "What is the purpose of the <abbr> element?",
    options: [
      "To create abbreviations",
      "To mark up abbreviations",
      "To shorten text",
      "To create acronyms",
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    question:
      "Which attribute is used to specify the draggable status of an element?",
    options: ["draggable", "drag", "candrag", "dragstatus"],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "What is the purpose of the <wbr> element?",
    options: [
      "To create line breaks",
      "To specify word breaks",
      "To wrap text",
      "To break pages",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question:
      "Which attribute is used to specify the base URL for relative URLs?",
    options: ["<base>", "base", "href", "src"],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "What is the purpose of the <ins> element?",
    options: [
      "To insert content",
      "To mark inserted text",
      "To create insertions",
      "To add inline elements",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "Which HTML element is used to define a contact address?",
    options: ["<address>", "<contact>", "<info>", "<location>"],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "What is the purpose of the <del> element?",
    options: [
      "To mark text that has been deleted from a document",
      "To remove content",
      "To strike through text",
      "To delete elements",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "Which HTML element is used to define a table row?",
    options: ["<tr>", "<row>", "<table-row>", "<line>"],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "What is the purpose of the <colgroup> element?",
    options: [
      "To group columns in a table",
      "To define column properties for a table",
      "To create a column",
      "To group rows in a table",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Which HTML element is used to define a table header cell?",
    options: ["<th>", "<header>", "<table-header>", "<head>"],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: "What is the purpose of the <col> element?",
    options: [
      "To define properties for one or more columns in a table",
      "To create a column",
      "To define a column group",
      "To define a table header",
    ],
    correctAnswer: 0,
  },
  {
    id: 32,
    question: "Which HTML element is used to define a table data cell?",
    options: ["<td>", "<data>", "<cell>", "<table-data>"],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: "What is the purpose of the <tfoot> element?",
    options: [
      "To define a footer for a table",
      "To define a table footer",
      "To create a footer section",
      "To define a table header",
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: "Which HTML element is used to define a table caption?",
    options: ["<caption>", "<title>", "<header>", "<summary>"],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: "What is the purpose of the <thead> element?",
    options: [
      "To define a header for a table",
      "To define a table header",
      "To create a header section",
      "To define a table footer",
    ],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: "Which HTML element is used to define a table body?",
    options: ["<tbody>", "<body>", "<table-body>", "<content>"],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "What is the purpose of the <optgroup> element?",
    options: [
      "To group form options",
      "To create option menus",
      "To group select options",
      "To optimize selections",
    ],
    correctAnswer: 2,
  },
  {
    id: 38,
    question:
      "Which HTML element is used to define an option group in a dropdown list?",
    options: ["<optgroup>", "<group>", "<option-group>", "<select-group>"],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: "What is the purpose of the <option> element?",
    options: [
      "To define an option in a list",
      "To define a dropdown list",
      "To define a select menu",
      "To define a list item",
    ],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: "Which HTML element is used to define a form?",
    options: ["<form>", "<input>", "<button>", "<select>"],
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

  const getOptionClass = (index) => {
    if (!isAnswered) return "";
    if (index === question.correctAnswer) return "correct-answer";
    if (index === selectedAnswer && index !== question.correctAnswer)
      return "wrong-answer";
    return "faded";
  };

  /* ───────────────────────── RESULTS VIEW ───────────────────────── */
  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="quiz-wrapper">
        <div className="quiz-card results-card">
          <div className="results-icon">{percentage >= 70 ? "🎉" : "📚"}</div>
          <span className="results-label">Quiz Complete</span>
          <h2>Great work!</h2>
          <p className="results-description">
            You completed the HTML Elements quiz. Here&apos;s how you did.
          </p>

          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-total">/ {quizQuestions.length}</span>
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

  /* ──────────────────────── QUESTION VIEW ──────────────────────── */
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        {/* Header */}
        <div className="quiz-header">
          <div>
            <span className="quiz-label">HTML Elements Quiz</span>
            <h2>
              Question {currentQuestion + 1}
              <span> / {quizQuestions.length}</span>
            </h2>
          </div>
          <div className="score-badge">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-section">
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span>{Math.round(progress)}%</span>
        </div>

        {/* Question + Options */}
        <div className="quiz-content">
          <div className="question">{question.question}</div>

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

          {isAnswered && (
            <button onClick={handleNextQuestion} className="next-button">
              <span>
                {currentQuestion === quizQuestions.length - 1
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

        /* Header */
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

        /* Progress */
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

        /* Content */
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

        /* Options */
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

        /* Correct */
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

        /* Wrong */
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

        /* Faded */
        .option.faded {
          opacity: 0.42;
        }

        /* Next button */
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

        /* Mobile */
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
          .results-card {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizClient;
