import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Build Your First Website: Step-by-Step HTML Project Tutorial",
  description:
    "Create your first personal website from scratch! Step-by-step HTML project tutorial with real code examples. Perfect for complete beginners. Includes downloadable code and live preview.",
  keywords: [
    "HTML projects for beginners",
    "build personal website HTML",
    "simple HTML projects",
    "HTML portfolio project",
    "beginner coding projects",
    "first HTML website tutorial",
    "HTML website examples",
    "learn HTML by building",
    "HTML project ideas",
    "HTML exercises for beginners",
    "make portfolio website HTML",
    "HTML practice projects",
    "HTML5 website examples",
    "coding projects for portfolio",
    "HTML hands on projects",
  ],

  openGraph: {
    type: "website",
    title: "Build Your First Website: Step-by-Step HTML Project Tutorial",
    description:
      "Create a personal website from scratch! Complete HTML project tutorial with downloadable code. Perfect for beginners building their first website.",
  },
};

const PersonalWebpage = () => {
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
          Building Your First Website: A Beginner's Journey
        </h1>
      </div>

      <h2>Understanding HTML - Your Website's Building Blocks</h2>
      <h3>Let's Start Our Web Journey!</h3>

      <div>
        <div>
          <p>
            Imagine you're building a house 🏠. Just like a house needs a
            foundation, walls, and a roof, a webpage needs something to give it
            structure. That's where HTML comes in!
          </p>
        </div>

        <div>
          <h4>What exactly is HTML?</h4>
          <p>
            HTML is like a set of building blocks for websites. Think of it this
            way:
          </p>
          <ul>
            <li>
              HTML stands for <span>HyperText Markup Language</span>
              (don't worry about memorizing this - just remember it's the
              language websites are built with!)
            </li>
            <li>
              If a webpage was a sandwich, HTML would be the bread that holds
              everything together
            </li>
            <li>
              HTML uses special "tags" - they're like containers that tell your
              browser "hey, this is a heading" or "this is a paragraph"
            </li>
          </ul>
        </div>

        <div>
          <h4>👉 What We'll Build Together:</h4>
          <p>
            We're going to create your very own personal webpage! Think of it as
            your digital business card. It will have:
          </p>
          <ul>
            <li>Your name at the top (like a welcome sign)</li>
            <li>A section about you (your digital introduction)</li>
            <li>Your awesome skills (showing what you can do)</li>
            <li>Ways to contact you (helping others reach out)</li>
          </ul>
        </div>

        <div>
          <p>✨ Don't worry if you're completely new to this!</p>
          <p>
            We'll take it step by step, explain everything in simple terms, and
            use lots of examples. It's like following a recipe - we'll add one
            ingredient at a time!
          </p>
        </div>
      </div>

      <h2>Getting Ready - Setting Up Your Workspace </h2>
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
              Think of this folder as a special drawer just for your website
              files:
            </p>

            <div>
              <p>👉 If you're using Windows:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Move your mouse to "New"</li>
                <li>Click "Folder"</li>
                <li>Name it "my-first-website"</li>
              </ol>

              <p>👉 If you're using Mac:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Click "New Folder"</li>
                <li>Name it "my-first-website"</li>
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
            <p>Now let's create your website's main file:</p>
            <ol>
              <li>Open VS Code</li>
              <li>Click "File" → "Open Folder"</li>
              <li>Find and select your "my-first-website" folder</li>
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
            the next step, we'll start writing our first HTML code.
          </p>
        </div>
      </div>

      <h2> Writing Your First HTML - The Building Blocks</h2>
      <h3>Let's Write Our First HTML!</h3>

      <div>
        <div>
          <p>
            Think of HTML like building with LEGO® blocks. Each piece has a
            specific shape and purpose, and when you put them together, you
            create something amazing! 🏗️
          </p>
        </div>

        <div>
          <h4>The Basic Structure</h4>
          <p>Copy this code into your index.html file:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
</head>
<body>
    
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
                  This is like telling your browser "Hey, this is a webpage!"
                  It's like putting a label on a box so everyone knows what's
                  inside.
                </p>
              </div>

              <div>
                <p>{`2. <html lang="en">`}</p>
                <p>
                  This is the container for your entire webpage. Think of it as
                  the outer walls of your house - everything goes inside here!
                </p>
              </div>

              <div>
                <p>{`3. <head>`}</p>
                <p>
                  This is like the control room of your webpage. It contains
                  important information that visitors don't see but your browser
                  needs to know.
                </p>
              </div>

              <div>
                <p>{`4. <body>`}</p>
                <p>
                  This is where all the visible stuff goes - your text, images,
                  everything visitors will see. Think of it as the furnished
                  rooms in your house.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Copy the code above into your index.html file</li>
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

      <h2>Adding Your Header - Making It Personal </h2>

      <h3>Creating Your Website Header</h3>

      <div>
        <div>
          <p>
            Think of a header like the cover of a book - it's the first thing
            people see! Let's make yours stand out with your name and what you
            do. 📚
          </p>
        </div>

        <div>
          <h4>Adding Your Name and Title</h4>
          <p>
            Add this code inside your <code>body</code> tags:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <header>
        <h1>Your Name</h1>
        <h2>Web Developer in Training</h2>
    </header>
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
                  This is like the front door of your website. It's where you
                  make your first impression!
                </p>
              </div>

              <div>
                <p>{`2. <h1>`}</p>
                <p>
                  This is the biggest heading - like your name on a giant
                  welcome sign. You only use one h1 per page because it's the
                  main title.
                </p>
              </div>

              <div>
                <p>{`3. <h2>`}</p>
                <p>
                  This is a slightly smaller heading - perfect for your title or
                  what you do. Think of it as your subtitle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Yours!</h4>
          <div>
            <p>Let's personalize it! Here's what to change:</p>
            <ol>
              <li>Replace "Your Name" with... well, your actual name! 😄</li>
              <li>
                Change "Web Developer in Training" to whatever describes you:
                <ul>
                  <li>Student</li>
                  <li>Future Programmer</li>
                  <li>Tech Enthusiast</li>
                  <li>Or anything else that fits you!</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h4>🎨 Try This:</h4>
          <p>
            After you save and refresh your page, you'll see your name and
            title! If they look too plain, don't worry - we'll make them look
            prettier later with CSS (that's like the paint and decorations for
            your webpage).
          </p>
        </div>
      </div>

      <h2>Creating Your About Me Section </h2>
      <h3>Telling Your Story</h3>

      <div>
        <div>
          <p>
            The "About Me" section is like having a friendly conversation with
            your website visitors! Let's create a space where you can share your
            story. 🗣️
          </p>
        </div>

        <div>
          <h4>Creating Your About Section</h4>
          <p>Add this code after your header:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
    <h2>About Me</h2>
    <p>Hi there! I'm excited to share my journey into web development.</p>
    <p>When I'm not coding, I love [your hobbies or interests here].</p>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Understanding the Parts:</h5>
            <div>
              <div>
                <p>{`1. <section>`}</p>
                <p>
                  Think of this like a chapter in a book - it groups related
                  content together
                </p>
              </div>
              <div>
                <p>{`2. <p> (paragraph)`}</p>
                <p>
                  Each {` <p> `} tag is like a new paragraph in your story. Use
                  multiple paragraphs to make your text easier to read!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>
            Replace the placeholder text with your own story. For example, you
            might write:
          </p>
          <ul>
            <li>
              Hi there! I'm [Your Name], and I'm excited to share my journey
              into web development.
            </li>
            <li>
              When I'm not coding, I love hiking, reading science fiction, and
              playing video games.
            </li>
          </ul>
        </div>
      </div>

      <h2>Showing Off Your Skills </h2>
      <h3>Creating Your Skills Showcase</h3>

      <div>
        <div>
          <p>
            Time to show off what you can do! Think of this section like your
            trophy case - it's where you display your abilities. 🏆
          </p>
        </div>

        <div>
          <h4>Making Your Skills List</h4>
          <p>Add this code after your About Me section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
    <h2>My Skills</h2>
    <ul>
        <li>HTML Basics</li>
        <li>Learning CSS</li>
        <li>Problem Solving</li>
        <li>Eager to Learn!</li>
    </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Let's Break It Down:</h5>
            <div>
              <div>
                <p>{`1. <ul> (Unordered List)`}</p>
                <p>
                  This creates a bullet-point list - perfect for skills! Think
                  of it like making a shopping list.
                </p>
              </div>
              <div>
                <p>{`2. <li> (List Item)`}</p>
                <p>
                  Each skill goes in its own {` <li> `} tag - like each item on
                  your shopping list
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Make It Personal:</h4>
          <p>Replace the placeholder skills with your own. For example:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>HTML5 and CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Git and GitHub</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
      </div>

      <h2>Adding Contact Information </h2>
      <h3>Let's Help People Reach You!</h3>

      <div>
        <div>
          <p>
            The contact section is like leaving your business card for visitors.
            Let's make it easy for people to get in touch! 📫
          </p>
        </div>

        <div>
          <h4>Creating Your Contact Section</h4>
          <p>Add this code at the end of your body section:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<footer>
    <h2>Get In Touch</h2>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <p>GitHub: <a href="https://github.com/yourusername">My GitHub Profile</a></p>
</footer>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Understanding the New Parts:</h5>
            <div>
              <div>
                <p>{`1. <footer>`}</p>
                <p>
                  This is like the last page of a book - it's where you put
                  contact info and final notes
                </p>
              </div>
              <div>
                <p>{`2. <a> (Link)`}</p>
                <p>
                  These are like magical doors - when clicked, they take
                  visitors to your email or social profiles!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>🎉 Congratulations!</h4>
          <p>
            You've built your first webpage! It has all the important parts:
          </p>
          <ul>
            <li>A welcoming header</li>
            <li>Your personal story</li>
            <li>Your growing skills</li>
            <li>Ways to contact you</li>
          </ul>
          <p>
            Remember: Every professional web developer started exactly where you
            are now. Keep practicing and building more! 💪
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebpage;
