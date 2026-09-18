"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the purpose of the HTML <canvas> element?",
    options: [
      "To draw graphics using JavaScript",
      "To display images",
      "To create navigation menus",
      "To style web pages",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which HTML element is used for marking up subscript text?",
    options: ["<sub>", "<down>", "<subscript>", "<lower>"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "What does the 'contenteditable' attribute do?",
    options: [
      "Makes text bold",
      "Allows users to edit content",
      "Creates a link",
      "Changes text color",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Which HTML element represents a thematic break?",
    options: ["<break>", "<tb>", "<hr>", "<sep>"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "What is the purpose of the HTML <track> element?",
    options: [
      "To create music playlists",
      "To specify text tracks for media elements",
      "To track user behavior",
      "To create navigation paths",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Which attribute is used to specify the character encoding?",
    options: ["<encode>", "charset", "encoding", "character-set"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What is the purpose of the <datalist> element?",
    options: [
      "To create tables",
      "To store metadata",
      "To provide autocomplete options for inputs",
      "To display dates",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Which HTML element defines a mathematical formula?",
    options: ["<formula>", "<math>", "<equation>", "<calc>"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "What is the purpose of the <output> element?",
    options: [
      "To print documents",
      "To display calculation results",
      "To create output files",
      "To show error messages",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Which attribute specifies the base URL for relative URLs?",
    options: ["href", "src", "base", "url"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "What is the purpose of the <mark> element?",
    options: [
      "To create bookmarks",
      "To highlight text",
      "To mark lists",
      "To create markers",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "Which HTML element is used for bi-directional text isolation?",
    options: ["<bdi>", "<dir>", "<btext>", "<bilateral>"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "What is the purpose of the <meter> element?",
    options: [
      "To measure page load time",
      "To show a scalar measurement within a range",
      "To display metrics",
      "To create progress bars",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question:
      "Which attribute specifies the relationship between linked documents?",
    options: ["connection", "relationship", "rel", "link"],
    correctAnswer: 2,
  },
  {
    id: 15,
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
    id: 16,
    question: "Which HTML element represents a contact address?",
    options: ["<address>", "<contact>", "<location>", "<info>"],
    correctAnswer: 0,
  },
  {
    id: 17,
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
    id: 18,
    question: "Which attribute is used to specify keyboard shortcuts?",
    options: ["shortcut", "key", "accesskey", "keycode"],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "What is the purpose of the <picture> element?",
    options: [
      "To display multiple image resources",
      "To create image galleries",
      "To edit images",
      "To add image filters",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "Which HTML element is used for representing progress?",
    options: ["<progress>", "<meter>", "<loading>", "<status>"],
    correctAnswer: 0,
  },
  {
    id: 21,
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
    id: 22,
    question: "Which attribute specifies the writing direction?",
    options: ["direction", "writing-mode", "dir", "text-direction"],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "What is the purpose of the <cite> element?",
    options: [
      "To create citations",
      "To reference work titles",
      "To quote text",
      "To create links",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "Which HTML element represents a term definition?",
    options: ["<define>", "<term>", "<dfn>", "<def>"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "What is the purpose of the <source> element?",
    options: [
      "To specify source code",
      "To list references",
      "To specify multiple media resources",
      "To show file sources",
    ],
    correctAnswer: 2,
  },
  {
    id: 26,
    question: "Which attribute specifies the draggable status of an element?",
    options: ["drag", "draggable", "candrag", "dragstatus"],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "What is the purpose of the <summary> element?",
    options: [
      "To create summaries",
      "To define a visible heading for details",
      "To summarize text",
      "To create abstracts",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: "Which HTML element represents sample output?",
    options: ["<output>", "<samp>", "<code>", "<example>"],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "What is the purpose of the 'download' attribute?",
    options: [
      "To enable file downloads",
      "To download images",
      "To specify a download filename",
      "To create download links",
    ],
    correctAnswer: 2,
  },
  {
    id: 30,
    question: "Which HTML element defines embedded content?",
    options: ["<embedded>", "<embed>", "<media>", "<content>"],
    correctAnswer: 1,
  },
  {
    id: 31,
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
    id: 32,
    question: "Which attribute specifies if an element is spellchecked?",
    options: ["spell", "spellcheck", "checking", "autocorrect"],
    correctAnswer: 1,
  },
  {
    id: 33,
    question: "What is the purpose of the <var> element?",
    options: [
      "To declare variables",
      "To mark variables",
      "To store values",
      "To create variables",
    ],
    correctAnswer: 1,
  },
  {
    id: 34,
    question: "Which HTML element represents a generic container?",
    options: ["<container>", "<div>", "<section>", "<wrapper>"],
    correctAnswer: 1,
  },
  {
    id: 35,
    question: "What is the purpose of the 'translate' attribute?",
    options: [
      "To translate text",
      "To specify if element should be translated",
      "To enable translation",
      "To set language",
    ],
    correctAnswer: 1,
  },
  {
    id: 36,
    question: "Which element represents a clickable button?",
    options: ["<btn>", "<button>", "<clickable>", "<input type='button'>"],
    correctAnswer: 1,
  },
  {
    id: 37,
    question: "What is the purpose of the <sup> element?",
    options: [
      "To create superscript text",
      "To support elements",
      "To add supplementary content",
      "To create superior text",
    ],
    correctAnswer: 0,
  },
  {
    id: 38,
    question: "Which attribute specifies if an element is editable?",
    options: ["editable", "contenteditable", "edit", "modify"],
    correctAnswer: 1,
  },
  {
    id: 39,
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
    id: 40,
    question: "Which HTML element represents a thematic grouping of content?",
    options: ["<group>", "<section>", "<theme>", "<content>"],
    correctAnswer: 1,
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
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
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

  const getLetter = (index) => {
    return String.fromCharCode(65 + index);
  };

  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="quiz-page">
        <div className="quiz-container results-container">
          <div className="results">
            <div className="results-icon">✓</div>

            <p className="results-label">Quiz Complete</p>

            <h2>Great job!</h2>

            <p className="results-description">
              You&apos;ve completed all {quizQuestions.length} questions.
            </p>

            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {quizQuestions.length}</div>
            </div>

            <p className="percentage">{percentage}% Correct</p>

            <button onClick={resetQuiz} className="retry-button">
              <span>↻</span>
              Try Again
            </button>
          </div>
        </div>

        <style jsx>{`
          .quiz-page {
            width: 100%;
            min-height: 100%;
            padding: 32px 16px;
            color: CanvasText;
          }

          .quiz-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background: color-mix(in srgb, Canvas 96%, CanvasText 4%);
            border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
            border-radius: 24px;
            box-shadow:
              0 20px 50px color-mix(in srgb, CanvasText 8%, transparent),
              0 4px 12px color-mix(in srgb, CanvasText 4%, transparent);
          }

          .results-container {
            padding: 60px 32px;
          }

          .results {
            text-align: center;
          }

          .results-icon {
            width: 72px;
            height: 72px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: color-mix(in srgb, #22c55e 15%, Canvas);
            border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
            color: #22c55e;
            font-size: 34px;
            font-weight: 800;
          }

          .results-label {
            margin: 0 0 8px;
            color: color-mix(in srgb, CanvasText 55%, transparent);
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          h2 {
            margin: 0;
            color: CanvasText;
            font-size: 32px;
            line-height: 1.2;
            font-weight: 800;
          }

          .results-description {
            margin: 12px 0 30px;
            color: color-mix(in srgb, CanvasText 60%, transparent);
            font-size: 16px;
          }

          .score-circle {
            width: 150px;
            height: 150px;
            margin: 0 auto 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 50%;
            background: linear-gradient(
              color-mix(in srgb, #6366f1 10%, Canvas),
              color-mix(in srgb, #6366f1 5%, Canvas)
            );
            border: 8px solid color-mix(in srgb, #6366f1 18%, Canvas);
          }

          .score-number {
            color: CanvasText;
            font-size: 42px;
            line-height: 1;
            font-weight: 800;
          }

          .score-total {
            margin-top: 5px;
            color: color-mix(in srgb, CanvasText 50%, transparent);
            font-size: 15px;
          }

          .percentage {
            margin: 0 0 30px;
            color: #6366f1;
            font-size: 20px;
            font-weight: 750;
          }

          .retry-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 24px;
            border: 0;
            border-radius: 12px;
            background: #6366f1;
            color: white;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition:
              transform 0.2s ease,
              background 0.2s ease,
              box-shadow 0.2s ease;
            box-shadow: 0 8px 20px color-mix(in srgb, #6366f1 25%, transparent);
          }

          .retry-button:hover {
            background: #4f46e5;
            transform: translateY(-2px);
            box-shadow: 0 12px 25px color-mix(in srgb, #6366f1 30%, transparent);
          }

          .retry-button span {
            font-size: 19px;
          }

          @media (max-width: 640px) {
            .quiz-page {
              padding: 16px 10px;
            }

            .results-container {
              padding: 45px 20px;
            }

            h2 {
              font-size: 28px;
            }
          }
        `}</style>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <div>
            <div className="quiz-title">
              <span className="title-dot" />
              HTML Quiz
            </div>
            <p className="quiz-subtitle">Test your HTML knowledge</p>
          </div>

          <div className="score-badge">
            <span className="score-label">Score</span>
            <span className="score-value">{score}</span>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-info">
            <span>
              Question <strong>{currentQuestion + 1}</strong> of{" "}
              {quizQuestions.length}
            </span>

            <span>{progress.toFixed(0)}%</span>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="quiz-content">
          <div className="question-number">
            QUESTION {String(currentQuestion + 1).padStart(2, "0")}
          </div>

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
                <span className="option-left">
                  <span className="option-letter">{getLetter(index)}</span>

                  <span className="option-text">{option}</span>
                </span>

                {isAnswered && index === question.correctAnswer && (
                  <span className="answer-icon correct">✓</span>
                )}

                {isAnswered &&
                  index === selectedAnswer &&
                  index !== question.correctAnswer && (
                    <span className="answer-icon wrong">×</span>
                  )}
              </button>
            ))}
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

        <div className="quiz-footer">
          <span>
            {isAnswered ? "Answer selected" : "Select an answer to continue"}
          </span>

          <span>
            {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>
      </div>

      <style jsx>{`
        .quiz-page {
          width: 100%;
          min-height: 100%;
          padding: 32px 16px;
          color: CanvasText;
        }

        .quiz-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          background: color-mix(in srgb, Canvas 96%, CanvasText 4%);
          border: 1px solid color-mix(in srgb, CanvasText 12%, transparent);
          border-radius: 24px;
          box-shadow:
            0 20px 50px color-mix(in srgb, CanvasText 8%, transparent),
            0 4px 12px color-mix(in srgb, CanvasText 4%, transparent);
        }

        .quiz-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 26px 30px;
          border-bottom: 1px solid
            color-mix(in srgb, CanvasText 9%, transparent);
        }

        .quiz-title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: CanvasText;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .title-dot {
          width: 9px;
          height: 9px;
          display: block;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 0 5px color-mix(in srgb, #6366f1 12%, transparent);
        }

        .quiz-subtitle {
          margin: 6px 0 0;
          color: color-mix(in srgb, CanvasText 52%, transparent);
          font-size: 13px;
        }

        .score-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 10px;
          background: color-mix(in srgb, CanvasText 6%, transparent);
          border: 1px solid color-mix(in srgb, CanvasText 10%, transparent);
        }

        .score-label {
          color: color-mix(in srgb, CanvasText 52%, transparent);
          font-size: 12px;
          font-weight: 600;
        }

        .score-value {
          color: #6366f1;
          font-size: 15px;
          font-weight: 800;
        }

        .progress-section {
          padding: 20px 30px 0;
        }

        .progress-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 9px;
          color: color-mix(in srgb, CanvasText 52%, transparent);
          font-size: 12px;
          font-weight: 600;
        }

        .progress-info strong {
          color: CanvasText;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: color-mix(in srgb, CanvasText 9%, transparent);
        }

        .progress-fill {
          height: 100%;
          border-radius: inherit;
          background: #6366f1;
          transition: width 0.35s ease;
        }

        .quiz-content {
          padding: 38px 30px 30px;
        }

        .question-number {
          margin-bottom: 12px;
          color: #6366f1;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .question {
          margin: 0 0 28px;
          max-width: 700px;
          color: CanvasText;
          font-size: 27px;
          line-height: 1.35;
          font-weight: 750;
          letter-spacing: -0.025em;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option {
          width: 100%;
          min-height: 68px;
          padding: 12px 16px 12px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          text-align: left;
          border: 1px solid color-mix(in srgb, CanvasText 13%, transparent);
          border-radius: 15px;
          background: color-mix(in srgb, CanvasText 3%, transparent);
          color: CanvasText;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .option:not(:disabled):hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, #6366f1 50%, transparent);
          background: color-mix(in srgb, #6366f1 7%, Canvas);
          box-shadow: 0 8px 20px color-mix(in srgb, #6366f1 8%, transparent);
        }

        .option-left {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .option-letter {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: color-mix(in srgb, CanvasText 7%, transparent);
          border: 1px solid color-mix(in srgb, CanvasText 10%, transparent);
          color: color-mix(in srgb, CanvasText 70%, transparent);
          font-size: 13px;
          font-weight: 800;
          transition: all 0.2s ease;
        }

        .option:not(:disabled):hover .option-letter {
          background: color-mix(in srgb, #6366f1 14%, Canvas);
          border-color: color-mix(in srgb, #6366f1 25%, transparent);
          color: #6366f1;
        }

        .option-text {
          font-size: 15px;
          line-height: 1.5;
          font-weight: 550;
        }

        .answer-icon {
          width: 27px;
          height: 27px;
          flex: 0 0 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 16px;
          font-weight: 900;
        }

        .correct-answer {
          background: color-mix(in srgb, #22c55e 10%, Canvas);
          border-color: color-mix(in srgb, #22c55e 45%, transparent);
        }

        .correct-answer .option-letter {
          background: color-mix(in srgb, #22c55e 15%, Canvas);
          border-color: color-mix(in srgb, #22c55e 35%, transparent);
          color: #22c55e;
        }

        .answer-icon.correct {
          background: color-mix(in srgb, #22c55e 16%, Canvas);
          color: #22c55e;
        }

        .wrong-answer {
          background: color-mix(in srgb, #ef4444 10%, Canvas);
          border-color: color-mix(in srgb, #ef4444 45%, transparent);
        }

        .wrong-answer .option-letter {
          background: color-mix(in srgb, #ef4444 15%, Canvas);
          border-color: color-mix(in srgb, #ef4444 35%, transparent);
          color: #ef4444;
        }

        .answer-icon.wrong {
          background: color-mix(in srgb, #ef4444 16%, Canvas);
          color: #ef4444;
        }

        .faded {
          opacity: 0.42;
        }

        .next-button {
          width: 100%;
          margin-top: 20px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 13px;
          background: #6366f1;
          color: white;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 8px 20px color-mix(in srgb, #6366f1 22%, transparent);
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .next-button:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 12px 25px color-mix(in srgb, #6366f1 28%, transparent);
        }

        .arrow {
          font-size: 19px;
          transition: transform 0.2s ease;
        }

        .next-button:hover .arrow {
          transform: translateX(4px);
        }

        .quiz-footer {
          padding: 17px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid color-mix(in srgb, CanvasText 9%, transparent);
          color: color-mix(in srgb, CanvasText 45%, transparent);
          font-size: 12px;
          font-weight: 550;
        }

        @media (max-width: 640px) {
          .quiz-page {
            padding: 16px 10px;
          }

          .quiz-container {
            border-radius: 20px;
          }

          .quiz-header {
            padding: 20px;
          }

          .progress-section {
            padding: 18px 20px 0;
          }

          .quiz-content {
            padding: 30px 20px 22px;
          }

          .question {
            font-size: 22px;
            line-height: 1.4;
            margin-bottom: 22px;
          }

          .option {
            min-height: 62px;
            padding: 10px 12px 10px 10px;
          }

          .option-left {
            gap: 11px;
          }

          .option-letter {
            width: 34px;
            height: 34px;
            flex-basis: 34px;
            border-radius: 9px;
          }

          .option-text {
            font-size: 14px;
          }

          .quiz-footer {
            padding: 15px 20px;
          }

          .results-container {
            padding: 45px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .option,
          .next-button,
          .retry-button,
          .arrow,
          .progress-fill {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizClient;
