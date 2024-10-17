"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const EventInvitation = () => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Introduction to Event Invitation HTML Page",
      content: (
        <>
          <h2>Welcome to the Event Invitation HTML Tutorial</h2>
          <ScrollToTop />
          <p>
            In this tutorial, we'll guide you through creating an event
            invitation page using only HTML. This project is perfect for
            beginners who want to practice their HTML skills and learn how to
            structure an informative and attractive invitation.
          </p>
          <p>
            By the end of this tutorial, you'll have created an event invitation
            page that includes:
          </p>
          <ul>
            <li>A catchy title for your event</li>
            <li>Key event details (date, time, location)</li>
            <li>A brief description of the event</li>
            <li>An agenda or schedule</li>
            <li>RSVP information</li>
            <li>Contact details for inquiries</li>
          </ul>
          <p>
            This project will help you understand how to use various HTML
            elements to organize information in a clear and appealing way.
          </p>
          <p>Let's get started on building your HTML event invitation page!</p>
        </>
      ),
    },
    {
      title: "Setting Up Your Workspace",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating Your Project Folder</h2>
          <p>
            First, let's set up a workspace for your event invitation project:
          </p>
          <ol>
            <li>
              <strong>Create a New Folder:</strong>
              <ul>
                <li>
                  <strong>On Windows:</strong> Right-click on your desktop,
                  select "New" &gt; "Folder", and name it "event-invitation".
                </li>
                <li>
                  <strong>On Mac:</strong> Right-click on your desktop, select
                  "New Folder", and name it "event-invitation".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  Open your preferred text editor (e.g., VS Code, Notepad++,
                  Sublime Text) and navigate to the "event-invitation" folder.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create the HTML File:</strong>
              <ul>
                <li>
                  Create a new file named "index.html" inside the
                  "event-invitation" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Note:</strong> Using "index.html" as your file name is a
            common practice in web development. It's often the default file that
            web servers look for when accessing a directory.
          </p>
          <p>
            Now that your workspace is ready, let's move on to creating the
            basic HTML structure for your event invitation.
          </p>
        </>
      ),
    },
    {
      title: "Creating the Basic HTML Structure",
      content: (
        <>
          <h2>Setting Up the HTML Document</h2>
          <ScrollToTop />
          <p>
            Let's start by creating the basic structure of our HTML document.
            This will serve as the foundation for our event invitation page.
          </p>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Invited: Annual Tech Conference 2024</title>
</head>
<body>
    <header>
        <h1>Annual Tech Conference 2024</h1>
        <p>Join us for a day of innovation and networking!</p>
    </header>
    
    <main>
        <!-- We'll add our main content here -->
    </main>
    
    <footer>
        <!-- We'll add our footer content here -->
    </footer>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down this HTML structure:</p>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: This declaration tells the
              browser that this is an HTML5 document.
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: The root element of the HTML
              page. The <code>lang="en"</code> attribute specifies that the
              content is in English.
            </li>
            <li>
              <code>&lt;head&gt;</code>: This section contains meta information
              about the document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code>: Specifies the character
              encoding for the document (UTF-8 supports many languages).
            </li>
            <li>
              <code>&lt;meta name="viewport" ...&gt;</code>: This tag ensures
              that the page is displayed correctly on various devices.
            </li>
            <li>
              <code>&lt;title&gt;</code>: Sets the title of the webpage, which
              appears in the browser tab.
            </li>
            <li>
              <code>&lt;body&gt;</code>: This is where we'll add the visible
              content of our invitation.
            </li>
            <li>
              <code>&lt;header&gt;</code>: Contains the main heading and a brief
              introduction.
            </li>
            <li>
              <code>&lt;main&gt;</code>: Will contain the main content of our
              invitation.
            </li>
            <li>
              <code>&lt;footer&gt;</code>: Will contain additional information
              like contact details.
            </li>
          </ul>
          <p>
            Save your file and open it in a web browser. You should see the
            title "Annual Tech Conference 2024" displayed on the page.
          </p>
          <p>In the next step, we'll add the main content of our invitation.</p>
        </>
      ),
    },
    {
      title: "Adding Main Content",
      content: (
        <>
          <ScrollToTop />
          <h2>Filling in the Event Details</h2>
          <p>
            Now that we have our basic HTML structure, let's add the main
            content of our event invitation. We'll include key details about the
            event, an agenda, and RSVP information.
          </p>
          <p>
            Replace the <code>&lt;main&gt;</code> section of your HTML with the
            following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<main>
    <section>
        <h2>Event Details</h2>
        <p><strong>Date:</strong> Saturday, November 15, 2024</p>
        <p><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Location:</strong> TechHub Convention Center, 123 Innovation Street, Silicon Valley, CA 94000</p>
    </section>
    
    <section>
        <h2>About the Event</h2>
        <p>The Annual Tech Conference brings together industry leaders, innovators, and tech enthusiasts for a day of learning, networking, and inspiration. Don't miss this opportunity to stay ahead in the rapidly evolving world of technology!</p>
    </section>
    
    <section>
        <h2>Agenda</h2>
        <ul>
            <li>9:00 AM - 9:30 AM: Registration and Welcome Coffee</li>
            <li>9:30 AM - 10:30 AM: Keynote Speech: "The Future of AI"</li>
            <li>10:45 AM - 12:15 PM: Panel Discussion: "Cybersecurity in the Digital Age"</li>
            <li>12:15 PM - 1:30 PM: Lunch Break and Networking</li>
            <li>1:30 PM - 3:00 PM: Workshop Sessions (choose one):
                <ul>
                    <li>Web Development Trends</li>
                    <li>Introduction to Blockchain</li>
                    <li>UX Design Best Practices</li>
                </ul>
            </li>
            <li>3:15 PM - 4:15 PM: Tech Startup Pitches</li>
            <li>4:15 PM - 5:00 PM: Closing Remarks and Networking</li>
        </ul>
    </section>
    
    <section>
        <h2>RSVP</h2>
        <p>Please confirm your attendance by October 31, 2024.</p>
        <p>Email: <a href="mailto:rsvp@techtalkconf.com">rsvp@techtalkconf.com</a></p>
        <p>Or call: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
    </section>
</main>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down the structure we've added:</p>
          <ul>
            <li>
              We've used multiple <code>&lt;section&gt;</code> elements to
              organize different parts of our content. This helps improve the
              structure and readability of our HTML.
            </li>
            <li>
              The "Event Details" section uses <code>&lt;p&gt;</code> tags with{" "}
              <code>&lt;strong&gt;</code> elements to highlight important
              information.
            </li>
            <li>
              The "Agenda" section uses an unordered list (
              <code>&lt;ul&gt;</code>) to display the schedule. We've even
              included a nested list for the workshop sessions.
            </li>
            <li>
              In the "RSVP" section, we've used <code>&lt;a&gt;</code> tags with{" "}
              <code>mailto:</code> and <code>tel:</code> protocols to create
              clickable email and phone links.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a more complete event invitation with all the key details.
          </p>
          <p>
            In the final step, we'll add a footer to complete our invitation
            page.
          </p>
        </>
      ),
    },
    {
      title: "Adding the Footer and Final Touches",
      content: (
        <>
          <h2>Completing Your Event Invitation</h2>
          <ScrollToTop />
          <p>
            To finish our event invitation page, let's add a footer with some
            additional information and apply a few final touches to improve the
            overall structure.
          </p>
          <p>
            Replace the <code>&lt;footer&gt;</code> section of your HTML with
            the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<footer>
    <h2>Contact Information</h2>
    <address>
        <p>For any inquiries, please contact:</p>
        <p>Event Coordinator: Jane Smith</p>
        <p>Email: <a href="mailto:info@techtalkconf.com">info@techtalkconf.com</a></p>
        <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
    </address>
    <p>&copy; 2024 Annual Tech Conference. All rights reserved.</p>
</footer>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down the new elements we've added:</p>
          <ul>
            <li>
              <code>&lt;address&gt;</code>: This semantic HTML element is used
              to enclose contact information.
            </li>
            <li>
              We've included links for email and phone, similar to the RSVP
              section.
            </li>
            <li>
              The copyright notice at the bottom uses the{" "}
              <code>&amp;copy;</code> entity to display the copyright symbol.
            </li>
          </ul>
          <p>
            Now, let's make a final improvement to our document structure by
            adding some semantic HTML5 elements. Update your{" "}
            <code>&lt;body&gt;</code> tag to look like this:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
    <header>
        <h1>Annual Tech Conference 2024</h1>
        <p>Join us for a day of innovation and networking!</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#details">Event Details</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#rsvp">RSVP</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="details">
            <h2>Event Details</h2>
            <!-- Event details content -->
        </section>
        
        <section id="about">
            <h2>About the Event</h2>
            <!-- About content -->
        </section>
        
        <section id="agenda">
            <h2>Agenda</h2>
            <!-- Agenda content -->
        </section>
        
        <section id="rsvp">
            <h2>RSVP</h2>
            <!-- RSVP content -->
        </section>
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Here's what we've changed:</p>
          <ul>
            <li>
              Added a <code>&lt;nav&gt;</code> section with links to different
              parts of the page.
            </li>
            <li>
              Added <code>id</code> attributes to each section in the{" "}
              <code>&lt;main&gt;</code> content. This allows the navigation
              links to jump to specific sections of the page.
            </li>
          </ul>
          <h3>Congratulations!</h3>
          <p>
            You've successfully created an HTML event invitation page! This
            project has helped you practice:
          </p>
          <ul>
            <li>Creating the structure of an HTML document</li>
            <li>
              Using semantic HTML tags like <code>&lt;header&gt;</code>,{" "}
              <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,{" "}
              <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, and{" "}
              <code>&lt;address&gt;</code>
            </li>
            <li>
              Creating lists (ordered and unordered) to organize information
            </li>
            <li>Using hyperlinks for email and phone contacts</li>
            <li>Adding internal page links for navigation</li>
          </ul>
          <p>
            Feel free to customize this schedule further by adding your own
            classes, changing the time slots, or even adding weekend activities.
            Remember, practice makes perfect in web development!
          </p>
        </>
      ),
    },
  ];

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    }
  };

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
          Creating an Event Invitation Page HTML Tutorial
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#444" }}>
            Step {step + 1}: {tutorialSteps[step].title}
          </h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            {tutorialSteps[step].content}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            style={{
              padding: "10px 20px",
              backgroundColor: step === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: step === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={step === tutorialSteps.length - 1}
            style={{
              padding: "10px 20px",
              backgroundColor:
                step === tutorialSteps.length - 1 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                step === tutorialSteps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            {step === tutorialSteps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;
