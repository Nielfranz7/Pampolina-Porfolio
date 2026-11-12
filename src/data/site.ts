// Edit this file to update the portfolio. Empty links are hidden automatically.
export const site = {
  name: "Niel Franz Pampolina",
  email: "", // e.g. "you@gmail.com"
  github: "", // e.g. "https://github.com/username"
  linkedin: "", // e.g. "https://www.linkedin.com/in/username"
  resume: "", // put a PDF in /public and use "/Pampolina-Resume.pdf"
};

export type Project = {
  title: string;
  status: string;
  role: string;
  summary: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Paete Budget Hub",
    status: "Thesis",
    role: "Team leader",
    summary:
      "A budget workflow system for the Municipality of Paete. Departments prepare their budgets, the finance office reviews them, and approvers sign off in one place.",
    stack: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "CheckPoint",
    status: "Academic project",
    role: "QA tester",
    summary:
      "Live bus arrival times for commuters in the Philippines, estimated checkpoint by checkpoint. I tested the conductor, admin, and commuter flows with a structured test case template.",
    stack: ["Web app", "Test cases"],
  },
  {
    title: "FurSure",
    status: "Academic project",
    role: "Lead UI/UX designer",
    summary:
      "A mobile app concept that connects people with adoptable pets, rescue opportunities, and nearby shelters. Designed and prototyped in Figma.",
    stack: ["Figma", "Prototyping"],
  },
  {
    title: "CanteenTrack",
    status: "In progress",
    role: "Planned build",
    summary:
      "A cafeteria monitoring system for tracking sales, expenses, and monthly profit.",
    stack: ["React", "TypeScript", "Database design"],
  },
];

export const skills = [
  { group: "Front end", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
  { group: "Back end and data", items: ["PHP", "Laravel", "MySQL", "Firebase"] },
  { group: "Design and tools", items: ["Figma", "Git", "GitHub"] },
];

export const certifications = [
  { name: "IT Specialist: Network Security", by: "Certiport", year: "2026" },
  { name: "IT Specialist: Data Analytics", by: "Certiport", year: "2025" },
  { name: "Agentblazer Champion", by: "Salesforce", year: "2026" },
];
