import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import Image from "next/image";
import Link from "next/link";
import "../cp.css";

export const metadata = {
  title: "Practice  your  CSS knowledge  by  building a project",
  description:
    "Learn how to build a cool, responsive navigation menu for your website using HTML, CSS, and JavaScript.",
  keywords: [
    "css project",
    "learn css by styling a project",
    "navigation menu css project",
    "web development project",
    "HTML project",
    "CSS project",
    "css project step by step",
    "style with css",
    "practice css project",
    "html css project",
    "css only project",
    "master css with projects",
    "css html beginner project",
    "css html project",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/3c",
  },

  openGraph: {
    title: "Responsive Navigation Menu CSS Project",
    description:
      "Learn how to build a cool, responsive navigation menu for your website using HTML, CSS, and JavaScript.",
  },
};

const ResponsiveNavigationMenu = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>Let's Build a Cool Website Menu Together With CSS</h1>

        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-01-17">
            | January 17, 2025
          </time>
        </h2>

        <p>
          Imagine you're building a house - you need doors to move between
          rooms, right? Well, a navigation menu is like the doors in your
          website! It helps visitors move from one page to another easily.
        </p>
        <p>
          Think of your favorite apps or websites - they all have menus that
          work perfectly whether you're on your phone or computer. Today, we're
          going to build something just like that! 📱 💻
        </p>
        <p>
          Here's what we'll learn today (don't worry, we'll take it step by
          step!):
        </p>
        <ul>
          <li>
            ✨ Building the basic structure (like laying the foundation of a
            house)
          </li>
          <li>🎨 Making it look pretty with CSS (like painting the walls)</li>
          <li>
            📱 Making it work on phones and tablets (like adding flexible
            furniture)
          </li>
          <li>
            🍔 Creating a special menu for phones (the famous "hamburger" menu)
          </li>
        </ul>
        <div>
          <h4>Why This Matters? 🤔</h4>
          <p>
            Every website needs a good menu! After completing this project,
            you'll be able to:
          </p>
          <ul>
            <li>Add professional navigation to your websites</li>
            <li>Make your websites work great on all devices</li>
            <li>Understand how modern websites are built</li>
          </ul>
        </div>

        <h2>Setting Up Your Workspace</h2>
        <h3>Creating Your Project's Home 🏠</h3>
        <p>
          Before we start making our navigation menu, we need to set up our
          workspace. Think of this like preparing your kitchen before cooking -
          you want all your tools and ingredients ready!
        </p>
        <div className="step-box">
          <h4>Step 1: Create Your Project Folder</h4>
          <p>
            Think of this folder like a container where we'll keep all our
            project files - just like having a special drawer for your art
            supplies!
          </p>
          <ul>
            <li>
              <strong>On Windows:</strong>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Choose "New"</li>
                <li>Click "Folder"</li>
                <li>Name it "my-navigation-menu"</li>
              </ol>
            </li>
            <li>
              <strong>On Mac:</strong>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Choose "New Folder"</li>
                <li>Name it "my-navigation-menu"</li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="step-box">
          <h4>Step 2: Get Your Text Editor Ready</h4>
          <p>
            A text editor is like your crafting tool - it's where we'll write
            our code. We recommend Visual Studio Code because it's free and
            beginner-friendly!
          </p>
          <ol>
            <li>
              Download Visual Studio Code from{" "}
              <span style={{ color: "#0066cc" }}>code.visualstudio.com</span> if
              you haven't already
            </li>
            <li>Install it on your computer</li>
            <li>
              Open VS Code and drag your "my-navigation-menu" folder into the
              window
            </li>
          </ol>
        </div>

        <div>
          <h4>Step 3: Create Your Project Files</h4>
          <p>
            We need two special files - think of them as two pieces of paper
            where we'll write different things:
          </p>
          <ul>
            <li>
              <strong>index.html</strong> - This is like the blueprint of our
              navigation menu (the structure)
            </li>
            <li>
              <strong>styles.css</strong> - This is like our painting palette
              (where we make things pretty)
            </li>
          </ul>
          <p>To create these files:</p>
          <ol>
            <li>Click "New File" in VS Code</li>
            <li>Save it as "index.html"</li>
            <li>Create another new file</li>
            <li>Save it as "styles.css"</li>
          </ol>
        </div>

        <div>
          <p>
            <strong>🎯 Success Check:</strong> At this point, you should have:
          </p>
          <ul>
            <li>A folder named "my-navigation-menu" on your desktop</li>
            <li>Visual Studio Code open with your folder</li>
            <li>Two empty files: index.html and styles.css</li>
          </ul>
          <p>
            <strong>👉 Need Help?</strong> If something's not working, try
            closing VS Code and opening it again, or create the files using the
            "File → New File" menu.
          </p>
        </div>

        <h2>Building Our Menu's Structure</h2>
        <h3>Let's Build the Foundation! 🏗️</h3>

        <p>
          Imagine building with LEGO blocks - we'll start with the basic pieces
          and then put them together to make something awesome!
        </p>

        <div>
          <h4>Beginner's Tip! 💡</h4>
          <p>
            HTML code might look scary at first, but think of it like building
            blocks: each piece has a special job to do. We'll explain every
            single piece!
          </p>
        </div>

        <h4>Step-by-Step: Writing Our HTML</h4>
        <ol>
          <li>
            <strong>1. Open Your index.html File</strong>
            <p>
              Copy this code into your index.html file - don't worry, we'll
              explain every part! 🧩 :
            </p>
            <pre>
              <code>
                <SyntaxHighlighter language="html" style={docco}>
                  {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Cool Navigation Menu</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Our menu will go here! -->
</body>
</html>`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>
                🎓 Think of this like a recipe card: it tells the browser what
                kind of document this is and what ingredients (files) we need!
              </p>
              <ul>
                <li>
                  <code>&lt;!DOCTYPE html&gt;</code>: Declares this as an HTML5
                  document
                </li>
                <li>
                  <code>&lt;html lang="en"&gt;</code>: Sets the language to
                  English
                </li>
                <li>
                  <code>&lt;meta charset="UTF-8"&gt;</code>: Sets the character
                  encoding to UTF-8
                </li>
                <li>
                  <code>
                    &lt;meta name="viewport" content="width=device-width,
                    initial-scale=1.0"&gt;
                  </code>
                  : Ensures the page is responsive on all devices
                </li>
                <li>
                  <code>
                    &lt;title&gt;My Cool Navigation Menu&lt;/title&gt;
                  </code>
                  : Sets the title of the page
                </li>
                <li>
                  <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>:
                  Links our CSS file
                </li>
              </ul>
            </div>
          </li>

          <li>
            <strong>2. Add Our Navigation Menu Structure</strong>
            <p>Now let's add our menu's building blocks:</p>
            <pre>
              <code>
                <SyntaxHighlighter language="html" style={docco}>
                  {`<nav>
  <div class="logo">
    <a href="#">My Website</a>
  </div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</nav>`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>&lt;nav&gt;</code>: A container for our navigation menu
                </li>
                <li>
                  <code>&lt;div class="logo"&gt;</code>: Contains the logo or
                  main title of the website
                </li>
                <li>
                  <code>&lt;ul class="nav-links"&gt;</code>: A list of
                  navigation links
                </li>
                <li>
                  <code>&lt;li&gt;</code>: Each list item represents a
                  navigation link
                </li>
                <li>
                  <code>&lt;div class="burger"&gt;</code>: The hamburger menu
                  icon for mobile devices
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div>
          <h4>Let's Break This Down! 🔍</h4>
          <ul>
            <li>
              <strong>{"<nav>"}</strong>: This is like a special container for
              our menu (like a toolbox that holds all our navigation tools)
            </li>
            <li>
              <strong>logo div</strong>: This is our website's name or brand
              (like the sign outside a store)
            </li>
            <li>
              <strong>nav-links</strong>: These are our menu items (like
              chapters in a book)
            </li>
            <li>
              <strong>burger</strong>: This will be our mobile menu button (it
              looks like a hamburger! 🍔)
            </li>
          </ul>
        </div>

        <div>
          <h4>Quick Check! ✅</h4>
          <p>Before moving on, make sure:</p>
          <ul>
            <li>Your code looks exactly like the example above</li>
            <li>You saved your index.html file</li>
            <li>You don't see any red squiggly lines in your code editor</li>
          </ul>
        </div>

        <h2>Making Our Menu Look Pretty</h2>
        <h3>Time to Add Some Style! 🎨</h3>

        <p>
          Now that we have our structure, let's make it look good! Think of CSS
          as your website's wardrobe - we're going to dress up our menu to make
          it look professional.
        </p>

        <div>
          <h4>CSS is Like Magic! ✨</h4>
          <p>
            With CSS, we can change colors, sizes, spacing - almost anything!
            Don't worry if you don't understand every line, we'll explain each
            part.
          </p>
        </div>

        <h4>Let's Style Our Menu Step by Step:</h4>

        <ol>
          <li>
            <strong>1. Basic Page Setup</strong>
            <p>
              Copy this code into your styles.css file - don't worry, we'll
              explain every part! 🧩 :
            </p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`/* This makes sure our page looks consistent everywhere */
body {
  font-family: Arial, sans-serif;  /* Easy to read font */
  margin: 0;                       /* No extra space around edges */
  padding: 0;                      /* No inner spacing */
  box-sizing: border-box;          /* Makes size calculations easier */
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>
                🎨 Think of this like preparing a canvas before painting - we're
                making sure we have a clean surface to work on!
              </p>
              <ul>
                <li>
                  <code>font-family: Arial, sans-serif;</code>: Sets the default
                  font to Arial or any sans-serif font
                </li>
                <li>
                  <code>margin: 0;</code>: Removes the default margin from the
                  body
                </li>
                <li>
                  <code>padding: 0;</code>: Removes the default padding from the
                  body
                </li>
                <li>
                  <code>box-sizing: border-box;</code>: Ensures that padding and
                  border are included in the element's total width and height
                </li>
              </ul>
            </div>
          </li>

          <li>
            <strong>2. Styling Our Navigation Container</strong>
            <p>Now let's style the main navigation bar:</p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`nav {
  background-color: #333;          /* Dark gray background */
  color: white;                    /* White text */
  display: flex;                   /* Makes items line up nicely */
  justify-content: space-between;  /* Spreads items out evenly */
  align-items: center;             /* Centers items vertically */
  padding: 1rem;                   /* Adds some breathing room */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);  /* Adds a subtle shadow */
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>background-color: #333;</code>: Sets the background
                  color to a dark gray
                </li>
                <li>
                  <code>color: white;</code>: Sets the text color to white
                </li>
                <li>
                  <code>display: flex;</code>: Uses flexbox to layout the items
                  in the navigation bar
                </li>
                <li>
                  <code>justify-content: space-between;</code>: Distributes the
                  items to the start and end
                </li>
                <li>
                  <code>align-items: center;</code>: Vertically centers the
                  items in the navigation bar
                </li>
                <li>
                  <code>padding: 1rem;</code>: Adds padding to the navigation
                  bar for spacing
                </li>
                <li>
                  <code>box-shadow: 0 2px 5px rgba(0,0,0,0.1);</code>: Adds a
                  subtle shadow to the navigation bar
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div>
          <h4>Understanding Colors! 🌈</h4>
          <p>Colors in CSS can be written in different ways:</p>
          <ul>
            <li>
              <strong>Names</strong>: like 'red', 'blue', 'white' (Easy to
              remember!)
            </li>
            <li>
              <strong>HEX codes</strong>: like #333 or #FF0000 (More precise
              colors!)
            </li>
            <li>
              <strong>RGB</strong>: like rgb(255, 0, 0) (Good for transparency!)
            </li>
          </ul>
        </div>

        <h2>Styling Our Menu Links</h2>
        <h3>Making Our Links Look Awesome! 🔗</h3>

        <p>
          Time to make our menu links look professional! Think of each link as a
          button on a remote control - it needs to be easy to see and click.
        </p>

        <div>
          <h4>Why Links Matter! 🎯</h4>
          <p>
            Good-looking links make your website easier to use. They should:
          </p>
          <ul>
            <li>Be easy to read</li>
            <li>Stand out from regular text</li>
            <li>Show when users hover over them</li>
            <li>Look clickable</li>
          </ul>
        </div>

        <h4>Step-by-Step Link Styling:</h4>

        <ol>
          <li>
            <strong>1. Styling the Link Container</strong>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`.nav-links {
  display: flex;          /* Makes links go horizontal */
  list-style: none;      /* Removes bullet points */
  margin: 0;             /* No extra space outside */
  padding: 0;            /* No extra space inside */
  gap: 2rem;             /* Space between links */
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>display: flex;</code>: Uses flexbox to layout the links
                  horizontally
                </li>
                <li>
                  <code>list-style: none;</code>: Removes the default bullet
                  points from the list
                </li>
                <li>
                  <code>margin: 0;</code>: Removes the default margin from the
                  list
                </li>
                <li>
                  <code>padding: 0;</code>: Removes the default padding from the
                  list
                </li>
                <li>
                  <code>gap: 2rem;</code>: Adds space between the links
                </li>
              </ul>
            </div>
          </li>

          <li>
            <strong>2. Making Links Look Pretty</strong>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`.nav-links a {
  color: white;                /* White text */
  text-decoration: none;       /* Removes underline */
  font-size: 1.1rem;          /* Makes text bigger */
  transition: all 0.3s ease;   /* Smooth hover effect */
}

/* When someone hovers over a link */
.nav-links a:hover {
  color: #ffd700;             /* Changes to gold color */
  transform: translateY(-2px); /* Slight lift effect */
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>color: white;</code>: Sets the text color to white
                </li>
                <li>
                  <code>text-decoration: none;</code>: Removes the underline
                  from the links
                </li>
                <li>
                  <code>font-size: 1.1rem;</code>: Increases the font size of
                  the links
                </li>
                <li>
                  <code>transition: all 0.3s ease;</code>: Adds a smooth
                  transition effect for hover
                </li>
                <li>
                  <code>.nav-links a:hover</code>: Styles the links when hovered
                  over
                </li>
                <li>
                  <code>color: #ffd700;</code>: Changes the text color to gold
                  on hover
                </li>
                <li>
                  <code>transform: translateY(-2px);</code>: Lifts the link
                  slightly on hover
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div>
          <h4>Try It Out! 🎮</h4>
          <p>
            Save your CSS and refresh your browser. Try hovering over the links.
            You should see:
          </p>
          <ul>
            <li>Links in a horizontal line</li>
            <li>No underlines</li>
            <li>Smooth color change on hover</li>
            <li>A slight lifting effect when you hover</li>
          </ul>
        </div>

        <h2>Making Our Menu Mobile-Friendly</h2>
        <h3>Let's Make It Work on Phones! 📱</h3>

        <p>
          Just like a transforming robot, our menu needs to change shape for
          smaller screens! This is called "responsive design."
        </p>

        <div>
          <h4>Why Mobile Matters! 📱</h4>
          <p>
            More than half of web visitors use phones! Our menu needs to work
            perfectly no matter what device they're using.
          </p>
        </div>

        <h4>Making Our Menu Mobile-Ready:</h4>

        <ol>
          <li>
            <strong>1. Add the Hamburger Menu Style</strong>
            <p>First, let's style our mobile menu button (the "hamburger"):</p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`.burger {
  display: none;  /* Hide by default on big screens */
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease;
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>display: none;</code>: Hides the hamburger menu by
                  default
                </li>
                <li>
                  <code>cursor: pointer;</code>: Changes the cursor to a pointer
                  when hovering over the hamburger menu
                </li>
                <li>
                  <code>width: 25px;</code>: Sets the width of the hamburger
                  lines
                </li>
                <li>
                  <code>height: 3px;</code>: Sets the height of the hamburger
                  lines
                </li>
                <li>
                  <code>background-color: white;</code>: Sets the color of the
                  hamburger lines to white
                </li>
                <li>
                  <code>margin: 5px;</code>: Adds margin between the hamburger
                  lines
                </li>
                <li>
                  <code>transition: all 0.3s ease;</code>: Adds a smooth
                  transition effect for hover
                </li>
              </ul>
            </div>
          </li>

          <li>
            <strong>2. Add Mobile Rules</strong>
            <p>
              Now let's add special rules for small screens (this is called a
              "media query"):
            </p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`@media screen and (max-width: 768px) {
  .burger {
    display: block;  /* Show hamburger on mobile */
  }

  .nav-links {
    position: fixed;
    right: -100%;     /* Hide menu off-screen */
    top: 70px;
    height: 100vh;
    background: #333;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 0.5s;
  }

  /* When menu is active */
  .nav-links.active {
    right: 0;       /* Slide menu in */
  }
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>@media screen and (max-width: 768px)</code>: Applies
                  styles to screens smaller than 768px
                </li>
                <li>
                  <code>{`.burger { display: block; }`}</code>: Shows the
                  hamburger menu on mobile
                </li>
                <li>
                  <code>{`.nav-links { position: fixed; }`}</code>: Fixes the
                  menu to the screen
                </li>
                <li>
                  <code>right: -100%;</code>: Hides the menu off-screen
                </li>
                <li>
                  <code>top: 70px;</code>: Positions the menu 70px from the top
                </li>
                <li>
                  <code>height: 100vh;</code>: Sets the height of the menu to
                  100% of the viewport height
                </li>
                <li>
                  <code>background: #333;</code>: Sets the background color to
                  dark gray
                </li>
                <li>
                  <code>flex-direction: column;</code>: Stacks the menu items
                  vertically
                </li>
                <li>
                  <code>width: 100%;</code>: Sets the width of the menu to 100%
                  of the viewport width
                </li>
                <li>
                  <code>text-align: center;</code>: Centers the text in the menu
                  items
                </li>
                <li>
                  <code>transition: 0.5s;</code>: Adds a smooth transition
                  effect for the menu
                </li>
                <li>
                  <code>{`.nav-links.active { right: 0; }`}</code>: Slides the
                  menu in when active
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div>
          <h4>What's Happening Here? 🤔</h4>
          <ul>
            <li>
              <strong>@media screen</strong>: Like a rule that says "only do
              this on small screens"
            </li>
            <li>
              <strong>max-width: 768px</strong>: Means "when screen is smaller
              than an iPad"
            </li>
            <li>
              <strong>position: fixed</strong>: Makes menu stay in place when
              scrolling
            </li>
          </ul>
        </div>

        <div>
          <h4>Test Your Menu! 🔍</h4>
          <p>Try these things:</p>
          <ol>
            <li>Make your browser window smaller</li>
            <li>The hamburger menu should appear</li>
            <li>Click it to see the menu slide in</li>
            <li>Try it on your phone too!</li>
          </ol>
        </div>

        <h2>Adding the Final Touches</h2>
        <h3>Making Everything Perfect! ✨</h3>

        <p>
          We're almost done! Let's add some finishing touches to make our menu
          extra special.
        </p>

        <h4>Final Touches:</h4>

        <ol>
          <li>
            <strong>1. Adding the Hamburger Menu Animation</strong>
            <p>
              Let's make the hamburger menu button transform into an "X" when
              it's clicked.
            </p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>{`.toggle .line1 { transform: rotate(-45deg) translate(-5px, 6px); }`}</code>
                  : Rotates the first line to form the top part of the "X"
                </li>
                <li>
                  <code>{`.toggle .line2 { opacity: 0; }`}</code>: Hides the
                  middle line
                </li>
                <li>
                  <code>{`.toggle .line3 { transform: rotate(45deg) translate(-5px, -6px); }`}</code>
                  : Rotates the third line to form the bottom part of the "X"
                </li>
              </ul>
            </div>
          </li>

          <li>
            <strong>2. Adding the Menu Fade Animation</strong>
            <p>
              Let's add a smooth fade-in effect for the menu items when the menu
              slides in.
            </p>
            <pre>
              <code>
                <SyntaxHighlighter language="css" style={docco}>
                  {`.nav-active {
  transform: translateX(0);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-links li {
  animation: navLinkFade 0.5s ease forwards;
}`}
                </SyntaxHighlighter>
              </code>
            </pre>
            <div>
              <p>Let's break down what each part does:</p>
              <ul>
                <li>
                  <code>{`.nav-active { transform: translateX(0); }`}</code>:
                  Slides the menu in when active
                </li>
                <li>
                  <code>@keyframes navLinkFade</code>: Defines the fade-in
                  animation
                </li>
                <li>
                  <code>{`from { opacity: 0; transform: translateX(50px); }`}</code>
                  : Sets the initial state of the animation
                </li>
                <li>
                  <code>{`to { opacity: 1; transform: translateX(0); }`}</code>:
                  Sets the final state of the animation
                </li>
                <li>
                  <code>{`.nav-links li { animation: navLinkFade 0.5s ease forwards; }`}</code>
                  : Applies the fade-in animation to the menu items
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div>
          <h4>What's Happening Here? 🤔</h4>
          <ul>
            <li>
              <strong>.toggle .line1, .toggle .line2, .toggle .line3</strong>:
              These rules transform the hamburger menu into an "X" when it's
              clicked.
            </li>
            <li>
              <strong>@keyframes navLinkFade</strong>: This keyframe animation
              makes the menu items fade in smoothly.
            </li>
            <li>
              <strong>.nav-links li</strong>: This applies the fade-in animation
              to the menu items.
            </li>
          </ul>
        </div>

        <div>
          <h4>Test Your Menu! 🔍</h4>
          <p>Try these things:</p>
          <ol>
            <li>Make your browser window smaller</li>
            <li>Click the hamburger menu</li>
            <li>The menu should slide in with a smooth fade-in effect</li>
            <li>The hamburger icon should transform into an "X"</li>
          </ol>
        </div>

        <div>
          <h4>Congratulations! 🎉</h4>
          <p>
            You've built a fully responsive navigation menu! You've learned how
            to:
          </p>
          <ul>
            <li>Create the HTML structure</li>
            <li>Style the menu with CSS</li>
            <li>Make the menu responsive for different devices</li>
            <li>Add smooth animations</li>
          </ul>
          <p>
            Feel free to continue customizing your menu and exploring more CSS
            techniques. Happy coding! 🚀
          </p>
        </div>
        <h3>Recommended</h3>
        <CssProjectssss />
      </article>
    </div>
  );
};

export default ResponsiveNavigationMenu;

export const CssProjectssss = () => {
  const cssOnlyProjectTitles = [
    {
      id: "1c",
      title: "Build a Simple Personal Portfolio Layout",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736527272/cssstyling_ouoarm.jpg",
      alt: "Build a Simple Personal Portfolio Layout",
      date: "January 15, 2025",
      description:
        "Learn how to style a personal portfolio using basic CSS properties like background colors, fonts, and spacing. Focus on layout fundamentals such as margins, padding, and text alignment.",
    },
    {
      id: "2c",
      title: "Style a Blog Post with CSS",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577431/cssblog_stuovd.jpg",
      alt: "Style a Blog Post with CSS",
      date: "January 5, 2025",
      description:
        "Style a simple blog post using CSS. Learn how to apply font families, text colors, and adjust line height and spacing to enhance readability.",
    },
    {
      id: "4c",
      title: "Design an Advanced Pricing Table",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577692/restaurantcss_taihjr.jpg",
      alt: "Design an Advanced Pricing Table",
      date: "January 16, 2025",
      description:
        "Create a fully responsive pricing table with CSS grid. Learn to use grid properties to structure rows and columns, adding hover effects for interaction.",
    },
    {
      id: "5c",
      title: "Build a Parallax Scrolling Effect",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577912/csstype_prlpwm.jpg",
      alt: "Build a Parallax Scrolling Effect",
      date: "January 3, 2025",
      description:
        "Learn how to create a parallax scrolling effect using CSS. This project covers how to manipulate background images and layers for a visually engaging web experience.",
    },
    {
      id: "6c",
      title: "Create a CSS Animation for Button Hover Effects",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736578044/lastCSS_wjgdhm.jpg",
      alt: "Create a CSS Animation for Button Hover Effects",
      date: "January 15, 2025",
      description:
        "Explore the power of CSS animations by designing interactive button hover effects. This project focuses on keyframes, transitions, and animation timing functions.",
    },
  ];

  return (
    <div className="blog-posts-container">
      <h1 className="blog-title">CSS-Only Projects</h1>

      <div className="posts-grid">
        {cssOnlyProjectTitles.map((project) => (
          <Link key={project.id} href={`/projects/cssP/${project.id}`} passHref>
            <div className="post-card">
              {/* <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div> */}
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <div className="post-button ct-button">Start Tutorial</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
