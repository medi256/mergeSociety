import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title:
    "APIs Explained: What is an API, Why It Exists, and Real Examples You Use Daily",
  description:
    "Learn what APIs are with simple analogies, real-world examples, and why they power every app on your phone. Complete beginner's guide to APIs with practical examples.",

  keywords: [
    "what is an API",
    "API explained",
    "application programming interface",
    "API examples",
    "how APIs work",
    "API for beginners",
    "REST API",
    "API tutorial",
    "web API",
    "mobile app API",
    "API integration",
    "third party API",
  ],

  openGraph: {
    title:
      "APIs Explained: What is an API, Why It Exists, and Real Examples You Use Daily",
    description:
      "Learn what APIs are with simple analogies, real-world examples, and why they power every app on your phone. Complete beginner's guide to APIs.",
    type: "article",
    url: "https://www.mergesociety.com/code-report/apis-explained-to-a-kid",
    images: [
      {
        url: "/mergesociety/audio_1756110851790_hdqj7r_c3wqmm_ky0rmc.webp",
        width: 1200,
        height: 675,
        alt: "How APIs work with real-world examples",
      },
    ],
    siteName: "Merge Society",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "APIs Explained: What is an API, Why It Exists, and Real Examples You Use Daily",
    description:
      "Learn what APIs are with simple analogies, real-world examples, and why they power every app on your phone. Complete beginner's guide to APIs.",
    images: ["/mergesociety/audio_1756110851790_hdqj7r_c3wqmm_ky0rmc.webp"],
  },

  authors: [{ name: "Massa Medi", url: "https://www.instagram.com/medi45.of" }],
  creator: "Massa Medi",
  category: "Technology",

  other: {
    "article:published_time": "2025-01-15T10:00:00Z",
    "article:modified_time": "2025-01-15T10:00:00Z",
    "article:author": "Your Name",
    "article:section": "Programming",
    "article:tag":
      "API, Web Development, Programming, Technology, Software Development",
  },

  alternates: {
    canonical:
      "https://www.mergesociety.com/code-report/apis-explained-to-a-kid",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = () => {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>

      <article className="lesson-container">
        <h1>
          APIs explained - what is an API, why it exists, and real examples you
          already use every day
        </h1>
        <figure className="article-figure">
          <Image
            src="/mergesociety/audio_1756110851790_hdqj7r_c3wqmm_ky0rmc.webp"
            alt="How APIs work with real-world examples"
            width={600}
            height={400}
            priority
          />
          <figcaption>
            APIs power apps you use daily — here’s what that means in practice.
          </figcaption>
        </figure>
        <aside aria-label="Page meta">
          <h2 className="project-info">
            <span className="project-title">
              <Link href={"https://www.instagram.com/medi45.of"}>
                Written by Massa Medi
              </Link>
            </span>
            <time className="project-date" dateTime="2025-08-25">
              | August 25, 2025
            </time>
          </h2>
        </aside>

        <p>
          If you hang around programmers long enough, you keep hearing this one
          word tossed around like it solves everything: APIs. People talk about
          APIs the way chefs talk about knives or photographers talk about
          light. But if you are not living inside code editors and terminal
          windows all day, API sounds abstract. So let me make it simple, no
          jargon, and very real.
        </p>

        <section aria-labelledby="what-is-an-api">
          <h2 id="what-is-an-api">
            A non-technical way to get what APIs really are
          </h2>
          <p>
            Picture this. You walk into a restaurant. You are hungry, you know
            roughly what you want, and you do not want to go anywhere near a
            sizzling pan. You sit down, look over the menu, and a waiter shows
            up. You talk to the waiter, not the chef. You ask the waiter
            questions, place your order, request extra sauce, pay the bill, and
            maybe sneak in a dessert at the end. You interact with one friendly
            human who shields you from the stress and madness happening in the
            kitchen.
          </p>
          <p>
            Now look behind that curtain. There are cooks yelling times, ovens
            cranking at 220 degrees, fridges humming, inventory being tracked so
            nobody runs out of salmon at 8 pm, and plates lined up like a tiny
            ceramic traffic jam. You do not deal with any of this. The waiter is
            your interface to the entire restaurant. They know what you can ask
            for, what the kitchen can do, and what you are not allowed to do.
            You cannot just stroll into the kitchen and start flipping steaks.
            There is a boundary, and the waiter makes that boundary usable.
          </p>
          <p>
            That waiter is the API of the restaurant. Seriously. An API is a
            menu of what you can ask for, the rules for how to ask, and a
            promise that the kitchen on the other side will understand you and
            try to deliver. You do not need to know how the kitchen is built,
            what brand of oven they use, or how the fish arrives every morning
            on crushed ice. You just need a clean way to ask for stuff and get
            results back. That is the entire magic of APIs in one story.
          </p>
          <p>
            Now, the letters. API stands for Application Programming Interface.
            Think of it as a contract that lets two pieces of software talk to
            each other in a predictable way. It is not just a single thing. APIs
            can be simple or complex, public or private, human friendly or
            machine only. They are a bunch of rules that say: if you ask for X
            in this format, I will give you Y in that format. Restaurants use
            words and waiters. Computers use URLs, keys, and data formats. Same
            idea.
          </p>
        </section>

        <section>
          <p className="mt-6 text-sm sm:text-base">
            Prefer watching instead of reading? You can watch the full
            walkthrough below, or keep scrolling to read the complete article.
          </p>

          <div
            className="relative mt-3 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/OVvTv9Hy91Q?si=_qybic8G9FBrdkBA"
              title="How APIs work with real-world examples"
              loading="lazy"
              fetchPriority="high"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="why-apis-exist">
          <h2 id="why-apis-exist">So why do APIs exist in the first place?</h2>
          <p>
            I like to group the reasons into four buckets. They are all
            connected, and you will see them every time you use your phone or
            open your laptop.
          </p>

          <section aria-labelledby="access-third-party-data">
            <h3 id="access-third-party-data">
              1 - Access data from third parties
            </h3>
            <p>
              Back to the restaurant for one second. Ask the waiter where your
              sushi is and they can update you without making you crash into the
              chef during the dinner rush. That status update is data. You got
              it cleanly through the interface. In the digital world, APIs let
              your app ask a different service for data without your app having
              to become an expert in that service’s entire universe.
            </p>
            <p>
              Take the weather app on your phone. Apple and Google are not
              planting temperature sensors under every tree on earth. That would
              be hilarious and wildly expensive. Instead, the weather app calls
              the API of a weather provider to pull forecasts, humidity, wind
              speed, and alerts. Apple, for instance, has used The Weather
              Channel’s API at various points to power parts of their weather
              features. That means your app makes a simple request like: give me
              the forecast for Paris tomorrow. The weather API responds with
              structured data, often in JSON, that your app can turn into a
              pretty chart with raindrops and sun icons. It feels instant to
              you, even though there is a lot of science and infrastructure
              hiding behind that tiny sun emoji.
            </p>
            <p>
              And it is not just weather. There are APIs for recipes, song
              lyrics, barcode lookups, public holidays, school calendars, plane
              arrival times, and available parking spots in crowded city
              garages. There is probably an API for the sandwich you are eating
              right now. The point is, if someone has data and they want apps to
              be able to use it in a controlled way, they put an API in front of
              it. Your app then sends a request to an address like
              https://api.example.com/holidays?country=US and gets back a list
              of holidays for that country. No emails to humans. No spreadsheets
              flying around. Just predictable requests and predictable answers.
            </p>
            <p>
              Here is another angle. Think about maps. Most apps that show a map
              are not drawing every road themselves. They are calling a maps API
              to fetch tiles, routes, geocoding results, and traffic
              information. If your app needs to know what country a zip code
              belongs to, an API can answer in milliseconds. If you scan a
              barcode at the store and an app tells you the product name, that
              app hit a barcode database through an API. These tiny connections
              are everywhere, and they are the reason your apps can feel smart
              without holding the entire world’s data inside them.
            </p>
          </section>

          <section aria-labelledby="hide-complexity-perform-tasks">
            <h3 id="hide-complexity-perform-tasks">
              2 - Hide complexity and perform tasks
            </h3>
            <p>
              APIs are not just for reading data. They are also about doing
              things without learning rocket science first. Staying with the
              restaurant, you did not go to sushi school to get a salmon roll.
              You asked the waiter, and the kitchen handled the knives, the
              rice, the fish, and the plating. In software, the operating system
              on your phone or laptop is the kitchen. The system exposes a bunch
              of APIs that say: if you want a button, ask for one like this. If
              you want to connect to Wi-Fi, call me like that. If you want to
              use the camera, here is how you do it. The system then does the
              heavy lifting.
            </p>
            <p>
              For example, if an app wants to put a button on the screen, the
              code does not draw every pixel by hand. It calls a UI API. The
              system creates a button that behaves like a button should. It
              looks like a standard button on iOS, and a standard button on
              Android, and a standard button on Windows. The app does not need
              to know your screen size, your GPU model, or how your
              accelerometer wakes up when you rotate the phone. All of that is
              captured behind the API. The developer stays focused on the idea -
              not the plumbing.
            </p>
            <p>
              Same story with networking. Your app does not handcraft radio
              signals to talk to a Wi-Fi router. It calls a networking API:
              connect to this SSID, use this password, handle disconnects, retry
              if it fails. The system knows how to talk to the hardware, how to
              encrypt traffic, and how to switch between cellular and Wi-Fi
              without dropping your video call. You get a clean function call.
              The system gets a mess of hardware differences and edge cases.
              That is the trade that saves developer sanity and makes apps feel
              consistent across devices.
            </p>
            <p>
              Sensors are another good one. Accelerometer, GPS, gyroscope,
              camera, microphone - all of them have powerful, finicky hardware
              details that you do not want to reinvent. The OS wraps each in an
              API. The app asks: what is my location right now, with this level
              of accuracy. The OS decides which chip to use, how to conserve
              battery, and how to blend Wi-Fi and satellite data so your blue
              dot does not jump into the river. The app just gets a nice
              latitude and longitude and a timestamp. Done.
            </p>
          </section>

          <section aria-labelledby="extend-functionality">
            <h3 id="extend-functionality">
              3 - Extend features you already have
            </h3>
            <p>
              APIs also act like permissioned plug sockets. They let you extend
              an existing system without breaking it. On iOS, for example, apps
              can provide widgets that show up in places like the notification
              center or the home screen. How does an app wedge its tiny little
              widget into the system without chaos? Through an API. The app
              tells the system: hey, I have a widget. Here is the size I
              support. Here is what I want to display. The system says: cool, I
              will render it here, follow these rules, and when the user adds
              you, I will ask you for data on a schedule. The app plugs in. The
              system stays in control.
            </p>
            <p>
              Voice assistants are another perfect example. Siri, Google
              Assistant, and Alexa are clever on their own, but they get a lot
              more useful when other developers add skills through an API. When
              a smart outlet maker integrates with Google Assistant, they
              declare things like: I can turn power on and off, I can report
              current state, I have rooms and names. The assistant learns these
              abilities and exposes them to your voice. Suddenly you can say:
              hey Google, turn off the desk lamp, and it works, even though
              Google did not build your outlet. The integration uses the
              assistant’s API as the handshake so they can understand each
              other. Your voice turns into a clean command. The vendor’s cloud
              turns it into a secure action. Your lamp obeys like a champ.
            </p>
            <p>
              This plug-in mindset is everywhere. Payment platforms expose APIs
              so your app can charge a credit card without ever touching a raw
              card number. Calendar apps expose APIs so another app can add an
              event without inventing a calendar from scratch. Email providers
              expose APIs so you can send messages reliably without running your
              own mail server at home like it is 1999. Each time, you get to
              extend what your app can do by leaning on a trusted system that is
              already good at the hard parts.
            </p>
          </section>

          <section aria-labelledby="gatekeepers-permissions">
            <h3 id="gatekeepers-permissions">
              4 - Act as gatekeepers for sensitive stuff
            </h3>
            <p>
              Here is the part you probably notice the most as a user. When an
              app wants your location or your microphone, your phone puts up a
              permission prompt. That little pop-up is not the app being polite
              from the kindness of its heart. That is the operating system
              acting as a bouncer. The OS owns a small set of powerful APIs for
              location, camera, microphone, contacts, health data, and so on. If
              an app wants to cross that line, the system asks you directly. The
              app cannot dodge it. There is no secret side door.
            </p>
            <p>
              Because the OS controls those APIs, it can also tell you when they
              are being used. You will see an indicator when the mic is hot. You
              will see an arrow when location is active. You can go into
              settings and yank permission later if you change your mind. That
              central control is not just convenient - it is your privacy safety
              net. The system acts as the single funnel for sensitive actions so
              it can watch and enforce the rules.
            </p>
            <p>
              The same pattern shows up on the web when you sign in to an app
              using your Google or Facebook account. That login button sits on
              top of an authorization API that says: this app is asking to see
              your name and email. Are you ok with that. You get a clear list of
              what the app wants and the power to say no. If you say yes, the
              app gets a token that says it can see what you approved. Tokens
              can expire. Permissions can be narrowed. You are in the loop - at
              least in theory.
            </p>
            <p>
              Now for the twist. Permissions can last longer than you think, and
              it is easy to forget which apps you let into your data. That gap
              created one of the biggest stories in tech privacy: Cambridge
              Analytica. Here is what happened in human words. A company built a
              personality quiz on Facebook. The quiz asked users for permission
              to access things like their profile details. People clicked yes
              because, well, quizzes are fun and it looked harmless. What many
              did not realize was that the app could keep pulling some data for
              months, even if they never opened the quiz again. The permission
              sat there quietly. The data kept flowing through the Facebook API.
              To revoke it, you had to dig into your Facebook settings and
              remove the app yourself.
            </p>
            <p>
              When you multiply that by millions of users, you see the problem.
              A one-time yes turned into a long-term door that stayed open. The
              fix is not to panic and swear off the internet. The fix is to know
              that APIs with power are guarded by permissions, and those
              permissions deserve a checkup. It is healthy to visit your Google,
              Apple, Facebook, or Microsoft account settings every few months
              and prune access for apps you do not use anymore. Think of it like
              cleaning up your closet. If you have not worn that app in a year,
              it probably does not need your data hanging around its token
              anymore.
            </p>
          </section>
        </section>

        <section aria-labelledby="apis-all-around">
          <h2 id="apis-all-around">
            APIs are everywhere once you start looking
          </h2>
          <p>
            After you see the waiter metaphor and the four big reasons, you
            cannot unsee APIs. They run through every app on your phone. Your
            music app talks to a streaming API to fetch your playlists. Your
            bank app calls secure APIs to list transactions and move money. Your
            shopping app hits APIs for inventory, shipping estimates, and
            tracking updates. Even your smart toaster probably phones home to
            check for firmware updates through an API. That tiny rectangle in
            your pocket is basically an orchestra conductor waving at dozens of
            APIs to make your life feel smooth.
          </p>
          <p>Let me give you a few everyday scenes and pull the API thread:</p>
          <ul>
            <li>
              You call a ride. The app asks a maps API for route time, a
              payments API to save your card, a notifications API to ping you,
              and a driver location API to show the car inching closer. Behind
              the curtain, a queue of requests and responses keeps the whole
              ride flowing.
            </li>
            <li>
              You order lunch. The restaurant app calls a menu API to show
              options, a coupons API to apply deals, and a delivery API to track
              your driver. The process feels like one app, but it is a stack of
              services working together.
            </li>
            <li>
              You log in. The app redirects you to a sign-in API. You enter a
              code, and a token comes back. That token is proof that you are you
              without the app learning your password. Safer for both sides.
            </li>
            <li>
              You get a calendar invite. The app parses it through an API,
              checks conflicts, and suggests a time. When you tap accept, it
              writes the event back through the calendar API where your other
              devices can see it.
            </li>
            <li>
              You scan a product in a grocery store. A barcode API decodes the
              number, a product info API pulls the name, and a nutrition API
              shows calories. In five seconds, three different services just
              helped you decide if you want that snack.
            </li>
          </ul>
          <p>
            None of this requires you to memorize acronyms or read a spec. The
            whole point of APIs is to let different teams and companies build
            pieces that fit together. Like LEGOs, but for software. Each brick
            has a shape and rules. Put them together, and you get castles,
            spaceships, or at least a dashboard that tells you if you need an
            umbrella tomorrow.
          </p>
        </section>

        <section aria-labelledby="how-apis-feel">
          <h2 id="how-apis-feel">What it feels like to build with APIs</h2>
          <p>
            If you are a developer, APIs are a superpower because they remove
            chores. Want to send an email from your app. You do not spin up a
            mail transfer agent and fight spam filters for two weeks. You call a
            mail API that handles delivery, retries, bounces, and compliance.
            Want payments. You do not ask your legal team to become a bank. You
            wire up a payments API that deals with card networks, security,
            fraud checks, and chargebacks. You get to build the part that is
            unique to your app, while the API partner handles the jungle of
            regulations and edge cases.
          </p>
          <p>On the code side, it often looks like this:</p>
          <ul>
            <li>
              You sign up for an API and get a key. That key is like a name tag
              plus a pass. It lets the API know who you are and how much you are
              allowed to do.
            </li>
            <li>
              You read a short guide that says: to get weather for a city, call
              this URL with these parameters. You try it in a browser or a
              command line and see JSON come back. That JSON is just data in a
              tidy structure.
            </li>
            <li>
              You add a small client library so you are not hand building
              requests. Or you write a few lines yourself. Either way, your app
              now knows how to talk to that API.
            </li>
            <li>
              You handle errors like timeouts or rate limits. If you ask too
              often, the API might say slow down. That keeps the service healthy
              for everyone.
            </li>
            <li>
              You ship your feature. When users open your app, they see fresh
              data that actually lives somewhere else. It feels first class, and
              you did not have to recreate someone else’s life’s work.
            </li>
          </ul>
          <p>
            Of course, there are tradeoffs. You depend on another service’s
            uptime. You need to watch your quotas and costs. You have to store
            your keys safely. But in exchange, you get speed and reliability.
            You get to stand on shoulders instead of starting at the bottom of
            the hill with a spoon.
          </p>
        </section>

        <section aria-labelledby="permissions-deep-dive">
          <h2 id="permissions-deep-dive">
            A closer look at permissions and your data
          </h2>
          <p>
            Since the gatekeeper part hits closest to home, let us get practical
            for a minute. Those permission prompts on your phone are backed by a
            few simple rules that help you stay in control. Knowing how they
            work makes the little pop-ups feel less annoying and a lot more
            powerful.
          </p>
          <ul>
            <li>
              Centralized control: the OS owns access to things like camera,
              mic, location, contacts, and photos. Apps cannot bypass the OS. If
              they try to access without asking, the system blocks them.
            </li>
            <li>
              Transparency: when an app uses a sensitive API, you get a visual
              signal. A green or orange dot for mic or camera. A location arrow.
              You are never totally in the dark.
            </li>
            <li>
              Revocation: you can change your mind. In settings, you can turn
              access off later. The OS will cut off the app the next time it
              tries to use that API.
            </li>
            <li>
              Scopes and timing: apps can ask for different levels of access.
              For example, approximate vs precise location, or while using the
              app vs always. Picking the smaller scope gives you the feature
              without opening the floodgates.
            </li>
            <li>
              Auditing: on some platforms, you can see a log of recent accesses.
              If something looks odd, you can yank permission and investigate.
            </li>
          </ul>
          <p>
            On the web, that same spirit runs through sign in with a provider.
            When you hit continue with Google or continue with Facebook, you
            will see a list of what the app wants. That list is not random. It
            is defined by the API. The app can only request what the provider
            allows. You can say yes, say no, or sometimes say yes to part of it.
            If you want to clean up later, you do that in your account’s
            security or apps page. It is worth bookmarking those pages and
            visiting them once in a while, just like you change smoke alarm
            batteries.
          </p>
          <p>
            The Cambridge Analytica story is the cautionary tale that made a lot
            of people finally notice these knobs. A quiz app asked for access.
            People said yes. The access kept doing work quietly for a long time.
            That is the part to remember. Permission is not always one and done.
            It can be ongoing. The good news is that the tools to control it are
            in your hands. The homework is to remember to use them.
          </p>
        </section>

        <section aria-labelledby="extra-examples">
          <h2 id="extra-examples">
            A few more fun API examples you have probably touched
          </h2>
          <p>
            Just to round things out, here are some you might have used without
            realizing it:
          </p>
          <ul>
            <li>
              Lyrics lookup: ever used a music app that shows the lyrics in
              sync. That app is calling a lyrics API that maps timestamps to
              lines, often with special caching so it does not request the whole
              song every second.
            </li>
            <li>
              Barcode and QR scanners: camera apps call decode APIs that take
              the raw camera frame and find the pattern. Once it has the number,
              it calls another API to fetch product info or a web URL.
            </li>
            <li>
              Public holidays: planning tools call a holidays API to avoid
              scheduling meetings on national days off. Many of these APIs
              support multiple countries and regions because holidays vary
              wildly.
            </li>
            <li>
              Parking spaces: city-owned or third party parking platforms expose
              APIs that list open spots by garage, price, and availability. Your
              maps app layers this on top of directions so you do not circle the
              block 12 times.
            </li>
            <li>
              Zip code details: e-commerce checkout forms call zip code APIs to
              auto-fill city and state, and sometimes tax rates. That is why the
              form guesses correctly when you type five digits and hit tab.
            </li>
          </ul>
          <p>
            When you squint, all of these share the same skeleton. A polite
            request goes out. A predictable response comes back. The app turns
            it into something useful for you without dragging you into the
            machine room.
          </p>
        </section>

        <section aria-labelledby="common-questions">
          <h2 id="common-questions">Common questions I get about APIs</h2>
          <h3>Is an API the same as a website</h3>
          <p>
            Not exactly. A website is made for people to read and click. An API
            is made for programs to call. They both live on the internet and
            both use URLs, but an API returns structured data for software,
            while a website returns pages for humans.
          </p>
          <h3>Do I need to know how the other side is built to use an API</h3>
          <p>
            No. That is the joy of it. You only need the contract - the
            endpoints, the parameters, and what comes back. The other side can
            change its hardware, database, and algorithms, and your app does not
            have to care as long as the contract stays steady.
          </p>
          <h3>Are APIs safe</h3>
          <p>
            They can be very safe when built with the right guardrails. You will
            see keys, tokens, scopes, rate limits, and permissions. Those are
            all there to protect both sides. But just like any door, you still
            lock it. Rotate keys, store them carefully, and do regular cleanups.
          </p>
          <h3>What happens if an API is down</h3>
          <p>
            Your app needs a plan B. Show a friendly message, try again later,
            or cache the last known good data. This is part of building with
            APIs - you treat the network as something that can get grumpy
            sometimes and you keep the user experience graceful.
          </p>
        </section>

        <section aria-labelledby="wrap-up">
          <h2 id="wrap-up">Bringing it home</h2>
          <p>
            Let me wrap the thread we started at the restaurant. APIs are the
            waiters of the software world. They give you a clean way to order
            services, fetch information, and perform tasks without forcing you
            into the kitchen chaos. They exist so apps and services can work
            together without sharing their guts.
          </p>
          <ul>
            <li>
              APIs let apps access data from other services. Weather, maps,
              holidays, barcodes - you name it.
            </li>
            <li>
              APIs hide complexity so developers can ask for buttons, Wi-Fi,
              sensors, and more without rebuilding the universe.
            </li>
            <li>
              APIs extend features by letting apps plug into systems like
              widgets, voice assistants, payments, and calendars.
            </li>
            <li>
              APIs act as gatekeepers by centralizing sensitive actions behind
              permission prompts and revocation controls.
            </li>
          </ul>
          <p>
            Once you see this pattern, tech makes more sense. You will notice
            permission prompts and think: right, that is the OS guarding a
            powerful API. You will notice a login with Google button and think:
            this app is asking for a token with limited access, and I can revoke
            it later. You will notice how fast a new app ships a feature and
            think: they plugged into a solid API instead of building the whole
            stack.
          </p>
          <p>
            I hope this cleared the fog around that three letter word that
            developers love. If you want me to go deeper on any part - like the
            difference between REST and GraphQL, or what OAuth really does when
            you hit allow - tell me. Drop your questions or war stories in the
            comments. I read them. I learn from them. And I am happy to turn
            your curiosity into the next article.
          </p>
          <aside aria-label="Explore next">
            <ul>
              <li>
                <Link href="/code-report/sdk-vs-api">
                  APIs vs SDKs Explained
                </Link>{" "}
                - Differences and many more.
              </li>
              <li>
                <Link href="/code-report/websocket-polling">
                  WebSockets vs. Polling vs. Long Polling
                </Link>
              </li>
              <li>
                <Link href="/code-report/websocets-explained">
                  What is WebSockets
                </Link>
              </li>
              <li>
                <Link href="/code-report/http1-http2-http3">
                  HTTP 1 Vs HTTP 2 Vs HTTP 3!
                </Link>
              </li>
            </ul>
          </aside>
          <p>Thanks for reading. Until next time.</p>
        </section>
      </article>
    </div>
  );
};

export default Page;
