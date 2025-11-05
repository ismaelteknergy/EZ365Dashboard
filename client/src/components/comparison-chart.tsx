import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";
import type { ComparisonData } from "@shared/schema";

interface ComparisonChartProps {
  title: string;
  data: ComparisonData[];
  yAxisLabel?: string;
}

export function ComparisonChart({ title, data, yAxisLabel = "Monto ($)" }: ComparisonChartProps) {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
      'Período': item.period,
      'EZ365': item.ez365,
      'QuickBooks': item.quickbooks,
      'Diferencia': item.ez365 - item.quickbooks
    })));
    
    const workbook = XLSX.utils.book_new();
    // Sanitize sheet name (Excel doesn't allow: : \ / ? * [ ])
    const sheetName = title.replace(/[:\\/\?\*\[\]]/g, '');
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    XLSX.writeFile(workbook, `${title.replace(/[:\\/\?\*\[\]\s]/g, '_')}.xlsx`);
  };

  return (
    <Card data-testid={`card-${title.toLowerCase().replace(/ /g, '-')}`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleExport}
            data-testid="button-export-chart"
          >
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
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
