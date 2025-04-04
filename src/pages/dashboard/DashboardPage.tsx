import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { DashboardFilters } from "./components/DashboardFilters";
import { SummaryCard } from "./components/SummaryCard";
import { useDashboardData } from "./hooks/useDashboardData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DashboardPage = () => {
  const [filters, setFilters] = useState({
    clientNumber: "",
    start: "",
    end: "",
  });

  const { data, loading } = useDashboardData(filters);
  if (loading || !data) return <div>Carregando...</div>;

  const {
    summary,
    monthly,
  }: {
    summary: {
      totalEnergiaConsumidaKwh: number;
      totalEnergiaCompensadaKwh: number;
      totalValorSemGD: number;
      totalEconomiaGD: number;
    };
    monthly: {
      month: string;
      energiaConsumidaKwh: number;
      energiaCompensadaKwh: number;
      valorTotalSemGD: number;
      economiaGD: number;
    }[];
  } = data;

  const energyData = {
    labels: monthly.map((m) => m.month),
    datasets: [
      {
        label: "Energia Consumida (kWh)",
        data: monthly.map((m) => m.energiaConsumidaKwh),
        backgroundColor: "#3b82f6",
      },
      {
        label: "Energia Compensada (kWh)",
        data: monthly.map((m) => m.energiaCompensadaKwh),
        backgroundColor: "#10b981",
      },
    ],
  };

  const financialData = {
    labels: monthly.map((m) => m.month),
    datasets: [
      {
        label: "Valor Total sem GD (R$)",
        data: monthly.map((m) => m.valorTotalSemGD),
        backgroundColor: "#f59e0b",
      },
      {
        label: "Economia GD (R$)",
        data: monthly.map((m) => m.economiaGD),
        backgroundColor: "#ef4444",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <DashboardFilters onFilter={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Energia Consumida (kWh)"
          value={summary.totalEnergiaConsumidaKwh}
        />
        <SummaryCard
          title="Energia Compensada (kWh)"
          value={summary.totalEnergiaCompensadaKwh}
        />
        <SummaryCard
          title="Valor Total sem GD (R$)"
          value={`R$ ${summary.totalValorSemGD.toFixed(2)}`}
        />
        <SummaryCard
          title="Economia GD (R$)"
          value={`R$ ${summary.totalEconomiaGD.toFixed(2)}`}
        />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Energia (kWh)</h2>
        <Bar data={energyData} />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Financeiro (R$)</h2>
        <Bar data={financialData} />
      </div>
    </div>
  );
};

export default DashboardPage;
