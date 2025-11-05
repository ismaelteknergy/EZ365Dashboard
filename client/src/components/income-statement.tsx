import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";
import type { IncomeStatementData, FinancialLineItem } from "@shared/schema";

interface IncomeStatementProps {
  data: IncomeStatementData;
}

function FinancialLine({ item }: { item: FinancialLineItem }) {
  const paddingClass = `pl-${item.level * 4}`;
  
  return (
    <div 
      className={`flex justify-between py-2 ${item.isTotal ? 'border-t-2 border-border font-semibold' : item.isSubtotal ? 'border-t border-border font-medium' : ''}`}
      data-testid={`line-${item.id}`}
    >
      <span className={`${paddingClass} ${item.isTotal ? 'font-bold' : ''}`}>
        {item.label}
      </span>
      <span className="font-mono">
        {item.amount < 0 ? '(' : ''}${Math.abs(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.amount < 0 ? ')' : ''}
      </span>
    </div>
  );
}

export function IncomeStatement({ data }: IncomeStatementProps) {
  const handleExport = () => {
    const excelData = [];
    
    excelData.push(['Estado de Resultados']);
    excelData.push([data.period]);
    excelData.push([]);
    
    excelData.push(['INGRESOS', '']);
    data.revenue.forEach(item => {
      const indent = '  '.repeat(item.level);
      excelData.push([indent + item.label, item.amount]);
    });
    
    excelData.push([]);
    excelData.push(['GASTOS', '']);
    data.expenses.forEach(item => {
      const indent = '  '.repeat(item.level);
      excelData.push([indent + item.label, item.amount]);
    });
    
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Estado de Resultados');
    
    XLSX.writeFile(workbook, 'Estado_de_Resultados.xlsx');
  };

  return (
    <Card data-testid="card-income-statement">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">Estado de Resultados</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">{data.period}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleExport} data-testid="button-export-income">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-2 border-b">Ingresos</h3>
          {data.revenue.map((item) => (
            <FinancialLine key={item.id} item={item} />
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-2 border-b">Gastos</h3>
          {data.expenses.map((item) => (
            <FinancialLine key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
