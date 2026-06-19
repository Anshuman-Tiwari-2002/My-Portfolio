import clsx from "clsx";
import React from "react";

type RefProps = HTMLInputElement & HTMLTextAreaElement;

type Props = {
  label: string;
  hasError?: boolean;
  className?: string;
  placeholder: string;
  description: string;
  type?: React.HTMLInputTypeAttribute | "textarea";
};

const Input = React.forwardRef<RefProps, Props>(
  ({ label, description, placeholder, className, hasError = false, type = "text", ...props }, ref) => {
    const inputClassName = clsx(
      "rounded border border-border bg-surface/70 px-5 py-3 text-base text-foreground shadow-ring placeholder:text-subtle",
      "transition-[border-color,box-shadow,background-color] focus:border-accent focus:bg-surface focus:shadow-soft",
      {
        "animate__animated animate__shakeX border-red-400 text-red-700 dark:text-red-200 focus:border-red-400": hasError,
      }
    );

    return (
      <label className={clsx("flex flex-col gap-2", className)}>
        <span className="text-sm font-semibold text-foreground">{label}</span>

        {type === "textarea" ? (
          <textarea ref={ref} rows={4} placeholder={placeholder} className={inputClassName} {...props} />
        ) : (
          <input ref={ref} type={type} placeholder={placeholder} className={inputClassName} {...props} />
        )}

        <span className={clsx("text-xs leading-5 text-subtle", { "text-red-500 dark:text-red-300": hasError })}>
          {description}
        </span>
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
