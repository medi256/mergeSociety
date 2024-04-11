import { useNavigate } from "react-router-dom";

const ImagesH = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>HTML Images</h1>

      <p>
        HTML images are essential for any website. Almost every website you
        visit includes images.
      </p>
      <p>
        Images enhance the visual appeal of a website and make it more engaging
        for visitors.
      </p>
      <p>
        Can you imagine browsing a webpage without any images? Most likely not.
      </p>
      <p>
        To include an image on our website, we use the <code>&lt;img&gt;</code>{" "}
        element with the <b>src</b> attribute, which specifies the {`image's`}{" "}
        URL or location.
      </p>
      <p>
        The <code>&lt;img&gt;</code> element is self-closing, as we discussed
        earlier.
      </p>
      <h2>
        The <b>src</b> Attribute
      </h2>
      <p>
        The <b>src</b> attribute is used to define the URL or location of an
        image.
      </p>
      <h2>Example</h2>
      <h4>HTML Code</h4>
      <pre>
        <code>&lt;img src={"image-location.jpg"}&gt;</code>
      </pre>
      <h2>Output</h2>
      <pre>
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
          alt="demo"
          style={{ width: "200px", height: "200px" }}
        />
      </pre>
      <h2>
        The <b>alt</b> Attribute
      </h2>
      <p>
        The <b>alt</b> attribute provides alternative text for an image, which
        is displayed when the image fails to load.
      </p>
      <h2>Example</h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          &lt;img src={"imag.jpg"} alt={`"Alternate text for the image" `}&gt;
        </code>
      </pre>
      <h2>Output</h2>
      <pre>
        <img src="imag.jpg" alt="Alternate text for the image  " />
      </pre>
      <p>
        In the example above, the specified URL does not exist, so the alternate
        text is displayed instead.
      </p>
      <h2>Image Sizing (Width and Height)</h2>
      <p>
        To resize an image, use the <b>width</b> and <b>height</b> attributes,
        typically specified in pixels (px).
      </p>
      <h2>Example</h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          &lt;img src={`"medi.jpg"`} alt={`"medi's image"`} width={`"300px"`}
          height={`"300px"`}&gt;
        </code>
      </pre>
      <h2>Output</h2>
      <pre>
        <img
          src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712398955/massa_zuwdsv.jpg"
          alt="medi"
          width={"300px"}
          height={"300px"}
        />
      </pre>
      <p>
        The above image has a width and height of 300 pixels. You can adjust the
        dimensions according to your preference.
      </p>
      <h2>Image as a Link</h2>
      <p>
        Images can also act as links by enclosing them within an{" "}
        <code>&lt;a&gt;</code> element with the <b>href</b> attribute.
      </p>
      <h2>Example</h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          &lt;a href={"http://www.udemy.com"}&gt; &lt;img src={"image-location"}{" "}
          alt={`"udemy logo"`}&gt; &lt;&#47;a&gt;
        </code>
      </pre>
      <h2>Output</h2>
      <pre>
        <a href="http://www.udemy.com">
          <img
            src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/udemy_qxvl4l.jpg"
            alt="udemy logo"
          />
        </a>
      </pre>
      <p>Clicking on the image above will take you to {`Udemy's`} website.</p>
      <h2>Tip</h2>
      <p>
        Avoid overloading webpages with too many images to prevent slow loading
        times, which can discourage visitors.
      </p>
      <h2>Video Tutorial</h2>
      <p>
        Watch a video tutorial to learn how to easily upload images to your
        website from your computer.
      </p>
      <video controls width="300px" height="300px">
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712418881/imageUpload_tsuisi.mov" />
      </video>
      <h2>Summary</h2>
      <p>
        Use the <code>&lt;img&gt;</code> element with the <b>src</b> attribute
        to specify the {`image's`} URL.
      </p>
      <p>
        The <b>alt</b> attribute provides alternative text for situations where
        the image cannot load.
      </p>
      <p>
        Adjust the {`image's`} dimensions using the width and height attributes,
        typically specified in pixels (px).
      </p>
      <p>
        Images can also serve as links by enclosing them within an{" "}
        <code>&lt;a&gt;</code> element with an href attribute.
      </p>
      <p>
        Avoid overloading a webpage with too many images to prevent slow loading
        times, which may deter visitors.
      </p>
      <p>
        Consider watching a video tutorial to learn how to easily upload images
        to your website from your computer.
      </p>

      <div className="button-container">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default ImagesH;

export const Audio = () => {
  const navigate = useNavigate();

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
        <button onClick={() => navigate(-1)}>back</button>
      </div>
    </div>
  );
};
