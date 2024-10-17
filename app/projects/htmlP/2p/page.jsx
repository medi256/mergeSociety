"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const HtmlResume2024 = () => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Introduction to HTML Resumes in 2024",
      content: (
        <>
          <h2>Welcome to the HTML Resume Tutorial for 2024</h2>
          <ScrollToTop />
          <p>
            In this tutorial, we'll guide you through creating a modern and
            effective resume using HTML. As of 2024, HTML resumes are still a
            great way to showcase your skills and experience, especially for
            beginners who are just starting to learn web development.
          </p>
          <p>By the end of this tutorial, your resume will include:</p>
          <ul>
            <li>A personalized header with your name and job title</li>
            <li>Your contact information</li>
            <li>A summary or objective statement</li>
            <li>Your educational background</li>
            <li>Work experience</li>
            <li>A list of your skills</li>
          </ul>
          <p>
            Before we begin, make sure you have a basic understanding of HTML
            tags and a text editor installed on your computer.
          </p>
          <p>Let's get started on building your HTML resume for 2024!</p>
        </>
      ),
    },
    {
      title: "Setting Up Your Workspace",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating Your Project Folder</h2>
          <p>First, let's create a dedicated folder for your resume project:</p>
          <ol>
            <li>
              <strong>Create a New Folder:</strong>
              <ul>
                <li>
                  <strong>On Windows:</strong> Right-click on your desktop,
                  select "New" &gt; "Folder", and name it "my-resume-2024".
                </li>
                <li>
                  <strong>On Mac:</strong> Right-click on your desktop, select
                  "New Folder", and name it "my-resume-2024".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  Open your preferred text editor (e.g., VS Code, Notepad++,
                  Sublime Text) and navigate to the "my-resume-2024" folder.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create the HTML File:</strong>
              <ul>
                <li>
                  Create a new file named "index.html" inside the
                  "my-resume-2024" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Note:</strong> The "index.html" file is the default entry
            point for web servers, so it's a good practice to name your main
            HTML file this way.
          </p>
          <p>
            Now that your workspace is set up, let's dive into the HTML code for
            your resume.
          </p>
        </>
      ),
    },
    {
      title: "Creating the Basic HTML Structure",
      content: (
        <>
          <h2>Setting Up the HTML Document</h2>
          <ScrollToTop />
          <p>
            Let's create the basic structure of our HTML document, which will
            serve as the foundation for your resume.
          </p>
          <p>Open your "index.html" file and add the following code:</p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Resume 2024</title>
</head>
<body>
  <!-- We'll add our resume content here -->
</body>
</html>`}
          </SyntaxHighlighter>
          <p>Let's break down the HTML structure:</p>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: This declaration informs the
              browser that this document is written in HTML5.
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: The root element of the HTML
              page. The <code>lang="en"</code> attribute specifies the language
              as English.
            </li>
            <li>
              <code>&lt;head&gt;</code>: This section contains meta information
              about the document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code>: Sets the character
              encoding to UTF-8, supporting various languages.
            </li>
            <li>
              <code>&lt;meta name="viewport" ...&gt;</code>: Ensures that the
              resume looks good on different devices and screen sizes.
            </li>
            <li>
              <code>&lt;title&gt;</code>: Sets the title of the webpage, which
              appears in the browser tab.
            </li>
            <li>
              <code>&lt;body&gt;</code>: This is where we'll add the visible
              content of your resume.
            </li>
          </ul>
          <p>
            Remember to replace "Your Name" in the title tag with your actual
            name.
          </p>
          <p>
            Save your file and open it in a web browser. You should see a blank
            page with your name and "Resume 2024" in the browser tab.
          </p>
          <p>
            In the next steps, we'll add content to your resume, starting with
            the header section.
          </p>
        </>
      ),
    },
    {
      title: "Adding the Header Section",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating the Header for Your Resume</h2>
          <p>
            Let's add a header to your resume, which will prominently display
            your name and job title.
          </p>
          <p>
            Insert the following code inside the <code>&lt;body&gt;</code> tags
            of your HTML file:
          </p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<body>
  <header>
    <h1>Your Name</h1>
    <h2>Your Job Title</h2>
  </header>
  
  <!-- More sections will be added here -->
</body>`}
          </SyntaxHighlighter>
          <p>Here's what each part of the code does:</p>
          <ul>
            <li>
              <code>&lt;header&gt;</code>: This tag defines a header section for
              the document or a specific part of it.
            </li>
            <li>
              <code>&lt;h1&gt;</code>: The main heading tag, used for your name.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: A secondary heading, used for your job
              title.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace "Your Name" with your actual
            name, and "Your Job Title" with your desired job title or the
            position you're seeking.
          </p>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your name and job title displayed at the top of the page.
          </p>
          <p>
            In the upcoming steps, we'll add more sections to your resume,
            including contact information, a summary, education, work
            experience, and skills.
          </p>
        </>
      ),
    },
    {
      title: "Adding Contact Information",
      content: (
        <>
          <h2>Including Your Contact Details</h2>
          <ScrollToTop />
          <p>
            After the header, let's add your contact information. This is
            crucial for employers to reach out to you.
          </p>
          <p>
            Add this code right after the <code>&lt;/header&gt;</code> tag:
          </p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section>
  <h2>Contact Information</h2>
  <ul>
    <li>Email: your.email@example.com</li>
    <li>Phone: (123) 456-7890</li>
    <li>Location: Your City, State</li>
    <li>LinkedIn: linkedin.com/in/yourprofile</li>
  </ul>
</section>`}
          </SyntaxHighlighter>
          <p>Let's break down this new section:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: This tag defines a section in the
              document, helping us organize related content (in this case, your
              contact information).
            </li>
            <li>
              <code>&lt;h2&gt;</code>: The heading for the contact information
              section.
            </li>
            <li>
              <code>&lt;ul&gt;</code>: Creates an unordered list for your
              contact details.
            </li>
            <li>
              <code>&lt;li&gt;</code>: List items representing each piece of
              contact information.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the placeholder information
            with your actual contact details. You can add or remove list items
            as needed.
          </p>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your contact information displayed below your header.
          </p>
          <p>
            In the next step, we'll add a summary or objective statement to
            highlight your professional goals.
          </p>
        </>
      ),
    },
    {
      title: "Adding a Summary or Objective",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating Your Professional Summary</h2>
          <p>
            A summary or objective statement is a concise description of your
            professional goals or qualifications. Let's add this to your resume.
          </p>
          <p>Add this code after your contact information section:</p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section>
  <h2>Professional Summary</h2>
  <p>
    Write a brief statement about your professional goals, skills, and experiences. 
    This is your chance to make a strong first impression on potential employers.
  </p>
</section>`}
          </SyntaxHighlighter>
          <p>Here's what each part of the code does:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: Again, we're using this to group
              related content.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: The heading for your summary section.
            </li>
            <li>
              <code>&lt;p&gt;</code>: This tag defines a paragraph of text for
              your summary statement.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the placeholder text with
            your own professional summary. Keep it concise and tailored to the
            type of job you're seeking.
          </p>
          <p>Here's an example of what your summary might look like:</p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<p>
  Dedicated web developer with a passion for creating user-friendly interfaces. Proficient in modern HTML and CSS techniques. 
  Seeking a role where I can contribute to innovative web projects and grow my skills in a dynamic team.
</p>`}
          </SyntaxHighlighter>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your professional summary below your contact information.
          </p>
          <p>
            In the following steps, we'll add your educational background and
            work experience to showcase your professional journey.
          </p>
        </>
      ),
    },
    {
      title: "Adding Education and Work Experience",
      content: (
        <>
          <h2>Including Your Educational Background and Work Experience</h2>
          <ScrollToTop />
          <p>
            Your educational background and work experience are essential parts
            of your resume. Let's add sections to highlight these.
          </p>
          <p>Add the following code after your summary section:</p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section>
  <h2>Education</h2>
  <h3>Degree Name</h3>
  <p>University Name, Graduation Year</p>
  <ul>
    <li>Relevant coursework: List some courses</li>
    <li>Achievements: Any academic honors or awards</li>
  </ul>
</section>

<section>
  <h2>Work Experience</h2>
  <h3>Job Title</h3>
  <p>Company Name, Employment Period</p>
  <ul>
    <li>Responsibilities: List your key responsibilities</li>
    <li>Achievements: Highlight your accomplishments</li>
  </ul>
</section>`}
          </SyntaxHighlighter>
          <p>Let's understand the structure of these sections:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code>: The main heading for each section
              (Education and Work Experience).
            </li>
            <li>
              <code>&lt;h3&gt;</code>: Used for the degree name and job title, a
              level below the section header.
            </li>
            <li>
              <code>&lt;p&gt;</code>: Contains the university name and
              graduation year or company name and employment period.
            </li>
            <li>
              <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>: Used to list
              relevant coursework, achievements, responsibilities, and
              accomplishments.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the placeholder information
            with your actual educational background and work experience. You can
            add more entries by repeating the <code>&lt;h3&gt;</code>,{" "}
            <code>&lt;p&gt;</code>, and <code>&lt;ul&gt;</code> structure for
            each position or degree.
          </p>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your education and work experience sections displayed on your
            resume.
          </p>
          <p>
            In the final step, we'll add a list of your skills to showcase your
            technical expertise.
          </p>
        </>
      ),
    },
    {
      title: "Adding Skills Section",
      content: (
        <>
          <ScrollToTop />
          <h2>Listing Your Skills</h2>
          <p>
            Your skills are a vital part of your resume, as they demonstrate
            your technical expertise and abilities. Let's add a section to
            showcase your skills.
          </p>
          <p>Add this code after your work experience section:</p>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section>
  <h2>Skills</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>Node.js</li>
    <li>Git</li>
  </ul>
</section>`}
          </SyntaxHighlighter>
          <p>Here's what each part of the code does:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code>: The heading for your skills section.
            </li>
            <li>
              <code>&lt;ul&gt;</code>: Creates an unordered list for your
              skills.
            </li>
            <li>
              <code>&lt;li&gt;</code>: List items representing each skill.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the placeholder skills with
            your own. You can add or remove list items as needed.
          </p>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a list of your skills displayed on your resume.
          </p>
          <p>
            Congratulations! You've successfully created an HTML resume for
            2024. This tutorial focused solely on HTML, providing a solid
            foundation for your resume.
          </p>
          <p>
            As a next step, you can consider learning CSS to style your resume
            and make it visually appealing. Additionally, exploring JavaScript
            and modern web development frameworks can further enhance your
            resume and web development skills.
          </p>
          <p>
            Keep learning, practicing, and building. Every project you create
            will contribute to your growth as a web developer. Happy coding!
          </p>
        </>
      ),
    },
  ];

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="lesson-container">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          Building an HTML Resume for 2024
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#444" }}>
            Step {step + 1}: {tutorialSteps[step].title}
          </h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            {tutorialSteps[step].content}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            style={{
              padding: "10px 20px",
              backgroundColor: step === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: step === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={step === tutorialSteps.length - 1}
            style={{
              padding: "10px 20px",
              backgroundColor:
                step === tutorialSteps.length - 1 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                step === tutorialSteps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            {step === tutorialSteps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HtmlResume2024;
