import clsx from "clsx";
import languagesList from "data/languages";
import { Fragment } from "react";
import { Section } from "types/Sections";
import Typewriter from "typewriter-effect";
import { getSectionHeading } from "utils";

const Languages: React.FC = () => {
  return (
    <div id={Section.Languages} className="w-full rounded-xl border border-border bg-surface/35 p-4 opacity-75 shadow-sm">
      {getSectionHeading(Section.Languages)}

      <div className="flex flex-col justify-center">
        <Typewriter
          options={{
            delay: 28,
            loop: true,
            cursor: "",
          }}
          onInit={(typewriter) => {
            for (let language of languagesList) {
              typewriter.typeString(`<div class="text-lg font-bold text-foreground">${language.text}</div>`).typeString(
                language.translation ? `<div class="mt-1 text-xs text-muted">${language.translation}</div>` : "",
              ).pauseFor(2400).deleteAll();
            }
            typewriter.start();
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] font-medium text-subtle">
        {languagesList.map(({ id, language }, index) => (
          <Fragment key={id}>
            <span>{language}</span>
            <span className={clsx({ hidden: index === languagesList.length - 1 })}>/</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Languages;
