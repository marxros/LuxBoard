// src/services/invoiceApi.ts
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export class InvoiceApi {
  static async upload(files: File[]): Promise<void> {
    const formData = new FormData();

    for (const file of files) {
      formData.append("files", file);
    }

    try {
      await axios.post(`${API_BASE_URL}/invoices/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erro ao enviar faturas:", error);
      throw error;
    }
  }
}
