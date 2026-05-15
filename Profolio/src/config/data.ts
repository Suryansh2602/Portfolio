// src/config/data.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const SKILLS: string[] = [
  "Java", "Spring Boot", "Microservices", "React", "Git",
  "TypeScript", "PostgreSQL", "Tailwind CSS", "JWT/OAuth"
];

export const PROJECTS: Project[] = [
  {
    title: "UrbanEats",
    description: "A microservices-based food delivery application architecture designed around service boundaries, API communication, and scalable backend thinking.",
    tags: ["Java", "Spring Boot", "Microservices", "Postman"],
  },
  {
    title: "FriendBook",
    description: "A social media platform featuring authentication, Spring Security, and full-stack interaction flows.",
    tags: ["Spring Boot", "Spring Security", "React"],
  },
  {
    title: "Banking Transaction Management System",
    description: "A Java Swing desktop application where each transaction is unique and secured, with records maintained across deposits, withdrawals, transfers, and other banking operations.",
    tags: ["Java", "Swing", "Desktop Application", "Transaction Security"],
  },
  {
    title: "Library Management System",
    description: "A servlet-based library application for managing books, records, user activity, and core circulation flows in a structured backend-driven setup.",
    tags: ["Java", "Servlet", "JSP", "MySQL"],
  },
];

export const EXPERIENCE = [
  {
    role: "Trainee",
    company: "InfoBeans Foundation",
    duration: "Training Program",
    details: "Received industry-oriented training focused on software development fundamentals, delivery mindset, and practical implementation."
  },
  {
    role: "Trainee",
    company: "InfoBeans",
    duration: "Industry Training",
    details: "Trained in a professional MNC environment with exposure to modern engineering practices, code quality, and real-world development expectations."
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
  {
    role: "Software Developer",
    company: "Webkorps",
    duration: "Feb 2026 - Present",
    details: "Currently working on international projects, contributing to enterprise backend solutions and delivery for global client requirements."
  },
];
