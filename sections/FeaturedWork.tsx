import Heading from "components/Heading";
import { FaLayerGroup } from "react-icons/fa";

type FeaturedWorkCard = {
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

const featuredWork: FeaturedWorkCard[] = [
  {
    title: "ALeA",
    summary: "A course management platform focused on instructor workflows, ACL systems, metadata handling, and multi-institution support.",
    bullets: ["Course management", "Instructor workflows", "ACL systems", "Metadata management", "React Flow integrations", "Multi-institution support"],
    tags: ["Next.js", "React Flow", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "CrewPulse",
    summary: "An internal product surface for employee management, timesheets, learning tracking, and admin visibility.",
    bullets: ["Employee management", "Timesheet management", "Learning tracking", "Admin dashboard", "Team visibility features"],
    tags: ["Next.js", "TypeScript", "Firebase", "Node.js", "REST APIs"],
  },
  {
    title: "Match Summaries",
    summary: "An AI-powered cricket summary experience for producing concise match recaps with a production web stack.",
    bullets: ["AI-powered cricket match summaries", "Next.js", "Prisma", "PostgreSQL", "Vercel deployment"],
    tags: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
  },
];

const FeaturedWork = () => (
  <section id="featured-work" className="relative">
    <Heading icon={FaLayerGroup}>Featured Work</Heading>

    <div className="mb-5 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">Selected product work</p>
      <p className="mt-3 text-base leading-8 text-muted">
        Product case studies focused on ownership, workflows, and the systems built to support real users.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-3">
      {featuredWork.map((work) => (
        <article
          key={work.title}
          className="group flex h-full flex-col rounded-xl border border-border bg-surface/85 p-6 shadow-ring backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
        >
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{work.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{work.summary}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-app-soft px-2.5 py-1 text-2xs font-semibold text-subtle">
                {tag}
              </span>
            ))}
          </div>

          <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
            {work.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedWork;