import { cn } from "../../utils/cn";

export function Badge({ className, variant = "primary", children, ...props }) {
    const variants = {
        primary: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-secondary text-white border-secondary",
        accent: "bg-accent/10 text-accent border-accent/20",
        outline: "bg-transparent text-gray-500 border-gray-200",
        success: "bg-emerald-100 text-emerald-700 border-emerald-200",
        danger: "bg-red-100 text-red-700 border-red-200",
        warning: "bg-amber-100 text-amber-700 border-amber-200",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
