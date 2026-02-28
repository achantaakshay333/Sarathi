import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Input } from "../../components/ui/Input";
import { HelpCircle, Send, MessageSquare, History, Search } from "lucide-react";

export function AskQuery() {
    const previousQueries = [
        { id: "QRY-99", subject: "Clarification on Clause 4.2", tender: "Smart City-X", status: "Resolved", date: "Feb 20, 2026" },
        { id: "QRY-102", subject: "Extension of Deadline", tender: "Agriculture-A1", status: "Pending", date: "Feb 27, 2026" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-primary">Ask a Query</h1>
                    <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Direct line to procurement officers</p>
                </div>
                <div className="hidden md:flex items-center gap-3 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 font-bold text-xs uppercase italic animate-pulse">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    AI Response Bot Active
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="p-8 shadow-2xl border-t-8 border-t-secondary relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <HelpCircle className="w-48 h-48" />
                        </div>
                        <h3 className="text-2xl font-black text-primary mb-8 italic">New Inquiry</h3>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Select Tender</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none">
                                        <option>Digital Agriculture Census (SAR-RFP-A01)</option>
                                        <option>National Highway Solar Lighting (SAR-RFP-E04)</option>
                                        <option>Other General Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Query Subject</label>
                                    <Input placeholder="e.g. Technical Eligibility Hardware" className="font-bold py-6 bg-gray-50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Detailed Inquiry</label>
                                <textarea
                                    rows={6}
                                    placeholder="Please describe your query in detail. Our AI will attempt to answer basic questions instantly based on the RFP document."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[10px] font-bold text-text-light italic">Expect a formal response within 24-48 working hours.</p>
                                <Button variant="primary" className="px-10 py-6 text-lg font-black shadow-xl shadow-primary/20 gap-2">
                                    SUBMIT QUERY <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-primary text-white space-y-2">
                            <MessageSquare className="w-8 h-8 mb-2 text-secondary-light" />
                            <h4 className="font-bold text-lg">Instant AI Help</h4>
                            <p className="text-white/70 text-sm italic">Type your query and wait. Our AI scans the RFP body to provide immediate context-based answers.</p>
                        </Card>
                        <Card className="p-6 bg-accent/10 border-accent/20 space-y-2">
                            <History className="w-8 h-8 mb-2 text-accent" />
                            <h4 className="font-bold text-lg text-primary">Inquiry History</h4>
                            <p className="text-text-light text-sm italic">You have submitted 12 queries this quarter. 100% resolution rate achieved.</p>
                        </Card>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-lg font-black text-primary uppercase tracking-tighter flex items-center gap-2">
                        <History className="w-5 h-5" /> Recent Queries
                    </h3>
                    {previousQueries.map((q) => (
                        <Card key={q.id} className="p-5 hover:scale-[1.02] transition-transform cursor-pointer border-l-4 border-l-secondary">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-black px-2 py-0.5 bg-gray-100 rounded text-text-light uppercase tracking-widest">#{q.id}</span>
                                    <Badge variant={q.status === 'Resolved' ? 'success' : 'warning'} className="text-[9px] px-2 py-0.5">
                                        {q.status}
                                    </Badge>
                                </div>
                                <h4 className="font-black text-sm group-hover:text-primary leading-tight">{q.subject}</h4>
                                <div className="flex justify-between items-center pt-2 border-t">
                                    <p className="text-[10px] font-bold text-primary italic uppercase tracking-tighter">{q.tender}</p>
                                    <p className="text-[9px] font-bold text-text-light italic">{q.date}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" className="w-full font-bold group">
                        Search Archive <Search className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
