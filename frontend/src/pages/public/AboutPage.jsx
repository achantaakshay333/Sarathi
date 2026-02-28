import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Shield, Target, Zap, Cpu, Users, Building } from "lucide-react";

export function AboutPage() {
    return (
        <div className="space-y-16 py-12">
            {/* Vision Section */}
            <section className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <img src="/logo.png" className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl" alt="SARATHI Vision" />
                    <h1 className="text-5xl font-black text-primary tracking-tight">Project SARATHI</h1>
                    <p className="text-2xl font-bold text-text-light italic underline decoration-accent decoration-4 underline-offset-8 uppercase tracking-widest">Smart AI Assistant For Tender Handling & Intelligence</p>
                    <p className="text-xl text-text leading-relaxed">
                        SARATHI is a pioneering initiative to transform manual, time-consuming procurement processes into efficient, AI-driven workflows. Our vision is to ensure transparency and selecting the most qualified partners for government projects using state-of-the-art machine learning.
                    </p>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="bg-gray-50 py-20 border-y border-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Pillars of SARATHI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Integrity & Trust</h3>
                            <p className="text-text-light">Eliminating bias in vendor selection through data-driven evaluation metrics.</p>
                        </Card>
                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Accuracy</h3>
                            <p className="text-text-light">AI analyzes technical proposals with 99% accuracy against RFP requirements.</p>
                        </Card>
                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Efficiency</h3>
                            <p className="text-text-light">Reducing the bid evaluation cycle from 3 months down to just 48 hours.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-primary">The Intelligence Behind the System</h2>
                        <p className="text-lg text-text leading-relaxed">
                            SARATHI leverages Large Language Models (LLMs) to understand complex technical jargon in vendor submissions. It automatically cross-references bid data with historical performance and legal compliance databases.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { icon: Cpu, text: "Advanced Natural Language Processing for Document Parsing" },
                                { icon: Users, text: "Collaborative Review System for Government Stakeholders" },
                                { icon: Building, text: "Seamless Integration with National Portal" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-primary font-bold">
                                    <item.icon className="w-6 h-6 shrink-0" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary rounded-3xl blur-3xl opacity-10"></div>
                        <Card className="p-0 overflow-hidden relative border-accent/20">
                            <img src="/logo.png" className="w-full h-[400px] object-cover opacity-20 grayscale brightness-50" alt="Tech" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center space-y-4">
                                    <p className="text-3xl font-black italic">"SARATHI: The Charioteer of Modern Procurement"</p>
                                    <div className="h-1 w-24 bg-accent mx-auto"></div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
