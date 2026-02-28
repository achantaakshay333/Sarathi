import { cn } from "../../utils/cn";

export function Input({ className, label, error, ...props }) {
    return (
        <div className="space-y-1 w-full">
            {label && (
                <label className="block text-sm font-medium text-text-light">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    "input",
                    error && "border-red-500 focus:ring-red-500",
                    className
                )}
                {...props}
            />
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    );
}
