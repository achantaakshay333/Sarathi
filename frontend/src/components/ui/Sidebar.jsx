import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import { LogOut, X } from "lucide-react";

export function Sidebar({ menuItems = [], isOpen, onClose }) {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                "fixed inset-y-0 left-0 w-64 bg-primary text-white h-full flex flex-col z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 flex items-center justify-between">
                    <h1 className="text-white text-xl font-bold flex items-center gap-3">
                        <img src="/logo.png" className="h-8 w-8 bg-white rounded p-0.5" alt="SARATHI" />
                        SARATHI
                    </h1>
                    <button onClick={onClose} className="md:hidden text-white/70 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            onClick={() => {
                                if (window.innerWidth < 768) onClose();
                            }}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-white/10 text-white font-medium"
                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                )
                            }
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white w-full rounded-lg transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
