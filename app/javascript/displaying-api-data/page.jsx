import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Learn to Display API Data with JavaScript: A Beginner's Guide",
  description:
    "Master the art of fetching and displaying API data using JavaScript. This step-by-step tutorial covers HTML setup, JavaScript implementation, and practical examples using the Dog CEO's Dog API.",
  keywords:
    "API data display, JavaScript fetch, DOM manipulation, web development, Dog API, beginner coding, HTML and JavaScript",
  openGraph: {
    title: "From API to Webpage: Display Dynamic Data with JavaScript",
    description:
      "Unlock the power of APIs! Learn how to fetch dog images and display them on your webpage using JavaScript. Perfect for beginners looking to create dynamic web content.",

    type: "article",
  },

  authors: [{ name: "MergeSociety" }],
  category: "Web Development",

  schema: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Displaying API Data in JavaScript: A Step-by-Step Tutorial",
    description:
      "Learn how to fetch data from the Dog CEO's Dog API and display random dog images on your webpage using JavaScript and HTML.",
    author: {
      "@type": "Person",
      name: "Merge Society",
    },

    articleBody:
      "This tutorial covers how to set up HTML for displaying API data, write JavaScript to fetch data from the Dog CEO's Dog API, and update the webpage with the fetched data. It includes step-by-step explanations, code samples, and a practice challenge.",
    skillLevel: "Beginner",
    proficiencyLevel: "Beginner",
  },
};

const DisplayData = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Displaying API Data in JavaScript</h1>
      <p>
        In our previous lesson, we learned how to fetch data from an API using
        JavaScript. Now, we’re going to take it a step further by learning how
        to display this data on our webpage. To make it simple, we'll use a fun
        and easy API: the Dog CEO's Dog API, which gives us random dog images.
        Imagine it like having a magic box that gives you a new dog picture
        every time you ask for it!
      </p>
      <p>By the end of this lesson, you'll understand:</p>
      <ul>
        <li>How to fetch data from an API.</li>
        <li>How to display that fetched data on your webpage.</li>
      </ul>
      <h2>1. Setting Up the HTML</h2>
      <p>
        First, let’s set up a basic HTML file. This file will contain a place to
        show our dog image. Think of this like setting up a blank photo frame
        where we will put our picture later.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dog Image App</title>
</head>
<body>
<h1>Random Dog Image</h1>
<!-- Placeholder for the dog image -->
<img id="dog-image" alt="Random Dog" width="300" />
<script src="app.js"></script>
</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>In this HTML file:</p>
      <ul>
        <li>
          <strong>The {`<img>`} tag:</strong> This is where we’ll show the dog
          image. It’s like our empty picture frame with an ID of `dog-image` so
          we can find it later with JavaScript.
        </li>
        <li>
          <strong>The `id="dog-image"`:</strong> This ID helps us target the
          image element from our JavaScript code. It's like giving our photo
          frame a name so we know exactly which one to update.
        </li>
      </ul>
      <h2>2. Writing the JavaScript to Fetch and Display Data</h2>
      <p>
        Next, let’s write some JavaScript to fetch a random dog image from our
        API and put it into our HTML page. Imagine this like calling a friend
        (the API) to get a dog picture and then placing that picture into our
        photo frame (HTML).
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dogImageElement = document.getElementById('dog-image');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
dogImageElement.src = data.message;
})
.catch(error => {
console.error('Error fetching data:', error);
});
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Let’s break down this JavaScript code:</p>
      <ul>
        <li>
          <strong>Define the API URL:</strong> We set `apiUrl` to the endpoint
          that gives us a random dog image. Think of this URL as the address of
          the store where we’re buying our picture.
        </li>
        <li>
          <strong>Select the HTML Element:</strong> We use
          `document.getElementById('dog-image')` to grab our image placeholder
          from the HTML. It’s like finding the specific photo frame in our room
          where we want to put the new picture.
        </li>
        <li>
          <strong>Fetch Data:</strong> We use `fetch(apiUrl)` to request the
          data from the API. This is like placing an order for the picture from
          the store. Once we get a response, we convert it to JSON with
          `response.json()`, just like opening the package to see what’s inside.
        </li>
        <li>
          <strong>Update the Image Source:</strong> We set the `src` attribute
          of the {`<img>`} element to the URL of the dog image received from the
          API. This step is like putting the new picture into the frame.
        </li>
        <li>
          <strong>Handle Errors:</strong> If something goes wrong, we catch the
          error with `.catch()` and log it to the console. It’s like calling the
          store to ask why our picture didn’t arrive.
        </li>
      </ul>
      <AdUnit />
      <h2>3. How It All Connects</h2>
      <p>This lesson builds on our previous knowledge of fetching data:</p>
      <ul>
        <li>
          <strong>Fetching Data Recap:</strong> We previously learned how to use
          the `fetch` method to get data from an API and handle the response.
          This is the same method we’re using to get our dog image.
        </li>
        <li>
          <strong>Displaying Data:</strong> Now, we’re using that fetched data
          to update our HTML. We’re turning the data we got into something
          visual on our page, similar to how we filled in our empty photo frame.
        </li>
      </ul>
      Think of fetching data as getting a delivery from the store, and
      displaying data as putting that delivery on display for everyone to see.
      <h2>4. What Happens When the Code Runs</h2>
      <p>Here’s a step-by-step of what happens when you load the webpage:</p>
      <ul>
        <li>
          The JavaScript code runs and fetches a random dog image from the API.
        </li>
        <li>
          The code waits for the response to come back. This is like waiting for
          our delivery to arrive.
        </li>
        <li>
          Once the data arrives, JavaScript updates the `src` attribute of the{" "}
          {`<img>`} tag with the URL of the dog image. This step puts the
          picture into our photo frame.
        </li>
      </ul>
      <h2>5. Full Example (HTML + JavaScript)</h2>
      <p>Here’s a complete example that combines HTML and JavaScript:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dog Image App</title>
</head>
<body>
<h1>Random Dog Image</h1>
<img id="dog-image" alt="Random Dog" width="300" />
<script>
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dogImageElement = document.getElementById('dog-image');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
dogImageElement.src = data.message;
})
.catch(error => {
console.error('Error fetching data:', error);
});
</script>
</body>
</html>
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <h2>6. Key Takeaways</h2>
      <ul>
        <li>
          <strong>Fetch Data with JavaScript:</strong> The `fetch` method is
          used to get data from an API. It’s a powerful tool for working with
          remote data.
        </li>
        <li>
          <strong>Display Data with JavaScript:</strong> Once we have the data,
          we update our HTML elements to show this data. This makes our webpage
          dynamic and interactive.
        </li>
      </ul>
      <p>
        With these skills, you can now fetch and display data from APIs, making
        your web pages more engaging and responsive to real-time information.
      </p>
      <AdUnit />
      <h2>7. Practice Challenge</h2>
      <p>
        Try using a different API to fetch and display other types of data, such
        as random quotes or fun facts. This will help you get comfortable with
        working with different kinds of data and APIs.
      </p>
      <Button whereToGo={"/react"} />
    </div>
  );
};

export default DisplayData;
