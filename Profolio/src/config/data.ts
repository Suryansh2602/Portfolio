// src/config/data.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const SKILLS: string[] = [
  "Java", "Spring Boot", "Microservices", "React", 
  "TypeScript", "PostgreSQL", "Tailwind CSS", "JWT/OAuth"
];

export const PROJECTS: Project[] = [
  {
    title: "UrbanEats",
    description: "A microservices-based food delivery application architecture.",
    tags: ["Java", "Spring Boot", "Microservices", "Postman"],
  },
  {
    title: "FriendBook",
    description: "Social media platform featuring Spring Security and AOP.",
    tags: ["Spring Boot", "Spring Security", "React"],
  }
];

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Webkorps",
    duration: "Feb 2026 - Present",
    details: "Working on enterprise backend solutions."
  },
];