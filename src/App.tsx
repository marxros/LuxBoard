import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./pages/dashboard/components/ui/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import InvoicesPage from "./pages/invoices/InvoicePage";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Layout>
  );
}

export default App;
