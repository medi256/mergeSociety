import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering JavaScript Comments: Enhancing Code Readability",
  description:
    "Discover the art of commenting in JavaScript. Learn how to add meaningful explanations, improve code readability, and collaborate effectively with other developers. This guide will transform your code from cryptic to crystal clear, making it a pleasure to work with.",
  keywords: [
    "javascript",
    "javascript comments",
    "code readability",
    "code documentation",
    "code collaboration",
    "javascript best practices",
    "commenting techniques",
    "code maintenance",
  ],
  openGraph: {
    title: "JavaScript Comments: The Ultimate Guide to Code Clarity",
    description:
      "Elevate your JavaScript skills with this comprehensive guide to commenting. Learn how to write clear, concise, and meaningful comments that enhance code readability and facilitate collaboration. Say goodbye to cryptic code and hello to a more productive and enjoyable development experience.",
  },
};

export const dynamic = "force-static";
export const revalidate = 43200;

const Comments = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1> Comments in JavaScript</h1>
      <p>
        Just like how we use comments in our daily lives to explain things or
        leave notes, JavaScript allows us to add comments to our code. Comments
        are lines of text that are ignored by the computer when the code runs.
        They act like hidden messages for you or other programmers who might
        read your code in the future.
      </p>
      <h2>Why Use Comments?</h2>
      <p>
        There are many reasons why comments are essential for good JavaScript
        code:
      </p>
      <ul>
        <li>
          <b> Clarity and Understanding</b>: Comments help explain what your
          code is doing, making it easier for you and others to understand how
          it works, especially when you come back to it later or someone else
          needs to maintain it.
        </li>
        <li>
          {" "}
          <b>Improve Readability</b>: Code with comments is like a well-written
          story – it has a clear flow and makes sense to the reader. Comments
          break down complex parts and add context.
        </li>
        <li>
          <b>Documentation</b>: Comments can serve as documentation within your
          code, explaining the purpose of different functions, variables, or
          code blocks.
        </li>
        <li>
          {" "}
          <b>Debugging</b>: Adding comments as you write code can help you
          identify and fix errors (debugging) more efficiently. Comments can act
          as reminders or notes about specific parts of the code.
        </li>
      </ul>
      <h3>Types of Comments in JavaScript:</h3>
      <p>JavaScript offers two main ways to add comments:</p>
      <h3>Single-line Comments:</h3>
      <ul>
        <li> Use two forward slashes (//) to create a single-line comment.</li>
        <li> Any text you write after the // will be ignored by JavaScript.</li>
      </ul>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
JavaScript


// This is a single-line comment explaining the code below
let message = "Hello, world!";
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h3>Multi-line Comments:</h3>
      <ul>
        <li> Use /* and */ to create comments that span multiple lines.</li>
        <li>
          {" "}
          Everything between /* and */ will be considered a comment, even if it
          includes multiple lines of text.
        </li>
      </ul>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
JavaScript


/* This is a multi-line comment 
that can explain complex parts of your code
or even write multiple paragraphs */
          
let age = 25;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Comment Generously: Don't be afraid to add comments throughout your
        code, especially for complex logic or non-obvious parts.
      </p>
      <p>
        {" "}
        Explain the Why: Focus on explaining the purpose of your code and the
        reasoning behind your decisions.
      </p>
      <p>
        Keep it Clear and Concise: Avoid overly complex or lengthy comments.
        Strive for clear and simple explanations.
      </p>
      <p>
        Use Consistent Style: Develop a consistent commenting style for your
        code, making it easier to read and maintain.
      </p>
      <p>
        <b>Remember</b>: Comments are for humans, not computers. Write them in a
        way that is easy to understand for anyone reading your code.
      </p>

      <Button whereToGo={"conditional-statements"} />
    </div>
  );
};

export default Comments;
