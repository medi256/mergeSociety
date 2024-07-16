import AdUnit from "../AdUnit";

const Arrays = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1> JavaScript Array</h1>
      <p>
        In programming, an array is a data structure that contains a collection
        of elements. Arrays are very useful because you can store, access, and
        manipulate multiple elements in a single array.
      </p>
      <p>
        {`You'll learn how to work with arrays in JavaScript. We'll`} cover the
        specific rules you need to follow when creating an array, as well as how
        to use array methods to manipulate and transform your array as desired.{" "}
      </p>
      <h2> How Arrays Work in JavaScript</h2>
      <p>
        In JavaScript, an array is implemented as an object that can have a
        group of items, elements, or values as an ordered collection. This means
        you can access an{" "}
        {`array's element using its position in the collection.
        You'll see why this is important in the next section.`}
      </p>
      <p>
        An array can hold elements of different data types, and the size of the
        array is not fixed. This means that you can add as many elements to an
        array as you want.
      </p>
      <h2>How to Create an Array in JavaScript</h2>
      <p>There are two ways you can create an array in JavaScript:</p>
      <ol>
        <li>
          {" "}
          Using the square brackets <code>{`[]`} </code>
        </li>
        <li>
          {" "}
          Using the <code>{`Array()`} </code> constructor
        </li>
      </ol>
      <p>
        The square brackets <code>[]</code> is a literal notation used to create
        an array. The array elements are defined inside the brackets, with each
        element separated using a comma ,.
      </p>
      <p>
        The following example shows how to create an array named <b>myArray</b>{" "}
        that has three elements of different types: a Number, a String, and a
        Boolean.
      </p>
      <pre>
        <code>
          {`
//JavaScript

let myArray = [29, 'Massa', true];

          `}
        </code>
      </pre>
      <p>And {`here's`} how to create an array with 3 number elements:</p>
      <pre>
        <code>
          {`
  //javaScript


  let myNumbers = [5, 10, 15];
          `}
        </code>
      </pre>
      <p>
        {" "}
        You can specify as many elements as you want inside the square brackets.
      </p>
      <p>
        Another way to create an array is to use the <code>Array()</code>{" "}
        constructor, which works like the square brackets:
      </p>
      <pre>
        <code>
          {`
//javaScript


let myArray = Array(29, 'Massa', true);

// or

let myNumbers = new Array(5, 10, 15);
          `}
        </code>
      </pre>
      <p>
        Note that the constructor function can be called with or without the new
        operator. Both create an array object just fine.
      </p>
      <p>
        In most code examples and codebases,{" "}
        {`you'll most likely see developers
        use the square brackets to create an array instead of using the
        constructor. This is because it's`}{" "}
        faster to type <code>[]</code> instead of <code>Array()</code>.
      </p>
      <h2>How to Access an {`Array's`} Elements</h2>
      <p>
        As {`I've said before`}, an array is an ordered collection, so you can
        access an element from its position (also known as index number) in the
        array.
      </p>
      <p>
        To access an {`array's`} element, you need to specify the array name
        followed by square brackets. Inside the square brackets, specify the
        index of the element you want to access.
      </p>
      <p>
        For example, {`here's`} how you access the first element of{" "}
        <b>myArray</b>:
      </p>
      <pre>
        <code>
          {`
//javaScript


let myArray = [29, 'Massa', true];

console.log(myArray[0]); // 29
console.log(myArray[1]); // Massa 
console.log(myArray[2]); // true
          `}
        </code>
      </pre>
      <ul>
        <li>
          <b>Arrays start counting from 0</b>: This means the first element in
          an array is at position 0, the second element is at position 1, and so
          on. {`It's`} different from how we normally count things in everyday
          life (starting from 1) and can be a bit surprising at first.
        </li>
        <li>
          <b>Indexes are used to access elements</b>: An index is like a key
          that you use to point to a specific element in the array. Since
          indexing starts at 0, you use 0 to access the first element, 1 to
          access the second element, and so on.
        </li>
        <li>
          {" "}
          <b>Try it out yourself</b>: The sentence suggests creating an array
          and then using console.log (assuming JavaScript) to print the values
          of the elements at different indexes. This is a great way to solidify
          your understanding.
        </li>
      </ul>
      <h3>{`Here's`} another example </h3>
      <pre>
        <code>
          {`
//JavaScript


fruits = ["apple", "banana", "cherry"];

// Accessing elements by their index (starting from 0)
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "cherry"
          `}
        </code>
      </pre>
      <p>
        If you try to access an index number that {`haven't`} been assigned any
        value yet, JavaScript will return undefined as shown below:
      </p>
      <pre>
        <code>
          {`
//javaScript


let myArray = [29, 'Massa', true];

console.log(myArray[3]); // undefined
console.log(myArray[4]); // undefined
console.log(myArray[100]); // undefined
          `}
        </code>
      </pre>
      <p>
        You can also replace an element on a certain index number with a new
        element by using the assignment <code>=</code> operator.
      </p>
      <p>
        The following example shows how to replace the third element (boolean)
        with a string:
      </p>
      <pre>
        <code>
          {`
//javaScript


let myArray = [29, 'Massa', true];

// Replace the third element
myArray[2] = 'Medi';
          
console.log(myArray); // [ 29, 'Massa', 'Medi' ]
          `}
        </code>
      </pre>
      <p>
        In the example above, you can see that the true boolean value is
        replaced with the string {`'Medi'. Next, let's`} take a look at the
        <code>length</code> property.
      </p>
      <AdUnit />
      <h2>
        The Array <code>length</code> Property
      </h2>
      <p>
        The <code>length</code> property shows how many elements an array has.
        You can access this property using the dot <code>.</code> notation as
        shown below:
      </p>
      <pre>
        <code>
          {`
//javaScript

let myArray = [29, 'Massa', true];

console.log(myArray.length); // 3
          
let animals = ['Dog', 'Cat'];
          
console.log(animals.length); // 2
          
          `}
        </code>
      </pre>
      <p>
        The <code>length</code> property is updated each time you add or remove
        elements from an array.
      </p>
      <h2>How to Add Elements to an Array</h2>
      <p>
        To add one or more elements to an array, you can use the array{" "}
        <code>push()</code>
        and <code>unshift()</code> methods.
      </p>
      <p>
        The <code>push()</code> method adds new elements to the end of the
        array, while the <code>unshift()</code> method inserts new elements at
        the start of the array:
      </p>
      <pre>
        <code>
          {`
//javaScript


let animals = ['Dog', 'Cat'];

animals.push('Horse', 'Fish');
          
console.log(animals);
// [ 'Dog', 'Cat', 'Horse', 'Fish' ]
          
animals.unshift('Bird');
          
console.log(animals);
// [ 'Bird', 'Dog', 'Cat', 'Horse', 'Fish' ]
          `}
        </code>
      </pre>
      <p>
        Here, notice that you can use a comma to separate the elements you want
        to add to the array.
      </p>
      <p>Next, {`let's`} see how you can remove elements from an array.</p>
      <h2>How to Remove an Element from an Array</h2>
      <p>
        To remove an element from an array, you can use the <code>shift()</code>{" "}
        and <code>pop()</code>
        methods, depending on the position of the element you want to remove.
      </p>
      <p>
        Use the <code>shift()</code> method to remove the first element, and use{" "}
        <code>pop()</code> to remove the last element in the array:
      </p>
      <pre>
        <code>
          {`
//javaScript


let animals = ['Dog', 'Cat', 'Horse', 'Fish'];

animals.shift();
          
console.log(animals);
// [ 'Cat', 'Horse', 'Fish' ]
          
animals.pop();
          
console.log(animals);
// [ 'Cat', 'Horse' ]
          `}
        </code>
      </pre>
      <p>
        Both <code>shift()</code> and <code>pop()</code> can only remove one
        element at a time. If you want to remove an element in the middle of an
        array, you need to use the <code>splice()</code> method.
      </p>
      <h2>
        How to Use <code>splice()</code> to Remove or Add Element(s)
      </h2>
      <p>
        The array <code>splice()</code> method is used to remove or add elements
        at specific positions. You use this method when{" "}
        <code>push, pop, shift,</code> and <code>unshift</code> {`can't`} get
        the job done.
      </p>
      <p>
        To remove elements using the <code>splice()</code> method, you need to
        specify two arguments: the index number to start array manipulation, and
        the number of elements to delete.
      </p>
      <p>
        For example, suppose you want to delete two elements at index 1 and 2 in
        the <b>animals</b> array. {`Here's`} how you do it:
      </p>
      <pre>
        <code>
          {`
//javaScript
          
let animals = ['Dog', 'Cat', 'Horse', 'Fish'];

animals.splice(1, 2);

console.log(animals);
// [ 'Dog', 'Fish' ]
          `}
        </code>
      </pre>
      <p>
        The <code>splice(1, 2)</code> means start array manipulation at index 1,
        then delete 2 elements from there.
      </p>
      <p>
        To add elements using <code>splice()</code>, you need to specify the
        elements to add after the second argument.
      </p>
      <p>
        For example, here I add a string value {`'Bird' and 'Squid'`} at index
        1:
      </p>
      <pre>
        <code>
          {`
//javaScript          


let animals = ['Dog', 'Cat'];

animals.splice(1, 0, 'Bird', 'Squid');
          
console.log(animals);
// [ 'Dog', 'Bird', 'Squid', 'Cat' ]
          `}
        </code>
      </pre>
      <p>
        If you {`don't`} want to delete any elements, you can pass <b>0</b> as
        the second argument to the <code>splice()</code> method. You then
        specify the elements you want to add.
      </p>
      <p>
        The <code>splice()</code> method can be confusing the first time you see
        it, but
        {`don't worry! You'll`} memorize how it works with more practice.
      </p>
      <h2> How to Check if a Variable is an Array</h2>
      <p>
        To check if a variable is an array, you can use the{" "}
        <code>Array.isArray()</code>
        method which tests whether the argument given to the method is an array
        or not.
      </p>
      <p>
        This method returns <code>true</code> when you pass an array to it, and
        <code>false</code> for anything else:
      </p>
      <pre>
        <code>
          {`
//javaScript


let myArray = [1, 2, 3];
let notAnArray = 'Hello!';
          
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(notAnArray)); // false
          `}
        </code>
      </pre>
      <p>
        Note that you need to specify the <b>Array</b> class when calling the
        <code>isArray()</code> method.
      </p>
      <p>
        This is because <code>isArray()</code> is a static method, so you can
        only call it directly from the class that defines the method.
      </p>
      <h1>How to Iterate or Loop Over an Array</h1>
      <p>
        There are many ways you can iterate over an array in JavaScript,
        depending on the method you use:
      </p>
      <ol>
        <li> Using a for loop</li>
        <li> Using a while loop</li>
        <li>Using the for...of loop</li>
      </ol>
      <h3>{`Let's`} learn how to use these methods with examples.</h3>
      <h2>1. How to use a for loop</h2>
      <p>
        Imagine you have a collection of things in an array, like a box filled
        with different colored balls. A for loop helps you go through each ball
        one by one. To make sure you see every ball, we use the{" "}
        {`array's length,
        which tells you how many balls are there. The loop keeps going until
        it's checked out all the balls in the array!`}
      </p>
      <p>
        In the following example, a for loop will continue to run as long as the
        variable <b>i</b> is less than the {`array's`} length:
      </p>
      <pre>
        <code>
          {`
//JavaScript


animals = ['dog', 'bird', 'cat', 'horse'];

// This loop visits each animal in the barn, printing their names:
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
   // Output: dog
  // Output: bird
  // Output: cat
  // Output: horse
}
          `}
        </code>
      </pre>
      <AdUnit />
      <h2>2. How to use a while loop</h2>
      <p>
        Another way to iterate over an array is to use a <code>while</code>{" "}
        loop. You need to use a variable and the {`array's`} length to control
        when the iteration stops, like the <code>for</code> loop previously:
      </p>
      <pre>
        <code>
          {`
//JavaScript


let animals = ['dog', 'bird', 'cat', 'horse'];

let i = 0; // Starting counter at 0

while (i < animals.length) { // Loop continues as long as i is less than the number of animals
  console.log(animals[i]); // Output: dog (i = 0, accessing animals[0])
  i++; // Increment counter to move to the next animal
}

// Output: bird (i = 1, accessing animals[1])
// Output: cat (i = 2, accessing animals[2])
// Output: horse (i = 3, accessing animals[3])
          `}
        </code>
      </pre>
      <p>
        Inside the while loop, you need to increment the <b>i</b> variable by
        one to avoid an infinite loop.
      </p>
      <h3>4. How to use a for...of loop</h3>
      <p>
        The <code>for...of</code> loop can be used to iterate over an array. It
        returns the {`array's`} element in each iteration:
      </p>
      <pre>
        <code>
          {`
//JavaScript


let animals = ['dog', 'bird', 'cat', 'horse'];

for (element of animals) { // Loop through each element (animal) of the animals array
  console.log(element);  // Output: dog
                          // Output: bird
                          // Output: cat
                          // Output: horse
}
          `}
        </code>
      </pre>
      <p>
        {" "}
        The <code>for...of</code> loop returns the element directly.
      </p>
      <h2> How to Merge Two Arrays into One</h2>
      <p>
        JavaScript provides the <code>concat()</code> method that you can use to
        merge two or more arrays into one. The following example shows how to
        merge the <b>cats</b> and <b>birds</b> arrays as one array named
        <b>animals</b>:
      </p>
      <pre>
        <code>
          {`
//JavaScript


let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];

let animals = cats.concat(birds);

console.log(animals); // [ 'tiger', 'cat', 'owl', 'eagle' ]
console.log(cats); // [ 'tiger', 'cat' ]
console.log(birds); // [ 'owl', 'eagle' ]
          
          `}
        </code>
      </pre>
      <p>
        At first glance, the syntax of the <code>concat()</code> method seems to
        merge the birds array into the cats array. But as you can see from the
        console logs, the cats array is actually unchanged.
      </p>
      <p>
        To make the code more intuitive, you can call the <code>concat()</code>{" "}
        method from an empty array instead of from the <b>cats</b> array:
      </p>
      <pre>
        <code>
          {`
//javaScript


let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];

let animals = [].concat(cats, birds);
          `}
        </code>
      </pre>
      <p>
        Although this syntax is more intuitive, you will most likely encounter
        the <b>cats.concat(birds)</b> syntax in many JavaScript source code.
        Which syntax to use? {`That's`} for you and your team to decide.
      </p>
      <p>
        The <code>concat()</code> method allows you to merge as many arrays as
        you need. The following example merges three arrays as one:
      </p>
      <pre>
        <code>
          {`
//javaScript


let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];
let dogs = ['wolf', 'dog'];

let animals = [].concat(cats, birds, dogs);
console.log(animals); // [ 'tiger', 'cat', 'owl', 'eagle', 'wolf', 'dog' ]
          `}
        </code>
      </pre>
      <p>
        {`You've`} now learned how to merge arrays using the{" "}
        <code>concat()</code> method.
        {`Let's`} look at how you can merge arrays with the spread operator
        next.
      </p>
      <h2>How to merge arrays with the spread operator</h2>
      <p>
        {" "}
        The spread operator <code>...</code> can be used to expand elements of
        the arrays you want to merge. You need to put the expanded elements in
        one new array as follows:
      </p>
      <pre>
        <code>
          {`
//javaScript


let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];

let animals = [...cats, ...birds];
console.log(animals); // [ 'tiger', 'cat', 'owl', 'eagle' ]
          `}
        </code>
      </pre>
      <p>
        Here, you can see that the elements from cats and birds arrays are
        expanded into another array, and that array is assigned as the value of
        the animals variable.
      </p>
      <p>
        Both the <code>concat()</code> method and the spread operator can be
        used to merge multiple arrays just fine.
      </p>
      <h2>1. How to find whether an element exists in an array</h2>
      <p>
        {" "}
        If you only want to know if a certain element exists in an array, you
        can use the <code>includes()</code> method. The following example
        searches for the string value {`'e'`} in an array of strings:
      </p>
      <pre>
        <code>
          {`
//javaScript


let letters = ['a', 'b', 'c', 'd'];

console.log(letters.include('e')); // false
          `}
        </code>
      </pre>
      <p>
        The <code>includes()</code> method returns <code>true</code> when the
        element is found, or <code>false</code> when it {`isn't`}.
      </p>
      <h2> 2. How to find the index position of an element in an array</h2>
      <p>
        Other times, you might want to get the index position of the element.
        You need to use the <code>indexOf()</code> method in that case:
      </p>
      <pre>
        <code>
          {`
//javaScript


let letters = ['a', 'b', 'c', 'd'];

console.log(letters.indexOf('c')); // 2
          `}
        </code>
      </pre>
      <p>
        Here, the <code>indexOf()</code> method is called on the letters array
        to search for the index of the value {`'c'`}. The method returns{" "}
        <b>-1</b> when the element {`isn't`} found, but in this case it returns
        <b>2</b> as the letter c is at the 2nd index (remember, JS uses
        zero-based indexing, meaning the count starts from 0, not 1).
      </p>
      <h2> How to Sort an Array</h2>
      <p>
        To sort an array, you can use the provided <code>sort()</code> method,
        which sorts an array in ascending order by default:
      </p>
      <pre>
        <code>
          {`
//javaScript


let numbers = [5, 2, 4, 1];

numbers.sort();
          
console.log(numbers); // [ 1, 2, 4, 5 ]
          `}
        </code>
      </pre>
      <p>
        If you want to sort an array in descending order, you can call the
        <code>reverse()</code> method after the <code>sort()</code> method as
        shown below:
      </p>
      <pre>
        <code>
          {`
//javaScript          


let numbers = [5, 2, 4, 1];

numbers.sort().reverse();

console.log(numbers); // [ 5, 4, 2, 1 ]
          `}
        </code>
      </pre>
      <p>
        The <code>reverse()</code> method will reverse the array, so the first
        array element becomes the last, the last becomes the first, and so on.
      </p>
      <p>
        I understand it might be overwhelming to grasp everything in a day. But
        trust me, learning these methods will equip you to perform various tasks
        on arrays. Consistent practice is key! The more you encounter these
        concepts and practice them, the stronger your understanding will become.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/StringMethod")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/objects")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Arrays;
