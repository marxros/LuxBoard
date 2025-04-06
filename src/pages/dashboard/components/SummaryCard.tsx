import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export const SummaryCard = ({ title, value, icon }: SummaryCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
      <div className="text-3xl text-blue-500">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-semibold  text-gray-700">{value}</div>
      </div>
    </div>
  );
};
