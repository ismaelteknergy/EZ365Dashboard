import { useState } from "react";
import { ComparisonChart } from "@/components/comparison-chart";
import { PeriodFilter } from "@/components/period-filter";
import { KpiCard } from "@/components/kpi-card";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const monthlyData = [
  { period: 'Ene', ez365: 125000, quickbooks: 123500 },
  { period: 'Feb', ez365: 142000, quickbooks: 141200 },
  { period: 'Mar', ez365: 138000, quickbooks: 139100 },
  { period: 'Abr', ez365: 151000, quickbooks: 150500 },
  { period: 'May', ez365: 145000, quickbooks: 144800 },
  { period: 'Jun', ez365: 167000, quickbooks: 168200 },
];

const yearlyData = [
  { period: '2020', ez365: 1250000, quickbooks: 1245000 },
  { period: '2021', ez365: 1420000, quickbooks: 1418000 },
  { period: '2022', ez365: 1580000, quickbooks: 1585000 },
  { period: '2023', ez365: 1750000, quickbooks: 1748000 },
  { period: '2024', ez365: 1920000, quickbooks: 1922000 },
];

export default function InvoicesPage() {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  const data = period === 'month' ? monthlyData : yearlyData;

  const handleRefresh = () => {
    console.log('Refrescando datos de facturas');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Comparación de Facturas</h1>
            <p className="text-muted-foreground mt-1">EZ365 vs QuickBooks</p>
          </div>
          <div className="flex gap-4 items-center">
            <PeriodFilter value={period} onChange={setPeriod} />
            <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-invoices">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard label="Total EZ365" value="$868,000" change={15.2} trend="up" />
          <KpiCard label="Total QuickBooks" value="$871,300" change={14.8} trend="up" />
          <KpiCard label="Diferencia" value="$3,300" />
          <KpiCard label="Variación" value="0.4%" />
        </div>

        <ComparisonChart 
          title="Facturas Mensuales / Anuales"
          data={data}
          yAxisLabel="Monto ($)"
        />
      </div>
    </div>
  );
}
