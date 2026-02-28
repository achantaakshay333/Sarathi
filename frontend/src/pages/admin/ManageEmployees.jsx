import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Search, Filter, MoreVertical, Edit, Trash2, Key } from "lucide-react";
import { Input } from "../../components/ui/Input";

export function ManageEmployees() {
    const employees = [
        { id: "SAR-EMP-01", name: "Anil Kulkarni", dept: "Ministry of Finance", role: "Procurement Lead", status: "Active" },
        { id: "SAR-EMP-02", name: "Sunita Reddy", dept: "NHAI", role: "Audit Specialist", status: "Active" },
        { id: "SAR-EMP-03", name: "Vikram Singh", dept: "State Health Board", role: "System Admin", status: "Pending" },
        { id: "SAR-EMP-04", name: "Priya Sharma", dept: "Ministry of IT", role: "Bid Evaluator", status: "Inactive" },
    ];

    const getStatusVariant = (status) => {
        switch (status) {
            case 'Active': return 'success';
            case 'Pending': return 'warning';
            case 'Inactive': return 'danger';
            default: return 'outline';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-black text-primary">System Officials</h1>
                    <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Registry of Government Personnel</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input className="pl-10 font-bold" placeholder="Search by name or ID..." />
                    </div>
                    <Button variant="outline" className="font-black italic"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                </div>
            </div>

            <Card className="p-0 overflow-hidden shadow-2xl border-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-[10px] font-black uppercase tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-4">Employee</th>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Role & Dept</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {employees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center font-black text-primary border border-primary/10">
                                                {emp.name.charAt(0)}
                                            </div>
                                            <span className="font-black text-text italic underline decoration-primary/20 underline-offset-4">{emp.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-xs text-text-light">{emp.id}</td>
                                    <td className="px-6 py-5">
                                        <div className="space-y-0.5">
                                            <p className="font-black text-xs text-primary uppercase tracking-tighter">{emp.role}</p>
                                            <p className="text-[10px] font-bold text-text-light italic">{emp.dept}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <Badge variant={getStatusVariant(emp.status)} className="text-[10px] px-3 py-1 italic uppercase">
                                            {emp.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="outline" size="sm" className="p-2"><Edit className="w-4 h-4" /></Button>
                                            <Button variant="outline" size="sm" className="p-2 border-amber-100 text-amber-600 hover:bg-amber-50"><Key className="w-4 h-4" /></Button>
                                            <Button variant="outline" size="sm" className="p-2 border-red-100 text-red-500 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
                                        </div>
                                        <button className="md:hidden">
                                            <MoreVertical className="w-5 h-5 text-gray-400" />
                                        </button>
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
