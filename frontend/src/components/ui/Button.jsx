import { cn } from "../../utils/cn";

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}) {
    const variants = {
      secondary: "btn-secondary",
      accent: "btn-accent",
      outline: "btn-outline",
      ghost:"text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors",
      primary: "btn-primary",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-6 py-2.5 sm:px-7 sm:py-3",
        lg: "px-8 py-3.5 sm:px-10 sm:py-4 text-lg",
    };

    return (
        <button
            className={cn("btn", variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
