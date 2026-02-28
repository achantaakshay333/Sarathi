import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Briefcase, Eye, MessageCircle, FileCheck, ExternalLink, Clock } from "lucide-react";

export function MySubmissions() {
    const submissions = [
        {
            id: "SUB-8812",
            rfpTitle: "Digital Agriculture Census 2026",
            tenderId: "SAR-RFP-A01",
            submittedDate: "2026-02-15",
            status: "Awarded",
            score: "94/100",
            aiSummary: "Exceptional technical stack alignment and competitive pricing model."
        },
        {
            id: "SUB-8901",
            rfpTitle: "Regional Waste Management System",
            tenderId: "SAR-RFP-W92",
            submittedDate: "2026-02-27",
            status: "Under Review",
            score: "Analyzing...",
            aiSummary: "The SARATHI engine is currently evaluating your compliance documents."
        },
        {
            id: "SUB-8756",
            rfpTitle: "National Highway Solar Lighting",
            tenderId: "SAR-RFP-E04",
            submittedDate: "2026-01-20",
            status: "Rejected",
            score: "62/100",
            aiSummary: "Missing 3 ISO certifications required for Phase IV eligibility."
        },
    ];

    const getStatusVariant = (status) => {
        switch (status) {
            case 'Awarded': return 'success';
            case 'Under Review': return 'warning';
            case 'Rejected': return 'danger';
            default: return 'primary';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div>
                <h1 className="text-3xl font-black text-primary">My Submissions</h1>
                <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Track your proposal lifecycle</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {submissions.map((sub) => (
                    <Card key={sub.id} className="p-8 hover:shadow-2xl transition-all relative group overflow-hidden border-2 border-transparent hover:border-primary/10">
                        {sub.status === 'Awarded' && (
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white font-black px-6 py-2 rounded-bl-3xl shadow-lg z-10 flex items-center gap-2">
                                <FileCheck className="w-5 h-5" /> SELECTED
                            </div>
                        )}

                        <div className="space-y-8 relative z-0">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Badge variant={getStatusVariant(sub.status)}>
                                            {sub.status}
                                        </Badge>
                                        <span className="text-[10px] font-black text-text-light uppercase tracking-widest italic">ID: {sub.id}</span>
                                    </div>
                                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{sub.rfpTitle}</h3>
                                    <p className="text-sm font-bold text-primary flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> Tender ID: {sub.tenderId}
                                    </p>
                                </div>
                                <div className="text-right p-4 bg-gray-50 rounded-2xl border border-gray-100 min-w-[140px]">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-text-light mb-1 border-b pb-1">SARATHI AI Score</p>
                                    <p className={`text-2xl font-black ${sub.status === 'Rejected' ? 'text-red-500' : 'text-primary'}`}>{sub.score}</p>
                                </div>
                            </div>

                            <div className="bg-primary/[0.03] p-6 rounded-2xl border-l-[6px] border-l-secondary relative">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0 border border-secondary/20">
                                        <span className="text-secondary italic font-black">AI</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Intelligent Insight</p>
                                        <p className="text-sm font-bold text-text-light leading-relaxed">"{sub.aiSummary}"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t">
                                <div className="flex items-center gap-4 text-xs font-bold text-text-light italic">
                                    <Clock className="w-4 h-4" /> Submitted: {sub.submittedDate}
                                </div>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <Button variant="ghost" className="grow sm:grow-0 gap-2 font-bold"><MessageCircle className="w-4 h-4" /> Send Message</Button>
                                    <Button variant="outline" className="grow sm:grow-0 gap-2 font-bold shadow-sm"><Eye className="w-4 h-4" /> View Entry</Button>
                                    <Button variant="primary" className="grow sm:grow-0 gap-2 font-bold shadow-lg shadow-primary/20">Tender Details <ExternalLink className="w-4 h-4" /></Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
