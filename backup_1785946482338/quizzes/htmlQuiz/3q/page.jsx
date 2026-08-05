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

const HTMLQuiz = () => {
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
          <h2>Quiz Results</h2>
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
          Question {currentQuestion + 1} of {quizQuestions.length}
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
        <div className="progress-w">
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

export default HTMLQuiz;
