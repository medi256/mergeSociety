const Objects = () => {
  return (
    <div className="comments-container">
      <h1>JavaScript Objects</h1>
      <p>
        In this tutorial, we will delve into the world of JavaScript objects.
        Objects are fundamental building blocks in JavaScript, used to store and
        organize data. We will explore how to create objects, access their
        properties, and leverage their methods to manipulate data effectively.
        By the end of this tutorial, you will gain a solid understanding of
        JavaScript objects and be well-equipped to utilize them in your web
        development endeavors.
      </p>
      <h2> What are Objects?</h2>
      <ul>
        <li> Objects are a collection of key-value pairs.</li>
        <li>
          {" "}
          Keys are unique identifiers (like strings or symbols) used to access
          values.
        </li>
        <li>
          Values can be any data type, including strings, numbers, booleans,
          arrays, or even other objects.
        </li>
        <li>
          Objects provide a structured way to represent real-world entities or
          concepts.
        </li>
      </ul>
      <h2>Explanation</h2>
      <p>
        {" "}
        Imagine a toy box. Each toy in the box is like a property within an
        object. The name of the toy acts as the key, and the toy itself is the
        value. Objects allow us to group related data under a single entity,
        making our code more organized and easier to manage.
      </p>
      <h2>Creating Objects</h2>
      <p>Objects can be created using object literal notation:</p>
      <pre>
        <code>
          {`
//JavaScript


const person = {
  name: "John",
  age: 30,
  city: "New York"
};
          `}
        </code>
      </pre>
      <ul>
        <li>
          {" "}
          Each property is defined as a key-value pair separated by a colon{" "}
          <b>:</b>.
        </li>
        <li>Property names must be unique within an object.</li>
      </ul>
      <h3>Explanation</h3>
      <p>
        {" "}
        Creating objects in JavaScript is straightforward. We use curly braces
        <b> {} </b> to enclose key-value pairs, separated by commas. Here, we
        create an object named person with properties like name, age, and city.
        This approach is widely used for its simplicity and readability.
      </p>
      <h2>Accessing Properties</h2>
      <ul>
        <li>
          Access object properties using dot notation <b>. </b> or bracket
          notation
          <b>[]</b>.
        </li>
        <li>
          Dot notation is preferred for property names that are valid JavaScript
          identifiers (without spaces or special characters).
        </li>
      </ul>
      <pre>
        <code>
          {`
//JavaScript


const person = {
  name: "John",
  age: 30,
  city: "New York"
};
          
console.log(person.name); // Outputs "John"
          `}
        </code>
      </pre>
      <p>
        Bracket notation is useful for accessing properties with spaces, special
        characters, or dynamically generated names.
      </p>
      <pre>
        <code>
          {`
//JavaScript

const academy = {
    "merge society": true, 
    founder: "Massa Medi"
}

console.log(academy["merge society"]) // Outputs true

          `}
        </code>
      </pre>
      <p>
        {" "}
        Once we have created an object, we need to retrieve the information
        stored within it. JavaScript provides two methods for accessing object
        properties: dot notation and bracket notation. Dot notation is the more
        concise way when property names are valid JavaScript identifiers.
        Bracket notation offers more flexibility, especially when dealing with
        dynamic property names or accessing properties that conflict with
        JavaScript keywords.
      </p>
      <h2>Modifying Properties</h2>
      <p>
        {" "}
        Object properties are mutable, meaning their values can be changed after
        creation.
      </p>
      <h3>For example</h3>
      <pre>
        <code>
          {`
//JavaScript


const person = {
  name: "John",
  age: 30,
  city: "New York"
};


person.age = 35;
console.log(person.age); // Outputs 35 (updated value)

          `}
        </code>
      </pre>
      <p>
        The beauty of objects lies in their mutability. We can modify the values
        associated with properties even after the object is created. This allows
        us to keep our data dynamic and adaptable. In this example, we update
        the {`person's`} age from 30 to 35.
      </p>
      <h2>Adding and Deleting Properties</h2>
      <p>
        {" "}
        New properties can be added using dot notation or bracket notation.
      </p>
      <pre>
        <code>
          {`
//javaScript

          
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

person.job = "Software Engineer";
person["hasPet"] = true;

console.log(person.job) // Outputs Software Engineer
console.log(person[hasPets]) // Outputs true
          `}
        </code>
      </pre>
      <p>
        To delete a property, use the <code>delete</code> keyword followed by
        the property name in bracket notation.
      </p>
      <pre>
        <code>
          {`
//javaScript

          
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
          
          
delete person.city;
// If you attempt to access the "city" property, it will return undefined.


          `}
        </code>
      </pre>
      <p>
        Objects are not static entities. We can add new properties to store
        additional information as needed. The delete keyword allows us to remove
        properties that are no longer required. Remember, bracket notation is
        generally preferred when adding or deleting properties.
      </p>
      <h2>Best Practices:</h2>
      <ul>
        <li>
          Use dot notation for property names that are valid JavaScript
          identifiers.
        </li>
        <li>
          Use bracket notation for property names with spaces, special
          characters, or dynamically generated names.
        </li>
        <li>
          Be mindful of property names that conflict with JavaScript keywords.
        </li>
      </ul>
      <h2>Common Use Cases:</h2>
      <ul>
        <li>
          Representing real-world entities, such as users, products, or
          locations.
        </li>
        <li>
          Storing and manipulating data in a structured and organized manner.
        </li>
        <li>
          Creating reusable code by encapsulating data and behavior within
          objects.
        </li>
      </ul>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/arrays")}>back</button>
        <button onClick={() => (window.location.href = "/scope")}>Next</button>
      </div>
    </div>
  );
};

export default Objects;
