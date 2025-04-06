import { useState } from "react";
import { FileDropzone } from "./FileDropZone";
import { toast } from "react-toastify";
import { InvoiceApi } from "../../../services/api/invoiceApi";

interface Props {
  onClose: () => void;
  onSuccess: () => void; // novo prop para recarregar faturas
}

export const InvoiceUploadModal = ({ onClose, onSuccess }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.warning("Selecione ao menos um arquivo PDF.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);
      await InvoiceApi.upload(files);
      toast.success("Faturas enviadas com sucesso!");
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar faturas.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md relative space-y-4">
        <h2 className="text-lg font-semibold mb-4">Enviar Faturas</h2>

        <FileDropzone onFilesSelected={setFiles} />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded"
          >
            Cancelar
          </button>
          <button
            disabled={loading}
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};
