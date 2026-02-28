import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const BidAnalysis = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div>
            <h1 className="text-3xl font-black text-primary">Bid Analysis & Evaluation</h1>
            <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Real-time Intelligent Comparison</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Card className="lg:col-span-3 p-0 overflow-hidden shadow-2xl">
                <div className="p-6 border-b bg-gray-50 flex justify-between items-center">
                    <h3 className="font-black text-primary uppercase tracking-tighter italic">Vendor Comparison Engine</h3>
                    <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase">L1 Analysis Active</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-[10px] font-black uppercase tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-4">Vendor Name</th>
                                <th className="px-6 py-4 text-primary">Technical Score (AI)</th>
                                <th className="px-6 py-4">Commercial Bid</th>
                                <th className="px-6 py-4">Compliance</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {[
                                { name: "TechGiant Corp", score: 92, bid: "₹45.5L", compliance: "Full", variant: "success" },
                                { name: "SME Solutions", score: 85, bid: "₹38.0L", compliance: "High", variant: "success" },
                                { name: "Global Systems", score: 78, bid: "₹52.0L", compliance: "Medium", variant: "warning" }
                            ].map((v, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-black text-text italic underline decoration-primary/20 underline-offset-4">{v.name}</td>
                                    <td className="px-6 py-4"><span className="text-primary font-black text-2xl">{v.score}</span><span className="text-[10px] font-bold text-gray-400">/100</span></td>
                                    <td className="px-6 py-4 text-accent font-black text-lg italic">{v.bid}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase border ${v.variant === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                            {v.compliance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="outline" size="sm" className="font-black italic shadow-sm">AWARD CONTRACT</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <Card className="bg-primary text-white p-8 space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Card className="w-40 h-40 rounded-full border-8 border-white" />
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="pb-4 border-b border-white/20">
                        <h3 className="font-black text-xl italic uppercase tracking-tighter">SARATHI AI Summary</h3>
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-1">Generated 2m ago</p>
                    </div>
                    <div className="space-y-5 text-sm font-medium italic">
                        <div className="space-y-1">
                            <p className="text-white font-black text-[10px] uppercase tracking-widest text-secondary-light">Top Performer</p>
                            <p className="text-white/80 leading-relaxed"><span className="text-white font-black">TechGiant</span> has the highest technical score due to established ISO certifications and previous highway experience.</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-black text-[10px] uppercase tracking-widest text-secondary-light">Cost Efficiency</p>
                            <p className="text-white/80 leading-relaxed"><span className="text-white font-black">SME Solutions</span> is the most cost-effective, offering 15% better pricing with acceptable technical risk.</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-black text-[10px] uppercase tracking-widest text-secondary-light">Risk Alert</p>
                            <p className="text-white/80 leading-relaxed font-bold text-accent">Detected historical delay trends in <span className="text-white font-black">Global Systems</span> data profile.</p>
                        </div>
                    </div>
                    <Button variant="accent" className="w-full font-black py-6 italic shadow-xl shadow-black/10 transition-transform active:scale-95">GENERATE FULL PDF REPORT</Button>
                </div>
            </Card>
        </div>
    </div>
);
