import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Build Your First Web Page: Event Invitation | Web Development Tutorial",
  description:
    "Learn to build your first web page by creating an event invitation using HTML. This beginner-friendly guide covers step-by-step instructions on creating structure, adding event details, and more.",
  keywords: [
    "HTML tutorial projects",
    "beginner HTML project",
    "HTML event invitation project",
    "build a webpage",
    "HTML for beginners",
    "web development tutorial",
    "event invitation web page",
    "build HTML projects",
    "HTML practice projects",
    "HTML projects for beginners",
    "HTML projects for students",
    "HTML projects for beginners with code",
    "HTML projects for beginners step by step",
    "HTML projects for beginners with source code",
    "HTML projects for beginners with instructions",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP/6p",
  },

  openGraph: {
    title: "Build Your First Web Page: Event Invitation",
    description:
      "Create a digital invitation for your event with this easy HTML tutorial for beginners. Step-by-step instructions to help you set up and style your invitation page.",
  },
};

const EventInvitation = () => {
  return (
    <div className="project-container">
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          Building Your First Web Page: Event Invitation with HTML
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498445/event_iu3yfu.jpg"
          }
          alt={"HTML Resume Tutorial"}
          width={600}
          height={400}
          className="project-image"
          priority
        />
        <h3 className="project-info">
          <Image
            src={
              "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
            }
            alt={"Personal Website Example"}
            width={600}
            height={400}
            className="founders-image"
            priority
          />
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <span className="project-date">| January 20, 2025</span>
        </h3>

        <h3>Let's Build an Event Invitation Together!</h3>

        <p>
          Imagine you're planning a birthday party and need to send invitations.
          That's exactly what we're going to create today - but on a webpage!
          We'll build a digital invitation that looks professional and works
          great.
        </p>

        <h3>Why Are We Building This?</h3>
        <p>
          Before we jump in, let's understand why this project is great for
          beginners like you:
        </p>
        <ul>
          <li>
            <strong>It's Real-World:</strong> Just like building with LEGO,
            we'll put together different HTML pieces to create something people
            actually use every day!
          </li>
          <li>
            <strong>Perfect for Learning:</strong> You'll learn how to organize
            information (like event details) in a way that makes sense - it's
            like arranging items on a shelf so people can easily find what they
            want.
          </li>
          <li>
            <strong>Great Practice:</strong> You'll use the most common HTML
            tags - think of them as your basic building blocks, like the
            different LEGO pieces you need to build something cool.
          </li>
        </ul>

        <h3>What Will We Create?</h3>
        <p>By the end of this tutorial, you'll have built:</p>
        <ul>
          <li>
            A cool title that grabs attention (like the heading of a birthday
            card)
          </li>
          <li>Important event details (when, where, and what to expect)</li>
          <li>
            A description that gets people excited (like the message inside a
            card)
          </li>
          <li>
            Ways for people to RSVP (like adding a phone number and email)
          </li>
        </ul>

        <div
          className="tip-box"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderLeft: "5px solid #28a745",
            marginTop: "20px",
          }}
        >
          <h4>👋 Beginner's Tip:</h4>
          <p>
            Don't worry if you're new to HTML! We'll explain everything step by
            step, just like following a recipe. If you get stuck, that's totally
            normal - even experienced developers use Google and ask questions
            all the time!
          </p>
        </div>

        <h2>Getting Your Workspace Ready</h2>
        <h3>Setting Up Your Digital Kitchen 👩‍💻</h3>

        <p>
          Before a chef starts cooking, they set up their kitchen with all the
          tools they need. Similarly, we need to set up our "digital kitchen" -
          our workspace where we'll build our invitation!
        </p>

        <h3>Step 1: Creating Your Project Folder</h3>
        <p>
          Think of a project folder like a recipe box where you keep all your
          ingredients and instructions together. Here's how to make one:
        </p>

        <div
          className="windows-instructions"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h4>🪟 If you're using Windows:</h4>
          <ol>
            <li>
              Right-click on your desktop (that's your computer's main screen)
            </li>
            <li>Look for "New" in the menu that pops up</li>
            <li>Click on "Folder"</li>
            <li>Name it "my-event-invitation"</li>
          </ol>
        </div>

        <div
          className="mac-instructions"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h4>🍎 If you're using Mac:</h4>
          <ol>
            <li>Right-click anywhere on your desktop</li>
            <li>Click "New Folder"</li>
            <li>Name it "my-event-invitation"</li>
          </ol>
        </div>

        <h3>Step 2: Getting a Text Editor</h3>
        <p>
          A text editor is like your chef's knife - it's the main tool you'll
          use to create your HTML. We recommend Visual Studio Code (VS Code)
          because:
        </p>
        <ul>
          <li>It's free!</li>
          <li>
            It helps you write code by highlighting things (like spell-check,
            but for code)
          </li>
          <li>
            It can autocomplete stuff for you (like your phone's keyboard
            suggestions)
          </li>
        </ul>

        <div
          className="download-instructions"
          style={{
            backgroundColor: "#e9ecef",
            padding: "15px",
            marginTop: "15px",
          }}
        >
          <h4>📥 How to Get VS Code:</h4>
          <ol>
            <li>
              Go to <code>code.visualstudio.com</code>
            </li>
            <li>Click the big download button</li>
            <li>Install it just like any other program</li>
          </ol>
        </div>

        <h3>Step 3: Creating Your HTML File</h3>
        <p>Now, let's create the file where we'll write our invitation:</p>
        <ol>
          <li>Open VS Code</li>
          <li>Go to File → Open Folder</li>
          <li>Find and select your "my-event-invitation" folder</li>
          <li>Click "Select Folder"</li>
          <li>
            Click the "New File" button (usually looks like a page with a '+'
            sign)
          </li>
          <li>Name it "index.html"</li>
        </ol>

        <div
          className="tip-box"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderLeft: "5px solid #28a745",
            marginTop: "20px",
          }}
        >
          <h4>🤔 Why "index.html"?</h4>
          <p>
            We use "index.html" because it's like the front door of your
            website. When someone visits your website, the browser automatically
            looks for an "index.html" file first - just like how you'd look for
            the front door when visiting a house!
          </p>
        </div>

        <h2>Creating Our Invitation's Foundation</h2>
        <h3>Building the Basic Structure 🏗️</h3>

        <p>
          Just like a building needs a strong foundation, our invitation needs a
          basic HTML structure to build upon. Think of it as the blueprint for
          our digital invitation.
        </p>

        <h3>Step 1: Adding the Document Type Declaration</h3>
        <p>Open your "index.html" file and add the following code:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This line tells the browser that this document is written in HTML5.
        </p>

        <h3>Step 2: Adding the HTML Tag</h3>
        <p>Next, add the following code:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<html lang="en">`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This line starts your HTML document and specifies that the language is
          English.
        </p>

        <h3>Step 3: Adding the Head Section</h3>
        <p>Now, add the following code:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Invitation</title>
</head>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Let's understand each line:</p>
        <ul>
          <li>
            <code>&lt;head&gt;</code> contains meta information about the
            document.
          </li>
          <li>
            <code>&lt;meta charset="UTF-8"&gt;</code> sets the character
            encoding to UTF-8, supporting various languages.
          </li>
          <li>
            <code>
              &lt;meta name="viewport" content="width=device-width,
              initial-scale=1.0"&gt;
            </code>{" "}
            ensures that the invitation looks good on different devices and
            screen sizes.
          </li>
          <li>
            <code>&lt;title&gt;</code> sets the title of the webpage, which
            appears in the browser tab.
          </li>
        </ul>

        <h3>Step 4: Adding the Body Section</h3>
        <p>Finally, add the following code:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<body>
  <header>
    <h1>Annual Tech Conference 2024</h1>
    <p>Join us for a day of learning and fun!</p>
  </header>
  <main>
    <!-- We'll add our event details here soon! -->
  </main>
  <footer>
    <p>© 2024 Tech Conference. All rights reserved.</p>
  </footer>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>What are these for?</p>
        <ul>
          <li>
            <code>&lt;body&gt;</code> is where all the visible content goes
            (like text and images).
          </li>
          <li>
            <code>&lt;header&gt;</code> is the top part of the page, like the
            event's sign.
          </li>
          <li>
            <code>&lt;main&gt;</code> is the main content area, where we'll put
            our event details.
          </li>
          <li>
            <code>&lt;footer&gt;</code> is the bottom part of the page, like the
            event's business card.
          </li>
        </ul>

        <div
          className="try-it-yourself"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Copy the complete structure into your "index.html" file</li>
            <li>Save the file (Ctrl+S on Windows, Cmd+S on Mac)</li>
            <li>
              Open the file in your web browser (double-click the file, or drag
              it into your browser)
            </li>
          </ol>
          <p>
            You should see "Annual Tech Conference 2024" at the top of a mostly
            blank page. That's perfect! We'll add the exciting details in the
            next steps.
          </p>
        </div>

        <h2>Adding Event Details</h2>
        <h3>Making Your Invitation Informative 📅</h3>

        <p>
          Just like when you're telling a friend about an event, you need to
          cover the important details: What, When, Where, and Why. Let's add
          this information to our page!
        </p>

        <h3>Step 1: Adding Event Details</h3>
        <p>
          Replace the content in your <code>&lt;main&gt;</code> section with
          this:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<main>
  <section>
    <h2>Event Details ℹ️</h2>
    <p>When: Saturday, November 15, 2024</p>
    <p>Time: 9:00 AM - 5:00 PM</p>
    <p>Where: TechHub Center, 123 Learn Street</p>
  </section>

  <section>
    <h2>What to Expect 🎯</h2>
    <p>Get ready for an amazing day filled with:</p>
    <ul>
      <li>Exciting presentations</li>
      <li>Hands-on workshops</li>
      <li>Networking opportunities</li>
      <li>Free lunch and snacks</li>
    </ul>
  </section>
</main>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Understanding the New Parts:</h4>
          <ul>
            <li>
              <code>&lt;section&gt;</code> is used to group related content
              together.
            </li>
            <li>
              <code>&lt;h2&gt;</code> is a heading tag, used for section titles.
            </li>
            <li>
              <code>&lt;p&gt;</code> is a paragraph tag, used for blocks of
              text.
            </li>
            <li>
              <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> are used to
              create bullet points.
            </li>
          </ul>
        </div>

        <h3>💡 Pro Tips:</h3>
        <ul>
          <li>
            Use headings (h1, h2) to organize your content - like chapter titles
            in a book.
          </li>
          <li>Keep related information together in sections.</li>
          <li>Use lists to make information easy to read.</li>
          <li>
            Add emojis to make your page more friendly (optional but fun!)
          </li>
        </ul>

        <div
          className="try-it-yourself"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <h4>👉 Try It Out!</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see the event details and what to expect sections.
          </p>
        </div>

        <h2>Making It Interactive - Adding Links and Contacts</h2>
        <h3>🔗 Adding Ways for People to Respond</h3>

        <p>
          Now that we have our event details, let's add ways for people to
          contact us - like adding a phone number and email to a party
          invitation!
        </p>

        <h3>Step 1: Adding Contact Information</h3>
        <p>Add this new section to your page:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<section>
  <h2>RSVP and Contact Us 📫</h2>
  
  <!-- Links for easy contact -->
  <p>Ready to join us? Let us know!</p>
  <p>
    Email us: 
    <a href="mailto:event@example.com">event@example.com</a>
  </p>
  <p>
    Call us: 
    <a href="tel:+1234567890">123-456-7890</a>
  </p>

  <!-- Social media links -->
  <h3>Follow us for updates:</h3>
  <ul>
    <li>
      <a href="https://twitter.com/example">Twitter</a>
    </li>
    <li>
      <a href="https://facebook.com/example">Facebook</a>
    </li>
  </ul>
</section>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Understanding Links:</h4>
          <ul>
            <li>
              <code>&lt;a href="..."&gt;</code> creates a clickable link.
            </li>
            <li>
              <code>mailto:</code> opens the user's email program.
            </li>
            <li>
              <code>tel:</code> opens the phone dialer on mobile devices.
            </li>
          </ul>
        </div>

        <div
          className="try-it-yourself"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Add your own email address (use a test one!)</li>
            <li>Add more social media links</li>
            <li>Try clicking the links to see what happens</li>
          </ol>
        </div>

        <h3>⚠️ Common Mistakes to Avoid:</h3>
        <ul>
          <li>Don't forget the "http://" or "https://" in website links</li>
          <li>Make sure your email has the "mailto:" prefix</li>
          <li>Check that all your tags are properly closed</li>
          <li>Test all links to make sure they work!</li>
        </ul>

        <h2>Final Touches and Review</h2>
        <h2>🎨 Adding the Finishing Touches</h2>

        <p>
          Just like proofreading a letter before sending it, let's make sure
          everything in our webpage is perfect!
        </p>

        <h3>Final Checklist</h3>
        <div
          className="checklist"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h4>Check These Things:</h4>
          <ul>
            <li>
              ✅ Does your invitation have all the necessary sections (event
              details, what to expect, contact information)?
            </li>
            <li>✅ Are all your links working correctly?</li>
            <li>✅ Is the text clear and easy to read?</li>
            <li>
              ✅ Does everything look good on both your computer and phone?
            </li>
          </ul>
        </div>

        <h3>Adding the Final Professional Touches</h3>
        <p>
          Let's add some information at the bottom of your invitation (in the
          footer):
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<footer>
  <div class="event-info">
    <h3>Visit Us</h3>
    <p>123 Tech Street, Learning City, LC 12345</p>
    <p>Phone: (555) 123-4567</p>
    <p>Open Daily: 9:00 AM - 9:00 PM</p>
  </div>
  <div class="social-media">
    <p>Follow us on social media for updates and more events!</p>
    <p>@TechConference</p>
  </div>
  <p class="copyright">© 2024 Tech Conference. All rights reserved.</p>
</footer>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h3>Common Problems and Solutions</h3>
        <div className="troubleshooting" style={{ marginTop: "20px" }}>
          <h4>If Things Don't Look Right:</h4>
          <ul>
            <li>
              <strong>Problem:</strong> Text is too big/small
              <strong>Solution:</strong> Check your font-size in the style
              section
            </li>
            <li>
              <strong>Problem:</strong> Links don't work
              <strong>Solution:</strong> Make sure your href attributes are
              correct
            </li>
            <li>
              <strong>Problem:</strong> Sections are not aligned
              <strong>Solution:</strong> Check your HTML structure and ensure
              all tags are properly nested
            </li>
          </ul>
        </div>

        <h2>Testing Your Code</h2>
        <h3>Verifying Your Work</h3>

        <p>Here's the complete HTML code for your event invitation:</p>

        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Invitation</title>
</head>
<body>
  <header>
    <h1>Annual Tech Conference 2024</h1>
    <p>Join us for a day of learning and fun!</p>
  </header>
  <main>
    <section>
      <h2>Event Details ℹ️</h2>
      <p>When: Saturday, November 15, 2024</p>
      <p>Time: 9:00 AM - 5:00 PM</p>
      <p>Where: TechHub Center, 123 Learn Street</p>
    </section>
    <section>
      <h2>What to Expect 🎯</h2>
      <p>Get ready for an amazing day filled with:</p>
      <ul>
        <li>Exciting presentations</li>
        <li>Hands-on workshops</li>
        <li>Networking opportunities</li>
        <li>Free lunch and snacks</li>
      </ul>
    </section>
    <section>
      <h2>RSVP and Contact Us 📫</h2>
      <p>Ready to join us? Let us know!</p>
      <p>Email: <a href="mailto:event@example.com">event@example.com</a></p>
      <p>Call: <a href="tel:+1234567890">123-456-7890</a></p>
      <h3>Follow us for updates:</h3>
      <ul>
        <li><a href="https://twitter.com/example">Twitter</a></li>
        <li><a href="https://facebook.com/example">Facebook</a></li>
      </ul>
    </section>
  </main>
  <footer>
    <div class="event-info">
      <h3>Visit Us</h3>
      <p>123 Tech Street, Learning City, LC 12345</p>
      <p>Phone: (555) 123-4567</p>
      <p>Open Daily: 9:00 AM - 9:00 PM</p>
    </div>
    <div class="social-media">
      <p>Follow us on social media for updates and more events!</p>
      <p>@TechConference</p>
    </div>
    <p class="copyright">© 2024 Tech Conference. All rights reserved.</p>
  </footer>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div
          className="try-it-yourself"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Make sure your code looks the same as that one</li>
            <li>Save the file (Ctrl+S on Windows, Cmd+S on Mac)</li>
            <li>
              Open the file in your web browser (double-click the file, or drag
              it into your browser)
            </li>
          </ol>
          <p>
            You should see the complete event invitation with all sections,
            details, and links working correctly.
          </p>
        </div>

        <div
          className="congratulations"
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <h3>🎉 Congratulations!</h3>
          <p>
            You've built your first complete web page! This invitation isn't
            just a practice project - it's a real-world example of what you
            might create for an actual event. You've learned:
          </p>
          <ul>
            <li>How to structure content with HTML</li>
            <li>How to organize information in a clear way</li>
            <li>How to add links and contact information</li>
            <li>
              How to make your content look professional and user-friendly
            </li>
          </ul>
          <p>Feel free to customize this invitation further by:</p>
          <ul>
            <li>Adding more sections and details</li>
            <li>Changing the event name and details</li>
            <li>Adding images to make it more visually appealing</li>
            <li>Experimenting with different styles and layouts</li>
          </ul>
          <p>
            Keep practicing and exploring HTML. The more you build, the more
            comfortable you'll become with creating amazing web content!
          </p>
        </div>
      </article>
      <h3>Recommended</h3>
      <HtmlProjectssssssss />
    </div>
  );
};

export default EventInvitation;

export const HtmlProjectssssssss = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "1p",
      title: "Create a Personal Profile Page Using HTML",
      description:
        "Learn how to build a simple personal profile page using only HTML. This project covers essential HTML elements like headings, paragraphs, lists, and links. Perfect for beginners who want to practice structuring web pages.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736496972/resume_l9lnxg.jpg",
      alt: "Personal Profile Page Example",
      date: "January 15, 2025",
    },
    {
      id: "2p",
      title: "Build a Professional Resume with HTML",
      description:
        "Design a structured and professional resume using HTML. This project teaches you how to use tables, lists, and semantic HTML tags to represent work experience, skills, and education. Great for showcasing your HTML skills!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497289/portfolio_zv717y.jpg",
      alt: "HTML Resume Example",
      date: "January 20, 2025",
    },
    {
      id: "3p",
      title: "Create a Weekly Schedule with HTML Tables",
      description:
        "Master HTML tables by creating a weekly schedule. This project demonstrates how to use table rows, columns, and headers to organize information effectively. Ideal for beginners learning HTML structure.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497470/skedule_le1iyh.jpg",
      alt: "Weekly Schedule Example",
      date: "January 25, 2025",
    },

    {
      id: "4p",
      title: "Design a Restaurant Menu Using Semantic HTML",
      description:
        "Create a restaurant menu using semantic HTML elements like sections, articles, and lists. This project focuses on organizing content with proper HTML structure and accessibility. Perfect for advanced learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497900/restuarat_p5vq9d.jpg",
      alt: "Restaurant Menu Example",
      date: "February 1, 2025",
    },
    {
      id: "5p",
      title: "Build a Photo Gallery with HTML",
      description:
        "Learn how to create a static photo gallery using HTML image tags and captions. This project emphasizes the use of alt attributes for accessibility and proper image embedding. Great for practicing HTML media elements!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "Photo Gallery Example",
      date: "February 5, 2025",
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
            <article className="post-card">
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
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};
