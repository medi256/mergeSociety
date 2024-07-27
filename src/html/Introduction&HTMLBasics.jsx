import AdUnit, { InArticleAdUnit } from "../AdUnit";
import "./html.css";

const IntroductionH = () => {
  return (
    <div className="comments-container">
      <AdUnit />
      <h1>Introduction to HTML</h1>
      <p>
        {`Welcome to the exciting world of HTML! In this course, you will learn
        about the fundamentals of Hypertext Markup Language (HTML), the backbone
        of every website you visit on the internet. HTML is a simple yet
        powerful language that allows us to create structured and interactive
        web pages. Let's dive in and explore its history, purpose, and how it
        works alongside other technologies like CSS and JavaScript to bring
        websites to life!`}
      </p>

      <h2>A Brief History of HTML</h2>
      <p>
        HTML was created by Tim Berners-Lee in the late 1980s while he was
        working at CERN, the European Organization for Nuclear Research. The
        goal was to create a system for sharing and distributing information
        among researchers easily. HTML became the standard markup language for
        creating web pages and has evolved over the years with various versions,
        such as HTML+, HTML 2.0, and the current HTML5.
      </p>

      <h2>What is HTML?</h2>
      <p>
        HTML is the standard markup language for creating web pages and web
        applications. It uses a set of tags and attributes to define the
        structure and content of a web page. HTML tells the web browser what to
        display and how to interpret the content, such as headings, paragraphs,
        images, videos, and links.
      </p>

      <h2>How HTML Works with CSS and JavaScript</h2>
      <p>
        HTML is often used alongside two other essential web technologies: CSS
        (Cascading Style Sheets) and JavaScript. CSS is responsible for the
        styling and layout of the HTML content, making it visually appealing.
        JavaScript, on the other hand, adds interactivity to the web page,
        enabling dynamic behavior and responsive user interfaces. Together,
        HTML, CSS, and JavaScript form the foundation of modern web development.
      </p>

      <h2>The Power of HTML: What Can It Do?</h2>
      <p>
        {`HTML is everywhere on the web! It helps us display text, images, videos,
        forms, tables, and much more. With HTML, you can create informative web
        pages, build interactive forms for user input, embed multimedia content,
        and structure your website's content logically. Companies and
        organizations of all sizes rely on HTML to build their websites, from
        small startups to large enterprises like Google, Facebook, and Amazon.`}
      </p>

      <h2>Your HTML Workspace: Setting Up Your Environment</h2>
      <h3>For PC Users</h3>
      <p>
        {`To start your HTML journey, you'll need a code editor - a special
        program designed for writing and editing code. There are many code
        editors available, but for this course, we recommend using Visual Studio
        Code (also known as VSCode). It's a free, powerful, and user-friendly
        editor that will make your coding experience enjoyable.`}
      </p>
      <ol>
        <li>
          <strong>Download VSCode:</strong> Head over to the VSCode website
          <a href="https://code.visualstudio.com">(visit to download)</a> and
          download the installer for your operating system. Install VSCode on
          your computer by following the installation wizard.
        </li>
        <li>
          <strong>Create a New Folder:</strong> Open Windows Explorer or Finder
          (on Mac) and create a new folder for your HTML projects. You can name
          it anything you like, or simply leave it as it is.
        </li>
        <li>
          <strong>Open VSCode:</strong> Launch VSCode and drag and drop your new
          folder into the VSCode window. This will set the folder as your
          workspace.
        </li>
        <li>
          <strong>Create Your First HTML File:</strong>{" "}
          {`In VSCode, navigate to
          the "Explorer" tab on the left sidebar. Click on the "New File" icon
          (or press Ctrl+N on Windows or Cmd+N on Mac) to create a new file.
          Name it "index.html" (the ".html" extension is important!). Save the
          file by pressing Ctrl+S (Windows) or Cmd+S (Mac) or clicking the
          "Save" icon.`}
        </li>
        <li>
          <strong>View Your HTML in the Browser:</strong>{" "}
          {`Now, let's write some
          basic HTML code! Copy and paste the following code into your
          "index.html" file:`}
          <pre>
            <code>
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
            </code>
          </pre>
          {`Save the file again. To view your handiwork, open the folder you
          created in your file explorer, find the "index.html" file, and drag
          and drop it into your web browser. Congratulations! You've just
          created and viewed your first website! Don't worry about memorizing
          the code; we'll break down each part in the upcoming lessons.`}
        </li>
      </ol>
      <InArticleAdUnit />

      <h3>For Mobile Users</h3>
      <p>
        {`If you're using a mobile device, there are several code editors
        available on iOS and Android that you can use. We recommend editors with
        built-in browsers for convenience. Here are the steps to get started:`}
      </p>
      <ol>
        <li>
          <strong>Download a Mobile Code Editor:</strong>{" "}
          {`Search for "code
          editor" on your device's app store and download one with good reviews
          and a built-in browser (e.g., "Dcoder," "Code Editor," or "Coding
          Studio").`}
        </li>
        <li>
          <strong>Create a New File:</strong>{" "}
          {`Open the app and create a new
          file. Name it "index.html" and make sure to save it.`}
        </li>
        <li>
          <strong>Write Your First HTML Code:</strong>{" "}
          {`Copy and paste the same
          HTML code provided earlier into your "index.html" file. Save your
          changes.`}
        </li>
        <li>
          <strong>View Your HTML in the Browser:</strong>{" "}
          {`Most mobile code
          editors will have a "Run" or "Preview" button. Tap that button to view
          your HTML code in the built-in browser. If your editor doesn't have a
          built-in browser, you may need to copy the file to a cloud storage
          service (like Dropbox) and open it from there in a mobile browser.`}
        </li>
      </ol>
      <AdUnit />
      <h2>{`Understanding the ".html" Extension`}</h2>
      <p>
        {`You might be wondering why we use the ".html" extension for our HTML
        files. This extension is essential because it tells the web browser that
        the file contains HTML code and should be interpreted as such. Other
        programming and markup languages have their own extensions, like ".css"
        for CSS files and ".js" for JavaScript files. This helps both humans and
        computers quickly identify the type of content in a file.`}
      </p>

      <p>
        {`Remember, this is just an introduction to what your appetite! In the
        upcoming lessons, we'll dive deeper into each aspect of HTML, exploring
        tags, attributes, and more. So, get ready to embark on an exciting
        journey as we unlock the secrets of HTML together!`}
      </p>
      <h3>
        {`You can watch this video to help you set up your Visual Studio Code if
        you haven't gotten things right.`}
      </h3>
      <video controls width={"300px"}>
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1714906080/myFirstWebsite_baseb1.mov" />
      </video>
      <div className="button-container">
        <button onClick={() => (window.location.href = "HTMLBasics")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroductionH;

export const HTMLBasics = () => {
  return (
    <div className="comments-container">
      <AdUnit />
      <h1>HTML Basics</h1>
      <p>
        {`Welcome back, aspiring web developer! In this lesson, we'll dive into the
        fundamentals of HTML structure and explore the different types of tags
        that make up the language. By the end of this section, you'll have a
        clear understanding of how HTML elements work and how they tell the web
        browser what to display. Let's get started!`}
      </p>

      <h2>The Building Blocks: HTML Elements</h2>
      <p>
        {`HTML is made up of a series of elements, and these elements are the
        building blocks of any web page. Each element is defined by a specific
        tag, and these tags tell the web browser what to display and how to
        interpret the content. Think of elements as the Lego bricks that come
        together to build a website. Here's a simple example:`}
      </p>
      <pre>
        <code>
          {`
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
       
       `}
        </code>
      </pre>

      <p>
        {`In the above code, we have several HTML elements: <html>,
        <head>, <title>, <body>, <h1>, and <p>. Each
        element serves a specific purpose and contributes to the overall
        structure of the web page.`}
      </p>

      <h3>Container Elements and Empty Elements</h3>
      <p>
        {`There are two main types of HTML elements: container elements and empty
        elements. Container elements have both an opening tag and a closing tag,
        and they can contain other elements or text within them. For example,
        the <body> element is a container element because it can hold
        headings, paragraphs, images, and other content.`}
      </p>

      <pre>
        <code>
          {`
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
    
      `}
        </code>
      </pre>

      <p>
        {`On the other hand, empty elements do not have a closing tag and are
        typically used for standalone elements that don't contain other
        elements or text. For example, the <img> tag is an empty element
        used to embed an image in the web page.`}
      </p>
      <pre>
        <code>
          {`
       
       <img src="image.jpg" alt="Description of the image">
       `}
        </code>
      </pre>

      <p>{`Let's explore some common container elements and their usage:`}</p>

      <ul>
        <li>
          <strong>{`<h1> to <h6>`}:</strong>{" "}
          {`These tags are used for headings
          of different sizes. <h1> represents the largest heading,
          while <h6> represents the smallest.`}
        </li>
        <li>
          <strong>{`<p>`}:</strong>{" "}
          {`This tag is used to create paragraphs of
          text. It's perfect for displaying blocks of text content.`}
        </li>
        <li>
          <strong>{`<div>`}:</strong>{" "}
          {`The <div> tag is a generic container
          used to group other elements together. It doesn't have any specific
          semantic meaning but is often used for layout purposes.`}
        </li>
        <li>
          <strong>{`<ul> and <ol>`}:</strong> These tags are used to create
          unordered (bulleted) and ordered (numbered) lists, respectively. List
          items are nested within these container elements.
        </li>
      </ul>

      <p>
        {`Now, let's take a look at some common empty elements and their usage:`}
      </p>

      <ul>
        <li>
          <strong>{`<img>`}:</strong>{" "}
          {`As mentioned earlier, this tag is used to
          embed images in the web page. The "src" attribute specifies the
          image source, and the "alt" attribute provides alternative text for
          screen readers and when the image cannot be displayed.`}
        </li>
        <li>
          <strong>{`<br>`}:</strong>{" "}
          {`This tag creates a line break, forcing the
          text or content after it to start on a new line. It's an empty tag
          with no closing tag.`}
        </li>
        <li>
          <strong>{`<input>`}:</strong>{" "}
          {`The <input>; tag is used to create
          input fields within forms. It's an empty tag, and the "type" attribute
          specifies the type of input, such as "text," "email," or "password."`}
        </li>
      </ul>
      <InArticleAdUnit />
      <h2>Why Do Elements Have Opening and Closing Tags?</h2>
      <p>
        {`You might be wondering why some elements have both opening and closing
        tags while others don't. The reason lies in the nature of the content
        they contain. Container elements, like <p>; or <div>;,
        typically contain text or other elements, so they need a closing tag to
        indicate where the content ends. On the other hand, empty elements, like
        <img>; or <br>;, perform a specific function and don't
        require any content within them, so they don't need a closing tag.`}
      </p>

      <h2>Putting It All Together</h2>
      <p>
        {`Now that we've explored container and empty elements, let's put it all
        together and create a simple HTML structure. Here's an example of a
        basic HTML document:`}
      </p>
      <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Description of the image">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
`}
        </code>
      </pre>

      <p>
        {`In this example, we have a basic HTML document with a title, a heading,
        a paragraph, an image, and an unordered list. Notice how the container
        elements wrap the content within them, while the empty elements, like
        <img> and <br>, stand alone.`}
      </p>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we explored the fundamental building blocks of HTML - the
        elements. We learned about container elements and empty elements, and
        how they work together to structure a web page. Understanding these
        basics is crucial for creating well-formed and meaningful HTML
        documents. In the next lesson, we'll continue our exploration of HTML
        tags and dive into specific elements and their usage in more detail.
        Stay tuned, and keep practicing!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "IntroductionH")}>
          back
        </button>
        <button onClick={() => (window.location.href = "headings")}>
          Next
        </button>
      </div>
    </div>
  );
};
