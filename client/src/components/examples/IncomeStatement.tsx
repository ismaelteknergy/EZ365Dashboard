import { IncomeStatement } from '../income-statement';

const mockData = {
  period: 'Enero - Diciembre 2024',
  revenue: [
    { id: 'sales', label: 'Ventas', amount: 850000, level: 1 },
    { id: 'services', label: 'Servicios', amount: 125000, level: 1 },
    { id: 'total-revenue', label: 'Total Ingresos', amount: 975000, level: 0, isSubtotal: true },
  ],
  expenses: [
    { id: 'cogs', label: 'Costo de Ventas', amount: 425000, level: 1 },
    { id: 'gross-profit', label: 'Utilidad Bruta', amount: 550000, level: 0, isSubtotal: true },
    { id: 'salaries', label: 'Salarios', amount: 180000, level: 1 },
    { id: 'rent', label: 'Renta', amount: 48000, level: 1 },
    { id: 'utilities', label: 'Servicios', amount: 24000, level: 1 },
    { id: 'marketing', label: 'Marketing', amount: 35000, level: 1 },
    { id: 'other', label: 'Otros Gastos', amount: 18000, level: 1 },
    { id: 'total-expenses', label: 'Total Gastos Operativos', amount: 305000, level: 0, isSubtotal: true },
    { id: 'net-income', label: 'Utilidad Neta', amount: 245000, level: 0, isTotal: true },
  ],
};

export default function IncomeStatementExample() {
  return (
    <div className="p-8">
      <IncomeStatement data={mockData} />
    </div>
  );
}
