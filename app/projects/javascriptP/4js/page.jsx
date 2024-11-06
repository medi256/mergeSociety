import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title:
    "Build a Weather App with API Tutorial | JavaScript Weather Application Guide",
  description:
    "Learn how to create a responsive weather application using JavaScript, HTML, CSS, and real-time weather API. Step-by-step tutorial for beginners with complete source code.",

  openGraph: {
    title: "Weather App Tutorial - Build a Real-time Weather Application",
    description:
      "Complete guide to building a weather app with JavaScript and API integration. Perfect for web development beginners.",
  },

  keywords:
    "weather app, JavaScript tutorial, javascript weather project API integration, web development, frontend development, responsive design",
};

const WeatherAppWithAPI = () => {
  return (
    <div className="lesson-container">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", borderBottom: "2px solid #333" }}>
          Building a Weather App with API
        </h1>
      </div>

      <h2>Introduction to the Weather App with API</h2>
      <h3>Welcome to Building a Weather App with API!</h3>

      <p>
        In this project, we'll create a simple weather app that fetches
        real-time weather data from an API and displays it on a webpage. This
        project will help you learn the basics of working with APIs, handling
        async functions, and displaying data on a webpage.
      </p>
      <p>Here's what we'll cover in this tutorial:</p>
      <ul>
        <li>Setting up the HTML structure for the weather app.</li>
        <li>Applying basic styling to the weather app.</li>
        <li>Adding JavaScript to handle API calls and user interactions.</li>
        <li>Fetching and displaying weather data from an API.</li>
        <li>Making the weather app responsive for different screen sizes.</li>
      </ul>
      <p>
        By the end of this project, you'll have a fully functional weather app.
        Let's get started by setting up our project files!
      </p>

      <h2>Setting Up Your Workspace</h2>

      <h3>Creating Your Project Folder and Files</h3>
      <p>Before we start coding, let's set up a workspace for our project:</p>
      <ol>
        <li>
          On Windows: Right-click on your desktop, select "New" &gt; "Folder",
          and name it "weather-app".
        </li>
        <li>
          On Mac: Right-click on your desktop, select "New Folder", and name it
          "weather-app".
        </li>
        <li>
          <strong>Open the Folder in a Text Editor:</strong>
          <ul>
            <li>
              <strong>Visual Studio Code:</strong> If you have VS Code,
              right-click on the "weather-app" folder and select "Open with
              Code".
            </li>
            <li>
              <strong>Other Text Editors:</strong> For Notepad or TextEdit,
              simply double-click on the folder to open it.
            </li>
          </ul>
        </li>

        <strong>Create HTML, CSS, and JavaScript Files:</strong>
        <ul>
          <li>
            In VS Code: Right-click in the file explorer panel, select "New
            File", and create three files: "index.html", "styles.css", and
            "script.js".
          </li>
          <li>
            In Notepad/TextEdit: Create a new file, then immediately "Save As"
            and create three files: "index.html", "styles.css", and "script.js".
            Make sure to save them in your "weather-app" folder.
          </li>
        </ul>
      </ol>
      <p>
        <strong>Explanation:</strong> We create a new folder to keep our project
        organized. The "index.html" file will contain the HTML structure,
        "styles.css" will hold our CSS rules for styling, and "script.js" will
        contain our JavaScript code. The "index.html" file is the main page of
        our weather app, and it's standard to name it "index.html".
      </p>
      <p>
        Great job! You've set up your workspace. In the next step, we'll start
        building the HTML structure for our weather app.
      </p>

      <h2>Setting Up the HTML Structure</h2>
      <h3>Creating the Weather App HTML</h3>

      <p>
        Before we dive into CSS and JavaScript, let's set up the HTML structure
        for our weather app:
      </p>
      <ol>
        <li>
          <strong>Open "index.html":</strong> Open your "index.html" file in
          your code editor.
        </li>
        <li>
          <strong>Add the Weather App HTML:</strong> Copy and paste the
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
    <div class="search-container">
      <input type="text" id="city-input" placeholder="Enter city name">
      <button id="search-button">Search</button>
    </div>
    <div class="weather-container" style="display: none;">
      <h2 id="city-name"></h2>
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
      <p>Let's understand the HTML structure:</p>
      <ul>
        <li>
          <code>&lt;div class="container"&gt;</code>: Represents the container
          for the weather app.
        </li>
        <li>
          <code>&lt;h1&gt;Weather App&lt;/h1&gt;</code>: The title of the
          weather app.
        </li>
        <li>
          <code>&lt;div class="search-container"&gt;</code>: The container for
          the search input and button.
        </li>
        <li>
          <code>
            &lt;input type="text" id="city-input" placeholder="Enter city
            name"&gt;
          </code>
          : The input field for entering the city name.
        </li>
        <li>
          <code>&lt;button id="search-button"&gt;Search&lt;/button&gt;</code>:
          The button for searching the weather data.
        </li>
        <li>
          <code>
            &lt;div class="weather-container" style="display: none;"&gt;
          </code>
          : The container for displaying the weather data, initially hidden.
        </li>
        <li>
          <code>&lt;h2 id="city-name"&gt;&lt;/h2&gt;</code>: The element for
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
        place. In the next step, we'll start applying CSS styles to our weather
        app.
      </p>

      <h2>Styling the Weather App</h2>
      <h3>Styling the Weather App</h3>
      <p>
        Let's start by styling the weather app to ensure a consistent and clean
        layout.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Weather App Styles:</strong> Copy and paste the following
          CSS code into your "styles.css" file:
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

.search-container {
  margin-bottom: 20px;
}

#city-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

#search-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

#search-button:hover {
  background-color: #0056b3;
}

.weather-container {
  margin-top: 20px;
}

#city-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

#temperature {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

#description {
  font-size: 1.2rem;
  margin-bottom: 10px;
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>body</code>: Sets the default font, removes default margin and
          padding, sets a light gray background, and centers the content using
          flexbox.
        </li>
        <li>
          <code>.container</code>: Styles the container with a white background,
          padding, rounded corners, a shadow, and a fixed width.
        </li>
        <li>
          <code>h1</code>: Styles the title with a larger font size and margin.
        </li>
        <li>
          <code>.search-container</code>: Adds margin to the search container.
        </li>
        <li>
          <code>#city-input</code>: Styles the input field for entering the city
          name with a border, padding, and margin.
        </li>
        <li>
          <code>#search-button</code>: Styles the search button with a blue
          background, white text, no border, padding, border-radius, cursor, and
          transition for smooth changes.
        </li>
        <li>
          <code>#search-button:hover</code>: Changes the background color of the
          search button on hover.
        </li>
        <li>
          <code>.weather-container</code>: Adds margin to the weather container.
        </li>
        <li>
          <code>#city-name</code>: Styles the city name with a larger font size
          and margin.
        </li>
        <li>
          <code>#temperature</code>: Styles the temperature with a larger font
          size and margin.
        </li>
        <li>
          <code>#description</code>: Styles the weather description with a
          larger font size and margin.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the styled weather app.
      </p>
      <p>
        In the next step, we'll start adding JavaScript to handle API calls and
        user interactions.
      </p>

      <h2>Adding JavaScript for API Calls: Part 1</h2>
      <h3>Adding JavaScript for API Calls: Part 1</h3>

      <p>
        Let's start adding JavaScript to handle API calls and user interactions.
      </p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Defining the API Key and Base URL:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`const apiKey = 'YOUR_API_KEY';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>const apiKey = 'YOUR_API_KEY';</code>: Defines the API key for
          accessing the OpenWeatherMap API. Replace `'YOUR_API_KEY'` with your
          actual API key.
        </li>
        <li>
          <code>
            const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
          </code>
          : Defines the base URL for the OpenWeatherMap API.
        </li>
      </ul>
      <p>
        Save your "script.js" file. In the next step, we'll add the function to
        fetch weather data from the API.
      </p>

      <h2>Adding JavaScript for API Calls: Part 2</h2>
      <h3>Adding JavaScript for API Calls: Part 2</h3>
      <p>Let's add the function to fetch weather data from the API.</p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Adding the Fetch Function:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`async function fetchWeatherData(city) {
  try {
    const response = await fetch(\`\${baseUrl}?q=\${city}&appid=\${apiKey}&units=metric\`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>{`async function fetchWeatherData(city) { ... }`}</code>:
          Defines an asynchronous function to fetch weather data for a given
          city.
        </li>
        <li>
          <code>
            {`const response = await fetch(\`\${baseUrl}?q=\${city}&appid=\$
                {apiKey}&units=metric\`);`}
          </code>
          : Sends a GET request to the OpenWeatherMap API with the city name,
          API key, and metric units.
        </li>
        <li>
          <code>{`if (!response.ok) { throw new Error('City not found'); }`}</code>
          : Checks if the response is not ok (e.g., city not found) and throws
          an error.
        </li>
        <li>
          <code>const data = await response.json();</code>: Converts the
          response to JSON format.
        </li>
        <li>
          <code>return data;</code>: Returns the weather data.
        </li>
        <li>
          <code>{`catch (error) { console.error('Error fetching weather data:', error); return null; }`}</code>
          : Catches any errors that occur during the fetch request and logs them
          to the console.
        </li>
      </ul>
      <p>
        Save your "script.js" file. In the next step, we'll add the function to
        update the UI with the fetched weather data.
      </p>

      <h2>Adding JavaScript for API Calls: Part 3</h2>
      <h3>Adding JavaScript for API Calls: Part 3</h3>

      <p>
        Let's add the function to update the UI with the fetched weather data.
      </p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Adding the Update UI Function:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`function updateUI(weatherData) {
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const weatherContainer = document.querySelector('.weather-container');

  cityNameElement.textContent = weatherData.name;
  temperatureElement.textContent = \`\${weatherData.main.temp}°C\`;
  descriptionElement.textContent = weatherData.weather[0].description;

  weatherContainer.style.display = 'block';
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>{`function updateUI(weatherData) { ... }`}</code>: Defines a
          function to update the UI with the fetched weather data.
        </li>
        <li>
          <code>
            const cityNameElement = document.getElementById('city-name');
          </code>
          : Selects the element for displaying the city name.
        </li>
        <li>
          <code>
            const temperatureElement = document.getElementById('temperature');
          </code>
          : Selects the element for displaying the temperature.
        </li>
        <li>
          <code>
            const descriptionElement = document.getElementById('description');
          </code>
          : Selects the element for displaying the weather description.
        </li>
        <li>
          <code>
            const weatherContainer =
            document.querySelector('.weather-container');
          </code>
          : Selects the container for displaying the weather data.
        </li>
        <li>
          <code>cityNameElement.textContent = weatherData.name;</code>: Sets the
          city name in the UI.
        </li>
        <li>
          <code>
            {`temperatureElement.textContent = \`\${weatherData.main.temp}
                °C\`;`}
          </code>
          : Sets the temperature in the UI with the °C symbol.
        </li>
        <li>
          <code>
            descriptionElement.textContent = weatherData.weather[0].description;
          </code>
          : Sets the weather description in the UI.
        </li>
        <li>
          <code>weatherContainer.style.display = 'block';</code>: Displays the
          weather container.
        </li>
      </ul>
      <p>
        Save your "script.js" file. In the next step, we'll add the event
        listener to handle the search button click.
      </p>

      <h2>Adding JavaScript for User Interactions: Part 1</h2>

      <h3>Adding JavaScript for User Interactions: Part 1</h3>
      <p>Let's add the event listener to handle the search button click.</p>
      <ol>
        <li>
          <strong>Open "script.js":</strong> Open the "script.js" file in your
          code editor.
        </li>
        <li>
          <strong>Adding the Event Listener:</strong> Copy and paste the
          following JavaScript code into your "script.js" file:
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const cityInput = document.getElementById('city-input');

  searchButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
      const weatherData = await fetchWeatherData(city);
      if (weatherData) {
        updateUI(weatherData);
      } else {
        alert('City not found. Please try again.');
      }
    } else {
      alert('Please enter a city name.');
    }
  });
});`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the JavaScript code we just added:</p>
      <ul>
        <li>
          <code>{`document.addEventListener('DOMContentLoaded', () => { ... })`}</code>
          : Ensures that the JavaScript code runs only after the DOM has been
          fully loaded.
        </li>
        <li>
          <code>
            const searchButton = document.getElementById('search-button');
          </code>
          : Selects the search button.
        </li>
        <li>
          <code>const cityInput = document.getElementById('city-input');</code>:
          Selects the input field for entering the city name.
        </li>
        <li>
          <code>{`searchButton.addEventListener('click', async () => { ... })`}</code>
          : Adds an event listener to the search button to handle the click
          event.
        </li>
        <li>
          <code>const city = cityInput.value.trim();</code>: Gets the city name
          from the input field and trims any leading or trailing spaces.
        </li>
        <li>
          <code>{`if (city) { ... }`}</code>: Checks if a city name has been
          entered.
        </li>
        <li>
          <code>const weatherData = await fetchWeatherData(city);</code>: Calls
          the <code>fetchWeatherData</code> function to fetch the weather data
          for the entered city.
        </li>
        <li>
          <code>{`if (weatherData) { updateUI(weatherData); }`}</code>: If the
          weather data is fetched successfully, calls the <code>updateUI</code>
          function to update the UI.
        </li>
        <li>
          <code>{`else { alert('City not found. Please try again.'); }`}</code>:
          If the city is not found, shows an alert message.
        </li>
        <li>
          <code>{`else { alert('Please enter a city name.'); }`}</code>: If no
          city name is entered, shows an alert message.
        </li>
      </ul>
      <p>
        Save your "script.js" file. Now, if you open "index.html" in a web
        browser, you'll be able to search for a city and see the weather data.
      </p>
      <p>
        In the next step, we'll make the weather app responsive for different
        screen sizes.
      </p>

      <h2>Making the Weather App Responsive</h2>
      <h3>Making the Weather App Responsive</h3>

      <p>
        Let's ensure our weather app looks great on various devices by adding
        responsive design using CSS media queries.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Responsive Design Styles:</strong> Copy and paste the
          following CSS code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  #city-input {
    font-size: 0.9rem;
    padding: 8px;
  }

  #search-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  #city-name {
    font-size: 1rem;
  }

  #temperature {
    font-size: 1.2rem;
  }

  #description {
    font-size: 1rem;
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
          <code>#city-input</code>: Adjusts the font size and padding of the
          city input field for better readability on smaller screens.
        </li>
        <li>
          <code>#search-button</code>: Adjusts the font size and padding of the
          search button for better readability on smaller screens.
        </li>
        <li>
          <code>#city-name</code>: Adjusts the font size of the city name for
          better readability on smaller screens.
        </li>
        <li>
          <code>#temperature</code>: Adjusts the font size of the temperature
          for better readability on smaller screens.
        </li>
        <li>
          <code>#description</code>: Adjusts the font size of the weather
          description for better readability on smaller screens.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you resize your browser window or
        view the weather app on different devices, you'll see the layout adapt
        to different screen sizes.
      </p>
      <p>In the next step, we'll add final touches to the weather app.</p>

      <h2>Adding Final Touches</h2>
      <h3>Adding Final Touches</h3>
      <p>
        Let's add the final touches to our weather app to ensure it is fully
        functional and visually appealing.
      </p>
      <ol>
        <li>
          <strong>Open "styles.css":</strong> Open the "styles.css" file in your
          code editor.
        </li>
        <li>
          <strong>Add Final Touches:</strong> Copy and paste the following CSS
          code into your "styles.css" file:
          <pre>
            <code>
              <SyntaxHighlighter language="css" style={docco}>
                {`.container {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

#search-button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

#search-button:hover {
  transform: scale(1.05);
}

#city-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <p>Let's understand the CSS rules we just added:</p>
      <ul>
        <li>
          <code>.container</code>: Adds a more pronounced shadow to the
          container for a better visual effect.
        </li>
        <li>
          <code>#search-button</code>: Adds a transition effect for background
          color and transform to the search button.
        </li>
        <li>
          <code>#search-button:hover</code>: Scales the search button slightly
          larger on hover to create a subtle zoom effect.
        </li>
        <li>
          <code>#city-input:focus</code>: Changes the border color and adds a
          box shadow to the city input field when it is focused.
        </li>
      </ul>
      <p>
        Save your "styles.css" file. Now, if you open "index.html" in a web
        browser, you'll see the final touches in action.
      </p>
      <p>
        Congratulations! You've completed the JavaScript project, "Weather App
        with API." You've learned how to create a simple weather app that
        fetches real-time weather data from an API and displays it on a webpage.
        You've also learned the basics of working with APIs, handling async
        functions, and displaying data on a webpage.
      </p>
      <p>
        Feel free to continue customizing your weather app and exploring more
        JavaScript techniques. Happy coding!
      </p>
    </div>
  );
};

export default WeatherAppWithAPI;
