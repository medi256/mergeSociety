import AdUnit from "../AdUnit";

const IntroductionBOM = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to the Browser Object Model (BOM)</h1>

      <p>
        Have you ever seen a popup on a website asking for your name or giving
        you an alert? Or maybe a box that asks for confirmation? All these
        actions are possible because of something called the{" "}
        <b>Browser Object Model (BOM)</b>.
      </p>
      <p>
        The BOM represents everything about the browser itself, like the window,
        the current URL, and the history of pages you’ve visited. While the DOM
        deals with the content of the web page, the BOM helps you interact with
        the browser.
      </p>

      <h2>Components of the BOM</h2>
      <p>
        The BOM includes several important objects that allow you to interact
        with the browser environment. Let’s take a closer look at some of these
        key components:
      </p>
      <ul>
        <li>
          <b>Window Object:</b> This is like the main dashboard of your browser.
          It represents the browser window and provides methods to interact with
          it, such as displaying alerts, confirming actions, and getting screen
          dimensions.
        </li>
        <li>
          <b>Location Object:</b> This is like your browser's address bar. It
          gives you information about the current URL and allows you to change
          the URL or reload the page.
        </li>
        <li>
          <b>Navigator Object:</b> This is like the information center of your
          browser, providing details about the browser, such as the app name,
          version, and platform.
        </li>
        <li>
          <b>History Object:</b> This is like the logbook of your browser,
          recording all the pages you’ve visited and allowing you to navigate
          back and forth between them.
        </li>
        <li>
          <b>Screen Object:</b> This is like the radar of your browser, giving
          you information about the screen size and resolution.
        </li>
      </ul>
      <AdUnit />
      <h2>BOM Applications</h2>
      <p>
        The BOM allows you to create interactive and dynamic experiences beyond
        the content of the web page. Here are a few examples of what you can do
        with the BOM:
      </p>
      <ul>
        <li>
          Show pop-up alerts to users to grab their attention or get their
          input.
        </li>
        <li>Redirect users to different pages or refresh the current page.</li>
        <li>
          Get information about the user's screen size to make your web page
          responsive.
        </li>
        <li>
          Access and manipulate the browser's history to create a seamless
          navigation experience.
        </li>
      </ul>

      <h2>Imagine Your Browser as a Spaceship</h2>
      <p>
        Let's use an analogy to make it easier to understand. Imagine your web
        browser is a spaceship. The BOM is like the spaceship's dashboard that
        gives you information about your surroundings (the browser) and lets you
        control things outside the spaceship.
      </p>

      <h2>The Difference Between the DOM and BOM</h2>
      <p>
        Now that we understand what the BOM is, it’s important to understand the
        difference between the DOM and the BOM:
      </p>
      <ul>
        <li>
          <b>DOM (Document Object Model):</b> The DOM is like the blueprint of a
          house. It represents the structure of a web page, including elements
          like headings, paragraphs, and images. It's all about the content and
          structure of the web page.
        </li>
        <li>
          <b>BOM (Browser Object Model):</b> The BOM is like the control panel
          of the house. It represents the browser's environment in which the web
          page exists. It includes things like the window, location, history,
          and screen, which are not part of the web page's content but are
          related to the browser itself.
        </li>
      </ul>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        The BOM is like the control panel of your web browser spaceship, giving
        you tools to interact with the browser environment and enhance user
        experiences. While the DOM focuses on the content and structure of the
        web page, the BOM opens up possibilities beyond the page itself,
        allowing you to create more dynamic and interactive web applications.
        So, buckle up and get ready to explore the vast universe of the BOM!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/EventHandling")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/windowObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroductionBOM;

export const WindowObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Welcome to the Wonderful World of the Window Object!</h1>

      <p>
        {`
        We've explored the DOM tree, giving you the power to target specific
        elements on a webpage. Now, let's`}{" "}
        shift our focus to the browser window itself and how JavaScript
        interacts with it using the Window Object. Think of the Window Object as
        a toolbox containing functionalities specific to the browser window,
        rather than the webpage content itself.
      </p>

      <h2>The Window as Your Stage</h2>

      <p>
        Imagine the webpage content you see as the actors performing a play. The
        Window Object provides functionalities related to the stage itself, such
        as the curtain (opening or closing the window), the backdrop (the
        browser window dimensions), or even interacting with the audience
        (prompting users for input).
      </p>

      <h2>{`Let's Explore the Window Object's`} Toolkit</h2>

      <p>
        The Window Object provides various functionalities for interacting with
        the browser window and user experience. Here are some common examples,
        along with code snippets to demonstrate their usage:
      </p>

      <h3>1. Displaying Messages and Getting User Input:</h3>
      <ul>
        <li>
          <b>{`alert()`}</b>: This method displays a modal dialog with a
          message, similar to a popup announcement on stage. Perfect for
          situations where you want to inform users about something critical.
          <br />
          <h3>Example:</h3>
          <pre>
            <code>
              {`
//javascript


alert("Welcome to the Quiz Application!");
   
    `}
            </code>
          </pre>
        </li>
        <li>
          <b>{`confirm()`}</b>: This method displays a modal dialog with a
          message and two buttons{" "}
          {`(usually "OK" and "Cancel"). It returns a boolean value (true if the user clicks "OK", false otherwise).  Imagine using this during a play to ask the audience if they want an intermission! `}
          <br />
          <pre>
            <code>
              {`
//javascript


 const answer = confirm("Are you ready to start the quiz?");
 if (answer) {
   // Start the quiz if user clicks OK
 } else {
   // Allow user to review instructions if they click Cancel
 }
             
              `}
            </code>
          </pre>
        </li>
        <li>
          <b>{`prompt()`}</b>: This method displays a modal dialog with a
          message and an input field. It returns the value the user enters,
          allowing you to get user input for actions beyond the webpage content
          itself.
          <br />
          <h3>Example:</h3>
          <pre>
            <code>
              {`
//javascript


const userName = prompt("Enter your name to begin:");
if (userName) {
  alert("Welcome, " + userName + "!");
} else {
  alert("Please enter a name to continue.");
}
            
              `}
            </code>
          </pre>
        </li>
      </ul>
      <AdUnit />
      <h3>2. Interacting with the Window Size and Screen:</h3>
      <ul>
        <li>
          <b>innerWidth</b> and <b>innerHeight</b>: These properties provide the
          width and height of the browser window itself (the stage), excluding
          things like toolbars.
          <br />
          <h3>Example:</h3>
          <pre>
            <code>
              {`
    
//javascript


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log("Window width:", windowWidth, "Window height:", windowHeight);
    
    `}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        These functionalities empower you to create more interactive experiences
        within the browser window. By leveraging the Window Object, you can
        inform users, get their input, and even adapt your webpages to different
        screen sizes.
      </p>
      <h2>Next Steps: Dive Deeper into the Window Object</h2>
      <p>
        The Window Object offers a variety of functionalities beyond what{" "}
        {`we've
        covered here. In the next lessons, we'll explore these functionalities`}
        in more detail, providing code examples and practical applications to
        solidify your understanding. Get ready to unlock the full potential of
        the Window Object!
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/introBOM")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/LocationObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const LocationObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to the Location Object (URL Manipulation)</h1>
      <p>
        The Browser Object Model (BOM) offers a toolbox of functionalities to
        interact with the browser window and user experience beyond just the
        webpage content itself. The <b> Location Object</b> is a specific tool
        within the BOM that provides functionalities for manipulating the URL
        (Uniform Resource Locator) displayed in the address bar. Imagine the URL
        as the map guiding users to your webpage. The <b> Location Object</b>{" "}
        allows you to interact with this map in various ways.
      </p>
      <p>{`Here's a breakdown of the Location Object's key functionalities:`}</p>
      <h2> Accessing the Current URL:</h2>
      <p>
        You can use the <code>href</code> property of the <code>location</code>{" "}
        object to access the current URL in its entirety.
      </p>
      <pre>
        <code>
          {`
//JavaScript


const currentURL = location.href;
console.log("Current URL:", currentURL);
          `}
        </code>
      </pre>
      <h3>Modifying the URL:</h3>
      <p>
        {" "}
        You can assign a new URL to the <code>href</code> property to redirect
        the user to a different webpage.
      </p>
      <pre>
        <code>
          {`
          
//JavaScript


location.href = "https://www.example.com/new-page";  // Redirect to a new page

          `}
        </code>
      </pre>
      <h3>Extracting URL Components:</h3>
      <p>
        {`The Location Object provides properties to access specific parts of the
        URL, such as the protocol (e.g., "http:"), hostname (domain name),
        pathname (path to the specific webpage), search string (query
        parameters), and hash fragment (content identifier after the hash symbol
        #).`}
      </p>
      <pre>
        <code>
          {`
//JavaScript


const protocol = location.protocol;
const hostname = location.hostname;
const pathname = location.pathname;
const searchString = location.search;
const hashFragment = location.hash;

console.log("Protocol:", protocol);
console.log("Hostname:", hostname);
console.log("Pathname:", pathname);
console.log("Search String:", searchString);
console.log("Hash Fragment:", hashFragment);
          
          `}
        </code>
      </pre>
      <AdUnit />
      <h3>Reloading the Current Page:</h3>
      <p>
        {" "}
        You can use the <code>reload()</code> method of the{" "}
        <code>location</code> object to reload the current webpage.
      </p>
      <pre>
        <code>
          {`
//JavaScript


location.reload();  // Reloads the current page
          
          `}
        </code>
      </pre>
      <p>
        By leveraging these functionalities, you can create dynamic web
        experiences that interact with the URL. Here are some potential
        applications:
      </p>
      <ul>
        <li>
          {" "}
          <code>Paginating content</code>: Imagine a multi-page article. You
          could use the URL search string to keep track of the current page
          number and update it dynamically based on user interaction.
        </li>
        <li>
          <code>Filtering search results</code>: You could manipulate the URL
          search string to reflect user-selected filters, allowing the
          server-side to display relevant results based on the updated URL.
        </li>
        <li>
          {" "}
          <code>Single-page applications (SPAs)</code>: SPAs often rely on the
          URL hash fragment to represent different application states without
          full page reloads. The Location Object allows you to manage this
          behavior for a seamless user experience.
        </li>
      </ul>
      <p>
        Remember, with great power comes great responsibility! Misusing the
        Location Object can lead to unexpected navigation behavior for users.
        Always ensure URL manipulations serve a clear purpose and enhance the
        user experience.
      </p>
      <p>
        In the next lesson,{" "}
        {`we'll explore the Navigation Object, another tool
        within the BOM that provides information about the browser's navigation
        state.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/windowObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/navigationObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const NavigationObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        Introduction to the Navigation Object (Browser Navigation Information)
      </h1>
      <p>
        The Browser Object Model (BOM) equips you with various tools to interact
        with the browser window and user experience. The{" "}
        <code>Navigation Object</code> is one such tool that provides
        information about the{" "}
        {`browser's navigation history and state. Imagine
        the Navigation Object as a travel log for the user's journey within your
        website or across different webpages.`}
      </p>
      <p>
        While the Location Object focuses on manipulating the URL itself, the
        Navigation Object provides insights into how the user arrived at the
        current webpage. Here are some key functionalities offered by the
        Navigation Object:
      </p>
      <ul>
        <li>
          <code>type </code> property: This property reveals how the user
          navigated to the current webpage. Possible values include
          {`"backforward" (user clicked the back or forward button), "reload"
          (page was reloaded), "replace" (content was replaced without a history
          entry), and "unknown".`}
          <pre>
            <code>
              {`
//JavaScript


const navigationType = navigator.navigation.type;
console.log("Navigation type:", navigationType);
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <code> userAgent</code> property <b>(inherited from navigator)</b>:
          This property provides a string that reveals the{" "}
          {`user's browser
          information, including the name, version, and platform. While not
          strictly part of the Navigation Object, it's`}{" "}
          inherited from the
          <b>navigator</b> object and can be helpful in conjunction with
          navigation data.
          <pre>
            <code>
              {`
//JavaScript


const userAgent = navigator.userAgent;
console.log("User Agent:", userAgent);
              `}
            </code>
          </pre>
          <AdUnit />
          <h3>Understanding these properties allows you to:</h3>
          <li>
            {" "}
            <b> Personalize user experience</b>: Based on the type property, you
            can tailor the user experience upon arrival at a webpage. For
            instance, if the user navigated back from a product details page,
            you might highlight recently viewed products.
          </li>
          <li>
            {" "}
            <b>Track user journeys</b>: By analyzing navigation patterns
            (back/forward clicks, reloads), you can gain insights into user
            behavior and website usability.
          </li>
          <li>
            <b>Handle browser compatibility issues</b>: The userAgent
            information can help identify potential compatibility issues with
            different browsers and versions.
          </li>
        </li>
        <h3>{`It's`} important to note that:</h3>
        <li>
          For security reasons, modern browsers restrict access to the{" "}
          {`user's`}
          complete navigation history.
        </li>
        <li>
          The <code>userAgent</code> string can be spoofed by users, so it{" "}
          {`shouldn't`} be solely relied upon for critical tasks.
        </li>
      </ul>
      <p>
        In the next lesson,{" "}
        {`we'll explore the History Object, another tool
        within the BOM that provides more in-depth control over the browser's
        navigation history.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/LocationObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/historyObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const HistoryObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>
        {" "}
        Introduction to the History Object (Navigation History Manipulation)
      </h1>
      <p>
        The Browser Object Model (BOM) offers a toolbox of functionalities for
        interacting with the browser beyond just the webpage content itself. The
        <code>History Object</code> is a powerful tool within the BOM that
        provides functionalities for manipulating the {`browser's`} navigation
        history. Imagine the History Object as a record keeper, tracking the
        webpages a user has visited within the current browsing session.
      </p>
      <p>
        While the Navigation Object provided insights into how the user arrived
        at the current page, the History Object empowers you to programmatically
        control the navigation history stack. Here are some key functionalities
        offered by the History Object:
      </p>
      <ul>
        <li>
          {" "}
          <code>length</code> property: This property reveals the total number
          of entries in the {`browser's`} history for the current browsing
          session.
          <pre>
            <code>
              {`
//JavaScript


const historyLength = history.length;
console.log("History length:", historyLength);
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <code>go(delta)</code> method: This method allows you to navigate the
          browser history stack. A positive value for delta moves forward in
          history (like clicking the forward button), while a negative value
          moves backward (like clicking the back button).
          <pre>
            <code>
              {`
//JavaScript


history.go(1);  // Move one step forward in history
history.go(-2); // Move two steps back in history
              `}
            </code>
          </pre>
        </li>
        <li>
          <code>back()</code> and <code>forward()</code> methods: These methods
          are shortcuts for <code>history.go(-1)</code> and{" "}
          <code>history.go(1)</code>, respectively, making the code more
          readable.
          <pre>
            <code>
              {`
//JavaScript


history.back();  // Move one step back in history (same as history.go(-1))
history.forward(); // Move one step forward in history (same as history.go(1))
              `}
            </code>
          </pre>
        </li>
      </ul>
      <AdUnit />
      <h3>
        By leveraging these functionalities, you can create dynamic web
        experiences that control navigation flow:
      </h3>
      <ul>
        <li>
          <code>Multi-step forms</code>: Imagine a form with multiple steps. You
          can use the History Object to prevent users from accidentally
          navigating away before completing all steps.
        </li>
        <li>
          {" "}
          <code>Customizable navigation</code>: You can create custom{" "}
          {`"back" and
          "forward" buttons with functionalities beyond the browser's default
          behavior.`}
        </li>
        <li>
          <code>Single-page applications (SPAs)</code>: SPAs heavily rely on the
          History Object to manipulate the browser history stack and create the
          illusion of multi-page navigation without full page reloads.
        </li>
      </ul>
      <h3>
        {`It's`} important to consider these points when using the History
        Object:
      </h3>
      <ul>
        <li>
          {" "}
          <b>Modifying history can be disruptive</b>: Always use these
          functionalities thoughtfully to avoid confusing users or preventing
          them from navigating freely.
        </li>
        <li>
          <b> Browser limitations</b>: Some browsers might restrict the extent
          to which you can modify the history stack for security reasons.
        </li>
      </ul>
      <p>
        In the next lesson,{" "}
        {`we'll explore the Screen Object, a tool within the
        BOM that provides information about the user's screen size and
        resolution.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/navigationObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/screenObject")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const ScreenObject = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Introduction to the Screen Object (Screen Size and Resolution)</h1>
      <p>
        The Browser Object Model (BOM) equips you with various tools to interact
        with the browser window and user experience. The{" "}
        <code>Screen Object </code> is a tool within the BOM that provides
        information about the{" "}
        {`user's screen and its
        capabilities. Imagine the Screen Object as a measuring tool, revealing
        the dimensions and resolution of the user's device screen.`}
      </p>
      <p>
        This information can be crucial for creating responsive web designs that
        adapt layouts and content based on the available screen space. Here are
        some key properties offered by the Screen Object:
      </p>
      <ul>
        <li>
          <code>width</code> and <code>height</code> properties: These
          properties provide the width and height of the {`user's`} screen in
          pixels.
          <pre>
            <code>
              {`
//JavaScript


const screenWidth = screen.width;
const screenHeight = screen.height;

console.log("Screen width:", screenWidth, "Screen height:", screenHeight);
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <code>availWidth </code> and <code>availHeight</code> properties:
          These properties represent the width and height of the viewport, which
          is the usable area within the browser window after accounting for
          things like toolbars.
          <pre>
            <code>
              {`
//JavaScript


const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;

console.log("Available width:", availableWidth, "Available height:", availableHeight);
              `}
            </code>
          </pre>
        </li>
        <li>
          <code>colorDepth</code> and <code>pixelDepth</code> properties: These
          properties provide information about the color quality of the screen,
          indicating the number of bits used to represent each pixel.
          <pre>
            <code>
              {`
//JavaScript


const colorDepth = screen.colorDepth;
const pixelDepth = screen.pixelDepth;

console.log("Color depth:", colorDepth, "Pixel depth:", pixelDepth);
              `}
            </code>
          </pre>
        </li>
      </ul>
      <AdUnit />
      <h3>By leveraging the Screen Object, you can:</h3>
      <ul>
        <li>
          <b>Create responsive layouts</b>: Use the screen dimensions to adjust
          the width and positioning of your webpage elements to ensure optimal
          viewing experience across different devices.
        </li>
        <li>
          <b>Detect high-resolution displays</b>: Check the colorDepth and
          pixelDepth to tailor image quality or content rendering based on the{" "}
          {`user's`}
          screen capabilities.
        </li>
        <li>
          <b>Provide alternative content</b>: If the screen size is too small
          for certain elements, you can use conditional logic to display
          alternative content or layouts.
        </li>
      </ul>
      <p>
        Remember that screen sizes and resolutions can vary greatly across
        devices. {`It's`} essential to test your webpages on a variety of
        devices and screen sizes to ensure a consistent and positive user
        experience.
      </p>
      <p>
        In the next lesson, {`we'll`} explore how these BOM functionalities can
        be combined to create interactive web experiences that go beyond static
        content.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/historyObject")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/BOMApplication")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const BOMApplication = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>BOM Applications (uer interaction beyond the page content)</h1>
      <p>
        Absolutely! Now that{" "}
        {`we've explored the individual functionalities of
        the Browser Object Model (BOM), let's`}{" "}
        delve into how they can be creatively combined to create interactive web
        experiences that surpass static content. Here are some captivating ways
        to leverage the BOM: pen_spark
      </p>
      <h2>1. Dynamic Content based on User Interaction: pen_spark</h2>
      <ul>
        <li>
          {" "}
          <b>Location Object</b>: Imagine a product page. Upon adding an item to
          the cart, you can use the property to dynamically update the URL with
          the chosen product ID. This allows users to easily share the specific
          product {`they're`} interested in with others. pen_spark
        </li>
        <li>
          <b>Window Object</b>: Combine <code>confirm()</code> with other
          functionalities to create interactive quizzes or surveys. For
          instance, after a question, use <code>confirm()</code> to present
          answer choices and store user input using variables. The{" "}
          <code> alert()</code> method can then be used to display feedback
          based on the chosen answer. pen_spark
        </li>
        <li>
          <b>History Object</b>: This object is particularly useful for
          multi-step forms. You can use <code>history.pushState()</code> to
          create a new history entry for each form step, preventing users from
          accidentally navigating away before completing the entire process.
          pen_spark
        </li>
      </ul>
      <h3> 2. Responsive Design and User Experience: pen_spark</h3>
      <ul>
        <li>
          {" "}
          <b> Screen Object</b>: As discussed earlier, the <code>width</code>{" "}
          and <code>height</code> properties of the Screen Object are essential
          for crafting responsive web designs. By detecting screen sizes, you
          can adjust layouts, font sizes, and image scaling to ensure optimal
          viewing across desktops, tablets, and mobile devices. pen_spark
        </li>
        <li>
          <b> Window Object</b>: The <code>innerWidth</code> and{" "}
          <code>innerHeight</code>
          properties can be used to adapt content placement based on the
          available viewport size. For instance, you can conditionally display
          certain elements or adjust their positioning for a better user
          experience on smaller screens. pen_spark
        </li>
      </ul>
      <AdUnit />
      <h3>3. Real-time Updates and User Engagement: pen_spark</h3>
      <ul>
        <li>
          <b>Location Object</b>: Imagine a weather app. By continuously
          monitoring the <code>location.href</code> using JavaScript, you can
          detect if the user navigates to a different city page and
          automatically update the weather information displayed. pen_spark
        </li>
        <li>
          <b>Navigation and History Objects</b>: Social media platforms leverage
          these objects to manage user navigation and content updates. For
          example, when a user clicks on a new post, the History Object can be
          used to keep track of their browsing path within the platform. This
          allows them to use the back button to revisit previous posts without
          completely refreshing the entire page. pen_spark
        </li>
      </ul>
      <p>
        {" "}
        These are just a few examples, and the possibilities are truly endless!
        By understanding and combining the functionalities offered by the BOM,
        you can create dynamic and engaging web experiences that cater to user
        interaction, adapt to different devices, and provide a richer browsing
        experience overall. pen_spark
      </p>
      <p>
        As you continue your web development journey, remember to experiment and
        explore! {`There's`} a vast world of interactive possibilities waiting
        to be unlocked using the power of the BOM. pen_spark
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/screenObject")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/JavascriptVsECMAScript")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
