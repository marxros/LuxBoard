import { useCallback, useEffect, useState } from "react";
import { api } from "../../../services/api/api";

interface Invoice {
  id: string;
  referenceMonth: string;
  clientNumber: string;
  clientName: string;
  totalValue: number;
  downloadUrl: string;
}

interface Filters {
  clientNumber: string;
  month: string;
}

export const useInvoices = ({ clientNumber, month }: Filters) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<Invoice[]>("/bills", {
        params: { clientNumber, month },
      });
      setInvoices(response.data);
    } catch (error) {
      console.error("Erro ao buscar faturas", error);
      setInvoices([]);
    } finally {
      setLoading(false);
    }
  }, [clientNumber, month]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  return { invoices, loading, refetch: fetchInvoices };
};
