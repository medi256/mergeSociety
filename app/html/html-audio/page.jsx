import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Audio in HTML: Embedding and Customizing Sound on Web Pages",
  description:
    "Learn how to embed audio in HTML using the <audio> tag. Explore how to provide multiple formats, customize playback controls, and follow best practices for incorporating sound into web pages.",
  keywords:
    "HTML, audio in HTML, embedding audio, web development, HTML tutorial, audio formats, autoplay audio, looping audio, best practices for audio, sound on web pages",
  alternates: {
    canonical: "https://www.mergesociety.com/html/html-audio",
  },
  openGraph: {
    title: "Audio in HTML: Embedding and Customizing Sound | MergeSociety",
    description:
      "This lesson explores how to embed and customize audio on web pages using HTML. Learn how to work with the <audio> tag, include multiple formats, and ensure accessibility.",
  },
};

const HTMLAudio = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>How to add Audio in HTML</h1>
        <p>
          Hello there! In this lesson, we'll be exploring audio - another
          exciting multimedia element that you can incorporate into your web
          pages. Audio allows you to embed sound files, music, or voice
          recordings, adding an extra layer of interactivity and engagement to
          your website. Let's dive into the world of audio in HTML and learn how
          to embed and customize audio effectively.
        </p>

        <h2>Embedding Audio in HTML</h2>
        <p>
          In HTML, audio is embedded using the <code>{`<audio>`}</code> tag. The{" "}
          <code>{`<audio>`}</code> tag is **not** a self-closing tag. This means
          it requires a closing tag (<code>{`</audio>`}</code>) to properly
          define the audio element and its content.{" "}
          {`Here's the basic structure of
        embedding audio in HTML:`}
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<audio src="audio.mp3" controls>
  Your browser does not support the audio element.
</audio>
        
        `}
            </SyntaxHighlighter>
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
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
        
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we included two <code>{`<source>`}</code> tags
          within the
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
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<audio src="audio.mp3" controls autoplay loop>
  Your browser does not support the audio element.
</audio>
        
        `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we added the "autoplay" attribute to make the audio
          start playing automatically when the web page loads. We also added the
          "loop" attribute to make the audio repeat continuously until the user
          stops it.
        </p>
        <p>
          Don't be surprised by attributes that don't have values. Some
          attributes in HTML are optional and don't require a value to function
          properly. We'll encounter these throughout our coding journey, so keep
          that in mind!
        </p>

        <p>You can also watch a video on how to upload from your computer</p>
        <video controls width="300px">
          <source src="https://res.cloudinary.com/dhgjhspsp/video/upload/v1712418645/audioUpload_guktfk.mov" />
        </video>

        <h2>Customizing Audio Player Appearance</h2>
        <p>
          By default, the audio player in HTML is a simple rectangular box with
          playback controls. However, you can customize the appearance of the
          audio player using CSS styles. While we won't dive into CSS in this
          lesson, it's important to know that you can style the audio player to
          match your website's design or create custom audio players.
        </p>

        <h2>Best Practices for Using Audio</h2>
        <ul>
          <li>
            <strong>Provide alternative content:</strong> Not all users will
            have audio enabled or may prefer to consume content without sound.
            Provide alternative content using the <code>{`<p> `}</code> tag
            within the <code>{`<audio>`}</code>
            tag. For example,
            <br />
            <pre>
              <code>
                <SyntaxHighlighter language="HTML" style={docco}>
                  {`
<p>
  Your browser does not support audio.
  Click here to download the audio file. 
</p>
          `}
                </SyntaxHighlighter>
              </code>
            </pre>
            .
          </li>
          <li>
            <strong>Use autoplay sparingly:</strong> Autoplaying audio can be
            disruptive to users, especially if they are browsing in a quiet
            environment. Use autoplay only when it makes sense in the context of
            your web page.
          </li>
          <li>
            <strong>Provide clear audio controls:</strong> Ensure that users
            have easy access to playback controls, such as play, pause, and
            volume adjustment. This is especially important for accessibility.
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
          Now, let's put your knowledge into practice! Open your code editor and
          create a new HTML file. Experiment with embedding audio, providing
          different audio formats, and customizing their appearance. Here's a
          simple exercise to get you started:
        </p>

        <ol>
          <li>
            Create a new HTML file and save it as "audio.html" in your workspace
            folder.
          </li>
          <li>
            Embed an audio file using the <code>{`<audio> `}</code> tag. You can
            use an audio file from your computer or a publicly available audio
            file on the web. For example,
            <br />
            <pre>
              <code>
                <SyntaxHighlighter language="HTML" style={docco}>
                  {`
              
<audio src="audio.mp3" controls>
 Your browser  does not support audio.
</audio>
              `}
                </SyntaxHighlighter>
              </code>
            </pre>
          </li>
          <li>
            Try providing multiple audio formats using the{" "}
            <code>{`<source>`}</code> tag. Experiment with different audio files
            and observe how the audio player behaves.
          </li>
          <li>
            Customize the appearance of the audio player using CSS styles (if
            you have knowledge of CSS). Otherwise, focus on understanding the
            basic structure of the <code>{`<audio>`}</code> tag.
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          In this lesson, we've explored audio in HTML, including how to embed
          audio, provide multiple audio formats, autoplay and loop audio, and
          more. Audio can enhance the user experience on your website, adding an
          extra layer of interactivity and engagement. Remember to use audio
          wisely, follow best practices, and always test your audio files to
          ensure they play correctly on different devices and browsers. In the
          next lesson, we'll move on to video and learn how to embed videos in
          your HTML documents. Stay tuned, and happy coding!
        </p>

        <Button whereToGo={"html-video"} />
      </div>
    </div>
  );
};

export default HTMLAudio;
