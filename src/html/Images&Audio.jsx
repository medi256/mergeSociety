const ImagesH = () => {
  return (
    <div className="comments-container">
      <h1>Images in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring images - a crucial
        component of modern web pages. Images can enhance the visual appeal of
        your website, convey information, and engage your users. Let's dive into
        the world of images in HTML and learn how to embed and customize images
        effectively.`}
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
          {`
<img src="image.jpg" alt="Description of the image">
          `}
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
        {`You can customize the appearance of images in HTML using attributes like
        width and height. These attributes allow you to control the dimensions of
        the displayed image. Here's an example:`}
      </p>
      <pre>
        <code>
          {`
<img src="image.jpg" alt="Description of the image" width="300" height="200">
          `}
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
              {`
            
           <img src="image.jpg">.
            `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Absolute URL:</strong> If the image is hosted on a web server,
          you can use the absolute URL to specify its location. For example,
          <br />
          <pre>
            <code>
              {`
            
          <img src="https://www.example.com/image.jpg">.
            `}
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
              {`
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/wAAg8AAVsRExPQAAAAASUVORK5CYII="
          alt="Encoded image">.
            
            `}
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

      <h2>Best Practices for Using Images</h2>
      <ul>
        <li>
          <strong>Use descriptive alt text:</strong>{" "}
          {`The "alt" attribute is
          crucial for accessibility. It provides alternative text for screen
          readers and users who cannot see the image. Make sure the alt text
          accurately describes the image.`}
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
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with embedding images, providing
        different source options, and customizing their appearance. Here's a
        simple exercise to get you started:`}
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
              {`
           <img src="image.jpg" alt="Beautiful sunset"
          width="400" height="300">
            
            `}
            </code>
          </pre>
        </li>
        <li>
          {`Try using different source options, such as relative URLs, absolute
          URLs, or data URLs. Observe how the images are displayed at different
          sizes using the "width" and "height" attributes.`}
        </li>
        <li>
          {`Provide meaningful alternative text for your images using the "alt"
          attribute. For instance,`}
          <br />
          <pre>
            <code>
              {`
<img src="image.jpg"
alt="Sunset over the ocean" width="500" height="400">
            
            `}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored images in HTML, including how to embed
        images, provide different source options, customize their appearance using
        width and height attributes, and more. Images play a vital role in modern
        web design, enhancing the visual appeal and engagement of your website.
        Remember to use images wisely, follow best practices, and always test
        your images to ensure they display correctly on different devices and
        browsers. In the next lesson, we'll move on to HTML audio tutorial. Stay tuned, and happy
        coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "attribute")}>
          back
        </button>
        <button onClick={() => (window.location.href = "audio")}>Next</button>
      </div>
    </div>
  );
};

export default ImagesH;

export const Audio = () => {
  return (
    <div className="comments-container">
      <h1>Multimedia:</h1>
      <p>
        Beyond images, HTML allows you to embed multimedia elements such as
        audio and video.
      </p>
      <h2>Audio</h2>
      <p>
        To embed audio in HTML, use the <code>&lt;audio&gt;</code> element with
        its <b>{`'src'`}</b> attribute or the <code>&lt;source&gt;</code>{" "}
        element with its <b>{`'src'`}</b> and <b>{`'type'`}</b> attributes for
        each.
      </p>

      <p>
        The <code>&lt;source&gt;</code> element will be explained further below.
      </p>

      <p>
        You can specify text inside the <code>&lt;audio&gt;</code> element that
        {`
        will be shown as a fallback in browsers that don't support audio
        embedding. This occurs when the browser is old or doesn't support that
        audio format.`}
      </p>

      <h2>HTML Audio Attributes</h2>
      <ul>
        <li>
          <b>autoplay:</b> If specified, the embedded audio will automatically
          begin to play as soon as the webpage is opened.
        </li>
        <li>
          <b>controls:</b> If specified, the embedded audio will have browser
          controls, including the volume button, download button, and others.
        </li>
        <li>
          <b>loop:</b> If specified, the embedded audio will play continuously
          in an endless loop.
        </li>
        <li>
          <b>muted:</b> If specified, the embedded audio will be muted until the
          user unmutes it.
        </li>
        <li>
          <b>src:</b> Specifies the file path or location of the audio.
        </li>
      </ul>

      <h2>
        Example: Embedding Audio with the <code>&lt;audio&gt;</code> Element
      </h2>

      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
  <audio controls src="quavo_shooters_inside_my_crib.mp3"></audio>
          `}
        </code>
      </pre>
      <h2>Output</h2>
      <pre>
        <audio
          src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712411705/quavo_lmhtzs.mp3"
          controls
        >
          Sorry, your browser does not support embedded audio.
        </audio>
      </pre>
      <p>
        {`
        Note: The provided URL in the src attribute may not work as it's a
        local file. Use any audio file URL for practice.`}
      </p>

      <h2>Video Tutorial</h2>
      <video controls width="300px">
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712418645/audioUpload_guktfk.mov" />
      </video>

      <p>
        If either the <b>{`'autoplay'`}</b> or <b>{`'controls'`}</b> attribute
        is not present, the audio will not play. At least one of these
        attributes should be included for the audio to play.
      </p>

      <p>
        {`It's`} recommended to include the <b>{`'controls'`}</b> attribute in
        all audio elements for better user experience.
      </p>

      <h2>
        Using the <code>&lt;source&gt;</code> Element
      </h2>
      <p>
        Some browsers may not support all audio formats. To ensure compatibility
        across different browsers, use the <code>&lt;source&gt;</code> element
        to provide multiple audio formats.
      </p>

      <h2>Example: Multiple Source Formats</h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`  
  <audio controls>
      <source src="audio.mp3" type="audio/mp3">
      <source src="audio.ogg" type="audio/ogg">
  </audio>
         `}
        </code>
      </pre>

      <h2>Output</h2>
      <pre>
        <audio controls>
          <source
            src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712411705/quavo_lmhtzs.mp3"
            type="audio/mp3"
          />
          <source
            src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712411705/quavo_lmhtzs.mp3"
            type="audio/ogg"
          />
        </audio>
      </pre>

      <p>
        In the example above, the browser will automatically select a compatible
        format, ensuring a consistent user experience.
      </p>

      <h2>Summary</h2>
      <p>
        In this document, we explored multimedia in HTML, focusing on audio
        elements. We learned how to embed audio using the{" "}
        <code>&lt;audio&gt;</code>
        tag and its essential attributes. By providing multiple audio formats
        with the <code>&lt;source&gt;</code> element, we ensure compatibility
        across different browsers. This ensures a seamless and engaging
        multimedia experience for all website visitors.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "imagesH")}>back</button>
        <button onClick={() => (window.location.href = "video")}>Next</button>
      </div>
    </div>
  );
};
