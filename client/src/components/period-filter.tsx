import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface PeriodFilterProps {
  value: 'month' | 'year';
  onChange: (value: 'month' | 'year') => void;
}

export function PeriodFilter({ value, onChange }: PeriodFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1 border rounded-md p-1">
        <Button
          variant={value === 'month' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onChange('month')}
          className="h-8"
          data-testid="button-filter-month"
        >
          Mes
        </Button>
        <Button
          variant={value === 'year' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onChange('year')}
          className="h-8"
          data-testid="button-filter-year"
        >
          Año
        </Button>
      </div>
    </div>
  );
}
