import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Arrays = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Arrays in JavaScript</h1>

      <h2>Understanding Arrays: An Analogy</h2>
      <p>
        Imagine you have a collection of favorite songs. Instead of having
        separate boxes for each song, you put them all in one big box. This big
        box helps you keep your songs organized in one place. In JavaScript, an
        array is like that big box. It's a special variable that can hold a
        collection of items (called elements) together. These items can be
        anything: numbers, strings, or even other arrays.
      </p>
      <p>
        Just like you can add, remove, or find a specific song in your box, you
        can perform similar operations on elements in an array. Each element in
        an array can be accessed by its position, known as its index.
      </p>

      <h2>Creating Arrays</h2>
      <p>
        You can create an array using square brackets <code>[]</code>. Each
        element in the array is separated by a comma. Here are some examples:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we created an array called <code>fruits</code> that
        contains three string elements: 'apple', 'banana', and 'cherry'. You can
        also create arrays with different types of elements:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const mixedArray = [1, 'hello', true, 3.14];
console.log(mixedArray); // Output: [1, 'hello', true, 3.14]
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we have an array called <code>mixedArray</code> that contains a
        number, a string, a boolean, and another number (a floating-point
        number). This shows that arrays can hold elements of different data
        types all together in a single list.
      </p>

      <h2>Accessing Elements</h2>
      <p>
        Each element in an array has a position, which is called its index. The
        index of an array starts from 0, meaning the first element is at index
        0, the second element is at index 1, and so on. Let's see how to access
        elements:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>fruits[0]</code> gives us the first element
        ('apple'), <code>fruits[1]</code> gives us the second element
        ('banana'), and <code>fruits[2]</code> gives us the third element
        ('cherry').
      </p>

      <h2>Understanding Indexes</h2>
      <p>
        An index is a number that represents the position of an element in an
        array. Remember, array indexes start at 0. So, the first element is at
        index 0, the second element is at index 1, and so on. Using these
        indexes, we can access or modify any element in the array. Let's see
        another example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors[0]); // Output: red
console.log(colors[2]); // Output: blue
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, <code>colors[0]</code> gives us 'red', and <code>colors[2]</code>{" "}
        gives us 'blue'. The square brackets <code>[]</code> are used to access
        the elements by their index.
      </p>

      <h2>Modifying Elements</h2>
      <p>
        You can change the value of an element in an array by accessing it
        through its index and assigning a new value to it:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';

console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we changed the value of the second element (index 1) from 'banana'
        to 'blueberry'.
      </p>
      <AdUnit />
      <h2>Array Length</h2>
      <p>
        The length of an array is the number of elements it contains. You can
        find the length of an array using the <code>length</code> property:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // Output: 3
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>fruits.length</code> returns 3 because the{" "}
        <code>fruits</code> array contains three elements.
      </p>

      <h2>Adding Elements</h2>
      <p>
        You can add new elements to an array using the <code>push()</code>{" "}
        method, which adds one or more elements to the end of the array:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Adding multiple elements
fruits.push('elderberry', 'fig');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>push()</code> to add 'date' to the end of
        the <code>fruits</code> array. The <code>push()</code> method can also
        add multiple elements at once, as shown with 'elderberry' and 'fig'.
      </p>

      <h2>Removing Elements</h2>
      <p>
        You can remove the last element from an array using the{" "}
        <code>pop()</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();

console.log(lastFruit); // Output: cherry
console.log(fruits); // Output: ['apple', 'banana']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>pop()</code> to remove the last element
        ('cherry') from the <code>fruits</code> array. The <code>pop()</code>{" "}
        method returns the removed element, which we stored in the{" "}
        <code>lastFruit</code> variable.
      </p>

      <h2>Adding Elements at the Beginning</h2>
      <p>
        You can add new elements to the beginning of an array using the{" "}
        <code>unshift()</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
fruits.unshift('mango');

console.log(fruits); // Output: ['mango', 'apple', 'banana', 'cherry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>unshift()</code> to add 'mango' to the
        beginning of the <code>fruits</code> array.
      </p>

      <h2>Removing Elements from the Beginning</h2>
      <p>
        You can remove the first element from an array using the{" "}
        <code>shift()</code> method:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const firstFruit = fruits.shift();

console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ['banana', 'cherry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>shift()</code> to remove the first
        element ('apple') from the <code>fruits</code> array. The{" "}
        <code>shift()</code> method returns the removed element, which we stored
        in the <code>firstFruit</code> variable.
      </p>
      <AdUnit />
      <h2>Iterating Over Arrays</h2>
      <p>
        You can loop through the elements of an array using a <code>for</code>{" "}
        loop or a <code>for...of</code> loop. Let's look at both ways:
      </p>

      <h3>
        Using a <code>for</code> Loop
      </h3>
      <p>
        A <code>for</code> loop is a way to repeat an action for each element in
        an array. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
// Output:
// apple
// banana
// cherry
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used a <code>for</code> loop to iterate over each
        element in the <code>fruits</code> array. The variable <code>i</code>{" "}
        represents the index of the current element. The loop runs as long as{" "}
        <code>i</code> is less than the length of the array.
      </p>

      <h3>
        Using a <code>for...of</code> Loop
      </h3>
      <p>
        A <code>for...of</code> loop is another way to iterate over the elements
        of an array. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
console.log(fruit);
}
// Output:
// apple
// banana
// cherry
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used a <code>for...of</code> loop to iterate over
        each element in the <code>fruits</code> array. The variable{" "}
        <code>fruit</code> represents the current element in each iteration of
        the loop.
      </p>

      <h2>Conclusion</h2>
      <p>
        Arrays are a powerful way to organize and work with collections of data
        in JavaScript. They allow you to store multiple values in a single
        variable, access elements using indexes, and perform various operations
        like adding, removing, and iterating over elements. Understanding arrays
        is essential for becoming proficient in JavaScript, and you'll often use
        them in your coding projects.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/StringMethod")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/arrayMethods")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Arrays;

export const ArrayMethods = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>Array Methods in JavaScript</h1>
      <h2>Connecting to Arrays</h2>
      <p>
        In the previous lesson, we learned about arrays and how they allow us to
        store multiple values in a single variable. We also explored basic
        operations like adding, removing, and accessing elements. Now, we'll
        dive deeper into array methods, which provide powerful ways to
        manipulate and interact with arrays. These methods make working with
        arrays more efficient and expressive.
      </p>

      <h2>
        Adding Elements: <code>push()</code> and <code>unshift()</code>
      </h2>
      <h3>
        <code>push()</code>
      </h3>
      <p>
        The <code>push()</code> method adds one or more elements to the end of
        an array and returns the new length of the array. We saw a brief example
        earlier, but let's explore it further:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const newLength = fruits.push('date', 'elderberry');

console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(newLength); // Output: 5
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we used <code>push()</code> to add 'date' and 'elderberry' to the
        end of the <code>fruits</code> array. The method returns the new length
        of the array, which is 5.
      </p>

      <h3>
        <code>unshift()</code>
      </h3>
      <p>
        The <code>unshift()</code> method adds one or more elements to the
        beginning of an array and returns the new length of the array:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const newLength = fruits.unshift('mango', 'kiwi');

console.log(fruits); // Output: ['mango', 'kiwi', 'apple', 'banana', 'cherry']
console.log(newLength); // Output: 5
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>unshift()</code> to add 'mango' and
        'kiwi' to the beginning of the <code>fruits</code> array. The method
        returns the new length of the array, which is 5.
      </p>

      <h2>
        Removing Elements: <code>pop()</code> and <code>shift()</code>
      </h2>
      <h3>
        <code>pop()</code>
      </h3>
      <p>
        The <code>pop()</code> method removes the last element from an array and
        returns that element:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();

console.log(lastFruit); // Output: cherry
console.log(fruits); // Output: ['apple', 'banana']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we used <code>pop()</code> to remove the last element ('cherry')
        from the <code>fruits</code> array. The method returns the removed
        element.
      </p>
      <AdUnit />

      <h3>
        <code>shift()</code>
      </h3>
      <p>
        The <code>shift()</code> method removes the first element from an array
        and returns that element:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const firstFruit = fruits.shift();

console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ['banana', 'cherry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>shift()</code> to remove the first
        element ('apple') from the <code>fruits</code> array. The method returns
        the removed element.
      </p>

      <h2>
        Extracting a Portion: <code>slice()</code>
      </h2>
      <p>
        The <code>slice()</code> method returns a shallow copy of a portion of
        an array into a new array object. It does not modify the original array.
        You can specify the start and end indexes (end not included) to define
        the portion to extract:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const citrus = fruits.slice(1, 4);

console.log(citrus); // Output: ['banana', 'cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>slice()</code> to create a new array,{" "}
        <code>citrus</code>, containing elements from index 1 to 3 (end index 4
        is not included). The original <code>fruits</code> array remains
        unchanged.
      </p>

      <h2>
        Modifying Content: <code>splice()</code>
      </h2>
      <p>
        The <code>splice()</code> method changes the contents of an array by
        removing, replacing, or adding elements. It modifies the original array
        and returns an array containing the deleted elements (if any). The first
        parameter specifies the start index, the second parameter specifies the
        number of elements to remove, and the rest of the parameters are
        elements to add:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const removedFruits = fruits.splice(2, 2, 'fig', 'grape');

console.log(removedFruits); // Output: ['cherry', 'date']
console.log(fruits); // Output: ['apple', 'banana', 'fig', 'grape', 'elderberry']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we used <code>splice()</code> to remove two elements from index 2
        and add 'fig' and 'grape' at the same position. The method returns the
        removed elements, and the original array is modified.
      </p>
      <AdUnit />

      <h2>
        Combining Arrays: <code>concat()</code>
      </h2>
      <p>
        The <code>concat()</code> method is used to merge two or more arrays. It
        returns a new array and does not change the existing arrays:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];

const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'date']

console.log(fruits); // Output: ['apple', 'banana']
console.log(moreFruits); // Output: ['cherry', 'date']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>concat()</code> to merge{" "}
        <code>fruits</code> and <code>moreFruits</code> into a new array,{" "}
        <code>allFruits</code>. The original arrays remain unchanged.
      </p>

      <h2>
        Joining Elements: <code>join()</code>
      </h2>
      <p>
        The <code>join()</code> method joins all elements of an array into a
        string. You can specify a separator, and if omitted, the elements are
        separated with a comma:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'apple, banana, cherry'
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we used <code>join()</code> to create a string with all elements
        of the <code>fruits</code> array, separated by ', '.
      </p>

      <h2>
        Finding Elements: <code>indexOf()</code> and <code>includes()</code>
      </h2>
      <h3>
        <code>indexOf()</code>
      </h3>
      <p>
        The <code>indexOf()</code> method returns the first index at which a
        given element can be found in the array, or -1 if the element is not
        found:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];

const index = fruits.indexOf('banana');
console.log(index); // Output: 1

const notFound = fruits.indexOf('date');
console.log(notFound); // Output: -1
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, <code>indexOf()</code> returns the index of 'banana',
        which is 1. It returns -1 for 'date' since it is not in the array.
      </p>

      <h3>
        <code>includes()</code>
      </h3>
      <p>
        The <code>includes()</code> method determines whether an array contains
        a specified element, returning <code>true</code> or <code>false</code>:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

const hasDate = fruits.includes('date');
console.log(hasDate); // Output: false
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, <code>includes()</code> returns <code>true</code> for 'banana' and{" "}
        <code>false</code> for 'date'.
      </p>
      <AdUnit />
      <h2>
        Reversing Elements: <code>reverse()</code>
      </h2>
      <p>
        The <code>reverse()</code> method reverses the order of the elements in
        an array. It modifies the original array:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const fruits = ['apple', 'banana', 'cherry'];
fruits.reverse();
console.log(fruits); // Output: ['cherry', 'banana', 'apple']
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this example, we used <code>reverse()</code> to reverse the order of
        elements in the <code>fruits</code> array.
      </p>

      <h2>Conclusion</h2>
      <p>
        Array methods in JavaScript provide powerful ways to manipulate and
        interact with arrays. They allow you to add, remove, extract, modify,
        combine, and find elements with ease. Understanding these methods will
        help you work more efficiently with arrays and perform complex
        operations with simple and readable code.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/arrays")}>back</button>
        <button onClick={() => (window.location.href = "/objects")}>
          Next
        </button>
      </div>
    </div>
  );
};
