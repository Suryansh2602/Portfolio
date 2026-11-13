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
    title: "Backend Architecture",
    detail: "Spring Boot APIs, modular services, auth flows, database design, and scalable foundations.",
  },
  {
    title: "Full-Stack Products",
    detail: "React frontends paired with clean backend systems so the product feels fast and reliable.",
  },
  {
    title: "Freelance Delivery",
    detail: "Solutions for clients from planning and development through to final handoff.",
  },
  {
    title: "Consulting & Debugging",
    detail: "Architecture reviews, cleanup plans, performance fixes, and practical technical guidance.",
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
    detail: "Clean, tested code with JUnit and Mockito, with APIs documented in Swagger as they grow.",
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
  "Java", "Spring Boot", "Microservices", "React", "Git", "Spring Security", "Thymeleaf", "MySQL", "Java Swing","Spring Data JPA",
  "TypeScript", "PostgreSQL", "Tailwind CSS", "JWT/OAuth" , "RESTful APIs", "Testing Frameworks (JUnit, Mockito)", "Swagger", "POSTMAN",
];

export const PROJECTS: Project[] = [
  {
    title: "UrbanEats",
    type: "Microservices",
    description: "A microservices-based food delivery application architecture designed around service boundaries, API communication, and scalable backend thinking.",
    tags: ["Java", "Spring Boot", "Microservices", "Postman"],
    github: "https://github.com/Suryansh2602/JAVA-PROJECTS/tree/main/1.%20URBANEATS",
  },
  {
    title: "FriendBook",
    type: "Full-stack",
    description: "A social media platform featuring authentication, Spring Security, and full-stack interaction flows.",
    tags: ["Spring Boot", "Spring Security", "React"],
    github: "https://github.com/Suryansh2602/FriendBook-Web-Application",
  },
  {
    title: "Library Management System",
    type: "Backend",
    description: "A servlet-based library application for managing books, records, user activity, and core circulation flows in a structured backend-driven setup.",
    tags: ["Java", "Servlet", "JSP", "MySQL"],
  },
  {
    title: "Banking Transaction Management System",
    type: "Desktop app",
    description: "A Java Swing desktop application where each transaction is unique and secured, with records maintained across deposits, withdrawals, transfers, and other banking operations.",
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
