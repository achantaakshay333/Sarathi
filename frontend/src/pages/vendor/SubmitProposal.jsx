import { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Upload, FileText, IndianRupee, Send, CheckCircle2 } from "lucide-react";

export function SubmitProposal() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        rfpId: "RFP-GOV-221",
        price: "",
        technicalDetails: "",
        file: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex items-center justify-center p-6">
                <Card className="max-w-md w-full p-12 text-center space-y-6 shadow-2xl">
                    <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Proposal Submitted!</h2>
                    <p className="text-text-light leading-relaxed">
                        Your bid for <span className="font-bold text-text">{formData.rfpId}</span> has been successfully recorded.
                        You can track the evaluation status in the "My Submissions" tab.
                    </p>
                    <Button variant="primary" className="w-full" onClick={() => setSubmitted(false)}>Submit Another Proposal</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-8 max-w-4xl">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Submit Bid Proposal</h1>
                    <p className="text-text-light">Provide your technical and commercial details for the selected RFP.</p>
                </div>
            </div>

            <Card className="p-8">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-light">Select RFP</label>
                            <select
                                className="input appearance-none"
                                value={formData.rfpId}
                                onChange={(e) => setFormData({ ...formData, rfpId: e.target.value })}
                            >
                                <option value="RFP-GOV-221">RFP-GOV-221: Digital Agriculture Census</option>
                                <option value="RFP-NHAI-442">RFP-NHAI-442: Solar Highway Lighting</option>
                                <option value="RFP-HEALTH-091">RFP-HEALTH-091: Hospital Equipment</option>
                            </select>
                        </div>

                        <Input
                            label="Commercial Bid (₹)"
                            placeholder="e.g. 4500000"
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-text-light">Technical Proposal Summary</label>
                        <textarea
                            className="input h-32 resize-none"
                            placeholder="Provide a high-level summary of your technical solution..."
                            value={formData.technicalDetails}
                            onChange={(e) => setFormData({ ...formData, technicalDetails: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-text-light">Supporting Documents (PDF Only)</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                                <Upload className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text">Click to upload or drag and drop</p>
                                <p className="text-xs text-text-light">Technical & Financial breakdown documents (Max 10MB)</p>
                            </div>
                            <input type="file" className="hidden" accept=".pdf" />
                        </div>
                    </div>

                    <div className="pt-4 border-t flex justify-end gap-3">
                        <Button variant="outline" type="button">Save as Draft</Button>
                        <Button variant="primary" size="lg" className="px-12 gap-2">
                            <Send className="w-4 h-4" /> Submit Proposal
                        </Button>
                    </div>
                </form>
            </Card>

            <div className="bg-blue-50 p-4 rounded-xl flex gap-3 border border-blue-100 italic text-sm text-primary">
                <FileText className="w-5 h-5 shrink-0" />
                <p>Pro-tip: Our AI analyzer checks for compliance with ISO standards. Ensure your documents explicitly mention certification numbers for faster processing.</p>
            </div>
        </div>
    );
}
