import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/Sophize logo.jpeg",
    name: "Sophize Technologies",
    period: { start: "Jan 2025", end: "Present" },
    position: "Full Stack Developer",
    location: "Remote, India",
    summary: "",
    keyFocus: ["ReactJs", "Next.js", "Node.js", "CSS", "PostgressSQL", "MYSQL"],
  },
  {
    id: 2,
    logo: "/images/work-experience/Rlogistics logo.jpg",
    name: "Rlogistics",
    period: { start: "Jun 2024", end: "Aug 2024" },
    position: "Full Stack Developer",
    location: "Faridabad, India",
    summary:
      "Developed a dynamic Driver and Admin Dashboard using the MERN stack, enabling seamless CRUD operations for managing delivery details, including drivers, vehicles, payments, and attendance. Implemented Role-Based Access Control (RBAC) to enhance task visibility for drivers while reducing admin workload, ensuring more efficient and streamlined delivery operations.",
    keyFocus: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: 3,
    logo: "/images/work-experience/EvoluteIQ.svg",
    name: "EvoluteIQ Solutions Private limited.",
    period: { start: "Feb 2024", end: "Apr 2024" },
    position: "Software Trainee intern",
    location: "Mangalore, India",
    summary:
      "Enhanced UI/UX design skills by creating intuitive, user-friendly interfaces while meeting project deadlines.Gained hands-on experience with the EvoluteIQ platform, leveraging its tools and resources to complete key assignments efficiently. As a final task, developed a comprehensive Project Management System, demonstrating effective resource utilization and a deep understanding of the platform’s capabilities.",
    keyFocus: ["UI", "UX"],
  },
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-10">
        <Image src={data.logo} alt={data.name} width={45} height={50} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
