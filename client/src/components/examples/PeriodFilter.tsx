import { PeriodFilter } from '../period-filter';
import { useState } from 'react';

export default function PeriodFilterExample() {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  return (
    <div className="p-8">
      <PeriodFilter value={period} onChange={setPeriod} />
      <p className="mt-4 text-sm text-muted-foreground">Seleccionado: {period}</p>
    </div>
  );
}
