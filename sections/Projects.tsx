import Tippy from "@tippyjs/react";
import Button from "components/Button";
import links from "data/links";
import projectsList from "data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const featuredProjects = projectsList.filter((project) => project.featured);
const otherProjects = projectsList.filter((project) => !project.featured);

const Projects = () => (
  <section id={Section.Projects} className="relative">
    {getSectionHeading(Section.Projects)}

    <div className="mb-5 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">Selected case studies</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Projects with a job to do.</h2>
      <p className="mt-4 text-base leading-8 text-muted">
        Featured work is organized as case studies first, with the broader project archive kept close by.
      </p>
    </div>

    <div className="grid gap-5 lg:auto-rows-fr lg:grid-cols-3">
      {featuredProjects.map((project, index) => (
        <article
          key={project.id}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/80 shadow-ring backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
        >
          <a href={project.link?.web || project.link?.github || "#"} target="_blank" rel="noreferrer" className="block">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-app-soft">
              <img
                src={project.image}
                alt={project.name}
                width={640}
                height={400}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                Case study 0{index + 1}
              </span>
            </div>
          </a>

          <div className="grid flex-1 gap-4 p-5 lg:p-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-app-soft px-2.5 py-1 text-2xs font-semibold text-subtle">
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <div className="flex gap-4 text-sm text-subtle">
                {project.link.web && (
                  <Tippy content="Visit Website" placement="bottom">
                    <a href={project.link.web} target="_blank" rel="noreferrer" className="transition hover:text-accent-strong">
                      <BiLinkExternal fontSize={18} />
                    </a>
                  </Tippy>
                )}

                {project.link.github && (
                  <Tippy content="Checkout Source Code" placement="bottom">
                    <a href={project.link.github} target="_blank" rel="noreferrer" className="transition hover:text-accent-strong">
                      <FaGithub fontSize={18} />
                    </a>
                  </Tippy>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-5 rounded-xl border border-border bg-surface/55 p-5 shadow-ring backdrop-blur">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Other projects</p>
          <p className="text-sm text-muted">Additional builds from the archive, preserved instead of hidden.</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {otherProjects.map((project) => (
          <article key={project.id} className="flex h-full flex-col rounded-lg border border-border bg-app/40 p-4 transition hover:border-accent/50 hover:bg-surface/70">
            <h3 className="font-bold text-foreground">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-2xs font-semibold uppercase tracking-wide text-subtle">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <div className="mt-4 flex gap-4 text-sm text-subtle">
                {project.link.web && (
                  <Tippy content="Visit Website" placement="bottom">
                    <a href={project.link.web} target="_blank" rel="noreferrer" className="transition hover:text-accent-strong">
                      <BiLinkExternal fontSize={18} />
                    </a>
                  </Tippy>
                )}

                {project.link.github && (
                  <Tippy content="Checkout Source Code" placement="bottom">
                    <a href={project.link.github} target="_blank" rel="noreferrer" className="transition hover:text-accent-strong">
                      <FaGithub fontSize={18} />
                    </a>
                  </Tippy>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>

    <Button icon={FaGithub} className="mt-8" onClick={() => openURLInNewTab(links.github)}>
      Projects on GitHub
    </Button>
  </section>
);

export default Projects;
