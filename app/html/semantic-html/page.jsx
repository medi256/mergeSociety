import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Mastering Semantic HTML: Write Meaningful and Accessible Web Pages",
  description:
    "Learn how to use Semantic HTML effectively to create well-structured, accessible, and SEO-friendly web pages. Explore common semantic elements like <header>, <nav>, <article>, <section>, and more with best practices and practical examples.",
  keywords:
    "Semantic HTML, web development, accessibility, SEO, HTML tags, semantic elements, <header>, <nav>, <article>, best practices, front-end development, coding tutorials",
  openGraph: {
    title:
      "Semantic HTML: A Complete Guide for Structured and Accessible Web Design | YourSiteName",
    description:
      "Dive into the world of Semantic HTML with this comprehensive guide. Learn how to write HTML that improves accessibility, SEO, and code maintainability by using semantic elements like <nav>, <article>, <header>, and more.",
  },
};

const HTMLSemantic = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Semantic HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring Semantic HTML - a
        concept that focuses on the meaning and structure of your HTML code.
        Semantic HTML involves using HTML tags and attributes to convey the
        purpose and significance of your content, making it more accessible and
        understandable to both users and search engines. Let's dive into the
        world of Semantic HTML and learn how to write more meaningful and
        semantic code.
      </p>

      <h2>What Is Semantic HTML?</h2>
      <p>
        Semantic HTML is a way of writing HTML code that emphasizes the meaning
        and purpose of your content. It involves using HTML tags and attributes
        that accurately describe the content they contain. By using Semantic
        HTML, you make your code more readable, accessible, and search engine
        friendly. Semantic HTML helps convey the structure and importance of
        your content to both users and machines.
      </p>

      <h2>Benefits of Semantic HTML</h2>
      <p>Using Semantic HTML offers several benefits:</p>

      <ul>
        <li>
          <strong>Accessibility:</strong> Semantic HTML improves accessibility
          for users with disabilities. Screen readers and assistive technologies
          rely on semantic tags to interpret and convey the content to users who
          cannot see the page visually.
        </li>
        <li>
          <strong>Search Engine Optimization (SEO):</strong> Search engines,
          like Google, use semantic tags to understand the content and structure
          of your web pages. Semantic HTML can help improve your search engine
          rankings and make your content more discoverable.
        </li>
        <li>
          <strong>Code Maintainability:</strong> Semantic HTML makes your code
          more readable and understandable. It becomes easier to maintain and
          update your code when it accurately represents the meaning and purpose
          of the content.
        </li>
        <li>
          <strong>Flexibility and Reusability:</strong> Semantic HTML allows you
          to create more flexible and reusable code. By using semantic tags, you
          can easily style and manipulate specific elements without affecting
          the overall structure.
        </li>
      </ul>

      <h2>Examples of Semantic HTML</h2>
      <p>
        Here are some examples of Semantic HTML in action, along with code
        snippets:
      </p>

      <ul>
        <li>
          <strong>
            Using <code>{`<nav>`}</code> :
          </strong>{" "}
          The <code>{`<nav>`}</code> tag is used to define the navigation
          section of your website, such as the main menu or navigation links. It
          helps users and search engines understand the navigational structure
          of your site.
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
  
    `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>
            Using <code>{`<header>`}</code> and <code>{` <footer>`}</code> :
          </strong>{" "}
          The
          <code>{`<header>`}</code> tag is used to define the header section of
          your web page, typically containing the logo, site title, and
          navigation. The
          <code>{` <footer>`}</code> tag is used for the footer section,
          containing contact information, copyright notices, or additional
          links.
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
</header>

<footer>
  <p>Copyright 2023 My Website. All rights reserved.</p>
</footer>
  
    `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>
            Using <code>{`<article>`}</code> and <code>{`<section>`}</code>:
          </strong>{" "}
          The
          <code>{`<article>`}</code> tag is used to define a self-contained
          piece of content, such as a blog post or news article. The{" "}
          <code>{`<section>`}</code> tag is used to group related content
          together, such as a section within a web page.
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<article>
  <h2>My Blog Post</h2>
  <p>This is the content of my blog post.</p>
</article>

<section>
  <h2>About Me</h2>
  <p>This is a section about me.</p>
</section>
  
    `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ul>
      <AdUnit />
      <h2>Best Practices for Semantic HTML</h2>
      <ul>
        <li>
          <strong>Use semantic tags appropriately:</strong> Choose the right
          semantic tag based on the purpose and meaning of the content. For
          example, use <code>{`<nav>`}</code> for navigation,{" "}
          <code>{`<header>`}</code> for the header section, and{" "}
          <code>{`<article>`}</code> for self-contained articles or blog posts.
        </li>
        <li>
          <strong>Keep content within semantic tags:</strong> Ensure that the
          content within semantic tags accurately represents the meaning and
          purpose of the tag. For instance, use <code>{`<nav>`}</code> only for
          navigation links.
        </li>
        <li>
          <strong>Avoid using semantic tags for styling purposes:</strong>{" "}
          Semantic tags should convey the meaning and structure of your content,
          not just for visual styling.
        </li>
        <li>
          <strong>Be creative and flexible:</strong> Semantic HTML allows you to
          be creative and flexible in your code. Experiment with different
          semantic tags and structures to find the best representation of your
          content.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with using semantic tags, structuring
        your content, and making it more meaningful. Here's a simple exercise to
        get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "semantic.html" in your
          workspace folder.
        </li>
        <li>
          Create a basic structure for a web page using semantic tags, such as
          <code>{`<header>`}</code>, <code>{`<nav>`}</code>,{" "}
          <code>{`<main>`}</code>, <code>{`<article>`}</code>, and
          <code>{`<footer>`}</code>. Be creative and structure your content in a
          meaningful way.
        </li>
        <li>
          Try adding your own content within the semantic tags. For instance,
          create a blog post using the <code>{`<article>`}</code> tag and
          structure it with headings, paragraphs, and images.
        </li>
      </ol>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've explored Semantic HTML, including its purpose,
        benefits, and best practices. Semantic HTML helps make your code more
        meaningful, accessible, and search engine friendly. Remember to use
        semantic tags wisely, be creative, and always test your code to ensure
        it provides a great user experience. In the next lesson, we'll continue
        our journey by exploring the Head element and all other elements found
        in the head element. Stay tuned, and happy coding!
      </p>

      <Button whereToGo={"html-tables"} />
    </div>
  );
};

export default HTMLSemantic;
