import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { ShieldCheck, ChevronDown } from "lucide-react";

export function SignInPage() {
    const [role, setRole] = useState("vendor");
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (role === "admin") navigate("/admin");
        else if (role === "employee") navigate("/gov");
        else navigate("/vendor");
    };

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center py-12 px-6">
            <div className="max-w-md w-full mx-auto space-y-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-white mb-6">
                        <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Sign In to Dashboard</h2>
                    <p className="mt-2 text-text-light">Access your secure RFP management portal</p>
                </div>

                <Card className="p-8 shadow-xl border-gray-100">
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@agency.gov"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-text-light">Select Your Role</label>
                            <div className="relative">
                                <select
                                    className="input appearance-none"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="admin">System Admin</option>
                                    <option value="employee">Government Employee</option>
                                    <option value="vendor">Registered Vendor</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t text-center space-y-2">
                        <p className="text-sm text-text-light">New to the platform?</p>
                        <Link to="/signup" className="text-primary font-bold hover:underline">
                            Register as a Vendor
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}
