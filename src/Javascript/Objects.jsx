import AdUnit from "../AdUnit";

const Objects = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Objects in JavaScript</h1>

      <h2>Introduction</h2>
      <p>
        In JavaScript, an object is a way to store a collection of data. An
        object groups related data and functions together, making it easier to
        manage and use them. Imagine an object like a real-world thing, such as
        a car. A car has different features, like its color, model, and year.
        Similarly, in JavaScript, an object can have different properties.
      </p>
      <p>
        Think of an object as a box (the object) where you can keep different
        items (properties). Each item has a name (key) and a value. For example,
        a box might have a label that says "Car Color" and inside it, you have a
        value like "Red."
      </p>

      <h2>Creating Objects</h2>
      <p>
        You create an object using curly braces <code>{`{}`}</code> and inside
        the braces, you list the properties with their values. Here's a simple
        example:
      </p>
      <pre>
        <code>
          {`
const car = {
make: 'Toyota',  // This is a property with key 'make' and value 'Toyota'
model: 'Corolla', // This is a property with key 'model' and value 'Corolla'
year: 2020,       // This is a property with key 'year' and value 2020
color: 'red'      // This is a property with key 'color' and value 'red'
};
    `}
        </code>
      </pre>
      <p>
        In this example, the object <code>car</code> has four properties:{" "}
        <code>make</code>, <code>model</code>, <code>year</code>, and{" "}
        <code>color</code>.
      </p>

      <h2>Accessing Object Properties</h2>
      <p>
        You can get the values of properties in an object in two ways: using dot
        notation or bracket notation.
      </p>

      <h3>Dot Notation</h3>
      <p>
        Dot notation is simple and direct. You use a dot <code>.</code> followed
        by the property name. For example:
      </p>
      <pre>
        <code>
          {`
const carMake = car.make; // Access the 'make' property of the 'car' object
console.log(carMake);     // Output: Toyota
    `}
        </code>
      </pre>
      <p>
        Here, <code>car.make</code> retrieves the value of the <code>make</code>{" "}
        property from the <code>car</code> object.
      </p>
      <AdUnit />
      <h3>Bracket Notation</h3>
      <p>
        Bracket notation is useful when property names are dynamic or contain
        special characters. You use square brackets <code>[]</code> with the
        property name as a string. For example:
      </p>
      <pre>
        <code>
          {`
const carColor = car['color']; // Access the 'color' property using bracket notation
console.log(carColor);        // Output: red
    `}
        </code>
      </pre>
      <p>You can also use a variable to access a property:</p>
      <pre>
        <code>
          {`
const property = 'model'; // Define a variable with the property name
const carModel = car[property]; // Access the 'model' property using the variable
console.log(carModel); // Output: Corolla
    `}
        </code>
      </pre>

      <h2>Modifying Object Properties</h2>
      <p>
        You can change the value of a property in an object using dot notation
        or bracket notation. Here’s how:
      </p>
      <pre>
        <code>
          {`
car.color = 'blue';  // Change the 'color' property to 'blue'
console.log(car.color); // Output: blue

car['year'] = 2021;  // Change the 'year' property to 2021
console.log(car.year); // Output: 2021
    `}
        </code>
      </pre>
      <p>
        In these examples, we updated the values of the <code>color</code> and{" "}
        <code>year</code> properties in the <code>car</code> object.
      </p>

      <h2>Adding New Properties</h2>
      <p>
        You can also add new properties to an object. Use dot notation or
        bracket notation to add properties like this:
      </p>
      <pre>
        <code>
          {`
car.owner = 'John Doe'; // Add a new property 'owner'
console.log(car.owner); // Output: John Doe

car['registration'] = 'ABC123'; // Add a new property 'registration'
console.log(car.registration); // Output: ABC123
    `}
        </code>
      </pre>
      <p>
        In these examples, we added <code>owner</code> and{" "}
        <code>registration</code> properties to the <code>car</code> object.
      </p>

      <h2>Removing Properties</h2>
      <p>
        To remove a property from an object, use the <code>delete</code>{" "}
        operator. Here's how:
      </p>
      <pre>
        <code>
          {`
delete car.owner; // Remove the 'owner' property
console.log(car.owner); // Output: undefined

delete car['registration']; // Remove the 'registration' property
console.log(car.registration); // Output: undefined
    `}
        </code>
      </pre>
      <p>
        These examples show how to delete properties from the <code>car</code>{" "}
        object.
      </p>

      <h2>Checking for Property Existence</h2>
      <p>
        To check if a property exists in an object, use the <code>in</code>{" "}
        operator or the <code>hasOwnProperty()</code> method.
      </p>

      <h3>
        <code>in</code> Operator
      </h3>
      <pre>
        <code>
          {`
console.log('make' in car); // Output: true
console.log('owner' in car); // Output: false
    `}
        </code>
      </pre>
      <p>
        The <code>in</code> operator returns <code>true</code> if the property
        exists in the object, and <code>false</code> otherwise.
      </p>
      <AdUnit />
      <h3>
        <code>hasOwnProperty()</code> Method
      </h3>
      <pre>
        <code>
          {`
console.log(car.hasOwnProperty('model')); // Output: true
console.log(car.hasOwnProperty('owner')); // Output: false
    `}
        </code>
      </pre>
      <p>
        The <code>hasOwnProperty()</code> method checks if the object has a
        property with the specified name. It returns <code>true</code> if it
        does, and <code>false</code> otherwise.
      </p>

      <h2>Iterating Over Object Properties</h2>
      <p>
        To go through each property in an object, you can use a{" "}
        <code>for...in</code> loop. This loop allows you to access each property
        name and its value. Here’s an example:
      </p>
      <pre>
        <code>
          {`
for (let key in car) {
console.log(key + ': ' + car[key]); // Log each property name and value
}
    `}
        </code>
      </pre>
      <p>
        The loop iterates over each property in the <code>car</code> object and
        logs the property name (key) and its value.
      </p>

      <h2>Combining Objects</h2>
      <p>
        Sometimes you might want to combine properties from two objects. You can
        do this using the <code>Object.assign()</code> method or the spread
        operator <code>...</code>.
      </p>

      <h3>
        <code>Object.assign()</code> Method
      </h3>
      <p>
        The <code>Object.assign()</code> method copies properties from one or
        more source objects to a target object. Here’s an example:
      </p>
      <pre>
        <code>
          {`
const carDetails = {
make: 'Toyota',
model: 'Corolla'
};

const carSpecs = {
year: 2020,
color: 'red'
};

const combinedCar = Object.assign({}, carDetails, carSpecs);
console.log(combinedCar); 
// Output: { make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }
    `}
        </code>
      </pre>
      <p>
        In this example, <code>Object.assign()</code> combines the properties
        from <code>carDetails</code> and <code>carSpecs</code> into a new object{" "}
        <code>combinedCar</code>.
      </p>
      <AdUnit />
      <h3>Spread Operator</h3>
      <p>
        The spread operator <code>...</code> allows you to create a new object
        by copying properties from existing objects. Here’s how:
      </p>
      <pre>
        <code>
          {`
const carDetails = {
make: 'Toyota',
model: 'Corolla'
};

const carSpecs = {
year: 2020,
color: 'red'
};

const combinedCar = { ...carDetails, ...carSpecs };
console.log(combinedCar); 
// Output: { make: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }
    `}
        </code>
      </pre>
      <p>
        The spread operator copies all properties from <code>carDetails</code>{" "}
        and <code>carSpecs</code> into the new object <code>combinedCar</code>.
      </p>

      <h2>Conclusion</h2>
      <p>
        Objects in JavaScript are powerful tools for managing and organizing
        data. By understanding how to create, access, modify, and combine
        objects, you can handle complex data more effectively in your
        applications.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/arrays")}>back</button>
        <button onClick={() => (window.location.href = "/scope")}>Next</button>
      </div>
    </div>
  );
};

export default Objects;
