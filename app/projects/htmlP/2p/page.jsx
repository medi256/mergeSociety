import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Link from "next/link";
import { Project } from "@/app/NextBlogButton";

export const metadata = {
  title: "Building an HTML Resume - Step-by-Step Tutorial",
  description:
    "Learn how to create a professional HTML resume for 2024 with this step-by-step tutorial. Perfect for beginners looking to build a resume from scratch using HTML.",
  keywords: [
    "HTML resume 2024",
    "HTML resume tutorial",
    "HTML for beginners",
    "build resume with HTML",
    "web development tutorial",
    "HTML resume structure",
    "beginner HTML project",
    "resume HTML example",
    "HTML resume guide",
  ],

  openGraph: {
    type: "website",
    title: "Building an HTML Resume for 2024 - Step-by-Step Tutorial",
    description:
      "This guide walks you through creating an HTML resume for 2024, covering everything from setting up your workspace to structuring your resume with HTML elements.",
  },
};

const HtmlResume2024 = () => {
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
          Learn how to create a professional HTML resume for 2024 with this
          step-by-step tutorial.
        </h1>
      </div>

      <h2>Welcome to the HTML Resume Tutorial for 2024</h2>
      <h3>Let's Build Your HTML Resume!</h3>

      <div>
        <div>
          <p>
            In this tutorial, we'll guide you through creating a modern and
            effective resume using HTML. As of 2024, HTML resumes are still a
            great way to showcase your skills and experience, especially for
            beginners who are just starting to learn web development.
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

            <div>
              <p>👉 If you're using Windows:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Move your mouse to "New"</li>
                <li>Click "Folder"</li>
                <li>Name it "my-resume-2024"</li>
              </ol>

              <p>👉 If you're using Mac:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Click "New Folder"</li>
                <li>Name it "my-resume-2024"</li>
              </ol>
            </div>
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
          <h4>The Basic Structure</h4>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
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
            </code>
          </pre>

          <div>
            <h5>Let's break this down - piece by piece:</h5>

            <div>
              <div>
                <p>{`1. <!DOCTYPE html>`}</p>
                <p>
                  This declaration informs the browser that this document is
                  written in HTML5.
                </p>
              </div>

              <div>
                <p>{`2. <html lang="en">`}</p>
                <p>
                  The root element of the HTML page. The <code>lang="en"</code>{" "}
                  attribute specifies the language as English.
                </p>
              </div>

              <div>
                <p>{`3. <head>`}</p>
                <p>
                  This section contains meta information about the document.
                </p>
              </div>

              <div>
                <p>{`4. <meta charset="UTF-8">`}</p>
                <p>
                  Sets the character encoding to UTF-8, supporting various
                  languages.
                </p>
              </div>

              <div>
                <p>{`5. <meta name="viewport" ...>`}</p>
                <p>
                  Ensures that the resume looks good on different devices and
                  screen sizes.
                </p>
              </div>

              <div>
                <p>{`6. <title>`}</p>
                <p>
                  Sets the title of the webpage, which appears in the browser
                  tab.
                </p>
              </div>

              <div>
                <p>{`7. <body>`}</p>
                <p>
                  This is where we'll add the visible content of your resume.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Copy the code above into your "index.html" file</li>
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
          <h4>Adding Your Name and Job Title</h4>
          <p>
            Insert the following code inside the <code>body</code> tags:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
  <header>
    <h1>Your Name</h1>
    <h2>Your Job Title</h2>
  </header>
  
  <!-- More sections will be added here -->
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Understanding Each Part:</h5>

            <div>
              <div>
                <p>{`1. <header>`}</p>
                <p>
                  This tag defines a header section for the document or a
                  specific part of it.
                </p>
              </div>

              <div>
                <p>{`2. <h1>`}</p>
                <p>The main heading tag, used for your name.</p>
              </div>

              <div>
                <p>{`3. <h2>`}</p>
                <p>A secondary heading, used for your job title.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>
            Replace "Your Name" with your actual name, and "Your Job Title" with
            your desired job title or the position you're seeking. For example:
          </p>
          <ul>
            <li>
              <h1>John Doe</h1>
            </li>
            <li>
              <h2>Web Developer in Training</h2>
            </li>
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
          <h4>Creating Your Contact Section</h4>
          <p>
            Add this code right after the <code>&lt;/header&gt;</code> tag:
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

          <div>
            <h5>Understanding the New Parts:</h5>

            <div>
              <div>
                <p>{`1. <section>`}</p>
                <p>
                  This tag defines a section in the document, helping us
                  organize related content (in this case, your contact
                  information).
                </p>
              </div>

              <div>
                <p>{`2. <h2>`}</p>
                <p>The heading for the contact information section.</p>
              </div>

              <div>
                <p>{`3. <ul>`}</p>
                <p>Creates an unordered list for your contact details.</p>
              </div>

              <div>
                <p>{`4. <li>`}</p>
                <p>
                  List items representing each piece of contact information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>
            Replace the placeholder information with your actual contact
            details. You can add or remove list items as needed. For example:
          </p>
          <ul>
            <li>Email: john.doe@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Location: New York, NY</li>
            <li>LinkedIn: linkedin.com/in/johndoe</li>
          </ul>
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
          <h4>Creating Your Professional Summary</h4>
          <p>Add this code after your contact information section:</p>
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

          <div>
            <h5>Understanding Each Part:</h5>

            <div>
              <div>
                <p>{`1. <section>`}</p>
                <p>Again, we're using this to group related content.</p>
              </div>

              <div>
                <p>{`2. <h2>`}</p>
                <p>The heading for your summary section.</p>
              </div>

              <div>
                <p>{`3. <p>`}</p>
                <p>
                  This tag defines a paragraph of text for your summary
                  statement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>
            Replace the placeholder text with your own professional summary.
            Keep it concise and tailored to the type of job you're seeking. For
            example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<p>
  Dedicated web developer with a passion for creating user-friendly interfaces. Proficient in modern HTML and CSS techniques. 
  Seeking a role where I can contribute to innovative web projects and grow my skills in a dynamic team.
</p>`}
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
          <h4>Adding Your Education and Work Experience</h4>
          <p>Add the following code after your summary section:</p>
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
            </code>
          </pre>

          <div>
            <h5>Understanding the Structure:</h5>

            <div>
              <div>
                <p>{`1. <h2>`}</p>
                <p>
                  The main heading for each section (Education and Work
                  Experience).
                </p>
              </div>

              <div>
                <p>{`2. <h3>`}</p>
                <p>
                  Used for the degree name and job title, a level below the
                  section header.
                </p>
              </div>

              <div>
                <p>{`3. <p>`}</p>
                <p>
                  Contains the university name and graduation year or company
                  name and employment period.
                </p>
              </div>

              <div>
                <p>{`4. <ul> and <li>`}</p>
                <p>
                  Used to list relevant coursework, achievements,
                  responsibilities, and accomplishments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>
            Replace the placeholder information with your actual educational
            background and work experience. You can add more entries by
            repeating the <code>&lt;h3&gt;</code>,<code>&lt;p&gt;</code>, and{" "}
            <code>&lt;ul&gt;</code>
            structure for each position or degree. For example:
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
</section>

<section>
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
          <h4>Creating Your Skills Section</h4>
          <p>Add this code after your work experience section:</p>
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

          <div>
            <h5>Understanding Each Part:</h5>

            <div>
              <div>
                <p>{`1. <h2>`}</p>
                <p>The heading for your skills section.</p>
              </div>

              <div>
                <p>{`2. <ul>`}</p>
                <p>Creates an unordered list for your skills.</p>
              </div>

              <div>
                <p>{`3. <li>`}</p>
                <p>List items representing each skill.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
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

        <div>
          <h4>🎉 Congratulations!</h4>
          <p>
            You've successfully created an HTML resume for 2024. This tutorial
            focused solely on HTML, providing a solid foundation for your
            resume.
          </p>
          <p>
            As a next step, you can consider learning{" "}
            <Link href="/css" passHref>
              {" "}
              CSS
            </Link>{" "}
            to style your resume and make it visually appealing. Additionally,
            exploring JavaScript and modern web development frameworks can
            further enhance your resume and web development skills.
          </p>
          <p>
            Keep learning, practicing, and building. Every project you create
            will contribute to your growth as a web developer. Happy coding! 💪
          </p>
        </div>
      </div>
      <Project />
    </div>
  );
};

export default HtmlResume2024;
