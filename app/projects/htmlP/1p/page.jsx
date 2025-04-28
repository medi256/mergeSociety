import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";
import "../cp.css";

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
    "HTML project tutorial",
    "HTML project for beginners",
    "HTML website project",
    "HTML project ideas for beginners",
    "HTML project examples",
    "HTML project for practice",
    "HTML project for beginners with code",
    "HTML project for beginners step by step",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP/1p",
  },

  openGraph: {
    type: "website",
    title: "Build Your First Website: Step-by-Step HTML Project Tutorial",
    description:
      "Create a personal website from scratch! Complete HTML project tutorial with downloadable code. Perfect for beginners building their first website.",
  },
};

const PersonalWebpage = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
        }}
        className="lesson-container"
      >
        <h1>Build Your First Website: Step-by-Step HTML Project Tutorial</h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736751796/searchengine_d6udik.jpg"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="project-image"
          priority
        />
        <h3 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-01-15">
            | January 15, 2025
          </time>
        </h3>

        <p>
          Hello future web developer! Before we start our exciting journey
          together, let's understand what we're going to create and learn. By
          the end of this guide, you'll have your very own website that looks
          professional and works great!
        </p>

        <h3>What You'll Build</h3>
        <p>
          Think of this website as your digital home. Just like a real house has
          different rooms, your website will have different sections:
        </p>
        <ul>
          <li>A welcoming entrance (header with your name)</li>
          <li>
            A living room where people can learn about you (About Me section)
          </li>
          <li>A trophy room to show your achievements (Skills section)</li>
          <li>A mailbox where people can reach you (Contact section)</li>
        </ul>

        <h3>What You'll Need</h3>
        <ul>
          <li>A computer (any type is fine!)</li>
          <li>About 1-2 hours of your time</li>
          <li>
            A positive attitude - remember, everyone starts as a beginner!
          </li>
        </ul>

        <h2>Part 1: Setting Up Your Workspace 🏗️</h2>

        <h3>Step 1: Creating Your Project Folder</h3>
        <p>
          First, we need to create a special place on your computer for your
          website files. Think of this like creating a new folder for an
          important school project.
        </p>
        <p>For Windows Users:</p>
        <ol>
          <li>Look at your desktop (the main screen of your computer)</li>
          <li>Right-click on any empty space</li>
          <li>Move your mouse to where it says "New"</li>
          <li>Click "Folder"</li>
          <li>Type "my-first-website"</li>
          <li>Press Enter</li>
        </ol>
        <p>For Mac Users:</p>
        <ol>
          <li>Look at your desktop</li>
          <li>Right-click on any empty space (or Control + click)</li>
          <li>Click "New Folder"</li>
          <li>Type "my-first-website"</li>
          <li>Press Return</li>
        </ol>
        <p>Great! Now you have a home for your website files! 🏠</p>

        <h3>Step 2: Getting Your Text Editor</h3>
        <p>
          Now we need a special program to write our code. Think of this like
          getting a really smart notebook that helps you write correctly.
        </p>
        <p>We'll use Visual Studio Code (VS Code) because it's:</p>
        <ul>
          <li>Free (very important!)</li>
          <li>Easy to use (perfect for beginners!)</li>
          <li>Really helpful (it helps you find mistakes)</li>
          <li>Used by professional developers (you're learning real tools!)</li>
        </ul>
        <p>Let's get VS Code:</p>
        <ol>
          <li>Open your web browser (like Chrome, Firefox, or Safari)</li>
          <li>
            Go to:{" "}
            <a href="https://code.visualstudio.com">code.visualstudio.com</a>
          </li>
          <li>Click the big download button</li>
          <li>When it downloads, click the file to install it</li>
          <li>
            Follow the installation steps (just click "Next" if you're unsure)
          </li>
        </ol>

        <h3>Step 3: Creating Your First HTML File</h3>
        <p>Now comes the exciting part - creating your first webpage file!</p>
        <ol>
          <li>Open VS Code (the program you just installed)</li>
          <li>Click "File" at the top</li>
          <li>Click "Open Folder"</li>
          <li>Find and select your "my-first-website" folder</li>
          <li>Click "Select Folder" or "Open"</li>
          <li>
            You might see a message asking if you trust the authors - click
            "Yes"
          </li>
          <li>
            Click the "New File" icon (or press Ctrl+N on Windows, Cmd+N on Mac)
          </li>
          <li>
            Click "File" → "Save" (or press Ctrl+S on Windows, Cmd+S on Mac)
          </li>
          <li>Type "index.html" (this is always the main page of a website)</li>
          <li>Click "Save"</li>
        </ol>
        <p>Congratulations! You've created your first HTML file! 🎉</p>

        <h2>Part 2: Writing Your First HTML Code 📝</h2>

        <h3>Step 1: The Basic Structure</h3>
        <p>
          Let's start with the basic structure of every webpage. We'll add this
          piece by piece so it's easier to understand.
        </p>
        <p>First, type these lines:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<!DOCTYPE html>
<html lang="en">`}
        </SyntaxHighlighter>
        <p>What do these lines mean?</p>
        <ul>
          <li>
            <code>&lt;!DOCTYPE html&gt;</code> is like telling your browser
            "Hey, this is a webpage!"
          </li>
          <li>
            <code>&lt;html lang="en"&gt;</code> starts your webpage and tells
            browsers it's in English
          </li>
        </ul>
        <p>Now add:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
</head>`}
        </SyntaxHighlighter>
        <p>Let's understand each line:</p>
        <ul>
          <li>
            <code>&lt;head&gt;</code> is like the brain of your webpage - it
            contains important information
          </li>
          <li>
            <code>&lt;meta charset="UTF-8"&gt;</code> helps your webpage show
            special characters correctly
          </li>
          <li>
            <code>
              &lt;meta name="viewport" content="width=device-width,
              initial-scale=1.0"&gt;
            </code>{" "}
            makes your website look good on phones and tablets
          </li>
          <li>
            <code>&lt;title&gt;</code> is what people see at the top of their
            browser window
          </li>
        </ul>
        <p>Finally, add:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<body>

</body>
</html>`}
        </SyntaxHighlighter>
        <p>What are these for?</p>
        <ul>
          <li>
            <code>&lt;body&gt;</code> is where all the visible content goes
            (like text and images)
          </li>
          <li>
            <code>&lt;/html&gt;</code> closes your webpage (like closing a book)
          </li>
        </ul>
        <p>Now your complete basic structure looks like this:</p>
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

        <h3>Step 2: Testing Your Page</h3>
        <p>Let's make sure everything is working:</p>
        <ol>
          <li>Save your file (Ctrl+S or Cmd+S)</li>
          <li>Find your file in your folder (my-first-website folder)</li>
          <li>Double-click it</li>
          <li>Your web browser should open with a blank page</li>
        </ol>
        <p>
          Don't worry if the page is blank - that's perfect! It means everything
          is working, and we're ready to add content.
        </p>

        <h2>Part 3: Adding Your Header (The Welcome Sign) 👋</h2>

        <h3>Step 1: Creating the Header Section</h3>
        <p>
          Inside your <code>&lt;body&gt;</code> tags, let's add a welcoming
          header. We'll do this in small steps:
        </p>
        <p>First, add this:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<header>
    <h1>Your Name</h1>
</header>`}
        </SyntaxHighlighter>
        <p>What does this do?</p>
        <ul>
          <li>
            <code>&lt;header&gt;</code> creates a special section at the top of
            your page
          </li>
          <li>
            <code>&lt;h1&gt;</code> makes the biggest heading (like a title)
          </li>
        </ul>
        <p>Now change "Your Name" to your actual name!</p>

        <h3>Step 2: Adding Your Title</h3>
        <p>
          Under your name, let's add what you do. Inside the{" "}
          <code>&lt;header&gt;</code> tags, add:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<header>
    <h1>Your Name</h1>
    <h2>Web Developer in Training</h2>
</header>`}
        </SyntaxHighlighter>
        <p>Understanding this:</p>
        <ul>
          <li>
            <code>&lt;h2&gt;</code> is a smaller heading than{" "}
            <code>&lt;h1&gt;</code>
          </li>
          <li>
            "Web Developer in Training" tells visitors what you're learning
          </li>
          <li>You can change this to anything you want!</li>
        </ul>

        <h2>Part 4: Creating Your About Me Section 👤</h2>

        <h3>Step 1: Setting Up the About Section</h3>
        <p>
          Let's add a section where you can tell visitors about yourself. Under
          your <code>&lt;/header&gt;</code> tag, add:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>About Me</h2>
</section>`}
        </SyntaxHighlighter>
        <p>Why are we doing this?</p>
        <ul>
          <li>
            <code>&lt;section&gt;</code> is like creating a new chapter in your
            website
          </li>
          <li>This helps organize your content neatly</li>
          <li>
            The <code>&lt;h2&gt;</code> shows visitors what this section is
            about
          </li>
        </ul>

        <h3>Step 2: Adding Your Introduction</h3>
        <p>
          Inside your <code>&lt;section&gt;</code> tags, after the{" "}
          <code>&lt;h2&gt;</code>, add:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>About Me</h2>
    <p>Hi there! I'm excited to share my journey into web development.</p>
</section>`}
        </SyntaxHighlighter>
        <p>Understanding this new part:</p>
        <ul>
          <li>
            <code>&lt;p&gt;</code> stands for paragraph
          </li>
          <li>This tag makes your text look neat and properly spaced</li>
          <li>
            Think of <code>&lt;p&gt;</code> tags like paragraphs in a book
          </li>
        </ul>

        <h3>Step 3: Making It Personal</h3>
        <p>Let's add more about you. Add these paragraphs:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>About Me</h2>
    <p>Hi there! I'm excited to share my journey into web development.</p>
    <p>I'm learning how to build websites and loving every minute of it!</p>
    <p>When I'm not coding, I enjoy [write your hobbies here].</p>
</section>`}
        </SyntaxHighlighter>
        <p>Customizing Your About Section:</p>
        <ul>
          <li>Replace the text with your own story</li>
          <li>Add what you like to do</li>
          <li>Share what made you interested in web development</li>
          <li>Keep it friendly and personal!</li>
        </ul>

        <h2>Part 5: Adding Your Skills Section 🌟</h2>

        <h3>Step 1: Creating the Skills Structure</h3>
        <p>
          After your About Me section, let's show what you're learning. Add:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>My Skills</h2>
</section>`}
        </SyntaxHighlighter>

        <h3>Step 2: Creating Your Skills List</h3>
        <p>Inside this section, let's add a list of your skills:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>My Skills</h2>
    <ul>
        <li>HTML Basics</li>
        <li>Learning Web Development</li>
        <li>Problem Solving</li>
    </ul>
</section>`}
        </SyntaxHighlighter>
        <p>What's happening here?</p>
        <ul>
          <li>
            <code>&lt;ul&gt;</code> creates an "unordered list" (with bullet
            points)
          </li>
          <li>
            <code>&lt;li&gt;</code> is for each "list item"
          </li>
          <li>
            Each skill gets its own <code>&lt;li&gt;</code> tag
          </li>
        </ul>

        <h3>Step 3: Personalizing Your Skills</h3>
        <p>You can add more skills! Here's how:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<section>
    <h2>My Skills</h2>
    <ul>
        <li>HTML Basics</li>
        <li>Learning Web Development</li>
        <li>Problem Solving</li>
        <li>Creative Thinking</li>
        <li>Eager to Learn More!</li>
    </ul>
</section>`}
        </SyntaxHighlighter>
        <p>Tips for Your Skills List:</p>
        <ul>
          <li>Start with basic skills you're learning</li>
          <li>Include soft skills (like problem solving)</li>
          <li>Show your enthusiasm to learn</li>
          <li>Be honest - you're just starting!</li>
        </ul>

        <h2>Part 6: Adding Contact Information 📧</h2>

        <h3>Step 1: Creating the Contact Section</h3>
        <p>
          At the bottom of your webpage (before the closing{" "}
          <code>&lt;/body&gt;</code> tag), add:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<footer>
    <h2>Get In Touch</h2>
</footer>`}
        </SyntaxHighlighter>
        <p>
          Why use <code>&lt;footer&gt;</code>?
        </p>
        <ul>
          <li>
            <code>&lt;footer&gt;</code> is a special tag for the bottom of your
            webpage
          </li>
          <li>It's where contact information usually goes</li>
          <li>It helps organize your page structure</li>
        </ul>

        <h3>Step 2: Adding Contact Details</h3>
        <p>
          Inside your <code>&lt;footer&gt;</code>, let's add ways for people to
          reach you:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<footer>
    <h2>Get In Touch</h2>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
</footer>`}
        </SyntaxHighlighter>
        <p>Understanding the new parts:</p>
        <ul>
          <li>
            <code>&lt;a&gt;</code> creates a link
          </li>
          <li>
            <code>href="mailto:"</code> makes it open an email program
          </li>
          <li>Replace "your.email@example.com" with your real email</li>
        </ul>

        <h3>Step 3: Adding Social Links (Optional)</h3>
        <p>If you want, add links to your social profiles:</p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<footer>
    <h2>Get In Touch</h2>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <p>GitHub: <a href="https://github.com/yourusername">My GitHub Profile</a></p>
</footer>`}
        </SyntaxHighlighter>

        <h2>Part 7: The Complete Code 🎯</h2>
        <p>
          Now that we've built everything piece by piece, here's how your
          complete website should look:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>Your Name</h1>
        <h2>Web Developer in Training</h2>
    </header>

    <!-- About Me Section -->
    <section>
        <h2>About Me</h2>
        <p>Hi there! I'm excited to share my journey into web development.</p>
        <p>I'm learning how to build websites and loving every minute of it!</p>
        <p>When I'm not coding, I enjoy [your hobbies here].</p>
    </section>

    <!-- Skills Section -->
    <section>
        <h2>My Skills</h2>
        <ul>
            <li>HTML Basics</li>
            <li>Learning Web Development</li>
            <li>Problem Solving</li>
            <li>Creative Thinking</li>
            <li>Eager to Learn More!</li>
        </ul>
    </section>

    <!-- Contact Section -->
    <footer>
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">My GitHub Profile</a></p>
    </footer>
</body>
</html>`}
        </SyntaxHighlighter>

        <h2>Part 8: Final Steps and Checking Your Work 🔍</h2>

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
          Remember: Every professional web developer started exactly where you
          are now. Be proud of what you've built, and keep practicing! You're
          doing great! 💪
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
        <h3>Recommended</h3>
        <HtmlProjectss />
      </section>
    </div>
  );
};

export default PersonalWebpage;

export const HtmlProjectss = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "2p",
      title: "Build a Professional Resume with HTML",
      description:
        "Design a structured and professional resume using HTML. This project teaches you how to use tables, lists, and semantic HTML tags to represent work experience, skills, and education. Great for showcasing your HTML skills!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497289/portfolio_zv717y.jpg",
      alt: "HTML Resume Example",
      date: "January 17, 2025",
    },
    {
      id: "3p",
      title: "Create a Weekly Schedule with HTML Tables",
      description:
        "Master HTML tables by creating a weekly schedule. This project demonstrates how to use table rows, columns, and headers to organize information effectively. Ideal for beginners learning HTML structure.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736673928/no-code_zdelwk.jpg",
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
