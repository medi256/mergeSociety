import { InArticleAdUnit } from "../AdUnit";

const Video = () => {
  return (
    <div className="comments-container">
      <InArticleAdUnit />
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
      <InArticleAdUnit />
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
      <InArticleAdUnit />
      <h1>Forms in HTML</h1>
      <p>
        {`Welcome back, aspiring web developer! In this lesson, we'll dive deep
        into the world of forms - one of the most interactive and dynamic
        components of web pages. Forms allow users to input data, submit
        information, and interact with your website in a variety of ways. Let's
        explore the different types of input fields, form elements, and best
        practices for creating effective forms.`}
      </p>

      <h2>Creating a Basic Form in HTML</h2>
      <p>
        In HTML, forms are created using the <code>{`<form>`}</code> tag. The{" "}
        <code>{`<form>`}</code>{" "}
        {` tag
        acts as a container for the form elements, such as input fields, text
        areas, checkboxes, and more. Here's the basic structure of a form in
        HTML:`}
      </p>
      <pre>
        <code>
          {`
<form>
  <label for="name">Name:</label>
  <input type="text" id="name">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email">
  <br>
  <button type="submit">Submit</button>
</form>
        
          `}
        </code>
      </pre>

      <p>
        In the code above, the <code>{`<form>`}</code> tag defines the form.
        Within the form, we have labels, input fields, and a submit button. The{" "}
        <code>{`<label>`}</code> tag is used to associate a label with an input
        field, providing a descriptive name or instruction for the user. The{" "}
        <code>{`<input>`}</code> tag is used to create input fields of different
        types, such as text fields, email fields, checkboxes, and more.
      </p>
      <h2>{`<br>`}</h2>
      <p>
        You may have noticed the <code>{`<br> `}</code>{" "}
        {` tag in our form.
        However, this tag is not actually part of forms. It's simply used to
        break the line and display each input element on a separate line. While
        input elements are inline by default, meaning they don't occupy the full
        available width, they will still appear on the same line until the total
        width is exceeded. In contrast, paragraphs are block elements, meaning
        they take up the entire available width `}
        . Even if you have multiple paragraphs, each one will occupy its own
        line. We added the <code>{`<br>`}</code> tags to create a line break and
        ensure each input appears on a separate line. If you remove these tags,{" "}
        {` you'll see that
        the inputs flow onto the same line.`}
      </p>
      <p>
        {`We will also dive into inline and block level elements later in this
  tutorial, don't focus much on it because you will get confused, focus
  on forms in this lesson.`}
      </p>

      <p>
        So, {` don't `} be confused by the <code>{`<br> `}</code> tag.{" "}
        {` It's simply
        there to help us...`}
      </p>

      <h2>Types of Input Fields</h2>
      <p>
        The <code>{`<input>`}</code> tag offers a wide range of input types,
        each serving a specific purpose. Here are some commonly used input
        types:
      </p>

      <ul>
        <li>
          <strong>Text Fields:</strong>{" "}
          {`Used for single-line text input. The "type"
          attribute is set to "text." For example,`}
          <br />
          <pre>
            <code>
              {`
<input type="text" id="name">
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Email Fields:</strong>{" "}
          {`Used for inputting email addresses. The
          "type" attribute is set to "email." For instance,`}
          <br />
          <pre>
            <code>
              {`
              
<input type="email" id="email">
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Password Fields:</strong>{" "}
          {`Used for inputting passwords. The
          "type" attribute is set to "password." For example,`}
          <br />
          <pre>
            <code>
              {`
              
<input type="password" id="password">
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Checkboxes:</strong>{" "}
          {`Used for selecting one or more options from
          a list. The "type" attribute is set to "checkbox." For instance,`}
          <br />
          <pre>
            <code>
              {`
<input type="checkbox" id="option1">
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Radio Buttons:</strong>{" "}
          {`Used for selecting a single option from
          a list. The "type" attribute is set to "radio." For example,`}
          <br />
          <pre>
            <code>
              {`
<input type="radio" id="option1">
              
              `}
            </code>
          </pre>
        </li>
      </ul>

      <p>
        {`Each input type has its own unique behavior and appearance. You can
        customize the input fields using attributes like "placeholder," "value,"
        "required," and more.`}
      </p>
      <InArticleAdUnit />
      <h2>Input Field Attributes</h2>
      <p>
        There are several attributes that you can use with the{" "}
        <code>{`<input>`}</code> tag to customize the input fields:
      </p>

      <ul>
        <li>
          <strong>Placeholder:</strong>{" "}
          {`The "placeholder" attribute specifies a
          short hint or instruction that appears in the input field before the
          user enters a value. For example,`}
          <br />
          <pre>
            <code>
              {`
              
<input type="text" placeholder="Enter your name">
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Value:</strong>{" "}
          {`The "value" attribute sets the initial value of
          the input field. For example,`}
          <br />
          <pre>
            <code>
              {`
<input type="text" value="John Doe">
              
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Required:</strong>{" "}
          {`The "required" attribute specifies that the
          input field is mandatory and must be filled out before submitting the
          form. For example,`}
          <br />
          <pre>
            <code>
              {`
              
<input type="text" required>
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Minlength and Maxlength:</strong>{" "}
          {`The "minlength" and "maxlength"
          attributes specify the minimum and maximum length of the input field,
          respectively. For example,`}
          <br />
          <pre>
            <code>
              {`
<input type="text" minlength="5" maxlength="20">
              
              `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Other Form Elements</h2>
      <p>
        In addition to input fields, there are other form elements that you can
        use within a form:
      </p>

      <ul>
        <li>
          <strong>Textareas:</strong> Used for multi-line text input. The
          <code>{`<textarea>`}</code> tag is used to create a text area. For
          example,
          <br />
          <pre>
            <code>
              {`
                
<textarea id="message"></textarea>
                `}
            </code>
          </pre>
          <p>
            The <code>&lt;textarea&gt;</code>{" "}
            {`has the "cols" and "rows"
            attributes which you can use to control the columns and rows of
            input it should have. For example:`}
          </p>
          <pre>
            <code>
              {`
<textarea col="30" rows="10">Write something</textarea>
              `}
            </code>
          </pre>
          <p>
            Now the text {` "Write something" `} above will display like a hint
            in the text field. It can be used as the placeholder in{" "}
            <code>&lt;input&gt;</code> elements.
          </p>
        </li>
        <li>
          <strong>Dropdown Menus:</strong> Used for selecting one or more
          options from a list. The <code>{`<select>`}</code> tag is used to
          create a dropdown menu. For instance,
          <br />
          <pre>
            <code>
              {`
<select id="color">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
            
              `}
            </code>
          </pre>
        </li>
        <li>
          <strong>Buttons:</strong> Used for triggering actions, such as
          submitting the form or resetting the input fields. The{" "}
          <code>{`<button>`}</code>
          tag is used to create buttons. For example,
          <pre>
            <code>
              {`
<button type="submit">Submit</button>
              
              `}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Form Validation</h2>
      <p>
        {`Form validation is the process of checking the user's input for accuracy
        and completeness before submitting the form. You can use HTML5 form
        validation attributes to set rules for input fields, such as required
        fields, minimum and maximum lengths, and specific data types. Here's an
        example:`}
      </p>
      <pre>
        <code>
          {`
<input type="text" id="username" required minlength="5" maxlength="20">
        `}
        </code>
      </pre>

      <p>
        {`In the code above, we added the "required" attribute to make the input
        field mandatory, the "minlength" attribute to set a minimum length of 5
        characters, and the "maxlength" attribute to set a maximum length of 20
        characters.`}
      </p>
      <InArticleAdUnit />
      <h2>Handling Form Submissions</h2>
      <p>
        When users submit a form, you need to handle the submitted data.{" "}
        {` You can
        use the "action"`}{" "}
        attribute on the <code>{`<form>`}</code> tag to specify a URL where the
        form data should be sent. You can also use JavaScript to capture the
        form data and send it to a server or process it on the client side.
      </p>
      <pre>
        <code>
          {`
<form action="submit.php" method="post">
  <!-- Your form content goes here -->
</form>
        
          `}
        </code>
      </pre>

      <p>
        {`In the code above, we added the "action" attribute to specify the URL where
        the form data should be sent, and the "method" attribute to specify the
        HTTP method (such as "post" or "get").`}
      </p>

      <h2>Best Practices for Using Forms</h2>
      <ul>
        <li>
          <strong>Use descriptive labels:</strong> Labels should clearly
          indicate what information is expected in each input field.
        </li>
        <li>
          <strong>Provide input hints:</strong> Use placeholder text or
          instructions to guide users on what to enter in each field.
        </li>
        <li>
          <strong>Validate user input:</strong> Use form validation to ensure
          that users provide valid and complete information.
        </li>
        <li>
          <strong>Test your forms:</strong> Always test your forms across
          different browsers and devices to ensure they work correctly.
        </li>
        <li>
          <strong>Protect user privacy:</strong> If your form collects sensitive
          information, ensure that you have proper security measures in place,
          such as HTTPS encryption.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        {`Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with creating forms, adding different
        input types, and validating user input. Here's a simple exercise to get
        you started:`}
      </p>

      <ol>
        <li>
          {`Create a new HTML file and save it as "forms.html" in your workspace
          folder.`}
        </li>
        <li>
          {`Create a basic form with input fields for name, email, and password.
          Use placeholder text and the "required" attribute. For example,`}
          <br />
          <pre>
            <code>
              {`
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter your name" required>
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter your email" required>
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" placeholder="Enter your password" required>
  <br>
  <button type="submit">Submit</button>
</form>
            
              `}
            </code>
          </pre>
        </li>
        <li>
          Try adding other form elements, such as <code>{`<textarea>`}</code> or
          <code>{`<select>`}</code> , to create more complex forms.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        {`In this lesson, we've explored the world of forms in HTML, including the
        different types of input fields, form elements, input field attributes,
        form validation, and form submissions. Forms play a crucial role in
        interactive websites, allowing users to input data and interact with
        your website. Remember to use forms wisely, follow best practices, and
        always test your forms to ensure a smooth user experience. In the next
        lesson, we'll move on to creating Div in HTML. Stay tuned, and happy
        coding!`}
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "video")}>back</button>
        <button onClick={() => (window.location.href = "div")}>Next</button>
      </div>
    </div>
  );
};
