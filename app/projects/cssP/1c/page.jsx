import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Building Your First Portfolio Website",
  description:
    "A step-by-step tutorial for beginners on how to create a personal portfolio website using HTML and CSS. Learn about the role of CSS in web design, set up your workspace, and build your first portfolio layout with easy-to-follow instructions.",
  keywords:
    "portfolio website,css coding project,  HTML, CSS, web design, beginner tutorial, personal portfolio, coding for beginners",

  openGraph: {
    title: "Building Your First Portfolio Website",
    description:
      "Create your first portfolio website with this beginner-friendly tutorial. Learn to use HTML and CSS effectively.",
  },
};

const PortfolioLayout = () => {
  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          Building Your First Portfolio Website
        </h1>
      </div>

      <h2>Introduction to CSS and Web Design</h2>
      <h3>👋 Welcome to CSS and Web Design!</h3>

      <p>
        Before we begin creating your personal portfolio layout, let's explore
        the role of CSS in web design:
      </p>
      <ul>
        <li>
          <strong>CSS</strong> stands for Cascading Style Sheets - it's the
          language that makes websites look beautiful!
        </li>
        <li>
          Think of HTML as the skeleton of your website (the structure) and CSS
          as the skin and clothes (the style).
        </li>
        <li>
          With CSS, you can control colors, fonts, spacing, layout, and even
          animations.
        </li>
      </ul>
      <p>
        In this tutorial, we'll create a personal portfolio website that
        includes:
      </p>
      <ul>
        <li>A professional-looking header with your name and bio</li>
        <li>A skills section to showcase your abilities</li>
        <li>A design that looks good on both phones and computers</li>
      </ul>
      <p>
        <strong>What you'll need:</strong>
      </p>
      <ul>
        <li>A computer (Windows, Mac, or Linux - any will work!)</li>
        <li>A text editor (We'll help you choose one in the next step)</li>
        <li>
          No previous coding experience required - we'll explain everything step
          by step!
        </li>
      </ul>

      <h2>Setting Up Your Workspace</h2>
      <h3>🛠️ Let's Get Your Computer Ready!</h3>

      <h4>Step 1: Installing a Text Editor</h4>
      <p>
        First, we need a special program to write our code. While you could use
        Notepad or TextEdit, we recommend Visual Studio Code (VS Code) because
        it's free and helps you write code better:
      </p>
      <ol>
        <li>
          <strong>Download VS Code:</strong>
          <ul>
            <li>
              Go to <code>https://code.visualstudio.com</code>
            </li>
            <li>Click the big blue "Download" button</li>
            <li>
              Choose the version for your computer (Windows, Mac, or Linux)
            </li>
          </ul>
        </li>
        <li>
          <strong>Install VS Code:</strong>
          <ul>
            <li>
              On Windows: Double-click the downloaded file and follow the
              installation steps
            </li>
            <li>
              On Mac: Drag the downloaded VS Code app to your Applications
              folder
            </li>
          </ul>
        </li>
      </ol>

      <h4>Step 2: Creating Your Project Folder</h4>
      <p>
        Now, let's create a special folder to keep all your website files
        organized:
      </p>

      <strong>On Windows:</strong>
      <ol>
        <li>Open File Explorer (press Windows key + E)</li>
        <li>Navigate to your Documents folder</li>
        <li>Right-click in an empty space</li>
        <li>Select New → Folder</li>
        <li>Type "my-portfolio" and press Enter</li>
      </ol>

      <strong>On Mac:</strong>
      <ol>
        <li>Open Finder</li>
        <li>Go to your Documents folder</li>
        <li>Right-click (or Control + click) in an empty space</li>
        <li>Select New Folder</li>
        <li>Type "my-portfolio" and press Return</li>
      </ol>

      <h4>Step 3: Opening Your Project in VS Code</h4>
      <ol>
        <li>Open VS Code</li>
        <li>Click on File → Open Folder (Windows) or File → Open... (Mac)</li>
        <li>Find and select your "my-portfolio" folder</li>
        <li>Click "Open"</li>
      </ol>

      <h4>Step 4: Creating Your Project Files</h4>
      <p>Now let's create the two files we need:</p>
      <ol>
        <li>
          <strong>Create index.html:</strong>
          <ul>
            <li>
              In VS Code, click the "New File" icon in the Explorer panel (it
              looks like a page with a +)
            </li>
            <li>Type "index.html" and press Enter</li>
            <li>This will be your main webpage file</li>
          </ul>
        </li>
        <li>
          <strong>Create styles.css:</strong>
          <ul>
            <li>Click the "New File" icon again</li>
            <li>Type "styles.css" and press Enter</li>
            <li>This will contain all your styling rules</li>
          </ul>
        </li>
      </ol>

      <div>
        <h4>💡 Pro Tips:</h4>
        <ul>
          <li>
            Keep both files in the same folder - they need to be together!
          </li>
          <li>
            The name "index.html" is special - web servers look for this file
            automatically
          </li>
          <li>
            Double-check your spelling - computers are very picky about exact
            names!
          </li>
        </ul>
      </div>

      <h2>Building Your HTML Structure</h2>
      <h3>📝 Writing Your First HTML Code</h3>

      <p>
        Now that we have our files ready, let's write the basic HTML structure
        for your portfolio. HTML is like building blocks - we'll add each piece
        step by step.
      </p>

      <h4>Step 1: Open Your Files</h4>
      <ol>
        <li>In VS Code, click on index.html in the file explorer</li>
        <li>The file will open in the editor, ready for you to type</li>
      </ol>

      <h4>Step 2: Add the Basic HTML Structure</h4>
      <p>Copy and paste this code into your index.html file:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- We'll add content here in the next step -->
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <div>
        <h4>Let's understand the HTML structure:</h4>
        <ul>
          <li>
            <code>{`<!DOCTYPE html>`}</code>: Declares the document type as
            HTML5.
          </li>
          <li>
            <code>{`<html lang="en">`}</code>: The root element of the HTML
            page, specifying the language as English.
          </li>
          <li>
            <code>{`<head>`}</code>: Contains meta information about the
            document.
          </li>
          <li>
            <code>{`<meta charset="UTF-8">`}</code>: Sets the character encoding
            to UTF-8.
          </li>
          <li>
            <code>{`<meta name="viewport" ...>`}</code>: Ensures the page is
            responsive.
          </li>
          <li>
            <code>{`<title>`}</code>: Sets the title of the webpage.
          </li>
          <li>
            <code>{`<link rel="stylesheet" href="styles.css">`}</code>: Links
            the CSS file to the HTML.
          </li>
          <li>
            <code>{`<body>`}</code>: Contains the visible content of the
            webpage.
          </li>
        </ul>
      </div>

      <h4>Step 3: Save Your File</h4>
      <ol>
        <li>Press Ctrl + S (Windows) or Command + S (Mac) to save</li>
        <li>Make sure the file name is exactly "index.html"</li>
      </ol>

      <div>
        <h4>💡 Pro Tips:</h4>
        <ul>
          <li>
            VS Code might color-code your text - this is normal and helpful!
          </li>
          <li>
            Make sure all opening tags (like <code>&lt;body&gt;</code>) have
            matching closing tags (like <code>&lt;/body&gt;</code>)
          </li>
          <li>
            The indentation (spaces at the start of lines) helps readability -
            VS Code can help with this automatically
          </li>
        </ul>
      </div>

      <h2>Adding Your Portfolio Content</h2>

      <h3>✍️ Adding Your Personal Information</h3>

      <p>
        Now let's add your information to the webpage. We'll create several
        sections to showcase your skills and experience.
      </p>

      <h4>Step 1: Add the Header Section</h4>
      <p>
        Inside the <code>&lt;body&gt;</code> tags, add this code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<header>
    <h1>Your Name</h1>
    <p class="subtitle">Web Developer</p>
    <p class="bio">A passionate developer focused on creating interactive websites</p>
</header>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 2: Add the Skills Section</h4>
      <p>Below the header section, add:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section class="skills">
    <h2>My Skills</h2>
    <ul class="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Web Design</li>
    </ul>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 3: Add a Projects Section</h4>
      <p>Below the skills section, add:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section class="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
        <article class="project">
            <h3>Project 1</h3>
            <p>Description of your first project</p>
        </article>
        <article class="project">
            <h3>Project 2</h3>
            <p>Description of your second project</p>
        </article>
    </div>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 4: Add a Contact Section</h4>
      <p>Finally, add a way for people to contact you:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<footer>
    <h2>Contact Me</h2>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: your-linkedin-profile</p>
</footer>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <div>
        <h4>🎨 Customize Your Content:</h4>
        <ul>
          <li>Replace "Your Name" with your actual name</li>
          <li>Update the bio to describe yourself</li>
          <li>Add or remove skills based on what you know</li>
          <li>Add your own project descriptions</li>
          <li>Update the contact information with your details</li>
        </ul>
      </div>

      <div>
        <h4>💡 Pro Tips:</h4>
        <ul>
          <li>
            Don't worry if it looks plain - we'll style it in the next step!
          </li>
          <li>
            The class names we added (like "skills-list") will help us style
            specific elements
          </li>
          <li>Keep your content professional and concise</li>
        </ul>
      </div>

      <h2>Basic CSS Styling</h2>
      <h3>🎨 Making Your Portfolio Beautiful</h3>

      <p>
        Now that we have our content, let's make it look professional with CSS.
        We'll style each section step by step.
      </p>

      <h4>Step 1: Basic Page Setup</h4>
      <p>Open your styles.css file and add these basic styles:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 2: Style the Header</h4>
      <p>Add these styles for your header section:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`header {
    text-align: center;
    padding: 40px 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 30px;
}

h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.2rem;
    color: #7f8c8d; 
    margin-bottom: 15px;
}

.bio {
    max-width: 600px;
    margin: 0 auto;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 3: Style the Skills Section</h4>
      <p>Add styles for your skills:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`.skills {
    padding: 30px 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skills h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.skills-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skills-list li {
    background-color: #3498db;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 4: Style the Projects Section</h4>
      <p>Style your projects grid:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 0;
}

.project {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.project p {
    color: #666;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>Step 5: Style the Footer</h4>
      <p>Finally, add styles for your contact section:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`footer {
    margin-top: 50px;
    padding: 30px 20px;
    background-color: #2c3e50;
    color: white;
    border-radius: 8px;
    text-align: center;
}

footer h2 {
    margin-bottom: 20px;
}

footer p {
    margin-bottom: 10px;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <div>
        <h4>Understanding the CSS:</h4>
        <ul>
          <li>
            <code>margin</code> creates space outside elements
          </li>
          <li>
            <code>padding</code> creates space inside elements
          </li>
          <li>
            <code>border-radius</code> rounds corners
          </li>
          <li>
            <code>box-shadow</code> adds a subtle shadow
          </li>
          <li>
            <code>display: grid/flex</code> creates modern layouts
          </li>
        </ul>
      </div>

      <div>
        <h4>💡 Pro Tips:</h4>
        <ul>
          <li>Save your CSS file after each change</li>
          <li>Refresh your browser to see updates</li>
          <li>Feel free to adjust colors and sizes to your preference</li>
          <li>Use Chrome DevTools (F12) to experiment with styles</li>
        </ul>
      </div>

      <h2>Adding Responsive Design</h2>
      <h3>📱 Making Your Site Mobile-Friendly</h3>

      <p>
        Now let's make sure your portfolio looks great on all devices - from
        phones to desktop computers.
      </p>

      <h4>Step 1: Add Media Queries</h4>
      <p>Add this code to the end of your styles.css file:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`/* For tablets */
@media (max-width: 768px) {
    body {
        padding: 15px;
    }

    h1 {
        font-size: 2rem;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }
}

/* For phones */
@media (max-width: 480px) {
    header {
        padding: 20px 10px;
    }

    h1 {
        font-size: 1.8rem;
    }

    .skills-list {
        justify-content: center;
    }

    .project {
        padding: 15px;
    }
}`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <div>
        <h4>How Media Queries Work:</h4>
        <ul>
          <li>
            <code>@media (max-width: 768px)</code> applies styles only on
            screens 768px wide or smaller
          </li>
          <li>This helps adjust layouts and sizes for different devices</li>
          <li>
            Styles inside media queries override the original styles when
            conditions match
          </li>
        </ul>
      </div>

      <h4>Step 2: Test Your Responsive Design</h4>
      <ol>
        <li>Open your portfolio in Chrome</li>
        <li>Press F12 to open Developer Tools</li>
        <li>
          Click the "Toggle device toolbar" icon (looks like a phone/tablet)
        </li>
        <li>Try different device sizes to see how your site responds</li>
      </ol>

      <div>
        <h4>💡 Pro Tips:</h4>
        <ul>
          <li>Always test your site at different screen sizes</li>
          <li>Make sure text stays readable on small screens</li>
          <li>Ensure buttons and links are large enough to tap on mobile</li>
        </ul>
      </div>

      <h2>Congratulations!</h2>
      <h3>🎉 Congratulations!</h3>

      <p>
        You've successfully built a personal portfolio website using HTML and
        CSS! You've learned how to structure content, style it, and make it
        responsive.
      </p>
      <p>
        Feel free to continue customizing your portfolio and exploring more CSS
        techniques. Happy coding!
      </p>
    </div>
  );
};

export default PortfolioLayout;
