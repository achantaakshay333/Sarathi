import { Card } from "../../components/ui/Card";
import { LayoutDashboard, Send, FileSearch, MessageCircle, BarChart, History } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function VendorOverview() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Welcome, Global Solutions</h1>
                    <p className="text-text-light">Track your active bids and new government opportunities.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2"><History className="w-4 h-4" /> Submission History</Button>
                    <Button variant="primary" className="gap-2"><FileSearch className="w-4 h-4" /> Browse RFPs</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0">
                    <p className="text-sm text-white/70 font-bold uppercase tracking-widest mb-1">Active Submissions</p>
                    <p className="text-5xl font-bold">04</p>
                    <div className="mt-4 flex gap-2">
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">2 Pending Analysis</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">1 Question Asked</span>
                    </div>
                </Card>
                <Card>
                    <p className="text-sm text-text-light font-bold uppercase tracking-widest mb-1">Successful Awards</p>
                    <p className="text-5xl font-bold text-accent">12</p>
                    <p className="mt-2 text-xs text-text-light">Total value: ₹2.4 Crores</p>
                </Card>
                <Card>
                    <p className="text-sm text-text-light font-bold uppercase tracking-widest mb-1">New Matches</p>
                    <p className="text-5xl font-bold text-secondary">08</p>
                    <p className="mt-2 text-xs text-text-light">Based on your IT & Services categories</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-xl font-bold mb-6">Current Application Status</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Smart City Traffic Management", status: "Under Review", date: "Subbed on Feb 15" },
                            { title: "Digital Literacy Campaign", status: "Technical Shortlist", date: "Subbed on Feb 10" },
                            { title: "Network Security Audit", status: "Awarded", date: "Feb 05" },
                        ].map((app, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b last:border-0 last:pb-0">
                                <div>
                                    <p className="font-bold text-text">{app.title}</p>
                                    <p className="text-xs text-text-light">{app.date}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.status === "Awarded" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                                    }`}>
                                    {app.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="border-accent/20 bg-accent/[0.02]">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Send className="w-5 h-5 text-accent" /> Need Assistance?</h2>
                    <p className="text-text-light mb-6">Our AI assistant can help you clarify RFP requirements or draft your technical submission outline.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="bg-white">Technical Guide</Button>
                        <Button variant="outline" className="bg-white">Ask AI Helper</Button>
                    </div>
                    <div className="mt-6 pt-6 border-t border-accent/10">
                        <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Notice Board</h4>
                        <p className="text-sm text-text italic">"Mandatory pre-bid meeting for Energy Grid RFP is scheduled for Monday, 10 AM via Video Conference."</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
