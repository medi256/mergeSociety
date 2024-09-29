import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Understanding Keys in React",
  description:
    "Explore the importance of keys in React for rendering lists efficiently. This lesson explains how keys help React identify changes in lists and provides practical examples for beginners.",
  keywords: [
    "React",
    "Keys in React",
    "Rendering Lists",
    "JavaScript",
    "React Tutorial",
  ],

  openGraph: {
    title: "Understanding Keys in React",
    description:
      "Learn about the significance of keys in React. This tutorial provides insights on how to use keys effectively when rendering lists.",
  },
};

const KeysUnderstanding = () => {
  return (
    <div className="lesson-container">
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

      <Button whereToGo={"hooks-intro"} />
    </div>
  );
};

export default KeysUnderstanding;
