import Ingredients from "components/Header/Ingredients";
import PhotoWall from "components/Header/PhotoWall";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import hero from "data/hero";
import links from "data/links";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";
import { MdArrowForward, MdFileDownload, MdLocationOn, MdWork } from "react-icons/md";
import { scroller } from "react-scroll";
import { Section } from "types/Sections";
import { openURLInNewTab } from "utils";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const goToSection = (section: Section) => scroller.scrollTo(section, { duration: 500, smooth: true });

  return (
    <section id="header" className="relative min-h-[84vh] overflow-hidden py-18 sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-3/5 bg-[radial-gradient(circle_at_50%_0%,_rgb(var(--color-accent)_/_0.18),_transparent_34rem)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgb(var(--color-bg-soft)_/_0.78),_transparent_48%)]" />

      <div className="mx-auto grid min-h-[calc(84vh-8rem)] max-w-6xl items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="order-2 flex flex-col items-start lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent-strong shadow-ring backdrop-blur">
            <MdWork className="text-accent" />
            <span>Currently building at Sophize Technologies</span>
          </div>

          <div className="mb-6 max-w-[420px] opacity-95">
            <Image src="/images/logo.png" width={485} height={128} alt={hero.name} priority className="h-auto w-full" />
          </div>

          <h1 className="sr-only">
            {hero.name} - {hero.title}
            <br />
            {hero.tagline}
            <br />
            {hero.location}
          </h1>

          <h2 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Software Engineer building product-grade web experiences.
          </h2>

          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-muted sm:text-xl sm:leading-9">
            {hero.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-subtle">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 shadow-ring backdrop-blur">
              <MdLocationOn className="text-accent" />
              {hero.location}
            </span>
            <span className="rounded-full border border-border bg-surface/60 px-3 py-1.5 shadow-ring backdrop-blur">
              {hero.title}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => goToSection(Section.WorkExperience)}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-app shadow-soft transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Sophize experience
              <MdArrowForward />
            </button>
            <button
              type="button"
              onClick={() => goToSection(Section.Projects)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/75 px-5 py-3 text-sm font-bold text-foreground shadow-ring backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              View case studies
            </button>
            <button
              type="button"
              onClick={() => openURLInNewTab(links.resume)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/75 px-5 py-3 text-sm font-bold text-foreground shadow-ring backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              <MdFileDownload />
              Resume PDF
            </button>
          </div>

          <div className="mt-5">
            <Ingredients />
          </div>
        </div>

        <div className="order-1 mx-auto lg:order-2">
          <div className="relative rounded-[2rem] border border-border bg-surface/70 p-3 shadow-soft backdrop-blur">
            <div className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <NoSSR>
              <PhotoWall size={width > Breakpoints.lg ? 380 : width > Breakpoints.sm ? 320 : 250} />
            </NoSSR>
            <div className="mt-3 rounded-[1.25rem] border border-border bg-app/60 p-4 shadow-ring backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Primary signal</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Software Engineer at Sophize, focused on Next.js, React Flow, TypeScript, Prisma, PostgreSQL, and
                Node.js.
              </p>
            </div>
          </div>
          <Profiles />
        </div>
      </div>
    </section>
  );
};

export default Header;
