export type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
  highlights?: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/Sophize logo.jpeg",
    name: "Sophize Technologies",
    period: { start: "Jan 2025", end: "Present" },
    position: "Software Engineer",
    location: "India",
    summary:
      "Building production-grade product features at Sophize Technologies across educational platforms, workflow visualization systems, and employee management tools using Next.js, React Flow, TypeScript, Prisma, PostgreSQL, Firebase, and Node.js.",
    keyFocus: ["Next.js", "TypeScript", "React Flow", "Prisma", "PostgreSQL", "Firebase", "Node.js"],
    highlights: [
      "Developed course management, instructor permissions, and metadata workflows for educational platforms.",
      "Built interactive workflow and process visualization features using React Flow.",
      "Designed REST APIs and database-backed services with Prisma and PostgreSQL.",
      "Contributed to employee management, learning progress tracking, and timesheet management products.",
      "Delivered end-to-end features across frontend, backend, and database layers in production environments.",
    ],
  },
  {
    id: 2,
    logo: "/images/work-experience/EvoluteIQ.svg",
    name: "EvoluteIQ",
    period: { start: "Feb 2024", end: "Apr 2024" },
    position: "Software Trainee Intern",
    location: "Mangaluru, Karnataka, India",
    summary:
      "Designed and delivered interfaces on EvoluteIQ's low-code automation platform. Completed module assignments, built a Project Management System capstone, and developed a practical understanding of UI development and process flow.",
    keyFocus: ["UI Development", "Low-code Platform", "Module Assignments", "Project Management System"],
  },
];

export default workExperiences;
