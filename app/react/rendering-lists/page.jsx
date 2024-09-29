import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Rendering Lists in React",
  description:
    "Learn how to efficiently render lists in React using the map function. This lesson covers key concepts like keys, array methods, and provides practical examples to enhance your understanding.",
  keywords: [
    "React",
    "Rendering Lists",
    "JavaScript",
    "React Tutorial",
    "Web Development",
  ],

  openGraph: {
    title: "Rendering Lists in React",
    description:
      "Discover how to render lists in React effectively. This tutorial provides clear explanations and examples for beginners to master list rendering.",
  },
};

const RenderingLists = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Rendering Lists in React</h1>
      <p>
        Hello, new React learners! Today, we're diving into an exciting topic:
        how to show lists of things on your webpage using React. This skill is
        super useful and you'll use it a lot when building websites or apps.
      </p>

      <h2>What is a List in React?</h2>
      <p>
        In the world of React (and programming in general), a list is a way to
        store multiple items together. It's very similar to lists you make in
        everyday life, like a shopping list or a to-do list.
      </p>
      <p>
        In React, we often use something called an "array" to create lists. An
        array is just a special way to store multiple items in one place in our
        code. Think of it like a container that can hold many things.
      </p>

      <h2>Step 1: Making a List</h2>
      <p>
        Let's start by making a simple list in our code. We'll create a list of
        fruits using an array. Here's how we do it:
      </p>
      <pre>
        <code>
          {`const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];`}
        </code>
      </pre>
      <p>Let's break this down:</p>
      <ul>
        <li>
          <strong>const fruits =</strong> means we're creating a new list called
          "fruits"
        </li>
        <li>
          The square brackets {` [ ] `} tell JavaScript we're making an array
          (our container for multiple items)
        </li>
        <li>Inside the brackets, we put our items: 'Apple', 'Banana', etc.</li>
        <li>
          Each item is wrapped in quotes (because they're text) and separated by
          commas
        </li>
      </ul>
      <p>
        Now we have a list called fruits that contains five different fruits!
      </p>

      <h2>Step 2: Showing the List</h2>
      <p>
        Now that we have our list, we want to show it on our webpage. In React,
        we use a special technique called "mapping" to do this. Mapping is like
        giving React instructions for each item in our list.
      </p>
      <p>Here's how we can show our fruit list:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<ul>
  {fruits.map((fruit) => (
    <li>{fruit}</li>
  ))}
</ul>`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This might look confusing at first, so let's break it down step by step:
      </p>
      <ul>
        <li>
          <strong>&lt;ul&gt;:</strong> This stands for "unordered list". It
          tells the browser we're making a list with bullet points.
        </li>
        <li>
          <strong>fruits.map(...):</strong> This is where the magic happens.
          We're telling React to go through each fruit in our list.
        </li>
        <li>
          <strong>{`(fruit) => (...):`}</strong> This part might look strange,
          but it's just a way to say "for each fruit in the list, do the
          following". Here, fruit is like a variable that will hold each fruit
          name as we go through the list.
        </li>
        <li>
          <strong>&lt;li&gt;{`{fruit}`}&lt;/li&gt;:</strong> This is what we
          want to do for each fruit. We're creating a list item (
          <code>&lt;li&gt;</code>) and putting the fruit name inside it. The
          curly braces {`{}`} are a special React syntax that says "put the
          value of fruit here".
        </li>
      </ul>
      <p>
        So, in simple terms, this code is saying: "For each fruit in our list,
        create a new list item with the fruit's name in it."
      </p>
      <AdUnit />
      <h2>Step 3: Putting It All Together</h2>
      <p>
        Now, let's see how this looks in a full React component. A component is
        like a building block for your webpage. Here's our FruitList component:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import React from 'react';

function FruitList() {
  // Here's our list of fruits
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Let's go through this step by step:</p>
      <ul>
        <li>
          <strong>import React from 'react';:</strong> This line brings in the
          React tools we need.
        </li>
        <li>
          <strong>{`function FruitList() { ... }:`}</strong> This creates our
          new component called FruitList.
        </li>
        <li>Inside the function, we first create our fruits list.</li>
        <li>
          The return ( ... ) part is where we define what our component will
          show.
        </li>
        <li>
          We have a <code>&lt;div&gt;</code> that contains everything (like a
          box for our content).
        </li>
        <li>
          Inside, we have an <code>&lt;h2&gt;</code> for the title "My Favorite
          Fruits".
        </li>
        <li>
          Then we have our <code>&lt;ul&gt;</code> with the mapping code we
          discussed earlier.
        </li>
        <li>
          <strong>export default FruitList;</strong> makes our component
          available for use in other parts of our app.
        </li>
      </ul>
      <AdUnit />
      <h2>What's Happening When This Runs?</h2>
      <p>When React runs this code, here's what happens:</p>
      <ul>
        <li>
          It sees our list of fruits: ['Apple', 'Banana', 'Orange', 'Mango',
          'Pineapple']
        </li>
        <li>It goes through each fruit in the list, one by one.</li>
        <li>
          For each fruit, it creates a new <code>&lt;li&gt;</code> element. So
          it creates:
        </li>
        <ul>
          <li>
            <SyntaxHighlighter language="jsx" style={docco}>
              &lt;li&gt;Apple&lt;/li&gt;
            </SyntaxHighlighter>
          </li>
          <li>
            <SyntaxHighlighter language="jsx" style={docco}>
              &lt;li&gt;Banana&lt;/li&gt;
            </SyntaxHighlighter>
          </li>
          <li>
            <SyntaxHighlighter language="jsx" style={docco}>
              &lt;li&gt;Orange&lt;/li&gt;
            </SyntaxHighlighter>
          </li>
          <li>
            <SyntaxHighlighter language="jsx" style={docco}>
              &lt;li&gt;Mango&lt;/li&gt;
            </SyntaxHighlighter>
          </li>
          <li>
            <SyntaxHighlighter language="jsx" style={docco}>
              &lt;li&gt;Pineapple&lt;/li&gt;
            </SyntaxHighlighter>
          </li>
        </ul>
        <li>
          It puts all these <code>&lt;li&gt;</code> elements inside the{" "}
          <code>&lt;ul&gt;</code>.
        </li>
        <li>
          Finally, it puts the <code>&lt;ul&gt;</code> (now filled with fruit{" "}
          <code>&lt;li&gt;</code> elements) and the title on the webpage.
        </li>
      </ul>
      <p>The result is a nicely formatted list of fruits on your webpage!</p>

      <h2>Try It Yourself!</h2>
      <p>Now it's your turn to experiment. Here are some things you can try:</p>
      <ul>
        <li>
          Change the fruits in the list. Add your own favorite fruits or remove
          some.
        </li>
        <li>
          Instead of fruits, make a completely different list. Try favorite
          movies, animals, or hobbies.
        </li>
        <li>
          Add more details to each item. For example, you could make each fruit
          an object with a name and a color:
        </li>
        <pre>
          <code>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`const fruits = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Orange', color: 'Orange' }
];`}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          Then, you'd need to update your map function to show both the name and
          color:
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="jsx" style={docco}>
              {`{fruits.map((fruit) => (
  <li key={fruit.name}>{fruit.name} - {fruit.color}</li>
))}`}
            </SyntaxHighlighter>
          </code>
        </pre>
      </ul>
      <p>
        Remember, the more you play around with these concepts, the better
        you'll understand them. Don't be afraid to experiment and make mistakes
        – that's how we learn!
      </p>
      <AdUnit />
      <h2>What's Next?</h2>
      <p>
        Great job! You've learned the basics of rendering lists in React. But
        there's one more important thing we need to add to our lists: "keys". In
        our next lesson, we'll talk about what keys are and why they're so
        important. Keys are special labels that help React keep track of each
        item in the list. They're crucial when your list might change, like when
        adding or removing items.
      </p>
      <p>
        For now, just remember that our current code works, but it's not quite
        complete. Adding keys will make our lists even better and more
        efficient.
      </p>
      <p>
        Keep practicing with different kinds of lists, and get ready to learn
        about keys in our next exciting lesson!
      </p>
      <p>Happy coding, and see you in the next lesson!</p>
      <Button whereToGo={"understanding-keys"} />
    </div>
  );
};

export default RenderingLists;
