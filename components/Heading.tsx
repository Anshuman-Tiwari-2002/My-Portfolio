import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ icon: Icon, children }) => (
  <div className="mb-8 flex items-center gap-3 text-subtle transition-colors hover:text-accent-strong">
    {Icon && (
      <span className="grid h-7 w-7 place-items-center rounded border border-border bg-surface text-accent shadow-ring">
        <Icon size={14} />
      </span>
    )}

    <span className="relative -bottom-px text-section-label font-bold uppercase text-foreground">{children}</span>
  </div>
);

export default Heading;
