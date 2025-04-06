import { api } from "./api";

export class InvoiceApi {
  static async upload(files: File[]): Promise<void> {
    const formData = new FormData();

    for (const file of files) {
      formData.append("files", file);
    }

    try {
      await api.post(`/invoices/upload`, formData, {
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
