import { Outlet, NavLink } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { Menu, X, ChevronRight, Home, Info, Search, UserPlus, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PublicLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "View RFPs", to: "/rfps" },
    ];

    return (
        <div className="min-h-screen bg-background-site flex flex-col overflow-x-hidden">
            <header className="h-20 glass sticky top-0 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <img src="/logo.png" className="h-10 w-10 object-contain group-hover:rotate-12 transition-transform duration-500" alt="SARATHI" />
                            <div className="absolute -inset-1 bg-primary/20 blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="font-black text-2xl text-primary tracking-tighter">SARATHI</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-10 font-bold">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className="text-text-light hover:text-primary transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        {/* Desktop Auth */}
                        <div className="hidden md:flex items-center gap-4 mr-4">
                            <NavLink to="/signin">
                                <Button variant="ghost">Sign In</Button>
                            </NavLink>
                            <NavLink to="/signup">
                                <Button variant="primary" className="shadow-lg hover:shadow-primary/30">Vendor Register</Button>
                            </NavLink>
                        </div>

                        {/* Mobile Menu Toggle - Simplified Square Style */}
                        <button
                            className="md:hidden flex items-center justify-center w-12 h-12 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl border border-primary/10 transition-all active:scale-95 shadow-sm"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Sheet */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] md:hidden"
                            />

                            {/* Sheet - Perfect Square Rectangular Design */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 w-[85%] max-w-sm h-[80vh] bg-white z-[70] md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col border-l border-b border-gray-100 overflow-hidden shadow-2xl"
                            >
                                <div className="p-6 flex items-center justify-between border-b">
                                    <div className="flex items-center gap-3">
                                        <img src="/logo.png" className="h-8 w-8" alt="SARATHI" />
                                        <span className="font-black text-xl text-primary tracking-tighter">SARATHI</span>
                                    </div>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X size={24} className="text-gray-500" />
                                    </button>
                                </div>

                                <nav className="flex-1 overflow-y-auto p-6 flex flex-col pt-4">
                                    <div className="space-y-3 mb-8">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 px-2">Essential Actions</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            <NavLink to="/signin" onClick={() => setIsMenuOpen(false)} className="block">
                                                <Button variant="ghost" className="w-full text-sm py-4 border-2 border-primary/10 bg-primary/5 rounded-2xl font-black text-primary hover:bg-primary/10 transition-all active:scale-95">SIGN IN</Button>
                                            </NavLink>
                                            <NavLink to="/signup" onClick={() => setIsMenuOpen(false)} className="block">
                                                <Button variant="primary" className="w-full text-sm py-4 shadow-lg shadow-primary/20 rounded-2xl font-black active:scale-95">SIGN UP</Button>
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 px-2">Navigation</p>

                                        <NavLink
                                            to="/"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all active:scale-[0.98] hover:border-primary/20 hover:bg-white group"
                                        >
                                            <span className="text-lg font-black text-gray-800 group-hover:text-primary">Home</span>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-primary/20 group-hover:text-primary transition-all">
                                                <ChevronRight size={18} />
                                            </div>
                                        </NavLink>

                                        <NavLink
                                            to="/about"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all active:scale-[0.98] hover:border-primary/20 hover:bg-white group"
                                        >
                                            <span className="text-lg font-black text-gray-800 group-hover:text-primary">About Project</span>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-primary/20 group-hover:text-primary transition-all">
                                                <ChevronRight size={18} />
                                            </div>
                                        </NavLink>

                                        <NavLink
                                            to="/rfps"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all active:scale-[0.98] hover:border-primary/20 hover:bg-white group"
                                        >
                                            <span className="text-lg font-black text-gray-800 group-hover:text-primary">View RFPs</span>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-primary/20 group-hover:text-primary transition-all">
                                                <ChevronRight size={18} />
                                            </div>
                                        </NavLink>
                                    </div>
                                </nav>

                                <div className="p-8 bg-gray-50 text-center">
                                    <p className="text-xs text-gray-400 font-medium italic">© 2026 Project SARATHI</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>

            <main className="flex-1 pb-20 md:pb-0">
                <Outlet />
            </main>

            {/* Bottom Navigation - Mobile Only */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-50">
                <nav className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-3 flex items-center justify-around overflow-hidden ring-1 ring-black/[0.05]">
                    <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                        {({ isActive }) => (
                            <>
                                <Home size={20} className={isActive ? 'fill-primary/10' : ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter">Home</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                        {({ isActive }) => (
                            <>
                                <Info size={20} className={isActive ? 'fill-primary/10' : ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter">About</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/rfps" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                        {({ isActive }) => (
                            <>
                                <div className="relative">
                                    <Search size={20} className={isActive ? 'fill-primary/10' : ''} />
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border border-white"></div>
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-tighter">RFPs</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/signin" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                        {({ isActive }) => (
                            <>
                                <LogIn size={20} className={isActive ? 'fill-primary/10' : ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter">Sign In</span>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/signup" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 transition-all ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                        {({ isActive }) => (
                            <>
                                <UserPlus size={20} className={isActive ? 'fill-primary/10' : ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter">Register</span>
                            </>
                        )}
                    </NavLink>
                </nav>
            </div>

            <footer className="bg-primary-dark text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 border-b border-white/10 pb-16">
                    <div className="col-span-1 md:col-span-2 space-y-10">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" className="h-12 w-12 bg-white rounded-xl p-1 shadow-2xl shadow-white/5" alt="SARATHI" />
                            <span className="font-black text-3xl tracking-tighter text-white">SARATHI</span>
                        </div>
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed font-medium">
                            The intelligent charioteer of government procurement. Leveraging advanced AI to bring absolute transparency and efficiency to the RFP lifecycle.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">𝕏</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">In</div>
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">Fb</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-[10px]">Ecosystem</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-white transition-colors">About Project</NavLink></li>
                            <li><NavLink to="/rfps" className="hover:text-white transition-colors">Live Tenders</NavLink></li>
                            <li><NavLink to="/signin" className="hover:text-white transition-colors">Gov Portal</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-[10px]">Support & Legal</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">Contact Desk</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">Privacy Framework</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-accent">Status: Operational</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium italic">
                    <p>© 2026 SARATHI Project. An Initiative for Digital Procurement Excellence.</p>
                    <div className="flex gap-8">
                        <span>New Delhi, India</span>
                        <span>v2.4.0-stable</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
