import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import NotFound from "@/pages/not-found";
import ExpensesPage from "@/pages/dashboard/expenses";
import InvoicesPage from "@/pages/dashboard/invoices";
import PaymentsPage from "@/pages/dashboard/payments";
import CustomersPage from "@/pages/dashboard/customers";
import BalanceSheetPage from "@/pages/dashboard/balance-sheet";
import IncomeStatementPage from "@/pages/dashboard/income-statement";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/dashboard/quickbooks/expenses" />
      </Route>
      <Route path="/dashboard/quickbooks/expenses" component={ExpensesPage} />
      <Route path="/dashboard/quickbooks/invoices" component={InvoicesPage} />
      <Route path="/dashboard/quickbooks/payments" component={PaymentsPage} />
      <Route path="/dashboard/quickbooks/customers" component={CustomersPage} />
      <Route path="/dashboard/quickbooks/balance-sheet" component={BalanceSheetPage} />
      <Route path="/dashboard/quickbooks/income-statement" component={IncomeStatementPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "15rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between h-14 px-6 border-b border-border">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-hidden">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
