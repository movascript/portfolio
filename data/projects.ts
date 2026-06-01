export type Project = {
  slug: string;

  title: string;
  description: string;

  year: string;
  category: string;

  cover: string;

  content: string[];

  tech: string[];

  features: string[];

  architecture: {
    title: string;
    description: string;
  }[];

  challenges: string[];

  notes: string[];

  github: string;
  screenshots: string[];

  live?: string;
};

export const projects: Project[] = [
  {
    slug: "lowcall",

    title: "Lowcall",

    description:
      "Realtime WebRTC communication platform designed during internet shutdowns to provide fast, low-friction video calling with minimal infrastructure overhead.",

    year: "2026",
    category: "Realtime Communication",

    cover: "/lowcall/screenshot-1.png",

    github: "https://github.com/movascript/lowcall",
    live: "https://lowcall.ir",

    tech: ["React", "Vite", "Tailwind", "Socket.io", "WebRTC", "WebSocket"],

    features: [
      "Realtime peer-to-peer video communication",
      "Room-based instant connection flow",
      "Minimal onboarding without authentication",
      "Connection recovery and reconnect handling",
      "Responsive low-latency UI architecture",
      "Self-hosted signaling infrastructure",
    ],

    architecture: [
      {
        title: "WebRTC Peer Connection Layer",
        description:
          "The core communication layer was built around direct peer-to-peer WebRTC connections to reduce latency and minimize dependency on centralized infrastructure. Socket.io was used strictly for signaling and room coordination.",
      },

      {
        title: "Minimal Friction User Flow",
        description:
          "The entire product experience was intentionally designed around speed and accessibility. Users could instantly join rooms without account creation or setup, reducing interaction cost during unstable internet conditions.",
      },

      {
        title: "Self-Hosted Infrastructure",
        description:
          "Deployment and infrastructure were managed manually on Linux servers, including reverse proxy configuration, websocket handling, SSL setup, and runtime debugging.",
      },
    ],

    challenges: [
      "Handling unstable peer reconnections during weak or interrupted internet conditions.",
      "Managing inconsistent WebRTC browser behavior across devices and network types.",
      "Synchronizing signaling state without introducing UI blocking or race conditions.",
    ],

    notes: [
      "This project was built from necessity rather than as a portfolio piece.",
      "The focus was reliability and speed under unstable internet conditions instead of feature quantity.",
      "A large part of the engineering effort went into debugging realtime edge cases rather than visual UI work.",
    ],

    screenshots: [
      "/lowcall/screenshot-1.png",
      "/lowcall/screenshot-2.png",
      "/lowcall/screenshot-3.png",
      "/lowcall/screenshot-4.png",
    ],

    content: [
      "Lowcall started during periods of internet shutdowns when traditional communication platforms became unreliable or inaccessible. I needed a fast and lightweight way to stay connected with family and friends, so I built a realtime video calling platform optimized around simplicity and resilience.",

      "Instead of treating the project as a feature-heavy communication platform, I focused heavily on reducing interaction friction. Users could instantly create or join rooms without authentication, setup flows, or unnecessary UI complexity.",

      "The project became my first serious experience combining frontend architecture, realtime communication systems, deployment, and infrastructure management at the same time. Debugging peer connection failures, websocket synchronization issues, and reconnect behavior taught me far more than typical frontend-only projects.",

      "What makes the project meaningful to me is that it solved a real problem for real people during a difficult period. The engineering decisions were driven by practical constraints rather than portfolio aesthetics.",
    ],
  },

  {
    slug: "dns-switcher",

    title: "DNS Switcher",

    description:
      "Performance-focused desktop application built with Tauri for instantly switching DNS configurations on Windows with minimal system overhead.",

    year: "2026",
    category: "Desktop Application",

    cover: "/dns-switcher/cover.png",

    github: "https://github.com/movascript/dns-switcher",

    tech: ["Tauri", "React", "TypeScript", "Tailwind", "Rust", "Tokio"],

    features: [
      "Instant DNS switching on Windows",
      "Persistent command execution pipeline",
      "Lightweight native desktop runtime",
      "Predefined and custom DNS profiles",
      "Low memory footprint compared to Electron",
      "Native-feeling startup performance",
    ],

    architecture: [
      {
        title: "Tauri + Rust Native Backend",
        description:
          "The project uses Tauri instead of Electron to significantly reduce memory usage and startup overhead. Rust handled the backend system interaction layer while React powered the UI.",
      },

      {
        title: "Persistent PowerShell Process",
        description:
          "Instead of spawning a new PowerShell process for every DNS operation, commands were piped through a persistent process instance. This reduced execution overhead and made interactions feel nearly instant.",
      },

      {
        title: "Frontend-Focused Native Experience",
        description:
          "The interface was intentionally designed to feel lightweight and responsive, avoiding heavy desktop UI patterns while still maintaining a native-like workflow.",
      },
    ],

    challenges: [
      "Learning enough Rust to build reliable system-level integrations.",
      "Creating a responsive desktop experience without Electron overhead.",
      "Handling Windows networking permissions and command execution safely.",
      "Designing low-level functionality while preserving UI simplicity.",
    ],

    notes: [
      "The switch from Electron to Tauri fundamentally changed the responsiveness of the application.",
      "A large part of the project involved balancing native system behavior with clean frontend UX.",
      "This project strengthened my understanding of performance tradeoffs in desktop applications.",
    ],

    screenshots: [
      "/dns-switcher/cover.png",
      "/dns-switcher/screenshot-1.png",
      "/dns-switcher/screenshot-2.png",
      "/dns-switcher/screenshot-3.png",
    ],

    content: [
      "DNS Switcher was created to simplify the repetitive process of manually changing DNS settings on Windows during unstable internet conditions. Existing solutions either felt bloated or unnecessarily complicated, so I built a smaller and faster alternative.",

      "The project originally started with Electron, but the startup speed and memory consumption immediately felt wrong for such a lightweight utility. I migrated the application to Tauri and learned enough Rust to properly build the backend integration layer.",

      "One of the most impactful optimizations was maintaining a persistent PowerShell process instead of spawning new command instances repeatedly. This dramatically improved responsiveness and made switching configurations feel instantaneous.",

      "The project became an exploration of frontend engineering beyond the browser. It pushed me into desktop runtime architecture, native system communication, and performance-oriented UX decisions.",
    ],
  },
  {
    slug: "anonchat",

    title: "AnonChat",

    description:
      "Experimental end-to-end encrypted realtime messaging platform built during wartime to explore secure peer communication without centralized data storage.",

    year: "2026",
    category: "Secure Communication",

    cover: "/anonchat/screenshot-1.png",

    github: "https://github.com/movascript/anon-chat",

    tech: [
      "React",
      "Express",
      "WebSocket",
      "TypeScript",
      "Tailwind",
      "IndexedDB",
      "TanStack Router",
      "Monorepo",
    ],

    features: [
      "Direct websocket-based realtime messaging",
      "Custom client and server websocket architecture",
      "Experimental end-to-end encryption pipeline",
      "Client-side persistent message storage",
      "Database-free relay-oriented backend design",
      "Offline-resistant local synchronization flow",
    ],

    architecture: [
      {
        title: "Raw WebSocket Communication Layer",
        description:
          "Instead of relying on abstractions like Socket.io, the entire realtime communication layer was implemented directly on top of native WebSockets. Custom client and server classes handled connection state, event dispatching, message routing, and callback synchronization.",
      },

      {
        title: "End-to-End Encryption Pipeline",
        description:
          "The platform was designed around the idea that even the server should not be able to read user messages. Encryption and key exchange logic were handled on the client side, while the backend acted purely as a transport relay between peers.",
      },

      {
        title: "Client-Side Persistence Architecture",
        description:
          "Because the backend intentionally avoided storing user data, message persistence and synchronization had to be managed entirely inside the browser using IndexedDB. A large part of the architecture focused on preventing state corruption and maintaining reliable local reads and writes.",
      },
    ],

    challenges: [
      "Managing realtime websocket state without higher-level abstractions like Socket.io.",
      "Designing client-side persistence flows without relying on server-side databases.",
      "Handling synchronization between encrypted local state and active peer sessions.",
      "Balancing privacy-focused architecture with practical usability constraints.",
    ],

    notes: [
      "This project started during wartime as an attempt to build a more secure communication channel for family and close contacts.",
      "The project remains intentionally unfinished due to the complexity of the encryption and synchronization architecture.",
      "A large part of the engineering effort involved experimentation, protocol design, and debugging low-level realtime systems.",
      "Even unfinished, the project became one of my most technically challenging frontend experiences.",
    ],

    screenshots: [
      "/anonchat/screenshot-1.png",
      "/anonchat/screenshot-2.png",
      "/anonchat/screenshot-3.png",
      "/anonchat/screenshot-4.png",
      "/anonchat/screenshot-5.png",
      "/anonchat/screenshot-6.png",
      "/anonchat/screenshot-7.png",
      "/anonchat/screenshot-8.png",
      "/anonchat/screenshot-9.png",
      "/anonchat/screenshot-10.png",
    ],

    content: [
      "AnonChat started during the war when secure and private communication became far more important than convenience. I wanted to build a messaging platform that minimized trust in the server itself and explored what fully client-controlled communication could look like.",

      "Instead of using Socket.io or other abstractions, I implemented the websocket communication layer manually on both the client and server. This forced me to deeply understand connection management, event routing, callback systems, and realtime synchronization at a much lower level.",

      "One of the most difficult parts of the project was handling persistence entirely on the client side. Since the server intentionally avoided storing messages, IndexedDB became responsible for local state management, synchronization, and recovery without corrupting data flow.",

      "The project also explored end-to-end encryption concepts where messages would be encrypted before leaving the browser, allowing the backend to function only as a relay. While the full encryption pipeline was never completely finished, working through the architecture taught me an enormous amount about cryptography, realtime systems, and frontend state reliability.",
    ],
  },

  {
    slug: "share-text",

    title: "ShareText",

    description:
      "Minimal encrypted text sharing platform built with Next.js for securely exchanging temporary content through private links without authentication.",

    year: "2026",
    category: "Privacy-Focused Utility",

    cover: "/share-text/screenshot-1.png",

    github: "https://github.com/movascript/share-text",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind",
      "Biome",
      "Docker",
      "React Compiler",
    ],

    features: [
      "Temporary text sharing through unique links",
      "Optional password-protected encrypted content",
      "Automatic expiration and cleanup flow",
      "Client-side encryption and decryption",
      "Authentication-free minimal user experience",
      "Server Actions based architecture without manual fetch calls",
    ],

    architecture: [
      {
        title: "Client-Side Encryption Flow",
        description:
          "Sensitive content was encrypted directly inside the browser before ever reaching the server. The backend only stored encrypted payloads, ensuring the platform owner could never read the shared content.",
      },

      {
        title: "Next.js Server Functions Architecture",
        description:
          "The project heavily explored modern Next.js patterns using Server Actions instead of traditional REST APIs. Data mutations and retrieval happened through framework-native server functions without manually writing fetch layers.",
      },

      {
        title: "Minimal Temporary Storage System",
        description:
          "The backend was intentionally kept lightweight. Shared content could optionally expire after a specified duration, automatically removing inaccessible data while preserving a fast and minimal workflow.",
      },
    ],

    challenges: [
      "Implementing reliable client-side encryption and password-based decryption flows.",
      "Designing secure content sharing without exposing plaintext data to the backend.",
      "Managing cryptographic operations while preserving a simple user experience.",
      "Learning and structuring larger-scale Next.js server-side architecture patterns.",
    ],

    notes: [
      "The project focused heavily on privacy through architecture rather than through visual complexity.",
      "A surprising amount of the engineering effort went into encryption edge cases and browser-side data handling.",
      "This project became one of my deeper explorations into modern Next.js application architecture.",
      "Using Server Actions instead of manually building API layers made the development experience far cleaner than expected.",
    ],

    screenshots: [
      "/share-text/screenshot-1.png",
      "/share-text/screenshot-2.png",
      "/share-text/screenshot-3.png",
      "/share-text/screenshot-4.png",
    ],

    content: [
      "ShareText was designed around a very simple idea: sending text securely through temporary links without requiring accounts, onboarding, or unnecessary friction. The experience was intentionally minimal so users could create and share content instantly.",

      "What made the project technically interesting was the encryption model. Sensitive content was encrypted directly inside the browser before being uploaded, meaning the server only ever handled encrypted payloads rather than readable user data.",

      "If password protection was enabled, decryption also happened entirely on the client side after the recipient opened the shared link. The backend acted purely as a storage layer and never had access to plaintext content.",

      "The project also became an opportunity to deeply explore Next.js architecture patterns. Using Server Actions instead of traditional API routes dramatically simplified the data flow and created a surprisingly clean developer experience without manually writing fetch requests throughout the application.",
    ],
  },
];
