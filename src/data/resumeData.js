// All portfolio copy lives here — sourced from Aniket's resume + provided screenshots.
// Edit this file to update content anywhere across the site.

export const personal = {
  name: "Aniket Kumar",
  role: "MERN Stack Developer",
  tagline: "I build fast, clean, production-ready web apps with the MERN stack.",
  location: "Muzaffarnagar, Uttar Pradesh, India",
  email: "aniketpundir348@gmail.com",
  phone: "+91 9528745292",
  whatsapp: "919528745292",
  github: "https://github.com/Aniketpundir",
  linkedin: "https://linkedin.com/in/i-am-aniket-kumar",
  resumeFile: "/resume/Aniket_Resume.pdf",
  summary:
    "Results-driven MERN Stack Developer with hands-on experience building scalable, responsive web applications. Proficient in React.js, Node.js, Express.js, and MongoDB, with a strong command of RESTful API design, component architecture, and UI/UX principles. Completed internships at Bluestock Fintech and Prodesk IT, delivering production-level features. Passionate about clean code, performance optimization, and solving real-world problems.",
};

export const stats = [
  { label: "Years Coding", value: 1, suffix: "+" },
  { label: "Projects Shipped", value: 6, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap 5", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "RESTful APIs", level: 82 },
      { name: "JWT Authentication", level: 70 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 78 },
      { name: "Mongoose", level: 75 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 88 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Chrome DevTools", level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem-Solving", level: 90 },
      { name: "Team Collaboration", level: 88 },
      { name: "Attention to Detail", level: 92 },
    ],
  },
];

export const projects = [
  {
    id: "zaykaxpress",
    name: "ZaykaXpress",
    subtitle: "Full-Stack Food Delivery Platform",
    description:
      "A food delivery web app built with the MERN stack, featuring a clean UI. Users can browse meals and place orders smoothly, backed by secure RESTful APIs and a modular, reusable React component library.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Modular, reusable React component library",
      "Secure RESTful APIs connected to MongoDB",
      "Optimized state management to reduce re-renders",
      "Responsive, user-friendly ordering flow",
    ],
    image: "zaykaxpress",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
  {
    id: "trippy-travel",
    name: "Trippy Travel",
    subtitle: "Modern Travel Booking Website",
    description:
      "A modern travel website with smooth navigation, dynamic routing, and centralized state management, delivering an intuitive experience for exploring destinations across devices.",
    tech: ["React.js", "React Router DOM", "Context API"],
    features: [
      "Dynamic routing between destinations",
      "Centralized state via Context API",
      "Reusable component structure",
      "Fully responsive across devices",
    ],
    image: "trippy-travel",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
  {
    id: "shopper-ecommerce",
    name: "Shopper E-commerce",
    subtitle: "Feature-Rich Online Shopping Platform",
    description:
      "An online shopping platform offering dynamic product listings, smooth navigation, and centralized cart management, emphasizing responsive UI and seamless user experience.",
    tech: ["React.js", "React Router DOM", "Context API"],
    features: [
      "Dynamic product listings",
      "Centralized cart management",
      "Component-based, scalable design",
      "Seamless cross-device UX",
    ],
    image: "shopper-ecommerce",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
  {
    id: "gemini-clone",
    name: "Gemini Clone",
    subtitle: "AI Chat Interface Replica",
    description:
      "A responsive React-based web app that replicates core features of Google's Gemini AI interface, using Google APIs for real-time interaction and React Router DOM for smooth navigation.",
    tech: ["React.js", "Google APIs", "React Router DOM"],
    features: [
      "Real-time AI interaction via Google APIs",
      "Smooth client-side navigation",
      "Component-based architecture",
      "Intelligent, user-friendly interface",
    ],
    image: "gemini-clone",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
  {
    id: "card-matching",
    name: "Card Matching Game",
    subtitle: "Memory Game with React Hooks",
    description:
      "An engaging memory game built with React, Tailwind CSS, and Hooks. Players flip cards to match pairs, strengthening focus and recall through interactive UI design.",
    tech: ["React.js", "Tailwind CSS", "React Hooks"],
    features: [
      "Hooks-driven state and game logic",
      "Responsive Tailwind layout",
      "Score and progress tracking",
      "Interactive flip animations",
    ],
    image: "card-matching",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    subtitle: "Browser Game with Live Scoring",
    description:
      "A browser-based game using HTML, CSS, and JavaScript that lets users play against the computer with real-time score tracking and smooth DOM updates.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Randomized computer move logic",
      "Real-time score tracking",
      "Instant DOM updates without reload",
      "Responsive, interactive gameplay",
    ],
    image: "rock-paper-scissors",
    github: "https://github.com/Aniketpundir",
    demo: "#",
  },
];

export const experience = [
  {
    role: "Web Developer & Designer",
    company: "Velora Global Ventures",
    period: "Mar 2026 – Present",
    points: [
      "Developed and deployed SEO-optimized, responsive websites using React.js and modern CSS frameworks, improving page load speed by optimizing assets and minimizing render-blocking resources.",
      "Designed intuitive UI/UX layouts and translated Figma/design concepts into pixel-perfect, functional web interfaces.",
      "Ensured cross-device mobile responsiveness and consistent UI across browsers.",
      "Collaborated with marketing and content teams in Agile sprints to implement new features.",
      "Identified and resolved production bugs, maintaining smooth performance of live projects.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Contributed to full-stack development of production-level features using the MERN stack.",
      "Built and tested RESTful APIs, improving data handling efficiency and optimizing response structures.",
      "Enhanced frontend performance by refactoring React components and eliminating unnecessary re-renders.",
      "Participated in Agile sprints, daily standups, and used Git/GitHub for version control.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institute: "College of Engineering Roorkee",
    period: "2022 – 2026",
  },
  {
    degree: "12th (PCM)",
    institute: "UP Board",
    period: "2020 – 2021",
  },
  {
    degree: "10th",
    institute: "UP Board",
    period: "2018 – 2019",
  },
];

export const certifications = [
  {
    title: "HTML, CSS, JavaScript & React for Web Developers",
    issuer: "Udemy",
  },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];
