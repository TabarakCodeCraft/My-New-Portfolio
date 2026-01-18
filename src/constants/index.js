export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  // {
  //   title: "DevOps & Cloud Solutions",
  //   description:
  //     "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
  //   items: [
  //     {
  //       title: "CI/CD Pipelines",
  //       description: "(GitHub Actions, Docker, Kubernetes)",
  //     },
  //     {
  //       title: "Server Management ",
  //       description: "(Linux, Nginx, Load Balancing)",
  //     },
  //     {
  //       title: "Performance Tuning",
  //       description: "(Caching, Compression, Lighthouse 90+ Scores)",
  //     },
  //   ],
  // },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "React Native",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
// constants.js
export const projects = [
  {
    id: 1,
    name: "DR.Lab",
    description: "A desktop application built using React.js and Electron for the Puertik team. The project helped me learn new API structures and how to handle a front-end application with SQLite database integration.",
    href: "https://www.drlab.app/",
    githubLink: null,
    image: "/assets/projects/drlap.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Electron" },
      { id: 3, name: "SQLite" },
    ],
  },
  {
    id: 2,
    name: "Macbook Style",
    description: "Apple-style 3D website built with React, Three.js, GSAP, and TailwindCSS! Showcase products in immersive 3D scenes, scroll-animated models, and pinned sections.",
    href: "https://macbook-3d-by-tabarak.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/Apple-Website.git",
    image: "/assets/projects/Apple3d.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Three.js" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "AWWWARDS Site",
    description: "This project demonstrates how to leverage GSAP's powerful animation capabilities to craft fluid transitions, captivating scroll effects, and dynamic UI interactions.",
    href: "https://energydrink-website-with-gsap.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/GSAP-Awwwards-Website",
    image: "/assets/projects/gsapProject.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Talabatey Packaging System",
    description: "Web application (Dashboard) built using React.js and RESTful APIs for the Talabatey company. Delivered a redesigned frontend used by over 5,000 monthly users.",
    href: "https://www.linkedin.com/posts/tabarak-ali-star_im-so-happy-about-my-latest-achievement-activity-7357476830506827777-OMS0",
    githubLink: null,
    image: "/assets/projects/talabatey.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "RESTful API" },
      { id: 3, name: "UI/UX" },
    ],
  },
  {
    id: 5,
    name: "Car Rental",
    description: "A modern full-stack web app for renting and managing cars with ease. Multi-language support (English & Arabic), Secure authentication via Clerk.",
    href: "https://car-rental-frontend-by-tabarak2025.vercel.app/",
    githubLink: "https://github.com/TabarakCodeCraft/Car-Rental",
    image: "/assets/projects/carRental.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Clerk Auth" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 6,
    name: "Car Lover",
    description: "An online code and markdown editor built with React.js. The editor supports HTML, CSS, and JavaScript, allowing users to see an instant preview of their work.",
    href: "https://car-lover-bytota.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/Car-lover",
    image: "/assets/projects/carlover.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Local Storage" },
      { id: 3, name: "CSS" },
    ],
  },
  {
    id: 7,
    name: "e-Commerce Flowers",
    description: "A fully responsive e-commerce platform for flower shopping, built using HTML and CSS. It provides a simple and accessible design, ensuring a smooth user experience.",
    href: "https://design-flowers-website.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/E-Commerce-Flowers",
    image: "/assets/projects/flowere-commerc.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Responsive Design" },
    ],
  },
  {
    id: 8,
    name: "Portfolio Macbook",
    description: "A React-based web application that replicates the macOS desktop interface, designed to create unique and memorable portfolios through an interactive desktop environment.",
    href: "https://mac-os-by-tabarak.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/Portfolio-Mac-OS",
    image: "/assets/projects/mac-os.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Interactive UI" },
    ],
  },
  {
    id: 9,
    name: "Rental Car",
    description: "A car rental platform built using React.js, designed to assist in finding rental cars easily. The platform offers a simple interface with a smooth booking process.",
    href: "https://toto-cars-lover.netlify.app/",
    githubLink: "https://github.com/TabarakCodeCraft/cars-website-in-react",
    image: "/assets/projects/carSite.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Responsive Design" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/tabarak.ali.iq" },

  { name: "LinkedIn", href: "https://www.linkedin.com/in/tabarak-ali-star/" },
  { name: "GitHub", href: "https://github.com/TabarakCodeCraft" },
];
