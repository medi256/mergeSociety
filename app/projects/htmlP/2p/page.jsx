import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Build Your First HTML Resume: Step-by-Step Tutorial",
  description:
    "Learn how to create a professional HTML resume with this step-by-step tutorial. Perfect for beginners looking to build a resume from scratch using HTML.",
  keywords: [
    "HTML resume tutorial",
    "HTML for beginners",
    "build resume with HTML",
    "web development tutorial",
    "HTML resume structure",
    "beginner HTML project",
    "resume HTML example",
    "HTML resume guide",
    "HTML resume template",
    "HTML project tutorial",
    "HTML resume code",
    "Practical HTML tutorial",
    "HTML resume step-by-step",
    "HTML resume project",
    "HTML resume project example",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP/2p",
  },

  openGraph: {
    type: "website",
    title: "Build Your First HTML Resume: Step-by-Step Tutorial",
    description:
      "This guide walks you through creating an HTML resume, covering everything from setting up your workspace to structuring your resume with HTML elements.",
  },
};

const HtmlResume = () => {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
      className="lesson-container"
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "2px solid #333",
          paddingBottom: "10px",
        }}
      >
        Learn How to Create a Professional Resume Using HTML
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497289/portfolio_zv717y.jpg"
        }
        alt={"HTML Resume Tutorial"}
        width={600}
        height={400}
        className="project-image"
        priority
      />
      <h3 className="project-info">
        <Image
          src={
            "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="founders-image"
          priority
        />
        <span className="project-title">
          <Link href={"/about"}>Written by Massa Medi</Link>
        </span>
        <time className="project-date" datetime="2025-01-17">
          | January 17, 2025
        </time>
      </h3>
      <h3>Let's Build Your HTML Resume!</h3>

      <div>
        <div>
          <p>
            In this tutorial, we'll guide you through creating a modern and
            effective HTML resume. HTML resumes are a great way to showcase your
            skills and experience, especially for beginners who are just
            starting to learn web development.
          </p>
        </div>

        <div>
          <h4>What You'll Build:</h4>
          <p>By the end of this tutorial, your resume will include:</p>
          <ul>
            <li>A personalized header with your name and job title</li>
            <li>Your contact information</li>
            <li>A summary or objective statement</li>
            <li>Your educational background</li>
            <li>Work experience</li>
            <li>A list of your skills</li>
          </ul>
        </div>

        <div>
          <p>✨ Getting Started:</p>
          <p>
            Before we begin, make sure you have a basic understanding of
            <Link href={"/html"} passHref>
              {" "}
              HTML
            </Link>{" "}
            tags and a text editor installed on your computer. If you're new to
            HTML, don't worry - we'll explain everything step by step!
          </p>
        </div>
      </div>

      <h2>Setting Up Your Workspace</h2>

      <h3>Let's Get Your Workspace Ready!</h3>

      <div>
        <div>
          <p>
            Before we start coding, we need to set up our workspace. It's just
            like preparing your desk before starting homework - you need
            everything in the right place! 📚
          </p>
        </div>

        <div>
          <h4>Step 1: Create Your Project Folder</h4>
          <div>
            <p>
              Think of this folder as a special drawer just for your resume
              files:
            </p>

            <p>For Windows Users:</p>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Move your mouse to "New"</li>
              <li>Click "Folder"</li>
              <li>Name it "my-resume-2024"</li>
            </ol>

            <p>For Mac Users:</p>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Click "New Folder"</li>
              <li>Name it "my-resume-2024"</li>
            </ol>
          </div>
        </div>

        <div>
          <h4>Step 2: Choose Your Text Editor</h4>
          <div>
            <p>
              A text editor is like your digital pencil and paper. We recommend
              Visual Studio Code (VS Code) because it's:
            </p>
            <ul>
              <li>Free to download</li>
              <li>Easy to use</li>
              <li>Helps you write code better with helpful hints</li>
            </ul>
            <div>
              <p>🔍 How to get VS Code:</p>
              <ol>
                <li>Go to "code.visualstudio.com"</li>
                <li>Click the big download button</li>
                <li>Install it just like any other program</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h4>Step 3: Create Your First HTML File</h4>
          <div>
            <p>Now let's create your resume's main file:</p>
            <ol>
              <li>Open VS Code</li>
              <li>Click "File" → "Open Folder"</li>
              <li>Find and select your "my-resume-2024" folder</li>
              <li>
                Click "New File" (or press Ctrl+N on Windows, Cmd+N on Mac)
              </li>
              <li>
                Save it as "index.html" (this is always the main page of a
                website)
              </li>
            </ol>
          </div>
        </div>

        <div>
          <p>🎉 Congratulations!</p>
          <p>
            You've just set up your web development workspace! Think of it as
            having your artist's studio ready - now we can start creating! In
            the next step, we'll start writing the basic HTML structure for your
            resume.
          </p>
        </div>
      </div>

      <h2>Creating the Basic HTML Structure</h2>
      <h3>Setting Up the HTML Document</h3>

      <div>
        <div>
          <p>
            Let's create the basic structure of our HTML document, which will
            serve as the foundation for your resume. Think of it like building
            the frame of a house - it's essential!
          </p>
        </div>

        <div>
          <h4>Step 1: The Basic Structure</h4>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This line tells the browser that this document is written in HTML5.
          </p>

          <p>Next, add:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<html lang="en">`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This line starts your HTML document and specifies that the language
            is English.
          </p>

          <p>Now, add:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Resume</title>
</head>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's understand each line:</p>
          <ul>
            <li>
              <code>&lt;head&gt;</code> contains meta information about the
              document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code> sets the character
              encoding to UTF-8, supporting various languages.
            </li>
            <li>
              <code>
                &lt;meta name="viewport" content="width=device-width,
                initial-scale=1.0"&gt;
              </code>{" "}
              ensures that the resume looks good on different devices and screen
              sizes.
            </li>
            <li>
              <code>&lt;title&gt;</code> sets the title of the webpage, which
              appears in the browser tab.
            </li>
          </ul>

          <p>Finally, add:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
  <!-- We'll add our resume content here -->
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>What are these for?</p>
          <ul>
            <li>
              <code>&lt;body&gt;</code> is where all the visible content goes
              (like text and images).
            </li>
            <li>
              <code>&lt;/html&gt;</code> closes your HTML document.
            </li>
          </ul>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>
              Make sure you have added all the code provide above in your HTML
              file you created
            </li>
            <li>Save the file (Ctrl+S on Windows, Cmd+S on Mac)</li>
            <li>Find your file in your folder and double-click it</li>
            <li>It should open in your web browser!</li>
          </ol>
          <p>
            Right now you'll see a blank page - that's normal! In the next step,
            we'll start adding content to make it look awesome! 🌟
          </p>
        </div>
      </div>

      <h2>Adding the Header Section</h2>
      <h3>Creating the Header for Your Resume</h3>

      <div>
        <div>
          <p>
            Let's add a header to your resume, which will prominently display
            your name and job title. Think of it as the welcome sign for your
            resume! 🏠
          </p>
        </div>

        <div>
          <h4>Step 1: Adding Your Name</h4>
          <p>
            Insert the following code inside the <code>&lt;body&gt;</code> tags:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<header>
  <h1>Your Name</h1>
</header>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>What does this do?</p>
          <ul>
            <li>
              <code>&lt;header&gt;</code> creates a special section at the top
              of your page.
            </li>
            <li>
              <code>&lt;h1&gt;</code> makes the biggest heading (like a title).
            </li>
          </ul>
          <p>Now change "Your Name" to your actual name!</p>
        </div>

        <div>
          <h4>Step 2: Adding Your Job Title</h4>
          <p>
            Under your name, let's add what you do. Inside the{" "}
            <code>&lt;header&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<header>
  <h1>Your Name</h1>
  <h2>Your Job Title</h2>
</header>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding this:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code> is a smaller heading than{" "}
              <code>&lt;h1&gt;</code>.
            </li>
            <li>
              "Your Job Title" tells visitors what you're learning or doing.
            </li>
            <li>You can change this to anything you want!</li>
          </ul>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            After you save and refresh your page, you'll see your name and job
            title displayed at the top of the page. If they look too plain,
            don't worry - we'll make them look prettier later with CSS (that's
            like the paint and decorations for your webpage).
          </p>
        </div>
      </div>

      <h2>Adding Contact Information</h2>
      <h3>Including Your Contact Details</h3>

      <div>
        <div>
          <p>
            After the header, let's add your contact information. This is
            crucial for employers to reach out to you. Think of it as leaving
            your business card for visitors! 📫
          </p>
        </div>

        <div>
          <h4>Step 1: Creating the Contact Section</h4>
          <p>
            Add this code right after the <code>&lt;/header&gt;</code> tag:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Contact Information</h2>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code> defines a section in the document,
              helping us organize related content (in this case, your contact
              information).
            </li>
            <li>
              <code>&lt;h2&gt;</code> is the heading for the contact information
              section.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Adding Contact Details</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
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
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;ul&gt;</code> creates an unordered list for your contact
              details.
            </li>
            <li>
              <code>&lt;li&gt;</code> represents each piece of contact
              information.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3: Make It Personal</h4>
          <p>
            Replace the placeholder information with your actual contact
            details. You can add or remove list items as needed. For example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Contact Information</h2>
  <ul>
    <li>Email: john.doe@example.com</li>
    <li>Phone: (123) 456-7890</li>
    <li>Location: New York, NY</li>
    <li>LinkedIn: linkedin.com/in/johndoe</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your contact information displayed below your header.
          </p>
        </div>
      </div>

      <h2>Adding a Summary or Objective</h2>
      <h3>Creating Your Professional Summary</h3>

      <div>
        <div>
          <p>
            A summary or objective statement is a concise description of your
            professional goals or qualifications. Let's add this to your resume.
            Think of it as your elevator pitch for potential employers! 📢
          </p>
        </div>

        <div>
          <h4>Step 1: Creating the Summary Section</h4>
          <p>Add this code after your contact information section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Professional Summary</h2>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding each part:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code> is used to group related content.
            </li>
            <li>
              <code>&lt;h2&gt;</code> is the heading for your summary section.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Adding the Summary Text</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Professional Summary</h2>
  <p>
    Write a brief statement about your professional goals, skills, and experiences. 
    This is your chance to make a strong first impression on potential employers.
  </p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding each part:</p>
          <ul>
            <li>
              <code>&lt;p&gt;</code> defines a paragraph of text for your
              summary statement.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3: Make It Personal</h4>
          <p>
            Replace the placeholder text with your own professional summary.
            Keep it concise and tailored to the type of job you're seeking. For
            example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Professional Summary</h2>
  <p>
    Dedicated web developer with a passion for creating user-friendly interfaces. Proficient in modern HTML and CSS techniques. 
    Seeking a role where I can contribute to innovative web projects and grow my skills in a dynamic team.
  </p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your professional summary below your contact information.
          </p>
        </div>
      </div>

      <h2>Adding Education and Work Experience</h2>
      <h3>Including Your Educational Background and Work Experience</h3>

      <div>
        <div>
          <p>
            Your educational background and work experience are essential parts
            of your resume. Let's add sections to highlight these. Think of it
            as telling your professional story! 📜
          </p>
        </div>

        <div>
          <h4>Step 1: Creating the Education Section</h4>
          <p>Add this code after your summary section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Education</h2>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code> is the main heading for the education
              section.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Adding Education Details</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Education</h2>
  <h3>Degree Name</h3>
  <p>University Name, Graduation Year</p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;h3&gt;</code> is used for the degree name, a level below
              the section header.
            </li>
            <li>
              <code>&lt;p&gt;</code> contains the university name and graduation
              year.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3: Adding Coursework and Achievements</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Education</h2>
  <h3>Degree Name</h3>
  <p>University Name, Graduation Year</p>
  <ul>
    <li>Relevant coursework: List some courses</li>
    <li>Achievements: Any academic honors or awards</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> are used to
              list relevant coursework and achievements.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 4: Make It Personal</h4>
          <p>
            Replace the placeholder information with your actual educational
            background. For example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Education</h2>
  <h3>Bachelor of Science in Computer Science</h3>
  <p>University of XYZ, 2021</p>
  <ul>
    <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
    <li>Achievements: Dean's List, Best Project Award</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>Step 5: Creating the Work Experience Section</h4>
          <p>Add this code after your education section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Work Experience</h2>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code> is the main heading for the work
              experience section.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 6: Adding Work Experience Details</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Work Experience</h2>
  <h3>Job Title</h3>
  <p>Company Name, Employment Period</p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;h3&gt;</code> is used for the job title, a level below
              the section header.
            </li>
            <li>
              <code>&lt;p&gt;</code> contains the company name and employment
              period.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 7: Adding Responsibilities and Achievements</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Work Experience</h2>
  <h3>Job Title</h3>
  <p>Company Name, Employment Period</p>
  <ul>
    <li>Responsibilities: List your key responsibilities</li>
    <li>Achievements: Highlight your accomplishments</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> are used to
              list responsibilities and achievements.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 8: Make It Personal</h4>
          <p>
            Replace the placeholder information with your actual work
            experience. For example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Work Experience</h2>
  <h3>Junior Web Developer</h3>
  <p>ABC Tech, 2022 - Present</p>
  <ul>
    <li>Responsibilities: Developed and maintained web applications using HTML, CSS, and JavaScript</li>
    <li>Achievements: Successfully launched 3 major projects, improved website performance by 20%</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see your education and work experience sections displayed on your
            resume.
          </p>
        </div>
      </div>

      <h2>Adding Skills Section</h2>
      <h3>Listing Your Skills</h3>

      <div>
        <div>
          <p>
            Your skills are a vital part of your resume, as they demonstrate
            your technical expertise and abilities. Let's add a section to
            showcase your skills. Think of it as your trophy case! 🏆
          </p>
        </div>

        <div>
          <h4>Step 1: Creating the Skills Section</h4>
          <p>Add this code after your work experience section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
  <h2>Skills</h2>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding each part:</p>
          <ul>
            <li>
              <code>&lt;h2&gt;</code> is the heading for your skills section.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Adding the Skills List</h4>
          <p>
            Inside the <code>&lt;section&gt;</code> tags, add:
          </p>
          <pre>
            <code>
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
            </code>
          </pre>
          <p>Understanding each part:</p>
          <ul>
            <li>
              <code>&lt;ul&gt;</code> creates an unordered list for your skills.
            </li>
            <li>
              <code>&lt;li&gt;</code> represents each skill.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3: Make It Personal</h4>
          <p>
            Replace the placeholder skills with your own. You can add or remove
            list items as needed. For example:
          </p>
          <pre>
            <code>
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
    <li>Responsive Web Design</li>
  </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a list of your skills displayed on your resume.
          </p>
        </div>
      </div>

      <h2>Final Steps and Checking Your Work</h2>

      <h3>Testing Everything</h3>
      <p>Save your file (Ctrl+S or Cmd+S)</p>
      <p>Open it in your web browser</p>
      <p>Check that:</p>
      <ul>
        <li>Your name appears at the top</li>
        <li>All sections are visible</li>
        <li>Links work when you click them</li>
        <li>Everything is in the right order</li>
      </ul>

      <h3>Common Problems and Solutions</h3>
      <p>If something doesn't look right:</p>
      <ul>
        <li>Make sure all tags are properly closed</li>
        <li>Check that you replaced all placeholder text</li>
        <li>
          Verify that all <code>&lt;&gt;</code> symbols are typed correctly
        </li>
        <li>Make sure you saved the file after changes</li>
      </ul>

      <h2>What You've Achieved! 🎉</h2>
      <p>Congratulations! You've just:</p>
      <ul>
        <li>Created your first webpage from scratch</li>
        <li>Learned basic HTML tags and their purposes</li>
        <li>Built a professional-looking personal website</li>
        <li>Created something you can show to friends and family!</li>
      </ul>

      <h2>Next Steps 🚀</h2>
      <p>To keep improving:</p>
      <ul>
        <li>Practice changing the content</li>
        <li>Try adding new sections</li>
        <li>Share your website with friends</li>
        <li>
          Start learning about{" "}
          <Link href="/css" passHref>
            CSS
          </Link>{" "}
          (coming in our next tutorial!)
        </li>
      </ul>
      <p>
        Remember: Every professional web developer started exactly where you are
        now. Be proud of what you've built, and keep practicing! You're doing
        great! 💪
      </p>

      <h2>Practice Ideas 📚</h2>
      <p>Try these changes to practice:</p>
      <ul>
        <li>Add a favorite quotes section</li>
        <li>Create a list of your goals</li>
        <li>Add more details to your About Me section</li>
        <li>Customize the text to tell your unique story</li>
      </ul>

      <p>
        Keep building and learning - you're now officially on your way to
        becoming a web developer! 🌟
      </p>

      <h2>Complete HTML Code</h2>
      <p>
        Now that we've built everything piece by piece, here's the complete HTML
        code for your resume:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Resume</title>
</head>
<body>
  <header>
    <h1>Your Name</h1>
    <h2>Your Job Title</h2>
  </header>

  <section>
    <h2>Contact Information</h2>
    <ul>
      <li>Email: john.doe@example.com</li>
      <li>Phone: (123) 456-7890</li>
      <li>Location: New York, NY</li>
      <li>LinkedIn: linkedin.com/in/johndoe</li>
    </ul>
  </section>

  <section>
    <h2>Professional Summary</h2>
    <p>
      Dedicated web developer with a passion for creating user-friendly interfaces. Proficient in modern HTML and CSS techniques. 
      Seeking a role where I can contribute to innovative web projects and grow my skills in a dynamic team.
    </p>
  </section>

  <section>
    <h2>Education</h2>
    <h3>Bachelor of Science in Computer Science</h3>
    <p>University of XYZ, 2021</p>
    <ul>
      <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
      <li>Achievements: Dean's List, Best Project Award</li>
    </ul>
  </section>

  <section>
    <h2>Work Experience</h2>
    <h3>Junior Web Developer</h3>
    <p>ABC Tech, 2022 - Present</p>
    <ul>
      <li>Responsibilities: Developed and maintained web applications using HTML, CSS, and JavaScript</li>
      <li>Achievements: Successfully launched 3 major projects, improved website performance by 20%</li>
    </ul>
  </section>

  <section>
    <h2>Skills</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>Git</li>
      <li>Responsive Web Design</li>
    </ul>
  </section>
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h3>Recommended </h3>
      <p>
        Now that you've built your resume, here are some additional resources to
        help you continue learning:
      </p>
      <HtmlProjectss />
    </article>
  );
};

export default HtmlResume;

export const HtmlProjectss = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "1p",
      title: "Create a Personal Profile Page Using HTML",
      description:
        "Learn how to build a simple personal profile page using only HTML. This project covers essential HTML elements like headings, paragraphs, lists, and links. Perfect for beginners who want to practice structuring web pages.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736496972/resume_l9lnxg.jpg",
      alt: "Personal Profile Page Example",
      date: "January 15, 2025",
    },
    {
      id: "3p",
      title: "Create a Weekly Schedule with HTML Tables",
      description:
        "Master HTML tables by creating a weekly schedule. This project demonstrates how to use table rows, columns, and headers to organize information effectively. Ideal for beginners learning HTML structure.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497470/skedule_le1iyh.jpg",
      alt: "Weekly Schedule Example",
      date: "January 14, 2025",
    },
    {
      id: "4p",
      title: "Design a Restaurant Menu Using Semantic HTML",
      description:
        "Create a restaurant menu using semantic HTML elements like sections, articles, and lists. This project focuses on organizing content with proper HTML structure and accessibility. Perfect for advanced learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497900/restuarat_p5vq9d.jpg",
      alt: "Restaurant Menu Example",
      date: "january 17, 2025",
    },
    {
      id: "5p",
      title: "Build a Photo Gallery with HTML",
      description:
        "Learn how to create a static photo gallery using HTML image tags and captions. This project emphasizes the use of alt attributes for accessibility and proper image embedding. Great for practicing HTML media elements!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "Photo Gallery Example",
      date: "january 5, 2025",
    },
    {
      id: "6p",
      title: "Create an Event Invitation Page with HTML",
      description:
        "Design an event invitation page using only HTML. This project covers headings, paragraphs, lists, and hyperlinks to create a visually appealing and functional page. Perfect for advanced HTML learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498445/event_iu3yfu.jpg",
      alt: "Event Invitation Example",
      date: "February 12, 2025",
    },
  ];

  return (
    <div className="blog-posts-container">
      <div className="posts-grid">
        {htmlOnlyProjectTitles.map((project) => (
          <Link
            key={project.id}
            href={`/projects/htmlP/${project.id}`}
            passHref
            className="post-description"
          >
            <div className="post-card">
              <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <button className="post-button ct-button">
                  Start Tutorial
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
