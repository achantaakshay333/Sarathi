import { Card } from "../../components/ui/Card";
import { Table, Check, X, Eye } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function ViewVendors() {
    const vendors = [
        { id: "V001", name: "Global Tech Solutions", contact: "Alice Smith", gst: "27AAACG1234F1Z1", status: "Verified" },
        { id: "V002", name: "BuildStrong Construction", contact: "Bob Jones", gst: "27AAACB5678F1Z2", status: "Pending" },
        { id: "V003", name: "HealthCare Plus", contact: "Charlie Davis", gst: "27AAACH9012F1Z3", status: "Verified" },
        { id: "V004", name: "Energy Grid Inc.", contact: "Diana Ross", gst: "27AAACE3456F1Z4", status: "Rejected" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Verified": return "bg-green-100 text-green-700";
            case "Pending": return "bg-yellow-100 text-yellow-700";
            case "Rejected": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Manage Vendors</h1>
                <Button variant="outline">Export Vendor List</Button>
            </div>

            <Card className="p-0 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-bold text-text-light text-sm uppercase">Vendor ID</th>
                            <th className="px-6 py-4 font-bold text-text-light text-sm uppercase">Company Name</th>
                            <th className="px-6 py-4 font-bold text-text-light text-sm uppercase">Contact Person</th>
                            <th className="px-6 py-4 font-bold text-text-light text-sm uppercase">GST ID</th>
                            <th className="px-6 py-4 font-bold text-text-light text-sm uppercase">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {vendors.map((vendor) => (
                            <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium">{vendor.id}</td>
                                <td className="px-6 py-4 font-bold text-primary">{vendor.name}</td>
                                <td className="px-6 py-4 text-sm">{vendor.contact}</td>
                                <td className="px-6 py-4 text-sm font-mono">{vendor.gst}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(vendor.status)}`}>
                                        {vendor.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                                    {vendor.status === "Pending" && (
                                        <>
                                            <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10"><Check className="w-4 h-4" /></Button>
                                            <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50"><X className="w-4 h-4" /></Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
