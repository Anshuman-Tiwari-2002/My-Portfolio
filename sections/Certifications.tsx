import certificationsList from "data/certifications";
import { MdChevronRight } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Certifications = () => (
  <div id={Section.Certifications} className="rounded-xl border border-border bg-surface/35 p-4 opacity-75 shadow-sm">
    {getSectionHeading(Section.Certifications)}

    <div className="grid gap-1">
      {certificationsList.map((certification) => (
        <div key={certification.id} className="group flex gap-2 rounded-lg border border-border/70 bg-app/25 px-3 py-1.5 transition hover:border-accent/40 hover:bg-surface/60">
          <div className="pt-0.5">
            <MdChevronRight
              fontSize={16}
              className="relative left-0 text-subtle transition-[left_color] group-hover:left-1 group-hover:text-accent"
            />
          </div>

          <div className="leading-relaxed">
            <h5 className="text-sm font-semibold text-foreground transition-[color] group-hover:text-accent-strong">{certification.title}</h5>
            <p className="text-[11px] text-muted">{certification.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
