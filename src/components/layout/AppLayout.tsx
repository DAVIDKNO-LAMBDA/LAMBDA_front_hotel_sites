/**
 * AppLayout - Layout Principal de la Aplicación
 * 
 * Este componente define la estructura general de la aplicación:
 * - Sidebar de navegación (colapsable)
 * - Header con filtros globales
 * - Área de contenido principal
 * - Información del usuario y logout
 * 
 * Usa el SidebarProvider de shadcn para manejar el estado del sidebar
 */

import React from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  DollarSign,
  TrendingUp,
  Receipt,
  BarChart3,
  LogOut,
  User,
  FileText,
} from 'lucide-react';
import { FilterBar } from '@/components/dashboard/FilterBar';

/**
 * Items de navegación del sidebar
 * Cada item tiene: título, URL, ícono y roles permitidos
 */
const navItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
    roles: ['investor', 'admin'], // Visible para ambos roles
  },
  {
    title: 'Finanzas',
    url: '/finanzas',
    icon: DollarSign,
    roles: ['investor', 'admin'],
  },
  {
    title: 'Ventas',
    url: '/ventas',
    icon: TrendingUp,
    roles: ['admin'], // Solo visible para administradores
  },
  {
    title: 'Costos',
    url: '/costos',
    icon: Receipt,
    roles: ['admin'],
  },
  {
    title: 'Reportes',
    url: '/reportes',
    icon: BarChart3,
    roles: ['investor', 'admin'],
  },
  {
    title: 'Boletín',
    url: '/boletin',
    icon: FileText,
    roles: ['investor', 'admin'],
  },
];

/**
 * Componente del Sidebar de navegación
 */
const AppSidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  /**
   * Filtrar items según el rol del usuario
   */
  const filteredNavItems = user
    ? navItems.filter((item) => item.roles.includes(user.role))
    : [];

  /**
   * Manejar logout
   */
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'} collapsible="icon">
      {/* Header del sidebar con logo y nombre */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-sidebar-primary" />
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">
                Hotel Sites
              </h2>
              <p className="text-xs text-sidebar-foreground/70">
                Business Intelligence
              </p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        {/* Grupo de navegación principal */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                          : 'hover:bg-sidebar-accent/50'
                      }
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Información del usuario y logout (fijo al fondo) */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          {!collapsed && user && (
            <div className="mb-3">
              <div className="flex items-center gap-2 text-sidebar-foreground">
                <User className="w-4 h-4" />
                <div className="text-sm">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-sidebar-foreground/70">
                    {user.role === 'investor' ? 'Inversionista' : 'Administrador'}
                  </p>
                </div>
              </div>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="w-4 h-4 mr-2" />
            {!collapsed && 'Cerrar Sesión'}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

/**
 * Componente AppLayout (principal)
 */
export const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar de navegación */}
        <AppSidebar />

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Header con filtros */}
          <header className="border-b bg-background sticky top-0 z-40">
            <div className="flex items-center gap-4 p-4">
              {/* Botón para colapsar/expandir sidebar */}
              <SidebarTrigger className="text-foreground" />

              {/* Filtros globales */}
              <div className="flex-1">
                <FilterBar />
              </div>
            </div>
          </header>

          {/* Área de contenido (renderiza las páginas) */}
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
