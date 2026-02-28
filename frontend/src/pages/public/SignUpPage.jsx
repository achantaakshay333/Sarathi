import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Building2, CheckCircle2 } from "lucide-react";

export function SignUpPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-6">
                <Card className="max-w-md w-full p-12 text-center space-y-6 shadow-2xl">
                    <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Request Submitted</h2>
                    <p className="text-text-light leading-relaxed">
                        Your registration request for the AI RFP Portal has been sent and is currently
                        <span className="font-bold text-text"> pending government approval</span>.
                        You will receive an email once your company is verified.
                    </p>
                    <Link to="/">
                        <Button variant="outline" className="w-full">Return Home</Button>
                    </Link>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-primary">Vendor Registration</h1>
                    <p className="text-text-light mt-2">Join the government procurement ecosystem</p>
                </div>

                <Card className="p-10 shadow-xl">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                        <Input label="Company Name" placeholder="ABC Solutions Ltd" required />
                        <Input label="Contact Person" placeholder="John Doe" required />
                        <Input label="Email Address" type="email" placeholder="john@company.com" required />
                        <Input label="GST / Registration ID" placeholder="22AAAAA0000A1Z5" required />

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-light">Category</label>
                            <select className="input appearance-none">
                                <option>Information Technology</option>
                                <option>Construction & Works</option>
                                <option>Medical Supplies</option>
                                <option>Education & Training</option>
                                <option>Energy & Utilities</option>
                            </select>
                        </div>

                        <Input label="Password" type="password" placeholder="••••••••" required />

                        <div className="md:col-span-2 pt-4">
                            <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start mb-8 text-sm text-primary border border-blue-100">
                                <div className="p-1 bg-white rounded shadow-sm shrink-0">ℹ️</div>
                                <p>By submitting, you agree to the government's procurement terms of service and vendor code of conduct.</p>
                            </div>
                            <Button type="submit" className="w-full" size="lg">
                                Submit Registration
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}
