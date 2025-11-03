import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  change?: number;
  trend?: 'up' | 'down';
}

export function KpiCard({ label, value, change, trend }: KpiCardProps) {
  return (
    <Card data-testid={`kpi-${label.toLowerCase().replace(/ /g, '-')}`}>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{label}</div>
        <div className="text-3xl font-bold font-mono">{value}</div>
        {change !== undefined && trend && (
          <div className={`flex items-center gap-1 mt-2 text-xs ${trend === 'up' ? 'text-chart-2' : 'text-destructive'}`}>
            {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
