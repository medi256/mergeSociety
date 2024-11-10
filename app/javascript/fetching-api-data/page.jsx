import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Learn How to Fetch Data from APIs in JavaScript | MergeSociety",
  description:
    "Master the art of fetching data from APIs using JavaScript. This lesson covers everything from basic fetch requests, handling API keys, and managing different response types to async/await techniques. Perfect for beginners and those looking to enhance their API integration skills.",
  keywords:
    "fetch API, JavaScript API tutorial, API integration, async await, fetch requests, handle API response, JavaScript fetch method, API key usage, fetch error handling, coding tutorial",
  alternates: {
    canonical: "https://www.mergesociety.com/javascript/fetching-api-data",
  },
  openGraph: {
    title: "Learn How to Fetch Data from APIs in JavaScript",
    description:
      "In this detailed guide, learn how to effectively fetch and handle data from APIs using JavaScript. Includes practical examples for API requests with fetch, error handling, and async/await.",
  },
};

const fetchData = () => {
  return (
    <div className="lesson-container">
      <h1>Fetching Data from APIs</h1>

      <p>
        Welcome to the next step of learning about APIs! 🌟 In this lesson,
        we’ll dive into how to fetch data from an API. This means we’ll learn
        how to request data from an API and handle the response we get back.
        Let's explore this step by step.
      </p>

      <h2>1. Understanding the Fetch Method</h2>
      <p>
        Think of fetching data from an API like ordering a book from an online
        bookstore. You place an order (make a request), and the bookstore sends
        you the book (the data) you wanted. In programming, we use the{" "}
        <code>fetch</code> method to place this order.
      </p>

      <h3>a. Making a Basic Fetch Request</h3>
      <p>
        The basic way to fetch data is using the <code>fetch</code> method.
        Here's how you use it:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>

      <ul>
        <li>
          <strong>fetch('https://api.example.com/data'):</strong> This is the
          address where you’re sending your request. Replace{" "}
          <code>'https://api.example.com/data'</code> with the URL of the API
          you want to use.
        </li>
        <li>
          <strong>{`.then(response => response.json())`}:</strong> After sending
          the request, you get a response from the API. The{" "}
          <code>response.json()</code> part turns that response into a format
          that’s easy to work with (JSON).
        </li>
        <li>
          <strong>{`.then(data => console.log(data))`}:</strong> This part
          handles the data you received from the API. Here, we’re just printing
          it to the console so you can see it.
        </li>
        <li>
          <strong>{`.catch(error => console.error('Error:', error))`}:</strong>{" "}
          This handles any issues that occur during the fetch request, like if
          there’s a problem with the network or the API is down.
        </li>
      </ul>

      <h3>b. Fetching Data with an API Key</h3>
      <p>
        Some APIs require you to include an API key in your request. Think of an
        API key like a membership card that allows you to access certain
        services. Without it, the API might not let you in.
      </p>

      <p>
        To include the API key, you add it to the URL. Here’s an example of how
        you include it:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
fetch('https://api.example.com/data?api_key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>

      <ul>
        <li>
          <strong>YOUR_API_KEY:</strong> Replace this with the actual API key
          you received from the API provider. The API key is often included as a
          query parameter in the URL (after the <code>?</code>).
        </li>
      </ul>

      <h3>c. Handling Different Response Types</h3>
      <p>
        Sometimes, the API might send different types of responses. For
        instance, it might send text, JSON, or even binary data. Most of the
        time, APIs send JSON data, but it’s important to handle other types of
        responses as well.
      </p>

      <p>Here’s how you can handle text responses:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
fetch('https://api.example.com/text-data')
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error('Error:', error));
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>response.text()</code> is used instead of{" "}
        <code>response.json()</code> to handle text data.
      </p>

      <h3>d. Using Async/Await for Fetch Requests</h3>
      <p>
        Another way to handle fetch requests is by using{" "}
        <code>async/await</code>. This makes your code look cleaner and easier
        to read, like writing a list of instructions rather than chaining
        multiple steps together.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Here’s what’s happening:</p>

      <ul>
        <li>
          <strong>async function fetchData():</strong> This declares an
          asynchronous function. It lets you use <code>await</code> inside it.
        </li>
        <li>
          <strong>
            const response = await fetch('https://api.example.com/data');
          </strong>{" "}
          This line waits for the fetch request to complete before continuing.
        </li>
        <li>
          <strong>if (!response.ok):</strong> Checks if the response was
          successful. If not, it throws an error.
        </li>
        <li>
          <strong>const data = await response.json();</strong> Waits for the
          response to be converted to JSON.
        </li>
        <li>
          <strong>catch (error):</strong> Catches and logs any errors that
          occurred during the fetch process.
        </li>
      </ul>

      <h2>5. Summary</h2>
      <p>To recap, fetching data from an API involves:</p>

      <ul>
        <li>
          Using the <code>fetch</code> method to make a request.
        </li>
        <li>
          Handling the response by converting it to a usable format (like JSON).
        </li>
        <li>Including an API key in your request if required.</li>
        <li>Handling different types of responses (text, JSON, etc.).</li>
        <li>
          Using <code>async/await</code> to make your code cleaner and easier to
          manage.
        </li>
      </ul>

      <p>
        With these steps, you can start fetching data from APIs and integrating
        it into your projects. Next up, we'll explore how to display this data
        in your app. Stay tuned! 🚀
      </p>

      <Button whereToGo={"displaying-api-data"} />
    </div>
  );
};

export default fetchData;
