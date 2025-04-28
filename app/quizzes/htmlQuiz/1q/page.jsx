"use client";

import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Machine Learning",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<head>", "<h1>"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "css", "class"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<checkbox>",
      "<input type='check'>",
      "<input type='checkbox'>",
      "<check>",
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<styles>"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["alt", "title", "description", "longdesc"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<newline>"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE html>",
      "<DOCTYPE html>",
      "<!DOCTYPE HTML PUBLIC>",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What is the correct HTML for creating a text input field?",
    options: [
      "<textfield>",
      "<input type='textfield'>",
      "<input type='text'>",
      "<text>",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "Which HTML element defines navigation links?",
    options: ["<navigation>", "<nav>", "<navigate>", "<links>"],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: "What is the correct HTML for making a drop-down list?",
    options: ["<select>", "<list>", "<dropdown>", "<input type='dropdown'>"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<bottom>", "<footer>", "<section>", "<end>"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "What is the correct HTML for inserting an image?",
    options: [
      "<img href='image.jpg'>",
      "<image src='image.jpg'>",
      "<img src='image.jpg'>",
      "<picture src='image.jpg'>",
    ],
    correctAnswer: 2,
  },
  {
    id: 15,
    question:
      "Which HTML attribute is used to specify that an input field must be filled out?",
    options: ["validate", "required", "placeholder", "must"],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "What is the correct HTML for creating a table?",
    options: ["<table>", "<tab>", "<tb>", "<grid>"],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<head>", "<header>", "<title>"],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "What is the correct HTML element for playing video files?",
    options: ["<media>", "<video>", "<movie>", "<player>"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<b>", "<important>", "<em>"],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "What is the correct HTML for creating an email link?",
    options: [
      "<a href='mailto:x@y.com'>",
      "<mail>x@y.com</mail>",
      "<email>x@y.com</email>",
      "<a>mailto:x@y.com</a>",
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "Which HTML element defines a description list?",
    options: ["<dl>", "<list>", "<ul>", "<ol>"],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body color='yellow'>",
      "<background>yellow</background>",
      "<body style='background-color:yellow'>",
      "<body bg='yellow'>",
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "Which HTML tag is used for creating an ordered list?",
    options: ["<ul>", "<list>", "<ol>", "<dl>"],
    correctAnswer: 2,
  },
  {
    id: 24,
    question:
      "What is the correct HTML for creating a hyperlink that opens in a new window?",
    options: [
      "<a href='url' target='new'>",
      "<a href='url' new>",
      "<a href='url' target='_blank'>",
      "<a href='url' window='new'>",
    ],
    correctAnswer: 2,
  },
  {
    id: 25,
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["<head>", "<top>", "<header>", "<section>"],
    correctAnswer: 2,
  },
  {
    id: 26,
    question: "What does the <aside> element define?",
    options: [
      "A navigation menu",
      "Content aside from the page content",
      "A footer section",
      "A header section",
    ],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "What is the purpose of the <article> tag in HTML5?",
    options: [
      "To define navigation links",
      "To specify footer content",
      "To define independent, self-contained content",
      "To create a table",
    ],
    correctAnswer: 2,
  },
  {
    id: 28,
    question: "Which HTML element is used to render or embed SVG graphics?",
    options: ["<svg>", "<graphic>", "<vector>", "<img>"],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "What is the correct HTML for creating a text area?",
    options: [
      "<input type='textbox'>",
      "<textarea>",
      "<input type='textarea'>",
      "<textbox>",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Which HTML element is used for specifying a section of time?",
    options: ["<date>", "<datetime>", "<time>", "<period>"],
    correctAnswer: 2,
  },
  {
    id: 31,
    question: "What is the correct way to write a comment in HTML?",
    options: [
      "//This is a comment",
      "<!--This is a comment-->",
      "'This is a comment",
      "**This is a comment**",
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Which HTML element defines a caption for a <figure> element?",
    options: ["<figcaption>", "<caption>", "<figurecaption>", "<desc>"],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: "What is the purpose of the <main> element?",
    options: [
      "To define a header",
      "To specify the main content of a document",
      "To create a footer",
      "To make a navigation menu",
    ],
    correctAnswer: 1,
  },
  {
    id: 34,
    question: "Which HTML element is used to define keyboard input?",
    options: ["<keyboard>", "<kb>", "<kbd>", "<input>"],
    correctAnswer: 2,
  },
  {
    id: 35,
    question: "What is the correct HTML for inserting a horizontal rule?",
    options: ["<line>", "<hr>", "<horizontal>", "<break>"],
    correctAnswer: 1,
  },
  {
    id: 36,
    question: "Which HTML element is used to define preformatted text?",
    options: ["<pre>", "<code>", "<text>", "<format>"],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "What is the purpose of the <details> element?",
    options: [
      "To create a dropdown list",
      "To specify additional details that the user can view or hide",
      "To define a dialog box",
      "To create a form",
    ],
    correctAnswer: 1,
  },
  {
    id: 38,
    question: "Which HTML element defines a dialog box or window?",
    options: ["<window>", "<modal>", "<dialog>", "<popup>"],
    correctAnswer: 2,
  },
  {
    id: 39,
    question: "What is the correct HTML for creating a button?",
    options: [
      "<input type='button'>",
      "<button>",
      "Both A and B are correct",
      "<buttonfield>",
    ],
    correctAnswer: 2,
  },
  {
    id: 40,
    question:
      "Which HTML element is used to mark text that has been deleted from a document?",
    options: ["<del>", "<remove>", "<strike>", "<deleted>"],
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
