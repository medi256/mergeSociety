import AdUnit from "../AdUnit";

const JSOn = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>What is JSON?</h1>
      <p>
        {`JSON is a lightweight data interchange format that's easy to read and
        write.{" "}
        It's a way to represent data in a structured format, using
        key-value pairs.`}
      </p>
      <h2>Imagine a Label Maker</h2>
      <p>
        Imagine you have a label maker, and you want to create labels for
        different objects. You would write the {`object's`} name on one side of
        the label and its description on the other side.
      </p>
      <p>
        JSON is similar, but instead of physical labels, you create a digital
        representation of the data using key-value pairs. The key is like the
        {`object's`} name, and the value is like its description.
      </p>
      <h2>JSON Syntax</h2>
      <p>{`Here's`} an example of JSON syntax:</p>
      <pre>
        <code>
          {`
{
  "name": "John",
  "age": 30,
  " occupation": "Developer"
}

          `}
        </code>
      </pre>
      <p>In this example, we have three key-value pairs:</p>
      <ul>
        <li>
          {" "}
          <b>name</b> is the key, and <b>John</b> is the value.
        </li>
        <li>
          {" "}
          <b>age</b> is the key, and <b>30</b> is the value.
        </li>
        <li>
          <b>occupation</b> is the key, and <b>Developer</b> is the value.
        </li>
      </ul>
      <h2>JSON Data Types</h2>
      <p>JSON supports several data types, including:</p>
      <ul>
        <li>
          {" "}
          <b>Strings</b>: Enclosed in double quotes, like <b>{`"John"`}</b>.
        </li>
        <li>
          <b>Numbers</b>: Like <b>30</b>.
        </li>
        <li>
          <b>Booleans</b>: Like <b>true</b> or <b>false</b>.
        </li>
        <li>
          <b>Arrays</b>: Like <b>[1, 2, 3]</b>.
        </li>
        <li>
          {" "}
          <b>Objects</b>: Like <b>{` { "name": "John" }`}</b>.
        </li>
        <li>
          <b>Null</b>: Like <b>null</b>.
        </li>
      </ul>
      <h2>JSON Objects</h2>
      <p>
        {" "}
        In JSON, objects are represented using curly braces {} and contain
        key-value pairs. {`Here's`} an example:
      </p>
      <pre>
        <code>
          {`
{
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
          
          `}
        </code>
      </pre>
      <p>
        In this example, we have an object with a single key-value pair, where
        the key is <b>address</b> and the value is another object with four
        key-value pairs.
      </p>
      <h2>JSON Arrays</h2>
      <p>
        In JSON, arrays are represented using square brackets <b>{`[]`}</b> and
        contain a list of values. {`Here's`} an example:
      </p>
      <pre>
        <code>
          {`
{
  "colors": ["red", "green", "blue"]
}
          `}
        </code>
      </pre>
      <h2>JSON in JavaScript</h2>
      <p>
        JSON is a subset of JavaScript, which means that any valid JSON is also
        valid JavaScript. In fact, JSON is often used to exchange data between
        web servers and web applications, as well as between different parts of
        a web application.
      </p>
      <AdUnit />
      <h2>Parsing JSON</h2>
      <p>
        In JavaScript, you can parse a JSON string using the{" "}
        <code>{`JSON.parse()`}</code>
        method:
      </p>
      <pre>
        <code>
          {`
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // John
console.log(jsonObject.age); // 30
          
          `}
        </code>
      </pre>
      <h2>Stringifying JSON</h2>
      <p>
        {" "}
        You can also convert a JavaScript object to a JSON string using the
        <code>{`JSON.stringify()`}</code> method:
      </p>
      <pre>
        <code>
          {`
const jsonObject = { name: "John", age: 30 };
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // {"name": "John", "age": 30}
          `}
        </code>
      </pre>
      <h3>JSON in Summary</h3>
      <p>
        {`In summary, JSON is a lightweight data interchange format that's easy to
        read and write. It's a way to represent data in a structured format,
        using key-value pairs. JSON is a subset of JavaScript, and it's often
        used to exchange data between web servers and web applications.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/thisKeyWord")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/dates")}>Next</button>
      </div>
    </div>
  );
};

export default JSOn;
