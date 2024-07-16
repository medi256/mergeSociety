import { useNavigate, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import AdUnit from "./AdUnit";
const Jscourse = () => {
  const navigate = useNavigate();
  return (
    <div className="JsCourse">
      <ScrollToTop />
      <div className="skillsLinks">
        <h1 className="SkillsHead">JavaScript Course</h1>
        <h2>Introduction to Javascript</h2>
        <ul>
          <li onClick={() => navigate("/WhatJAvascript")}>
            What is JavaScript?
          </li>
          <li onClick={() => navigate("/WhyJavascript")}>
            Why learn javaScript?
          </li>
          <li onClick={() => navigate("/RunningJS")}>
            How to Insert and Run Your Code
          </li>
        </ul>
        <AdUnit />

        <h2>Javascript Fundamentals</h2>
        <ul>
          <li onClick={() => navigate("/VariablesDataTypes")}>
            Variables(let, const, var)
          </li>
          <li onClick={() => navigate("/namingVariable")}>
            Best Practices for Variable Naming in JavaScript
          </li>
          <li onClick={() => navigate("/DataTypes")}>
            Data Types(numbers, string, booleans, arrays, objects)
          </li>
          <li onClick={() => navigate("/operator")}>
            Operators(arithmetic, comparison, logical, assignment)
          </li>
          <li onClick={() => navigate("/comments")}>Comments</li>
        </ul>
        <h2>Control Flow</h2>
        <ul>
          <li onClick={() => navigate("/ControlFlow")}>
            Conditional Statements(if/else, switch)
          </li>
          <li onClick={() => navigate("/loops")}>
            Loops(for, while, do-while)
          </li>
        </ul>
        <h2>Function</h2>
        <ul>
          <li onClick={() => navigate("/DefiningCallingFunc")}>
            Defining and Calling Functions
          </li>
          <li onClick={() => navigate("/ParameterArgument")}>
            Parameters and Arguments
          </li>
          <li onClick={() => navigate("/ReturnValues")}>Returning Values</li>
          <li onClick={() => navigate("/FuncScope")}>Function Scope</li>
          <li onClick={() => navigate("/ArrowFunc")}>Arrow Functions</li>
        </ul>
        <h2>Working with Strings</h2>
        <ul>
          <li onClick={() => navigate("/StringMethod")}>
            String Methods(length, concatenation, search, replace, etc.)
          </li>
        </ul>
        <h2>Arrays</h2>
        <ul>
          <li onClick={() => navigate("/arrays")}>Arrays</li>
        </ul>
        <h2>Objects</h2>
        <ul>
          <li onClick={() => navigate("/objects")}>Objects</li>
        </ul>

        <h2> JavaScript Scope Explained</h2>
        <ul>
          <li onClick={() => navigate("/scope")}>
            JavaScript Scope(Global vs. Local vs. Block Scope)
          </li>
        </ul>
        <h2> Mastering JavaScript Hoisting</h2>
        <ul>
          <li onClick={() => navigate("/hoisting")}>
            {" "}
            Mastering JavaScript Hosting(Best Practices for Variable and
            Function Scope)
          </li>
        </ul>

        <h2>DOM manipulation</h2>
        <ul>
          <li onClick={() => navigate("/DomIntro")}>
            Introduction to the DOM (Document Object Model)
          </li>
          <li onClick={() => navigate("/SelectingElementsINDom")}>
            Selecting Elements by ID, Class Name, Tag Name
          </li>
          <li onClick={() => navigate("/ModifyingElements")}>
            Modifying Element Properties (text content, style)
          </li>
          <li onClick={() => navigate("/EventHandling")}>
            Event Handling (adding event listeners, handling uer interactions )
          </li>
        </ul>
        <AdUnit />
        <h2>The Browser Object Model (BOM)</h2>
        <ul>
          <li onClick={() => navigate("/introBOM")}>Introduction to the BOM</li>
          <li onClick={() => navigate("/windowObject")}>
            Window Object (alert, confirm,prompt, screen dimensions)
          </li>
          <li onClick={() => navigate("/LocationObject")}>
            Location object (URL manipulation)
          </li>
          <li onClick={() => navigate("/navigationObject")}>
            Navigation Object (browser information)
          </li>
          <li onClick={() => navigate("/historyObject")}>
            History Object (navigation information)
          </li>
          <li onClick={() => navigate("/screenObject")}>
            Screen Object (screen size and resolution)
          </li>
          <li onClick={() => navigate("/BOMApplication")}>
            BOM Applications (uer interaction beyond the page content)
          </li>
        </ul>
        <h2>JavaScript vs. ECMAScript:Whats the difference? </h2>
        <ul>
          <li
            onClick={() => navigate("/JavascriptVsECMAScript")}
          >{`What's the Difference?`}</li>
        </ul>
        <h2>Advanced Javascript Concepts</h2>
        <ul>
          <li onClick={() => navigate("/Modules")}>Modules</li>
          <li onClick={() => navigate("/Classes")}>Classes</li>
          <li onClick={() => navigate("/prototypes")}>Prototypes</li>
          <li onClick={() => navigate("/thisKeyWord")}>this keyword</li>
          <li onClick={() => navigate("/json")}>JSON</li>
          <li onClick={() => navigate("/dates")}>Dates Methods</li>
          <li onClick={() => navigate("/mathObject")}>Math objects</li>
          <li onClick={() => navigate("/forEach")}>ForEach method</li>
          <li onClick={() => navigate("/mapMethod")}>Map method</li>
          <li onClick={() => navigate("/setTimeSetinterval")}>
            SetTimeout/setInterval
          </li>
        </ul>
        <h2>Asynchronous Javascript</h2>
        <ul>
          <li onClick={() => navigate("/UnderstandingAsynchronousProgramming")}>
            Understanding Asynchronous Programming
          </li>
          <li onClick={() => navigate("/EventLoop")}>Event Loop Explained</li>
          <li onClick={() => navigate("/CallBacks")}>CallBacks</li>
          <li onClick={() => navigate("/promises")}>Promises</li>
          <li onClick={() => navigate("/asyncAwait")}>Async/Await</li>
        </ul>
        <h2>Error Handling</h2>
        <ul>
          <li onClick={() => navigate("/tryCatch")}>Try/Catch Statements</li>
          <li onClick={() => navigate("/throwingErr")}>
            Throwing and Handling Errors
          </li>
          <li onClick={() => navigate("/debuggingTec")}>
            Debugging Techniques
          </li>
        </ul>

        <h2>Working with API(Application Programming Interface)</h2>
        <ul>
          <li onClick={() => navigate("/IntroAPI")}>
            API(understanding what is an API)
          </li>
          <li onClick={() => navigate("/FetchingDataFromApis")}>
            Fetching Data from APIs
          </li>
        </ul>
        <br />
        <br />
        <br />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Jscourse;
