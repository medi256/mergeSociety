import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title:
    "Learn HTML: Build a Restaurant Menu Website | Web Development Tutorial",
  description:
    "Learn how to create your first restaurant menu website using HTML. Step-by-step tutorial perfect for beginners, including navigation, styling, and best practices.",
  keywords:
    "HTML tutorial, restaurant menu, web development, beginner coding, HTML for beginners, website creation, menu design",

  openGraph: {
    title: "Create Your First Restaurant Menu Website | HTML Tutorial",
    description:
      "Step-by-step guide to building a professional restaurant menu website. Perfect for coding beginners!",
  },
};

const RestaurantMenuHtml = () => {
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
          Building Your First Restaurant Menu Website with HTML
        </h1>
      </div>

      <h2> Let's Build a Restaurant Menu Together!</h2>
      <h3>Welcome to Your First HTML Project! 🎉</h3>

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

      <h3>Let's Write Our First HTML Code!</h3>
      <p>
        Copy this code into your index.html file. Don't worry - we'll explain
        every single part right after:
      </p>

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

      <h3>Understanding Each Part (Like Reading a Recipe)</h3>

      <div className="explanation" style={{ marginTop: "20px" }}>
        <h4>1. The Document Type</h4>
        <pre>
          <code>{"<!DOCTYPE html>"}</code>
        </pre>
        <p>
          This is like telling your browser "Hey, this is an HTML document!"
          It's similar to how a recipe book's cover tells you "This is a
          cookbook!"
        </p>

        <h4>2. The HTML Container</h4>
        <pre>
          <code>{'<html lang="en">'}</code>
        </pre>
        <p>
          This is like the walls of your restaurant - it contains everything!
          The <code>lang="en"</code>
          tells browsers this menu is in English.
        </p>

        <h4>3. The Head Section</h4>
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
        <p>
          Think of the head section as the restaurant's behind-the-scenes area:
        </p>
        <ul>
          <li>
            <code>charset="UTF-8"</code>: Tells the browser how to read the text
            (like telling someone which language to read in)
          </li>
          <li>
            <code>viewport</code>: Makes your menu look good on phones and
            computers (like having tables that fit both big and small groups)
          </li>
          <li>
            <code>title</code>: This shows up in the browser tab (like the sign
            outside a restaurant)
          </li>
        </ul>

        <h4>4. The Body Section</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`
    <body>
    <header>
        <h1>Yummy Restaurant</h1>
    </header>
    <main>
        <!-- We'll put our menu here soon! -->
    </main>
    <footer>
        <p>© 2024 Yummy Restaurant</p>
    </footer>
    </body>`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The body section is where customers see everything - like the dining
          area of a restaurant:
        </p>
        <ul>
          <li>
            <code>header</code>: Like the entrance area with the restaurant's
            name
          </li>
          <li>
            <code>main</code>: The main dining area where we'll put our menu
            items
          </li>
          <li>
            <code>footer</code>: Like the bottom of a menu where you put extra
            information
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
        <h4>👉 Try It Yourself!</h4>
        <ol>
          <li>Copy the code above into your index.html file</li>
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

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderLeft: "5px solid #28a745",
          marginTop: "20px",
        }}
      >
        <h4>💡 Pro Tip:</h4>
        <p>
          Comments in HTML (lines that start with {"<!--"} and end with {"-->"})
          are like notes in a recipe - they help you remember things but don't
          show up in the final result. We'll use them to mark where we'll add
          more content later!
        </p>
      </div>

      <h2>Creating Our Menu Sections</h2>
      <h3>Organizing Our Menu Like a Real Restaurant 🍽️</h3>

      <p>
        When you go to a restaurant, the menu is usually divided into sections
        like appetizers, main courses, and desserts. We're going to create these
        sections in our digital menu!
      </p>

      <h3>Adding Menu Sections</h3>
      <p>
        Let's update our <code>&lt;main&gt;</code> section with our menu
        categories. Think of this like organizing different food items into
        different pages in a paper menu.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<main>
<!-- Appetizers Section -->
<section id="appetizers">
    <h2>Tasty Starters</h2>
    <div class="menu-section">
        <!-- We'll add appetizer items here -->
    </div>
</section>

<!-- Main Courses Section -->
<section id="main-courses">
    <h2>Main Dishes</h2>
    <div class="menu-section">
        <!-- We'll add main course items here -->
    </div>
</section>

<!-- Desserts Section -->
<section id="desserts">
    <h2>Sweet Endings</h2>
    <div class="menu-section">
        <!-- We'll add dessert items here -->
    </div>
</section>
</main>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Understanding The Parts</h3>
      <div className="code-explanation" style={{ marginTop: "20px" }}>
        <ol>
          <li>
            <strong>The Section Tag:</strong>
            <p>
              <code>&lt;section&gt;</code> is like creating different areas in
              your restaurant - one for appetizers, one for main courses, and
              one for desserts. It's like having different tables for different
              types of food!
            </p>
          </li>
          <li>
            <strong>The ID Attribute:</strong>
            <p>
              <code>id="appetizers"</code> is like putting a label on each
              section. Just like how you'd put signs in a buffet saying "Salads"
              or "Desserts", these IDs help identify each section.
            </p>
          </li>
          <li>
            <strong>The Heading Tags:</strong>
            <p>
              <code>&lt;h2&gt;</code> tags are like the section titles in a
              paper menu. They're bigger and bolder to help customers find what
              they're looking for.
            </p>
          </li>
        </ol>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderLeft: "5px solid #28a745",
          marginTop: "20px",
        }}
      >
        <h4>🎯 Why This Structure Works:</h4>
        <p>
          Just like how a well-organized kitchen helps chefs work better, a
          well-organized HTML structure helps both you (the developer) and your
          visitors find things easily. Each section has its own space, making it
          easy to add, remove, or update menu items later!
        </p>
      </div>

      <h2>Adding Menu Items</h2>
      <h3>Filling Our Menu with Delicious Items 🍕</h3>

      <p>
        Now comes the fun part - adding actual food items to our menu! Think of
        this like writing down all the dishes your restaurant serves, complete
        with descriptions and prices.
      </p>

      <h3>Let's Add Some Menu Items</h3>
      <p>
        We'll create a nice-looking list of items for each section. Here's how
        to add items to your appetizer section (you can copy this pattern for
        other sections too!):
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`<section id="appetizers">
<h2>Tasty Starters</h2>
<div class="menu-section">
    <!-- First Menu Item -->
    <div class="menu-item">
        <h3>Crispy Mozzarella Sticks <span class="price">$7.99</span></h3>
        <p class="description">
            Golden-brown on the outside, melty on the inside. Served with our 
            special marinara sauce.
        </p>
    </div>

    <!-- Second Menu Item -->
    <div class="menu-item">
        <h3>Garden Fresh Salad <span class="price">$6.99</span></h3>
        <p class="description">
            Crisp lettuce, cherry tomatoes, cucumbers, and carrots with your 
            choice of dressing.
        </p>
    </div>
</div>
</section>`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Breaking Down Each Part</h3>
      <div className="explanation" style={{ marginTop: "20px" }}>
        <h4>1. The Menu Item Container</h4>
        <pre>
          <code>{'<div class="menu-item">'}</code>
        </pre>
        <p>
          Think of this like a plate that holds all the information about one
          dish. Just like how a plate keeps all parts of a dish together, this
          container keeps all information about one menu item together.
        </p>

        <h4>2. The Item Name and Price</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {
                '<h3>Crispy Mozzarella Sticks <span class="price">$7.99</span></h3>'
              }
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          This is like the name tag on a dish at a buffet, with the price tag
          right next to it. The
          <code>&lt;span&gt;</code> tag is perfect for the price because it's a
          small piece of information that belongs with the name.
        </p>

        <h4>3. The Description</h4>
        <pre>
          <code>
            {'<p class="description">Golden-brown on the outside...</p>'}
          </code>
        </pre>
        <p>
          Just like how a waiter describes a dish to customers, this paragraph
          tells people what's special about each item.
        </p>
      </div>

      <div
        className="practice-exercise"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        <h4>✍️ Your Turn to Practice!</h4>
        <p>Try adding these items to your main courses section:</p>
        <ol>
          <li>A cheeseburger with fries ($12.99)</li>
          <li>Grilled salmon with vegetables ($18.99)</li>
          <li>Chicken alfredo pasta ($15.99)</li>
        </ol>
        <p>
          Remember to add descriptions that make the food sound delicious - just
          like how restaurants describe their dishes!
        </p>
      </div>

      <h2>Adding Navigation </h2>
      <h3>Making Our Menu Look Professional 🎨</h3>

      <p>
        Right now, our menu has all the right information, but it might look a
        bit plain. Let's add some navigation links and basic styling to make it
        more user-friendly!
      </p>

      <h3>First, Let's Add Navigation</h3>
      <p>
        Add this code right after your <code>&lt;header&gt;</code> section:
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

      <p>
        This creates a menu of links (like a table of contents) that lets people
        jump directly to different sections of your menu!
      </p>

      <h3>Understanding the Navigation</h3>
      <div className="explanation" style={{ marginTop: "20px" }}>
        <h4>1. The Navigation Tag:</h4>
        <pre>
          <code>{"<nav>"}</code>
        </pre>
        <p>
          The <code>&lt;nav&gt;</code> tag is used to define a set of navigation
          links. It's like the table of contents in a book, helping users find
          what they're looking for quickly.
        </p>

        <h4>2. The Unordered List:</h4>
        <pre>
          <code>{"<ul>"}</code>
        </pre>
        <p>
          The <code>&lt;ul&gt;</code> tag is used to create an unordered list.
          Each item in the list is a navigation link.
        </p>

        <h4>3. The List Items:</h4>
        <pre>
          <code>{"<li>"}</code>
        </pre>
        <p>
          The <code>&lt;li&gt;</code> tag is used to define each item in the
          list. Each list item contains an anchor tag.
        </p>

        <h4>4. The Anchor Tags:</h4>
        <pre>
          <code>{'<a href="#appetizers">Starters</a>'}</code>
        </pre>
        <p>
          The <code>&lt;a&gt;</code> tag is used to create a hyperlink. The{" "}
          <code>href</code> attribute specifies the destination of the link. In
          this case, it points to the ID of the section (e.g.,{" "}
          <code>#appetizers</code>).
        </p>
      </div>

      <div
        className="practice-exercise"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        <h4>✍️ Your Turn to Practice!</h4>
        <p>
          Try adding a navigation link to a new section called "Beverages" and
          create a section for it in your menu.
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
    </div>
  );
};

export default RestaurantMenuHtml;
