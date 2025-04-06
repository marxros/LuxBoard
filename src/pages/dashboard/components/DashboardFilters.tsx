import { useState, useEffect } from "react";
import { UserIcon, CalendarIcon, SearchIcon } from "@heroicons/react/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DashboardFiltersProps {
  filters: {
    clientNumber: string;
    start: string;
    end: string;
  };
  setFilters: (filters: {
    clientNumber: string;
    start: string;
    end: string;
  }) => void;
}

export const DashboardFilters = ({
  filters,
  setFilters,
}: DashboardFiltersProps) => {
  // 🧠 useState local apenas para edição antes de filtrar
  const [localClientNumber, setLocalClientNumber] = useState(
    filters.clientNumber
  );
  const [localStartDate, setLocalStartDate] = useState<Date | null>(
    filters.start ? parse(filters.start, "yyyy-MM", new Date()) : null
  );
  const [localEndDate, setLocalEndDate] = useState<Date | null>(
    filters.end ? parse(filters.end, "yyyy-MM", new Date()) : null
  );

  // Se o pai atualizar os filtros, sincroniza aqui também
  useEffect(() => {
    setLocalClientNumber(filters.clientNumber);
    setLocalStartDate(
      filters.start ? parse(filters.start, "yyyy-MM", new Date()) : null
    );
    setLocalEndDate(
      filters.end ? parse(filters.end, "yyyy-MM", new Date()) : null
    );
  }, [filters]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const start = localStartDate ? format(localStartDate, "yyyy-MM") : "";
    const end = localEndDate ? format(localEndDate, "yyyy-MM") : "";

    setFilters({
      clientNumber: localClientNumber,
      start,
      end,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-end gap-4"
    >
      {/* Nº do Cliente */}
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Nº do Cliente
        </label>
        <div className="relative">
          <UserIcon className="w-5 h-5 text-gray-400 absolute left-2 top-2.5" />
          <input
            type="text"
            placeholder="Ex: 123456"
            value={localClientNumber}
            onChange={(e) => setLocalClientNumber(e.target.value)}
            className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Data Inicial */}
      <div className="flex-1 max-w-[220px]">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Data Inicial
        </label>
        <div className="relative">
          <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-2 top-2.5" />
          <DatePicker
            selected={localStartDate}
            onChange={(date) => setLocalStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            locale={ptBR}
            placeholderText="Selecione o mês"
            className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Data Final */}
      <div className="flex-1 max-w-[220px]">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Data Final
        </label>
        <div className="relative">
          <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-2 top-2.5" />
          <DatePicker
            selected={localEndDate}
            onChange={(date) => setLocalEndDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            locale={ptBR}
            placeholderText="Selecione o mês"
            className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
      >
        <SearchIcon className="w-5 h-5" />
        Filtrar
      </button>
    </form>
  );
};
