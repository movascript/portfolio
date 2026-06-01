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
];
