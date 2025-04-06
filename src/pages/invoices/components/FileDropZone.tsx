import { useRef, useState } from "react";
import { FaFilePdf, FaTimes } from "react-icons/fa";

interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
}

export const FileDropzone = ({
  onFilesSelected,
  maxFiles = 10,
}: FileDropzoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [highlight, setHighlight] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlight(false);
    const newFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    );
    handleNewFiles(newFiles);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlight(true);
  };

  const handleDragLeave = () => setHighlight(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files ?? []).filter(
      (file) => file.type === "application/pdf"
    );
    handleNewFiles(newFiles);
  };

  const handleNewFiles = (newFiles: File[]) => {
    const fileNames = selectedFiles.map((f) => f.name);
    const uniqueNewFiles = newFiles.filter(
      (file) => !fileNames.includes(file.name)
    );

    if (uniqueNewFiles.length === 0) {
      setError("Arquivo já adicionado ou inválido.");
      return;
    }

    const total = selectedFiles.length + uniqueNewFiles.length;
    if (total > maxFiles) {
      setError(`Você só pode enviar até ${maxFiles} arquivos.`);
      return;
    }

    const updatedFiles = [...selectedFiles, ...uniqueNewFiles];
    setSelectedFiles(updatedFiles);
    onFilesSelected(updatedFiles);
    setError("");
  };

  const handleRemoveFile = (fileName: string) => {
    const updatedFiles = selectedFiles.filter((f) => f.name !== fileName);
    setSelectedFiles(updatedFiles);
    onFilesSelected(updatedFiles);
  };

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors ${
          highlight ? "border-lime-600 bg-lime-50" : "border-gray-300"
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        <p className="text-gray-700">
          Arraste e solte arquivos PDF aqui ou{" "}
          <span className="text-lime-800 font-semibold">
            clique para selecionar
          </span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Apenas arquivos .pdf | Máx. {maxFiles} arquivos
        </p>
        {error && (
          <p className="text-sm text-red-600 mt-2 font-medium">{error}</p>
        )}
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 max-h-60 overflow-y-auto space-y-2 pr-2">
          {selectedFiles.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between gap-4 text-gray-800 bg-gray-50 border rounded px-4 py-2 shadow-sm"
            >
              <div className="flex items-center gap-2 truncate">
                <FaFilePdf className="text-red-600 w-5 h-5" />
                <span className="truncate">{file.name}</span>
              </div>
              <button
                onClick={() => handleRemoveFile(file.name)}
                className="text-red-500 hover:text-red-700 transition"
                title="Remover arquivo"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
