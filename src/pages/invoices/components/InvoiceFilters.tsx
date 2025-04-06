import { useState } from "react";

interface Props {
  clientNumber: string;
  month: string;
  onFilter: (filters: { clientNumber: string; month: string }) => void;
}

export const InvoiceFilters = ({ clientNumber, month, onFilter }: Props) => {
  const [localClientNumber, setLocalClientNumber] = useState(clientNumber);
  const [localMonth, setLocalMonth] = useState(month);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ clientNumber: localClientNumber, month: localMonth });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-end"
    >
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Nº do Cliente
        </label>
        <input
          type="text"
          value={localClientNumber}
          onChange={(e) => setLocalClientNumber(e.target.value)}
          placeholder="Digite o número do cliente"
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Mês de Referência
        </label>
        <input
          type="month"
          value={localMonth}
          onChange={(e) => setLocalMonth(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
      >
        Filtrar
      </button>
    </form>
  );
};
