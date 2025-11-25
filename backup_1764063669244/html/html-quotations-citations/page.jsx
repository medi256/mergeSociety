import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Using Quotations in HTML: Best Practices for Inline and Block Quotes",
  description:
    "Learn how to effectively use HTML elements like <q> and <blockquote> for quoting text. This tutorial covers when to use each element and provides examples for implementing inline and block-level quotations in your HTML.",
  keywords:
    "HTML quotations, HTML <q> element, HTML blockquote, HTML best practices, inline quotations, block-level quotations, HTML coding, semantic HTML, web development, accessible HTML",
  alternates: {
    canonical: "https://www.mergesociety.com/html/html-quotations-citations",
  },
  openGraph: {
    title:
      "Guide to HTML Quotations: Mastering <q> and <blockquote> for Clean Code | MergeSociety",
    description:
      "Understand how to properly use the <q> and <blockquote> elements in HTML for quoting text. This guide offers tips on choosing between inline and block-level quotes, along with practical coding examples.",
  },
};

const HTMLQuotation = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Quotations in HTML</h1>
        <p>
          Quotations can enhance your HTML content by providing additional
          context or emphasizing key points. HTML offers two types of
          quotations: <code> {`<q>`} </code> for inline quotations and{" "}
          <code>{`<blockquote>`}</code> for longer, block-level quotations.
        </p>

        <h3>
          The HTML <code>{`<q>`}</code> Element
        </h3>
        <p>
          The <code>{`<q>`}</code> element is used for inline quotations within
          a paragraph or block of text. It indicates a short quotation and
          automatically adds quotation marks around the enclosed text.
        </p>
        <blockquote>
          <p>
            "Inline quotations provide a concise way to incorporate short
            snippets of text directly within your content, maintaining
            readability and flow."
          </p>
          <p>
            <strong>Best Practice:</strong> Use the <code> {`<q>`} </code>{" "}
            element for brief quotations that fit naturally within your content.
            It helps to emphasize the quoted text without interrupting the flow
            of your paragraph.
          </p>
        </blockquote>

        <h5>
          Example of <code> {`<q>`} </code> Element:
        </h5>
        <p>To include an inline quotation in your HTML:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
<p>
  The author said
  <q>A journey of a thousand miles begins with a single step</q> 
  which is a famous proverb.
</p>
            `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h5>Output:</h5>
        <p>
          The author said{" "}
          <q>A journey of a thousand miles begins with a single step</q> which
          is a famous proverb.
        </p>
        <h3>
          The HTML <code> {`<blockquote>`} </code> Element
        </h3>
        <p>
          The <code> {`<blockquote>`} </code> element is used for longer,
          block-level quotations that span multiple lines. It visually sets the
          quoted text apart from the main content.
        </p>
        <blockquote>
          <p>
            "Block quotations offer a distinct way to present longer passages of
            text, such as excerpts from literature, speeches, or articles."
          </p>
          <p>
            <strong>Best Practice:</strong> Use the{" "}
            <code> {`<blockquote>`} </code> element for longer quotations that
            deserve special emphasis. It helps to create a visual break and
            highlight the quoted passage.
          </p>
        </blockquote>

        <h5>
          Example of <code> {`<blockquote>`} </code> Element:
        </h5>
        <p>To include a block-level quotation in your HTML:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="HTML" style={docco}>
              {`
          
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    dapibus nunc id metus pulvinar, vitae blandit dolor sagittis. In eget
    ligula nec mauris elementum volutpat. Proin at tortor purus.
  </p>
  <p>
    Nullam condimentum libero vel ligula semper tristique. Vivamus blandit
    tincidunt est, in vehicula purus varius at. Pellentesque habitant
    morbi tristique senectus et netus et malesuada fames ac turpis
    egestas.
  </p>
</blockquote>
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <h4>Output:</h4>
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dapibus nunc id metus pulvinar, vitae blandit dolor sagittis. In
            eget ligula nec mauris elementum volutpat. Proin at tortor purus.
          </p>
          <p>
            Nullam condimentum libero vel ligula semper tristique. Vivamus
            blandit tincidunt est, in vehicula purus varius at. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
        </blockquote>

        <Button whereToGo={"html-entities"} />
      </div>
    </div>
  );
};

export default HTMLQuotation;
