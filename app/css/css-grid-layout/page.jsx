import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";

export const metadata = {
  title: "CSS Grid Tutorial",
  description:
    "Learn how to use CSS Grid to create responsive and flexible layouts. This tutorial covers the features, benefits, and properties of CSS Grid, making it easier to position elements on your web pages.",
  keywords:
    "CSS Grid, web development, responsive design, CSS layout, grid properties, two-dimensional layout",

  alternates: {
    canonical: "https://www.mergesociety.com/css/css-grid-layout",
  },

  openGraph: {
    title: "CSS Grid Tutorial",
    description:
      "Master CSS Grid for responsive layouts. Discover features, benefits, and practical examples.",
  },
};

const CSSGrid = () => {
  return (
    <div className="lesson-container">
      <h1>CSS Grid</h1>
      <p>
        Have you ever had a problem positioning items on your web browser?
        Perhaps every time you try to think of a solution, you become tired and
        give up.
      </p>
      <p>
        If so, stay tuned as I reveal a new method for resolving these kinds of
        problems with minimal or no stress.
      </p>

      <p>
        Welcome everyone. In this tutorial, we'll go through how to use the CSS
        grid layout.
      </p>

      <p>
        First we'll learn what CSS Grid is and what it's meant to do. Then we'll
        go through the features of CSS grid, reasons why we should study it, and
        the benefits it brings to our projects. Finally, we'll discuss when it's
        best to use it.
      </p>

      <h2>What is CSS Grid?</h2>
      <p>So what is CSS Grid?</p>

      <p>
        CSS Grid is a two-dimensional layout that you can use for creating
        responsive items on the web. The Grid items are arranged in columns, and
        you can easily position rows without having to mess around with the HTML
        code.
      </p>

      <h4>Here is a concise definition of the CSS Grid layout:</h4>
      <p>
        <i>
          CSS Grid is a powerful tool that allows for two-dimensional layouts
          for columns and rows to be created on the web.
        </i>
      </p>

      <h2>Features of CSS Grid Layout</h2>

      <h3>Flexible Track Sizes</h3>
      <p>
        You can use the fr unit (Fraction Unit) to assign any specified pixel
        value to the grid. This will make your grid organized and responsive.
      </p>

      <h4>Item Placement</h4>
      <p>
        CSS grid has made it much easier to position items in the container in
        any area you want them to be without having to mess with the HTML
        markup.
      </p>

      <h3>Alignment Controls</h3>
      <p>
        The alignment of an element/item in a container is easier than ever
        before with CSS Grid. In the container, you can now arrange
        elements/items horizontally and vertically as you wish.
      </p>

      <h3>Benefits of CSS Grid</h3>
      <p>
        CSS Grid is very flexible and responsive. It makes it easy to create
        two-dimensional layouts. CSS Grid also easy to use and is supported by
        most web browsers.
      </p>

      <p>
        The CSS grid makes your markup cleaner (in your HTML code) and gives you
        a lot more flexibility. This is partly because you don’t have to change
        the markup (HTML code) to change the position of an item using the CSS
        grid.
      </p>

      <p>
        All in all, CSS Grid Layout helps us build more complex layouts using
        both columns and rows.
      </p>

      <h2>When Should You Use CSS Grid</h2>
      <p>
        Although you can use CSS Grid in practically any aspect of web
        development, there are certain situations when {`it's`} ideal.
      </p>

      <p>
        For example, when we have a complex design layout to implement, CSS Grid
        is better than the CSS float property. This is because Grid is a
        two-dimensional layout (with columns and rows), whereas the CSS float
        property is a one-dimensional layout (with columns or rows).
      </p>

      <p>
        Grid is also a good choice when we need space or gap between elements.
        By using the CSS grid gap property, the spacing of two elements is much
        easier than using the CSS margin and padding properties which might end
        up complicating things.
      </p>

      <h2>CSS Grid Properties</h2>

      <h2>Grid container property</h2>
      <p>
        This is a CSS grid property that houses the grid items/elements. We
        implement the CSS grid container property by setting the container to a
        display property of grid or in-line grid.
      </p>

      <h4>For Example:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
display: grid;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h4>or</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
display: inline-grid;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>Grid-template-column property</h2>
      <p>
        This is a property used to set each column’s width. It can also define
        how many columns you want to set in your project.
      </p>

      <p>
        You can implement the CSS grid column property using
        grid-template-column.
      </p>

      <h4>For Example:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
grid-template-columns: 100px auto 100px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The code above shows that we have three columns. The width of columns
        one (the first column) and three (the third column) are set to 100px.
        The width of column two (the middle column) is set to auto.
      </p>

      <p>
        This means that as the size of your screen increases, columns one and
        three take 100px of the screen width, while column two takes the
        remaining width of the screen (which is auto).
      </p>

      <h2>Grid-template-row property</h2>
      <p>
        You use the CSS row property to set the height of each column. You can
        also use it to define how many rows you want to set in your project.
      </p>

      <p>
        You can implement the CSS grid row property using grid-template-row,
        like this:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
grid-template-rows: 50px 50px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The code above shows that we have a total of two rows and those two rows
        are 50px high.
      </p>

      <p>
        Note that we can also assign the column and row property to our HTML
        code at once by simply using grid-template. Grid-template is another way
        of representing the grid-template column and grid-template-row.
      </p>

      <h4>For example:</h4>
      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
grid-template: 50px 50px / 100px auto 100px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        The code above will give you the same result as grid-template-columns
        and grid-template-rows.
      </p>

      <p>
        To use the grid-template property, you will have to assign the value to
        the row first before assigning the column's value, just like the code
        above. The 50px 50px is for the row while 100px auto 100px is for the
        column.
      </p>

      <p>A way to remember this is by thinking of the letter L:</p>

      <Image
        width={233}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        height={212}
        src="https://www.freecodecamp.org/news/content/images/2022/05/image-90.png"
        alt="demo"
      />
      <p>Try this out and see it for yourself.</p>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/CSS-GRID-2.png"
        alt="demo"
      />
      <p>A grid with a column of 100px auto 100px and row of 50px 50px</p>

      <h2>Column-gap property</h2>
      <p>
        As the name states, it is a grid property that assigns a space between
        two or more columns in a container. You can do this by using the
        column-gap property and giving it a value. For example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
column-gap: 20px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        From the code above, you can see that a gap of 20px was assigned to the
        column.
      </p>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/COLUMN-GAP-1.png"
        alt="demo"
      />
      <p>20px column-gap</p>

      <h2>Row-gap property</h2>
      <p>
        Just like column-gap, row-gap is a CSS property that assigns a space
        between two or more rows in a container. For example:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
row-gap: 50px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ROW-GAP-1.png"
        alt="demo"
      />
      <p>row-gap: 50px;</p>

      <p>
        Note that we can also assign a gap to both the columns and rows of a
        container by using the gap property. For this to work, we only assign
        one value to both the columns and the rows of the container, just like
        we did in the code above.
      </p>

      <p>Here's an example:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
gap: 20px;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/GAP-1.png"
        alt="demo"
      />
      <p>gap: 20px</p>

      <p>
        From the diagram above, we can see that a gap of 20px was set to both
        the columns and rows of the container making them equally spaced.
      </p>

      <h2>Justify-content property</h2>
      <p>
        This is a grid property that you use in positioning items (columns and
        rows) horizontally in a container. It displays how the web browser
        positions the spaces around the items (columns and rows).
      </p>

      <p>The justify-content property has six possible values:</p>

      <ul>
        <li>Start</li>
        <li>end</li>
        <li>center</li>
        <li>space-around</li>
        <li>space-between</li>
        <li>space-evenly</li>
      </ul>

      <h3>Start</h3>
      <p>
        This positions the items at the left side of the browser and can be
        executed with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: start;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-START-1.png"
        alt="demo"
      />

      <p>justify-content: start;</p>

      <h3>End</h3>
      <p>
        This positions the items at the right side of the browser and can be
        executed with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: end;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-END-1.png"
        alt="demo"
      />
      <p>justify-content: end;</p>

      <h3>Center</h3>
      <p>
        This positions the items at the center of the browser and can be
        executed with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: center;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-CENTER-1.png"
        alt="demo"
      />
      <p>justify-content: center;</p>

      <h2>Space-around</h2>
      <p>
        This property distributes the items in the container evenly, where each
        item in the container has an equal amount of space from the next
        container.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: space-around;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-SPACE-AROUND-1.png"
        alt="demo"
      />
      <p>justify-content: space-around</p>

      <h2>Space-between</h2>
      <p>
        Just like the space-around property, space-between distributes the items
        in the container evenly, where each item in the container has an equal
        amount of space from the next one in the container. It takes up the
        entire width of the container.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: space-between;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-SPACE-BETWEEN-1.png"
        alt="demo"
      />
      <p>justify-content: space-between</p>

      <h2>Space-evenly</h2>
      <p>
        Just as the name states, this property distributes the items in the
        container evenly, where each item in the container has an equal amount
        of space from the next one in the container.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
justify-content: space-evenly;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/JUSTIFY-SPACE-EVENLY-1.png"
        alt="demo"
      />

      <p>justify-content: space-evenly;</p>

      <p>
        Note that all the justify-content properties position their
        items/elements horizontally. Try doing it yourself to understand it
        more.
      </p>

      <h2>Align-content property</h2>
      <p>
        Align-content is the opposite of justify-content. You use the
        align-content property in positioning items vertically in a container.
      </p>

      <p>
        Just like justify-content, the align-content property has six possible
        values:
      </p>

      <ul>
        <li>Start</li>
        <li>end</li>
        <li>center</li>
        <li>space-around</li>
        <li>space-between</li>
        <li>space-evenly</li>
      </ul>

      <h2>Start</h2>
      <p>
        This positions the items at the top of the browser and can be executed
        with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: start;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-START-1.png"
        alt="demo"
      />

      <p>align-content: start;</p>

      <h2>End</h2>
      <p>
        This positions the items at the bottom of the browser and can be
        executed with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: end;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-END-1.png"
        alt="demo"
      />
      <p>align-content: end</p>

      <h2>Center</h2>
      <p>
        This positions the items at the center of the browser and can be
        executed with the following code:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: center;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-CENTER-1.png"
        alt="demo"
      />
      <p>align-content: center;</p>

      <h2>Space-around</h2>
      <p>
        This property distributes the items along the side of the container
        evenly, where each item in the container has an equal amount of space
        from the next one vertically.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: space-around;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-SPACE-AROUND-1.png"
        alt="demo"
      />

      <p>align-content: space-around</p>

      <h2> Space-between</h2>
      <p>
        Just like the space-around property, Space-between distributes the items
        in the container evenly, where each item in the container has an equal
        amount of space from the next one in the container, and takes up the
        entire width of the container in the vertical direction.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: space-between;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-SPACE-BETWEEN-2.png"
        alt="demo"
      />
      <p>align-content: space-between</p>

      <h2> Space-evenly</h2>
      <p>
        Just as the name states, this property distributes the items in the
        container evenly, where each item in the container has an equal amount
        of space from the next one vertically.
      </p>

      <p>This code can be executed like this:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="CSS" style={docco}>
            {`
align-content: space-evenly;
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <Image
        width={500}
        layout="responsive"
        height={300}
        src="https://www.freecodecamp.org/news/content/images/2022/05/ALIGN-CONTENT-SPACE-EVENLY-2.png"
        alt="demo"
      />

      <p>align-content: space-evenly</p>

      <h2>Conclusion</h2>
      <p>
        In today's article, we studied what CSS Grid Layout is all about, why we
        should learn it, and the properties of CSS grid.
      </p>

      <Button whereToGo={"css-variables"} />
    </div>
  );
};

export default CSSGrid;
