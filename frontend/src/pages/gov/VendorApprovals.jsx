import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { CheckCircle, XCircle, FileText, User, ExternalLink, ShieldAlert } from "lucide-react";

export function VendorApprovals() {
    const pendingVendors = [
        { id: "VEN-882", name: "Innova Technologies", type: "MSME-IT", state: "Karnataka", date: "Feb 27, 2026", risk: "Low" },
        { id: "VEN-891", name: "Zenith Construction", type: "Class-A Contractor", state: "Maharashtra", date: "Feb 28, 2026", risk: "Medium" },
        { id: "VEN-902", name: "Green Logistics Pvt Ltd", type: "Supply Chain", state: "Delhi", date: "Feb 28, 2026", risk: "High" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-primary">Vendor Approvals</h1>
                <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Verify and Onboard New Partners</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {pendingVendors.map((vendor) => (
                    <Card key={vendor.id} className="p-8 hover:shadow-2xl transition-all border-l-8 border-l-secondary relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                            <ShieldAlert className="w-48 h-48 text-secondary" />
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
                            <div className="flex gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                                    <User className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline" className="text-[10px] px-2 py-0.5 font-black uppercase tracking-widest italic">{vendor.id}</Badge>
                                        <Badge variant={vendor.risk === 'High' ? 'danger' : vendor.risk === 'Medium' ? 'warning' : 'success'} className="text-[10px] px-2 py-0.5 italic uppercase">Risk: {vendor.risk}</Badge>
                                    </div>
                                    <h3 className="text-2xl font-black text-text group-hover:text-primary transition-colors italic">{vendor.name}</h3>
                                    <div className="flex flex-wrap gap-6 text-xs font-bold text-text-light italic uppercase tracking-tighter">
                                        <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-primary" /> {vendor.type}</span>
                                        <span className="flex items-center gap-1 decoration-accent underline underline-offset-2">{vendor.state}</span>
                                        <span className="opacity-60">Submitted: {vendor.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:border-l lg:pl-8 border-gray-100">
                                <Button variant="outline" className="font-black italic text-gray-500 hover:text-primary transition-colors">VIEW DOSSIER <ExternalLink className="w-4 h-4 ml-2" /></Button>
                                <Button variant="outline" className="border-red-100 text-red-500 hover:bg-red-50 font-black italic gap-2"><XCircle className="w-4 h-4" /> REJECT</Button>
                                <Button variant="primary" className="shadow-lg shadow-primary/20 font-black italic gap-2 py-6 px-10"><CheckCircle className="w-4 h-4" /> APPROVE VENDOR</Button>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-dashed flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />)}
                            </div>
                            <p className="text-[10px] font-bold text-text-light italic">Automated SARATHI Compliance Check: <span className="text-emerald-600 font-black uppercase">98.4% Matched</span></p>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="bg-gray-50 p-6 flex items-center justify-between border-2 border-dashed border-gray-200 opacity-60">
                <p className="text-sm font-bold italic text-text-light">No more pending approvals for today. All 124 vendors have been successfully processed.</p>
                <Button variant="ghost" className="font-black italic uppercase tracking-widest text-[10px]">View Approval History</Button>
            </Card>
        </div>
    );
}
