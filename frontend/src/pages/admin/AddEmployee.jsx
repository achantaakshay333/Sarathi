import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { UserPlus, Shield, Mail, Briefcase, ChevronRight } from "lucide-react";

export function AddEmployee() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-primary">Add Official</h1>
                    <p className="text-text-light font-bold uppercase tracking-widest text-[10px]">Onboard Government Personnel</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="p-10 shadow-2xl border-t-8 border-t-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                            <UserPlus className="w-64 h-64" />
                        </div>
                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Full Name</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input className="pl-12 py-6 font-bold" placeholder="E.g. Dr. Ramesh Kumar" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Official Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input className="pl-12 py-6 font-bold" placeholder="ramesh.k@gov.in" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Department</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none">
                                        <option>Ministry of Finance</option>
                                        <option>Ministry of Agriculture</option>
                                        <option>NHAI</option>
                                        <option>State Health Board</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-light pl-1">Access Role</label>
                                    <div className="relative">
                                        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 font-bold text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                                            <option>Procurement Officer</option>
                                            <option>Audit Specialist</option>
                                            <option>System Administrator</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-l-secondary space-y-2">
                                <p className="text-xs font-black text-secondary uppercase tracking-widest">Security Protocol</p>
                                <p className="text-xs text-text-light italic font-medium">An invitation link will be sent to the official email above. The user must complete 2FA setup within 24 hours.</p>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button className="px-12 py-7 text-lg font-black italic shadow-xl shadow-primary/20 group">
                                    Onboard Official <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="p-6 bg-primary text-white border-none shadow-xl">
                        <h4 className="font-black italic uppercase tracking-tighter mb-4">Onboarding Stats</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-xs font-bold opacity-60 italic">Active Officials</span>
                                <span className="font-black">124</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-xs font-bold opacity-60 italic">Pending Invites</span>
                                <span className="font-black text-secondary">08</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs font-bold opacity-60 italic">Dept Headcount</span>
                                <span className="font-black uppercase tracking-tighter">Verified</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4 py-12">
                        <Shield className="w-12 h-12 text-gray-300" />
                        <p className="text-sm font-bold text-text-light italic">Need to onboard bulk users? <br /><span className="text-primary underline cursor-pointer">Upload CSV Template</span></p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
