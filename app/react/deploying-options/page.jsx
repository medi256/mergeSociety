import Button from "@/app/button";

export const metadata = {
  title: "Deploying React Applications: Netlify, Vercel, and GitHub Pages",
  description:
    "Learn how to deploy your React app with ease. Explore the benefits and steps for deploying on Netlify, Vercel, and GitHub Pages.",
  openGraph: {
    title: "React Deployment Guide",
    description:
      "Discover the world of React deployment. Choose the right platform and deploy your app seamlessly.",
  },

  alternates: {
    canonical: "https://www.mergesociety.com/react/deploying-options",
  },

  keywords: [
    "React",
    "Deployment",
    "Netlify",
    "Vercel",
    "GitHub Pages",
    "Seamless Deployment",
    "Performance",
    "Scalability",
  ],
};

const Deploying = () => {
  return (
    <div className="lesson-container">
      <h1>Deploying Options in React: Netlify, Vercel, and GitHub Pages</h1>
      <p>
        Deploying your React application is an exciting step towards making it
        accessible to users worldwide. Several platforms offer seamless
        deployment options, each with unique features and benefits. Let's
        explore how to efficiently deploy your React applications using Netlify,
        Vercel, and GitHub Pages.
      </p>

      <h3>Understanding Deployment Options</h3>
      <p>
        Deployment refers to the process of making your application accessible
        to users on the web. There are various platforms that offer deployment
        services, each with its own set of features and advantages. Let's dive
        into the benefits of Netlify, Vercel, and GitHub Pages.
      </p>

      <h4>What are Deployment Options?</h4>
      <p>
        Deployment options refer to the different platforms and services
        available for deploying your React application. Each option provides its
        own set of tools and capabilities, simplifying the process of making
        your application accessible by handling server setup, scaling, and
        maintenance.
      </p>

      <h4>Why Use Deployment Options?</h4>
      <p>Deployment options offer several benefits:</p>
      <ul>
        <li>
          <strong>Seamless Deployment:</strong> They provide an easy and
          seamless way to deploy your React application, handling server setup,
          scaling, and maintenance, allowing you to focus on building your
          application.
        </li>
        <li>
          <strong>Performance and Scalability:</strong> They offer
          high-performance and scalable infrastructure, ensuring your
          application can handle increased traffic and load.
        </li>
        <li>
          <strong>Custom Domains:</strong> They allow you to use custom domains,
          enhancing the professionalism and personalization of your project.
        </li>
      </ul>

      <h3>Deployment Options: Netlify, Vercel, and GitHub Pages</h3>
      <p>
        Let's explore three popular deployment options for React applications:
      </p>
      <ol>
        <li>
          <strong>Netlify:</strong> A widely used platform for deploying static
          sites and web applications, offering features like continuous
          deployment, serverless functions, and form handling. Netlify also
          provides a generous free tier for static site hosting.
        </li>
        <li>
          <strong>Vercel:</strong> A powerful deployment platform providing
          features like serverless functions, edge caching, and preview
          deployments. Vercel also offers a generous free tier for static site
          hosting.
        </li>
        <li>
          <strong>GitHub Pages:</strong> A service provided by GitHub that
          allows you to host static websites directly from your GitHub
          repository. It's great for open-source projects, documentation, or
          personal websites.
        </li>
      </ol>

      <h3>Steps to Prepare Your React App for Deployment</h3>
      <p>
        Before deploying your React application, you need to build it. Follow
        these steps:
      </p>
      <ol>
        <li>
          <strong>Stop the Live Server:</strong> If your live server is running
          in VSCode, stop it. This ensures there are no issues while building
          the project.
        </li>
        <li>
          <strong>Build Your React Application:</strong> Open your terminal in
          VSCode and run the command:
          <pre>
            <code>npm run build</code>
          </pre>
          This command creates a production-ready build of your application,
          optimized for performance. It compiles your application into static
          files that can be efficiently served by a web server. The output is
          stored in a new folder named <code>build</code> in your project
          directory.
        </li>
        <li>
          <strong>Locate the Build Folder:</strong> After running{" "}
          <code>npm run build</code>, a new folder named <code>build</code> will
          appear in your project directory. This folder contains all the
          necessary files for deployment, including HTML, CSS, JavaScript, and
          other assets. You can think of this folder as a self-contained version
          of your application, ready to be uploaded to a web server.
        </li>
      </ol>

      <h3>Steps to Deploy on Netlify</h3>
      <p>Here are the steps to deploy your React application on Netlify:</p>
      <ol>
        <li>
          <strong>Create a Netlify Account:</strong> Go to{" "}
          <a href="https://www.netlify.com/">Netlify</a> and sign up for an
          account if you don't already have one. You can sign up using your
          email address or by connecting your GitHub, GitLab, or Bitbucket
          account. Once signed up, log in to your account.
        </li>
        <li>
          <strong>Drag and Drop the Build Folder:</strong> After logging in, go
          to the "Sites" page and click on "New site from Git." Ignore the
          options for Git integration. Instead, drag and drop the{" "}
          <code>build</code> folder into the Netlify interface. Netlify will
          automatically detect your build folder and start the deployment
          process.
        </li>
        <li>
          <strong>Configure Settings:</strong> Netlify will automatically start
          deploying your site. You can configure additional settings such as
          custom domains and continuous deployment. Custom domains allow you to
          use a personalized URL for your site, enhancing its professionalism.
          Continuous deployment ensures that your site is automatically updated
          whenever you make changes to your source code.
        </li>
        <li>
          <strong>Access Your Deployed Site:</strong> Once the deployment is
          complete, Netlify will provide a URL for your site. You can access
          your deployed React application using this URL. You can also customize
          the URL by configuring a custom domain in the Netlify dashboard.
        </li>
      </ol>

      <h3>Steps to Deploy on Vercel</h3>
      <p>Here are the steps to deploy your React application on Vercel:</p>
      <ol>
        <li>
          <strong>Create a Vercel Account:</strong> Go to{" "}
          <a href="https://vercel.com/">Vercel</a> and sign up for an account if
          you don't already have one. You can sign up using your email address
          or by connecting your GitHub, GitLab, or Bitbucket account. Once
          signed up, log in to your account.
        </li>
        <li>
          <strong>Drag and Drop the Build Folder:</strong> After logging in, go
          to the "Import Project" page. Instead of using Git integration, drag
          and drop the <code>build</code> folder into the Vercel interface.
          Vercel will automatically detect your build folder and start the
          deployment process.
        </li>
        <li>
          <strong>Configure Settings:</strong> Vercel will automatically start
          deploying your site. You can configure additional settings such as
          custom domains and continuous deployment. Custom domains allow you to
          use a personalized URL for your site, enhancing its professionalism.
          Continuous deployment ensures that your site is automatically updated
          whenever you make changes to your source code.
        </li>
        <li>
          <strong>Access Your Deployed Site:</strong> Once the deployment is
          complete, Vercel will provide a URL for your site. You can access your
          deployed React application using this URL. You can also customize the
          URL by configuring a custom domain in the Vercel dashboard.
        </li>
      </ol>

      <h3>Steps to Deploy on GitHub Pages</h3>
      <p>
        Here are the steps to deploy your React application on GitHub Pages:
      </p>
      <ol>
        <li>
          <strong>Create a GitHub Repository:</strong> Go to{" "}
          <a href="https://github.com/">GitHub</a> and create a new repository
          for your React project. Name your repository appropriately, as this
          will be part of the URL for your deployed site. For example, if your
          GitHub username is <code>username</code> and your repository is named{" "}
          <code>my-react-app</code>, the URL for your deployed site will be{" "}
          <code>https://username.github.io/my-react-app</code>.
        </li>
        <li>
          <strong>Upload the Build Folder:</strong> On the GitHub repository
          page, click on "Add file" and then "Upload files." Drag and drop the
          contents of the <code>build</code> folder (not the folder itself, but
          its contents) into the repository. Commit the changes by providing a
          commit message and clicking "Commit changes."
        </li>
        <li>
          <strong>Configure GitHub Pages:</strong> In your repository settings,
          scroll down to the "GitHub Pages" section. Here, you can select the
          branch and directory you want to deploy from. Select the{" "}
          <code>main</code> branch and the <code>root</code> directory (where
          you uploaded the build files). Save the settings.
        </li>
        <li>
          <strong>Access Your Deployed Site:</strong> GitHub Pages will
          automatically build and deploy your site. You can access your site
          using the provided URL. You can also configure a custom domain for
          your GitHub Pages site if desired.
        </li>
      </ol>

      <h3>Summary</h3>
      <ul>
        <li>
          Netlify, Vercel, and GitHub Pages are popular deployment options for
          React applications.
        </li>
        <li>
          Netlify offers features like continuous deployment, serverless
          functions, and form handling.
        </li>
        <li>
          Vercel provides serverless functions, edge caching, and preview
          deployments.
        </li>
        <li>
          GitHub Pages allows you to host static websites directly from your
          GitHub repository, making it a great choice for open-source projects,
          documentation, or personal websites.
        </li>
        <li>
          Each deployment option has its own set of features and capabilities.
          Choose the option that best suits your project requirements and needs.
        </li>
      </ul>
      <p>
        Deploying your React application is an important step towards making it
        accessible to users. By choosing the right deployment option, you can
        ensure a seamless and scalable deployment process.
      </p>

      <Button whereToGo={"/blog"} />
    </div>
  );
};

export default Deploying;
