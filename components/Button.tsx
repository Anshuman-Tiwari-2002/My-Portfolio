import clsx from "clsx";
import type { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled = false,
  icon: Icon = BiLinkExternal,
}) => {
  return (
    <div className={clsx("flex", className)}>
      <button
        type="button"
        disabled={disabled}
        className={clsx("group relative rounded transition-opacity", { "cursor-not-allowed opacity-60": disabled })}
        onClick={disabled ? () => { } : onClick}
      >
        <div
          className={clsx(
            "relative left-0 top-0 z-10 flex items-center justify-center gap-2.5 rounded px-7 py-2.5 text-sm font-semibold",
            "bg-foreground text-app shadow-ring transition-[top_left_background-color_color]",
            "hover:left-0.5 hover:top-0.5 hover:bg-accent-strong hover:text-app",
            "active:left-1 active:top-1",
            { "hover:top-0 hover:left-0 active:top-0 active:left-0": disabled }
          )}
        >
          {Icon && <Icon fontSize={16} />}
          <span>{children}</span>
        </div>

        <div className="absolute left-1 top-1 h-full w-full rounded border border-border-strong bg-surface" />
      </button>
    </div>
  );
};

export default Button;
