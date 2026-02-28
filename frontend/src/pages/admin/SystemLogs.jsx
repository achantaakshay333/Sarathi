import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Search, Filter, Shield, Activity, Lock } from "lucide-react";

export function SystemLogs() {
    const logs = [
        { id: "LOG-001", user: "Admin", action: "Employee Verified", target: "Gov-045", time: "2 mins ago", severity: "Low" },
        { id: "LOG-002", user: "System", action: "RFP Auto-Archived", target: "SAR-RFP-X3", time: "15 mins ago", severity: "Medium" },
        { id: "LOG-003", user: "Vendor-99", action: "Bid Submitted", target: "SAR-RFP-A01", time: "45 mins ago", severity: "Low" },
        { id: "LOG-004", user: "Gov-02", action: "Access Denied", target: "Admin Panel", time: "2 hours ago", severity: "High" },
        { id: "LOG-005", user: "System", action: "Database Backup", target: "Main Cloud", time: "5 hours ago", severity: "Low" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-primary">System Logs</h1>
                    <p className="text-text-light font-medium uppercase tracking-widest text-[10px]">Audit Trail & Security Monitoring</p>
                </div>
                <div className="flex gap-4">
                    <Card className="p-4 flex items-center gap-3 bg-red-50 border-red-100">
                        <Shield className="text-red-500" />
                        <div>
                            <p className="text-[10px] font-bold text-red-500 uppercase">Alerts</p>
                            <p className="text-xl font-black text-red-700">12</p>
                        </div>
                    </Card>
                    <Card className="p-4 flex items-center gap-3 bg-emerald-50 border-emerald-100">
                        <Activity className="text-emerald-500" />
                        <div>
                            <p className="text-[10px] font-bold text-emerald-500 uppercase">Uptime</p>
                            <p className="text-xl font-black text-emerald-700">99.9%</p>
                        </div>
                    </Card>
                </div>
            </div>

            <Card className="p-0 overflow-hidden">
                <div className="p-4 border-b bg-gray-50 flex gap-4">
                    <Input placeholder="Search by user or action..." className="max-w-md" />
                    <Input type="date" className="max-w-xs" />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-[10px] font-black uppercase tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Action</th>
                                <th className="px-6 py-4">Target</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Severity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs font-bold text-primary">{log.id}</td>
                                    <td className="px-6 py-4 font-bold">{log.user}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{log.action}</td>
                                    <td className="px-6 py-4 text-sm text-text-light font-medium italic">{log.target}</td>
                                    <td className="px-6 py-4 text-xs font-bold text-gray-400">{log.time}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${log.severity === 'High' ? 'bg-red-100 text-red-700' :
                                            log.severity === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {log.severity}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
