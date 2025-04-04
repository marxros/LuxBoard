import { FaDownload } from "react-icons/fa";

interface InvoiceItemProps {
  invoice: {
    id: string;
    referenceMonth: string;
    clientNumber: string;
    downloadUrl: string;
  };
}

export const InvoiceItem = ({ invoice }: InvoiceItemProps) => {
  return (
    <div className="border rounded shadow p-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-500">Cliente: {invoice.clientNumber}</p>
        <p className="text-lg font-semibold">
          Referente a: {invoice.referenceMonth}
        </p>
      </div>

      <a
        href={invoice.downloadUrl}
        download
        className="mt-2 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        <FaDownload className="mr-2" />
        Baixar Fatura
      </a>
    </div>
  );
};
