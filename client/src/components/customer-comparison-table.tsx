import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";
import type { CustomerData } from "@shared/schema";
import { useState } from "react";

interface CustomerComparisonTableProps {
  customers: CustomerData[];
}

export function CustomerComparisonTable({ customers }: CustomerComparisonTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: CustomerData['status']) => {
    switch (status) {
      case 'matched':
        return <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">Coincide</Badge>;
      case 'ez365_only':
        return <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 border-chart-1/20">Solo EZ365</Badge>;
      case 'qb_only':
        return <Badge variant="secondary" className="bg-chart-3/10 text-chart-3 border-chart-3/20">Solo QB</Badge>;
      case 'different':
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">Diferente</Badge>;
    }
  };

  return (
    <Card data-testid="card-customer-comparison">
      <CardHeader>
        <CardTitle className="text-xl">Comparación de Clientes</CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search-customers"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>ID EZ365</TableHead>
                <TableHead>ID QuickBooks</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Diferencia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id} data-testid={`row-customer-${customer.id}`}>
                  <TableCell>
                    {customer.status === 'matched' ? (
                      <CheckCircle2 className="w-4 h-4 text-chart-2" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium" data-testid={`text-customer-name-${customer.id}`}>{customer.name}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.email}</TableCell>
                  <TableCell className="font-mono text-sm">{customer.ez365Id || '-'}</TableCell>
                  <TableCell className="font-mono text-sm">{customer.qbId || '-'}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{customer.difference || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
