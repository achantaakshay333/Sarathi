import { Zap } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export const CreateRFP = () => (
    <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-black text-primary">Create New RFP</h1>
                <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">AI-Assisted Tender Drafting</p>
            </div>
            <Button variant="accent" className="gap-2 shadow-lg shadow-accent/20 font-black italic">
                <Zap className="w-4 h-4 fill-current" /> GENERATE WITH SARATHI AI
            </Button>
        </div>

        <Card className="p-8 space-y-8 shadow-2xl border-t-8 border-t-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">RFP Title</label>
                    <Input className="py-6 font-bold text-lg" placeholder="e.g. Smart Infrastructure Development Phase III" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Target Department</label>
                    <Input className="font-bold" placeholder="Select Department" defaultValue="Ministry of Information Technology" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Budget Allocation (₹)</label>
                    <Input className="font-bold font-mono" placeholder="Enter Amount" />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Technical Scope & Requirements</label>
                    <textarea
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none min-h-[160px] resize-none"
                        placeholder="Describe the technical requirements in detail. Our AI will help structure this into a formal RFP document if you click the 'Generate' button above."
                    ></textarea>
                </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t font-bold text-xs italic text-gray-400">
                <p>Draft auto-saved at 10:45 AM</p>
                <div className="flex gap-4">
                    <Button variant="outline" className="px-8 font-black">SAVE DRAFT</Button>
                    <Button variant="primary" className="px-10 font-black shadow-xl shadow-primary/20">PUBLISH RFP</Button>
                </div>
            </div>
        </Card>
    </div>
);
