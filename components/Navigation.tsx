import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "types/Sections";

const Navigation = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > Breakpoints.lg;

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const goToSection = (section: Section) => scroller.scrollTo(section, { duration: 500, smooth: true });

  if (!isDesktop) {
    return (
      <div className="fixed inset-x-0 top-0 z-50 flex w-screen items-center justify-between px-4 py-4 text-foreground">
        <Tippy content={<small>Go to Top</small>} placement="right">
          <button
            type="button"
            onClick={animateScroll.scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/80 shadow-ring backdrop-blur transition hover:scale-105"
          >
            <Image src="/images/icon.png" alt="Anshuman Tiwari" width={32} height={32} />
          </button>
        </Tippy>

        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/80 p-1 shadow-soft backdrop-blur">
          {sectionsArray.slice(0, 4).map(({ id, icon: Icon, title }) => (
            <Tippy key={id} content={<small>{title}</small>} placement="bottom">
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full text-subtle transition hover:bg-app-soft hover:text-accent-strong"
                onClick={() => goToSection(id)}
              >
                <Icon />
                <span className="sr-only">{title}</span>
              </button>
            </Tippy>
          ))}

          <Tippy content={<small>Toggle Theme</small>} placement="bottom">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-app transition hover:bg-accent-strong"
            >
              {isDarkMode ? <FaMoon /> : <FaSun />}
              <span className="sr-only">Toggle Theme</span>
            </button>
          </Tippy>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-y-0 left-0 z-50 flex h-screen w-20 flex-col items-center justify-between py-6 text-foreground">
      <Tippy content={<small>Go to Top</small>} placement="right">
        <button
          type="button"
          onClick={animateScroll.scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/80 shadow-ring backdrop-blur transition hover:scale-105"
        >
          <Image src="/images/icon.png" alt="Anshuman Tiwari" width={32} height={32} />
        </button>
      </Tippy>

      <div className="group flex max-h-[68vh] items-center rounded-full border border-border bg-surface/75 p-2 shadow-soft backdrop-blur">
        <div className="grid gap-1">
          <div className="grid h-9 w-9 place-items-center rounded-full text-subtle transition group-hover:text-accent">
            <FiMenu />
          </div>

          {sectionsArray.map(({ id, icon: Icon, title }) => (
            <Tippy key={id} content={<small>{title}</small>} placement="right">
              <button
                type="button"
                className={clsx(
                  "grid h-9 w-9 place-items-center rounded-full text-subtle transition",
                  "hover:bg-app-soft hover:text-accent-strong"
                )}
                onClick={() => goToSection(id)}
              >
                <Icon />
                <span className="sr-only">{title}</span>
              </button>
            </Tippy>
          ))}
        </div>
      </div>

      <Tippy content={<small>Toggle Theme</small>} placement="right">
        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-12 w-12 place-items-center rounded-full border border-border bg-foreground text-app shadow-ring transition hover:bg-accent-strong"
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
          <span className="sr-only">Toggle Theme</span>
        </button>
      </Tippy>
    </div>
  );
};

export default Navigation;
