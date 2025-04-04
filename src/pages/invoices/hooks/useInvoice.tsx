import { useEffect, useState } from "react";
import axios from "axios";

interface Invoice {
  id: string;
  referenceMonth: string;
  clientNumber: string;
  downloadUrl: string;
}

interface Filters {
  clientNumber: string;
  month: string;
}

export const useInvoices = ({ clientNumber, month }: Filters) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Invoice[]>(
          "http://localhost:3000/bills",
          {
            params: {
              clientNumber,
              month,
            },
          }
        );
        setInvoices(response.data);
      } catch (error) {
        console.error("Erro ao buscar faturas", error);
        setInvoices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, [clientNumber, month]);

  return { invoices, loading };
};
