import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Designing an Advanced Pricing Table with CSS Grid ",
  description:
    "Learn how to create a fully responsive, advanced pricing table using CSS Grid. This beginner-friendly tutorial covers HTML structure, styling, and responsiveness.",
  keywords: [
    "CSS Grid",
    "css grid project",
    "responsive design",
    "HTML",
    "CSS tutorial",
    "web development",
    "CSS for beginners",
    "grid layout tutorial",
    "responsive layout",
    "web design",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/cssP/4c",
  },

  openGraph: {
    title: "Designing an Advanced Pricing Table with CSS Grid",
    description:
      "This step-by-step guide teaches you how to build a stylish, responsive pricing table using CSS Grid. Perfect for beginners and developers looking to enhance their CSS skills.",
  },
};

const AdvancedPricingTable = () => {
  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Designing an Advanced Pricing Table with CSS Grid
        </h1>
      </div>

      <h2>Introduction to Advanced Pricing Tables</h2>
      <h3>Welcome to Designing an Advanced Pricing Table with CSS Grid!</h3>

      <p>
        In this project, we'll create a fully responsive pricing table using CSS
        Grid. A well-designed pricing table is essential for showcasing
        different pricing plans on a website, ensuring that it looks great on
        various devices, from desktops to mobile phones.
      </p>
      <p>Here's what we'll cover in this tutorial:</p>
      <ul>
        <li>Setting up the HTML structure for the pricing table.</li>
        <li>Applying basic styling to the table components.</li>
        <li>Using CSS Grid for layout and responsiveness.</li>
        <li>Adding hover effects for interactivity.</li>
        <li>Making the pricing table responsive for different screen sizes.</li>
      </ul>
      <p>
        By the end of this project, you'll have a fully functional and
        responsive pricing table. Let's get started by setting up our project
        files!
      </p>

      <h2> Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>Before we start coding, let's set up a workspace for our project:</p>
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
              <li>Choose "New" &gt; "Folder"</li>
              <li>Name it "advanced-pricing-table"</li>
            </ol>
          </li>
          <li>
            <strong>On Mac:</strong>
            <ol>
              <li>Right-click on your desktop</li>
              <li>Choose "New Folder"</li>
              <li>Name it "advanced-pricing-table"</li>
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
            Open VS Code and drag your "advanced-pricing-table" folder into the
            window
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
            <strong>index.html</strong> - This is like the blueprint of our
            pricing table (the structure)
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
          <li>A folder named "advanced-pricing-table" on your desktop</li>
          <li>Visual Studio Code open with your folder</li>
          <li>Two empty files: index.html and styles.css</li>
        </ul>
        <p>
          <strong>👉 Need Help?</strong> If something's not working, try closing
          VS Code and opening it again, or create the files using the "File →
          New File" menu.
        </p>
      </div>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Pricing Table HTML</h3>

      <p>
        Before we dive into CSS, let's set up the HTML structure for our pricing
        table:
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Pricing Table HTML:</strong> Copy and paste the
          following code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced Pricing Table</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="pricing-table">
    <div class="plan">
      <div class="plan-header">
        <h3>Basic</h3>
        <span class="price">$9.99</span>
      </div>
      <ul class="plan-features">
        <li>10 GB Storage</li>
        <li>100 GB Bandwidth</li>
        <li>2 Domains</li>
        <li>Email Support</li>
      </ul>
      <button>Sign Up</button>
    </div>
    <div class="plan">
      <div class="plan-header">
        <h3>Pro</h3>
        <span class="price">$19.99</span>
      </div>
      <ul class="plan-features">
        <li>50 GB Storage</li>
        <li>500 GB Bandwidth</li>
        <li>10 Domains</li>
        <li>Priority Email Support</li>
      </ul>
      <button>Sign Up</button>
    </div>
    <div class="plan">
      <div class="plan-header">
        <h3>Premium</h3>
        <span class="price">$29.99</span>
      </div>
      <ul class="plan-features">
        <li>100 GB Storage</li>
        <li>1 TB Bandwidth</li>
        <li>Unlimited Domains</li>
        <li>24/7 Phone Support</li>
      </ul>
      <button>Sign Up</button>
    </div>
  </div>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the HTML structure:</p>
      <ul>
        <li>
          <code>&lt;div class="pricing-table"&gt;</code>: Represents the entire
          pricing table.
        </li>
        <li>
          <code>&lt;div class="plan"&gt;</code>: Represents each pricing plan.
        </li>
        <li>
          <code>&lt;div class="plan-header"&gt;</code>: Contains the title and
          price of the plan.
        </li>
        <li>
          <code>&lt;ul class="plan-features"&gt;</code>: Contains the list of
          features for the plan.
        </li>
        <li>
          <code>&lt;button&gt;</code>: Represents the "Sign Up" button for each
          plan.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll start applying CSS styles to our pricing
        table.
      </p>

      <h2>Styling the Body</h2>
      <h3>Styling the Body</h3>
      <p>
        Let's start by styling the body of our HTML document to ensure a
        consistent and clean layout.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Body Styles:</strong> Copy and paste the following CSS
          code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>font-family: Arial, sans-serif;</code>: Sets the default font
          for the entire page.
        </li>
        <li>
          <code>margin: 0;</code>: Removes the default margin from the body.
        </li>
        <li>
          <code>padding: 0;</code>: Removes the default padding from the body.
        </li>
        <li>
          <code>box-sizing: border-box;</code>: Ensures that the padding and
          border are included in the element's total width and height.
        </li>
        <li>
          <code>background-color: #f4f4f4;</code>: Sets the background color of
          the body to a light gray.
        </li>
        <li>
          <code>display: flex;</code>: Uses flexbox to center the content.
        </li>
        <li>
          <code>justify-content: center;</code>: Horizontally centers the
          content.
        </li>
        <li>
          <code>align-items: center;</code>: Vertically centers the content.
        </li>
        <li>
          <code>height: 100vh;</code>: Sets the height of the body to the full
          viewport height.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the basic layout applied to your page.
      </p>
      <p>In the next step, we'll style the pricing table container.</p>

      <h2>Styling the Pricing Table Container</h2>
      <h3>Styling the Pricing Table Container</h3>

      <p>
        Now, let's style the pricing table container to give it a clean and
        modern look.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Pricing Table Container Styles:</strong> Copy and paste
          the following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.pricing-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>display: grid;</code>: Uses CSS Grid to layout the pricing
          plans.
        </li>
        <li>
          <code>grid-template-columns: repeat(3, 1fr);</code>: Creates three
          equal-width columns for the pricing plans.
        </li>
        <li>
          <code>gap: 20px;</code>: Adds a 20px gap between the pricing plans.
        </li>
        <li>
          <code>width: 90%;</code>: Sets the width of the container to 90% of
          the parent element.
        </li>
        <li>
          <code>max-width: 1200px;</code>: Sets the maximum width of the
          container to 1200px.
        </li>
        <li>
          <code>padding: 20px;</code>: Adds padding to the container for
          spacing.
        </li>
        <li>
          <code>background-color: #fff;</code>: Sets the background color of the
          container to white.
        </li>
        <li>
          <code>border-radius: 10px;</code>: Rounds the corners of the
          container.
        </li>
        <li>
          <code>box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);</code>: Adds a subtle
          shadow to the container.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled pricing table container.
      </p>
      <p>In the next step, we'll style the individual pricing plans.</p>

      <h2>Styling the Pricing Plans</h2>
      <h3>Styling the Pricing Plans</h3>
      <p>
        Now, let's style the individual pricing plans to make them visually
        appealing and easy to read.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Pricing Plan Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.plan {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.plan-header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 20px;
}

.plan-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.plan-header .price {
  font-size: 2rem;
  font-weight: bold;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.plan-features li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #555;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.plan button:hover {
  background-color: #0056b3;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.plan</code>: Styles the individual pricing plans with a white
          background, rounded corners, padding, shadow, and centered text.
        </li>
        <li>
          <code>.plan-header</code>: Styles the header of the pricing plan with
          a blue background, white text, padding, and rounded top corners.
        </li>
        <li>
          <code>.plan-header h3</code>: Styles the title of the pricing plan
          with a larger font size and no margin.
        </li>
        <li>
          <code>.plan-header .price</code>: Styles the price of the pricing plan
          with a larger font size and bold weight.
        </li>
        <li>
          <code>.plan-features</code>: Styles the list of features with no list
          style, padding, or margin.
        </li>
        <li>
          <code>.plan-features li</code>: Styles the individual features with
          padding, a bottom border, and specific font and color.
        </li>
        <li>
          <code>.plan-features li:last-child</code>: Removes the bottom border
          from the last feature.
        </li>
        <li>
          <code>.plan button</code>: Styles the "Sign Up" button with a blue
          background, white text, padding, border-radius, cursor, and font size.
          Adds a transition effect for smooth color changes.
        </li>
        <li>
          <code>.plan button:hover</code>: Changes the background color of the
          button on hover.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled pricing plans.
      </p>
      <p>
        In the next step, we'll make the pricing table responsive for different
        screen sizes.
      </p>

      <h2>Making the Pricing Table Responsive</h2>
      <h3>Making the Pricing Table Responsive</h3>

      <p>
        Let's ensure our pricing table looks great on various devices by adding
        responsive design using CSS media queries.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Responsive Design Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }

  .plan {
    margin-bottom: 20px;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>@media (max-width: 768px)</code>: A media query for screens up
          to 768px wide (e.g., tablets and mobile phones).
        </li>
        <li>
          <code>.pricing-table</code>: Changes the grid layout to a single
          column for better visibility on smaller screens.
        </li>
        <li>
          <code>.plan</code>: Adds a margin to the bottom of each pricing plan
          to create space between them.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you resize your browser window or
        view the pricing table on different devices, you'll see the layout adapt
        to different screen sizes.
      </p>
      <p>In the next step, we'll add final touches to the pricing table.</p>

      <h2> Adding Final Touches</h2>
      <h3>Adding Final Touches</h3>
      <p>
        Let's add the final touches to our responsive pricing table to ensure it
        is fully functional and visually appealing.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Final Touches:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.plan:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.plan:hover</code>: Scales the pricing plan slightly larger on
          hover to create a subtle zoom effect.
        </li>
        <li>
          <code>transition: transform 0.3s ease;</code>: Adds a smooth
          transition effect for the zoom effect.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the final touches in action.
      </p>
      <p>
        Congratulations! You've completed the CSS project, "Design an Advanced
        Pricing Table." You've learned how to create a fully responsive pricing
        table using HTML and CSS.
      </p>
      <p>
        Feel free to continue customizing your pricing table and exploring more
        CSS techniques. Happy coding!
      </p>
    </div>
  );
};

export default AdvancedPricingTable;
