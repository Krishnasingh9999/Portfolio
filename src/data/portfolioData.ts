import { Project, SkillCategory, Experience, SocialLink } from '../types';

export const personalInfo = {
  name: "Krishna Singh",
  roles: ["MERN Stack Developer", "Full Stack Developer", "Software Engineer"],
  tagline: "Full Stack Developer specializing in building high-performance MERN applications, real-time collaboration engines, and scalable backend architectures. Committed to writing clean, type-safe code and solving complex algorithm challenges.",
  resumeUrl: "https://drive.google.com/file/d/1R1AATNYh9tn9CLWktdz1FCc-S0i6SoQg/view?usp=sharing",
  bioParagraphs: [
    "I am a passionate Full Stack Developer and Computer Science undergraduate specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With practical experience building production-ready applications, I focus on designing low-latency RESTful APIs, responsive frontend architectures, and secure authentication systems.",
    "Currently pursuing a Bachelor of Technology in Computer Science & Engineering (2022 - 2026) at KCC Institute of Technology and Management (Greater Noida), I maintain a robust academic foundation in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management, Operating Systems, and Software Engineering.",
    "I excel at translating complex system requirements into elegant, modular software. Through hands-on projects, I have integrated real-time state synchronization using Socket.io, database caching with Redis, and state management via Zustand. I continuously explore new technologies and AI-assisted workflows to maximize code quality and efficiency."
  ],
  stats: [
    { label: "DSA Solutions", value: "200+" },
    { label: "Industry Certifications", value: "8" }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/KrishnaSingh9999",
    iconName: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/krishnasingh9811/",
    iconName: "FaLinkedin"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Krishna-2003/",
    iconName: "SiLeetcode"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/krishna1863singh",
    iconName: "SiHackerrank"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", iconName: "FaJava" },
      { name: "JavaScript", iconName: "FaJs" },
      { name: "TypeScript", iconName: "SiTypescript" },
      { name: "Python", iconName: "FaPython" },
      { name: "C", iconName: "SiC" },
      { name: "C++", iconName: "SiCplusplus" },
      { name: "SQL", iconName: "FaDatabase" }
    ]
  },
  {
    name: "Frontend Technologies",
    skills: [
      { name: "HTML5", iconName: "FaHtml5" },
      { name: "CSS3", iconName: "FaCss3Alt" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss" },
      { name: "Bootstrap", iconName: "SiBootstrap" },
      { name: "React.js", iconName: "FaReact" },
      { name: "ReduxToolkit", iconName: "SiRedux" },
      { name: "Zustand", iconName: "SiRedux" }
    ]
  },
  {
    name: "Backend Technologies",
    skills: [
      { name: "Node.js", iconName: "FaNodeJs" },
      { name: "Express.js", iconName: "SiExpress" },
      { name: "JWT Authentication", iconName: "SiJsonwebtokens" },
      { name: "Redis", iconName: "SiRedis" },
      { name: "Socket.IO", iconName: "SiSocketdotio" },
      { name: "REST APIs", iconName: "FaServer" },
      { name: "Java Servlets", iconName: "FaServer" },
      { name: "JSP", iconName: "FaCoffee" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB (NoSQL)", iconName: "SiMongodb" },
      { name: "MySQL", iconName: "SiMysql" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", iconName: "FaGitAlt" },
      { name: "GitHub", iconName: "FaGithub" },
      { name: "Docker(Basic)", iconName: "FaDocker" },
      { name: "VS Code", iconName: "VscCode" },
      { name: "Postman", iconName: "SiPostman" },
      { name: "Eclipse", iconName: "SiEclipseide" },
      { name: "IntelliJ IDEA", iconName: "SiIntellijidea" },
      { name: "Vercel", iconName: "SiVercel" },
      { name: "Render", iconName: "SiRender" },
      { name: "Netlify", iconName: "SiNetlify" }
    ]
  },
  {
    name: "AI & Developer Productivity Tools",
    skills: [
      { name: "ChatGPT", iconName: "SiOpenai" },
      { name: "GitHub Copilot", iconName: "SiGithubcopilot" },
      { name: "Google Gemini", iconName: "SiGooglegemini" }
    ]
  },
  {
    name: "Core Subjects",
    skills: [
      { name: "DSA", iconName: "FaBrain" },
      { name: "OOP", iconName: "FaCube" },
      { name: "DBMS", iconName: "FaDatabase" },
      { name: "Operating System", iconName: "FaTerminal" },
      { name: "Computer Networks", iconName: "FaNetworkWired" },
      { name: "System Design (Basics)", iconName: "FaProjectDiagram" },
      { name: "Software Engineering", iconName: "FaLaptopCode" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "SyncTube - Real-Time Collaborative Watch Party Platform",
    description: "A synchronized media platform enabling multi-user real-time watch parties with bi-directional playback control and interactive chat rooms.",
    bullets: [
      "Architected a real-time collaborative watch party platform leveraging Socket.io for low-latency player state synchronization and Redis pub/sub for room session scaling.",
      "Engineered synchronized media playback algorithms ensuring millisecond-level sync precision across multiple connected peers.",
      "Implemented client-side session optimization using Zustand, minimizing component re-renders during active state changes.",
      "Designed an elegant, responsive dark-themed user interface utilizing Tailwind CSS, fully optimized for mobile and desktop screens."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "Zustand", "TailwindCSS", "JWT Authentication"],
    github: "https://github.com/Krishnasingh9999/synctube-watchparty-platform",
    live: "https://synctube-watchparty-platform-1.onrender.com/",
    featured: false
  },
  {
    id: "project-2",
    title: "MediDost - Smart Healthcare Platform",
    description: "An intelligent healthcare assistance platform featuring AI-driven symptom diagnosis, medical records management, and role-based user portals.",
    bullets: [
      "Developed a full-stack healthcare ecosystem adhering to SDLC principles from requirement specification through integration testing to containerized deployment.",
      "Integrated an AI symptom checker utilizing structured classification models to map symptoms and recommend localized specialized physicians.",
      "Designed secure role-based access control (RBAC) dashboards for patients, doctors, and admins using JWT tokens and bcrypt password salting.",
      "Optimized backend queries and database indexing, decreasing page initialization times by 15% and accommodating 200+ concurrent active connections.",
      "Constructed a responsive, mobile-first frontend with cross-browser compatibility and smooth micro-animations."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "TailwindCSS", "JWT Authentication"],
    github: "https://github.com/SmartHealthcareAssistant/A-Smart-Healthcare-Platform-MediDost",
    live: "https://medi-dost-frontend.vercel.app/",
    liveAdmin: "https://medidost-admin.onrender.com/admin/login",
    featured: true
  },
  {
    id: "project-3",
    title: "Java E-Commerce Web Engine",
    description: "A high-performance e-commerce platform built with native Java web technologies, featuring secure session tracking and SQL-injection defense.",
    bullets: [
      "Engineered an e-commerce platform using JSP, Servlets, and JDBC linked to a structured MySQL relational database.",
      "Implemented secure, stateful session tracking for dynamic shopping carts and checkout invoice flows.",
      "Optimized server-side request pipelines and connection pooling, achieving a 30% reduction in database retrieval latencies.",
      "Implemented parameterized SQL queries and output sanitization to guard against injection vectors and Cross-Site Scripting (XSS)."
    ],
    tech: ["Java", "JSP", "Servlets", "SQL", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Krishnasingh9999/eCommerce_website",
    live: "https://ecommerce.krishnasingh.dev",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "edu-1",
    role: "Bachelor of Technology in Computer Science & Engineering",
    company: "KCC Institute of Technology and Management",
    location: "Greater Noida (U.P)",
    dateRange: "2022 - 2026",
    achievements: [
      "Developed full-stack web platforms using MongoDB, Express, React, Node, Socket.io, and Redis.",
      "Studied core subjects: DSA, OOP, DBMS, Operating Systems, Computer Networks, System Design, and Software Engineering."
    ]
  },
  {
    id: "edu-2",
    role: "Higher Secondary (Class XII) | CBSE",
    company: "YSY International School",
    location: "Greater Noida (U.P)",
    dateRange: "2021 - 2022",
    achievements: [
      "Completed secondary education under CBSE syllabus with a focus on science and technical subjects."
    ]
  },
  {
    id: "edu-3",
    role: "High School (Class X) | CBSE",
    company: "Rao Balaram Public School",
    location: "Najafgarh (Delhi)",
    dateRange: "2019 - 2020",
    achievements: [
      "Completed high school education with early focus on mathematics and computational foundations."
    ]
  }
];

export const certificates = [
  {
    title: "Java Web Development with AI",
    issuer: "HCLTech",
    link: "https://drive.google.com/file/d/167FoElWy8ni13Cs0taoQis6OPjiYbOES/view"
  },
  {
    title: "Cybersecurity",
    issuer: "Tech Mahindra Foundation & Skill India",
    link: "https://drive.google.com/file/d/1wd0j7wdHEJY2QtNpuNjTT8lDNbY_3pWl/view?usp=sharing"
  },
  {
    title: "Quantum Computing",
    issuer: "IIT Roorkee & CDAC",
    link: "https://drive.google.com/file/d/1PFN8iQdz1gp2H8dmTBGrkOLbaq26EI00/view?usp=sharing"
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TATA",
    link: "https://drive.google.com/file/d/1CnhfJkkZS6xpTQHS9bqNo7LtqLZ9SPyQ/view?usp=sharing"
  },
  {
    title: "Solved 100+ problems on LeetCode | 5-Star rating in Java on HackerRank",
    issuer: "LeetCode & HackerRank"
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/1c3630945996"
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/32027bb95e22"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage"
  }
];
