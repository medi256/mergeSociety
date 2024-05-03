const IntroAPI = () => {
  return (
    <div className="comments-container">
      <h1>What is an API?</h1>
      <p>
        An API, or Application Programming Interface, is a set of defined rules
        that enable different applications, services, or systems to communicate
        with each other. It allows one system to request access to another{" "}
        {`system's`} data or functionality, and receive the response in a
        structured and standardized way.
      </p>
      <p>
        {`Think of an API as a messenger between different systems. Imagine you're
        at a restaurant and you want to order food. You can't just walk into the
        kitchen and start making your own food because you don't have the skills
        or the access. Instead, you give your order to the waiter, who takes it
        to the kitchen staff. They then prepare your food according to your
        request and send it back to you via the waiter.`}
      </p>
      <p>
        In this scenario, the waiter is like an API. You (the customer) are the
        one making the request, and the kitchen staff are the system that
        provides the data or functionality (the food). The waiter (API) acts as
        an intermediary, taking your request, sending it to the kitchen, and
        bringing the response back to you.
      </p>
      <h2>Why Do We Need APIs?</h2>
      <p>
        {`APIs are essential in today's digital world because they enable
        different systems to communicate with each other seamlessly. Here are
        some reasons why we need APIs:`}
      </p>
      <ul>
        <li>
          <b>Integration</b>: APIs allow different systems to integrate with
          each other, enabling them to share data and functionality.
        </li>
        <li>
          <b>Reusability</b>: APIs enable developers to reuse code and
          functionality, reducing the need to build everything from scratch.
        </li>
        <li>
          <b>Scalability</b>: APIs enable systems to scale more easily, as they
          can handle a large volume of requests and responses.
        </li>
        <li>
          <b>Security</b>: APIs provide a secure way for systems to communicate
          with each other, reducing the risk of data breaches and other security
          threats.
        </li>
      </ul>
      <h2>Real-World Examples of APIs</h2>
      <p>
        APIs are used in many real-world scenarios. Here are a few examples:
      </p>
      <ul>
        <li>
          <b>Facebook Login</b>:{" "}
          {`When you log in to a website using your
          Facebook account, the website is using Facebook's API to authenticate
          your identity and retrieve your profile information.`}
        </li>
        <li>
          <b>Google Maps</b>:{" "}
          {`When you use a ride-hailing app like Uber or Lyft,
          the app uses Google Maps' API to provide directions and estimate
          arrival times.`}
        </li>
        <li>
          <b>Payment Gateways</b>: When you make an online payment using a
          credit card, the website uses an API provided by the payment gateway
          (e.g. PayPal, Stripe) to process the transaction.
        </li>
        <li>
          <b>Weather Apps</b>: When you check the weather on your phone, the app
          uses an API provided by a weather service (e.g. OpenWeatherMap) to
          retrieve the current weather conditions and forecast.
        </li>
      </ul>
      <h2>Interesting Facts About APIs</h2>
      <p>Here are some interesting facts about APIs that might surprise you:</p>
      <ul>
        <li>
          <b>APIs are everywhere</b>: There are over 20,000 public APIs
          available today, and many more private APIs used by companies and
          organizations.
        </li>
        <li>
          <b>APIs generate revenue</b>:{" "}
          {`Many companies generate significant
          revenue by providing APIs to other businesses. For example, Twitter's
          API generates over $100 million in revenue each year.`}
        </li>
        <li>
          <b>APIs can be hacked</b>:{" "}
          {`Just like any other system, APIs can be
          vulnerable to hacking and security breaches. In 2017, a security
          breach at Equifax's API exposed the personal data of over 147 million
          people.`}
        </li>
        <li>
          <b>APIs can be used for good</b>: APIs can be used to create positive
          social impact. For example, the United Nations uses APIs to provide
          access to data on sustainable development goals and humanitarian
          crises.
        </li>
      </ul>
      <p>
        {`As you can see, APIs play a critical role in many aspects of our digital
        lives. By understanding how APIs work and how they're used, you can
        unlock new possibilities for building innovative applications and
        services.`}
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/debuggingTec")}>
          back
        </button>
        <button
          onClick={() => (window.location.href = "/FetchingDataFromApis")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroAPI;

export const FetchingDataFromApis = () => {
  return (
    <div className="comments-container">
      <h1>Fetching Data from APIs</h1>
      <p>
        {`Now that we've learned about APIs, let's dive into how to fetch data from
        them. Fetching data from APIs involves sending a request to the API
        endpoint and receiving the response data.`}
      </p>
      <h2>HTTP Requests</h2>
      <p>
        To fetch data from an API, we need to send an HTTP request to the API
        endpoint. There are several types of HTTP requests, including:
      </p>
      <ul>
        <li>
          <b>GET</b>: Retrieves data from the API endpoint.
        </li>
        <li>
          <b>POST</b>: Sends data to the API endpoint to create a new resource.
        </li>
        <li>
          <b>PUT</b>: Updates an existing resource on the API endpoint.
        </li>
        <li>
          <b>DELETE</b>: Deletes a resource from the API endpoint.
        </li>
      </ul>
      <h2>API Endpoints</h2>
      <p>
        An API endpoint is the URL that we send our HTTP request to. {`It's`}{" "}
        the entry point for the API and defines the resource we want to interact
        with. For example, if we want to fetch a list of users from an API, the
        endpoint might be <code>https://api.example.com/users</code>.
      </p>
      <h2>Fetching Data with JavaScript</h2>
      <p>
        In JavaScript, we can use the Fetch API or a library like Axios to send
        HTTP requests to an API endpoint and fetch data. {`Here's`} an example
        using the Fetch API:
      </p>
      <pre>
        <code>
          {`
            fetch('https://api.example.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
          `}
        </code>
      </pre>
      <p>
        This code sends a GET request to the API endpoint
        <code>https://api.example.com/users</code>, retrieves the response data
        in JSON format, and logs it to the console.
      </p>
      <h2>API Keys and Authentication</h2>
      <p>
        Many APIs require an API key or authentication to access their data. An
        API key is a unique string that identifies our application and grants us
        access to the API. Authentication involves providing credentials, such
        as a username and password, to access the API.
      </p>
      <h2>How to Find Web APIs</h2>
      <p>
        There are many web APIs available, and finding the right one can be
        challenging. Here are some ways to find web APIs:
      </p>
      <ul>
        <li>
          <b>API Marketplaces</b>: Websites like RapidAPI, API Hub, and
          ProgrammableWeb offer a collection of APIs from various providers.
        </li>
        <li>
          <b>Company Websites</b>: Many companies provide APIs for their
          services, such as Twitter, Facebook, and GitHub.
        </li>
        <li>
          <b>API Directories</b>: Directories like API Directory and API Catalog
          list APIs from various providers.
        </li>
      </ul>
      <h2>How to Get API Keys and Access Tokens</h2>
      <p>
        To use a web API, you often need to register for an API key or access
        token. {`Here's how to get them:`}
      </p>
      <ul>
        <li>
          <b>API Key</b>:{" "}
          {`Register for an API key on the API provider's website.
          You'll typically need to create an account and provide some
          information about your application.`}
        </li>
        <li>
          <b>Access Token</b>:{" "}
          {`Some APIs use access tokens instead of API keys.
          You'll need to authenticate with the API provider to obtain an access
          token.`}
        </li>
      </ul>
      <h2>Practical Example: Using the GitHub API</h2>
      <p>{`Let's use the GitHub API to fetch data about a user's repositories.`}</p>
      <pre>
        <code>
          {`
      const apiUrl = 'https://api.github.com/users/octocat/repos';
      const apiKey = 'YOUR_API_KEY_HERE';

      fetch(apiUrl, {
        headers: {
          'Authorization': \`Bearer &#123;apiKey&#125;\`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    `}
        </code>
      </pre>

      <p>
        This code sends a GET request to the GitHub API endpoint for a{" "}
        {`user's`}
        repositories, using an API key for authentication. The response data is
        logged to the console.
      </p>
      <h2>Displaying API Data on Screen</h2>
      <p>
        Now that we have the data, {`let's`} display it on screen. We can use
        HTML and CSS to create a user interface that displays the data.
      </p>
      <pre>
        <code>
          {`
      const apiUrl = 'https://api.github.com/users/octocat/repos';
      const apiKey = 'YOUR_API_KEY_HERE';

      fetch(apiUrl, {
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          const repoList = document.getElementById('repo-list');
          data.forEach(repo => {
            const repoItem = document.createElement('li');
            repoItem.textContent = repo.name;
            repoList.appendChild(repoItem);
          });
        })
        .catch(error => console.error(error));
    `}
        </code>
      </pre>

      <p>
        This code creates a list of repositories on the screen, using the data
        fetched from the GitHub API.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/IntroAPI")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/WorkingWithAPIs")}>
          Next
        </button>
      </div>
    </div>
  );
};
