import { KpiCard } from '../kpi-card';

export default function KpiCardExample() {
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <KpiCard label="Total EZ365" value="$312,500" change={12.5} trend="up" />
      <KpiCard label="Total QuickBooks" value="$318,300" change={8.3} trend="up" />
      <KpiCard label="Diferencia" value="$5,800" change={-2.1} trend="down" />
      <KpiCard label="Clientes" value="247" />
    </div>
  );
}
