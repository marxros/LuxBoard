interface SummaryCardProps {
  title: string;
  value: string | number;
}

export const SummaryCard = ({ title, value }: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h3 className="text-3xl font-bold underline">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  );
};
