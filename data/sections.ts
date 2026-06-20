import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaAward, FaBook, FaDev, FaFilePdf, FaPaintBrush, FaPaperPlane, FaSignLanguage, FaTools } from "react-icons/fa";
import { MdBook, MdCamera, MdInfo, MdMusicNote, MdPerson, MdSchool, MdWork } from "react-icons/md";
import { Section, SectionArray, SectionMap } from "types/Sections";

const sectionsList: SectionMap = {
  [Section.AboutMe]: {
    icon: MdPerson,
    title: "About Me",
  },

  [Section.WorkExperience]: {
    icon: MdWork,
    title: "Work Experience",
  },

  [Section.Projects]: {
    icon: FaDev,
    title: "Projects",
  },

  [Section.Skills]: {
    icon: FaTools,
    title: "Skills",
  },

  [Section.Achievements]: {
    icon: FaAward,
    title: "Achievements",
  },

  [Section.Education]: {
    icon: MdSchool,
    title: "Education",
  },

  [Section.Articles]: {
    icon: FaBook,
    title: "Writing",
  },

  [Section.Resume]: {
    icon: FaFilePdf,
    title: "Resume",
  },

  [Section.Contact]: {
    icon: FaPaperPlane,
    title: "Contact",
  },

  [Section.Languages]: {
    icon: FaSignLanguage,
    title: "Languages",
  },

  [Section.Certifications]: {
    icon: AiFillSafetyCertificate,
    title: "Certifications",
  },
};

export const sectionsArray: SectionArray = Object.entries(sectionsList).map(([id, { icon, title }]) => ({
  id: id as Section,
  icon,
  title,
}));

export default sectionsList;
