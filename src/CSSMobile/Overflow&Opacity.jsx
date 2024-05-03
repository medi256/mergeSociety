const Overflow = () => {
  return (
    <div className="comments-container">
      <h1>Overflow</h1>
      <p>In this tutorial, you will learn how to handle overflow in CSS.</p>

      <ol>
        <li>
          Introduction
          <ul>
            <li>
              {`
              Overflow occurs when the content of an element exceeds the dimensions set for it.`}
            </li>
            <li>This can happen both horizontally and vertically.</li>
          </ul>
        </li>
        <h2>Overflow Property:</h2>
        <p>
          The <code>overflow</code> property specifies how to handle content
          that overflows the boundaries of its container.
        </p>
        <pre>
          <code>
            {`
  .example {
    overflow: auto;
  }`}
          </code>
        </pre>

        <li>
          Examples
          <ul>
            <li>
              <strong>Overflow: Auto</strong>
              <p>
                This example shows scrollbars when content overflows the
                container.
              </p>
              <pre>
                <code>
                  {`
        <div style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
                <p>
                  This is a long content that will overflow the container.
                </p>
                <p>
                  This is a long content that will overflow the container.
                </p>
                <p>
                  This is a long content that will overflow the container.
                </p>
                <p>
                  This is a long content that will overflow the container.
                </p>
                <p>
                  This is a long content that will overflow the container.
                </p>
         </div>

                  `}
                </code>
              </pre>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  overflow: "auto",
                  border: "1px solid black",
                }}
              >
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
              </div>
            </li>
            <li>
              <strong>Overflow: Hidden</strong>
              <p>
                This example hides the content that overflows the container.
              </p>
              <pre>
                <code>
                  {`
         <div style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
          </div>

                  `}
                </code>
              </pre>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  overflow: "hidden",
                  border: "1px solid black",
                }}
              >
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
              </div>
            </li>
            <li>
              <strong>Overflow: Scroll</strong>
              <p>
                This example always shows scrollbars, even if content does not
                overflow initially.
              </p>
              <pre>
                <code>
                  {`
         <div style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
                  <p>
                    This is a long content that will overflow the container.
                  </p>
        </div>
   
                  `}
                </code>
              </pre>
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  overflow: "scroll",
                  border: "1px solid black",
                }}
              >
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
                <p style={{ margin: 0 }}>
                  This is a long content that will overflow the container.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Overflow .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/columnMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/opacityMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Overflow;

export const Opacity = () => {
  return (
    <div className="comments-container">
      <h1>Opacity</h1>
      <p>In this tutorial, you will learn how to use opacity in CSS.</p>

      <ol>
        <li>
          Introduction
          <ul>
            <li>
              {`
            Opacity refers to the transparency level of an element.`}
            </li>
            <li>
              It ranges from 0 (completely transparent) to 1 (completely
              opaque).
            </li>
          </ul>
        </li>
        <h2>Opacity Property:</h2>
        <p>
          The <code>opacity</code> property specifies the transparency level of
          an element.
        </p>
        <pre>
          <code>
            {`
  .example {
    opacity: 0.5;
  }`}
          </code>
        </pre>

        <li>
          Examples
          <ul>
            <li>
              <strong>Opacity: 0.5</strong>
              <p>
                This example sets the opacity of an element to 0.5, making it
                semi-transparent.
              </p>
              <pre>
                <code>
                  {`
        <div style={{ opacity: '0.5', border: '1px solid black' }}>
            <p>This is a semi-transparent content.</p>
        </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  opacity: "0.5",
                  border: "1px solid black",
                }}
              >
                <p>This is a semi-transparent content.</p>
              </div>
            </li>
            <li>
              <strong>Opacity: 0.2</strong>
              <p>
                This example sets the opacity of an element to 0.2, making it
                highly transparent.
              </p>
              <pre>
                <code>
                  {`
            <div style={{ opacity: '0.2', border: '1px solid black' }}>
               <p>This is a highly transparent content.</p>
            </div>
                  `}
                </code>
              </pre>
              <div
                style={{
                  opacity: "0.2",
                  border: "1px solid black",
                }}
              >
                <p>This is a highly transparent content.</p>
              </div>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Opacity .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/overFlowMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/outlineMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
