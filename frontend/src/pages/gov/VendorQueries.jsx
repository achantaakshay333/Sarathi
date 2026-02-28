import { Card } from "../../components/ui/Card";
import { MessageSquare, Zap, Send, User } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export function VendorQueries() {
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [aiDraft, setAiDraft] = useState("");

    const queries = [
        { id: 1, vendor: "TechGiant Corp", rfp: "AI Healthcare Platform", text: "What is the specific requirement for the data storage compliance?", time: "2h ago" },
        { id: 2, vendor: "SME Solutions", rfp: "Smart City Phase II", text: "Can the submission deadline be extended by 48 hours?", time: "5h ago" },
        { id: 3, vendor: "Global Systems", rfp: "IT Modernization", text: "Are there any preferred cloud service providers?", time: "1d ago" },
    ];

    const generateAiResponse = () => {
        setAiDraft("Based on the RFP Section 4.2 (Compliance), the system must adhere to HIPAA and GDPR standards. Data must be encrypted at rest (AES-256) and in transit (TLS 1.3). No specific cloud provider is mandated as long as these security requirements are met.");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
                <h1 className="text-3xl font-bold">Vendor Queries</h1>
                <div className="space-y-4">
                    {queries.map((query) => (
                        <div
                            key={query.id}
                            onClick={() => setSelectedQuery(query)}
                            className={`card p-4 cursor-pointer transition-all border-l-4 ${selectedQuery?.id === query.id ? 'border-primary ring-2 ring-primary/5 bg-blue-50/30' : 'border-transparent hover:bg-gray-50'}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-accent px-2 py-0.5 bg-accent/10 rounded uppercase">{query.rfp}</span>
                                <span className="text-xs text-text-light">{query.time}</span>
                            </div>
                            <p className="text-sm font-bold text-primary mb-1">{query.vendor}</p>
                            <p className="text-sm text-text-light line-clamp-2">{query.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-2">
                {selectedQuery ? (
                    <Card className="h-full flex flex-col">
                        <div className="border-b pb-6 mb-6 flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{selectedQuery.vendor}</h2>
                                    <p className="text-sm text-text-light italic">Regarding: {selectedQuery.rfp}</p>
                                </div>
                            </div>
                            <span className="text-xs text-text-light">Received {selectedQuery.time}</span>
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="bg-gray-50 p-6 rounded-xl border italic text-text-light">
                                "{selectedQuery.text}"
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary" /> AI Generated Response
                                    </h3>
                                    <Button variant="ghost" size="sm" onClick={generateAiResponse}>Refresh AI Assistant</Button>
                                </div>

                                {aiDraft ? (
                                    <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-primary leading-relaxed animate-in fade-in slide-in-from-top-2">
                                        {aiDraft}
                                    </div>
                                ) : (
                                    <div className="p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-gray-400">
                                        <Zap className="w-8 h-8 mb-2 opacity-20" />
                                        <p className="text-sm">Click "Generate" to let AI draft a response for you.</p>
                                        <Button variant="primary" size="sm" className="mt-4" onClick={generateAiResponse}>Generate Response</Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pt-8 mt-8 border-t flex justify-end gap-3">
                            <Button variant="outline">Save as Internal Note</Button>
                            <Button variant="primary" className="gap-2">
                                <Send className="w-4 h-4" /> Send Reply to Vendor
                            </Button>
                        </div>
                    </Card>
                ) : (
                    <div className="card h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                        <MessageSquare className="w-16 h-16 opacity-10" />
                        <p className="italic">Select a query from the left to view details and respond.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
