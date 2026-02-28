import { Card } from "../../components/ui/Card";
import { Users, Building2, FileText, Activity } from "lucide-react";

export function AdminOverview() {
    const stats = [
        { label: "Total Employees", value: "124", icon: Users, color: "text-primary" },
        { label: "Active Vendors", value: "842", icon: Building2, color: "text-secondary" },
        { label: "Total RFPs", value: "456", icon: FileText, color: "text-accent" },
        { label: "System Health", value: "99.9%", icon: Activity, color: "text-green-600" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label} className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gray-50 ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-text-light font-medium uppercase tracking-wider">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Recent System Logs</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <p className="text-sm font-medium">New government employee added: emp_{i}@gov.in</p>
                                </div>
                                <span className="text-xs text-text-light">2 hours ago</span>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card>
                    <h2 className="text-xl font-bold mb-4">Vendor Status</h2>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Verified</span>
                            <span className="text-sm font-bold">780</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Pending Approval</span>
                            <span className="text-sm font-bold">62</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-secondary h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
