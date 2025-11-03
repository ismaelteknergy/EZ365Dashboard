import { AppSidebar } from '../app-sidebar';
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppSidebarExample() {
  const style = {
    "--sidebar-width": "15rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold">Contenido Principal</h2>
          <p className="text-muted-foreground mt-2">El sidebar muestra la navegación completa de EZ365</p>
        </div>
      </div>
    </SidebarProvider>
  );
}
