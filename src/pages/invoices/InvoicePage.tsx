import { useState } from "react";
import { InvoiceFilters } from "./components/InvoiceFilters";
import { useInvoices } from "./hooks/useInvoice";
import { InvoiceItem } from "./components/InvoiceItem";

const InvoicesPage = () => {
  const [filters, setFilters] = useState({
    clientNumber: "",
    month: "",
  });

  const { invoices, loading } = useInvoices(filters);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Biblioteca de Faturas</h1>

      <InvoiceFilters
        clientNumber={filters.clientNumber}
        month={filters.month}
        onFilter={setFilters}
      />

      {loading && <p>Carregando faturas...</p>}

      {!loading && invoices.length === 0 && <p>Nenhuma fatura encontrada.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoicesPage;
