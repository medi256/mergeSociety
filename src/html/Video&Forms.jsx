const Video = () => {
  return (
    <div className="comments-container">
      <h1>Videos in HTML</h1>
      <p>
        {`Hello there! In this lesson, we'll be exploring videos - a powerful
        multimedia element that can bring your web pages to life. Videos can
        engage your users, convey complex information, and enhance the visual
        appeal of your website. Let's dive into the world of videos in HTML and
        learn how to embed and customize videos effectively.`}
      </p>

      <h2>Embedding Videos in HTML</h2>
      <p>
        {`In HTML, video is embedded using the <video> tag. The <video> tag is **not** a self-closing tag. This means it requires a closing tag (</video>) to properly define the audio element and its content. Here's the basic structure of embedding audio in HTML:`}
      </p>
      <pre>
        <code>
          {`
<video src="video.mp4" controls>
  Your browser does not support the video element.
</video>

        `}
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<video> `}</code>{" "}
        {`tag is used to embed a video file.
        The "src" attribute specifies the source or URL of the video file. The
        "controls" attribute adds playback controls to the video player, allowing
        users to play, pause, and control the volume.`}
      </p>

      <h2>Supporting Multiple Video Formats</h2>
      <p>
        Similar to audio, different browsers support different video formats.{" "}
        {`It's`}a good practice to provide multiple video formats within the{" "}
        <code>{`<video>`}</code>
        tag using the <code>{`<source>`}</code> tag. {`Here's an example:`}
      </p>
      <pre>
        <code>
          {`
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
        
        `}
        </code>
      </pre>

      <p>
        In the code above, we included two <code>{`<source>`}</code> tags within
        the
        <code>{`<video>`}</code> tag. Each <code>{`<source>`}</code>{" "}
        {`tag specifies a different video
        format using the "src" attribute, and the "type" attribute indicates the
        MIME type of the video file.`}
      </p>

      <h2>Autoplay and Looping Videos</h2>
      <p>
        You can configure the <code>{`<video>`}</code>{" "}
        {`tag to automatically play the video
        when the web page loads and to loop the video continuously. Here's how
        you can do that:`}
      </p>
      <pre>
        <code>
          {`
        
<video src="video.mp4" controls autoplay loop>
  Your browser does not support the video element.
</video>
`}
        </code>
      </pre>

      <p>
        {`In the code above, we added the "autoplay" attribute to make the video
        start playing automatically when the web page loads. We also added the
        "loop" attribute to make the video repeat continuously until the user
        stops it.`}
      </p>
      <p>You can also watch a video on how to upload from your computer</p>
      <pre>
        <video controls width="300px">
          <source
            src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712412958/javascript_ebrm8u.mp4"
            type="video/mp4"
          />
        </video>
      </pre>

      <h2>Customizing Video Player Appearance</h2>
      <p>
        {`By default, the video player in HTML is a simple rectangular box with
        playback controls. However, you can customize the appearance of the video
        player using CSS styles. While we won't dive into CSS in this lesson,
        it's important to know that you can style the video player to match your
        website's design or create custom video players.`}
      </p>

      <h2>Best Practices for Using Videos</h2>
      <ul>
        <li>
          <strong>Provide alternative content:</strong> Not all users will have
          video enabled or may prefer to consume content without video. Provide
          alternative content using the <code>{`<p> `}</code> tag within the{" "}
          <code>{`<video>`}</code>
          tag. For example,
          <br />
          <pre>
            <code>
              {`
<p>
 Your browser does not support video. Click here to download the video file.
</p>
              
              `}
            </code>
          </pre>
        </li>
        <li>
          Similar to images, you can control the width and height of your videos
          using the `width` and `height` attributes within the &lt;video&gt;
          tag. This allows you to adjust the video size to fit your webpage
          layout and provide a better viewing experience for your users, for
          instancy,
          <br />
          <pre>
            <code>
              {`
<video controls width="300" height="200" src="video.mp4">
  <p>
    Your browser does not support video.
  </p>
</video>
              
              `}
            </code>
          </pre>
        </li>

        <li>
          <strong>Use autoplay sparingly:</strong> Autoplaying videos can be
          disruptive to users, especially if they are browsing in a quiet
          environment or on a limited data connection. Use autoplay only when it
          makes sense in the context of your web page.
        </li>
        <li>
          <strong>Optimize video file size:</strong>{" "}
          {`Large video files can
          significantly slow down your website's loading time. Use video
          editing tools to compress and optimize your video files without
          sacrificing quality.`}
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with embedding videos, providing
        different video formats, and customizing their appearance. Here's a
        simple exercise to get you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "video.html" in your workspace
          folder.`}
        </li>
        <li>
          Embed a video file using the <code>{`<video> `}</code> tag. You can
          use a video file from your computer or a publicly available video file
          on the web. For example,
          <br />
          <pre>
            <code>
              {`
            
<video src="video.mp4" controls>
 Your browser does not support video.
</video>
            `}
            </code>
          </pre>
          .
        </li>
        <li>
          Try providing multiple video formats using the{" "}
          <code>{`<source>`}</code> tag. Experiment with different video files
          and observe how the video player behaves.
        </li>
        <li>
          Customize the appearance of the video player using CSS styles (if you
          have knowledge of CSS). Otherwise, focus on understanding the basic
          structure of the <code>{`<video>`}</code> tag.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored videos in HTML, including how to embed
        videos, provide multiple video formats, autoplay and loop videos, and
        more. Videos can enhance the user experience on your website, adding a
        dynamic and engaging element. Remember to use videos wisely, follow best
        practices, and always test your videos to ensure they play correctly on
        different devices and browsers. In the next lesson, we'll move on to
        creating forms in HTML, allowing users to input data and interact with
        your website. Stay tuned, and happy coding!`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "audio")}>back</button>
        <button onClick={() => (window.location.href = "formsH")}>Next</button>
      </div>
    </div>
  );
};

export default Video;

export const FormsH = () => {
  return (
    <div className="comments-container">
      <h2>Hello</h2>
      <h2>Understanding HTML Forms:</h2>
      <p>
        HTML forms provide a structured way to collect data from users. They are
        essential for various web applications, including contact forms,
        surveys, and user logins.
      </p>

      <p>
        To create a form, you use the <code>&lt;form&gt;</code> and{" "}
        <code>&lt;/form&gt;</code> elements. The form element can include
        various input elements where users can provide information.
      </p>

      <h3>Example:</h3>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
        <form action="submit.php" method="post">
             <input type="text" name="name" placeholder="Your Name" />
             <input type="email" name="email" placeholder="Your Email" />
             <textarea name="message" placeholder="Your Message"></textarea>
             <input type="submit" value="Submit" />
        </form>
      `}
        </code>
      </pre>
      <h4>Output</h4>
      <form action="submit.php" method="post">
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <textarea name="message" placeholder="Your Message"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <br />
        The <code>action</code> attribute specifies the URL where the form data
        will be sent for processing, while the <code>method</code> attribute
        indicates how the data is sent. Common methods are
        {` "get" and "post." The
        "get" method appends data to the URL, while the "post" method sends it
        in the request body. However, you can start by creating the form`}
        structure without focusing too much on these attributes initially.
      </p>

      <h2>Input Elements:</h2>
      <p>
        HTML offers various input elements, each serving different purposes.
        {`Let's`} explore some of them:
      </p>

      <ul>
        <li>
          <b>Text Input:</b> Allows users to enter text.
        </li>
        <li>
          <b>Email Input:</b> Specifically designed for email addresses.
        </li>
        <li>
          <b>Textarea:</b> A larger input field for longer messages or comments.
        </li>
        <li>
          <b>Radio Buttons:</b> Users can select one option from multiple
          choices.
        </li>
        <li>
          <b>Checkboxes:</b> Users can select one or more options from a list.
        </li>
      </ul>

      <p>
        You can define the type of input element using the <code>type</code>{" "}
        attribute. Here are some examples:
      </p>

      <h3>Examples:</h3>
      <h4>Text Input:</h4>
      <pre>
        <code>
          {`
      <input type="text" name="name" placeholder="Your Name" />
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <input type="text" name="name" placeholder="Your Name" />
      <br />

      <h4>Email Input:</h4>
      <pre>
        <code>
          {`
      <input type="email" name="email" placeholder="Your Email" />
         `}
        </code>
      </pre>
      <h4>Output</h4>
      <input type="email" name="email" placeholder="Your Email" />
      <br />

      <h4>Textarea:</h4>
      <pre>
        <code>
          {`
      <textarea name="message" placeholder="Your Message"></textarea>
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <textarea name="message" placeholder="Your Message"></textarea>
      <br />

      <h4>Radio Buttons:</h4>
      <pre>
        <code>
          {`
  <input type="radio" name="choice" value="option1" />
  <input type="radio" name="choice" value="option2" />
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <input type="radio" name="choice" value="option1" />
      <input type="radio" name="choice" value="option2" />
      <br />

      <h4>Checkboxes:</h4>
      <pre>
        <code>
          {`
  <input type="checkbox" name="option1" value="value1" />
  <input type="checkbox" name="option2" value="value2" />
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <input type="checkbox" name="option1" value="value1" />
      <input type="checkbox" name="option2" value="value2" />
      <br />

      <h2>Labels and Legends:</h2>
      <p>
        To enhance the usability of your forms, you can use{" "}
        <code>&lt;label&gt;</code> elements to provide text labels for each
        input element. Additionally, you can group related inputs within a{" "}
        <code>&lt;fieldset&gt;</code> element and provide an overall description
        using the <code>&lt;legend&gt;</code> element.
      </p>

      <h3>Example with Labels, Fieldset, and Legend:</h3>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
<form action="submit.php" method="post">
    <fieldset>
      <legend>Personal Information</legend>
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" name="name" placeholder="John Doe" />
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="john@example.com"
      />
    </fieldset>
    <input type="submit" value="Submit" />
</form>
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <form action="submit.php" method="post">
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="name">Your Name:</label>
          <br />
          <input type="text" id="name" name="name" placeholder="John Doe" />
          <br />
          <label htmlFor="email">Your Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
          <br />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <p>
        The <code>&lt;label&gt;</code> element provides a text label for each
        input element. The <code>for</code> attribute associates the label with
        the input element using its <code>id</code>. The{" "}
        <code>&lt;fieldset&gt;</code> groups related inputs, and the{" "}
        <code>&lt;legend&gt;</code> provides a title for that fieldset to
        describe its purpose. This example demonstrates how to create a form
        structure with labels, legends, and fieldsets to improve the user
        experience and accessibility of your HTML forms.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "video")}>back</button>
        <button onClick={() => (window.location.href = "div")}>Next</button>
      </div>
    </div>
  );
};
