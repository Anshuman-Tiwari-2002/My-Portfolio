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
  <div id={Section.Articles}>
    {getSectionHeading(Section.Articles)}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {mediumArticles.slice(0, 10).map((media) => (
        <ImageLink
          key={media.id}
          alt={media.title}
          href={media.html_url}
          src={media.images.hidpi}
          dimensions={{ width: 512, height: 512 }}
        />
      ))}
    </div>

    <Button icon={FaMedium} onClick={() => openURLInNewTab(links.medium)} className="mt-8">
      Articles on Medium
    </Button>

  </div>
);

export default Designs;
