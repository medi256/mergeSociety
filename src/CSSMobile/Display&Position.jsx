const Display = () => {
  return (
    <div className="comments-container">
      <h1>The CSS Display Property</h1>
      <p>
        The CSS display property specifies how an element should be displayed.
        Essentially, it allows us to control whether elements behave as block
        elements, inline elements, or something else.
      </p>
      <h3>Values:</h3>
      <ul>
        <li>block</li>
        <li>inline</li>
        <li>none</li>
        <li>inline-block</li>
      </ul>
      <p>
        These are some of the most commonly used values for the CSS display
        property. However, there are more values available, which you can
        explore further on the Mozilla Web Docs.
      </p>
      <h2>CSS Block-level Element</h2>
      <p>
        Block-level elements always occupy the full width available and start on
        a new line, creating a horizontal block.
      </p>
      <h3>Examples of Block-level Elements:</h3>
      <pre>
        <code>
          {`
  <p> </p>
  <h1>-<h6>
  <div> <ul>
  <ol> <li>
  <form> <section>
  <header> <nav>
  <main> <footer>
          `}
        </code>
      </pre>
      <h3>Examples with Code:</h3>
      <pre>
        <code>
          {`
  <h1>Block-level elements</h1>
  <p style="background:gold;">Take up the full width</p>
  <div>and always start on a new line.</div>
          `}
        </code>
      </pre>
      <h3>Output:</h3>
      <div>
        <h1>Block-level elements</h1>
        <p style={{ backgroundColor: "gold" }}>Take up the full width</p>
        <div>and always start on a new line.</div>
      </div>
      <p>
        By default, HTML elements with the display property set in CSS are
        block-level elements.
      </p>
      <h2>CSS Inline Elements</h2>
      <p>
        Inline elements do not occupy the full width available and do not start
        on a new line.
      </p>
      <h3>Examples of Inline Elements:</h3>
      <pre>
        <code>
          {`
  <span>, <i>, <a>, <img>
          `}
        </code>
      </pre>
      <h3>Examples with Code:</h3>
      <pre>
        <code>
          {`
  <span>Inline elements</span>
  <i>don't take up the full</i>
  <a href="https://www.mergesociety.com">width and do not start on a new line</a>
          `}
        </code>
      </pre>
      <h3>Output:</h3>
      <div>
        <span>Inline elements</span>
        <i>{`don't`} take up the full</i>
        <a href="https://www.mergesociety.com">
          width and do not start on a new line
        </a>
      </div>
      <h2>Changing Display Values</h2>
      <p>
        Here is an example of changing the display value from block to inline:
      </p>
      <pre>
        <code>
          <h3>HTML code</h3>
          {`
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bananas</li>
  </ul>
          `}
          <h3>CSS code</h3>
          {`
  li {
    display: inline;
  }
          `}
        </code>
      </pre>
      <h3>Output:</h3>
      <div>
        <ul style={{ display: "inline" }}>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Bananas</li>
        </ul>
      </div>
      <p>
        Notice how {`they're`} now on a single line instead of each being on its
        own line.
      </p>
      <h3>
        Here is an example of changing the display value from inline to block.
      </h3>
      <pre>
        <h4>HTML code</h4>
        <code>
          {`
  <span>Hello World!</span>
  <span>I love mergeSociety!</span>
          `}
        </code>
        <h4>CSS code</h4>
        <code>
          {`
  span {
    display: block;
  }
          `}
        </code>
      </pre>
      <h3>Output:</h3>
      <div>
        <span style={{ display: "block" }}>Hello World!</span>
        <span style={{ display: "block" }}>I love mergeSociety!</span>
      </div>
      <h2>None Value</h2>
      <p>
        The <code>{`"none"`}</code> value in CSS can be used to remove elements
        from the webpage.
      </p>
      <h3>For example:</h3>
      <pre>
        <h4>HTML code</h4>
        <code>
          {`
   <p>I will disappear</p>
          `}
        </code>
        <h4>CSS code</h4>
        <code>
          {`
   p {
     display: none;
   }
          `}
        </code>
      </pre>
      <p>In this example, the paragraph will disappear from the webpage.</p>
      <p>Try it out and see what happens.</p>
      <h2>display: inline-block</h2>
      <p>
        In addition to block, inline, and none, {`there's`} also inline-block.
        An element with a display of inline-block behaves like an inline element
        but allows you to apply width and height to it.
      </p>
      <p>
        This is useful for adding styles to inline elements, as certain styles
        like width and height cannot be applied to inline elements by default.
        Try adding width and height to inline elements, and then set the display
        to inline-block to observe the difference.
      </p>
      <h3>Example:</h3>
      <pre>
        <code>
          {`
  span {
    display: inline-block;
  }
          `}
        </code>
      </pre>
      <p>
        For further details, you can refer to the{" "}
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Display.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/floatMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/positionMob")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Display;

export const Position = () => {
  return (
    <div className="comments-container">
      <h1>CSS position</h1>
      <p>
        {" "}
        Using CSS position to layout elements on your website can be hard to
        figure out. What’s the difference between absolute, relative, fixed, and
        sticky? It can get confusing pretty quickly.
      </p>
      <h2>What does CSS position do?</h2>
      <p>
        Using CSS, you can layout all your elements on your webpage visually.
        For example, you can position an element at the very top of your page,
        or 50px below the element before it.
      </p>
      <p>
        To control just how an element will appear in the layout, you need to
        use the CSS position property. In addition, you can utilize some other
        position-related properties: top, right, bottom, left, and z-index.
        (We’ll get more into those later on.)
      </p>
      <p>
        The position property can take five different values: static, relative,
        absolute, fixed, and sticky.
      </p>
      <p> It sounds like a lot, but don’t worry!</p>

      <p>Here’s how each value for CSS position works:</p>
      <h2>1. Static</h2>
      <p>
        {" "}
        Position: static is the default value that an element will have. This
        means if you don’t declare position for an element in CSS, it will
        automatically be set to static.
      </p>
      <p>
        <i>
          It’s important to note that having a static position is the same as
          not setting the position property at all. (This will come into play a
          bit later on with absolute positioning.)
        </i>
      </p>
      <p>
        {` Elements that are statically positioned will appear on the page in what we call the normal flow. For example, if you have multiple <div> elements one after the other, they will appear on the page directly below one another.`}{" "}
      </p>
      <p>
        Here’s a quick demo to illustrate static position. We are using the
        following HTML markup:
      </p>
      <pre>
        <code>
          {`
    <div class="parent purple"></div>
          `}
        </code>
        <br />
        <code>
          {`
    <div class="another green"></div>
          `}
        </code>
      </pre>
      <p> And here’s the CSS we’re using:</p>
      <pre>
        <code>
          {`
 .first { 
   // No position set, so it's static 
} 
.another { 
   // No position set, so it's static 
   top: 50px; 
}
          `}
        </code>
      </pre>
      <p>
        The second element has a top property set to 50px. You would think that
        this would move it down 50px, right?
      </p>
      <p>However, here is how it will look on a webpage</p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712403417/secondPos_ruiw9t.png"
        alt="pics"
      />
      <p>
        Since both elements have a static position, none of the layout CSS
        properties will do anything. This makes that top property have no effect
        on how the second element is displayed.
      </p>
      <p>
        So that second element ends up being directly below the first element,
        with no space between.
      </p>
      <p>How can we fix this? Let’s move on to the next position:</p>

      <h2> 2. Relative</h2>
      <p>
        Position: relative is similar to static in that relatively positioned
        elements will follow the normal flow of the webpage. But the main
        difference is that using relative will now unlock the other CSS layout
        properties.
      </p>
      <p>
        Think about it this way: you are setting the element to be positioned
        relative to other elements on the page.
      </p>
      <p>Let’s see what this looks like, and adjust our CSS like this:</p>

      <pre>
        <code>
          {`
   .first { 
     position: static; 
  } 
  .another { 
     position: relative; 
     top: 50px; 
  }
          `}
        </code>
      </pre>
      <p>
        All the CSS is exactly the same, except that we changed the second
        element to use position: relative. Doing this makes that top: 50px work!
      </p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712403884/secondRelative_diieef.png"
        alt="demo"
      />
      <p>
        You can see that the second element is now 50px below the first one,
        adding that space between them.
      </p>

      <h3>Relatively positioned parent and child elements</h3>
      <p>
        Let’s try another example, using a parent element with a child element
        nested inside it. Both have position: relative set.
      </p>
      <h4>Here’s the HTML for that:</h4>
      <pre>
        <code>
          {`
  <div class="parent purple"> 
     <div class="child magenta"></div> 
  </div>
          `}
        </code>
      </pre>
      <h4>And our CSS styles:</h4>
      <pre>
        <code>
          {`
   .parent { 
     position: relative; 
  } 
  .child { 
     position: relative; 
     top: 0px; 
     left: 0px; 
  }
          `}
        </code>
      </pre>
      <p>And here’s what that code will look like in real life:</p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712404128/secondDemo_zzdbvh.png"
        alt="demo-2"
      />
      <p>
        You can see that the pink child element is nicely nested inside the
        purple parent element. The child is also positioned as close to the top
        and left inside the parent as is possible. (It will go as far up as the
        parent text)
      </p>
      <p>
        Position relative is relatively straight-forward, right? Well, hold on
        to your hats, because things are about to get crazy with position
        absolute.
      </p>

      <h2> 3. Absolute</h2>
      <p>
        Position: absolute will cause an element to be taken out of that normal
        flow of the webpage.
      </p>
      <p>Wait, what does that mean?</p>
      <p>
        So before, using static or relative positioning, elements would be
        nicely displayed one below the other, depending on their order in the
        HTML markup. But with absolute positioning, the element is completely
        taken out of that entire flow.
      </p>
      <p>
        To help explain, let’s do a comparison to illustrate the difference
        between relative and absolute positioning.
      </p>
      <p>
        In the previous example, we had a parent element with a child element,
        both positioned relatively. And the child was nested inside the parent
        element.
      </p>
      <p>Let’s change that child to be positioned absolutely in the parent!</p>
      <h4>Our CSS will now look like this:</h4>
      <pre>
        <code>
          {`
   .parent { 
     position: relative; 
  } 
  .child { 
     position: absolute; 
     top: 0px; 
     left: 0px;
  }         
          `}
        </code>
      </pre>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712404536/lets_vnqh1p.png"
        alt="demo-3"
      />
      <p>
        {" "}
        The pink child element now looks very different from our last example.
      </p>
      <p>
        While it is still within the confines of the parent element, it is
        positioned at the very top and very left of the parent. It’s even
        covering up the parent text content!
      </p>
      <p>
        This is due to the top: 0px and left: 0px styles of the child, combined
        with the child being absolutely positioned. In the normal flow of
        things, elements wouldn’t be on top of (and covering up) other elements.
      </p>
      <p>
        But since the child is absolute, it’s essentially on a different layer
        than the normal elements. So it can be positioned on top of what else is
        on the webpage.
      </p>
      <p>
        But it will stay within the boundaries of the parent element– as long as
        the parent has its position set. Which leads us to our next point.
      </p>
      <p>
        There is one other tricky aspect to child elements with absolute
        positioning…
      </p>
      <h3>
        An absolutely positioned element needs to position itself in relation to
        a positioned ancestor.
      </h3>
      <p>
        When you take an element out of the normal flow by using position:
        absolute, it will look for an ancestor element that has its own position
        set. This is so the child knows what element it should position itself
        in relation to.
      </p>
      <p>
        So what happens if a child element is absolutely positioned, but the
        parent element doesn’t have a position set?
      </p>
      <h4>Here’s our CSS for this illustration:</h4>
      <pre>
        <code>
          {`
    .parent { 
      // No position set, so it's static 
   } 
   .child { 
      position: absolute; 
      top: 0px; 
      left: 0px; 
   }
          `}
        </code>
      </pre>
      <h4>And here’s what the resulting webpage would look like:</h4>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712404629/demo_ctlwht.png"
        alt="demo-5"
      />
      <p>
        {`
        The child has now escaped the confines of the parent element, since the parent has no position set. And the child has gone up to the next (grand)parent element, in this case the <body> element, which is as far as it can go.
        `}
      </p>
      <p>
        (A somewhat sad metaphor would be that this “orphaned” child is looking
        up the ancestry tree for someone that will be its “parent.”)
      </p>
      <h4>
        This is a huge cause of unexpected behavior in CSS for many developers.
      </h4>
      <p>
        If you can remember to always set the parent element of a child element
        to have position set to relative or absolute (in most cases), you will
        avoid having your child elements flying up the page to who knows where ?
      </p>
      <p>So, to summarize relative and absolute positioning:</p>

      <p>
        <i>
          The main difference between relative and absolute positioning is that
          position: absolute will take a child element completely out of the
          normal flow of the document. And that child will be positioned in
          relation to the first parent element that has its own position set.
        </i>
      </p>
      <p>
        The last two position values, fixed and sticky, are similar in some ways
        to position: absolute. But they also are related to your scroll position
        on the page.
      </p>
      <p>Let’s take a look:</p>
      <h2>4. Fixed</h2>
      <p>
        {" "}
        Position: fixed will take the element out of the normal flow, and also
        position it in the same place in the viewport (what’s visible on
        screen). This means that scrolling will not affect its position at all.
      </p>
      <p>Let’s see what this looks like in the code. Here’s our HTML:</p>
      <pre>
        <code>
          <pre>
            {`
            
<div class="first purple"> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit....
</div> 
<div class="another green"></div>
            `}
          </pre>
        </code>
      </pre>
      <p>And in our CSS, we’ve set the second element to be position: fixed:</p>
      <pre>
        <code>
          {`
 .first { 
   position: relative; 
} 
.another { 
   position: fixed; 
   top: 0px; 
   left: 0px; 
}
          `}
        </code>
      </pre>
      <p>And this is what that will look like:</p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712404720/fixed_zruxdj.png"
        alt="demo-5"
      />
      <p>
        The green fixed element will stay positioned to the top and left corner
        of the viewport. And if you scroll, the purple element will scroll up
        normally, but the green element will remain stuck to where we positioned
        it.
      </p>
      <p>
        <i>
          Tip: A fixed element must have a top or bottom position set. If it
          doesn’t, it will simply not exist on the page at all.
        </i>{" "}
      </p>
      <p>
        {" "}
        Position: fixed is commonly used to make navigation bars that are always
        affixed to the top. It’s a super helpful property!
      </p>
      <p>
        Next, we’ll take a look at sticky positioning, which is like fixed
        positioning but with a little extra.
      </p>
      <h2>5. Sticky</h2>
      <p>
        Position: sticky elements will initially behave like position: relative
        elements, but if you keep scrolling, they will get taken out of the
        normal flow and behave like position: fixed wherever you have positioned
        them.
      </p>
      <p>
        This can be really useful if you want to stick an element that’s
        initially farther down the page to the top of the screen.
      </p>
      <p>
        In this code example, we have our green sticky element between two
        purple elements containing a lot of text. (All the better for
        scrolling!)
      </p>
      <pre>
        <code>
          {`
          
<div class="first purple"> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
</div> 
<div class="another green"></div> 
<div class="purple"> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
</div>
          `}
        </code>
      </pre>
      <p>And the CSS for our sticky element:</p>
      <pre>
        <code>
          {`
  .first { 
    position: relative; 
 } 
 .another { 
    position: sticky; 
    top: 0px; 
 }         
          `}
        </code>
      </pre>
      <p>And here’s what it looks like on the webpage!</p>
      <img
        src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712404804/sticky_kjwqmb.png"
        alt="demo-6"
      />
      <p>
        As you scroll down the page, when you see the green element come into
        the viewport, it seems like a normal, relatively positioned element. But
        as you keep scrolling, instead of scrolling off the page, it will become
        fixed and stick to the top of the viewport.
      </p>
      <p>
        Just like fixed elements, a sticky element must have top or bottom set
        in the CSS. If it doesn’t have it, the element will continue to behave
        as if it was relatively positioned, and will never become sticky.
      </p>
      <h4>A note on browser support:</h4>
      <p>
        <i>
          Currently, position: sticky doesn’t have complete support across the
          board. Newer browser versions do support it, but no versions of IE do.
          This may be important if you’re working on a client project where IE
          11 support is necessary. You can check out the current support on
          CanIUse.com
        </i>
      </p>
      <p>
        For more details, check out the
        <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> on CSS
        Position .
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/displayMob")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/zIndexMob")}>
          Next
        </button>
      </div>
    </div>
  );
};
