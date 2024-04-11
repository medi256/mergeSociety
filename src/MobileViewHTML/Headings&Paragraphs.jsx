import { useNavigate } from "react-router-dom";

const Headings = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Headings in HTML</h1>
      <p>
        Headings are fundamental elements in HTML for structuring and organizing
        content. They play a crucial role in creating a well-organized and
        readable webpage.
      </p>
      <p>
        Headings are used to define the titles and subtitles of sections within
        a webpage. HTML provides six levels of headings, from
        <code> &lt;h1&gt;Heading 1 &lt;/h1&gt;</code> (most important) to
        <code> &lt;h6&gt;Heading 6 &lt;/h6&gt;</code> (least important). The
        heading levels represent a hierarchical order, where
        <code>&lt;h1&gt; 1 &lt;/h1&gt; </code> the main title, and subsequent
        headings represent sub-sections.
      </p>
      <h2>Examples</h2>
      <h4>HTML code</h4>
      <pre>
        <code>
          {`
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
          `}
        </code>
      </pre>
      <h4>Output</h4>
      <pre>
        <h1 className="out">Heading 1</h1>
        <h2 className="out">Heading 2</h2>
        <h3 className="out">Heading 3</h3>
        <h4 className="out">Heading 4</h4>
        <h5 className="out">Heading 5</h5>
        <h6 className="out">Heading 6</h6>
      </pre>
      <p>
        Headings are container tags, meaning they have both an opening and
        closing tag.
      </p>
      <p>
        As you can see,<code> &lt;h1&gt; &lt;/h1&gt;</code> is the boldest and
        largest in size, while <code>&lt;h6&gt; &lt;/h6&gt;</code> is the least
        bold and the smallest in size.
      </p>
      <h4>Additional Information:</h4>
      <p>
        {`
        It's important to note that headings serve multiple purposes beyond visual
        styling. They also play a significant role in:`}
      </p>
      <p>
        <strong>Accessibility:</strong> Screen readers use headings to help
        visually impaired users navigate web content effectively.
      </p>
      <p>
        <strong>SEO (Search Engine Optimization):</strong>{" "}
        {`Properly structured
        headings improve search engine rankings by helping search engines
        understand the content's hierarchy and importance.`}
      </p>
      <p>
        <strong>Content Organization:</strong> Headings provide a clear
        structure to your web page, making it more user-friendly and organized.
      </p>
      <p>
        <strong>Best Practice:</strong> Use only one
        <code> &lt;h1&gt;Heading 1 &lt;/h1&gt;</code>
        {` heading per page to avoid
        confusion for search engines and maintain a clear focus on your page's
        main topic. When the browser renders your HTML, only the content within
        the headings will display.`}
      </p>
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Headings;

export const Paragraphs = () => {
  const navigate = useNavigate();

  return (
    <div className="comments-container">
      <h1>Paragraphs in HTML</h1>
      <p>
        Paragraphs are essential elements in HTML for organizing and presenting
        text content. They are used to group together related sentences and
        create logical divisions within a webpage.
      </p>
      <p>
        In HTML, paragraphs are defined using the <code>&lt;p&gt;</code> tag.
        Each paragraph starts with an opening <code>&lt;p&gt;</code> tag and
        ends with a closing <code>&lt;/p&gt;</code> tag.
      </p>
      <h2>Examples</h2>
      <p>{`Here's an example of HTML code with paragraphs: `}</p>
      <pre>
        <code>
          {`
  <p>This is the first paragraph.</p>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph.</p>
          `}
        </code>
      </pre>
      <p>Output:</p>
      <p>This is the first paragraph.</p>
      <p>This is the second paragraph.</p>
      <p>This is the third paragraph.</p>
      <p>
        Paragraphs allow you to structure your content in a readable and
        organized manner. They help break down large blocks of text into
        manageable sections, making it easier for users to consume your content.
      </p>
      <p>
        Additionally, using paragraphs improves accessibility by enabling screen
        readers to navigate through the content more effectively, enhancing the
        overall user experience for individuals with visual impairments.
      </p>
      <p>
        In summary, paragraphs are a fundamental component of HTML for
        structuring text content, improving readability, and enhancing
        accessibility.
      </p>
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
