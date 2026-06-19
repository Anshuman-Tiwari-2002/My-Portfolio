import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import { FaMedium } from "react-icons/fa";
import { mediumArticles, Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

type Props = {
  mediumArticles: mediumArticles[];
};

const Designs: React.FC<Props> = ({ mediumArticles }) => (
  <div id={Section.Articles} className="rounded-xl border border-border bg-surface/35 p-4 opacity-80 shadow-sm">
    {getSectionHeading(Section.Articles)}

    <div className="grid gap-3 md:grid-cols-[0.85fr_1.15fr] md:items-start">
      <div className="grid gap-3">
        <ImageLink
          key={mediumArticles[0]?.id}
          alt={mediumArticles[0]?.title || "Selected Medium article"}
          href={mediumArticles[0]?.html_url || links.medium}
          src={mediumArticles[0]?.images.hidpi || "/images/projects/Clippy.png"}
          dimensions={{ width: 512, height: 512 }}
        />
        <Button icon={FaMedium} onClick={() => openURLInNewTab(links.medium)} className="mt-1">
          Articles on Medium
        </Button>
      </div>

      <article className="rounded-lg border border-border bg-app/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Latest writing</p>
        <h3 className="mt-2 text-base font-bold tracking-tight text-foreground">Selected Medium articles</h3>
        <div className="mt-3 space-y-3">
          {mediumArticles.slice(0, 3).map((media) => (
            <a key={media.id} href={media.html_url} target="_blank" rel="noreferrer" className="block text-sm leading-6 text-muted transition hover:text-accent-strong">
              {media.title}
            </a>
          ))}
        </div>
      </article>
    </div>

  </div>
);

export default Designs;
