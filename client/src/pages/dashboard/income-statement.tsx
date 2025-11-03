import { IncomeStatement } from "@/components/income-statement";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockData = {
  period: 'Enero - Diciembre 2024',
  revenue: [
    { id: 'product-sales', label: 'Ventas de Productos', amount: 850000, level: 1 },
    { id: 'service-revenue', label: 'Ingresos por Servicios', amount: 125000, level: 1 },
    { id: 'other-income', label: 'Otros Ingresos', amount: 15000, level: 1 },
    { id: 'total-revenue', label: 'Total Ingresos', amount: 990000, level: 0, isSubtotal: true },
  ],
  expenses: [
    { id: 'cogs', label: 'Costo de Ventas', amount: 425000, level: 1 },
    { id: 'gross-profit', label: 'UTILIDAD BRUTA', amount: 565000, level: 0, isSubtotal: true },
    { id: 'salaries-header', label: 'Gastos Operativos:', amount: 0, level: 1 },
    { id: 'salaries', label: 'Salarios y Sueldos', amount: 180000, level: 2 },
    { id: 'benefits', label: 'Prestaciones', amount: 35000, level: 2 },
    { id: 'rent', label: 'Renta', amount: 48000, level: 2 },
    { id: 'utilities', label: 'Servicios Públicos', amount: 24000, level: 2 },
    { id: 'marketing', label: 'Marketing y Publicidad', amount: 35000, level: 2 },
    { id: 'insurance', label: 'Seguros', amount: 18000, level: 2 },
    { id: 'maintenance', label: 'Mantenimiento', amount: 22000, level: 2 },
    { id: 'other', label: 'Otros Gastos', amount: 18000, level: 2 },
    { id: 'total-expenses', label: 'Total Gastos Operativos', amount: 380000, level: 0, isSubtotal: true },
    { id: 'operating-income', label: 'UTILIDAD OPERATIVA', amount: 185000, level: 0, isSubtotal: true },
    { id: 'interest', label: 'Gastos Financieros', amount: 15000, level: 1 },
    { id: 'taxes', label: 'Impuestos', amount: 42500, level: 1 },
    { id: 'net-income', label: 'UTILIDAD NETA', amount: 127500, level: 0, isTotal: true },
  ],
};

export default function IncomeStatementPage() {
  const handleRefresh = () => {
    console.log('Refrescando Estado de Resultados');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Estado de Resultados</h1>
            <p className="text-muted-foreground mt-1">Importado desde QuickBooks</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-income">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualizar
          </Button>
        </div>

        <IncomeStatement data={mockData} />
      </div>
    </div>
  );
}
