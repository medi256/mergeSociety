import AdUnit, { InArticleAdUnit } from "../AdUnit";
import "./html.css";
import { NavLink } from "react-router-dom";
const IntroductionH = () => {

  return (
    <div className="comments-container">
      <AdUnit />
      <h1>Introduction to HTML</h1>
      <p>
        {`Hello World! This course is for everyone interested in the basics of Hypertext Markup Language (HTML) — the very core of every website you visit over internet. HTML is a basic and easy-to-understand language that enables us to build a structured content in interactive web pages. Ok, let's get stuck in and talk about the history, why we do (and should) implement it with other technologies such as CSS & JavaScript to make websites functional.
`}
      </p>

      <h2>A Brief History of HTML</h2>
      <p>
     
Tim Berners-Lee, in the late eighties when he was working at CERN who created HTML ( the European Organization for Nuclear Research) The aim was simple- to find a solution for easy sharing and spreading of the information among researchers. HTML became the standard to markup web documents and many versions have popped up in the time (HTML, HTML+ etc… and current HTML5)

      </p>

      <h2>What is HTML?</h2>
      <p>
      HTML is the most common markup language used for web pages and web applications. It includes rules and properties in the set of tags that differentiates how a web page has defined, what is its structure and content. HTML describes what the web browser must show/say and how to show headings, paragraphs, images, videos or links
      </p>

      <h2>How HTML Works with CSS and JavaScript</h2>
      <p>
      HTML is frequently combined with two other key web technologies: CSS(Cascading Style Sheets) and JavaScript[43]

Make sure you are using HTML in conjunction with another equally important web technologies, CSS (Cascading Style Sheets) and JavaScript fully CSS dictates the look and structure of HTML content, improving easy visualization. While JavaScript provides interactivity on the page (dynamic behaviour, and responsive user interface). HTML CSS JavaScript are building blocks of current web development.
      </p>

      <h2>The Power of HTML: What Can It Do?</h2>
      <p>
        {`
HTML is sematically ubiquitous on the web! enables us to type text, images and videos forms a table and more With HTML you can create, compelling website components organize your site's content; make simple forms for user input and include whatever multimedia content you're interested in. HTML is used by companies and organizations, large or small — to build their sites; websites like Google, Facebook, Amazon (small one is in preparation) are built on HTML.
`}
      </p>
      <InArticleAdUnit />
      <h2>Your HTML Workspace: Setting Up Your Environment</h2>
      <h3>For PC Users</h3>
      <p>
        {`If you want to begin writing HTML, you require a code editor, a particular tool customized for coding purposes. A few code editors exist, however for this course the one we recommend using is Visual Studio Code (or VSCode). It is a free open-source,ble strength, and quite a simple way to churn out code.`}
      </p>
      <ol>
        <li>
          <strong>Download VSCode:</strong> Navigate to the VSCode webpage
          <a href="https://code.visualstudio.com">(visit to download)</a> and get an installer for your OS. The next step is installing VSCode on your computer and you would perform the installation wizard.
        </li>
        <li>
          <strong>Make a New Folder:</strong>Windows Explorer (on Windows) / Finder (on Mac) → Create New Folder for HTML Projects Right click to create and name it whatever you like, or whatever name that says when
        </li>
        <li>
          <strong>Open VSCode:</strong>  Open the VSCode and drag and drop your just created folder at VSCode GUI. Which will set your folder as workspace 

        </li>
        <li>
          <strong>Create Your First HTML File:</strong>{" "}
          {`Open VS code, Go to the left side "Explorer" tab of VsCode This creates a new file for you by clicking the "New File" icon, (or pressing Ctrl+N on Windows/Cmd+N on Mac) and also create a file call: name it "index.html" (the ".html" is important! actually! ) To save your file press Ctrl+S (Windows) or /Cmd+S(Mac) or just click "Save" button.`}
        </li>
        <li>
          <strong>View Your HTML in the Browser:</strong>{" "}
          {`Alright now lets write some minimun html using this View Copy and paste the below code in your "index.html" :


Save the file once more. To see your creation, simply open your file explorer find the folder you created there, right click and then click "open with -> web browser" on the "index.html". You just made and seen your first website!! All you got to do is not memorize the code, in next lessons we will digest each part.
`}
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

      <h3>For Mobile Users</h3>
      <p>
        {`

For mobile devices there are various code editors on iOS and Android that you can use if fact. We would like to see editors with embed browsers. To get started:
`}
      </p>
      <ol>
        <li>
          <strong>Get a Mobile Code Editor:</strong>{" "}
          {` Search for code editor in your device app store and download one with positive review which has built-in browser (example app names : “Dcoder”, “Code Editor” or “Coding Studio”).`}
        </li>
        <li>
          <strong>Create a New File:</strong>{" "}
          {`Launch the app and create a new file. Save it as “index.html” and do not forget to name. `}
        </li>
        <li>
          <strong>Write Your First HTML Code:</strong>{" "}
          {`(Paste Here)- Just copy and past the same HTML code you've pasted earlier into your "index.html" file. Save your changes. `}
        </li>
        <li>
          <strong>View Your HTML in the Browser:</strong>{" "}
          {`Run, or Preview should be in most mobile code editors `}
        </li>
      </ol>
      <AdUnit />
      <h2>{` What is the meaning of ".html" File Extension
`}</h2>
      <p>
        {`Maybe you’re scratching you head right now and thinking, Why are we using ".html" for the HTML? It is a very important extension because it tells the web browser that the file it holds HTML and should be treat like this. Every programming and markup language have its own extensions like ".css" for CSS files, ".js" for Javascript files etc. This makes the content recognizable to both you and your computer in a fraction of a second the next time you see a file.
`}
      </p>

      <p>
        {`This is just an appetizer to your hunger! We will be exploring the various aspects of HTML, and we shall involve with tags, attributes etc on the coming lessons. So let us dive into our adventure to learn secrets of HTML!`}
      </p>
      <h3>
        {`You can watch this video to help you set up your Visual Studio Code if
        you haven't gotten things right.`}
      </h3>
      <video controls width={"300px"}>
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1714906080/myFirstWebsite_baseb1.mov" />
      </video>
      <div className="button-container">
      <NavLink to={"/HTMLcourse/HTMLBasics"} style={{textDecoration:"none", fontSize:"large",color:"#ffc107"}}>
                    <span title="HTML course">Next</span>
                  </NavLink>
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
        {`Ahoy there, future web developer! We will now take a closer look at the core HTML structure and how different kinds of tags play in it for this lesson. Upon completing this section, you should have a firm grasp of the HTML elements and the respective signals they send to your web browser. So, let’s begin`}
      </p>

      <h2>The Building Blocks: HTML Elements</h2>
      <p>
        {`HTML comprises various elements and this elements are what compose any page you visit on internet. These tags are what tell the web browser what to show and how to present the content of each individual element. Think of elements as Lego blocks that together build your website. One of the very simple examples is:`}
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
        {`HTML elements in above code: <htm>l, <head>, < title>,< body>, <h1></h1> and <P>. Every element have its importance and are a part of overall structure of a HTML webpage. `}
      </p>

      <h3>Container Elements and Empty Elements</h3>
      <p>
        {`In HTML there are two primary classes of elements: container elements and empty elements. Container elements have both the opening tag and the closing tag in them and they can have child elements or text portions And empty elements are not followed by a closing tag, used for standalone elements that never hold any text or other elements. Add an < img> tag for example is an empty element and it used to insert an image inside your web page.
`}
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

      <p>{`Let's go through some basic container elements and their purpose:`}</p>

      <ul>
        <li>
          <strong>{`<h1> to <h6>`}:</strong>{" "}
          {`These elements are used for various sized headings. This means <h1> for largest heading and <h6> for the smallest.

 `}
        </li>
        <li>
          <strong>{`<p>`}:</strong>{" "}
          {` to write paragraphs of text This is perfect for blocks of textual content.`}
        </li>
        <li>
          <strong>{`<div>`}:</strong>{" "}
          {`div HTML tag is used for creating a generic container to hold other elements. It is non-semantic but generally applied to lay out css.
`}
        </li>
        <li>
          <strong>{`<ul> and <ol>`}:</strong> these tags are used to create ordered (numbering) and unordered (bulleted) list. These containers are wrapped in these two elements, list items are nested.

        </li>
      </ul>

      <p>
        {`Here are some frequently used empty elements, with their purpose explained:
`}
      </p>

      <ul>
        <li>
          <strong>{`<img>`}:</strong>{" "}
          {` Already discussed, it is the tag to include an image in a webpage. The image source is set with the "src" attribute and the "alt" attributes are used for screen readers as well as when image is not available`}
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
      {<NavLink to={"/HTMLcourse/IntroductionH"} style={{textDecoration:"none",margin:"0 20px",fontSize:"large", color:"#ffc107"}}>
                    <span title="HTML course">Back</span>
                  </NavLink>
           }
            { <NavLink to={"/HTMLcourse/headings"} style={{textDecoration:"none", fontSize:"large",color:"#ffc107"}}>
                    <span title="HTML course">Next</span>
                  </NavLink> }
                  {/* { <button         onClick={() => navigate(-1)}
                  >back</button>
                  <button         onClick={() => navigate(1)}
                  >next</button> } */}
      </div>
    </div>
  );
};
