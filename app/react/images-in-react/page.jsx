import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Working with Images in React - MergeSociety",
  description:
    "Discover how to work with images in React, including how to import, display, and style images in your components. This step-by-step guide covers common issues and best practices.",
  keywords:
    "React, images in React, importing images, displaying images, styling images, React tutorial, web development, MergeSociety",
  robots: "index, follow",
  openGraph: {
    title: "Working with Images in React - MergeSociety",
    description:
      "A comprehensive guide on working with images in React, covering how to import, display, and style images within your applications.",

    type: "article",
  },
};

const Images = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Working with Images in React</h1>
      <p>
        When working with images in React, there are a few important things to
        understand, like where to place your images, how to import them, and how
        to display them inside your components. Let's walk through everything
        step-by-step.
      </p>

      <h2>1. Placing Your Images</h2>
      <p>
        First, it's important to know where to store your images in a React
        project. By default, when you create a new React project, you'll see a
        folder called <code>public</code> and a folder called <code>src</code>.
      </p>
      <ul>
        <li>
          <strong>The public folder:</strong> This folder is for static files,
          like images, that won’t change as your application runs. Images placed
          here can be accessed directly from the HTML file.
        </li>
        <li>
          <strong>The src folder:</strong> This folder is where you write your
          components and logic. Images placed here will need to be imported into
          your components before being used.
        </li>
      </ul>

      <h3>Where Should You Store Your Images?</h3>
      <p>
        For most cases, you’ll want to store your images in the <code>src</code>{" "}
        folder, because you’ll likely use them in your components.
      </p>

      <h2>2. Adding an Image to Your Project</h2>
      <p>
        To demonstrate how to work with images in React, let's walk through the
        process of adding an image to a component.
      </p>

      <h3>Step 1: Add the Image to Your src Folder</h3>
      <p>
        First, copy an image into your project’s <code>src</code> folder. For
        example, you can create a new folder inside <code>src</code> called{" "}
        <code>images</code> and place your image there.
      </p>
      <p>
        Let’s say you added an image called <code>logo.png</code> to the{" "}
        <code>src/images</code> folder.
      </p>

      <h3>Step 2: Import the Image in Your Component</h3>
      <p>
        In React, to use an image in your JSX code, you first need to import it.
        Here’s how you can import the image into a component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import logo from './images/logo.png'; // Adjust the path based on where your image is stored

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src={logo} alt="App Logo" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h3>Explanation:</h3>
      <ul>
        <li>
          <strong>Importing the image:</strong> The line{" "}
          <code>import logo from './images/logo.png';</code> tells React to
          import the image file so we can use it inside the component.
        </li>
        <li>
          <strong>Displaying the image:</strong> Inside the JSX, we use an{" "}
          <code>&lt;img&gt;</code> tag and set the <code>src</code> attribute to
          the image we imported.
        </li>
        <li>
          <strong>The alt attribute:</strong> This is for accessibility. If the
          image fails to load, the text inside the <code>alt</code> attribute
          will be shown instead. It’s also helpful for screen readers.
        </li>
      </ul>

      <h2>3. Working with Images in the public Folder</h2>
      <p>
        Sometimes, you might want to store your images in the{" "}
        <code>public</code> folder. This is useful when you want your images to
        be available to the browser directly, without having to import them in
        your components.
      </p>
      <h3>Step 1: Place the Image in the public Folder</h3>
      <p>
        Let’s say you have an image called <code>banner.jpg</code> that you
        place directly inside the <code>public</code> folder.
      </p>
      <h3>Step 2: Access the Image Without Importing</h3>
      <p>
        When you place images in the <code>public</code> folder, you don’t need
        to import them. You can reference them by their URL relative to the{" "}
        <code>public</code> folder, like this:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src="/banner.jpg" alt="Website Banner" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <h2>4. Using Dynamic Image Paths</h2>
      <p>
        Sometimes, you might want to display images based on certain conditions
        or data. In these cases, you can use dynamic image paths. Here's an
        example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import apple from './images/apple.png';
import banana from './images/banana.png';

const App = () => {
  const fruits = [
    { name: 'Apple', image: apple },
    { name: 'Banana', image: banana },
  ];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <h2>{fruit.name}</h2>
          <img src={fruit.image} alt={fruit.name} />
        </div>
      ))}
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>5. Styling Images in React</h2>
      <p>You can style images in React in two ways:</p>
      <h3>Inline Styling:</h3>
      <pre>
        <code>
          {`<img src={logo} alt="App Logo" style={{ width: '200px', height: 'auto' }} />`}
        </code>
      </pre>

      <h3>Using CSS Classes:</h3>
      <p>
        Create a CSS file (e.g., <code>App.css</code>) and add some styles for
        your image:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="css" style={docco}>
            {`/* App.css */
.image-logo {
  width: 200px;
  height: auto;
  border-radius: 10px;
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Then, import the CSS file and apply the class to your image:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';
import './App.css';
import logo from './images/logo.png';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src={logo} alt="App Logo" className="image-logo" />
    </div>
  );
};

export default App;`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>6. Common Issues with Images in React</h2>
      <h3>Issue 1: Image Not Displaying</h3>
      <p>If your image isn't displaying, check:</p>
      <ul>
        <li>
          <strong>Correct Path:</strong> Ensure the path to the image is
          correct.
        </li>
        <li>
          <strong>File Location:</strong> Verify the image is in the right
          location.
        </li>
      </ul>

      <h3>Issue 2: Image Loads Slowly</h3>
      <p>
        If your image loads slowly, optimize its file size before using it in
        your app.
      </p>
      <AdUnit />
      <h2>7. Summary</h2>
      <p>
        Working with images in React is straightforward. Store images in the{" "}
        <code>src</code> folder and import them into your components, or place
        them in the <code>public</code> folder for direct access. You can also
        style and dynamically load images in React.
      </p>

      <Button whereToGo={"jsx-best-practices"} />
    </div>
  );
};

export default Images;
