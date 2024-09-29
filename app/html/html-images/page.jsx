import AdUnit from "@/app/AdUnit";
import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Images in HTML: Embedding and Customizing Visual Content",
  description:
    "Explore how to effectively embed and customize images in HTML. Learn about different source options, attributes for image customization, and best practices for web design.",
  keywords:
    "HTML, images in HTML, embedding images, web development, coding for beginners, HTML tutorial, image attributes, best practices for images",
  openGraph: {
    title:
      "Images in HTML: Embedding and Customizing Visual Content | MergeSociety",
    description:
      "Discover the importance of images in HTML in this comprehensive lesson. Learn how to embed images, customize their appearance, and follow best practices for web design.",
  },
};

const HTMLImages = () => {
  return (
    <div className="lesson-container">
      <AdUnit />
      <h1>Images in HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring images - a crucial
        component of modern web pages. Images can enhance the visual appeal of
        your website, convey information, and engage your users. Let's dive into
        the world of images in HTML and learn how to embed and customize images
        effectively.
      </p>

      <h2>Embedding Images in HTML</h2>
      <p>
        In HTML, images are embedded using the <code>{`<img>`}</code> tag. The{" "}
        <code>{`<img>`}</code>{" "}
        {`tag
        is a self-closing tag, which means it doesn't have a closing tag. Here's
        the basic structure of embedding an image in HTML:`}
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<img src="image.jpg" alt="Description of the image">
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<img>`}</code>{" "}
        {`tag is used to embed an image. The
        "src" attribute specifies the source or URL of the image file. The "alt"
        attribute provides alternative text for screen readers and when the
        image cannot be displayed.`}
      </p>

      <h2>Customizing Image Appearance</h2>
      <p>
        You can customize the appearance of images in HTML using attributes like
        width and height. These attributes allow you to control the dimensions
        of the displayed image. Here's an example:
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<img src="image.jpg" alt="Description of the image" width="300" height="200">
          `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        {`In the code above, we added the "width" and "height" attributes to the`}
        <code>{`<img> `}</code> tag.{" "}
        {`The values "300" and "200" specify the width and height
        of the image in pixels, respectively. You can adjust these values to
        control the size of the displayed image.`}
      </p>

      <h2>Different Ways to Provide Image Source</h2>
      <p>There are several ways to provide the source or URL of an image:</p>

      <ul>
        <li>
          <strong>Relative URL:</strong>{" "}
          {`You can use a relative URL if the image
          file is located in the same folder as your HTML file. For example, if
          your HTML file is "index.html" and the image file is "image.jpg," you
          can simply use`}
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
            
<img src="image.jpg">.
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Absolute URL:</strong> If the image is hosted on a web server,
          you can use the absolute URL to specify its location. For example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
            
<img src="https://www.example.com/image.jpg">.
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          <strong>Data URLs:</strong>{" "}
          {`You can encode the image data directly
          into the "src" attribute using a data URL. This is useful for small
          images or icons. For example,`}
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/wAAg8AAVsRExPQAAAAASUVORK5CYII="
alt="Encoded image">.
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ul>

      <p>
        You can also watch this video and learn how to upload images from your
        computer
      </p>
      <video controls width="300px" height="300px">
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712418881/imageUpload_tsuisi.mov" />
      </video>
      <AdUnit />
      <h2>Best Practices for Using Images</h2>
      <ul>
        <li>
          <strong>Use descriptive alt text:</strong> The "alt" attribute is
          crucial for accessibility. It provides alternative text for screen
          readers and users who cannot see the image. Make sure the alt text
          accurately describes the image.
        </li>
        <li>
          <strong>Optimize image size:</strong>{" "}
          {`Large image files can slow down
          your website's loading time. Use image editing tools to compress and
          optimize your images without sacrificing quality.`}
        </li>
        <li>
          <strong>Use responsive images:</strong>{" "}
          {`Make sure your images are
          responsive, meaning they adjust to different screen sizes and
          devices. You can use CSS or modern HTML attributes like "srcset" and
          "sizes" to achieve responsiveness.`}
        </li>
        <li>
          <strong>Provide fallback options:</strong> If an image cannot be
          displayed, provide fallback options like alternative text or a
          placeholder image. This ensures that users still get some information
          even if the image fails to load.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with embedding images, providing
        different source options, and customizing their appearance. Here's a
        simple exercise to get you started:
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "images.html" in your workspace
          folder.`}
        </li>
        <li>
          Embed an image using the <code>{`<img>`}</code> tag. You can use an
          image file from your computer or a publicly available image on the
          web. For example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<img src="image.jpg" alt="Beautiful sunset"
 width="400" height="300">
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
        <li>
          Try using different source options, such as relative URLs, absolute
          URLs, or data URLs. Observe how the images are displayed at different
          sizes using the "width" and "height" attributes.
        </li>
        <li>
          {`Provide meaningful alternative text for your images using the "alt"
          attribute. For instance,`}
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<img src="image.jpg"
alt="Sunset over the ocean" width="500" height="400">
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </li>
      </ol>
      <AdUnit />
      <h2>Conclusion</h2>
      <p>
        In this lesson, we've explored images in HTML, including how to embed
        images, provide different source options, customize their appearance
        using width and height attributes, and more. Images play a vital role in
        modern web design, enhancing the visual appeal and engagement of your
        website. Remember to use images wisely, follow best practices, and
        always test your images to ensure they display correctly on different
        devices and browsers. In the next lesson, we'll move on to HTML audio
        tutorial. Stay tuned, and happy coding!
      </p>
      <Button whereToGo={"html-audio"} />
    </div>
  );
};

export default HTMLImages;
