import workExperiences, { type WorkExperience as WorkExperienceType } from "data/experience";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type Props = {
  data: WorkExperienceType;
  isPrimary: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isPrimary }) => (
  <article className={`group relative overflow-hidden rounded-xl border border-border bg-surface/75 p-5 shadow-ring backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-soft lg:p-6 ${isPrimary ? "border-accent/25 bg-surface/85 lg:p-7" : ""}`}>
    {isPrimary && <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-strong to-transparent" />}

    <div className="flex items-start gap-4">
      <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl border border-border bg-white p-2 shadow-ring">
        <Image src={data.logo} alt={data.name} width={44} height={44} className="object-contain" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {isPrimary && (
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-2xs font-bold uppercase tracking-wide text-accent-strong">
              Current focus
            </span>
          )}
          <span className="text-xs font-semibold text-subtle">
            ({data.period.start} - {data.period.end})
          </span>
        </div>

        <h3 className={isPrimary ? "mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl" : "mt-2 text-xl font-bold tracking-tight text-foreground"}>
          {data.name}
        </h3>
        <h4 className="text-sm font-bold text-accent-strong">{data.position}</h4>
      </div>
    </div>

    <h5 className="mt-5 flex items-center gap-2 text-xs font-semibold text-subtle">
      <FaLocationArrow />
      <span>{data.location}</span>
    </h5>

    <p className={isPrimary ? "mt-5 max-w-4xl text-base leading-8 text-muted" : "mt-4 text-sm leading-7 text-muted"}>
      {data.summary}
    </p>

    {isPrimary && (
      <div className="mt-6 grid gap-3">
        <div className="rounded-xl border border-border bg-app/45 p-4 shadow-ring">
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Impact highlights</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
            {data.highlights?.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}

    <div className="mt-5 flex flex-wrap gap-2">
      {data.keyFocus.map((focus) => (
        <span key={focus} className="rounded-full border border-border bg-app-soft px-2.5 py-1 text-2xs font-semibold text-subtle">
          {focus}
        </span>
      ))}
    </div>
  </article>
);

const WorkExperienceTimeline = () => (
  <section id={Section.WorkExperience}>
    <div className="mb-4">
      {getSectionHeading(Section.WorkExperience)}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Experience building software that ships.</h2>
      <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
        Current engineering work is treated as the strongest career signal, with impact surfaced instead of buried.
      </p>
    </div>

    <div className="grid gap-4">
      {workExperiences.map((data, index) => (
        <WorkExperience key={data.id} data={data} isPrimary={index === 0} />
      ))}
    </div>
  </section>
);

export default WorkExperienceTimeline;
