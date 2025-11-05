import { 
  BarChart3, 
  FileText, 
  Users, 
  CreditCard, 
  Receipt, 
  DollarSign,
  FileBarChart,
  ChevronDown,
  Home,
  Calendar,
  FolderKanban,
  Package,
  ShoppingCart,
  UserCircle
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Executive",
    url: "/executive",
    icon: BarChart3,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Collections",
    url: "/collections",
    icon: CreditCard,
  },
  {
    title: "Operations",
    url: "/operations",
    icon: FolderKanban,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Estimates",
    url: "/estimates",
    icon: FileText,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: Receipt,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Package,
  },
  {
    title: "Purchasing",
    url: "/purchasing",
    icon: ShoppingCart,
  },
  {
    title: "Human Resources",
    url: "/hr",
    icon: UserCircle,
  },
  {
    title: "Items",
    url: "/items",
    icon: Package,
  },
];

const dashboardItems = [
  {
    title: "Executive",
    url: "/executive",
    icon: BarChart3,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Collections",
    url: "/collections",
    icon: CreditCard,
  },
  {
    title: "Operations",
    url: "/operations",
    icon: FolderKanban,
  },
];

const quickbooksItems = [
  {
    title: "Gastos",
    url: "/dashboard/quickbooks/expenses",
    icon: DollarSign,
  },
  {
    title: "Facturas",
    url: "/dashboard/quickbooks/invoices",
    icon: Receipt,
  },
  {
    title: "Pagos",
    url: "/dashboard/quickbooks/payments",
    icon: CreditCard,
  },
  {
    title: "Clientes",
    url: "/dashboard/quickbooks/customers",
    icon: Users,
  },
  {
    title: "Balance General",
    url: "/dashboard/quickbooks/balance-sheet",
    icon: FileBarChart,
  },
  {
    title: "Estado de Resultados",
    url: "/dashboard/quickbooks/income-statement",
    icon: FileText,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">EZ</span>
          </div>
          <span className="font-semibold text-lg">EZ365</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location === "/"} data-testid="link-home">
                  <Link href="/">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <Collapsible defaultOpen={location.startsWith('/dashboard') || dashboardItems.some(item => location === item.url)}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton data-testid="button-dashboard-toggle">
                      <BarChart3 className="w-4 h-4" />
                      <span>Dashboards</span>
                      <ChevronDown className="ml-auto w-4 h-4" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {dashboardItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild isActive={location === item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                            <Link href={item.url}>
                              <item.icon className="w-4 h-4" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      
                      <Collapsible defaultOpen={location.startsWith('/dashboard/quickbooks')}>
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="button-quickbooks-toggle">
                              <FileBarChart className="w-4 h-4" />
                              <span>QuickBooks</span>
                              <ChevronDown className="ml-auto w-4 h-4" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {quickbooksItems.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                  <SidebarMenuSubButton asChild isActive={location === item.url} data-testid={`link-qb-${item.title.toLowerCase().replace(/ /g, '-')}`}>
                                    <Link href={item.url}>
                                      <item.icon className="w-4 h-4" />
                                      <span>{item.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              
              {navigationItems.slice(4).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url} data-testid={`link-${item.title.toLowerCase().replace(/ /g, '-')}`}>
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
