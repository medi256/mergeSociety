const JavascriptVsECMAScript = () => {
  return (
    <div className="comments-container internet">
      <h1>Welcome to the World of JavaScript and ECMAScript!</h1>
      <p>
        Hey there! So,{" "}
        {`you've embarked on the exciting journey of learning
        JavaScript, but you might have heard another term floating around:
        ECMAScript. Let's clear things up right from the start: they're
        essentially one and the same!`}
      </p>
      <p>
        Think of JavaScript and ECMAScript like identical twins—same DNA,
        different names. When you write code in JavaScript,{" "}
        {`you're essentially
        using ECMAScript standards. It's like speaking the same language but
        with different accents!`}
      </p>
      <h2>Why the Confusion?</h2>
      <p>
        You might be wondering,{" "}
        {`"Why bother with two names?" Well, it's a bit of
        a historical quirk. JavaScript burst onto the scene without a formal
        rulebook.`}{" "}
        To bring order to the chaos, the folks at Netscape and Sun Microsystems
        presented JavaScript to Ecma International, the organization responsible
        for standardizing technology. And thus, ECMAScript was born!
      </p>
      <p>
        Did you know that JavaScript was created by Brendan Eich at Netscape in
        1995? It was initially called Mocha, but was later renamed to JavaScript
        to leverage the popularity of Sun {`Microsystems'`} Java platform.
      </p>
      <h2>Why Does It Matter?</h2>
      <p>
        Understanding the relationship between JavaScript and ECMAScript is
        crucial for your coding journey. When you learn JavaScript,{" "}
        {`you're not
        just learning a language—you're delving into a rich ecosystem shaped by
        ECMAScript standards.`}
      </p>
      <p>
        For example, ECMAScript 2015 (ES2015) introduced classes, which allowed
        developers to create more structured and organized code. Later,
        ECMAScript 2017 (ES2017) added async/await, making it easier to write
        asynchronous code. These are just a few examples of how ECMAScript
        standards have evolved over time.
      </p>
      <p>
        So, as we dive into JavaScript, remember this: whether you call it
        JavaScript or ECMAScript,{" "}
        {`it's all about writing awesome code! And those
        ES6 features? They're like supercharged tools that make your coding
        experience even more fantastic.`}
      </p>
      <p>
        Ready to explore the world of JavaScript and ECMAScript together?{" "}
        {`Let's
        dive in and unlock the full potential of this incredible language!`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/RunningJS")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/VariablesDataTypes")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JavascriptVsECMAScript;
