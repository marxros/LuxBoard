import { useState } from "react";

interface DashboardFiltersProps {
  onFilter: (filters: {
    clientNumber: string;
    start: string;
    end: string;
  }) => void;
}

export const DashboardFilters = ({ onFilter }: DashboardFiltersProps) => {
  const [clientNumber, setClientNumber] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ clientNumber, start, end });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Nº do Cliente"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
        className="p-2 rounded border border-gray-300 w-full md:w-1/3"
      />
      <input
        type="month"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="p-2 rounded border border-gray-300 w-full md:w-1/3"
      />
      <input
        type="month"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="p-2 rounded border border-gray-300 w-full md:w-1/3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
      >
        Filtrar
      </button>
    </form>
  );
};
