import { ComparisonChart } from '../comparison-chart';

const mockData = [
  { period: 'Ene', ez365: 45000, quickbooks: 43500 },
  { period: 'Feb', ez365: 52000, quickbooks: 51200 },
  { period: 'Mar', ez365: 48000, quickbooks: 49100 },
  { period: 'Abr', ez365: 61000, quickbooks: 60500 },
  { period: 'May', ez365: 55000, quickbooks: 54800 },
  { period: 'Jun', ez365: 67000, quickbooks: 68200 },
];

export default function ComparisonChartExample() {
  return (
    <div className="p-8">
      <ComparisonChart 
        title="Comparación de Gastos"
        data={mockData}
        yAxisLabel="Monto ($)"
      />
    </div>
  );
}
