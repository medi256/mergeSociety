import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import Link from "next/link";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Introduction to HTML | Learn the Basics of HTML for Web Development",
  description:
    "Dive into the fundamentals of HTML with our beginner-friendly guide. Explore the history, structure, and essential role of HTML in web development. Learn how HTML works alongside CSS and JavaScript to create modern websites. Start your HTML journey here!",
  keywords:
    "HTML basics, HTML introduction, learn HTML, HTML for beginners, web development HTML, HTML course, HTML tags, HTML structure, CSS and HTML, HTML tutorial",
  author: "MergeSociety",
  alternates: {
    canonical: "https://www.mergesocietry.com/html/html-introduction",
  },

  openGraph: {
    title:
      "Introduction to HTML | Learn the Basics of HTML for Web Development",
    description:
      "Begin your journey into HTML, the backbone of web development. This guide covers HTML basics, history, and its role with CSS and JavaScript. Perfect for beginners.",
    type: "website",
    siteName: "MergeSociety",
    url: "https://www.mergesocietry.com/html/html-introduction",
  },
};

const HTMLIntroduction = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <section>
          <h1>Introduction to HTML</h1>
          <p>
            Welcome to the exciting world of HTML! In this course, you will
            learn about the fundamentals of Hypertext Markup Language (HTML),
            the backbone of every website you visit on the internet. HTML is a
            simple yet powerful language that allows us to create structured and
            interactive web pages. Let's dive in and explore its history,
            purpose, and how it works alongside other technologies like{" "}
            <Link href={"/css"} passHref>
              CSS
            </Link>{" "}
            and{" "}
            <Link href={"/javascript"} passHref>
              JavaScript
            </Link>{" "}
            to bring websites to life!
          </p>

          <h2>A Brief History of HTML</h2>
          <p>
            HTML was created by Tim Berners-Lee in the late 1980s while he was
            working at CERN, the European Organization for Nuclear Research. The
            goal was to create a system for sharing and distributing information
            among researchers easily. HTML became the standard markup language
            for creating web pages and has evolved over the years with various
            versions, such as HTML+, HTML 2.0, and the current HTML5.
          </p>

          <h2>What is HTML?</h2>
          <p>
            HTML is the standard markup language for creating web pages and web
            applications. It uses a set of tags and attributes to define the
            structure and content of a web page. HTML tells the web browser what
            to display and how to interpret the content, such as headings,
            paragraphs, images, videos, and links.
          </p>

          <h2>How HTML Works with CSS and JavaScript</h2>
          <p>
            HTML is often used alongside two other essential web technologies:{" "}
            <Link href={"/css"} passHref>
              CSS
            </Link>
            (Cascading Style Sheets) and JavaScript. CSS is responsible for the
            styling and layout of the HTML content, making it visually
            appealing.
            <Link href={"/javascript"} passHref>
              JavaScript
            </Link>
            , on the other hand, adds interactivity to the web page, enabling
            dynamic behavior and responsive user interfaces. Together, HTML,
            CSS, and JavaScript form the foundation of modern web development.
          </p>

          <h2>The Power of HTML: What Can It Do?</h2>
          <p>
            HTML is everywhere on the web! It helps us display text, images,
            videos, forms, tables, and much more. With HTML, you can create
            informative web pages, build interactive forms for user input, embed
            multimedia content, and structure your website's content logically.
            Companies and organizations of all sizes rely on HTML to build their
            websites, from small startups to large enterprises like Google,
            Facebook, and Amazon.
          </p>

          <h2>Your HTML Workspace: Setting Up Your Environment</h2>
          <h3>For PC Users</h3>
          <p>
            To start your HTML journey, you'll need a code editor - a special
            program designed for writing and editing code. There are many code
            editors available, but for this course, we recommend using Visual
            Studio Code (also known as VSCode). It's a free, powerful, and
            user-friendly editor that will make your coding experience
            enjoyable.
          </p>
          <ol>
            <li>
              <strong>Download VSCode:</strong> Head over to the VSCode website
              <a href="https://code.visualstudio.com" target="_blank">
                (visit to download)
              </a>{" "}
              and download the installer for your operating system. Install
              VSCode on your computer by following the installation wizard.
            </li>
            <li>
              <strong>Create a New Folder:</strong> Open Windows Explorer or
              Finder (on Mac) and create a new folder for your HTML projects.
              You can name it anything you like, or simply leave it as it is.
            </li>
            <li>
              <strong>Open VSCode:</strong> Launch VSCode and drag and drop your
              new folder into the VSCode window. This will set the folder as
              your workspace.
            </li>
            <li>
              <strong>Create Your First HTML File:</strong> In VSCode, navigate
              to the "Explorer" tab on the left sidebar. Click on the "New File"
              icon (or press Ctrl+N on Windows or Cmd+N on Mac) to create a new
              file. Name it "index.html" (the ".html" extension is important!).
              Save the file by pressing Ctrl+S (Windows) or Cmd+S (Mac) or
              clicking the "Save" icon.
            </li>
            <li>
              <strong>View Your HTML in the Browser:</strong> Now, let's write
              some basic HTML code! Copy and paste the following code into your
              "index.html" file:
              <pre>
                <code>
                  <SyntaxHighlighter language="HTML" style={docco}>
                    {`
<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>This is my first HTML code!</p>
  </body>
</html>
        
        `}
                  </SyntaxHighlighter>
                </code>
              </pre>
              Save the file again. To view your handiwork, open the folder you
              created in your file explorer, find the "index.html" file, and
              drag and drop it into your web browser. Congratulations! You've
              just created and viewed your first website! Don't worry about
              memorizing the code; we'll break down each part in the upcoming
              lessons.
            </li>
          </ol>

          <h3>For Mobile Users</h3>
          <p>
            If you're using a mobile device, there are several code editors
            available on iOS and Android that you can use. We recommend editors
            with built-in browsers for convenience. Here are the steps to get
            started:
          </p>
          <ol>
            <li>
              <strong>Download a Mobile Code Editor:</strong> Search for "code
              editor" on your device's app store and download one with good
              reviews and a built-in browser (e.g., "Dcoder," "Code Editor," or
              "Coding Studio").
            </li>
            <li>
              <strong>Create a New File:</strong> Open the app and create a new
              file. Name it "index.html" and make sure to save it.
            </li>
            <li>
              <strong>Write Your First HTML Code:</strong>
              Copy and paste the same HTML code provided earlier into your
              "index.html" file. Save your changes.
            </li>
            <li>
              <strong>View Your HTML in the Browser:</strong>
              Most mobile code editors will have a "Run" or "Preview" button.
              Tap that button to view your HTML code in the built-in browser. If
              your editor doesn't have a built-in browser, you may need to copy
              the file to a cloud storage service (like Dropbox) and open it
              from there in a mobile browser.
            </li>
          </ol>

          <h2>Understanding the ".html" Extension</h2>
          <p>
            You might be wondering why we use the ".html" extension for our HTML
            files. This extension is essential because it tells the web browser
            that the file contains HTML code and should be interpreted as such.
            Other programming and markup languages have their own extensions,
            like ".css" for CSS files and ".js" for JavaScript files. This helps
            both humans and computers quickly identify the type of content in a
            file.
          </p>

          <p>
            Remember, this is just an introduction to what your appetite! In the
            upcoming lessons, we'll dive deeper into each aspect of HTML,
            exploring tags, attributes, and more. So, get ready to embark on an
            exciting journey as we unlock the secrets of HTML together!
          </p>
          <h3>
            You can watch this video to help you set up your Visual Studio Code
            if you haven't gotten things right.
          </h3>
          <video controls width={"300px"}>
            <source src="https://res.cloudinary.com/dgyofctwi/video/upload/v1762775345/myFirstWebsite_baseb1_dwfd4f.mov" />
          </video>
          <Button whereToGo={"html-basics"} />
        </section>
      </div>
    </div>
  );
};

export default HTMLIntroduction;
