import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { MoreHorizontal, FileText, CheckCircle, Clock, AlertCircle, Edit, Trash2 } from "lucide-react";

export function ManageRFPs() {
    const rfps = [
        { id: "SAR-RFP-A01", title: "Smart Agriculture Platform", status: "Published", responses: 12, deadline: "2026-03-30", visibility: "Public" },
        { id: "SAR-RFP-B12", title: "Cloud Infrastructure Hub", status: "Draft", responses: 0, deadline: "N/A", visibility: "Internal" },
        { id: "SAR-RFP-C44", title: "Cyber Security Audit", status: "Pending Approval", responses: 0, deadline: "2026-04-15", visibility: "Public" },
        { id: "SAR-RFP-D09", title: "National ID Card Redesign", status: "Closed", responses: 45, deadline: "2026-02-10", visibility: "Public" },
    ];

    const getStatusVariant = (status) => {
        switch (status) {
            case 'Published': return 'success';
            case 'Draft': return 'outline';
            case 'Pending Approval': return 'warning';
            case 'Closed': return 'danger';
            default: return 'primary';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-primary">Manage RFPs</h1>
                    <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Tender Lifecycle Control Panel</p>
                </div>
                <Button variant="primary" className="shadow-lg shadow-primary/20">+ Create New Tender</Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {rfps.map((rfp) => (
                    <Card key={rfp.id} className="p-6 hover:shadow-xl transition-all border-l-4 border-l-primary group">
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Badge variant={getStatusVariant(rfp.status)}>
                                        {rfp.status}
                                    </Badge>
                                    <span className="text-[10px] font-black text-text-light uppercase tracking-widest border px-2 py-1 rounded">
                                        {rfp.id}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black group-hover:text-primary transition-colors">{rfp.title}</h3>
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex items-center gap-2 text-sm font-bold text-text-light italic">
                                        <FileText className="w-4 h-4" /> {rfp.responses} Submissions
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-text-light italic">
                                        <Clock className="w-4 h-4" /> Deadline: {rfp.deadline}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-text-light italic">
                                        <AlertCircle className="w-4 h-4" /> Visibility: {rfp.visibility}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2"><Edit className="w-4 h-4" /> Edit</Button>
                                <Button variant="outline" size="sm" className="gap-2 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"><CheckCircle className="w-4 h-4" /> Publish</Button>
                                <Button variant="outline" size="sm" className="text-red-500 hover:bg-red-50 border-red-100"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
