import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { Layout } from "./pages/dashboard/components/ui/Layout";
import "./index.css";
import InvoicesPage from "./pages/invoices/InvoicePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
