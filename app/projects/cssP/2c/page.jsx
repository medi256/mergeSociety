import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Style Your First Blog Post with CSS: A Beginner's Practice Project",
  description:
    "Learn to style your first blog post using CSS! This beginner-friendly project will guide you step-by-step to create a professional-looking, responsive blog post layout.",
  keywords: [
    "CSS tutorial",
    "CSS beginner project",
    "blog post styling",
    "CSS for beginners",
    "learn CSS",
    "web design basics",
  ],

  openGraph: {
    title: "Style Your First Blog Post with CSS",
    description:
      "Master CSS by building your first stylish blog post with this step-by-step tutorial. Perfect for beginners learning web design.",
  },
};

const BlogPostStyling = () => {
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
          Style your first blog post with css: A beginners practice project to
          master CSS
        </h1>
      </div>

      <h2>Welcome to Blog Post Styling! </h2>
      <h3>Let's Make Your First Beautiful Blog Post! 🎨</h3>

      <p>
        Hey there! 👋 Imagine you're decorating your room - you start with empty
        walls and furniture, and then make it look awesome with colors,
        arrangements, and decorations. That's exactly what we're going to do
        with our blog post!
      </p>
      <p>
        <strong>What are we building?</strong> We're going to create a blog post
        that looks professional and is easy to read - just like the articles you
        see on your favorite websites!
      </p>
      <p>Here's what we'll learn step by step:</p>
      <ul>
        <li>
          <strong>The Basic Structure</strong> - Think of this like building the
          frame of a house. We'll create the basic HTML structure that holds
          everything together.
        </li>
        <li>
          <strong>Adding Style</strong> - Just like choosing paint colors and
          furniture for your room, we'll pick fonts, colors, and spacing to make
          our blog post look great.
        </li>
        <li>
          <strong>Making it Look Professional</strong> - We'll add special
          touches like shadows and spacing (it's like adding the final
          decorations to make everything perfect!).
        </li>
        <li>
          <strong>Making it Work Everywhere</strong> - We'll make sure our blog
          post looks great on phones, tablets, and computers (like having
          furniture that fits in any room!).
        </li>
      </ul>
      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>👉 Beginner Tip:</strong> Don't worry if you don't understand
          everything right away! We'll explain each part carefully, and you can
          always go back to review previous steps. Learning to style web pages
          is like learning to cook - you get better with practice!
        </p>
      </div>
      <p>Ready to create something awesome? Let's get started! 🚀</p>

      <h2>Setting Up Your Workspace </h2>
      <h3>Creating Your Project's Home 🏠</h3>
      <p>
        Before we start making our blog post beautiful, we need to set up our
        workspace. Think of this like preparing your kitchen before cooking -
        you want all your tools and ingredients ready!
      </p>
      <div
        className="step-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 1: Create Your Project Folder</h4>
        <p>
          Think of this folder like a container where we'll keep all our project
          files - just like having a special drawer for your art supplies!
        </p>
        <ul>
          <li>
            <strong>On Windows:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New"</li>
              <li>Click "Folder"</li>
              <li>Name it "my-blog-post"</li>
            </ol>
          </li>
          <li>
            <strong>On Mac:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New Folder"</li>
              <li>Name it "my-blog-post"</li>
            </ol>
          </li>
        </ul>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 2: Get Your Text Editor Ready</h4>
        <p>
          A text editor is like your crafting tool - it's where we'll write our
          code. We recommend Visual Studio Code because it's free and
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
            Open VS Code and drag your "my-blog-post" folder into the window
          </li>
        </ol>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 3: Create Your Project Files</h4>
        <p>
          We need two special files - think of them as two pieces of paper where
          we'll write different things:
        </p>
        <ul>
          <li>
            <strong>index.html</strong> - This is like the blueprint of our blog
            post (the structure)
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

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>🎯 Success Check:</strong> At this point, you should have:
        </p>
        <ul>
          <li>A folder named "my-blog-post" on your desktop</li>
          <li>Visual Studio Code open with your folder</li>
          <li>Two empty files: index.html and styles.css</li>
        </ul>
        <p>
          <strong>👉 Need Help?</strong> If something's not working, try closing
          VS Code and opening it again, or create the files using the "File →
          New File" menu.
        </p>
      </div>

      <h2>Building Your Blog Post Structure</h2>
      <h3>Creating Your Blog Post's Framework 🏗️</h3>

      <p>
        Now we're going to build the structure of our blog post! Think of this
        like building a house - we need to put up the walls and roof before we
        can decorate it.
      </p>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 1: Open Your HTML File</h4>
        <p>
          First, open your "index.html" file. This is like opening up your
          notebook to start writing!
        </p>

        <h4>Step 2: Add This Code</h4>
        <p>
          Copy this code into your file - don't worry, we'll explain every part!
          🧩
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome Blog Post</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <article class="blog-post">
      <h1>My First Blog Post</h1>
      <div class="post-meta">
          <span class="date">October 25, 2024</span>
          <span class="author">Written by You!</span>
      </div>
      <p>Welcome to my very first blog post! This is where I'll share my thoughts and ideas with the world.</p>
      <p>I'm learning how to style web pages, and it's really exciting to see how everything comes together!</p>
      <blockquote>
          "The only way to do great work is to love what you do." - Steve Jobs
      </blockquote>
      <p>Let's make this blog post look amazing with CSS!</p>
  </article>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div
        className="explanation-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>🔍 Let's Understand Each Part:</h4>
        <ul>
          <li>
            <strong>DOCTYPE and html tags</strong>: These are like telling your
            browser "Hey, this is a webpage!"
          </li>
          <li>
            <strong>head section</strong>: Think of this as the control center
            of your webpage. It's where we:
            <ul>
              <li>Set the language (charset)</li>
              <li>Make sure phones can show it properly (viewport)</li>
              <li>Connect to our CSS file (link)</li>
            </ul>
          </li>
          <li>
            <strong>body section</strong>: This is where all the content people
            will see goes - like the actual pages in a book
          </li>
          <li>
            <strong>article tag</strong>: It's like a container that holds your
            whole blog post together
          </li>
        </ul>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>💡 Pro Tip:</strong> Try changing the text inside the
          &lt;h1&gt; and &lt;p&gt; tags to write your own blog post! This is
          your space to be creative.
        </p>
      </div>

      <h2>Adding Basic Styles</h2>
      <h3>Making Your Blog Post Beautiful 🎨</h3>
      <p>
        Now comes the fun part - styling! Just like choosing colors and
        decorations for your room, we'll make our blog post look amazing with
        CSS.
      </p>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 1: Basic Styling</h4>
        <p>
          Open your "styles.css" file and add these styles. Think of this as
          your first coat of paint! 🎨
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="css" style={docco}>
              {`/* First, let's make the whole page look nice */
body {
  background-color: #f5f5f5;  /* Light gray background, like a clean canvas */
  margin: 0;
  padding: 20px;
  font-family: 'Arial', sans-serif;  /* Easy to read font */
}

/* Style the main container of our blog post */
.blog-post {
  max-width: 800px;  /* Not too wide, makes reading easier */
  margin: 0 auto;    /* Centers the blog post */
  background-color: white;
  padding: 40px;
  border-radius: 10px;  /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
}`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div
        className="explanation-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>🎨 What Each Style Does:</h4>
        <p>Let's break down each part like ingredients in a recipe:</p>
        <ul>
          <li>
            <strong>background-color</strong>: Like painting the walls of a room
          </li>
          <li>
            <strong>margin & padding</strong>: Creates space around elements,
            like arranging furniture with breathing room
          </li>
          <li>
            <strong>font-family</strong>: Chooses what the text looks like
          </li>
          <li>
            <strong>max-width</strong>: Makes sure lines aren't too long (easier
            to read!)
          </li>
          <li>
            <strong>border-radius</strong>: Makes corners round and friendly
          </li>
          <li>
            <strong>box-shadow</strong>: Adds a subtle shadow to make it pop off
            the page
          </li>
        </ul>
      </div>

      <h2>Styling Text and Headings</h2>
      <h3>Making Your Words Look Great 📝</h3>

      <p>
        Now let's make the text in your blog post look professional and easy to
        read! It's like choosing the perfect font for a special letter.
      </p>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Add These Styles to Your CSS File:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="css" style={docco}>
              {`/* Make the title stand out */
.blog-post h1 {
  color: #2c3e50;          /* Dark blue-gray color */
  font-size: 2.5rem;       /* Nice big size */
  text-align: center;      /* Center the title */
  margin-bottom: 30px;     /* Space below the title */
}

/* Style the date and author info */
.post-meta {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.post-meta span {
  margin: 0 10px;
}

/* Make paragraphs easy to read */
p {
  line-height: 1.6;        /* Space between lines */
  color: #333;            /* Dark gray, not black */
  font-size: 1.1rem;      /* Comfortable reading size */
  margin-bottom: 20px;    /* Space between paragraphs */
}

/* Style the quote */
blockquote {
  border-left: 4px solid #3498db;  /* Blue line on the left */
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f8f9fa;
  font-style: italic;
}`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div
        className="explanation-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>✨ Why These Styles Work:</h4>
        <ul>
          <li>
            <strong>Title (h1)</strong>: We made it big and centered, like a
            headline in a magazine
          </li>
          <li>
            <strong>Line Height</strong>: Like double-spacing in a school paper
            - makes it easier to read!
          </li>
          <li>
            <strong>Colors</strong>: We're not using pure black - softer colors
            are easier on the eyes
          </li>
          <li>
            <strong>Blockquote</strong>: The blue line and background make
            quotes stand out, like highlighting important text
          </li>
        </ul>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>🌈 Try This:</strong> Experiment with different colors! Try
          changing the color values (like #2c3e50) to your favorite colors. Just
          make sure to keep the text readable!
        </p>
      </div>

      <h2>Making It Look Great on All Devices</h2>
      <h3>Making Your Blog Post Phone-Friendly 📱</h3>
      <p>
        Just like a room needs to work for all your visitors, your blog post
        needs to look good on all devices - phones, tablets, and computers!
      </p>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Add This to Your CSS File:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="css" style={docco}>
              {`/* For tablets (screens up to 768px wide) */
@media screen and (max-width: 768px) {
  .blog-post {
      padding: 20px;    /* Less padding on smaller screens */
      margin: 10px;     /* Smaller margins */
  }

  .blog-post h1 {
      font-size: 2rem;  /* Slightly smaller title */
  }
}

/* For phones (screens up to 480px wide) */
@media screen and (max-width: 480px) {
  body {
      padding: 10px;
  }

  .blog-post {
      padding: 15px;
  }

  .blog-post h1 {
      font-size: 1.8rem;
  }

  p {
      font-size: 1rem;
  }

  .post-meta span {
      display: block;    /* Stack date and author on small screens */
      margin: 5px 0;
  }
}`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div
        className="explanation-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>📱 Understanding Responsive Design:</h4>
        <p>
          Think of responsive design like a water balloon - it changes shape to
          fit its container, but it's still the same balloon! Here's what our
          code does:
        </p>
        <ul>
          <li>
            <strong>On Tablets</strong>: Everything gets a bit cozier, like
            rearranging furniture in a smaller room
          </li>
          <li>
            <strong>On Phones</strong>: Text gets a bit smaller and elements
            stack vertically - like turning a wide bookshelf into a tall one!
          </li>
        </ul>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>🔍 Test It Out:</strong> Try resizing your browser window to
          see how your blog post adapts! On a phone, everything should be easy
          to read without zooming or scrolling sideways.
        </p>
      </div>

      <div
        className="celebration-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <h4>🎉 Congratulations!</h4>
        <p>
          You've created a beautiful, professional-looking blog post that works
          on all devices! You've learned about:
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>How to structure content with HTML</li>
          <li>Making things pretty with CSS</li>
          <li>Making text easy to read</li>
          <li>Making your design work everywhere</li>
        </ul>
        <p>
          Feel free to experiment with different colors, fonts, and styles to
          make it your own! Remember, web design is like art - practice makes
          perfect!
        </p>
      </div>
    </div>
  );
};

export default BlogPostStyling;
