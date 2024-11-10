import Button from "@/app/button";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Videos in HTML: Embedding and Customizing Multimedia Content",
  description:
    "Learn how to embed and customize video content in HTML. Explore the <video> tag, video formats, autoplay, looping, and best practices for optimizing videos for the web.",
  keywords:
    "HTML, videos in HTML, embedding videos, web development, HTML tutorial, video formats, autoplay video, looping video, best practices for videos, video player customization",
  alternates: {
    canonical: "https://www.mergesociety.com/html/html-video",
  },
  openGraph: {
    title:
      "Videos in HTML: Embedding and Customizing Multimedia Content | MergeSociety",
    description:
      "Master the art of embedding videos in HTML. This lesson covers using the <video> tag, providing multiple formats, adding controls, autoplay, looping, and optimizing video content for the web.",
  },
};

const HTMLVideo = () => {
  return (
    <div className="lesson-container">
      <h1>Videos in HTML</h1>
      <p>
        Hello there! In this lesson, we'll be exploring videos - a powerful
        multimedia element that can bring your web pages to life. Videos can
        engage your users, convey complex information, and enhance the visual
        appeal of your website. Let's dive into the world of videos in HTML and
        learn how to embed and customize videos effectively.
      </p>

      <h2>Embedding Videos in HTML</h2>
      <p>
        {`In HTML, video is embedded using the <video> tag. The <video> tag is **not** a self-closing tag. This means it requires a closing tag (</video>) to properly define the audio element and its content. Here's the basic structure of embedding audio in HTML:`}
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<video src="video.mp4" controls>
  Your browser does not support the video element.
</video>

        `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
        
        `}
          </SyntaxHighlighter>
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
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
        
<video src="video.mp4" controls autoplay loop>
  Your browser does not support the video element.
</video>
`}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In the code above, we added the "autoplay" attribute to make the video
        start playing automatically when the web page loads. We also added the
        "loop" attribute to make the video repeat continuously until the user
        stops it.
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
        By default, the video player in HTML is a simple rectangular box with
        playback controls. However, you can customize the appearance of the
        video player using CSS styles. While we won't dive into CSS in this
        lesson, it's important to know that you can style the video player to
        match your website's design or create custom video players.
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
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<p>
 Your browser does not support video. Click here to download the video file.
</p>
              
              `}
              </SyntaxHighlighter>
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
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
<video controls width="300" height="200" src="video.mp4">
  <p>
    Your browser does not support video.
  </p>
</video>
              
              `}
              </SyntaxHighlighter>
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
          <strong>Optimize video file size:</strong> Large video files can
          significantly slow down your website's loading time. Use video editing
          tools to compress and optimize your video files without sacrificing
          quality.
        </li>
      </ul>

      <h2>Practice Time!</h2>
      <p>
        Now, let's put your knowledge into practice! Open your code editor and
        create a new HTML file. Experiment with embedding videos, providing
        different video formats, and customizing their appearance. Here's a
        simple exercise to get you started:
      </p>

      <ol>
        <li>
          Create a new HTML file and save it as "video.html" in your workspace
          folder.
        </li>
        <li>
          Embed a video file using the <code>{`<video> `}</code> tag. You can
          use a video file from your computer or a publicly available video file
          on the web. For example,
          <br />
          <pre>
            <code>
              <SyntaxHighlighter language="HTML" style={docco}>
                {`
            
<video src="video.mp4" controls>
 Your browser does not support video.
</video>
            `}
              </SyntaxHighlighter>
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
        In this lesson, we've explored videos in HTML, including how to embed
        videos, provide multiple video formats, autoplay and loop videos, and
        more. Videos can enhance the user experience on your website, adding a
        dynamic and engaging element. Remember to use videos wisely, follow best
        practices, and always test your videos to ensure they play correctly on
        different devices and browsers. In the next lesson, we'll move on to
        creating forms in HTML, allowing users to input data and interact with
        your website. Stay tuned, and happy coding!
      </p>

      <Button whereToGo={"html-iframes"} />
    </div>
  );
};

export default HTMLVideo;
