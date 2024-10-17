"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const RestaurantMenuHtml = () => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Introduction to Creating a Restaurant Menu with HTML",
      content: (
        <>
          <h2>Welcome to the Restaurant Menu HTML Tutorial</h2>
          <ScrollToTop />
          <p>
            In this tutorial, we'll guide you through creating a simple
            restaurant menu using HTML. This project is perfect for beginners
            who want to practice their HTML skills and learn how to structure
            content for a real-world application.
          </p>
          <p>
            By the end of this tutorial, you'll have created a menu that
            includes:
          </p>
          <ul>
            <li>A header with the restaurant's name</li>
            <li>
              Sections for different meal types (appetizers, main courses,
              desserts)
            </li>
            <li>Individual menu items with descriptions and prices</li>
          </ul>
          <p>
            This project will help you understand how to use HTML to organize
            and present information in a clear, structured way. Let's get
            started on building your restaurant menu!
          </p>
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
            First, let's set up a workspace for your restaurant menu project:
          </p>
          <ol>
            <li>
              <strong>Create a New Folder:</strong>
              <ul>
                <li>
                  <strong>On Windows:</strong> Right-click on your desktop,
                  select "New" &gt; "Folder", and name it "my-restaurant-menu".
                </li>
                <li>
                  <strong>On Mac:</strong> Right-click on your desktop, select
                  "New Folder", and name it "my-restaurant-menu".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  Open your preferred text editor (like Notepad, TextEdit, or VS
                  Code) and navigate to the "my-restaurant-menu" folder.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create the HTML File:</strong>
              <ul>
                <li>
                  Create a new file and save it as "index.html" inside the
                  "my-restaurant-menu" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Note:</strong> Using "index.html" as your file name is a
            common practice in web development. It's often the default file that
            web servers look for when someone visits a website.
          </p>
          <p>
            Now that your workspace is ready, let's move on to creating the
            basic HTML structure for your restaurant menu.
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
            This will serve as the foundation for our restaurant menu.
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
    <title>Delicious Bites Restaurant Menu</title>
</head>
<body>
    <header>
        <h1>Delicious Bites Restaurant</h1>
    </header>
    <main>
        <!-- We'll add our menu sections here -->
    </main>
    <footer>
        <p>&copy; 2024 Delicious Bites Restaurant. All rights reserved.</p>
    </footer>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down this HTML structure:</p>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: This tells the browser that
              this is an HTML5 document.
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
              content of our menu.
            </li>
            <li>
              <code>&lt;header&gt;</code>: Contains the main heading of our
              page.
            </li>
            <li>
              <code>&lt;main&gt;</code>: This is where we'll put the main
              content of our menu.
            </li>
            <li>
              <code>&lt;footer&gt;</code>: Contains information that goes at the
              bottom of the page, like a copyright notice.
            </li>
          </ul>
          <p>
            Save your file and open it in a web browser. You should see the
            restaurant name and footer text displayed on the page.
          </p>
          <p>In the next step, we'll start adding our menu sections.</p>
        </>
      ),
    },
    {
      title: "Adding Menu Sections",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating Menu Categories</h2>
          <p>
            Now that we have our basic HTML structure, let's add sections for
            different types of meals in our menu. We'll create categories for
            appetizers, main courses, and desserts.
          </p>
          <p>
            Add the following code inside the <code>&lt;main&gt;</code> tags of
            your HTML file:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<main>
    <section id="appetizers">
        <h2>Appetizers</h2>
        <!-- We'll add appetizer items here -->
    </section>

    <section id="main-courses">
        <h2>Main Courses</h2>
        <!-- We'll add main course items here -->
    </section>

    <section id="desserts">
        <h2>Desserts</h2>
        <!-- We'll add dessert items here -->
    </section>
</main>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we've added:</p>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: This tag defines a section in our
              document. We're using it to separate different parts of our menu.
            </li>
            <li>
              <code>id="..."</code>: We've given each section a unique id. This
              can be useful for styling or creating links to specific parts of
              the menu.
            </li>
            <li>
              <code>&lt;h2&gt;</code>: This is a second-level heading. We're
              using it for our category titles.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see the titles for each section of your menu.
          </p>
          <p>
            In the next step, we'll add individual menu items to each section.
          </p>
        </>
      ),
    },
    {
      title: "Adding Menu Items",
      content: (
        <>
          <h2>Filling in the Menu Items</h2>
          <ScrollToTop />
          <p>
            Now that we have our menu sections, let's add some items to each
            category. We'll use a combination of headings, paragraphs, and lists
            to structure our menu items.
          </p>
          <p>
            Replace the content inside each <code>&lt;section&gt;</code> with
            the following:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section id="appetizers">
    <h2>Appetizers</h2>
    <ul>
        <li>
            <h3>Bruschetta <span>$8.99</span></h3>
            <p>Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomato.</p>
        </li>
        <li>
            <h3>Spinach and Artichoke Dip <span>$10.99</span></h3>
            <p>A creamy blend of spinach, artichoke hearts, and melted cheeses, served with tortilla chips.</p>
        </li>
    </ul>
</section>

<section id="main-courses">
    <h2>Main Courses</h2>
    <ul>
        <li>
            <h3>Grilled Salmon <span>$22.99</span></h3>
            <p>Fresh Atlantic salmon fillet, grilled to perfection, served with roasted vegetables and lemon butter sauce.</p>
        </li>
        <li>
            <h3>Chicken Parmesan <span>$18.99</span></h3>
            <p>Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.</p>
        </li>
    </ul>
</section>

<section id="desserts">
    <h2>Desserts</h2>
    <ul>
        <li>
            <h3>Chocolate Lava Cake <span>$8.99</span></h3>
            <p>Warm chocolate cake with a gooey center, served with vanilla ice cream.</p>
        </li>
        <li>
            <h3>New York Cheesecake <span>$7.99</span></h3>
            <p>Classic creamy cheesecake with a graham cracker crust, topped with fresh berries.</p>
        </li>
    </ul>
</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down the structure we've used for menu items:</p>
          <ul>
            <li>
              <code>&lt;ul&gt;</code>: An unordered list to group menu items
              together.
            </li>
            <li>
              <code>&lt;li&gt;</code>: List items, each representing a dish on
              the menu.
            </li>
            <li>
              <code>&lt;h3&gt;</code>: Third-level heading for the name of each
              dish.
            </li>
            <li>
              <code>&lt;span&gt;</code>: Used to separate the price from the
              dish name, making it easier to style later if needed.
            </li>
            <li>
              <code>&lt;p&gt;</code>: A paragraph tag for the description of
              each dish.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a complete menu with items in each category.
          </p>
          <p>
            In the final step, we'll add some finishing touches to make our menu
            more informative and user-friendly.
          </p>
        </>
      ),
    },
    {
      title: "Adding Finishing Touches",
      content: (
        <>
          <ScrollToTop />
          <h2>Enhancing Your Restaurant Menu</h2>
          <p>
            To make our restaurant menu more informative and user-friendly,
            let's add a few finishing touches. We'll include a brief
            introduction and some additional information about the restaurant.
          </p>
          <p>
            Add the following code just after the <code>&lt;header&gt;</code>{" "}
            section and before the <code>&lt;main&gt;</code> section:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<header>
    <h1>Delicious Bites Restaurant</h1>
</header>

<nav>
    <ul>
        <li><a href="#appetizers">Appetizers</a></li>
        <li><a href="#main-courses">Main Courses</a></li>
        <li><a href="#desserts">Desserts</a></li>
    </ul>
</nav>

<section id="about">
    <h2>About Us</h2>
    <p>Welcome to Delicious Bites, where we serve mouthwatering dishes made with fresh, locally-sourced ingredients. Our menu offers a perfect blend of classic favorites and innovative culinary creations.</p>
</section>

<main>
    <!-- Your existing menu sections go here -->
</main>

<footer>
    <p>&copy; 2024 Delicious Bites Restaurant. All rights reserved.</p>
    <p>123 Tasty Lane, Flavortown, FB 12345 | Phone: (555) 123-4567</p>
    <p>Open daily: 11:00 AM - 10:00 PM</p>
</footer>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down what we've added:</p>
          <ul>
            <li>
              <code>&lt;nav&gt;</code>: This creates a navigation menu with
              links to each section of our menu.
            </li>
            <li>
              <code>&lt;a href="#..."&gt;</code>: These are anchor tags that
              create links to the different sections of our menu using the id
              attributes we set earlier.
            </li>
            <li>
              <code>&lt;section id="about"&gt;</code>: This new section provides
              a brief introduction to the restaurant.
            </li>
            <li>
              We've also expanded the <code>&lt;footer&gt;</code> to include
              more information about the restaurant's location and hours.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a more complete and informative restaurant menu page.
          </p>
          <h3>Congratulations!</h3>
          <p>
            You've successfully created an HTML document for a restaurant menu.
            This project has helped you practice:
          </p>
          <ul>
            <li>Creating the structure of an HTML document</li>
            <li>Using different types of HTML tags to organize content</li>
            <li>Structuring menu sections and items</li>
            <li>Adding navigation and additional information</li>
          </ul>
          <p>
            Feel free to customize this menu further by adding more items,
            changing prices, or even adding images to make it more visually
            appealing. Remember, HTML is a powerful tool for creating engaging
            web content!
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
          Creating a Restaurant Menu with HTML
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

export default RestaurantMenuHtml;
