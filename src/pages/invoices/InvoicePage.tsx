import { useState } from "react";
import { useInvoices } from "./hooks/useInvoice";
import { InvoiceUploadModal } from "./components/InvoiceUploadModal";
import { InvoicesTable } from "./components/InvoicesTable";

const InvoicesPage = () => {
  const [filters] = useState({ clientNumber: "", month: "" });
  const [showModal, setShowModal] = useState(false);
  const { invoices, loading, refetch } = useInvoices(filters);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600">
          Biblioteca de Faturas
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          Enviar Faturas
        </button>
      </div>
      {showModal && (
        <InvoiceUploadModal
          onClose={() => setShowModal(false)}
          onSuccess={() => refetch()}
        />
      )}

      <InvoicesTable invoices={invoices} loading={loading} />
    </div>
  );
};

export default InvoicesPage;
