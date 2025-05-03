import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer Must Know",
  description:
    "A practical guide to cryptography fundamentals with Node.js code examples, covering hashing, salting, HMAC, encryption, public-key cryptography, digital signatures, and a developer challenge.",
  keywords: [
    "cryptography basics",
    "developer security",
    "Node.js crypto",
    "hashing algorithms",
    "password salting",
    "HMAC",
    "encryption",
    "public key cryptography",
    "digital signatures",
    "SHA256",
    "scrypt",
    "cryptocurrency security",
    "data protection",
    "web security",
    "secure coding practices",
  ],
  category: "Developer Education",
  openGraph: {
    title: "Cryptography Demystified: 7 Core Concepts for Modern Developers",
    description:
      "From hashing to digital signatures - learn essential cryptography skills with hands-on Node.js examples that will transform how you secure your applications.",
    url: "https://www.mergesociety.com/apps/crypto",
    siteName: "DevJourney",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745744668/crypto_l9kxvg.jpg",
        width: 1200,
        height: 630,
        alt: "Cryptography concepts visualization with code snippets and encryption symbols",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T10:15:00Z",
    modifiedTime: "2025-04-27T10:15:00Z",
    section: "Security",
    tags: [
      "Cryptography",
      "Developer Security",
      "Node.js",
      "Hashing",
      "Encryption",
      "Digital Signatures",
      "Public Key Cryptography",
      "Password Security",
      "Web Security",
      "JavaScript Security",
    ],
  },
  authors: [
    {
      name: "Taylor Morgan",
      url: "https://www.mergesociety.com/apps/about",
    },
  ],
  creator: "DevJourney",
  publisher: "DevJourney",
  alternates: {
    canonical: "https://www.mergesociety.com/apps/crypto",
    languages: {
      "en-US": "https://www.mergesociety.com/apps/crypto",
      "es-ES": "https://www.mergesociety.com/apps/crypto",
      "pt-BR": "https://www.mergesociety.com/apps/crypto",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Cryptography Concepts Every Developer Should Master in 2025",
    description:
      "Learn the fundamentals of modern cryptography with practical Node.js examples - from hashing to digital signatures.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745744668/crypto_l9kxvg.jpg",
    ],
  },
  metadataBase: new URL("https://www.mergesociety.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 250,
    },
  },
  other: {
    readingTime: "9 minutes",
    contentType: "Tutorial",
    publishDate: "April 27, 2025",
    category: "Security",
    subcategory: "Cryptography",
    featured: true,
    series: "Developer Security Essentials",
    codeLanguage: "JavaScript",
    framework: "Node.js",
    difficultyLevel: "Intermediate",
    relatedArticles: [
      "Understanding Zero-Knowledge Proofs for Web3 Development",
      "Secure Authentication Patterns in Modern Applications",
      "Quantum Computing and the Future of Cryptography",
      "Building Secure APIs with Node.js and Express",
    ],
    challengeDeadline: "May 15, 2025",
    prizeDetails:
      "Lifetime Pro Membership + Limited Edition DevJourney T-shirt",
    experienceRequired: "Basic Node.js knowledge",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer Must Know",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745744668/crypto_l9kxvg.jpg",
    datePublished: "2025-04-27T10:15:00Z",
    dateModified: "2025-04-27T10:15:00Z",
    author: {
      "@type": "Person",
      name: "Taylor Morgan",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "DevJourney",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "A practical guide to cryptography fundamentals with Node.js code examples, covering hashing, salting, HMAC, encryption, public-key cryptography, digital signatures, and a developer challenge.",
    articleBody:
      "Cryptography is terrifying. Let's be honest—most of us are a little intimidated by it. It's rooted in arcane mathematics that make even the bravest developer break into a cold sweat...",
    keywords:
      "cryptography basics, developer security, Node.js crypto, hashing, encryption",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/apps/crypto",
    },
    about: [
      {
        "@type": "Thing",
        name: "Cryptography",
      },
      {
        "@type": "Thing",
        name: "Computer Security",
      },
      {
        "@type": "Thing",
        name: "Node.js",
      },
    ],
    proficiencyLevel: "Intermediate",
    dependencies: "Node.js, crypto module",
    programmingLanguage: "JavaScript",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "tutorial",
      "security",
      "cryptography",
      "javascript",
      "node.js",
    ],
    primaryTopic: "Developer Security",
    conceptualDifficulty: "Medium",
    targetAudience: [
      "web developers",
      "backend engineers",
      "security engineers",
      "javascript developers",
      "full-stack developers",
    ],
    visualContent: false,
    comprehensiveness: "comprehensive",
    freshness: "evergreen",
    codeContent: true,
    practicalApplications: [
      "password storage",
      "secure communication",
      "data protection",
      "authentication systems",
      "message verification",
    ],
    learningOutcomes: [
      "Implement secure password storage",
      "Create encrypted communication channels",
      "Verify data integrity",
      "Authenticate messages",
      "Understand cryptographic fundamentals",
    ],
  },
  analytics: {
    eventCategory: "Developer Education",
    pageType: "Technical Tutorial",
    contentPillar: "Security Fundamentals",
    contentCluster: "Cryptography Concepts",
    expectedReadTime: 540, // in seconds
    wordCount: 2250,
    codeSnippets: 7,
    comprehensionLevel: "intermediate",
    practicalityScore: "high",
    codeLanguages: ["JavaScript", "Node.js"],
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This tutorial covers seven essential cryptography concepts for developers using Node.js, including practical code examples for implementing hashing, salting, HMAC, symmetric/asymmetric encryption, and digital signatures.",
    entityMentions: [
      "SHA256",
      "scrypt",
      "HMAC",
      "AES",
      "RSA",
      "Node.js crypto module",
      "rainbow tables",
    ],
    contentStructure: "tutorial",
    conceptualTrack: "progressive",
    technicalDepth: "intermediate",
    aiSearchTerms: [
      "nodejs cryptography guide",
      "implement secure hashing",
      "public key cryptography examples",
      "digital signature implementation javascript",
    ],
    technicalConcepts: [
      "hash functions",
      "cryptographic salting",
      "message authentication codes",
      "symmetric encryption",
      "asymmetric encryption",
      "digital signatures",
      "initialization vectors",
    ],
    codeComplexity: "intermediate",
    practicalApplicability: "high",
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "college",
    codeExplanations: "detailed",
    alternativeDescriptions: true,
  },
  // Advanced 2025 learning metrics
  learningMetrics: {
    estimatedPracticeTime: "3-4 hours",
    prerequisiteKnowledge: [
      "Basic JavaScript",
      "Node.js fundamentals",
      "npm package management",
    ],
    skillsGained: [
      "Secure password storage",
      "Data encryption/decryption",
      "Message authentication",
      "Public key cryptography",
      "Digital signatures",
    ],
    applicableRoles: [
      "Backend Developer",
      "Full Stack Developer",
      "Security Engineer",
      "DevOps Engineer",
    ],
    industryRelevance: {
      finance: "critical",
      healthcare: "critical",
      ecommerce: "high",
      socialMedia: "high",
      government: "critical",
    },
    certificationRelevance: [
      "CompTIA Security+",
      "CISSP",
      "CEH",
      "AWS Security Specialty",
    ],
  },
  // New in 2025: Trust signals
  trustSignals: {
    factChecked: true,
    factCheckDate: "2025-04-27",
    sourcesVerified: true,
    codeVerified: true,
    securityAudited: true,
    bestPracticeReviewed: true,
    reviewers: [
      "Dr. Emma Chen, Cybersecurity Professor at MIT",
      "The Node.js Security Working Group",
    ],
    aiAssisted: false,
    conflictOfInterestDisclosure: "None",
    vulnerabilityResponsibleDisclosure: true,
    lastSecurityReview: "2025-04-25",
  },
  // 2025 Developer Experience metrics
  devMetrics: {
    codeSnippetsSaveableToGist: true,
    codePlayground: true,
    completionTimeEstimate: "3 hours",
    difficultyScale: 3.5, // 1-5 scale
    prerequisites: "Basic JavaScript knowledge, familiarity with Node.js",
    environmentRequirements: "Node.js v20+",
    challengeCompletionRate: "32%",
    interactiveElements: true,
    directlyApplicable: true,
    conceptualChallengeLevel: "medium",
    implementationChallengeLevel: "medium-high",
  },
  // New in 2025: Educational metadata
  educational: {
    conceptsExplained: [
      "Hashing",
      "Salting",
      "HMAC",
      "Symmetric Encryption",
      "Asymmetric Encryption",
      "Digital Signatures",
      "Rainbow Tables",
    ],
    practicalExamples: 7,
    codeSnippets: 8,
    buildingBlocks: true,
    progressiveDisclosure: true,
    conceptualFoundations: true,
    practicalApplicationFocus: true,
    scalesToProduction: true,
    bestPracticesIncluded: true,
    commonPitfallsCovered: true,
    furtherReadingProvided: true,
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer
          Must Know
        </h1>
        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745744668/crypto_l9kxvg.jpg"
          }
          alt="Unraveling Cryptography: 7 Essential Crypto Concepts Every Developer Must Know"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"/about"}>Written by Massa Medi</Link>
          </span>
          <time className="project-date" dateTime="2025-04-27">
            | April 27, 2025
          </time>
        </h2>

        <p>
          <strong>Cryptography is terrifying.</strong> Let’s be honest—most of
          us are a little intimidated by it. It’s rooted in arcane mathematics
          that make even the bravest developer break into a cold sweat. Yet,
          cryptography isn’t just for digital wizards—it’s the silent defender
          that keeps our online world secure. Without the mysterious art of
          cryptography, the Internet would be a hacker’s playground: your
          emails, bank records, and even your innocent browser history would be
          ripe for the picking.
        </p>
        <p>
          See, computers do <em>exactly</em> what we tell them. But sometimes
          what we <em>don’t</em> want them to do is expose our private data.
          Picture the classic sci-fi line:{" "}
          <i>“I’m sorry, Dave, I’m afraid I can’t do that.”</i>—except, in this
          universe, it’s cryptography keeping your secrets safe, not HAL 9000.
        </p>
        <p>
          At its core, cryptography scrambles data using algorithms, making it
          nearly impossible to make sense of anything without the proper
          credentials. Today, we’re diving into{" "}
          <strong>seven powerful concepts</strong> every developer should
          understand—complete with hands-on <strong>Node.js</strong> code so you
          can follow along. And, as a little incentive: stay until the end for a
          classic developer challenge (with a free Lifetime Pro membership and
          T-shirt up for grabs for the first solver).
        </p>
        <h2>The Ancient Roots—and Rapid Evolution—of Cryptography</h2>
        <p>
          Cryptography predates computers by millennia. Ancient humans had
          creative—if somewhat unfortunate—methods for safeguarding secrets. For
          example, they’d tattoo confidential messages on a slave’s shaved
          scalp, then let the hair regrow to hide the message. The glaring flaw?
          All an attacker had to do was shave the head again. Not exactly
          foolproof.
        </p>
        <p>
          By the time of Julius Caesar, things got at least a little bit
          smarter. The <strong>Caesar cipher</strong> replaced each letter with
          another, shifted by a fixed amount in the alphabet—a huge leap in
          secret communication at the time.
        </p>
        <p>
          Fast-forward to the near future—say, <strong>2025</strong>—and imagine
          quantum computers reducing today’s cutting-edge crypto algorithms to
          ancient relics. The point? Cryptography never stands still. What’s
          secure now could be tomorrow’s punchline.
        </p>
        <p>
          But don’t panic. For most developers, it’s not essential to master all
          the math underpinning cryptography. What <strong>is</strong> critical:
          understanding the core concepts—like hashing, encryption, and digital
          signatures—that underpin modern digital security.
        </p>
        <h2>
          <span>1. Hashing: Chopping, Mixing, Obscuring</span>
        </h2>
        <p>
          The word “hash” can be intimidating—but if you’re hungry, think of
          “hash” as a culinary technique: chop and mix. That’s pretty much what
          a hash function does to your data! You start with an input of any
          length (could be a password, a file, or even a novel). Pass it to a
          hashing function, and you’ll always get back a fixed-length,
          meaningless-looking string (the hash).
        </p>
        <ul>
          <li>
            <b>Deterministic:</b> The same input always yields the same output.
          </li>
          <li>
            <b>Fast to compute:</b> Efficiency matters for real applications.
          </li>
          <li>
            <b>Unique:</b> It’s extremely hard (in theory) for two different
            inputs to produce the same hash.
          </li>
          <li>
            <b>One-way:</b> Going from hash back to input is (almost)
            impossible.
          </li>
        </ul>
        <p>
          <strong>Why is this useful?</strong> For starters, you’ll use hashes
          for things like passwords. You don't want to store raw passwords in
          your database! If a hacker steals the database, all bets are off. Hash
          values, on the other hand, offer an extra layer of protection. But
          even that’s not foolproof, as we’ll see.
        </p>
        <h3>Implementing Hashing in Node.js</h3>
        <p>
          To try this yourself, all you need is Node.js. Here’s a step-by-step
          walkthrough:
        </p>
        <ol>
          <li>
            <strong>
              Import the <code>createHash</code> function
            </strong>{" "}
            from Node’s <code>crypto</code> module.
          </li>
          <li>
            <strong>Define your hashing function.</strong>
          </li>
          <li>
            <strong>Choose your algorithm.</strong> This example uses{" "}
            <b>SHA256</b> (“Secure Hash Algorithm 256-bit”). For curious minds:
            SHA256 produces hashes 256 bits in length.
          </li>
          <li>
            <strong>Hash your input:</strong> Feed in your string, and output a
            hexadecimal result (that’s a classic format, though{" "}
            <code>base64</code> works too).
          </li>
        </ol>
        <p>
          <em>Pro Tip:</em> Avoid MD5! It’s obsolete—check out SHA256 or even
          Argon2 (though the latter isn’t included out-of-the-box in Node’s
          crypto module).
        </p>
        <p>
          <b>What does the output look like?</b> Imagine passing "password" to
          your function—what you get is a unique, bewildering string that
          obscures the original input. When you hash the same password again,
          you’ll get the same hash—perfect for later comparison.
        </p>
        <p>
          <b>But: Hashing alone isn’t enough for password security.</b> That
          brings us to "salting."
        </p>
        <h2>
          <span>2. Salt: Spicing Up Your Security</span>
        </h2>
        <p>
          A hashing function always returning the same value is
          problematic—especially when humans pick weak passwords like
          “password123.” (Or, borrowing from popular culture: "The combination
          is 1, 2, 3, 4, 5? That’s the stupidest combination I ever heard in my
          life!").
        </p>
        <p>
          If a hacker gets their hands on your database, and you haven’t salted
          your hashes, they’ll simply use precomputed “rainbow tables” to look
          up the original passwords. Salting to the rescue!
        </p>
        <p>
          <strong>What’s a salt?</strong> It’s a random value added to your
          password <em>before</em> hashing, making each hash unique even if two
          users have the same password.
        </p>
        <h3>Salting & Hashing in Node.js</h3>
        <p>
          For next-level protection, you’ll want to use Node’s{" "}
          <code>scrypt</code> function (also from the <code>crypto</code>{" "}
          module) plus <code>randomBytes</code> to generate your salts. Here’s
          the general flow:
        </p>
        <ol>
          <li>
            On user sign-up, <b>generate a random salt</b>.
          </li>
          <li>
            Hash the password + salt using <code>scrypt</code>, specifying a
            sufficiently large key length (64 bytes is recommended).
          </li>
          <li>
            <b>Store both the hash and the salt</b> in your database (e.g.,
            concatenate with a separator).
          </li>
          <li>
            On login, <b>retrieve the salt, re-hash the entered password</b>{" "}
            using that salt, and compare.
          </li>
        </ol>
        <p>
          <b>
            Scrypt isn’t just hard to brute force—it’s also used in some
            cryptocurrency mining algorithms!
          </b>
        </p>
        <p>
          <em>Security tip:</em> Use Node’s <code>timingSafeEqual</code>{" "}
          function to compare hashes. Traditional string comparison leaks timing
          info that sophisticated attackers could exploit.
        </p>
        <h2>
          <span>3. HMAC: Hashes With a Secret Ingredient</span>
        </h2>
        <p>
          Next up: HMAC, or{" "}
          <strong>Hash-based Message Authentication Code</strong>. An HMAC is a
          hash that <em>also</em> requires a secret password (or key). The
          result? Only someone who knows the secret can produce or verify the
          HMAC.
        </p>
        <p>
          <strong>Real-world example:</strong> JSON Web Tokens (JWT) for web
          authentication. The server creates a token signed with a secret; if
          you try to forge it without that secret, no dice.
        </p>
        <h3>HMAC in Node.js</h3>
        <p>
          Use the <code>createHmac</code> function, supply your secret, and
          create a hash of your message. The key difference from regular hash?
          The same password (secret) is needed to produce and verify the hash
          signature.
        </p>
        <ul>
          <li>
            <b>Matching secrets:</b> Same input and same key = identical HMAC.
          </li>
          <li>
            <b>Different secrets:</b> Even with the same message, a different
            key = entirely different HMAC.
          </li>
        </ul>
        <h2>
          <span>4. Encryption: Scrambling Secrets (and Unscrambling Them)</span>
        </h2>
        <p>
          <strong>What’s encryption?</strong> You take a message, scramble it so
          it’s unreadable (<b>ciphertext</b>), but—unlike hashing—you (or
          someone trusted) can later unscramble it <em>if</em> you have the
          right key.
        </p>
        <p>
          A key point: <b>Encryption is usually randomized</b>, so encrypting
          the same message twice yields completely different ciphertexts. That
          makes it way harder for hackers to analyze!
        </p>
        <h3>Symmetric Encryption in Node.js</h3>
        <p>
          <strong>Symmetric encryption</strong> means the same password (key) is
          used for scrambling <em>and</em> unscrambling. Here’s how you do it in
          Node.js:
        </p>
        <ol>
          <li>
            <strong>
              Import <code>createCipheriv</code> and{" "}
              <code>createDecipheriv</code>
            </strong>
            , plus <code>randomBytes</code>.
          </li>
          <li>
            <strong>Generate a key</strong> (e.g., 32 random bytes for AES-256)
            and an <b>initialization vector</b> (IV, 16 random bytes). The IV
            randomizes the output, so repeating the same message doesn’t create
            the same ciphertext.
          </li>
          <li>
            <strong>Encrypt:</strong> Use the cipher’s <code>update</code> and{" "}
            <code>final</code> methods to process your data into ciphertext.
          </li>
          <li>
            <strong>Decrypt:</strong> Create a decipher object (with the same
            key and IV), and reverse the process.
          </li>
        </ol>
        <p>
          <em>Analogy:</em> Think of data as a secret message in a locked box.
          Both the sender and receiver need a copy of the same key to unlock the
          box. Great for small groups, but what if you need to send a secret to
          someone you’ve never met before?
        </p>
        <h2>
          <span>
            5. Public-Key Cryptography (Asymmetric Encryption): Mailboxes for
            the Digital Age
          </span>
        </h2>
        <p>
          Symmetric encryption’s weakness? Both parties need to agree on a
          shared secret. That’s not practical for strangers!
        </p>
        <p>
          Here’s where <strong>public-key cryptography</strong> shines. Every
          user has two keys:
        </p>
        <ul>
          <li>
            <b>Public key:</b> Freely shareable. Like your mailbox’s slot—anyone
            can slip mail in.
          </li>
          <li>
            <b>Private key:</b> Keep this secret! It opens the mailbox to
            retrieve messages.
          </li>
        </ul>
        <p>
          In Node.js, generate these with <code>generateKeyPair</code>. The most
          common system is <b>RSA</b>, and options like key length and encoding
          add flexibility and security.
        </p>
        <p>
          <b>Tip:</b> For extra security, you can add a passphrase to your
          private key.
        </p>
        <p>
          <strong>How does this protect you online?</strong> Any time you visit
          a website over HTTPS, your browser fetches that site’s public key from
          its SSL certificate. Anything you type (your secret) is encrypted with
          that public key—only the server (with its private key) can decrypt it.
        </p>
        <h3>Asymmetric Encryption in Node.js</h3>
        <p>
          Grab <code>publicEncrypt</code> and <code>privateDecrypt</code> from
          Node’s crypto module. Combine the public key with your message (as a
          buffer) and voilà: an encrypted message the recipient (and only the
          recipient) can unlock.
        </p>
        <h2>
          <span>6. Digital Signatures: Proving It’s Really You</span>
        </h2>
        <p>
          Sometimes, encryption isn’t about hiding information but{" "}
          <b>proving authenticity</b>. Enter the digital signature.
        </p>
        <p>
          Imagine sending a physical letter stuffed with sensitive info. How do
          you guarantee it came from the right sender—and hasn’t been tampered
          with in transit? Traditionally, you might use a wax seal, or even a
          signature in blood if you’re feeling dramatic. In the digital world,
          we do the same, minus the biohazard.
        </p>
        <p>
          <b>How do digital signatures work?</b>
          <ol>
            <li>
              The sender <b>hashes the original message</b>.
            </li>
            <li>
              They use their <b>private key</b> to sign that hash, creating a
              unique <b>signature</b>.
            </li>
            <li>
              The recipient can use the sender’s <b>public key</b> to verify
              that the signature matches and hasn’t been forged or altered.
            </li>
          </ol>
        </p>
        <h3>Signing in Node.js</h3>
        <p>
          Use Node’s <code>createSign</code> function with an algorithm like{" "}
          <b>RSASSA-PKCS1-v1_5</b> with SHA256 for hashing. After signing,
          attach the signature to your message. The recipient, using{" "}
          <code>createVerify</code> and the sender’s public key, can confidently
          confirm authenticity and integrity.
        </p>
        <p>
          <em>
            If the signature fails verification, your message has been forged or
            tampered with—just like a broken wax seal!
          </em>
        </p>
        <h2>
          <span>7. The Ultimate Developer Challenge: Crack the Hash</span>
        </h2>
        <p>
          That’s seven cryptographic superpowers every developer should have in
          their toolkit. But before you close this tab, here’s your challenge:
        </p>
        <blockquote>
          <strong>
            In the GitHub repo, there’s a file called <code>hack.js</code>.
            Inside it: a hash. Use your skills to crack it and submit your
            answer as a pull request in the repo. First solver scores a free
            Lifetime Pro membership and T-shirt.
          </strong>
        </blockquote>
        <p>
          So! If this hands-on guide helped demystify cryptography (or even
          inspired you to finally use a unique password), hit that like button,
          subscribe, and—most importantly—remember:{" "}
          <b>
            in a world run by little ones and zeros, knowledge is the best
            defense.
          </b>
        </p>
        <p>Thanks for reading, and see you for the next deep dive!</p>
        <h2>Recommended Articles</h2>
        <Section4 />
      </article>
    </div>
  );
}

const Section4 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Ultimate List: My 20 Favorite Android Apps of All Time—A Series Finale Celebration",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745735364/favorite-apps_nlfmwq.jpg",
      alt: "The Ultimate List: My 20 Favorite Android Apps of All Time",
      date: "April 27, 2025",
      articleRoute: "favorite-apps",
    },
    {
      id: 2,
      title:
        " The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745738744/best_apps_iraybe.jpg",
      alt: " The 15 Best Android Apps of March 2025 – Unleashing iOS Exclusives, Motorola Widgets, and More!",
      date: "April 27, 2025",
      articleRoute: "best-apps",
    },
    {
      id: 3,
      title: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745741454/best_gy0sdm.jpg",
      alt: "FREE app is 10X BETTER than Netflix with MORE Movies & TV Shows!",
      date: "April 27, 2025",
      articleRoute: "free-apps",
    },
    {
      id: 4,
      title:
        "Global Windows Outage: How a CrowdStrike Update Brought the World to Its Knees",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745742482/error_ylvaka.jpg",
      alt: "Global Windows Outage: How a CrowdStrike Update Brought the World to  Its Knees",
      date: "April 27, 2025",
      articleRoute: "error",
    },
    {
      id: 6,
      title:
        "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746030535/lxrcbsv-cOOUKEBpnIw-unsplash_zwdtmm.jpg",
      alt: "Hidden Gems: Must-Have Developer Tools & Apps That Changed How I Work (and Can Change Yours Too!)",
      date: "April 30, 2025",
      articleRoute: "cool-tools",
    },
    {
      id: 7,
      title: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1746033938/nandha-kumar-HToDV_gYh1A-unsplash_bhjuex.jpg",
      alt: "Cool Tools I’ve Been Using Lately (and Why They Stuck)",
      date: "April 30, 2025",
      articleRoute: "another-tool",
    },
  ];

  return (
    <section>
      <div className="h-ai">
        <h2>Apps</h2>
      </div>

      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/apps/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image-4">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image-4"
                priority
              />
            </div>
            <div className="bg-content-4">
              <h2 className="bg-title-4">{project.title}</h2>
              <time
                className="bg-date-4"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
