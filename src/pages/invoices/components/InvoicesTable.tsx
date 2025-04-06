import { useState } from "react";

interface Invoice {
  id: string;
  clientName: string;
  clientNumber: string;
  referenceMonth: string;
  totalValue: number;
}

interface InvoicesTableProps {
  invoices: Invoice[];
  loading: boolean;
}

export const InvoicesTable = ({ invoices, loading }: InvoicesTableProps) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredInvoices = invoices.filter((invoice) => {
    const searchLower = search.toLowerCase();
    return (
      invoice.clientName?.toLowerCase().includes(searchLower) ||
      invoice.clientNumber.includes(searchLower) ||
      invoice.referenceMonth.includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

  const paginatedInvoices = filteredInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Buscar por nome, número ou mês..."
          className="p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-green-600">
            <tr>
              <th className="px-6 py-3">Nome do Cliente</th>
              <th className="px-6 py-3">Nº Cliente</th>
              <th className="px-6 py-3">Mês Referência</th>
              <th className="px-6 py-3">Valor Total (R$)</th>
              <th className="px-6 py-3 text-right">Ação</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  Carregando...
                </td>
              </tr>
            ) : paginatedInvoices.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  Nenhuma fatura encontrada.
                </td>
              </tr>
            ) : (
              paginatedInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th className="px-6 py-4 font-medium text-gray-600">
                    {invoice.clientName}
                  </th>
                  <td className="px-6 py-4">{invoice.clientNumber}</td>
                  <td className="px-6 py-4">{invoice.referenceMonth}</td>
                  <td className="px-6 py-4">
                    R$ {invoice.totalValue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-green-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4 items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-sm border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md text-sm border ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-sm border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};
