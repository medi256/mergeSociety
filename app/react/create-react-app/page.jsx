
import Button from "@/app/button";

export const metadata = {
  title:
    "How to Create Your First React App: A Beginner's Guide to Create React App",
  description:
    "Learn how to set up your first React project using Create React App. Step-by-step tutorial for beginners, including project structure and running your app.",
  keywords: [
    "Create React App",
    "React project setup",
    "beginner React tutorial",
    "npm create-react-app",
    "React development environment",
    "React project structure",
    "start React app",
  ],
  openGraph: {
    title: "Create Your First React App in Minutes: Beginner's Guide",
    description:
      "Master Create React App with our easy-to-follow tutorial. Set up your React project, understand its structure, and start coding in no time!",
    type: "article",
  },
};

const CreateReactApp = () => {
  return (
    <div className="lesson-container">
      
      <h1>Creating a New React Project Using Create React App</h1>

      <p>
        Now that you have <code>Node.js </code> , <code>npm </code>, and{" "}
        <strong> VS Code</strong> installed and set up, it’s time to create your
        very first React project! This will be your workspace where you’ll
        write, test, and run your React code. We’ll be using a tool called
        **Create React App** to make this process easy and fast.
      </p>

      <h2>What is Create React App?</h2>
      <p>
        <code> Create React App </code> is a tool developed by the React team to
        help you quickly set up a React project with all the necessary files and
        configurations. Think of it as a "starter kit" for React. You won’t have
        to manually set up a bunch of files or worry about configuration—Create
        React App does all that for you.
      </p>
      <p>
        It’s like getting a ready-to-cook meal kit. Instead of buying each
        ingredient separately and figuring out how to prepare them, you get
        everything neatly packed and ready to use.
      </p>

      <h2>Why Use Create React App?</h2>
      <p>
        There are many benefits to using Create React App, especially for
        beginners:
      </p>
      <ul>
        <li>
          <strong> Quick setup</strong> : It creates all the files you need to
          start coding right away.
        </li>
        <li>
          <strong>No configuration needed </strong> : Everything is
          pre-configured so you don’t have to worry about setting up things like
          Webpack, Babel, or other tools.
        </li>
        <li>
          <strong> Development server </strong> : It comes with a built-in
          server, so you can easily run and test your project as you build it.
        </li>
        <li>
          <strong>Ready for production </strong> : When you’re ready to publish
          your project, Create React App will help you create a version of your
          project that’s optimized for performance.
        </li>
      </ul>

      <h2>Step-by-Step Guide: Creating a React Project</h2>
      <p>
        Let’s walk through the steps to create your first React project using
        <strong> Create React App</strong> .
      </p>

      <h3>Step 1: Open Your Terminal</h3>
      <p>
        The first thing you need to do is open a terminal (also called a command
        line). In VS Code, there’s a built-in terminal that you can use, so
        let’s do that:
      </p>
      <ul>
        <li>Open VS Code.</li>
        <li>
          Go to the top menu and click on <code>{`Terminal > `}</code>{" "}
          <code>New Terminal</code>. This will open the terminal at the bottom
          of your screen.
        </li>
        <li>
          If you’re not using VS Code, you can open the terminal on your
          computer by searching for "Command Prompt" (on Windows) or "Terminal"
          (on macOS/Linux).
        </li>
      </ul>

      <h3>Step 2: Navigate to Your Desired Folder</h3>
      <p>
        Next, you need to decide where on your computer you want to create your
        React project. This could be inside a folder where you keep all your
        coding projects, for example. Here’s how you can navigate to the folder
        you want to work in:
      </p>
      <ul>
        <li>
          In the terminal, type `cd path/to/your/folder`. Replace
          `path/to/your/folder` with the actual path of the folder where you
          want to create the React project.
        </li>
        <li>
          For example, if you have a folder called "ReactProjects" on your
          Desktop, you would type `cd Desktop/ReactProjects`.
        </li>
        <li>
          If you don’t have a specific folder in mind, you can skip this step,
          and it will create the project in the folder you’re currently in.
        </li>
      </ul>
      
      <h3>Step 3: Run the Create React App Command</h3>
      <p>
        Now comes the exciting part: creating your project! To do this, we’ll
        use <strong>npm </strong> (which you installed with Node.js). In the
        terminal, run the following command:
      </p>
      <pre>
        <code>npx create-react-app my-first-react-app</code>
      </pre>
      <p>Here’s what this command does:</p>
      <ul>
        <li>
          <code>npx </code>: This is a tool that comes with npm. It allows you
          to run commands without needing to install the tool globally on your
          computer.
        </li>
        <li>
          <code> create-react-app </code> : This is the name of the tool we’re
          using to create the React project.
        </li>
        <li>
          <code> my-first-react-app</code> : This is the name of your project.
          You can change this to anything you want, but for now, we’ll use this
          name to keep things simple.
        </li>
      </ul>
      <p>
        Once you hit <strong>Enter </strong> , Create React App will start
        building your project. It might take a minute or two to install
        everything. During this time, it’s setting up all the necessary files
        and dependencies for you. You’ll see a lot of messages in the terminal,
        but don’t worry—this is completely normal!
      </p>

      <h3>Step 4: Open Your New React Project</h3>
      <p>
        After the installation is complete, you’ll have a new folder called
        `my-first-react-app` (or whatever you named your project) in the folder
        where you ran the command. This folder contains all the files for your
        React project.
      </p>
      <ul>
        <li>
          To navigate into your new project folder, type the following command
          in the terminal and hit <strong>Enter </strong> :{" "}
        </li>
        <pre>
          <code>cd my-first-react-app</code>
        </pre>
        <li>
          This command moves you into your project folder, where you’ll be able
          to start working with your React code.
        </li>
      </ul>

      <h3>Step 5: Start the Development Server</h3>
      <p>
        Before you start coding, let’s see if everything is working correctly by
        running your React project. React comes with a built-in{" "}
        <strong>development server </strong> that allows you to see your project
        in action while you’re building it. To start the server, type the
        following command:
      </p>
      <pre>
        <code>npm start</code>
      </pre>
      <p>
        This will start the development server, and your React app will
        automatically open in your web browser. By default, it opens on
        <strong> http://localhost:3000</strong> . If everything is set up
        correctly, you should see the default React welcome page that looks like
        this:
      </p>
      <p>
        <img
          src="https://reactjs.org/logo-og.png"
          alt="React logo"
          style={{ width: "300px", display: "block", margin: "0 auto" }}
        />
      </p>
      <p>
        Congratulations! You’ve successfully created your first React project
        and it’s running locally on your computer!
      </p>
      
      <h2>What’s Inside Your New React Project?</h2>
      <p>
        Now that your React app is up and running, let’s take a quick look at
        the project structure. Inside the `my-first-react-app` folder, you’ll
        see several files and folders that were automatically created for you:
      </p>
      <ul>
        <li>
          <code> node_modules/ </code> : This folder contains all the
          dependencies (external libraries) that your project needs to run. You
          don’t need to worry about these files.
        </li>
        <li>
          <code>public/ </code> : This folder contains files that are public,
          meaning they can be accessed by the user’s browser. It includes files
          like `index.html`, where your React app is displayed.
        </li>
        <li>
          <code>src/ </code> : This is the most important folder—it contains
          your React code! You’ll be spending most of your time working inside
          this folder. Inside, you’ll see:
          <ul>
            <li>
              <code> App.js </code> : This is the main component of your React
              app, where most of your code will go.
            </li>
            <li>
              <code>index.js </code> : This is the entry point for your app.
              It’s where React renders the `App` component and mounts it to the
              `index.html` file.
            </li>
          </ul>
        </li>
        <li>
          <code> package.json </code> : This file lists the dependencies your
          project needs, along with other metadata like the project name and
          version.
        </li>
      </ul>

      <h2>What’s Next?</h2>
      <p>
        Now that you’ve set up your first React project, you’re ready to start
        building amazing things with React! In the next section, we’ll dive into
        <strong> JSX </strong> (JavaScript XML) and see how React allows you to
        build user interfaces using components.
      </p>

      <Button whereToGo={"project-structure"} />
    </div>
  );
};

export default CreateReactApp;
