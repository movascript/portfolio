export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string[];
  tech: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "lowcall",
    title: "Lowcall",
    description:
      "Secure WebRTC video calling platform built during internet shutdowns to stay connected with family and friends.",

    github: "https://github.com/movascript/lowcall",
    live: "https://lowcall.ir",

    tech: ["React", "Vite", "Tailwind", "Socket.io", "WebRTC", "WebSocket"],

    content: [
      "Lowcall started as a personal necessity during internet shutdowns. I needed a fast and secure way to stay connected with family and friends, so I built a lightweight WebRTC-based video calling platform focused on simplicity and speed.",

      "The application removes friction completely. No accounts, no setup, no complicated onboarding. Users simply enter a room code and connect instantly.",

      "The hardest part of the project was peer connection handling, reconnect logic, and deploying the infrastructure myself on Linux servers. It became my first real experience combining frontend, backend, deployment, debugging, and DevOps at the same time.",

      "What makes this project meaningful to me is that it was not built for a portfolio. It solved a real problem during a difficult time and was actively used by real people.",
    ],
  },

  {
    slug: "dns-switcher",
    title: "DNS Switcher",
    description:
      "Lightweight desktop utility built with Tauri for instantly switching DNS servers on Windows.",

    github: "https://github.com/movascript/dns-switcher",

    tech: ["Tauri", "React", "TypeScript", "Tailwind", "Rust", "Tokio"],

    content: [
      "DNS Switcher is a lightweight desktop utility created to simplify changing DNS servers on Windows. Instead of manually editing settings and typing IP addresses repeatedly, users can switch configurations instantly.",

      "The original plan was to build the app with Electron, but I quickly realized the startup performance and memory usage did not fit the experience I wanted. I moved to Tauri instead and learned enough Rust to build the backend layer properly.",

      "One of the most interesting technical optimizations was persisting the PowerShell process instead of spawning a new one for every command. By piping commands directly through the same process, actions became dramatically faster.",

      "Like Lowcall, this was built from a real need. During periods of unstable internet access, changing DNS settings constantly became frustrating, so I built a cleaner solution and shared it publicly.",
    ],
  },
];
