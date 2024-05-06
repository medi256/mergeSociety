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
        <button onClick={() => (window.location.href = "/attributeMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/audioMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImagesH;

export const Audio = () => {
  return (
    <div className="comments-container">
      <h1>Audio in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring audio - another exciting
        multimedia element that you can incorporate into your web pages. Audio
        allows you to embed sound files, music, or voice recordings, adding an
        extra layer of interactivity and engagement to your website. Let's dive
        into the world of audio in HTML and learn how to embed and customize audio
        effectively.`}
      </p>

      <h2>Embedding Audio in HTML</h2>
      <p>
        In HTML, audio is embedded using the <code>{`<audio>`}</code> tag. The{" "}
        <code>{`<audio>`}</code> tag is **not** a self-closing tag. This means
        it requires a closing tag (<code>{`</audio>`}</code>) to properly define
        the audio element and its content.{" "}
        {`Here's the basic structure of
        embedding audio in HTML:`}
      </p>
      <pre>
        <code>
          {`
        <audio src="audio.mp3" controls>
          Your browser does not support the audio element.
        </audio>
        
        `}
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<audio>`}</code>{" "}
        {`tag is used to embed an audio file.
        The "src" attribute specifies the source or URL of the audio file. The
        "controls" attribute adds playback controls to the audio player, allowing
        users to play, pause, and control the volume.`}
      </p>

      <h2>Supporting Multiple Audio Formats</h2>
      <p>
        Different browsers support different audio formats, so {`it's`} a good
        practice to provide multiple audio formats within the{" "}
        <code>{`<audio>`}</code> tag. You can do this using the{" "}
        <code>{`<source>`}</code> tag. {`Here's an example:`}
      </p>
      <pre>
        <code>
          {`
        <audio controls>
          <source src="audio.mp3" type="audio/mp3">
          <source src="audio.ogg" type="audio/ogg">
          Your browser does not support the audio element.
        </audio>
        
        `}
        </code>
      </pre>

      <p>
        In the code above, we included two <code>{`<source>`}</code> tags within
        the
        <code>{`<audio>`}</code> tag. Each <code>{`<source>`}</code>{" "}
        {`tag specifies a different audio
        format using the "src" attribute, and the "type" attribute indicates the
        MIME type of the audio file.`}
      </p>

      <h2>Autoplay and Looping Audio</h2>
      <p>
        You can configure the <code>{`<audio>`}</code>{" "}
        {`tag to automatically play the audio
        when the web page loads and to loop the audio continuously. Here's how
        you can do that:`}
      </p>
      <pre>
        <code>
          {`
<audio src="audio.mp3" controls autoplay loop>
  Your browser does not support the audio element.
</audio>
        
        `}
        </code>
      </pre>

      <p>
        {`In the code above, we added the "autoplay" attribute to make the audio
        start playing automatically when the web page loads. We also added the
        "loop" attribute to make the audio repeat continuously until the user
        stops it.`}
      </p>
      <p>
        {`Don't be surprised by attributes that don't have values. Some attributes
        in HTML are optional and don't require a value to function properly.
        We'll encounter these throughout our coding journey, so keep that in
        mind!`}
      </p>
      <p>You can also watch a video on how to upload from your computer</p>
      <video controls width="300px">
        <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712418645/audioUpload_guktfk.mov" />
      </video>

      <h2>Customizing Audio Player Appearance</h2>
      <p>
        {`By default, the audio player in HTML is a simple rectangular box with
        playback controls. However, you can customize the appearance of the audio
        player using CSS styles. While we won't dive into CSS in this lesson,
        it's important to know that you can style the audio player to match your
        website's design or create custom audio players.`}
      </p>

      <h2>Best Practices for Using Audio</h2>
      <ul>
        <li>
          <strong>Provide alternative content:</strong> Not all users will have
          audio enabled or may prefer to consume content without sound. Provide
          alternative content using the <code>{`<p> `}</code> tag within the{" "}
          <code>{`<audio>`}</code>
          tag. For example,
          <br />
          <code>
            {`
<p>
  Your browser does not support audio.
  Click here to download the audio file. 
</p>
          `}
          </code>
          .
        </li>
        <li>
          <strong>Use autoplay sparingly:</strong> Autoplaying audio can be
          disruptive to users, especially if they are browsing in a quiet
          environment. Use autoplay only when it makes sense in the context of
          your web page.
        </li>
        <li>
          <strong>Provide clear audio controls:</strong> Ensure that users have
          easy access to playback controls, such as play, pause, and volume
          adjustment. This is especially important for accessibility.
        </li>
        <li>
          <strong>Optimize audio file size:</strong>{" "}
          {`Large audio files can slow
          down your website's loading time. Use audio editing tools to compress
          and optimize your audio files without sacrificing quality.`}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with embedding audio, providing
        different audio formats, and customizing their appearance. Here's a
        simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "audio.html" in your workspace
          folder.`}
        </li>
        <li>
          Embed an audio file using the <code>{`<audio> `}</code> tag. You can
          use an audio file from your computer or a publicly available audio
          file on the web. For example,
          <br />
          <pre>
            <code>
              {`
              
<audio src="audio.mp3" controls>
 Your browser  does not support audio.
</audio>
              `}
            </code>
          </pre>
        </li>
        <li>
          Try providing multiple audio formats using the{" "}
          <code>{`<source>`}</code> tag. Experiment with different audio files
          and observe how the audio player behaves.
        </li>
        <li>
          Customize the appearance of the audio player using CSS styles (if you
          have knowledge of CSS). Otherwise, focus on understanding the basic
          structure of the <code>{`<audio>`}</code> tag.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored audio in HTML, including how to embed audio,
        provide multiple audio formats, autoplay and loop audio, and more. Audio
        can enhance the user experience on your website, adding an extra layer
        of interactivity and engagement. Remember to use audio wisely, follow best
        practices, and always test your audio files to ensure they play correctly
        on different devices and browsers. In the next lesson, we'll move on to
        video and learn how to embed videos in your HTML documents. Stay tuned,
        and happy coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/imagesHMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/videoMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
