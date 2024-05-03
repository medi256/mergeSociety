const Video = () => {
  return (
    <div className="comments-container">
      <h1>Multimedia:</h1>
      <p>
        Beyond images, HTML allows you to embed multimedia elements such as
        audio and video.
      </p>

      <h2>Video</h2>
      <p>
        When it comes to embedding videos in HTML, you can use the{" "}
        <code>&lt;video&gt;</code> element. This element allows you to display
        video content on your web pages.
      </p>

      <h2>HTML Video Attributes</h2>
      <ul>
        <li>
          <b>autoplay:</b> If specified, the video will automatically start
          playing as soon as the webpage is opened.
        </li>
        <li>
          <b>controls:</b> When added, it provides the user with video controls,
          including play, pause, volume, and more.
        </li>
        <li>
          <b>loop:</b> If specified, the video will play in an endless loop,
          repeating after reaching its end.
        </li>
        <li>
          <b>muted:</b> If specified, the video will be muted, and users can
          unmute it as needed.
        </li>
        <li>
          <b>src:</b> Specifies the file path or location of the video.
        </li>
        <li>
          The video, controls, loop, and muted attributes are boolean attributes
          and do not need a value; they just need to be present at the start
          tag.
        </li>
      </ul>

      <h2>
        Example of How to Embed Video with <code>&lt;video&gt;</code> Element
      </h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
  <video controls src="videos/sample-video.mp4">
  </video>                    
          `}
        </code>
      </pre>

      <h2>Output</h2>
      <pre>
        <video
          controls
          src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712412958/javascript_ebrm8u.mp4"
          width="300px"
        >
          Sorry, your browser does not support the embedded video
        </video>
      </pre>
      <p>
        {`It's`} important to note that the compatibility of video formats may
        vary across different browsers. To ensure a consistent experience for
        your users, you can provide multiple video formats using the{" "}
        <code>&lt;source&gt;</code> element.
      </p>

      <h2>
        Using the <code>&lt;source&gt;</code> Element for Video
      </h2>
      <p>
        Just like with audio, you can use the <code>&lt;source&gt;</code>{" "}
        element to specify multiple video formats to accommodate different
        browsers. This ensures that your video content is accessible to a
        broader audience.
      </p>

      <h2>
        Example of Using the <code>&lt;source&gt;</code> for Video
      </h2>
      <h4>HTML Code</h4>
      <pre>
        <code>
          {`
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>                
          `}
        </code>
      </pre>
      <h2>Output</h2>
      <pre>
        <video controls width="300px">
          <source
            src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712412958/javascript_ebrm8u.mp4"
            type="video/mp4"
          />
        </video>
      </pre>

      <p>
        By providing multiple video formats, the browser will automatically
        select a compatible format, ensuring a consistent user experience across
        different devices and browsers.
      </p>

      <h2>Summary</h2>
      <p>
        In this document, we explored multimedia in HTML, specifically focusing
        on video elements. We learned how to use the <code>&lt;video&gt;</code>{" "}
        tag to embed videos in web pages and discussed essential attributes like
        {`
        'autoplay,' 'controls,' 'loop,' 'muted,' and 'src,'`}{" "}
        which provide control over video playback and user experience.
        Additionally, we emphasized the importance of using the{" "}
        <code>&lt;source&gt;</code> element to enhance compatibility across
        different browsers.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/audioMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/formsHMobile")}>
          Next
        </button>
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
        <button onClick={() => (window.location.href = "/videoMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/divMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
