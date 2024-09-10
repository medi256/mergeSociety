import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import AdUnit from "./AdUnit";
const Reactcourse = () => {
  const navigate = useNavigate();
  return (
    <div className="JsCourse">
      <ScrollToTop />

      <div className="skillsLinks">
        <h1 className="SkillsHead"> React.js Course</h1>
        <h1>Introduction to React</h1>
        <ul>
          <li onClick={() => navigate("/overViewReact")}> Overview of React</li>
        </ul>
        <h1>setting Up Your Environment </h1>
        <ul>
          <li onClick={() => navigate("/installNode")}>
            Installing Node.js and npm
          </li>
          <li onClick={() => navigate("/settingCodeEditor")}>
            Setting up a code editor(VS Code recommended)
          </li>
          <li onClick={() => navigate("/createReactApp")}>
            Create a new React project using Create React App
          </li>
          <li onClick={() => navigate("/underStandingProjectStructure")}>
            Understanding the Project Structure
          </li>
        </ul>
        <AdUnit />
        <h2>Core Concepts</h2>
        <h3>Jsx(JavaScript XML)</h3>
        <ul>
          <li onClick={() => navigate("/introJsx")}>Introduction to JSX </li>

          <li onClick={() => navigate("/jsxSyntax")}>
            JSX Syntax and best Practice
          </li>
          <li onClick={() => navigate("/JSXAttributes")}>
            Attributes in JSX: Enhancing UI Elements
          </li>
        </ul>
        <ul>
          <li onClick={() => navigate("/RenderingComp")}>
            Creating and Rendering JSX Files{" "}
          </li>
        </ul>
        <h3>Components</h3>
        <ul>
          <li onClick={() => navigate("/funcComp")}> Functional Component </li>
          <li onClick={() => navigate("/JSXStructure")}>
            {" "}
            JSX Structure and Container Elements
          </li>
          <li onClick={() => navigate("/ReactConditionalRendering")}>
            {" "}
            React Conditional Rendering{" "}
          </li>
          <li onClick={() => navigate("/classComponent")}> Class Component</li>
          <li onClick={() => navigate("/CompHierarchNest")}>
            Component Hierarchy and Nesting{" "}
          </li>
          <li onClick={() => navigate("/Props")}>Props (Properties) </li>
        </ul>
        <h3>Handling Events </h3>
        <ul>
          <li onClick={() => navigate("/eventHdle")}>Adding Event Handlers </li>
          <li onClick={() => navigate("/differentTypes")}>
            {" "}
            Event Handling in Functional{" "}
          </li>
        </ul>

        <h3>Lists and Keys</h3>
        <ul>
          <li onClick={() => navigate("/list")}> Rendering Lists</li>
          <li onClick={() => navigate("/UseKey")}>
            {" "}
            understanding Keys in React
          </li>
        </ul>
        <h2>Advanced Concepts</h2>
        <h3>Hooks</h3>
        <ul>
          <li onClick={() => navigate("/introHook")}> Introduction to Hooks</li>
          <li onClick={() => navigate("/useStateEffect")}>
            {" "}
            useState and useEffect
          </li>

          <li onClick={() => navigate("/useRedContext")}> useContext</li>
        </ul>
        <h3>Context API</h3>
        <ul>
          <li onClick={() => navigate("/PassData")}>
            {" "}
            Passing Data Through Component Tree
          </li>
        </ul>
        <AdUnit />
        <h3>Forms and Controlled Components</h3>
        <ul>
          <li onClick={() => navigate("/HandleForm")}> Handling Form Input </li>
          <li onClick={() => navigate("/FormControlVsUnControl")}>
            {" "}
            Controlled vs Uncontrolled Components
          </li>
        </ul>

        <h2>Styling in React </h2>
        <h3>React CSS Styling </h3>

        <ul>
          <li onClick={() => navigate("/cssModules")}>
            React CSS Styling: Efficient Styling Techniques
          </li>
        </ul>
        <h2>Inline Styles</h2>
        <ul>
          <li onClick={() => navigate("/inline")}>
            {" "}
            Applying Inline Styles in React{" "}
          </li>
        </ul>

        <h2>React Router</h2>
        <ul>
          <li onClick={() => navigate("/SettingRoute")}>
            Setting Up React Router{" "}
          </li>
          <li onClick={() => navigate("/NavigatePage")}>
            Navigating between Pages
          </li>
          <li onClick={() => navigate("/RouteParamNest")}>Nesting Routes</li>
        </ul>

        <h2>Working with APIs</h2>
        <h3>Fetching Data</h3>
        <ul>
          <li onClick={() => navigate("/FetchAPI")}> Fetching API</li>
        </ul>
        <h2>Handling Promises </h2>
        <ul>
          <li onClick={() => navigate("/AsyncAwaitReact")}>
            {" "}
            Async/Await Syntax
          </li>
          <li onClick={() => navigate("/ErrorHand")}> Error Handling </li>
        </ul>

        <h3>Deploying React App</h3>
        <ul>
          <li onClick={() => navigate("/DeployGitNetVer")}>
            Deploying Options(Netlify, Vercel, Github Pages)
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Reactcourse;
