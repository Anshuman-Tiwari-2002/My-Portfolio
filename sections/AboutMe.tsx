import about from "data/about";
import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <section id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid gap-5 rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur lg:grid-cols-[0.85fr_1.15fr] lg:p-6">
      <div className="relative hidden min-h-[240px] overflow-hidden rounded-xl border border-border bg-app-soft lg:block">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/20 to-transparent" />
        <Image fill alt="Selfie Boy" src="/images/about-me/selfie-boy.svg" sizes="30vw" className="object-contain p-7" />
      </div>

      <div className="min-w-0">
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
    </div>
  </section>
);

export default AboutMe;
