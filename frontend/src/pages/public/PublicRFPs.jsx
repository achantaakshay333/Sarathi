import { Card } from "../../components/ui/Card";
import { Search, Filter, Download, ExternalLink, ShieldCheck, Clock, Layers } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";

export function PublicRFPs() {
    const rfps = [
        {
            title: "Digital Agriculture Census 2026",
            id: "SAR-RFP-A01",
            dept: "Ministry of Agriculture",
            budget: "₹1.2 Cr",
            date: "Mar 30, 2026",
            category: "IT Services",
            scope: "Development of a nationwide real-time data collection and analysis platform for agricultural census.",
            techWeight: "70%",
            commWeight: "30%",
            eligibility: "Certified Software Vendors with experience in big data projects > ₹50L."
        },
        {
            title: "National Highway Solar Lighting (Phase IV)",
            id: "SAR-RFP-E04",
            dept: "NHAI",
            budget: "₹4.5 Cr",
            date: "Apr 15, 2026",
            category: "Energy",
            scope: "Installation of smart LED lighting with remote monitoring on the NH-44 stretch.",
            techWeight: "60%",
            commWeight: "40%",
            eligibility: "A-class contractors with previous highway projects."
        },
        {
            title: "District Hospital Equipment Supply",
            id: "SAR-RFP-H91",
            dept: "State Health Board",
            budget: "₹85 L",
            date: "Mar 15, 2026",
            category: "Medical",
            scope: "Supply of critical care units and diagnostic equipment for 5 district hospitals.",
            techWeight: "50%",
            commWeight: "50%",
            eligibility: "Medical supply registered vendors only."
        },
        {
            title: "E-Learning Platform for Rural Schools",
            id: "SAR-RFP-S76",
            dept: "Ministry of Education",
            budget: "₹3.2 Cr",
            date: "May 10, 2026",
            category: "EdTech",
            scope: "Creation of offline-first learning modules for 1000 rural schools with AI tutor integration.",
            techWeight: "80%",
            commWeight: "20%",
            eligibility: "Experience in EdTech or Government educational projects."
        },
    ];

    return (
        <div className="space-y-12 py-10 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-primary tracking-tighter uppercase italic">
                            Public <span className="text-secondary text-shadow-sm">Tender Board</span>
                        </h1>
                        <p className="text-text-light font-bold text-lg opacity-80 decoration-accent decoration-2 underline underline-offset-4">
                            Transparent access to nationwide government opportunities powered by SARATHI AI.
                        </p>
                    </div>
                    <Link to="/signin">
                        <Button variant="primary" size="lg" className="shadow-2xl shadow-primary/30 py-8 px-10 text-xl font-black italic group">
                            Login to Participate <ExternalLink className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-primary py-8 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input placeholder="Search by Project Name, ID, or Department..." className="pl-12 py-7 font-bold text-lg border-2 focus:border-white/50 bg-white/10 text-white placeholder:text-white/40 rounded-2xl" />
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 font-black"><Filter className="mr-2" /> Sector</Button>
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 font-black">Budget Range</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-10">
                {rfps.map((rfp) => (
                    <Card key={rfp.id} className="group hover:ring-4 hover:ring-primary/10 transition-all border-l-[16px] border-l-primary p-0 overflow-hidden shadow-xl hover:shadow-2xl">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1 p-8 space-y-6">
                                <div className="flex flex-wrap items-center gap-4">
                                    <Badge variant="accent" className="px-4 py-1 text-[10px] tracking-widest uppercase italic">{rfp.category}</Badge>
                                    <Badge variant="warning" className="px-4 py-1 text-[10px] tracking-widest uppercase italic flex items-center gap-2">
                                        <Clock className="w-3 h-3" /> Due: {rfp.date}
                                    </Badge>
                                    <span className="text-[10px] font-black text-text-light/50 uppercase tracking-widest ml-auto">{rfp.id}</span>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-3xl font-black text-text group-hover:text-primary transition-colors leading-tight tracking-tight">{rfp.title}</h3>
                                    <p className="text-primary font-black uppercase text-xs tracking-tighter opacity-70 italic">{rfp.dept}</p>
                                </div>

                                <p className="text-text-light font-medium text-sm leading-relaxed border-l-2 border-gray-100 pl-4 py-1 italic">
                                    {rfp.scope}
                                </p>

                                <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary"><ShieldCheck className="w-6 h-6" /></div>
                                        <div>
                                            <p className="text-[8px] font-black text-text-light uppercase tracking-widest">Eligibility</p>
                                            <p className="text-xs font-bold truncate max-w-[200px]">{rfp.eligibility}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent"><Layers className="w-6 h-6" /></div>
                                        <div>
                                            <p className="text-[8px] font-black text-text-light uppercase tracking-widest">Weights</p>
                                            <p className="text-xs font-bold">{rfp.techWeight} Tech | {rfp.commWeight} Comm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-72 bg-gray-50 p-8 flex flex-col justify-between items-center text-center border-l border-gray-100 lg:bg-gradient-to-b lg:from-gray-50 lg:to-white">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-text-light uppercase tracking-widest italic">Procurement Budget</p>
                                    <p className="text-4xl font-black text-accent drop-shadow-sm">{rfp.budget}</p>
                                </div>
                                <div className="w-full space-y-3 pt-6">
                                    <Link to="/signin" className="block w-full">
                                        <Button className="w-full font-black py-4 shadow-lg shadow-primary/10">View Documents</Button>
                                    </Link>
                                    <p className="text-[8px] font-bold text-text-light underline italic uppercase">Login required for bid submission</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Help Section */}
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <Card className="bg-secondary p-12 text-white relative overflow-hidden rounded-[3rem] shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Layers className="w-64 h-64" />
                    </div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black tracking-tighter italic uppercase">Need Help Finding Tenders?</h2>
                            <p className="text-white/80 font-medium text-lg italic leading-relaxed">
                                Our AI-powered search tool can help you identify opportunities that match your company's core competencies. Ask the SARATHI helpdesk for an eligibility assessment.
                            </p>
                            <Button className="bg-white text-secondary hover:bg-gray-100 font-bold px-10 py-6 italic shadow-xl">Contact SARATHI Support</Button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-4">
                            <div className="flex items-center gap-3">
                                <Search className="w-6 h-6 text-accent" />
                                <span className="font-bold text-lg italic">Instant Insight Tool</span>
                            </div>
                            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-accent animate-pulse"></div>
                            </div>
                            <p className="text-xs font-medium italic opacity-60 uppercase tracking-widest text-center mt-2">Connecting 4,500+ Active Public Tenders...</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
