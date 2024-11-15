import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Build a Weather App with API | Beginner-Friendly Tutorial",
  description:
    "Learn how to create a weather app that fetches real-time weather data from an API. This step-by-step tutorial covers working with APIs, handling async functions, and displaying data on your webpage. Perfect for beginners!",
  alternates: {
    canonical: "https://www.mergesociety.com/projects/javascriptP/4js",
  },
  openGraph: {
    title: "Build a Weather App with API | Beginner-Friendly Tutorial",
    description:
      "Create a weather app and learn API integration, async functions, and data display. A perfect project for beginners!",
  },
  keywords: [
    "javascript",
    "web development",
    "api integration",
    "async functions",
    "weather data",
    "css styling",
    "responsive design",
    "weather app",
    "javascript project for beginners",
    "js project",
    "html css javascript project",
    "build a  weather  app with HTML, CSS  and  javascript",
    "step  by step  guide  building a weather  app  ",
  ],
};

const WeatherApp = () => {
  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Building a Weather App with API
        </h1>
      </div>

      <h2>Introduction to the Weather App with API</h2>
      <p>
        Welcome to the beginner-friendly tutorial on building a Weather App with
        API! In this project, we'll create a weather app that fetches real-time
        weather data from an API and displays it on your webpage. This project
        is an excellent way to learn how to work with APIs, handle async
        functions, and display data on your webpage.
      </p>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder and Files</h3>
      <p>
        Before we begin coding, let's set up a workspace for our project. This
        folder will be your digital canvas, where you'll keep all the project
        files organized.
      </p>
      <div
        className="step-box"
        style={{
          backgroundColor: "#fff3e0",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 1: Create Your Project Folder</h4>
        <p>
          Create a new folder on your computer to store all your project files.
          You can name it "weather-app".
        </p>
        <strong>On Windows:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New" &gt; "Folder".</li>
          <li>Name it "weather-app".</li>
        </ol>
        <strong>On Mac:</strong>
        <ol>
          <li>Right-click on your desktop.</li>
          <li>Choose "New Folder".</li>
          <li>Name it "weather-app".</li>
        </ol>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 2: Get Your Text Editor Ready</h4>
        <p>
          You'll need a text editor to write your code. We recommend Visual
          Studio Code, which is free and beginner-friendly.
        </p>
        <ol>
          <li>
            Download Visual Studio Code from{" "}
            <span style={{ color: "#0066cc" }}>code.visualstudio.com</span>.
          </li>
          <li>Install it on your computer.</li>
          <li>
            Open VS Code and drag your "weather-app" folder into the window.
          </li>
        </ol>
      </div>

      <div
        className="step-box"
        style={{
          backgroundColor: "#e8f5e9",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h4>Step 3: Create Your Project Files</h4>
        <p>We need three essential files for our project:</p>
        <ul>
          <li>
            <strong>index.html</strong> - The HTML file is like the blueprint of
            our app.
          </li>
          <li>
            <strong>styles.css</strong> - The CSS file is where we'll add styles
            to make our app look beautiful.
          </li>
          <li>
            <strong>script.js</strong> - The JavaScript file is where the magic
            happens, making our app interactive.
          </li>
        </ul>
        <p>To create these files:</p>
        <ol>
          <li>Open VS Code.</li>
          <li>
            <strong>index.html</strong> - Click "New File" and save it as
            "index.html".
          </li>
          <li>
            <strong>styles.css</strong> - Click "New File" again and save it as
            "styles.css".
          </li>
          <li>
            <strong>script.js</strong> - Click "New File" once more and save it
            as "script.js".
          </li>
        </ol>
      </div>

      <div
        className="tip-box"
        style={{
          backgroundColor: "#f0f7ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>🎯 Success Check:</strong> You should now have:
        </p>
        <ul>
          <li>A folder named "weather-app" on your desktop.</li>
          <li>Visual Studio Code open with your folder.</li>
          <li>Three empty files: index.html, styles.css, and script.js.</li>
        </ul>
        <p>
          <strong>👉 Tip:</strong> If something's not working, try restarting VS
          Code or creating the files using the "File → New File" menu.
        </p>
      </div>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Weather App HTML</h3>
      <p>
        Let's start by building the HTML structure for our weather app. HTML is
        like the foundation of our app.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add the Weather App HTML:</strong> Copy and paste the
          following code into your "index.html" file:
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Weather App</h1>
    <form id="city-form">
      <input type="text" id="city-input" placeholder="Enter a city" required>
      <button type="submit">Get Weather</button>
    </form>
    <div id="weather-container" class="hide">
      <h2 id="city"></h2>
      <p id="temperature"></p>
      <p id="description"></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's break down the HTML structure:</p>
      <ul>
        <li>
          <code>&lt;div class="container"&gt;</code>: The main container for our
          app.
        </li>
        <li>
          <code>&lt;h1&gt;Weather App&lt;/h1&gt;</code>: The title of our app.
        </li>
        <li>
          <code>&lt;form id="city-form"&gt;</code>: The form for entering a
          city.
        </li>
        <li>
          <code>
            &lt;input type="text" id="city-input" placeholder="Enter a city"
            required&gt;
          </code>
          : The input field for the city name.
        </li>
        <li>
          <code>&lt;button type="submit"&gt;Get Weather&lt;/button&gt;</code>:
          The button to fetch the weather data.
        </li>
        <li>
          <code>&lt;div id="weather-container" class="hide"&gt;</code>: The
          container for displaying the weather data.
        </li>
        <li>
          <code>&lt;h2 id="city"&gt;&lt;/h2&gt;</code>: The element for
          displaying the city name.
        </li>
        <li>
          <code>&lt;p id="temperature"&gt;&lt;/p&gt;</code>: The element for
          displaying the temperature.
        </li>
        <li>
          <code>&lt;p id="description"&gt;&lt;/p&gt;</code>: The element for
          displaying the weather description.
        </li>
        <li>
          <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>: Includes
          the JavaScript file for handling the app's functionality.
        </li>
      </ul>
      <p>
        Save your "index.html" file. Now we have the basic HTML structure in
        place. In the next step, we'll add some styling to make it look nice!
      </p>

      <h2>Styling the Weather App</h2>
      <h3>Adding CSS Styles</h3>
      <p>
        CSS is like the paint and brushes we use to make our app visually
        appealing. Let's add some styles to our weather app.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Weather App Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  font-size: 1.5rem;
}

form {
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#weather-container {
  text-align: left;
}

#weather-container h2, #weather-container p {
  margin: 10px 0;
}

.hide {
  display: none;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>body</code>: Sets the default font, removes margins and padding,
          and centers the content on the screen.
        </li>
        <li>
          <code>.container</code>: Styles the container with a white background,
          padding, rounded corners, and a shadow.
        </li>
        <li>
          <code>h1</code>: Styles the title with a larger font size and margin.
        </li>
        <li>
          <code>form</code>: Adds margin to the form.
        </li>
        <li>
          <code>input[type="text"]</code>: Styles the input field with a fixed
          width, padding, border, and font size.
        </li>
        <li>
          <code>button</code>: Styles the button with a blue background, white
          text, no border, padding, border-radius, cursor, and transition for
          smooth changes.
        </li>
        <li>
          <code>#weather-container</code>: Styles the weather container with
          text alignment.
        </li>
        <li>
          <code>#weather-container h2, #weather-container p</code>: Adds margin
          to the city name, temperature, and description.
        </li>
        <li>
          <code>.hide</code>: Hides elements that should not be visible
          initially.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled weather app.
      </p>

      <h2>Getting an API Key from OpenWeatherMap</h2>
      <p>
        Before we can fetch weather data, we need to get an API key from
        OpenWeatherMap. Follow these steps to get your API key:
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Sign Up for OpenWeatherMap:</strong> Go to the{" "}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0066cc" }}
          >
            OpenWeatherMap website
          </a>{" "}
          and sign up for a free account.
        </li>
        <li>
          <strong>2. Get Your API Key:</strong> Once you're logged in, go to the
          "API keys" section in your account dashboard. You should see a default
          API key. If not, generate a new one by clicking the "Generate" button.
        </li>
        <li>
          <strong>3. Save Your API Key:</strong> Copy and save your API key
          somewhere safe. You'll need it to make API requests.
        </li>
      </ol>
      <p>
        <strong>Note:</strong> Keep your API key secure and do not share it
        publicly.
      </p>

      <h2>Adding JavaScript for User Interactions</h2>
      <h3>Handling Form Submission</h3>
      <p>
        Now, let's add JavaScript to make our app interactive! We'll start by
        handling form submission and fetching weather data from the API.
      </p>

      <h4>Selecting HTML Elements</h4>
      <p>
        First, we need to select the HTML elements we want to work with. We'll
        select the form, input field, and weather container.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "script.js":</strong> Open the "script.js" file in
          your code editor.
        </li>
        <li>
          <strong>2. Selecting Elements:</strong> Copy and paste the following
          JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Selecting HTML elements
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        Here, we're using the <code>getElementById</code> method to select the
        HTML elements with specific IDs.
      </p>

      <h4>Handling Form Submission</h4>
      <p>
        Next, we'll add an event listener to the form to handle the submit
        event. We'll prevent the default form submission behavior and call a
        function to fetch the weather data.
      </p>
      <ol className="space-y-6" start={3}>
        <li>
          <strong>3. Handling Form Submission:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Handling form submission
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
    cityInput.value = '';
  } else {
    alert('Please enter a city name.');
  }
});`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        In this part, we're using the <code>addEventListener</code> method to
        listen for the 'submit' event on the form. We prevent the default form
        submission behavior using <code>e.preventDefault()</code>, trim the city
        input, and call the <code>fetchWeatherData</code> function if the city
        is not empty. If the city is empty, we show an alert.
      </p>

      <h3>Fetching Weather Data from the API</h3>
      <p>
        Now, let's create the <code>fetchWeatherData</code> function to fetch
        weather data from the API.
      </p>
      <ol className="space-y-6" start={4}>
        <li>
          <strong>4. Fetching Weather Data:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to fetch weather data
async function fetchWeatherData(city) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const apiUrl = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=\${apiKey}\`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(data);
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    alert(error.message);
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        In this function, we use the <code>fetch</code> function to make an API
        request to the OpenWeatherMap API. We use <code>async/await</code> to
        handle the asynchronous request. If the response is successful, we parse
        the JSON data and call the <code>displayWeatherData</code> function to
        display the weather data. If the response is not successful, we throw an
        error and show an alert.
      </p>

      <h3>Displaying Weather Data</h3>
      <p>
        Now, let's create the <code>displayWeatherData</code> function to
        display the weather data on the webpage.
      </p>
      <ol className="space-y-6" start={5}>
        <li>
          <strong>5. Displaying Weather Data:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`// Function to display weather data
function displayWeatherData(data) {
  const { name, main, weather } = data;

  cityElement.innerText = name;
  temperatureElement.innerText = \`Temperature: \${main.temp}°C\`;
  descriptionElement.innerText = \`Description: \${weather[0].description}\`;
  weatherContainer.classList.remove('hide');
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>
        In this function, we extract the necessary data from the API response
        and update the corresponding HTML elements. We also remove the{" "}
        <code>hide</code>
        class from the weather container to display the weather data.
      </p>

      <h2>Making the Weather App Responsive</h2>
      <h3>Making the Weather App Responsive</h3>
      <p>
        Let's ensure our weather app looks great on various devices by adding
        responsive design using CSS media queries.
      </p>
      <ol className="space-y-6">
        <li>
          <strong>1. Open "styles.css":</strong> Open the "styles.css" file in
          your code editor.
        </li>
        <li>
          <strong>2. Add Responsive Design Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  input[type="text"] {
    font-size: 0.9rem;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  #weather-container h2, #weather-container p {
    font-size: 0.9rem;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>@media (max-width: 600px)</code>: A media query for screens up
          to 600px wide (e.g., mobile phones).
        </li>
        <li>
          <code>.container</code>: Adjusts the width of the container to 90% for
          better visibility on smaller screens.
        </li>
        <li>
          <code>input[type="text"]</code>: Adjusts the font size of the input
          field for better readability on smaller screens.
        </li>
        <li>
          <code>button</code>: Adjusts the padding and font size of the button
          for better readability on smaller screens.
        </li>
        <li>
          <code>#weather-container h2, #weather-container p</code>: Adjusts the
          font size of the city name, temperature, and description for better
          readability on smaller screens.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you resize your browser window or
        view the weather app on different devices, you'll see the layout adapt
        to different screen sizes.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Congratulations! You've completed the Weather App with API project.
        You've learned how to create a weather app that fetches real-time
        weather data from an API and displays it on your webpage. This project
        introduced you to working with APIs, handling async functions, and
        displaying data on your webpage.
      </p>
      <p>
        Feel free to customize and expand your weather app further. You can add
        more features, improve the design, or even create a mobile version.
        Happy coding and exploring the world of web development! 🚀
      </p>
    </div>
  );
};

export default WeatherApp;
