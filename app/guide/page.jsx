"use client";

import React, { useState } from "react";
import Button from "../button";

const BeginnerGuide = () => {
  const [view, setView] = useState("read");

  const handleViewChange = (option) => {
    setView(option);
  };

  return (
    <div className="lesson-container">
      <h1>Welcome to the Magical World of Software Development!</h1>

      {/* Buttons to switch between video or reading */}
      <div className="view-options">
        <button
          onClick={() => handleViewChange("read")}
          className={view === "read" ? "active" : ""}
        >
          Read
        </button>
        <button
          onClick={() => handleViewChange("watch")}
          className={view === "watch" ? "active" : ""}
        >
          Watch Video
        </button>
        <button
          onClick={() => handleViewChange("both")}
          className={view === "both" ? "active" : ""}
        >
          Both
        </button>
      </div>

      {/* Conditionally render content based on the user's choice */}
      {view === "read" && (
        <div className="content">
          <section>
            <h2>Imagine a World You Can Create...</h2>
            <p>
              Close your eyes for a moment. Imagine you have a magic wand that
              can create anything you can think of in the digital world. Want to
              build the next Facebook? Wave your wand. Need an app that reminds
              you to water your plants? Another wave. How about a game that's
              even more addictive than Candy Crush? You guessed it – just wave
              that wand!
            </p>
            <p>
              Now, open your eyes. That magic wand? It's real. It's called
              software development, and you're about to learn how to use it.
            </p>
          </section>

          <section>
            <h2>What is Software Development, Really?</h2>
            <p>
              At its heart, software development is about solving problems and
              creating tools that make people's lives easier, more productive,
              or more entertaining. It's like being a digital architect,
              builder, and magician all rolled into one.
            </p>
            <p>
              Let's break it down with a real-world example: Think about your
              favorite social media app. Every time you post a photo, like a
              friend's status, or send a message, you're interacting with
              software that someone developed. Behind each of these actions,
              there's a set of instructions telling the app what to do:
            </p>
            <ul>
              <li>"When the user taps this button, open the camera."</li>
              <li>
                "If the user double-taps this image, increase the like count by
                one."
              </li>
              <li>
                "When the user hits send, deliver this message to their friend."
              </li>
            </ul>
            <p>
              As a software developer, you're the one writing these
              instructions. You're creating the rules that bring these digital
              experiences to life.
            </p>
          </section>

          <section>
            <h2>The Building Blocks: Hardware and Software</h2>
            <p>
              Before we dive deeper, let's understand the two main components of
              the computing world: hardware and software. They're like the body
              and mind of a computer system.
            </p>
            <h3>Hardware: The Physical Stuff</h3>
            <p>
              Hardware is anything you can touch. Your smartphone, laptop, the
              screen you're reading this on – that's all hardware. It's the
              physical body of our digital world.
            </p>
            <h3>Software: The Invisible Magic</h3>
            <p>
              Software is the set of instructions that tells the hardware what
              to do. It's invisible – you can't touch it, but you interact with
              it every day. Every app on your phone, every website you visit,
              even the operating system that starts up when you turn on your
              computer – that's all software.
            </p>
            <p>
              Here's a fun way to think about it: Imagine a restaurant. The
              kitchen, ovens, and utensils are the hardware. The recipes and the
              chef's knowledge? That's the software. Just like how different
              recipes can create various dishes using the same kitchen
              equipment, different software can make your computer or phone do
              various things.
            </p>
          </section>

          <section>
            <h2>Speaking the Language of Computers</h2>
            <p>
              Now, you might be wondering, "How do I actually create software?
              How do I tell a computer what to do?" This is where programming
              languages come in.
            </p>
            <p>
              Programming languages are the tools we use to communicate with
              computers. Just like how we use English, Spanish, or Mandarin to
              communicate with other people, we use languages like Python,
              JavaScript, or C++ to communicate with computers.
            </p>
            <p>
              Let's look at a real-world example. Say you're creating a simple
              app that greets the user. In a human language, you might think:
            </p>
            <blockquote>
              "When the app starts, show the message 'Hello! Welcome to my app.'
              on the screen."
            </blockquote>
            <p>In a programming language like Python, you might write:</p>
            <pre>print("Hello! Welcome to my app.")</pre>
            <p>
              That's it! You've just written your first line of code. Of course,
              real applications are much more complex, but they all start with
              simple instructions like this.
            </p>
          </section>

          <section>
            <h2>The Two Sides of the Digital Coin: Frontend and Backend</h2>
            <p>
              As you start exploring the world of software development, you'll
              often hear about frontend and backend development. Think of it
              like a restaurant again:
            </p>
            <h3>Frontend: The Dining Area</h3>
            <p>
              Frontend is everything the user sees and interacts with. In our
              restaurant, it's the dining area – the tables, chairs, decor,
              menu, and the waitstaff. In the digital world, it's the buttons
              you click, the images you see, the text you read.
            </p>
            <p>
              Frontend developers use languages like HTML (for structure), CSS
              (for style), and JavaScript (for interactivity) to create the user
              interface of websites and apps.
            </p>

            <h3>Backend: The Kitchen</h3>
            <p>
              Backend is everything that happens behind the scenes. In our
              restaurant, it's the kitchen – where the food is prepared, orders
              are processed, and inventory is managed. In software, it's the
              servers, databases, and application logic that power the frontend.
            </p>
            <p>
              Backend developers use languages like Python, Ruby, Java, or
              Node.js to create the logic that makes applications work.
            </p>
            <p>
              For example, when you tap the "Like" button on a social media
              post, the frontend makes the button change color or show an
              animation. But it's the backend that actually updates the like
              count in the database and notifies the post owner.
            </p>
          </section>

          <section>
            <h2>Your Journey Begins: First Steps into Coding</h2>
            <p>
              Now that you have a bird's-eye view of the software development
              landscape, you might be wondering, "Where do I start?" Don't
              worry, every master coder was once a beginner like you. Here's a
              roadmap to get you started:
            </p>
            <ol>
              <li>
                <strong>Start with the basics of the web: HTML and CSS</strong>
                <p>
                  These are the building blocks of every website. HTML
                  structures your content (like creating paragraphs, headings,
                  and lists), while CSS makes it look pretty (adding colors,
                  changing fonts, creating layouts).
                </p>
              </li>
              <li>
                <strong>Add some interactivity with JavaScript</strong>
                <p>
                  Once you're comfortable with HTML and CSS, JavaScript will
                  allow you to add behavior to your web pages. Want a button
                  that changes color when you click it? That's JavaScript
                  territory.
                </p>
              </li>
              <li>
                <strong>
                  Choose a direction: Dive deeper into frontend or explore the
                  backend
                </strong>
                <p>
                  At this point, you might find yourself more drawn to either
                  creating user interfaces (frontend) or working with data and
                  servers (backend). Follow your interest!
                </p>
              </li>
              <li>
                <strong>Build projects, make mistakes, and learn</strong>
                <p>
                  The best way to learn is by doing. Start small – maybe a
                  personal website or a simple calculator app. As you build,
                  you'll run into problems. That's great! Each problem you solve
                  teaches you something new.
                </p>
              </li>
              <li>
                <strong>Join the community</strong>
                <p>
                  Programming can seem solitary, but there's a vast community of
                  developers out there willing to help. Participate in forums
                  like Stack Overflow, join local coding meetups, and don't be
                  afraid to ask questions.
                </p>
              </li>
            </ol>
          </section>

          <Button whereToGo={"/html"} />
        </div>
      )}

      {view === "watch" && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CxGSnA-RTsA?si=ij1RrHygP7vKf7u0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}

      {view === "both" && (
        <div className="both-content">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CxGSnA-RTsA?si=ij1RrHygP7vKf7u0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="content">
            <section>
              <h2>Imagine a World You Can Create...</h2>
              <p>
                Close your eyes for a moment. Imagine you have a magic wand that
                can create anything you can think of in the digital world. Want
                to build the next Facebook? Wave your wand. Need an app that
                reminds you to water your plants? Another wave. How about a game
                that's even more addictive than Candy Crush? You guessed it –
                just wave that wand!
              </p>
              <p>
                Now, open your eyes. That magic wand? It's real. It's called
                software development, and you're about to learn how to use it.
              </p>
            </section>

            <section>
              <h2>What is Software Development, Really?</h2>
              <p>
                At its heart, software development is about solving problems and
                creating tools that make people's lives easier, more productive,
                or more entertaining. It's like being a digital architect,
                builder, and magician all rolled into one.
              </p>
              <p>
                Let's break it down with a real-world example: Think about your
                favorite social media app. Every time you post a photo, like a
                friend's status, or send a message, you're interacting with
                software that someone developed. Behind each of these actions,
                there's a set of instructions telling the app what to do:
              </p>
              <ul>
                <li>"When the user taps this button, open the camera."</li>
                <li>
                  "If the user double-taps this image, increase the like count
                  by one."
                </li>
                <li>
                  "When the user hits send, deliver this message to their
                  friend."
                </li>
              </ul>
              <p>
                As a software developer, you're the one writing these
                instructions. You're creating the rules that bring these digital
                experiences to life.
              </p>
            </section>

            <section>
              <h2>The Building Blocks: Hardware and Software</h2>
              <p>
                Before we dive deeper, let's understand the two main components
                of the computing world: hardware and software. They're like the
                body and mind of a computer system.
              </p>
              <h3>Hardware: The Physical Stuff</h3>
              <p>
                Hardware is anything you can touch. Your smartphone, laptop, the
                screen you're reading this on – that's all hardware. It's the
                physical body of our digital world.
              </p>
              <h3>Software: The Invisible Magic</h3>
              <p>
                Software is the set of instructions that tells the hardware what
                to do. It's invisible – you can't touch it, but you interact
                with it every day. Every app on your phone, every website you
                visit, even the operating system that starts up when you turn on
                your computer – that's all software.
              </p>
              <p>
                Here's a fun way to think about it: Imagine a restaurant. The
                kitchen, ovens, and utensils are the hardware. The recipes and
                the chef's knowledge? That's the software. Just like how
                different recipes can create various dishes using the same
                kitchen equipment, different software can make your computer or
                phone do various things.
              </p>
            </section>

            <section>
              <h2>Speaking the Language of Computers</h2>
              <p>
                Now, you might be wondering, "How do I actually create software?
                How do I tell a computer what to do?" This is where programming
                languages come in.
              </p>
              <p>
                Programming languages are the tools we use to communicate with
                computers. Just like how we use English, Spanish, or Mandarin to
                communicate with other people, we use languages like Python,
                JavaScript, or C++ to communicate with computers.
              </p>
              <p>
                Let's look at a real-world example. Say you're creating a simple
                app that greets the user. In a human language, you might think:
              </p>
              <blockquote>
                "When the app starts, show the message 'Hello! Welcome to my
                app.' on the screen."
              </blockquote>
              <p>In a programming language like Python, you might write:</p>
              <pre>print("Hello! Welcome to my app.")</pre>
              <p>
                That's it! You've just written your first line of code. Of
                course, real applications are much more complex, but they all
                start with simple instructions like this.
              </p>
            </section>

            <section>
              <h2>The Two Sides of the Digital Coin: Frontend and Backend</h2>
              <p>
                As you start exploring the world of software development, you'll
                often hear about frontend and backend development. Think of it
                like a restaurant again:
              </p>
              <h3>Frontend: The Dining Area</h3>
              <p>
                Frontend is everything the user sees and interacts with. In our
                restaurant, it's the dining area – the tables, chairs, decor,
                menu, and the waitstaff. In the digital world, it's the buttons
                you click, the images you see, the text you read.
              </p>
              <p>
                Frontend developers use languages like HTML (for structure), CSS
                (for style), and JavaScript (for interactivity) to create the
                user interface of websites and apps.
              </p>

              <h3>Backend: The Kitchen</h3>
              <p>
                Backend is everything that happens behind the scenes. In our
                restaurant, it's the kitchen – where the food is prepared,
                orders are processed, and inventory is managed. In software,
                it's the servers, databases, and application logic that power
                the frontend.
              </p>
              <p>
                Backend developers use languages like Python, Ruby, Java, or
                Node.js to create the logic that makes applications work.
              </p>
              <p>
                For example, when you tap the "Like" button on a social media
                post, the frontend makes the button change color or show an
                animation. But it's the backend that actually updates the like
                count in the database and notifies the post owner.
              </p>
            </section>

            <section>
              <h2>Your Journey Begins: First Steps into Coding</h2>
              <p>
                Now that you have a bird's-eye view of the software development
                landscape, you might be wondering, "Where do I start?" Don't
                worry, every master coder was once a beginner like you. Here's a
                roadmap to get you started:
              </p>
              <ol>
                <li>
                  <strong>
                    Start with the basics of the web: HTML and CSS
                  </strong>
                  <p>
                    These are the building blocks of every website. HTML
                    structures your content (like creating paragraphs, headings,
                    and lists), while CSS makes it look pretty (adding colors,
                    changing fonts, creating layouts).
                  </p>
                </li>
                <li>
                  <strong>Add some interactivity with JavaScript</strong>
                  <p>
                    Once you're comfortable with HTML and CSS, JavaScript will
                    allow you to add behavior to your web pages. Want a button
                    that changes color when you click it? That's JavaScript
                    territory.
                  </p>
                </li>
                <li>
                  <strong>
                    Choose a direction: Dive deeper into frontend or explore the
                    backend
                  </strong>
                  <p>
                    At this point, you might find yourself more drawn to either
                    creating user interfaces (frontend) or working with data and
                    servers (backend). Follow your interest!
                  </p>
                </li>
                <li>
                  <strong>Build projects, make mistakes, and learn</strong>
                  <p>
                    The best way to learn is by doing. Start small – maybe a
                    personal website or a simple calculator app. As you build,
                    you'll run into problems. That's great! Each problem you
                    solve teaches you something new.
                  </p>
                </li>
                <li>
                  <strong>Join the community</strong>
                  <p>
                    Programming can seem solitary, but there's a vast community
                    of developers out there willing to help. Participate in
                    forums like Stack Overflow, join local coding meetups, and
                    don't be afraid to ask questions.
                  </p>
                </li>
              </ol>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeginnerGuide;
