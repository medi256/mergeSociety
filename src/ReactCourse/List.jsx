import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const List = () => {
  return (
    <div className="internet comments-container">
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
          {`It sees our list of fruits: ['Apple', 'Banana', 'Orange', 'Mango',
          'Pineapple']`}
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
      <div className="button-container">
        <button onClick={() => (window.location.href = "/differentTypes")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/UseKey")}>Next</button>
      </div>
    </div>
  );
};

export default List;

export const UnderstandKe = () => {
  return (
    <div className="internet comments-container">
      <AdUnit />
      <h1>Understanding Keys in React</h1>
      <p>
        Hello again, React learners! In our last lesson, we learned how to
        render lists in React. Now, we're going to learn about something very
        important when working with lists: Keys. Don't worry if it sounds
        complicated – we'll break it down step by step!
      </p>

      <h2>What are Keys?</h2>
      <p>
        In React, a key is like a special name tag for each item in a list. It
        helps React keep track of which items change, are added, or are removed.
        Think of it like this: if you have a group of friends, and you want to
        know who's who, you might give each friend a unique nickname. That's
        what keys do for items in a list!
      </p>

      <h2>Why Do We Need Keys?</h2>
      <p>Imagine you have a list of toys on your screen:</p>
      <ul>
        <li>Teddy Bear</li>
        <li>Toy Car</li>
        <li>Doll</li>
      </ul>
      <p>
        Now, let's say you want to add "Robot" to the beginning of the list.
        Without keys, React might get confused. It might think you changed
        "Teddy Bear" to "Robot", "Toy Car" to "Teddy Bear", and so on. This can
        cause problems and make your app slower.
      </p>
      <p>
        With keys, React knows exactly what changed. It can say, "Oh, a new toy
        with this specific key was added at the beginning. I don't need to touch
        the other toys."
      </p>

      <h2>How to Use Keys</h2>
      <p>
        Let's update our fruit list example from the previous lesson to include
        keys:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`function FruitList() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Pineapple' }
  ];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>Let's break down what's new:</p>
      <ul>
        <li>
          We've added an <code>id</code> to each fruit in our list. This{" "}
          <code>id</code> will be our key.
        </li>
        <li>
          In the map function, we've added <code>{`key={fruit.id}`}</code> to
          each <code>&lt;li&gt;</code> element.
        </li>
      </ul>
      <AdUnit />
      <h2>Rules for Keys</h2>
      <ul>
        <li>
          Keys must be unique among siblings. They don't need to be unique
          across the whole app, just within the same list.
        </li>
        <li>
          Keys should not change or be generated randomly. They should stay the
          same unless the item is deleted.
        </li>
        <li>
          Don't use array index as keys if your list order might change. It can
          cause problems!
        </li>
      </ul>

      <h2>A Common Mistake: Using Index as Key</h2>
      <p>You might be tempted to use the array index as a key, like this:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`{fruits.map((fruit, index) => (
  <li key={index}>{fruit.name}</li>
))}`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        This works fine if your list never changes order and items are never
        added or removed from the middle. But it can cause issues if your list
        is more dynamic. Here's why:
      </p>
      <p>
        {`Imagine you have a list: Apple (index 0), Banana (index 1), Orange
        (index 2).`}
      </p>
      <p>
        If you remove Banana, now Orange has index 1. React sees the same key
        (1) but different content, which can lead to unexpected behavior.
      </p>

      <h2>When You Don't Have a Unique ID</h2>
      <p>
        Sometimes, you might not have a unique ID for each item. In these cases,
        you can create a unique key by combining multiple properties. For
        example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`const fruits = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Orange', color: 'Orange' }
];

// In your map function:
{fruits.map((fruit) => (
  <li key={\`\${fruit.name}-\${fruit.color}\`}>{fruit.name}</li>
))}
`}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Here, we're creating a unique key by combining the name and color. This
        works because we know each fruit name and color combination will be
        unique in our list.
      </p>

      <h2>Try It Yourself!</h2>
      <ul>
        <li>
          Update your fruit list from the previous lesson to include keys.
        </li>
        <li>
          Create a new list (maybe favorite books or movies) and give each item
          a unique key.
        </li>
        <li>
          Try adding and removing items from your list. Notice how React handles
          the changes smoothly with keys!
        </li>
      </ul>
      <AdUnit />
      <h2>What Have We Learned?</h2>
      <ul>
        <li>Keys are special labels for list items in React.</li>
        <li>
          They help React identify which items have changed, been added, or been
          removed.
        </li>
        <li>Keys should be unique among siblings and shouldn't change.</li>
        <li>
          Using array index as keys can cause problems if your list order might
          change.
        </li>
        <li>
          If you don't have a unique ID, you can create one by combining
          properties.
        </li>
      </ul>

      <p>
        Remember, using keys correctly will make your React apps faster and
        prevent weird bugs when your lists change. It's a small thing that makes
        a big difference!
      </p>
      <p>
        In our next lesson, we'll look at more complex list operations and how
        keys help us manage them. Keep practicing, and happy coding!
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/list")}>back</button>
        <button onClick={() => (window.location.href = "/introHook")}>
          Next
        </button>
      </div>
    </div>
  );
};
