import about from "data/about";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <section id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur lg:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">{about.greeting}</p>
      <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Full-Stack Software Engineer building products with Next.js, TypeScript, React Flow, and Node.js.
      </h2>

      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutMe;
