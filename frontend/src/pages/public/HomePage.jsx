import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Search, ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export function HomePage() {
    const recentRFPs = [
        { id: 1, title: "Smart City Infrastructure Phase II", department: "Ministry of Urban Development", dueDate: "Mar 15, 2026", status: "Published" },
        { id: 2, title: "AI-Powered Healthcare Analytics", department: "Health Department", dueDate: "Mar 20, 2026", status: "Published" },
        { id: 3, title: "Regional Waste Management System", department: "State Environment Board", dueDate: "Apr 2, 2026", status: "Drafting" },
    ];

    return (
        <div className="space-y-20 pb-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 md:py-32 px-6 overflow-hidden relative min-h-[70vh] md:min-h-[85vh] flex items-center">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 transform translate-x-32 hidden md:block"
                ></motion.div>

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 space-y-10 text-center md:text-left"
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black text-white leading-[1.1] md:leading-[1] tracking-tighter">
                                Meet <span className="text-secondary-light drop-shadow-lg">SARATHI</span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-3xl font-black bg-white/10 inline-block px-4 md:px-6 py-2 rounded-lg backdrop-blur-md tracking-widest uppercase italic border border-white/20 shadow-xl">
                                The Charioteer of Digital Tenders
                            </p>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
                            Smart AI Assistant For Tender Handling & Intelligence. Revolutionizing government procurement with automated drafting and intelligent bid analysis.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-6">
                            <Link to="/rfps" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100 px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-black shadow-glow transition-all hover:scale-105 active:scale-95">Browse Tenders</Button>
                            </Link>
                            <Link to="/about" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full border-white/40 text-white hover:bg-white/10 px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-black backdrop-blur-sm transition-all hover:border-white">About Project</Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="flex-1 hidden lg:block"
                    >
                        <motion.img
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            src="/logo.png"
                            className="w-full h-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] px-10"
                            alt="SARATHI Logo"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Recent Updates */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Latest SARATHI Tenders</h2>
                        <div className="h-2 w-24 bg-accent mx-auto md:mx-0 rounded-full"></div>
                    </div>
                    <Button variant="ghost" className="group font-black text-lg hover:bg-primary/5">
                        View All <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentRFPs.map((rfp, idx) => (
                        <motion.div
                            key={rfp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="hover:shadow-2xl transition-all border-l-[6px] border-l-primary flex flex-col justify-between group h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-black px-4 py-1 bg-primary text-white rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                                            {rfp.status}
                                        </span>
                                        <span className="text-xs text-text-light font-black italic">{rfp.dueDate}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">{rfp.title}</h3>
                                    <p className="text-sm font-bold text-text-light mb-8 italic flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                        {rfp.department}
                                    </p>
                                </div>
                                <Button variant="outline" className="w-full font-black py-4 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">View Bid Package</Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* About Section */}
            <section className="bg-gray-50 py-32 px-6 border-y-2 border-gray-100 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <motion.img
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 1 }}
                                    src="/logo.png"
                                    className="w-20 h-20 object-contain drop-shadow-xl"
                                    alt="SARATHI"
                                />
                                <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tighter leading-none">About Project<br />SARATHI</h2>
                            </div>
                            <div className="h-1.5 w-32 bg-accent rounded-full"></div>
                        </div>

                        <p className="text-text-light text-2xl leading-relaxed font-semibold italic text-justify">
                            "SARATHI is not just a portal, it's an intelligent procurement assistant that ensures high standards of transparency and quality in government contracts."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "AI Technical RFP Drafting",
                                "Bid Logic Analysis",
                                "Vendor Credibility Scoring",
                                "Real-time AI Helpdesk"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white italic font-black text-sm shadow-lg shadow-accent/40 shrink-0">✓</div>
                                    <span className="text-text font-black text-lg tracking-tight">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] opacity-60"></div>
                        <div className="bg-white p-16 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full"></div>
                            <h3 className="text-3xl font-black text-primary mb-8 italic underline decoration-accent decoration-[6px] underline-offset-8">Our Mission</h3>
                            <p className="text-text-light text-xl mb-10 leading-relaxed font-medium">
                                To revolutionize procurement by reducing manual cycle times by up to 60% and ensuring award decisions are made based on objective, AI-verified technical and financial data.
                            </p>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="p-8 bg-primary rounded-3xl text-white font-black italic text-xl shadow-2xl shadow-primary/40 leading-relaxed text-center"
                            >
                                "Bringing absolute integrity and intelligence to India's procurement landscape."
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA section with motion */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="bg-accent rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/20">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Ready to join the revolution?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                            <Link to="/signup" className="w-full sm:w-auto">
                                <Button className="w-full bg-white text-accent hover:bg-gray-100 px-8 md:px-12 py-6 md:py-8 text-xl md:text-2xl font-black shadow-2xl transition-transform hover:scale-110">Vendor Join</Button>
                            </Link>
                            <Link to="/signin" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 px-8 md:px-12 py-6 md:py-8 text-xl md:text-2xl font-black transition-transform hover:scale-110">Gov Sign In</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
