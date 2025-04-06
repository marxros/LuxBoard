import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { DashboardFilters } from "./components/DashboardFilters";
import { useDashboardData } from "./hooks/useDashboardData";
import { DashboardContent } from "./DashboardContent";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DashboardPage = () => {
  const [filters, setFilters] = useState({
    clientNumber: "",
    start: "",
    end: "",
  });

  const { data, loading } = useDashboardData(filters);

  return (
    <div className="space-y-8">
      <DashboardFilters setFilters={setFilters} filters={filters} />

      {loading || !data ? (
        <div className="text-center text-gray-500">🔄 Carregando dados...</div>
      ) : (
        <DashboardContent summary={data.summary} monthly={data.monthly} />
      )}
    </div>
  );
};

export default DashboardPage;
