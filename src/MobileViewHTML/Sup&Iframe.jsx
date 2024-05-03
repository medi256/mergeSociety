const Sup = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;sup&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;sup&gt;</code> element is used to define superscript text
        in HTML. Superscript text appears half a character above the normal line
        and is typically used for footnotes, mathematical exponents,
        abbreviations, and other situations where smaller text is required above
        the baseline.
      </p>
      <h3>Example:</h3>
      <p>
        The mathematical expression{" "}
        <code>
          x<sup>2</sup>
        </code>{" "}
        represents {`"x squared"`} and uses the <code>&lt;sup&gt;</code> element
        for the superscript {`"2".`}
      </p>
      <pre>
        <code>
          {`
          <p>
            The mathematical expression x<sup>2</sup> represents "x squared" and
            uses the <sup> element for the superscript "2".
          </p>
          `}
        </code>
      </pre>
      <p>
        Output: The mathematical expression x<sup>2</sup> represents{" "}
        {`"x squared"`}
        and uses the <sup>2</sup> element for the superscript {`"2".`}
      </p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;sup&gt;</code> element does not have any specific
        attributes.
      </p>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;sup&gt;</code> element to represent superscript text
          in HTML, such as footnotes, mathematical exponents, and abbreviations.
        </li>
        <li>
          Avoid using the <code>&lt;sup&gt;</code> element for purely
          presentational purposes; ensure that superscript text carries semantic
          meaning.
        </li>
        <li>
          Ensure that superscript text is appropriately styled for readability
          and accessibility, especially for users with visual impairments.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/subMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/iframeMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Sup;
export const Iframe = () => {
  return (
    <div className="comments-container">
      <h2>
        The HTML <code>&lt;iframe&gt;</code> Element
      </h2>
      <p>
        The <code>&lt;iframe&gt;</code> element is used to embed another
        document within the current HTML document. It allows you to display
        content from another URL or source inline on your webpage.
      </p>
      <h3>Example 1: Embedding a Google Map</h3>
      <p>
        You can embed a Google Map using an <code>&lt;iframe&gt;</code> element:
      </p>
      <pre>
        <code>
          {`
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4848967822143!2d-74.00996668573602!3d40.70595984213321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e534de7bcb%3A0x6a07709d14af81f3!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1648661886851!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          `}
        </code>
      </pre>
      <p>Output: (A Google Map embedded within the webpage)</p>
      <h3>Example 2: Embedding a Video</h3>
      <p>
        You can embed a YouTube video using an <code>&lt;iframe&gt;</code>{" "}
        element:
      </p>
      <pre>
        <code>
          {`
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          `}
        </code>
      </pre>
      <p>Output: (A YouTube video embedded within the webpage)</p>
      <h3>Attributes:</h3>
      <p>
        The <code>&lt;iframe&gt;</code> element supports various attributes,
        including:
      </p>
      <ul>
        <li>
          <code>src</code>: Specifies the URL of the content to be embedded.
        </li>
        <li>
          <code>width</code> and <code>height</code>: Specifies the dimensions
          of the embedded content.
        </li>
        <li>
          <code>allowfullscreen</code>: Allows the content to be displayed in
          fullscreen mode.
        </li>
        <li>
          <code>frameborder</code>: Specifies whether to display a border around
          the iframe.
        </li>
        <li>
          <code>allow</code>: Specifies a set of permissions for the content
          within the iframe.
        </li>
        <li>
          <code>loading</code>: Specifies the loading behavior of the iframe.
        </li>
        <li>and more...</li>
      </ul>
      <h3>Usage Guidelines:</h3>
      <ul>
        <li>
          Use the <code>&lt;iframe&gt;</code> element to embed content from
          another source, such as maps, videos, or external websites, within
          your HTML document.
        </li>
        <li>
          Ensure that the content you embed is secure and trustworthy, as it can
          potentially execute scripts and access cookies in the context of your
          webpage.
        </li>
        <li>
          Consider the dimensions and aspect ratio of the embedded content to
          ensure proper display and responsiveness.
        </li>
        <li>
          Provide alternative content or fallback options for users whose
          browsers do not support iframes or who have disabled iframe rendering.
        </li>
        <li>
          Be cautious when embedding content from external sources, as it may
          affect the performance and security of your webpage.
        </li>
        <li>
          Ensure that embedded content complies with applicable laws,
          copyrights, and usage policies.
        </li>
      </ul>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/supMobile")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/faviconMobile")}>
          Next
        </button>
      </div>
    </div>
  );
};
