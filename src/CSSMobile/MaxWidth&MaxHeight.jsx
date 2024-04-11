import { useNavigate } from "react-router-dom";

const MaxWidth = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Max Width</h1>
      <p>
        {`Let's`} dive into the max-width property in CSS. Imagine you have a
        box on a webpage, like a picture or a paragraph. Sometimes, you want to
        control how wide that box can get. {`That's`} where max-width comes in
        handy!
      </p>
      <p>{`Here's`} a simple explanation with an example:</p>
      <p>
        Imagine {`you're`} creating a website for your favorite recipe. You have
        a section for ingredients, and you want the list of ingredients to stay
        a certain width so it {`doesn't`} stretch across the entire page, making
        it hard to read.
      </p>
      <pre>
        <code>
          {` 
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      .ingredient-list {
        max-width: 400px; /* Sets the maximum width of the ingredient list */
        margin: 0 auto; /* Centers the ingredient list on the page */
        background-color: lightblue; /* Just for visualization */
        padding: 20px; /* Just for visualization */
      }
    </style>
  </head>
  <body>
    <div class="ingredient-list">
      <h2>Ingredients</h2>
      <ul>
        <li>Flour</li>
        <li>Sugar</li>
        <li>Eggs</li>
        <!-- More ingredients go here -->
      </ul>
    </div>
  </body>
  </html>
      `}
        </code>
      </pre>
      <p>
        In this example, the line <code>max-width: 400px;</code> inside the{" "}
        <code>.ingredient-list</code> class tells the browser,{" "}
        {`"Hey, don't let this ingredient list get any wider than 400 pixels!" This ensures that no matter how wide the browser window is, the ingredient list won't`}{" "}
        stretch too far and become hard to read.
      </p>
      <p>
        So, the max-width property allows you to control the maximum width of an
        element on your webpage, ensuring it stays visually pleasing and easy to
        read, regardless of the screen size. Pretty cool, right?
      </p>
      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Max-width.
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default MaxWidth;

export const MaxHeight = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Max Height</h1>
      <p>
        Imagine you have a photo gallery on your website. You want the images to
        be a certain size and not too large, but some of them might be taller
        than others. With max-height, you can ensure that no matter how tall an
        image is, it {`won't`} exceed a certain height.
      </p>
      <p>{`Here's`} a simple example:</p>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      .image-container {
        max-height: 300px; /* This sets the maximum height of the image container */
        overflow: hidden; /* This hides any part of the image that goes beyond the set height */
        margin: 0 auto; /* This centers the image container on the page */
        background-color: lightgray; /* Just for visualization */
        padding: 20px; /* Just for visualization */
      }
      .image {
        width: 100%; /* Ensures the image takes up the full width of its container */
        height: auto; /* Allows the image to adjust its height proportionally to its width */
      }
    </style>
  </head>
  <body>
    <div class="image-container">
      <img class="image" src="example.jpg" alt="Example Image">
    </div>
  </body>
  </html>
      `}
        </code>
      </pre>
      <p>
        In this example, the .image-container class has a max-height: 300px;
        property, which means that no matter how tall the image is, it {`won't`}{" "}
        exceed 300 pixels in height. If an image is taller than 300 pixels, the
        overflow: hidden; property ensures that any excess part of the image is
        hidden from view.
      </p>
      <p>
        So, the max-height property helps you control the maximum height of an
        element, ensuring that it {`doesn't`} become too tall and disrupt the
        layout of your webpage. Hope that helps clarify things!
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Max-height.
      </p>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
