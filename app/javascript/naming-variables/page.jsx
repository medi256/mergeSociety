import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "JavaScript Variable Naming: Best Practices for Clean Code",
  description:
    "Master the art of naming variables in JavaScript. Learn how to choose descriptive, meaningful names, follow naming conventions, and avoid common pitfalls. This guide will transform your code from confusing to crystal clear, making collaboration and maintenance a breeze.",
  keywords: [
    "javascript",
    "javascript variable naming",
    "variable naming conventions",
    "camelcase",
    "descriptive names",
    "clean code",
    "javascript best practices",
    "javascript coding standards",
    "variable naming guide",
  ],
  openGraph: {
    title: "JavaScript Variable Naming: The Ultimate Clean Code Guide",
    description:
      "Elevate your JavaScript skills with this comprehensive guide to variable naming. Learn the secrets to crafting clear, concise, and consistent variable names, ensuring your code is a pleasure to read and maintain.",
  },
};

const NamingVariables = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Best Practices for Variable Naming in JavaScript</h1>
      <p>
        Welcome to a comprehensive guide on best practices for naming variables
        in JavaScript. Choosing clear and meaningful variable names is crucial
        for writing readable and maintainable code. Let's explore these
        practices in detail:
      </p>

      <h2>1. Use Descriptive and Meaningful Names</h2>
      <p>
        Variable names should clearly indicate what they represent or store.
        Avoid single-letter or cryptic names like <code>x</code> or{" "}
        <code>temp</code>. Instead, opt for descriptive names that reveal the
        purpose of the variable. For example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
// Good examples of descriptive names
          
let userName = "JohnDoe"; 

let numberOfStudents = 30; 
          
let isActive = true;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>These names immediately convey the intended use of the variable.</p>

      <h2>2. Follow CamelCase Notation for Multi-Word Names</h2>
      <p>
        When naming variables with multiple words, use camelCase. CamelCase
        capitalizes the first letter of each word except the first one, without
        spaces or underscores. For example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let studentFirstName = "John";

let maxNumberOfStudents = 30;

let isStudentActive = true;
          
          `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This convention enhances readability and consistency across your
        codebase.
      </p>
      <AdUnit />

      <h2>3. Avoid Reserved Keywords</h2>
      <p>
        Do not use JavaScript reserved keywords as variable names. Reserved
        keywords have special meanings in JavaScript and may cause unexpected
        behavior if used as identifiers. Examples of reserved keywords include{" "}
        <code>if</code>, <code>function</code>, <code>while</code>, and others.
      </p>

      <h2>4. Be Consistent with Naming Conventions</h2>
      <p>
        Maintain consistency in your naming conventions throughout your
        codebase. Consistency helps other developers understand your code more
        easily and reduces confusion. Choose a naming style that fits your
        team's preferences and stick to it.
      </p>

      <h2>5. Use Intuitive Abbreviations</h2>
      <p>
        It's acceptable to use common abbreviations if they are widely
        understood within your development team or community. For example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
let numStudents = 30; // "num" for "number" 

let isUserActive = true;  // "is" prefix for boolean variables
          
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>6. Update Variable Names Appropriately</h2>
      <p>
        Refactor variable names if their purpose or context changes over time.
        As your application evolves, ensure that variable names accurately
        reflect their current usage. This practice maintains clarity and reduces
        the risk of misunderstandings.
      </p>

      <h2>Example:</h2>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
// Example of using descriptive names and camelCase

 let studentFirstName = "John"; 

 const maxNumberOfStudents = 30; 

 let isStudentActive = true;
          
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        Following these best practices will significantly improve the
        readability, maintainability, and reliability of your JavaScript code.
        Clear and consistent variable naming is a fundamental aspect of writing
        high-quality software.
      </p>

      <Button whereToGo={"data-types"} />
    </div>
  );
};

export default NamingVariables;
