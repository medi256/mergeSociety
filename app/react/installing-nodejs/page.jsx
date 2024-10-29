import Button from "@/app/button";

export const metadata = {
  title: "How to Install Node.js and npm",
  description:
    "Learn how to easily install Node.js and npm on your computer. Step-by-step tutorial for beginners starting with React development.",
  keywords: [
    "Node.js installation",
    "npm setup",
    "React development",
    "web development tools",
    "JavaScript runtime",
    "package manager",
    "beginner's guide",
  ],
  openGraph: {
    title: "Install Node.js & npm: A Guide for React Beginners",
    description:
      "Master the first step in React development: installing Node.js and npm. Clear instructions and expert tips for a smooth setup.",
    type: "article",
  },
};

const InstallingNode = () => {
  return (
    <div className="lesson-container">
      <h1>How to Install Node.js & npm: A Guide for React Beginners</h1>

      <p>
        Before we start building React applications, there are two key tools we
        need to set up on your computer: <strong>Node.js </strong> and{" "}
        <strong>npm </strong>. These tools will help you create and manage your
        React projects. Don’t worry if these terms sound a bit confusing at
        first; I’ll break them down and explain why we need them.
      </p>

      <h2>What is Node.js?</h2>
      <p>
        Node.js is like a helper that allows you to run JavaScript on your
        computer, outside of the browser. Normally, JavaScript is used to make
        websites interactive, but it runs inside a web browser like Chrome or
        Firefox. However, when you start working with tools like React, you’ll
        need JavaScript to run on your computer itself, and that’s what
        <strong> Node.js </strong> allows you to do.
      </p>
      <p>
        Think of it this way: If you want to build a treehouse, you’ll need
        tools like a hammer and nails. In the world of JavaScript,{" "}
        <strong>Node.js </strong>
        is one of those essential tools. It allows us to build and run
        JavaScript-based projects like React.
      </p>

      <h2>What is npm?</h2>
      <p>
        Now, along with Node.js, we also need something called{" "}
        <strong> npm </strong>, which stands for{" "}
        <strong>Node Package Manager </strong>. In simple terms, npm is a tool
        that helps you install and manage software packages (pieces of code)
        that you’ll use in your React project.
      </p>
      <p>
        Let’s go back to the treehouse example. Imagine you’re building your
        treehouse, but you don’t want to make every part from scratch. You might
        buy ready-made parts, like pre-cut wooden boards or ladders. npm is like
        a giant store that contains thousands of ready-made pieces of code
        (called <strong>packages </strong> ) that you can use in your projects,
        so you don’t have to build everything yourself.
      </p>
      <p>
        Together, <strong>Node.js </strong> and <strong> npm </strong> will make
        your life much easier as a React developer by helping you run your
        project and use all the great tools that others have already created.
      </p>

      <h2>Step-by-Step Guide: Installing Node.js and npm</h2>

      <p>
        Now that you know what Node.js and npm are, let’s go ahead and install
        them on your computer. The good news is that npm comes bundled with
        Node.js, so by installing Node.js, you’ll automatically get npm too.
        Here’s how to do it:
      </p>

      <h3>Step 1: Go to the Node.js Website</h3>
      <p>
        First, open your web browser and go to the official Node.js website:{" "}
        <a
          href="https://www.nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.nodejs.org/
        </a>
        .
      </p>

      <p>
        When you get there, you’ll see two versions of Node.js available for
        download. One is labeled as <strong> LTS (Long Term Support)</strong>,
        and the other is the <strong>Current </strong> version. For beginners,
        it’s best to go with the LTS version, as it’s more stable and reliable.
      </p>
      <p>
        <strong>
          Click the green button that says "LTS" to start downloading Node.js.
        </strong>
      </p>

      <h3>Step 2: Install Node.js</h3>
      <p>
        Once the download is complete, open the file to begin the installation
        process. This will open a setup wizard that will guide you through the
        installation. Here’s what to do:
      </p>
      <ul>
        <li>Click "Next" to move through the installation screens.</li>
        <li>Agree to the license agreement when prompted.</li>
        <li>
          Keep the default installation settings (you don’t need to change
          anything here).
        </li>
        <li>Click "Install" and wait for the process to complete.</li>
      </ul>
      <p>
        When the installation finishes, click "Finish" to close the setup.
        Congratulations, you’ve just installed Node.js and npm on your computer!
      </p>

      <h3>Step 3: Verify the Installation</h3>
      <p>
        After installing Node.js, it’s a good idea to make sure everything was
        installed correctly. To do this, you’ll need to use your computer’s
        <strong>command line </strong> (also known as Terminal on Mac or Command
        Prompt on Windows). Don’t worry if you’ve never used the command line
        before—we’ll guide you through it step by step.
      </p>
      <ul>
        <li>
          Open your command line. On Windows, you can search for "Command
          Prompt" in the Start menu. On a Mac, open the "Terminal" application
          (you can find it using Spotlight Search).
        </li>
        <li>
          Once your command line is open, type the following command and press
          Enter:
          <strong>node -v</strong>
        </li>
      </ul>
      <p>
        This command asks your computer to tell you what version of Node.js is
        installed. If everything worked correctly, you’ll see a version number
        pop up, like `v16.x.x` (the numbers might be different depending on the
        version you installed).
      </p>
      <p>
        Next, we’ll check if npm was installed correctly. In the same command
        line, type the following and press Enter:
        <strong>npm -v</strong>
      </p>
      <p>
        Just like with Node.js, this will show the version of npm that’s
        installed on your computer. You should see a number like `8.x.x` (again,
        the numbers might be different based on your installation).
      </p>
      <p>
        If you see version numbers for both Node.js and npm, you’re good to go!
        Everything is installed correctly.
      </p>

      <h2>What’s Next?</h2>
      <p>
        Now that Node.js and npm are installed, you’re ready to move forward and
        start creating React projects. In the next lesson, we’ll set up a code
        editor (I recommend Visual Studio Code) and create your first React
        project using a tool called <strong>Create React App </strong>. Stay
        tuned!
      </p>
      <Button whereToGo={"code-editor-setup"} />
    </div>
  );
};

export default InstallingNode;
