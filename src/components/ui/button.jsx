import { cn } from "../../lib/utils";
import {} from "react-router-dom";

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary": variant === "primary",
          "bg-secondary": variant === "secondary",
          "& bg-white text-black": variant === "third",
        },
        "center-flex",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
