import { CustomerComparisonTable } from "@/components/customer-comparison-table";
import { KpiCard } from "@/components/kpi-card";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCustomers = [
  { id: '1', name: 'Acme Corporation', email: 'contact@acme.com', ez365Id: 'EZ-001', qbId: 'QB-001', status: 'matched' as const, difference: undefined },
  { id: '2', name: 'Tech Solutions Inc', email: 'info@techsol.com', ez365Id: 'EZ-002', qbId: undefined, status: 'ez365_only' as const, difference: 'No existe en QB' },
  { id: '3', name: 'Global Industries', email: 'sales@global.com', ez365Id: 'EZ-003', qbId: 'QB-003', status: 'different' as const, difference: 'Dirección diferente' },
  { id: '4', name: 'Innovate Labs', email: 'hello@innovate.com', ez365Id: undefined, qbId: 'QB-004', status: 'qb_only' as const, difference: 'No existe en EZ365' },
  { id: '5', name: 'Prime Services', email: 'contact@prime.com', ez365Id: 'EZ-005', qbId: 'QB-005', status: 'matched' as const, difference: undefined },
  { id: '6', name: 'Blue Ocean Ltd', email: 'info@blueocean.com', ez365Id: 'EZ-006', qbId: 'QB-006', status: 'matched' as const, difference: undefined },
  { id: '7', name: 'Sunrise Enterprises', email: 'sales@sunrise.com', ez365Id: 'EZ-007', qbId: 'QB-007', status: 'different' as const, difference: 'Email diferente' },
  { id: '8', name: 'Metro Solutions', email: 'contact@metro.com', ez365Id: 'EZ-008', qbId: undefined, status: 'ez365_only' as const, difference: 'No existe en QB' },
  { id: '9', name: 'Peak Performance', email: 'hello@peak.com', ez365Id: 'EZ-009', qbId: 'QB-009', status: 'matched' as const, difference: undefined },
  { id: '10', name: 'Vertex Corp', email: 'info@vertex.com', ez365Id: undefined, qbId: 'QB-010', status: 'qb_only' as const, difference: 'No existe en EZ365' },
];

export default function CustomersPage() {
  const handleRefresh = () => {
    console.log('Refrescando datos de clientes');
  };

  const matched = mockCustomers.filter(c => c.status === 'matched').length;
  const ez365Only = mockCustomers.filter(c => c.status === 'ez365_only').length;
  const qbOnly = mockCustomers.filter(c => c.status === 'qb_only').length;
  const different = mockCustomers.filter(c => c.status === 'different').length;

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Comparación de Clientes</h1>
            <p className="text-muted-foreground mt-1">EZ365 vs QuickBooks</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh} data-testid="button-refresh-customers">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualizar
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard label="Total Clientes" value={mockCustomers.length.toString()} />
          <KpiCard label="Coinciden" value={matched.toString()} />
          <KpiCard label="Solo EZ365" value={ez365Only.toString()} />
          <KpiCard label="Diferencias" value={(qbOnly + different).toString()} />
        </div>

        <CustomerComparisonTable customers={mockCustomers} />
      </div>
    </div>
  );
}
