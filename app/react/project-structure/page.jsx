import Button from "@/app/button";

export const metadata = {
  title: "Understanding React Project Structure",
  description:
    "Learn the ins and outs of React project structure. Detailed explanations of folders, files, and how they work together in a React application created with Create React App.",
  keywords: [
    "React project structure",
    "Create React App folder structure",
    "React file organization",
    "React app anatomy",
    "React project files explained",
    "React for beginners",
    "React application architecture",
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/react/project-structure",
  },
  openGraph: {
    title: "Master React Project Structure: From Beginner to Pro",
    description:
      "Dive deep into React project structure. Understand every folder and file in your React app, and learn how they work together to create powerful web applications.",
  },
};

const PageStructure = () => {
  return (
    <div className="lesson-container">
      <h1>
        Understanding React Project Structure: A Comprehensive Guide for
        Beginners
      </h1>

      <p>
        When you first create a new React project, you might feel a little
        overwhelmed by all the files and folders that appear. But don’t worry!
        We’re going to walk through each part of the project step by step, so
        you’ll understand what everything does and why it’s there.
      </p>

      <h2>Folder and File Structure of a React Project</h2>
      <p>
        Here’s what the typical project structure looks like right after you run
        the <strong>Create React App </strong> command:
      </p>

      <pre>
        <code>{`
my-first-react-app/
├── node_modules/
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
│   └── logo.svg
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
`}</code>
      </pre>

      <p>
        Let’s go through each part of this structure to understand what it all
        means.
      </p>

      <h2>
        The <code>node_modules/</code> Folder
      </h2>
      <p>
        This is one of the most important folders in your project, but it’s also
        the one you’ll probably never touch directly. The{" "}
        <strong> node_modules/</strong>
        folder contains all the dependencies (or libraries) that your project
        needs to work.
      </p>
      <p>
        Think of it like a toolbox. Whenever you use React or another library,
        the actual code for that tool lives inside{" "}
        <strong> node_modules/</strong>. You don’t need to worry about modifying
        any files here—it’s all managed by
        <strong> npm </strong>.
      </p>
      <p>
        It might seem big and full of files, but that’s because there are a lot
        of tools React relies on to work smoothly. Whenever you install a new
        package (like React Router, for example), it gets added to this folder.
      </p>

      <h2>
        The <code>public/</code> Folder
      </h2>
      <p>
        The <code>public/ </code> folder contains files that are publicly
        accessible by the browser. Anything in this folder can be accessed
        directly from the browser, which makes it important for storing static
        files that don’t change, like images, icons, and the main{" "}
        <strong> index.html </strong>
        file.
      </p>

      <h3>
        Key Files Inside <code>public/</code>:
      </h3>
      <ul>
        <li>
          <code> favicon.ico </code> : This is the small icon that appears next
          to your website’s name in the browser tab. You can replace it with
          your own logo or icon if you like.
        </li>
        <li>
          <code>index.html </code> : This is the main HTML file for your React
          app. It’s the single HTML file where your entire React app is
          injected. You don’t need to edit this file often, but it’s important
          to know that this is where React attaches your app to the DOM.
          <br />
          Inside this file, there’s a {`<div>`} with an `id="root"`. This is
          where React will "mount" your app, meaning it will insert everything
          you build into this single {`<div>`}.
        </li>
        <li>
          <code> manifest.json</code> : This file contains metadata about your
          app, like its name, icons, and theme color. It’s used when your app is
          installed on mobile devices or used as a Progressive Web App (PWA).
        </li>
      </ul>

      <h2>
        The <code>src/</code> Folder
      </h2>
      <p>
        This is where the magic happens! The **src/** folder contains all the
        source code for your React app. Every time you write new code, you’ll be
        working inside this folder. Let’s take a closer look at the important
        files here:
      </p>

      <h3>
        Key Files Inside <code>src/</code>:
      </h3>
      <ul>
        <li>
          <code> App.js</code> : This is the main component of your React app.
          When you start coding, you’ll write most of your logic inside
          <code> App.js </code>. Think of it as the brain of your application,
          where you control what the app does and how it looks.
          <br />
          In React, everything is built using components, and{" "}
          <code>App.js </code> is the main component that holds the other
          components. When you start building your project, you’ll add more
          components, but this file is where you usually start.
        </li>
        <li>
          <code> App.css</code> : This file contains the styles (CSS) for the
          <code> App.js</code> component. If you want to change how your app
          looks (colors, fonts, layout), you can edit this file.
        </li>
        <li>
          <code> App.test.js </code>: This file is used for testing your React
          components. Don’t worry about this too much for now, especially if
          you’re a beginner, but know that this file is where you can write
          tests to make sure your app is working correctly.
        </li>
        <li>
          <code>index.js </code>: This is a very important file. It’s the entry
          point of your app. <code>index.js </code> is responsible for rendering
          the <code>App.js </code> component inside the `index.html` file we
          talked about earlier.
          <br />
          The main job of this file is to "mount" (or attach) the **App**
          component to the DOM. It looks for the {`<div>`} with `id="root"` in
          <code>index.html </code> and inserts your React app there.
        </li>
        <li>
          <code> index.css</code>: This file contains global styles for your
          entire app. Any styles written here will apply to all components in
          your app.
        </li>
        <li>
          <code>logo.svg </code>: This is the React logo that you see when you
          first run your app. You can replace this with your own logo or image
          later.
        </li>
      </ul>

      <h2>Other Important Files</h2>

      <h3>
        The <code>package.json</code> File
      </h3>
      <p>
        The <strong>package.json </strong> file is like the "blueprint" for your
        project. It contains important information like:
      </p>
      <ul>
        <li>
          The <strong>name </strong> and <strong>version </strong> of your
          project.
        </li>
        <li>
          A list of <strong> dependencies</strong> (libraries) your project
          needs to run. For example, you’ll see React listed here because your
          app needs it to work. Any time you install a new library (using npm),
          it gets added to this list.
        </li>
        <li>
          <code>Scripts </code> : These are commands that help you run or build
          your app. For example, the script `"start"` runs your app in
          development mode. You’ll usually run this using `npm start`.
        </li>
      </ul>

      <h3>
        The <code>README.md</code> File
      </h3>
      <p>
        The <code>README.md </code> file contains information about your
        project. This is where you can write instructions or notes for anyone
        looking at your project. If you share your project with others (like on
        GitHub), this file will be the first thing people see when they visit
        your project page.
      </p>

      <h3>
        The <code>.gitignore</code> File
      </h3>
      <p>
        The <code>.gitignore </code> file tells Git which files or folders to
        ignore when you push your project to a repository (like GitHub). This is
        useful for avoiding unnecessary files (like{" "}
        <strong>node_modules/ </strong> ) from being uploaded to your
        repository.
      </p>

      <h2>Understanding How Everything Works Together</h2>
      <p>
        Now that you understand what each file and folder does, let’s quickly
        summarize how they all work together:
      </p>
      <ul>
        <li>
          <code> index.html</code>: The single HTML file where your React app is
          rendered.
        </li>
        <li>
          <code>index.js</code>: The JavaScript file that "mounts" your React
          app to the DOM (inside the `root` div in <strong>index.html </strong>{" "}
          ).
        </li>
        <li>
          <code> App.js</code>: The main component of your React app, where most
          of your code will go.
        </li>
        <li>
          <code>node_modules/ </code>: Contains all the libraries and tools your
          project depends on.
        </li>
        <li>
          <code>public/</code>: Contains files that are publicly accessible,
          like
          <code>index.html</code> and icons.
        </li>
      </ul>

      <p>
        With this structure in mind, you now have a clear idea of where to write
        your code, where your styles go, and how everything connects.
      </p>

      <h2>What’s Next?</h2>
      <p>
        Now that you understand the project structure, you’re ready to start
        writing code! In the next section, we’ll dive deeper into creating and
        organizing components, styling them, and building interactive features
        for your React app.
      </p>

      <Button whereToGo={"jsx-intro"} />
    </div>
  );
};

export default PageStructure;
