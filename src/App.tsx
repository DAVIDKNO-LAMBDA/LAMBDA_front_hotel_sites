/**
 * App.tsx - Componente Principal de la Aplicación
 * 
 * Este es el punto de entrada de la aplicación React.
 * Configura:
 * - QueryClient para react-query (manejo de datos asíncronos)
 * - Contextos globales (AuthContext, FilterContext)
 * - Rutas de la aplicación
 * - Componentes de UI globales (Toaster, Tooltip)
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AppLayout } from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Finanzas from "./pages/Finanzas";
import Ventas from "./pages/Ventas";
import Costos from "./pages/Costos";
import Reportes from "./pages/Reportes";
import Boletin from "./pages/Boletin";
import NotFound from "./pages/NotFound";

// Configuración del cliente de React Query
const queryClient = new QueryClient();

/**
 * ProtectedRoute - Componente para proteger rutas
 * Redirige al login si el usuario no está autenticado
 */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

/**
 * Componente principal de la aplicación
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* AuthProvider: Proporciona contexto de autenticación a toda la app */}
        <AuthProvider>
          {/* FilterProvider: Proporciona contexto de filtros globales */}
          <FilterProvider>
            <Routes>
              {/* Ruta pública de login */}
              <Route path="/login" element={<Login />} />
              
              {/* Rutas protegidas - requieren autenticación */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* Dashboard principal */}
                <Route index element={<Dashboard />} />
                
                {/* Página de Finanzas */}
                <Route path="finanzas" element={<Finanzas />} />
                
                {/* Página de Ventas (solo admin) */}
                <Route path="ventas" element={<Ventas />} />
                
                {/* Página de Costos (solo admin) */}
                <Route path="costos" element={<Costos />} />
                
                {/* Página de Reportes */}
                <Route path="reportes" element={<Reportes />} />
                
                {/* Página de Boletín */}
                <Route path="boletin" element={<Boletin />} />
              </Route>
              
              {/* Ruta 404 - Página no encontrada */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </FilterProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
