import { Project, SkillCategory, Experience, SocialLink } from '../types';

export const personalInfo = {
  name: "Krishna Singh",
  roles: ["MERN Stack Developer", "Full Stack Developer", "Software Engineer"],
  tagline: "I build real-time, scalable and user-friendly web applications. Passionate about clean code, data structures and solving real-world problems.",
  resumeUrl: "https://drive.google.com/file/d/19px6_U6Js1EnCj3aiLq_GOsf6OFedfGg/view?usp=sharing",
  bioParagraphs: [
    "I am a MERN Stack Developer and Computer Science undergraduate with hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in REST API development, responsive UI design, authentication, debugging, performance optimization, and database management.",
    "Currently pursuing my Bachelor of Technology in Computer Science & Engineering (2022 - 2026) at KCC Institute of Technology and Management, Greater Noida (U.P), I maintain a strong foundation in core computer science subjects like Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, System Design, and Software Engineering.",
    "Passionate about solving real-world problems using modern web technologies, I have built collaborative platforms and healthcare solutions integrating Socket.io, Redis, and Zustand. I also leverage AI productivity tools to accelerate development workflows and code quality."
  ],
  stats: [
    { label: "LeetCode Challenges", value: "100+" },
    { label: "Certifications", value: "4" }
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
    description: "A watch party platform enabling real-time multi-user media sync and interactive text chat.",
    bullets: [
      "Developed a full-stack watch party platform using **MongoDB**, **Express.js**, **React**, **Node.js**, **Socket.IO**, and **Redis**.",
      "Implemented synchronized video playback and real-time chat for seamless multi-user collaboration.",
      "Built secure private room management and optimized state handling using **Zustand**.",
      "Designed a responsive user interface compatible across mobile, tablet, and desktop devices."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "Zustand", "TailwindCSS", "JWT Authentication"],
    github: "https://github.com/Krishnasingh9999/synctube-watchparty-platform",
    live: "https://synctube-watchparty-platform-1.onrender.com/",
    featured: false
  },
  {
    id: "project-2",
    title: "MediDost - A Smart Healthcare Assistance",
    description: "An intelligent healthcare platform integrating AI symptom checker and roles-based dashboards.",
    bullets: [
      "Developed a full-stack healthcare web application in a team environment using **MongoDB**, **Express.js**, **React**, and **Node.js**, **Socket.IO**, and **Redis** following SDLC principles from requirement analysis to deployment.",
      "Implemented an **AI-based symptom checker** that analyzes user inputs and recommends appropriate doctors, reducing manual effort in appointment handling and medical report management through AI-assisted automation.",
      "Independently developed and maintained backend modules, integrated **REST APIs**, and built secure role-based dashboards using **JWT authentication** and **bcrypt hashing** for multiple user roles.",
      "Troubleshot application issues and optimized system performance, reducing page reload time by **15%** and supporting **200+** concurrent users.",
      "Ensured responsive UI compatibility across multiple devices and modern browsers."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "TailwindCSS", "JWT Authentication"],
    github: "https://github.com/SmartHealthcareAssistant/A-Smart-Healthcare-Platform-MediDost",
    live: "https://medi-dost-frontend.vercel.app/",
    liveAdmin: "https://medidost-admin.onrender.com/admin/login",
    featured: true
  },
  {
    id: "project-3",
    title: "E-Commerce Web Application",
    description: "A dynamic Java e-commerce store with secure user session tracking and optimized performance.",
    bullets: [
      "Developed Java Web Store using **JSP**, **Servlets**, and **JDBC** with **MySQL** database.",
      "Implemented secure session tracking for shopping carts and user profile checkout flows.",
      "Optimized server-side request routing, achieving **30%** reduction in query delays.",
      "Designed secure input validation controls to prevent **SQL injection** and secure user transactions."
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
