import AdUnit from "../AdUnit";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const IntroAPI = () => {
  return (
    <div className="comments-container internet">
      <AdUnit />
      <h1>What is an API (Application Programming Interface)?</h1>

      <p>
        If you’ve heard the term <strong>API</strong> before, it might sound a
        little technical, but it's actually a simple and powerful concept that
        you use every day without even realizing it. Let’s break it down into
        easy-to-understand parts.
      </p>

      <h2>Breaking Down the Term "API"</h2>

      <p>
        API stands for <strong>Application Programming Interface</strong>. While
        this name might seem complicated, you can think of an API as a{" "}
        <strong>messenger</strong> that allows different software applications
        to talk to each other.
      </p>

      <p>
        Imagine you’re at a restaurant. You (the customer) look at the menu and
        decide what you want to order. However, you don’t go into the kitchen to
        make the food yourself. Instead, you tell the waiter (the messenger)
        your order. The waiter then takes your request to the kitchen, where the
        chefs prepare your meal. Once the meal is ready, the waiter brings it
        back to you.
      </p>

      <p>
        In this example:
        <ul>
          <li>
            <strong>You (the customer)</strong> represent the software or
            website that needs some data or services.
          </li>
          <li>
            <strong>The waiter</strong> represents the API, which takes your
            request and delivers it to the kitchen.
          </li>
          <li>
            <strong>The kitchen (the chef)</strong> is the server or service
            that provides the data or service you requested.
          </li>
          <li>
            <strong>The food</strong> is the data or result that is sent back to
            you by the API.
          </li>
        </ul>
      </p>

      <h2>How Does an API Work?</h2>

      <p>
        In the digital world, APIs help different software systems communicate.
        For example, when you use an app on your phone to check the weather,
        that app doesn't store all the weather data itself. Instead, it sends a
        request to a weather service through an API. The weather service
        processes the request and sends the weather information back to the app.
      </p>

      <p>
        The API is like the messenger (the waiter) in our earlier example,
        making sure your app can get the weather data it needs. You don't have
        to know how the weather service works or where the data comes from. All
        you care about is that you get the weather information you requested,
        and the API handles all the behind-the-scenes work.
      </p>
      <h2>Why Do We Use APIs?</h2>

      <p>
        APIs are important because they make it easier for different
        applications to work together. Without APIs, every application would
        need to know how to communicate directly with every other service, which
        would be extremely difficult and inefficient. APIs provide a{" "}
        <strong>standard way</strong> for applications to talk to each other,
        just like the waiter provides a standard way for you to communicate with
        the kitchen in a restaurant.
      </p>

      <h3>Here are a few key reasons why APIs are useful:</h3>

      <ul>
        <li>
          <strong>1. Simplicity:</strong> APIs simplify communication between
          systems. You don’t need to know all the details of how the other
          system works—just how to request and receive what you need.
        </li>
        <li>
          <strong>2. Reusability:</strong> Once an API is created, it can be
          reused by many different applications. For example, a weather API can
          be used by hundreds of different apps to display weather information.
        </li>
        <li>
          <strong>3. Speed:</strong> APIs help developers build faster because
          they can use existing services instead of creating everything from
          scratch. For instance, instead of building a whole payment system, an
          app might use a payment API like PayPal or Stripe.
        </li>
        <li>
          <strong>4. Consistency:</strong> APIs provide a consistent way for
          different applications to work together. It’s like using a universal
          language that all systems can understand.
        </li>
      </ul>

      <h2>Everyday Examples of APIs</h2>

      <p>
        You probably use APIs every day without even knowing it. Let’s look at
        some real-world examples of how APIs work behind the scenes:
      </p>

      <h3>1. Social Media Sharing</h3>
      <p>
        Have you ever clicked a button on a website to share something to
        Facebook or Twitter? That button uses an API to send the information
        (like the link or content) from the website to your social media
        account. You don’t need to log into Facebook or Twitter separately—an
        API handles the communication for you.
      </p>
      <AdUnit />
      <h3>2. Logging in with Google or Facebook</h3>
      <p>
        Many websites and apps allow you to log in using your Google or Facebook
        account instead of creating a new username and password. This works
        through an API. When you click "Log in with Google," the app sends a
        request through the Google API to verify your identity. Once Google
        confirms who you are, the app logs you in.
      </p>

      <h3>3. Online Payments</h3>
      <p>
        When you buy something online and use PayPal, an API is working in the
        background to process your payment. The website sends a request to
        PayPal’s API, which handles the transaction and sends back confirmation
        that your payment was successful.
      </p>

      <h3>4. Maps and Location Services</h3>
      <p>
        If you’ve ever used Google Maps or Uber, you’ve interacted with an API.
        When you search for a location, the app sends a request to a mapping
        API, which finds the location data and sends it back to the app. You
        just see the result, but behind the scenes, the API is making sure the
        app gets the information it needs.
      </p>

      <h2>APIs Are Everywhere</h2>

      <p>
        APIs are a big part of how the modern web works. They’re used in
        everything from social media platforms to online shopping, weather apps,
        and more. While you don’t always see them, they’re constantly working in
        the background, making sure that different systems can share data and
        communicate efficiently.
      </p>

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          <strong>APIs are like messengers</strong> that allow different
          software systems to communicate.
        </li>
        <li>
          <strong>They make things simpler</strong> for developers by providing
          a standard way to request and send information.
        </li>
        <li>
          <strong>We use APIs all the time</strong> when we log in to apps, make
          online payments, or use social media.{" "}
        </li>
      </ul>

      <p>
        Now that you understand the basics of what an API is, we’ll soon dive
        into how to use them in your code to fetch data from different services.
      </p>
      <h1>What is an API (Application Programming Interface)?</h1>

      <p>
        If you’ve heard the term <strong>API</strong> before, it might sound a
        little technical, but it's actually a simple and powerful concept that
        you use every day without even realizing it. Let’s break it down into
        easy-to-understand parts.
      </p>

      <h2>Breaking Down the Term "API"</h2>

      <p>
        API stands for <strong>Application Programming Interface</strong>. While
        this name might seem complicated, you can think of an API as a{" "}
        <strong>messenger</strong> that allows different software applications
        to talk to each other.
      </p>

      <p>
        Imagine you’re at a restaurant. You (the customer) look at the menu and
        decide what you want to order. However, you don’t go into the kitchen to
        make the food yourself. Instead, you tell the waiter (the messenger)
        your order. The waiter then takes your request to the kitchen, where the
        chefs prepare your meal. Once the meal is ready, the waiter brings it
        back to you.
      </p>

      <p>
        In this example:
        <ul>
          <li>
            <strong>You (the customer)</strong> represent the software or
            website that needs some data or services.
          </li>
          <li>
            <strong>The waiter</strong> represents the API, which takes your
            request and delivers it to the kitchen.
          </li>
          <li>
            <strong>The kitchen (the chef)</strong> is the server or service
            that provides the data or service you requested.
          </li>
          <li>
            <strong>The food</strong> is the data or result that is sent back to
            you by the API.
          </li>
        </ul>
      </p>
      <AdUnit />
      <h2>How Does an API Work?</h2>

      <p>
        In the digital world, APIs help different software systems communicate.
        For example, when you use an app on your phone to check the weather,
        that app doesn't store all the weather data itself. Instead, it sends a
        request to a weather service through an API. The weather service
        processes the request and sends the weather information back to the app.
      </p>

      <p>
        The API is like the messenger (the waiter) in our earlier example,
        making sure your app can get the weather data it needs. You don't have
        to know how the weather service works or where the data comes from. All
        you care about is that you get the weather information you requested,
        and the API handles all the behind-the-scenes work.
      </p>

      <h2>Why Do We Use APIs?</h2>

      <p>
        APIs are important because they make it easier for different
        applications to work together. Without APIs, every application would
        need to know how to communicate directly with every other service, which
        would be extremely difficult and inefficient. APIs provide a{" "}
        <strong>standard way</strong> for applications to talk to each other,
        just like the waiter provides a standard way for you to communicate with
        the kitchen in a restaurant.
      </p>

      <h3>Here are a few key reasons why APIs are useful:</h3>

      <ul>
        <li>
          <strong>1. Simplicity:</strong> APIs simplify communication between
          systems. You don’t need to know all the details of how the other
          system works—just how to request and receive what you need.
        </li>
        <li>
          <strong>2. Reusability:</strong> Once an API is created, it can be
          reused by many different applications. For example, a weather API can
          be used by hundreds of different apps to display weather information.
        </li>
        <li>
          <strong>3. Speed:</strong> APIs help developers build faster because
          they can use existing services instead of creating everything from
          scratch. For instance, instead of building a whole payment system, an
          app might use a payment API like PayPal or Stripe.
        </li>
        <li>
          <strong>4. Consistency:</strong> APIs provide a consistent way for
          different applications to work together. It’s like using a universal
          language that all systems can understand.
        </li>
      </ul>

      <h2>Everyday Examples of APIs</h2>

      <p>
        You probably use APIs every day without even knowing it. Let’s look at
        some real-world examples of how APIs work behind the scenes:
      </p>

      <h3>1. Social Media Sharing</h3>
      <p>
        Have you ever clicked a button on a website to share something to
        Facebook or Twitter? That button uses an API to send the information
        (like the link or content) from the website to your social media
        account. You don’t need to log into Facebook or Twitter separately—an
        API handles the communication for you.
      </p>

      <h3>2. Logging in with Google or Facebook</h3>
      <p>
        Many websites and apps allow you to log in using your Google or Facebook
        account instead of creating a new username and password. This works
        through an API. When you click "Log in with Google," the app sends a
        request through the Google API to verify your identity. Once Google
        confirms who you are, the app logs you in.
      </p>

      <h3>3. Online Payments</h3>
      <p>
        When you buy something online and use PayPal, an API is working in the
        background to process your payment. The website sends a request to
        PayPal’s API, which handles the transaction and sends back confirmation
        that your payment was successful.
      </p>

      <h3>4. Maps and Location Services</h3>
      <p>
        If you’ve ever used Google Maps or Uber, you’ve interacted with an API.
        When you search for a location, the app sends a request to a mapping
        API, which finds the location data and sends it back to the app. You
        just see the result, but behind the scenes, the API is making sure the
        app gets the information it needs.
      </p>

      <h2>APIs Are Everywhere</h2>

      <p>
        APIs are a big part of how the modern web works. They’re used in
        everything from social media platforms to online shopping, weather apps,
        and more. While you don’t always see them, they’re constantly working in
        the background, making sure that different systems can share data and
        communicate efficiently.
      </p>
      <AdUnit />
      <h2>Key Takeaways</h2>

      <ul>
        <li>
          <strong>APIs are like messengers</strong> that allow different
          software systems to communicate.
        </li>
        <li>
          <strong>They make things simpler</strong> for developers by providing
          a standard way to request and send information.
        </li>
        <li>
          <strong>We use APIs all the time</strong> when we log in to apps, make
          online payments, or use social media.{" "}
        </li>
      </ul>

      <p>
        Now that you understand the basics of what an API is, we’ll soon dive
        into how to use them in your code to fetch data from different services.
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
    <div className="comments-container internet">
      <AdUnit />
      <h1>Understanding APIs in Depth</h1>

      <p>
        Welcome back! 🎉 In our last lesson, we learned what APIs are and how
        they help us connect different apps, services, or pieces of software.
        Now, let’s dive deeper into the world of APIs. Don’t worry; I’ll guide
        you through each concept with easy-to-understand explanations and fun
        examples.
      </p>

      <h2>1. Types of APIs</h2>
      <p>
        APIs come in different shapes and sizes. Just like there are many types
        of tools in a toolbox, there are various types of APIs depending on how
        and where they are used. Let’s explore the most common types and how
        they might come into play in your projects.
      </p>

      <h3>a. Web APIs (The Most Common)</h3>
      <p>
        Web APIs are like the friendly neighborhood helpers of the internet.
        They let your apps talk to other services online. Imagine you’re
        building a weather app. To get the latest weather updates, your app
        needs to “ask” another service for that information. This is where Web
        APIs come into play.
      </p>

      <p>
        For instance, when you use an app to check the weather, that app
        communicates with a weather service’s API to fetch the data. This is a
        Web API in action—making it possible for your app to provide you with
        real-time weather updates without having to gather the data itself.
      </p>

      <p>
        <strong>Real-world example:</strong> Think of Web APIs like a waiter at
        a restaurant. You tell the waiter what you want, and they go to the
        kitchen (the API) to get your food (data) and bring it back to you.
        Similarly, your app asks the Web API for data, and the API brings that
        data back to your app.
      </p>

      <h3>b. Other Types of APIs (Just Mentioned for Now)</h3>
      <p>
        While Web APIs are our main focus, there are other types of APIs that
        you might come across. Let’s briefly mention them so you’re aware of
        their existence:
      </p>

      <ul>
        <li>
          <strong>Library APIs:</strong> Think of these as specialized tools or
          gadgets within a toolbox. When you use a library like React or jQuery,
          these libraries come with their own set of APIs to help you build
          specific features. For example, React’s API helps you manage your
          app’s user interface.
        </li>
        <li>
          <strong>Operating System APIs:</strong> These are like the basic
          instructions your computer needs to work with apps. They let programs
          interact with your operating system (like Windows or macOS). For
          example, if a program needs to access your camera or files, it uses
          the Operating System API to do so.
        </li>
      </ul>

      <p>
        For now, we’ll keep our focus on Web APIs, as they are the most relevant
        for building web apps.
      </p>
      <AdUnit />
      <h2>2. Who Creates APIs? (Free vs. Paid)</h2>
      <p>
        APIs are created by developers or companies who want to share their data
        or services with others. Some of these APIs are free, while others come
        with a cost. Let’s break it down:
      </p>

      <h3>Free APIs</h3>
      <p>
        Many APIs are free to use, which is great for getting started. However,
        even free APIs often have some limits on how much you can use them.
        Think of it like having a free membership to a gym but only being
        allowed to work out a few times each month.
      </p>

      <p>
        <strong>Example:</strong> The <strong>OpenWeather API</strong> is a free
        API that provides weather data. You can use it to get the current
        weather or forecasts for different locations. But if you need to make a
        lot of requests quickly, you might hit a limit and need to upgrade to a
        paid plan.
      </p>

      <h3>Paid APIs</h3>
      <p>
        Some APIs charge you for their services. This is often because they
        offer more advanced features or higher usage limits. Think of this like
        a premium gym membership that gives you access to special classes or
        equipment.
      </p>

      <p>
        <strong>Example:</strong> <strong>Stripe</strong> is a popular API for
        handling online payments. If you’re building an e-commerce site and want
        to accept payments, Stripe provides the tools you need. However, it
        charges fees based on the number of transactions or other usage.
      </p>

      <p>
        Knowing whether an API is free or paid helps you plan your budget and
        understand any limits or costs associated with using it.
      </p>

      <h2>3. What is an API Endpoint?</h2>
      <p>
        An API endpoint is like a unique address where your app sends its
        requests to get data. Think of it like a house address where you send a
        letter. To get data from an API, you need to send your request to the
        right endpoint address.
      </p>

      <p>
        <strong>Example:</strong> Imagine you want to get weather data from the
        OpenWeather API. You’d send your request to this endpoint address:
      </p>

      <pre>https://api.openweathermap.org/data/2.5/weather</pre>

      <p>
        This endpoint is like a specific address where the API lives. When you
        send your request to this address, the API responds with the weather
        data you’re asking for.
      </p>

      <p>
        API providers give you a list of endpoints in their documentation. Each
        endpoint serves a specific purpose, such as getting weather data,
        searching for movies, or retrieving user information.
      </p>
      <AdUnit />
      <h2>4. What is an API Key?</h2>
      <p>
        An API key is like a secret password or a VIP pass that lets you access
        an API. Even if an API is free, you often need to sign up and get an API
        key. This key helps the API provider track who is using their service
        and how much they’re using it.
      </p>

      <p>
        <strong>Imagine it like this:</strong> If you want to enter an exclusive
        event, you need an invitation or a special ticket. Similarly, an API key
        is your “invitation” to use the API’s features.
      </p>

      <p>
        <strong>Why do APIs use keys?</strong> API keys help control access and
        prevent misuse. They ensure that no single user overwhelms the API with
        too many requests, which could slow down or disrupt the service for
        everyone else.
      </p>

      <h2>5. What is API Documentation?</h2>
      <p>
        API documentation is like a user manual for the API. It provides
        instructions on how to use the API effectively, including how to make
        requests, what data you can ask for, and how the API will respond.
      </p>

      <p>
        <strong>In the documentation, you’ll find:</strong>
      </p>

      <ul>
        <li>
          <strong>Endpoints:</strong> The different addresses (URLs) you can use
          to get specific types of data.
        </li>
        <li>
          <strong>Parameters:</strong> The extra pieces of information you need
          to include in your requests, like the city name for weather data.
        </li>
        <li>
          <strong>Response Format:</strong> How the API sends back the data,
          usually in a format called JSON (a simple text format that’s easy to
          read and write).
        </li>
      </ul>

      <p>
        <strong>Example:</strong> If you’re using the OpenWeather API, the
        documentation will show you how to request weather data, what parameters
        you need (like city or coordinates), and what the response will look
        like.
      </p>

      <h2>6. Practical Example (Introducing Fetch)</h2>
      <p>
        Now that you understand the basics, it’s time to see how this all comes
        together in code. We’ll use the <strong>fetch</strong> method in
        JavaScript to request data from an API. Don’t worry if it sounds a bit
        technical; I’ll walk you through each step.
      </p>

      <p>
        <strong>To recap:</strong>
      </p>

      <ul>
        <li>
          There are different types of APIs, with Web APIs being the most common
          for web development.
        </li>
        <li>
          APIs can be free or paid, and knowing the difference helps you plan
          your usage.
        </li>
        <li>
          Endpoints are specific addresses where you send requests to get data.
        </li>
        <li>API keys are like passwords that give you access to an API.</li>
        <li>Documentation is your guide to using an API correctly.</li>
      </ul>
      <AdUnit />
      <h2>Summary</h2>
      <p>
        In this lesson, we’ve covered what APIs are, the different types, how
        they are created, what endpoints and API keys are, and how to read API
        documentation. This foundation will prepare you to confidently start
        making requests to APIs using JavaScript’s <code>fetch</code> method.
      </p>

      <div className="button-container">
        <button onClick={() => (window.location.href = "/IntroAPI")}>
          back
        </button>
        <button onClick={() => (window.location.href = "/getData")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const GetData = () => {
  return (
    <div className="comments-container internet">
      <h1>Fetching Data from APIs</h1>

      <p>
        Welcome to the next step of learning about APIs! 🌟 In this lesson,
        we’ll dive into how to fetch data from an API. This means we’ll learn
        how to request data from an API and handle the response we get back.
        Let's explore this step by step.
      </p>

      <h2>1. Understanding the Fetch Method</h2>
      <p>
        Think of fetching data from an API like ordering a book from an online
        bookstore. You place an order (make a request), and the bookstore sends
        you the book (the data) you wanted. In programming, we use the{" "}
        <code>fetch</code> method to place this order.
      </p>

      <h3>a. Making a Basic Fetch Request</h3>
      <p>
        The basic way to fetch data is using the <code>fetch</code> method.
        Here's how you use it:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Let’s break this down:</p>

      <ul>
        <li>
          <strong>fetch('https://api.example.com/data'):</strong> This is the
          address where you’re sending your request. Replace{" "}
          <code>'https://api.example.com/data'</code> with the URL of the API
          you want to use.
        </li>
        <li>
          <strong>{`.then(response => response.json())`}:</strong> After sending
          the request, you get a response from the API. The{" "}
          <code>response.json()</code> part turns that response into a format
          that’s easy to work with (JSON).
        </li>
        <li>
          <strong>{`.then(data => console.log(data))`}:</strong> This part
          handles the data you received from the API. Here, we’re just printing
          it to the console so you can see it.
        </li>
        <li>
          <strong>{`.catch(error => console.error('Error:', error))`}:</strong>{" "}
          This handles any issues that occur during the fetch request, like if
          there’s a problem with the network or the API is down.
        </li>
      </ul>

      <h3>b. Fetching Data with an API Key</h3>
      <p>
        Some APIs require you to include an API key in your request. Think of an
        API key like a membership card that allows you to access certain
        services. Without it, the API might not let you in.
      </p>

      <p>
        To include the API key, you add it to the URL. Here’s an example of how
        you include it:
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
      fetch('https://api.example.com/data?api_key=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>In this example:</p>

      <ul>
        <li>
          <strong>YOUR_API_KEY:</strong> Replace this with the actual API key
          you received from the API provider. The API key is often included as a
          query parameter in the URL (after the <code>?</code>).
        </li>
      </ul>

      <h3>c. Handling Different Response Types</h3>
      <p>
        Sometimes, the API might send different types of responses. For
        instance, it might send text, JSON, or even binary data. Most of the
        time, APIs send JSON data, but it’s important to handle other types of
        responses as well.
      </p>

      <p>Here’s how you can handle text responses:</p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
      fetch('https://api.example.com/text-data')
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(error => console.error('Error:', error));
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>
        In this example, <code>response.text()</code> is used instead of{" "}
        <code>response.json()</code> to handle text data.
      </p>

      <h3>d. Using Async/Await for Fetch Requests</h3>
      <p>
        Another way to handle fetch requests is by using{" "}
        <code>async/await</code>. This makes your code look cleaner and easier
        to read, like writing a list of instructions rather than chaining
        multiple steps together.
      </p>

      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
      async function fetchData() {
        try {
          const response = await fetch('https://api.example.com/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      fetchData();
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <p>Here’s what’s happening:</p>

      <ul>
        <li>
          <strong>async function fetchData():</strong> This declares an
          asynchronous function. It lets you use <code>await</code> inside it.
        </li>
        <li>
          <strong>
            const response = await fetch('https://api.example.com/data');
          </strong>{" "}
          This line waits for the fetch request to complete before continuing.
        </li>
        <li>
          <strong>if (!response.ok):</strong> Checks if the response was
          successful. If not, it throws an error.
        </li>
        <li>
          <strong>const data = await response.json();</strong> Waits for the
          response to be converted to JSON.
        </li>
        <li>
          <strong>catch (error):</strong> Catches and logs any errors that
          occurred during the fetch process.
        </li>
      </ul>

      <h2>5. Summary</h2>
      <p>To recap, fetching data from an API involves:</p>

      <ul>
        <li>
          Using the <code>fetch</code> method to make a request.
        </li>
        <li>
          Handling the response by converting it to a usable format (like JSON).
        </li>
        <li>Including an API key in your request if required.</li>
        <li>Handling different types of responses (text, JSON, etc.).</li>
        <li>
          Using <code>async/await</code> to make your code cleaner and easier to
          manage.
        </li>
      </ul>

      <p>
        With these steps, you can start fetching data from APIs and integrating
        it into your projects. Next up, we'll explore how to display this data
        in your app. Stay tuned! 🚀
      </p>
      <div className="button-container">
        <button
          onClick={() => (window.location.href = "/FetchingDataFromApis")}
        >
          back
        </button>
        <button onClick={() => (window.location.href = "/displayData")}>
          Next
        </button>
      </div>
    </div>
  );
};

export const DisplayData = () => {
  return (
    <div className="comments-container internet">
      <h1>Displaying API Data in JavaScript</h1>

      <p>
        In our previous lesson, we learned how to fetch data from an API using
        JavaScript. Now, we’re going to take it a step further by learning how
        to display this data on our webpage. To make it simple, we'll use a fun
        and easy API: the Dog CEO's Dog API, which gives us random dog images.
        Imagine it like having a magic box that gives you a new dog picture
        every time you ask for it!
      </p>

      <p>By the end of this lesson, you'll understand:</p>
      <ul>
        <li>How to fetch data from an API.</li>
        <li>How to display that fetched data on your webpage.</li>
      </ul>

      <h2>1. Setting Up the HTML</h2>
      <p>
        First, let’s set up a basic HTML file. This file will contain a place to
        show our dog image. Think of this like setting up a blank photo frame
        where we will put our picture later.
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="HTML" style={docco}>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dog Image App</title>
</head>
<body>
<h1>Random Dog Image</h1>
<!-- Placeholder for the dog image -->
<img id="dog-image" alt="Random Dog" width="300" />
<script src="app.js"></script>
</body>
</html>
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        In this HTML file:
        <ul>
          <li>
            <strong>The {`<img>`} tag:</strong> This is where we’ll show the dog
            image. It’s like our empty picture frame with an ID of `dog-image`
            so we can find it later with JavaScript.
          </li>
          <li>
            <strong>The `id="dog-image"`:</strong> This ID helps us target the
            image element from our JavaScript code. It's like giving our photo
            frame a name so we know exactly which one to update.
          </li>
        </ul>
      </p>

      <h2>2. Writing the JavaScript to Fetch and Display Data</h2>
      <p>
        Next, let’s write some JavaScript to fetch a random dog image from our
        API and put it into our HTML page. Imagine this like calling a friend
        (the API) to get a dog picture and then placing that picture into our
        photo frame (HTML).
      </p>
      <pre>
        <code>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dogImageElement = document.getElementById('dog-image');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
dogImageElement.src = data.message;
})
.catch(error => {
console.error('Error fetching data:', error);
});
    `}
          </SyntaxHighlighter>
        </code>
      </pre>
      <p>
        Let’s break down this JavaScript code:
        <ul>
          <li>
            <strong>Define the API URL:</strong> We set `apiUrl` to the endpoint
            that gives us a random dog image. Think of this URL as the address
            of the store where we’re buying our picture.
          </li>
          <li>
            <strong>Select the HTML Element:</strong> We use
            `document.getElementById('dog-image')` to grab our image placeholder
            from the HTML. It’s like finding the specific photo frame in our
            room where we want to put the new picture.
          </li>
          <li>
            <strong>Fetch Data:</strong> We use `fetch(apiUrl)` to request the
            data from the API. This is like placing an order for the picture
            from the store. Once we get a response, we convert it to JSON with
            `response.json()`, just like opening the package to see what’s
            inside.
          </li>
          <li>
            <strong>Update the Image Source:</strong> We set the `src` attribute
            of the {`<img>`} element to the URL of the dog image received from
            the API. This step is like putting the new picture into the frame.
          </li>
          <li>
            <strong>Handle Errors:</strong> If something goes wrong, we catch
            the error with `.catch()` and log it to the console. It’s like
            calling the store to ask why our picture didn’t arrive.
          </li>
        </ul>
      </p>

      <h2>3. How It All Connects</h2>
      <p>
        This lesson builds on our previous knowledge of fetching data:
        <ul>
          <li>
            <strong>Fetching Data Recap:</strong> We previously learned how to
            use the `fetch` method to get data from an API and handle the
            response. This is the same method we’re using to get our dog image.
          </li>
          <li>
            <strong>Displaying Data:</strong> Now, we’re using that fetched data
            to update our HTML. We’re turning the data we got into something
            visual on our page, similar to how we filled in our empty photo
            frame.
          </li>
        </ul>
        Think of fetching data as getting a delivery from the store, and
        displaying data as putting that delivery on display for everyone to see.
      </p>

      <h2>4. What Happens When the Code Runs</h2>
      <p>
        Here’s a step-by-step of what happens when you load the webpage:
        <ul>
          <li>
            The JavaScript code runs and fetches a random dog image from the
            API.
          </li>
          <li>
            The code waits for the response to come back. This is like waiting
            for our delivery to arrive.
          </li>
          <li>
            Once the data arrives, JavaScript updates the `src` attribute of the{" "}
            {`<img>`} tag with the URL of the dog image. This step puts the
            picture into our photo frame.
          </li>
        </ul>
      </p>

      <h2>5. Full Example (HTML + JavaScript)</h2>
      <p>Here’s a complete example that combines HTML and JavaScript:</p>
      <pre>
        <code>
          <SyntaxHighlighter language="html" style={docco}>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dog Image App</title>
</head>
<body>
<h1>Random Dog Image</h1>
<img id="dog-image" alt="Random Dog" width="300" />
<script>
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dogImageElement = document.getElementById('dog-image');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    dogImageElement.src = data.message;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
</script>
</body>
</html>
    `}
          </SyntaxHighlighter>
        </code>
      </pre>

      <h2>6. Key Takeaways</h2>
      <ul>
        <li>
          <strong>Fetch Data with JavaScript:</strong> The `fetch` method is
          used to get data from an API. It’s a powerful tool for working with
          remote data.
        </li>
        <li>
          <strong>Display Data with JavaScript:</strong> Once we have the data,
          we update our HTML elements to show this data. This makes our webpage
          dynamic and interactive.
        </li>
      </ul>
      <p>
        With these skills, you can now fetch and display data from APIs, making
        your web pages more engaging and responsive to real-time information.
      </p>

      <h2>7. Practice Challenge</h2>
      <p>
        Try using a different API to fetch and display other types of data, such
        as random quotes or fun facts. This will help you get comfortable with
        working with different kinds of data and APIs.
      </p>
      <div className="button-container">
        <button onClick={() => (window.location.href = "/getData")}>
          back
        </button>
      </div>
    </div>
  );
};
