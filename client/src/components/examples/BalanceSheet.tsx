import { BalanceSheet } from '../balance-sheet';

const mockData = {
  asOfDate: '31 de Diciembre, 2024',
  assets: [
    { id: 'cash', label: 'Efectivo', amount: 125000, level: 1 },
    { id: 'ar', label: 'Cuentas por Cobrar', amount: 85000, level: 1 },
    { id: 'inventory', label: 'Inventario', amount: 65000, level: 1 },
    { id: 'current-assets', label: 'Total Activos Corrientes', amount: 275000, level: 0, isSubtotal: true },
    { id: 'equipment', label: 'Equipo', amount: 150000, level: 1 },
    { id: 'buildings', label: 'Edificios', amount: 350000, level: 1 },
    { id: 'fixed-assets', label: 'Total Activos Fijos', amount: 500000, level: 0, isSubtotal: true },
    { id: 'total-assets', label: 'Total Activos', amount: 775000, level: 0, isTotal: true },
  ],
  liabilities: [
    { id: 'ap', label: 'Cuentas por Pagar', amount: 45000, level: 1 },
    { id: 'short-debt', label: 'Deuda a Corto Plazo', amount: 30000, level: 1 },
    { id: 'current-liabilities', label: 'Total Pasivos Corrientes', amount: 75000, level: 0, isSubtotal: true },
    { id: 'long-debt', label: 'Deuda a Largo Plazo', amount: 200000, level: 1 },
    { id: 'total-liabilities', label: 'Total Pasivos', amount: 275000, level: 0, isSubtotal: true },
  ],
  equity: [
    { id: 'capital', label: 'Capital Social', amount: 300000, level: 1 },
    { id: 'retained', label: 'Utilidades Retenidas', amount: 200000, level: 1 },
    { id: 'total-equity', label: 'Total Capital', amount: 500000, level: 0, isSubtotal: true },
    { id: 'total-liab-equity', label: 'Total Pasivos + Capital', amount: 775000, level: 0, isTotal: true },
  ],
};

export default function BalanceSheetExample() {
  return (
    <div className="p-8">
      <BalanceSheet data={mockData} />
    </div>
  );
}
