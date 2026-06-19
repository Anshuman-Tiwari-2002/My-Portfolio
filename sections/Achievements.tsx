import achievementList from "data/achievements";
import { MdChevronRight } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Achievements = () => (
  <div id={Section.Achievements} className="rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur">
    {getSectionHeading(Section.Achievements)}

    <div className="grid gap-3">
      {achievementList.map((achievement) => (
        <div key={achievement.id} className="group flex gap-4 rounded-lg border border-border bg-app/35 p-4 transition hover:border-accent/50">
          <div>
            <MdChevronRight
              fontSize={20}
              className="relative left-0 text-accent transition-[left_color] group-hover:left-1"
            />
          </div>

          <div className="leading-relaxed">
            <h5 className="font-bold text-foreground transition-[color] group-hover:text-accent-strong">{achievement.title}</h5>
            <p className="text-sm text-muted">{achievement.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Achievements;
