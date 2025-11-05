import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";
import type { BalanceSheetData, FinancialLineItem } from "@shared/schema";

interface BalanceSheetProps {
  data: BalanceSheetData;
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
        ${item.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </div>
  );
}

export function BalanceSheet({ data }: BalanceSheetProps) {
  const handleExport = () => {
    const excelData = [];
    
    excelData.push(['Balance General']);
    excelData.push([`Al ${data.asOfDate}`]);
    excelData.push([]);
    
    excelData.push(['ACTIVOS', '']);
    data.assets.forEach(item => {
      const indent = '  '.repeat(item.level);
      excelData.push([indent + item.label, item.amount]);
    });
    
    excelData.push([]);
    excelData.push(['PASIVOS', '']);
    data.liabilities.forEach(item => {
      const indent = '  '.repeat(item.level);
      excelData.push([indent + item.label, item.amount]);
    });
    
    excelData.push([]);
    excelData.push(['CAPITAL', '']);
    data.equity.forEach(item => {
      const indent = '  '.repeat(item.level);
      excelData.push([indent + item.label, item.amount]);
    });
    
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Balance General');
    
    XLSX.writeFile(workbook, 'Balance_General.xlsx');
  };

  return (
    <Card data-testid="card-balance-sheet">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">Balance General</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">Al {data.asOfDate}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleExport} data-testid="button-export-balance">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 pb-2 border-b">Activos</h3>
            {data.assets.map((item) => (
              <FinancialLine key={item.id} item={item} />
            ))}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 pb-2 border-b">Pasivos y Capital</h3>
            <div className="mb-6">
              <h4 className="font-medium text-base mb-2">Pasivos</h4>
              {data.liabilities.map((item) => (
                <FinancialLine key={item.id} item={item} />
              ))}
            </div>
            <div>
              <h4 className="font-medium text-base mb-2">Capital</h4>
              {data.equity.map((item) => (
                <FinancialLine key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
