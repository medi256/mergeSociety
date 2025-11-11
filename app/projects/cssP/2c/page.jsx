import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import Image from "next/image";
import Link from "next/link";
import "../cp.css";

export const metadata = {
  title: "Style a Blog Post with CSS",
  description:
    "A beginner-friendly tutorial on how to style a simple blog post using CSS. Learn to apply font families, text colors, and adjust line height and spacing to enhance readability.",
  keywords: [
    "beginner  css projects",
    "css projects",
    "css projects for  beginners",
    "css projects for practice",
    "css styling projects",
    "css layout projects",
    "css blog post",
    "css blog post styling",
    "css blog post design",
    "css blog post layout",
    "css blog post tutorial",
    "css blog post example",
    "css blog post project",
    "css blog post template",
    "learn to css a blog with css",
    "style a blog post with css",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/2c",
  },
  openGraph: {
    title: "Style a Blog Post with CSS",
    description:
      "Learn to style a simple blog post using CSS. Enhance readability with font families, text colors, and line height adjustments.",
  },
};

const BlogPost = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>Style a Blog Post with CSS: beginner-friendly tutorial</h1>

        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-01-5">
            | January 5, 2025
          </time>
        </h2>

        <p>
          Styling a blog post is a fundamental skill for web developers. In this
          tutorial, we'll guide you through the process of creating a simple
          blog post using HTML and CSS. You'll learn how to apply font families,
          text colors, and adjust line height and spacing to enhance
          readability.
        </p>
        <p>
          By the end of this tutorial, you'll have a well-styled blog post that
          you can use as a template for your own blog or website.
        </p>

        <h2>Setting Up Your Workspace</h2>

        <h3>Installing a Text Editor</h3>
        <p>
          For this tutorial, we'll be using Visual Studio Code (VS Code), a free
          and popular code editor. Here's how you can install it:
        </p>
        <ol>
          <li>
            Go to the Visual Studio Code website and click the "Download"
            button.
          </li>
          <li>
            Choose the version for your operating system (Windows, Mac, or
            Linux) and follow the installation instructions.
          </li>
        </ol>
        <p>
          Visual Studio Code is a powerful text editor that provides features
          like syntax highlighting, code completion, and integrated debugging,
          which will make your coding experience much more efficient.
        </p>

        <h3>Creating Your Project Folder</h3>
        <p>
          Next, let's create a dedicated folder to keep all your blog post files
          organized:
        </p>
        <ol>
          <li>Open your file explorer (Windows) or Finder (Mac).</li>
          <li>
            Navigate to your Documents folder (or any other location you
            prefer).
          </li>
          <li>{`Right-click in an empty space and select "New > Folder".`}</li>
          <li>Name the folder "my-blog-post" and press Enter.</li>
        </ol>
        <p>
          Having a separate folder for your blog post project will help you stay
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
          <li>
            Find and select your "my-blog-post" folder, then click "Open".
          </li>
        </ol>
        <p>
          This will load your project folder in VS Code, allowing you to work on
          your blog post files.
        </p>

        <h3>Creating Your Project Files</h3>
        <p>
          Within your "my-blog-post" folder, we need to create two files:
          index.html and styles.css.
        </p>
        <ol>
          <li>
            In the VS Code file explorer, click the "New File" icon (it looks
            like a page with a + sign).
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
          blog post, while the styles.css file will hold the styling rules.
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
    <title>My Blog Post</title>
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
            to UTF-8, which ensures that your website can display a wide range
            of characters correctly.
          </li>
          <li>
            <code>{`<meta name="viewport" ...>`}</code>: Ensures the page is
            responsive and adapts to different screen sizes.
          </li>
          <li>
            <code>{`<title>My Blog Post</title>`}</code>: Sets the title of the
            webpage, which will be displayed in the browser's tab or window.
          </li>
          <li>
            <code>{`<link rel="stylesheet" href="styles.css">`}</code>: Links
            the CSS file (styles.css) to the HTML, allowing you to apply styles
            to your website.
          </li>
          <li>
            <code>{`<body>`}</code>: Contains the visible content of the
            webpage.
          </li>
        </ul>

        <h3>Step 3: Save Your HTML File</h3>
        <p>
          Press Ctrl + S (Windows) or Command + S (Mac) to save the index.html
          file.
        </p>
        <p>
          This basic HTML structure provides the foundation for your blog post.
          Now, let's start adding content to it.
        </p>

        <h2>Adding Content to Your Blog Post</h2>

        <h3>Step 1: Add the Header Section</h3>
        <p>
          Inside the <code>&lt;body&gt;</code> tags, add the following code:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<header>
    <h1>My First Blog Post</h1>
    <p class="subtitle">Published on October 1, 2023</p>
</header>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This section will include the title of your blog post and the
          publication date.
        </p>
        <ul>
          <li>
            The <code>&lt;h1&gt;</code> tag is used for the main heading, which
            is typically the title of your blog post.
          </li>
          <li>
            The <code>&lt;p&gt;</code> tag with the class="subtitle" attribute
            is used for the publication date.
          </li>
        </ul>

        <h3>Step 2: Add the Blog Post Content</h3>
        <p>Below the header section, add the following code:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<article>
    <section>
        <h2>Introduction</h2>
        <p>
            Welcome to my first blog post. In this post, I'll be discussing the
            importance of web development and how to get started.
        </p>
    </section>
    <section>
        <h2>Why Web Development?</h2>
        <p>
            Web development is a crucial skill in today's digital world. It
            allows you to create interactive and engaging websites that can
            reach a global audience.
        </p>
    </section>
    <section>
        <h2>Getting Started with Web Development</h2>
        <p>
            To get started with web development, you'll need to learn HTML, CSS,
            and JavaScript. These are the fundamental technologies used to build
            web pages.
        </p>
        <ul>
            <li>HTML: Structure of the web page</li>
            <li>CSS: Styling and layout of the web page</li>
            <li>JavaScript: Interactivity and dynamic content</li>
        </ul>
    </section>
    <section>
        <h2>Conclusion</h2>
        <p>
            Web development is a rewarding field with endless possibilities. I
            hope this post has inspired you to start learning and building your
            own web projects.
        </p>
    </section>
</article>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This section will contain the main content of your blog post, divided
          into multiple sections.
        </p>
        <ul>
          <li>
            The <code>&lt;article&gt;</code> tag is used to group the entire
            blog post content.
          </li>
          <li>
            The <code>&lt;section&gt;</code> tags are used to group related
            content within the blog post.
          </li>
          <li>
            The <code>&lt;h2&gt;</code> tags are used for the section headings.
          </li>
          <li>
            The <code>&lt;p&gt;</code> tags are used for the paragraph content.
          </li>
          <li>
            The <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> tags are
            used to display a list of items.
          </li>
        </ul>

        <h3>Step 3: Add a Footer Section</h3>
        <p>Finally, add a footer section for additional information:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<footer>
    <p>Author: Your Name</p>
    <p>Email: your.email@example.com</p>
</footer>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This section will provide a way for readers to get in touch with you.
        </p>
        <ul>
          <li>
            The <code>&lt;footer&gt;</code> tag is used to group the footer
            content at the bottom of the page.
          </li>
          <li>
            The <code>&lt;p&gt;</code> tags are used to display the author's
            name and email.
          </li>
        </ul>

        <h3>Customizing Your Content</h3>
        <p>
          Now that you have the basic structure in place, feel free to customize
          the content to match your personal information:
        </p>
        <ul>
          <li>
            Replace "My First Blog Post" with the actual title of your blog
            post.
          </li>
          <li>Update the publication date to the actual date.</li>
          <li>
            Add or modify the content of each section to reflect your topic.
          </li>
          <li>Update the author's name and email with your own information.</li>
        </ul>
        <p>
          Remember, this is your blog post, so make sure the content reflects
          your unique voice and insights.
        </p>

        <h2>Adding CSS Styling</h2>

        <h3>Step 1: Open Your CSS File</h3>
        <p>Double-click the styles.css file to open it in the editor.</p>

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
    max-width: 800px;
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
            <code>{`color`}</code> are set for the body element, which will
            apply these styles to the entire page.
          </li>
          <li>
            <code>{`max-width`}</code> and <code>{`margin: 0 auto;`}</code>{" "}
            center the content horizontally on the page.
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
            <code>{`h1`}</code> and <code>{`.subtitle`}</code> styles target the
            specific elements within the header.
          </li>
        </ul>

        <h3>Step 4: Style the Blog Post Content</h3>
        <p>Add the following CSS rules to your styles.css file:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="css" style={docco}>
              {`article {
    margin-bottom: 50px;
}

article section {
    margin-bottom: 30px;
}

article h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

article p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 20px;
}

article ul {
    margin-bottom: 20px;
}

article li {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 10px;
}`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          These styles will make your blog post content more readable and
          visually appealing:
        </p>
        <ul>
          <li>
            <code>{`article`}</code> styles target the entire blog post content.
          </li>
          <li>
            <code>{`margin-bottom`}</code> adds some spacing below the blog
            post.
          </li>
          <li>
            <code>{`section`}</code> styles target the individual sections
            within the blog post.
          </li>
          <li>
            <code>{`h2`}</code> styles the section headings.
          </li>
          <li>
            <code>{`p`}</code> styles the paragraph content, setting the font
            size, line height, and color.
          </li>
          <li>
            <code>{`ul`}</code> and <code>{`li`}</code> styles target the list
            items, setting the font size and color.
          </li>
        </ul>

        <h3>Step 5: Style the Footer</h3>
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

footer p {
    margin-bottom: 10px;
}`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          These styles will make your footer section stand out at the bottom of
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
            <code>{`background-color`}</code> and <code>{`color`}</code> give
            the footer a dark blue background and white text.
          </li>
          <li>
            <code>{`border-radius`}</code> rounds the corners of the footer.
          </li>
          <li>
            <code>{`text-align: center;`}</code> centers the content within the
            footer.
          </li>
          <li>
            <code>{`footer p`}</code> styles the footer content, setting the
            margin.
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
            <code>{`line-height`}</code> sets the vertical spacing between lines
            of text.
          </li>
          <li>
            <code>{`font-size`}</code> sets the size of the text.
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
          To ensure your blog post looks great on different devices, follow
          these steps:
        </p>
        <ol>
          <li>
            Open your `index.html` file in a web browser (e.g., Google Chrome).
          </li>
          <li>
            Press F12 (or right-click and select "Inspect") to open the
            browser's Developer Tools.
          </li>
          <li>
            Click the "Toggle device toolbar" icon (it looks like a
            phone/tablet).
          </li>
          <li>
            Try different device sizes to see how your site responds and adjust
            your CSS accordingly.
          </li>
        </ol>
        <p>
          This will allow you to test your blog post on various screen sizes and
          make any necessary adjustments to the CSS to ensure it looks great on
          both desktop and mobile devices.
        </p>

        <h2>Final Code</h2>
        <p>Here is the final code for your blog post:</p>

        <h3>index.html</h3>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog Post</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My First Blog Post</h1>
        <p class="subtitle">Published on October 1, 2023</p>
    </header>

    <article>
        <section>
            <h2>Introduction</h2>
            <p>
                Welcome to my first blog post. In this post, I'll be discussing the
                importance of web development and how to get started.
            </p>
        </section>
        <section>
            <h2>Why Web Development?</h2>
            <p>
                Web development is a crucial skill in today's digital world. It
                allows you to create interactive and engaging websites that can
                reach a global audience.
            </p>
        </section>
        <section>
            <h2>Getting Started with Web Development</h2>
            <p>
                To get started with web development, you'll need to learn HTML, CSS,
                and JavaScript. These are the fundamental technologies used to build
                web pages.
            </p>
            <ul>
                <li>HTML: Structure of the web page</li>
                <li>CSS: Styling and layout of the web page</li>
                <li>JavaScript: Interactivity and dynamic content</li>
            </ul>
        </section>
        <section>
            <h2>Conclusion</h2>
            <p>
                Web development is a rewarding field with endless possibilities. I
                hope this post has inspired you to start learning and building your
                own web projects.
            </p>
        </section>
    </article>

    <footer>
        <p>Author: Your Name</p>
        <p>Email: your.email@example.com</p>
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
    max-width: 800px;
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

/* Blog post content styles */
article {
    margin-bottom: 50px;
}

article section {
    margin-bottom: 30px;
}

article h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

article p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 20px;
}

article ul {
    margin-bottom: 20px;
}

article li {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 10px;
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

footer p {
    margin-bottom: 10px;
}`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h2>Conclusion</h2>
        <p>
          Congratulations! You've now created a simple blog post using HTML and
          CSS. This tutorial has provided you with a solid foundation to build
          upon. Remember, this is just the beginning - you can continue to
          customize and expand your blog post as you learn more.
        </p>
        <p>
          Feel free to experiment with different styles, add more sections, and
          make your blog post truly unique. Happy coding!
        </p>
        <h3>Recommended</h3>
        <CssProjectsss />
      </article>
    </div>
  );
};

export default BlogPost;

export const CssProjectsss = () => {
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
      id: "3c",
      title: "Create a Responsive Navigation Menu",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736577561/cssresume_n7bzyu.jpg",
      alt: "Create a Responsive Navigation Menu",
      date: "January 17, 2025",
      description:
        "Build a responsive navigation menu that works across devices using media queries. This project focuses on layout design and adapting styles for smaller screens.",
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
