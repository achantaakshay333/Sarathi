import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";

// Public Pages
import { HomePage } from "./pages/public/HomePage";
import { SignInPage } from "./pages/public/SignInPage";
import { SignUpPage } from "./pages/public/SignUpPage";
import { AboutPage } from "./pages/public/AboutPage";
import { PublicRFPs } from "./pages/public/PublicRFPs";

// Admin Pages
import { AdminOverview } from "./pages/admin/AdminOverview";
import { ViewVendors } from "./pages/admin/ViewVendors";
import { SystemLogs } from "./pages/admin/SystemLogs";
import { AddEmployee } from "./pages/admin/AddEmployee";
import { ManageEmployees } from "./pages/admin/ManageEmployees";

// Gov Employee Pages
import { GovOverview } from "./pages/gov/GovOverview";
import { VendorQueries } from "./pages/gov/VendorQueries";
import { ManageRFPs } from "./pages/gov/ManageRFPs";
import { CreateRFP } from "./pages/gov/CreateRFP";
import { BidAnalysis } from "./pages/gov/BidAnalysis";
import { VendorApprovals } from "./pages/gov/VendorApprovals";

// Vendor Pages
import { VendorOverview } from "./pages/vendor/VendorOverview";
import { ViewRFPs } from "./pages/vendor/ViewRFPs";
import { SubmitProposal } from "./pages/vendor/SubmitProposal";
import { MySubmissions } from "./pages/vendor/MySubmissions";
import { AskQuery } from "./pages/vendor/AskQuery";

// Icons for Sidebar
import {
  LayoutDashboard, Users, UserPlus, History, Shield,
  CheckCircle2, FilePlus, FileText, MessageSquare, BarChart3,
  Search, Send, FileCheck, Zap
} from "lucide-react";

// Shared Placeholder for remaining pages
const PagePlaceholder = ({ title }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-2">
        <button className="btn btn-outline btn-sm">Export Data</button>
        <button className="btn btn-primary btn-sm px-4">Action</button>
      </div>
    </div>
    <div className="card h-96 flex items-center justify-center text-gray-300 italic">
      The {title} screen is being initialized.
    </div>
  </div>
);

// Route menu items
const adminMenu = [
  { label: "Dashboard Overview", to: "/admin", icon: LayoutDashboard },
  { label: "Add Employee", to: "/admin/add-employee", icon: UserPlus },
  { label: "Manage Employees", to: "/admin/manage-employees", icon: Users },
  { label: "View Vendors", to: "/admin/vendors", icon: Shield },
  { label: "System Logs", to: "/admin/logs", icon: History },
];

const govMenu = [
  { label: "Overview", to: "/gov", icon: LayoutDashboard },
  { label: "Vendor Approvals", to: "/gov/approvals", icon: FileCheck },
  { label: "Create RFP", to: "/gov/create-rfp", icon: FilePlus },
  { label: "Manage RFPs", to: "/gov/manage-rfps", icon: FileText },
  { label: "Vendor Queries", to: "/gov/queries", icon: MessageSquare },
  { label: "Bid Analysis", to: "/gov/analysis", icon: BarChart3 },
];

const vendorMenu = [
  { label: "Overview", to: "/vendor", icon: LayoutDashboard },
  { label: "View RFPs", to: "/vendor/rfps", icon: Search },
  { label: "Submit Proposal", to: "/vendor/submit", icon: Send },
  { label: "My Submissions", to: "/vendor/submissions", icon: FileText },
  { label: "Ask Query", to: "/vendor/query", icon: MessageSquare },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rfps" element={<PublicRFPs />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout menuItems={adminMenu} roleName="Administrator" />}>
          <Route index element={<AdminOverview />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="manage-employees" element={<ManageEmployees />} />
          <Route path="vendors" element={<ViewVendors />} />
          <Route path="logs" element={<SystemLogs />} />
        </Route>

        {/* Government Employee Dashboard */}
        <Route path="/gov" element={<DashboardLayout menuItems={govMenu} roleName="Gov official" />}>
          <Route index element={<GovOverview />} />
          <Route path="approvals" element={<VendorApprovals />} />
          <Route path="create-rfp" element={<CreateRFP />} />
          <Route path="manage-rfps" element={<ManageRFPs />} />
          <Route path="queries" element={<VendorQueries />} />
          <Route path="analysis" element={<BidAnalysis />} />
        </Route>

        {/* Vendor Dashboard */}
        <Route path="/vendor" element={<DashboardLayout menuItems={vendorMenu} roleName="Vendor Portal" />}>
          <Route index element={<VendorOverview />} />
          <Route path="rfps" element={<ViewRFPs />} />
          <Route path="submit" element={<SubmitProposal />} />
          <Route path="submissions" element={<MySubmissions />} />
          <Route path="query" element={<AskQuery />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
