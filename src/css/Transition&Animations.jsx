const Transition = () => {
  return (
    <div className="comments-container">
      <h1>Understanding CSS Transition</h1>
      <p>
        CSS transitions allow you to smoothly animate changes in CSS properties
        over a specified duration. {`It's`} like adding a touch of magic to your
        webpage!
      </p>

      <h2>What is Transition?</h2>
      <p>
        With CSS transitions, you can smoothly animate changes in CSS
        properties, such as color, size, position, and more. These animations
        occur over a specified duration, making your webpage more interactive
        and engaging.
      </p>

      <h2>Features of Transition</h2>

      <h3>Simple Implementation</h3>
      <p>
        Implementing transitions in CSS is simple and requires minimal code. You
        only need to specify the CSS properties you want to animate and the
        duration of the animation.
      </p>

      <h3>Support for Multiple Properties</h3>
      <p>
        CSS transitions allow you to animate multiple properties simultaneously.
        You can animate changes in color, size, position, and more, all within
        the same transition.
      </p>

      <h3>Easing Functions</h3>
      <p>
        Transition animations can use easing functions to control the speed of
        the animation over time. Easing functions provide different acceleration
        and deceleration effects, such as ease-in, ease-out, ease-in-out, and
        more.
      </p>

      <h2>Benefits of Transition</h2>
      <p>
        Using CSS transitions enhances the user experience by providing smooth
        and visually appealing animations. They add polish and professionalism
        to your webpage, making it more engaging and interactive.
      </p>

      <h2>When to Use Transition</h2>
      <p>
        CSS transitions are ideal for adding subtle animations to elements on
        your webpage, such as hover effects, button animations, and menu
        transitions. {`They're`} also useful for creating loading animations and
        other dynamic visual effects.
      </p>

      <h2>Transition Properties</h2>

      <h3>transition-property</h3>
      <p>
        The <code>transition-property</code> property specifies which CSS
        properties should be animated during the transition. You can specify
        multiple properties separated by commas.
      </p>
      <pre>
        <code>
          {`
.button {
  background-color: blue;
  transition-property: background-color, color;
}`}
        </code>
      </pre>

      <h3>transition-duration</h3>
      <p>
        The <code>transition-duration</code> property specifies the duration of
        the transition animation in seconds (s) or milliseconds (ms).
      </p>
      <pre>
        <code>
          {`
.button {
  background-color: blue;
  transition-duration: 0.5s;
}`}
        </code>
      </pre>

      <h3>transition-timing-function</h3>
      <p>
        The <code>transition-timing-function</code> property specifies the
        easing function to be used during the transition. You can choose from
        various predefined easing functions or define custom cubic-bezier
        functions.
      </p>
      <pre>
        <code>
          {`
.button {
  background-color: blue;
  transition-timing-function: ease-in-out;
}`}
        </code>
      </pre>

      <h3>transition-delay</h3>
      <p>
        The <code>transition-delay</code> property specifies a delay before the
        transition animation starts. This can be useful for creating staggered
        animations or adding a pause before an animation begins.
      </p>
      <pre>
        <code>
          {`
.button {
  background-color: blue;
  transition-delay: 0.2s;
}`}
        </code>
      </pre>

      <h2>Examples</h2>

      <h3>Button Hover Effect</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 5px;
      transition-property: background-color, color;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
    .button:hover {
      background-color: darkblue;
      color: lightblue;
    }
  </style>
</head>
<body>
  <button class="button">Hover Me</button>
</body>
</html>`}
        title="Button Hover Effect"
      ></iframe>

      <h3>Card Flip Animation</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
      transition-property: transform;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
    }
    .card:hover {
      transform: rotateY(180deg);
    }
    .card-content {
      font-size: 24px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-content">Front</div>
  </div>
</body>
</html>`}
        title="Card Flip Animation"
      ></iframe>

      <p>
        Experiment with these examples to see how CSS transitions can enhance
        the interactivity and visual appeal of your webpage!
      </p>

      <p>
        For more details, check out the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions">
          MDN Web Docs
        </a>{" "}
        on CSS Transitions.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "transform")}>
          back
        </button>
        <button onClick={() => (window.location.href = "animation")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Transition;

export const Animations = () => {
  return (
    <div className="comments-container">
      <h1>Understanding CSS Animations</h1>
      <p>
        CSS animations allow you to create dynamic and interactive effects on
        elements, such as moving, fading, rotating, and scaling. {`They're`} a
        powerful tool for enhancing the user experience and adding visual appeal
        to your webpage.
      </p>

      <h2>What are CSS Animations?</h2>
      <p>
        CSS animations are a set of keyframe-based animations that can be
        applied to elements in your webpage to create motion and change over
        time. They allow you to control the timing, duration, and easing of the
        animation, as well as define custom animation sequences and effects.
      </p>

      <h2>Features of CSS Animations</h2>

      <h3>Keyframes</h3>
      <p>
        CSS animations are built using keyframes, which define the start and end
        states of the animation, as well as any intermediate steps. Keyframes
        allow you to create complex animation sequences and effects with precise
        control over timing and movement.
      </p>

      <h3>Timing Functions</h3>
      <p>
        CSS animations support various timing functions, such as linear,
        ease-in, ease-out, and ease-in-out, which control the acceleration and
        deceleration of the animation. Timing functions allow you to create
        smooth and natural-looking animations that mimic real-world motion.
      </p>

      <h3>Animation Properties</h3>
      <p>
        CSS animations can be customized using a variety of properties,
        including animation-name, animation-duration, animation-timing-function,
        animation-delay, animation-iteration-count, and animation-fill-mode.
        These properties allow you to control the appearance and behavior of the
        animation.
      </p>

      <h2>Benefits of CSS Animations</h2>
      <p>
        Using CSS animations can enhance the user experience by adding
        interactivity and visual interest to your webpage. Animations can be
        used to draw attention to important content, provide feedback to user
        actions, and create engaging transitions between states.
      </p>

      <h2>When to Use CSS Animations</h2>
      <p>
        CSS animations are ideal for adding motion and interactivity to elements
        on your webpage, such as buttons, menus, sliders, and loading
        indicators. They can be used to create eye-catching effects, guide users
        through the interface, and improve the overall usability of your site.
      </p>

      <h2>Common CSS Animation Effects</h2>

      <h3>Move Animation</h3>
      <p>
        The move animation moves an element from one position to another over a
        specified duration.
      </p>
      <pre>
        <code>
          {`
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

.move {
  animation: move 1s linear infinite alternate;
}`}
        </code>
      </pre>

      <h3>Fade Animation</h3>
      <p>
        The fade animation fades an element in or out over a specified duration.
      </p>
      <pre>
        <code>
          {`
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade {
  animation: fade 1s ease-in-out infinite alternate;
}`}
        </code>
      </pre>

      <h3>Rotate Animation</h3>
      <p>
        The rotate animation rotates an element around its center over a
        specified duration.
      </p>
      <pre>
        <code>
          {`
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 2s linear infinite;
}`}
        </code>
      </pre>

      <h3>Scale Animation</h3>
      <p>
        The scale animation scales an element up or down over a specified
        duration.
      </p>
      <pre>
        <code>
          {`
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.scale {
  animation: scale 1s ease-in-out infinite alternate;
}`}
        </code>
      </pre>

      <h2>Examples</h2>

      <h3>Move Animation</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      animation: move 2s linear infinite alternate;
    }

    @keyframes move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200px);
      }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Move Animation"
      ></iframe>

      <h3>Fade Animation</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      animation: fade 2s ease-in-out infinite alternate;
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Fade Animation"
      ></iframe>

      <h3>Rotate Animation</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: green;
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Rotate Animation"
      ></iframe>

      <h3>Scale Animation</h3>
      <iframe
        width="100%"
        height="300"
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: yellow;
      animation: scale 2s ease-in-out infinite alternate;
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.5);
      }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`}
        title="Scale Animation"
      ></iframe>

      <p>
        Experiment with different animation effects and values to create
        engaging and dynamic experiences for your webpage!
      </p>

      <p>
        For more details and additional animation techniques, check out the
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">
          MDN Web Docs
        </a>
        .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "transition")}>
          back
        </button>
        <button onClick={() => (window.location.href = "filter")}>Next</button>
      </div>
    </div>
  );
};
