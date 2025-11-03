import { BalanceSheet } from "@/components/balance-sheet";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockData = {
  asOfDate: '31 de Diciembre, 2024',
  assets: [
    { id: 'cash', label: 'Efectivo y Equivalentes', amount: 125000, level: 1 },
    { id: 'ar', label: 'Cuentas por Cobrar', amount: 85000, level: 1 },
    { id: 'inventory', label: 'Inventario', amount: 65000, level: 1 },
    { id: 'prepaid', label: 'Gastos Prepagados', amount: 15000, level: 1 },
    { id: 'current-assets', label: 'Total Activos Corrientes', amount: 290000, level: 0, isSubtotal: true },
    { id: 'equipment', label: 'Equipo y Maquinaria', amount: 150000, level: 1 },
    { id: 'vehicles', label: 'Vehículos', amount: 75000, level: 1 },
    { id: 'buildings', label: 'Edificios e Inmuebles', amount: 350000, level: 1 },
    { id: 'depreciation', label: 'Menos: Depreciación Acumulada', amount: -75000, level: 1 },
    { id: 'fixed-assets', label: 'Total Activos Fijos Netos', amount: 500000, level: 0, isSubtotal: true },
    { id: 'total-assets', label: 'TOTAL ACTIVOS', amount: 790000, level: 0, isTotal: true },
  ],
  liabilities: [
    { id: 'ap', label: 'Cuentas por Pagar', amount: 45000, level: 1 },
    { id: 'accrued', label: 'Gastos Acumulados', amount: 12000, level: 1 },
    { id: 'short-debt', label: 'Deuda a Corto Plazo', amount: 30000, level: 1 },
    { id: 'current-liabilities', label: 'Total Pasivos Corrientes', amount: 87000, level: 0, isSubtotal: true },
    { id: 'long-debt', label: 'Deuda a Largo Plazo', amount: 200000, level: 1 },
    { id: 'total-liabilities', label: 'Total Pasivos', amount: 287000, level: 0, isSubtotal: true },
  ],
  equity: [
    { id: 'capital', label: 'Capital Social', amount: 300000, level: 1 },
    { id: 'retained', label: 'Utilidades Retenidas', amount: 203000, level: 1 },
    { id: 'total-equity', label: 'Total Capital', amount: 503000, level: 0, isSubtotal: true },
    { id: 'total-liab-equity', label: 'TOTAL PASIVOS + CAPITAL', amount: 790000, level: 0, isTotal: true },
  ],
};

export default function BalanceSheetPage() {
  const handleRefresh = () => {
    console.log('Refrescando Balance General');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Balance General</h1>
            <p className="text-muted-foreground mt-1">Importado desde QuickBooks</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-balance">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualizar
          </Button>
        </div>

        <BalanceSheet data={mockData} />
      </div>
    </div>
  );
}
