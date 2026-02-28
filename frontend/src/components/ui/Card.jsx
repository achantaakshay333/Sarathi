import { cn } from "../../utils/cn";

export function Card({ className, children, ...props }) {
    return (
        <div className={cn("card", className)} {...props}>
            {children}
        </div>
    );
}
