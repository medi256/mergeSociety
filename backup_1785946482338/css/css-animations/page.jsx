import Button from "@/app/button";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata = {
  title: "Animation in CSS - Enhance Your Web Designs",
  description:
    "Discover the power of CSS animations! Learn how to create dynamic visual effects and improve user experience with keyframe animations, properties, and practical examples.",
  keywords:
    "CSS animations, keyframes, web design, user experience, visual effects, CSS properties, interactive design",
  alternates: {
    canonical: "https://www.mergesociety.com/css/css-animations",
  },
  openGraph: {
    title: "Animation in CSS - Enhance Your Web Designs",
    description:
      "Unlock the potential of CSS animations to create visually stunning web designs that engage users and enhance interactivity.",
  },
};

const CSSAnimations = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <div className="lesson-container">
        <h1>Animation in CSS</h1>
        <p>
          Animation is a powerful CSS feature that allows you to bring your
          designs to life by defining a series of keyframes and specifying the
          timing and duration of the animation. It adds motion, interactivity,
          and visual appeal to your designs. In this section, we'll explore the
          fascinating world of animation and learn how to use it effectively in
          your CSS designs. Let's embark on this animation adventure!
        </p>

        <h2>Understanding Animation</h2>
        <p>
          Animation in CSS involves defining a set of keyframes that describe
          the start and end states of an animation, along with any intermediate
          steps. It allows you to create complex and visually appealing
          animations that engage and delight your users. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@keyframes slideIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.element {
  animation: slideIn 1s infinite alternate;
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we defined a keyframe animation named{" "}
          <code>slideIn</code>. The animation starts with an opacity of 0
          (invisible) and ends with an opacity of 1 (visible). We then applied
          the animation to the <code>.element</code> class, specifying a
          duration of 1 second, infinite repetition, and alternating direction.
        </p>

        <h3>Keyframes</h3>
        <p>
          Keyframes are the building blocks of CSS animations. They define the
          start and end states of an animation, along with any intermediate
          steps. Each keyframe specifies a percentage value that represents the
          progress of the animation. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@keyframes fadeIn {
  0% { opacity: 0; } /* Start state */
  100% { opacity: 1; } /* End state */
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we defined a keyframe animation named{" "}
          <code>fadeIn</code>. The animation starts with an opacity of 0
          (invisible) and ends with an opacity of 1 (visible). The
          <code>0%</code> and <code>100%</code> represent the start and end
          states of the animation, respectively.
        </p>

        <h3>Animation Properties</h3>
        <p>
          Once you've defined your keyframes, you can apply the animation to an
          element using the
          <code>animation</code> property. Here are the common properties you
          can use:
        </p>

        <ul>
          <li>
            <strong>animation-name:</strong> Specifies the name of the keyframe
            animation to apply.
          </li>
          <li>
            <strong>animation-duration:</strong> Defines the length of time the
            animation takes to complete.
          </li>
          <li>
            <strong>animation-timing-function:</strong> Specifies the easing
            function for the animation, such as <code>ease</code>,{" "}
            <code>ease-in</code>, or
            <code>ease-in-out</code>.
          </li>
          <li>
            <strong>animation-iteration-count:</strong> Determines how many
            times the animation repeats.
          </li>
          <li>
            <strong>animation-direction:</strong> Controls the direction of the
            animation, such as
            <code>normal</code>, <code>alternate</code>, or <code>reverse</code>
            .
          </li>
        </ul>

        <h2>Using Animation</h2>
        <p>
          Animation can be used in various ways to create visually appealing and
          functional designs. Let's explore some common use cases for animation:
        </p>

        <h3>Creating Visual Effects</h3>
        <p>
          Animation is commonly used to create visual effects, such as fading in
          or out, sliding, or bouncing elements. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.element {
  animation: fadeIn 0.5s ease-in-out;
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we defined a keyframe animation named{" "}
          <code>fadeIn</code> that fades in an element over 0.5 seconds with a
          smooth animation.
        </p>

        <h3>Adding Interactivity</h3>
        <p>
          Animation can be used to create interactive elements, such as buttons
          or menus, that respond to user interactions. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@keyframes buttonHover {
  0% { background-color: blue; }
  100% { background-color: green; }
}

.button:hover {
  animation: buttonHover 0.3s;
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we defined a keyframe animation named{" "}
          <code>buttonHover</code> that changes the background color of a button
          on hover.
        </p>

        <h3>Combining Multiple Animations</h3>
        <p>
          You can apply multiple animations to an element to create complex and
          dynamic effects. Here's an example:
        </p>

        <pre>
          <code>
            <SyntaxHighlighter language="CSS" style={docco}>
              {`
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
}

.element {
  animation: fadeIn 0.4s, slideDown 0.6s;
}
          `}
            </SyntaxHighlighter>
          </code>
        </pre>

        <p>
          In the code above, we defined two keyframe animations,{" "}
          <code>fadeIn</code> and
          <code>slideDown</code>, and applied them both to the{" "}
          <code>.element</code> class.
        </p>

        <h2>Benefits of Animation</h2>
        <p>Using animation offers several advantages for your designs:</p>

        <ul>
          <li>
            <strong>Visual Appeal:</strong> Animation allows you to create
            dynamic and visually appealing effects, making your designs more
            engaging and memorable.
          </li>
          <li>
            <strong>User Experience:</strong> Animation enhances the user
            experience by providing visual feedback and adding interactivity to
            your designs.
          </li>
          <li>
            <strong>Flexibility:</strong> Animation provides a wide range of
            options for creating complex and unique animations, giving you the
            flexibility to stand out.
          </li>
        </ul>

        <h2>Challenges of Animation</h2>
        <p>
          While animation is a powerful tool, it also comes with some
          challenges:
        </p>

        <ul>
          <li>
            <strong>Performance:</strong> Applying complex animations,
            especially on large elements or within loops, can impact
            performance. It's important to consider performance optimizations
            when using animation.
          </li>
          <li>
            <strong>Browser Support:</strong> While animation is well-supported
            by modern browsers, older browsers may not support all animation
            features. It's important to test your designs across different
            browsers and versions.
          </li>
        </ul>

        <h2>Practice Time!</h2>
        <p>
          Now it's time to put your knowledge into practice! Open your code
          editor and create a new HTML file. Let's explore the wonderful world
          of animation:
        </p>

        <ol>
          <li>
            Create a simple HTML structure with elements to serve as containers
            for your animation experiments.
          </li>
          <li>
            Define keyframe animations and apply them to elements to observe the
            animation effect.
          </li>
          <li>
            Experiment with different animation durations, delays, and easing
            functions to create unique animations.
          </li>
          <li>
            Refer to animation resources and tutorials to discover creative ways
            to use animation, such as creating complex animations, building
            interactive elements, or achieving subtle visual effects.
          </li>
        </ol>

        <p>
          Remember, animation is a powerful tool in CSS that allows you to bring
          your designs to life. Choose animation options that align with your
          design goals, ensure responsiveness, and create engaging interfaces.
          Happy coding and happy designing!
        </p>

        <Button whereToGo={"css-filters"} />
      </div>
    </div>
  );
};

export default CSSAnimations;
