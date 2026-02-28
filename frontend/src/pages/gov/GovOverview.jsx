import { Card } from "../../components/ui/Card";
import { LayoutDashboard, FileCheck, FilePlus, MessageSquare, BarChart3, Clock } from "lucide-react";

export function GovOverview() {
    const summaries = [
        { label: "Pending Approvals", count: "14", icon: FileCheck, color: "text-amber-600", bg: "bg-amber-50" },
        { label: "Active RFPs", count: "28", icon: FilePlus, color: "text-primary", bg: "bg-blue-50" },
        { label: "Unanswered Queries", count: "42", icon: MessageSquare, color: "text-accent", bg: "bg-emerald-50" },
        { label: "Bids to Analyze", count: "09", icon: BarChart3, color: "text-secondary", bg: "bg-blue-50" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Government Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaries.map((item) => (
                    <Card key={item.label} className="flex flex-col gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-4xl font-bold">{item.count}</p>
                            <p className="text-sm text-text-light font-medium">{item.label}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Recent RFP Activity</h2>
                        <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-6">
                        {[
                            { title: "Smart City Infrastructure v2", action: "Published", time: "1 hour ago" },
                            { title: "Departmental IT Upgrade", action: "AI Draft Generated", time: "4 hours ago" },
                            { title: "Medical Supply Chain RFP", action: "Deadline Extended", time: "Yesterday" },
                        ].map((activity, idx) => (
                            <div key={idx} className="flex gap-4 items-start pb-6 border-b last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <p className="font-bold text-text">{activity.title}</p>
                                    <p className="text-sm text-text-light"><span className="text-primary font-medium">{activity.action}</span> • {activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-primary text-white">
                    <h2 className="text-xl font-bold mb-4">AI Insight Panel</h2>
                    <p className="text-white/80 mb-6">Based on current procurement data, we recommend focusing on the "Bid Analysis" for the AI Analytics RFP, as two high-quality submissions have been received.</p>
                    <div className="space-y-4">
                        <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                            <p className="text-sm font-bold uppercase tracking-widest text-secondary-light">Opportunity Detected</p>
                            <p className="text-sm mt-1 font-medium">Potential for 15% budget optimization in Regional Waste Management bids.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
