export interface DashboardSummary {
  totalEnergiaConsumidaKwh: number;
  totalEnergiaCompensadaKwh: number;
  totalValorSemGD: number;
  totalEconomiaGD: number;
}

export interface DashboardMonthlyData {
  month: string;
  energiaConsumidaKwh: number;
  energiaCompensadaKwh: number;
  valorTotalSemGD: number;
  economiaGD: number;
}

export interface DashboardData {
  summary: DashboardSummary;
  monthly: DashboardMonthlyData[];
}
