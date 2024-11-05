import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Building Your First Photo Gallery with HTML | Beginner's Guide",
  description:
    "Learn to build a basic photo gallery using HTML! This beginner-friendly tutorial covers everything from setting up your workspace to adding photos and captions. Perfect for first-time coders!",
  keywords: [
    "HTML tutorial",
    "beginner HTML project",
    "photo gallery HTML",
    "how to create a photo gallery",
    "HTML for beginners",
    "HTML project",
    "building photo gallery",
    "coding project for beginners",
  ],

  openGraph: {
    title: "Building Your First Photo Gallery with HTML | Beginner's Guide",
    description:
      "A step-by-step tutorial for building a photo gallery in HTML, perfect for beginners.",
  },
};

const PhotoGallery = () => {
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
          Building Your First Photo Gallery with HTML
        </h1>
      </div>

      <h2> Let's Start Building Our Photo Gallery!</h2>
      <h3>Welcome to Your First Photo Gallery Project! 📸</h3>

      <p>
        Hey there! Today, we're going to build something really cool - your very
        own photo gallery! Think of it like creating a digital photo album where
        you can show off your favorite pictures with nice descriptions.
      </p>

      <div>
        <h3>🎯 What We'll Create</h3>
        <p>
          Imagine you're creating a beautiful photo album, but on a webpage.
          Just like how a physical photo album has:
        </p>
        <ul>
          <li>Pictures you can see clearly</li>
          <li>Labels under each photo explaining what it is</li>
          <li>A nice organization that makes sense</li>
        </ul>
        <p>That's exactly what we'll build, but on a webpage!</p>
      </div>

      <div>
        <h3>🌟 What You'll Learn</h3>
        <p>By the end of this tutorial, you'll know how to:</p>
        <ul>
          <li>
            <strong>Add Pictures to Your Webpage:</strong> Just like putting
            photos in an album, but digitally!
          </li>
          <li>
            <strong>Write Good Picture Descriptions:</strong> So everyone,
            including people using screen readers, can enjoy your gallery
          </li>
          <li>
            <strong>Organize Everything Neatly:</strong> Make your gallery look
            clean and professional
          </li>
        </ul>
      </div>

      <div>
        <h3>🤔 What You Need</h3>
        <p>Before we start, make sure you have:</p>
        <ul>
          <li>A computer (any kind will work!)</li>
          <li>A simple text editor (we'll help you choose one)</li>
          <li>Some pictures you'd like to show in your gallery</li>
        </ul>
        <p>
          Don't worry if you're new to this - we'll go through everything
          step-by-step, using simple explanations and real-world examples!
        </p>
      </div>

      <h2> Getting Your Workspace Ready</h2>
      <h3>Setting Up Your Project Space 🎨</h3>

      <div>
        <h3>Think of it Like This...</h3>
        <p>
          Setting up your workspace is like preparing to cook in a kitchen: you
          need a clean counter (your folder), your recipe book (text editor),
          and your ingredients (your pictures)! Let's get everything organized.
        </p>
      </div>

      <div>
        <h3>Step 1: Create Your Project Folder</h3>
        <p>
          First, let's create a special folder for your project. Think of this
          as your photo album's home!
        </p>

        <div>
          <strong>On Windows:</strong>
          <ol>
            <li>Right-click on your desktop</li>
            <li>Click "New"</li>
            <li>Click "Folder"</li>
            <li>Name it "my-photo-gallery"</li>
          </ol>
        </div>

        <div>
          <strong>On Mac:</strong>
          <ol>
            <li>Right-click on your desktop</li>
            <li>Click "New Folder"</li>
            <li>Name it "my-photo-gallery"</li>
          </ol>
        </div>
      </div>

      <div>
        <h3>Step 2: Choose Your Text Editor</h3>
        <p>
          A text editor is like your digital notepad. Here are some free,
          beginner-friendly options:
        </p>
        <ul>
          <li>
            <strong>Visual Studio Code (VS Code)</strong> - Like a Swiss Army
            knife for coding. It's free and super helpful!
            <a href="https://code.visualstudio.com" target="_black">
              Download here
            </a>
          </li>
          <li>
            <strong>Notepad++</strong> - Simple and easy to use, perfect for
            beginners (Windows only)
          </li>
          <li>
            <strong>Sublime Text</strong> - Fast and lightweight, works on all
            computers
          </li>
        </ul>
        <p>
          <strong>Recommendation for Beginners:</strong> We suggest using VS
          Code because it's like having a helpful assistant while you code!
        </p>
      </div>

      <div>
        <h3>🎉 Success Check!</h3>
        <p>Before moving on, make sure you have:</p>
        <ul>
          <li>✅ Created your "my-photo-gallery" folder</li>
          <li>✅ Downloaded and installed a text editor</li>
          <li>✅ Found some pictures you want to use</li>
        </ul>
        <p>
          If you've got all these ready, you're all set to start building your
          gallery in the next step! 🚀
        </p>
      </div>

      <h2>Creating Your First HTML Page </h2>
      <h3>Building Your Gallery's Foundation 🏗️</h3>

      <div>
        <h3>Let's Use an Analogy!</h3>
        <p>Think of HTML like building a house:</p>
        <ul>
          <li>
            The <code>&lt;!DOCTYPE html&gt;</code> is like your building permit
          </li>
          <li>
            The <code>&lt;html&gt;</code> tag is your foundation
          </li>
          <li>
            The <code>&lt;head&gt;</code> is like your house's blueprint
          </li>
          <li>
            The <code>&lt;body&gt;</code> is where you'll put all your furniture
            (content)
          </li>
        </ul>
      </div>

      <div>
        <h3>Step 1: Create Your HTML File</h3>
        <ol>
          <li>Open your text editor (like VS Code)</li>
          <li>Click "File" → "New File"</li>
          <li>Click "File" → "Save As"</li>
          <li>Find your "my-photo-gallery" folder</li>
          <li>Name your file "index.html" (this name is important!)</li>
        </ol>
      </div>

      <div>
        <h3>Step 2: Add Your Basic HTML</h3>
        <p>Copy this code exactly as shown:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Photo Gallery</title>
</head>
<body>
    <h1>My Photo Gallery</h1>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Let's Understand Each Part:</h4>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: Tells the browser this is a
              modern webpage
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: Says our page is in English
            </li>
            <li>
              <code>&lt;head&gt;</code>: Contains information about our webpage
            </li>
            <li>
              <code>&lt;title&gt;</code>: The name that appears on the browser
              tab
            </li>
            <li>
              <code>&lt;body&gt;</code>: Where all your visible content will go
            </li>
            <li>
              <code>&lt;h1&gt;</code>: Your main heading (like a book title)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>👀 Let's See It in Action!</h3>
        <ol>
          <li>Save your file (Press Ctrl+S or Cmd+S)</li>
          <li>Find your file in your folder</li>
          <li>Double-click to open it in your web browser</li>
        </ol>
        <p>
          You should see "My Photo Gallery" as a big heading on a white page.
          That's your first webpage! 🎉
        </p>
      </div>

      <div>
        <h3>✨ Quick Tips</h3>
        <ul>
          <li>Save your file often (every few minutes)</li>
          <li>Refresh your browser to see changes (F5 key)</li>
          <li>Don't worry if it looks plain - we'll add style later!</li>
        </ul>
      </div>

      <h2>Adding Your Photos</h2>
      <h3>Time to Add Your Photos! 📸</h3>

      <div>
        <h3>Think of it Like...</h3>
        <p>
          Adding photos to your webpage is like putting photos in a physical
          album: each photo needs its own space and a nice caption. On a
          webpage, we use special "containers" (called{" "}
          <code>&lt;figure&gt;</code>) to hold each photo and its caption - just
          like how each photo in an album has its own pocket and label!
        </p>
      </div>

      <div>
        <h3>Step 1: Prepare Your Photos</h3>
        <ol>
          <li>
            <strong>Choose Your Photos:</strong>
            <ul>
              <li>Pick 3-5 photos you'd like to show</li>
              <li>Make sure they're not too large (under 1MB each is good)</li>
              <li>
                Rename them to simple names like "photo1.jpg", "photo2.jpg"
              </li>
            </ul>
          </li>
          <li>
            <strong>Copy Photos to Your Folder:</strong>
            <ul>
              <li>Open your "my-photo-gallery" folder</li>
              <li>Copy your chosen photos into this folder</li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h3>Step 2: Add Photos to Your HTML</h3>
        <p>
          Let's add this code inside your <code>&lt;body&gt;</code> tag:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<section>
    <h1>My Photo Gallery</h1>

    <!-- First Photo -->
    <figure>
        <img src="photo1.jpg" alt="Description of your first photo - be specific!">
        <figcaption>My First Photo - Add an interesting caption here!</figcaption>
    </figure>

    <!-- Second Photo -->
    <figure>
        <img src="photo2.jpg" alt="Description of your second photo - be specific!">
        <figcaption>My Second Photo - Add an interesting caption here!</figcaption>
    </figure>

    <!-- Third Photo -->
    <figure>
        <img src="photo3.jpg" alt="Description of your third photo - be specific!">
        <figcaption>My Third Photo - Add an interesting caption here!</figcaption>
    </figure>
</section>`}
            </SyntaxHighlighter>
          </code>
        </pre>

        <div>
          <h4>Understanding Each Part:</h4>
          <ul>
            <li>
              <code>&lt;section&gt;</code>: Like a chapter in your photo album
            </li>
            <li>
              <code>&lt;figure&gt;</code>: A container for each photo and its
              caption
            </li>
            <li>
              <code>&lt;img src="..."&gt;</code>: Shows your photo
            </li>
            <li>
              <code>alt="..."</code>: A description of the photo for
              accessibility
            </li>
            <li>
              <code>&lt;figcaption&gt;</code>: The caption for your photo
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>👀 Let's See It in Action!</h3>
        <ol>
          <li>Save your file (Press Ctrl+S or Cmd+S)</li>
          <li>Find your file in your folder</li>
          <li>Double-click to open it in your web browser</li>
        </ol>
        <p>
          You should see your photos with captions displayed on the page. That's
          your photo gallery! 🎉
        </p>
      </div>

      <div>
        <h3>💡 Helpful Tips</h3>
        <ul>
          <li>Always save your file after making changes</li>
          <li>Refresh your browser to see updates</li>
          <li>Keep your photo sizes small for faster loading</li>
          <li>
            Write meaningful descriptions in the alt text for accessibility
          </li>
          <li>Have fun experimenting with different styles!</li>
        </ul>
      </div>

      <h2>Finalizing Your Gallery </h2>
      <h3>Finishing Touches and Best Practices 🎨</h3>

      <div>
        <h3>Let's Add Some Final Touches!</h3>
        <p>
          Your photo gallery is almost complete! Let's add some final touches
          and ensure it follows best practices.
        </p>
      </div>

      <div>
        <h3>Step 1: Image Optimization</h3>
        <p>
          If your images are large, consider optimizing them to improve page
          load times. Tools like TinyPNG or online image compressors can help
          reduce file sizes without compromising quality.
        </p>
      </div>

      <div>
        <h3>Step 2: Image Alt Text</h3>
        <p>
          Make sure your <code>alt</code> text accurately describes the image
          content. This is essential for accessibility and SEO.
        </p>
      </div>

      <div>
        <h3>Step 3: Image Sizes</h3>
        <p>
          Use consistent image sizes to maintain a clean layout. You can adjust
          image dimensions using image editing tools.
        </p>
      </div>

      <div>
        <h3>Step 4: Additional Content</h3>
        <p>
          If you wish to add more information about each image, you can include
          a paragraph or additional text within the <code>&lt;figure&gt;</code>{" "}
          tag.
        </p>
      </div>

      <div>
        <h3>Final HTML Example</h3>
        <p>
          Here's an example of the final HTML code with some additional images
          and captions:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="html" style={docco}>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Photo Gallery</title>
</head>
<body>
    <section>
        <h1>My Photo Gallery</h1>

        <!-- First Photo -->
        <figure>
            <img src="photo1.jpg" alt="A beautiful sunset over the ocean">
            <figcaption>Beautiful Sunset</figcaption>
            <p>This image captures a breathtaking sunset over the ocean, with vibrant colors and a serene atmosphere.</p>
        </figure>

        <!-- Second Photo -->
        <figure>
            <img src="photo2.jpg" alt="A vibrant cityscape at night">
            <figcaption>Cityscape at Night</figcaption>
            <p>The city comes alive at night with its dazzling lights and bustling streets.</p>
        </figure>

        <!-- Third Photo -->
        <figure>
            <img src="photo3.jpg" alt="A peaceful forest with sunlight streaming through the trees">
            <figcaption>Peaceful Forest</figcaption>
            <p>A serene forest scene where sunlight filters through the trees, creating a magical atmosphere.</p>
        </figure>
    </section>
</body>
</html>`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>

      <div>
        <h3>🎉 Congratulations!</h3>
        <p>
          You've now created a fully functional photo gallery with images,
          captions, and additional content. This gallery is accessible, follows
          HTML5 semantics, and provides a great user experience.
        </p>
      </div>

      <div>
        <h3>💡 Next Steps</h3>
        <ul>
          <li>
            Add more photos by copying the <code>&lt;figure&gt;</code> section
          </li>
          <li>
            Change the colors in the CSS by modifying the color codes (once you
            learn CSS!)
          </li>
          <li>
            Adjust the spacing by changing the padding and margin values (once
            you learn CSS!)
          </li>
          <li>Share your gallery with friends and family!</li>
          <li>
            Continue exploring HTML and CSS to create even more amazing
            projects!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhotoGallery;
