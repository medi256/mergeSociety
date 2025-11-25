import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";

export const metadata = {
  title: "Mastering CSS Media Queries for Responsive Design",
  description:
    "Learn how to use CSS media queries to create responsive web designs that look great on any device. This comprehensive guide covers syntax, practical examples, and best practices for implementing media queries effectively.",
  keywords:
    "CSS media queries, responsive design, web development, media query examples, CSS tutorials, mobile-first design",

  alternates: {
    canonical: "https://www.mergesociety.com/css/css-media-queries",
  },

  openGraph: {
    title: "Mastering CSS Media Queries for Responsive Design",
    description:
      "Unlock the secrets of CSS media queries to build responsive websites. Explore syntax, examples, and effective strategies for adapting designs across devices.",
  },
};

const CSSMedia = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>CSS Media Query</h1>
        <p>
          When designing a website, it's crucial to ensure your content looks
          good on all screen sizes.
        </p>
        <p>
          In this article, I will talk about how to use responsive design and
          media queries to make this happen. I will also provide code examples
          for media queries using max and min screen widths.
        </p>
        <h2>What is Responsive Design?</h2>
        <p>
          Responsive Design is the practice of making sure your content looks
          good on all screen sizes. Everything in the website including layouts,
          fonts and images should automatically adapt to the user's device.
        </p>
        <p>
          In the early 2000's, developers focused on making sure their websites
          looked good on larger screen sizes like laptops and desktop computers.
          In today's world, you have to consider devices like mobile phones,
          tablets, and even watches.
        </p>
        <p>An important component of responsive design are media queries.</p>
        <h2>What is a Media Query?</h2>
        <p>
          In CSS, a media query is used to apply a set of styles based on the
          browser's characteristics including width, height, or screen
          resolution.
        </p>
        <p>
          For large screen sizes like desktops, we can see a search menu in the
          upper left-hand corner.
        </p>

        <Image
          width={500}
          height={300}
          layout="responsive"
          src="https://www.freecodecamp.org/news/content/images/size/w1600/2021/10/Screen-Shot-2021-10-19-at-7.50.41-PM.png"
          alt="demo"
        />

        <p>
          But on mobile devices, there is no search menu and we only have the
          menu options and sign-in button.
        </p>
        <Image
          width={500}
          height={300}
          layout="responsive"
          src="https://www.freecodecamp.org/news/content/images/2021/10/Screen-Shot-2021-10-19-at-7.54.59-PM.png"
          alt="demo"
        />

        <h2>Basic syntax of a media query</h2>
        <p>Here is the basic syntax for a media query in CSS:</p>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@media media-type (media-feature){
  /*Styles go here*/
}
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>Let's break down what this syntax means.</p>
        <p>
          The @media is a type of At-rule in CSS. These rules will dictate what
          the CSS will look like based on certain conditions.
        </p>
        <p>
          The media type refers to the category of media for the device. The
          different media types include all, print, screen, and speech.
        </p>
        <ol>
          <li>all - works for all devices</li>
          <li>
            print - works for devices where the media is in print preview mode
          </li>
          <li>screen - works for devices with screens</li>
          <li>
            speech - works for devices like screen readers where the content is
            read out loud to the user
          </li>
        </ol>

        <p>
          <i>
            Except when using the not or only logical operators, the media type
            is optional and the all type is implied.
          </i>{" "}
        </p>

        <p>
          You can choose to omit the media type and use this syntax instead.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@media (media-feature){
  /*Styles go here*/
}
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The media feature refers to the characteristics of the browser which
          include height and width of the viewport, orientation, or
          aspect-ratio. For a complete list of the possible media features,
          please visit the{" "}
          <a href="https://developer.mozilla.org/en-US/ ">MDN docs.</a>
        </p>
        <p>
          For this article, we are going to focus on the width media feature.
        </p>

        <p>
          If you wanted to create more complex media queries, then you can use
          logical operators.
        </p>
        <ul>
          <li>
            and - This operator is used to join multiple media features. If all
            of the media features are true then the styles inside the curly
            braces will be applied to the page.
          </li>
          <li>
            not - This operator reverses a true query into a false and a false
            query into a true.
          </li>
          <li>
            , (comma) - This operator will separate multiple media features by
            commas and apply the styles inside the curly brace if one of the
            conditions is true.
          </li>
        </ul>

        <h2>Media query examples</h2>
        <p>
          Let's take a look at a few examples that show how to use media queries
          in CSS.
        </p>
        <p>
          In this first example, we want the background color to change to blue
          when the width of the device is 600px or less.
        </p>
        <p>
          In the CSS, we want to add a (max-width: 600px) for the media query
          which tells the computer to target devices with a screen width of
          600px and less.
        </p>
        <p>
          Inside the media query, we change the background styles for the body
          to background-color: #87ceeb;.
        </p>

        <h4>Here is the complete media query:</h4>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@media (max-width: 600px) {
  body {
    background-color: #87ceeb;
  }
}
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <Image
          width={500}
          height={300}
          layout="responsive"
          src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/10/Screen-Shot-2021-10-23-at-1.24.25-PM.png"
          alt="demo"
        />
        <p>
          In this second example, we want to change the background color from
          blue to red if the device has a width between 600 and 768px. We can
          use the and operator to accomplish this.
        </p>
        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@media (min-width: 600px) and (max-width: 768px) {
  body {
    background-color: #de3163;
  }
}
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          When you test it out, you should see that the background color is blue
          if the width of the screen is below 600px or above 768px.
        </p>

        <h2>
          Should you write separate media queries for every single device on the
          market?
        </h2>
        <p>The short answer to that question is no.</p>
        <p>
          There are way too many devices out on the market to try to write a
          media query for each device. Technology is always changing which means
          new devices will always be coming out.
        </p>
        <p>
          It is more important that you target a range of devices using media
          queries. In Cem Eygi's article, he lists out some common breakpoints
          used for media queries.
        </p>
        <ul>
          <li>320px-480px: Mobile devices</li>
          <li>481px—768px: iPads, Tablets</li>
          <li>769px—1024px: Small screens, laptops</li>
          <li>1025px—1200px: Desktops, large screens</li>
          <li>1201px and more— Extra large screens, TV</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Responsive Design is the practice of making sure your content looks
          good on all screen sizes. Everything in the website including layouts,
          fonts, and images should automatically adapt to the user's device.
        </p>
        <p>
          In CSS, a media query is used to apply a set of styles based on the
          browser's characteristics including width, height, or screen
          resolution.
        </p>
        <p>Here is the basic syntax for a media query in CSS.</p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@media media-type (media-feature){
  /*Styles go here*/
}
    `}
            </SyntaxHighlighter>
          </code>
        </pre>
        <p>
          The media type is optional unless you are using the not or only
          logical operators. If the media type is omitted then the media query
          will target all devices.
        </p>

        <p>
          For more details, check out the{" "}
          <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
          Media queries .
        </p>

        <Button whereToGo={"css-universal-selector"} />
      </div>
    </div>
  );
};

export default CSSMedia;
