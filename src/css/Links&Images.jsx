const Links = () => {
  return (
    <div className="comments-container">
      <h1>Styling Links</h1>
      <p>
        Links can be styled with various CSS properties, including color,
        font-family, font-size, and padding. {`Here's`} a simple example:
      </p>
      <pre>
        <code>
          {`
  a {
    color: hotpink;
  }
          `}
        </code>
      </pre>
      <p>
        Additionally, links can be styled differently based on their state.
        There are four main states:
      </p>
      <ul>
        <li>a:link - an unvisited, unclicked link</li>
        <li>a:visited - a visited, clicked link</li>
        <li>a:hover - a link when the {`user's`} mouse is over it</li>
        <li>a:active - a link when it is clicked</li>
      </ul>
      <p>
        By default, links have an underline and a blue color. You can modify
        these using CSS properties such as color and text-decoration.
      </p>
      <pre>
        <code>
          {`
  a {
    color: black;
    text-decoration: none;
  }
          `}
        </code>
      </pre>
      <p>
        You can also style links based on interaction using these properties:
      </p>
      <ul>
        <li>a:link - a normal, unvisited link</li>
        <li>a:visited - a link the user has visited</li>
        <li>a:hover - a link when the user hovers over it</li>
        <li>a:active - a link the moment it is clicked</li>
      </ul>
      <p>Here is some sample CSS using the four states:</p>
      <pre>
        <code>
          {`
  a:link { color: red; }
  a:visited { color: blue; }
  a:hover { color: green; }
  a:active { color: blue; }
          `}
        </code>
      </pre>
      <p>Note the ordering rules when setting the style for link states:</p>
      <ol>
        <li>a:hover MUST come after a:link and a:visited</li>
        <li>a:active MUST come after a:hover</li>
      </ol>
      <p>{`Here's`} an example CSS code for link states:</p>
      <pre>
        <code>
          {`
  /* unvisited link */
  a:link {
    color: red;
  }
  
  /* visited link */
  a:visited {
    color: green;
  }
  
  /* mouse over link */
  a:hover {
    color: hotpink;
  }
  
  /* selected link */
  a:active {
    color: blue;
  } 
          `}
        </code>
      </pre>
      <p>
        Pseudo-classes like :hover are keywords added to a selector that
        specifies a special state for the targeted element. They operate in
        certain states, and we will cover more of them in detail.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Links.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "tables")}>back</button>
        <button onClick={() => (window.location.href = "images")}>Next</button>
      </div>
    </div>
  );
};

export default Links;
export const Images = () => {
  return (
    <div className="comments-container">
      <h2>CSS Images</h2>
      <p>
        In CSS, we can style images in many ways. We can make them rounded,
        circled, responsive, etc.
      </p>

      <h3>CSS Rounded Image</h3>
      <p>
        The <code>border-radius</code> CSS property is used to control the
        roundness of the corners of an {`element's`} border box. It allows you
        to create rounded corners on elements such as divs, images, and buttons,
        giving them a more aesthetically pleasing and modern look.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
      img {
        border-radius: 15px;
      }
      `}
        </code>
      </pre>
      <h4>Output</h4>
      <img
        style={{ width: "300px", borderRadius: "15px" }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
        alt="An image with rounded corners"
      />

      <h3>CSS Circle Image</h3>
      <p>
        To create a circular image, you just need to set the{" "}
        <code>border-radius</code> CSS property to <code>50%</code>.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
      img {
        border-radius: 50%;
      }
      `}
        </code>
      </pre>
      <h4>Output</h4>
      <img
        style={{ borderRadius: "50%", width: "300px" }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
        alt="A circular image"
      />

      <h3>CSS Thumbnail Image</h3>
      <p>
        We can create a thumbnail by adding a border and padding to an image.
      </p>
      <pre>
        <code>
          {`
  img {
    border: 1px solid brown;
    border-radius: 5px;
    padding: 5px;
  }
      `}
        </code>
      </pre>
      <img
        style={{
          width: "300px",
          border: "1px solid brown",
          borderRadius: "5px",
          padding: "5px",
        }}
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg "
        alt="A thumbnail image"
      />

      <h3>CSS Responsive Image</h3>
      <p>
        To make images responsive and fit any screen size, simply set their
        <code>max-width</code> to <code>100%</code> and <code>height</code> to{" "}
        <code>auto</code>.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`
  img {
    max-width: 100%;
    height: auto;
  }
      `}
        </code>
      </pre>

      <h3>Centering Images</h3>
      <p>
        To center an image, set the <code>display</code> CSS property to{" "}
        <code>block</code>
        and the <code>margin</code> property to <code>auto</code>.
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Images.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "links")}>back</button>
        <button onClick={() => (window.location.href = "icons")}>Next</button>
      </div>
    </div>
  );
};
