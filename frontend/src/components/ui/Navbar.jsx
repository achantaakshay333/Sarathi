import { LogOut, User, Bell, Menu } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar({ userRole = "Guest", onMenuClick }) {
    return (
        <nav className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="p-2 md:hidden text-primary hover:bg-gray-100 rounded-lg"
                >
                    <Menu size={24} />
                </button>
                <img src="/logo.png" className="h-10 w-10 rounded-lg object-contain shadow-sm border border-gray-100 bg-white p-1" alt="SARATHI Logo" />
                <span className="font-bold text-xl hidden md:block text-primary tracking-tight">SARATHI</span>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-5 h-5 text-text-light" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
                </Button>
                <div className="flex items-center gap-2 pl-4 border-l">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold">{userRole}</p>
                        <p className="text-xs text-text-light underline cursor-pointer hover:text-primary transition-colors">Logout</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                        <User className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
