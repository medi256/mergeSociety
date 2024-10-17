"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React, { useState } from "react";
import ScrollToTop from "@/app/ScrollToTop";

const PersonalWebpage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Introduction to HTML and Web Development",
      content: (
        <>
          <h3>Welcome to Web Development!</h3>
          <ScrollToTop />
          <p>
            Before we start building your personal webpage, let's understand
            what HTML is and why it's important:
          </p>
          <ul>
            <li>
              <strong>HTML</strong> stands for HyperText Markup Language.
            </li>
            <li>It's the standard language for creating web pages.</li>
            <li>HTML uses "tags" to structure content on a webpage.</li>
            <li>
              It's like the skeleton of a webpage - it provides the basic
              structure.
            </li>
          </ul>
          <p>
            In this tutorial, we'll use HTML to create a simple personal profile
            page. This page will include:
          </p>
          <ul>
            <li>Your name and title</li>
            <li>An "About Me" section</li>
            <li>A list of your skills</li>
            <li>Your contact information</li>
          </ul>
          <p>
            Are you ready? Let's get started with setting up your workspace!
          </p>
        </>
      ),
    },
    {
      title: "Setting up your workspace",
      content: (
        <>
          <ScrollToTop />
          <h3>Creating Your Project Folder</h3>

          <p>
            Before we write any code, we need to set up a place to work. Follow
            these steps:
          </p>
          <ol>
            <li>
              <strong>Create a new folder on your computer:</strong>
              <ul>
                <li>
                  On Windows: Right-click on your desktop, select "New" &gt;
                  "Folder", and name it "my-personal-webpage".
                </li>
                <li>
                  On Mac: Right-click on your desktop, select "New Folder", and
                  name it "my-personal-webpage".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open this folder in a text editor:</strong>
              <ul>
                <li>
                  If you have Visual Studio Code: Open VS Code, click "File"
                  &gt; "Open Folder", and select your "my-personal-webpage"
                  folder.
                </li>
                <li>
                  If you're using Notepad or TextEdit: You can just keep the
                  folder open in your file explorer for now.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create a new file:</strong>
              <ul>
                <li>
                  In VS Code: Right-click in the file explorer panel, select
                  "New File", and name it "index.html".
                </li>
                <li>
                  In Notepad/TextEdit: Create a new file, then immediately "Save
                  As" and name it "index.html". Make sure to save it in your
                  "my-personal-webpage" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Why "index.html"?</strong> This is the standard name for the
            main page of a website. When you upload your site to the internet,
            web servers will automatically look for an "index.html" file to
            display.
          </p>
          <p>
            Great job! You've now set up your workspace. In the next step, we'll
            start writing some HTML!
          </p>
        </>
      ),
    },
    {
      title: "HTML document structure",
      content: (
        <>
          <h3>Creating the Basic HTML Structure</h3>

          <ScrollToTop />
          <p>
            Every HTML document needs a basic structure. Let's create that now:
          </p>
          <ol>
            <li>Open your "index.html" file if it's not already open.</li>
            <li>Copy and paste the following code into the file:</li>
          </ol>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Profile</title>
</head>
<body>
    
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Now, let's break this down line by line:</p>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: This declaration tells the
              browser that this is an HTML5 document. It should always be the
              first line of your HTML file.
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: This is the root element of
              the HTML page. Everything else goes inside this. The{" "}
              <code>lang="en"</code> specifies that the language is English.
            </li>
            <li>
              <code>&lt;head&gt;</code>: This section contains meta information
              about the document - information that isn't directly displayed on
              the page.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code>: This specifies the
              character encoding for the document. UTF-8 includes most
              characters from all known human languages.
            </li>
            <li>
              <code>&lt;meta name="viewport" ...&gt;</code>: This ensures proper
              rendering on mobile devices. It sets the width of the page to
              follow the screen-width of the device.
            </li>
            <li>
              <code>&lt;title&gt;</code>: This sets the title of the webpage,
              which appears in the browser tab. Change "My Personal Profile" to
              your name if you like!
            </li>
            <li>
              <code>&lt;body&gt;</code>: This is where all the visible content
              of your webpage will go.
            </li>
          </ul>
          <p>
            Save your file after adding this code. If you open your "index.html"
            file in a web browser now, you'll see a blank page with the title
            "My Personal Profile" in the browser tab.
          </p>
          <p>
            In the next steps, we'll start adding content inside the{" "}
            <code>&lt;body&gt;</code> tags. That's where the magic happens!
          </p>
        </>
      ),
    },
    {
      title: "Adding a header",
      content: (
        <>
          <ScrollToTop />
          <h3>Creating the Header Section</h3>

          <p>
            Now that we have our basic HTML structure, let's add a header to our
            page. The header typically contains the main title (your name) and
            perhaps a subtitle (like your job title).
          </p>
          <p>
            Add this code inside the <code>&lt;body&gt;</code> tags in your HTML
            file:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <header>
        <h1>John Doe</h1>
        <h2>Web Developer</h2>
    </header>
    
    <!-- We'll add more content here later -->
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we just added:</p>
          <ul>
            <li>
              <code>&lt;header&gt;</code>: This tag defines a header for the
              document or a section. It's often used to contain introductory
              content.
            </li>
            <li>
              <code>&lt;h1&gt;</code>: This is the main heading tag. In HTML,
              headings range from <code>&lt;h1&gt;</code> to{" "}
              <code>&lt;h6&gt;</code>, with <code>&lt;h1&gt;</code> being the
              most important. You should only use one <code>&lt;h1&gt;</code>{" "}
              per page, and it's often used for the page's main title or, in
              this case, your name.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: This is a secondary heading. Here, we're
              using it for your job title or a brief description.
            </li>
            <li>
              <code>&lt;!-- ... --&gt;</code>: This is an HTML comment. It's not
              displayed on the webpage, but it's useful for leaving notes in
              your code.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace "John Doe" with your own
            name, and "Web Developer" with your own job title or a brief
            description of yourself.
          </p>
          <p>
            After making these changes, save your file and refresh it in your
            web browser. You should now see your name and title displayed on the
            page!
          </p>
          <p>
            In the next step, we'll add an "About Me" section to provide more
            information about yourself.
          </p>
        </>
      ),
    },
    {
      title: "Adding an about section",
      content: (
        <>
          <h3>Creating the "About Me" Section</h3>

          <ScrollToTop />
          <p>
            Now that we have a header, let's add an "About Me" section to give
            visitors more information about you. We'll use the{" "}
            <code>&lt;section&gt;</code> tag to define this new section of our
            webpage.
          </p>
          <p>
            Add this code after the <code>&lt;/header&gt;</code> tag in your
            HTML file:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <header>
        <h1>John Doe</h1>
        <h2>Web Developer</h2>
    </header>
    
    <section>
        <h2>About Me</h2>
        <p>Hello! I'm a passionate web developer with a love for creating beautiful and functional websites. I enjoy solving complex problems and learning new technologies.</p>
    </section>
    
    <!-- More sections will be added here later -->
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we just added:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: This tag defines a section in the
              document. It's a way to group related content together.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: We're using another{" "}
              <code>&lt;h2&gt;</code> tag here as a section heading. It's okay
              to have multiple <code>&lt;h2&gt;</code> tags on a page, unlike{" "}
              <code>&lt;h1&gt;</code>.
            </li>
            <li>
              <code>&lt;p&gt;</code>: This tag defines a paragraph. All your
              main text content will usually go in paragraph tags.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the text inside the{" "}
            <code>&lt;p&gt;</code> tag with your own introduction. Feel free to
            add more <code>&lt;p&gt;</code> tags if you want to write multiple
            paragraphs. For example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
    <h2>About Me</h2>
    <p>Hello! I'm a passionate web developer with a love for creating beautiful and functional websites. I enjoy solving complex problems and learning new technologies.</p>
    <p>When I'm not coding, you can find me hiking in the mountains or reading science fiction novels. I believe in continuous learning and am always excited to take on new challenges in the world of web development.</p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            After making these changes, save your file and refresh it in your
            web browser. You should now see your "About Me" section below your
            name and title!
          </p>
          <p>
            In the next step, we'll add a list of your skills to showcase what
            you can do.
          </p>
        </>
      ),
    },
    {
      title: "Adding a skills list",
      content: (
        <>
          <ScrollToTop />
          <h3>Creating Your Skills List</h3>

          <p>
            Now that we have an introduction, let's showcase your skills! We'll
            use an unordered list (<code>&lt;ul&gt;</code>) to create a
            bullet-point list of your abilities.
          </p>
          <p>Add this code after your "About Me" section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <!-- Previous sections remain the same -->
    
    <section>
        <h2>My Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Problem Solving</li>
        </ul>
    </section>
    
    <!-- More content will be added here later -->
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we just added:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: Just like before, we're using a
              section to group related content.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: Another section heading for "My Skills".
            </li>
            <li>
              <code>&lt;ul&gt;</code>: This stands for "unordered list". It
              creates a bullet-point list.
            </li>
            <li>
              <code>&lt;li&gt;</code>: This stands for "list item". Each{" "}
              <code>&lt;li&gt;</code> tag represents one item in the list.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the skills listed with your
            own skills. You can add as many or as few as you like. For example:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<ul>
    <li>HTML5 and CSS3</li>
    <li>JavaScript (ES6+)</li>
    <li>React.js</li>
    <li>Node.js</li>
    <li>Git and GitHub</li>
    <li>Responsive Web Design</li>
    <li>UI/UX Design Principles</li>
</ul>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            Remember, it's okay if you're still learning some of these skills.
            This list can include both things you're proficient in and things
            you're currently learning!
          </p>
          <p>
            After making these changes, save your file and refresh it in your
            web browser. You should now see your skills list below your "About
            Me" section.
          </p>
          <p>
            In the next and final step, we'll add some contact information so
            people can get in touch with you.
          </p>
        </>
      ),
    },

    {
      title: "Adding contact information",
      content: (
        <>
          <h3>Adding Your Contact Information</h3>
          <ScrollToTop />

          <p>
            The last section we'll add is your contact information. This will
            allow visitors to your page to get in touch with you. We'll put this
            in a <code>&lt;footer&gt;</code> tag, which is typically used for
            information that goes at the bottom of a webpage.
          </p>
          <p>
            Add this code at the end of your <code>&lt;body&gt;</code> section,
            after all the other sections:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <!-- Previous sections remain the same -->
    
    <footer>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:johndoe@example.com">johndoe@example.com</a></p>
        <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
    </footer>
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we just added:</p>
          <ul>
            <li>
              <code>&lt;footer&gt;</code>: This tag defines a footer for the
              document or a section. It's often used for contact information,
              copyright information, or links to related documents.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: We're using another{" "}
              <code>&lt;h2&gt;</code> tag for the "Contact Me" heading.
            </li>
            <li>
              <code>&lt;p&gt;</code>: We're using paragraph tags to wrap each
              piece of contact information.
            </li>
            <li>
              <code>&lt;a&gt;</code>: This is an anchor tag, used to create
              hyperlinks. The <code>href</code> attribute specifies where the
              link should go.
            </li>
            <li>
              <code>href="mailto:..."</code>: This special type of link will
              open the user's default email client when clicked.
            </li>
            <li>
              <code>target="_blank"</code>: This attribute makes the link open
              in a new tab or window, which is useful for external links.
            </li>
          </ul>
          <p>
            <strong>Customization:</strong> Replace the email address, GitHub
            username, and LinkedIn profile URL with your own. If you don't have
            accounts on these platforms, you can remove those lines or add other
            contact methods you prefer.
          </p>
          <p>
            After adding this section, save your file and refresh it in your web
            browser. You should now see your contact information at the bottom
            of the page.
          </p>
          <h3>Congratulations!</h3>
          <p>
            You've now created a complete personal profile webpage using HTML!
            Here's a summary of what we've accomplished:
          </p>
          <ul>
            <li>Set up a project workspace</li>
            <li>Created the basic HTML structure</li>
            <li>Added a header with your name and title</li>
            <li>Created an "About Me" section</li>
            <li>Listed your skills</li>
            <li>Added contact information</li>
          </ul>
          <p>
            Feel free to continue customizing your page. You might want to add
            more sections, like a portfolio of your work or testimonials. As you
            learn more about web development, you can enhance this page with CSS
            for styling and JavaScript for interactivity.
          </p>
          <p>
            Remember to keep practicing and building more projects. Every
            webpage you create will help you improve your skills. Happy coding!
          </p>
        </>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      <ScrollToTop />;
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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
          Creating a Personal Profile Page with HTML
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#444" }}>
            Step {currentStep + 1}: {steps[currentStep].title}
          </h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            {steps[currentStep].content}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            style={{
              padding: "10px 20px",
              backgroundColor: currentStep === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: currentStep === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            style={{
              padding: "10px 20px",
              backgroundColor:
                currentStep === steps.length - 1 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                currentStep === steps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebpage;
