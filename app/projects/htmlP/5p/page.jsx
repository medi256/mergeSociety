"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const PhotoGallery = () => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Introduction to HTML Photo Galleries",
      content: (
        <>
          <h2>Welcome to the HTML Photo Gallery Tutorial</h2>
          <ScrollToTop />
          <p>
            In this tutorial, we'll guide you through creating a captivating
            photo gallery using HTML. Whether you're a beginner or looking to
            enhance your HTML skills, this project is an excellent way to
            practice structuring and presenting visual content.
          </p>
          <p>
            By the end of this tutorial, you'll have a fully functional photo
            gallery with the following features:
          </p>
          <ul>
            <li>
              <strong>Images with Captions:</strong> Learn how to display images
              with descriptive captions, creating a visually appealing gallery.
            </li>
            <li>
              <strong>Accessible Image Descriptions:</strong> Understand the
              importance of alt text and how to use it effectively to make your
              gallery accessible to all users.
            </li>
            <li>
              <strong>Proper Semantic HTML Structure:</strong> Build a gallery
              that follows best practices for HTML5 semantics.
            </li>
          </ul>
          <p>
            Let's begin by setting up your project workspace and creating a
            stunning photo gallery!
          </p>
        </>
      ),
    },
    {
      title: "Setting Up Your Workspace",
      content: (
        <>
          <ScrollToTop />
          <h2>Setting Up Your Project</h2>
          <p>
            Before we dive into coding, let's get your project environment
            ready:
          </p>
          <ol>
            <li>
              <strong>Create a Folder:</strong> Make a new folder named{" "}
              <code>my-photo-gallery</code>.
              <ul>
                <li>
                  <strong>Windows:</strong> Right-click on your desktop, select
                  "New Folder".
                </li>
                <li>
                  <strong>Mac:</strong> Right-click on your desktop, select "New
                  Folder".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong> Use a text
              editor like VS Code, Notepad++, Sublime Text, or any other editor
              you prefer.
            </li>
            <li>
              <strong>Create an HTML File:</strong> Inside the folder, create a
              file named <code>index.html</code>. This will be the main file for
              our project.
            </li>
          </ol>
          <p>
            Now that your workspace is set up, we can start building the HTML
            structure for our photo gallery.
          </p>
        </>
      ),
    },
    {
      title: "Creating the Basic HTML Structure",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating the HTML Document</h2>
          <p>
            Let's begin by creating the basic structure of our HTML document.
            This will serve as the foundation for our photo gallery.
          </p>
          <p>
            Open your <code>index.html</code> file and add the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Photo Gallery</title>
</head>
<body>
    <h1>My Photo Gallery</h1>
    <!-- Gallery will be added here -->
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Here's a breakdown of the HTML structure:</p>
          <ul>
            <li>
              <strong>&lt;!DOCTYPE html&gt;</strong>: Declares the document type
              as HTML5.
            </li>
            <li>
              <strong>&lt;html lang="en"&gt;</strong>: Starts the HTML document,
              specifying the language as English.
            </li>
            <li>
              <strong>&lt;meta charset="UTF-8"&gt;</strong>: Sets the character
              encoding to UTF-8, allowing for a wide range of characters and
              languages.
            </li>
            <li>
              <strong>&lt;meta name="viewport" ...&gt;</strong>: Ensures the
              page is responsive and adapts to different screen sizes.
            </li>
            <li>
              <strong>&lt;title&gt;</strong>: Sets the title of the webpage,
              which appears in the browser tab.
            </li>
            <li>
              <strong>&lt;h1&gt;</strong>: Adds the main heading for the
              gallery.
            </li>
          </ul>
          <p>
            Save your file and open it in a browser. You should see the title
            "My Photo Gallery" displayed on the page.
          </p>
        </>
      ),
    },
    {
      title: "Adding Images and Captions",
      content: (
        <>
          <ScrollToTop />
          <h2>Adding Images and Captions</h2>
          <p>
            Now, let's bring our photo gallery to life by adding images and
            captions. We'll use HTML's <code>&lt;figure&gt;</code> and{" "}
            <code>&lt;figcaption&gt;</code> tags to structure our content
            effectively.
          </p>
          <p>
            <strong>Step 1: Adding Images:</strong>
          </p>
          <p>
            To add images to your gallery, you'll need to place them in the same
            folder as your <code>index.html</code> file. Here's how you can do
            it:
          </p>
          <ol>
            <li>
              <strong>Using Your Own Images:</strong> If you have images on your
              computer, copy them into the <code>my-photo-gallery</code> folder.
              Make sure the image files have recognizable names, such as{" "}
              <code>image1.jpg</code>, <code>image2.jpg</code>, etc.
            </li>
            <li>
              <strong>Downloading Images from the Internet:</strong> If you
              don't have your own images, you can search for images on the
              internet. Right-click on an image you like, choose "Save Image
              As", and save it in the <code>my-photo-gallery</code> folder.
            </li>
          </ol>
          <p>
            <strong>Step 2: Adding Captions:</strong>
          </p>
          <p>
            Once you have your images in place, it's time to add captions.
            Here's the code to create a basic photo gallery with images and
            captions:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
    <h2>Photo Gallery</h2>

    <figure>
        <img src="image1.jpg" alt="Description of image 1">
        <figcaption>Caption for Image 1</figcaption>
    </figure>

    <figure>
        <img src="image2.jpg" alt="Description of image 2">
        <figcaption>Caption for Image 2</figcaption>
    </figure>

    <!-- Add more images and captions as needed -->

</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's understand the HTML elements used here:</p>
          <ul>
            <li>
              <strong>&lt;section&gt;</strong>: Groups related content, in this
              case, our photo gallery.
            </li>
            <li>
              <strong>&lt;figure&gt;</strong>: Represents a self-contained unit
              of content, typically an image with a caption.
            </li>
            <li>
              <strong>&lt;img&gt;</strong>: Displays an image. The{" "}
              <code>src</code> attribute specifies the image file, and the{" "}
              <code>alt</code> attribute provides an alternative text
              description for accessibility.
            </li>
            <li>
              <strong>&lt;figcaption&gt;</strong>: Contains the caption or
              description for the image.
            </li>
          </ul>
          <p>
            <strong>Note on Image Accessibility:</strong> Always provide
            meaningful <code>alt</code> text for your images. This text is
            crucial for users who rely on screen readers or have images disabled
            in their browsers.
          </p>
          <p>
            Save your file and refresh it in your browser. You should now see
            your images with captions displayed in the photo gallery.
          </p>
        </>
      ),
    },
    {
      title: "Finalizing Your Gallery",
      content: (
        <>
          <ScrollToTop />
          <h2>Finishing Touches and Best Practices</h2>
          <p>
            Your photo gallery is almost complete! Let's add some final touches
            and ensure it follows best practices:
          </p>
          <ol>
            <li>
              <strong>Image Optimization:</strong> If your images are large,
              consider optimizing them to improve page load times. Tools like
              TinyPNG or online image compressors can help reduce file sizes
              without compromising quality.
            </li>
            <li>
              <strong>Image Alt Text:</strong> Make sure your <code>alt</code>{" "}
              text accurately describes the image content. This is essential for
              accessibility and SEO.
            </li>
            <li>
              <strong>Image Sizes:</strong> Use consistent image sizes to
              maintain a clean layout. You can adjust image dimensions using CSS
              or by resizing the images before adding them to your gallery.
            </li>
            <li>
              <strong>Responsive Design:</strong> Consider making your gallery
              responsive so that it adapts well to different screen sizes. This
              can be achieved using CSS media queries.
            </li>
            <li>
              <strong>Additional Content:</strong> If you wish to add more
              information about each image, you can include a paragraph or
              additional text within the <code>&lt;figure&gt;</code> tag.
            </li>
          </ol>
          <p>
            Here's an example of the final HTML code with some additional images
            and captions:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<section>
    <h2>My Photo Gallery</h2>

    <figure>
        <img src="image1.jpg" alt="A beautiful sunset over the ocean">
        <figcaption>Beautiful Sunset</figcaption>
        <p>This image captures a breathtaking sunset over the ocean, with vibrant colors and a serene atmosphere.</p>
    </figure>

    <figure>
        <img src="image2.jpg" alt="A vibrant cityscape at night">
        <figcaption>Cityscape at Night</figcaption>
        <p>The city comes alive at night with its dazzling lights and bustling streets.</p>
    </figure>

    <figure>
        <img src="image3.jpg" alt="A peaceful forest with sunlight streaming through the trees">
        <figcaption>Peaceful Forest</figcaption>
        <p>A serene forest scene where sunlight filters through the trees, creating a magical atmosphere.</p>
    </figure>

</section>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            You've now created a fully functional photo gallery with images,
            captions, and additional content. This gallery is accessible,
            follows HTML5 semantics, and provides a great user experience.
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
          Creating a Captivating Photo Gallery with Captions
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

export default PhotoGallery;
