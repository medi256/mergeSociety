import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Build Your First Web Page: Event Invitation",
  description:
    "Learn to build your first web page by creating an event invitation using HTML. This beginner-friendly guide covers step-by-step instructions on creating structure, adding event details, and more.",
  keywords: [
    "HTML tutorial",
    "beginner HTML project",
    "HTML event invitation",
    "build a webpage",
    "HTML for beginners",
    "web development tutorial",
    "event invitation web page",
  ],

  openGraph: {
    title: "Build Your First Web Page: Event Invitation",
    description:
      "Create a digital invitation for your event with this easy HTML tutorial for beginners. Step-by-step instructions to help you set up and style your invitation page.",
  },
};

const EventInvitation = () => {
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
          Build Your First Web Page: Event Invitation with HTML: A beginners's
          guide
        </h1>
      </div>

      <h2>Welcome to HTML Event Invitation - Let's Start Building!</h2>
      <h3>👋 Welcome to Your First HTML Project!</h3>

      <p>
        Hey there! Imagine you're planning a birthday party and need to send
        invitations. That's exactly what we're going to create today - but on a
        webpage! We'll build a digital invitation that looks professional and
        works great.
      </p>
      <div>
        <h3>🎯 What Will You Learn?</h3>
        <p>
          Think of HTML like building blocks - each piece has a special purpose.
          By the end of this tutorial, you'll know how to:
        </p>
        <ul>
          <li>
            Create a webpage from scratch (like building the foundation of a
            house)
          </li>
          <li>
            Add headings and paragraphs (like organizing rooms in your house)
          </li>
          <li>Make lists and sections (like arranging furniture)</li>
          <li>
            Add links for emails and phone numbers (like adding a doorbell!)
          </li>
        </ul>
      </div>

      <div>
        <h3>🤔 What Are We Building?</h3>
        <p>We're creating an event invitation page that will include:</p>
        <ul>
          <li>A cool title that grabs attention</li>
          <li>Important event details (when and where)</li>
          <li>A description that gets people excited</li>
          <li>A schedule of activities</li>
          <li>Ways for people to RSVP</li>
        </ul>
      </div>

      <div>
        <h3>👉 Before We Start</h3>
        <p>
          Don't worry if you're completely new to this! We'll go step by step,
          explaining everything in simple terms. It's like following a recipe -
          we'll add one ingredient at a time.
        </p>
        <p>
          If you get stuck or confused at any point, that's totally normal! Feel
          free to go back and review previous steps. Learning to code is like
          learning to ride a bike - it takes practice and patience.
        </p>
      </div>

      <h2>Getting Your Tools Ready</h2>
      <h3>🛠️ Setting Up Your Workspace</h3>

      <div>
        <h3>What Do You Need?</h3>
        <p>
          Just like a chef needs a kitchen to cook, we need a few tools to
          create our webpage:
        </p>
        <ul>
          <li>A computer (any kind will do!)</li>
          <li>A text editor (like VS Code - it's free!)</li>
          <li>A web browser (like Chrome, Firefox, or Edge)</li>
        </ul>
      </div>

      <div>
        <h3>Step-by-Step Setup</h3>
        <p>Let's create a home for our project:</p>

        <div>
          <h4>1. Create a Project Folder</h4>
          <p>Think of this like creating a new folder for your photos:</p>
          <ul>
            <li>
              <strong>On Windows:</strong>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Choose "New"</li>
                <li>Click "Folder"</li>
                <li>Name it "my-invitation"</li>
              </ol>
            </li>
            <li>
              <strong>On Mac:</strong>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Choose "New Folder"</li>
                <li>Name it "my-invitation"</li>
              </ol>
            </li>
          </ul>
        </div>

        <div>
          <h4>2. Get VS Code Ready</h4>
          <p>VS Code is like a special notebook for writing code:</p>
          <ol>
            <li>
              Download VS Code from{" "}
              <a href="https://code.visualstudio.com" target="_blank">
                code.visualstudio.com
              </a>
            </li>
            <li>Install it (just click "Next" through the installer)</li>
            <li>Open VS Code</li>
            <li>Go to File → Open Folder</li>
            <li>Find and select your "my-invitation" folder</li>
          </ol>
        </div>

        <div>
          <h4>3. Create Your First HTML File</h4>
          <p>Now let's create the file where we'll write our code:</p>
          <ol>
            <li>In VS Code, click the "New File" button</li>
            <li>
              Name it "index.html" (this is like the front page of your website)
            </li>
            <li>Click "Create"</li>
          </ol>
        </div>
      </div>

      <div>
        <h3>🎉 Great Job!</h3>
        <p>
          You've just set up your web development workspace! This is like
          preparing your kitchen before cooking - everything is clean and ready
          to go. In the next step, we'll start writing our first HTML code.
        </p>
        <p>
          <strong>Quick Tip:</strong> Keep your folder and files organized -
          it'll make your coding journey much smoother!
        </p>
      </div>

      <h2>Building Your First HTML Page</h2>
      <h3>📝 Let's Write Our First HTML Code!</h3>

      <div>
        <h3>Understanding HTML Structure</h3>
        <p>
          Think of HTML like writing a letter. Just like a letter has a
          greeting, main content, and signature, our HTML page has specific
          parts:
        </p>
        <ul>
          <li>The envelope (DOCTYPE and HTML tags)</li>
          <li>The header (where we put important information)</li>
          <li>The body (where we write our main message)</li>
        </ul>
      </div>

      <div>
        <h3>Your First HTML Code</h3>
        <p>Let's type this code into your index.html file:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Invited! Join Our Amazing Event</title>
</head>
<body>
    <h1>Welcome to Our Event!</h1>
    <p>We're excited to have you join us.</p>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Let's Break This Down:</h4>
          <ul>
            <li>
              <code>!DOCTYPE html</code>: Like telling your computer "Hey, this
              is a webpage!"
            </li>
            <li>
              <code>html lang="en"</code>: We're writing in English
            </li>
            <li>
              <code>head</code>: Think of this as the settings section of your
              page
            </li>
            <li>
              <code>body</code>: This is where your actual content goes - what
              people will see
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>🎯 Try It Out!</h3>
        <ol>
          <li>Copy this code into your index.html file</li>
          <li>Save the file (Ctrl+S or Cmd+S)</li>
          <li>Find your file in your folder and double-click it</li>
          <li>It should open in your web browser!</li>
        </ol>
        <p>
          <strong>Common Problem?</strong> If you see your code instead of a
          webpage, make sure you saved with the .html extension!
        </p>
      </div>

      <h2>Adding Your Event Details</h2>
      <h3>📅 Making Your Invitation Informative</h3>

      <div>
        <h3>Organizing Information</h3>
        <p>
          Just like when you're telling a friend about an event, you need to
          cover the important details: What, When, Where, and Why. Let's add
          this information to our page!
        </p>
      </div>

      <div>
        <h3>Adding Event Details</h3>
        <p>
          Replace the content in your <code>body</code> section with this:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<body>
    <header>
        <!-- Think of this as the top of your invitation -->
        <h1>Annual Tech Conference 2024</h1>
        <p>Join us for a day of learning and fun!</p>
    </header>

    <main>
        <!-- This is like the main part of your letter -->
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
    </main>
</body>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Understanding the New Parts:</h4>
          <ul>
            <li>
              <code>header</code>: Like the banner at the top of a poster
            </li>
            <li>
              <code>main</code>: The main content area (like the body of a
              letter)
            </li>
            <li>
              <code>section</code>: Different parts of your content (like
              paragraphs in a letter)
            </li>
            <li>
              <code>ul</code> and <code>li</code>: Making bullet points (like a
              shopping list)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>💡 Pro Tips:</h3>
        <ul>
          <li>
            Use headings (h1, h2) to organize your content - like chapter titles
            in a book
          </li>
          <li>Keep related information together in sections</li>
          <li>Use lists to make information easy to read</li>
          <li>
            Add emojis to make your page more friendly (optional but fun!)
          </li>
        </ul>
      </div>

      <div>
        <h3>🎯 Practice Time!</h3>
        <p>Try these simple exercises:</p>
        <ol>
          <li>Add another section with "How to Register"</li>
          <li>Create a list of things attendees should bring</li>
          <li>Add your own event description</li>
        </ol>
        <p>
          <strong>Remember:</strong> Save your file and refresh your browser to
          see changes!
        </p>
      </div>

      <h2>Making It Interactive - Adding Links and Contacts</h2>
      <h3>🔗 Adding Ways for People to Respond</h3>

      <div>
        <h3>Making Your Page Interactive</h3>
        <p>
          Now that we have our event details, let's add ways for people to
          contact us - like adding a phone number and email to a party
          invitation!
        </p>
      </div>

      <div>
        <h3>Adding Contact Information</h3>
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
              <code>a href="..."</code>: Creates a clickable link (like a
              doorbell - it does something when clicked!)
            </li>
            <li>
              <code>mailto:</code>: Opens the user's email program
            </li>
            <li>
              <code>tel:</code>: Opens the phone dialer on mobile devices
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>🎯 Try It Yourself:</h3>
        <ol>
          <li>Add your own email address (use a test one!)</li>
          <li>Add more social media links</li>
          <li>Try clicking the links to see what happens</li>
        </ol>
      </div>

      <div>
        <h3>⚠️ Common Mistakes to Avoid:</h3>
        <ul>
          <li>Don't forget the "http://" or "https://" in website links</li>
          <li>Make sure your email has the "mailto:" prefix</li>
          <li>Check that all your tags are properly closed</li>
          <li>Test all links to make sure they work!</li>
        </ul>
      </div>

      <h2>Final Touches and Review</h2>
      <h2>🎨 Adding the Finishing Touches</h2>

      <div>
        <h3>Final Check-Up</h3>
        <p>
          Just like proofreading a letter before sending it, let's make sure
          everything in our webpage is perfect!
        </p>
      </div>

      <div>
        <h3>Complete Code Review</h3>
        <p>Your final code should look something like this:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Invited! - Annual Tech Conference 2024</title>
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
        </section>
    </main>

    <footer>
        <p>© 2024 Tech Conference. All rights reserved.</p>
    </footer>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div>
        <h3>🔍 Final Checklist:</h3>
        <ul>
          <li>All tags are properly opened and closed</li>
          <li>Information is organized in logical sections</li>
          <li>Links are working correctly</li>
          <li>Text is clear and easy to read</li>
          <li>Page looks good in different browsers</li>
        </ul>
      </div>

      <div>
        <h3>🎉 What You've Learned:</h3>
        <ul>
          <li>How to create a basic HTML document</li>
          <li>Using different types of tags (h1, p, ul, etc.)</li>
          <li>Adding links and contact information</li>
          <li>Organizing content in a clear structure</li>
          <li>Basic web development best practices</li>
        </ul>
      </div>

      <div>
        <h3>🚀 Next Steps:</h3>
        <p>Now that you've created your first webpage, you can:</p>
        <ul>
          <li>Customize the content for your own event</li>
          <li>Learn about CSS to make it look prettier</li>
          <li>Add more sections and features</li>
          <li>Share your creation with friends!</li>
        </ul>
        <p>
          <strong>Remember:</strong> Every web developer started just like you -
          with a simple webpage. Keep practicing, and you'll be building amazing
          websites in no time!
        </p>
      </div>
    </div>
  );
};

export default EventInvitation;
