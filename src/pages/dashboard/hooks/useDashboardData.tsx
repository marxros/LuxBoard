import { useEffect, useState } from "react";
import { DashboardData } from "../types/DashboardData";
import { api } from "../../../services/api/api";

interface Params {
  clientNumber: string;
  start: string;
  end: string;
}

export const useDashboardData = (params: Params) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get<DashboardData>("/dashboard", {
          params: {
            clientNumber: params.clientNumber || undefined,
            start: params.start || undefined,
            end: params.end || undefined,
          },
        });
        setData(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados do dashboard", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // sempre roda, com ou sem filtros
  }, [params.clientNumber, params.start, params.end]);

  return { data, loading };
};
