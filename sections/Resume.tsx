import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const Resume = () => (
  <section
    id={Section.Resume}
    className="rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur lg:p-6"
  >
    {getSectionHeading(Section.Resume)}

    <div className="flex flex-col items-center gap-6 md:flex-row">
      <div className="flex w-full flex-1 justify-center">
        <ImageLink
          height={350}
          href={links.resume}
          src="/images/resume/resume-cover.png"
          alt="Anshuman Tiwari's Resume on Print"
        />
      </div>

      <div className="flex flex-[2] flex-col items-start gap-6">
        <div className="max-w-full">
          <h4 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
            A concise overview of my experience, projects, technical skills, and achievements.
          </h4>

          <p className="text-muted leading-7">
            Updated regularly and optimized for recruiters, hiring managers, and engineering teams.
          </p>
        </div>

        <div>
          <Button onClick={() => openURLInNewTab(links.resume)}>Download Resume</Button>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
