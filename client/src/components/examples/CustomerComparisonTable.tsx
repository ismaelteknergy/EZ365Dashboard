import { CustomerComparisonTable } from '../customer-comparison-table';

const mockCustomers = [
  { id: '1', name: 'Acme Corporation', email: 'contact@acme.com', ez365Id: 'EZ-001', qbId: 'QB-001', status: 'matched' as const, difference: undefined },
  { id: '2', name: 'Tech Solutions Inc', email: 'info@techsol.com', ez365Id: 'EZ-002', qbId: undefined, status: 'ez365_only' as const, difference: 'No existe en QB' },
  { id: '3', name: 'Global Industries', email: 'sales@global.com', ez365Id: 'EZ-003', qbId: 'QB-003', status: 'different' as const, difference: 'Dirección diferente' },
  { id: '4', name: 'Innovate Labs', email: 'hello@innovate.com', ez365Id: undefined, qbId: 'QB-004', status: 'qb_only' as const, difference: 'No existe en EZ365' },
  { id: '5', name: 'Prime Services', email: 'contact@prime.com', ez365Id: 'EZ-005', qbId: 'QB-005', status: 'matched' as const, difference: undefined },
];

export default function CustomerComparisonTableExample() {
  return (
    <div className="p-8">
      <CustomerComparisonTable customers={mockCustomers} />
    </div>
  );
}
