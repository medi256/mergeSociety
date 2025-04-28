import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
  description:
    "Follow along as ardens shares his journey from IT intern to home lab enthusiast, building a DIY NAS server with Raspberry Pi and self-hosting a personal music streaming service using virtualization technologies.",
  keywords: [
    "Home Lab",
    "NAS Server",
    "DIY Tech",
    "Raspberry Pi",
    "Open Media Vault",
    "Self-Hosted",
    "Navidrome",
    "Music Streaming",
    "Proxmox",
    "Virtualization",
    "Tech Setup",
    "Home Server",
    "Cloud Alternative",
    "Network Attached Storage",
    "Tech DIY",
    "IT Projects",
    "Containers",
    "Personal Cloud",
    "Digital Independence",
    "Tech Workspace",
  ],
  category: "Technology",
  openGraph: {
    title: "From File Chaos to Geek Zen: Building a DIY Home Lab in 2025",
    description:
      "How an IT intern built a personal tech ecosystem with Raspberry Pi NAS storage and self-hosted music streaming to break free from big tech subscriptions.",
    url: "https://www.mergesociety.com/code-report/labing",
    siteName: "Tech Addict Diary",
    images: [
      {
        url: "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg",
        width: 1200,
        height: 630,
        alt: "A detailed home lab setup featuring a Raspberry Pi NAS server and multiple monitors",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-04-27T11:30:00Z",
    modifiedTime: "2025-04-27T11:30:00Z",
    section: "Technology Guides",
    tags: [
      "Home Labbing",
      "DIY Technology",
      "Self-Hosting",
      "NAS Setup",
      "Music Streaming",
      "Raspberry Pi Projects",
      "Virtualization",
      "Tech Independence",
      "Home Server",
      "Open Source Software",
      "Proxmox",
      "Navidrome",
    ],
  },
  authors: [
    {
      name: "ardens",
      url: "https://www.mergesociety.com/about",
    },
  ],
  creator: "Tech Addict Diary",
  publisher: "Digital Autonomy Media",
  alternates: {
    canonical: "https://www.mergesociety.com/code-report/labing",
    languages: {
      "en-US": "https://www.mergesociety.com/code-report/labing",
      "es-ES": "https://www.mergesociety.com/code-report/labing",
      "fr-FR": "https://www.mergesociety.com/code-report/labing",
      "de-DE": "https://www.mergesociety.com/code-report/labing",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Built My Own Home Lab, NAS Server & Music Streaming Empire",
    description:
      "Breaking free from big tech: My journey creating a DIY home lab with Raspberry Pi NAS and self-hosted music streaming using Proxmox virtualization.",
    creator: "@manager70191",
    images: [
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg",
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
      "max-snippet": 320,
    },
  },
  other: {
    readingTime: "10 minutes",
    contentType: "Personal Tech Journey",
    publishDate: "April 27, 2025",
    category: "DIY Technology",
    subcategory: "Home Server Setup",
    featured: true,
    series: "Home Lab Adventures",
    seriesPosition: 1,
    relatedArticles: [
      "Setting Up a VPN for Remote Access to Your Home Lab",
      "Monitoring Your Home Lab: Essential Tools and Dashboards",
      "Automating Your Digital Life with Home Assistant and Docker",
      "NextCloud vs. Open Media Vault: Choosing Your Self-Hosted File Solution",
    ],
    audienceLevel: "Beginner to Intermediate",
    impactIndustries: [
      "Home Computing",
      "Self-Hosted Solutions",
      "Digital Privacy",
      "IT Education",
      "Media Streaming",
      "Open Source Software",
    ],
    keyQuotes: {
      homeLabDefinition:
        "A home lab is as simple (or as complex) as you want it to be. At its core, it's just a setup in your home comprised of one or more computing devices that provide a specific service or convenience.",
      cloudRejection:
        "F the cloud. F Google Drive, F Dropbox... I believe there's a better solution than selling your digital soul to these big-tech overlords: hosting your own NAS server.",
      virtualizationExplained:
        "Virtualization means you can run multiple 'mini-computers' (virtual environments) inside one physical machine and manage them like a benevolent — or not-so-benevolent — digital overlord.",
      diyMotivation:
        "One big motivation for all this home labbing is my dream of turning my room into a scene straight out of Dexter's laboratory.",
      addictionWarning:
        "Home labbing has become an addictive, wallet-draining, but incredibly fun journey into controlling my own tech ecosystem.",
    },
    sponsorships: [
      {
        company: "Flexispot",
        product: "C7 ergonomic chair",
        promoCode: "C750",
        discount: "$50",
      },
    ],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire",
    image:
      "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg",
    datePublished: "2025-04-27T11:30:00Z",
    dateModified: "2025-04-27T11:30:00Z",
    author: {
      "@type": "Person",
      name: "ardens",
      url: "https://www.mergesociety.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Digital Autonomy Media",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergesociety.com/MS.png",
      },
    },
    description:
      "Follow along as ardens shares his journey from IT intern to home lab enthusiast, building a DIY NAS server with Raspberry Pi and self-hosting a personal music streaming service using virtualization technologies.",
    keywords:
      "Home Lab, NAS Server, DIY Tech, Raspberry Pi, Self-Hosted, Navidrome",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mergesociety.com/code-report/labing",
    },
    about: [
      {
        "@type": "Thing",
        name: "Home Lab",
      },
      {
        "@type": "Thing",
        name: "Network Attached Storage",
      },
      {
        "@type": "Thing",
        name: "Self-Hosted Services",
      },
    ],
    mentions: [
      {
        "@type": "SoftwareApplication",
        name: "Open Media Vault",
        applicationCategory: "Server Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "Navidrome",
        applicationCategory: "Music Streaming Software",
      },
      {
        "@type": "SoftwareApplication",
        name: "Proxmox",
        applicationCategory: "Virtualization Platform",
      },
      {
        "@type": "Product",
        name: "Raspberry Pi",
        manufacturer: {
          "@type": "Organization",
          name: "Raspberry Pi Foundation",
        },
      },
      {
        "@type": "Product",
        name: "Flexispot C7 Chair",
        manufacturer: {
          "@type": "Organization",
          name: "Flexispot",
        },
      },
    ],
    isAccessibleForFree: true,
    educationalLevel: "Beginner to Intermediate",
    audience: {
      "@type": "Audience",
      audienceType: "Tech Enthusiasts",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  },
  // Modern SEO features for 2025
  semantic: {
    contentTags: [
      "tech independence",
      "diy server",
      "self-hosted solutions",
      "home networking",
      "raspberry pi projects",
      "virtualization basics",
      "music streaming alternatives",
      "personal cloud",
      "tech workspace setup",
      "digital sovereignty",
    ],
    primaryTopic: "DIY Home Lab Setup",
    conceptualDifficulty: "Beginner to Intermediate",
    targetAudience: [
      "tech enthusiasts",
      "DIY hobbyists",
      "IT students",
      "privacy advocates",
      "subscription fatigued consumers",
      "home network builders",
      "aspiring sysadmins",
      "open source advocates",
      "raspberry pi owners",
      "music collectors",
    ],
    visualContent: false,
    comprehensiveness: "introductory series",
    freshness: "current for 2025",
    perspectiveType: "personal experience",
    subjectRelevance: "high",
  },
  analytics: {
    eventCategory: "DIY Tech Guide",
    pageType: "Personal Journey",
    contentPillar: "Self-Hosted Technology",
    contentCluster: "Home Lab Setup",
    expectedReadTime: 600, // in seconds
    wordCount: 1650,
    subjectMatter: "Home Networking and Servers",
    expertiseLevel: "beginner to intermediate",
    industryImpact: "medium",
    futureOrientation: "high",
    sponsoredContent: true,
    sponsorshipDisclosed: true,
  },
  // 2025 AI-specific metadata
  aiDiscoverability: {
    contentSummary:
      "This article chronicles a student/IT intern's journey into home labbing, detailing how they set up a NAS server using a Raspberry Pi with Open Media Vault, and later created a self-hosted music streaming service using Navidrome in a Proxmox virtual container. The narrative includes personal motivations, hardware choices, software configurations, and future expansion plans.",
    entityMentions: [
      "Raspberry Pi",
      "Open Media Vault",
      "Navidrome",
      "Proxmox",
      "NAS",
      "Network Attached Storage",
      "Subsonic API",
      "Amperfy",
      "Samsung portable SSD",
      "Virtualization",
      "Container",
      "VPN",
      "Flexispot",
      "C7 chair",
      "E7 standing desk",
    ],
    contentStructure: "personal narrative with technical explanations",
    visualElements: ["none described in text"],
    technicalDepth: "accessible intermediate",
    aiSearchTerms: [
      "how to build home lab beginner",
      "raspberry pi nas server setup",
      "self hosted music streaming server",
      "alternatives to cloud storage",
      "what is network attached storage",
      "proxmox container setup guide",
      "how to access home server remotely",
      "home tech setup inspiration",
      "build personal cloud storage",
      "navidrome music server tutorial",
    ],
    businessConcepts: [
      "digital independence",
      "subscription avoidance",
      "self-ownership of data",
      "open source adoption",
      "privacy-focused computing",
    ],
  },
  accessibility: {
    textToSpeechOptimized: true,
    screenReaderFriendly: true,
    highContrastSupport: true,
    readabilityLevel: "general",
  },
  // Advanced 2025 metrics
  contentMetrics: {
    keyTechInsights: [
      "DIY vs Commercial NAS",
      "Virtualization Benefits",
      "Self-Hosting Practicality",
      "Open Source Alternatives",
      "Hardware Repurposing",
    ],
    practicalValue: "high",
    impactScope: "personal tech ecosystem",
    skillDevelopmentPathway: "outlined",
    futureOutlook: "expansive",
    communityEngagement: "discord invitation",
  },
  // Trust signals
  trustSignals: {
    firsthandExperience: true,
    authorExpertise: "IT intern with hands-on experience",
    lastBuildDate: "2025-04-20",
    hardwareTested: true,
    advertiserDisclosure: {
      sponsoredContent: true,
      sponsorIdentified: "Flexispot",
      affliliateLinks: false,
    },
    experienceLevel: "beginner sharing learning journey",
    conflictOfInterestDisclosure: "Sponsored by Flexispot for chair mention",
    updates: [
      {
        date: "2025-04-27",
        type: "Initial publication",
      },
    ],
  },
  // Content classification specifics
  contentClassification: {
    contentType: "personal tech journey",
    narrativeStyle: "conversational instructional",
    perspectiveBalance: "enthusiast experience",
    historicalContext: "minimal",
    technicalAnalysis: "approachable",
    practicalApplication: "high",
    diyFocus: "central theme",
    timeScope: "present with future expansion plans",
  },
  // Enhanced 2025 metrics
  technicalInsights: {
    setupComplexity: "beginner to intermediate",
    learningCurve: "gradual and explained",
    hardwareRequirements: "modest and accessible",
    softwareFocus: "open source solutions",
    supportEcosystem: "community-based",
    securityConsiderations: "mentioned for future",
    performanceExpectations: "realistic",
    scalabilityOptions: "outlined",
  },
  practicalImplementation: {
    beginnerAccessibility: "high",
    costAnalysis: "budget-conscious",
    troubleshootingGuidance: "minimal",
    hardwareRecommendations: "specific",
    softwareAlternatives: "mentioned",
    timeInvestment: "progressive",
    skillTransferability: "high to IT career",
  },
  contentStyle: {
    format: "personal narrative with technical elements",
    topicApproach: "enthusiastic and conversational",
    authorVoice: "casual and approachable",
    humorLevel: "moderate",
    technicalJargon: "explained in accessible terms",
    persuasionFocus: "DIY empowerment",
    narrativeArc: "problem to solution to expansion",
    entertainmentValue: "high with relatable experiences",
  },
  // New for 2025: Self-hosting ecosystem metrics
  selfHostingEcosystem: {
    privacyBenefits: "emphasized",
    costSavingsOver: "subscription services",
    controlAdvantages: "highlighted",
    skillDevelopment: "progressive",
    communitySupport: "mentioned",
    openSourceFocus: "strong",
    hardwareRequirements: "minimal entry point",
    scalabilityPath: "clear progression outlined",
  },
  // New for 2025: Tech independence metrics
  techIndependence: {
    cloudAlternativesOffered: true,
    subscriptionReplacementStrategies: "detailed",
    dataOwnershipFocus: "strong",
    privacyEmpowerment: "central theme",
    corporateDependenceReduction: "explicit goal",
    sustainableTechApproach: "reuse existing hardware",
    digitialAutonomyRoadmap: "step by step",
  },
  // New for 2025: Creator content disclosure
  creatorDisclosure: {
    contentType: "educational entertainment",
    sponsorshipPresent: true,
    sponsorshipIdentified: "Flexispot chair",
    experienceLevel: "IT intern/student",
    audienceRelationship: "peer teaching peers",
    platformPresence: ["blog", "YouTube", "Discord"],
    contentRegularity: "series introduction",
    brandAffiliations: ["Flexispot"],
  },
  // New for 2025: Series metadata
  seriesMetadata: {
    seriesTitle: "Home Lab Adventures",
    episodeNumber: 1,
    episodeType: "introduction and foundation",
    completionStatus: "ongoing series",
    plannedEpisodes: true,
    prerequisiteKnowledge: "basic technical understanding",
    continuityStyle: "progressive skill building",
    seriesCohesion: "technology ecosystem development",
  },
};

export default function Article() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server,
          and Music Streaming Empire
        </h1>

        <Image
          src={
            "https://res.cloudinary.com/dhgjhspsp/image/upload/v1745762412/alex-knight-2EJCSULRwC8-unsplash_cpovif.jpg"
          }
          alt="From File Chaos to Geek Zen: How I Built My Own Home Lab, NAS Server, and Music Streaming Empire"
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
          <strong>Hi, I’m ardens.</strong> I juggle life as a part-time
          YouTuber, a part-time IT intern, and a full-time undergrad student. If
          there’s a common thread through these roles, it’s my unrelenting
          passion for technology and computing. From servers to virtualization
          to labyrinthine networks, I’ve found the digital playground both at
          work and at home to be endlessly fascinating.
        </p>

        <p>
          Thanks to my job in IT, I’ve stumbled headfirst into a new and rather
          addictive hobby: <strong>home labbing.</strong> Why keep the good tech
          times constrained to the workplace, I thought? Why not import all that
          exhilarating chaos right into my own home? Thus, I kick off episode
          one in my journey into home labbing — a series where you'll witness
          the rise of a tech addiction, the gradual draining of my wallet, and
          my descent into a world where I spend more time chatting with machines
          than people. Sound weird? Good. Because it’s about to get weirder,
          pricier, and (dare I say) even a little educational.
        </p>

        <h2>What Exactly Is a Home Lab?</h2>

        <p>
          For the uninitiated, a <strong>home lab</strong> is as simple (or as
          complex) as you want it to be. At its core, it’s just a setup in your
          home comprised of one or more computing devices that provide a
          specific service or convenience. Crucially, it’s under <em>your</em>{" "}
          full control — for experimenting, learning, or just for fun. Still
          scratching your head? Let me hit you with a concrete example that
          might just open your third eye.
        </p>

        <h2>My First Home Lab Project: “Why Not Roll My Own File Server?”</h2>

        <p>
          Imagine you, the reader, are not only humble and highly intelligent,
          but also muscular and dashingly handsome (don’t argue, this is my
          fantasy). You own and use several laptops, but all your most important
          files live on your main machine. When you inevitably find yourself
          needing to access files from your other devices, what do you do? Email
          documents to yourself? Fumble with USB drives? Groan at how annoyingly
          tedious file sharing can become?
        </p>

        <p>
          “Why not use the cloud?” you may ask. Google Drive! Dropbox! Piece of
          cake, right? Well, here’s my hot take:{" "}
          <strong>
            F the cloud. F Google Drive, F Dropbox, and F…well, sorry, didn’t
            mean to get heated there.
          </strong>{" "}
          But seriously, I believe there’s a better solution than selling your
          digital soul to these big-tech overlords:{" "}
          <strong>hosting your own NAS server.</strong>
        </p>

        <h2>Discovering Network Attached Storage (NAS)</h2>

        <p>
          At my IT job, one of my routine tasks is accessing a shared network
          drive — simply called “The Drive.” All company files live there,
          stored on a server hidden somewhere in the company’s digital bowels.
          As long as you’re on the company network, those files are just a click
          away. Naturally, this sparked my curiosity:{" "}
          <em>What if I recreated this setup at home, just scaled down?</em>{" "}
          Enter my first foray into the magic of a NAS server.
        </p>

        <p>
          <strong>NAS</strong> stands for <em>Network Attached Storage</em>.
          Imagine having your very own private network drive at home, one where
          you rule supreme. Any device in your house can access your files —
          with zero dependence on shady cloud services. Tempted, I dove into the
          world of NAS and decided to build rather than buy (have you{" "}
          <em>seen</em> those prices?!) with the budget-friendly tech I already
          owned.
        </p>

        <h3>How I Built My Personal NAS</h3>

        <ol>
          <li>
            <strong>Hardware:</strong> I used a trusty{" "}
            <strong>Raspberry Pi</strong> — a tiny, affordable computer beloved
            by DIYers everywhere.
          </li>
          <li>
            <strong>Storage:</strong> Enter the 1TB Samsung portable SSD. Plug
            and play. No fuss.
          </li>
          <li>
            <strong>Software:</strong> I installed{" "}
            <strong>Open Media Vault</strong> on my Pi, which transforms it from
            a regular computer into a networked storage powerhouse.
          </li>
          <li>
            <strong>Networking:</strong> Plug the SSD into the Pi, connect the
            Pi to the home router, configure Open Media Vault, and voila — your
            own fast, private “cloud” controlled entirely by you.
          </li>
        </ol>

        <p>
          If you hoped for a deep-dive tutorial, sorry to disappoint; this isn't
          a “how-to” channel, and I’m not your dad! However, I did leave a link
          in the video description for an actual guide — you’re welcome. Still,
          turning my Raspberry Pi into a NAS reignited my excitement for home
          tech experimentation. It felt awesome adding this first “server” to my
          workspace.
        </p>

        <h2>Building the Ultimate Tech Lair (Dexter, Eat Your Heart Out)</h2>
        <p>
          Honestly, one big motivation for all this home labbing is my dream of
          turning my room into a scene straight out of Dexter’s laboratory. I’m
          not all the way there yet, but progress is happening: dual monitors, a
          Linux-themed mousepad, a laptop perched high on a stand, and sick
          animated wallpapers that scream “nerd paradise.” Every gadget and
          accessory adds another brick to my immersive digital fortress.
        </p>

        <p>
          That said, not <em>everything</em> in my office is living the dream.
          Exhibit A: my chair. It was the bane of my existence (and my back).
        </p>

        <h3>Sponsored Interlude: Elevating My Workstation</h3>
        <p>
          <strong>Thank goodness for my E7 standing desk from Flexispot</strong>
          , which I’ve raved about before. After over a year, the smooth height
          adjustments, sturdy build quality, and clean design completely
          transformed my workspace. But that chair... It nearly killed the vibe
          AND my spine.
        </p>

        <p>
          Enter the <strong>Flexispot C7 ergonomic chair</strong> — truly a
          beast compared to my old disaster of a seat. My previous chair
          couldn’t even accommodate a “lean back,” and left me hunched like a
          goblin. The C7, though? Game changer. It’s got adaptive lumbar
          support, so no more makeshift cushions. The seat’s roomy enough for
          even the largest of bubble butts. Choose foam or mesh vibes — up to
          your preference. And the reclining back? Perfect for those two-hour
          doomscrolling “breaks.”
        </p>

        <p>
          This chair basically belongs in the Transformers universe, with
          adjustable seat depth, height, headrest, armrests – everything. It
          promises a fully customized experience for almost anyone out there.
          Tempted? This beauty comes with a{" "}
          <strong>30-day risk-free trial</strong>,{" "}
          <strong>10-year warranty</strong>, and if you use my code{" "}
          <strong>C750</strong> at checkout, you shave $50 off your own C7.
          Flexispot: thanks for sponsoring the video, saving my posture, and,
          arguably, my will to work.
        </p>

        <h2>The Home Lab Grows: Next Up, My Own Music Streaming Service</h2>

        <p>
          After launching my NAS, I was fiending for another cool side project.
          Where else could I cut the strings with big tech, and take control?
          Let’s talk music. Love the tunes, but <strong>hate the ads</strong> —
          and don’t get me started on those sneaky recurring subscriptions these
          companies are addicted to pushing. If you want ad-free music, you
          basically have to pay for eternity. That, frankly, drives me a bit
          nuts.
        </p>

        <p>
          Solution? <strong>Self-hosting my own music server!</strong> I settled
          on a slick open source project called <strong>Navidrome</strong>. Now,
          hardware-wise, my only Raspberry Pi was already married to my NAS
          project. Dedicating an entire (powerful, expensive) laptop to a simple
          music server would make no sense, especially with four other computers
          lying around.
        </p>

        <h3>Unleashing the Power of Virtualization</h3>
        <p>
          This is where I discovered <strong>virtualization</strong>. In
          human-words, it means you can run multiple “mini-computers” (virtual
          environments) inside one physical machine and manage them like a
          benevolent — or not-so-benevolent — digital overlord. I installed{" "}
          <strong>Proxmox</strong>, a robust open-source virtualization
          platform, on one of my laptops.
        </p>
        <p>
          Proxmox lets me conjure up as many virtual computers as my hardware
          can handle. In this case, I spun up a container (the lighter-weight
          option, perfect for one specific app like Navidrome), which shares the
          base system’s kernel for extra efficiency. Containers start up fast,
          use minimal resources, and don’t weigh down your machine.
        </p>
        <p>
          With the virtual environment ready, I installed Navidrome, and started
          adding my (legally downloaded, of course) music — all stored tidily on
          my NAS. You see? It’s all coming together! Now I have my very own
          ad-free music streaming service, fully self-hosted and in total
          harmony with the rest of my home lab.
        </p>

        <h3>Making Navidrome Even Cooler: Access from Any Device</h3>
        <p>
          But we’re not done yet. Navidrome speaks Subsonic API, a popular
          protocol for building media streaming clients. This means I can use
          apps like Amperfy, a polished client I found in the app store. All I
          had to do was punch in my Navidrome server’s IP address and
          credentials and—
          <strong>BAM!</strong>—it instantly looked and functioned just like any
          mainstream streaming service… except it’s running from hardware I own.
        </p>

        <p>
          Here’s the catch: as of now, I can stream my music only while
          connected to my home WiFi. The next step, obviously, is to set up a
          VPN for remote, secure access — so I can jam to my favorite songs from
          anywhere on Earth. But, friends, that’s a tale for another day.
        </p>

        <hr />

        <h2>Final Thoughts (and a Nod to My Sponsors)</h2>
        <p>
          Home labbing has become an addictive, wallet-draining, but incredibly
          fun journey into controlling my own tech ecosystem. If you’d like to
          see how this adventure unfolds — or ask how I accomplished any of
          these projects — join my Discord server. Whether you’re here for the
          education, the chaos, or Dexter’s-lab aspirations, you’re more than
          welcome.
        </p>

        <p>
          Don’t forget — if you’re eyeing an upgrade to your work setup, check
          out the Flexispot C7 ergonomic chair. Use code <strong>C750</strong>{" "}
          at checkout for $50 off.
        </p>

        <p>See you in the next episode — until then, happy labbing!</p>
      </article>
    </div>
  );
}
