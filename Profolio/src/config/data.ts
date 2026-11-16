// src/config/data.ts

export interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  github?: string;
}

export interface Service {
  title: string;
  detail: string;
}

export const SERVICES: Service[] = [
  {
    title: "Websites & Web Apps",
    detail: "From business websites to customer portals and dashboards, built to be fast, secure and easy to use.",
  },
  {
    title: "Business Software",
    detail: "Custom tools that replace spreadsheets and manual work, built around how your team actually operates.",
  },
  {
    title: "Integrations & Automation",
    detail: "Connecting payments, email, CRMs and your other systems so data flows without copy-pasting.",
  },
  {
    title: "Fixes & Consulting",
    detail: "Slow, buggy or hard-to-change software? I find what's wrong, fix it, and explain it in plain words.",
  },
];

export const PROCESS: Service[] = [
  {
    title: "Understand",
    detail: "The problem, the users and the constraints come first, before any code is written.",
  },
  {
    title: "Design",
    detail: "Data models, API contracts and service boundaries are planned up front, not patched in later.",
  },
  {
    title: "Build",
    detail: "Clean, tested code, with regular demos so you see progress every week, not just at the end.",
  },
  {
    title: "Ship",
    detail: "Deployment, handoff and clear documentation, so your team can own what we built.",
  },
];

export const SOCIAL_LINKS = {
  github: { label: "GitHub", handle: "@Suryansh2602", url: "https://github.com/Suryansh2602" },
  linkedin: { label: "LinkedIn", handle: "suryansh-pushpkar", url: "https://linkedin.com/in/suryansh-pushpkar" },
  email: { label: "Email", handle: "suryanshpushpkar183@gmail.com", url: "mailto:suryanshpushpkar183@gmail.com" },
};

export const SKILLS: string[] = [
  // Interleaved so no single language dominates the strip
  "React", "Java", "TypeScript", "Spring Boot", "RESTful APIs", "PostgreSQL", "Microservices", "Tailwind CSS",
  "MySQL", "JWT/OAuth", "Spring Security", "Git", "Java Swing", "Swagger", "Spring Data JPA", "Thymeleaf",
  "Testing (JUnit, Mockito)", "Postman",
];

export const PROJECTS: Project[] = [
  {
    title: "UrbanEats",
    type: "Web platform",
    description: "A food delivery platform built as separate parts for orders, restaurants and customers, so each can grow and be updated without taking the others down.",
    tags: ["Java", "Spring Boot", "Microservices", "Postman"],
    github: "https://github.com/Suryansh2602/JAVA-PROJECTS/tree/main/1.%20URBANEATS",
  },
  {
    title: "FriendBook",
    type: "Web app",
    description: "A social media web app with secure sign-up and log-in, built end to end, from the screens people use to the database behind them.",
    tags: ["Spring Boot", "Spring Security", "React"],
    github: "https://github.com/Suryansh2602/FriendBook-Web-Application",
  },
  {
    title: "Library Management System",
    type: "Business software",
    description: "Software that helps a library manage its books, members and borrowing in one organised place, instead of paper registers.",
    tags: ["Java", "Servlet", "JSP", "MySQL"],
  },
  {
    title: "Banking Transaction Management System",
    type: "Desktop app",
    description: "A desktop banking app that records deposits, withdrawals and transfers, with every transaction uniquely tracked and secured.",
    tags: ["Java", "Swing", "Desktop Application", "Transaction Security"],
    github: "https://github.com/Suryansh2602/PROJECTS-/tree/main/Banking%20Management%20System",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Webkorps",
    duration: "Feb 2026 - Present",
    details: "Currently working on international projects, contributing to enterprise backend solutions and delivery for global client requirements."
  },
  {
    role: "Trainee",
    company: "InfoBeans",
    duration: "Industry Training",
    details: "Trained in a professional MNC environment with exposure to modern engineering practices, code quality, and real-world development expectations."
  },
  {
    role: "Trainee",
    company: "InfoBeans Foundation",
    duration: "Training Program",
    details: "Received industry-oriented training focused on software development fundamentals, delivery mindset, and practical implementation."
  },
  {
    role: "Software Developer Intern",
    company: "Calance International",
    duration: "Internship",
    details: "Worked as an intern while contributing to professional development tasks and learning how delivery works in client-facing software environments."
  },
  {
    role: "Freelance Software Developer",
    company: "Independent Clients",
    duration: "Freelance Projects",
    details: "Delivered software projects for different clients, turning business requirements into working backend and full-stack solutions."
  },
];
