import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebar";
import { Navbar } from "../components/ui/Navbar";
import { useState } from "react";

export function DashboardLayout({ menuItems, roleName }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar
                menuItems={menuItems}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar
                    userRole={roleName}
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <main className="p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
