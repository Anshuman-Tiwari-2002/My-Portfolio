import Button from "components/Button";
import links from "data/links";
import { FaMedium } from "react-icons/fa";
import { mediumArticles, Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

type Props = {
  mediumArticles: mediumArticles[];
};

const Articles: React.FC<Props> = ({ mediumArticles }) => {
  return (
    <div id={Section.Articles} className="rounded-xl border border-border bg-surface/35 p-4 opacity-80 shadow-sm">
      {getSectionHeading(Section.Articles)}

      <div className="grid gap-4 md:grid-cols-2">
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-app/40 shadow-ring transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
          <a href={mediumArticles[0]?.html_url || links.medium} target="_blank" rel="noreferrer" className="block">
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface">
              <img
                src={mediumArticles[0]?.images.hidpi || "/images/projects/Clippy.png"}
                alt={mediumArticles[0]?.title || "Generative AI: Transforming Content Creation"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </a>

          <div className="grid flex-1 gap-3 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Article</p>
              <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">
                Generative AI: Transforming Content Creation
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                A concise look at how generative AI changes content creation workflows, iteration speed, and the way
                teams shape ideas.
              </p>
            </div>

            <Button icon={FaMedium} onClick={() => openURLInNewTab(mediumArticles[0]?.html_url || links.medium)}>
              Read Article
            </Button>
          </div>
        </article>

        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-app/40 shadow-ring transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
          <a href={mediumArticles[1]?.html_url} target="_blank" rel="noreferrer" className="block">
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface">
              <img
                src={mediumArticles[1]?.images.hidpi || "/images/projects/Clippy.png"}
                alt="AI Won't Replace Developers, But It Will Replace Developers Who Don't Use AI"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </a>

          <div className="grid flex-1 gap-3 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Article</p>
              <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">
                AI Won&apos;t Replace Developers, But It Will Replace Developers Who Don&apos;t Use AI
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                A practical perspective on using AI as a development multiplier for ideation, implementation, and
                review.
              </p>
            </div>

            <Button icon={FaMedium} onClick={() => openURLInNewTab(mediumArticles[1]?.html_url)}>
              Read Article
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Articles;
