import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Learn HTML: Build a Restaurant Menu Website | Web Development Tutorial",
  description:
    "Learn how to create your first restaurant menu website using HTML. Step-by-step tutorial perfect for beginners, including navigation, styling, and best practices.",
  keywords: [
    "HTML tutorial",
    "restaurant menu",
    "HTML for beginners",
    "HTML project",
    "Only HTML project",
    "HTML beginner project",
    "HTML beginner tutorial",
    "HTML beginner project",
    "HTML beginner project tutorial",
    "HTML beginner project example",
    "HTML beginner project guide",
    "HTML beginner project for beginners",
    "HTML beginner project for beginners tutorial",
    "HTML beginner project for beginners example",
    "HTML beginner project for beginners guide",
    "HTML beginner project for beginners project",
    "HTML beginner project for beginners project tutorial",
    "HTML beginner project for beginners project example",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP/4p",
  },

  openGraph: {
    title: "Create Your First Restaurant Menu Website | HTML Tutorial",
    description:
      "Step-by-step guide to building a professional restaurant menu website. Perfect for coding beginners!",
  },
};

const RestaurantMenuHtml = () => {
  return (
    <article
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
      className="project-container"
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "2px solid #333",
          paddingBottom: "10px",
        }}
      >
        Building Your First Restaurant Menu Website with HTML
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497900/restuarat_p5vq9d.jpg"
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
        <time className="project-date" datetime="2025-01-17">
          | January 17, 2025
        </time>
      </h3>

      <h3>Let's Build a Restaurant Menu Together!</h3>

      <p>
        Imagine you're helping a friend open a new restaurant. They need a menu
        to show their customers, but instead of using paper, we're going to
        create it for their website! Think of it like building a digital version
        of those menus you see at restaurants.
      </p>

      <h3>Why Are We Building This?</h3>
      <p>
        Before we jump in, let's understand why this project is great for
        beginners like you:
      </p>
      <ul>
        <li>
          <strong>It's Real-World:</strong> Just like building with LEGO, we'll
          put together different HTML pieces to create something people actually
          use every day!
        </li>
        <li>
          <strong>Perfect for Learning:</strong> You'll learn how to organize
          information (like food items and prices) in a way that makes sense -
          it's like arranging items on a shelf so people can easily find what
          they want.
        </li>
        <li>
          <strong>Great Practice:</strong> You'll use the most common HTML tags
          - think of them as your basic building blocks, like the different LEGO
          pieces you need to build something cool.
        </li>
      </ul>

      <h3>What Will We Create?</h3>
      <p>By the end of this tutorial, you'll have built:</p>
      <ul>
        <li>
          A beautiful restaurant name at the top (like a restaurant's sign)
        </li>
        <li>
          Different menu sections (think of these as different pages in a paper
          menu)
        </li>
        <li>
          Food items with descriptions and prices (just like you see in real
          menus!)
        </li>
        <li>
          A nice footer with the restaurant's information (like their business
          card)
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
          normal - even experienced developers use Google and ask questions all
          the time!
        </p>
      </div>

      <h2>Getting Your Workspace Ready</h2>
      <h3>Setting Up Your Digital Kitchen 👩‍💻</h3>

      <p>
        Before a chef starts cooking, they set up their kitchen with all the
        tools they need. Similarly, we need to set up our "digital kitchen" -
        our workspace where we'll build our menu!
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
          <li>Name it "my-restaurant-menu"</li>
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
          <li>Name it "my-restaurant-menu"</li>
        </ol>
      </div>

      <h3>Step 2: Getting a Text Editor</h3>
      <p>
        A text editor is like your chef's knife - it's the main tool you'll use
        to create your HTML. We recommend Visual Studio Code (VS Code) because:
      </p>
      <ul>
        <li>It's free!</li>
        <li>
          It helps you write code by highlighting things (like spell-check, but
          for code)
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
      <p>Now, let's create the file where we'll write our menu:</p>
      <ol>
        <li>Open VS Code</li>
        <li>Go to File → Open Folder</li>
        <li>Find and select your "my-restaurant-menu" folder</li>
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
          We use "index.html" because it's like the front door of your website.
          When someone visits your website, the browser automatically looks for
          an "index.html" file first - just like how you'd look for the front
          door when visiting a restaurant!
        </p>
      </div>

      <h2>Creating Our Menu's Foundation</h2>
      <h3>Building the Basic Structure 🏗️</h3>

      <p>
        Just like a building needs a strong foundation, our menu needs a basic
        HTML structure to build upon. Think of it as the blueprint for our
        digital restaurant menu.
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
      <p>This line tells the browser that this document is written in HTML5.</p>

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
  <title>Yummy Restaurant Menu</title>
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
          <code>&lt;meta charset="UTF-8"&gt;</code> sets the character encoding
          to UTF-8, supporting various languages.
        </li>
        <li>
          <code>
            &lt;meta name="viewport" content="width=device-width,
            initial-scale=1.0"&gt;
          </code>{" "}
          ensures that the menu looks good on different devices and screen
          sizes.
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
    <h1>Yummy Restaurant</h1>
  </header>
  <main>
    <!-- We'll put our menu here soon! -->
  </main>
  <footer>
    <p>© 2024 Yummy Restaurant</p>
  </footer>
</body>
</html>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>What are these for?</p>
      <ul>
        <li>
          <code>&lt;body&gt;</code> is where all the visible content goes (like
          text and images).
        </li>
        <li>
          <code>&lt;header&gt;</code> is the top part of the page, like the
          restaurant's sign.
        </li>
        <li>
          <code>&lt;main&gt;</code> is the main content area, where we'll put
          our menu items.
        </li>
        <li>
          <code>&lt;footer&gt;</code> is the bottom part of the page, like the
          restaurant's business card.
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
            Open the file in your web browser (double-click the file, or drag it
            into your browser)
          </li>
        </ol>
        <p>
          You should see "Yummy Restaurant" at the top of a mostly blank page.
          That's perfect! We'll add the delicious details in the next steps.
        </p>
      </div>

      <h2>Creating Our Menu Sections</h2>
      <h3>Organizing Our Menu Like a Real Restaurant 🍽️</h3>

      <p>
        When you go to a restaurant, the menu is usually divided into sections
        like appetizers, main courses, and desserts. We're going to create these
        sections in our digital menu!
      </p>

      <h3>Step 1: Adding the Appetizers Section</h3>
      <p>
        Let's add the appetizers section inside the <code>&lt;main&gt;</code>
        tag:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section id="appetizers">
  <h2>Tasty Starters</h2>
  <div class="menu-section">
    <!-- We'll add appetizer items here -->
  </div>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Understanding the new parts:</p>
      <ul>
        <li>
          <code>&lt;section&gt;</code> is like a different area in your
          restaurant, one for appetizers.
        </li>
        <li>
          <code>id="appetizers"</code> is like putting a label on the section.
        </li>
        <li>
          <code>&lt;h2&gt;</code> is the section title, like the heading in a
          paper menu.
        </li>
        <li>
          <code>&lt;div class="menu-section"&gt;</code> is a container for the
          menu items.
        </li>
      </ul>

      <h3>Step 2: Adding the Main Courses Section</h3>
      <p>Below the appetizers section, add the main courses section:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section id="main-courses">
  <h2>Main Dishes</h2>
  <div class="menu-section">
    <!-- We'll add main course items here -->
  </div>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Understanding the new parts:</p>
      <ul>
        <li>
          <code>&lt;section id="main-courses"&gt;</code> is the section for main
          dishes.
        </li>
        <li>
          <code>&lt;h2&gt;</code> is the section title for main dishes.
        </li>
      </ul>

      <h3>Step 3: Adding the Desserts Section</h3>
      <p>Below the main courses section, add the desserts section:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section id="desserts">
  <h2>Sweet Endings</h2>
  <div class="menu-section">
    <!-- We'll add dessert items here -->
  </div>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Understanding the new parts:</p>
      <ul>
        <li>
          <code>&lt;section id="desserts"&gt;</code> is the section for
          desserts.
        </li>
        <li>
          <code>&lt;h2&gt;</code> is the section title for desserts.
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
          Save your file and refresh it in your web browser. You should now see
          the section titles for appetizers, main courses, and desserts.
        </p>
      </div>

      <h2>Adding Menu Items</h2>
      <h3>Filling Our Menu with Delicious Items 🍕</h3>

      <p>
        Now comes the fun part - adding actual food items to our menu! Think of
        this like writing down all the dishes your restaurant serves, complete
        with descriptions and prices.
      </p>

      <h3>Step 1: Adding Appetizer Items</h3>
      <p>
        Inside the <code>&lt;div class="menu-section"&gt;</code> of the
        appetizers section, add the following code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<div class="menu-item">
  <h3>Crispy Mozzarella Sticks <span class="price">$7.99</span></h3>
  <p class="description">
    Golden-brown on the outside, melty on the inside. Served with our 
    special marinara sauce.
  </p>
</div>

<div class="menu-item">
  <h3>Garden Fresh Salad <span class="price">$6.99</span></h3>
  <p class="description">
    Crisp lettuce, cherry tomatoes, cucumbers, and carrots with your 
    choice of dressing.
  </p>
</div>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Understanding the new parts:</p>
      <ul>
        <li>
          <code>&lt;div class="menu-item"&gt;</code> is a container for each
          menu item.
        </li>
        <li>
          <code>&lt;h3&gt;</code> is the name of the dish, with the price in a
          <code>&lt;span&gt;</code> tag.
        </li>
        <li>
          <code>&lt;p class="description"&gt;</code> is the description of the
          dish.
        </li>
      </ul>

      <h3>Step 2: Adding Main Course Items</h3>
      <p>
        Inside the <code>&lt;div class="menu-section"&gt;</code> of the main
        courses section, add the following code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<div class="menu-item">
  <h3>Cheeseburger with Fries <span class="price">$12.99</span></h3>
  <p class="description">
    A juicy cheeseburger served with crispy fries and a side of ketchup.
  </p>
</div>

<div class="menu-item">
  <h3>Grilled Salmon with Vegetables <span class="price">$18.99</span></h3>
  <p class="description">
    Freshly grilled salmon served with a side of seasonal vegetables.
  </p>
</div>

<div class="menu-item">
  <h3>Chicken Alfredo Pasta <span class="price">$15.99</span></h3>
  <p class="description">
    Tender chicken breast in a creamy Alfredo sauce over fettuccine pasta.
  </p>
</div>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Step 3: Adding Dessert Items</h3>
      <p>
        Inside the <code>&lt;div class="menu-section"&gt;</code> of the desserts
        section, add the following code:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<div class="menu-item">
  <h3>Chocolate Lava Cake <span class="price">$8.99</span></h3>
  <p class="description">
    Warm chocolate cake with a gooey center, served with vanilla ice cream.
  </p>
</div>

<div class="menu-item">
  <h3>Apple Pie <span class="price">$7.99</span></h3>
  <p class="description">
    Homemade apple pie with a flaky crust, served with whipped cream.
  </p>
</div>`}
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
        <p>
          Save your file and refresh it in your web browser. You should now see
          all the menu items listed in their respective sections.
        </p>
      </div>

      <h2>Adding Navigation</h2>
      <h3>Making Our Menu Look Professional 🎨</h3>

      <p>
        Right now, our menu has all the right information, but it might look a
        bit plain. Let's add some navigation links and basic styling to make it
        more user-friendly!
      </p>

      <h3>Step 1: Adding Navigation Links</h3>
      <p>
        Add the following code right after your <code>&lt;header&gt;</code>
        section:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<nav>
  <ul>
    <li><a href="#appetizers">Starters</a></li>
    <li><a href="#main-courses">Main Dishes</a></li>
    <li><a href="#desserts">Desserts</a></li>
  </ul>
</nav>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Understanding the new parts:</p>
      <ul>
        <li>
          <code>&lt;nav&gt;</code> is used to define a set of navigation links.
        </li>
        <li>
          <code>&lt;ul&gt;</code> is an unordered list, used to group the
          navigation links.
        </li>
        <li>
          <code>&lt;li&gt;</code> is a list item, each containing a navigation
          link.
        </li>
        <li>
          <code>&lt;a href="#appetizers"&gt;</code> is a hyperlink that links to
          the appetizers section.
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
          Save your file and refresh it in your web browser. You should now see
          a navigation bar at the top of the page, and clicking the links should
          take you to the corresponding sections.
        </p>
      </div>

      <h2>Final Touches and Testing</h2>
      <h3>Making Sure Everything Works! 🚀</h3>

      <p>
        We're almost done! Just like a chef tastes their dishes before serving
        them, we need to test our menu to make sure everything works perfectly.
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
            ✅ Does your menu have all three sections (appetizers, main courses,
            desserts)?
          </li>
          <li>✅ Do all your navigation links work when you click them?</li>
          <li>✅ Are all your prices clearly visible?</li>
          <li>✅ Do your food descriptions make sense?</li>
          <li>✅ Does everything look good on both your computer and phone?</li>
        </ul>
      </div>

      <h3>Adding the Final Professional Touches</h3>
      <p>
        Let's add some information at the bottom of your menu (in the footer):
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<footer>
  <div class="restaurant-info">
    <h3>Visit Us</h3>
    <p>123 Tasty Street, Food City, FC 12345</p>
    <p>Phone: (555) 123-4567</p>
    <p>Open Daily: 11:00 AM - 10:00 PM</p>
  </div>
  <div class="social-media">
    <p>Follow us on social media for daily specials!</p>
    <p>@YummyRestaurant</p>
  </div>
  <p class="copyright">© 2024 Yummy Restaurant. All rights reserved.</p>
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
            <strong>Solution:</strong> Check your font-size in the style section
          </li>
          <li>
            <strong>Problem:</strong> Navigation links don't work
            <strong>Solution:</strong> Make sure your section IDs match your
            link hrefs exactly
          </li>
          <li>
            <strong>Problem:</strong> Prices aren't aligned
            <strong>Solution:</strong> Check if all prices have the "price"
            class
          </li>
        </ul>
      </div>

      <h2>Testing Your Code</h2>
      <h3>Verifying Your Work</h3>

      <p>Here's the complete HTML code for your restaurant menu:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yummy Restaurant Menu</title>
</head>
<body>
  <header>
    <h1>Yummy Restaurant</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#appetizers">Starters</a></li>
      <li><a href="#main-courses">Main Dishes</a></li>
      <li><a href="#desserts">Desserts</a></li>
    </ul>
  </nav>
  <main>
    <section id="appetizers">
      <h2>Tasty Starters</h2>
      <div class="menu-section">
        <div class="menu-item">
          <h3>Crispy Mozzarella Sticks <span class="price">$7.99</span></h3>
          <p class="description">
            Golden-brown on the outside, melty on the inside. Served with our 
            special marinara sauce.
          </p>
        </div>
        <div class="menu-item">
          <h3>Garden Fresh Salad <span class="price">$6.99</span></h3>
          <p class="description">
            Crisp lettuce, cherry tomatoes, cucumbers, and carrots with your 
            choice of dressing.
          </p>
        </div>
      </div>
    </section>
    <section id="main-courses">
      <h2>Main Dishes</h2>
      <div class="menu-section">
        <div class="menu-item">
          <h3>Cheeseburger with Fries <span class="price">$12.99</span></h3>
          <p class="description">
            A juicy cheeseburger served with crispy fries and a side of ketchup.
          </p>
        </div>
        <div class="menu-item">
          <h3>Grilled Salmon with Vegetables <span class="price">$18.99</span></h3>
          <p class="description">
            Freshly grilled salmon served with a side of seasonal vegetables.
          </p>
        </div>
        <div class="menu-item">
          <h3>Chicken Alfredo Pasta <span class="price">$15.99</span></h3>
          <p class="description">
            Tender chicken breast in a creamy Alfredo sauce over fettuccine pasta.
          </p>
        </div>
      </div>
    </section>
    <section id="desserts">
      <h2>Sweet Endings</h2>
      <div class="menu-section">
        <div class="menu-item">
          <h3>Chocolate Lava Cake <span class="price">$8.99</span></h3>
          <p class="description">
            Warm chocolate cake with a gooey center, served with vanilla ice cream.
          </p>
        </div>
        <div class="menu-item">
          <h3>Apple Pie <span class="price">$7.99</span></h3>
          <p class="description">
            Homemade apple pie with a flaky crust, served with whipped cream.
          </p>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="restaurant-info">
      <h3>Visit Us</h3>
      <p>123 Tasty Street, Food City, FC 12345</p>
      <p>Phone: (555) 123-4567</p>
      <p>Open Daily: 11:00 AM - 10:00 PM</p>
    </div>
    <div class="social-media">
      <p>Follow us on social media for daily specials!</p>
      <p>@YummyRestaurant</p>
    </div>
    <p class="copyright">© 2024 Yummy Restaurant. All rights reserved.</p>
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
            Open the file in your web browser (double-click the file, or drag it
            into your browser)
          </li>
        </ol>
        <p>
          You should see the complete restaurant menu with all sections, items,
          and navigation links working correctly.
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
          You've built your first complete web page! This menu isn't just a
          practice project - it's a real-world example of what you might create
          for an actual restaurant. You've learned:
        </p>
        <ul>
          <li>How to structure content with HTML</li>
          <li>How to organize information in a clear way</li>
          <li>How to style your content to make it look professional</li>
          <li>How to add navigation to help users find what they want</li>
        </ul>
        <p>Feel free to customize this menu further by:</p>
        <ul>
          <li>Adding more menu items</li>
          <li>Changing the restaurant name and details</li>
          <li>Adding images to make it more visually appealing</li>
          <li>Experimenting with different styles and layouts</li>
        </ul>
        <p>
          Keep practicing and exploring HTML. The more you build, the more
          comfortable you'll become with creating amazing web content!
        </p>
      </div>
      <h2>Recommend</h2>
      <HtmlProjectssss />
    </article>
  );
};

export default RestaurantMenuHtml;

export const HtmlProjectssss = () => {
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
      id: "5p",
      title: "Build a Photo Gallery with HTML",
      description:
        "Learn how to create a static photo gallery using HTML image tags and captions. This project emphasizes the use of alt attributes for accessibility and proper image embedding. Great for practicing HTML media elements!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "Photo Gallery Example",
      date: "February 5, 2025",
    },
    {
      id: "6p",
      title: "Create an Event Invitation Page with HTML",
      description:
        "Design an event invitation page using only HTML. This project covers headings, paragraphs, lists, and hyperlinks to create a visually appealing and functional page. Perfect for advanced HTML learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498445/event_iu3yfu.jpg",
      alt: "Event Invitation Example",
      date: "February 10, 2025",
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
            <div className="post-card">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
