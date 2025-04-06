import { Bar } from "react-chartjs-2";
import { SummaryCard } from "./components/SummaryCard";
import {
  LightningBoltIcon,
  CashIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

interface DashboardContentProps {
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
}

export const DashboardContent = ({
  summary,
  monthly,
}: DashboardContentProps) => {
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
        backgroundColor: "#fa6e6e",
      },
      {
        label: "Economia GD (R$)",
        data: monthly.map((m) => m.economiaGD * -1),
        backgroundColor: "#6effa1",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Energia Consumida"
          value={`${summary.totalEnergiaConsumidaKwh} kWh`}
          icon={<LightningBoltIcon className="w-8 h-8" />}
        />
        <SummaryCard
          title="Energia Compensada"
          value={`${summary.totalEnergiaCompensadaKwh} kWh`}
          icon={<TrendingUpIcon className="w-8 h-8 text-green-500" />}
        />
        <SummaryCard
          title="Valor Total sem GD"
          value={`R$ ${summary.totalValorSemGD.toFixed(2)}`}
          icon={<CashIcon className="w-8 h-8 text-green-600" />}
        />
        <SummaryCard
          title="Economia GD"
          value={`R$ ${summary.totalEconomiaGD.toFixed(2)}`}
          icon={<TrendingDownIcon className="w-8 h-8 text-red-500" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-600">
          Energia (kWh)
        </h2>
        <Bar data={energyData} />
      </div>

      <div className="bg-white rounded-lg shadow p-4 text-gray-600">
        <h2 className="text-xl font-semibold mb-2">Financeiro (R$)</h2>
        <Bar data={financialData} />
      </div>
    </div>
  );
};
