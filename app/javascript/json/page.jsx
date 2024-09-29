import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding JSON in JavaScript | Learn JSON Basics",
  description:
    "Dive into JSON (JavaScript Object Notation) with our comprehensive guide. Learn how to use JSON for data exchange, parse JSON strings, and convert JavaScript objects to JSON. Perfect for beginners and web developers!",
  keywords: [
    "JSON",
    "JavaScript",
    "data interchange",
    "JSON.stringify",
    "JSON.parse",
    "web development",
    "API responses",
    "JavaScript objects",
    "beginner programming",
    "JavaScript tutorials",
  ],

  openGraph: {
    title: "Understanding JSON in JavaScript",
    description:
      "Learn the basics of JSON, how to work with it in JavaScript, and its importance in web development.",

    type: "article",
  },
};

const JSON = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Understanding JSON in JavaScript</h1>
      <p>
        JSON, which stands for JavaScript Object Notation, is a lightweight
        data-interchange format that's easy for humans to read and write, and
        easy for machines to parse and generate. It’s widely used in web
        development, particularly for sending and receiving data between a
        server and a client.
      </p>

      <h2>What is JSON?</h2>
      <p>
        JSON is essentially a text format that represents data structures like
        objects and arrays. It looks very similar to JavaScript object literals,
        which is one reason it's so intuitive for JavaScript developers to use.
      </p>

      <h3>Example of JSON</h3>
      <p>Here's a simple example of JSON:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
  {
    "name": "John",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown"
    }
  }
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this JSON example, we have an object with several key-value pairs.
        The keys are strings (e.g., <code>"name"</code>, <code>"age"</code>),
        and the values can be strings, numbers, booleans, arrays, or even other
        objects.
      </p>

      <h2>Why JSON is Important</h2>
      <p>
        JSON is important because it's the standard format for data exchange in
        web development. When you request data from a server (e.g., using an
        API), the response is often in JSON format. Similarly, when you send
        data to a server, it's often sent as JSON.
      </p>

      <h3>Analogy: JSON as a Package</h3>
      <p>
        Think of JSON as a package you send or receive in the mail. The package
        contains information organized in a way that's easy to understand. When
        you open the package (i.e., parse the JSON), you can easily access and
        use the information inside.
      </p>

      <h2>Working with JSON in JavaScript</h2>
      <p>
        In JavaScript, there are two main methods for working with JSON:{" "}
        <code>JSON.stringify()</code> and <code>JSON.parse()</code>.
      </p>

      <h3>
        1. Converting JavaScript Objects to JSON: <code>JSON.stringify()</code>
      </h3>
      <p>
        The <code>JSON.stringify()</code> method converts a JavaScript object
        into a JSON string. This is useful when you need to send data to a
        server or store it in a text-based format.
      </p>

      <p>Here’s an example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
  const user = {
    name: "Alice",
    age: 25,
    isStudent: true
  };

  const jsonString = JSON.stringify(user);
  console.log(jsonString);
  // Output: '{"name":"Alice","age":25,"isStudent":true}'
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, we have a JavaScript object <code>user</code>. When we
        pass it to <code>JSON.stringify()</code>, it returns a JSON string
        representing the object.
      </p>

      <h3>
        2. Converting JSON to JavaScript Objects: <code>JSON.parse()</code>
      </h3>
      <p>
        The <code>JSON.parse()</code> method does the opposite of{" "}
        <code>JSON.stringify()</code>. It takes a JSON string and converts it
        back into a JavaScript object.
      </p>

      <p>Let’s look at an example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
  const jsonString = '{"name":"Bob","age":28,"isStudent":false}';
  const user = JSON.parse(jsonString);

  console.log(user.name);  // Output: "Bob"
  console.log(user.age);   // Output: 28
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        Here, we start with a JSON string and use <code>JSON.parse()</code> to
        convert it into a JavaScript object. Now, we can easily access the
        properties of the object, just like we would with any other JavaScript
        object.
      </p>
      <AdUnit />
      <h2>Common Use Cases for JSON</h2>
      <p>
        JSON is used in many scenarios in web development. Here are a few common
        use cases:
      </p>

      <h3>1. API Responses</h3>
      <p>
        When you fetch data from an API, the response is often in JSON format.
        You can use <code>JSON.parse()</code> to convert this data into a
        JavaScript object for easy manipulation.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
        `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, the <code>fetch()</code> method retrieves data from an
        API, and <code>response.json()</code> automatically parses the JSON
        response into a JavaScript object.
      </p>

      <h2>JSON Limitations</h2>
      <p>While JSON is extremely useful, it does have some limitations:</p>

      <ul>
        <li>
          JSON only supports a limited set of data types: strings, numbers,
          objects, arrays, booleans, and null.
        </li>
        <li>
          JSON does not support functions or special objects like Date, Map, or
          Set.
        </li>
        <li>
          Keys in JSON objects must be strings, so you can't use variables or
          other data types as keys.
        </li>
      </ul>

      <h2>Practice: Converting a JavaScript Object to JSON and Back</h2>
      <p>Now, let’s practice what we’ve learned with a simple example.</p>

      <p>
        Create a JavaScript object that represents a car, with properties like{" "}
        <code>make</code>, <code>model</code>, and <code>year</code>. Convert
        this object to a JSON string, then convert it back to a JavaScript
        object using the methods we've discussed.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };

  const jsonString = JSON.stringify(car);
  console.log(jsonString);
  // Output: '{"make":"Toyota","model":"Corolla","year":2020}'

  const parsedCar = JSON.parse(jsonString);
  console.log(parsedCar.model);  // Output: "Corolla"
        `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <AdUnit />
      <p>
        This simple exercise will help you get comfortable with converting
        objects to JSON and back. No need to worry about storing the data or
        anything else—just focus on understanding how JSON works!
      </p>

      <Button whereToGo={"date-methods"} />
    </div>
  );
};

export default JSON;
