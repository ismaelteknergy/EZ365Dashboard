import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ComparisonData } from "@shared/schema";

interface ComparisonChartProps {
  title: string;
  data: ComparisonData[];
  yAxisLabel?: string;
}

export function ComparisonChart({ title, data, yAxisLabel = "Monto ($)" }: ComparisonChartProps) {
  return (
    <Card data-testid={`card-${title.toLowerCase().replace(/ /g, '-')}`}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="period" 
              className="text-sm"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fill: 'hsl(var(--foreground))' }}
              label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
              labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
              itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
            />
            <Legend />
            <Bar dataKey="ez365" fill="hsl(var(--chart-1))" name="EZ365" radius={[4, 4, 0, 0]} />
            <Bar dataKey="quickbooks" fill="hsl(var(--chart-2))" name="QuickBooks" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
