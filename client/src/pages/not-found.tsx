import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Página no encontrada</p>
        <Button asChild>
          <Link href="/dashboard/expenses">
            <Home className="w-4 h-4 mr-2" />
            Ir al Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
