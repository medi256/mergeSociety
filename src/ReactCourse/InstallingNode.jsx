import AdUnit from "../AdUnit";

const InstallingNode = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Setting Up Your Environment</h1>
      <p>
        {`Before we embark on our React journey, we need to ensure our development
        environment is properly set up. This includes installing Node.js and
        npm, choosing a code editor, and creating a new React project. Let's
        start with understanding and installing Node.js.`}
      </p>

      <h2>What is Node.js?</h2>
      <p>
        Node.js is a powerful and versatile JavaScript runtime environment that
        allows developers to run JavaScript code outside of a web browser. It
        was created by Ryan Dahl in 2009 and has revolutionized the way we use
        JavaScript.
      </p>
      <p>
        In the early days of the web, JavaScript was primarily used for adding
        interactivity to web pages within browsers. Node.js changed that by
        bringing JavaScript to the server-side, enabling developers to build
        dynamic and scalable server-side applications using JavaScript.
      </p>

      <h3>Why is Node.js Important for React Development?</h3>
      <ul>
        <li>
          <strong>Build Tools and Package Management:</strong> Node.js provides
          the foundation for popular build tools like webpack, which is used to
          bundle and optimize React applications for production.
        </li>
        <li>
          <strong>npm (Node Package Manager):</strong> Node.js comes bundled
          with npm, a package manager that allows you to install and manage
          dependencies for your React projects. npm makes it easy to access
          thousands of open-source packages and ensures your projects stay
          up-to-date and secure.
        </li>
        <li>
          <strong>Development Server:</strong> Node.js can be used to set up a
          local development server, allowing you to run your React application
          locally during development.
        </li>
      </ul>
      <AdUnit />

      <h2>Installing Node.js and npm</h2>
      <p>
        {`Let's walk through the steps to install Node.js and npm on your machine:`}
      </p>
      <ol>
        <li>
          <strong>Visit the Node.js Website:</strong> Go to the official{" "}
          <a href="https://nodejs.org">Node.js website</a> and download the
          latest LTS (Long-Term Support) version. The LTS version provides
          stability and is recommended for most users.
        </li>
        <li>
          <strong>Run the Installer:</strong> Once the download is complete, run
          the installer. Follow the installation wizard, accepting the default
          options unless you have specific requirements.
        </li>
        <li>
          <strong>Verify the Installation:</strong> Open your terminal or
          command prompt and run the command <code>node -v</code> to check the
          Node.js version. You can also run <code>npm -v</code> to verify the
          npm version.
        </li>
      </ol>

      <p>
        {`With Node.js and npm installed, you've taken a crucial step towards
        setting up your React development environment. Node.js will provide the
        foundation for building and managing your React projects efficiently.`}
      </p>

      <p>
        {`In the next lesson, we'll explore the importance of choosing a good code
        editor and how it can enhance your React development experience. Stay
        tuned for the next exciting chapter in our React journey!`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/benefitReact")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/settingCodeEditor")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InstallingNode;

export const SettingCodeEditor = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Setting Up Your Environment</h1>
      <p>
        {`Before we dive into building React applications, it's crucial to ensure
        our development environment is properly set up. This includes choosing a
        code editor that will become our trusted companion throughout the
        development process.`}
      </p>

      <h2>Why is a Good Code Editor Important?</h2>
      <ul>
        <li>
          <strong>Syntax Highlighting:</strong> A good code editor provides
          syntax highlighting, making it easier to read and understand your
          code. It helps identify different elements like keywords, variables,
          and function calls, improving code readability.
        </li>
        <li>
          <strong>Code Completion:</strong> Code editors offer suggestions as
          you type, saving you time and reducing typos. They can suggest
          variable names, function calls, and even provide documentation, making
          your coding experience more efficient.
        </li>
        <li>
          <strong>Debugging Tools:</strong> Debugging is an essential aspect of
          development, and a good code editor provides built-in debugging tools.
          You can set breakpoints, step through your code, and inspect
          variables, making it easier to identify and fix issues.
        </li>
        <li>
          <strong>Extensions and Customization:</strong>{" "}
          {`Modern code editors
          offer a wide range of extensions and customization options. You can
          tailor the editor to your specific needs, whether it's adding syntax
          highlighting for a specific language or enhancing your productivity
          with code snippets.`}
        </li>
      </ul>

      <h2>Visual Studio Code (VS Code)</h2>
      <p>
        Visual Studio Code, often referred to as VS Code, is a free, open-source
        code editor developed by Microsoft. It has become one of the most
        popular code editors among developers due to its versatility, rich
        feature set, and active community support.
      </p>

      <h3>Why VS Code?</h3>
      <ul>
        <li>
          <strong>Powerful and Lightweight:</strong>{" "}
          {`VS Code strikes a perfect
          balance between power and performance. It's fast, responsive, and
          handles large projects with ease, ensuring a smooth development
          experience.`}
        </li>
        <li>
          <strong>Intelligent Code Completion:</strong> VS Code offers smart
          code completion suggestions based on the context of your code, making
          your coding journey more efficient and enjoyable.
        </li>
        <li>
          <strong>Rich Extension Ecosystem:</strong>{" "}
          {`VS Code boasts a vast
          ecosystem of extensions, allowing you to customize the editor to your
          heart's content. You can find extensions for syntax highlighting, code
          snippets, debugging tools, and much more.`}
        </li>
        <li>
          <strong>Built-in Git Integration:</strong> VS Code has built-in Git
          support, making it easier to manage your source code revisions and
          collaborate with others seamlessly.
        </li>
      </ul>
      <AdUnit />

      <h3>Setting up VS Code for React Development</h3>
      <ol>
        <li>
          <strong>Download and Install:</strong> Go to the{" "}
          <a href="https://code.visualstudio.com">VS Code website</a> and
          download the appropriate version for your operating system.
        </li>
        <li>
          <strong>Open a New Project:</strong> Once installed, open VS Code and
          create a new project. You can use the built-in terminal to navigate to
          your project folder and start coding.
        </li>
        <li>
          <strong>Install React Extensions:</strong>{" "}
          {`VS Code offers a variety of
          React extensions that can enhance your development experience. Explore
          the Extensions marketplace and search for "React" to find options like
          ESLint, Prettier, and React snippets.`}
        </li>
        <li>
          <strong>Getting Started with VS Code:</strong>{" "}
          {`If you're new to VS
          Code, consider watching a tutorial video on YouTube or exploring the
          official documentation. These resources can help you familiarize
          yourself with the editor's basics, keyboard shortcuts, and powerful
          features.`}
        </li>
      </ol>

      <p>
        {`With VS Code set up, you're well on your way to becoming a React
        development powerhouse. In the next lesson, we'll explore how to create
        a new React project and start building your first React components.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/installNode")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/createReactApp")}>
          Next
        </button>
      </div>
    </div>
  );
};
export const CreateReactApp = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Create a New React Project using Create React App</h2>
      <p>
        {`Now that we have Node.js, npm, and a code editor set up, it's time to
        create our very first React project! For this, we'll be using the Create
        React App tool right within our VS Code terminal.`}
      </p>

      <h3>Understanding Create React App</h3>
      <p>
        Create React App is an official tool provided by Facebook, the creators
        of React. It streamlines the project setup process, ensuring we start
        with a modern and optimized development environment. With Create React
        App, we can focus on writing code instead of spending hours on
        configuration.
      </p>

      <h3>Benefits of Using Create React App</h3>
      <ul>
        <li>
          <strong>Convenience:</strong> Create React App automates the project
          setup process, saving us time and effort.
        </li>
        <li>
          <strong>Modern Build Pipeline:</strong> It sets up a modern build
          pipeline using the latest tools and best practices.
        </li>
        <li>
          <strong>Production-Ready Code:</strong> Create React App generates
          optimized code, making our React applications performant and secure.
        </li>
        <li>
          <strong>Regular Updates:</strong> The tool stays up-to-date with the
          latest React features and best practices.
        </li>
      </ul>

      <h3>Creating a New React Project Step-by-Step</h3>
      <ol>
        <li>
          <strong>Step 1: Open VS Code and the Integrated Terminal</strong>
          <ul>
            <li>Open your VS Code application.</li>
            <li>
              {`Go to the "Terminal"`} tab at the top, or use the keyboard
              shortcut <code>Ctrl</code> + <code>`</code> to open the integrated
              terminal.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Create a New Directory (Optional)</strong>
          <ul>
            <li>
              {`If you want to create your React project in a specific directory,
              you can do so within VS Code. Go to the "Explorer" tab on the left
              and click on the "New Folder" icon.`}
            </li>
            <li>{`Name the new folder "my-react-app" and press Enter.`}</li>
          </ul>
        </li>
        <li>
          <strong>Step 3: Initialize a New React Project</strong>
          <ul>
            <li>
              In the integrated terminal, run the following command:{" "}
              <code>npx create-react-app my-app</code>
            </li>
            <li>
              {`Here, "my-app" is the name of your React project. You can choose
              any name you prefer.`}
            </li>
            <li>
              The npx command executes the Create React App package without
              installing it globally.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 4: Wait for the Project to be Set Up</strong>
          <ul>
            <li>
              The command will start downloading the necessary packages and
              setting up the project structure.
            </li>
            <li>
              {`This might take a few minutes, so be patient. You should see a
              message in the terminal saying "Success! Created my-app at ..."`}
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 5: Navigate to the Project Folder</strong>
          <ul>
            <li>
              Use the <code>cd</code> command to navigate into your newly
              created project folder: <code>cd my-app</code>
            </li>
            <li>
              {`You should now see the project files and folders in the "Explorer"
              tab.`}
            </li>
          </ul>
        </li>
        <AdUnit />
        <li>
          <strong>Step 6: Understanding the Project Structure</strong>
          <ul>
            <li>
              {`Before we start building our React app, let's take a moment to
              understand the project structure:`}
            </li>
            <pre>
              <code>
                {`
my-app/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── App.test.js
  │   ├── index.css
  │   ├── index.js
  │   ├── logo.svg
  │   └── serviceWorker.js
  ├── package.json
  ├── README.md
                `}
              </code>
            </pre>
            <li>
              <code>public/</code>: This folder contains static files such as
              the HTML file, icons, and manifest file.
            </li>
            <li>
              <code>src/</code>:{" "}
              {`This is the source folder where you'll be
              writing your React components and application logic.`}
            </li>
            <li>
              <code>package.json</code>: This file contains metadata about your
              project and lists its dependencies.
            </li>
            <li>
              <code>README.md</code>: This file contains information about your
              project.
            </li>
          </ul>
          <p>
            {`You don't `} need to worry about understanding the code in other
            files or folders like <code>node_modules</code>. Just focus on the{" "}
            <code>src</code>{" "}
            {`folder, where you'll be writing your React
            components.`}
          </p>
        </li>
        <li>
          <strong>Step 7: Editing your React components</strong>
          <ul>
            <li>
              <strong>Location:</strong> Open the <code>src</code> folder and
              navigate to <code>App.js</code>.
            </li>
            <li>
              <strong>Code Snippet:</strong> Replace the default content in{" "}
              <code>App.js</code> with the following code snippet:
              <pre>
                <code>
                  {`
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React World!</h1>
    </div>
  );
}

export default App;
`}
                </code>
              </pre>
            </li>
            <li>
              <strong>Explanation:</strong>{" "}
              {`This code creates a simple React
              component that renders a heading saying "Hello, React World!".
              We'll cover the meaning of this code in detail in upcoming
              lessons.`}
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 8: Running your React app</strong>
          <ul>
            <li>
              <strong>Command:</strong> To run your React app, use the following
              command: <code>npm start</code>
            </li>
            <li>
              <strong>Explanation:</strong> This command starts the development
              server, and your app will be accessible at{" "}
              <a href="http://localhost:3000">http://localhost:3000</a>. Any
              changes you make to the source files will automatically trigger a
              reload, so you can see your updates instantly.
            </li>
          </ul>
        </li>
      </ol>
      <h2>You can also watch this video tutorial if you did not understand</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zuyH4QUuTZk?si=hdse8dfAwd7jPpFa"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        {`Congratulations! You've successfully created your first React project
        using Create React App within VS Code. In the next lesson, we'll explore
        the project structure in more detail, understand the purpose of
        different files, and start building exciting React components.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/settingCodeEditor")}>
          back
        </button>
        <button
          onClick={() =>
            (window.location.href = "/underStandingProjectStructure")
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
export const UnderstandingStructure = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h2>Understanding the Project Structure</h2>
      <p>
        {`Now that we've created our first React project using Create React App,
        let's delve into the project structure and explore its components.
        Understanding the project structure will help us efficiently organize
        and navigate our code.`}
      </p>

      <h3>Project Folder Structure</h3>
      <pre>
        <code>
          {`
my-app/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── manifest.json
  │   ├── robots.txt
  │   └── ...
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── App.test.js
  │   ├── index.css
  │   ├── index.js
  │   ├── logo.svg
  │   ├── serviceWorker.js
  │   └── ...
  ├── package.json
  ├── README.md
  ├── node_modules/
  ├── .gitignore
  └── ...
  `}
        </code>
      </pre>

      <h3>Understanding Each File and Folder</h3>
      <ul>
        <li>
          <strong>public/: </strong>This folder contains static files that are
          served directly by the web server. It includes the HTML file (
          <code>index.html</code>), icons (<code>favicon.ico</code>), a manifest
          file (<code>manifest.json</code>), and a robots.txt file for search
          engine optimization.
        </li>
        <li>
          <strong>src/: </strong>This is the heart of your React application.
          {` It's where you'll `} spend most of your time coding. The{" "}
          <code>src</code> folder contains your React components, stylesheets,
          and test files.
        </li>
        <li>
          <strong>package.json: </strong>This file is the heart and soul of your
          project. It contains metadata about your project, including project
          name, version, dependencies, and scripts for various tasks such as
          starting the development server and building the project.
        </li>
        <li>
          <strong>README.md: </strong>
          {`This file is like a welcome sign for your
          project. It contains information about your project, such as a
          description, installation instructions, usage guidelines, and
          contribution guidelines. It's often the first file visitors see when
          they access your project repository.`}
        </li>
        <li>
          <strong>node_modules/: </strong>
          {`This folder is created when you
          install your project's dependencies. It contains all the packages and
          libraries required by your project.`}
        </li>
        <li>
          <strong>.gitignore: </strong>This file specifies which files and
          folders should be ignored by Git, the version control system. It helps
          keep your repository clean and prevents unnecessary files from being
          tracked.
        </li>
      </ul>
      <AdUnit />
      <h3>Navigating the Project Files</h3>
      <p>{`Let's explore some of the key files and their purpose:`}</p>

      <ul>
        <li>
          <strong>index.html: </strong>
          {`This file is the entry point for your web
          application. It's a simple HTML file that links to the bundled
          JavaScript and CSS files generated by Create React App.`}
        </li>
        <li>
          <strong>index.js: </strong>This file is the main entry point for your
          React application. It imports the main component (<code>App.js</code>)
          and renders it to the DOM.{" "}
          {`It's the starting point for your React
          journey.`}
        </li>
        <li>
          <strong>App.js: </strong>
          {`This file contains the main component of your
          React application. It defines the structure and behavior of your
          application's user interface. It's where the magic of React comes to
          life.`}
        </li>
        <li>
          <strong>App.css: </strong>
          {`This file is where you'll add styles
          specific to the`}{" "}
          <code>App</code> component. You can include CSS rules to style your
          React components and make them visually appealing.
        </li>
        <li>
          <strong>App.test.js: </strong>
          {`This file is your testing companion. It
          contains a basic test example using Jest, a testing framework included
          with Create React App. You'll write more tests as your application
          grows.`}
        </li>
      </ul>

      <p>
        {`In the next lesson, we'll dive into the world of JSX, the syntax used to
        define React components. We'll explore how JSX allows us to seamlessly
        mix HTML-like syntax with JavaScript to build dynamic and interactive
        user interfaces.`}
      </p>

      <p>
        Stay tuned for the exciting journey into JSX and the wonders it brings
        to React development!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/createReactApp")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/introJsx")}>
          Next
        </button>
      </div>
    </div>
  );
};
