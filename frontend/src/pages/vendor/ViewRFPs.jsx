import { Card } from "../../components/ui/Card";
import { Search, Filter, Download, ExternalLink, ShieldCheck, Clock, Layers } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function ViewRFPs() {
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
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black text-primary tracking-tight">Active Opportunities</h1>
                    <p className="text-text-light font-medium">Browse and filter live government tenders powered by SARATHI Intelligence.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Input placeholder="Search tenders..." className="md:w-80" />
                    <Button variant="outline" className="shrink-0"><Filter className="w-5 h-5 mr-2" /> Refine</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {rfps.map((rfp) => (
                    <Card key={rfp.id} className="group hover:ring-2 hover:ring-primary/20 transition-all border-l-[12px] border-l-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 py-1 px-4 bg-gray-100 rounded-bl-xl border-l border-b text-[10px] font-black uppercase tracking-widest text-text-light">
                            {rfp.id}
                        </div>

                        <div className="space-y-8">
                            {/* Main Header */}
                            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 pt-2">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-tighter ring-1 ring-accent/20">
                                            {rfp.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-bold text-red-500">
                                            <Clock className="w-3 h-3" /> Ends in: {rfp.date}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-text group-hover:text-primary transition-colors">{rfp.title}</h3>
                                    <p className="text-sm font-bold text-primary italic">Department: {rfp.dept}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-black uppercase tracking-widest text-text-light mb-1">Estimated Budget</p>
                                    <p className="text-3xl font-black text-accent">{rfp.budget}</p>
                                </div>
                            </div>

                            {/* Technical Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-tighter text-xs">
                                        <Layers className="w-4 h-4" /> Scope of Work
                                    </div>
                                    <p className="text-xs leading-relaxed text-text font-medium">{rfp.scope}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-tighter text-xs">
                                        <ShieldCheck className="w-4 h-4" /> Eligibility Criteria
                                    </div>
                                    <p className="text-xs leading-relaxed text-text font-medium">{rfp.eligibility}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-white rounded-xl border text-center">
                                        <p className="text-[8px] font-black uppercase text-text-light">Technical</p>
                                        <p className="text-lg font-black text-primary">{rfp.techWeight}</p>
                                    </div>
                                    <div className="p-3 bg-white rounded-xl border text-center">
                                        <p className="text-[8px] font-black uppercase text-text-light">Commercial</p>
                                        <p className="text-lg font-black text-secondary">{rfp.commWeight}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t gap-4">
                                <p className="text-[10px] font-bold text-text-light italic underline decoration-primary/30">Managed by SARATHI Auto-Verification Engine v2.0</p>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <Button variant="ghost" className="grow sm:grow-0 gap-2"><Download className="w-4 h-4" /> Full Document</Button>
                                    <Button variant="primary" className="grow sm:grow-0 gap-2 shadow-lg shadow-primary/20">Apply Now <ExternalLink className="w-4 h-4" /></Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
