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

export default HTMLQuiz;
