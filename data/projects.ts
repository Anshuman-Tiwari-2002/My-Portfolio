import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/SAAI logo.png",
    name: "SAAI-Smart Automated Anti-Violence Intervention",
    summary:
      "An AI-powered system for real-time violence detection using CCTV footage. It detects threats and sends automated police alerts within 5 seconds via a Telegram bot.",
    tags: ["Python", "TensorFlow", "OpenCV", "Pycharm"],
    link: {
      github: "https://github.com/Anshuman-Tiwari-2002/project",
    },
  },
  {
    id: 2,
    image: "/images/projects/OIP.jpg",
    name: "Delhivery Mapping System",
    summary:
      "A fun experiement to understand the ache that is handling Dates and Time Zones on the frontend. Allows you to check the current time of multiple timezones at once, with a unique UI experience.",
    tags: ["opensource", "python", "HTML"],
    link: {

      github: "https://github.com/Anshuman-Tiwari-2002/Delhivery_Maping",
    },
  },
  {
    id: 3,
    image: "/images/projects/flight.jpg",
    name: "Flight-Route-Planing",
    summary:
      "A smart flight navigation system that optimizes routes and reduces risks. It uses real-time data from weather APIs, aviation databases, and flight sensors to improve safety and efficiency. Features include aircraft health tracking, a real-time dashboard, and a chatbot to assist pilots in decision-making.",
    tags: ["opensource", "HTML", "CSS", "JS"],
    link: {
      web: "https://airbus-challenge-fronted.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/Flight-Route-Planing",
    },
  },
  {
    id: 4,
    image: "/images/projects/travel.jpg",
    name: "travellers-website",
    summary:
      "A travel platform with real-time vehicle tracking that streamlines the booking process. It enhances the rental experience and improves user engagement with integrated real-time location services.",
    tags: ["opensource", "HTML", "CSS", "JS", "PHP"],
    link: {

      github: "https://github.com/Anshuman-Tiwari-2002/travellers-website",
    },
  },
  {
    id: 5,
    image: "/images/projects/Clippy.png",
    name: "Clippy",
    summary:
      "Clippy is an online clipboard tool for easy copying, pasting, and file sharing. Built with Next.js and MongoDB, it ensures secure storage for your text and files.",
    tags: ["opensource", "typescript", "CSS", "JavaScript", "MongoDB"],
    link: {
      web: "https://clippy-omega.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/clippy-",
    },
  },
  {
    id: 6,
    image: "/images/projects/rlogistics-cover.png", //upper case jpg
    name: "Rlogistics app",
    summary:
      "A delivery management system with Driver and Admin Dashboards for tracking deliveries, vehicles, payments, and attendance. Built with the MERN stack, it features Role-Based Access for better task management.",
    tags: ["HTML", "CSS", "JavaScript", "MERN"],
    link: {
      web: "https://r-logistics.vercel.app/",
      github: "https://github.com/Anshuman-Tiwari-2002/R-Logistics",
    },
  },
];

export default projectsList;
