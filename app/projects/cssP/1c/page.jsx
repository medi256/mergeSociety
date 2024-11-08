import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Building Your First Portfolio Website",
  description:
    "A step-by-step tutorial for beginners on how to create a personal Portfolio Website using HTML and CSS. Learn about the role of CSS in web design, set up your workspace, and build your first portfolio layout with easy-to-follow instructions.",
  keywords:
    "portfolio website, CSS coding project, HTML, CSS, web design, beginner tutorial, personal portfolio, coding for beginners",

  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/1c",
  },

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

      <h2>Introduction</h2>
      <p>
        Creating a personal portfolio website is an excellent way to showcase
        your skills, projects, and achievements as a web developer. In this
        in-depth tutorial, we'll guide you through the entire process of
        building a responsive, visually appealing portfolio website using HTML
        and CSS.
      </p>
      <p>
        By the end of this tutorial, you'll have a fully functional portfolio
        website that you can customize and expand upon. We'll make sure to
        explain each step in detail, using simple and beginner-friendly
        language, so that even if you're new to web development, you'll be able
        to follow along and create your own portfolio.
      </p>

      <h2>Setting Up Your Workspace</h2>

      <h3>Installing a Text Editor</h3>
      <p>
        For this tutorial, we'll be using Visual Studio Code (VS Code), a free
        and popular code editor. Here's how you can install it:
      </p>
      <ol>
        <li>
          Go to the Visual Studio Code website and click the "Download" button.
        </li>
        <li>
          Choose the version for your operating system (Windows, Mac, or Linux)
          and follow the installation instructions.
        </li>
      </ol>
      <p>
        Visual Studio Code is a powerful text editor that provides features like
        syntax highlighting, code completion, and integrated debugging, which
        will make your coding experience much more efficient.
      </p>

      <h3>Creating Your Project Folder</h3>
      <p>
        Next, let's create a dedicated folder to keep all your website files
        organized:
      </p>
      <ol>
        <li>Open your file explorer (Windows) or Finder (Mac).</li>
        <li>
          Navigate to your Documents folder (or any other location you prefer).
        </li>
        <li>{`Right-click in an empty space and select "New > Folder".`}</li>
        <li>Name the folder "my-portfolio" and press Enter.</li>
      </ol>
      <p>
        Having a separate folder for your portfolio project will help you stay
        organized and make it easier to manage your files.
      </p>

      <h3>Opening Your Project in VS Code</h3>
      <p>Now, let's open your project folder in VS Code:</p>
      <ol>
        <li>Open VS Code.</li>
        <li>
          Click on "File" in the top menu, then select "Open Folder" (Windows)
          or "Open..." (Mac).
        </li>
        <li>Find and select your "my-portfolio" folder, then click "Open".</li>
      </ol>
      <p>
        This will load your project folder in VS Code, allowing you to work on
        your portfolio files.
      </p>

      <h3>Creating Your Project Files</h3>
      <p>
        Within your "my-portfolio" folder, we need to create two files:
        index.html and styles.css.
      </p>
      <ol>
        <li>
          In the VS Code file explorer, click the "New File" icon (it looks like
          a page with a + sign).
        </li>
        <li>
          Name the file "index.html" and press Enter. This will be your main
          HTML file.
        </li>
        <li>
          Click the "New File" icon again and name the file "styles.css". This
          will be your CSS file.
        </li>
      </ol>
      <p>
        The index.html file will contain the structure and content of your
        website, while the styles.css file will hold the styling rules.
      </p>

      <h2>Building the HTML Structure</h2>

      <h3>Step 1: Open Your HTML File</h3>
      <p>
        In the VS Code file explorer, double-click the index.html file to open
        it in the editor.
      </p>

      <h3>Step 2: Add the Basic HTML Structure</h3>
      <p>Copy and paste the following code into your index.html file:</p>
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
      <p>Let's break down the code:</p>
      <ul>
        <li>
          <code>{`<!DOCTYPE html>`}</code>: Declares the document type as HTML5.
        </li>
        <li>
          <code>{`<html lang="en">`}</code>: The root element of the HTML page,
          specifying the language as English.
        </li>
        <li>
          <code>{`<head>`}</code>: Contains meta information about the document.
        </li>
        <li>
          <code>{`<meta charset="UTF-8">`}</code>: Sets the character encoding
          to UTF-8, which ensures that your website can display a wide range of
          characters correctly.
        </li>
        <li>
          <code>{`<meta name="viewport" ...>`}</code>: Ensures the page is
          responsive and adapts to different screen sizes.
        </li>
        <li>
          <code>{`<title>My Portfolio</title>`}</code>: Sets the title of the
          webpage, which will be displayed in the browser's tab or window.
        </li>
        <li>
          <code>{`<link rel="stylesheet" href="styles.css">`}</code>: Links the
          CSS file (styles.css) to the HTML, allowing you to apply styles to
          your website.
        </li>
        <li>
          <code>{`<body>`}</code>: Contains the visible content of the webpage.
        </li>
      </ul>

      <h3>Step 3: Save Your HTML File</h3>
      <p>
        Press Ctrl + S (Windows) or Command + S (Mac) to save the index.html
        file.
      </p>
      <p>
        This basic HTML structure provides the foundation for your portfolio
        website. Now, let's start adding content to it.
      </p>

      <h2>Adding Content to Your Portfolio</h2>

      <h3>Step 1: Add the Header Section</h3>
      <p>
        Inside the <code>&lt;body&gt;</code> tags, add the following code:
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
      <p>
        This section will include your name, job title (e.g., "Web Developer"),
        and a brief bio about yourself.
      </p>
      <ul>
        <li>
          The <code>&lt;h1&gt;</code> tag is used for the main heading, which is
          typically your name.
        </li>
        <li>
          The <code>&lt;p&gt;</code> tags with the class="subtitle" and
          class="bio" attributes are used for the job title and bio,
          respectively. The class attribute allows us to apply specific styles
          to these elements later.
        </li>
      </ul>

      <h3>Step 2: Add the Skills Section</h3>
      <p>Below the header section, add the following code:</p>
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
      <p>This section will showcase the skills you have as a web developer.</p>
      <ul>
        <li>
          The <code>&lt;section&gt;</code> tag is used to group related content
          together.
        </li>
        <li>
          The <code>&lt;h2&gt;</code> tag is used for the section heading.
        </li>
        <li>
          The <code>&lt;ul&gt;</code> (unordered list) and{" "}
          <code>&lt;li&gt;</code> (list item) tags are used to display the list
          of skills.
        </li>
        <li>
          The class="skills" and class="skills-list" attributes allow us to
          target these elements for styling later.
        </li>
      </ul>

      <h3>Step 3: Add a Projects Section</h3>
      <p>Below the skills section, add the following code:</p>
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
      <p>This section will display your portfolio projects.</p>
      <ul>
        <li>
          The <code>&lt;section&gt;</code> tag is used to group the
          project-related content.
        </li>
        <li>
          The <code>&lt;h2&gt;</code> tag is used for the section heading.
        </li>
        <li>
          The <code>&lt;div&gt;</code> with the class="project-grid" is a
          container that will hold the individual project items.
        </li>
        <li>
          The <code>&lt;article&gt;</code> tags are used to represent each
          project, with an <code>&lt;h3&gt;</code> tag for the project title and
          a <code>&lt;p&gt;</code> tag for the project description.
        </li>
        <li>
          The class="projects", class="project-grid", and class="project"
          attributes will help us style these elements later.
        </li>
      </ul>

      <h3>Step 4: Add a Contact Section</h3>
      <p>Finally, add a footer section for your contact information:</p>
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
      <p>
        This section will provide a way for people to get in touch with you.
      </p>
      <ul>
        <li>
          The <code>&lt;footer&gt;</code> tag is used to group the
          contact-related content at the bottom of the page.
        </li>
        <li>
          The <code>&lt;h2&gt;</code> tag is used for the section heading.
        </li>
        <li>
          The <code>&lt;p&gt;</code> tags are used to display your email and
          LinkedIn profile information.
        </li>
      </ul>

      <h3>Customizing Your Content</h3>
      <p>
        Now that you have the basic structure in place, feel free to customize
        the content to match your personal information:
      </p>
      <ul>
        <li>Replace "Your Name" with your actual name.</li>
        <li>Update the bio to describe yourself and your background.</li>
        <li>Add or remove skills based on your expertise.</li>
        <li>Add your own project descriptions and details.</li>
        <li>
          Update the contact information with your email and LinkedIn profile.
        </li>
      </ul>
      <p>
        Remember, this is your portfolio, so make sure the content reflects who
        you are and what you can offer.
      </p>

      <h2>Adding CSS Styling</h2>

      <h3>Step 1: Open Your CSS File</h3>
      <p>
        In the VS Code file explorer, double-click the styles.css file to open
        it in the editor.
      </p>

      <h3>Step 2: Add Basic Page Styles</h3>
      <p>Copy and paste the following code into your styles.css file:</p>
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
      <p>
        This CSS code resets the default styles and sets some basic styles for
        the page:
      </p>
      <ul>
        <li>
          <code>{`* { ... }`}</code> is a universal selector that targets all
          elements on the page.
        </li>
        <li>
          <code>{`margin`}</code> and <code>{`padding`}</code> are set to 0 to
          remove the default margins and padding.
        </li>
        <li>
          <code>{`box-sizing: border-box;`}</code> ensures that the width and
          height of an element include the padding and border.
        </li>
        <li>
          <code>{`font-family`}</code>, <code>{`line-height`}</code>, and{" "}
          <code>{`color`}</code> are set for the body element, which will apply
          these styles to the entire page.
        </li>
        <li>
          <code>{`max-width`}</code> and <code>{`margin: 0 auto;`}</code> center
          the content horizontally on the page.
        </li>
        <li>
          <code>{`padding`}</code> adds some space around the content.
        </li>
      </ul>

      <h3>Step 3: Style the Header Section</h3>
      <p>Add the following CSS rules to your styles.css file:</p>
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

header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

header .subtitle {
    font-size: 1.2rem;
    color: #7f8c8d; 
    margin-bottom: 15px;
}

header .bio {
    max-width: 600px;
    margin: 0 auto;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        These styles will make your header section look more polished and
        professional:
      </p>
      <ul>
        <li>
          <code>{`text-align: center;`}</code> centers the content within the
          header.
        </li>
        <li>
          <code>{`padding`}</code> adds some spacing around the content.
        </li>
        <li>
          <code>{`background-color`}</code> and <code>{`border-radius`}</code>{" "}
          give the header a subtle background and rounded corners.
        </li>
        <li>
          <code>{`margin-bottom`}</code> adds some spacing below the header.
        </li>
        <li>
          <code>{`h1`}</code>, <code>{`.subtitle`}</code>, and{" "}
          <code>{`.bio`}</code> styles target the specific elements within the
          header.
        </li>
      </ul>

      <h3>Step 4: Style the Skills Section</h3>
      <p>Add the following CSS rules to your styles.css file:</p>
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
      <p>
        These styles will make your skills section look clean and organized:
      </p>
      <ul>
        <li>
          <code>{`.skills`}</code> styles target the entire skills section.
        </li>
        <li>
          <code>{`padding`}</code>, <code>{`background-color`}</code>,{" "}
          <code>{`border-radius`}</code>, and <code>{`box-shadow`}</code> give
          the section a clean, modern appearance.
        </li>
        <li>
          <code>{`.skills h2`}</code> styles the section heading.
        </li>
        <li>
          <code>{`.skills-list`}</code> styles the list of skills, removing the
          default list style and displaying the items in a flexible, wrapping
          layout.
        </li>
        <li>
          <code>{`.skills-list li`}</code> styles the individual skill items,
          giving them a blue background, rounded corners, and proper spacing.
        </li>
      </ul>

      <h3>Step 5: Style the Projects Section</h3>
      <p>Add the following CSS rules to your styles.css file:</p>
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
      <p>
        These styles will create a responsive grid layout for your project
        section:
      </p>
      <ul>
        <li>
          <code>{`.project-grid`}</code> uses the CSS grid layout to display the
          project items in a grid.
        </li>
        <li>
          <code>{`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`}</code>{" "}
          creates a responsive grid where the number of columns adapts to the
          available space, with a minimum width of 250px for each project item.
        </li>
        <li>
          <code>{`gap`}</code> adds spacing between the grid items.
        </li>
        <li>
          <code>{`padding`}</code> adds some space around the entire grid.
        </li>
        <li>
          <code>{`.project`}</code> styles the individual project items, giving
          them a white background, rounded corners, and a subtle shadow.
        </li>
        <li>
          <code>{`.project h3`}</code> and <code>{`.project p`}</code> style the
          project title and description, respectively.
        </li>
      </ul>

      <h3>Step 6: Style the Footer</h3>
      <p>Add the following CSS rules to your styles.css file:</p>
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
      <p>
        These styles will make your contact section stand out at the bottom of
        the page:
      </p>
      <ul>
        <li>
          <code>{`margin-top`}</code> adds some spacing above the footer.
        </li>
        <li>
          <code>{`padding`}</code> adds space around the footer content.
        </li>
        <li>
          <code>{`background-color`}</code> and <code>{`color`}</code> give the
          footer a dark blue background and white text.
        </li>
        <li>
          <code>{`border-radius`}</code> rounds the corners of the footer.
        </li>
        <li>
          <code>{`text-align: center;`}</code> centers the content within the
          footer.
        </li>
        <li>
          <code>{`footer h2`}</code> and <code>{`footer p`}</code> style the
          section heading and contact information, respectively.
        </li>
      </ul>

      <h2>Understanding the CSS</h2>
      <p>Let's quickly review the CSS concepts we've used so far:</p>
      <ul>
        <li>
          <code>{`margin`}</code> creates space outside elements.
        </li>
        <li>
          <code>{`padding`}</code> creates space inside elements.
        </li>
        <li>
          <code>{`box-sizing: border-box;`}</code> ensures that the width and
          height of an element include the padding and border.
        </li>
        <li>
          <code>{`border-radius`}</code> rounds the corners of elements.
        </li>
        <li>
          <code>{`box-shadow`}</code> adds a subtle shadow to elements.
        </li>
        <li>
          <code>{`display: grid/flex`}</code> creates modern, responsive
          layouts.
        </li>
        <li>
          <code>{`color`}</code> sets the text color of an element.
        </li>
        <li>
          <code>{`background-color`}</code> sets the background color of an
          element.
        </li>
      </ul>

      <h2>Testing Your Responsive Design</h2>
      <p>
        To ensure your portfolio looks great on different devices, follow these
        steps:
      </p>
      <ol>
        <li>
          Open your `index.html` file in a web browser (e.g., Google Chrome).
        </li>
        <li>
          Press F12 (or right-click and select "Inspect") to open the browser's
          Developer Tools.
        </li>
        <li>
          Click the "Toggle device toolbar" icon (it looks like a phone/tablet).
        </li>
        <li>
          Try different device sizes to see how your site responds and adjust
          your CSS accordingly.
        </li>
      </ol>
      <p>
        This will allow you to test your portfolio on various screen sizes and
        make any necessary adjustments to the CSS to ensure it looks great on
        both desktop and mobile devices.
      </p>

      <h2>Final Code</h2>
      <p>Here is the final code for your portfolio website:</p>

      <h3>index.html</h3>
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
    <header>
        <h1>Your Name</h1>
        <p class="subtitle">Web Developer</p>
        <p class="bio">A passionate developer focused on creating interactive websites</p>
    </header>

    <section class="skills">
        <h2>My Skills</h2>
        <ul class="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web Design</li>
        </ul>
    </section>

    <section class="projects">
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
    </section>

    <footer>
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: your-linkedin-profile</p>
    </footer>
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>styles.css</h3>
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
}

/* Header styles */
header {
    text-align: center;
    padding: 40px 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

header .subtitle {
    font-size: 1.2rem;
    color: #7f8c8d; 
    margin-bottom: 15px;
}

header .bio {
    max-width: 600px;
    margin: 0 auto;
}

/* Skills section styles */
.skills {
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
}

/* Projects section styles */
.project-grid {
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
}

/* Footer styles */
footer {
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

      <h2>Conclusion</h2>
      <p>
        Congratulations! You've now created a basic portfolio website using HTML
        and CSS. This tutorial has provided you with a solid foundation to build
        upon. Remember, this is just the beginning - you can continue to
        customize and expand your portfolio as you learn more.
      </p>
      <p>
        Feel free to experiment with different styles, add more sections, and
        make your portfolio truly unique. Happy coding!
      </p>
    </div>
  );
};

export default PortfolioLayout;
