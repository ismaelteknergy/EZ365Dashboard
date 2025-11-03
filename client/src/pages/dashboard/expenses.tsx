import { useState } from "react";
import { ComparisonChart } from "@/components/comparison-chart";
import { PeriodFilter } from "@/components/period-filter";
import { KpiCard } from "@/components/kpi-card";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const monthlyData = [
  { period: 'Ene', ez365: 45000, quickbooks: 43500 },
  { period: 'Feb', ez365: 52000, quickbooks: 51200 },
  { period: 'Mar', ez365: 48000, quickbooks: 49100 },
  { period: 'Abr', ez365: 61000, quickbooks: 60500 },
  { period: 'May', ez365: 55000, quickbooks: 54800 },
  { period: 'Jun', ez365: 67000, quickbooks: 68200 },
];

const yearlyData = [
  { period: '2020', ez365: 450000, quickbooks: 445000 },
  { period: '2021', ez365: 520000, quickbooks: 518000 },
  { period: '2022', ez365: 580000, quickbooks: 585000 },
  { period: '2023', ez365: 650000, quickbooks: 648000 },
  { period: '2024', ez365: 720000, quickbooks: 722000 },
];

export default function ExpensesPage() {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  const data = period === 'month' ? monthlyData : yearlyData;

  const handleRefresh = () => {
    console.log('Refrescando datos de gastos');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Comparación de Gastos</h1>
            <p className="text-muted-foreground mt-1">EZ365 vs QuickBooks</p>
          </div>
          <div className="flex gap-4 items-center">
            <PeriodFilter value={period} onChange={setPeriod} />
            <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-expenses">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard label="Total EZ365" value="$328,000" change={12.5} trend="up" />
          <KpiCard label="Total QuickBooks" value="$327,300" change={11.8} trend="up" />
          <KpiCard label="Diferencia" value="$700" />
          <KpiCard label="Variación" value="0.2%" />
        </div>

        <ComparisonChart 
          title="Gastos Mensuales / Anuales"
          data={data}
          yAxisLabel="Monto ($)"
        />
      </div>
    </div>
  );
}
