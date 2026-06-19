import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/SAAI logo.png",
    name: "Smart Automation Anti-Violence Intervention Software",
    featured: true,
    category: "featured",
    summary:
      "Built a real-time violence detection system for CCTV feeds using TensorFlow and OpenCV, reaching 90% detection accuracy. Automated police alerts through a Telegram bot in under 5 seconds and reduced manual surveillance workload by 80%.",
    tags: ["Python", "TensorFlow", "OpenCV", "Telegram Bot"],
    link: {
      github: "https://github.com/Anshuman-Tiwari-2002/project",
    },
  },
  {
    id: 2,
    image: "/images/projects/travel.jpg",
    name: "Travelers Website",
    featured: true,
    category: "featured",
    summary:
      "Developed a real-time vehicle tracking and booking platform that reduced rental booking process time by 40%. Added location-based services and dynamic booking dashboards, improving user engagement by 20% during an ISRO hackathon build.",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    link: {
      github: "https://github.com/Anshuman-Tiwari-2002/travellers-website",
    },
  },
  {
    id: 3,
    image: "/images/projects/Clippy.png",
    name: "Clippy",
    featured: true,
    category: "featured",
    summary:
      "Created an online clipboard for copying, pasting, file sharing, and shared resource access. Built with Next.js, TypeScript, NextUI, MongoDB, and UploadThing, improving productivity by 45% and delivering a 30% faster page-load experience.",
    tags: ["Next.js", "TypeScript", "NextUI", "MongoDB", "UploadThing"],
    link: {
      web: "https://clippy-omega.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/clippy-",
    },
  },
  {
    id: 4,
    image: "/images/projects/flight.jpg",
    name: "Flight-Route-Planning",
    featured: false,
    category: "other",
    summary:
      "A smart flight navigation system that optimizes routes and reduces risks. It uses real-time data from weather APIs, aviation databases, and flight sensors to improve safety and efficiency. Features include aircraft health tracking, a real-time dashboard, and a chatbot to assist pilots in decision-making.",
    tags: ["opensource", "HTML", "CSS", "JavaScript"],
    link: {
      web: "https://airbus-challenge-fronted.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/Flight-Route-Planing",
    },
  },
  {
    id: 5,
    image: "/images/projects/OIP.jpg",
    name: "Delhivery Mapping System",
    featured: false,
    category: "other",
    summary:
      "A logistics mapping project focused on organizing Delhivery-related location data and presenting mapped delivery information through a simple web interface. Restored as part of the broader project archive without adding unsupported impact metrics.",
    tags: ["opensource", "python", "HTML"],
    link: {
      github: "https://github.com/Anshuman-Tiwari-2002/Delhivery_Maping",
    },
  },
  {
    id: 6,
    image: "/images/projects/rlogistics-cover.png",
    name: "Rlogistics App",
    featured: false,
    category: "other",
    summary:
      "A delivery management system with driver and admin dashboards for delivery details, vehicles, payments, and attendance. Built with the MERN stack and role-based access for task visibility.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    link: {
      web: "https://r-logistics.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/R-Logistics",
    },
  },
];

export default projectsList;
