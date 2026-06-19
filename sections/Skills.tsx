import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type SkillGroup = {
  title: string;
  technologies: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "REST APIs", "Prisma"],
  },
  {
    title: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    technologies: ["Firebase", "Git", "Postman", "VS Code", "Selenium", "Android Studio"],
  },
];

const Skills = () => (
  <div id={Section.Skills}>
    {getSectionHeading(Section.Skills)}

    <div className="mb-3 max-w-3xl text-sm leading-7 text-muted">
      A practical view of the stack, grouped by how the tools support product delivery.
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="px-4 py-3 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex flex-col gap-3 transition-colors duration-700 hover:duration-100"
        >
          <strong className="text-sm text-foreground">{group.title}</strong>

          <div className="flex flex-wrap gap-2">
            {group.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-border bg-app-soft px-2.5 py-1 text-2xs font-semibold text-subtle">
                {technology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
