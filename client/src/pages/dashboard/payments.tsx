import { useState } from "react";
import { ComparisonChart } from "@/components/comparison-chart";
import { PeriodFilter } from "@/components/period-filter";
import { KpiCard } from "@/components/kpi-card";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const monthlyData = [
  { period: 'Ene', ez365: 95000, quickbooks: 93500 },
  { period: 'Feb', ez365: 102000, quickbooks: 101200 },
  { period: 'Mar', ez365: 98000, quickbooks: 99100 },
  { period: 'Abr', ez365: 111000, quickbooks: 110500 },
  { period: 'May', ez365: 105000, quickbooks: 104800 },
  { period: 'Jun', ez365: 127000, quickbooks: 128200 },
];

const yearlyData = [
  { period: '2020', ez365: 950000, quickbooks: 945000 },
  { period: '2021', ez365: 1020000, quickbooks: 1018000 },
  { period: '2022', ez365: 1180000, quickbooks: 1185000 },
  { period: '2023', ez365: 1350000, quickbooks: 1348000 },
  { period: '2024', ez365: 1520000, quickbooks: 1522000 },
];

export default function PaymentsPage() {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  const data = period === 'month' ? monthlyData : yearlyData;

  const handleRefresh = () => {
    console.log('Refrescando datos de pagos');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Comparación de Pagos</h1>
            <p className="text-muted-foreground mt-1">EZ365 vs QuickBooks</p>
          </div>
          <div className="flex gap-4 items-center">
            <PeriodFilter value={period} onChange={setPeriod} />
            <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-payments">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard label="Total EZ365" value="$638,000" change={18.5} trend="up" />
          <KpiCard label="Total QuickBooks" value="$641,300" change={17.2} trend="up" />
          <KpiCard label="Diferencia" value="$3,300" />
          <KpiCard label="Variación" value="0.5%" />
        </div>

        <ComparisonChart 
          title="Pagos Mensuales / Anuales"
          data={data}
          yAxisLabel="Monto ($)"
        />
      </div>
    </div>
  );
}
